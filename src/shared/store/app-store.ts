import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'
import { useEffect } from 'react'
import type { Theme, Language, AppState, AppActions } from '../types'
import { THEME_CONFIG, LANGUAGE_CONFIG } from '../constants'

interface AppStore extends AppState, AppActions {}

// Helper to detect system theme
const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Helper to detect browser language
const getBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return LANGUAGE_CONFIG.defaultLanguage
  
  const browserLang = navigator.language.split('-')[0] as Language
  return LANGUAGE_CONFIG.supportedLanguages.includes(browserLang) 
    ? browserLang 
    : LANGUAGE_CONFIG.defaultLanguage
}

// Helper to resolve theme
const resolveTheme = (theme: Theme): 'light' | 'dark' => {
  if (theme === 'system') return getSystemTheme()
  return theme
}

// Helper to apply theme to document
const applyTheme = (theme: 'light' | 'dark') => {
  if (typeof document === 'undefined') return
  
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
  
  // Update meta theme-color
  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      'content', 
      theme === 'dark' ? '#0a0a0f' : '#ffffff'
    )
  }
}

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        theme: THEME_CONFIG.defaultTheme,
        language: LANGUAGE_CONFIG.defaultLanguage,
        isMenuOpen: false,
        isLoading: false,
        error: null,

        // Theme actions
        setTheme: (theme: Theme) => {
          const resolvedTheme = resolveTheme(theme)
          applyTheme(resolvedTheme)
          
          set({ theme }, false, 'setTheme')
        },

        // Language actions
        setLanguage: (language: Language) => {
          set({ language }, false, 'setLanguage')
        },

        // Menu actions
        toggleMenu: () => {
          const { isMenuOpen } = get()
          set({ isMenuOpen: !isMenuOpen }, false, 'toggleMenu')
        },

        setMenuOpen: (open: boolean) => {
          set({ isMenuOpen: open }, false, 'setMenuOpen')
        },

        // Loading actions
        setLoading: (loading: boolean) => {
          set({ isLoading: loading }, false, 'setLoading')
        },

        // Error actions
        setError: (error: string | null) => {
          set({ error }, false, 'setError')
        },
      }),
      {
        name: 'portfolio-store',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          theme: state.theme,
          language: state.language,
        }),
        onRehydrateStorage: () => (state) => {
          if (state) {
            // Initialize theme on hydration
            const resolvedTheme = resolveTheme(state.theme)
            applyTheme(resolvedTheme)
            
            // Auto-detect language if not set
            if (!state.language) {
              state.language = getBrowserLanguage()
            }
          }
        },
      }
    ),
    {
      name: 'portfolio-store',
      enabled: import.meta.env.DEV,
    }
  )
)

// Selectors for better performance
export const useTheme = () => useAppStore((state) => state.theme)
export const useLanguage = () => useAppStore((state) => state.language)
export const useIsMenuOpen = () => useAppStore((state) => state.isMenuOpen)
export const useIsLoading = () => useAppStore((state) => state.isLoading)
export const useError = () => useAppStore((state) => state.error)

// Actions selectors
export const useThemeActions = () => useAppStore((state) => ({
  setTheme: state.setTheme,
}))

export const useLanguageActions = () => useAppStore((state) => ({
  setLanguage: state.setLanguage,
}))

export const useMenuActions = () => useAppStore((state) => ({
  toggleMenu: state.toggleMenu,
  setMenuOpen: state.setMenuOpen,
}))

export const useAppActions = () => useAppStore((state) => ({
  setLoading: state.setLoading,
  setError: state.setError,
}))

// Computed selectors
export const useResolvedTheme = () => {
  const theme = useTheme()
  return resolveTheme(theme)
}

// System theme listener hook
export const useSystemThemeListener = () => {
  const { theme, setTheme } = useAppStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }))

  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        const resolvedTheme = resolveTheme('system')
        applyTheme(resolvedTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, setTheme])
}

// Initialize theme on app start
export const initializeTheme = () => {
  const { theme } = useAppStore.getState()
  const resolvedTheme = resolveTheme(theme)
  applyTheme(resolvedTheme)
}
