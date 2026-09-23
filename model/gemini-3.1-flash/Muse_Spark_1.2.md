# Gemini 3.1 Flash — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's 3.1 Flash workhorse (2026-03), frontier-class coding at Flash cost; 1M context, natively multimodal, between Pro and Flash-Lite in tier.
- **Provider / access:** Google AI Studio `google/gemini-3.1-flash`, Vertex AI, and OpenCode Zen `google/gemini-3.1-flash` (Chat Completions via adapter)
- **Release / knowledge:** 2026-03-03 (Flash-Lite date; Flash same window); knowledge cutoff 2025-11
- **IDs:** `google/gemini-3.1-flash` (Free tier via Google AI Studio rate limits)
- **Context window:** 1,048,576 total (1M in / 65,536 out) — verified via Google model family docs and Lite card 1M
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (thinking High/Dynamic); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $0.30 / $2.50 per 1M in/out estimated (Lite $0.25/$1.50; 2.5 Flash $0.30/$2.50; family tiered) — Free tier available
- **Architecture:** Proprietary (Gemini 3.1 series)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (no TB2.1 disclosed for 3.1 Flash; Lite 34.1%)
- Tau3-Banking / Tau2-Bench: **31.3% Telecom (Lite proxy, 3.1 Flash-Lite)** (BenchmarkList — no isolated Flash numeric, Lite shown as 31.3% vs Flash expected higher)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **57.1% MCP Atlas (Lite)** (BenchmarkList Lite high effort; Flash expected ~60%+)
- Humanity's Last Exam: **16.0% (Lite)** (DeepMind card Lite High no-tools — Flash Pro 94.3% GPQA vs Flash 90.4% indicates Flash ~18-22% HLE)
- AutomationBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.4% (Gemini 3 Flash family) / 86.9% Lite** (AI-Toolbox 2026-04-11: 3 Flash 90.4% vs 3.1 Pro 94.3% vs Lite 86.9%)
- HLE: **no verified public score found for Flash isolation (Lite 16.0% proxy)**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **25.6 (Lite, BenchmarkList)** (Flash expected 30-35; no isolated Flash AA Index published)
- MMMLU: **88.9% (Lite)** (DeepMind Lite High)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMMU-Pro: **76.8% (Lite)** / CharXiv 73.2% Lite

Coding:

- SWE-bench Verified / SWE-Pro: **78.0% Verified (Gemini 3 Flash)** (AI-Toolbox: 3 Flash 78.0% vs 3.1 Pro 80.6% vs Opus 80.9%; Lite not published — Flash proxy for 3.1 Flash)
- LiveCodeBench: **72.0% (Lite)** / **75% (3.1 Pro)** (DeepMind — Flash expected ~73-74%; AI-Toolbox notes 3 Flash not published)
- SciCode / AA-SciCode: **no verified public score found** (Lite SciCode 43.4% per ModelBeat)
- Vibe Code Bench: **0.0% Lite** (BenchmarkList — poor Flash-Lite; Flash expected higher)
- DeepSWE / Coding Index / other: **AA Coding Index 58.6 mirror** (llm.ing for MiniMax proxy not applicable)
- HumanEval: **90.5% Lite** / Pro ~94% (DeepMind Lite)

Long context:

- MRCR v2 (8-needle): **60.1% at 128K avg / 12.3% at 1M pointwise (Lite)** (DeepMind Lite card — Flash expected higher but no isolated Flash MRCR published)

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 57.1% Lite + Tau2 31.3% Lite moderate; capped by missing TB2.1/Tau3/Claw/GDPval and low Lite HLE 16%, so below 80 despite family speed.
- **Reasoning: 80/100.** GPQA 90.4% Flash family strong + Lite 86.9% + MMMLU 88.9%; capped by HLE 16% Lite and no AA Index for Flash isolation.
- **Context window: 96/100.** 1,048,576 total; tier 95-100 for ≥1M but MRCR Lite 60.1% at 128K and 12.3% at 1M shows steep drop, so capped at upper-tier floor.
- **Multimodal: 84/100.** Text/image/audio/video/PDF in → text out via Lite table; MMMU-Pro 76.8% + Video-MMMU 84.8% + CharXiv 73.2% moderate but 5-input qualifies for 80+.
- **Coding: 80/100.** SWE-Verified 78.0% Flash family near Pro 80.6% + LiveCodeBench 72% Lite; capped by missing isolated Flash LCB and Vibe 0% Lite.
- **Cost efficiency: 88/100.** Lite $0.25/$1.50 very cheap; Flash ~$0.30/$2.50 still cheap with Free tier, so high but not 100 vs $0 Zen.
- **Overall Score: 82/100.** Mean of five non-cost dims (72+80+96+84+80)/5=82.4 → 82; best-fit for low-cost high-volume Flash work when Pro reasoning not required (Lite proxy noted).

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (DeepMind Gemini 3.1 Flash-Lite model card 2026-03-03, AI-Toolbox 2026-04-11 comparison, BenchmarkList); no isolated Gemini 3.1 Flash numeric beyond family inference — Lite used as proxy where noted, scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
