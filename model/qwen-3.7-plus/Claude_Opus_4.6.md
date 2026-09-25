# Qwen 3.7 Plus — findings by Claude Opus 4.6

- Source: Alibaba Cloud (`qwen-3.7-plus`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's multimodal agent model in the Qwen 3.7 series, released June 2026. A vision-capable, cost-effective sibling to the text-only Qwen 3.7 Max, optimized for GUI interaction, visual code generation, and long-running autonomous agent workflows.
- **Provider / access:** Alibaba Cloud Bailian platform; available via OpenRouter, Fireworks AI, and other MaaS providers. Chat Completions API.
- **Release / knowledge:** 2026-05-31 release; knowledge cutoff not publicly specified.
- **IDs:** `alibaba/qwen-3.7-plus` (no free-tier ID on Zen; paid API only)
- **Context window:** 1 000 000 tokens input; 131 072 tokens max output. Verified via llm-stats.com and OpenRouter.
- **Modalities:** Text, image, video in; text out; thinking and non-thinking modes; tool/function calls; GUI navigation; 35-hour autonomous run capacity.
- **Pricing (as of 2026-05-31):** ~$0.32–$0.40 / $1.28–$1.60 per 1M tokens (input / output). Approximately one-sixth the cost of Qwen 3.7 Max. Paid API.
- **Architecture:** Proprietary; built on Qwen 3.7 text backbone with added vision capabilities. No open weights. Parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.81%** (source: benchmark aggregator reports)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~88–93%** range (source: multiple aggregator reports; exact score varies by evaluation configuration)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Pro (Verified Index): **~66.67%** (source: benchmark aggregator reports)
- LiveCodeBench: categorized as top-tier performance (no specific Pass@1 score found)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER: no verified public retrieval score found; 1M token context window with 131K max output supported.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 at 52.81% is moderate, below many frontier models. However, the model has native GUI navigation, vision-based debugging, and strong tool/function calling for autonomous workflows. The 35-hour autonomous run capacity is distinctive. Capped by the Terminal-Bench result and missing Tau-bench data.
- **Reasoning: 88/100.** GPQA Diamond in the 88–93% range represents strong PhD-level reasoning. Thinking/non-thinking mode flexibility allows depth tuning. Capped by the imprecise score range and no HLE or CritPt verified scores. Slightly behind Max variant for pure-text reasoning.
- **Context window: 85/100.** 1M token context with 131K max output is competitive with frontier standards and one of the larger output limits available. No MRCR/RULER scores to verify retrieval fidelity at full window length. Strong on paper.
- **Multimodal: 78/100.** Text, image, and video input with text output. Vision capabilities enable GUI navigation and visual debugging — a meaningful differentiator over text-only models. No audio input or non-text output generation. Video support adds breadth.
- **Coding: 78/100.** SWE-bench Pro at ~66.67% is respectable on the harder professional benchmark. LiveCodeBench performance categorized as top-tier but no specific score. The vision-enabled coding (debugging from screenshots) is practical. Capped by no SWE-bench Verified, DeepSWE, or SciCode scores.
- **Cost efficiency: 92/100.** At ~$0.32–$0.40/$1.28–$1.60 per 1M tokens, this is one of the most cost-efficient frontier-capable models available. Approximately one-sixth the cost of the Max variant. Excellent value for the capability level.
- **Overall Score: 80/100.** Mean of (72 + 88 + 85 + 78 + 78) / 5 = 80.2, rounded half-up to 80. A strong value-tier agent model with excellent reasoning and large context, differentiated by vision-enabled agentic capabilities. Tool-use benchmark scores trail pure coding-focused models. Best suited for cost-sensitive, vision-requiring autonomous workflows.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6)** — 2026-09-25
- Method: public internet research (Alibaba documentation, llm-stats.com, OpenRouter, ofox.ai, marktechpost.com, fireworks.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
