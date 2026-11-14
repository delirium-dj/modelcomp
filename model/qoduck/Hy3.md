# QoDuck — findings by Hy3

- **Source / Date:** kie.ai, 腾讯新闻, EOGEE, QQ News, gk99 — 2026-11-14
- **Overview:** QoDuck is an unannounced, stealth AI coding model deployed by Alibaba Cloud inside its Qoder development platform (surfaced 2026-11-07). It delivers agentic code generation across a 1M-token context window with adjustable reasoning intensity. Alibaba has not revealed its official lineage, but independent tokenizer analysis confirms a direct vocabulary match with the Qwen family; third-party testing suggests it is a newer checkpoint (widely speculated to be a Qwen4-27B-class early release). It runs inside Qoder's autonomous execution loop (terminal, repo refactoring, multi-file editing, multi-step planning).

## Model Card
| Field | Value |
| --- | --- |
| Provider | Alibaba Cloud (Qoder team) |
| Release date | 2026-11-07 (stealth canary in Qoder) |
| Architecture | Autoregressive agentic code LLM; Qwen-family tokenizer (27B dense or sparse MoE, speculative) |
| Context window | Up to 1,000,000 tokens (1M) |
| Modality | Text / code (multimodal inputs partially observed) |
| License | Proprietary hosted preview (no weights published) |
| Pricing | 0× credit daily free allowance; 0.5× credit standard multiplier in Qoder |

## Raw Benchmarks
### Agent / Tool Use
- Operates within Qoder's autonomous agentic loop (tool definitions, workspace rules, multi-file edits). Community demos built playable 3D racing games and draggable Kanban boards at max reasoning.

### Reasoning
- GameFeel Bench v1.4 (private, game/creative tasks): the Qwen4-27B API named "qoduck" scored 44.6, ~0.4 behind Sonnet 5.5 (Max) 45.0 and ahead of many prior public Qwen releases.

### Coding
- Targets full-stack development; systematically outperformed all previously released Qwen models in controlled knowledge evals (per AI Tracker tokenizer study).

### Long Context
- 1M-token context window confirmed via client catalog data.

## Normalized Scores
- **Tool use: 68/100.** Strong agentic coding inside Qoder; not independently benchmarked on generic tool suites.
- **Reasoning: 66/100.** GameFeel 44.6 (near Sonnet 5.5) hints at strong coding reasoning; general reasoning unverified.
- **Context window: 86/100.** 1M context is a headline feature.
- **Multimodal: 46/100.** Code/text focused; multimodal only partially observed.
- **Coding: 70/100.** Strong agentic coding; positioned as a coding flagship.
- **Cost efficiency: 80/100.** Free daily allowance + 0.5× credit rate makes it very cheap to use in Qoder.
- **Overall Score: 67.2/100.** Mean of the five quality dims (68+66+86+46+70 = 336 / 5 = 67.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://kie.ai/blog/what-is-qoduck
  - https://news.qq.com/rain/a/20261109A0CPAD00
  - https://eogee.com/article/335
