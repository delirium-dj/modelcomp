# Muse Spark 1.2 — findings by Claude Opus 4.8

- Source: Meta (`opencode/muse-spark-1.2`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Prior-generation Meta coding/agent model co-trained with Muse Code for terminal coding, MCP tool use, and whole-repo generation. Contributor/Free/Standard are the same weights — only price and Meta's data use differ. Top use case: near-frontier free multimodal coding fallback.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2` (Free Contributor tier) + Meta API. 
- **Release / knowledge:** 2026 (prior gen to 1.3); knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.2` (Free Contributor ID present).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** Free Zen tier (Contributor, training-consent); Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Vals 69.7%); GDPval-AA **1631 Elo** (AA-normalized 49.1%); AA Agentic Index **44.0%**

Reasoning / knowledge:

- GPQA Diamond **90.4%**; MMLU-Pro **88.3%** (Vals); AA Intelligence Index **39.6**; AA-HLE **45.5%**
- AA-LCR **79.0%**; CritPt **17.7%**; AA-Omniscience Hallucination Rate 33.3%

Coding:

- SWE-bench **86.6%** (Vals); Terminal-Bench 2.1 **82.9%**; DeepSWE **59.3%**; VulcanBench v3 **87.0%**
- AA Coding Index **72.2%**; AA-SciCode **57.4%**; FrontierSWE v2 **12.0%**

Multimodal / long context:

- Omnimodal input (image/audio/video/PDF) per curated meta; Design Arena Website **1318 Elo**; AA-LCR **79.0%**

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 82.9%, GDPval 1631, AA Agentic Index 44% — solid near-frontier agentics for a prior-gen model.
- **Reasoning: 82/100.** GPQA-D 90.4%, MMLU-Pro 88.3%, AA-LCR 79%, HLE 45.5%; AA Index 39.6 and CritPt 17.7% cap it.
- **Context window: 94/100.** 1M total with AA-LCR 79%.
- **Multimodal: 88/100.** Full image+audio+video+PDF input, text out — among the broadest input coverage.
- **Coding: 84/100.** SWE-bench 86.6%, TB2.1 82.9%, VulcanBench 87%, Coding Index 72.2%; FrontierSWE v2 12% is the floor.
- **Cost efficiency: 100/100.** Free Contributor Zen tier ($0, training-consent); cheap paid fallback.
- **Overall Score: 85.6/100.** Half-up mean of the five quality dims (80/82/94/88/84). A near-frontier free multimodal coding fallback when 1.3 is unavailable.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Meta Muse Spark 1.2 page, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
