# Claude Opus 4.8 — findings by Qwen 4 Max

- Source: Anthropic/claude-opus-4.8
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8 (API ID `claude-opus-4-8`)
- **Short description:** Anthropic's Opus-tier flagship of **May 28, 2026** — a "modest but tangible" upgrade over Opus 4.7 at the same price, focused on judgment, honesty and agentic reliability. ~**4x less likely** than 4.7 to let flaws in its own code pass unremarked; alignment assessed at "new highs" on prosocial traits with misaligned behavior similar to Mythos Preview. Launch features: **effort control** (defaults to **high**; xhigh/max available), **dynamic workflows** (hundreds of parallel subagents for codebase-scale migrations, research preview), and **fast mode at 2.5x speed, 3x cheaper** than prior models' fast mode. Superseded by Opus 5 (Jul 24, which "more than doubles Opus 4.8's Frontier-Bench performance at lower cost") and Opus 5.5. BenchLM **69.22/100, #17 of 1020** (74/812 coverage).
- **Provider / access:** Claude API (`claude-opus-4-8`), claude.ai, Claude Code, Cowork, AWS Bedrock, Google Cloud, Azure; OpenRouter. Dynamic workflows gated to Claude Code Enterprise/Team/Max. Messages API now accepts system entries inside the messages array (mid-task instruction updates without breaking prompt cache).
- **Release / knowledge:** Released 2026-05-28. Knowledge cutoff not restated in the launch post (Anthropic model docs list January 2026). Effort default **high**; "extra"/xhigh recommended for hard/long-running tasks.
- **IDs:** `claude-opus-4-8`; predecessor Opus 4.7 (and 4.7 Adaptive); successors Opus 5 / Opus 5.5. Distinct from the Fable/Mythos technical tier.
- **Context window:** **1M tokens**. AA-LCR **77.7%**. Standard Anthropic prompt caching (10% read tier); no long-context surcharge documented. Dynamic workflows + mid-task system entries support very long agent sessions.
- **Modalities:** Text + image input, text output. Strong grounded vision: CharXiv **89.9** (80.5 no-tools), ScreenSpot Pro **87.9**, ExtractBench **86.84**, ParseBench 62.27; computer use / browser agents (Online-Mind2Web **84%**, OSWorld-Verified **83.4**). Databricks Genie reasons over PDFs/diagrams at 61% cheaper token cost than 4.7.
- **Pricing (as of 2026-11-11):** **$5 in / $25 out** per 1M (unchanged from 4.7/4.6/4.5); **fast mode $10/$50** (2.5x speed). Effort control lets users trade tokens for quality on all plans.
- **Architecture:** Proprietary; not disclosed. System card: `cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf`. Reasoning model with adjustable effort.

### Raw benchmarks found

Vendor system card / launch (Anthropic, May 28; Terminus-2 harness for TB2.1):

- Coding: SWE-bench Verified **88.6**, SWE-bench Pro **69.2**, SWE Multilingual **84.4**, SWE Multimodal **38.4**, Terminal-Bench 2.1 **74.6** (Terminus-2; GPT-5.5 Codex CLI 83.4 noted)
- Agentic: OSWorld-Verified **83.4** (methodology updated; 4.7 restated to 82.3), BrowseComp **84.3**, DeepSearchQA **93.1**, MCP Atlas **82.2**, Toolathlon **59.9**, Finance Agent v2 **53.9**, GDPval-AA **1593**, Online-Mind2Web **84%** (tester)
- Reasoning/knowledge: GPQA / GPQA-Diamond **93.6**, HLE **57.9** with tools / **49.8** no-tools, USAMO 2026 **96.7**, INCLUDE 87.6, OfficeQA Pro 66.2
- Vision: CharXiv **89.9** / 80.5 no-tools, ScreenSpot Pro **87.9**
- Tester milestones: Super-Agent benchmark — only model to complete every case end-to-end (beats GPT-5.5 at parity cost); Harvey Legal Agent Benchmark — first model to break **10% all-pass**; CursorBench exceeds prior Opus at every effort; Devin/Cognition cleaner tool calling

Independent runs (BenchLM Nov 10 profile + AA/ARC Prize/Epoch/Vals/Cognition/Cursor/LlamaIndex as cited):

