'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Fish, BookOpen, Package, Users, Target } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { name: '首页', href: '/', icon: Fish },
    { name: '新手必读', href: '/beginners', icon: BookOpen },
    { name: '装备库', href: '/equipment', icon: Package },
    { name: '技巧堂', href: '/techniques', icon: Target },
    { name: '鱼种图鉴', href: '/fish-guide', icon: Fish },
    { name: '玩家社区', href: '/community', icon: Users },
  ]

  // 处理键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  // 处理点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
      role="navigation"
      aria-label="主导航"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group touch-target"
            aria-label="返回首页"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-8 h-8 bg-gradient-to-br from-natural-mint to-stream-blue rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <Fish className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-semibold text-primary-text group-hover:text-natural-mint transition-colors">
              小物之美
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-primary-text hover:text-natural-mint transition-colors duration-300 group touch-target"
                role="menuitem"
                aria-label={`导航到${item.name}页面`}
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors touch-target"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-text" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-primary-text" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm"
              id="mobile-menu"
              role="menu"
              aria-label="移动端导航菜单"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-natural-mint/10 transition-colors touch-target"
                    role="menuitem"
                    tabIndex={0}
                    aria-label={`导航到${item.name}页面`}
                  >
                    <item.icon className="w-5 h-5 text-natural-mint" aria-hidden="true" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation 