import { create } from "zustand";

const useStore = create((set) => ({
  headerVisible: false,
  setHeaderVisible: (visible: boolean) => set({ headerVisible: visible }),
  footerVisible: false,
  setFooterVisible: (visible: boolean) => set({ footerVisible: visible }),
}));

export default useStore;
