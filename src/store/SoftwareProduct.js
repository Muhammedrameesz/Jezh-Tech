import { create } from "zustand";

const SoftwareDetails = create((set) => ({
  softwareProductsDetails: {},
  setsoftwareProductsDetails: (data) => set({ softwareProductsDetails: data }),
}));

export default SoftwareDetails;
