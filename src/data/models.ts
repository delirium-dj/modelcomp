// Scores are sourced from model/<slug>/ files
// and model/<slug>/average.md, imported below as raw text (?raw) and parsed at build/dev time.
// Meta (names, blurbs, context/pricing notes) stays curated in MODELS below.
import avgBigPickle from "../../model/big-pickle/average.md?raw";
import bpBigPickle from "../../model/big-pickle/Big_Pickle.md?raw";
import msBigPickle from "../../model/big-pickle/Muse_Spark_1.3.md?raw";
import l30BigPickle from "../../model/big-pickle/Ling_3.0.md?raw";
import g31BigPickle from "../../model/big-pickle/Gemini_3.1_Flash_Lite.md?raw";
import g35BigPickle from "../../model/big-pickle/Gemini_3.5_Flash_Lite.md?raw";
import g36BigPickle from "../../model/big-pickle/Gemini_3.6_Flash.md?raw";
import glm53BigPickle from "../../model/big-pickle/GLM_5.3_Flash.md?raw";
import oxBigPickle from "../../model/big-pickle/Ox_Alpha.md?raw";
import avgClaudeOpus46 from "../../model/claude-opus-4.6/average.md?raw";
import g31ClaudeOpus46 from "../../model/claude-opus-4.6/Gemini_3.1_Flash_Lite.md?raw";
import g35ClaudeOpus46 from "../../model/claude-opus-4.6/Gemini_3.5_Flash_Lite.md?raw";
import g36ClaudeOpus46 from "../../model/claude-opus-4.6/Gemini_3.6_Flash.md?raw";
import glm53ClaudeOpus46 from "../../model/claude-opus-4.6/GLM_5.3_Flash.md?raw";
import csClaudeOpus46 from "../../model/claude-opus-4.6/Claude_Sonnet_4.6.md?raw";
import avgClaudeOpus48 from "../../model/claude-opus-4.8/average.md?raw";
import g36ClaudeOpus48 from "../../model/claude-opus-4.8/Gemini_3.6_Flash.md?raw";
import glm53ClaudeOpus48 from "../../model/claude-opus-4.8/GLM_5.3_Flash.md?raw";
import avgClaudeSonnet46 from "../../model/claude-sonnet-4.6/average.md?raw";
import g31ClaudeSonnet46 from "../../model/claude-sonnet-4.6/Gemini_3.1_Flash_Lite.md?raw";
import g35ClaudeSonnet46 from "../../model/claude-sonnet-4.6/Gemini_3.5_Flash_Lite.md?raw";
import g36ClaudeSonnet46 from "../../model/claude-sonnet-4.6/Gemini_3.6_Flash.md?raw";
import glm53ClaudeSonnet46 from "../../model/claude-sonnet-4.6/GLM_5.3_Flash.md?raw";
import csClaudeSonnet46 from "../../model/claude-sonnet-4.6/Claude_Sonnet_4.6.md?raw";
import avgDeepseekV4VisionExp from "../../model/deepseek-v4-vision-exp/average.md?raw";
import g36DeepseekV4VisionExp from "../../model/deepseek-v4-vision-exp/Gemini_3.6_Flash.md?raw";
import avgGemini25Flash from "../../model/gemini-2.5-flash/average.md?raw";
import g31Gemini25Flash from "../../model/gemini-2.5-flash/Gemini_3.1_Flash_Lite.md?raw";
import g35Gemini25Flash from "../../model/gemini-2.5-flash/Gemini_3.5_Flash_Lite.md?raw";
import g36Gemini25Flash from "../../model/gemini-2.5-flash/Gemini_3.6_Flash.md?raw";
import csGemini25Flash from "../../model/gemini-2.5-flash/Claude_Sonnet_4.6.md?raw";
import avgGemini25FlashLite from "../../model/gemini-2.5-flash-lite/average.md?raw";
import g31Gemini25FlashLite from "../../model/gemini-2.5-flash-lite/Gemini_3.1_Flash_Lite.md?raw";
import g35Gemini25FlashLite from "../../model/gemini-2.5-flash-lite/Gemini_3.5_Flash_Lite.md?raw";
import g36Gemini25FlashLite from "../../model/gemini-2.5-flash-lite/Gemini_3.6_Flash.md?raw";
import csGemini25FlashLite from "../../model/gemini-2.5-flash-lite/Claude_Sonnet_4.6.md?raw";
import avgGemini31Flash from "../../model/gemini-3.1-flash/average.md?raw";
import g31Gemini31Flash from "../../model/gemini-3.1-flash/Gemini_3.1_Flash_Lite.md?raw";
import g35Gemini31Flash from "../../model/gemini-3.1-flash/Gemini_3.5_Flash_Lite.md?raw";
import g36Gemini31Flash from "../../model/gemini-3.1-flash/Gemini_3.6_Flash.md?raw";
import csGemini31Flash from "../../model/gemini-3.1-flash/Claude_Sonnet_4.6.md?raw";
import avgGemini31FlashLite from "../../model/gemini-3.1-flash-lite/average.md?raw";
import g35Gemini31FlashLite from "../../model/gemini-3.1-flash-lite/Gemini_3.5_Flash_Lite.md?raw";
import g36Gemini31FlashLite from "../../model/gemini-3.1-flash-lite/Gemini_3.6_Flash.md?raw";
import csGemini31FlashLite from "../../model/gemini-3.1-flash-lite/Claude_Sonnet_4.6.md?raw";
import avgGemini35Flash from "../../model/gemini-3.5-flash/average.md?raw";
import g31Gemini35Flash from "../../model/gemini-3.5-flash/Gemini_3.1_Flash_Lite.md?raw";
import g35Gemini35Flash from "../../model/gemini-3.5-flash/Gemini_3.5_Flash_Lite.md?raw";
import g36Gemini35Flash from "../../model/gemini-3.5-flash/Gemini_3.6_Flash.md?raw";
import csGemini35Flash from "../../model/gemini-3.5-flash/Claude_Sonnet_4.6.md?raw";
import avgGemini35FlashLite from "../../model/gemini-3.5-flash-lite/average.md?raw";
import g31Gemini35FlashLite from "../../model/gemini-3.5-flash-lite/Gemini_3.1_Flash_Lite.md?raw";
import g35Gemini35FlashLite from "../../model/gemini-3.5-flash-lite/Gemini_3.5_Flash_Lite.md?raw";
import g36Gemini35FlashLite from "../../model/gemini-3.5-flash-lite/Gemini_3.6_Flash.md?raw";
import csGemini35FlashLite from "../../model/gemini-3.5-flash-lite/Claude_Sonnet_4.6.md?raw";
import avgGemini36Flash from "../../model/gemini-3.6-flash/average.md?raw";
import g31Gemini36Flash from "../../model/gemini-3.6-flash/Gemini_3.1_Flash_Lite.md?raw";
import g35Gemini36Flash from "../../model/gemini-3.6-flash/Gemini_3.5_Flash_Lite.md?raw";
import g36Gemini36Flash from "../../model/gemini-3.6-flash/Gemini_3.6_Flash.md?raw";
import csGemini36Flash from "../../model/gemini-3.6-flash/Claude_Sonnet_4.6.md?raw";
import avgGemini37Flash from "../../model/gemini-3.7-flash/average.md?raw";
import g31Gemini37Flash from "../../model/gemini-3.7-flash/Gemini_3.1_Flash_Lite.md?raw";
import g35Gemini37Flash from "../../model/gemini-3.7-flash/Gemini_3.5_Flash_Lite.md?raw";
import g36Gemini37Flash from "../../model/gemini-3.7-flash/Gemini_3.6_Flash.md?raw";
import csGemini37Flash from "../../model/gemini-3.7-flash/Claude_Sonnet_4.6.md?raw";
import avgGemini38Flash from "../../model/gemini-3.8-flash/average.md?raw";
import g31Gemini38Flash from "../../model/gemini-3.8-flash/Gemini_3.1_Flash_Lite.md?raw";
import g35Gemini38Flash from "../../model/gemini-3.8-flash/Gemini_3.5_Flash_Lite.md?raw";
import g36Gemini38Flash from "../../model/gemini-3.8-flash/Gemini_3.6_Flash.md?raw";
import csGemini38Flash from "../../model/gemini-3.8-flash/Claude_Sonnet_4.6.md?raw";
import avgGlm51Coding from "../../model/glm-5-1-coding/average.md?raw";
import bpGlm51Coding from "../../model/glm-5-1-coding/Big_Pickle.md?raw";
import msGlm51Coding from "../../model/glm-5-1-coding/Muse_Spark_1.3.md?raw";
import l30Glm51Coding from "../../model/glm-5-1-coding/Ling_3.0.md?raw";
import g31Glm51Coding from "../../model/glm-5-1-coding/Gemini_3.1_Flash_Lite.md?raw";
import g35Glm51Coding from "../../model/glm-5-1-coding/Gemini_3.5_Flash_Lite.md?raw";
import g36Glm51Coding from "../../model/glm-5-1-coding/Gemini_3.6_Flash.md?raw";
import oxGlm51Coding from "../../model/glm-5-1-coding/Ox_Alpha.md?raw";
import avgGlm52 from "../../model/glm-5-2/average.md?raw";
import g36Glm52 from "../../model/glm-5-2/Gemini_3.6_Flash.md?raw";
import avgGlm53Flash from "../../model/glm-5.3-flash/average.md?raw";
import g36Glm53Flash from "../../model/glm-5.3-flash/Gemini_3.6_Flash.md?raw";
import glm53Glm53Flash from "../../model/glm-5.3-flash/GLM_5.3_Flash.md?raw";
import avgGlm53Free from "../../model/glm-5.3-free/average.md?raw";
import g36Glm53Free from "../../model/glm-5.3-free/Gemini_3.6_Flash.md?raw";
import avgGpt56Terra from "../../model/gpt-5-6-terra/average.md?raw";
import g36Gpt56Terra from "../../model/gpt-5-6-terra/Gemini_3.6_Flash.md?raw";
import avgLing30FlashFinFree from "../../model/ling-3-0-flash-fin-free/average.md?raw";
import bpLing30FlashFinFree from "../../model/ling-3-0-flash-fin-free/Big_Pickle.md?raw";
import msLing30FlashFinFree from "../../model/ling-3-0-flash-fin-free/Muse_Spark_1.3.md?raw";
import l30Ling30FlashFinFree from "../../model/ling-3-0-flash-fin-free/Ling_3.0.md?raw";
import g31Ling30FlashFinFree from "../../model/ling-3-0-flash-fin-free/Gemini_3.1_Flash_Lite.md?raw";
import g35Ling30FlashFinFree from "../../model/ling-3-0-flash-fin-free/Gemini_3.5_Flash_Lite.md?raw";
import g36Ling30FlashFinFree from "../../model/ling-3-0-flash-fin-free/Gemini_3.6_Flash.md?raw";
import avgMimoV25Free from "../../model/mimo-v2-5-free/average.md?raw";
import bpMimoV25Free from "../../model/mimo-v2-5-free/Big_Pickle.md?raw";
import msMimoV25Free from "../../model/mimo-v2-5-free/Muse_Spark_1.3.md?raw";
import l30MimoV25Free from "../../model/mimo-v2-5-free/Ling_3.0.md?raw";
import g31MimoV25Free from "../../model/mimo-v2-5-free/Gemini_3.1_Flash_Lite.md?raw";
import g35MimoV25Free from "../../model/mimo-v2-5-free/Gemini_3.5_Flash_Lite.md?raw";
import g36MimoV25Free from "../../model/mimo-v2-5-free/Gemini_3.6_Flash.md?raw";
import avgMinimaxM27 from "../../model/minimax-m2-7/average.md?raw";
import bpMinimaxM27 from "../../model/minimax-m2-7/Big_Pickle.md?raw";
import msMinimaxM27 from "../../model/minimax-m2-7/Muse_Spark_1.3.md?raw";
import l30MinimaxM27 from "../../model/minimax-m2-7/Ling_3.0.md?raw";
import g31MinimaxM27 from "../../model/minimax-m2-7/Gemini_3.1_Flash_Lite.md?raw";
import g35MinimaxM27 from "../../model/minimax-m2-7/Gemini_3.5_Flash_Lite.md?raw";
import g36MinimaxM27 from "../../model/minimax-m2-7/Gemini_3.6_Flash.md?raw";
import avgMuseSpark12Free from "../../model/muse-spark-1-2-free/average.md?raw";
import bpMuseSpark12Free from "../../model/muse-spark-1-2-free/Big_Pickle.md?raw";
import msMuseSpark12Free from "../../model/muse-spark-1-2-free/Muse_Spark_1.3.md?raw";
import l30MuseSpark12Free from "../../model/muse-spark-1-2-free/Ling_3.0.md?raw";
import g31MuseSpark12Free from "../../model/muse-spark-1-2-free/Gemini_3.1_Flash_Lite.md?raw";
import g35MuseSpark12Free from "../../model/muse-spark-1-2-free/Gemini_3.5_Flash_Lite.md?raw";
import g36MuseSpark12Free from "../../model/muse-spark-1-2-free/Gemini_3.6_Flash.md?raw";
import avgMuseSpark13Free from "../../model/muse-spark-1-3-free/average.md?raw";
import bpMuseSpark13Free from "../../model/muse-spark-1-3-free/Big_Pickle.md?raw";
import msMuseSpark13Free from "../../model/muse-spark-1-3-free/Muse_Spark_1.3.md?raw";
import l30MuseSpark13Free from "../../model/muse-spark-1-3-free/Ling_3.0.md?raw";
import g31MuseSpark13Free from "../../model/muse-spark-1-3-free/Gemini_3.1_Flash_Lite.md?raw";
import g35MuseSpark13Free from "../../model/muse-spark-1-3-free/Gemini_3.5_Flash_Lite.md?raw";
import g36MuseSpark13Free from "../../model/muse-spark-1-3-free/Gemini_3.6_Flash.md?raw";
import avgNemotron35LightningFree from "../../model/nemotron-3-5-lightning-free/average.md?raw";
import bpNemotron35LightningFree from "../../model/nemotron-3-5-lightning-free/Big_Pickle.md?raw";
import msNemotron35LightningFree from "../../model/nemotron-3-5-lightning-free/Muse_Spark_1.3.md?raw";
import l30Nemotron35LightningFree from "../../model/nemotron-3-5-lightning-free/Ling_3.0.md?raw";
import g31Nemotron35LightningFree from "../../model/nemotron-3-5-lightning-free/Gemini_3.1_Flash_Lite.md?raw";
import g35Nemotron35LightningFree from "../../model/nemotron-3-5-lightning-free/Gemini_3.5_Flash_Lite.md?raw";
import g36Nemotron35LightningFree from "../../model/nemotron-3-5-lightning-free/Gemini_3.6_Flash.md?raw";
import avgNemotron3UltraFree from "../../model/nemotron-3-ultra-free/average.md?raw";
import bpNemotron3UltraFree from "../../model/nemotron-3-ultra-free/Big_Pickle.md?raw";
import msNemotron3UltraFree from "../../model/nemotron-3-ultra-free/Muse_Spark_1.3.md?raw";
import l30Nemotron3UltraFree from "../../model/nemotron-3-ultra-free/Ling_3.0.md?raw";
import g31Nemotron3UltraFree from "../../model/nemotron-3-ultra-free/Gemini_3.1_Flash_Lite.md?raw";
import g35Nemotron3UltraFree from "../../model/nemotron-3-ultra-free/Gemini_3.5_Flash_Lite.md?raw";
import g36Nemotron3UltraFree from "../../model/nemotron-3-ultra-free/Gemini_3.6_Flash.md?raw";
import avgOxAlpha from "../../model/ox_alpha/average.md?raw";
import g36OxAlpha from "../../model/ox_alpha/Gemini_3.6_Flash.md?raw";
import avgXiaomiMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/average.md?raw";
import bpXiaomiMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/Big_Pickle.md?raw";
import msXiaomiMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/Muse_Spark_1.3.md?raw";
import l30XiaomiMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/Ling_3.0.md?raw";
import g31XiaomiMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/Gemini_3.1_Flash_Lite.md?raw";
import g35XiaomiMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/Gemini_3.5_Flash_Lite.md?raw";
import g36XiaomiMimoV25Pro from "../../model/xiaomi-mimo-v2-5-pro/Gemini_3.6_Flash.md?raw";

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
export type SourceKey =
  | "average"
  | "big-pickle"
  | "Muse Spark 1.3"
  | "Ling 3.0"
  | "Gemini 3.1 Flash Lite"
  | "Gemini 3.5 Flash Lite"
  | "Gemini 3.6 Flash"
  | "GLM 5.3 Flash"
  | "Ox Alpha"
  | "Claude Sonnet 4.6";

