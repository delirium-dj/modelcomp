# Gemini 3 Flash — findings by Ling 3.1 Flash

- Source: Google (`opencode/gemini-3-flash`; API `gemini-3-flash-preview`; Gemini API/AI Studio, Vertex AI, Gemini Enterprise, Gemini app, AI Mode in Search)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's December-2025 fast tier with Pro-grade reasoning — GPQA Diamond 90.4%, MMMU-Pro 81.2%, SWE-bench Verified 78% (ahead of Gemini 3 Pro on Google's figures), HLE 33.7% (no tools), MCP Atlas 57.4%, Toolathlon 49.4% — across a 1M multimodal context at $0.50/$3 per 1M; the default model in the Gemini app and AI Mode in Search.
- **Provider / access:** Google — Gemini API (free tier available), Google AI Studio, Antigravity, Vertex AI, Gemini Enterprise, Gemini CLI, Android Studio; thinking levels minimal/low/medium/high; structured output, function calling, automatic context caching.
- **Release / knowledge:** 2025-12-17; knowledge cutoff Jan 2025.
- **IDs:** `opencode/gemini-3-flash` / `gemini-3-flash-preview`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1M-token window and takes text, image, audio, video and PDF input.
- **Context window:** 1,000,000 tokens in; 64K (≈65.5K) out.
- **Modalities:** text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** $0.50/$3.00 per 1M input/output (audio input $1.00/M); cached input $0.05/M (10% of input); free tier in the Gemini API/AI Studio; ~3× faster than Gemini 2.5 Pro (AA), ~30% fewer tokens than 2.5 Pro on typical traffic; TTFT p95 3.74s, 135 char/s.
- **Architecture:** proprietary Gemini 3 family (built on the Gemini 3 Pro reasoning foundation); parameter count undisclosed.

### Raw benchmarks found

Reasoning / knowledge (Google launch, Dec 2025):

- GPQA Diamond: **90.4%** — frontier band, "rivaling larger frontier models"
- Humanity's Last Exam (no tools): **33.7%**
- MMMU-Pro: **81.2%** — comparable to Gemini 3 Pro, SOTA-class at release
- LMArena Elo: figure not captured

Agent / tool use:

