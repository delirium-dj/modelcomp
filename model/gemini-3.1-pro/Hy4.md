- Source: Google DeepMind/Gemini 3.1 Pro (Preview)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (Preview)
- **Short description:** Google's 2026-02-19 high-end reasoning model — the first ".1" mid-cycle update in the Gemini line, built on Gemini 3 with the "upgraded core intelligence" first seen in Gemini 3 Deep Think. A distinct preview SKU; `gemini-3.1-flash-lite` is its sibling, not this model. Gemini 3 Pro Preview was discontinued 2026-03-09 in its favour.
- **Provider / access:** Preview released across the Gemini app and NotebookLM for Google AI Pro / Ultra subscribers (NotebookLM's full 3.1 Pro feature set exclusive to those tiers; free users get a limited number of questions), Google AI Studio, Gemini CLI, Google Antigravity (with selectable "reasoning budgets"), Android Studio's Gemini API, Vertex AI and Gemini Enterprise.
- **Release / knowledge:** 2026-02-19 (local time); **knowledge cutoff 2025-01**. Gemini API alias switched to 3.1 Pro Preview on 2026-03-06.
- **IDs:** `gemini-3.1-pro-preview` family ID as cited. No free Zen ID verified.
- **Context window:** 1,000,000 tokens (Baidu Baike, citing Google); the broader Gemini 3.1 series is documented with up to 2M tokens and three-level thinking — reported separately, not merged.
- **Modalities:** text, image and document in, text out (front-end page high-fidelity replication from screenshots, scientific chart/structured-data analysis); advanced reasoning; native tool use; used as Agent A in DeepMind's AlphaProof Nexus with a Lean formal-proof compiler loop. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** tiered billing **identical to Gemini 3 Pro Preview**, with context caching and web-search add-on billing; no exact per-1M-token rate card in the retrieved pages — no verified public score found for exact prices.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Research contribution from physicist Shunyu Yao (joined DeepMind 2025-09).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA (knowledge work): **1314 Elo** — below Claude Opus 4.7 (1753) and GPT-5.4 (1674)
- OfficeQA Pro (enterprise document reasoning): **42.9%** — far below Claude Opus 4.7 (80.6%)
- SWE-Bench Pro: **54.2%** — far below Fable 5's 80.3%
- Arena global AI-agent ranking (2026-07-22, long-flow tasks): **#8**
- PinchBench (OpenClaw real tasks): Gemini 3.1 Flash Lite ranked #1 in task success, Gemini 3.1 Pro was **not** the highest (lineage note, no Pro score)
- AlphaProof Nexus: as Agent A, autonomously solved **9 of 353** open Erdős problems (including two unsolved for 56 years) and proved **44 of 492** open OEIS conjectures — a framework result, not a standalone model score
- OpenRouter 2026-10-19→25 classification-task spend share: **#3**, behind Claude Opus 5.5 and GPT-5.6 Sol
- Tau3-Banking / Tau2-Bench / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- ARC-AGI-2: **77.1%** — more than 2x the previous Gemini 3 Pro (31.1%)
- Creative writing: rated comparable to Baidu ERNIE 5.1 (qualitative)
- WAIC 2026 S1-Omni (Panshi 2.0) blind test: beaten on **83.3%** of 60+ scientific tasks (comparative, not a Pro score)
- GPQA Diamond / HLE / LCR / CritPt / Omniscience: no verified public score found

Coding:

- SWE-Bench Pro **54.2%** as above
- Front-end page replication test (2026-04-06): precise content/text reproduction with good overall fidelity, but generated code had a serious bug causing continuous page refresh; backend debugging proposed loosening URL validation ("brute force", poor maintainability) — qualitative
- Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window; long-context dimension reported as strong at launch, but no MRCR / RULER / GraphWalks figure found — no verified public score found
- Breast-cancer VUS variant blind test: "average", strong structured-data presentation but limited to data organisation rather than deep research reasoning — qualitative

### Normalized scores (1–100)

- **Tool use: 79/100.** A #8 Arena agent ranking, #3 OpenRouter classification share and the AlphaProof Nexus formal-proof results; capped by weak GDPval-AA (1314), OfficeQA Pro (42.9%) and SWE-Bench Pro (54.2%) relative to newer frontiers.
- **Reasoning: 90/100.** ARC-AGI-2 77.1% was a landmark >2x generational jump and the model powered autonomous Erdős/OEIS discoveries; capped by a 2025-01 knowledge cutoff and by being overtaken by Claude Opus 4.7 and later models.
- **Context window: 92/100.** A verified 1M-token window (2M for the series) with selectable reasoning budgets and context caching; capped by a stale knowledge cutoff and no published long-context retrieval measurement.
- **Multimodal: 86/100.** Accurate screenshot-to-page replication and scientific chart/structured-data handling; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 78/100.** SWE-Bench Pro 54.2% and good visual replication; capped by that figure being far behind Fable 5's 80.3% and by the documented buggy generated code.
- **Cost efficiency: 72/100.** Tiered pricing unchanged from the previous generation with limited free-tier questions and cheap caching; capped by the lack of a verifiable rate card and by being superseded in value by later Flash models. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 79, 90, 92, 86, 78 = 85.0 → 85. Best fit: abstract reasoning / ARC-style problems and formal mathematical proof assistance inside a compiler-feedback loop, not modern agentic coding or enterprise knowledge work.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Gemini 3.1 Pro article (full specs, ARC-AGI-2, SWE-Bench Pro, GDPval-AA, OfficeQA Pro, Arena ranking, AlphaProof Nexus, access/pricing). Comparative rows measured under other models (Fable 5, Opus 4.7, GPT-5.4, Gemini 3.1 Flash Lite) are labelled by the harness and never merged into this model's rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Gemini 3.1 Pro — 百度百科 (release, knowledge cutoff, ARC-AGI-2, all benchmark rows, access)](https://baike.baidu.com/item/Gemini%203.1%20Pro/67406132)
