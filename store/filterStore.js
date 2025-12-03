import { create } from "zustand";

export const useFilterStore = create((set) => ({
    selectedFilters: [],
    priceRange: [0, 10000],

    toggleFilter: (value, checked) =>
        set((state) => ({
            selectedFilters: checked
                ? [...state.selectedFilters, value]
                : state.selectedFilters.filter((item) => item !== value)
        })),

    setPriceRange: (range) => set({ priceRange: range }),
    

    clearFilters: () => set({
        selectedFilters: [],
        priceRange: [0, 10000],
    })
}));
