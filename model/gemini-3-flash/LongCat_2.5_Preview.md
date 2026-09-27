# Gemini 3 Flash — findings by LongCat 2.5 Preview

- Source: Google DeepMind (`gemini-3-flash-preview`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (Preview)
- **Short description:** Google DeepMind's fast multimodal Flash variant of the first Gemini 3 generation — Pro-level intelligence at Flash speed and pricing, designed for high-volume multimodal tasks, coding agents, and math/science at scale.
- **Provider / access:** Google Gemini API / Vertex AI — `gemini-3-flash-preview` (Chat Completions-style generateContent API). December 2025 release.
- **Release / knowledge:** Released December 2025; knowledge cutoff January 2025 (per Gemini 3 developer guide).
- **IDs:** `google/gemini-3-flash-preview` (Vertex), `gemini-3-flash-preview` (Gemini API / AI Studio). No Zen Free ID — paid only.
- **Context window:** 1,000,000 tokens input; 64K max output (verified via Gemini 3 developer guide).
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes (minimal/low/medium/high thinking); tool calls, code execution, structured outputs, caching, search grounding.
- **Pricing (as of 2026-09-27):** $0.50/M in, $3.00/M out (per Gemini 3 developer guide pricing table). Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **53.9%**
- Claw-Eval: **49.2%**; Gert Labs: **56.63%**; JobBench: **11.4%**
- Tau3-Banking / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Benchgen evaluation; llm-stats rank 24)
- HLE: **43.5%** (Benchgen)
- SimpleQA: **68.7%**; MATH: **97.5%**; GSM8K: **96.8%**

Coding:

- SWE-bench Verified: **78%** (Benchgen/Google)
- SWE-bench (Vals): **75.0%**; LiveCodeBench (Vals): **85.6%**
- Vibe Code Bench: **20.20%**
- SWE-bench Pro: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 58/100.** TB2.1 (Vals) 53.9% and Claw-Eval 49.2% sit in the methodology's mid band (45–60% → 50–70); Gert Labs 56.63% confirms mid-tier agentic performance.
- **Reasoning: 85/100.** GPQA 90.4% and HLE 43.5% are frontier-tier; SimpleQA 68.7% is solid but not top-band.
- **Context window: 95/100.** 1M tokens with 64K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 90/100.** Text/image/video/audio input — full non-text input coverage; text-only output keeps it under the 95+ band.
- **Coding: 68/100.** SWE-bench Verified 78% and LiveCodeBench 85.6% are mid-upper band; Vibe Code Bench 20.2% and TB2.1 53.9% hold the dimension down.
- **Cost efficiency: 95/100.** $0.50/$3.00 pricing beats the methodology's ~$0.60/$2.20 ≈ 92 reference point — among the best rates in the field.
- **Overall Score: 79/100.** Mean of the five quality dims (58+85+95+90+68)/5 = 79.2 → 79. Best-fit: high-volume multimodal pipelines, math/science at scale, and Gemini-app workloads where Flash-class cost matters more than frontier agentic coding.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Google announcement + Benchgen evaluation, Gemini 3 developer guide, llm-stats, BenchLM, Vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
