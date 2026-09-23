# Claude Opus 4.8 — findings by Mimo V2.6 Flash

- Source: Anthropic (`claude-opus-4-8`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May 2026 most-capable general-access Opus — upgrades Opus 4.7 on SWE-bench, GDPval-AA, Terminal-Bench, OSWorld and honesty metrics at unchanged price; ships Claude Code Dynamic Workflows and effort control. Not a variant of Fable/Mythos (different product line).
- **Provider / access:** Claude API (`claude-opus-4-8`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude apps / Claude Code. Messages API (Chat Completions-style).
- **Release / knowledge:** Released 2026-05-28 (Anthropic announcement; TokenMix; LLM Stats). Knowledge cutoff: not stated in consulted launch snippets (system card would carry it — no verified public score found in sources consulted).
- **IDs:** `anthropic/claude-opus-4-8`. No $0 Free API tier (paid only).
- **Context window:** 1M input tokens; max output 128K tokens (LLM Stats / Awesome Agents).
- **Modalities:** text + vision (image) in; text out; reasoning yes (effort levels: high default, plus `xhigh`/`max`); tool calls yes; cache + batch API yes.
- **Pricing (as of 2026-09-23):** $5.00 in / $25.00 out per 1M standard; Fast mode $10/$50 (2.5× speed); cache hit $0.50 / 1M; Batch 50% off ($2.50/$12.50); extended context >200K $10/$37.50 (TokenMix / Awesome Agents). Unchanged from Opus 4.7.
- **Architecture:** proprietary (params undisclosed).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (**agent**): **74.6%** (Anthropic launch, Terminus-2 public harness); higher peer-cited figures: **82.7%** (LLM Boss leaderboard), **84.6%** (AA Terminus-2 via Kimi/Qwen tables) — list Anthropic primary, note range
- OSWorld-Verified: **83.4%** (Anthropic/TokenMix)
- MCP-Atlas: **82.2%** (Anthropic/TokenMix; +4.9 vs 4.7)
- GDPval-AA: **1890 Elo** (Anthropic/LLM Boss — #2 of 4 on LLM Boss board)
- BrowseComp: **84.3%** single-agent / **88.5%** multi-agent (Anthropic)
- AutomationBench: **15.5%** (LLM Boss); Finance Agent v2: **53.9%**; Legal Agent Benchmark: **10.4%** (LLM Boss)
- Tau3-Banking / Tau2-Bench / Claw-Eval: no verified public score found in sources consulted

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (Anthropic/LLM Boss; −0.6 vs 4.7's 94.2%)
- HLE: **49.8%** no tools / **57.9%** with tools (Anthropic/LLM Boss)
- USAMO 2026: **96.7%** (Anthropic)
- CharXiv Reasoning: **80.5%** no tools / **89.9%** with tools (LLM Boss)
- Artificial Analysis Intelligence Index: **61** (TokenMix — #1 in 149-model class at launch)
- CritPt / Omniscience / MLCR numeric: AA-LCR **67.7%** (LLM Boss); CritPt: no verified public score found in sources consulted

Coding:

- SWE-bench Verified: **88.6%** (Anthropic; #4 of 9 on LLM Boss)
- SWE-bench Pro (Public): **69.2%** (Anthropic; +4.9 vs 4.7)
- SWE-bench Multilingual: **84.4%** (Anthropic)
- DeepSWE v1.1: **59.0%** (LLM Boss, #5 of 7)
- FrontierSWE: **70.0%** / FrontierCode Diamond: **13.4%** (LLM Boss)
- LiveCodeBench / SciCode / Vibe: no verified public score found in sources consulted

Long context:

- 1M window official; MRCR/RULER retrieval percentage: no verified public score found in sources consulted (AA-LCR 67.7% is the long-context proxy)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`.

- **Tool use: 94/100.** GDPval-AA 1890 Elo is in the elite knowledge-work band (clearly above 1750+ frontier ref), OSWorld 83.4% and MCP-Atlas 82.2% lead or near-lead their fields, BrowseComp 84.3%; TB2.1 range 74.6–84.6 (harness-dependent) keeps it from 96+, and missing Tau3/Claw rows prevent a full mark.
- **Reasoning: 95/100.** GPQA 93.6% + HLE 49.8/57.9 both firmly in frontier band (HLE 40%+ → 90–100), AA Index 61 tops the launch-era leaderboard; small discounts for the −0.6 GPQA regression vs 4.7 and no CritPt row.
- **Context window: 95/100.** Official 1M window → ≥1M tier floor; no MRCR ≥98% retrieval figure published, so cannot earn the retrieval-backed 100; AA-LCR 67.7% is merely mid-tier retrieval evidence.
- **Multimodal: 65/100.** Text + vision (image) in only (LLM Stats / launch docs) → image-in band 60–70; no audio/video/PDF input, no non-text output → mid image-in score. Vision-grounded work (OSWorld, ScreenSpot-class) supports the upper half of that band but not 70+.
- **Coding: 96/100.** SWE-V 88.6% and SWE-Pro 69.2% are at/near the top of public closed-model tables at release; SWE-Multilingual 84.4% and DeepSWE 59% round out a frontier coding profile; held just below 97+ because DeepSWE still trails GPT-5.6 Sol/Fable (~70–73) and TB2.1 is harness-sensitive (74.6 Anthropic vs 84.6 AA).
- **Cost efficiency: 48/100.** $5/$25 sits between methodology anchors ($3/$15 ≈ 60 and $10/$50 ≈ 30) — expensive list price with excellent cache/batch discounts that help agentic workloads but don't reach cheap-tier territory.
- **Overall Score: 89/100.** Mean of the five quality dims: (94 + 95 + 95 + 65 + 96) / 5 = 445/5 = 89.0. Best-fit: top general-access pick for frontier SWE-bench coding, GDPval knowledge work, and HLE-class reasoning when multimodal (audio/video) input is not required.

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Anthropic Claude Opus 4.8 announcement, LLM Stats/TokenMix/Awesome Agents/LLM Boss benchmark roundups); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
