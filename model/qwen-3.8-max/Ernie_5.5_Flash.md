# Qwen3.8 Max — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.8 Max (`qwen-3.8-max`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's 2.4-trillion-parameter MoE flagship (released 2026-08-03) for coding, professional work, multimodal understanding and long-horizon agentic workflows.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.8-max`), OpenRouter (`qwen/qwen3.8-max`), OpenCode Go (`opencode-go/qwen3.8-max`), DeepInfra, GmiCloud, Empirio Labs, plus ~38 routes.
- **Release / knowledge:** 2026-08-03 (models.dev); knowledge cutoff not published.
- **IDs:** `qwen3.8-max`, `alibaba/qwen3.8-max`, `qwen/qwen3.8-max`, `opencode-go/qwen3.8-max`.
- **Context window:** 1,000,000 tokens (Alibaba/OpenRouter routes); some gateways cap at 262,144 (GmiCloud) or 256,000 (DeepInfra). Max output 131,072.
- **Modalities:** text, image, video and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.00 / $6.00 per 1M input/output; cache read $0.25. Alibaba's own Model Studio rates are lower in CNY.
- **Architecture:** sparse MoE, ~2.4T total parameters (Alibaba); closed weights on the Max tier.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **86.1%**; Toolathlon-Verified: **72.5%**; Terminal-Bench 2.1: **86.6%** (Vals **67.4%**)
- Agents' Last Exam: **52.4%**; CoWorkBench: **74.8%**; JobBench: **53.4%**; AutomationBench: **27.3%**
- PaperBench: **93.0%** (best verified research-paper row)

Reasoning / knowledge:

- Humanity's Last Exam with tools: **56.2%**
- MLS-Bench Lite: **41.0%**; OpenHarmony Bench v1.0: **60.8%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- LiveCodeBench (Vals AI): **87.9%**; SWE-bench (Vals AI): **85.6%**; VulcanBench v3: **81.2%**
- SWE-bench Pro: **67.7%**; FrontierSWE: **73.5%**; DeepSWE: **56.6%**; NL2Repo: **55.9%**
- FrontierSWE v2: **15.8%**; ScarfBench: **63.7%**; Bug Hunt Bench: **25.7 fixes**

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld-Verified 86.1%, TB2.1 86.6% and Toolathlon 72.5% are strong; AutomationBench 27.3% and the missing modern-harness rows cap it.
- **Reasoning: 78/100.** HLE 56.2% with tools is mid-tier for a 2026 flagship, PaperBench 93.0% is excellent for research work; no GPQA/ARC/FrontierMath publication leaves a gap.
- **Context window: 100/100.** 1,000,000 tokens with 131,072 max output (gateway-dependent).
- **Multimodal: 80/100.** Text, image, video and PDF in — broader than most — but no public video/image benchmark rows were published.
- **Coding: 82/100.** LiveCodeBench 87.9% and SWE-bench (Vals) 85.6% are good, SWE-bench Pro 67.7% solid, but DeepSWE 56.6% and FrontierSWE v2 15.8% are weak.
- **Cost efficiency: 90/100.** $2/$6 per 1M undercuts every Western frontier model at comparable capability.
- **Overall Score: 84.4/100.** Best fit for cost-sensitive multimodal and agentic work, especially research-paper synthesis; a poor choice for deep-repo autonomous coding.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Alibaba Cloud Model Studio docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.8 Max — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3.8 Max benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-8-max)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max_v2.md`, using the same headings.