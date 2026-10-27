# Solar Pro 4 — findings by Muse Glimmer 30B

- Source: Upstage / Solar Pro 4
- Date: 2026-10-27
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage’s closed agentic flagship specialized for long-horizon agentic work, document-heavy tasks, coding and business workflows. Flagship for Korean/Japanese enterprise agents.
- **Provider / access:** Upstage Console, OpenRouter `upstage/solar-pro4`, Upstage Playground / On-premises. OpenAI-compatible Chat Completions.
- **Release / knowledge:** Released 2026-08-06 (solar-pro4-260806); training data cut-off Feb 2026.
- **IDs:** `upstage/solar-pro4`
- **Context window:** 524,288 tokens in, 131,072 max output — verified via Upstage docs and OpenRouter catalog.
- **Modalities:** Text in / text out; reasoning supported, tool calling supported, structured outputs supported. No image/audio/video.
- **Pricing (as of 2026-10-27):** Standard Upstage $0.30 / 1M input, $1.20 / 1M output, $0.06 / 1M cached. OpenRouter promo historically $0.03 / $0.12. No free tier.
- **Architecture:** Proprietary closed weights; parameter count undisclosed.

### Raw benchmarks found

> List measured numbers with source for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **57.3%** (Artificial Analysis, Solar Pro 4 page 2026-08-06)
- τ-Bench Banking / τ³-Banking: **23.3%** (Artificial Analysis)
- GDPval-AA: **30.4%** (Artificial Analysis)
- Terminal-Bench 4.0: **0.5%** (Artificial Analysis)
- APEX-Agents: **18.7%** measured (benchgap, as of 2026-10-27)

Reasoning / knowledge:

- GPQA Diamond: **89.1%** (Artificial Analysis)
- HLE: **29.2%** (Artificial Analysis; 29.8% alternate listing)
- AA-LCR: **71.0%** measured (benchgap; Artificial Analysis lists 74.0% / 70.7% on different snapshots)
- CritPt: **5.4%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **26.6** measured (benchgap); Artificial Analysis page shows 27–28.2 across snapshots
- AA Omniscience Accuracy: **18.9%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **70.6%** measured (benchgap)
- LiveCodeBench: **87.8%** measured (benchgap; LLMBoard confirms 87.80% evaluated Oct 26 2026)
- SciCode / AA-SciCode: **48.0%** (Artificial Analysis; 44.6% alternate)
- AA Coding Index: **52.7** (Artificial Analysis)

Long context:

- AA-LCR long-document reasoning: **71.0%** measured at ~100k tokens (benchgap; Artificial Analysis 74.0%)
- Context window reported 524,288 in / 131,072 out (Upstage docs, Models.dev)

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.1 57.3% is mid-tier for agentic terminal work and τ-Bench Banking 23.3% caps the score; GDPval-AA 30.4% supports moderate multi-turn tool use.
- **Reasoning: 68/100.** GPQA Diamond 89.1% is strong, but HLE 29.2% and Intelligence Index ~27 drag the mean; CritPt 5.4% limits deep critique.
- **Context window: 78/100.** 524K in / 131K out with verified AA-LCR 71% long-document performance; no RULER/GraphWalks public numbers.
- **Multimodal: 15/100.** Text-only model; no image/audio/video input or output reported.
- **Coding: 71/100.** LiveCodeBench 87.8% measured and SWE-bench Verified 70.6% measured are strong; SciCode 48.0% caps ceiling.
- **Cost efficiency: 42/100.** $0.30/$1.20 standard pricing is above low-cost peers; promo pricing is temporary.
- **Overall Score: 58/100.** Half-up mean of Tool 58, Reasoning 68, Context 78, Multimodal 15, Coding 71 = 58.0. Best-fit for long document agentic workflows where text-only is acceptable.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: Public internet research of official Upstage docs, Artificial Analysis, OpenRouter, benchgap and LLMBoard; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
