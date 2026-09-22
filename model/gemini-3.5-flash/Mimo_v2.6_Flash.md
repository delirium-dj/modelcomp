# Gemini 3.5 Flash — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-3-5-flash`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** First Gemini 3.5-family model (Google I/O 2026, 2026-05-19): Flash-tier latency at near-Pro agentic/coding scores — beats Gemini 3.1 Pro on Terminal-Bench 2.1, MCP Atlas, GDPval-AA, CharXiv, MMMU-Pro; default for Gemini app and Search AI Mode (1B+ monthly users).
- **Provider / access:** Google AI Studio / Gemini API `gemini-3.5-flash` (GA, no preview suffix); Vertex AI; Gemini app free; Android Studio, Antigravity, Enterprise Agent Platform. Free tier on AI Studio (RPD/RPM caps).
- **Release / knowledge:** 2026-05-19; knowledge cutoff **January 2025** (per DeepMind model card / Appwrite — some aggregators show 2026-01; both cited below).
- **IDs:** `gemini-3.5-flash` (version `3.5-flash-05-2026`).
- **Context window:** 1,048,576 input; 65,536 max output (64K).
- **Modalities:** text/image/audio/video/PDF in; text out; dynamic thinking on by default (minimal/low/medium/high); tool calls yes; JSON mode yes; no computer-use, no image/audio generation.
- **Pricing (as of 2026-09-22):** **$1.50 in / $9.00 out per 1M** (flat — no over-200K cliff); cached $0.15 (90% off); batch $0.75/$4.50; priority $2.70/$16.20; non-global $1.65/$9.90. Context-cache storage $1.00/1M tok-hr. Free on Gemini app / AI Studio free tier. Paid API otherwise.
- **Architecture:** proprietary sparse MoE (undisclosed); 289 tok/s output (~4× frontier peers).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2 harness): **76.2%** (Google model card; beats 3.1 Pro 70.3, Opus 4.7 66.1; behind GPT-5.5 78.2)
- MCP Atlas: **83.6%** (Google; #1 field-wide, beats 3.1 Pro 78.2 / Opus 4.7 79.1)
- OSWorld-Verified: **78.4%** (Google)
- Toolathlon: **56.5%** (Google; beats GPT-5.5 55.6)
- GDPval-AA: **1656 Elo** (Google/AA; beats 3.1 Pro 1314, behind Opus 4.7 1753)
- Finance Agent v2: **57.9%** (Google; beats GPT-5.5 51.8)
- AutomationBench / Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.2%** (BuildFastWithAI, 2026-05-20; trails 3.1 Pro 94.3)
- Humanity's Last Exam (full): **40.2%** (Google; trails 3.1 Pro 44.4, Opus 4.7 46.9)
- ARC-AGI-2: **72.1%** (Google; trails 3.1 Pro 77.1, GPT-5.5 84.6)
- Artificial Analysis Intelligence Index: **55** (AA, 2026-05-28; #8 of 148) — note TopReviewed cites both "55" and a "cap_composite" table row of 55; one review page shows an error-state "999" index which is invalid and ignored
- CritPt / FrontierMath / LCR: no verified public score found for 3.5 Flash specifically

Coding:

- Terminal-Bench 2.1: **76.2%** (Google; new Flash high)
- SWE-Bench Pro (Public, single attempt): **55.1%** (Google; trails Opus 4.7 64.3, GPT-5.5 58.6)
- SWE-bench Verified: **~80.8%** (BenchLM aggregator — not on Google's own card; treat as aggregator estimate)
- DeepSWE: no verified public score found

Long context:

- MRCR v2 8-needle 128K average: **77.3%** (Google; trails 3.1 Pro/Sonnet 4.6 84.9, GPT-5.5 94.8)
- MRCR v2 1M pointwise: **26.6%** (Google; flat vs 3.1 Pro 26.3 — window outruns working memory)
- GraphWalks / ∞Bench: no verified public score found

Multimodal:

- CharXiv Reasoning: **84.2%** (Google; field leader vs GPT-5.5 84.1)
- MMMU-Pro: **83.6%** (Google; #1 llm-stats board vs GPT-5.5 81.2)
- Blueprint-Bench 2: **33.6%** (Google; beats 3.1 Pro 26.5)
- AA Omniscience hallucination rate: **~61%** (AA — factual reliability concern; Search grounding advised)

### Normalized scores (1–100)

- **Tool use: 90/100.** MCP Atlas 83.6% #1, OSWorld-Verified 78.4%, TB2.1 76.2%, Toolathlon 56.5%, GDPval-AA 1656 — best Flash-tier agentic set; capped below Opus/GPT-5.5 class GDPval 1750+ and missing Tau3/Claw.
- **Reasoning: 85/100.** GPQA 92.2, AA Index 55 (#8/148); clearly trails Pro-tier on HLE 40.2 and ARC-AGI-2 72.1 — solid but not frontier reasoning.
- **Context window: 80/100.** 1M documented, but MRCR only 77.3% at 128K and 26.6% at 1M — reliable range ~128–256K; deep-retrieval workflows should chunk. Below 3.1 Pro's 88.
- **Multimodal: 95/100.** Native text/image/audio/video/PDF in (audio → 90 band); CharXiv 84.2 #1, MMMU-Pro 83.6 #1, Blueprint-Bench 33.6 — class-leading chart/document understanding lifts to 95.
- **Coding: 88/100.** TB2.1 76.2% beats 3.1 Pro, SWE-Pro 55.1 solid, SWE-bench Verified ~80.8 aggregator; capped by SWE-Pro behind Opus 4.7 (64.3) and no DeepSWE row.
- **Cost efficiency: 85/100.** $1.50/$9 flat (no 200K cliff), $0.15 cache (90% off), batch 50% off, free AI Studio tier — strongest frontier-adjacent value; thinking tokens bill as output (inflation risk on hard turns).
- **Overall Score: 88/100.** Mean of five quality dims (90+85+80+95+88)/5 = 87.6 → 88. Best-fit: high-volume agentic tool-use and multimodal document pipelines where latency and unit cost matter more than HLE/ARC-AGI peak reasoning or 1M needle retrieval.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (DeepMind model card + Gemini 3.5 blog, Google I/O launch coverage, Appwrite deep-dive, llm-stats, TopReviewed, Gate.AI, witho2, BuildFastWithAI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
