# Claude Opus 4.8 — findings by Ernie 5.5 Flash

- Source: Anthropic/Claude Opus 4.8 (`claude-opus-4.8`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** The top Claude Opus tier for the hardest reasoning, coding and long-horizon agents (released 2026-05-28), the pre-Claude-5 flagship. Still a strong coding model, but two generations behind Opus 5.5 on agentic harnesses.
- **Provider / access:** Anthropic API (`claude-opus-4-8`), Amazon Bedrock, Google Vertex (`claude-opus-4-8@default`), plus ~45 gateway routes (OpenRouter, LLM Gateway, Vercel, FastRouter, Unorouter, GmiCloud, AgentRouter).
- **Release / knowledge:** 2026-05-28; knowledge cutoff 2026-01 (models.dev).
- **IDs:** `claude-opus-4-8`, `anthropic/claude-opus-4.8`, `google-vertex/claude-opus-4-8@default`, `opencode/claude-opus-4-8`.
- **Context window:** 1,000,000 tokens total; 128,000 max output.
- **Modalities:** text, image and PDF in; text out; extended thinking and tool calls.
- **Pricing (as of 2026-11-11):** $5.00 / $25.00 per 1M input/output; cache read $0.50. One gateway (Unorouter) lists a $0.425/$2.125 grey-market rate.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- DeepSearchQA: **93.1%**; MCP Atlas: **82.2%**; OSWorld-Verified: **83.4%**
- Terminal-Bench 2.1: **74.6%** (Vals AI run **71.9%**); Terminal-Bench 3.0: **21.1%**; Terminal-Bench 4.1: **23.60%**
- Toolathlon: **59.9%**; BrowseComp: **84.3%**; Finance Agent v2: **53.9%**
- OSWorld 2.0: **20.6%**; ResearchClawBench: **21.1%**; Gert Labs composite: **72.97**

Reasoning / knowledge:

- BenchLM ranks Mathematics as its strongest category (#1) — the top math rank in this dataset
- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for 4.8
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **88.6%** (Vals AI run 88.6%); SWE Multilingual: **84.4%**; SWE-bench Multimodal: **38.4%**
- SWE-bench Pro: **69.2%**; LiveCodeBench (Vals AI): **87.8%**; VulcanBench v3: **87.0%**
- CursorBench 3.2: **62.3%** / cursorBench31: **58.4%**; FrontierCode 1.1 Main: **46.5%**; FrontierCode 2.0: **14.7%**
- PostTrainBench v1.1: **32.9%**

Long context:

- 1M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 82/100.** DeepSearchQA 93.1%, OSWorld-Verified 83.4% and MCP Atlas 82.2% are strong, but Terminal-Bench 3.0/4.1 (21.1/23.6%) and OSWorld 2.0 20.6% show it cannot run the modern harnesses.
- **Reasoning: 88/100.** BenchLM's #1 mathematics rank is the headline; with no public HLE/GPQA/FrontierMath rows the number itself is unpublished, so this is a rank-derived score.
- **Context window: 100/100.** 1,000,000 tokens with 128,000 max output.
- **Multimodal: 70/100.** Text, image and PDF input only; SWE-bench Multimodal 38.4% suggests image-grounded coding is weak.
- **Coding: 85/100.** SWE-bench Verified 88.6% and LiveCodeBench 87.8% remain strong, but FrontierCode 2.0 14.7% and SWE-bench Pro 69.2% are well behind Opus 5.5 (89.9% / 45.5%).
- **Cost efficiency: 45/100.** $5/$25 per 1M — the same price as Opus 5, which beats it on every measured axis.
- **Overall Score: 85.0/100.** Best fit for legacy Claude pipelines and math-heavy work; there is no reason to choose it over Opus 5.5 at a lower price.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Anthropic model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Opus 4.8 — Anthropic model overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
  - [Claude Opus 4.8 benchmarks & sources — BenchLM](https://benchlm.ai/models/claude-opus-4-8)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.8_v2.md`, using the same headings.