# Qwen3.5 9B — findings by LongCat 2.5 Preview

- Source: Alibaba/Qwen3.5 9B (`opencode/qwen-3.5-9b`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 9B
- **Short description:** Alibaba's efficient 9B open-weight multimodal model with hybrid Gated DeltaNet + MoE architecture. Handles text, image, and video understanding with native tool calling and reasoning mode.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-9b`; Together AI, OpenRouter, Alibaba Cloud PAI-EAS, DeepInfra. Open weights (Apache 2.0).
- **Release / knowledge:** 2026-03-02
- **IDs:** `opencode/qwen-3.5-9b` (Zen Free ID exists)
- **Context window:** 262,144 tokens native; extensible to ~1M with YaRN scaling
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-01):** $0.10/1M input, $0.15/1M output. Extremely low cost — among the cheapest models available.
- **Architecture:** 9B dense, hybrid Gated DeltaNet + MoE (8×(3×DeltaNet→FFN→1×Attention→FFN))

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **24%**
- τ²-Bench Telecom: **87%**
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (or 78.6% from Artificial Analysis)
- MMLU Pro: **82.5%**
- HLE: **15%**
- Intelligence Index: **14.8** (or 20.6 from Artificial Analysis)
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: **14.8 / #266 of 630**

Coding:

- LiveCodeBench v6: **82.7%**
- Coding Index: **28.7** (or 23.5 from Artificial Analysis)
- SWE-bench Verified: no verified public score found
- DeepSWE: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- Context window: **262K native**, extensible to ~1M with YaRN
- Long-context reasoning: **70%**

Multimodal:

- MMBench: **90.1%**
- Modalities: text, image, video in; text out

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-Bench Telecom at 87% is strong, but Terminal-Bench Hard at 24% is low. Missing Terminal-Bench 2.1, Tau3, GDPval, and Claw-Eval scores. Tool calling is supported but agentic performance is mixed.
- **Reasoning: 65/100.** GPQA Diamond at 81.7% is impressive for a 9B model. MMLU Pro at 82.5% is solid. However, HLE at 15% and Intelligence Index at 14.8 are low-mid tier. Strong for its size but not frontier-level.
- **Context window: 75/100.** 262K native context is decent. Extensible to ~1M with YaRN, but native window is below the 500K+ frontier tier.
- **Multimodal: 80/100.** Text, image, and video input with text output. MMBench at 90.1% shows strong vision understanding. Early fusion multimodal design is a plus.
- **Coding: 65/100.** LiveCodeBench v6 at 82.7% is strong for a 9B model. Coding Index at 28.7 is mid-tier. Missing SWE-bench Verified and DeepSWE scores.
- **Cost efficiency: 95/100.** $0.10/$0.15 per 1M input/output is among the cheapest available — near-free tier pricing. Open weights (Apache 2.0) allow self-hosting at zero cost.
- **Overall Score: 68/100.** Mean of (55 + 65 + 75 + 80 + 65) / 5 = 68. Best-fit recommendation: excellent value pick for multimodal agentic workloads on a budget; self-hostable open weights with near-zero inference cost.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-01
- Method: public internet research (Alibaba Qwen docs, Artificial Analysis, opper.ai, DeepInfra, ApX, Venice AI, PricePerToken); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
