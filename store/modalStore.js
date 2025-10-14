import { create } from 'zustand';

export const useModalStore = create((set) => {
  const closeAll = () =>
    set({
      isSearchOpen: false,
      isHamOpen: false,
      isEnquireOpen: false,
      isVideoOpen: false,
      isLoginOpen: false,
      isSignUpOpen: false,
      isEmbroideryOpen: false,
      isEmbroideryGuideOpen: false,
      isAddressOpen: false,
      isPassChangeOpen: false,
      isFilterOpen: false,
      isSearchFlightsPop: false
    });

  return {
    isSearchOpen: false,
    isHamOpen: false,
    isEnquireOpen: false,
    isVideoOpen: false,
    isLoginOpen: false,
    isSignUpOpen: false,
    isEmbroideryOpen: false,
    isEmbroideryGuideOpen: false,
    isAddressOpen: false,
    isPassChangeOpen: false,
    isFilterOpen: false,
    isSearchFlightsPop: false,

    openSearch: () => {
      closeAll();
      set({ isSearchOpen: true });
    },
    closeSearch: () => set({ isSearchOpen: false }),

    openSearchFlightsPop: () => {
      closeAll();
      set({ isSearchFlightsPop: true });
    },
    closeSearchFlightsPop: () => set({ isSearchFlightsPop: false }),

    openHam: () => {
      closeAll();
      set({ isHamOpen: true });
    },
    closeHam: () => set({ isHamOpen: false }),

    openEnquire: () => {
      closeAll();
      set({ isEnquireOpen: true });
    },
    closeEnquire: () => set({ isEnquireOpen: false }),

    openVideo: () => {
      closeAll();
      set({ isVideoOpen: true });
    },
    closeVideo: () => set({ isVideoOpen: false }),

    openLogin: () => {
      closeAll();
      set({ isLoginOpen: true });
    },
    closeLogin: () => set({ isLoginOpen: false }),

    openSignUp: () => {
      closeAll();
      set({ isSignUpOpen: true });
    },
    closeSignUp: () => set({ isSignUpOpen: false }),

    openEmbroidery: () => {
      closeAll();
      set({ isEmbroideryOpen: true });
    },
    closeEmbroidery: () => set({ isEmbroideryOpen: false }),

    openEmbroideryGuide: () => {
      set({ isEmbroideryGuideOpen: true });
    },
    closeEmbroideryGuide: () => set({ isEmbroideryGuideOpen: false }),

    openAddress: () => {
      closeAll();
      set({ isAddressOpen: true });
    },
    closeAddress: () => set({ isAddressOpen: false }),

    openPassChange: () => {
      closeAll();
      set({ isPassChangeOpen: true });
    },
    closePassChange: () => set({ isPassChangeOpen: false }),

    openFilter: () => {
      closeAll();
      set({ isFilterOpen: true });
    },
    closeFilter: () => set({ isFilterOpen: false }),

    closeAll,
  };
});
