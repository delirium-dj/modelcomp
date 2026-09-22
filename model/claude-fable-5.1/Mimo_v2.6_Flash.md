# Claude Fable 5.1 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-fable-5-1`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's most capable generally available model (released 2026-09-01), successor to Fable 5, aimed at long-running agentic coding, multistep research, and document/spreadsheet/slide work. Restricted twin: Claude Mythos 5.1 (Project Glasswing only).
- **Provider / access:** Claude API `claude-fable-5-1` (Messages API); also Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude apps. Chat Completions-compatible via Anthropic endpoints.
- **Release / knowledge:** 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `claude-fable-5-1` (Anthropic); no OpenCode Zen Free ID identified — scored on paid pricing.
- **Context window:** 1M tokens (default and max); 128K max output; tokenizer introduced with Opus 4.7.
- **Modalities:** text + image in; text out; adaptive thinking always on (effort low/medium/high); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** $10 in / $50 out per 1M; cache read $0.25 (75% cut vs Fable 5's $1.00); 5m cache write $12.50; batch $5/$25. Paid only — no free tier.
- **Architecture:** proprietary (closed weights; same underlying weights as Mythos 5.1 with different safeguards).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic; Mythos 5.1 60.9%)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic; public leaderboard ±3.5–4.5 pts)
- GDPval-AA v2: **1853** (Anthropic; vs Opus 5 1824)
- OSWorld 2.0: **77.9% partial / 41.7% strict** (Anthropic, Aug 2026 task release; safeguards zeroed some tasks)
- AutomationBench: **31.4%** (Anthropic)
- CursorBench 3.2.0: **73.4%** (Anthropic)
- Tau3-Banking: no verified public score found
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **60.9% no tools / 65.0% with tools** (Anthropic)
- GPQA Diamond: **93.7%** (reported in OpenAI comparison table citing Anthropic runs)
- FrontierMath Tier 4 v2: **87.8** (Epoch AI, max)
- FrontierMath Tiers 1–3 v2: **90.2** (Epoch AI)
- SimpleQA Verified: **70.8** (Epoch AI)
- LiveBench: **83.8** (max, 23 runs)
- Artificial Analysis Intelligence Index: **65.7 / 66** (top of tracked field at launch)
- OTIS Mock AIME 2024–2025: **100.0** (Epoch AI)

Coding:

- DeepSWE v1.1: **67.4%** (OpenAI comparison table citing Anthropic)
- MirrorCode: **73.3** (Epoch AI, high)
- SWE-bench Verified: no verified public score found for 5.1 specifically
- LiveCodeBench: no verified public score found for 5.1 specifically

Long context:

- 1M window documented; no MRCR/RULER published row for Fable 5.1 — long-context retrieval: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 97/100.** TB4.0 55.8%, TB-Science 52.6%, GDPval 1853, OSWorld 77.9 partial, AutomationBench 31.4%; capped slightly by safeguard-zeroed tasks and missing Tau3/Claw rows.
- **Reasoning: 97/100.** HLE 60.9/65.0, FrontierMath T4 87.8, AA Index ~66 (field-leading), SimpleQA 70.8; capped just below 100 by GPQA 93.7 not fully saturated and no CritPt/LCR rows.
- **Context window: 95/100.** 1M window confirmed; no measured ≥98% retrieval at 512K+ published for this model, so 95 not 100.
- **Multimodal: 65/100.** Text + image in, text out (strong chart/filing vision work claimed); no video/audio/non-text out → 60–70 band.
- **Coding: 95/100.** TB4.0 55.8% (frontier), TB-Science 52.6%, DeepSWE 67.4%, MirrorCode 73.3; capped by DeepSWE below the 74%+ top tier and missing SWE-bench/LCB rows for 5.1.
- **Cost efficiency: 30/100.** $10/$50 list maps to the ~$10/$50 ≈ 30 anchor; cache-read cut to $0.25 softens agentic bills ~25–45% but list price stays top-tier.
- **Overall Score: 90/100.** Mean of five quality dims (97+97+95+65+95)/5 = 89.8 → 90. Best-fit: premium long-horizon agentic coding and hard reasoning when budget allows; prefer Opus 5 or a Flash-class model for cost-sensitive work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Anthropic platform/announcement, Epoch AI, Better Stack, Capital & Compute, LLM Stats, modelbenchmark.io); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
