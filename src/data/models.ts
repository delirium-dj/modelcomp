// Single source of truth for model scores, synced from model-comparison.md (v2).
// Adding a future model = appending one AiModel object; selectors, chart,
// table and cards update automatically. No chart code changes needed.

export interface ModelScores {
  tool: number;
  reasoning: number;
  context: number;
  multimodal: number;
  coding: number;
  cost: number;
  overall: number;
}

export interface AiModel {
  id: string;
  name: string;
  short: string;
  scores: ModelScores;
  meta: {
    contextWindow: string;
    modalities: string;
    pricingNote: string;
    /** True when no Zen Free ID exists; cost is scored on paid pricing. */
    noFreeId?: boolean;
  };
}

/** Fixed axis order, clockwise from top of the hexagon. */
export const DIMENSIONS = [
  {
    key: "tool",
    label: "Tool use",
    short: "Tool",
    description: "Performance on agent benchmarks like Terminal-Bench, Tau3, and Claw-Eval.",
  },
  {
    key: "reasoning",
    label: "Reasoning",
    short: "Reason",
    description:
      "Ability to solve complex, multi-step problems, based on reasoning benchmarks. Higher reasoning results score higher.",
  },
  {
    key: "context",
    label: "Context window",
    short: "Context",
    description: "How much input the model can process at once. Larger context windows score higher.",
  },
  {
    key: "multimodal",
    label: "Multimodal",
    short: "Multi",
    description: "Support for non-text input and output, including images, audio, and video.",
  },
  {
    key: "coding",
    label: "Coding",
    short: "Code",
    description:
      "Performance on software engineering and coding benchmarks. Stronger coding ability scores higher.",
  },
  {
    key: "cost",
    label: "Cost efficiency",
    short: "Cost",
    description: "Relative input and output pricing. Lower-cost models score higher.",
  },
] as const;

export type DimensionKey = (typeof DIMENSIONS)[number]["key"];

/** Series colors for Model A / B / C slots. */
export const MODEL_COLORS = ["#4f46e5", "#059669", "#d97706"];