export const SOURCES: { key: SourceKey; label: string; file: string }[] = [
  { key: "average", label: "Average", file: "average.md" },
  { key: "big-pickle", label: "Big Pickle", file: "Big_Pickle.md" },
  { key: "Muse Spark 1.3", label: "Muse Spark 1.3", file: "Muse_Spark_1.3.md" },
  { key: "Ling 3.0", label: "Ling 3.0", file: "Ling_3.0.md" },
  { key: "Gemini 3.1 Flash Lite", label: "Gemini 3.1 Flash Lite", file: "Gemini_3.1_Flash_Lite.md" },
  { key: "Gemini 3.5 Flash Lite", label: "Gemini 3.5 Flash Lite", file: "Gemini_3.5_Flash_Lite.md" },
  { key: "Gemini 3.6 Flash", label: "Gemini 3.6 Flash", file: "Gemini_3.6_Flash.md" },
  { key: "GLM 5.3 Flash", label: "GLM 5.3 Flash", file: "GLM_5.3_Flash.md" },
  { key: "Ox Alpha", label: "Ox Alpha", file: "Ox_Alpha.md" },
  { key: "Claude Sonnet 4.6", label: "Claude Sonnet 4.6", file: "Claude_Sonnet_4.6.md" },
];

export interface AiModel {
  id: string;
  name: string;
  short: string;
  /** Averaged scores (default view). */
  scores: ModelScores;
  /** Per-source score sets; the results selector swaps `scores` for one of these. */
  sources: Partial<Record<SourceKey, ModelScores>>;
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
    short: "Free stealth reasoning model on OpenCode Zen (community consensus: GLM-4.6). Roughly Sonnet-class coding at zero token cost during the free period.",
    scores: parseAverageScores(avgBigPickle, "opencode/big-pickle"),
    sources: {
      "average": parseAverageScores(avgBigPickle, "opencode/big-pickle"),
      "big-pickle": parseAverageScores(bpBigPickle, "opencode/big-pickle"),
      "Muse Spark 1.3": parseAverageScores(msBigPickle, "opencode/big-pickle"),
      "Ling 3.0": parseAverageScores(l30BigPickle, "opencode/big-pickle"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31BigPickle, "opencode/big-pickle"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35BigPickle, "opencode/big-pickle"),
      "Gemini 3.6 Flash": parseAverageScores(g36BigPickle, "opencode/big-pickle"),
      "GLM 5.3 Flash": parseAverageScores(glm53BigPickle, "opencode/big-pickle"),
      "Ox Alpha": parseAverageScores(oxBigPickle, "opencode/big-pickle"),
    },
    meta: {
      contextWindow: "200K total (160K in / 32K out)",
      modalities: "Text in/out only",
      pricingNote: "Free Zen tier; paid equiv. GLM-4.6 ~$0.60/$2.20 per 1M",
      pricingTiers: ["Free Zen tier","Paid equiv. GLM-4.6 ~$0.60/$2.20"],
    },
  },
  {
    id: "anthropic/claude-opus-4.6",
    name: "Claude Opus 4.6",
    short: "Anthropic's flagship reasoning-capable model, enhanced with thinking capabilities for complex, multi-step tasks.",
    scores: parseAverageScores(avgClaudeOpus46, "anthropic/claude-opus-4.6"),
    sources: {
      "average": parseAverageScores(avgClaudeOpus46, "anthropic/claude-opus-4.6"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31ClaudeOpus46, "anthropic/claude-opus-4.6"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35ClaudeOpus46, "anthropic/claude-opus-4.6"),
      "Gemini 3.6 Flash": parseAverageScores(g36ClaudeOpus46, "anthropic/claude-opus-4.6"),
      "GLM 5.3 Flash": parseAverageScores(glm53ClaudeOpus46, "anthropic/claude-opus-4.6"),
      "Claude Sonnet 4.6": parseAverageScores(csClaudeOpus46, "anthropic/claude-opus-4.6"),
    },
    meta: {
      contextWindow: "200K",
      modalities: "Text, image in; text out",
      pricingNote: "Paid-tier pricing",
      noFreeId: true,
    },
  },
  {
    id: "anthropic/claude-opus-4.8",
    name: "Claude Opus 4.8",
    short: "Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking.",
    scores: parseAverageScores(avgClaudeOpus48, "anthropic/claude-opus-4.8"),
    sources: {
      "average": parseAverageScores(avgClaudeOpus48, "anthropic/claude-opus-4.8"),
      "Gemini 3.6 Flash": parseAverageScores(g36ClaudeOpus48, "anthropic/claude-opus-4.8"),
      "GLM 5.3 Flash": parseAverageScores(glm53ClaudeOpus48, "anthropic/claude-opus-4.8"),
    },
    meta: {
      contextWindow: "200K",
      modalities: "Text, image in; text out",
      pricingNote: "Paid-tier pricing",
      noFreeId: true,
    },
  },
  {
    id: "anthropic/claude-sonnet-4.6",
    name: "Claude Sonnet 4.6",
    short: "Anthropic's high-performance, reasoning-capable model optimized for efficiency and complex coding tasks.",
    scores: parseAverageScores(avgClaudeSonnet46, "anthropic/claude-sonnet-4.6"),
    sources: {
      "average": parseAverageScores(avgClaudeSonnet46, "anthropic/claude-sonnet-4.6"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31ClaudeSonnet46, "anthropic/claude-sonnet-4.6"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35ClaudeSonnet46, "anthropic/claude-sonnet-4.6"),
      "Gemini 3.6 Flash": parseAverageScores(g36ClaudeSonnet46, "anthropic/claude-sonnet-4.6"),
      "GLM 5.3 Flash": parseAverageScores(glm53ClaudeSonnet46, "anthropic/claude-sonnet-4.6"),
      "Claude Sonnet 4.6": parseAverageScores(csClaudeSonnet46, "anthropic/claude-sonnet-4.6"),
    },
    meta: {
      contextWindow: "200K",
      modalities: "Text, image in; text out",
      pricingNote: "Paid-tier pricing",
      noFreeId: true,
    },
  },
  {
    id: "opencode/deepseek-v4-vision-exp",
    name: "DeepSeek V4 Vision Exp",
    short: "DeepSeek's experimental native multimodal vision-language MoE model designed for multi-modal code understanding, UI layout reasoning, and image-to-code generation.",
    scores: parseAverageScores(avgDeepseekV4VisionExp, "opencode/deepseek-v4-vision-exp"),
    sources: {
      "average": parseAverageScores(avgDeepseekV4VisionExp, "opencode/deepseek-v4-vision-exp"),
      "Gemini 3.6 Flash": parseAverageScores(g36DeepseekV4VisionExp, "opencode/deepseek-v4-vision-exp"),
    },
    meta: {
      contextWindow: "200K",
      modalities: "Text, image, PDF in; text out",
      pricingNote: "Free Zen tier available",
    },
  },
  {
    id: "google/gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    short: "Google's balanced Flash model, optimized for speed and efficiency in varied tasks.",
    scores: parseAverageScores(avgGemini25Flash, "google/gemini-2.5-flash"),
    sources: {
      "average": parseAverageScores(avgGemini25Flash, "google/gemini-2.5-flash"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Gemini25Flash, "google/gemini-2.5-flash"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Gemini25Flash, "google/gemini-2.5-flash"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gemini25Flash, "google/gemini-2.5-flash"),
      "Claude Sonnet 4.6": parseAverageScores(csGemini25Flash, "google/gemini-2.5-flash"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, PDF in; text out",
      pricingNote: "Free tier available; Paid-tier pricing",
    },
  },
  {
    id: "google/gemini-2.5-flash-lite",
    name: "Gemini 2.5 Flash Lite",
    short: "Google's ultra-low-latency model for cost-sensitive, high-frequency tasks.",
    scores: parseAverageScores(avgGemini25FlashLite, "google/gemini-2.5-flash-lite"),
    sources: {
      "average": parseAverageScores(avgGemini25FlashLite, "google/gemini-2.5-flash-lite"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Gemini25FlashLite, "google/gemini-2.5-flash-lite"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Gemini25FlashLite, "google/gemini-2.5-flash-lite"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gemini25FlashLite, "google/gemini-2.5-flash-lite"),
      "Claude Sonnet 4.6": parseAverageScores(csGemini25FlashLite, "google/gemini-2.5-flash-lite"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, PDF in; text out",
      pricingNote: "Free tier available; Paid-tier pricing",
    },
  },
  {
    id: "google/gemini-3.1-flash",
    name: "Gemini 3.1 Flash",
    short: "Google's efficient 3.1 Flash model, balancing speed, capability, and cost.",
    scores: parseAverageScores(avgGemini31Flash, "google/gemini-3.1-flash"),
    sources: {
      "average": parseAverageScores(avgGemini31Flash, "google/gemini-3.1-flash"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Gemini31Flash, "google/gemini-3.1-flash"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Gemini31Flash, "google/gemini-3.1-flash"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gemini31Flash, "google/gemini-3.1-flash"),
      "Claude Sonnet 4.6": parseAverageScores(csGemini31Flash, "google/gemini-3.1-flash"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, PDF in; text out",
      pricingNote: "Free tier available; Paid-tier pricing",
    },
  },
  {
    id: "google/gemini-3.1-flash-lite",
    name: "Gemini 3.1 Flash Lite",
    short: "Google's lightweight, ultra-low-latency model engineered for high-frequency lightweight tasks.",
    scores: parseAverageScores(avgGemini31FlashLite, "google/gemini-3.1-flash-lite"),
    sources: {
      "average": parseAverageScores(avgGemini31FlashLite, "google/gemini-3.1-flash-lite"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Gemini31FlashLite, "google/gemini-3.1-flash-lite"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gemini31FlashLite, "google/gemini-3.1-flash-lite"),
      "Claude Sonnet 4.6": parseAverageScores(csGemini31FlashLite, "google/gemini-3.1-flash-lite"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, PDF in; text out",
      pricingNote: "Free tier available; Paid-tier pricing",
    },
  },
  {
    id: "google/gemini-3.5-flash",
    name: "Gemini 3.5 Flash",
    short: "Google's next-gen 3.5 Flash model, offering enhanced speed and capabilities.",
    scores: parseAverageScores(avgGemini35Flash, "google/gemini-3.5-flash"),
    sources: {
      "average": parseAverageScores(avgGemini35Flash, "google/gemini-3.5-flash"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Gemini35Flash, "google/gemini-3.5-flash"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Gemini35Flash, "google/gemini-3.5-flash"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gemini35Flash, "google/gemini-3.5-flash"),
      "Claude Sonnet 4.6": parseAverageScores(csGemini35Flash, "google/gemini-3.5-flash"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, PDF in; text out",
      pricingNote: "Free tier available; Paid-tier pricing",
    },
  },
  {
    id: "google/gemini-3.5-flash-lite",
    name: "Gemini 3.5 Flash Lite",
    short: "Google's enhanced 3.5 Flash Lite model, prioritizing ultra-low latency.",
    scores: parseAverageScores(avgGemini35FlashLite, "google/gemini-3.5-flash-lite"),
    sources: {
      "average": parseAverageScores(avgGemini35FlashLite, "google/gemini-3.5-flash-lite"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Gemini35FlashLite, "google/gemini-3.5-flash-lite"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Gemini35FlashLite, "google/gemini-3.5-flash-lite"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gemini35FlashLite, "google/gemini-3.5-flash-lite"),
      "Claude Sonnet 4.6": parseAverageScores(csGemini35FlashLite, "google/gemini-3.5-flash-lite"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, PDF in; text out",
      pricingNote: "Free tier available; Paid-tier pricing",
    },
  },
  {
    id: "google/gemini-3.6-flash",
    name: "Gemini 3.6 Flash",
    short: "Google's advanced 3.6 Flash model with improved reasoning.",
    scores: parseAverageScores(avgGemini36Flash, "google/gemini-3.6-flash"),
    sources: {
      "average": parseAverageScores(avgGemini36Flash, "google/gemini-3.6-flash"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Gemini36Flash, "google/gemini-3.6-flash"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Gemini36Flash, "google/gemini-3.6-flash"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gemini36Flash, "google/gemini-3.6-flash"),
      "Claude Sonnet 4.6": parseAverageScores(csGemini36Flash, "google/gemini-3.6-flash"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, PDF in; text out",
      pricingNote: "Free tier available; Paid-tier pricing",
    },
  },
  {
    id: "google/gemini-3.7-flash",
    name: "Gemini 3.7 Flash",
    short: "Google's high-capability 3.7 Flash model.",
    scores: parseAverageScores(avgGemini37Flash, "google/gemini-3.7-flash"),
    sources: {
      "average": parseAverageScores(avgGemini37Flash, "google/gemini-3.7-flash"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Gemini37Flash, "google/gemini-3.7-flash"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Gemini37Flash, "google/gemini-3.7-flash"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gemini37Flash, "google/gemini-3.7-flash"),
      "Claude Sonnet 4.6": parseAverageScores(csGemini37Flash, "google/gemini-3.7-flash"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, PDF in; text out",
      pricingNote: "Free tier available; Paid-tier pricing",
    },
  },
  {
    id: "google/gemini-3.8-flash",
    name: "Gemini 3.8 Flash",
    short: "Google's latest 3.8 Flash model, optimizing performance and efficiency.",
    scores: parseAverageScores(avgGemini38Flash, "google/gemini-3.8-flash"),
    sources: {
      "average": parseAverageScores(avgGemini38Flash, "google/gemini-3.8-flash"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Gemini38Flash, "google/gemini-3.8-flash"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Gemini38Flash, "google/gemini-3.8-flash"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gemini38Flash, "google/gemini-3.8-flash"),
      "Claude Sonnet 4.6": parseAverageScores(csGemini38Flash, "google/gemini-3.8-flash"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, PDF in; text out",
      pricingNote: "Free tier available; Paid-tier pricing",
    },
  },
  {
    id: "opencode/glm-5.1",
    name: "GLM 5.1 Coding",
    short: "Z.AI flagship open-weights MoE for agentic engineering and long-horizon autonomous coding (SWE-Pro SOTA). No Zen Free ID; priced paid.",
    scores: parseAverageScores(avgGlm51Coding, "opencode/glm-5.1"),
    sources: {
      "average": parseAverageScores(avgGlm51Coding, "opencode/glm-5.1"),
      "big-pickle": parseAverageScores(bpGlm51Coding, "opencode/glm-5.1"),
      "Muse Spark 1.3": parseAverageScores(msGlm51Coding, "opencode/glm-5.1"),
      "Ling 3.0": parseAverageScores(l30Glm51Coding, "opencode/glm-5.1"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Glm51Coding, "opencode/glm-5.1"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Glm51Coding, "opencode/glm-5.1"),
      "Gemini 3.6 Flash": parseAverageScores(g36Glm51Coding, "opencode/glm-5.1"),
      "Ox Alpha": parseAverageScores(oxGlm51Coding, "opencode/glm-5.1"),
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
    id: "opencode/glm-5.2",
    name: "GLM 5.2",
    short: "Z.AI's prior generation open-weights MoE model built for agentic tasks, long context processing, and enterprise software engineering.",
    scores: parseAverageScores(avgGlm52, "opencode/glm-5.2"),
    sources: {
      "average": parseAverageScores(avgGlm52, "opencode/glm-5.2"),
      "Gemini 3.6 Flash": parseAverageScores(g36Glm52, "opencode/glm-5.2"),
    },
    meta: {
      contextWindow: "204K",
      modalities: "Text in/out",
      pricingNote: "Free Zen tier available",
    },
  },
  {
    id: "opencode/glm-5.3-flash",
    name: "GLM 5.3 Flash",
    short: "Z.AI's lightweight Flash-class MoE model engineered for ultra-fast agentic coding, high-frequency tool calls, and low latency.",
    scores: parseAverageScores(avgGlm53Flash, "opencode/glm-5.3-flash"),
    sources: {
      "average": parseAverageScores(avgGlm53Flash, "opencode/glm-5.3-flash"),
      "Gemini 3.6 Flash": parseAverageScores(g36Glm53Flash, "opencode/glm-5.3-flash"),
      "GLM 5.3 Flash": parseAverageScores(glm53Glm53Flash, "opencode/glm-5.3-flash"),
    },
    meta: {
      contextWindow: "204K",
      modalities: "Text in/out",
      pricingNote: "Free Zen tier available",
    },
  },
  {
    id: "opencode/glm-5.3-free",
    name: "GLM 5.3 Free",
    short: "Z.AI's flagship open-weights GLM-5.3 MoE model optimized for agentic software development, complex reasoning, and multi-step tool execution.",
    scores: parseAverageScores(avgGlm53Free, "opencode/glm-5.3-free"),
    sources: {
      "average": parseAverageScores(avgGlm53Free, "opencode/glm-5.3-free"),
      "Gemini 3.6 Flash": parseAverageScores(g36Glm53Free, "opencode/glm-5.3-free"),
    },
    meta: {
      contextWindow: "204K",
      modalities: "Text in/out",
      pricingNote: "Free Zen tier",
    },
  },
  {
    id: "openai/gpt-5.6-terra",
    name: "GPT-5.6 Terra",
    short: "OpenAI's flagship 5.6 generation model optimized for ground-up agentic research, tool usage, long-context reasoning, and code synthesis.",
    scores: parseAverageScores(avgGpt56Terra, "openai/gpt-5.6-terra"),
    sources: {
      "average": parseAverageScores(avgGpt56Terra, "openai/gpt-5.6-terra"),
      "Gemini 3.6 Flash": parseAverageScores(g36Gpt56Terra, "openai/gpt-5.6-terra"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, video, PDF in; text out",
      pricingNote: "Paid-tier pricing",
      noFreeId: true,
    },
  },
  {
    id: "opencode/ling-3-0-flash-fin-free",
    name: "Ling 3.0 Flash Fin Free",
    short: "Finance-enhanced MoE by InclusionAI / Ant Group for financial research and tool-intensive workflows, retaining strong coding and math.",
    scores: parseAverageScores(avgLing30FlashFinFree, "opencode/ling-3-0-flash-fin-free"),
    sources: {
      "average": parseAverageScores(avgLing30FlashFinFree, "opencode/ling-3-0-flash-fin-free"),
      "big-pickle": parseAverageScores(bpLing30FlashFinFree, "opencode/ling-3-0-flash-fin-free"),
      "Muse Spark 1.3": parseAverageScores(msLing30FlashFinFree, "opencode/ling-3-0-flash-fin-free"),
      "Ling 3.0": parseAverageScores(l30Ling30FlashFinFree, "opencode/ling-3-0-flash-fin-free"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Ling30FlashFinFree, "opencode/ling-3-0-flash-fin-free"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Ling30FlashFinFree, "opencode/ling-3-0-flash-fin-free"),
      "Gemini 3.6 Flash": parseAverageScores(g36Ling30FlashFinFree, "opencode/ling-3-0-flash-fin-free"),
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
    short: "Native omni-modal open-weights MoE by Xiaomi for text, image, video and audio understanding plus strong agentic coding. Free capped tier on Zen.",
    scores: parseAverageScores(avgMimoV25Free, "opencode/mimo-v2.5-free"),
    sources: {
      "average": parseAverageScores(avgMimoV25Free, "opencode/mimo-v2.5-free"),
      "big-pickle": parseAverageScores(bpMimoV25Free, "opencode/mimo-v2.5-free"),
      "Muse Spark 1.3": parseAverageScores(msMimoV25Free, "opencode/mimo-v2.5-free"),
      "Ling 3.0": parseAverageScores(l30MimoV25Free, "opencode/mimo-v2.5-free"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31MimoV25Free, "opencode/mimo-v2.5-free"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35MimoV25Free, "opencode/mimo-v2.5-free"),
      "Gemini 3.6 Flash": parseAverageScores(g36MimoV25Free, "opencode/mimo-v2.5-free"),
    },
    meta: {
      contextWindow: "200K Zen cap (native 1M) / 32K out",
      modalities: "Text, image, audio, video in; text out",
      pricingNote: "Free Zen tier; native from ~$0.14/$0.28 per 1M",
      pricingTiers: ["Free Zen tier","Native ~$0.14/$0.28"],
    },
  },
  {
    id: "opencode/minimax-m2.7",
    name: "MiniMax M2.7",
    short: "MiniMax self-improving frontier MoE for agentic coding, multi-agent collaboration and office productivity. No Zen Free ID; priced paid.",
    scores: parseAverageScores(avgMinimaxM27, "opencode/minimax-m2.7"),
    sources: {
      "average": parseAverageScores(avgMinimaxM27, "opencode/minimax-m2.7"),
      "big-pickle": parseAverageScores(bpMinimaxM27, "opencode/minimax-m2.7"),
      "Muse Spark 1.3": parseAverageScores(msMinimaxM27, "opencode/minimax-m2.7"),
      "Ling 3.0": parseAverageScores(l30MinimaxM27, "opencode/minimax-m2.7"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31MinimaxM27, "opencode/minimax-m2.7"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35MinimaxM27, "opencode/minimax-m2.7"),
      "Gemini 3.6 Flash": parseAverageScores(g36MinimaxM27, "opencode/minimax-m2.7"),
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
    id: "opencode/muse-spark-1.2-contributor-free",
    name: "Muse Spark 1.2 Free",
    short: "Prior-gen Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use and whole-repo generation.",
    scores: parseAverageScores(avgMuseSpark12Free, "opencode/muse-spark-1.2-contributor-free"),
    sources: {
      "average": parseAverageScores(avgMuseSpark12Free, "opencode/muse-spark-1.2-contributor-free"),
      "big-pickle": parseAverageScores(bpMuseSpark12Free, "opencode/muse-spark-1.2-contributor-free"),
      "Muse Spark 1.3": parseAverageScores(msMuseSpark12Free, "opencode/muse-spark-1.2-contributor-free"),
      "Ling 3.0": parseAverageScores(l30MuseSpark12Free, "opencode/muse-spark-1.2-contributor-free"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31MuseSpark12Free, "opencode/muse-spark-1.2-contributor-free"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35MuseSpark12Free, "opencode/muse-spark-1.2-contributor-free"),
      "Gemini 3.6 Flash": parseAverageScores(g36MuseSpark12Free, "opencode/muse-spark-1.2-contributor-free"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, audio, video, PDF in; text out",
      pricingNote: "Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M",
      pricingTiers: ["Free Zen tier","Contributor $0.10/$0.20","Standard $1.25/$4.25"],
    },
  },
  {
    id: "opencode/muse-spark-1.3-contributor-free",
    name: "Muse Spark 1.3 Free",
    short: "Free Contributor-tier access to Meta's Muse Spark 1.3 for coding and long-horizon agentic work. Same weights as standard 1.3; training-data consent in exchange for $0.",
    scores: parseAverageScores(avgMuseSpark13Free, "opencode/muse-spark-1.3-contributor-free"),
    sources: {
      "average": parseAverageScores(avgMuseSpark13Free, "opencode/muse-spark-1.3-contributor-free"),
      "big-pickle": parseAverageScores(bpMuseSpark13Free, "opencode/muse-spark-1.3-contributor-free"),
      "Muse Spark 1.3": parseAverageScores(msMuseSpark13Free, "opencode/muse-spark-1.3-contributor-free"),
      "Ling 3.0": parseAverageScores(l30MuseSpark13Free, "opencode/muse-spark-1.3-contributor-free"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31MuseSpark13Free, "opencode/muse-spark-1.3-contributor-free"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35MuseSpark13Free, "opencode/muse-spark-1.3-contributor-free"),
      "Gemini 3.6 Flash": parseAverageScores(g36MuseSpark13Free, "opencode/muse-spark-1.3-contributor-free"),
    },
    meta: {
      contextWindow: "1,048,576 (1M)",
      modalities: "Text, image, video, PDF in; text out",
      pricingNote: "Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M",
      pricingTiers: ["Free Zen tier","Contributor $0.10/$0.20","Standard $1.25/$4.25"],
    },
  },
  {
    id: "opencode/nemotron-3.5-lightning-free",
    name: "Nemotron 3.5 Lightning Free",
    short: "Compact open 30B MoE (3B active) for high-volume, low-latency execution in always-on agents. Pairs with a frontier planner.",
    scores: parseAverageScores(avgNemotron35LightningFree, "opencode/nemotron-3.5-lightning-free"),
    sources: {
      "average": parseAverageScores(avgNemotron35LightningFree, "opencode/nemotron-3.5-lightning-free"),
      "big-pickle": parseAverageScores(bpNemotron35LightningFree, "opencode/nemotron-3.5-lightning-free"),
      "Muse Spark 1.3": parseAverageScores(msNemotron35LightningFree, "opencode/nemotron-3.5-lightning-free"),
      "Ling 3.0": parseAverageScores(l30Nemotron35LightningFree, "opencode/nemotron-3.5-lightning-free"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Nemotron35LightningFree, "opencode/nemotron-3.5-lightning-free"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Nemotron35LightningFree, "opencode/nemotron-3.5-lightning-free"),
      "Gemini 3.6 Flash": parseAverageScores(g36Nemotron35LightningFree, "opencode/nemotron-3.5-lightning-free"),
    },
    meta: {
      contextWindow: "262,144 native",
      modalities: "Text-only",
      pricingNote: "Free Zen / NVIDIA trial",
      pricingTiers: ["Free Zen / NVIDIA trial"],
    },
  },
  {
    id: "opencode/nemotron-3-ultra-free",
    name: "Nemotron 3 Ultra Free",
    short: "NVIDIA flagship open-weights hybrid Mamba-MoE for frontier reasoning and long-running agents. Fast with low hallucination.",
    scores: parseAverageScores(avgNemotron3UltraFree, "opencode/nemotron-3-ultra-free"),
    sources: {
      "average": parseAverageScores(avgNemotron3UltraFree, "opencode/nemotron-3-ultra-free"),
      "big-pickle": parseAverageScores(bpNemotron3UltraFree, "opencode/nemotron-3-ultra-free"),
      "Muse Spark 1.3": parseAverageScores(msNemotron3UltraFree, "opencode/nemotron-3-ultra-free"),
      "Ling 3.0": parseAverageScores(l30Nemotron3UltraFree, "opencode/nemotron-3-ultra-free"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31Nemotron3UltraFree, "opencode/nemotron-3-ultra-free"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35Nemotron3UltraFree, "opencode/nemotron-3-ultra-free"),
      "Gemini 3.6 Flash": parseAverageScores(g36Nemotron3UltraFree, "opencode/nemotron-3-ultra-free"),
    },
    meta: {
      contextWindow: "1M (262K default serve)",
      modalities: "Text in/out (beyond text unverified)",
      pricingNote: "Free Zen / NVIDIA trial",
      pricingTiers: ["Free Zen / NVIDIA trial"],
    },
  },
  {
    id: "opencode/ox-alpha",
    name: "Ox Alpha",
    short: "Experimental open-weights reasoning model hosted on OpenCode Zen, designed for agentic coding, logic puzzles, and tool-augmented workflows.",
    scores: parseAverageScores(avgOxAlpha, "opencode/ox-alpha"),
    sources: {
      "average": parseAverageScores(avgOxAlpha, "opencode/ox-alpha"),
      "Gemini 3.6 Flash": parseAverageScores(g36OxAlpha, "opencode/ox-alpha"),
    },
    meta: {
      contextWindow: "200K",
      modalities: "Text in/out",
      pricingNote: "Free Zen tier",
    },
  },
  {
    id: "xiaomi/mimo-v2-5-pro",
    name: "Xiaomi MiMo-V2.5-Pro",
    short: "Xiaomi flagship open-weights MoE (1.02T) for demanding agentic and 1,000+ tool-call tasks with strong 1M coherence. Text-focused Pro sibling.",
    scores: parseAverageScores(avgXiaomiMimoV25Pro, "xiaomi/mimo-v2-5-pro"),
    sources: {
      "average": parseAverageScores(avgXiaomiMimoV25Pro, "xiaomi/mimo-v2-5-pro"),
      "big-pickle": parseAverageScores(bpXiaomiMimoV25Pro, "xiaomi/mimo-v2-5-pro"),
      "Muse Spark 1.3": parseAverageScores(msXiaomiMimoV25Pro, "xiaomi/mimo-v2-5-pro"),
      "Ling 3.0": parseAverageScores(l30XiaomiMimoV25Pro, "xiaomi/mimo-v2-5-pro"),
      "Gemini 3.1 Flash Lite": parseAverageScores(g31XiaomiMimoV25Pro, "xiaomi/mimo-v2-5-pro"),
      "Gemini 3.5 Flash Lite": parseAverageScores(g35XiaomiMimoV25Pro, "xiaomi/mimo-v2-5-pro"),
      "Gemini 3.6 Flash": parseAverageScores(g36XiaomiMimoV25Pro, "xiaomi/mimo-v2-5-pro"),
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
      if (!s) return;
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
