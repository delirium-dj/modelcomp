# Grok 4 — findings by Qwen 3.8 Flash

- Source: xAI / Grok 4 (`xai/grok-4`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 (with Grok 4 Heavy parallel-test-time-compute variant)
- **Short description:** xAI's July-2025 flagship — the first model to cross 50% on HLE (Heavy, with tools) and 15.9% on ARC-AGI-2 at release, with native RL-trained tool use and live X/web search on a 256K multimodal API. Superseded in the line by Grok 4.1/4.20/4.3/4.5/4.6/4.7.
- **Provider / access:** xAI API (`grok-4`, `grok-4-heavy`) and SuperGrok/Premium+ subscriptions; OpenRouter `x-ai/grok-4`. Reasoning + native tool calls + live-search API; image input.
- **Release / knowledge:** 2025-07-09 (xAI announcement); knowledge cutoff not disclosed.
- **IDs:** `xai/grok-4`.
- **Context window:** 256,000 tokens (xAI announcement; Gert Labs row confirms context length 256,000) — matches the curated `meta.json`.
- **Modalities:** text + image (+PDF per curated meta; vision explicitly documented by xAI) in; text out; reasoning and live-search tools on. Voice Mode with camera exists in the Grok app but is not the scored API surface.
- **Pricing (as of 2026-10-02):** $3 in / $15 out per 1M ($0.75 cached input; higher above 128K tokens) — independently confirmed by the benchmarklist pricing row "$3.00 in · $15.00 out". No free tier (`noFreeId`).
- **Architecture:** proprietary; params not disclosed (trained on Colossus 200K GPUs with pretraining-scale RL).

### Raw benchmarks found

> xAI launch claims (announcement, fetched 2026-10-02) plus independent 2026 harness rows from benchmarklist (`x-ai-grok-4`, fetched 2026-10-02) and its embedded BenchLM aggregate (overall **65**, #37 of 106, 66th pct; Agentic 56 / Coding 78.7 / Reasoning 55.6 / Multimodal-grounded 72.2 / Knowledge 67.3 / Math 80).

Agent / tool use:

- Terminal-Bench 2.0 (indep.): **28.1%**; Terminal-Bench Hard: **37.9%** (89th pct of its subset, small field); Terminal Bench (legacy): 27.2%
- GDPval-AA: **Elo 991** (70th pct); Tau2-Bench Telecom **74.9%**; BFCL-V4 **63.0%** (multi-turn 47.0%); MCP-Universe **33.3%** (#2/27); MCPMark pass@1 **31.7%**; APEX-Agents 30.3%
- Vending-Bench (xAI, launch): **$4,694.15 net worth / 4,569 units sold** (5-run avg — SOTA at release; vs Opus 4 $2,077)

Reasoning / knowledge:

- GPQA Diamond: **87.7–88.1%** (indep., 78–89th pct)
- HLE (indep., no-tool text): **26.7%** (83rd pct); xAI claimed 44.4% / Heavy-with-tools **50.7%** at release — harness gap noted
- MMLU-Pro **86.6%**; AIME 2025 **92.7%** (MATH 500 96.2%); FrontierMath **19.7%** (Tier-4 2.1%); ARC-AGI-2 **29.4%** pass@2 at $30/task (indep. re-run; 15.9% at xAI release); ARC-AGI-1 79.6%
- AA Intelligence Index: **34.1** (78th pct); AA Openness 5.56 (proprietary)

Coding:

- SWE-bench Verified (indep. harness): **57.8%** (11th pct — far under xAI's 79.5% launch claim); LiveCodeBench **83.2%** (68th pct); Aider Polyglot **79.6%** (#5/47); SciCode **45.7%**; APEX-SWE 36.3%; Vibe-coding arena-style score 88 (9/15)

Multimodal / long context:

- MMMU-Pro **76.3%** (44th pct); CAIS Vision Capabilities Index **49.7** (ERQA 50.1); ZEROBench 4.0 (weak); GDPval-MM wins+ties 24.3%; Design Arena Elo 1096 (23rd pct)
- AA-LCR (long-context reasoning): **68.0%** (75th pct); Fiction.LiveBench 96.9%; 256K window; no MRCR/RULER ≥98%-at-length retrieval row published.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 58/100.** Independent Terminal-Bench 2.0 28.1% is below the 45–60% mid band and GDPval-AA Elo 991 is only mid; MCP-Universe 33.3% and BFCL 63.0% are respectable, and native RL tool use + live search were genuine firsts — but 2026-harness agentic depth trails the current frontier (no verified OSWorld/τ³ row).
- **Reasoning: 78/100.** GPQA Diamond 87.7–88.1% and AIME 92.7% are near-frontier, and independent ARC-AGI-2 29.4% is solid, but indep. HLE 26.7% and FrontierMath Tier-4 2.1% miss the 90-band bar (GPQA 90+ / HLE 40+); upper-mid.
- **Context window: 75/100.** Verified 256K sits in the 200K–500K tier (65–84); AA-LCR 68.0% supports mid-tier long-context reasoning; no ≥98%-at-length retrieval evidence, so not near the tier ceiling.
- **Multimodal: 63/100.** Text + image (+PDF) in / text out is the +image 60–70 band; MMMMU-Pro 76.3% and ERQA 50.1 confirm usable vision, but ZEROBench 4.0, Design Arena 1096 and GDPval-MM 24.3% show mediocre grounded-visual performance; app-only voice/camera is not the scored API.
- **Coding: 68/100.** LiveCodeBench 83.2% and Aider Polyglot 79.6% are strong, but the independent SWE-bench Verified 57.8% (vs the 79.5% vendor claim) and SciCode 45.7% / TB 2.0 28.1% place repo-level agentic coding squarely in the 65–75 mid band.
- **Cost efficiency: 60/100.** Verified $3 in / $15 out per 1M is exactly the methodology's "$3/$15 ≈ 60" anchor, with a surcharge above 128K and cached-input $0.75; no free tier. Cost is excluded from Overall.
- **Overall Score: 68/100.** Mean of Tool 58, Reasoning 78, Context 75, Multimodal 63, Coding 68 = 342/5 = 68.4 → 68. Best fit: a historic-release frontier now displaced by its own successors — still excellent on science/math reasoning and fast competition-style code, but mid on agentic terminal work, long-context depth and 2026 repo-coding standards, at flagship pricing. The BenchLM independent aggregate (65) supports scoring below this folder's current multi-rater mean.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (xAI Grok 4 announcement fetched 2026-10-02; benchmarklist `x-ai-grok-4` independent 2026 harness rows incl. embedded BenchLM aggregate — fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores. Flagged the vendor-vs-independent gap on SWE-bench Verified (79.5% claimed vs 57.8% indep.) and HLE (50.7% Heavy-with-tools vs 26.7% indep. no-tool); curated meta (256K, $3/$15, text/image/PDF) matched the verified data.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
