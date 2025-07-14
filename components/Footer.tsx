import Link from 'next/link'
import { Fish, Heart, Github, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-warm-gray border-t border-gray-100">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-natural-mint to-stream-blue rounded-lg flex items-center justify-center">
                <Fish className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-primary-text">小物之美</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              发现微小世界的美好，开启你的小物钓之旅
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-text">快速导航</h3>
            <div className="space-y-2">
              <Link href="/beginners" className="block text-sm text-gray-600 hover:text-natural-mint transition-colors">
                新手必读
              </Link>
              <Link href="/equipment" className="block text-sm text-gray-600 hover:text-natural-mint transition-colors">
                装备库
              </Link>
              <Link href="/techniques" className="block text-sm text-gray-600 hover:text-natural-mint transition-colors">
                技巧堂
              </Link>
              <Link href="/fish-guide" className="block text-sm text-gray-600 hover:text-natural-mint transition-colors">
                鱼种图鉴
              </Link>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-text">社区</h3>
            <div className="space-y-2">
              <Link href="/community" className="block text-sm text-gray-600 hover:text-natural-mint transition-colors">
                玩家社区
              </Link>
              <Link href="/about" className="block text-sm text-gray-600 hover:text-natural-mint transition-colors">
                关于我们
              </Link>
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-natural-mint transition-colors">
                联系我们
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary-text">联系我们</h3>
            <div className="space-y-2">
              <a 
                href="mailto:hello@microfishing.com" 
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-natural-mint transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@microfishing.com</span>
              </a>
              <a 
                href="https://github.com/micro-fishing-hub" 
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-natural-mint transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            © 2024 小物之美. 保留所有权利.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-fish-crimson" />
            <span>for nature lovers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 