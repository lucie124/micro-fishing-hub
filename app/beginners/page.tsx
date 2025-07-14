'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Heart, Trash2, Fish, BookOpen, Target, Users, ArrowRight, Star, CheckCircle } from 'lucide-react'

const BeginnersPage = () => {
  const goldenRules = [
    {
      icon: Shield,
      title: '安全第一，帅气第二',
      content: '脚下的路比水里的鱼重要。在水边，请先确认立足点是否稳固，留意湿滑的石头和松软的泥土。钓鱼不观天，等于瞎胡闹，出发前看看天气预报，雷雨天请果断宅家。',
      color: 'from-fish-gem-blue to-stream-blue'
    },
    {
      icon: Heart,
      title: '温柔，是对"小精灵"最大的尊重',
      content: '对于它们，我们是天外来客般的巨人。请一定用湿润的手触摸它们（干手会烫伤鱼的粘膜！），快速拍照，然后轻轻送它们回家。我们的目标是邂-逅，而不是抓捕。',
      color: 'from-natural-mint to-fish-gem-blue'
    },
    {
      icon: Trash2,
      title: '除了脚印，什么都别留下',
      content: '空的饵料袋、废弃的鱼线……这些都是大自然的"牛皮癣"。请随手带走自己产生的所有垃圾，如果可以，顺手带走别人遗落的垃圾，你就是最酷的那个"清道夫"。',
      color: 'from-fish-vibrant-orange to-natural-sage'
    }
  ]

  const threeSteps = [
    {
      step: '01',
      title: '武装你的"角色"',
      subtitle: '领取你的新手神装',
      description: '忘掉那些又重又贵的"屠龙宝刀"吧！小物钓的乐趣，在于用最轻巧的装备，挑战最精细的战斗。你的"新手神装"可能比一顿外卖还便宜，而且颜值超高，能让你在朋友圈摄影大赛中轻松胜出。',
      icon: Fish,
      buttonText: '前往装备库，领取你的新手套装！',
      buttonHref: '/equipment',
      image: 'https://plus.unsplash.com/premium_photo-1723568452446-0c8ce2461a08?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      step: '02',
      title: '学习你的"秘籍"',
      subtitle: '修炼独门武功',
      description: '拿到神装还不够，你得知道"咒语"怎么念。如何把线绑在竿上？浮漂跳的"摩斯密码"都代表啥？别怕，我们的秘籍已经帮你画好了重点，保证没有一个难懂的字，让你5分钟从小白变高手。',
      icon: BookOpen,
      buttonText: '解锁技巧堂，修炼独门武功！',
      buttonHref: '/beginners',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      step: '03',
      title: '认识你的"伙伴"',
      subtitle: '预习你的"邂逅"名单',
      description: '万事俱备，是时候认识一下你未来的"对手"和"伙伴"们了！水下的世界远比你想象的精彩：有身披彩虹的"鳑鲏王子"，有呆萌憨厚的"虾虎门卫"，还有上蹿下跳的"白条刺客"……快来翻开图鉴，看看你最想先见到谁？',
      icon: Target,
      buttonText: '翻开鱼种图鉴，预习你的"邂逅"名单！',
      buttonHref: '/fish-guide',
      image: 'https://images.unsplash.com/photo-1654093342665-dd73e22bf4d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
            <Fish className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
            欢迎光临新手村
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-fish-gem-blue mb-8">
            你的「小物钓」冒险从这里开始！
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                刷短视频刷累了？看别人钓的那些亮晶晶的小鱼心动了？别担心，小物钓的世界没有高深的门槛，只有无穷的惊喜。它就像是现实版的"宝可梦GO"，只不过你的目标是认识和集齐水里的"小精灵"。准备好了吗？你的冒险手册已开启！
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container-custom py-16">
        {/* Module 1: Golden Rules */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-text mb-4">
              闯荡"江湖"的三大黄金法则
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              在我们正式出发前，请默念三遍村子里的"江湖规矩"。它们能保证你的冒险之路安全又愉快，还能让你收获其他钓友尊敬的目光哦！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goldenRules.map((rule, index) => {
              const IconComponent = rule.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${rule.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-text mb-3 text-center">
                    {rule.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {rule.content}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Module 2: Three Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-text mb-4">
              新手"入坑"三步曲
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              记住了上面的法则，恭喜你，你已经是一名合格的"冒险者"了！现在，按照下面的三步走，你就能解锁全部技能，正式开启你的图鉴收集之旅！
            </p>
          </div>

          <div className="space-y-12">
            {threeSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.3 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-full">
                      <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('${step.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-fish-gem-blue to-fish-vibrant-orange rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{step.step}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary-text">{step.title}</h3>
                          <p className="text-lg text-gray-500">{step.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      <Link href={step.buttonHref}>
                        <button className="w-full bg-gradient-to-r from-fish-gem-blue to-stream-blue text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                          <IconComponent className="w-5 h-5" />
                          <span>{step.buttonText}</span>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Module 3: Final Words */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-natural-mint to-fish-gem-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-primary-text mb-6">
              最后的叮嘱
            </h3>
            
            <div className="text-gray-700 leading-relaxed space-y-4 mb-8">
              <p>
                恭喜你，新手村的所有任务已经完成！你已经掌握了开启小物钓大门的所有钥匙。
              </p>
              <p>
                真正的冒险，现在才刚刚开始。找一个晴朗的午后，带上你的轻巧装备，去身边的河边、公园，安静地坐下，抛出你的第一竿吧。
              </p>
              <p>
                记住，钓到鱼是惊喜，享受过程本身，才是小物钓的终极奥义。欢迎入坑，我的朋友！
              </p>
            </div>

            <div className="bg-gradient-to-r from-fish-gem-blue/10 to-stream-blue/10 rounded-xl p-6 border border-fish-gem-blue/20">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Users className="w-5 h-5 text-fish-gem-blue" />
                <span className="font-semibold text-primary-text">P.S. 一个人玩太孤单？</span>
              </div>
              <p className="text-gray-600 mb-4">
                来<strong className="text-fish-gem-blue">玩家社区</strong>看看大家的"战报"，分享你的第一条鱼获吧！
              </p>
              <Link href="/community">
                <button className="bg-fish-gem-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-fish-vibrant-orange transition-colors">
                  进入社区
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BeginnersPage 