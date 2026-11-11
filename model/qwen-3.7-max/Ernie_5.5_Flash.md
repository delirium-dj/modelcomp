# Qwen3.7 Max — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.7 Max (`qwen-3.7-max`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Max
- **Short description:** Alibaba's Qwen frontier model (released 2026-05-21) tuned for agent frameworks, coding assistants and long tasks, with a 1M context. Superseded by Qwen3.8 Max.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.7-max`), OpenRouter, DeepInfra, GmiCloud, LLM Gateway, Empirio Labs, plus ~31 routes.
- **Release / knowledge:** 2026-05-21; knowledge cutoff not published.
- **IDs:** `qwen-3.7-max`, `alibaba/qwen-3.7-max`, `qwen/qwen3.7-max`.
- **Context window:** 1,000,000 tokens (256,000 on DeepInfra); max output 131,072.
- **Modalities:** text in / text out only (models.dev); reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.50 / $7.50 per 1M input/output; cache read $0.50 (LLM Gateway lists $1.25/$3.75).
- **Architecture:** proprietary/undisclosed (closed-weight Max tier).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%**; SWE-bench (Vals AI): **68.8%**
- Terminal-Bench 2.1 / 4.x / MCP-Atlas / Toolathlon: no verified public rows published

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for 3.7 Max
- BenchLM ranks Multilingual as its strongest category (#1)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench v6: **91.6%**; LiveCodeBench (Vals AI): **87.1%**; SWE-bench Verified: **80.4%**
- SWE-bench Pro: **60.6%**; SciCode: **53.5%**; OpenHarmony Bench v1.0: **53.4%**

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2.0 69.7% and SWE-bench (Vals) 68.8% are mid; no Terminal-Bench 4.x, OSWorld or Toolathlon row was published.
- **Reasoning: 65/100.** No public reasoning benchmark exists for 3.7 Max; the score is derived from its #1 multilingual rank — low confidence.
- **Context window: 100/100.** 1,000,000 tokens with 131,072 max output.
- **Multimodal: 15/100.** Text-only (models.dev: text in / text out).
- **Coding: 80/100.** LiveCodeBench v6 91.6% is the best verified coding row in the Qwen3.7 family, SWE-bench Verified 80.4% strong; SWE-bench Pro 60.6% is mid.
- **Cost efficiency: 82/100.** $2.50/$7.50 per 1M.
- **Overall Score: 66.0/100.** Best fit for text-only coding at 1M context; the text-only modality keeps the Overall far below Qwen3.8 Max, which is the better buy.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Alibaba Cloud Model Studio docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.7 Max — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3.7 Max benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-7-max)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Max_v2.md`, using the same headings.