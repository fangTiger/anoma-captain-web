import { motion } from 'framer-motion';
import { content } from '../../lib/content';

const UseCases = () => {
  const { useCases } = content;

  return (
    <section id="use-cases" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* 标题部分 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            {useCases.title}
          </h2>
          <p className="text-xl text-secondary font-medium">
            {useCases.subtitle}
          </p>
        </motion.div>

        {/* 用例网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.cases.map((useCase, index) => (
            <motion.div
              key={index}
              className="arcane-card group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* 背景装饰 */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-6xl">{useCase.icon}</div>
              </div>

              {/* 主要内容 */}
              <div className="relative z-10">
                {/* 图标和标题 */}
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {useCase.title}
                  </h3>
                </div>

                {/* 描述 */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {useCase.description}
                </p>

                {/* 底部装饰 */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary/60 transition-colors"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                  <div className="w-8 h-8 border border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary/60 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full rune-glow"></div>
                  </div>
                </div>
              </div>

              {/* 悬停效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* 底部装饰性引用 */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary/30 pl-6">
              "Anoma 的意图中心化架构开启了全新的应用可能性，
              让复杂的多方协调变得简单而优雅。"
            </blockquote>
            <div className="mt-4 text-sm text-primary">
              — Anoma 白皮书
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;

