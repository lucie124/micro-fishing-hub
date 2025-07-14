'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface AccessibilityContextType {
  isKeyboardNavigation: boolean
  setKeyboardNavigation: (value: boolean) => void
  announceToScreenReader: (message: string) => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}

interface AccessibilityProviderProps {
  children: React.ReactNode
}

export const AccessibilityProvider = ({ children }: AccessibilityProviderProps) => {
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false)

  // 检测键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardNavigation(true)
      }
    }

    const handleMouseDown = () => {
      setIsKeyboardNavigation(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  // 屏幕阅读器公告功能
  const announceToScreenReader = (message: string) => {
    // 创建或获取现有的公告元素
    let announcement = document.getElementById('screen-reader-announcement')
    if (!announcement) {
      announcement = document.createElement('div')
      announcement.id = 'screen-reader-announcement'
      announcement.setAttribute('aria-live', 'polite')
      announcement.setAttribute('aria-atomic', 'true')
      announcement.className = 'sr-only'
      document.body.appendChild(announcement)
    }

    // 更新公告内容
    announcement.textContent = message
  }

  const value = {
    isKeyboardNavigation,
    setKeyboardNavigation: setIsKeyboardNavigation,
    announceToScreenReader,
  }

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  )
}

// 可访问性按钮组件
interface AccessibleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  'aria-label'?: string
  'aria-describedby'?: string
  'aria-expanded'?: boolean
  'aria-pressed'?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const AccessibleButton = ({
  children,
  onClick,
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  'aria-expanded': ariaExpanded,
  'aria-pressed': ariaPressed,
  type = 'button',
  ...props
}: AccessibleButtonProps) => {
  const { announceToScreenReader } = useAccessibility()

  const handleClick = () => {
    if (onClick) {
      onClick()
      // 如果有aria-label，向屏幕阅读器公告
      if (ariaLabel) {
        announceToScreenReader(`${ariaLabel} 已激活`)
      }
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`touch-target ${className}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-expanded={ariaExpanded}
      aria-pressed={ariaPressed}
      {...props}
    >
      {children}
    </button>
  )
}

// 可访问性链接组件
interface AccessibleLinkProps {
  children: React.ReactNode
  href: string
  className?: string
  'aria-label'?: string
  'aria-describedby'?: string
  external?: boolean
}

export const AccessibleLink = ({
  children,
  href,
  className = '',
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  external = false,
  ...props
}: AccessibleLinkProps) => {
  const { announceToScreenReader } = useAccessibility()

  const handleClick = () => {
    if (ariaLabel) {
      announceToScreenReader(`正在导航到 ${ariaLabel}`)
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`link-accessible touch-target ${className}`}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      {...(external && {
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `${ariaLabel || '链接'} (在新窗口打开)`,
      })}
      {...props}
    >
      {children}
    </a>
  )
}

// 可访问性图片组件
interface AccessibleImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  decorative?: boolean
}

export const AccessibleImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  decorative = false,
  ...props
}: AccessibleImageProps) => {
  return (
    <img
      src={src}
      alt={decorative ? '' : alt}
      className={className}
      width={width}
      height={height}
      {...(decorative && { 'aria-hidden': 'true' })}
      {...props}
    />
  )
}

// 可访问性标题组件
interface AccessibleHeadingProps {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  id?: string
}

export const AccessibleHeading = ({
  children,
  level,
  className = '',
  id,
  ...props
}: AccessibleHeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag
      className={className}
      id={id}
      {...props}
    >
      {children}
    </Tag>
  )
} 