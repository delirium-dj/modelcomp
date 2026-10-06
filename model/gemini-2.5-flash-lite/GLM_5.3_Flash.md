# Gemini 2.5 Flash Lite — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite (smallest member of the 2.5 Flash family; later "Lite" refreshes exist in Google's catalog)
- **Short description:** Google's lowest-cost, lowest-latency Gemini — a small proprietary model for high-volume classification, summarization and simple chat, with the same 1M window and multimodal input as its bigger Flash sibling but far weaker agentic/coding chops. The 2026-10-05 enrichment pass added LiveCodeBench and SWE-bench Verified readings.
- **Provider / access:** Google — Gemini API ID `gemini-2.5-flash-lite` (AI Studio, Vertex AI); single tracked provider on llm-stats (Google). `generateContent` API; tech report arXiv:2503.16534 (llm-stats link).
- **Release / knowledge:** released 2025-06-17 per llm-stats (BenchmarkList dates the tracked build 2025-07-22); knowledge cutoff January 2025.
- **IDs:** `gemini-2.5-flash-lite` (Google). Free tier available (Google AI Studio / Gemini API free tier; OpenCode Zen lists it with standard rate limits).
- **Context window:** 1,000,000-token input / 65,536-token max output (Google provider row, llm-stats).
- **Modalities:** text + image in, text out (llm-stats); BenchmarkList also tracks audio evals (SpeakerSleuth, AGL1K, HearSay), indicating audio input; no video/PDF documented on the pages checked. Tool calling, JSON mode.
- **Pricing (as of 2026-09-18):** $0.10 in / $0.40 out per 1M (Google, lowest tracked price) — Google's cheapest paid Gemini tier. Free tier available (rate-limited).
- **Architecture:** proprietary, parameters undisclosed (Gemini 2.5 tech report). No reasoning-by-default posture; hybrid thinking controls like the rest of the 2.5 family.

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **36.9%** (rank 50/98); BFCL v3 Multi-Turn: **13.5%** (rank 47/85) (BenchmarkList)
- Tau2-Bench Telecom: **19.0%** (rank 262/332) (BenchmarkList)
- Terminal-Bench Hard: **4.5%** (rank 207/326) (BenchmarkList)
- GDPval-AA: **321** (rank 280/340, 18th pct) (BenchmarkList)
- MCP-Bench: **0.6** (47th pct); Galileo Agent Leaderboard: **0.47** (67th pct); TRAP: **31.2** (83rd pct); OmniGAIA: **8.6%**; Omni-DeepSearch: **2.2%** (BenchmarkList)
- TB2.0/TB2.1, Tau3, Claw Bench, OSWorld, BrowseComp: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (rank 252/464); MMLU-Pro: **75.9%** (rank 156/312); HLE: **6.8%** (rank 234/466) (BenchmarkList)
- Artificial Analysis Intelligence Index: **11.41** (rank 252/418, 40th pct) (BenchmarkList)
- AA-LCR: **56.3%** (rank 161/409, 61st pct — decent long-context reasoning for its class) (BenchmarkList)
- AIME 2025: **84.1%** (Google GA figures, June 2025, as widely reported — ported from duplicate-folder report 2026-09-27; vendor/custom-harness figure, kept separate from BenchmarkList rows above)
- ARC-AGI / CritPt / Omniscience: no verified public score found

Coding:

- LiveCodeBench: **59.3%** (Requesty gemini-2.5-flash-lite model page benchmark chart, requesty.ai, aggregator data ~mid-2025) — fills the gap the 2026-09-18 pass marked "no verified public score found"
- SWE-bench Verified: **31.6%** (anotherwrapper.com Claude Opus 4.5 vs Gemini 2.5 Flash-Lite comparison; LLMLearner independently lists 27.6) — fills the same marked gap; confirms weak repo-level agentic work
- SWE-bench Verified (vendor GA figure): **~55.7%** (Google GA figures, June 2025 custom agent setup, as widely reported — ported from duplicate-folder report 2026-09-27; vendor/custom-harness figure, kept separate from measured rows above)
- SciCode: **19.3%** (rank 353/458, 23rd pct) (BenchmarkList)
- SWE-Pro / Vibe Code Bench: no verified public score found

Long context:

- Window: **1M tokens** in / 65.5K out (llm-stats); AA-LCR 56.3% evidences usable retrieval at depth
- MRCR / RULER at window length: no verified public score found

### Normalized scores (1–100)

- **Tool use: 45/100.** BFCL-V4 36.9 with multi-turn 13.5, Tau2 Telecom 19.0, TB-Hard 4.5 and GDPval-AA 321 (18th pct) — breadth of tool support but bottom-quartile 2026 agentic execution.
- **Reasoning: 55/100.** GPQA 62.5 and MMLU-Pro 75.9 are mid-tier; HLE 6.8 and AA II 11.41 (40th pct) put it a step below plain 2.5 Flash (GPQA 83, HLE 11).
- **Context window: 97/100.** Full 1M input at the top tier of this repo with AA-LCR 56.3 as measured evidence; 65.5K output cap keeps it off 100.
- **Multimodal: 75/100.** Text + image (+ audio per tracked evals) in, text out; no video/PDF documented and no MMMU-class vision score found to argue higher.
- **Coding: 50/100.** The new LiveCodeBench 59.3% (Requesty) adds a solid algorithmic-coding datapoint above the old evidence vacuum, but the measured SWE-bench Verified 31.6% (anotherwrapper; LLMLearner 27.6) confirms weak repo-level agentic work; SciCode 19.3 stays bottom-tier.
- **Cost efficiency: 100/100.** Cheapest tracked Gemini rate ($0.10/$0.40) plus a rate-limited free tier — the $0-floor tier of this repo's cost scale.
- **Overall Score: 64.4/100.** Five-dim mean per `RULES.md` (Cost excluded): (45 + 55 + 97 + 75 + 50) / 5 = 322/5 = 64.4. Best fit: ultra-cheap high-volume triage/summarization with standout hallucination resistance (Vectara HHEM 96.7%, #3/85) — now with measured coding bounds: fine for algorithmic snippets, not for agentic repo work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (2026-09-18 pass: llm-stats model page + provider table, BenchmarkList benchmark map with percentile ranks; 2026-10-05 approved enrichment pass: Requesty LiveCodeBench chart, anotherwrapper SWE-bench comparison with LLMLearner corroboration); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
