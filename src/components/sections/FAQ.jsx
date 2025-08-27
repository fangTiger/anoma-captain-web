import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { content } from '../../lib/content';

const FAQ = () => {
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-4xl mx-auto">
        {/* 标题部分 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            {faq.title}
          </h2>
          <p className="text-xl text-secondary font-medium">
            {faq.subtitle}
          </p>
        </motion.div>

        {/* 魔导师装饰 */}
        <motion.div 
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center rune-glow">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full rune-glow"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-accent rounded-full rune-glow"></div>
          </div>
        </motion.div>

        {/* FAQ 列表 */}
        <div className="space-y-4">
          {faq.questions.map((item, index) => (
            <motion.div
              key={index}
              className="arcane-card cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => toggleQuestion(index)}
            >
              {/* 问题 */}
              <div className="flex items-center justify-between p-2">
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </div>

              {/* 答案 */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2 border-t border-primary/20">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* 底部联系信息 */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="p-8 arcane-card">
            <h4 className="text-xl font-semibold mb-4 text-primary">
              还有其他问题？
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              如果您有其他关于 Anoma 的问题，欢迎加入我们的社区或查阅技术文档。
              我们的团队和社区成员随时准备为您提供帮助。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="magic-button px-6 py-3 rounded-lg font-medium transition-all"
                onClick={() => window.open('https://discord.com/invite/anoma', '_blank')}
              >
                加入 Discord
              </button>
              
              <button 
                className="magic-button px-6 py-3 rounded-lg font-medium transition-all"
                onClick={() => window.open('https://github.com/anoma/whitepaper', '_blank')}
              >
                查看文档
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;

