'use client'

import { motion } from 'framer-motion'
import { Clock, Feather, Briefcase, CheckCircle, Plus, Package, Fish, Target, Users, ChevronDown, ChevronUp, Zap, Shield, Heart } from 'lucide-react'
import { useState } from 'react'

const EquipmentPage = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const gearItems = [
    // 第一组：核心三要素
    {
      group: 'core',
      groupTitle: '核心三要素',
      groupSubtitle: 'The Core Trinity',
      groupDescription: '这一组是钓鱼行为成立的基础',
      items: [
        {
          id: 'rod',
          name: '鱼竿',
          englishName: 'Rod',
          icon: Fish,
          importance: 5,
          importanceText: '必需品',
          function: '钓竿是手臂的延伸，它决定了你能将钩饵投送多远，以及与鱼搏斗时的操控感。',
          selectionFactors: [
            {
              title: '展开长度',
              options: [
                '1.5米 - 1.8米: 适用于树枝茂密的小溪、桥下等"障碍区"，操作灵活，不易挂到杂物。',
                '2.1米 - 2.7米: 最常用的"万金油"长度，兼顾了操控性和抛投距离，适合大多数公园、河道。',
                '3.0米以上: 适用于需要跨过近岸水草、或在开阔水域作钓的场景。'
              ]
            },
            {
              title: '收纳长度',
              options: [
                '这是决定便携性的关键！对于EDC和轻量玩家，选择收纳后 < 40cm 的竿是重中之重。'
              ]
            },
            {
              title: '调性 (Action)',
              options: [
                '新手无需深究，选择包装上注明"小物竿"、"溪流竿"的通常都适用。'
              ]
            }
          ]
        },
        {
          id: 'line-rig',
          name: '线组',
          englishName: 'Line Rig',
          icon: Package,
          importance: 5,
          importanceText: '必需品',
          function: '它是连接你和鱼的"神经系统"，负责传递信号（漂）和承受拉力（线、钩）。',
          selectionFactors: [
            {
              title: '购买建议',
              options: [
                '强烈建议新手直接购买"成品线组"！ 省去自己绑制的麻烦，拆开即用。'
              ]
            },
            {
              title: '线号 (Size)',
              options: [
                '#0.4 - #0.8: 最适合小物钓。数字越小，线越细、越灵敏，但拉力也越小。#0.6是很好的入门选择。'
              ]
            },
            {
              title: '鱼钩 (Hook)',
              options: [
                '成品线组已包含。常见的"袖钩"2-4号是小物钓的黄金尺寸。建议选择无倒刺钩，方便摘鱼，也是对鱼儿的保护。'
              ]
            },
            {
              title: '漂和铅坠',
              options: [
                '成品线组已为你完美匹配，无需额外考虑。浮漂的选择（七星漂/立漂）决定了不同的观漂习惯和适用场景。'
              ]
            }
          ]
        },
        {
          id: 'bait',
          name: '鱼饵',
          englishName: 'Bait',
          icon: Zap,
          importance: 5,
          importanceText: '必需品',
          function: '给鱼儿发送一份无法拒绝的"盛宴邀请函"。',
          selectionFactors: [
            {
              title: '商品拉饵 (Dough Bait)',
              options: [
                '最高效、最推荐的选择。',
                '味型: "腥香型"或"奶香型"对大多数小鱼有致命诱惑力。',
                '状态: 好的拉饵开出后，应该柔软、有弹性、不粘手。'
              ]
            },
            {
              title: '活饵 (Live Bait)',
              options: [
                '蚯蚓: 传统"神饵"，对肉食性小鱼（如斗鱼、虾虎）有奇效。缺点是不便携带和保存。'
              ]
            },
            {
              title: '天然饵 (Natural Bait)',
              options: [
                '面包/饭粒: 终极EDC选择，随处可得。胜在方便，但诱鱼和附钩性稍差。'
              ]
            }
          ]
        }
      ]
    },
    // 第二组：效率与体验配件
    {
      group: 'efficiency',
      groupTitle: '效率与体验配件',
      groupSubtitle: 'Efficiency & Experience',
      groupDescription: '这一组让你钓得更顺畅、更专业',
      items: [
        {
          id: 'tools',
          name: '开饵/收纳工具',
          englishName: 'Bait Tools',
          icon: Briefcase,
          importance: 4,
          importanceText: '强烈推荐',
          function: '提供一个干净、高效的工作台，并整合你的零散装备。',
          selectionFactors: [
            {
              title: '开饵盒/碗',
              options: [
                '用于混合饵料和水。迷你雪拉碗因其轻便、易清洗、颜值高而备受青睐。'
              ]
            },
            {
              title: '拉饵盘/戒',
              options: [
                '提供一个平面来拉出饵团。拉饵盘面积大，适合长时间作钓；拉饵戒（戴在手指上）则是极致轻量化的选择。'
              ]
            },
            {
              title: '一体式线漂盒',
              options: [
                '如"方寸小物盒"、"文心三印盒"，是终极解决方案。它们将线组、浮漂、饵料甚至拉饵盘功能集于一身，是新手福音。'
              ]
            }
          ]
        },
        {
          id: 'comfort',
          name: '个人舒适/防护',
          englishName: 'Personal Comfort',
          icon: Shield,
          importance: 3,
          importanceText: '提升体验',
          function: '保护你不受环境影响，让你能更久、更舒适地享受钓鱼过程。',
          selectionFactors: [
            {
              title: '帽子',
              options: [
                '防晒是头等大事！ 宽边的渔夫帽或带护颈的防晒帽是最佳选择。'
              ]
            },
            {
              title: '擦手布',
              options: [
                '被新手严重低估的神器。 开饵、抓鱼后，一块干爽的布能让你的体验提升数倍。选择带挂扣的超细纤维毛巾，可以挂在身上随时取用。'
              ]
            },
            {
              title: '凳子',
              options: [
                '长时作钓必备。 如果你计划在一个地方钓超过1小时，一个轻便的折叠马扎或钓鱼凳能解放你的双腿。选择时主要考虑重量和收纳体积。'
              ]
            }
          ]
        }
      ]
    },
    // 第三组：鱼获关怀
    {
      group: 'care',
      groupTitle: '鱼获关怀',
      groupSubtitle: 'Fish Care',
      groupDescription: '这一组体现了小物钓的环保与人文精神',
      items: [
        {
          id: 'fish-care',
          name: '鱼获暂养工具',
          englishName: 'Fish Care Tools',
          icon: Heart,
          importance: 2,
          importanceText: '按需选配',
          function: '为你钓获的小鱼提供一个临时的"五星级酒店"，让你能安全地观察、拍照，并保证它们在放流前充满活力。',
          selectionFactors: [
            {
              title: '鱼桶/观察盒',
              options: [
                '透明的观察盒/桶最适合拍照。选择时考虑体积和密封性。'
              ]
            },
            {
              title: '氧气泵',
              options: [
                '如果你计划暂养超过半小时，或天气炎热，一个充电式迷你氧气泵至关重要，它能显著提高鱼的存活率。这是进阶玩家关怀精神的体现。'
              ]
            }
          ]
        }
      ]
    }
  ]

  const kits = [
    {
      id: 'urban-wanderer',
      name: '城市漫游 · EDC套装',
      subtitle: 'Urban Wanderer Kit',
      scenario: 'EDC (Everyday Carry)',
      description: '日常通勤、城市漫步，路过公园的池塘或街角的水渠，随时可以停下来，与水中的小生命打个招呼。这是小物钓最随性的浪漫。',
      duration: '～20分钟',
      weightIndex: 5,
      portabilityIndex: 5,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      coreGear: [
        { item: '鱼竿 x1', note: '推荐收纳长度<30cm的超短节竿' },
        { item: '线组&漂 x1', note: '已预先绕好，存放在线盒内' },
        { item: '鱼饵', note: '一小份能快速开制的粉饵' }
      ],
      storageSystem: [
        { item: '核心收纳', note: '方寸小物全功能钓盒 (可收纳线组、鱼漂、鱼饵)' },
        { item: '携带方式', note: '钓盒放口袋，或用手绳挂在手腕、背包上' }
      ],
      designerNote: '这套方案的精髓在于"即拿即走"。所有必需品都整合在那个小小的方寸盒里，它就像你口袋里的AirPods，让你不错过任何一次即兴的快乐。'
    },
    {
      id: 'lightweight-explorer',
      name: '轻量探索 · 户外套装',
      subtitle: 'Lightweight Explorer Kit',
      scenario: '轻量户外 / 探索踩点',
      description: '周末去公园徒步、去郊外野餐，钓鱼不是唯一目的，却是行程中最惊喜的"彩蛋"。这套方案让你在享受户外的同时，随时能探索未知水域。',
      duration: '～1小时',
      weightIndex: 4,
      portabilityIndex: 4,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      coreGear: [
        { item: '鱼竿 x1-2', note: '可选配1-2根以适应不同环境' },
        { item: '线组&漂 x2-3', note: '应对不同水深和鱼种' },
        { item: '鱼饵', note: '一份标准用量' }
      ],
      functionalAccessories: [
        { item: '开饵/观察', note: '迷你雪拉碗' },
        { item: '个人防护', note: '遮阳帽' },
        { item: '清洁', note: '可挂式擦手布' }
      ],
      storageSystem: [
        { item: '核心收纳', note: '文心三印线漂盒 (可收纳线组、鱼漂及拉饵戒)' },
        { item: '携带方式', note: '使用斜挎户外绳，将雪拉碗、擦手布、线漂盒等配件挂在身上，化身为潮流的户外装饰' }
      ],
      optionalUpgrade: '轻便竿包: 当携带2根鱼竿时，一个简约的竿包能提供更好的保护。',
      designerNote: '这套方案的核心是"功能"与"有型"的平衡。那根亮色的户外绳是点睛之笔，它不仅是携带工具，更是你户外Look的一部分。它告诉你，钓鱼也可以很潮。'
    },
    {
      id: 'focused-halfday',
      name: '半日专注 · 目标套装',
      subtitle: 'Focused Half-day Kit',
      scenario: '长时作钓 / 目标狙击',
      description: '今天，钓鱼是唯一的主题。你来到了熟悉的秘密钓点，准备花上一个下午，与水下的老朋友们好好切磋一番。这是属于钓鱼人的，专注而宁静的时光。',
      duration: '2小时以上',
      weightIndex: 2,
      portabilityIndex: 3,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      coreGear: [
        { item: '鱼竿 x2-3', note: '针对不同鱼种和钓法配置' },
        { item: '线组&漂 x3-4', note: '备用充足，从容应对各种状况' },
        { item: '鱼饵 x2', note: '准备两种不同味型的饵料，有备无患' }
      ],
      functionalAccessories: [
        { item: '鱼获安居', note: '迷你鱼桶 & 充电氧气泵 (为了更好地观察和保护鱼)' },
        { item: '个人舒适', note: '便携折叠凳' },
        { item: '其他', note: '开饵盒、拉饵盘/戒、帽子、擦手布' }
      ],
      storageSystem: [
        { item: '核心收纳', note: '一个功能分区的专业钓鱼包' },
        { item: '携带方式', note: '所有物品收纳进包内，轻松背负' }
      ],
      designerNote: '这套方案追求的是"从容不迫"。齐全的装备让你能应对钓场的所有变化，而舒适的配件则保证了长时间作钓的乐趣。当你打开鱼桶的氧气泵，看着小鱼在里面安心游弋时，你会体会到小物钓的另一种满足感。'
    }
  ]

  const renderStars = (count: number) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count)
  }

  return (
    <div className="min-h-screen bg-primary-warm-gray">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
              S.O.S - Smart Outfit Solutions
            </h1>
            <p className="text-xl text-gray-600">你的专属小物钓方案库</p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              小物钓的魅力，在于它的轻盈与随性。这里没有一成不变的规则，只有因地制宜的智慧。我们为你准备了三套核心解决方案，从城市的惊鸿一瞥，到山野的半日闲情，希望能帮你轻松打包，优雅出发。
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="space-y-16">
          {kits.map((kit, index) => (
            <motion.div
              key={kit.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Kit Header */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-primary-text mb-2">{kit.name}</h2>
                      <p className="text-lg text-gray-500 mb-4">{kit.subtitle}</p>
                      <div className="inline-block px-4 py-2 bg-natural-mint/20 text-natural-mint rounded-full text-sm font-medium">
                        适用场景：{kit.scenario}
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-fish-gem-blue to-fish-vibrant-orange rounded-xl flex items-center justify-center">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {kit.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-80 lg:h-full">
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${kit.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 space-y-8">
                    {/* Data Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <Clock className="w-6 h-6 text-fish-vibrant-orange mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">建议时长</p>
                        <p className="font-semibold text-primary-text">{kit.duration}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <Feather className="w-6 h-6 text-natural-mint mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">轻量指数</p>
                        <p className="font-semibold text-fish-gem-blue">{renderStars(kit.weightIndex)}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <Briefcase className="w-6 h-6 text-stream-blue mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-1">便携指数</p>
                        <p className="font-semibold text-fish-gem-blue">{renderStars(kit.portabilityIndex)}</p>
                      </div>
                    </div>

                    {/* Core Gear */}
                    <div>
                      <h3 className="text-xl font-semibold text-primary-text mb-4 flex items-center">
                        <Fish className="w-5 h-5 text-fish-gem-blue mr-2" />
                        核心渔具
                      </h3>
                      <div className="space-y-3">
                        {kit.coreGear.map((gear, gearIndex) => (
                          <div key={gearIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-natural-mint mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-primary-text">{gear.item}</p>
                              <p className="text-sm text-gray-600">{gear.note}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Functional Accessories */}
                    {kit.functionalAccessories && (
                      <div>
                        <h3 className="text-xl font-semibold text-primary-text mb-4 flex items-center">
                          <Target className="w-5 h-5 text-fish-vibrant-orange mr-2" />
                          功能配件
                        </h3>
                        <div className="space-y-3">
                          {kit.functionalAccessories.map((accessory, accIndex) => (
                            <div key={accIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-natural-mint mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-primary-text">{accessory.item}</p>
                                <p className="text-sm text-gray-600">{accessory.note}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Storage System */}
                    <div>
                      <h3 className="text-xl font-semibold text-primary-text mb-4 flex items-center">
                        <Package className="w-5 h-5 text-stream-blue mr-2" />
                        收纳系统
                      </h3>
                      <div className="space-y-3">
                        {kit.storageSystem.map((storage, storageIndex) => (
                          <div key={storageIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-natural-mint mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-primary-text">{storage.item}</p>
                              <p className="text-sm text-gray-600">{storage.note}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Optional Upgrade */}
                    {kit.optionalUpgrade && (
                      <div className="bg-gradient-to-r from-fish-gem-blue/10 to-stream-blue/10 rounded-lg p-4 border border-fish-gem-blue/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Plus className="w-5 h-5 text-fish-gem-blue" />
                          <span className="font-semibold text-primary-text">可选升级</span>
                        </div>
                        <p className="text-gray-700">{kit.optionalUpgrade}</p>
                      </div>
                    )}

                    {/* Designer Note */}
                    <div className="bg-gradient-to-r from-natural-mint/10 to-fish-gem-blue/10 rounded-lg p-4 border border-natural-mint/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-natural-mint" />
                        <span className="font-semibold text-primary-text">设计师笔记</span>
                      </div>
                      <p className="text-gray-700 italic">"{kit.designerNote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Individual Gear Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-text mb-4">你的装备，你做主 | 单品装备清单</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                了解每一件工具的性格，才能组合出最懂你的方案。这里是小物钓的核心装备拆解，希望能帮你告别选择困难，组建你的第一套"梦之队"。
              </p>
            </div>

            <div className="space-y-8">
              {gearItems.map((group, groupIndex) => (
                <div key={group.group} className="space-y-6">
                  {/* Group Header */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary-text mb-2">{group.groupTitle}</h3>
                    <p className="text-lg text-gray-500 mb-2">{group.groupSubtitle}</p>
                    <p className="text-gray-600 italic">"{group.groupDescription}"</p>
                  </div>

                  {/* Group Items */}
                  <div className="space-y-4">
                    {group.items.map((item) => {
                      const isExpanded = expandedItems.includes(item.id)
                      const IconComponent = item.icon
                      
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200"
                        >
                          {/* Collapsed View */}
                          <div 
                            className="p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                            onClick={() => toggleItem(item.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-fish-gem-blue to-fish-vibrant-orange rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-primary-text">{item.name}</h4>
                                  <p className="text-sm text-gray-500">{item.englishName}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right">
                                  <p className="text-sm text-gray-600">重要性</p>
                                  <p className="font-semibold text-fish-gem-blue">{renderStars(item.importance)}</p>
                                  <p className="text-xs text-gray-500">{item.importanceText}</p>
                                </div>
                                {isExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Expanded View */}
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-200 bg-white"
                            >
                              <div className="p-6 space-y-6">
                                {/* Function */}
                                <div>
                                  <h5 className="text-lg font-semibold text-primary-text mb-3 flex items-center">
                                    <Target className="w-4 h-4 text-fish-gem-blue mr-2" />
                                    功用
                                  </h5>
                                  <p className="text-gray-700 leading-relaxed">{item.function}</p>
                                </div>

                                {/* Selection Factors */}
                                <div>
                                  <h5 className="text-lg font-semibold text-primary-text mb-3 flex items-center">
                                    <CheckCircle className="w-4 h-4 text-natural-mint mr-2" />
                                    选择要素
                                  </h5>
                                  <div className="space-y-4">
                                    {item.selectionFactors.map((factor, factorIndex) => (
                                      <div key={factorIndex} className="bg-gray-50 rounded-lg p-4">
                                        <h6 className="font-medium text-primary-text mb-2">{factor.title}</h6>
                                        <ul className="space-y-2">
                                          {factor.options.map((option, optionIndex) => (
                                            <li key={optionIndex} className="text-gray-700 text-sm leading-relaxed">
                                              {option}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default EquipmentPage 