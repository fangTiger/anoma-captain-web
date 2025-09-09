import { motion } from 'framer-motion';
import { Cpu, Network, Shield } from 'lucide-react';
import { content } from '../../lib/content';

const Architecture = () => {
  const { architecture } = content;

  const iconMap = {
    0: Cpu,
    1: Network,
    2: Shield
  };

  return (
    <section id="architecture" className="py-20 px-6 bg-gradient-to-b from-background to-card/20">
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
            {architecture.title}
          </h2>
          <p className="text-xl text-secondary font-medium max-w-3xl mx-auto">
            {architecture.subtitle}
          </p>
        </motion.div>

        {/* 架构图示 */}
        <motion.div 
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div >
            <img src="/demo-0.png" alt="应用示例" />
            <img src="/demo-1.png" alt="应用示例" />
            <img src="/demo-2.png" alt="应用示例" />
            <img src="/demo-3.png" alt="应用示例" />
          </div>
        </motion.div>

        {/* 架构组件 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {architecture.sections.map((section, index) => {
            const Icon = iconMap[index];
            
            return (
              <motion.div
                key={index}
                className="arcane-card text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* 图标 */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center rune-glow">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {section.title}
                </h3>

                {/* 描述 */}
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>

                {/* 装饰性连接线 */}
                {index < architecture.sections.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 底部说明 */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 arcane-card">
            <h4 className="text-xl font-semibold mb-4 text-primary">
              同构架构，异构安全
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Anoma 遵循同构架构/异构安全的设计原则，类似于 TCP/IP 协议栈。
              各层协议标准化，但用户可以选择不同的安全域和信任模型，
              在使用相同协议栈的同时做出不同的选择。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;

