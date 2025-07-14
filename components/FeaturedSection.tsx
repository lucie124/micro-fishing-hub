'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BookOpen, Package, Fish, Users, ArrowRight } from 'lucide-react'

const FeaturedSection = () => {
  const featuredItems = [
    {
      title: '新手必读',
      description: '从零开始的小物钓入门指南，让你快速掌握基础技巧',
      icon: BookOpen,
      href: '/beginners',
      color: 'from-natural-mint to-natural-sage',
      image: 'https://images.unsplash.com/photo-1670343740825-ffe84fe9a448?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: '精选装备',
      description: '精心挑选的新手友好装备，性价比与品质并重',
      icon: Package,
      href: '/equipment',
      color: 'from-stream-blue to-stream-light',
      image: 'https://plus.unsplash.com/premium_photo-1723568452446-0c8ce2461a08?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: '热门鱼种',
      description: '常见小物钓目标鱼种图鉴，了解它们的习性与垂钓技巧',
      icon: Fish,
      href: '/fish-guide',
      color: 'from-fish-gem-blue to-fish-vibrant-orange',
      image: 'https://images.unsplash.com/photo-1654093342665-dd73e22bf4d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: '玩家社区',
      description: '与其他小物钓爱好者分享经验，展示你的渔获',
      icon: Users,
      href: '/community',
      color: 'from-earth-beige to-natural-mint',
      image: 'https://plus.unsplash.com/premium_photo-1663088697244-10095fb91d93?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section className="section-padding bg-primary-warm-gray">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
            开启你的小物钓之旅
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            从新手必读到装备选择，从技巧学习到社区交流，我们为你准备了完整的小物钓入门体验
          </p>
        </motion.div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="card h-full group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    
                    {/* Icon */}
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-primary-text group-hover:text-natural-mint transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Arrow */}
                    <div className="flex items-center text-natural-mint group-hover:text-fish-gem-blue transition-colors">
                      <span className="text-sm font-medium">了解更多</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection 