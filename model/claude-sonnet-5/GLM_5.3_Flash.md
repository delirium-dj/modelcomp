# Claude Sonnet 5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5 (current Sonnet tier; default model on Free/Pro/Max/Team/Enterprise claude.ai plans and in Claude Code)
- **Short description:** Anthropic's June 2026 agentic Sonnet: plans autonomously, uses browser and terminal tools, and approaches Opus 4.8 on agentic-search and computer-use evaluations at a fraction of the price. The $2/$10 launch rate was made standard on 2026-08-10 (scheduled $3/$15 increase cancelled).
- **Provider / access:** Anthropic Messages API (`claude-sonnet-5`; Vertex `claude-sonnet-5`; Bedrock `anthropic.claude-sonnet-5`); Claude Platform on AWS, Google Cloud, Microsoft Foundry, Claude Code. Messages (not Chat Completions) API.
- **Release / knowledge:** released 2026-06-30. Knowledge cutoff **January 2026**.
- **IDs:** `claude-sonnet-5` (API/Vertex), `anthropic.claude-sonnet-5` (Bedrock). No API free tier; it is the chat default on claude.ai Free/Pro — chat access, not an API free tier.
- **Context window:** 1,000,000 tokens / 128K max output on the synchronous Messages API (BenchLM 1M).
- **Modalities:** text + image (vision) in; text out. Adaptive thinking always on (extended visible thinking not exposed); effort parameter defaults to high.
- **Pricing (as of 2026-10-09):** $2.00 in / $10.00 out per 1M — launch rate made standard 2026-08-10; the scheduled 2026-09-01 rise to $3/$15 was cancelled.
- **Architecture:** proprietary, parameters undisclosed; proprietary transformer with adaptive thinking.

### Raw benchmarks found

> Anthropic system-card rows (Claude Sonnet 5 System Card PDF, via benchlm.ai, updated 2026-10-09) + Artificial Analysis and Vals AI independent harnesses.

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (Anthropic system card — fills the previously-missing TB row); Vals harness: **74.5%**; Terminal-Bench 3.0: **14.6%** (recalibrated, weak)
- BrowseComp: **84.7%** (Anthropic system card — fills the previously-missing BrowseComp row)
- OSWorld-Verified: **81.2%** (Anthropic system card — fills the previously-missing OSWorld row)
- GDPval-AA: **1603 Elo** (Anthropic system card; near Opus 4.8's 1600, above GPT-5.5's 1494); AA-normalized: **48.3%** (Artificial Analysis)
- AA Agentic Index: **44.3%** (Artificial Analysis via benchlm.ai)
- ApprenticeBench (GUI): **16%** (NeoCognition via benchlm.ai — weak)
- Tau2/Tau3/Claw-Eval/Toolathon: no verified public score found for Sonnet 5 specifically

Reasoning / knowledge:

- HLE: **57.4% with tools** (Anthropic system card — fills the previously-missing HLE); HLE w/o tools: **43.2%**; HLE-Verified: **31.0%** (Google DeepMind comparison table)
- AA-HLE: **41.3%** (Artificial Analysis)
- AA-GPQA Diamond: **91.1%** (AA — clears the 90%+ frontier reference); GPQA Diamond (Vals): **88.9%**
- AA-LCR: **82.0%** (AA long-context-reasoning board — fills the previously-missing LCR); CritPt: **16.9%** (AA)
- LABBench2: **80.1%** (Google DeepMind Gemini 3.8 Flash model-card comparison table)
- Artificial Analysis Intelligence Index: **38.2** (AA via benchlm.ai)
- AA-Omniscience: Index 16.5, accuracy **40.1%**, hallucination rate **39.4%** (benchlm.ai — good honesty)
- MMLU-Pro (Vals): **87.5%** (benchlm.ai)

Coding:

- SWE-bench Verified: **85.2%** (Anthropic system card — fills the previously-missing SWE-V row)
- SWE-bench Pro: **63.2%** (Anthropic system card); SWE Multilingual: **78.3%**; SWE Multimodal: **28.1%**
- SWE-bench (Vals): **79.6%**; LiveCodeBench (Vals): **82.4%** (fills the previously-missing LCB)
- Terminal-Bench 2.1 (coding harness): **80.4%** (system card)
- FrontierCode 1.1 Main: **42.7%** (Cognition); CursorBench 3.2: **61.5%** / CursorBench 4.0: **34.1%** (Cursor evals)
- AA-SciCode: **54.3%** (Artificial Analysis — just under the 55%+ frontier mark); AA Coding Index: **71.5%**
- VulcanBench CII v1: **89.2%** (VulcanBench frontier results, August 2026, via benchlm.ai)

Long context:

- Window: **1M tokens / 128K out**; AA-LCR **82.0%** measured; no MRCR/RULER retrieval at window length verified

Multimodal / vision:

- CharXiv: **88.3%** with tools / **77%** without (system card); AA-MMMU-Pro: **77.3%** (AA); Design Arena Website: **1281** (OpenRouter)

### Normalized scores (1–100)

- **Tool use: 87/100.** Measured agentic package: TB2.1 80.4% (Vals 74.5%), BrowseComp 84.7%, OSWorld-Verified 81.2%, GDPval-AA 1603 Elo (near Opus 4.8) — strong but below the ~1750+ / TB ~88%+ frontier marks; TB3.0 14.6% and ApprenticeBench 16% cap it.
- **Reasoning: 88/100.** HLE 43.2% no-tools / 57.4% with-tools and GPQA 91.1% (AA) clear the frontier references (GPQA 90%+, HLE 40%+ → 90–100); AA-LCR 82.0% and honest 39.4% hallucination rate support it; AA Intelligence Index 38.2 and CritPt 16.9% cap it below 90.
- **Context window: 95/100.** 1M input / 128K output (≥1M tier = 95–100); measured AA-LCR 82.0% is strong but no ≥98% MRCR/RULER retrieval at 512K+ keeps it off the old draft's over-awarded 100.
- **Multimodal: 82/100.** Text + vision in; text-only output; measured CharXiv 88.3% and AA-MMMU-Pro 77.3% corroborate strong vision — top of the +image-in band, below omni-input models.
- **Coding: 88/100.** SWE-bench Verified 85.2% (system card), SWE-Pro 63.2%, LiveCodeBench 82.4% (Vals), TB2.1 80.4%, AA Coding Index 71.5%; AA-SciCode 54.3% just under the 55%+ frontier mark and CursorBench 4.0 34.1% cap it below 90.
- **Cost efficiency: 57/100.** No API free tier and $2/$10 list — mid-priced for 2026 (cheap vs Opus, expensive vs open tiers); the cancelled price hike is a positive signal.
- **Overall Score: 88/100.** Mean of the five quality dims (87 + 88 + 95 + 82 + 88) / 5 = 88.0. Best fit: the default Anthropic production agent — near-Opus agency at mid-tier prices with now-verified benchmark backing; switch to Sonnet 5.5 for 30%+ faster and cheaper on well-scoped work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables citing the Anthropic Claude Sonnet 5 System Card, Artificial Analysis, Vals AI, updated 2026-10-09); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: replaces the provisional 2026-09-18 draft (no benchmark rows, six-dim-mean error) with measured SWE-V 85.2%, TB2.1 80.4%, BrowseComp 84.7%, OSWorld 81.2%, GDPval-AA 1603, HLE 43.2/57.4%, GPQA 91.1%, AA-LCR 82.0% — Context 100→95, Reasoning 84→88, Coding 86→88, Tool 90→87, Overall 83→88.
- Future sources: add a new file next to this one, e.g. `Sonnet_5.6.md`, using the same headings.
