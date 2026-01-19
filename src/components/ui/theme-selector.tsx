'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { AVAILABLE_THEMES, type ThemeVariant } from '@/config/themes';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeSelectorProps {
  currentTheme: ThemeVariant;
  onThemeChange: (theme: ThemeVariant) => void;
}

export function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const themes = Object.values(AVAILABLE_THEMES);

  return (
    <div className="fixed right-2 sm:right-4 top-20 sm:top-24 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-background border-2 border-primary/20 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon icon="mdi:palette" className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
        <span className="font-semibold text-xs sm:text-sm hidden sm:inline">Themes</span>
        <Icon 
          icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"} 
          className="h-3 w-3 sm:h-4 sm:w-4" 
        />
      </motion.button>

      {/* Theme Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-12 sm:top-16 w-72 sm:w-80 max-h-[80vh] overflow-y-auto bg-background border-2 border-primary/20 rounded-2xl shadow-2xl p-3 sm:p-4 space-y-2"
          >
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 sm:mb-3 px-2">
              Choose a Theme
            </div>
            {themes.map((theme) => (
              <motion.button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all ${
                  currentTheme === theme.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary/10 hover:bg-secondary/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 pr-2">
                    <div className="font-bold text-xs sm:text-sm mb-1">{theme.name}</div>
                    <div className={`text-[10px] sm:text-xs line-clamp-2 ${
                      currentTheme === theme.id 
                        ? 'text-primary-foreground/80' 
                        : 'text-muted-foreground'
                    }`}>
                      {theme.description}
                    </div>
                  </div>
                  {currentTheme === theme.id && (
                    <Icon icon="mdi:check-circle" className="h-5 w-5 ml-2" />
                  )}
                </div>
                
                {/* Color Preview */}
                <div className="flex gap-1 sm:gap-2 mt-2 sm:mt-3">
                  <div 
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg border-2 border-white/20"
                    style={{ background: theme.colors.primary }}
                  />
                  <div 
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg border-2 border-white/20"
                    style={{ background: theme.colors.secondary }}
                  />
                  <div 
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg border-2 border-white/20"
                    style={{ background: theme.colors.accent }}
                  />
                  <div 
                    className="flex-1 h-6 sm:h-8 rounded-lg border-2 border-white/20"
                    style={{ background: theme.colors.gradient }}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
