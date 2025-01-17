import { useEffect } from "react";

const SecurityFeatures = () => {
  useEffect(() => {
    // Prevent copying content
    const handleCopy = (event) => {
      event.clipboardData.setData("text/plain", "Restricted to paste contents");
      event.preventDefault();
    };

    // Prevent right-click
    const handleContextMenu = (event) => {
      event.preventDefault();
      alert("Right-click is disabled!");
    };

    // Prevent opening developer tools
    const handleKeyDown = (event) => {
      if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
        alert("Access to developer tools is restricted!");
      }
    };

    // Add event listeners
    document.addEventListener("copy", handleCopy);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null; // No visual output
};

export default SecurityFeatures;
