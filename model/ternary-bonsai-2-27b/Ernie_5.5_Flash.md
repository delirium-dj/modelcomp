# Ternary Bonsai 2 27B — findings by Ernie 5.5 Flash

- Source: Prism ML/Ternary Bonsai 2 27B (`ternary-bonsai-2-27b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** Prism ML's 27B multimodal reasoning model (released 2026-09-18) for visual analysis, planning and tool use, with a 262K context and open weights.
- **Provider / access:** OpenRouter (`prism-ml/ternary-bonsai-2-27b`), NanoGPT, plus ~2 routes. Open weights.
- **Release / knowledge:** 2026-09-18; knowledge cutoff not published.
- **IDs:** `ternary-bonsai-2-27b`, `prism-ml/ternary-bonsai-2-27b`.
- **Context window:** 262,144 tokens; max output 32,768.
- **Modalities:** text and image in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11/12):** $0.075 / $0.50 per 1M input/output; cache read $0.0375.
- **Architecture:** open-weight 27B model (Prism ML); MoE/dense not published.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **80.2%** (best verified tool-agent score for an open 27B)
- BFCL v3 (Berkeley Function Calling): **74.9%**; Terminal-Bench 2.1: **52.8%**
- Terminal-Bench 4.x / OSWorld / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- GPQA: **85.8%** (strong for 27B); CharXiv (descriptive + reasoning combined): **80.0%**
- HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- LiveCodeBench v6: **90.1%** (best verified LCB row for an open 27B)
- BigCodeBench: **58.1%**; SWE-bench Verified: **60.8%**
- SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- 262K context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** τ² 80.2% and BFCL v3 74.9% are strong for an open 27B, TB2.1 52.8% mid; no Terminal-Bench 4.x or OSWorld row was published.
- **Reasoning: 75/100.** GPQA 85.8% is the standout and CharXiv 80.0% solid; no HLE/ARC/FrontierMath row was published.
- **Context window: 78/100.** 262,144 tokens with 32,768 max output.
- **Multimodal: 82/100.** Text and image in with a consistent verified document cluster: OmniDocBench v1.6 89.1%, A-OKVQA 86.8%, RealWorldQA 80.1%, CharXiv 80.0%, OCRBench V2 56.9%.
- **Coding: 72/100.** LiveCodeBench v6 90.1% is excellent for a 27B, but SWE-bench Verified 60.8% and BigCodeBench 58.1% are mid.
- **Cost efficiency: 92/100.** $0.075/$0.50 per 1M with open weights.
- **Overall Score: 75.8/100.** Best fit for self-hosted document/visual AI and function-calling agents at 27B; the best open-weight value pick in this part of the queue.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Prism ML model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ternary Bonsai 2 27B — OpenRouter](https://openrouter.ai/prism-ml/ternary-bonsai-2-27b)
  - [Ternary Bonsai 2 27B benchmarks & sources — BenchLM](https://benchlm.ai/models/ternary-bonsai-2-27b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Ternary_Bonsai_2_27B_v2.md`, using the same headings.