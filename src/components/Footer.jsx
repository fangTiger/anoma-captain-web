import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Volume2, VolumeX, Monitor, Palette, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [animationLevel, setAnimationLevel] = useState('high');
  const [backgroundMode, setBackgroundMode] = useState('dynamic');
  const [fontSize, setFontSize] = useState('normal');

  return (
    <footer className="relative py-16 px-6 bg-gradient-to-t from-card/50 to-background border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        {/* 主要内容 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo 和描述 */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Anoma
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Web3 的意图中心化操作系统，将底层区块链统一为单一开发环境，
              终结当今去中心化应用的状态与用户碎片化。
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <span className="text-primary">𝕏</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <span className="text-primary">⚡</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Discord"
              >
                <span className="text-primary">💬</span>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">快速链接</h4>
            <ul className="space-y-2">
              <li><a href="#why-anoma" className="text-muted-foreground hover:text-primary transition-colors">为何选择 Anoma</a></li>
              <li><a href="#architecture" className="text-muted-foreground hover:text-primary transition-colors">架构设计</a></li>
              <li><a href="#use-cases" className="text-muted-foreground hover:text-primary transition-colors">应用场景</a></li>
              <li><a href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors">发展路线</a></li>
            </ul>
          </div>

          {/* 开发者资源 */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">开发者</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">技术文档</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">SDK 下载</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">示例代码</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">社区论坛</a></li>
            </ul>
          </div>
        </div>

        {/* 设置面板 */}
        <div className="mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowSettings(!showSettings)}
            className="magic-button border-primary/30 hover:border-primary/60"
          >
            <Settings className="w-4 h-4 mr-2" />
            魔法设置
          </Button>

          {showSettings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-6 arcane-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 音效控制 */}
                <div>
                  <label className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">音效</span>
                    <button
                      onClick={() => setAudioEnabled(!audioEnabled)}
                      className="text-primary hover:text-accent transition-colors"
                    >
                      {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </button>
                  </label>
                </div>

                {/* 动效强度 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Monitor className="w-4 h-4 inline mr-1" />
                    动效强度
                  </label>
                  <select
                    value={animationLevel}
                    onChange={(e) => setAnimationLevel(e.target.value)}
                    className="w-full bg-input border border-border rounded px-2 py-1 text-sm"
                  >
                    <option value="high">高</option>
                    <option value="medium">中</option>
                    <option value="low">低</option>
                    <option value="none">关闭</option>
                  </select>
                </div>

                {/* 背景模式 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Palette className="w-4 h-4 inline mr-1" />
                    背景模式
                  </label>
                  <select
                    value={backgroundMode}
                    onChange={(e) => setBackgroundMode(e.target.value)}
                    className="w-full bg-input border border-border rounded px-2 py-1 text-sm"
                  >
                    <option value="dynamic">动态星云</option>
                    <option value="static">静态星空</option>
                    <option value="solid">纯色</option>
                  </select>
                </div>

                {/* 字体大小 */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Type className="w-4 h-4 inline mr-1" />
                    字体大小
                  </label>
                  <select
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    className="w-full bg-input border border-border rounded px-2 py-1 text-sm"
                  >
                    <option value="normal">常规</option>
                    <option value="large">大号</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* 底部信息 */}
        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Anoma. 本网站仅为演示用途，内容基于公开资料整理。
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">隐私政策</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">使用条款</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">免责声明</a>
            </div>
          </div>
        </div>

        {/* 魔法阵基座装饰 */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-16 h-16 border border-primary/20 rounded-full flex items-center justify-center bg-background">
            <div className="w-4 h-4 bg-primary rounded-full rune-glow"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

