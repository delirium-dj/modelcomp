# GPT-6 Astra — findings by Mistral Medium 3.5

- Source: OpenAI/GPT-6 Astra
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's most intelligent and aligned model as of September 2026, setting new state-of-the-art for computer use, browsing, software engineering, cybersecurity, science, and professional work. Described as "the most intelligent and aligned model in the world."
- **Provider / access:** `openai/gpt-6-astra` via OpenAI API, Microsoft Azure, AWS Bedrock
- **Release / knowledge:** September 3-4, 2026
- **IDs:** `gpt-6-astra`
- **Context window:** 1,048,576 tokens (1M) with 128,000 token max output; verified 1,050,000 token window per OpenAI
- **Modalities:** text + image input (multimodal); text output; advanced reasoning; tool calls; JSON mode
- **Pricing (as of 2026-11-05):** $10.00 / $50.00 per 1M input/output tokens (standard); requests >272K input tokens bill entire request at $20.00 / $75.00 per 1M; cached input at $1.00 per 1M
- **Architecture:** Proprietary; advanced alignment with GPT-Red automated red-teaming; no verified public parameter count

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **56%** (source: Artificial Analysis)
- AutomationBench-AA: **69%** (ahead of Grok 4.6 at 67%, GLM-5.3 at 62%, GPT-5.6 Sol at 60%; source: Artificial Analysis)
- SWE-Atlas-QnA: **62%** (source: Artificial Analysis)
- Artificial Analysis Intelligence Index: **53** (high reasoning, tied with Gemini 4 Argon at max; source: Artificial Analysis)
- AA-Briefcase: **1685 Elo** (source: Stack Junkie)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **53 / #3** (86.07/100; source: BenchLM November 2026)
- Omniscience Accuracy: **51%** (halved hallucination rate from GPT-5.6 Sol's 92%; source: Artificial Analysis)
- Agents' Last Exam: **state-of-the-art** (source: OpenAI announcement)

Coding:

- SWE-bench Verified: **~68%** (estimated from comparisons; source: Artificial Analysis)
- SWE-bench Pro: **public score not published by OpenAI** (source: Artificial Analysis)
- LiveCodeBench Pro: **no verified public score found**
- SciCode: **no verified public score found**
- FrontierSWE v2: **no verified public score found**
- FrontierCode: **no verified public score found**
- CursorBench: **no verified public score found**
- DeepSWE: **~68%** (estimated, below Claude Fable 5.1 at 74.1%; source: Stack Junkie)

Long context:

- 1M token context verified; long-context retrieval up 22 points over predecessors (source: TrueFoundry)

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong agentic performance with 56% Terminal-Bench 4.0, 69% AutomationBench-AA, 62% SWE-Atlas-QnA. Capped by lack of public SWE-bench Pro and FrontierCode scores.
- **Reasoning: 93/100.** Artificial Analysis Intelligence Index 53, leads Agents' Last Exam and AutomationBench, 51% Omniscience Accuracy. Capped by limited public reasoning benchmark coverage.
- **Context window: 100/100.** 1M+ token context window (1,050,000 verified) with 128K output. Maximum tier.
- **Multimodal: 85/100.** Text + image multimodal input. Not full audio/video support. Capped by modality breadth.
- **Coding: 88/100.** Estimated ~68% SWE-bench Verified, ~68% DeepSWE. Competitive but not leading on all coding benchmarks. Capped by limited public disclosure.
- **Cost efficiency: 82/100.** $10/$50 per 1M tokens is premium pricing; long context (>272K) doubles cost. Competitive at frontier level but expensive for large-context workloads.
- **Overall Score: 91.6/100.** Most intelligent model per OpenAI; slight gaps in coding benchmark transparency and premium pricing prevent higher score.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6 Astra: A new generation of intelligence — OpenAI](https://openai.com/index/gpt-6-astra/)
  - [GPT-6 Astra System Card — OpenAI Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-6-astra)
  - [GPT-6 Astra Model — OpenAI API Docs](https://developers.openai.com/api/docs/models/gpt-6-astra)
  - [Benchmarking GPT-6 Astra — Artificial Analysis](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra)
  - [GPT-6 Astra Benchmarks Explained — Vellum](https://www.vellum.ai/blog/gpt-6-astra-benchmarks-explained)
  - [GPT-6 Astra Pricing: The Cache Break-Even — TrueFoundry](https://www.truefoundry.com/blog/gpt-6-astra)
  - [BenchLM — GPT-6 Astra (86.07/100, #3)](https://benchlm.ai/models/gpt-6-astra)
  - [Yotta Labs — GPT-6 Astra Price](https://www.yottalabs.ai/post/gpt-6-astra-pricing-api-cost-2026)
  - [CodeToDeploy — GPT-6 Astra Explained](https://medium.com/codetodeploy/gpt-6-astra-has-a-1-05-million-token-context-window)
