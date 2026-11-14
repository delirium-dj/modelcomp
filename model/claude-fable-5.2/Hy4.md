- Source: Anthropic/Claude Fable 5.2
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's current flagship released 2026-11-09, together with the vetted-access Claude Mythos 5.2 — both share one base model and differ in safeguards/access. Improved coding, reasoning and vision, with demonstrated coordination of large numbers of sub-agents on complex engineering tasks. A distinct model version, not an alias.
- **Provider / access:** Open to all users; available via the Claude API/platform and on AWS, Google Cloud and Microsoft Azure. Optional fast mode (up to 2.5x token-generation speed). Cybersecurity and biology safeguards on board; Mythos 5.2 (same base, relaxed limits) is restricted to vetted cyber/life-science institutions.
- **Release / knowledge:** 2026-11-09 (local time), with a pre-release version tested by selected users beforehand; knowledge cutoff: no verified public score found.
- **IDs:** `claude-fable-5-2` family ID as cited. No free Zen ID verified.
- **Context window:** no verified Fable 5.2-specific figure in the pages retrieved this pass — no verified public score found. (The 1M / 128K figures in the Fable Baike article belong to the unreleased Fable 5.5 Azure catalog entry and are not attributed to 5.2 here.)
- **Modalities:** text and image in, text out; programming, reasoning, visual/chart understanding, computer use and robot control; extended reasoning with configurable effort; native tool use and multi-sub-agent orchestration. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$8 / 1M input tokens, $40 / 1M output tokens** — a ~20% cut from Fable 5.1 and exactly 2x Opus 5.5's $4/$20. Anthropic argues complex agentic/research tasks cost less overall at High effort because fewer tokens are needed; Artificial Analysis ranked it **73rd of 74** on cost per task, **72nd** on verbosity and **71st** on first-token latency. Fast mode is billed as an optional speed tier.
- **Architecture:** Proprietary, closed weights; same underlying model as Mythos 5.2. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Humanity's Last Exam (with tools): **74.2%**, up from Fable 5.1's **65.6%**
- RoboDojo simulated bi-manual robot tasks: **64.9%** success — above other frontier models on the same framework and above most robot-specific systems
- Anthropic launch tests: higher scores than GPT-6 Astra and Gemini 4 Carbon across complex programming, scientific research, computer operation, robot control, interdisciplinary reasoning and chart recognition (exact per-benchmark numbers not published in the retrieved pages)
- Large-scale orchestration: coordinated **1,000+ sub-agents over 8 days** to build a bootable operating system (engineering demonstration, not a scored benchmark)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found for this exact ID

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5: **65** — **#1 of 74 models**, +16 points over the previous generation; also reported as topping the AA index on release day, displacing Gemini 4 Carbon
- Formalised proof of Fermat's Last Theorem completed in **30 hours** (research demonstration)
- GPQA Diamond / HLE (no tools) / LCR / CritPt / Omniscience: no verified public score found

Coding:

- FrontierCode 2.0: significantly higher than the previous generation (exact score not published in the retrieved pages)
- Complex software migration and electronic-device design demonstrated at launch (no numeric score)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 8-day, 1,000+ sub-agent engineering run implies strong long-horizon state management, but no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 96/100.** 74.2% HLE with tools, 64.9% RoboDojo, vendor-reported wins over GPT-6 Astra and Gemini 4 Carbon on computer operation and cross-disciplinary tasks, plus unprecedented 1,000+ sub-agent orchestration; capped by the absence of third-party scored agent-harness figures for this exact ID.
- **Reasoning: 97/100.** #1 on the AA Intelligence Index v5 at 65 of 74 models, +16 over the previous generation, and a 30-hour formal proof of Fermat's Last Theorem; capped by no published GPQA/HLE (no-tools) number and by the AA cost/verbosity/latency rankings.
- **Context window: 92/100.** Sustained 8-day / 1,000+ sub-agent state management is best-in-class evidence for long-horizon work; capped because no Fable 5.2-specific token window or retrieval benchmark was verifiable this pass.
- **Multimodal: 92/100.** Explicit vision/chart-understanding gains plus robot-control results (64.9% RoboDojo) and strong vision claims; capped by text-only output, no verified audio/video input, and no published multimodal benchmark score.
- **Coding: 96/100.** FrontierCode 2.0 gains, complex software migration and device design, with launch comparisons beating GPT-6 Astra and Gemini 4 Carbon; capped because the exact FrontierCode 2.0 score and standard SWE-bench/LiveCodeBench figures were not published in the retrieved sources.
- **Cost efficiency: 48/100.** $8/$40 per 1M is 2x Opus 5.5, and AA ranks it 73rd of 74 on cost per task and 72nd on verbosity; the lower total complex-task token count only partly offsets this. Excluded from Overall.
- **Overall Score: 95/100.** Half-up mean of 96, 97, 92, 92, 96 = 94.6 → 95. Best fit: the hardest multi-day agentic engineering, formal reasoning and scientific research where top-of-leaderboard intelligence dominates cost and latency.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Fable 5.2 article (release, pricing, HLE, RoboDojo, AA index, sub-agent demonstrations) plus the AI Pro League leaderboard page and its curated news items (AA index 65, $8/$40 pricing, AA cost/verbosity/latency ranks). Vendor launch claims without published numbers are labelled as such rather than assigned scores; missing rows are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Claude Fable 5.2 — 百度百科 (release, pricing, HLE, RoboDojo, capabilities)](https://baike.baidu.com/item/Claude%20Fable%205.2/69671824)
  - [Best AI Models Ranked 2026 — AI Pro League (league table, AA index 65, pricing, cost ranks)](https://aiproleague.com/)
