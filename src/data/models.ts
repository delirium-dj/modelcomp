// Scores are sourced from model/<slug>/Ling_3.0.md, model/<slug>/Big_Pickle.md,
// model/<slug>/Muse_Spark_1.3.md, and model/<slug>/average.md, imported below
// as raw text (?raw) and parsed at build/dev time. Edit any of those files,
// rebuild, and the selectors, chart, table and cards update automatically.
// Meta (names, blurbs, context/pricing notes) stays curated in MODELS below.
// Adding a future model = one ?raw import per source + one AiModel object.
import avgBigPickle from "../../model/big-pickle/average.md?raw";
import avgMuseSpark13 from "../../model/muse-spark-1-3-free/average.md?raw";
import avgLingFin from "../../model/ling-3-0-flash-fin-free/average.md?raw";
import avgMimoV25 from "../../model/mimo-v2-5-free/average.md?raw";
import avgMuseSpark12 from "../../model/muse-spark-1-2-free/average.md?raw";
import avgNemotronUltra from "../../model/nemotron-3-ultra-free/average.md?raw";
import avgNemotronLightning from "../../model/nemotron-3-5-lightning-free/average.md?raw";
import avgGlm51 from "../../model/glm-5-1-coding/average.md?raw";
import avgMinimaxM27 from "../../model/minimax-m2-7/average.md?raw";
import avgMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/average.md?raw";
import bpBigPickle from "../../model/big-pickle/Big_Pickle.md?raw";
import bpMuseSpark13 from "../../model/muse-spark-1-3-free/Big_Pickle.md?raw";
import bpLingFin from "../../model/ling-3-0-flash-fin-free/Big_Pickle.md?raw";
import bpMimoV25 from "../../model/mimo-v2-5-free/Big_Pickle.md?raw";
import bpMuseSpark12 from "../../model/muse-spark-1-2-free/Big_Pickle.md?raw";
import bpNemotronUltra from "../../model/nemotron-3-ultra-free/Big_Pickle.md?raw";
import bpNemotronLightning from "../../model/nemotron-3-5-lightning-free/Big_Pickle.md?raw";
import bpGlm51 from "../../model/glm-5-1-coding/Big_Pickle.md?raw";
import bpMinimaxM27 from "../../model/minimax-m2-7/Big_Pickle.md?raw";
import bpMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/Big_Pickle.md?raw";
import msBigPickle from "../../model/big-pickle/Muse_Spark_1.3.md?raw";
import msMuseSpark13 from "../../model/muse-spark-1-3-free/Muse_Spark_1.3.md?raw";
import msLingFin from "../../model/ling-3-0-flash-fin-free/Muse_Spark_1.3.md?raw";
import msMimoV25 from "../../model/mimo-v2-5-free/Muse_Spark_1.3.md?raw";
import msMuseSpark12 from "../../model/muse-spark-1-2-free/Muse_Spark_1.3.md?raw";
import msNemotronUltra from "../../model/nemotron-3-ultra-free/Muse_Spark_1.3.md?raw";
import msNemotronLightning from "../../model/nemotron-3-5-lightning-free/Muse_Spark_1.3.md?raw";
import msGlm51 from "../../model/glm-5-1-coding/Muse_Spark_1.3.md?raw";
import msMinimaxM27 from "../../model/minimax-m2-7/Muse_Spark_1.3.md?raw";
import msMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/Muse_Spark_1.3.md?raw";
import l30BigPickle from "../../model/big-pickle/Ling_3.0.md?raw";
import l30MuseSpark13 from "../../model/muse-spark-1-3-free/Ling_3.0.md?raw";
import l30LingFin from "../../model/ling-3-0-flash-fin-free/Ling_3.0.md?raw";
import l30MimoV25 from "../../model/mimo-v2-5-free/Ling_3.0.md?raw";
import l30MuseSpark12 from "../../model/muse-spark-1-2-free/Ling_3.0.md?raw";
import l30NemotronUltra from "../../model/nemotron-3-ultra-free/Ling_3.0.md?raw";
import l30NemotronLightning from "../../model/nemotron-3-5-lightning-free/Ling_3.0.md?raw";
import l30Glm51 from "../../model/glm-5-1-coding/Ling_3.0.md?raw";
import l30MinimaxM27 from "../../model/minimax-m2-7/Ling_3.0.md?raw";
import l30MimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/Ling_3.0.md?raw";

export interface ModelScores {
  tool: number;
  reasoning: number;
  context: number;
  multimodal: number;
  coding: number;
  cost: number;
  overall: number;
}

