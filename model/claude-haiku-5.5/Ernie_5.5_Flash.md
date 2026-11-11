# Claude Haiku 5.5 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Haiku 5.5 (`claude-haiku-5.5`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fast Claude (released 2026-10-07) for responsive assistance, classification and lightweight agents — the cheapest Claude 5 tier with a 1M context.
- **Provider / access:** Anthropic API (`claude-haiku-5-5`), Amazon Bedrock, Google Vertex (`claude-haiku-5-5@default`), OpenCode Go, plus ~30 gateway routes (AI/ML API, LLM Gateway, Vercel, Prime, Merge).
- **Release / knowledge:** 2026-10-07; knowledge cutoff 2026-06 (models.dev).
- **IDs:** `claude-haiku-5-5`, `anthropic/claude-haiku-5.5`, `google-vertex/claude-haiku-5-5@default`, `opencode-go/claude-haiku-5-5`.
- **Context window:** 1,000,000 tokens total; 128,000 max output.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $0.10 / $0.50 per 1M input/output; cache read $0.01 — the cheapest Claude route in this dataset.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **39.20%**; Agents' Last Exam (Linux subset): **57.0%**
- OSWorld 2.1 offline subset (82 tasks): **72.4%**; Hermes Bench: **71.0%**; Hermes Index: **37.0**
- CursorBench 4.0: **48.4%**; FrontierSWE v2: **43.8%**; FrontierCode 2.0: **27.7%**; Bug Hunt Bench: **21.5 fixes**
- MazeBench: **1%**

Reasoning / knowledge:

- HLE with tools: **57.4%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for Haiku 5.5

Coding:

- FrontierCode 1.1 Main: **46.4%**; CursorBench 4.0: **48.4%**
- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 2.1 offline 72.4%, Hermes Bench 71.0 and Agents' Last Exam (Linux) 57.0 are respectable for a Haiku; TB4.0 39.2% and MazeBench 1% cap it.
- **Reasoning: 72/100.** HLE 57.4% with tools is the only verified reasoning row and it is mid; no GPQA/ARC/FrontierMath publication.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output — unusual for a Haiku-class model.
- **Multimodal: 70/100.** Text, image and PDF in only; no public multimodal benchmark rows.
- **Coding: 70/100.** FrontierCode 1.1 46.4% and CursorBench 4.0 48.4% are mid, FrontierCode 2.0 27.7% weak; no SWE-bench or LiveCodeBench row was published.
- **Cost efficiency: 100/100.** $0.10/$0.50 per 1M with $0.01 cache reads — the cheapest frontier-lab route in this dataset.
- **Overall Score: 78.0/100.** Best fit for high-volume classification, extraction and lightweight agents where 1M context and Claude safety matter more than peak quality.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Haiku 5.5 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Haiku 5.5 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-haiku-5-5)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.5_v2.md`, using the same headings.