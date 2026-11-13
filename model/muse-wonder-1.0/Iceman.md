# Muse Wonder 1.0 — findings by Iceman

- Source: Meta Superintelligence Labs/Muse Wonder 1.0 (`muse-wonder-1.0`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta Superintelligence Labs’ Muse Wonder is a frontier multimodal reasoning model in the Muse Wonder series for personal and professional agentic tasks, long-running coding, and advanced computer use. It is the base Muse Wonder variant below Muse Wonder Full.
- **Provider / access:** Available through the Meta Model API (model ID `muse-wonder-1.0`) and Muse Code; also listed on provider ecosystem pages (e.g. OpenRouter/Google Cloud marketplace references on Meta dev page). Local metadata: `opencode/muse-wonder-1.0`, no confirmed OpenCode Zen Free ID (`noFreeId`).
- **Release / knowledge:** Released/announced October 12, 2026 (Meta blog / LLM Stats / Meta dev page). Knowledge/training cutoff not explicitly disclosed in reviewed public sources.
- **IDs:** `muse-wonder-1.0` (API/Muse Code), `muse-wonder` (LLM Stats canonical name entry).
- **Context window:** 1M tokens context (Meta dev page / LLM Stats). Local metadata states 1,048,576 total and 131,072 max output; explicit public output limit not fully specified on reviewed pages.
- **Modalities:** Multimodal inputs for agentic/computer-use workflows; Meta dev/blog position the series for text/image/video/audio and document/PDF-style professional tasks with text output. LLM Stats lists multimodal input and text output; exact public modality matrix for this variant is not exhaustively enumerated in one place.
- **Pricing (as of 2026-11-13):** $4.00 / 1M input tokens, $0.20 / 1M cached input tokens, $20.00 / 1M output tokens (Meta dev page / LLM Stats, Meta Model API).
- **Architecture:** Proprietary Meta model; architecture and parameter count not publicly disclosed.

### Raw benchmarks found

> Values below come from Meta’s public Muse Wonder/Muse Wonder Full benchmark table on the Meta developer model page/blog (Muse Wonder `max` effort column) and LLM Stats benchmark rankings for this exact model. These are vendor-published/self-reported or cataloged figures.

Agent / tool use:

- Terminal-Bench 4.0-AA: **52.0** (Meta dev page, Muse Wonder max) / **0.52** rank 11 (LLM Stats)
- OSWorld V2.1 (agentic computer use): **72.6** partial / **34.3** binary (Meta dev page)
- AutomationBench-AA (E2E business workflows): **39.1** (Meta dev page)
- JobBench (professional tool use): **70.5** (Meta dev page)
- Vals Finance Agent V2 (financial analyst research): **56.6** (Meta dev page)
- GDP.pdf (professional work): **30.8** (Meta dev page)
- Harvey LAB-AA (legal agent work): **10.0** (Meta dev page)
- MemoryBench: **85.6** (Meta dev page)
- Personal Superintelligence Index (internal composite): **54.3** (Meta dev page)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Index: **52** (Meta dev page)
- HealthBench Pro (open-ended health queries): **60.5** (Meta dev page)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE 1.1 (long-horizon coding): **78.8** (Meta dev page)
- SWE-Marathon (ultra-long-horizon engineering): **53.1** (Meta dev page) / **0.531** rank 3 (LLM Stats)
- ProgramBench (from-scratch programming): **50.0** (Meta dev page)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M-token context window stated (Meta dev page / LLM Stats). No standalone long-context retrieval benchmark (MRCR/RULER/GraphWalks) score found in reviewed sources.

### Normalized scores (1–100)

> Derived from the available public evidence above using `model-comparison.md`. Scores reflect vendor-published/model-card and cataloged figures with limited independent coverage on some standard benchmarks.

- **Tool use: 84/100.** Strong agentic/computer-use evidence: Terminal-Bench 4.0-AA 52.0, OSWorld V2.1 72.6 partial / 34.3 binary, AutomationBench-AA 39.1, JobBench 70.5, MemoryBench 85.6, and solid professional-task results (Vals Finance Agent V2 56.6). Capped by mixed agent benchmark depth and lack of broader independent tool-use leaderboard coverage.
- **Reasoning: 76/100.** Reasonable signals from AA Index 52, HealthBench Pro 60.5, GDP.pdf 30.8, and agentic/professional performance, but no verified GPQA Diamond/HLE/LCR/CritPt numbers found for stronger calibration.
- **Context window: 94/100.** 1M-token context is stated by Meta/LLM Stats, mapping to the 1M tier; capped slightly without explicit measured long-context retrieval benchmark results.
- **Multimodal: 78/100.** Positioned as a multimodal frontier model for computer use and broad agentic workflows with multimodal inputs indicated across official materials, but exact modality coverage and public multimodal benchmark scores for this specific variant are not comprehensively documented.
- **Coding: 82/100.** Strong long-horizon coding signals: DeepSWE 1.1 78.8, SWE-Marathon 53.1, ProgramBench 50.0, and Terminal-Bench 4.0-AA 52.0. Capped by absence of verified SWE-bench Verified/SWE-Pro/LiveCodeBench scores in reviewed sources.
- **Cost efficiency: 84/100.** $4/$0.20/$20 per 1M tokens with prompt caching on Meta Model API is competitive for a frontier multimodal agentic model; not free, but reasonably priced for capability.
- **Overall Score: 83/100.** Mean of the five non-cost dimensions: (84 + 76 + 94 + 78 + 82) / 5 = 82.8 → 83. Best fit for long-horizon coding, computer-use, and agentic workflows needing 1M context and multimodal inputs, with many headline metrics being vendor-published.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-13
- Method: Fresh public research via `webfetch` and `curl` (Meta developer model page, Meta AI blog post, and LLM Stats model/ranking page). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Muse Wonder (Meta developer model page)](https://dev.meta.ai/models/muse-wonder)
  - [Muse Wonder: A Frontier Model For Personal & Professional AI Agents (Meta AI blog)](https://ai.meta.com/blog/muse-wonder/)
  - [Muse Wonder on LLM Stats](https://llm-stats.com/models/muse-wonder-1.0)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