/** Selectable results sources. `average` is the default view. */
export type SourceKey = "average" | "big-pickle" | "Muse Spark 1.3" | "Ling 3.0";

export const SOURCES: { key: SourceKey; label: string; file: string }[] = [
  { key: "average", label: "Average", file: "average.md" },
  { key: "big-pickle", label: "Big Pickle", file: "Big_Pickle.md" },
  { key: "Muse Spark 1.3", label: "Muse Spark 1.3", file: "Muse_Spark_1.3.md" },
  { key: "Ling 3.0", label: "Ling 3.0", file: "Ling_3.0.md" },
];

export interface AiModel {
  id: string;
  name: string;
  short: string;
  /** Averaged scores (default view). */
  scores: ModelScores;
  /** Per-source score sets; the results selector swaps `scores` for one of these. */
  sources: Record<SourceKey, ModelScores>;
  meta: {
    contextWindow: string;
    modalities: string;
    pricingNote: string;
    /** One line per pricing tier, shown stacked in the compare table. */
    pricingTiers?: string[];
    /** True when no Zen Free ID exists; cost is scored on paid pricing. */
    noFreeId?: boolean;
  };
}

/** Parse the "Averaged scores" block of an average.md file. Throws on drift. */
function parseAverageScores(md: string, id: string): ModelScores {
  const get = (label: string): number => {
    const m = md.match(new RegExp(`\\*\\*${label}:\\s*([\\d.]+)/100`));
    if (!m) throw new Error(`[models] missing "${label}" score in average.md for ${id}`);
    return Number(m[1]);
  };
  return {
    tool: get("Tool use"),
    reasoning: get("Reasoning"),
    context: get("Context window"),
    multimodal: get("Multimodal"),
    coding: get("Coding"),
    cost: get("Cost efficiency"),
    overall: get("Overall Score"),
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
    name: "Big Pickle (GLM 4.6)",
    short:
      "Free stealth reasoning model on OpenCode Zen (community consensus: GLM-4.6). Roughly Sonnet-class coding at zero token cost during the free period.",
    scores: parseAverageScores(l30BigPickle, "opencode/big-pickle"),
    sources: {
      average: parseAverageScores(avgBigPickle, "opencode/big-pickle"),
      "big-pickle": parseAverageScores(bpBigPickle, "opencode/big-pickle"),
      "Muse Spark 1.3": parseAverageScores(msBigPickle, "opencode/big-pickle"),
      "Ling 3.0": parseAverageScores(l30BigPickle, "opencode/big-pickle"),
    },
    meta: {
      contextWindow: "200K total (160K in / 32K out)",
      modalities: "Text in/out only",
      pricingNote: "Free Zen tier; paid equiv. GLM-4.6 ~$0.60/$2.20 per 1M",
      pricingTiers: ["Free Zen tier", "Paid equiv. GLM-4.6 ~$0.60/$2.20"],
    },
  },
  {
    id: "opencode/muse-spark-1.3-contributor-free",
    name: "Muse Spark 1.3 Free",
    short:
      "Free Contributor-tier access to Meta's Muse Spark 1.3 for coding and long-horizon agentic work. Same weights as standard 1.3; training-data consent in exchange for $0.",
    scores: parseAverageScores(l30MuseSpark13, "opencode/muse-spark-1.3-contributor-free"),
    sources: {
      average: parseAverageScores(avgMuseSpark13, "opencode/muse-spark-1.3-contributor-free"),
      "big-pickle": parseAverageScores(bpMuseSpark13, "opencode/muse-spark-1.3-contributor-free"),
      "Muse Spark 1.3": parseAverageScores(msMuseSpark13, "opencode/muse-spark-1.3-contributor-free"),
      "Ling 3.0": parseAverageScores(l30MuseSpark13, "opencode/muse-spark-1.3-contributor-free"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, video, PDF in; text out",
      pricingNote: "Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M",
      pricingTiers: ["Free Zen tier", "Contributor $0.10/$0.20", "Standard $1.25/$4.25"],
    },
  },
  {
    id: "opencode/ling-3-0-flash-fin-free",
    name: "Ling 3.0 Flash Fin Free",
    short:
      "Finance-enhanced MoE by InclusionAI / Ant Group for financial research and tool-intensive workflows, retaining strong coding and math.",
    scores: parseAverageScores(l30LingFin, "opencode/ling-3-0-flash-fin-free"),
    sources: {
      average: parseAverageScores(avgLingFin, "opencode/ling-3-0-flash-fin-free"),
      "big-pickle": parseAverageScores(bpLingFin, "opencode/ling-3-0-flash-fin-free"),
      "Muse Spark 1.3": parseAverageScores(msLingFin, "opencode/ling-3-0-flash-fin-free"),
      "Ling 3.0": parseAverageScores(l30LingFin, "opencode/ling-3-0-flash-fin-free"),
    },
    meta: {
      contextWindow: "262,144 (256K marketed) / 32K out",
      modalities: "Text in/out only",
      pricingNote: "Free Zen tier (limited-time promo)",
      pricingTiers: ["Free Zen tier (limited-time promo)"],
    },
  },
  {
    id: "opencode/mimo-v2.5-free",
    name: "MiMo V2.5 Free",
    short:
      "Native omni-modal open-weights MoE by Xiaomi for text, image, video and audio understanding plus strong agentic coding. Free capped tier on Zen.",
    scores: parseAverageScores(l30MimoV25, "opencode/mimo-v2.5-free"),
    sources: {
      average: parseAverageScores(avgMimoV25, "opencode/mimo-v2.5-free"),
      "big-pickle": parseAverageScores(bpMimoV25, "opencode/mimo-v2.5-free"),
      "Muse Spark 1.3": parseAverageScores(msMimoV25, "opencode/mimo-v2.5-free"),
      "Ling 3.0": parseAverageScores(l30MimoV25, "opencode/mimo-v2.5-free"),
    },
    meta: {
      contextWindow: "200K Zen cap (native 1M) / 32K out",
      modalities: "Text, image, audio, video in; text out",
      pricingNote: "Free Zen tier; native from ~$0.14/$0.28 per 1M",
      pricingTiers: ["Free Zen tier", "Native ~$0.14/$0.28"],
    },
  },
  {
    id: "opencode/muse-spark-1.2-contributor-free",
    name: "Muse Spark 1.2 Free",
    short:
      "Prior-gen Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use and whole-repo generation.",
    scores: parseAverageScores(l30MuseSpark12, "opencode/muse-spark-1.2-contributor-free"),
    sources: {
      average: parseAverageScores(avgMuseSpark12, "opencode/muse-spark-1.2-contributor-free"),
      "big-pickle": parseAverageScores(bpMuseSpark12, "opencode/muse-spark-1.2-contributor-free"),
      "Muse Spark 1.3": parseAverageScores(msMuseSpark12, "opencode/muse-spark-1.2-contributor-free"),
      "Ling 3.0": parseAverageScores(l30MuseSpark12, "opencode/muse-spark-1.2-contributor-free"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, video, PDF in; text out",
      pricingNote: "Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M",
      pricingTiers: ["Free Zen tier", "Contributor $0.10/$0.20", "Standard $1.25/$4.25"],
    },
  },
  {
    id: "opencode/nemotron-3-ultra-free",
    name: "Nemotron 3 Ultra Free",
    short:
      "NVIDIA flagship open-weights hybrid Mamba-MoE for frontier reasoning and long-running agents. Fast with low hallucination.",
    scores: parseAverageScores(l30NemotronUltra, "opencode/nemotron-3-ultra-free"),
    sources: {
      average: parseAverageScores(avgNemotronUltra, "opencode/nemotron-3-ultra-free"),
      "big-pickle": parseAverageScores(bpNemotronUltra, "opencode/nemotron-3-ultra-free"),
      "Muse Spark 1.3": parseAverageScores(msNemotronUltra, "opencode/nemotron-3-ultra-free"),
      "Ling 3.0": parseAverageScores(l30NemotronUltra, "opencode/nemotron-3-ultra-free"),
    },
    meta: {
      contextWindow: "1M (262K default serve)",
      modalities: "Text in/out (beyond text unverified)",
      pricingNote: "Free Zen / NVIDIA trial",
      pricingTiers: ["Free Zen / NVIDIA trial"],
    },
  },
  {
    id: "opencode/nemotron-3.5-lightning-free",
    name: "Nemotron 3.5 Lightning Free",
    short:
      "Compact open 30B MoE (3B active) for high-volume, low-latency execution in always-on agents. Pairs with a frontier planner.",
    scores: parseAverageScores(l30NemotronLightning, "opencode/nemotron-3.5-lightning-free"),
    sources: {
      average: parseAverageScores(avgNemotronLightning, "opencode/nemotron-3.5-lightning-free"),
      "big-pickle": parseAverageScores(bpNemotronLightning, "opencode/nemotron-3.5-lightning-free"),
      "Muse Spark 1.3": parseAverageScores(msNemotronLightning, "opencode/nemotron-3.5-lightning-free"),
      "Ling 3.0": parseAverageScores(l30NemotronLightning, "opencode/nemotron-3.5-lightning-free"),
    },
    meta: {
      contextWindow: "262,144 native",
      modalities: "Text-only",
      pricingNote: "Free Zen / NVIDIA trial",
      pricingTiers: ["Free Zen / NVIDIA trial"],
    },
  },
  {
    id: "opencode/glm-5.1",
    name: "GLM 5.1 Coding",
    short:
      "Z.AI flagship open-weights MoE for agentic engineering and long-horizon autonomous coding (SWE-Pro SOTA). No Zen Free ID; priced paid.",
    scores: parseAverageScores(l30Glm51, "opencode/glm-5.1"),
    sources: {
      average: parseAverageScores(avgGlm51, "opencode/glm-5.1"),
      "big-pickle": parseAverageScores(bpGlm51, "opencode/glm-5.1"),
      "Muse Spark 1.3": parseAverageScores(msGlm51, "opencode/glm-5.1"),
      "Ling 3.0": parseAverageScores(l30Glm51, "opencode/glm-5.1"),
    },
    meta: {
      contextWindow: "200K–205K / 128K out",
      modalities: "Text in/out",
      pricingNote: "Paid $1.40/$4.40 per 1M (no Free ID)",
      pricingTiers: ["Paid $1.40/$4.40 (no Free ID)"],
      noFreeId: true,
    },
  },
  {
    id: "opencode/minimax-m2.7",
    name: "MiniMax M2.7",
    short:
      "MiniMax self-improving frontier MoE for agentic coding, multi-agent collaboration and office productivity. No Zen Free ID; priced paid.",
    scores: parseAverageScores(l30MinimaxM27, "opencode/minimax-m2.7"),
    sources: {
      average: parseAverageScores(avgMinimaxM27, "opencode/minimax-m2.7"),
      "big-pickle": parseAverageScores(bpMinimaxM27, "opencode/minimax-m2.7"),
      "Muse Spark 1.3": parseAverageScores(msMinimaxM27, "opencode/minimax-m2.7"),
      "Ling 3.0": parseAverageScores(l30MinimaxM27, "opencode/minimax-m2.7"),
    },
    meta: {
      contextWindow: "196K–205K (200K class) / 131K out",
      modalities: "Text in/out only",
      pricingNote: "Paid $0.30/$1.20 per 1M (no Free ID)",
      pricingTiers: ["Paid $0.30/$1.20 (no Free ID)"],
      noFreeId: true,
    },
  },
  {
    id: "xiaomi/mimo-v2.5-pro",
    name: "Xiaomi MiMo-V2.5-Pro",
    short:
      "Xiaomi flagship open-weights MoE (1.02T) for demanding agentic and 1,000+ tool-call tasks with strong 1M coherence. Text-focused Pro sibling.",
    scores: parseAverageScores(l30MimoV25Pro, "xiaomi/mimo-v2.5-pro"),
    sources: {
      average: parseAverageScores(avgMimoV25Pro, "xiaomi/mimo-v2.5-pro"),
      "big-pickle": parseAverageScores(bpMimoV25Pro, "xiaomi/mimo-v2.5-pro"),
      "Muse Spark 1.3": parseAverageScores(msMimoV25Pro, "xiaomi/mimo-v2.5-pro"),
      "Ling 3.0": parseAverageScores(l30MimoV25Pro, "xiaomi/mimo-v2.5-pro"),
    },
    meta: {
      contextWindow: "1M (Base 256K)",
      modalities: "Text-only (Pro)",
      pricingNote: "Paid ~$0.44/$0.87 per 1M (no Zen Free ID)",
      pricingTiers: ["Paid ~$0.44/$0.87 (no Zen Free ID)"],
      noFreeId: true,
    },
  },
];

export function getModel(id: string): AiModel | undefined {
  return MODELS.find((m) => m.id === id);
}

/** Dev check: every source's overall must sit within rounding distance of its
 * dim mean (each source overall is a rounded mean, so it can legitimately
 * differ from the dim mean by up to 0.5). */
export function checkOverallScores(): void {
  for (const m of MODELS) {
    (Object.keys(m.sources) as SourceKey[]).forEach((key) => {
      const s = m.sources[key];
      const mean = (s.tool + s.reasoning + s.context + s.multimodal + s.coding + s.cost) / 6;
      if (Math.abs(mean - s.overall) > 0.51) {
        console.warn(`[models] overall mismatch for ${m.id} (${key}): file=${s.overall} dim-mean=${mean.toFixed(2)}`);
      }
    });
  }
}

if (import.meta.env.DEV) {
  checkOverallScores();
}
