import { useEffect, useRef } from 'react';

const ArcaneCanvas = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    // 设置画布尺寸
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 绘制魔法圆环
    const drawMagicCircle = (centerX, centerY, radius, rotation) => {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);

      // 外圆环
      ctx.strokeStyle = '#00ffcc';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00ffcc';
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();

      // 内部符文
      const runeCount = 8;
      for (let i = 0; i < runeCount; i++) {
        const angle = (i / runeCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius * 0.8;
        const y = Math.sin(angle) * radius * 0.8;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 2);

        // 绘制符文符号
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#8b5cf6';
        
        ctx.beginPath();
        ctx.moveTo(-5, -5);
        ctx.lineTo(5, 5);
        ctx.moveTo(5, -5);
        ctx.lineTo(-5, 5);
        ctx.moveTo(0, -8);
        ctx.lineTo(0, 8);
        ctx.stroke();

        ctx.restore();
      }

      // 中心核心
      ctx.fillStyle = '#06b6d4';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#06b6d4';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // 绘制能量波纹
    const drawEnergyRipples = (centerX, centerY, time) => {
      for (let i = 0; i < 3; i++) {
        const rippleRadius = (time * 50 + i * 30) % 200;
        const opacity = 1 - (rippleRadius / 200);

        ctx.strokeStyle = `rgba(0, 255, 204, ${opacity * 0.3})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, rippleRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    // 动画循环
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      ctx.clearRect(0, 0, rect.width, rect.height);

      // 绘制能量波纹
      drawEnergyRipples(centerX, centerY, time);

      // 绘制主魔法圆环
      drawMagicCircle(centerX, centerY, 80, time * 0.01);

      // 绘制次级圆环
      drawMagicCircle(centerX, centerY, 120, -time * 0.008);

      // 绘制外层圆环
      drawMagicCircle(centerX, centerY, 160, time * 0.005);

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default ArcaneCanvas;

