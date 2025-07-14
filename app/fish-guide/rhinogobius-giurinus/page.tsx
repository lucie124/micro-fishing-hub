import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Fish, Star, Ruler, Palette, Waves, Heart, MapPin, Utensils, Target, Clock, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '子陵吻虾虎鱼 - 鱼种图鉴 - 小物之美',
  description: '潜伏在水底的"呆萌小猎人"，大大的脑袋和眼睛',
}

const RhinogobiusGiurinusPage = () => {
  const fishData = {
    name: '子陵吻虾虎鱼',
    scientificName: 'Rhinogobius giurinus',
    aliases: '傻瓜鱼、趴地虎、呆子鱼',
    difficulty: 2,
    size: '4-8 cm',
    peakBeauty: '状态好时，身上斑纹对比分明',
    waterLayer: '水底',
    tags: ['原生鱼', '虾虎鱼科', '底栖', '呆萌', '领地意识'],
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
                  它是潜伏在水底的"呆萌小猎人"。虾虎鱼有着大大的脑袋和眼睛，看上去总是一副憨态可掬的表情。它的胸鳍已经愈合成了吸盘，可以牢牢地吸附在石头上，对抗水流。
                </p>
                <p>
                  它们总是在水底走走停停，像是在巡视自己的领地，遇到威胁或猎物时会进行短距离的爆发冲刺。这种独特的运动方式让它们在水中显得格外有趣，是水底世界中的"小可爱"。
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
                  任何有沙石底或平坦底质的水域底部。它们喜欢趴在石头上或藏在缝隙里，静静等待食物经过。
                </p>
                <p className="mt-4">
                  由于是底栖鱼类，它们很少离开水底，这让我们在垂钓时需要特别注意钓底。它们特别喜欢在有石头或障碍物的水域活动，这些地方为它们提供了良好的藏身之所。
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
                  肉食性。主食贴近水底的小虫、小虾和各种无脊椎动物。它们具有强烈的领地意识，会主动攻击进入其领地的猎物。
                </p>
                <p className="mt-4">
                  这种食性让它们在垂钓时需要特殊的技巧，要让饵料精准地躺在水底，最好是在石头附近，这样才能吸引它们的注意。
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
                      <span>小段的红蚯蚓是特效饵！</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>腥味重的饵料也可以</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>小虾、昆虫幼虫等活饵</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-text mb-3">钓法要点</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>必须钓底</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>让饵料精准地躺在水底，最好是在石头附近</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>虾虎鱼吃口很实在，浮漂会直接被拖着走或有力下顿</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-fish-gem-blue font-bold">•</span>
                      <span>有时甚至感觉不到漂相，提竿时才发觉挂底般的沉重感</span>
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
                  我是个十足的"大嘴巴"，吞钩可能会比较深，请务必使用摘钩器小心地帮我取下鱼钩。让我回到水底继续我的"趴窝"生活吧。
                </p>
                <div className="bg-white/50 rounded-lg p-4 border border-fish-crimson/30">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-fish-crimson mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-text mb-2">特别提醒</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• 虾虎鱼嘴大，容易深吞钩，请使用摘钩器</li>
                        <li>• 它们有强烈的领地意识，观察时要注意</li>
                        <li>• 放流时选择有石头的水域</li>
                        <li>• 它们是水底生态系统的重要成员</li>
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

export default RhinogobiusGiurinusPage 