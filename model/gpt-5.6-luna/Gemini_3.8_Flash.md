# GPT-5.6 Luna — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's fast, budget-tier agentic model from the GPT-5.6 family, engineered for cost-sensitive, high-volume production agent workflows with a 1M token context.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`), ChatGPT Work, Codex.
- **Release / knowledge:** July 2026; knowledge cutoff February 2026.
- **IDs:** `gpt-5.6-luna`
- **Context window:** 1,050,000 input tokens (~1M) / 128,000 max output tokens.
- **Modalities:** Text and image input via vision path; text output. Native tool calling and configurable reasoning effort.
- **Pricing (as of 2026-09-24):** $0.20 / 1M input tokens, $1.20 / 1M output tokens ($0.02 cached input).
- **Architecture:** Proprietary, lightweight frontier distillation/architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI launch data; independent run: **75.7%**)
- AA Coding Agent Index v1.1: **74.6**
- AutomationBench-AA (max): **42.2%**
- Agents' Last Exam: **50.3%**
- MRCR v2 (8-needle, 256K–1M): **41.3%**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI launch; AA independent: **91.1%**)
- Humanity's Last Exam (HLE): **37.2%**
- FrontierMath v2 (Tiers 1–3): **78.6%** (Tier 4: **58.5%**)
- ARC-AGI-2: **59.5%**
- AA Intelligence Index: **51** (max effort), **38** (medium effort)

Coding:

- SWE-bench Verified: **79.8%**
- SWE-bench Pro: **62.7%**
- DeepSWE v1.1: **67.2%**

Long context:

- Context Window: **1,050,000 tokens**
- MRCR v2 (8-needle, 256K–1M): **41.3%**
- GraphWalks BFS (256K f1): **81.3%** (1M f1: **51.2%**)

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 at 84.7% and Coding Agent Index at 74.6 demonstrate very capable agent tool execution, tempered by modest AutomationBench (42.2%).
- **Reasoning: 84/100.** 91.1%–92.3% on GPQA Diamond and 37.2% on HLE showcase frontier-adjacent logical reasoning at low latency.
- **Context window: 78/100.** Massive 1M+ context window, but MRCR v2 retrieval degradation at 256K–1M (41.3%) and 1M GraphWalks (51.2%) cap effective long-context retention.
- **Multimodal: 70/100.** Solid visual reasoning and document processing; text-only output, lacks native audio or video feeds.
- **Coding: 79/100.** 79.8% on SWE-bench Verified, 62.7% on SWE-bench Pro, and 67.2% on DeepSWE v1.1 represent strong, reliable software engineering performance.
- **Cost efficiency: 97/100.** At $0.20 / $1.20 per 1M tokens with $0.02 caching, Luna offers unmatched cost efficiency for an agent of this caliber.
- **Overall Score: 79/100.** Arithmetic mean of non-cost metrics: (82 + 84 + 78 + 70 + 79) / 5 = 78.6 → 79. A stellar cost-effective solution for high-volume automated agent loops and code tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark analysis and cross-verification against verified OpenAI launch metrics and Artificial Analysis data.
