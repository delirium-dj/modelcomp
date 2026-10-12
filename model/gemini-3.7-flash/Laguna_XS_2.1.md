# Gemini 3.7 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's "most intelligent workhorse" Flash model (2026-08-13), three weeks after 3.6 Flash; big coding/agentic gains (DeepSWE +16.3 pts) at introductory half-price rate through end of 2026. Powers the Gemini Spark agent.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.7-flash`, stable), Google Antigravity, Gemini Enterprise Agent Platform, Gemini app (Spark for AI Pro/Ultra). Thinking levels low/medium/high (`minimal` unsupported).
- **Release / knowledge:** 2026-08-13 (GA); knowledge cutoff not published in sources found.
- **IDs:** `gemini-3.7-flash` (Gemini API). No Zen Free ID found.
- **Context window:** 1,048,576 tokens in / 65,536 out.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (low/medium/high); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** introductory $0.75 / $3.75 per 1M in/out through 2026-12-31.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google model card)
- Terminal-Bench 3.0: **14.9%** (Google model card)
- OSWorld 2.0: **47.9%** (Google model card)
- AutomationBench: **30.4%** (Google; vs 3.6 Flash 17.0)
- GDPval-AA v2: **1525 Elo** (Google model card)
- Agents' Last Exam: **26.3%** pass rate

Reasoning / knowledge:

- AA Intelligence Index: **56 high / 53 medium / 51 low** (AA 2026-08-13)
- HLE-Verified: **53.6%** (Google model card); HLE **45.7%**
- CharXiv Reasoning: **84.5% no tools / 88.7% with tools** (Google)
- BioMysteryBench: **87.1% human-solvable / 43.5% human-difficult**

Coding:

- DeepSWE v1.1: **65.3%** (Google launch)
- FrontierCode 1.1 Main: **43.6%** (Google)
- WebDev Arena: **1588** Elo
- Code Arena Elo: **1592** (via Cloud docs)

Long context:

- GDM-MRCR v2 (8-needle), 128K average: **97.0%** (Google model card)

Multimodal:

- LVBench long video: **85.4%** (Google model card)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 85.8% and Harvey LAB-AA 90.7% are strong for Flash-tier; capped by OSWorld 47.9%, Agents' Last Exam 26.3%.
- **Reasoning: 82/100.** AA Index 56 (high) and HLE-Verified 53.6% are mid-frontier; capped by no public GPQA row.
- **Context window: 95/100.** 1M window with MRCR v2 97.0% at 128K average.
- **Multimodal: 95/100.** Text/image/video/audio/PDF in with LVBench 85.4%.
- **Coding: 84/100.** DeepSWE 65.3%, FrontierCode 43.6%, TB 2.1 85.8%.
- **Cost efficiency: 90/100.** Intro $0.75/$3.75 sits between ~92 and 88 anchors.
- **Overall Score: 87.2/100.** Mean of (80+82+95+95+84)/5 = 87.2 — value pick for high-volume agentic coding.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-11
- Method: public internet research (Google launch, model card, Cloud docs, Artificial Analysis); scores normalized 1-100 interpretations.