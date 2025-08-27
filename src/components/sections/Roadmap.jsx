import { motion } from 'framer-motion';
import { CheckCircle, Clock, Star } from 'lucide-react';
import { content } from '../../lib/content';

const Roadmap = () => {
  const { roadmap } = content;

  const getStatusIcon = (status) => {
    switch (status) {
      case '进行中':
        return <Clock className="w-6 h-6 text-accent" />;
      case '规划中':
        return <Star className="w-6 h-6 text-secondary" />;
      case '未来':
        return <Star className="w-6 h-6 text-muted-foreground" />;
      default:
        return <CheckCircle className="w-6 h-6 text-primary" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case '进行中':
        return 'text-accent border-accent/30';
      case '规划中':
        return 'text-secondary border-secondary/30';
      case '未来':
        return 'text-muted-foreground border-muted-foreground/30';
      default:
        return 'text-primary border-primary/30';
    }
  };

  return (
    <section id="roadmap" className="py-20 px-6 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* 标题部分 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            {roadmap.title}
          </h2>
          <p className="text-xl text-secondary font-medium">
            {roadmap.subtitle}
          </p>
        </motion.div>

        {/* 星盘装饰 */}
        <motion.div 
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full rotating"></div>
            <div className="absolute inset-4 border border-secondary/20 rounded-full rotating" style={{ animationDirection: 'reverse' }}></div>
            <div className="absolute inset-8 border border-accent/20 rounded-full rotating"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-full rune-glow"></div>
            </div>
          </div>
        </motion.div>

        {/* 路线图阶段 */}
        <div className="space-y-12">
          {roadmap.phases.map((phase, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                {/* 阶段卡片 */}
                <div className="flex-1 arcane-card">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {phase.name}
                    </h3>
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor(phase.status)}`}>
                      {getStatusIcon(phase.status)}
                      <span className="text-sm font-medium">{phase.status}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>

                  {/* 进度指示器 */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">进度</span>
                      <span className="text-sm font-medium text-primary">
                        {phase.status === '进行中' ? '60%' : phase.status === '规划中' ? '20%' : '0%'}
                      </span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                        style={{ 
                          width: phase.status === '进行中' ? '60%' : phase.status === '规划中' ? '20%' : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* 中央连接器 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center rune-glow">
                    <span className="text-lg font-bold text-primary">{index + 1}</span>
                  </div>
                  {index < roadmap.phases.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mt-4"></div>
                  )}
                </div>

                {/* 占位符（保持布局平衡） */}
                <div className="flex-1"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部总结 */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 arcane-card">
            <h4 className="text-xl font-semibold mb-4 text-primary">
              世界计算机的愿景
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              通过三个阶段的渐进式部署，Anoma 将最终实现"世界计算机"的愿景：
              一个比 Solana 更快、比比特币更去中心化的分布式操作系统，
              让任何联网设备都能成为全球共识网络的一部分。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;

