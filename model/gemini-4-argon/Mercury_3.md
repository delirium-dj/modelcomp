# Gemini 4 Argon — findings by Mercury 3

- Source: Google/Gemini 4 Argon
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's 2026 frontier model (announced 2026-09-30), built for real-world software engineering, enterprise knowledge work (legal/finance), and defensive cybersecurity, with an industry-leading 1M output-token limit. Top use case: long-horizon coding, enterprise analysis, and cyber defense with 1M context.
- **Provider / access:** Google Gemini API (`gemini-4-argon`) and Google AI Studio / Vertex AI; phased rollout — first to trusted cyber defenders (Fairwind Program) and paid API customers, then Google AI Ultra subscribers; 4 API providers tracked by Artificial Analysis.
- **Release / knowledge:** Announced 2026-09-30; rolling out in phases; knowledge cutoff not published.
- **IDs:** `gemini-4-argon` (Gemini API; high/max reasoning effort tiers).
- **Context window:** 1,048,576 tokens (1M) total; **max output 1M tokens** (industry-leading, up from previous 64K) — verified via Google announcement.
- **Modalities:** text + image + video input (long-video understanding claimed: LVBench 91.7% SOTA), text output; reasoning model (extended thinking); tool calls; prompt-injection-resilient (Gray Swan IPI 0.7%).
- **Pricing (as of 2026-11-03):** introductory $2.00 input / $10.00 output per 1M tokens through 2026-11-30, then $4.00/$20.00; implicit cached input $0.10 (95% off, then $0.20); Batch/Flex $1/$5 (then $2/$10); Priority $3.60/$18 (then $7.20/$36). No free tier for Argon.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (Zapier): **51.3%** — ranked #1 (Google) vs **77.5%** on Artificial Analysis AutomationBench-AA (different harness)
- Terminal-Bench 4.0: **57.4%**; Terminal-Bench-Science 0.1 (6× verifier timeout): **57.6%**; Agents' Last Exam: **39.5%**; OSWorld 2.0: **69.2%** (Google evaluation methodology)
- Vals Index: leading (Google); Vals Finance Agent v2: **65.4%**; Harvey Legal Agent Benchmark: leading (Google)
- CWE-bench v1: **68.0%** — ties for first (Collinear leaderboard)
- GDPval-AA (AA normalized): **56.2%**; AA-AnalystAgent: **48.8%**; MazeBench ASCII: 12%

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **50/100**, #15 of 60 (high mode)
- AA-HLE: **57.1%**; AA-LCR: **79.7%**; CritPt: **27.1%**
- GraphWalks BFS: **99.7%** at 128K, **84.2%** at 256K–1M (Google)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **91.3%**; ARC-AGI-3: **46.3%** (97.3% with provider adapter) (ARC Prize, semi-private)
- LABBench2: **88.8%** (Google); FrontierMath v2 Tiers 1–3 **85.97%**, Tier 4 **78.05%** (Epoch AI)
- AA-Omniscience: accuracy **48.3%**, hallucination rate **4.3%**
- Gray Swan IPI (15 attempts): **0.7%** — best-in-class prompt-injection robustness

Coding:

- DeepSWE v1.1: **77.9%** — new state of the art (Google)
- Vibe Code Bench: **91.9%** vs FrontierCode 2.0: **26.3%** (Cognition) — conflicting benchmark scales, both listed
- AA-SciCode: **61.8%**; FrontierSWE v2: **55.0%** (Proximal); PostTrainBench v1.1: **45.3%**; Bug Hunt Bench: 40.7 fixes
- Internal: 800K+ line Rust migration (Fuchsia Zircon kernel), 2.7× faster libgav1 vectorization (Google engineering reports)

Long context:

- 1M context + 1M output; GraphWalks 99.7% @128K but 84.2% @256K–1M; AA-LCR 79.7% — strong but not flawless at depth.

Multimodal:

- LVBench (long video understanding): **91.7%** — SOTA (Google)
- Chartography (no tools): **71.6%**; Blueprint-Bench 2: **54.4%**; ExtractBench Pro: **30%** (LlamaIndex)

### Normalized scores (1–100)

- **Tool use: 92/100.** AutomationBench #1 (51.3% Zapier / 77.5% AA), CWE-bench v1 68% tie-first, OSWorld 69.2%, Vals Index leading; capped below Opus 5.5 by lower TB4.0 (57.4%) and GDPval-AA (56.2%).
- **Reasoning: 94/100.** HLE 57.1%, ARC-AGI-2 91.3%, GraphWalks 128K 99.7%, II 50 (#15); capped by CritPt 27.1% and the #15 index rank vs Opus 5.5's #2.
- **Context window: 96/100.** 1M context + industry-leading 1M output; GraphWalks BFS at 256K–1M (84.2%) keeps it shy of the ~98%+ retrieval top band.
- **Multimodal: 88/100.** text/image/video in with SOTA LVBench 91.7% long-video understanding; text-only out and no audio in cap it below the omni tier.
- **Coding: 94/100.** DeepSWE v1.1 77.9% SOTA and Vibe 91.9%; capped by FrontierSWE v2 55% and FrontierCode 2.0 26.3% on harder agentic-coding harnesses.
- **Cost efficiency: 75/100.** Intro $2/$10 with $0.10 cached input is competitive, but rises to $4/$20 after 2026-11-30 (AA blends at $4/$20, $7.68/task); no free tier.
- **Overall Score: 93/100.** Mean of (92+94+96+88+94)/5 = 92.8 → 93. Frontier coding/knowledge-work flagship with unmatched 1M output; strong buy during the intro-price window.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Google announcement + evaluation methodology, Artificial Analysis model page/leaderboards, BenchLM aggregation, ARC Prize, Collinear, Epoch AI, Cursor/Cognition); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting harness results (AutomationBench, Vibe vs FrontierCode, intro vs post-intro pricing) listed side by side.
- Reference URLs:
  - [Gemini 4 Argon: our next era of frontier intelligence (Google, 2026-09-30)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [Gemini 4 Argon — evaluation methodology (Google DeepMind)](https://deepmind.google/models/evals-methodology/gemini-4-argon)
  - [Gemini API pricing (ai.google.dev)](https://ai.google.dev/gemini-api/docs/pricing)
  - [Gemini 4 Argon — Artificial Analysis model page (II 50 #15/60, 1M, $4/$20)](https://artificialanalysis.ai/models/gemini-4-argon)
  - [Gemini 4 Argon — BenchLM benchmark aggregation (82.28/100, #5/1004)](https://benchlm.ai/models/gemini-4-argon)
  - [ARC Prize results — Gemini 4 Argon](https://arcprize.org/results/google-gemini-4-argon)
  - [CWE-bench v1 leaderboard (Collinear)](https://cwe-bench.com/)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
