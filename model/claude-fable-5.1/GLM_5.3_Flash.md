# Claude Fable 5.1 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (GA; same weights with lifted cyber/bio safeguards sold as Claude Mythos 5.1, trusted-access only via Project Glasswing)
- **Short description:** Anthropic's frontier flagship for demanding reasoning, long-horizon agentic coding, and multistep research — an efficiency-and-agency pass over June's Fable 5, released Sept 1, 2026. Anthropic itself now routes "most workloads" to the cheaper Claude Opus 5.5 and positions Fable 5.1 for the hardest long-running work.
- **Provider / access:** Anthropic Messages API (`claude-fable-5-1`); Amazon Bedrock (`anthropic.claude-fable-5-1`); Claude Models on Google Cloud (`claude-fable-5-1`, Google- or Anthropic-managed); Microsoft Foundry (`claude-fable-5-1`); Claude Platform on AWS; claude.ai for Pro/Max/Ultra/Team/Enterprise. Anthropic Messages (not Chat Completions); no OpenCode Zen Free ID.
- **Release / knowledge:** Released September 1, 2026; retirement committed no sooner than September 1, 2027; reliable knowledge cutoff and training-data cutoff June 2026 (Anthropic docs, checked 2026-11-02).
- **IDs:** `claude-fable-5-1` (Bedrock `anthropic.claude-fable-5-1`; Vertex `claude-fable-5-1@default`). Mythos twin: `claude-mythos-5-1`.
- **Context window:** 1,000,000 tokens total; 128,000 max output (synchronous Messages API) — verified on the official model overview page (platform.claude.com, fetched 2026-11-02); the 300K batch-output beta list does not include Fable 5.1.
- **Modalities:** Text and images in → text out (official capabilities table; PDF input via the Claude platform's standard document support); no native audio or video in/out. Reasoning: adaptive thinking, always on, effort low–max (default `high`). Tool calls: yes, but forced tool use (`tool_choice: any`/`tool`) returns a 400 — use strict tool use or structured outputs for schema-guaranteed JSON; mid-conversation effort changes, turn-scoped system messages, and readable progress updates are beta. Text carries an invisible watermark; C2PA credentials on media produced via the code-execution tool.
- **Pricing (as of 2026-11-02):** $10.00 in / $50.00 out per 1M tokens; cache reads $0.25 (0.025× base input — 75% below Fable 5's $1.00, cutting typical workloads ~25% and agentic workloads up to ~45%); 5m cache write $12.50, 1h write $20; Batch API 50% off ($5/$25); US-only inference 1.1×. No free API tier; 30-day data retention required (zero retention only by express authorization until Enterprise Frontier Safeguards roll out). AA v5.0 measured cost per Intelligence Index task $12.99 at max effort ($4.47 at Low).
- **Architecture:** Proprietary, closed weights, parameters undisclosed. Always-on adaptive thinking; ~69 tok/s output, TTFT ~239 s at max effort (AA).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1853 Elo** at max effort (AA-verified, rank 3/358; field leader Claude Opus 5.5 at 1866; effort ladder 1587 low → 1670 medium → 1743 high → 1835 xhigh) — v2.1 reading 1735 (AA independent)
- MCP Atlas: **87.2%** (BenchmarkList verified 2026-10-18, rank 3/52; CI ±2.05)
- Terminal-Bench 2.1: **91.4%** (AA own harness — highest AA had measured at eval time) / **85.02%** (Vals AI, Terminus 2, max effort; falls to 79.03% if fallback-assisted tasks count as failures)
- Terminal-Bench 4.0: **55.8%** (Anthropic system card, safeguards on; Mythos 5.1 60.9%) / **52%** (AA v5.0) / **57.9%** (Grok 4.7 comparison table, max effort)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic; vs Fable 5's 24.7%) / **43%** (AA v5.0, where G-6 Astra leads at 68.1%)
- Tau3-Banking: **47.2%** Pass@1 (AA measured; #4/183 on the public board, behind GLM-5.3's 50.3%)
- Toolathlon-Verified: **77.8%** (rank 6/43); JobBench: **73.1%** (rank 3/57, Oct 2026)
- AutomationBench (Zapier): **31.4%** (Anthropic; rank 22/48, Opus 5 leads at 50.3%) / AutomationBench-AA **59%** (AA v5.0)
- OSWorld 2.0: **41.7%** strict / **77.9%** partial (Anthropic, safeguards on)
- BrowseComp: **85.2% ±5.3** (max, verified, rank 23/69); AA-Briefcase v1.1: **1670 Elo** (AA v5.0 max); AA Harvey LAB v1.0: **93.0%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **66** at max (AA pre-release, Sept 1 — highest AA had then measured) → **53** on v4.3 (tied #1 with GPT-6 Astra) → **50 (Xhigh, #15/58) / 49 (Max) / 47 (High)** on the current v5.0 rebase (Nov 2026), now behind Gemini 4 Carbon (59) and Claude Opus 5.5 (58)
- ARC-AGI-2 semi-private: **90.0%** at max ($4.49/task; ARC Prize verified, 94th pct; field leader G-6 Astra 95%); ARC-AGI-1 semi-private: **97.5%** at max ($1.40/task); effort ladder: 94.5/86.3 (medium) → 96.0/88.8 (high)
- GPQA Diamond: **92.6%** (Anthropic-reported) / **93.7%** (AA measured; OpenAI Sept 3 comparison table) / **93.4%** (Vals)
- HLE: **60.9%** no tools / **65.0%** with tools (Anthropic); AA-HLE **59.1%** measured; HLE-Diamond **60%** (AA v5.0)
- ProofBench v1.1: **100.00%** (Vals — matched only by specialized prover AlephProver)
- FrontierMath v2: **87.8%** Tier 4 / **90.2%** Tiers 1–3 (OpenAI comparison table, Sept 3, 2026)
- MMLU-Pro: **92.38%** (Vals) / AA MMLU-Pro **91.6%**; AIME26 **98.1%** (benchgap estimate ±1.4, medium confidence)
- AA-Omniscience v1.1: **46** index (AA v5.0; ~68.4% accuracy per benchgap); CritPt v2 Hard: **51%** (AA v5.0; older AA CritPt scale 29.7%); SciCode: **62.0–63.1%** (AA)

Coding:

- SWE-bench Verified: **95.0%** (provider-reported via launch coverage — Datasciencedojo, Sept 1; Anthropic's own launch table omits SWE-bench; benchgap estimate 98.1% ±3.7; a conflicting 89.1 reading exists on vectorwire dated 2026-10-26) — sibling Opus 5 holds 97.0% measured on Vals
- SWE-bench Pro: **81.2%** (provider-reported — models.wtf / MikeSailab; some launch coverage lists 80.0%)
- LiveCodeBench: **90.52%** (#1, Vals, max effort); Vibe Code Bench: **90.26%** (Vals) / 90.3% (Google table)
- AA Coding Index: **81.6%** (AA measured)
- DeepSWE v1.1: **67.4%** (OpenAI comparison table); FrontierSWE v2: **56.3%** (Google table); FrontierCode 2.0: **32.4%** (AA/benchgap measured)
- SWE Multilingual: **89.1%** (system card); SWE-bench Multimodal: **54.7%**; CursorBench 3.2.0: **73.4%** (Anthropic) / CursorBench 4.0: **51.8%**; PostTrainBench v1.1: **40.2%**

Long context:

- GraphWalks BFS ≤128K: **91.4%** F1; GraphWalks BFS 256K–1M: **65.0%** F1 (both Google-computed for its Gemini 4 Argon launch eval, Oct 2026 — behind Gemini 4 Argon 84.2%, GPT-6 Astra 71.8%, and sibling Opus 5.5 66.8% on the long bin)
- AA-LCR (long-context reasoning): **85.3%** (AA measured — top of the AA long-context list)
- MRCR at window length: no verified public score found (Anthropic's Fable 5.1 card omits both MRCR and GraphWalks; only low-confidence aggregator estimates exist)

### Normalized scores (1–100)

- **Tool use: 89/100.** GDPval-AA 1853 (#3/358), MCP Atlas 87.2% (#3/52), TB2.1 91.4% (AA-best at eval) and JobBench 73.1% (#3/57) are top-decile, but τ³-Banking 47.2% sits behind GLM-5.3, Zapier AutomationBench 31.4% (#22/48) and OSWorld 2.0 strict 41.7% trail the leaders, and Vals shows heavy safety-fallback dependence (SRE Bench 22.9%→10.7% without fallback) — capped at 89.
- **Reasoning: 93/100.** ARC-AGI-2 semi-private 90.0% (verified), ARC-AGI-1 97.5%, GPQA Diamond 92.6–93.7%, HLE 60.9/65.0%, ProofBench 100% and FrontierMath Tier 4 87.8% are frontier-elite, but HLE trails GPT-6 Astra on shared AA harnesses and the AA v5.0 rebase (50 vs Opus 5.5's 58) caps it below the very top.
- **Context window: 86/100.** Full 1M window at standard pricing with the best measured AA-LCR (85.3%), but competitor-computed GraphWalks 256K–1M is 65.0% — behind Gemini 4 Argon (84.2%), GPT-6 Astra (71.8%) and sibling Opus 5.5 (66.8%) — with no Anthropic-published MRCR and a 128K output cap.
- **Multimodal: 65/100.** Official capability is text + images in → text out (PDF via platform document support) with strong MMMU-Pro (~86.5–90.6%) and SWE-bench Multimodal 54.7%, but conflicting Chartography readings (46.2% Google-computed vs 88.4% Anthropic w/tools), no native audio/video in or out, and no image/video generation keep it mid-tier among frontier peers.
- **Coding: 92/100.** Provider-reported SWE-bench Verified 95.0% and SWE-bench Pro 81.2% (reported leaderboard-leading at launch), #1 LiveCodeBench 90.52% (Vals) and Vibe Code Bench 90.26% are outstanding, but DeepSWE 67.4%, FrontierSWE 56.3%, FrontierCode 2.0 32.4% lag, sibling Opus 5 beats it on measured Vals SWE-bench Verified (97.0%), and the Verified number lacks independent harness confirmation — capped at 92.
- **Cost efficiency: 30/100.** $10/$50 per 1M is the most expensive mainstream API tier — 2.5× sibling Opus 5.5 ($4/$20), which now outscores it on AA v5.0 (58 vs 50); AA measured $12.99 per Intelligence Index task at max effort vs GPT-6 Astra's $3.26 at an equal v4.3 index (53); the $0.25 cache read (agentic workloads up to ~45% cheaper than Fable 5) and 50% batch discount only partially offset.
- **Overall Score: 85/100.** Mean of the five quality dims per the v4 formula (Cost excluded): (89 + 93 + 86 + 65 + 92) / 5 = 425/5 = 85 — best fit: the ceiling pick for long-horizon agentic coding and multistep research when maximum effort is worth the premium, with cache-read-heavy harness patterns to blunt the cost; most workloads are better served by Opus 5.5.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-19)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Fable 5.1 and Claude Mythos 5.1 — Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.1 model overview — Claude Platform docs](https://platform.claude.com/docs/en/models/fable-5-1/overview)
  - [Claude Fable 5.1 — Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [Claude Fable 5.1 ARC-AGI results — ARC Prize](https://arcprize.org/results/anthropic-claude-fable-5-1)
  - [Vals AI benchmark suite](https://www.vals.ai/home)
  - [GraphWalks long-context results compilation — KLU](https://klu.ai/benchmarks/graphwalks)
