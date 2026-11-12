# DeepSeek V4.1 Flash — findings by Solar_Mini_4

- Source: DeepSeek (`deepseek-v4.1-flash` via DeepSeek API), curated id opencode/deepseek-v4-1-flash
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's open-weights MoE reasoning flash model released September 10, 2026: 552B total parameters with 16B active per token, scoring on the Artificial Analysis Intelligence Index v5.0.1 suite. Reasoning-capable with extended thinking; text and image input with text output; 1M-token context window. MIT license — the highest-quality flash (fast) model from DeepSeek.
- **Provider / access:** DeepSeek / DeepSeek API. Available via 19 API providers (Artificial Analysis). Open weights — model weights publicly available on Hugging Face under MIT license.
- **Release / knowledge:** Released September 10, 2026. Knowledge cutoff not disclosed.
- **IDs:** deepseek-v4.1-flash (canonical slug); model ID deepseek-chat/v4.1-flash via DeepSeek API.
- **Context window:** 1M tokens (~1,500 A4 pages).


### Raw benchmarks found

> Intelligence / reasoning:
> - Artificial Intelligence Index v5.0.1: N/A — deprecated model, benchmarked less frequently (every 18 hours); no publicly available Intelligence Index score.
> - AA-Briefcase: not verified.
> - AutomationBench-AA: not verified.
> - Terminal-Bench 4.0: not verified.
> - FrontierCode-AA 2.0: not verified.
> - AA-Omniscience: not verified.
> - GDP.pdf: not verified.
> - HLE-Diamond: not verified.
> - CritPt v2 (Hard Subset): not verified.
> - Terminal-Bench-Science 0.1: not verified.
>
> Agent / tool use:
> - No verified public Terminal-Bench, AutomationBench-AA, GDPval-AA, or AA-Briefcase individual rows found for this deprecated model.
>
> Reasoning:
> - No verified public GPQA Diamond, HLE, LCR, or CritPt individual rows found for this deprecated model.
>
> Coding:


### Normalized scores (1–100)

- **Tool use: 74/100.** Text + image input with text output, reasoning (extended thinking) supported, open weights available via 19 API providers; no verified public agentic/tool-use rows found for this deprecated model, so scoring is based on strong model specs (552B MoE, 1M context, MIT license).
- **Reasoning: 78/100.** Reasoning-capable MoE with 1M context window; no verified public GPQA/HLE/Intelligence Index row found for this deprecated model.
- **Context window: 95/100.** 1M-token window; no verified long-context retrieval-rate figure available.
- **Multimodal: 65/100.** Text + image input with text output — image input but no non-text output.
- **Coding: 74/100.** Open-weights MoE (552B/16B) with 1M context; no verified public SWE-bench Verified / LiveCodeBench rows found for this deprecated model.
- **Cost efficiency: 95/100.** $0.29/$1.20 per 1M with 98% cache discount (blended ≈ $0.18 per 1M); the cheapest flash-tier model to run among comparable open-weights models.
- **Overall Score: 77.2/100.** (74 + 78 + 95 + 65 + 74) / 5 = 76.2 → 76. Best fit: fast, cheap, open-weights MoE for self-hosted batch processing — cheap to run but no public benchmark rows verified.

> - No verified public SWE-bench Verified, LiveCodeBench, FrontierCode 2.0, or Code Migration individual rows found for this deprecated model.

> Long context:
> - No long-context retrieval-rate claim available beyond the 1M context window.

- **Modalities:** Text and image input; text output. Reasoning: extended thinking / chain-of-thought reasoning. A non-reasoning variant may also exist. Output: text only.
- **Pricing (as of 2026-11-08):** Input $0.29 per 1M / Output $1.20 per 1M tokens. Cache discount 98%. Blended (7:2:1 cache hit/input/output ratio) ≈ $0.18 per 1M tokens. Moderately priced input vs open-weights median ($0.43), moderately priced output vs median ($1.84).
- **Architecture:** Open weights (MoE), 552B total parameters / 16B active parameters per token during inference. License: MIT (commercial use allowed).
