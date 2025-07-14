'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Target, Zap, Eye, Fish, Lightbulb, Star, CheckCircle, ArrowRight } from 'lucide-react'

const TechniquesPage = () => {
  const beginnerTechniques = [
    {
      id: 'equipment-connection',
      title: '神装合体',
      subtitle: '装备的连接',
      step: '1.1',
      stepTitle: '连接你的"神经系统"',
      description: '轻轻抽出你的鱼竿，找到最顶端那节上系着的红色短绳（我们称之为"竿稍绳"）。',
      steps: [
        '轻轻抽出你的鱼竿，找到最顶端那节上系着的红色短绳（我们称之为"竿稍绳"）。',
        '在竿稍绳的末端，打一个最简单的"死结"，形成一个小小的结扣，防止线组滑脱。',
        '拿出你的成品线组，找到最顶端那个预先绑好的大环。',
        '将竿稍绳穿过线组的大环，然后让整个线组从竿稍绳自身的结扣中穿过，轻轻拉紧。',
        '完成！你的鱼竿和"神经系统"已经成功连接。'
      ],
      tip: '连接好后，轻轻拽一下，确保连接牢固。拆卸时，反向操作即可。这个结我们叫"马蹄结"，是钓鱼人的基本功哦！',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bait-preparation',
      title: '魔法药水',
      subtitle: '鱼饵的调制',
      step: '1.2',
      stepTitle: '开饵：唤醒鱼儿的"美食闹钟"',
      description: '加水: 在你的开饵盒/碗里，倒入一小部分饵料粉末。按照包装说明的比例（通常是1:1），加入适量的水。',
      steps: [
        '加水: 在你的开饵盒/碗里，倒入一小部分饵料粉末。按照包装说明的比例（通常是1:1），加入适量的水。',
        '搅拌: 用手指快速、同一个方向搅拌，让所有粉末均匀吸水，变成絮状。',
        '静置: 让混合物静置3-5分钟。这是"醒饵"的过程，让饵料充分吸收水分，变得更柔软。',
        '收拢: 将醒好的饵料轻轻收拢，团成一个球。切记：不要反复揉捏！'
      ],
      tip: '理想的饵团状态，应该是像耳垂一样柔软、不粘手、有弹性。如果太干，可以手指沾水微调；如果太湿，可以撒上一点干粉。过度揉捏会让饵料变"死"，失去诱鱼的雾化效果。',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'spot-selection',
      title: '寻龙点穴',
      subtitle: '钓点的选择',
      step: '1.3',
      stepTitle: '寻找小"精灵"们的秘密基地',
      description: '新手不需要想得太复杂，鱼儿和人一样，喜欢待在有吃有喝、有安全感的地方。记住这几个关键词：',
      spots: [
        { icon: '🌿', name: '水草边', description: '水草是天然的食堂和庇护所。' },
        { icon: '🪨', name: '结构旁', description: '桥墩、石头缝、倒下的树木，这些都是绝佳的埋伏点。' },
        { icon: '🌊', name: '缓流处', description: '在流动的河里，鱼喜欢待在水流平缓的回水湾或障碍物后面，节省体力。' },
        { icon: '🌳', name: '阴凉下', description: '夏天，树荫下、深水处是鱼儿的"空调房"。' }
      ],
      tip: '到一个新地方，先别急着下竿。花几分钟观察一下，哪里有小气泡冒上来？哪里有水草在轻微晃动？这些都可能是水下有鱼的信号。',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'float-reading',
      title: '破译密码',
      subtitle: '浮漂的信号',
      step: '1.4',
      stepTitle: '解读水下世界的"实时弹幕"',
      description: '浮漂是你的眼睛，它的一举一动都代表着水下的情况。新手主要关注这几种最有效的信号：',
      signals: [
        { name: '有力下顿', description: '浮漂像被人往下"点"了一下，短促有力。这是最准的信号，果断提竿！' },
        { name: '上顶/送漂', description: '浮漂缓缓地向上升起一两目。说明鱼把饵抬起来了，也是绝佳的提竿时机。' },
        { name: '黑漂', description: '浮漂被猛地一下拉进水里消失不见。通常是比较凶猛或贪吃的鱼，提竿！' },
        { name: '轻微抖动', description: '浮漂只是原地晃动或小范围移动。别急，这通常是小鱼在试探或蹭线，等一个清晰的"顿口"再出手。' }
      ],
      tip: '"抓小放大"是观漂的精髓。忽略那些杂乱的微小信号，专注于那个最清晰、最"实在"的动作，你的中鱼率会翻倍。',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const advancedTechniques = [
    {
      id: 'hooking-technique',
      title: '闪电一击',
      subtitle: '刺鱼的技巧',
      step: '2.1',
      stepTitle: '刺鱼：手腕的艺术',
      description: '看到信号后，提竿的动作不是用整条胳膊"抡"，而是靠手腕的瞬间爆发力。',
      steps: [
        '动作要领: 保持大臂不动，用手腕带动小臂，向上或向侧方短促、轻快地一"抖"或一"扬"。',
        '力度控制: 想象你的目标只是为了让锋利的钩尖"点"到鱼嘴即可，而不是要把鱼"拽"出水面。',
        '核心: 速度比力量更重要。'
      ],
      tip: '过度发力是刺鱼大忌！不仅容易拉豁鱼嘴导致跑鱼，巨大的水声还会吓跑窝里的其他鱼。记住，优雅永不过时。',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'line-assembly',
      title: '飞针引线',
      subtitle: '自制线组',
      step: '2.2',
      stepTitle: '定制你的"神兵利器"',
      description: '当你不再满足于成品线组，就可以尝试自己动手，根据需求定制。',
      steps: [
        '你需要准备: 主线、子线、鱼钩、太空豆、浮漂座、铅皮座、八字环。',
        '组装顺序 (从竿尖到鱼钩):',
        '在线头上打好马蹄结。',
        '穿入2颗太空豆（用于固定浮漂）。',
        '穿入浮漂座。',
        '再穿入3颗太空豆（用于固定铅皮座）。',
        '穿入铅皮座。',
        '再穿入1颗太空豆（防止铅皮座撞击八字环）。',
        '在主线末端绑上八字环。',
        '将绑好双钩的子线，挂在八字环的另一端。',
        '调漂: 这是自制线组最核心的一步，涉及"半水调漂法"，我们会在未来的"大师篇"中详细讲解。'
      ],
      tip: '刚开始可以买散装的配件包来练习。享受这个过程，它会让你对钓鱼的理解提升一个维度。',
      icon: Fish,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'active-fishing',
      title: '诱敌深入',
      subtitle: '主动找鱼',
      step: '2.3',
      stepTitle: '从"守株待兔"到"主动出击"',
      description: '逗钓: 长时间没口？试试轻轻地将鱼竿提起10-20厘米，再缓缓放下。这个动作能让水下的饵"活"起来，模仿挣扎的昆虫，对斗鱼、虾虎等有奇效。',
      techniques: [
        { name: '逗钓', description: '长时间没口？试试轻轻地将鱼竿提起10-20厘米，再缓缓放下。这个动作能让水下的饵"活"起来，模仿挣扎的昆虫，对斗鱼、虾虎等有奇效。' },
        { name: '打窝', description: '如果你想把周围的鱼都叫来"开派对"，可以每隔几分钟，用手指捏一小撮粉状饵料，撒在你浮漂的周围。这能形成一个雾化带，持续诱鱼。' }
      ],
      tip: '打窝的精髓在于"少"和"勤"。一次撒太多，鱼吃饱就走了。要让它们一直处于"闻得到、吃不着、想走又舍不得"的状态，你就成功了！',
      icon: Target,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

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

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-fish-gem-blue/10 via-natural-mint/5 to-stream-blue/10 py-16"
      >
        <div className="container-custom text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-24 bg-gradient-to-br from-fish-gem-blue to-fish-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <BookOpen className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
            技巧堂
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-fish-gem-blue mb-8">
            从入门到大师，你只差这几步
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                欢迎来到技巧堂！别担心，小物钓没有复杂的公式，只有一些简单而巧妙的诀窍。下面这本"秘籍"，我们用最直观的图文和GIF动图，为你拆解了每一步。无论你是第一次摸鱼竿的小白，还是希望百尺竿头更进一步的老手，都能在这里找到答案。让我们开始吧！
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container-custom py-16">
        {/* Beginner Chapter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-natural-mint/20 text-natural-mint px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              <span>入门篇</span>
            </div>
            <h2 className="text-3xl font-bold text-primary-text mb-4">
              基础决定下限
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              万丈高楼平地起。掌握这几招基础，你就能轻松搞定开局准备，自信地抛出第一竿！
            </p>
          </div>

          <div className="space-y-12">
            {beginnerTechniques.map((technique, index) => {
              const IconComponent = technique.icon
              return (
                <motion.div
                  key={technique.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-full">
                      <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${technique.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-fish-gem-blue to-fish-vibrant-orange rounded-xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary-text">{technique.title}</h3>
                          <p className="text-lg text-gray-500">{technique.subtitle}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="inline-flex items-center space-x-2 bg-fish-gem-blue/10 text-fish-gem-blue px-3 py-1 rounded-full text-sm font-medium mb-3">
                          <span>{technique.step}</span>
                          <span>{technique.stepTitle}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {technique.description}
                        </p>
                      </div>

                      {/* Steps or Special Content */}
                      {technique.steps && (
                        <div className="mb-6">
                          <div className="space-y-3">
                            {technique.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-natural-mint rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs font-bold text-white">{stepIndex + 1}</span>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {technique.spots && (
                        <div className="mb-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {technique.spots.map((spot, spotIndex) => (
                              <div key={spotIndex} className="bg-gray-50 rounded-lg p-4">
                                <div className="flex items-center space-x-2 mb-2">
                                  <span className="text-2xl">{spot.icon}</span>
                                  <h4 className="font-medium text-primary-text">{spot.name}</h4>
                                </div>
                                <p className="text-gray-600 text-sm">{spot.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {technique.signals && (
                        <div className="mb-6">
                          <div className="space-y-3">
                            {technique.signals.map((signal, signalIndex) => (
                              <div key={signalIndex} className="bg-gray-50 rounded-lg p-4">
                                <h4 className="font-medium text-primary-text mb-2">{signal.name}</h4>
                                <p className="text-gray-600 text-sm">{signal.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Village Chief's Tip */}
                      <div className="bg-gradient-to-r from-natural-mint/10 to-fish-gem-blue/10 rounded-lg p-4 border border-natural-mint/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Lightbulb className="w-5 h-5 text-natural-mint" />
                          <span className="font-semibold text-primary-text">村长的小贴士</span>
                        </div>
                        <p className="text-gray-700 text-sm">{technique.tip}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Advanced Chapter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-fish-vibrant-orange/20 text-fish-vibrant-orange px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              <span>进阶篇</span>
            </div>
            <h2 className="text-3xl font-bold text-primary-text mb-4">
              细节决定上限
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              恭喜你已掌握基础！现在，让我们深入细节，学习如何从"钓到鱼"，变为"随心所欲地钓鱼"。
            </p>
          </div>

          <div className="space-y-12">
            {advancedTechniques.map((technique, index) => {
              const IconComponent = technique.icon
              return (
                <motion.div
                  key={technique.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Content Section */}
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-fish-vibrant-orange to-natural-sage rounded-xl flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary-text">{technique.title}</h3>
                          <p className="text-lg text-gray-500">{technique.subtitle}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="inline-flex items-center space-x-2 bg-fish-vibrant-orange/10 text-fish-vibrant-orange px-3 py-1 rounded-full text-sm font-medium mb-3">
                          <span>{technique.step}</span>
                          <span>{technique.stepTitle}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {technique.description}
                        </p>
                      </div>

                      {/* Steps or Special Content */}
                      {technique.steps && (
                        <div className="mb-6">
                          <div className="space-y-3">
                            {technique.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-fish-vibrant-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs font-bold text-white">{stepIndex + 1}</span>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {technique.techniques && (
                        <div className="mb-6">
                          <div className="space-y-4">
                            {technique.techniques.map((tech, techIndex) => (
                              <div key={techIndex} className="bg-gray-50 rounded-lg p-4">
                                <h4 className="font-medium text-primary-text mb-2">{tech.name}</h4>
                                <p className="text-gray-600 text-sm">{tech.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Village Chief's Tip */}
                      <div className="bg-gradient-to-r from-fish-vibrant-orange/10 to-natural-sage/10 rounded-lg p-4 border border-fish-vibrant-orange/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Lightbulb className="w-5 h-5 text-fish-vibrant-orange" />
                          <span className="font-semibold text-primary-text">村长的小贴士</span>
                        </div>
                        <p className="text-gray-700 text-sm">{technique.tip}</p>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative h-64 lg:h-full">
                      <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${technique.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-fish-gem-blue to-fish-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-primary-text mb-6">
              恭喜你完成技巧堂修炼！
            </h3>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              现在你已经掌握了从入门到进阶的所有核心技巧。记住，真正的武功在于实践，快去河边试试这些招式吧！
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/equipment">
                <button className="bg-gradient-to-r from-fish-gem-blue to-stream-blue text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <Fish className="w-5 h-5" />
                  <span>查看装备库</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/fish-guide">
                <button className="bg-gradient-to-r from-natural-mint to-fish-gem-blue text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>浏览鱼种图鉴</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TechniquesPage 