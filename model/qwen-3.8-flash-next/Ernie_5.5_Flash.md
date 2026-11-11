# Qwen3.8 Flash Next — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.8 Flash Next (`qwen-3.8-flash-next`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash Next
- **Short description:** Open-weight experimental preview of the Qwen4 architecture (released 2026-08-26/27): a hybrid-attention MoE with 125B total / 6B active parameters, a Gated DeltaNet + Qwen Sparse Attention stack and a vision encoder.
- **Provider / access:** Self-hosted (`Qwen/Qwen3.8-Flash-Next`, Qwen Community License 1.0), Requesty, TensorX, AMD (free), Vultr, plus ~4 routes.
- **Release / knowledge:** 2026-08-27 (models.dev) / 2026-08-26 (listings); knowledge cutoff not published.
- **IDs:** `qwen-3.8-flash-next`, `Qwen/Qwen3.8-Flash-Next`, `qwen/qwen3.8-flash-next`.
- **Context window:** 262,144 tokens; max output 262,144.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.20 / $0.50 per 1M input/output (Requesty/TensorX); cache read $0.05. The AMD route is free; Vultr lists $0.10/$0.20.
- **Architecture:** open-weight MoE, 125B total / 6B active plus an additional 51B N-gram embedding table; Gated DeltaNet + Qwen Sparse Attention, 4-branch gated residual stream, Muon optimizer (Qwen).

### Raw benchmarks found

Agent / tool use:

- AndroidWorld: **84.5**; CoWorkBench: **73.9**; Toolathlon-Verified: **73.5%**; JobBench: **55.7**
- Agents' Last Exam: **51.2**; OSWorld 2.0: **19.4%** (near-floor)
- Terminal-Bench / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- CharXiv Reasoning: **90.6%** (84.6% without tools); MathVision: **90.6%** (95.7% with Python)
- RealWorldQA: **88.5**; ERQA: **72.3**; LVBench: **76.6**
- HLE / GPQA Diamond / ARC-AGI: no verified public rows published

Coding:

- LiveCodeBench v6: **91.9%** (best verified LCB row in this dataset)
- SWE Multilingual: **81%**; SWE-bench Pro: **62.5%**; DeepSWE: **58.7%**; NL2Repo: **48.1%**
- SWE-bench Verified / FrontierCode: no verified public rows published

Long context:

- 262K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** AndroidWorld 84.5 and CoWorkBench 73.9 are strong, Toolathlon 73.5% solid; OSWorld 2.0 19.4% is near-floor and no Terminal-Bench row was published.
- **Reasoning: 75/100.** Agents' Last Exam 51.2 and JobBench 55.7 are mid; CharXiv 90.6% is visual reasoning rather than abstract; no HLE/GPQA/ARC row exists.
- **Context window: 80/100.** 262,144 tokens — smaller than the 1M Qwen3.8 siblings.
- **Multimodal: 85/100.** Text, image and video in with CharXiv 90.6%, MathVision 90.6% (95.7% with Python), RealWorldQA 88.5 and LVBench 76.6 — strong verified visual evidence.
- **Coding: 80/100.** LiveCodeBench v6 91.9% and SWE Multilingual 81% are excellent, but SWE-bench Pro 62.5%, DeepSWE 58.7% and NL2Repo 48.1% are mid.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M with a free AMD route, open weights and a 6B-active footprint that self-hosts cheaply.
- **Overall Score: 80.0/100.** Best fit for self-hosted multimodal document/visual work at very low cost; not a frontier agent or reasoner.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Qwen3.8-Flash-Next model card and Qwen launch coverage, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.8-Flash-Next — Hugging Face](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Qwen3.8-Flash-Next benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-8-flash-next)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash_Next_v2.md`, using the same headings.