# Qwen3.8-Max — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's flagship 2.4T Sparse MoE (95B active) with hybrid attention, 1M context and flat $2/$6 pricing; strongest Qwen to date across coding, work and multimodal agents.
- **Provider / access:** Alibaba Cloud Model Studio `alibaba/qwen3-8-max` (alias `qwen3.8-max`), OpenCode Zen `alibaba/qwen3-8-max` (Chat Completions via adapter; also Anthropic-compatible API)
- **Release / knowledge:** 2026-08-03; knowledge cutoff 2026-06 (supplemental training through 2026-06; weeks before weights open on Hugging Face/ModelScope)
- **IDs:** `alibaba/qwen3-8-max` (no Zen Free ID; one-time 1M free quota)
- **Context window:** 1,000,000 total (1M in / 131,072 out) — verified via Alibaba press and Qwen blog
- **Modalities:** Text, image, video in; text out; reasoning yes (xhigh/medium/low); tool calls yes; JSON mode yes; vision-to-agent (RecreationBench black-box)
- **Pricing (as of 2026-09-23):** $2.00 / $6.00 per 1M in/out flat across full 1M (cached $0.50 <200K prompt accounting); no Zen $0 Free ID
- **Architecture:** Sparse MoE 2.4T total / 95B active (~4% activation) on Qwen 3.5 foundation, hybrid attention

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Alibaba 2026-08-03 — vs Opus 84.6, Fable 84.6, Sol 88.8, Qwen3.7-Max 74.5)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (vendor table omits GDPval; focus on Work benchmarks)
- Claw-Eval / ClawProBench: **73.3/73.8 ClawEval-MM** (Alibaba table — vs Fable 81.2/77.5; no pure text Claw)
- Toolathon Verified: **72.5%** (Alibaba — vs Fable 77.9, Sol 74.9)
- MCP-Atlas: **no verified public score found**
- OSWorld-Verified: **86.1%** (Alibaba multimodal table — vs Opus 83.4, Fable 85.0)
- WideSearch: **81.9%** (Alibaba — vs Fable 81.2)
- Automation-Bench: **27.3%** (Alibaba)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Alibaba — vs Opus 92.0, Fable 92.6, Sol 94.1)
- HLE: **43.6% no-tools / 56.2% with tools** (Alibaba — vs Fable 53.3/64.5, Sol 47.2/58.0; weakest flagship on HLE)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA Index at launch; vendor table only)
- IFBench: **82.8%** (Alibaba — top row vs Sol 72.7)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- HealthBench: **60.2%** (Alibaba)

Coding:

- SWE-bench Verified / SWE-Pro: **67.7% Pro** (Alibaba — vs Opus 69.2, Fable 80.0, Sol 64.6; QwenSWEBench 80.7% in-house)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found** (PaperBench 93.0 flagship)
- DeepSWE 1.1: **56.6%** (Alibaba — vs Sol 73.0)
- FrontierSWE: **73.5%** (Alibaba)
- PaperBench: **93.0%** (Alibaba — best flagship row)
- QwenReactBench 1724 Elo / QwenSVGBench 1713 Elo

Long context:

- MRCR v2 256K (8-needle): **92.9%** (Alibaba — vs Sol 93.8, Opus 83.2); LongBench v2 69.1%; $OneMillion-Bench 52.5%

### Normalized scores (1–100)

- **Tool use: 87/100.** Toolathlon 72.5% + OSWorld 86.1% #1 + WideSearch 81.9% + TB2.1 86.6% beating Opus/Fable; capped by Automation 27.3% and missing Tau3/GDPval/MCP.
- **Reasoning: 84/100.** GPQA 92.6% tied + IFBench 82.8% #1 + HealthBench 60.2% + PaperBench 93.0% long-horizon; capped by HLE 43.6% weakest flagship and no AA Index.
- **Context window: 94/100.** 1,000,000 total; MRCR v2 92.9% at 256K near Sol 93.8%; tier 95-100 for 1M but capped below 96 without 1M pointwise verification.
- **Multimodal: 88/100.** Text/image/video in → text out via RecreationBench black-box; MathVision 95.2% + LogicVista 91.9% + OSWorld 86.1% + OmniDoc 92.1%; capped below 92 by no audio in.
- **Coding: 84/100.** PaperBench 93.0% #1 + FrontierSWE 73.5% + SWE-Pro 67.7% mid + DeepSWE 56.6% trailing Sol 73%; hence below 88.
- **Cost efficiency: 78/100.** $2/$6 flag flat (cheap vs $5/$30 flagships); no $0 Free ID but strong value for 2.4T MoE.
- **Overall Score: 87/100.** Mean of five non-cost dims (87+84+94+88+84)/5=87.4 → 87; best-fit for visual coding and document-intelligence at flat 1M pricing when HLE not primary.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Alibaba Cloud press 2026-08-03, Qwen blog full tables, Apidog benchmark analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
