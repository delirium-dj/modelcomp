# Qwen3.6 Plus — findings by Ernie 5.5 Flash

- Source: Alibaba Cloud/Qwen3.6 Plus (`qwen-3.6-plus`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6 Plus
- **Short description:** Alibaba's earlier Qwen multimodal workhorse (released 2026-04-02) for million-token agent and document tasks — superseded by Qwen3.7 Plus and the Qwen3.8 family.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.6-plus`), OpenRouter, Vercel, LLM Gateway, Merge Gateway, Empirio Labs, Auriko, plus ~27 routes.
- **Release / knowledge:** 2026-04-02; knowledge cutoff 2025-04 (models.dev).
- **IDs:** `qwen3.6-plus`, `alibaba/qwen3.6-plus`, `qwen/qwen3.6-plus`, `opencode-go/qwen3.6-plus`.
- **Context window:** 1,000,000 tokens (983,616 on some gateways); max output 65,536.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $0.50 / $3.00 per 1M input/output; cache read $0.05 (Merge Gateway lists $0.276/$1.651).
- **Architecture:** proprietary/undisclosed (closed-weight Plus tier).

### Raw benchmarks found

Agent / tool use:

- τ³-Bench (Tool-Agent-User): **70.7**; Claw-Eval: **58.8%**; QwenClawBench: **57.2%**
- Terminal-Bench 2.0: **61.6%**; Terminal-Bench 2.1 (Vals): **53.2%**
- MCP Atlas: **48.2%**; Toolathlon: **39.8%**; VITA-Bench: **44.3%**

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for 3.6 Plus
- BenchLM ranks Multilingual as its strongest category (#4)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench v6: **87.1%**; LiveCodeBench (Vals AI): **86.0%**
- SWE-bench Verified: **78.8%** (Vals **73.4%**); SWE Multilingual: **73.8%**
- SWE-bench Pro: **56.6%**; NL2Repo: **37.9%**; Vibe Code Bench v1.1: **25.56%**

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 65/100.** τ³-Bench 70.7 is mid, TB2.0 61.6% acceptable, TB2.1 (Vals) 53.2% weak; MCP Atlas 48.2% and Toolathlon 39.8% are below the current agent baseline.
- **Reasoning: 65/100.** No public reasoning benchmark exists for 3.6 Plus; the score is derived from its agentic profile — low confidence.
- **Context window: 100/100.** 1,000,000 tokens with 65,536 max output.
- **Multimodal: 80/100.** Text, image and video in; no public multimodal benchmark rows were published for this tier.
- **Coding: 72/100.** LiveCodeBench v6 87.1% and SWE-bench Verified 78.8% are decent, but SWE-bench Pro 56.6%, NL2Repo 37.9% and Vibe Code Bench 25.6% are weak.
- **Cost efficiency: 90/100.** $0.50/$3.00 per 1M with $0.05 cache reads.
- **Overall Score: 76.4/100.** Best fit for cheap long-context document/agent tasks; Qwen3.7 Plus and Qwen3.8 tiers are better at similar prices.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Alibaba Cloud Model Studio docs, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen3.6 Plus — Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [Qwen3.6 Plus benchmarks & sources — BenchLM](https://benchlm.ai/models/qwen3-6-plus)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_Plus_v2.md`, using the same headings.