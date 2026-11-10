# Qwen3.6-Plus — findings by Fledge Alpha

- Source: Alibaba (`qwen-3.6-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6-Plus
- **Short description:** Alibaba's hosted-only 1M-context agentic coding flagship for the Qwen3.6 family (Mar 31, 2026 preview; Apr 2 GA), always-on reasoning.
- **Provider / access:** Alibaba Cloud DashScope/Model Studio, OpenRouter (`qwen/qwen-3.6-plus`), Together AI; Chat Completions-compatible.
- **Release / knowledge:** 2026-03-31/04-02; knowledge cutoff not officially stated.
- **IDs:** `qwen/qwen-3.6-plus` (OpenRouter); DashScope `qwen3.6-plus`
- **Context window:** 1,000,000 tokens; max output 65,536.
- **Modalities:** text, image, video in; text out; reasoning always-on (no off toggle); tool calls.
- **Pricing (as of 2026-10-02):** $0.325–0.50/M input, $1.95–3.00/M output depending on provider ($2/$6 reported for 256K–1M tier, unconfirmed).
- **Architecture:** proprietary, API-only; no public weights.

### Raw benchmarks found

Agent / tool use:

- τ-bench (retail): **76.8%** (llm-stats)
- MCP-Atlas: **74.1%** (llm-stats)
- HLE with tools: **50.6%** (Epoch AI / llmlearner)
- PinchBench v2: **72.5**

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM/Together AI; one aggregator at 88.2%)
- MMLU-Pro: **88.5%** (Epoch AI)
- AIME 2026: **95.3%** (llm-stats)
- HLE with tools: **50.6%**

Coding:

- SWE-bench Verified: **78.8%** (SWE-bench)
- SWE-bench Pro: **56.6%** (Awesome Agents)
- Terminal-Bench 2.0: **61.6** (Alibaba release chart)
- LiveCodeBench v6: **87.1%**
- SWE-bench Multilingual: **73.8%**

Long context:

- 1M window advertised; needle-style recall reported solid through ~400K (TokenMix); no vendor MRCR number.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ-bench 76.8 and MCP-Atlas 74.1 are solid; HLE-with-tools 50.6% shows a hard ceiling.
- **Reasoning: 82/100.** GPQA 90.4%, AIME 95.3%, MMLU-Pro 88.5% are frontier-adjacent; HLE 50.6% is respectable.
- **Context window: 95/100.** Native 1M-token window at flat per-token pricing (no confirmed long-context surcharge).
- **Multimodal: 85/100.** Text/image/video input with always-on reasoning; output text-only.
- **Coding: 78/100.** SWE-bench Verified 78.8% and LCB 87.1% are strong, but SWE-bench Pro 56.6% trails top tiers.
- **Cost efficiency: 92/100.** $0.325–0.50/$1.95–3.00 per 1M is among the cheapest frontier-adjacent 1M-context options.
- **Overall Score: 84/100.** Mean of the five quality dims; best fit for high-volume long-context agent pipelines on a budget.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (Alibaba Qwen blog, Epoch AI, SWE-bench, aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