- MCP Atlas: **57.4%**
- Toolathlon: **49.4%**
- SWE-bench Verified: **78%** — outperforms Gemini 2.5 series and Gemini 3 Pro (Google's figures)
- τ²-bench / Tau³ / GDPval-AA / BrowseComp: no verified public score found

Coding (beyond SWE-bench Verified):

- DeepSWE / LiveCodeBench / Terminal-Bench 2.x / AA Coding Index: no verified public score found

Long context / multimodal:

- 1M window with automatic context caching; no MRCR/RULER/AA-LCR score published
- Native text/image/audio/video/PDF input; MMMU-Pro 81.2% (above)

### Normalized scores (1–100)

- **Tool use: 68/100.** MCP Atlas 57.4%, Toolathlon 49.4%, τ²-bench 43.3% (AA) and OSWorld-Verified 65.1% (Google, 5-run avg) sit in the mid band, with SWE-bench Verified 75.0–78% supporting; Terminal-Bench 2.1 at 31% (Google's own Terminus-2 run; 53.9% on vals.ai) is far under the frontier and pulls the score below the launch estimate.
- **Reasoning: 80/100.** GPQA Diamond 90.4% reaches the 90%+ frontier band, with HLE 33.7% (no tools), MMMU-Pro 81.2%, ARC-AGI-1 84.67% and LMArena 1466 supporting; FrontierMath 35.64% (official) and the unpublished AA Intelligence Index cap the score.
- **Context window: 95/100.** 1M-token input window with automatic context caching; GDM-MRCR v2 60.1% (Google's own run) is a moderate retrieval score and no ≥98%-at-512K+ figure exists, so 100 is not justified.
- **Multimodal: 92/100.** Native text/image/audio/video/PDF input with text output — the audio-in/video band (90–100); MMMU-Pro 81.2% supports.
- **Coding: 72/100.** LiveCodeBench 85.6% (vals.ai) / 79.7% pass@1 and SWE-bench Verified 75.0–78% are strong, but DeepSWE 37% (Google's self-computed run; 5.16% in the December-2025 official evals), SWE-bench Pro 34.6–49.6%, Vibe Code Bench v1.1 20.2% and Terminal-Bench 2.1 31% cap the score.
- **Cost efficiency: 90/100.** $0.50/$3 per 1M (blended ~$1.13/M at 3:1) with 10%-of-input cache reads ($0.05/M) and a free Gemini API tier sits between the ~$0.10/$0.20≈97–99 and ~$1.25/$4.25≈88 anchors; audio input costs $1.00/M.
- **Overall Score: 81/100.** (68+80+95+92+72)/5 = 81.4 → 81 — frontier-grade reasoning (GPQA 90.4%) and a 1M multimodal window at $0.50/$3 with a free tier; mid-tier agentic tooling (τ²-bench 43.3%, Toolathlon 49.4%, TB 2.1 31% self-computed) and a 75–78% SWE-bench keep it below the October-2026 agent frontier.

---

## Update 2026-10-08 (6-day re-research)

Large set of new rows found (Google's own July-2026 comparison tables plus vals.ai, evals.report, BenchLM and AA):

- Agent / tool use: τ²-bench **43.3%** (AA); Claw-Eval **49.2%** (Claw-Eval leaderboard); OSWorld-Verified **65.1%** (Google, 5-run avg, pyautogui, 1080p, 100-step cap); GDPval-AA v2 **642**; Terminal-Bench 2.1 **31%** (Google self-computed, Terminus 2, per the Gemini 3.6 Flash launch) vs **53.9%** (vals.ai)
- Coding: DeepSWE **37%** (Google self-computed, Datacurve, per the 3.6 Flash launch) vs **5.16%** (evals.report's official Dec-2025 row — an early-scaffold figure); SWE-bench Pro **49.6%** (Google, 5× runs, internal Antigravity harness) vs **34.63%** (official, Dec 2025); LiveCodeBench **85.6%** (vals.ai) / **79.7%** pass@1 (unverified); LiveCodeBench Pro **2316 Elo**; Vibe Code Bench v1.1 **20.2%** (vals.ai); SWE-bench Verified **75.0%** (vals.ai)
- Reasoning: FrontierMath **35.64%** (official); ARC-AGI-1 **84.67%**; LMArena **1466**; MLE Bench **49.7%**
- Long context: GDM-MRCR v2 **60.1%** (Google's own run — fills the MRCR gap; moderate, well under the 84.9% Opus 4.6-class figures)
- Other: JobBench 11.4%, Gert Labs 56.63%
- **Scores revised** (see Normalized scores): Tool 74→68, Coding 74→72, Overall 83→81 — Google's own Terminus-2 TB 2.1 run (31%), τ²-bench (43.3%) and DeepSWE (37%) sit well under the 2026 agentic frontier the launch-era 74s assumed

## Update 2026-10-10 (deep second pass, 3 independent searches)

**Scores unchanged: Tool 68 / Reasoning 80 / Context 95 / Multimodal 92 / Coding 72 / Cost 90 / Overall 81.** New rows and confirmations this pass:

- **Artificial Analysis Intelligence Index — now published (was "unpublished" above):** **46** on the current index version (derived from AA's Gemini 3.5 Flash article: 3.5 Flash's 55 is "up 9 points from Gemini 3 Flash"); **71** on the December-2025 index version at launch (a 13-point jump over Gemini 2.5 Flash), when AA called it "the most intelligent model for its cost" with the top AA-Omniscience score and second in HLE; per-mode estimates on the current index: Reasoning **26** / Non-reasoning **18** (tier medians 26/15). Token usage more than doubled vs 2.5 Flash — one of the highest-token-use models AA has tested. AA Coding Index: **59**.
- **Independent SWE-bench confirmation:** in the February-2026 full leaderboard re-run (not self-reported by labs), Gemini 3 Flash placed **#2 overall** — behind Claude Opus 4.5, ahead of MiniMax M2.5, GLM-5, Kimi K2.5 and DeepSeek V3.2 — corroborating the official 78%.
- **Google launch rows (Dec 2025) not previously captured:** AIME 2025 **95.2%** no tools (edges Gemini 3 Pro's 95.0%) and **99.7%** with code execution; MATH **97.5%**; GSM8K **96.8%**; SimpleQA **68.7%**; SWE-bench Multilingual **72.7%**.
- **Abstract reasoning / hallucination:** ARC-AGI-2 **33.6%** (above Gemini 3 Pro's 31.1%, far under Gemini 3.1 Pro's later 77.1% — the gap that defines the escalation axis); hallucination rate **91–92%** (worse than Pro's 88%; 3.1 Pro ~50%; Gemini 3.5 Flash later improved to 61%, a 31-point drop).
- **Speed / positioning:** **214 t/s** output (vs Pro 138; Gemini 3.5 Flash later >280 t/s, ~70% faster); Google's official SWE-bench Verified 78% beats Gemini 3 Pro (76.2%) — "the tier inverted"; free consumer access (default in the Gemini app and AI Mode in Search); no deprecation date set; thinking levels minimal/low/medium/high confirmed.
- **Score impact:** none — the published AA Index (46 current-version), AA Coding Index 59, the independent SWE-bench #2 placement and the new launch rows all land inside the existing bands; the 91–92% hallucination rate and ARC-AGI-2 33.6% are consistent with the Tool/Reasoning caps behind the 2026-10-08 revision.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-10)
- Method: public internet research (Google Gemini 3 Flash launch + model card, Gemini API docs, Artificial Analysis, evals.report, Benchgen, SWE-bench leaderboard re-run); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3_Flash.md`, using the same headings.
