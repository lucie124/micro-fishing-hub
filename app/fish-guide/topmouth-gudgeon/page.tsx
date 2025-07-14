import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Fish, Star, Ruler, Palette, Waves, Heart, MapPin, Utensils, Target, Clock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '麦穗鱼 - 鱼种图鉴 - 小物之美',
  description: '小物钓世界的"迎宾员"，生命力顽强，好奇心重',
}

const TopmouthGudgeonPage = () => {
  const fishData = {
    name: '麦穗鱼',
    scientificName: 'Pseudorasbora parva',
    aliases: '麦老师、嘎牙子、柳根子',
    difficulty: 1,
    size: '5-8 cm',
    peakBeauty: '全年无休 (主打一个朴实)',
    waterLayer: '全水层',
    tags: ['原生鱼', '小型鱼', '极其常见', '新手教练', '贪吃'],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }

  const renderStars = (difficulty: number) => {
    return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty)
  }

  return (
    <div className="min-h-screen bg-primary-warm-gray">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-8">
          <Link href="/fish-guide" className="inline-flex items-center space-x-2 text-natural-mint hover:text-fish-gem-blue transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>返回图鉴</span>
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-fish-gem-blue to-fish-vibrant-orange rounded-lg flex items-center justify-center">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-text">{fishData.name}</h1>
              <p className="text-gray-600">{fishData.scientificName} | {fishData.aliases}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Visual */}
          <div className="lg:col-span-1">
            {/* Main Image */}
            <div className="relative h-80 rounded-xl overflow-hidden mb-6">
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${fishData.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Core Data Card */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 mb-6">
              <h3 className="text-lg font-semibold text-primary-text mb-4">核心数据</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <div>
                    <span className="text-sm text-gray-600">垂钓难度</span>
                    <div className="text-lg font-semibold text-fish-gem-blue">
                      {renderStars(fishData.difficulty)}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Ruler className="w-5 h-5 text-natural-mint" />
                  <div>
                    <span className="text-sm text-gray-600">常见体长</span>
                    <div className="text-lg font-semibold text-primary-text">{fishData.size}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Palette className="w-5 h-5 text-fish-vibrant-orange" />
                  <div>
                    <span className="text-sm text-gray-600">颜值巅峰</span>
                    <div className="text-lg font-semibold text-primary-text">{fishData.peakBeauty}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Waves className="w-5 h-5 text-stream-blue" />
                  <div>
                    <span className="text-sm text-gray-600">出没水层</span>
                    <div className="text-lg font-semibold text-primary-text">{fishData.waterLayer}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-primary-text mb-4">身份标签</h3>
              <div className="flex flex-wrap gap-2">
                {fishData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-natural-mint/20 text-natural-mint rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-primary-text mb-6">关于它</h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  如果你第一次玩小物钓，那么最先和你打招呼的，99%是它——"麦老师"。麦穗鱼是国内最常见的小型鱼之一，生命力顽强，好奇心重，而且极其贪吃。
                </p>
                <p>
                  虽然它没有华丽的外表，但它清晰有力的咬钩信号，是帮助新手建立信心的最佳"陪练"。它们总是成群结队地游动，对任何落入水中的食物都充满好奇，这种"来者不拒"的性格让它们成为了小物钓入门的最佳选择。
                </p>
              </div>
            </div>

            {/* Habitat Section */}
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-stream-blue" />
                <h2 className="text-2xl font-bold text-primary-text">藏在哪里？</h2>
              </div>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p>
                  几乎所有水体。池塘、湖泊、溪流、河道、甚至公园的景观水池里都有它的身影。它们对水质要求不高，哪里有吃的，它们就在哪里。
                </p>
                <p className="mt-4">
                  它们特别喜欢在水草丛生的区域活动，也经常在岸边浅水区觅食。由于适应性强，它们能在各种环境中生存，这也让它们成为了最容易被新手钓到的鱼种。
                </p>
              </div>
            </div>

            {/* Diet Section */}
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <Utensils className="w-6 h-6 text-fish-vibrant-orange" />
                <h2 className="text-2xl font-bold text-primary-text">爱吃什么？</h2>
              </div>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p>
                  不挑食的典范。小到藻类、碎屑，大到蚯蚓、商品饵，任何能吃的东西它都想尝一尝。这种"吃货"性格让它们成为了最容易钓到的鱼种之一。
                </p>
                <p className="mt-4">
                  它们特别喜欢腥味重的饵料，也容易被面包屑、饭粒等常见食物吸引。这种不挑食的特性，让新手钓友很容易就能获得成功的体验。
                </p>
              </div>
            </div>

            {/* Fishing Strategy Section */}
            <div className="bg-gradient-to-br from-natural-mint/10 to-stream-blue/10 rounded-xl p-8 border border-natural-mint/20">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-6 h-6 text-fish-gem-blue" />
                <h2 className="text-2xl font-bold text-primary-text">钓它，你可以试试</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary-text mb-3">推荐鱼饵</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>任何饵料！腥香型商品饵、蚯蚓、饭粒、面包屑</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>它来者不拒，新手可以大胆尝试各种饵料</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>腥味重的饵料效果更佳</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-text mb-3">钓法要点</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>无需任何特定技巧</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>只要把带饵的钩扔进水里，它大概率就会第一个冲过来</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>漂相通常是猛地"下顿"或"黑漂"，非常干脆</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-natural-mint/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-fish-vibrant-orange" />
                  <span className="font-semibold text-primary-text">最佳时机</span>
                </div>
                <p className="text-gray-700">
                  全天候活跃，但清晨和傍晚时分更加活跃。它们不挑时间，随时准备"接客"，是新手练习的最佳对象。
                </p>
              </div>
            </div>

            {/* Conservation Section */}
            <div className="bg-gradient-to-br from-fish-crimson/5 to-fish-vibrant-orange/5 rounded-xl p-8 border border-fish-crimson/20">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-6 h-6 text-fish-crimson" />
                <h2 className="text-2xl font-bold text-primary-text">请温柔待我</h2>
              </div>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  我虽然皮实，但也请不要用力拉扯。钓到我让你练习了摘钩技巧，也请让我快快回家，继续担任下一位新手的"教练"。
                </p>
                <div className="bg-white/50 rounded-lg p-4 border border-fish-crimson/30">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-fish-crimson mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-text mb-2">特别提醒</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 麦穗鱼虽然皮实，但也要温柔对待</li>
                        <li>• 它们是新手练习摘钩技巧的好对象</li>
                        <li>• 观察后请尽快放流，让它们继续"教学"</li>
                        <li>• 它们是生态系统中的重要组成部分</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopmouthGudgeonPage 