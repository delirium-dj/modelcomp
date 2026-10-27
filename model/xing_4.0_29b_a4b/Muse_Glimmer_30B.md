# Xing 4.0 29B A4B — findings by Muse Glimmer 30B

- Source: China Telecom Artificial Intelligence / XingChen-AGI / Xing4.0-29B-A4B
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing4.0-29B-A4B
- **Short description:** China Telecom MoE 29B total / 4B active, 256K context extensible to 512K, Ascend-trained agentic coding model, Apache-2.0.
- **Provider / access:** Hugging Face `XingChen-AGI/Xing4.0-29B-A4B`, ModelScope `XingChen-AGI/Xing4.0-29B-A4B`. OpenRouter free tier.
- **Release / knowledge:** Released 2026-09-16 per Open LLM Radar; knowledge cutoff not published.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B`
- **Context window:** 256K native, extensible to 512K.
- **Modalities:** Text in/out, tool calling. Text-only.
- **Pricing (as of 2026-10-27):** Free via OpenRouter; open weights self-host $0.
- **Architecture:** 29B total, 4B active MoE, 64 experts + 1 shared, MLA + mHC + MTP, Ascend 910C trained.

### Raw benchmarks found

> Sources: ModelScope model card, MindStudio blog, Open LLM Radar.

Agent / tool use:
- Terminal-Bench 2.1: **57.50** (ModelScope)
- Tau3-Bench: **64.63** (ModelScope)
- Claw-Eval: **76.55** (ModelScope)

Reasoning / knowledge:
- AIME2026: **90.00** (ModelScope)
- AA.LCR: **61.00** (ModelScope)
- IFBench: **69.67** (ModelScope)
- GPQA Diamond / HLE: no verified public score found

Coding:
- SWE-bench Verified: **75.00** (ModelScope)
- SWE-bench Multilingual: **66.00** (ModelScope)
- LiveCodeBench: no verified public score found

Long context:
- MRCR / RULER: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 57.5, Tau3 64.6, Claw-Eval 76.6 strong agentic.
- **Reasoning: 71/100.** AIME 90 strong, AA.LCR 61 mid, IFBench 69.7.
- **Context window: 78/100.** 256K native, extensible to 512K.
- **Multimodal: 15/100.** Text-only.
- **Coding: 77/100.** SWE-bench Verified 75, SWE-bench Multilingual 66.
- **Cost efficiency: 95/100.** Free tier + open weights.
- **Overall Score: 62.6/100.** Mean of (72+71+78+15+77)/5 = 62.6. Best-fit: free agentic coding MoE with solid tool use.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; ModelScope, MindStudio, Open LLM Radar; scores normalized 1–100.
- Future sources: add new file next to this one.
