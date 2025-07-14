/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主色调 - 提升对比度
        'primary': {
          'white': '#FFFFFF',
          'warm-gray': '#F8F8F6',
          'text': '#1F2937', // 更深的文本颜色，提升对比度
        },
        // 辅助色 - 确保足够对比度
        'natural': {
          'mint': '#A8D8B9',
          'sage': '#B2C2A5',
        },
        'stream': {
          'blue': '#A1CCD1',
          'light': '#87CEEB',
        },
        'earth': {
          'beige': '#D2B48C',
        },
        // 点缀色 - 鱼之色 - 确保高对比度
        'fish': {
          'gem-blue': '#2563EB', // 更深的蓝色，提升对比度
          'vibrant-orange': '#EA580C', // 更深的橙色，提升对比度
          'crimson': '#DC2626', // 更深的红色，提升对比度
        },
        // 新增accessibility友好的颜色
        'accessible': {
          'text-primary': '#1F2937',
          'text-secondary': '#374151',
          'text-tertiary': '#6B7280',
          'background': '#FFFFFF',
          'background-secondary': '#F9FAFB',
          'border': '#E5E7EB',
          'focus': '#2563EB',
        }
      },
      fontFamily: {
        'sans': ['Noto Sans SC', 'PingFang SC', 'system-ui', 'sans-serif'],
        'serif': ['Source Han Serif', 'Noto Serif SC', 'serif'],
        'display': ['Lato', 'Nunito', 'Quicksand', 'sans-serif'],
      },
      fontSize: {
        'body': ['16px', { lineHeight: '1.6' }],
        'body-lg': ['18px', { lineHeight: '1.8' }],
        // 确保字体大小符合accessibility要求
        'xs': ['0.75rem', { lineHeight: '1.4' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // 添加accessibility相关的配置
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      outline: {
        'focus': '2px solid #2563EB',
        'focus-offset': '2px',
      },
      // 添加自定义阴影配置
      boxShadow: {
        'text-dark': '0 2px 4px rgba(0,0,0,0.8)',
        'text-darker': '0 4px 8px rgba(0,0,0,0.9)',
        'button': '0 4px 12px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [
    // 添加accessibility插件
    function({ addUtilities }) {
      const newUtilities = {
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        },
        '.focus-visible': {
          outline: '2px solid #2563EB',
          outlineOffset: '2px',
        },
        '.touch-target': {
          minHeight: '44px',
          minWidth: '44px',
        },
        '.text-high-contrast': {
          color: '#1F2937',
        },
        '.text-medium-contrast': {
          color: '#374151',
        },
        '.text-low-contrast': {
          color: '#6B7280',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 