import Link from 'next/link'
import { ArrowLeft, Users, MessageCircle, Heart } from 'lucide-react'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-primary-warm-gray">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-natural-mint hover:text-fish-gem-blue transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-24 h-24 bg-gradient-to-br from-fish-gem-blue to-fish-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
            玩家社区
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            与其他小物钓爱好者分享经验，展示你的渔获，交流技巧心得
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <MessageCircle className="w-8 h-8 text-natural-mint" />
              <span className="text-2xl font-semibold text-primary-text">社区功能开发中</span>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              我们正在为小物钓爱好者打造一个温馨的社区空间。在这里，你可以：
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-natural-mint to-natural-sage rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-primary-text mb-2">经验分享</h3>
                <p className="text-sm text-gray-600">分享你的钓鱼心得和技巧</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-fish-gem-blue to-stream-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-primary-text mb-2">渔获展示</h3>
                <p className="text-sm text-gray-600">展示你的精彩渔获照片</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-fish-vibrant-orange to-earth-beige rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-primary-text mb-2">同城约钓</h3>
                <p className="text-sm text-gray-600">找到附近的钓友一起出钓</p>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm">
              社区功能即将上线，敬请期待！
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 