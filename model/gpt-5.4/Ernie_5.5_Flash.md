# GPT-5.4 — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.4 (`gpt-5.4`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's agent-ready GPT (released 2026-03-05) for coding and computer-use workflows at a lower cost — the mainstream GPT-5.4 tier, two generations behind GPT-6.
- **Provider / access:** OpenAI API/Responses (`gpt-5.4`), Azure OpenAI, plus ~45 gateway routes (OpenRouter, LLM Gateway, Vercel, Prime, AI/ML API, Unorouter — including a `:free` lane).
- **Release / knowledge:** 2026-03-05; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `gpt-5.4`, `openai/gpt-5.4`, `azure/gpt-5.4`, `opencode/gpt-5.4`.
- **Context window:** 1,050,000 total (922,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $2.50 / $15.00 per 1M input/output; cache read $0.25.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench (Tool-Agent-User): **98.9%** — the best verified tool-agent score in this dataset
- Terminal-Bench 2.0: **75.1%**; OSWorld-Verified: **75%**; MCP Atlas: **70.6%**; Toolathlon: **54.6%**
- BrowseComp: **82.7%**; DeepSearchQA: **73.6%**; Claw-Eval: **60.3%**; CyberGym: **79.0%**; LifeVal: **73.0%**
- JobBench: **38.9%**; ResearchClawBench: **15.3%**; ExploitGym: **6.0%**; ApprenticeBench: **11%**; MazeBench: **0%**

Reasoning / knowledge:

- ARC-AGI-2: **74.0%**
- HLE / GPQA Diamond / FrontierMath: no verified public rows published for the standard tier
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench Pro: **87.5%**; React Native Evals: **85.3%**; Vibe Code Bench v1.1: **67.42%**
- SWE-bench Pro: **57.7%**; PostTrainBench v1.1: **19.0%**; Gert Labs composite: **64.89**
- SWE-bench Verified / DeepSWE: no verified public rows published

Long context:

- 1.05M context documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-Bench 98.9% is the strongest verified tool-agent-user score here and OSWorld-Verified 75% is good; ApprenticeBench 11%, ExploitGym 6.0% and ResearchClawBench 15.3% are near-floor on the newer benchmarks.
- **Reasoning: 75/100.** ARC-AGI-2 74.0% is the only verified reasoning row; with no HLE/GPQA/FrontierMath publication the score is a low-confidence floor.
- **Context window: 100/100.** 1,050,000 tokens with 128,000 max output.
- **Multimodal: 78/100.** Text, image and PDF in; no multimodal benchmark rows published for this tier.
- **Coding: 80/100.** LiveCodeBench Pro 87.5% and React Native Evals 85.3% are good, Vibe Code Bench 67.4% decent, but SWE-bench Pro 57.7% and PostTrainBench 19.0% are weak.
- **Cost efficiency: 82/100.** $2.50/$15 per 1M is cheap for the capability but still above GPT-5.6 Terra ($2/$12).
- **Overall Score: 82.6/100.** Best fit for tool-heavy workflow automation at low cost; superseded by GPT-5.6 Terra on price and by GPT-6.1 Sol on capability.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.4 — OpenAI](https://openai.com/index/gpt-5-4/)
  - [GPT-5.4 benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-4)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.4_v2.md`, using the same headings.