// 网站内容配置
export const content = {
  hero: {
    title: "奥秘共识的法阵",
    subtitle: "意图驱动的分布式操作系统",
    description: "Anoma 是一个以“意图为中心”（intent-centric）的分布式操作系统架构，旨在统一碎片化的区块链生态，简化 dApp 开发，并赋能更自然、人性化的 Web3 用户体验。",
    cta: {
      primary: "探索白皮书"
      // secondary: "开始构建"
    }
  },
  
  whyAnoma: {
    title: "为何选择 Anoma",
    subtitle: "巫术卷轴中的奥秘力量",
    cards: [
      {
        title: "意图驱动设计",
        description: "用户只需表达（比如“用 ETH 交换 NFT”），Anoma 的“意图机器”会自动匹配交易。",
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
    ]
  },
  
  architecture: {
    title: "法术书中的架构奥秘",
    subtitle: "意图中心化与实际场景的完美融合",
    sections: [
      {
        title: "意图机器 (IM)",
        description: "Anoma的核心处理单元，类似于EVM处理交易，IM处理意图并将其转化为状态变更。IM可与现有VM（如EVM）无缝协作，实现跨链意图结算。"
      },
      {
        title: "去中心化求解器网络",
        description: "负责匹配和解决用户意图，将复杂的多方协调和计算外包给专业求解器，确保意图的原子性结算。"
      },
      {
        title: "异构安全模型",
        description: "允许不同安全模型共存，用户可以根据自己的需求选择不同的安全域和信任模型。"
      }
    ]
  },
  
  useCases: {
    title: "应用秘章",
    subtitle: "Anoma 赋能的去中心化应用",
    cases: [
      {
        title: "隐私支付",
        description: "通过可编程数据主权和零知识证明技术，实现高度隐私保护的交易。",
        icon: "🔒"
      },
      {
        title: "跨链结算",
        description: "实现不同区块链网络之间的原子级跨链结算，解决碎片化生态的互操作性难题。",
        icon: "🌉"
      },
      {
        title: "意图撮合",
        description: "高效撮合用户意图，在去中心化交易所中寻找最佳交易路径和对手方。",
        icon: "🎲"
      },
      {
        title: "MEV抑制",
        description: "通过将交易意图与实际执行分离，有效抑制最大可提取价值（MEV）问题。",
        icon: "🛡️"
      },
      {
        title: "复杂多方协调",
        description: "特别适用于需要多方协作才能完成的复杂应用，如去中心化治理、供应链金融等。",
        icon: "🤝"
      }
    ]
  },
  
  roadmap: {
    title: "占卜星盘",
    subtitle: "Anoma 的发展路线图",
    phases: [
      {
        name: "Galileo (伽利略)",
        description: "将Anoma分布式操作系统部署到以太坊（包括其他EVM链）及其他系统，使开发者能够以意图而非交易编写应用。",
        status: "进行中"
      },
      {
        name: "Dagon (达贡)",
        description: "将OS的各个独立部署网络化为一个整体的分布式系统，实现多域并发和结算。",
        status: "规划中"
      },
      {
        name: "Ahra (阿赫拉)",
        description: "实现无尺度本地和全局共识，任何联网设备都可成为分布式OS的一部分，最终实现'世界计算机'的愿景。",
        status: "未来"
      }
    ]
  },
  
  builders: {
    title: "铸造工坊",
    subtitle: "为开发者提供的工具与资源",
    resources: [
      {
        title: "SDK 与工具",
        description: "完整的开发工具包，让您轻松构建意图中心化应用。",
        link: "#"
      },
      {
        title: "示例仓库",
        description: "丰富的代码示例和最佳实践，快速上手 Anoma 开发。",
        link: "#"
      },
      {
        title: "开发者社区",
        description: "加入活跃的开发者社区，与同行交流经验和想法。",
        link: "#"
      },
      {
        title: "技术文档",
        description: "详尽的技术文档和API参考，助您深入理解 Anoma。",
        link: "#"
      }
    ]
  },
  
  faq: {
    title: "魔导师问答",
    subtitle: "关于 Anoma 的常见问题",
    questions: [
      {
        question: "什么是意图中心化？",
        answer: "意图中心化是一种新的区块链交互范式，用户只需表达他们想要实现的结果（意图），而不需要指定具体的执行步骤。Anoma 会自动处理复杂的执行过程。"
      },
      {
        question: "Anoma 如何解决区块链碎片化问题？",
        answer: "Anoma 作为统一的操作系统，将不同的区块链网络抽象为单一的开发环境，开发者可以一次编写应用，在任何支持的链上部署和运行。"
      },
      {
        question: "什么是意图机器（IM）？",
        answer: "意图机器是 Anoma 的核心组件，类似于以太坊虚拟机（EVM）处理交易，IM 专门处理用户意图并将其转化为具体的状态变更。"
      },
      {
        question: "Anoma 如何保护用户隐私？",
        answer: "Anoma 引入了可编程数据主权概念，用户和开发者可以完全控制在意图解决和结算过程中与谁共享什么数据。"
      },
      {
        question: "开发者如何开始使用 Anoma？",
        answer: "开发者可以通过我们的 SDK 和工具包开始构建意图中心化应用，我们提供了丰富的文档、示例代码和活跃的社区支持。"
      },
      {
        question: "Anoma 的代币经济模型是什么？",
        answer: "XAN 是 Anoma 的原生代币，作为全局协调机制，用于支付意图执行费用、求解器服务费用和共识提供者费用。"
      },
      {
        question: "Anoma 与现有区块链平台有什么不同？",
        answer: "Anoma 采用同构架构/异构安全模型，既提供统一的开发体验，又允许用户选择不同的安全模型，这与传统的同构或异构平台都不同。"
      },
      {
        question: "什么是去中心化求解器网络？",
        answer: "这是 Anoma 生态系统中的专业节点网络，负责匹配用户意图、寻找最优执行路径，并确保意图能够在相关区块链上得到原子性结算。"
      }
    ]
  }
};

// 配色方案
export const colorSchemes = {
  default: {
    name: "奥秘青绿",
    primary: "#00ffcc",
    secondary: "#8b5cf6",
    accent: "#06b6d4",
    background: "#0a0a0a",
    surface: "#1a1a1a"
  },
  purple: {
    name: "电紫幽蓝",
    primary: "#a855f7",
    secondary: "#3b82f6",
    accent: "#06b6d4",
    background: "#0f0a1a",
    surface: "#1a0f2e"
  },
  cyan: {
    name: "赛博青蓝",
    primary: "#06b6d4",
    secondary: "#10b981",
    accent: "#f59e0b",
    background: "#0a1a1a",
    surface: "#0f2a2a"
  }
};

// 字体组合
export const fontCombinations = {
  default: {
    name: "Inter + Space Grotesk",
    heading: "Space Grotesk",
    body: "Inter"
  },
  alternative: {
    name: "JetBrains Mono + Inter",
    heading: "JetBrains Mono",
    body: "Inter"
  }
};

