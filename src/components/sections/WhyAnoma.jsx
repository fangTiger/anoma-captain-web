import { motion } from 'framer-motion';
import { content } from '../../lib/content';

const WhyAnoma = () => {
  const { whyAnoma } = content;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="why-anoma" className="py-20 px-6">
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
            {whyAnoma.title}
          </h2>
          <p className="text-xl text-secondary font-medium">
            {whyAnoma.subtitle}
          </p>
        </motion.div>

        {/* 卡片网格 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyAnoma.cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="arcane-card group cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {/* 卡片顶部装饰 */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{card.icon}</div>
                <div className="w-8 h-8 border border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary/60 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full rune-glow"></div>
                </div>
              </div>

              {/* 卡片内容 */}
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>

              {/* 底部装饰线 */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary/60 transition-colors"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* 底部装饰性元素 */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-32 h-32 opacity-20">
              <img 
                src="/consensus-circle.png"
                alt="共识法阵" 
                className="w-full h-full rotating"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full rune-glow"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAnoma;

