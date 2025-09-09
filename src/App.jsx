import React, { useState, useEffect } from 'react';
import Hero from './components/sections/Hero';
import WhyAnoma from './components/sections/WhyAnoma';
import Architecture from './components/sections/Architecture';
import UseCases from './components/sections/UseCases';
import FAQ from './components/sections/FAQ';
import './assets/logo.jpg'
import './App.css';

// 页面组件
const HomePage = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
    color: '#e0e0e0',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px'
  }}>
    <h1 style={{
      fontSize: '4rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #00ffcc 0%, #8b5cf6 50%, #06b6d4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }}>
      奥秘共识的法阵
    </h1>

    <h2 style={{
      fontSize: '1.5rem',
      marginBottom: '2rem',
      color: '#8b5cf6'
    }}>
      意图驱动的分布式操作系统
    </h2>

    <p style={{
      fontSize: '1.1rem',
      maxWidth: '800px',
      lineHeight: '1.6',
      marginBottom: '3rem',
      color: '#a0a0a0'
    }}>
      Anoma 是一个以“意图为中心”（intent-centric）的分布式操作系统架构，旨在统一碎片化的区块链生态，简化 dApp 开发，并赋能更自然、人性化的 Web3 用户体验。
    </p>

    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <button
        onClick={() => window.open('https://github.com/anoma/whitepaper', '_blank')}
        style={{
          padding: '12px 24px',
          fontSize: '1.1rem',
          background: 'linear-gradient(135deg, rgba(0, 255, 204, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          border: '1px solid rgba(0, 255, 204, 0.3)',
          borderRadius: '8px',
          color: '#00ffcc',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = 'rgba(0, 255, 204, 0.6)';
          e.target.style.boxShadow = '0 0 30px rgba(0, 255, 204, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = 'rgba(0, 255, 204, 0.3)';
          e.target.style.boxShadow = 'none';
        }}
      >
        探索白皮书
      </button>

      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    const buildersSection = document.getElementById('builders');*/}
      {/*    if (buildersSection) {*/}
      {/*      buildersSection.scrollIntoView({ behavior: 'smooth' });*/}
      {/*    } else {*/}
      {/*      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });*/}
      {/*    }*/}
      {/*  }}*/}
      {/*  style={{*/}
      {/*    padding: '12px 24px',*/}
      {/*    fontSize: '1.1rem',*/}
      {/*    background: 'transparent',*/}
      {/*    border: '1px solid rgba(0, 255, 204, 0.3)',*/}
      {/*    borderRadius: '8px',*/}
      {/*    color: '#00ffcc',*/}
      {/*    cursor: 'pointer',*/}
      {/*    transition: 'all 0.3s ease'*/}
      {/*  }}*/}
      {/*  onMouseEnter={(e) => {*/}
      {/*    e.target.style.borderColor = 'rgba(0, 255, 204, 0.6)';*/}
      {/*    e.target.style.boxShadow = '0 0 30px rgba(0, 255, 204, 0.3)';*/}
      {/*  }}*/}
      {/*  onMouseLeave={(e) => {*/}
      {/*    e.target.style.borderColor = 'rgba(0, 255, 204, 0.3)';*/}
      {/*    e.target.style.boxShadow = 'none';*/}
      {/*  }}*/}
      {/*>*/}
      {/*  开始构建*/}
      {/*</button>*/}
    </div>

    <div style={{
      marginTop: '4rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      width: '100%'
    }}>
      {[
        {
          title: "意图驱动设计",
          description: "用户只需声明自己的目标（比如“用 ETH 交换 NFT”），Anoma 的“意图机器”会自动匹配交易对手，处理所有技术细节。无需用户关心底层步骤，大大简化了 Web3 体验。",
          icon: "🌐"
        },
        {
          title: "隐私保护",
          description: "使用 ZKP & MASP 实现高度私密的资产与交易信息保护",
          icon: "🎯"
        },
        {
          title: "跨链互操作与原子结算",
          description: "支持原子多链结算，整合链间资产流动与交易效率",
          icon: "⚡"
        },
        {
          title: "模块化架构与可扩展部署",
          description: "可组合、可扩展、支持地域化部署的操作系统式架构",
          icon: "🔗"
        }
      ].map((card, index) => (
        <div key={index} style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.4) 100%)',
          border: '1px solid rgba(0, 255, 204, 0.2)',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'left',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{card.icon}</div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#e0e0e0'
          }}>
            {card.title}
          </h3>
          <p style={{
            color: '#a0a0a0',
            lineHeight: '1.5'
          }}>
            {card.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const WhitepaperPage = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
    color: '#e0e0e0',
    padding: '2rem'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #00ffcc 0%, #8b5cf6 50%, #06b6d4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center'
      }}>
        Anoma 白皮书解读
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {[
          {
            title: "🎯 意图中心化架构",
            content: "Anoma采用意图中心化设计，用户只需表达想要实现的目标，而不需要指定具体的执行路径。意图是用户想要达成状态转换的表达，比如'将X从A转移到B'或'用X交换Y'。这种声明式范式让用户拥有更高的控制度，无需理解底层协议原语。"
          },
          {
            title: "🏗️ 同构架构异构安全",
            content: "Anoma遵循同构架构、异构安全的设计原则。协议的各个层次（对手方发现、求解、结算）是标准化的，但用户可以选择信任什么安全域、向谁发送什么数据。这类似于TCP/IP协议栈，提供了标准化接口但允许用户做出不同的安全选择。"
          },
          {
            title: "🔄 三阶段部署路线图",
            content: "Galileo阶段：将Anoma分布式操作系统部署到以太坊等现有链上；Dagon阶段：实现多域并发和结算，连接所有部署实例；Ahra阶段：实现无规模限制的本地和全局共识，完成世界计算机的愿景。"
          },
          {
            title: "💎 XAN代币效用",
            content: "XAN是Anoma的原生代币，作为全局协调机制为分布式操作系统提供动力。它不仅捕获单一基础层的经济价值，而是捕获在分布式操作系统上协调的所有价值的一部分，具有优越的价值捕获动态。"
          },
          {
            title: "🔧 有效性谓词模型",
            content: "Anoma使用有效性谓词架构来实现智能合约，将计算状态转换和验证状态转换正确性的任务清晰分离。这与当前可编程结算架构中交织计算和验证的消息传递VM执行模型形成对比，让开发者能更好地推理应用不变量。"
          },
          {
            title: "🌐 分形实例架构",
            content: "Anoma支持分形实例架构，允许根据应用需求创建不同的共识实例。这使得应用可以选择最适合其需求的安全模型和性能特征，同时保持与整个Anoma生态系统的互操作性。"
          }
        ].map((section, index) => (
          <div key={index} style={{
            background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.4) 100%)',
            border: '1px solid rgba(0, 255, 204, 0.2)',
            borderRadius: '16px',
            padding: '2rem',
            transition: 'all 0.3s ease'
          }}>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#00ffcc'
            }}>
              {section.title}
            </h3>
            <p style={{
              color: '#a0a0a0',
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 255, 204, 0.1) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.3)',
        borderRadius: '16px',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          marginBottom: '1rem',
          color: '#8b5cf6'
        }}>
          🚀 创新应用场景
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '1.5rem'
        }}>
          {[
            "去中心化交易所",
            "Rollup基础设施",
            "公共物品资助",
            "DAO 2.0组织",
            "运行时Rollup",
            "多方复杂物物交换",
            "复杂拍卖机制",
            "本地情节游戏"
          ].map((app, index) => (
            <div key={index} style={{
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '8px',
              padding: '1rem',
              color: '#e0e0e0',
              fontSize: '0.9rem'
            }}>
              {app}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ArchitecturePage = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
    color: '#e0e0e0',
    padding: '2rem'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #00ffcc 0%, #8b5cf6 50%, #06b6d4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center'
      }}>
        技术架构深度解析
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.4) 100%)',
          border: '1px solid rgba(0, 255, 204, 0.2)',
          borderRadius: '16px',
          padding: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#00ffcc'
          }}>
            🕸️ Gossip网络层
          </h3>
          <ul style={{
            color: '#a0a0a0',
            lineHeight: '1.6',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>• 伪匿名身份识别的稀疏覆盖网络</li>
            <li style={{ marginBottom: '0.5rem' }}>• 路径认证和故障问责机制</li>
            <li style={{ marginBottom: '0.5rem' }}>• 激励化数据可用性层</li>
            <li style={{ marginBottom: '0.5rem' }}>• 支持意图广播和求解器发现</li>
          </ul>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.4) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          borderRadius: '16px',
          padding: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#8b5cf6'
          }}>
            🧮 求解器网络
          </h3>
          <ul style={{
            color: '#a0a0a0',
            lineHeight: '1.6',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>• 可编程求解器算法</li>
            <li style={{ marginBottom: '0.5rem' }}>• NP搜索问题的计算外包</li>
            <li style={{ marginBottom: '0.5rem' }}>• 多方意图匹配和优化</li>
            <li style={{ marginBottom: '0.5rem' }}>• 原子性状态转换计算</li>
          </ul>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.4) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          borderRadius: '16px',
          padding: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#06b6d4'
          }}>
          ⚖️ 结算层
          </h3>
          <ul style={{
            color: '#a0a0a0',
            lineHeight: '1.6',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>• 分形实例架构</li>
            <li style={{ marginBottom: '0.5rem' }}>• Typhon共识算法</li>
            <li style={{ marginBottom: '0.5rem' }}>• 有效性谓词验证</li>
            <li style={{ marginBottom: '0.5rem' }}>• 跨链原子结算</li>
          </ul>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.4) 100%)',
          border: '1px solid rgba(255, 165, 0, 0.2)',
          borderRadius: '16px',
          padding: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#ffa500'
          }}>
            🔐 隐私与加密
          </h3>
          <ul style={{
            color: '#a0a0a0',
            lineHeight: '1.6',
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '0.5rem' }}>• 可编程阈值解密（Ferveo）</li>
            <li style={{ marginBottom: '0.5rem' }}>• 零知识证明系统</li>
            <li style={{ marginBottom: '0.5rem' }}>• 全同态加密（FHE）</li>
            <li style={{ marginBottom: '0.5rem' }}>• 数据局部性和隐私保护</li>
          </ul>
        </div>
      </div>

      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 255, 204, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
        border: '1px solid rgba(0, 255, 204, 0.2)',
        borderRadius: '16px',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: '#00ffcc'
        }}>
          🌟 核心创新优势
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {[
            {
              title: "声明式编程范式",
              desc: "用户声明意图而非执行路径"
            },
            {
              title: "垂直集成架构",
              desc: "统一对手方发现、求解和结算"
            },
            {
              title: "异构安全模型",
              desc: "用户可选择不同的安全域"
            },
            {
              title: "原子跨链操作",
              desc: "支持多链原子结算"
            }
          ].map((feature, index) => (
            <div key={index} style={{
              background: 'rgba(0, 255, 204, 0.1)',
              border: '1px solid rgba(0, 255, 204, 0.2)',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'left'
            }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#00ffcc'
              }}>
                {feature.title}
              </h4>
              <p style={{
                color: '#a0a0a0',
                fontSize: '0.9rem',
                lineHeight: '1.4'
              }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const RoadmapPage = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
    color: '#e0e0e0',
    padding: '2rem'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, #00ffcc 0%, #8b5cf6 50%, #06b6d4 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center'
      }}>
        发展路线图
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        marginTop: '3rem'
      }}>
        {[
          {
            phase: "Galileo",
            title: "分布式操作系统部署",
            status: "进行中",
            color: "#00ffcc",
            features: [
              "部署Anoma分布式操作系统到以太坊",
              "支持其他EVM链（Polygon、Arbitrum等）",
              "扩展到SVM、CosmWASM等其他架构",
              "开发者可以用意图而非交易编写应用",
              "一次编写，到处部署的开发体验"
            ]
          },
          {
            phase: "Dagon",
            title: "多域并发与结算",
            status: "规划中",
            color: "#8b5cf6",
            features: [
              "连接所有OS部署实例为统一分布式系统",
              "支持跨域意图执行（跨链交易）",
              "开发者可利用不同底层系统的优势",
              "从Celestia获取DA，从以太坊获取排序",
              "实现真正的多链互操作性"
            ]
          },
          {
            phase: "Ahra",
            title: "超大规模世界计算机",
            status: "未来愿景",
            color: "#06b6d4",
            features: [
              "完成世界计算机的最终形态",
              "任何网络设备都可成为分布式OS的一部分",
              "支持本地共识实例（企业链、本地交易）",
              "比Solana更快（本地共识优于全局共识）",
              "比比特币更去中心化（全球每个人都可参与）"
            ]
          }
        ].map((roadmapItem, index) => (
          <div key={index} style={{
            background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(42, 42, 42, 0.4) 100%)',
            border: `1px solid ${roadmapItem.color}40`,
            borderRadius: '16px',
            padding: '2rem',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${roadmapItem.color}20, ${roadmapItem.color}40)`,
                border: `2px solid ${roadmapItem.color}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: roadmapItem.color,
                marginRight: '1.5rem'
              }}>
                {index + 1}
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: roadmapItem.color,
                  marginBottom: '0.5rem'
                }}>
                  {roadmapItem.phase}
                </h3>
                <h4 style={{
                  fontSize: '1.2rem',
                  color: '#e0e0e0',
                  marginBottom: '0.5rem'
                }}>
                  {roadmapItem.title}
                </h4>
                <span style={{
                  fontSize: '0.9rem',
                  color: roadmapItem.color,
                  background: `${roadmapItem.color}20`,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  border: `1px solid ${roadmapItem.color}40`
                }}>
                  {roadmapItem.status}
                </span>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              {roadmapItem.features.map((feature, featureIndex) => (
                <div key={featureIndex} style={{
                  background: `${roadmapItem.color}10`,
                  border: `1px solid ${roadmapItem.color}30`,
                  borderRadius: '8px',
                  padding: '1rem',
                  color: '#a0a0a0',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: <Hero />,
    whitepaper: <WhitepaperPage />,
    // hero: <Hero />,
    whyAnoma: <WhyAnoma />,
    Architecture: <Architecture />,
    UseCases: <UseCases />,
    FAQ: <FAQ />,
    architecture: <ArchitecturePage />,
    roadmap: <RoadmapPage />
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* 导航栏 */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(10, 10, 10, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 255, 204, 0.2)',
        padding: '1rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #00ffcc 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            <span>Anoma</span>
          </div>

          <div style={{display: 'flex', gap: '2rem'}}>
            {[
              // {key: 'home', label: '首页'},
              {key: 'home', label: '首页'},
              {key: 'whitepaper', label: '白皮书解读'},
              {key: 'architecture', label: '技术架构'},
              {key: 'whyAnoma', label: '为何选择 Anoma'},
              {key: 'Architecture', label: '法术书中的架构奥秘'},
              {key: 'UseCases', label: '应用秘章'},
              {key: 'FAQ', label: '魔导师问答'},
              {key: 'roadmap', label: '发展路线图'}
            ].map((nav) => (
                <button
                    key={nav.key}
                    onClick={() => setCurrentPage(nav.key)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: currentPage === nav.key ? '#00ffcc' : '#a0a0a0',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: currentPage === nav.key ? 'underline' : 'none',
                      textUnderlineOffset: '4px'
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== nav.key) {
                        e.target.style.color = '#e0e0e0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== nav.key) {
                        e.target.style.color = '#a0a0a0';
                      }
                    }}
                >
                  {nav.label}
                </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <div style={{paddingTop: '80px'}}>
        {pages[currentPage]}
      </div>

      {/* Captain制作模块 */}
      <div style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        padding: '2rem',
        borderTop: '1px solid rgba(0, 255, 204, 0.2)'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(0, 255, 204, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
          border: '1px solid rgba(0, 255, 204, 0.2)',
          borderRadius: '16px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <span style={{
              fontSize: '1.5rem',
              filter: 'drop-shadow(0 0 8px rgba(0, 255, 204, 0.6))'
            }}>⚡</span>
            <span style={{
              color: '#00ffcc',
              fontWeight: '700',
              fontSize: '1.3rem',
              textShadow: '0 0 10px rgba(0, 255, 204, 0.5)'
            }}>
              网站由 Captain(@mycndota) 制作
            </span>
            <span style={{
              fontSize: '1.5rem',
              filter: 'drop-shadow(0 0 8px rgba(0, 255, 204, 0.6))'
            }}>⚡</span>
          </div>
          <div style={{
            color: '#8b5cf6',
            fontSize: '1rem',
            fontStyle: 'italic',
            marginBottom: '0.5rem'
          }}>
            融合巫师美学与现代科技的创意设计
          </div>
          <div style={{
            color: '#a0a0a0',
            fontSize: '0.85rem',
            opacity: 0.8
          }}>
            "在奥秘的共识法阵中，意图化为现实"
          </div>

          {/* 装饰性魔法粒子 */}
          <div style={{
            position: 'relative',
            marginTop: '1rem',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 255, 204, 0.5), transparent)',
            borderRadius: '1px'
          }}>
            <div style={{
              position: 'absolute',
              top: '-2px',
              left: '20%',
              width: '4px',
              height: '4px',
              background: '#00ffcc',
              borderRadius: '50%',
              boxShadow: '0 0 8px rgba(0, 255, 204, 0.8)',
              animation: 'pulse 2s infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '-2px',
              right: '20%',
              width: '4px',
              height: '4px',
              background: '#8b5cf6',
              borderRadius: '50%',
              boxShadow: '0 0 8px rgba(139, 92, 246, 0.8)',
              animation: 'pulse 2s infinite 0.5s'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

