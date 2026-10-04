# Gemini 3.7 Flash — findings by Laguna XS 2.1

- Source: Google (`gemini-3.7-flash`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's "most intelligent workhorse" Flash model (2026-08-13), three weeks after 3.6 Flash; big coding/agentic gains (DeepSWE +16.3 pts) at an introductory half-price rate through end of 2026. Powers the Gemini Spark agent.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.7-flash`, stable), Google Antigravity, Gemini Enterprise Agent Platform, Gemini app (Spark for AI Pro/Ultra). Thinking levels low/medium/high (`minimal` unsupported).
- **Release / knowledge:** 2026-08-13 (GA); knowledge cutoff not published in sources found.
- **IDs:** `gemini-3.7-flash` (Gemini API). No Zen Free ID found.
- **Context window:** 1,048,576 tokens in / 65,536 out (same class as 3.6 Flash).
- **Modalities:** text, image, video, audio, PDF in; text out (no native image/audio generation on this ID; Live API not supported); reasoning yes (low/medium/high); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-04):** introductory $0.75 / $3.75 per 1M in/out through 2026-12-31; from 2027-01-01 $1.50 / $7.50; cached input at 90% discount.
- **Architecture:** proprietary; no parameter count published. ~340 output tokens/s (Artificial Analysis).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (Google model card; 85.1% per Cloud docs; AA measured +8 pts vs 3.6)
- Terminal-Bench 3.0: **14.9%** (Google model card)
- OSWorld 2.0: **47.9%** (Google model card)
- AutomationBench (private set): **30.4%** (Google; vs 3.6 Flash 17.0)
- GDPval-AA v2: **1525 Elo** (Google model card)
- Agents' Last Exam: **26.3%** pass rate (Google model card)
- Harvey LAB-AA (legal): **90.7%** (Google model card)
- Tau3-Banking: **+3 points vs 3.6 Flash** (Artificial Analysis; absolute value not published)
- Claw-Eval / MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index: **56 high / 53 medium / 51 low** (Artificial Analysis, 2026-08-13)
- HLE-Verified: **53.6%** (Google model card); HLE **45.7%** (Cloud docs)
- GDP.pdf (expert PDF comprehension): **34.0%** (Google)
- CharXiv Reasoning: **84.5% no tools / 88.7% with tools** (Google model card)
- BioMysteryBench: **87.1% human-solvable / 43.5% human-difficult**; LABBench2 **82.1%** (Google model card)
- GPQA Diamond / CritPt: no verified public score found in sources checked

Coding:

- DeepSWE v1.1: **65.3%** (Google launch; 63.7% per Cloud docs; vs 3.6 Flash 49.0)
- FrontierCode 1.1 Main: **43.6%** (Google; vs 3.6 Flash 34.4)
- WebDev Arena / Code Arena Elo: **1588** (Arena.ai via Google) / **1592** (LMArena via Cloud docs)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found in sources checked

Long context:

- GDM-MRCR v2 (8-needle), 128K average: **97.0%** (Google model card; vs Sonnet 5 81.5, Terra 93.5)

Multimodal (supporting): LVBench long video **85.4%** (Google model card)

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 85.8% and Harvey LAB-AA 90.7% are strong for a Flash-tier model; capped by OSWorld 47.9%, Agents' Last Exam 26.3% and AutomationBench 30.4% sitting well below frontier-flagship numbers, and no MCP-Atlas/Tau3 absolute rows.
- **Reasoning: 82/100.** AA Index 56 (high) and HLE-Verified 53.6% are mid-frontier — matching Terra/Muse 1.2-class models at a fraction of the cost; capped by no public GPQA row and medium/low tiers dropping to 53/51.
- **Context window: 95/100.** 1M window (95–100 tier) with MRCR v2 97.0% at 128K average — excellent, but that's a 128K measurement, not the ≥98%-at-512K+ evidence needed for 100.
- **Multimodal: 95/100.** Text/image/video/audio/PDF in (audio-in tier 90–100) with LVBench 85.4% and GDP.pdf 34.0% backing; text-only output caps it below the very top.
- **Coding: 84/100.** DeepSWE 65.3%, FrontierCode 43.6%, TB 2.1 85.8% and WebDev Arena 1588 are the best Flash-class coding numbers found; capped below the 74%+ DeepSWE frontier ref and no SWE-bench Verified row.
- **Cost efficiency: 90/100.** Intro $0.75/$3.75 (through 2026-12-31) sits between the methodology's ~$0.60/$2.20 (92) and $1.25/$4.25 (88) anchors, with $0.40 per Index task (30% below 3.6 Flash); docked for the scheduled doubling to $1.50/$7.50 on 2027-01-01.
- **Overall Score: 87.2/100.** Mean of (80, 82, 95, 95, 84) = 87.2 — the value pick for high-volume agentic coding and multimodal pipelines through end-2026's introductory pricing.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Google launch post + model card, Gemini API docs, Cloud docs, Artificial Analysis, Ars Technica, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
