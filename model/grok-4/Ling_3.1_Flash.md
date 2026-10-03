# Grok 4 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Grok 4
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July-2025 flagship reasoning model with native tool use, real-time X/platform search, and a parallel-agent "Grok 4 Heavy" mode for the hardest queries; predecessor of the Grok 4.3–4.7 line.
- **Provider / access:** xAI — API plus SuperGrok/Premium+ subscriptions (SuperGrok Heavy tier runs the Heavy variant). No free tier (repo meta.json `noFreeId: true`).
- **Release / knowledge:** Released 2025-07-09/10; knowledge cutoff not stated in captured sources.
- **IDs:** `xai/grok-4` (repo meta.json).
- **Context window:** 256K tokens (meta.json; corroborated by launch coverage).
- **Modalities:** Text, image, PDF in; text out (repo meta.json; launch coverage confirms text + image).
- **Pricing (as of 2026-10):** $3 input / $15 output per 1M tokens up to 128K; $6/$30 above 128K; automatic prompt caching $0.75/1M input.
- **Architecture:** proprietary; "same 4-series weights" for standard and Heavy per Smythos (Heavy adds up to ~32 parallel agents).

### Raw benchmarks found

Agent / tool use:

- Vending-Bench (agentic e-commerce simulation, 5-run averages): **$4,694.15 net worth, 4,569 units sold** (xAI launch, official, vendor self-reported) — vs Claude Opus 4 ($2,077.41 / 1,412 units) and humans ($844.05 / 344 units).
- Berkeley Function Calling Leaderboard: **62.97%** accuracy (evals.report, official, 2025-07-09).
- Terminal-Bench 2.x / Tau3-Banking / Tau2-Bench / GDPval-AA / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **87.0%** (evals.report, official); **87.5%** (aimodelsnavi).
- HLE: **24.52%** accuracy, no tools (evals.report, official); HLE leaderboard lists **24.5%** with 56.4% calibration error; ~25.4% no-tools (Kingy AI via deepnoodle); ~27% with tools (launch materials, secondary); 41% with tools (aimodelsnavi — conflicting, possibly conflated with Heavy).
- Grok 4 Heavy (separate parallel-agent variant): HLE text-only subset **50.7%** without external tools — first model ≥50% (xAI); **60%** pass@1 on the text-only subset with Python and Internet tools (xAI launch table; the "60" sits in the text-only-with-tools column, and attribution to Heavy is inferred from xAI's statement that Heavy is the 50%+ model).
- FrontierMath: **19.66%** (official). ARC-AGI-1: **66.67%** (official). ARC-AGI-2: **15.97%** (official; xAI claims 15.9%, then closed-model SOTA — nearly double Opus 4's ~8.6%).
- AIME 2024: **93.0%** (TPS) / 94% (community); AIME 2025: **91.7%** (aimodelsnavi) / 94% (MathArena/X posts) / 95.1% (TPS). AIME (OTIS Mock): **84.0%** (official). USAMO'25: **61.9%** (Grok 4 Heavy).
- SimpleQA Verified: **47.9%** (official). MMLU-Pro: **83%** (aimodelsnavi) / 87% (champaignmagazine) — conflicting.
- Artificial Analysis Intelligence Index: **73** at launch (July 2025), then above Gemini 2.5 Pro (70) and o3 (70).

Coding:

- SWE-bench Verified: **72.5%** (aimodelsnavi); 72–75% (community tests, secondary); 81.0% (TPS — config unclear, unverified).
- LiveCodeBench: **79%** (aimodelsnavi) / 79.3% (TPS) / 81.9% pass@1 (evals.report, unverified) / 82% (leaderboard via champaignmagazine).
- SciCode / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- No MRCR / RULER / GraphWalks scores found; 256K window.

Multimodal:

- Image and PDF input supported (meta.json); no MMMU / MMMU-Pro / VQA scores found in captured sources.

### Normalized scores (1–100)

- **Tool use: 70/100.** Vending-Bench dominance (2.3× Opus 4's net worth) is strong agentic evidence but a single vendor-reported July-2025 benchmark, and BFCL 63.0% is mid-tier; no TB2.x/MCP-Atlas/τ³ evidence exists to push higher.
- **Reasoning: 74/100.** GPQA 87.0–87.5% and AIME 2025 91.7–95.1% are near-frontier for math/science and ARC-AGI-2 15.9% led closed models at launch; capped by HLE 24.5% (no tools), FrontierMath 19.7%, and a now-dated AA Index of 73.
- **Context window: 74/100.** 256K sits between the 200K=70 and 1M=95 anchors, with no long-context retrieval evidence either way.
- **Multimodal: 73/100.** Text/image/PDF input per repo meta.json (image+PDF band), but no multimodal benchmark scores found to corroborate strength.
- **Coding: 73/100.** SWE-bench Verified 72.5% and LiveCodeBench ~80% were strong for July 2025 but sit below the Oct-2026 frontier (DeepSWE 74%+); no TB/SciCode scores.
- **Cost efficiency: 58/100.** $3/$15 per 1M matches the ~60 anchor, but rates double above 128K tokens ($6/$30) and there is no free tier.
- **Overall Score: 72.8/100.** Mean of the five quality dimensions; all evidence is July-2025 vintage, several tracker figures conflict, and the headline HLE "60%" belongs to Grok 4 Heavy with tools — not standard Grok 4.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
