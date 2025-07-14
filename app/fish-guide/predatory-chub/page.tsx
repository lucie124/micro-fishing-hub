import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Fish, Star, Ruler, Palette, Waves, Heart, MapPin, Utensils, Target, Clock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '马口鱼 - 鱼种图鉴 - 小物之美',
  description: '清澈溪流里的"小鱼雷"，水质优良的标志',
}

const PredatoryChubPage = () => {
  const fishData = {
    name: '马口鱼',
    scientificName: 'Opsariichthys bidens',
    aliases: '溪哥、山溪好朋友、桃花鱼',
    difficulty: 3,
    size: '8-15 cm',
    peakBeauty: '繁殖期雄鱼有追星和鲜艳的婚姻色',
    waterLayer: '中上层',
    tags: ['原生鱼', '鲤科', '溪流霸主', '捕食凶猛', '生境指标'],
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
                  它是清澈溪流里的"小鱼雷"。马口鱼是典型的溪流鱼，对水质要求很高，它的存在是水质优良的标志。它有着一张与其体型不相称的大嘴，性格凶猛，是游泳健将。
                </p>
                <p>
                  繁殖期的雄鱼下颚会出现帅气的"追星"（白色角质凸起），体侧也会呈现华丽的红蓝色。这种独特的繁殖特征让它们在溪流中格外显眼，是溪流生态系统中不可或缺的重要成员。
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
                  水质清澈、含氧量高、有一定流速的山间溪流。它们喜欢在水流的转折处、石头后方的缓流区或深潭里伏击猎物。
                </p>
                <p className="mt-4">
                  由于对水质要求极高，马口鱼的存在往往标志着这片水域生态环境良好。它们喜欢在溪流的中上层活动，经常能看到它们在清澈的水中追逐猎物。
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
                  彻头彻尾的捕食者。捕食小鱼、水生昆虫、虾米，以及任何从它眼前晃过的活物。它们具有强烈的捕食本能，会主动追击猎物。
                </p>
                <p className="mt-4">
                  这种肉食性特征让它们在垂钓时需要特殊的技巧，不能像钓其他小鱼那样简单地等待，而是要主动"逗钓"或使用路亚钓法。
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
                      <span>活饵（蚯蚓、小虾）、昆虫</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>微型亮片、拟饵（路亚钓法）</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>腥味重的商品饵</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-text mb-3">钓法要点</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>要让饵"动"起来</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>在溪流中顺着水流放下饵，让其自然漂过可能的藏鱼点</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>使用路亚钓法时，匀速收线或轻微抽动都能有效吸引攻击</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>它的咬口是"쾅"的一声，非常有力</span>
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
                  春季繁殖期是最佳时机，此时雄鱼攻击性最强。清晨和傍晚时分活性更高，需要耐心等待和观察。
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
                  我是健康溪流生态的证明。钓到我，说明你找到了一个好地方，请务必在欣赏后让我回到清澈的家，继续守护这片水域。
                </p>
                <div className="bg-white/50 rounded-lg p-4 border border-fish-crimson/30">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-fish-crimson mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-text mb-2">特别提醒</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 马口鱼是水质指示物种，请珍惜</li>
                        <li>• 它们对水质要求极高，放流时选择清澈水域</li>
                        <li>• 观察后请尽快放流，让它们继续守护溪流</li>
                        <li>• 它们是溪流生态系统的重要捕食者</li>
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

export default PredatoryChubPage 