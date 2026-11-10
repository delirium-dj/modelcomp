# Mercury 2 — findings by Claude Opus 4.6

- Source: Inception Labs (`inception/mercury-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' pioneering diffusion LLM (dLLM) that generates text via parallel block refinement rather than autoregressive token-by-token decoding, achieving 500–1,000+ tokens/sec throughput. Released February 24, 2026.
- **Provider / access:** Inception Labs API, OpenRouter (`inception/mercury-2`). Paid API access.
- **Release / knowledge:** 2026-02-24 release; knowledge cutoff not publicly specified.
- **IDs:** `inception/mercury-2` (no Free ID)
- **Context window:** 128,000 tokens input / 50,000 tokens max output — per meta.json and Inception Labs docs.
- **Modalities:** Text + vision in; text out. Tunable reasoning depth, native tool use / function calling, schema-aligned JSON output.
- **Pricing (as of 2026-11-10):** $0.25/1M input, $0.75/1M output, $0.025/1M cached input. Very affordable.
- **Architecture:** Diffusion-based Transformer (dLLM). Generates and refines text blocks in parallel through iterative denoising passes, fundamentally different from standard autoregressive LLMs. Proprietary, no open weights.

### Raw benchmarks found

Agent / tool use:

- Native tool use / function calling supported
- IFBench (instruction following): **71.3%** (businesswire.com / Inception Labs)
- SWE-bench: **24.8%** (per meta.json — weak repository-scale coding)
- Terminal-Bench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **73.6%** (tokencost.app / businesswire.com)
- AIME 2025: **91.1%** (businesswire.com)
- MMLU: competitive within speed-optimized class but specific standalone score not heavily emphasized
- HLE: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- CritPt: no verified public score found

Coding:

- LiveCodeBench: **67.3%** (tokencost.app / businesswire.com)
- SWE-bench: **24.8%** (meta.json — significantly below frontier autoregressive models)
- SciCode / AA-SciCode: no verified public score found

Long context:

- 128K token context window confirmed. No specific MRCR/RULER/GraphWalks retrieval benchmarks found.

### Normalized scores (1–100)

- **Tool use: 42/100.** Native tool calling and structured JSON output supported. IFBench 71.3% shows decent instruction following. However, SWE-bench 24.8% reveals weak multi-step agentic coding capability. The diffusion architecture's early-stage coherence variance limits complex tool orchestration reliability. Capped by low SWE-bench and absent Terminal-Bench scores.
- **Reasoning: 58/100.** GPQA Diamond 73.6% is respectable, and AIME 2025 91.1% shows strong mathematical reasoning. However, the model trades ~5–15% reasoning quality vs. top autoregressive models for its extreme speed advantage. Capped by no HLE score and the speed-quality tradeoff inherent in diffusion decoding.
- **Context window: 72/100.** 128K input with 50K max output is solid. No long-context retrieval benchmarks to verify utilization quality.
- **Multimodal: 35/100.** Text + vision input; text-only output. Vision support elevates it above text-only models, but no audio/video input and no image/audio output.
- **Coding: 40/100.** LiveCodeBench 67.3% is decent for competitive programming, but SWE-bench 24.8% is very weak for practical software engineering. The diffusion architecture excels at fast short completions but struggles with complex multi-file codebases. Capped heavily by SWE-bench performance.
- **Cost efficiency: 88/100.** $0.25/$0.75 per 1M tokens is very affordable, well below frontier pricing. Not free but excellent value given the speed advantage.
- **Overall Score: 49/100.** Mean of (42 + 58 + 72 + 35 + 40) / 5 = 49.4 → 49. A pioneering diffusion LLM with groundbreaking throughput (1,000+ tok/s) and solid mathematical reasoning, but held back by weak software engineering capability, early-stage coherence variance, and limited multimodal output. Best suited for real-time voice agents and latency-critical sub-agent loops.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-10
- Method: Public internet research (Inception Labs, businesswire.com, tokencost.app, OpenRouter, venice.ai, digitalapplied.com, arxiv.org); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception Labs — Mercury](https://inceptionlabs.ai)
  - [businesswire.com — Mercury 2 announcement](https://businesswire.com)
  - [tokencost.app — Mercury 2 benchmarks](https://tokencost.app)
  - [OpenRouter — Mercury 2](https://openrouter.ai/inception/mercury-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