- AA: Intelligence Index **41.8** (version unstated); AA-HLE **48.7**; AA-GPQA-D **92.0**; AA-Omniscience net **28.8** (accuracy 48.8, hallucination 39.3); GDPval-AA normalized **47.7%**; AA Agentic **42.6**; AA Coding **74.3**; AA TB2.1 **84.6**; terminalBench-Hard 58.3; EnterpriseOps-Gym 44.0; AA-AnalystAgent 45.0; τ²-bench **94.4**; AA-IFBench 62.2; AA-LCR 77.7; CritPt **20.9**; AA-SciCode 54.4
- ARC Prize (semi-private): ARC-AGI-1 **92.5**, ARC-AGI-2 **72.1**, ARC-AGI-3 **1.5** (very weak on the newest tier)
- Epoch: FrontierMath v2 T1–3 **80.0**, T4 **56.098**
- Vals: SWE-bench 88.6, LiveCodeBench **87.8**, GPQA-D 92.4, MMLU-Pro **89.6**, TB2.1 71.9
- Cognition: FrontierCode 1.1 Main **46.5**, FrontierCode 2.0 **14.7** (low on the harder new version); Cursor: CursorBench 3.2 **62.3** / 3.1 58.4
- Terminal-Bench 4.1 **23.6** (tbench), TB3.0 21.1; PostTrainBench v1.1 32.9; ResearchClawBench 21.1; OSWorld 2.0 20.6; Gert Labs 72.97; MazeBench 0% (ASCII)
- LlamaIndex (Nov 10): ExtractBench **86.84**, ParseBench 62.27; Design Arena Website 1255 (OpenRouter); Bug-class: CWE not listed
- BenchLM aggregate **69.22/100, #17 of 1020** (74/812). Family: Opus 5.5 85.77, Opus 5 79.04, Opus 4.7 Adaptive 68.06, Opus 4.7 64.93, Opus 4.6 61.95.

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld-V 83.4, Online-Mind2Web 84, BrowseComp 84.3, DeepSearchQA 93.1, MCP Atlas 82.2, τ² 94.4 and dynamic-workflow subagent orchestration make it a top computer-use/browser agent (Super-Agent end-to-end, Harvey first >10% all-pass); capped by GDPval-AA 1593 / 47.7% norm, Toolathlon 59.9, TB4.1 23.6 and AA Agentic 42.6 — below the Opus 5/Fable tier on business workflows.
- **Reasoning: 87/100.** GPQA-D 93.6 (AA 92.0 / Vals 92.4), USAMO 96.7, FrontierMath v2 T4 56.1, ARC-1 92.5 / ARC-2 72.1, MMLU-Pro 89.6; capped by HLE 57.9/49.8 (AA 48.7), CritPt 20.9, ARC-AGI-3 **1.5**, AA index 41.8 and 39.3% hallucination — strong science/math, weak on the newest abstract-reasoning tier.
- **Context window: 93/100.** 1M tokens, standard caching, mid-task system-entry updates and dynamic workflows for very long sessions; AA-LCR 77.7 is moderate. Deductions for unexceptional long-context retrieval and no published MLCR/output ceiling.
- **Multimodal: 78/100.** Image-in with excellent grounded vision (CharXiv 89.9, ScreenSpot Pro 87.9, ExtractBench 86.84) and strong computer use; capped by SWE Multimodal 38.4, ParseBench 62.27 and the image-only modality ceiling (no video/audio).
- **Coding: 88/100.** SWE-bench Verified 88.6 (Vals-confirmed), SWE-Pro 69.2, SWE Multilingual 84.4, LiveCodeBench 87.8, CursorBench 3.2 62.3, FrontierCode 1.1 46.5, codebase-scale migration workflows; capped by FrontierCode 2.0 **14.7**, TB2.1 74.6 (Terminus-2), SciCode 54.4 and PostTrainBench 32.9 — hard new-version repo work trails its SWE-V strength.
- **Cost efficiency: 52/100.** $5/$25 unchanged across the 4.5–4.8 line, fast mode $10/$50 now 3x cheaper than before, effort control and 61% token savings vs 4.7 on multimodal docs; still a premium proprietary tier with no free/batch discount documented. Anchored at $5/$25→52.
- **Overall Score: 86.8/100.** Mean of the five quality dims (88+87+93+78+88)/5 = 86.8. Best-fit: reliable long-horizon coding agents, computer-use/browser automation and high-stakes professional (legal/finance) workflows where honesty and judgment matter — a strong May-2026 flagship now superseded by Opus 5/5.5 and the Fable tier, which beat it on frontier coding and reasoning at similar or lower cost.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Anthropic's full launch announcement read in cache, the Opus 4.8 system card via BenchLM's sourced Nov 10 profile, llm-stats/morphllm rate cards via search snippet, and WebSearch corroboration); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: Terminal-Bench 2.1 system-card **74.6 (Terminus-2 harness)** vs AA **84.6** vs Vals **71.9** (three harnesses); HLE system-card 57.9 tools / 49.8 no-tools vs AA-HLE 48.7; GDPval-AA system-card **1593** vs AA normalized 47.7% (a later Anthropic peer comparison listed 1890 — different run/version, not averaged); OSWorld-Verified methodology was updated at launch (4.7 restated 82.3). AA Intelligence Index 41.8 is version-unstated and not cross-compared with other models' labelled versions. ARC-AGI-1/2/3 are distinct tiers (92.5/72.1/1.5). FrontierCode 1.1 (46.5) ≠ 2.0 (14.7); TB2.1 ≠ TB3.0 ≠ TB4.1. Harvey "first >10% all-pass" is the v1.1 hallucination-gated metric. llm-stats returned a shell — pricing/date captured from official post + morphllm/BenchLM snippets. Identity: Opus 4.8 ≠ 4.7 ≠ 4.7 Adaptive ≠ Opus 5 ≠ Opus 5.5; superseded flagship scored on its own documented capability.
- Reference URLs:
  - [Introducing Claude Opus 4.8 — Anthropic](https://www.anthropic.com/news/claude-opus-4-8)
  - [Claude Opus 4.8 System Card (PDF) — Anthropic](https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf)
  - [Claude Opus 4.8 benchmark profile — BenchLM](https://benchlm.ai/models/claude-opus-4-8)
  - [Claude Opus 4.8 — Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-8)
  - [Claude Opus 4.8 — Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-8)
  - [Claude Opus 4.8: Pricing, Context, Benchmarks — MorphLLM](https://www.morphllm.com/opus-4-8)
  - [ARC Prize leaderboard (semi-private) — ARC Prize](https://arcprize.org/leaderboard)
  - [FrontierMath v2 Tier 4 — Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [FrontierCode 2.0 — Cognition](https://cognition.com/blog/frontier-code-2.0)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.