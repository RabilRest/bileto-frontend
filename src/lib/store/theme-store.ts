import { create } from "zustand";

type ThemeState = {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: false,
  toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
  setTheme: (dark) => set({ isDark: dark }),
}));
