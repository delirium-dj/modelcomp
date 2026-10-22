# Qwen3.5-4B — findings by GLM 5.3

- Source: Alibaba Qwen (`alibaba/qwen3.5-4b`, weights `Qwen/Qwen3.5-4B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B
- **Short description:** Alibaba Qwen's tiny open-weights member of the Qwen3.5 generation (March 2026): 4B-parameter unified vision-language model with image + video input, thinking mode, and tool calling. Top use case: a free-to-run, single-GPU-class multimodal endpoint for edge agents and high-volume tasks.
- **Provider / access:** 6 hosted providers under the models.dev canonical `alibaba/qwen3.5-4b` (a $0.00/$0.00 free route exists); Alibaba Cloud Model Studio `Qwen3.5-4B` (DashScope OpenAI-compatible); open weights self-hostable via vLLM/SGLang/Transformers (runs on a single GPU, tp-size 1).
- **Release / knowledge:** released 2026-03-02 (models.dev; the Qwen3.5 collection updated Mar 9); knowledge cutoff not stated.
- **IDs:** `alibaba/qwen3.5-4b` (models.dev canonical), `Qwen/Qwen3.5-4B` (Hugging Face weights), `Qwen3.5-4B` (DashScope).
- **Context window:** 262,144 tokens native, extensible to 1,010,000 via YaRN (official card); max output 81,920 (models.dev provider rows).
- **Modalities:** text, image, and video in; text out; reasoning yes (thinking mode default, `enable_thinking: false` to disable); tool calls yes; JSON/structured output yes.
- **Pricing (as of 2026-10-21):** cheapest hosted route $0.00 in / $0.00 out per 1M (models.dev, 6 providers — free lane); Apache-2.0 weights free to self-host.
- **Architecture:** 4B parameters (dense), hybrid attention: 32 layers in an 8×(3×(Gated DeltaNet→FFN) → 1×(Gated Attention→FFN)) layout, 32 linear V / 16 QK heads (dim 128), gated attention 16 Q / 4 KV heads (dim 256), FFN intermediate 9,216, tied LM output (padded vocab 248,320), multi-token prediction trained; integrated vision encoder; Apache-2.0 open weights (5B BF16 checkpoint).

### Raw benchmarks found

> Vendor numbers from the official Qwen3.5-4B Hugging Face model card (March 2026 release tables, 4B column, small-model comparison set). No independent aggregator covers it (Artificial Analysis and BenchLM track the bigger siblings only). Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2 / 2.1: no verified public score found
- Tau3-Banking: no verified public score found. **TAU2-Bench: 79.9%** (vendor table; official setup + airline-domain fixes from the Claude Opus 4.5 system card) — remarkably strong for a 4B
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found
- BFCL-V4 (function calling): **50.3%** (vendor table)
- Visual agent (vendor table): ScreenSpot Pro **60.3%**, OSWorld-Verified **35.6%**, AndroidWorld **58.6%**, TIR-Bench **38.9% / 29.9% (with/without CI)**, V* **84.3% / 86.4% (with/without CI)**
- DeepPlanning: **17.6%**; VITA-Bench **22.0%** (vendor table)

Reasoning / knowledge:

- GPQA Diamond: **76.2%** (vendor table; HF eval-results block also lists 76.2)
- HLE: no verified public score found
- HMMT Feb 25: **74.0%**; HMMT Nov 25: **76.8%** (vendor table)
- LCR / MLCR: AA-LCR **57.0%** (vendor-run AA long-context reasoning); LongBench v2 **50.0%**
- CritPt: no verified public score found
- MMLU-Pro **79.1%**, MMLU-Redux **88.8%**, C-Eval **85.1%**, SuperGPQA **52.9%** (vendor table)
- Artificial Analysis Intelligence Index / BenchLM overall: no page for the 4B (not tracked)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench v6: **55.8%** (vendor table)
- SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found
- OJBench: **24.1%** (vendor table)
- CodeForces: no verified public score found

Long context:

- 262,144 native, YaRN-extensible to 1,010,000 (official config); AA-LCR 57.0% and LongBench v2 50.0% at the native window; no MRCR / RULER / GraphWalks retrieval score reported.

Multimodal (vendor vision-language table, 4B column):

- MMMU **77.6%**, MMMU-Pro **66.3%**, MathVision **74.6%**, Mathvista(mini) **85.1%**, VlmsAreBlind **92.6%**, RealWorldQA **79.5%**, MMStar **78.3%**, OCRBench **85.0%**, OmniDocBench1.5 **86.2%**, VideoMME(w sub) **83.5%**, MLVU **82.8%**, VideoMMMU **74.1%**, MMVU **64.9%**

### Normalized scores (1–100)

- **Tool use: 52/100.** TAU2-Bench 79.9% is outstanding for the class and computer use is serviceable (AndroidWorld 58.6%, ScreenSpot Pro 60.3%), but BFCL-V4 50.3%, OSWorld 35.6%, and DeepPlanning 17.6% cap the agentic picture; no Terminal-Bench/GDPval data at all.
- **Reasoning: 62/100.** GPQA Diamond 76.2% and HMMT ~74–77% are solid small-model results, but SuperGPQA 52.9%, AA-LCR 57.0%, and no HLE/AA-Index data keep it firmly in small-model territory.
- **Context window: 72/100.** 262,144 native tokens (200K–500K tier; 200K = 70) with the 1,010,000 figure a vendor YaRN extension and no 1M retrieval score published.
- **Multimodal: 84/100.** Image and video input with excellent tiny-model results (VlmsAreBlind 92.6, OCRBench 85.0, VideoMME 83.5 w/ sub, MMMU 77.6); capped at the video-in band by text-only output and no audio input.
- **Coding: 45/100.** LiveCodeBench v6 55.8% and OJBench 24.1% are the only verified rows — no SWE-bench, no Terminal-Bench; capped by the thin, weak coding evidence.
- **Cost efficiency: 100/100.** A $0.00/$0.00 hosted free route exists across 6 providers, and the Apache-2.0 4B weights run on a single consumer GPU — $0 = 100.
- **Overall Score: 63/100.** Half-up mean of the five quality dims (52 + 62 + 72 + 84 + 45 = 315, 315/5 = 63.0 → 63); best fit: a free, tiny, genuinely multimodal edge agent with surprisingly strong dialogue-agent behavior (TAU2 79.9) — not a coding or deep-reasoning workhorse.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (official Qwen/Qwen3.5-4B Hugging Face model card benchmark tables, models.dev catalog, aggregator absence checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
