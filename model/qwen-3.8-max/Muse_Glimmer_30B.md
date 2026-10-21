# Qwen 3.8 Max — findings by Muse Glimmer 30B

- Source: Alibaba/qwen3-8-max
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max
- **Short description:** Alibaba's hosted flagship multimodal MoE for code, reasoning and visual agents. 2.4T total / 95B active MoE with 1M context, positioned as Qwen's everything-at-once hosted offering.
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud `alibaba/qwen3-8-max` Chat Completions API. Hosted-only, no open weights.
- **Release / knowledge:** 2026-08-03 vendor release announcement; knowledge cutoff not publicly disclosed.
- **IDs:** `alibaba/qwen3-8-max`
- **Context window:** 1,000,000 total tokens; 131,000 max output — verified via vendor spec and BenchLM.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-20):** $2.00 input / $6.00 output per 1M tokens, one-time 1M-token free quota reported. Paid tier, no persistent free ID.
- **Architecture:** 2.4T total parameters MoE, 95B active, proprietary closed weights; hosted only.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- OSWorld-Verified: **86.1%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- Toolathlon-Verified: **72.5%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- CoWorkBench: **74.8%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- AutomationBench: **27.3%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- GPQA: **92.6%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- HLE: **43.6%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- MRCRv2: **92.9%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- IFBench: **82.8%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)

Coding:

- SWE-bench Pro: **67.7%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- DeepSWE: **56.6%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- FrontierSWE: **73.5%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- PaperBench: **93.0%** (BenchLM; Qwen Qwen3.8-Max release benchmarks)
- LiveCodeBench (Vals): **87.9%** (Vals AI leaderboard)

Long context:

- MRCRv2 92.9% — long-context retrieval/reasoning reported; no separate RULER/GraphWalks public figure found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 86.6% and OSWorld-Verified 86.1% put it near frontier 88%+ bar; capped by weaker AutomationBench 27.3% and missing Claw-Eval.
- **Reasoning: 90/100.** GPQA Diamond 92.6% is frontier; HLE 43.6% is mid-frontier and MRCRv2 92.9% supports long reasoning; capped by no CritPt/Omniscience public score.
- **Context window: 95/100.** 1M total with 131K output meets the 1M tier; MRCRv2 92.9% is strong but below 98% retrieval threshold for full 100.
- **Multimodal: 80/100.** Text/image/video in with text out covers video in band; capped without audio in or non-text output.
- **Coding: 72/100.** SWE-bench Pro 67.7% and FrontierSWE 73.5% are solid mid-frontier; DeepSWE 56.6% caps the score below 85%+.
- **Cost efficiency: 70/100.** $2/$6 per 1M is paid; well above $0 free tier and above $1.25/$4.25 reference.
- **Overall Score: 85/100.** Mean of Tool 88 + Reasoning 90 + Context 95 + Multimodal 80 + Coding 72 = 85.0; best-fit for hosted multimodal agentic work with strong computer-use and instruction following.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
