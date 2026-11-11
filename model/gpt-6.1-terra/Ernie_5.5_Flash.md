# GPT-6.1 Terra — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-6.1 Terra (`gpt-6.1-terra`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, efficient GPT-6.1 model (released 2026-10-26) for visual reasoning, precise computer use and natural writing — the low-cost lane of the GPT-6.1 family.
- **Provider / access:** OpenAI API/Responses (`gpt-6.1-terra`), Azure OpenAI, plus ~20 gateway routes (AI/ML API, LLM Gateway, Vercel, LowRouter, Merge Gateway).
- **Release / knowledge:** 2026-10-26; knowledge cutoff 2026-06-01 (models.dev).
- **IDs:** `gpt-6.1-terra`, `openai/gpt-6.1-terra`, `azure/gpt-6.1-terra`, `opencode/gpt-6.1-terra`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.00 / $5.00 per 1M input/output; cache read $0.05.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Agents' Last Exam: **60.0%** (best verified row)
- Terminal-Bench 4.0: **50.30%**; Terminal-Bench-Science 0.1: **58.3%**
- OSWorld 2.1 offline subset (82 tasks): **74.2%**; MazeBench: **16%**
- ExploitBench v8-bench: **97%**; FrontierPhysics (end-to-end physics research): **14.3%**
- Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- FrontierMath v2 Tier 4: **92.683%**; Tiers 1–3: **90.877%** — the best verified FrontierMath pair in this dataset
- MMMU-Pro: **85.5%**; NYT Connections: **86.8%**; StealthMark: **60.4**
- HealthBench: **51.1%** raw / **55.1%** length-adjusted; HealthBench Professional **62.7%**; HealthBench Hard **31.4%**
- HLE / GPQA Diamond / ARC-AGI: no verified public rows published

Coding:

- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench: no verified public rows published for Terra
- ParseBench: **73.64%**; ExtractBench (LlamaIndex): **94.28%**; ExtractBench Pro: **27%**
- No terminal-style coding agent row other than Terminal-Bench 4.0 (50.3%)

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 85/100.** Agents' Last Exam 60.0% and TB4.0 50.3% are the best verified agentic pair outside the top three, OSWorld 2.1 offline 74.2% is good; FrontierPhysics 14.3% and MazeBench 16% cap it.
- **Reasoning: 92/100.** FrontierMath v2 90.9% (T1–3) and 92.7% (Tier 4) are the strongest verified math results in this dataset, MMMU-Pro 85.5% and NYT Connections 86.8% support it; only the missing HLE/GPQA rows keep it off the high 90s.
- **Context window: 100/100.** 1,050,000 tokens with 128,000 max output.
- **Multimodal: 85/100.** Text, image and PDF in with MMMU-Pro 85.5% proving strong document/chart reasoning; no audio/video.
- **Coding: 78/100.** No coding benchmark was published for Terra — the score is inferred from its agentic and extraction rows (ExtractBench 94.28%); low confidence.
- **Cost efficiency: 92/100.** $1/$5 per 1M with $0.05 cache reads — a fifth of GPT-6.1 Sol's price for 90% of its measured quality.
- **Overall Score: 88/100.** Best fit for math/reasoning-heavy work, document extraction and cost-sensitive computer use; the default value pick in the OpenAI GPT-6.1 line.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6.1 Terra — OpenAI](https://openai.com/index/gpt-6-1-terra/)
  - [GPT-6.1 Terra benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-6-1-terra)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_6.1_Terra_v2.md`, using the same headings.