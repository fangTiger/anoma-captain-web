import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Book, Users, FileText } from 'lucide-react';
import { content } from '../../lib/content';

const Builders = () => {
  const { builders } = content;

  const iconMap = {
    0: Code,
    1: Book,
    2: Users,
    3: FileText
  };

  return (
    <section id="builders" className="py-20 px-6">
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
            {builders.title}
          </h2>
          <p className="text-xl text-secondary font-medium">
            {builders.subtitle}
          </p>
        </motion.div>

        {/* 工坊装饰 */}
        <motion.div 
          className="mb-16 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-32 h-32 border-2 border-primary/30 rounded-lg rotating flex items-center justify-center">
              <Code className="w-16 h-16 text-primary rune-glow" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full rune-glow"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full rune-glow"></div>
          </div>
        </motion.div>

        {/* 资源网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {builders.resources.map((resource, index) => {
            const Icon = iconMap[index];
            
            return (
              <motion.div
                key={index}
                className="arcane-card group text-center cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open(resource.link, '_blank')}
              >
                {/* 图标 */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors rune-glow">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* 标题 */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>

                {/* 描述 */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {resource.description}
                </p>

                {/* 链接指示器 */}
                <div className="flex items-center justify-center text-primary group-hover:text-accent transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">了解更多</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 开发者行动号召 */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 arcane-card">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              准备好开始构建了吗？
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              加入 Anoma 生态系统，成为意图中心化革命的先驱者。
              我们提供完整的工具链、详尽的文档和活跃的社区支持，
              助您构建下一代去中心化应用。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="magic-button px-8 py-4"
                onClick={() => window.open('#', '_blank')}
              >
                <Code className="mr-2 h-5 w-5" />
                开始开发
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="magic-button px-8 py-4 border-primary/30 hover:border-primary/60"
                onClick={() => window.open('#', '_blank')}
              >
                <Users className="mr-2 h-5 w-5" />
                加入社区
              </Button>
            </div>
          </div>
        </motion.div>

        {/* 底部装饰性代码片段 */}
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/30 border border-primary/20 rounded-lg p-6 font-mono text-sm max-w-2xl">
            <div className="text-primary mb-2">// 意图中心化应用示例</div>
            <div className="text-muted-foreground">
              <span className="text-secondary">const</span> intent = <span className="text-accent">createIntent</span>({'{'}
            </div>
            <div className="text-muted-foreground ml-4">
              from: <span className="text-primary">'tokenA'</span>,
            </div>
            <div className="text-muted-foreground ml-4">
              to: <span className="text-primary">'tokenB'</span>,
            </div>
            <div className="text-muted-foreground ml-4">
              amount: <span className="text-accent">1000</span>
            </div>
            <div className="text-muted-foreground">{'}'});</div>
            <div className="text-muted-foreground mt-2">
              <span className="text-secondary">await</span> <span className="text-accent">anoma</span>.<span className="text-primary">submit</span>(intent);
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Builders;

