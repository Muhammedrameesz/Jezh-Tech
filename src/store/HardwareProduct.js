import { create } from "zustand";

const HardwareDetails = create((set) => ({
  hardwareProductsDetails: {},
  
  setHardwareProductsDetails: (data) => set({ hardwareProductsDetails: data }),

  resetHardwareProductsDetails: () => set({ hardwareProductsDetails: {} }),
}));

export default HardwareDetails;
