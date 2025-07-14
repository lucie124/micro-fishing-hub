'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Fish, Star, Filter, Search } from 'lucide-react'

const FishGuidePage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedEnvironment, setSelectedEnvironment] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const fishSpecies = [
    {
      id: 'chinese-bitterling',
      name: '彩石鳑鲏',
      scientificName: 'Rhodeus ocellatus',
      aliases: '旁皮、镜鱼、彩片',
      difficulty: 3,
      size: '4-7 cm',
      peakBeauty: '4-6月 (繁殖期)',
      waterLayer: '中下层',
      environment: 'stream',
      tags: ['原生鱼', '小型鱼', '群游', '婚姻色艳丽', '需与蚌共生'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '溪流中的宝石，繁殖期雄鱼换上彩虹般的金属光泽盛装'
    },
    {
      id: 'topmouth-gudgeon',
      name: '麦穗鱼',
      scientificName: 'Pseudorasbora parva',
      aliases: '麦老师、嘎牙子、柳根子',
      difficulty: 1,
      size: '5-8 cm',
      peakBeauty: '全年无休 (主打一个朴实)',
      waterLayer: '全水层',
      environment: 'lake',
      tags: ['原生鱼', '小型鱼', '极其常见', '新手教练', '贪吃'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '小物钓世界的"迎宾员"，生命力顽强，好奇心重'
    },
    {
      id: 'paradise-fish',
      name: '中国斗鱼',
      scientificName: 'Macropodus opercularis',
      aliases: '盖斑斗鱼、三斑、花手巾',
      difficulty: 4,
      size: '5-7 cm',
      peakBeauty: '繁殖期，雄鱼展现极致色彩',
      waterLayer: '中上层、水面',
      environment: 'pond',
      tags: ['原生鱼', '斗鱼科', '领域性强', '颜值担当', '迷鳃呼吸'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '穿着华服的"水中战士"，蓝红相间的华丽条纹'
    },
    {
      id: 'white-stripe-carp',
      name: '宽体白条',
      scientificName: 'Culter alburnus',
      aliases: '白条、蓝刀、餐条、翘嘴小分队',
      difficulty: 2,
      size: '6-12 cm',
      peakBeauty: '晴天光照下，体侧闪烁银蓝色光芒',
      waterLayer: '中上层',
      environment: 'lake',
      tags: ['原生鱼', '鲤科', '群游', '速度飞快', '中上层鱼'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '水中的"银色闪电"，流线型身材飞速穿梭'
    },
    {
      id: 'predatory-chub',
      name: '马口鱼',
      scientificName: 'Opsariichthys bidens',
      aliases: '溪哥、山溪好朋友、桃花鱼',
      difficulty: 3,
      size: '8-15 cm',
      peakBeauty: '繁殖期雄鱼有追星和鲜艳的婚姻色',
      waterLayer: '中上层',
      environment: 'stream',
      tags: ['原生鱼', '鲤科', '溪流霸主', '捕食凶猛', '生境指标'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '清澈溪流里的"小鱼雷"，水质优良的标志'
    },
    {
      id: 'rhinogobius-giurinus',
      name: '子陵吻虾虎鱼',
      scientificName: 'Rhinogobius giurinus',
      aliases: '傻瓜鱼、趴地虎、呆子鱼',
      difficulty: 2,
      size: '4-8 cm',
      peakBeauty: '状态好时，身上斑纹对比分明',
      waterLayer: '水底',
      environment: 'stream',
      tags: ['原生鱼', '虾虎鱼科', '底栖', '呆萌', '领地意识'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: '潜伏在水底的"呆萌小猎人"，大大的脑袋和眼睛'
    }
  ]

  const difficulties = [
    { value: 'all', label: '全部难度' },
    { value: '1', label: '★☆☆☆☆ 新手友好' },
    { value: '2', label: '★★☆☆☆ 稍有挑战' },
    { value: '3', label: '★★★☆☆ 需要技巧' },
    { value: '4', label: '★★★★☆ 高级挑战' },
    { value: '5', label: '★★★★★ 大师级别' }
  ]

  const environments = [
    { value: 'all', label: '全部环境' },
    { value: 'stream', label: '溪流' },
    { value: 'lake', label: '湖泊' },
    { value: 'pond', label: '池塘' }
  ]

  const filteredFish = fishSpecies.filter(fish => {
    const matchesDifficulty = selectedDifficulty === 'all' || fish.difficulty === parseInt(selectedDifficulty)
    const matchesEnvironment = selectedEnvironment === 'all' || fish.environment === selectedEnvironment
    const matchesSearch = fish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fish.aliases.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesDifficulty && matchesEnvironment && matchesSearch
  })

  const renderStars = (difficulty: number) => {
    return '★'.repeat(difficulty) + '☆'.repeat(5 - difficulty)
  }

  return (
    <div className="min-h-screen bg-primary-warm-gray">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-natural-mint hover:text-fish-gem-blue transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>返回首页</span>
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-fish-gem-blue to-fish-vibrant-orange rounded-lg flex items-center justify-center">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-text">鱼种图鉴</h1>
              <p className="text-gray-600">发现微小生命的美感</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索鱼种名称或别名..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-natural-mint focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">筛选:</span>
            </div>
            
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-natural-mint focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </select>

            <select
              value={selectedEnvironment}
              onChange={(e) => setSelectedEnvironment(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-natural-mint focus:border-transparent"
            >
              {environments.map(environment => (
                <option key={environment.value} value={environment.value}>
                  {environment.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Fish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFish.map((fish, index) => (
            <motion.div
              key={fish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/fish-guide/${fish.id}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card h-full group cursor-pointer overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url('${fish.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Difficulty Stars */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <span className="text-xs font-medium text-fish-gem-blue">
                        {renderStars(fish.difficulty)}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="flex flex-wrap gap-1 justify-center mb-2">
                          {fish.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm opacity-90">{fish.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-text group-hover:text-natural-mint transition-colors">
                        {fish.name}
                      </h3>
                      <p className="text-sm text-gray-500">{fish.scientificName}</p>
                      <p className="text-xs text-gray-400">{fish.aliases}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>体长: {fish.size}</span>
                      <span>水层: {fish.waterLayer}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFish.length === 0 && (
          <div className="text-center py-16">
            <Fish className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">没有找到匹配的鱼种</h3>
            <p className="text-gray-500">尝试调整筛选条件或搜索关键词</p>
          </div>
        )}

        {/* Tips */}
        <div className="mt-16 p-8 bg-white rounded-xl border border-gray-100">
          <h3 className="text-xl font-semibold text-primary-text mb-4">图鉴使用小贴士</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-primary-text mb-2">难度说明</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>★☆☆☆☆ 新手友好：适合初学者，容易上钩</li>
                <li>★★☆☆☆ 稍有挑战：需要基本技巧</li>
                <li>★★★☆☆ 需要技巧：需要特定钓法和耐心</li>
                <li>★★★★☆ 高级挑战：需要丰富经验和技巧</li>
                <li>★★★★★ 大师级别：极难钓获，需要运气</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary-text mb-2">观察建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 点击卡片查看详细信息和垂钓技巧</li>
                <li>• 注意每种鱼的"颜值巅峰"时期</li>
                <li>• 根据水层选择合适的钓法</li>
                <li>• 记住环保理念，温柔对待每条鱼</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FishGuidePage 