# Claude Sonnet 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Sonnet 5 (`anthropic/claude-sonnet-5`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`claude-sonnet-5`, 45 rows) computes an overall **64.87/100 (#37 of 972)** and confirms the corrected evidence set from the 2026-10-11 deep pass; it adds HLE-Verified 31.0%, LABBench2 80.1%, VulcanBench CII 89.2%, ParseBench 62.13%, FrontierMath v2 65.61%/29.27%, MazeBench 0%. **No score change** (Tool 88 / Reasoning 89 / Context 95 / Multimodal 78 / Coding 91 / Cost 65 / Overall 88).

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed: Anthropic docs/pricing — release **2026-06-30**, knowledge cutoff Jan 2026, 1M context / 128K output (300K Batch beta), $2 in / $0.20 cached / $10 out, adaptive thinking default; system-card rows **Terminal-Bench 2.1 80.4%**, **OSWorld-Verified 81.2%**, BrowseComp 84.7%, GDPval-AA 1603 Elo, **SWE-bench Verified 85.2%**, SWE Pro 63.2%, SWE Multilingual 78.3%, GPQA 91.1% (AA) / 88.89% (Vals), HLE 57.4% tools / 43.2% no tools, **AA-LCR 82.0%**, MMMU-Pro 83.01% (Vals) / 77.3% (AA), CharXiv 88.3%; independent **Vibe Code Bench v1.1 81.33%**, LiveCodeBench 82.43%; AA Intelligence Index **38**, Vals Index 51.77%, BenchLM overall 65.92.
> **Conflicts surfaced:** (1) **GPQA Diamond** — the prior file's **96.2% ("rank 1 of 48") is not reproduced**; current sources read **91.1% (AA) / 88.89% (Vals)**, so Reasoning is corrected downward. (2) **SWE-bench Verified** — 85.2% (system card) vs 79.6% (Vals). (3) **Terminal-Bench 2.1** — 80.4% (system card) vs 74.5% (Vals). (4) **MMMU-Pro** — 83.01% (Vals) vs 77.3% (AA). (5) Vals' own index text shows launch-era 68.61% / #3 vs current 51.77%.
> **Adjusted dimension:** Reasoning 91→89 (GPQA correction); Overall 89 → **88**.
> Sources: https://platform.claude.com/docs/en/models/sonnet-5/overview · https://www.anthropic.com/news/claude-sonnet-5 · https://benchlm.ai/models/claude-sonnet-5 · https://www.vals.ai/models/anthropic_claude-sonnet-5 · https://artificialanalysis.ai/models/claude-sonnet-5

## Model card

- **Name:** Claude Sonnet 5 (API id `claude-sonnet-5`; no "Free" tier exists)
- **Short description:** Anthropic's most capable Sonnet-class model and the first Sonnet built explicitly for the agentic era, released 2026-06-30. It closes most of the coding gap to Opus 4.8 while keeping Sonnet's speed and price, and finishes multi-step tasks where Sonnet 4.6 stops short.
- **Provider / access:** Anthropic — Claude API, Claude apps, AWS Bedrock, Microsoft Foundry, Google Cloud Vertex AI; day-one Claude Code and GitHub Copilot access. Closed, API-only, no open weights.
- **Release / knowledge:** Released 2026-06-30; **knowledge cutoff January 2026** (vendor).
- **IDs:** `claude-sonnet-5` (Bedrock `anthropic.claude-sonnet-5`). No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; **max output 128,000 tokens** (300K Batch beta).
- **Modalities:** text, image and file inputs; text output; tool calls; reasoning yes — adaptive thinking default (effort low/medium/high/max/x-high). Real-time cybersecurity safeguards.
- **Pricing (as of 2026-10-11):** $2.00 / 1M in and $10.00 / 1M out, $0.20 cached input; the earlier $3/$15 rate applied after the introductory $2/$10 window closed — the current docs list **$2/$10**. Blended (7:2:1) $1.54 (AA).
- **Architecture:** proprietary, closed; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (system card) / **74.5%** (Vals); Terminal-Bench 3.0 14.6%
- OSWorld-Verified: **81.2%** (system card); BrowseComp 84.7%; ApprenticeBench (GUI) 16%
- GDPval-AA: **1603 Elo / 48.3% normalized**; AA Agentic Index 44.3%; HLE with tools 57.4%
- Tau3-Banking / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91.1% (AA) / 88.89% (Vals)** — the prior 96.2% is not reproduced
- HLE: **57.4% with tools / 43.2% without**; AA-HLE 41.3%; MMLU-Pro 87.55%
- AA-LCR (long-context reasoning): **82.0%**; CritPt 16.9%; AA-Omniscience index 16.5% (hallucination 39.4%)
- Artificial Analysis Intelligence Index: **38 (#66/227)**; Vals Index 51.77%; BenchLM overall 65.92

Coding:

- SWE-bench Verified: **85.2%** (system card) / 79.60% (Vals); SWE-bench Pro 63.2%; SWE Multilingual 78.3%; SWE Multimodal 28.1%
- Vibe Code Bench v1.1: **81.33%** (Vals); LiveCodeBench 82.43%; AA Coding Index 71.5%; AA-SciCode 54.3%
- CursorBench 3.2 61.5% / 4.0 34.1%; FrontierCode 1.1 42.7%; IOI 45.0%

Long context:

- AA-LCR **82.0%** (AA) is the strongest published long-context-reasoning figure; no MRCR/RULER/GraphWalks recall at 1M depth was found, so the million-token window is partly unmeasured.

Multimodal:

- MMMU-Pro **83.01% (Vals) / 77.3% (AA)**; CharXiv 88.3% (77% no tools); Design Arena Website 1281 Elo.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 74.5–80.4%, OSWorld-Verified 81.2%, BrowseComp 84.7%, GDPval-AA 1603 Elo and an AA Agentic Index of 44.3% make it a strong production agent; capped by the system-card/Vals spread and a 7.83 s p95 TTFT.
- **Reasoning: 89/100.** GPQA Diamond 88.9–91.1% and HLE 57.4% with tools are strong, but the prior 96.2% "rank 1" figure is not reproduced, so it is corrected from 91; AA index 38 and CritPt 16.9% cap it.
- **Context window: 95/100.** 1M-token window with 128K output (300K Batch beta) and a strong AA-LCR 82.0%; no full-depth recall benchmark holds it below the top tier.
- **Multimodal: 78/100.** Text, image and file inputs with text output and real-time cybersecurity safeguards; no audio or video input and no media generation.
- **Coding: 91/100.** SWE-bench Verified 79.6–85.2%, SWE-bench Pro 63.2%, Vibe Code Bench 81.33% and LiveCodeBench 82.43% are near-Opus; capped by SWE Multimodal 28.1% and the system-card/Vals spread.
- **Cost efficiency: 65/100.** $2/$10 per 1M (cached $0.20) is mid-tier; the tokenizer's ~30% token inflation erodes the headline rate.
- **Overall Score: 88/100.** Mean of the five quality dims (88+89+95+78+91)/5 = 88.2 → 88. Best fit: high-volume agentic pipelines and coding workflows that need near-Opus behaviour at Sonnet prices.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (Anthropic Sonnet 5 docs + news, BenchLM model page + per-eval results, Vals AI, Artificial Analysis). The anomalous prior GPQA value was replaced with current independent readings; the system-card/Vals spreads are surfaced rather than hidden. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
