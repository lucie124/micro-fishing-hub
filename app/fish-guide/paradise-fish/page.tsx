import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Fish, Star, Ruler, Palette, Waves, Heart, MapPin, Utensils, Target, Clock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '中国斗鱼 - 鱼种图鉴 - 小物之美',
  description: '穿着华服的"水中战士"，蓝红相间的华丽条纹',
}

const ParadiseFishPage = () => {
  const fishData = {
    name: '中国斗鱼',
    scientificName: 'Macropodus opercularis',
    aliases: '盖斑斗鱼、三斑、花手巾',
    difficulty: 4,
    size: '5-7 cm',
    peakBeauty: '繁殖期，雄鱼展现极致色彩',
    waterLayer: '中上层、水面',
    tags: ['原生鱼', '斗鱼科', '领域性强', '颜值担当', '迷鳃呼吸'],
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
                  它是穿着华服的"水中战士"。中国斗鱼以其强烈的领域性和攻击性闻名，雄鱼之间会为了地盘和配偶展开激烈搏斗。它身上覆盖着蓝红相间的华丽条纹，鱼鳍宽大飘逸。
                </p>
                <p>
                  它还拥有"迷鳃"这一特殊器官，可以直接呼吸水面空气，因此能生活在低氧的水环境中。这种独特的生理特征让它们能在其他鱼类无法生存的环境中繁衍，也赋予了它们独特的魅力。
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
                  水流静止或极缓的浅水区，如废弃的池塘、稻田、长满水葫芦的沟渠。它们喜欢藏在浓密的水草或障碍物附近，静待猎物上门。
                </p>
                <p className="mt-4">
                  由于具有迷鳃，它们能在低氧环境中生存，这使得它们能在其他鱼类无法生存的水域中独霸一方。寻找它们时，要特别注意那些看似"死水"的区域。
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
                  肉食主义者。主食水生昆虫、孑孓（蚊子幼虫）、小鱼小虾等。它们具有强烈的捕食本能，会主动攻击任何进入其领地的猎物。
                </p>
                <p className="mt-4">
                  这种肉食性特征让它们在垂钓时需要特殊的技巧，不能像钓其他小鱼那样简单地等待，而是要主动"逗钓"。
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
                      <span>活饵是最佳选择，如小蚯蚓、面包虫</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>小型昆虫幼虫效果也很好</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>腥味重的商品饵也可以尝试</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-text mb-3">钓法要点</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>采用"逗钓"法</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>将饵轻轻投到它可能藏身的水草边</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>然后缓缓提起、放下，模仿挣扎的昆虫</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>钓斗鱼更像是"捕猎"，而非"等待"</span>
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
                  繁殖期（春季）是最佳时机，此时雄鱼攻击性最强。清晨和傍晚时分活性更高，需要耐心等待和观察。
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
                  我那身引以为傲的"战袍"（鱼鳍）非常容易撕裂，请千万小心。观察我的时候，记得给我一个有水草可以躲藏的容器，我会更有安全感。
                </p>
                <div className="bg-white/50 rounded-lg p-4 border border-fish-crimson/30">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-fish-crimson mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-text mb-2">特别提醒</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 斗鱼的鱼鳍非常脆弱，请小心处理</li>
                        <li>• 它们有强烈的领地意识，观察时要注意</li>
                        <li>• 放流时选择有遮蔽物的水域</li>
                        <li>• 它们是生态系统中的重要捕食者</li>
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

export default ParadiseFishPage 