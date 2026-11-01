# Claude Haiku 4.5 — findings by GPT 6 Sol

- Source: Anthropic (`claude-haiku-4-5-20251001`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5.
- **Short description:** Anthropic's fast small Claude for coding assistance, subagents and low-latency tasks. Extended-thinking and non-thinking runs use **one pinned model**, not separate `Thinking` weights ([Anthropic exact-model reference](https://platform.claude.com/docs/en/models/haiku-4-5/overview)).
- **Provider / access:** Anthropic Messages API `claude-haiku-4-5-20251001`; convenience alias `claude-haiku-4-5` points to that snapshot. Also offered on Bedrock and Google Cloud under their own platform IDs. **Officially active (legacy)** as of this review, despite [Artificial Analysis labelling its historical evaluation deprecated](https://artificialanalysis.ai/models/claude-4-5-haiku); prefer Anthropic's [lifecycle list](https://platform.claude.com/docs/en/about-claude/model-deprecations) for API status.
- **Release / knowledge:** October 15, 2025; reliable knowledge through February 2025, training data through July 2025 ([Anthropic model page](https://platform.claude.com/docs/en/models/haiku-4-5/overview)).
- **IDs:** `anthropic/claude-haiku-4-5-20251001`; no separate free checkpoint or open weights.
- **Context window:** 200,000 combined tokens; up to 64,000 output ([Anthropic model page](https://platform.claude.com/docs/en/models/haiku-4-5/overview)).
- **Modalities:** Text and images in, text out; native tools and optional *manual* extended thinking with `budget_tokens`, **not** adaptive effort. No native audio/video input listed ([Anthropic model page](https://platform.claude.com/docs/en/models/haiku-4-5/overview)).
- **Pricing (as of 2026-11-01):** First-party $1 input / $5 output / $0.10 cache read per million tokens; 5-minute cache writes $1.25 and batch input/output discounted 50% ([Anthropic pricing table](https://platform.claude.com/docs/en/models/haiku-4-5/overview)).
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

- **Agent / tool use:** Anthropic [Terminal-Bench **40.21%** without thinking vs **41.75%** with 32K thinking budget, using Terminus 2 and different run counts](https://www.anthropic.com/news/claude-haiku-4-5). [Vals Terminal-Bench **2.1 43.82% ±1.95**](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking) uses its own thinking setup; do not treat the launch result as Terminal-Bench 2.1. Independent [NextSearch-1-XS comparison](https://huggingface.co/NextTokenAI/NextSearch-1-XS) lists Haiku at **0.670 DeepSearchQA** and **0.864 WideSearch-sub** in its own search-agent harness.
- **Reasoning:** [Vals thinking GPQA Diamond **72.22% ±2.47**, MMLU-Pro **78.72% ±0.48**](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking). These are not direct-response results; different budgets change performance and latency.
- **Coding:** Anthropic [SWE-bench Verified **73.3%**](https://www.anthropic.com/news/claude-haiku-4-5) averaged over 50 full-set trials in its bash/edit scaffold with a custom prompt and 128K thinking budget. [Vals SWE-bench **66.60% ±2.11**, LiveCodeBench **41.17% ±1.11**, Vibe Code Bench v1.1 **11.39% ±3.13**](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking); these use different tasks/harnesses and put a limit on generalizing vendor SWE results.
- **Long context:** 200K advertised; no independently verified exact-ID MRCR or near-limit retrieval percentage located. Do not infer effective retrieval from capacity alone.
- **Vision:** [Vals MMMU-Pro **46.07% ±1.20**](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking); text-only output and no claimed audio/video modality.

### Normalized scores (1–100)

- **Tool use: 69/100.** Useful independent search-agent results and ~44% Terminal-Bench 2.1, but narrower than top-tier agents.
- **Reasoning: 72/100.** Thinking-mode GPQA 72.22%; answer quality depends on substantial thinking budget.
- **Context window: 67/100.** 200K with 64K output ceiling and no corroborated near-window retrieval.
- **Multimodal: 58/100.** Vision input supported, but independent MMMU-Pro 46 and text-only output.
- **Coding: 73/100.** Vendor SWE 73.3 vs independent SWE 66.6, with weaker algorithmic and full-app scores.
- **Cost efficiency: 78/100.** $1/$5 with caching and batch discounts, less compelling than newer small models at current pricing.
- **Overall Score: 68/100.** Half-up mean (69 + 72 + 67 + 58 + 73) / 5 = 67.8; responsive legacy coding subagent where its exact snapshot is required.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Three independent model/catalog/dataset searches, exact-ID vendor and lifecycle docs, launch footnotes and Vals independently run results; thinking treated as a setting, not a new model. Scores are normalized judgments.
- Reference URLs:
  - [Anthropic Claude Haiku 4.5 exact model, price and lifecycle](https://platform.claude.com/docs/en/models/haiku-4-5/overview)
  - [Anthropic launch benchmark footnotes](https://www.anthropic.com/news/claude-haiku-4-5)
  - [Vals Haiku 4.5 thinking-mode evaluation](https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking)
  - [Independent NextSearch search-agent comparison](https://huggingface.co/NextTokenAI/NextSearch-1-XS)
- Future sources: add a new file next to this one using the same headings.
