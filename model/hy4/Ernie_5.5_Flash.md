# Hy4 — findings by Ernie 5.5 Flash

- Source: Tencent/Hy4 (`hy4`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4
- **Short description:** Tencent's Hy reasoning model (released 2026-11-04) for coding, instruction following and agent tasks, with a 1M context and image input.
- **Provider / access:** Tencent Cloud (`hy4`), OpenRouter (`tencent/hy4`), OpenCode Go (`opencode-go/hy4`), Tencent token plans, CrossModel, Chutes, plus ~7 routes.
- **Release / knowledge:** 2026-11-04; knowledge cutoff not published.
- **IDs:** `hy4`, `tencent/hy4`, `tencent/Hy4` (Hugging Face).
- **Context window:** 1,048,576 tokens (983,010 input); max output 65,536.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.417 / $1.2505 per 1M input/output; cache read $0.021 (OpenRouter). Tencent/OpenCode Go list $0.834/$2.501, CrossModel $0.96/$2.88.
- **Architecture:** proprietary/undisclosed (Tencent Hy line; the earlier Hy3 and Hy3-Preview are separate tracked models).

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1 (all 108 tasks): **78.9%** (best verified computer-use row for a Tencent model)
- APEX-Agents: **75.2%**; AutomationBench: **56.2%**; Terminal-Bench 4.0: **44.40%**
- Agents' Last Exam: **41.0%**; Terminal-Bench-Science 0.1: **19.8%** (weak)

Reasoning / knowledge:

- HLE with tools: **59.1%** (mid-frontier)
- ZeroBench (with Python): **55.4%**; MMMU-Pro: **78.6%**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- DeepSWE: **74.9%** (best verified coding row)
- FrontierCode 2.0: **31.0%**; sweMarathon: **43.8%**; ProgramBench: **30.0%**; PostTrainBench v1.2: **35.2%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 2.1 78.9% and APEX-Agents 75.2% are strong for a first-generation Hy reasoning model, AutomationBench 56.2% mid; TB4.0 44.4% and TB-Science 19.8% cap it.
- **Reasoning: 75/100.** HLE 59.1% with tools is mid-frontier and ZeroBench 55.4% solid; no GPQA/ARC/FrontierMath row was published.
- **Context window: 100/100.** 1,048,576 tokens with 983,010 input and 65,536 max output.
- **Multimodal: 80/100.** Text and image in with MMMU-Pro 78.6% proving document/chart work; no public video/audio row.
- **Coding: 80/100.** DeepSWE 74.9% is the best verified coding row in the Tencent line, but FrontierCode 2.0 31.0%, ProgramBench 30.0% and PostTrainBench 35.2% are weak.
- **Cost efficiency: 92/100.** $0.417/$1.2505 per 1M with $0.021 cache reads — aggressive for a 1M-context reasoning model.
- **Overall Score: 82.6/100.** Best fit for cost-sensitive computer-use and document agents at 1M context; a promising first Hy release, but verify coding on your own repo tasks.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Tencent Hy model card, BenchLM model profile, models.dev catalog, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hy4 — Tencent / Hugging Face](https://huggingface.co/tencent/Hy4)
  - [Hy4 benchmarks & sources — BenchLM](https://benchlm.ai/models/hy4)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Hy4_v2.md`, using the same headings.