# Qwen 3.8 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba Qwen 3.8 family base (2026-08), MoE on Qwen 3.5 foundation; Max variant is 2.4T/95B-active 1M flagship — base 3.8 shares architecture at reduced scale.
- **Provider / access:** Alibaba Cloud Model Studio `qwen/qwen-3.8` via OpenCode Zen `opencode/qwen-3.8` (Chat Completions via adapter; also Alibaba Anthropic-compatible API)
- **Release / knowledge:** 2026-08-03 (Max GA date; base 3.8 family same window); knowledge cutoff 2026-06 (supplemental training through 2026-06 per Max card)
- **IDs:** `opencode/qwen-3.8` (family); `qwen3.8-max` is flagship `qwen/qwen3.8-max`
- **Context window:** 128K total (family listing) / 1,000,000 for Max variant (65,536 out; published Max 1M flat $2/$6) — verified via Alibaba press and Qwen blog
- **Modalities:** Text in/out (family listing text-only); Max variant adds image in → text out via visual intelligence; reasoning yes (xhigh/medium/low); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** Family Standard pricing; Max $2.00 / $6.00 per 1M in/out flat (1M) — cheaper than Kimi K3 $3/$15
- **Architecture:** Proprietary Sparse MoE (Max 2.4T total / 95B active ~4%; base 3.8 same Qwen 3.5-derived MoE at lower scale)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6% (Qwen3.8-Max vendor table)** / **74.5% Qwen3.7-Max baseline** (Alibaba 2026-08-03 — vs Opus 4.8 84.6, GPT-5.6 Sol 88.8; base 3.8 no isolated TB2.1 found, Max used as family proxy)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (vendor table focuses on coding/work/multimodal, no GDPval disclosed)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon Verified: **72.5% (Qwen3.8-Max)** (Alibaba table — vs Opus 84.6, Sol 74.9%)
- AutomationBench: **27.3% (Qwen3.8-Max)** (Alibaba table — vs Opus 27.2, Sol 29.7)
- WideSearch: **81.9% (Qwen3.8-Max)** (vs Opus 72.9)
- OSWorld-Verified: **86.1% (Qwen3.8-Max)** (vs Opus 83.4; multimodal table)

Reasoning / knowledge:

- GPQA Diamond: **92.6% (Qwen3.8-Max)** (Alibaba — vs Opus 92.0, Sol 94.1)
- HLE: **43.6% (no tools) / 56.2% with tools (Qwen3.8-Max)** (Alibaba — vs Opus 45.7/57.9, Sol 47.2/58.0)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA Index published at launch per Apidog)
- IFBench: **82.8% (Qwen3.8-Max)** (Alibaba — top of row vs Sol 72.7)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- HealthBench: **60.2% (Qwen3.8-Max)** (vs Opus 52.4)

Coding:

- SWE-bench Verified / SWE-Pro: **67.7% Pro (Qwen3.8-Max)** (Alibaba — vs Opus 69.2, Fable 80.0, Sol 64.6; no Verified isolation, QwenSWEBench 80.7% in-house)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found** (but PaperBench 93.0 flagship for Max)
- DeepSWE 1.1: **56.6% (Qwen3.8-Max)** (Alibaba — vs Opus 59.0, Sol 73.0)
- FrontierSWE: **73.5% (Qwen3.8-Max)** (vs Opus 70.0, Fable 88.8)
- PaperBench: **93.0% (Qwen3.8-Max)** (best flagship row vs Sol 90.5)
- QwenSWEBench 80.7% / QwenQoderBench 58.4% in-house

Long context:

- MRCR v2 256K (8-needle): **92.9% (Qwen3.8-Max)** (Alibaba — vs Opus 83.2, Sol 93.8); LongBench v2 66.3%; no RULER isolation

### Normalized scores (1–100)

- **Tool use: 86/100.** Toolathlon 72.5% + OSWorld 86.1% #1 + WideSearch 81.9% + TB2.1 86.6% (Max proxy) strong; capped by Automation 27.3% mid and no Tau3/Claw/GDPval.
- **Reasoning: 84/100.** GPQA 92.6% + HLE 43.6%/56.2% mid + IFBench 82.8% top + HealthBench 60.2%; capped by HLE trailing Fable 53.3% and no AA Index.
- **Context window: 78/100.** Family 128K total (tier 70) but Max 1M 92.9% MRCR at 256K justifies +8; capped below 90 without distinct base 1M proof.
- **Multimodal: 60/100.** Family text in/out only (15-60 tier); Max adds image in but base listing is text-only, so 60 not omni 90.
- **Coding: 84/100.** SWE-Pro 67.7% mid + PaperBench 93.0% elite + FrontierSWE 73.5% + DeepSWE 56.6% trailing Sol 73%; capped below 88 by no Verified isolation.
- **Cost efficiency: 75/100.** Standard pricing (Max $2/$6 flat 1M); paid but cheap vs $5/$30 flagships, no $0 Free ID.
- **Overall Score: 78/100.** Mean of five non-cost dims (86+84+78+60+84)/5=78.4 → 78; best-fit for affordable agentic coding with strong PaperBench when Max multimodal not required (family proxy notes Max where isolated base missing).

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Alibaba Cloud press 2026-08-03, Qwen blog, Apidog benchmarks, QwenSWEBench tables); base Qwen 3.8 has no isolated public benchmark — Max flagship used as family proxy where noted, scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
