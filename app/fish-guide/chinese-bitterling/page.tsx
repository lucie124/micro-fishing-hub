import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Fish, Star, Ruler, Palette, Waves, Heart, MapPin, Utensils, Target, Clock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '彩石鳑鲏 - 鱼种图鉴 - 小物之美',
  description: '溪流中的宝石，繁殖期雄鱼换上彩虹般的金属光泽盛装',
}

const ChineseBitterlingPage = () => {
  const fishData = {
    name: '彩石鳑鲏',
    scientificName: 'Rhodeus ocellatus',
    aliases: '旁皮、镜鱼、彩片',
    difficulty: 3,
    size: '4-7 cm',
    peakBeauty: '4-6月 (繁殖期)',
    waterLayer: '中下层',
    tags: ['原生鱼', '小型鱼', '群游', '婚姻色艳丽', '需与蚌共生'],
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
                  它是溪流中的宝石，是无数小物钓玩家的"梦中情鱼"。平日里，它银光闪闪，朴实无华；可一旦进入春末夏初的繁殖季节，雄鱼便会换上盛装，身体被彩虹般的金属光泽包裹，鱼鳍镶上红边，仿佛一位即将登台的华丽舞者。
                </p>
                <p>
                  更有趣的是，它们需要将卵产在活的河蚌里才能孵化，这种奇妙的共生关系，也为它增添了一丝神秘色彩。每当看到它们在清澈的溪水中游动，那种优雅的姿态和绚丽的色彩，都会让人感叹大自然的神奇。
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
                  寻找水质清澈、水流较缓的区域。它们是典型的"结构鱼"，喜欢躲藏在水草丛、树根下、石头缝隙或桥墩旁。如果你看到水底有活的河蚌，那附近很可能就是它们的家。
                </p>
                <p className="mt-4">
                  它们对水质要求较高，通常只在环境良好的溪流中出现。春季繁殖期时，它们会聚集在河蚌较多的区域，这时是最佳的观察和垂钓时机。
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
                  它们是杂食性鱼类，主食是附着在石头上的藻类（青苔），也吃水中的浮游生物和有机碎屑。在繁殖期，它们会特别活跃地觅食，为繁殖做准备。
                </p>
                <p className="mt-4">
                  由于嘴小，它们更喜欢细小的食物，这也决定了我们在垂钓时需要选择合适大小的饵料。
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
                      <span>细腻的藻腥味商品拉饵是首选</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>也可以尝试用面包屑混合少量腥味粉末</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>小段红蚯蚓也是不错的选择</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-text mb-3">钓法要点</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>务必钓底或贴底飞行</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>因为鳑鲏嘴小，吃口轻，浮漂信号多为轻微的"下顿"</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>需要使用小号钩（袖钩2-3号）和灵敏的线组</span>
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
                  清晨和傍晚时分活性更高，春季繁殖期（4-6月）是最佳垂钓季节。选择天气晴朗、水温适宜的日子，它们会更加活跃。
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
                  我身上的鳞片非常薄，容易脱落，请一定用湿润的手触摸我。推荐使用无倒刺钩和摘钩器，这样能最快地让我安全回家。
                </p>
                <div className="bg-white/50 rounded-lg p-4 border border-fish-crimson/30">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-fish-crimson mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-text mb-2">特别提醒</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 鳑鲏体型小，请使用小号鱼钩</li>
                        <li>• 摘钩时动作要轻柔，避免损伤鱼体</li>
                        <li>• 观察后请尽快放流，让它们回到自然环境中</li>
                        <li>• 它们是水质良好的指示物种，请珍惜</li>
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

export default ChineseBitterlingPage 