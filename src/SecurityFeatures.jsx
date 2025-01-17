import { useEffect } from "react";
import { toast } from "react-toastify";

const SecurityFeatures = () => {
  useEffect(() => {
   
    const handleCopy = (event) => {
      event.clipboardData.setData("text/plain", "Copying is restricted!");
      event.preventDefault();
      toast.warning("Copying is disabled on this site.");
    };

 
    const handleContextMenu = (event) => {
      event.preventDefault();
      toast.error("Right-click is disabled for security reasons.");
    };

 
    const handleKeyDown = (event) => {
      if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && event.key === "I") || 
        (event.ctrlKey && event.shiftKey && event.key === "C") || 
        (event.ctrlKey && event.shiftKey && event.key === "J") || 
        (event.ctrlKey && event.key === "U") 
      ) {
        event.preventDefault();
        toast.error("Developer tools access is restricted.");
      }
    };

   
    // const detectDevTools = () => {
    //   const devtools = new Function("debugger;");
    //   try {
    //     devtools();
    //   } catch (e) {
    //     toast.error("Developer tools are detected. Actions are restricted!");
       
    //   }
    // };

    // const devToolsInterval = setInterval(detectDevTools, 1000);

 
    document.addEventListener("copy", handleCopy);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

   
    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      // clearInterval(devToolsInterval);
    };
  }, []);

  return null; 
};

export default SecurityFeatures;
