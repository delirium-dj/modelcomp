# Claude Sonnet 5.5 — findings by Mimo v2.6 Flash

- Source: Anthropic/`anthropic/claude-sonnet-5.5`
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class model for well-scoped everyday work, released 2026-09-28 as a direct upgrade/successor to Claude Sonnet 5 — tuned for building features, fixing bugs and producing polished documents, slides and spreadsheets. **Day-0 report: individual benchmark tables were not yet published at time of writing** (this folder was scaffolded under rule 11 — the `Claude Sonnet 5.5` reporting agent filed its first report elsewhere without owning a model folder).
- **Provider / access:** Anthropic API (Messages), plus Google Vertex, Amazon Bedrock, Azure and Claude Platform on AWS (identical pricing, per OpenRouter provider table); aggregated on OpenRouter as `anthropic/claude-sonnet-5.5` (OpenAI-compatible route). No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-09-28 (OpenRouter release date; BenchLM release timeline; Artificial Analysis page live same day). Knowledge cutoff: not published in sources found.
- **IDs:** `anthropic/claude-sonnet-5.5`; no Zen Free ID bound to this slug.
- **Context window:** 1,048,576 tokens input (1.0M, AA/OpenRouter); max output not published in sources found.
- **Modalities:** text, image in; text out (AA: text+image); reasoning **yes** — thinking is always on, with effort as the depth/latency/cost lever (OpenRouter description); tool calls yes (agentic-loop positioning); JSON mode not confirmed in sources found.
- **Pricing (as of 2026-09-28):** **$2.00 / 1M input, $10.00 / 1M output, $0.20 cached input (90% cache discount)** — identical across Anthropic, Vertex, Bedrock, Azure (OpenRouter); AA cost per Intelligence-Index task **$7.60** (#98/216). No free tier found.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = "no verified public score found"; day-0 coverage is thin by nature.

Agent / tool use:

- Terminal-Bench 4.0: **no verified public score found** — Creative AI News launch coverage (2026-09-28) claims it *beats Claude Opus 5.5 on Terminal-Bench 4.0* but publishes **no number** (provisional qualitative claim only)
- Terminal-Bench 2.1 / Tau3 / Tau2 / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / OSWorld: **no verified public score found** (OpenRouter shows zero benchmark rows for this model on release day)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56, #3 / 216** <(AA v4.3.2, 2026-09-28 — behind Claude Opus 5.5's 58, ahead of Fable 5.1's 53; component weights: AA-Briefcase, GDPval-AA, AutomationBench, TB4.0, SciCode, HLE, GDP.pdf, CritPt, Omniscience, AA-LCR)>
- GPQA Diamond / HLE / LCR / MLCR / CritPt / Omniscience / MMLU-Pro: **no verified public score found** (component values not yet broken out publicly)

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- 1,048,576-token window documented (AA/OpenRouter); MRCR / RULER / GraphWalks retrieval: **no verified public score found**

Multimodal:

- Text + image in (AA); MMMU / MMMU-Pro / MathVision / CharXiv: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 78/100.** Provisional from the AA Intelligence Index #3/216 standing (the index embeds AutomationBench-AA, Terminal-Bench 4.0 and AA-Briefcase) plus Anthropic's agentic-loop positioning; capped by zero published harness numbers on release day.
- **Reasoning: 88/100.** AA Intelligence Index 56 (#3/216, just behind Opus 5.5's 58 and ahead of Fable 5.1's 53) is near-frontier but below the 60+ frontier reference; capped further by the absence of GPQA/HLE component values.
- **Context window: 95/100.** 1,048,576 tokens lands in the ≥1M tier (95–100); not 100 because no long-context retrieval measurement (MRCR/RULER) has been published.
- **Multimodal: 65/100.** Text + image in only (60–70 band); no multimodal benchmark value published.
- **Coding: 82/100.** Day-0 positioning (feature work, bug fixes per OpenRouter; unnumbered "beats Opus 5.5 on Terminal-Bench 4.0" claim per Creative AI News) plus the Index's embedded coding components; capped because no SWE-bench/LiveCodeBench/SciCode number exists yet.
- **Cost efficiency: 74/100.** $2/$10 with a 90% cache discount ($0.20) sits between the methodology's ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors; paid only (no Zen Free ID).
- **Overall Score: 82/100.** Mean of the five quality dims (78 + 88 + 95 + 65 + 82) / 5 = 81.6 → 82; best fit: affordable Sonnet-class daily driver for everyday agentic coding and documents — re-verify once AA publishes component benchmarks.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-28
- Method: public internet research (Artificial Analysis model page + leaderboard, OpenRouter model page and provider table, BenchLM release timeline, Creative AI News launch coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

