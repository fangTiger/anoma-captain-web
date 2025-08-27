import { Button } from '@/components/ui/button';
import { ChevronDown, BookOpen, Code } from 'lucide-react';
import ArcaneCanvas from '../ArcaneCanvas';
import { content } from '../../lib/content';

const Hero = () => {
  const { hero } = content;

  const scrollToNext = () => {
    const nextSection = document.getElementById('why-anoma');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景魔法圆环 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 opacity-30">
          <ArcaneCanvas />
        </div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* 标题 */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text floating">
          {hero.title}
        </h1>

        {/* 副标题 */}
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-secondary">
          {hero.subtitle}
        </h2>

        {/* 描述 */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          {hero.description}
        </p>

        {/* CTA 按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          {/*<Button */}
          {/*  size="lg" */}
          {/*  className="magic-button px-8 py-4 text-lg font-medium"*/}
          {/*  onClick={() => window.open('#', '_blank')}*/}
          {/*>*/}
          {/*  <BookOpen className="mr-2 h-5 w-5" />*/}
          {/*  {hero.cta.primary}*/}
          {/*</Button>*/}
          
          {/*<Button */}
          {/*  variant="outline" */}
          {/*  size="lg" */}
          {/*  className="magic-button px-8 py-4 text-lg font-medium border-primary/30 hover:border-primary/60"*/}
          {/*  onClick={() => document.getElementById('builders')?.scrollIntoView({ behavior: 'smooth' })}*/}
          {/*>*/}
          {/*  <Code className="mr-2 h-5 w-5" />*/}
          {/*  {hero.cta.secondary}*/}
          {/*</Button>*/}
        </div>

        {/* 滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce p-2 rounded-full border border-primary/30 hover:border-primary/60 transition-colors"
            aria-label="滚动到下一部分"
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>

      {/* 装饰性符文 */}
      <div className="absolute top-20 left-20 w-16 h-16 opacity-20 rotating">
        <img 
          src="/src/assets/arcane-rune-1.png" 
          alt="符文装饰" 
          className="w-full h-full"
        />
      </div>
      
      <div className="absolute bottom-20 right-20 w-20 h-20 opacity-20 rotating" style={{ animationDelay: '1s' }}>
        <img 
          src="/src/assets/arcane-rune-2.png" 
          alt="符文装饰" 
          className="w-full h-full"
        />
      </div>

      {/* 能量脉冲环 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 border border-primary/10 rounded-full pulse-ring"></div>
        <div className="w-96 h-96 border border-secondary/10 rounded-full pulse-ring" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-96 h-96 border border-accent/10 rounded-full pulse-ring" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default Hero;

