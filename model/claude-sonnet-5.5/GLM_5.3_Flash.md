# Claude Sonnet 5.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's fast, mid-priced workhorse of the Claude 5.5 family (released after Opus 5.5), built for well-scoped everyday tasks — bug fixing, long-horizon coding, and polished documents/slides/spreadsheets. A clear generational jump over Claude Sonnet 5: 30%+ faster output, up to 30% lower cost per task, and the first Sonnet with cyber safeguards and anti-distillation classifiers.
- **Provider / access:** Claude API (Messages API) with model ID `claude-sonnet-5-5` on `https://api.anthropic.com/v1/messages`; same dateless ID on Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Claude Models on Google Cloud (Google- and Anthropic-managed), Microsoft Foundry, and Claude Platform on AWS (verified via official docs model table, 2026-11-02). Artificial Analysis counts 9 API providers. Chat-Completions-style OpenCode Zen Free ID: no Free ID verified in this pass.
- **Release / knowledge:** Released 2026-09-28; reliable knowledge cutoff Jun 2026, training data cutoff Jun 2026 (official docs).
- **IDs:** `anthropic/claude-sonnet-5-5` (Claude API and all partner clouds; no OpenCode Zen Free ID verified in this pass).
- **Context window:** 1M tokens total; max output 128K tokens on the synchronous Messages API, up to 300K on the Message Batches API with the `output-300k-2026-03-24` beta header — verified from the official Sonnet 5.5 docs overview and models-overview pages (2026-11-02).
- **Modalities:** Text + image input → text output (docs capabilities table; AA confirms text/image in, text out; no audio/video in, no image out; PDF not listed on the model page). Adaptive thinking, always available — the lowest setting is `between_tools` (up-front thinking off); `thinking: {type: "disabled"}` is rejected. Tool calls: yes (client tools, plus server tools web search, web fetch, code execution, computer/browser toolsets); forced tool use (`tool_choice: any/tool`) returns an error. Structured outputs supported (AA ran the model with structured outputs, noting a pre-release deployment bug since fixed). Default effort `high` on the Claude API; temperature/top_p/top_k return 400.
- **Pricing (as of 2026-11-02):** $2 / $10 per 1M input/output tokens (same base as Sonnet 5, half of Opus 5.5). Cache reads $0.10/MTok (5% of input — half Sonnet 5's $0.20); 5m cache write $2.50, 1h cache write $4; Batch API $1 / $5 (50% off). Full 1M window billed at standard per-token rates — no long-context surcharge. `inference_geo: "us"` adds 1.1×. Zero data retention available.
- **Architecture:** Proprietary (weights closed; parameter count undisclosed). Uses Anthropic's newest tokenizer (Claude 4.7+), which yields ~30% more tokens for the same text than pre-4.7 models. Retirement committed not sooner than 2027-09-28.

### Raw benchmarks found

> Configuration note: unless stated otherwise, Anthropic's numbers are adaptive thinking at **max effort**, averaged over 5 trials (Sonnet 5.5 System Card, Table 8.1.A).

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (Anthropic announcement; beats Opus 5.5's 66.4% at Xhigh; Sonnet 5 scored 10.3% — harness: Anthropic agentic-terminal run)
- Terminal-Bench-Science 0.1: **59.9%** (system card §8.6, safeguards on; Opus 5.5 58.7%, Fable 5.1 52.6%)
- Toolathlon-Verified (108 tasks, 600+ tools, 32 apps): **77.8% Pass@1**, Pass@3 85.2%, Pass³ 68.5% (system card §8.14.5; exactly matches Opus 5.5 and Fable 5.1; Sonnet 5 74.7%)
- AutomationBench-AA: **44.7%** (system card Table 8.1.A; Opus 5.5 42.5%, GPT-6 Sol 32.0%)
- OSWorld 2.1 (computer use, partial): **80.1%** (announcement + system card; Opus 5.5 81.8%, Sonnet 5 57.0%)
- GDPval-AA v2.1: **Elo 1844** (Artificial Analysis harness, run by AA on a pre-release deployment with a since-fixed structured-outputs bug; Opus 5.5 1846, Sonnet 5 1449, GPT-6 Sol 1487)
- AA-Briefcase v1.1: **Elo 1811** (same AA run; Opus 5.5 1822)
- Tau2-Bench / Tau3-Bench: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (HLE): **56.9% no tools / 64.5% with tools** (system card §8.1/§8.11.1, max effort; Opus 5.5 64.4% / 67.7%; Sonnet 5 43.1% / 54.9%)
- GPQA Diamond: no verified public score found (not in the system card or announcement; AA's Intelligence Index v5.0 replaced it with HLE-Diamond)
- ARC-AGI (1/2/3): no verified public score found (arcprize.org leaderboard is JS-rendered; no Sonnet 5.5 row verifiable this pass)
- Artificial Analysis Intelligence Index v5.0: **54, #8/58 in class** (AA model page, "Max, Default Fallback" variant; median in class 37; index = AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard, Terminal-Bench-Science 0.1)
- CritPt v2 (Hard Subset): no verified public score found (per-eval value not published on the accessible AA page)
- Chartography (visual chart recognition, Surge AI): **61.6% no tools** (announcement; Opus 5.5 64.4%, GPT-6 Sol 53.6%, Sonnet 5 15.6%)
- AA-Omniscience v1.1 accuracy / hallucination rate: no verified public score found (per-eval values not published on the accessible AA page)

Coding:

- SWE-Bench Pro: **81.3%** (system card §8.2, 5-trial average; Sonnet 5 63.2%, Opus 5.5 89.9%)
- SWE-Bench Multilingual (300 tasks, 9 languages): **90.3%** (system card §8.2; Opus 5.5 93.9%)
- SWE-Bench Multimodal: **54.3%** (system card §8.2; Opus 5.5 61.4%)
- SWE-bench Verified (classic 500): no verified public score found (swebench.com leaderboard renders no Sonnet 5.5 entry; frontier vendors have moved to SWE-Bench Pro)
- FrontierCode 1.1 (Main, Cognition harness): **46.2% Max / 52.1% Xhigh** (announcement; Sonnet 5 42.4%, Opus 5.5 54.4%, GPT-6 Sol 49.3%; Max effort penalized by code-review-skill timeouts)
- CursorBench 4.0: **55.5%** (announcement; Opus 5.5 57.8%, Sonnet 5 34.1%)
- DeepSWE v1.1 (113 long-horizon SWE tasks): **71.0%** (system card §8.3, 5-trial average)
- LiveCodeBench: no verified public score found
- ProgramBench (200-program reconstruction, execution-graded): **79.7%** (system card §8.10.1, mini-swe-agent harness; Sonnet 5 77.3%, Opus 5.5 91.2%)
- AA cost per Intelligence Index task: **$10.02**, 139.3 output tok/s, 340M output tokens across the index (very verbose at max effort) (AA model page)

Long context:

- Context window verified at **1M tokens** (official docs + Models API), billed at standard rates across the full window (no surcharge)
- MRCR: no verified public score found; RULER: no verified public score found; GraphWalks: no verified public score found
- ProgramBench long-context agentic coding, episodes up to the **full 1M window**: **79.7%** (system card §8.10.1 — Anthropic's designated long-context eval; Opus 5.5 91.2%)

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 70.6% (best in the Claude family, vs Opus 5.5's 66.4%), Toolathlon-Verified 77.8% Pass@1 tying Opus 5.5/Fable 5.1, AutomationBench 44.7% and OSWorld 80.1% near-tie Opus — capped only by slightly weaker scoped-coding agent results (FrontierCode 46.2% Max vs Opus 54.4%) and very verbose trajectories (31.6 turns on Toolathlon; 340M AA tokens).
- **Reasoning: 88/100.** HLE 64.5% with tools (56.9% without) and AA Intelligence Index 54 at #8/58 with GDPval-AA 1844 ≈ Opus 5.5 — capped by the visible gap to Opus 5.5 on no-tools HLE (56.9 vs 64.4) and AA index rank, with no GPQA Diamond or ARC-AGI verification available.
- **Context window: 95/100.** Full 1M-token context with 128K output (300K batch beta) at standard pricing — top tier — capped by measured long-context depth on ProgramBench at the full window (79.7% vs Opus 5.5's 91.2%) and the absence of MRCR/RULER/GraphWalks verification.
- **Multimodal: 85/100.** Image + text input with strong vision results (Chartography 61.6% no-tools, SWE-Bench Multimodal 54.3%, OSWorld 80.1%, first Sonnet to beat Pokémon Red from screenshots) — capped by text-only output and no audio/video/PDF-listed input.
- **Coding: 90/100.** SWE-Bench Pro 81.3%, SWE-Bench Multilingual 90.3%, DeepSWE 71.0%, Terminal-Bench 4.0 70.6% (above Opus 5.5) — capped by consistent second place to Opus 5.5 on SWE-Pro (89.9), FrontierCode (54.4 Xhigh), CursorBench (57.8) and ProgramBench (91.2), and no classic SWE-bench Verified / LiveCodeBench verification.
- **Cost efficiency: 90/100.** $2/$10 per 1M (half of Opus 5.5) with cache reads at $0.10, batch at $1/$5, no 1M-context surcharge, and Anthropic-measured up-to-30% lower cost per task than Sonnet 5 — capped by heavy verbosity at max effort ($10.02 per AA index task, 340M tokens, ~5× the class median).
- **Overall Score: 90/100.** Half-up mean of the five quality dims (Cost excluded): (92 + 88 + 95 + 85 + 90) / 5 = 450/5 = 90.0 → 90. Best fit: the default high-volume coding/agent workhorse that trades ~2 points of tool-use polish and some long-context depth vs Opus 5.5 for half the price and 30%+ faster output; step up to Opus 5.5 or Fable 5.1 for complex open-ended judgment work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Sonnet 5.5 — Anthropic announcement with benchmark tables](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 System Card — full capability eval tables (SWE-Bench Pro, Toolathlon, DeepSWE, ProgramBench)](https://www.anthropic.com/document/claude-sonnet-5-5-system-card)
  - [Claude Sonnet 5.5 model overview — official docs (IDs, context, modalities, effort)](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Anthropic pricing — full price list incl. cache multipliers and long-context policy](https://platform.claude.com/docs/en/about-claude/pricing)
  - [Artificial Analysis — Claude Sonnet 5.5 Intelligence Index, speed, cost](https://artificialanalysis.ai/models/claude-sonnet-5-5)
  - [SWE-bench official leaderboards](https://www.swebench.com/)
