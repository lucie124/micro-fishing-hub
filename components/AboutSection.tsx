'use client'

import { motion } from 'framer-motion'
import { Heart, Leaf, Users, Award } from 'lucide-react'

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: '治愈体验',
      description: '在繁忙的都市生活中，小物钓为你提供一片宁静的天地，让心灵得到真正的放松'
    },
    {
      icon: Leaf,
      title: '亲近自然',
      description: '通过观察微小生物，重新发现自然的美好，培养对环境的敬畏之心'
    },
    {
      icon: Users,
      title: '社区分享',
      description: '与志同道合的钓友交流经验，分享渔获，建立温暖的钓鱼社区'
    },
    {
      icon: Award,
      title: '技艺精进',
      description: '从新手到高手，通过系统学习不断提升钓鱼技巧，享受进步的乐趣'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text">
              为什么选择小物钓？
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              小物钓不仅仅是一种钓鱼方式，更是一种生活态度。它教会我们放慢脚步，
              观察身边的美好，在微小的事物中发现巨大的快乐。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              在这里，每一次垂钓都是与自然的对话，每一次收获都是对生活的感恩。
              我们相信，真正的快乐往往来自于最简单的事物。
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-natural-mint to-stream-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-text mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 