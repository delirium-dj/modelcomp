# Claude Opus 5.5 — findings by Mimo v2.6 Flash

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5-family frontier model (2026-09-22), matching Claude Fable 5.1 on most work at ~40% lower cost than Opus 5; aimed at long-horizon agentic coding, computer use, and professional knowledge work. Not a variant/alias of another entry.
- **Provider / access:** Anthropic Claude API (`claude-opus-5-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry — Chat Completions–style Messages API.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff June 2026 (system card).
- **IDs:** `anthropic/claude-opus-5-5` (API id `claude-opus-5-5`); no OpenCode Zen Free ID found — paid only.
- **Context window:** 1M input / 128K max output (batch beta 300K out) — Anthropic release + llm-stats.
- **Modalities:** text/image in; text out; adaptive thinking always on (efforts medium→xhigh/max); tool calls; no public JSON-mode claim beyond structured tool use.
- **Pricing (as of 2026-09-24):** $4 / $20 per 1M in/out; cache read $0.20; cache write $5 (5m) / $8 (1h); batch 50% off — Anthropic + AA. Paid; no free tier ID.
- **Architecture:** proprietary; params not disclosed.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh, Claude Code harness, ±2.6 pts; SOTA vs Fable 5.1 55.8 / Opus 5 52.3)
- AutomationBench: **40.0%** (Zapier via Anthropic, no-fallback run; AA AutomationBench-AA also lists Opus 5.5 among leaders)
- GDPval-AA v2.1: **1846 Elo** (Anthropic/AA; +111 over Fable 5.1 — knowledge-work lead)
- OSWorld 2.0: **81.8% partial / 48.7% strict** (Anthropic announcement / system card)
- AA-Briefcase v1.1: **1822 Elo** (Artificial Analysis; +143 over Fable 5.1)
- Tau3-Banking / Toolathon / Claw-Eval: **no verified public score found** (Toolathlon Verified listed in system card §8.14.5 but absolute value not in launch table)

Reasoning / knowledge:

- Humanity's Last Exam: **67.7% with tools** / 64.4% no tools (Anthropic; AA reports 61.4% under its harness — prior best)
- Artificial Analysis Intelligence Index: **58** at max effort (Artificial Analysis, 2026-09-22 — highest measured, several points clear of prior best)
- SciCode: **66.9%** (AA; prior best 63.1% Fable 5.1)
- GPQA Diamond / HLE no-tools official row: HLE-with-tools 67.7% as above; GPQA **no verified public score found** in launch materials
- CritPt / AA-LCR: AA notes Opus 5.5 remains behind leaders on CritPt, AA-LCR, GDP.pdf — absolute values **no verified public score found** in launch pack

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card)
- SWE-bench Multilingual: **93.9%** (system card)
- DeepSWE v1.1: **74.2%** (system card)
- FrontierCode v1.1 Main: **54.4%** max / 54.6% medium (Anthropic; beats GPT-6 Astra 53.3)
- CursorBench 4.0: **57.8%** max / 52.5% medium (Anthropic; SOTA per launch)
- FrontierSWE v2: **62.3%** (system card, Proximal harness)
- Terminal-Bench-Science 0.1: **58.7%** (Anthropic, ±3.5–5 pts)

Long context:

- 1M window documented; ProgramBench long-context results in system card §8.10 — absolute MRCR/RULER retrieval figure **no verified public score found** in launch pack

Multimodal:

- Chartography (with tools): **89.0%** (Anthropic); without tools 64.4% (card)
- OSWorld 2.0 computer use as above; BenchCAD in system card — absolute **no verified public score found** in launch table

### Normalized scores (1–100)

- **Tool use: 95/100.** TB4.0 66.4% SOTA, GDPval 1846 Elo SOTA, AutomationBench 40%, OSWorld 81.8% partial — capped just short of 100 by missing Tau3/Toolathon public rows and safeguard fallbacks on some harness runs.
- **Reasoning: 96/100.** AA Intelligence Index 58 (highest measured) and HLE-with-tools 67.7% lead the field; capped by AA noting regressions vs leaders on CritPt/AA-LCR and no GPQA row in the launch pack.
- **Context window: 97/100.** 1M input / 128K out meets the ≥1M tier (95–100); not 100 because long-context retrieval quality (MRCR/RULER-style) is not published in the launch pack.
- **Multimodal: 85/100.** Text/image in with strong computer-use and chart scores (OSWorld 81.8 partial, Chartography 89); capped by text-only output, no native audio/video I/O, and strict OSWorld 48.7%.
- **Coding: 96/100.** SWE-Pro 89.9%, DeepSWE 74.2%, TB4 66.4% SOTA, FrontierCode/CursorBench leads — capped only by harness SE (±2.6 on TB4) and safeguard-induced fallbacks Anthropic says lower some scores.
- **Cost efficiency: 58/100.** $4/$20 list with $0.20 cache reads and claimed ~40% lower cost-per-task than Opus 5; still an expensive Opus-tier token price (methodology anchors: ~$3/$15 ≈ 60).
- **Overall Score: 93.8/100.** Mean of Tool 95 + Reasoning 96 + Context 97 + Multimodal 85 + Coding 96 = 469/5 = 93.8 — best-fit for frontier long-horizon agentic coding and knowledge work when budget allows Opus-tier pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-24
- Method: public internet research (Anthropic release page + system card, Artificial Analysis launch article, llm-stats/CodingFleet/Tabbit summaries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
