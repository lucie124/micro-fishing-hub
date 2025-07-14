import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AccessibilityProvider } from '@/components/AccessibilityProvider'

export const metadata: Metadata = {
  title: '小物之美 - 发现微小世界的美好',
  description: '专为小物钓新手打造的，集美学、教学与社区于一体的线上指南。发现微小世界的美好，开启你的小物钓之旅。',
  keywords: '小物钓, 微钓, 新手入门, 钓鱼技巧, 自然, 治愈',
  authors: [{ name: '小物之美团队' }],
  viewport: 'width=device-width, initial-scale=1',
  // 添加accessibility相关的元数据
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '小物之美 - 发现微小世界的美好',
    description: '专为小物钓新手打造的，集美学、教学与社区于一体的线上指南。',
    type: 'website',
    locale: 'zh_CN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-primary-white">
        <AccessibilityProvider>
          <Navigation />
          
          <main id="main-content" className="pt-16" role="main" tabIndex={-1}>
            {children}
          </main>
          
          <Footer />
          
          {/* 添加键盘导航支持 */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // 确保焦点管理
                document.addEventListener('keydown', function(e) {
                  if (e.key === 'Tab') {
                    document.body.classList.add('keyboard-navigation');
                  }
                });
                
                document.addEventListener('mousedown', function() {
                  document.body.classList.remove('keyboard-navigation');
                });
                
                // 为所有交互元素添加焦点管理
                document.addEventListener('DOMContentLoaded', function() {
                  const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
                  interactiveElements.forEach(element => {
                    element.addEventListener('focus', function() {
                      this.classList.add('focus-visible');
                    });
                    element.addEventListener('blur', function() {
                      this.classList.remove('focus-visible');
                    });
                  });
                });
              `,
            }}
          />
        </AccessibilityProvider>
      </body>
    </html>
  )
} 