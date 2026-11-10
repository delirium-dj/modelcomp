# GPT-6 Astra — findings by GPT-6.1 Astra

- Source: OpenAI / `gpt-6-astra`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's proprietary reasoning model for demanding software engineering, computer use and scientific work.
- **Provider / access:** OpenAI Responses API, ChatGPT, Microsoft Azure and Amazon Bedrock [1][2].
- **Release / knowledge:** September 2026 release [1]; knowledge cutoff 2026-04-30 [2].
- **IDs:** `openai/gpt-6-astra`; Bedrock `openai.gpt-6-astra`. No Zen Free ID verified.
- **Context window:** 1,050,000 tokens; 128,000 maximum output [2]. Cross-window notes in Codex are harness memory, not a larger native window [1].
- **Modalities:** Text/image input, text output; reasoning, tools and structured output [2].
- **Pricing (as of 2026-11-10):** $10 input / $50 output / $1 cache read / $12.50 cache write per million. Above 272K input, the full request costs 2x input/cache and 1.5x output. Fast mode is 2x standard price; tools may be billed separately [1][2].
- **Architecture:** Proprietary; parameter count not disclosed in the retrieved sources.

### Raw benchmarks found

Figures are OpenAI's published evaluation results [1]; harnesses and benchmark generations are not interchangeable.

Agent / tool use:
- Terminal-Bench **4.0: 57.9%**; AutomationBench **41.4%**; BrowseComp **91.5%**.
- OSWorld **2.0**, v2026.08.08 offline set, partial score: **72.6%**.
- Tau2/Tau3, GDPval-AA and Claw-Eval: no verified public score found in the sources examined.

Reasoning / knowledge:
- GPQA Diamond **96.0%**; HLE **57.2% with tools**.
- FrontierMath Tier 4 v2 **97.6%**; Terminal-Bench Science 0.1 **64.6%**.
- CritPt and Omniscience: no verified public score found in the sources examined.

Coding:
- DeepSWE v1.1 **74.1%**; FrontierCode 1.1 Extended **64.5%**, Main **53.3%**.
- LiveCodeBench and SciCode: no verified public score found in the sources examined.

Long context:
- 1.05M capacity verified [2]; no exact-model MRCR/RULER result verified in this source set.

### Normalized scores (1–100)

- **Tool use: 94/100.** Strong browsing, terminal and computer-use evidence; partial OSWorld and missing tool-specific suites cap the rating.
- **Reasoning: 98/100.** GPQA and FrontierMath support exceptional reasoning; assisted HLE and vendor evaluation dependence prevent 100.
- **Context window: 95/100.** The documented 1.05M meets the capacity tier, without measured retrieval evidence for an uplift.
- **Multimodal: 70/100.** Verified image input supports the image tier; native audio/video generation is not established.
- **Coding: 97/100.** DeepSWE and FrontierCode clear frontier references; remaining failures and harness dependence cap it.
- **Cost efficiency: 30/100.** $10/$50 matches the expensive rubric anchor, with further long-input surcharges.
- **Overall Score: 91/100.** Half-up mean: (94 + 98 + 95 + 70 + 97) / 5 = 90.8; suited to difficult engineering and research where quality warrants premium cost.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Fresh public search and direct official-source retrieval; normalized judgments, not official scores. Reporter label is assigned by the user; the runtime ID is disclosed above. No local peer findings were used.
- Reference URLs:
  - [1 — Official introduction and benchmark appendix](https://openai.com/index/gpt-6-astra/)
  - [2 — API model card](https://developers.openai.com/api/docs/models/gpt-6-astra)
