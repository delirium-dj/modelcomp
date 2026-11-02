# Gemini 3.8 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-3.8-flash`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's "most intelligent workhorse" Flash model (released 2026-09-02), built for long-horizon software engineering, autonomous agents, and multi-step reasoning in specialized domains at Flash speed and price. Sibling of Gemini 3.8 Flash Cyber (security-tuned, Fairwind-gated) sharing the same foundational intelligence.
- **Provider / access:** Google Gemini API / Google AI Studio with model ID `gemini-3.8-flash` (GA), native GenerateContent API at `https://generativelanguage.googleapis.com` (an OpenAI-compatible shim also exists); Vertex AI / Gemini Enterprise Agent Platform `https://aiplatform.googleapis.com/v1/.../publishers/google/models/gemini-3.8-flash:generateContent` (GA); OpenCode Zen `https://opencode.ai/zen/v1/models/gemini-3.8-flash` (@ai-sdk/google, paid only); also OpenRouter (`google/gemini-3.8-flash`), Databricks, GitHub Copilot (200K context there), Perplexity. It is the default agent model in Google Antigravity.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff March 2026 (model card notes some domains may be limited to January 2025, in line with the Gemini 3 family).
- **IDs:** `google/gemini-3.8-flash` (Google AI Studio, Vertex AI, OpenRouter); OpenCode Zen `opencode/gemini-3.8-flash` — no Free (`-free`) ID exists on Zen (Zen free slots are other models); Google AI Studio itself offers a rate-limited free tier for 3.8 Flash with a data-usage caveat.
- **Context window:** 1,048,576 total tokens; max output 65,536 (64K) — verified via Google's official whats-new doc ("1M token context window, 64k max output tokens") and cross-checked against LiteLLM and Artificial Analysis spec pages.
- **Modalities:** Text, image, audio, video and PDF/file input; text output only. Reasoning: yes, with tunable thinking levels LOW / MEDIUM / HIGH (default MEDIUM). Tool calls: yes, including parallel function calling and Google's built-in tool suite (Google Search grounding, code execution). JSON / structured output: supported (responseSchema-style structured output per provider listings).
- **Pricing (as of 2026-11-02):** Introductory through 2026-12-31: $0.75 in / $3.75 out / $0.075 cached-read per 1M tokens (Batch API half: $0.375/$1.875). Standard pricing from 2027-01-01: $1.50 / $7.50 / $0.15. Artificial Analysis blended (7:2:1) $0.58 per 1M; real cost is inflated by verbosity — $7.77 per Intelligence-Index task with 130M output tokens across the index (median 70M), since reasoning tokens bill as output.
- **Architecture:** Proprietary closed weights; Google discloses only that it is "based on Gemini 3.7 Flash" with no parameter count (third-party ~95B claims are unverified). Design point: the model "works harder" at higher effort — extra reasoning steps and iterative tool calls — which Artificial Analysis flags as very verbose (~40% more tokens per task than 3.7 Flash at the same per-token price). Speed: 120.3 output tok/s (AA, #44/196); TTFT 24.69 s at high effort (high end).

### Raw benchmarks found

Agent / tool use:

- Vals Index (aggregate): **55.95% ±1.14**, rank 18/32, $5.03/test at high effort (Vals AI, Oct 2026)
- Terminal-Bench 2.1: **89.4%** (Google model card, self-computed, mini-swe-agent + high thinking; 90.8% per Google Cloud dev guide, Oct 2026; Vals Terminus-2 harness run: 81.3%, 99th percentile per BenchmarkList)
- Terminal-Bench 4.0: **19.1%** (Google model card, mini-swe-agent) / **19.7% ±2.31, rank 34/59, $8.65/task** (Vals) — near-bottom of the frontier field (Claude Opus 5: 51.8%)
- Tau3-Bench Banking: **38.1%** (Google Cloud dev guide table, vs 3.7 Flash 30.9%)
- GDPval-AA v2: **Elo 1545** (Google model card, sourced from the Artificial Analysis leaderboard; Opus 5: 1824); AA-normalized form **46.8%**
- OSWorld 2.0 (computer use): **59.0%** partial score, batch tool enabled (Google model card; Opus 5: 75.4%)
- Vals Finance Agent v2: **61.4%** (Google model card via Vals; Vals v2.1: **65.76% ±2.04**, rank 6/35)
- Harvey Legal Agent Benchmark: **10.0%** all-pass (Google model card via Vals — best in its comparison table)
- AA Agentic Index: **41.1%** (Artificial Analysis, via BenchLM aggregation)
- GDP.PDF: **35.0%** all-pass (Google model card; GPT-5.6 Sol: 40.0%)
- Toolathon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.44% ±1.48, rank 4/138** (Vals AI)
- HLE-Verified: **54.9%** (Google model card — tops its table vs Opus 5 54.4%, GPT-5.6 Sol 54.5%); **45.4%** on the dev-guide HLE harness
- ARC-AGI-1: **98.5%** high / 97.5% medium / 90.5% low (ARC Prize Verified)
- ARC-AGI-2: **89.2%** high (ARC Prize Verified; ~#18/280 on the ARC-AGI-2 board, snapshot 2026-10-28); 82.9% medium, 77.5% low
- ARC-AGI-3: **10.4%** standard harness / **35.0%** provider-adapter harness at high (ARC Prize Verified; leader GPT-6 Astra: 62.7%)
- MMLU-Pro: **90.22% ±0.29, rank 5/138** (Vals AI)
- Artificial Analysis Intelligence Index v5.0: **31** at high effort, rank #38/58 — below the field median of 37; 30 medium, 22 low (AA; index = AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 hard, Terminal-Bench-Science 0.1)
- CritPt v2 (hard subset, physics): **18.3%** (AA critpt leaderboard, via BenchLM)
- AA-LCR (long-context reasoning): **81.3%** (AA leaderboard, via BenchLM)
- MLCR-AA (medical long-context reasoning): **10.6%** (AA, via BenchLM)
- FrontierMath v2: **68.4%** Tiers 1–3; **21.95%** Tier 4 (BenchLM)
- GDM-MRCR v2 / RULER / GraphWalks at window length: no verified public score found (Google's methodology PDF references GDM-MRCR v2 but publishes no number for this model)

Coding:

- DeepSWE v1.1 (long-horizon software engineering): **73.7%** (Google model card; statistically tied with Claude Opus 5's 74.0%)
- SWE-bench (Vals harness): **80.0% ±1.79, rank 24/88** (Vals AI; GPT-5.6 Sol: 96.2%) — note: Google publishes no official SWE-bench Verified number for this model
- SWE-Bench Pro: **61.6%** (Google Cloud dev guide, self-computed; vs 3.7 Flash 60.4%)
- SWE-Atlas: **51.9%** (Google Cloud dev guide; vs 3.7 Flash 48.0%)
- LiveCodeBench: **89.48% ±0.90, rank 3/143** (Vals AI)
- SciCode: **54.4%** (BenchmarkList) / AA-SciCode **56.6%** (AA, via BenchLM)
- CursorBench 3.2: **69.2%** (Cursor evals, via BenchLM); CursorBench 4.0: **39.6%**
- FrontierSWE v2: **19.6%** (BenchLM)
- Vibe Code Bench v1.1: **78.65% ±3.88** (Vals; the "1-100" variant lane: 18.77%)

Multimodal / vision (multimodal inputs, text-only output):

- CharXiv reasoning (no tools): **86.2%** (Google model card — best in its table)
- LVBench long-video understanding: **87.8%** agentic / **87.1%** static (Google model card, 1024 frames)
- MMMU-Pro: **89.08% ±0.75, rank 4/93** (Vals) / AA-MMMU-Pro **85.6%** (AA)
- SWE-bench Multimodal: **40.83% ±2.25, rank 16/20** (Vals)
- ExtractBench (LlamaIndex): **80.71%**; ParseBench: **71.50%** (leaderboards, 2026-10-28 snapshot)
- Gray Swan IPI (15 attempts): **5.5%** attack success (Google launch chart, via BenchLM)

Long context:

- Spec window 1M verified (Google docs); measured proxies: AA-LCR **81.3%** (AA) and MLCR-AA **10.6%** (AA); no MRCR/RULER/GraphWalks value published for this model — no long-context retrieval reported at the full 1M window.

### Normalized scores (1–100)

- **Tool use: 72/100.** Elite terminal coding (Terminal-Bench 2.1 89.4%, tied with Opus 5) plus top-of-table finance/legal agent scores (Vals Finance Agent v2 61.4%, Harvey 10.0%) are capped by weak generalized-agent harnesses — Terminal-Bench 4.0 19.1–19.7% (rank 34/59), OSWorld 2.0 59.0% vs Opus 5's 75.4%, and GDPval-AA Elo 1545 vs Opus 5's 1824.
- **Reasoning: 78/100.** GPQA Diamond 94.4% (Vals #4/138), ARC-AGI-2 89.2% (ARC Prize Verified) and HLE-Verified 54.9% lead the Flash tier, but the independent Artificial Analysis Intelligence Index v5.0 of 31 (#38/58, below the 37 median), CritPt 18.3% and MLCR-AA 10.6% cap it below frontier level.
- **Context window: 85/100.** The full 1,048,576-token window with 64K output (verified in Google's docs) sits in the top tier and AA-LCR 81.3% shows usable long-context reasoning, but with no MRCR/GraphWalks verification at window length and a weak MLCR-AA (10.6%) it cannot be credited as verified-at-1M.
- **Multimodal: 84/100.** Text/image/audio/video/PDF input with class-leading chart and video understanding (CharXiv 86.2%, LVBench 87.8% agentic, MMMU-Pro 89.1% at Vals #4/93), capped by text-only output and mid-pack document tasks (GDP.PDF 35.0%, SWE-bench Multimodal 40.8%).
- **Coding: 79/100.** Near-frontier long-horizon engineering (DeepSWE v1.1 73.7% ≈ Opus 5, SWE-Bench Pro 61.6%, LiveCodeBench 89.5% at Vals #3/143) is dragged by mid-pack repo-issue resolution (Vals SWE-bench 80.0%, rank 24/88, vs GPT-5.6 Sol 96.2%) and weak FrontierSWE v2 (19.6%).
- **Cost efficiency: 86/100.** The introductory $0.75/$3.75 per 1M (through 2026-12-31, vs AA medians of $2/$10) with $0.075 cached reads and 50% Batch pricing makes frontier-adjacent capability very cheap per token; the cap is verbosity at high effort (130M output tokens per AA Intelligence Index run vs 70M median, ~40% more tokens than 3.7 Flash per AA, $8.65 per Terminal-Bench 4.0 task) plus the scheduled 2× price rise on 2027-01-01.
- **Overall Score: 80/100.** Half-up mean of the five quality dims (72+78+85+84+79)/5 = 79.6 → 80 — best-fit recommendation: the value workhorse for agentic coding and domain automation at Flash prices, not a frontier-capability pick (AA II v5.0 31 and Terminal-Bench 4.0 19.1% place its ceiling a tier below Opus-5-class models).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google DeepMind — Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [Google blog — Introducing Gemini 3.8 Flash and 3.8 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
  - [Google — Gemini 3.8 Flash model evaluation (methodology PDF)](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-8_flash_model_evaluation.pdf)
  - [ARC Prize — Gemini 3.8 Flash verified results](https://arcprize.org/results/google-gemini-3-8-flash)
  - [Artificial Analysis — Gemini 3.8 Flash (High)](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [Vals AI — Gemini 3.8 Flash benchmarks](https://www.vals.ai/models/google_gemini-3.8-flash)
