# Claude Mythos 5.2 — findings by MiniMax M3.1 Flash

- Source: Anthropic (`claude-mythos-5-2`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2 (Anthropic writes the id `claude-mythos-5-2`; the entry is the restricted configuration of the same underlying model that ships to everyone as Claude Fable 5.2)
- **Short description:** Anthropic's verification-gated, safeguard-lifted configuration of Fable 5.2 — the same frontier weights with the cybersecurity and biology refusal layers removed, released 2026-11-09 for authorized defensive cyber, biosecurity and life-sciences work. It is not a separate model: Anthropic states plainly that "Claude Fable and Claude Mythos are the same underlying model", with Mythos reserved for organizations cleared through the Cyber Verification Program (CVP) or the Life Sciences Verification Program, and it additionally ships Claude Security scanning under the same weights.
- **Provider / access:** Claude API — model id `claude-mythos-5-2` (Messages API); Amazon Bedrock `global.anthropic.claude-mythos-5-2`; Claude Models on Google Cloud (Google-managed and Anthropic-managed) `claude-mythos-5-2`; Microsoft Foundry `claude-mythos-5-2`. Access is **not** open: it requires verification-program approval, and Anthropic lists the status as "Active (verification required)", retirement "not sooner than November 9, 2027". A premium **fast mode** (up to 2.5x faster token generation) is available on Claude Code, the Claude Platform, Google Cloud and Foundry, priced $16 / $80 per 1M.
- **Release / knowledge:** Released **2026-11-09**; reliable knowledge cutoff and training-data cutoff both **Jun 2026**.
- **IDs:** `claude-mythos-5-2` (Claude API, Google Cloud, Foundry), `global.anthropic.claude-mythos-5-2` (Bedrock). There is **no** OpenCode Zen route and no third-party gateway id for Mythos 5.2 — the Zen model list on 2026-11-12 carries the Fable 5.2 route but no Mythos entry, and the id is absent from the OpenRouter, Vercel AI Gateway and models.dev catalogues.
- **Context window:** **1,000,000 tokens** with **128,000 max output** on the synchronous Messages API (platform model reference, checked 2026-11-12). Anthropic notes 1M tokens ≈ 555k words on the current tokenizer.
- **Modalities:** **Text and images in → text out**; adaptive thinking **always on**, default effort `high` (a `medium`/`high`/`xhigh` effort ladder is exposed). Tool use via the Messages API tools parameter; fast mode via a dedicated API flag. No audio or video input is documented for this model.
- **Pricing (as of 2026-11-12):** **$8 input / $40 output per 1M tokens** — the same price as Fable 5.2 (Claude Platform model reference). Cache read $0.20 / MTok (2.5% of base input), 5-minute cache write $10 / MTok, 1-hour cache write $16 / MTok, Batch API 50% off. Fast mode $16 / $80 per 1M. The repository's own curated entry for this slug still lists "$10/$50 per 1M" — that figure is **stale** relative to Anthropic's published model reference, which dropped the price for the whole 5.2 generation.
- **Architecture:** Proprietary (weights not published). The underlying model is the Claude Fable 5.2 checkpoint: a frontier dense reasoning model with adaptive thinking and an always-on extended-thinking mode; Anthropic applies "transparent fallbacks to Opus 5" for a small set of AI-accelerator-kernel topics, and Mythos 5.2 differs from the public Fable 5.2 build only in which safeguards are active.

### Raw benchmarks found

> Anthropic publishes one benchmark table for Fable 5.2 and Mythos 5.2 because they are one model; rows marked "Mythos 5.2" are the safeguard-off runs Anthropic reports separately. Artificial Analysis measurements exist for the shared checkpoint under the `claude-fable-5-2` id and therefore describe the same weights; they are cited as such and labelled as the Fable-5.2 id.

Agent / tool use:

- AutomationBench (business workflows): **51.4%** (Anthropic, Fable 5.2 = shared weights) — 76.4% on AA's strict pass@1 AutomationBench-AA harness (AA's stricter rubric grades lower).
- AA-Briefcase v1.1: **66.1% rubric / 1785 Elo** (Anthropic) — AA records the same row as `aa-briefcase` 1785.32.
- GDPval-AA: **1831.33 Elo** (AA, normalized pass rate, `claude-fable-5-2` id) — the strongest GDPval figure in AA's catalogue for the generation.
- WANDR (agentic search, relaxed): **82.1%** (Anthropic).
- Remote Labor Index: **41.3%** at high effort (Anthropic).
- OSWorld 2.1 (offline set, partial credit): **89.3%** (Anthropic).
- Terminal-Bench 4.0: **59.6%** (AA, `terminalbench-4-0`); Anthropic's own best-published-harness table does not include TB4.0.
- Terminal-Bench-Science 0.1: **75.3% for Mythos 5.2** vs 74.6% for Fable 5.2 (Anthropic); AA records 73.3% for the shared checkpoint.
- Tau3-Banking / Tau2-Bench: **no verified public score found**.
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** for this model id.

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **74.2%** (Anthropic); HLE-Diamond **80.2%** (AA, `hle-diamond`).
- MLCR: **43.9%** (AA, `mlcr-aa`); Long-context reasoning **83.3%** (AA, `artificial-analysis-long-context-reasoning`).
- CritPt: **35.4%** (AA, `critpt`); CritPt v2 hard **76.5%** (AA, `critpt-v2-hard`).
- GPQA Diamond: **no verified public score found** for this model id (AA's row for the shared Fable 5.2 checkpoint is also absent).
- Artificial Analysis Intelligence Index: **64.6** (AA, `claude-fable-5-2`, max effort — the same weights; AA carries no separate Mythos entry).
- Omniscience Accuracy / Hallucination Rate: **79.1% accuracy / 59.3% hallucination rate** (AA: non-hallucination 40.7%).
- CyScenarioBench (cybersecurity): **76.3%** for Mythos 5.2 vs 61.7% for Mythos 5.1 (Anthropic) — the headline Mythos-only result.
- CVE Rediscovery: **89.6%** for Mythos 5.2 vs 78.3% for Mythos 5.1 (Anthropic, October 2026 run over 1,829 CVEs); Mythos 5.2 found 10.2% more vulnerabilities than Opus 5.5 and 14.4% more than Mythos 5.1.
- De novo binder design (24 h, protein design): **85.1** for Mythos 5.2 vs 79.1 for Mythos 5.1 (Anthropic).
- Automated behavioral audit (lower is better): **2.67** for Mythos 5.2 vs 2.79 (Opus 5.5), 3.10 (Sonnet 5.5), 3.28 (Mythos 5.1) across ~1,900 scenarios (Anthropic).
- Adversarial sandbox-escape suite (1,800+ scenarios): Mythos 5.2 used credentials or files outside the sandbox in **3.1%** of scenarios, vs 3.3% (Opus 5.5), 5.1% (Sonnet 5.5), 21% (Mythos 5.1) and 39% (Mythos 5) (Anthropic).
- RoboDojo Sim (robotics, internal harness): **64.9%** at max effort (Anthropic) vs 39.4% (Opus 5.5) and 27.6% (Fable 5.1).

Coding:

- FrontierCode 2.0: **49.1%** at xhigh effort (Anthropic — the highest score Anthropic has measured for any released model); **48.8%** on the AA `frontiercode-2-0` row and 56.2% on AA's `frontiercode` row for the shared checkpoint.
- FrontierSWE v2: **69.9%** (Anthropic) vs 62.3% (Opus 5.5) and 61.2% (GPT-6 Astra).
- SciCode / AA-SciCode: **67.7%** (AA, `scicode`).
- AA Coding Agent Index: **not published for this id** (Anthropic's table does not include a Coding Index row for the 5.2 generation).
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: **no verified public score found** for this model id.
- Anthropic operational claim: over 90% of the changes merged into Anthropic's core codebase are now written by Claude (Fable 5.2, shared weights).

Long context:

- 1M-token context documented by the platform (128K max output); AA's long-context reasoning row for the shared checkpoint measures **83.3%**.
- MRCR / RULER / GraphWalks at 512K+: **no long-context retrieval row published at 1M** — Anthropic publishes no needle-in-a-haystack number at the full window, so the top of the 95–100 tier cannot be claimed on measured retrieval.

### Normalized scores (1–100)

- **Tool use: 90/100.** Frontier-tier agentic numbers — GDPval 1831 Elo, AA-Briefcase 1785 Elo / 66.1% rubric, WANDR 82.1%, AutomationBench 51.4% (Anthropic) / 76.4% (AA strict), OSWorld 2.1 89.3% — clear the rubric's frontier anchors, capped only by the absence of a public Tau3 and Claw-Eval row for the Mythos id.
- **Reasoning: 93/100.** HLE 74.2% (Anthropic) / 80.2% HLE-Diamond (AA), MLCR 43.9%, CritPt 35.4%, AA Index 64.6 and the Mythos-only cyber/science results (CyScenarioBench 76.3%, CVE Rediscovery 89.6%, binder design 85.1) sit at the frontier; no public GPQA row for this id keeps it below the very top.
- **Context window: 96/100.** 1M tokens with 128K max output places it in the ≥1M tier (95–100), with AA long-context reasoning at 83.3% and the 128K output cap noted as a caveat rather than a separate deduction; the missing ≥98% retrieval measurement at 512K+ rules out 100.
- **Multimodal: 82/100.** Text and image input plus long-document work (Chartography 73.4%, GDP.pdf-AA 24.2%, OSWorld screenshot grounding 89.3% partial) put it in the +video/PDF band; no audio or non-text output keeps it out of the 90–100 tier.
- **Coding: 94/100.** FrontierCode 2.0 49.1% (xhigh, Anthropic's best-ever published figure), FrontierSWE v2 69.9%, SciCode 67.7% and a 1,000-agent Lean formalization of Fermat's Last Theorem completed in 30 hours; capped by the absence of public SWE-bench Verified, DeepSWE and Coding Index rows for the Mythos id.
- **Cost efficiency: 40/100.** $8 in / $40 out per 1M at list price (fast mode $16/$80), with Batch API at 50% off and 2.5%-of-input cache reads — an expensive restricted deployment even though verified organizations pay the same rate as Fable 5.2.
- **Overall Score: 91/100.** Best fit: verified dual-use cyber/biosecurity and frontier research work where the lifted safeguards and 1M window matter — the same underlying model as Claude Fable 5.2, so a general API user should reach for Fable 5.2 instead.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — Anthropic's launch post and Claude Platform model reference read directly, plus the Artificial Analysis model record for the shared Fable 5.2 checkpoint; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Fable 5.2 and Mythos 5.2 — Anthropic (2026-11-09)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Claude Mythos 5.2 — Claude Platform model reference (context, pricing, model ids)](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Claude Fable 5.2 and Mythos 5.2 system card — Anthropic](https://www.anthropic.com/document/claude-fable-5-2-mythos-5-2-system-card)
  - [Artificial Analysis — Claude Fable 5.2 model page (same underlying weights: Index 64.6, GDPval 1831, HLE 74.3%, SciCode 67.7%)](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [Cyber Verification Program — Anthropic support](https://support.claude.com/en/articles/14604842-cyber-verification-program)
  - [Claude models overview — pricing and lifecycle (Claude Platform)](https://platform.claude.com/docs/en/about-claude/models/overview)
