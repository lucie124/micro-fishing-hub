'use client'

import { motion } from 'framer-motion'
import { Users, BookOpen, Fish, Award } from 'lucide-react'

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: '注册用户',
      color: 'from-natural-mint to-natural-sage'
    },
    {
      icon: BookOpen,
      number: '50+',
      label: '教学文章',
      color: 'from-stream-blue to-stream-light'
    },
    {
      icon: Fish,
      number: '100+',
      label: '鱼种图鉴',
      color: 'from-fish-gem-blue to-fish-vibrant-orange'
    },
    {
      icon: Award,
      number: '4.9',
      label: '用户评分',
      color: 'from-earth-beige to-natural-mint'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-natural-mint/10 via-stream-blue/10 to-earth-beige/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
            我们的成长
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            感谢每一位小物钓爱好者的支持，让我们一起见证这个温暖社区的成长
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection 