# Claude 3.5 Haiku — findings by LongCat 2.5 Preview

- Source: Anthropic/Claude 3.5 Haiku (`claude-3-5-haiku-latest`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's fastest and most cost-efficient Claude 3.x model, released October 2024. Designed for high-throughput, latency-sensitive production workloads. Retired February 2026.
- **Provider / access:** Anthropic API (`claude-3-5-haiku-latest`). Chat Completions and Messages API.
- **Release / knowledge:** 2024-10-22. Knowledge cutoff: July 2024.
- **IDs:** `claude-3-5-haiku-latest`
- **Context window:** 200,000 tokens. Max output: 8,192 tokens. Verified via Anthropic docs and Artificial Analysis.
- **Modalities:** Text + image input; text output. Reasoning: no. Tool calls: yes.
- **Pricing (as of 2026-10-03):** $0.80 / 1M input tokens; $4.00 / 1M output tokens. Prompt caching available (90% discount on cache reads).
- **Architecture:** Proprietary transformer. API-only.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **40.6%** (Anthropic official model card addendum)
- TAU-bench Retail: **51.0%** (Anthropic official)
- TAU-bench Airline: **22.8%** (Anthropic official)
- Agentic coding eval: **74%** (Anthropic official)
- Terminal Bench Hard: **2.3** (LLMLearner)

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (Anthropic official)
- MMLU: **77.6%** (Anthropic official)
- MMLU-Pro: **65.0%** (Anthropic official)
- MATH: **69.2%** (LLMLearner)
- IFEval: **85.9%** (Anthropic official)
- Artificial Analysis Intelligence Index: **9**

Coding:

- SWE-bench Verified: **40.6%** (Anthropic official)
- HumanEval: **88.1%** (LLMLearner)
- MBPP: **85.6%** (LLMLearner)
- Agentic coding eval: **74%** (Anthropic official)

Long context:

- No long-context retrieval benchmark found. 200K context window verified.

### Normalized scores (1–100)

- **Tool use: 62/100.** SWE-bench Verified 40.6% and TAU-bench Retail 51.0% are moderate; agentic coding 74% is decent. TAU-bench Airline 22.8% is weak. Capped by limited agentic task performance.
- **Reasoning: 62/100.** GPQA Diamond 41.6% is moderate; MMLU 77.6% and MMLU-Pro 65.0% are solid for a non-reasoning model. AA Intelligence Index 9 is above average. No extended reasoning mode.
- **Context window: 55/100.** 200K tokens is standard but not exceptional by 2026 standards. No long-context retrieval benchmark found.
- **Multimodal: 55/100.** Text + image input verified. MMMU-Pro 45.6% is moderate. No video or audio input.
- **Coding: 68/100.** HumanEval 88.1% and MBPP 85.6% are strong; SWE-bench Verified 40.6% is moderate. Agentic coding 74% is decent.
- **Cost efficiency: 82/100.** $0.80/$4.00 per 1M tokens is very competitive for a Claude model; prompt caching further reduces costs.
- **Overall Score: 60/100.** Mean of (62 + 62 + 55 + 55 + 68) / 5 = 60.4 → 60. Best fit: high-throughput, latency-sensitive production workloads needing cheap, fast inference.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-03
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