export const MODELS: AiModel[] = [
  {
    id: "opencode/big-pickle",
    name: "Big Pickle",
    short:
      "Free stealth reasoning model on OpenCode Zen (community consensus: GLM-4.6). Roughly Sonnet-class coding at zero token cost during the free period.",
    scores: { tool: 55, reasoning: 60, context: 70, multimodal: 15, coding: 70, cost: 100, overall: 62 },
    meta: {
      contextWindow: "200K total (160K in / 32K out)",
      modalities: "Text in/out only",
      pricingNote: "Free Zen tier; paid equiv. GLM-4.6 ~$0.60/$2.20 per 1M",
    },
  },
  {
    id: "opencode/muse-spark-1.3-contributor-free",
    name: "Muse Spark 1.3 Free",
    short:
      "Free Contributor-tier access to Meta's Muse Spark 1.3 for coding and long-horizon agentic work. Same weights as standard 1.3; training-data consent in exchange for $0.",
    scores: { tool: 95, reasoning: 92, context: 100, multimodal: 85, coding: 95, cost: 100, overall: 95 },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, video, PDF in; text out",
      pricingNote: "Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M",
    },
  },
  {
    id: "opencode/ling-3.0-flash-fin-free",
    name: "Ling 3.0 Flash Fin Free",
    short:
      "Finance-enhanced MoE by InclusionAI / Ant Group for financial research and tool-intensive workflows, retaining strong coding and math.",
    scores: { tool: 68, reasoning: 70, context: 72, multimodal: 15, coding: 72, cost: 100, overall: 66 },
    meta: {
      contextWindow: "262,144 (256K marketed) / 32K out",
      modalities: "Text in/out only",
      pricingNote: "Free Zen tier (limited-time promo)",
    },
  },
  {
    id: "opencode/mimo-v2.5-free",
    name: "MiMo V2.5 Free",
    short:
      "Native omni-modal open-weights MoE by Xiaomi for text, image, video and audio understanding plus strong agentic coding. Free capped tier on Zen.",
    scores: { tool: 78, reasoning: 72, context: 70, multimodal: 95, coding: 78, cost: 100, overall: 82 },
    meta: {
      contextWindow: "200K Zen cap (native 1M) / 32K out",
      modalities: "Text, image, audio, video in; text out",
      pricingNote: "Free Zen tier; native from ~$0.14/$0.28 per 1M",
    },
  },
  {
    id: "opencode/muse-spark-1.2-contributor-free",
    name: "Muse Spark 1.2 Free",
    short:
      "Prior-gen Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use and whole-repo generation.",
    scores: { tool: 90, reasoning: 88, context: 100, multimodal: 90, coding: 88, cost: 100, overall: 93 },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, video, PDF in; text out",
      pricingNote: "Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M",
    },
  },
  {
    id: "opencode/nemotron-3-ultra-free",
    name: "Nemotron 3 Ultra Free",
    short:
      "NVIDIA flagship open-weights hybrid Mamba-MoE for frontier reasoning and long-running agents. Fast with low hallucination.",
    scores: { tool: 78, reasoning: 75, context: 97, multimodal: 20, coding: 80, cost: 100, overall: 75 },
    meta: {
      contextWindow: "1M (262K default serve)",
      modalities: "Text in/out (beyond text unverified)",
      pricingNote: "Free Zen / NVIDIA trial",
    },
  },
  {
    id: "opencode/nemotron-3.5-lightning-free",
    name: "Nemotron 3.5 Lightning Free",
    short:
      "Compact open 30B MoE (3B active) for high-volume, low-latency execution in always-on agents. Pairs with a frontier planner.",
    scores: { tool: 50, reasoning: 62, context: 72, multimodal: 15, coding: 58, cost: 100, overall: 60 },
    meta: {
      contextWindow: "262,144 native",
      modalities: "Text-only",
      pricingNote: "Free Zen / NVIDIA trial",
    },
  },
  {
    id: "opencode/glm-5.1",
    name: "GLM 5.1 Coding",
    short:
      "Z.AI flagship open-weights MoE for agentic engineering and long-horizon autonomous coding (SWE-Pro SOTA). No Zen Free ID; priced paid.",
    scores: { tool: 85, reasoning: 80, context: 70, multimodal: 15, coding: 88, cost: 75, overall: 69 },
    meta: {
      contextWindow: "200K–205K / 128K out",
      modalities: "Text in/out",
      pricingNote: "Paid $1.40/$4.40 per 1M (no Free ID)",
      noFreeId: true,
    },
  },
  {
    id: "opencode/minimax-m2.7",
    name: "MiniMax M2.7",
    short:
      "MiniMax self-improving frontier MoE for agentic coding, multi-agent collaboration and office productivity. No Zen Free ID; priced paid.",
    scores: { tool: 80, reasoning: 75, context: 70, multimodal: 15, coding: 82, cost: 90, overall: 69 },
    meta: {
      contextWindow: "196K–205K (200K class) / 131K out",
      modalities: "Text in/out only",
      pricingNote: "Paid $0.30/$1.20 per 1M (no Free ID)",
      noFreeId: true,
    },
  },
  {
    id: "xiaomi/mimo-v2.5-pro",
    name: "Xiaomi MiMo-V2.5-Pro",
    short:
      "Xiaomi flagship open-weights MoE (1.02T) for demanding agentic and 1,000+ tool-call tasks with strong 1M coherence. Text-focused Pro sibling.",
    scores: { tool: 82, reasoning: 78, context: 100, multimodal: 15, coding: 82, cost: 85, overall: 74 },
    meta: {
      contextWindow: "1M (Base 256K)",
      modalities: "Text-only (Pro)",
      pricingNote: "Paid ~$0.44/$0.87 per 1M (no Zen Free ID)",
      noFreeId: true,
    },
  },
];

export function getModel(id: string): AiModel | undefined {
  return MODELS.find((m) => m.id === id);
}

/** Dev/build check: overall must equal the rounded mean of the 6 dims. */
export function checkOverallScores(): void {
  for (const m of MODELS) {
    const s = m.scores;
    const expected = Math.round((s.tool + s.reasoning + s.context + s.multimodal + s.coding + s.cost) / 6);
    if (expected !== s.overall) {
      console.warn(`[models] overall mismatch for ${m.id}: file=${s.overall} computed=${expected}`);
    }
  }
}

if (import.meta.env.DEV) {
  checkOverallScores();
}
