# Qwen 3.8 Flash — findings by Muse Spark 1.2

- Source: Alibaba (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba early Qwen4 preview (2026-08-26) with 125B/6B MoE + 51B N-gram embeddings; 1M multimodal flash model beating Opus 4.6 on SWE-bench Pro at <1/9 training cost.
- **Provider / access:** QwenCloud `qwen3.8-flash` via OpenCode Zen `alibaba/qwen-3.8-flash` (Chat Completions / Responses)
- **Release / knowledge:** 2026-08-26; knowledge cutoff not disclosed
- **IDs:** `alibaba/qwen-3.8-flash` / `qwen3.8-flash` (also `qwen3.8-flash-next` alias; no Free tier)
- **Context window:** 1,000,000 total (1M in / 65,536 out) — verified via QwenCloud docs and Artificial Analysis (1M)
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking by default, controllable); tool calls yes; JSON mode yes — no audio/PDF
- **Pricing (as of 2026-09-24):** $0.15 in / $0.47 out per 1M (Artificial Analysis via Alibaba API; QwenCloud $0.11 variant reported) — very cheap open-weight tier
- **Architecture:** Hybrid MoE 125B main + 51B N-gram embeddings, 6B active per token (Qwen3.5-style with GDN+QSA hybrid attention, Gated Residual, Muon optimizer)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2.1: **86.1%** (Artificial Analysis, Flash — rank #2 comparable, obs 15 Sept 2026)
- Terminal-Bench v4.0: **25.3%** (Artificial Analysis, Flash v4.0 — moderately priced group)
- Toolathlon Verified: **73.5%** (Qwen vendor — vs DeepSeek V4 Flash 70.3%, vs Opus 4.6 not reported)
- CoWorkBench (long office tasks): **73.9%** (Qwen vendor — vs Qwen3.7-Plus 65.1%, DeepSeek 45.1%, Opus 68.2%)
- JobBench (professional tasks): **55.7%** (Qwen vendor — vs DeepSeek 41.3%, Opus 36.6%)
- AutomationBench-AA: **no verified public score found** (not isolated for Flash; grouped under AA Index)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2: **no verified public score found** (grouped under AA Index)
- Claw-Eval / ClawProBench: **no verified public score found**
- AndroidWorld: **84.5% mobile use** (Qwen vendor multimodal agent)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Artificial Analysis, Flash — vs gpt-6-astra -3.94pp, rank #1 strong)
- GPQA vendor: **91.7%** (Qwen table — vs Opus 4.6 91.3%, DeepSeek 90.8%)
- HLE: **38.0%** (Artificial Analysis — vs Fable 5.1 -21.1pp) / vendor **35.9%** (Qwen — vs Opus 40.0%)
- LCR / MLCR: **no verified public score found** (no AA-LCR isolation published for Flash)
- CritPt: **no verified public score found** (grouped under AA Index)
- Artificial Analysis Intelligence Index: **39.9–42.2** (Artificial Analysis v4.3, Flash — 39.9 obs 16 Sept, 40–42 Next variant — vs Fable 5.1 -13.5, median 29)
- MMMU-Pro: **79.8%** (Artificial Analysis multimodal — vs gpt-6-astra -7.1pp)
- MathVision / LVBench: **95.7% / 76.6%** (Qwen vendor visual)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **62.5% Pro** (Qwen vendor, Claude Code harness 256K — surpassing Opus 4.6 53.4, vs Qwen3.7-Plus 55.8, DeepSeek 56.0)
- SWE-bench Multilingual: **81.0%** (Qwen vendor — vs Opus 77.5%)
- LiveCodeBench v6: **91.9%** (Qwen vendor — vs Opus 88.8%, DeepSeek 90.6%)
- SciCode: **50.6%** (Artificial Analysis — vs Fable 5.1 -12.5pp)
- Vibe Code Bench: **no verified public score found**
- DeepSWE 1.1: **58.7%** (Qwen vendor — vs DeepSeek 54.4, Qwen3.8-27B 42.2)
- NL2Repo-Bench: **48.1%** (Qwen vendor — vs Opus 47.6%)
- IFBench: **81.3%** (Qwen vendor — vs Opus 62.5%)

Long context:

- 1M total verified; Android 84.5 + LVBench 76.6 long-video 2h/64 videos; no MRCR/RULER at 1M reported beyond 1M listing

### Normalized scores (1–100)

- **Tool use: 85/100.** TB v2.1 86.1% strong + TB v4.0 25.3% + Toolathlon 73.5% + CoWorkBench 73.9% leading peers; capped by missing Tau3/Claw and verbose 240M token cost per Index.
- **Reasoning: 83/100.** GPQA 92.3% top-tier + HLE 38% + AA Index ~40 + MMMU-Pro 79.8%; capped by HLE gap to Opus 40% and no LCR isolation.
- **Context window: 96/100.** 1,000,000 total (65K out) verified; tier 95-100 for ≥1M but capped below 100 by no MRCR/LCR disclosure and verbose cost.
- **Multimodal: 80/100.** Text/image/video in (2048 images, 64 videos 2h) → text out; AndroidWorld 84.5 + MathVision 95.7; capped below 90 by no audio/PDF.
- **Coding: 88/100.** SWE-Pro 62.5% beating Opus 4.6 53.4 + LCB 91.9 + DeepSWE 58.7 + SciCode 50.6; capped by SciCode -12.5 vs Fable and preview under-trained status.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M (cheapest flash tier); ~95 vs Free 100, but verbose 200M tokens vs 110M median partially offsets.
- **Overall Score: 86/100.** Mean of five non-cost dims (85+83+96+80+88)/5=86.4 → 86; best-fit cost-efficient 1M multimodal coder.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (QwenCloud docs 2026-08-26, Alibaba Cloud blog 2026-08-27, Artificial Analysis 39.9-42.2, ai-atlas.co 2026-09-16, codersera/eeseel.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
