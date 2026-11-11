# Qwen3.7 Plus — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.7 Plus (`qwen-3.7-plus`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7 Plus
- **Short description:** Alibaba's multimodal Qwen workhorse (released 2026-06-02) for long-context agents, visual inputs and coding — the mid-tier Qwen3.7 between Flash and Max.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.7-plus`), OpenRouter, OpenCode Go (`opencode-go/qwen3.7-plus`), LLM Gateway, Kenari, Empirio Labs, plus ~30 routes.
- **Release / knowledge:** 2026-06-02; knowledge cutoff 2025-04 (models.dev).
- **IDs:** `qwen3.7-plus`, `alibaba/qwen3.7-plus`, `qwen/qwen3.7-plus`, `opencode-go/qwen3.7-plus`.
- **Context window:** 1,000,000 tokens (983,616 on some gateways); max output 131,072.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.40 / $1.60 per 1M input/output; cache read $0.08.
- **Architecture:** proprietary/undisclosed (closed-weight Plus tier).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **73.2%**; OSWorld-Verified: **73.3%**; Terminal-Bench 2.0: **70.3%**; Terminal-Bench 2.1 (Vals): **52.8%**
- AndroidWorld: **81.0%**; DeepPlanning: **62.3%**; QwenClawBench: **61.8%**; Claw-Eval: **62.7%**
- OSWorld 2.0: **2.8%** (near-floor); VITA-Bench: **45.6%**; BFCL v4: **72.9%**

Reasoning / knowledge:

- MRCRv2: **91.7%** (strong long-context retrieval)
- MMMU-Pro: **79%**; CritPt: **9.1%** (near-floor)
- HLE / GPQA Diamond / ARC-AGI: no verified public rows published

Coding:

- LiveCodeBench v6: **89.6%**; SWE-bench Verified: **77.7%**; SWE Multilingual: **75.8%**
- SWE-bench Pro: **57.6%**; SciCode: **51.3%**; NL2Repo: **41.1%**
- Terminal-Bench 2.0: **70.3%**; Terminal-Bench 2.1 (Vals): **52.8%**

Long context:

- MRCRv2: **91.7%** — the strongest verified long-context retrieval among Qwen3.7 tiers; 1M window declared

### Normalized scores (1–100)

- **Tool use: 75/100.** OSWorld-Verified 73.3%, MCP Atlas 73.2% and AndroidWorld 81.0% are mid, TB2.0 70.3% decent; OSWorld 2.0 2.8% and TB2.1 (Vals) 52.8% cap it.
- **Reasoning: 72/100.** MRCRv2 91.7% is excellent retrieval but not reasoning; MMMU-Pro 79% mid, CritPt 9.1% near-floor, and no GPQA/HLE/ARC row exists.
- **Context window: 100/100.** 1,000,000 tokens with 131,072 max output, verified by MRCRv2 91.7%.
- **Multimodal: 82/100.** Text, image and video in with MMMU-Pro 79% proving visual reasoning; no public video benchmark row.
- **Coding: 80/100.** LiveCodeBench v6 89.6% and SWE-bench Verified 77.7% are good, SWE Multilingual 75.8% strong; SWE-bench Pro 57.6% and NL2Repo 41.1% are mid.
- **Cost efficiency: 90/100.** $0.40/$1.60 per 1M with $0.08 cache reads.
- **Overall Score: 81.8/100.** Best fit for long-context multimodal agents at low cost; superseded by Qwen3.8 tiers on reasoning.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Alibaba Cloud Model Studio docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.7 Plus — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3.7 Plus benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-7-plus)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus_v2.md`, using the same headings.