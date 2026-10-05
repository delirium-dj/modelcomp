# GPT-5.6 Luna — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5.6 Luna (`gpt-5.6-luna`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI’s cost-optimized GPT-5.6 tier for high-volume, latency-sensitive workloads and agent automation.
- **Provider / access:** OpenAI API, Chat Completions or Responses API; model ID `gpt-5.6-luna`.
- **Release / knowledge:** Public API documentation lists a 2026-02-16 knowledge cutoff.
- **IDs:** `openai/gpt-5.6-luna`; no free API tier is listed.
- **Context window:** 1,050,000 tokens; maximum output 128,000 tokens (OpenAI model documentation).
- **Modalities:** Text input/output and image input; reasoning, streaming, function calling, structured outputs, and Responses tools including web/file search, code interpreter, shell, computer use, and MCP.
- **Pricing (as of 2026-10-05):** $0.20 input, $0.02 cached input, and $1.20 output per 1M tokens; paid API model.
- **Architecture:** Proprietary; parameter count and MoE/dense details are not disclosed by OpenAI.

### Raw benchmarks found

Agent / tool use:

- Toolathlon: **53.4%** (OpenAI GPT-5.6 comparison table).
- AutomationBench: **14.9%** (OpenAI comparison table).
- GDPval-AA v2: **1,591.8 Elo** (OpenAI comparison table).

Reasoning / knowledge:

- Agents’ Last Exam: **50.3%** (OpenAI comparison table).
- GPQA Diamond: **92.3%** (OpenAI comparison table).
- FrontierMath Tier 1–3 v2: **78.6%**; Tier 4 v2: **58.5%** (OpenAI comparison table).

Coding:

- SWE-Bench Pro: **62.7%** (OpenAI comparison table).
- DeepSWE v1.1: **67.2%** (OpenAI comparison table).
- Terminal-Bench 2.1: **84.7%** (OpenAI comparison table).

Long context:

- MRCR v2 8-needle 256K–512K: **41.3%**; 512K–1M: **41.3%**.
- GraphWalks BFS: **81.3% F1** at 256K and **51.2% F1** at 1M.

Multimodal:

- MMMU Pro: **78.4%** without tools and **79.5%** with tools.
- gdp.pdf: **22.7%**.

### Normalized scores (1–100)

- **Tool use: 82/100.** Native tool and MCP support plus 53.4% Toolathlon and 14.9% AutomationBench support a strong score, capped by the modest AutomationBench result.
- **Reasoning: 88/100.** GPQA Diamond 92.3% and Agents’ Last Exam 50.3% indicate strong general reasoning, capped by lower FrontierMath performance than larger GPT-5.6 tiers.
- **Context window: 70/100.** The nominal 1.05M-token window is unusually large, but MRCR is 41.3% and GraphWalks falls to 51.2% at 1M.
- **Multimodal: 78/100.** Image input and 78.4% MMMU Pro establish capable vision, while audio/video are unsupported and document performance is weaker.
- **Coding: 79/100.** SWE-Bench Pro 62.7%, DeepSWE 67.2%, and Terminal-Bench 84.7% show strong practical coding, capped below the larger GPT-5.6 tiers.
- **Cost efficiency: 98/100.** $0.20/$1.20 per 1M tokens is exceptionally low for a reasoning-capable, tool-using model, though it is not free.
- **Overall Score: 79.4/100.** Half-up mean of the five quality dimensions; best fit for inexpensive high-volume agents where peak frontier quality is not required.

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research using OpenAI’s official model documentation and GPT-5.6 evaluation tables; scores are normalized 1–100 interpretations, not official vendor scores.
- Sources: https://developers.openai.com/api/docs/models/gpt-5.6-luna ; https://openai.com/index/gpt-5-6/

