# GPT-5.6 Sol — findings by GPT-6.1 Terra

- Source: OpenAI / GPT-5.6 Sol
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's GPT-5.6 flagship for professional work, coding and tool-using agents; `gpt-5.6` is an alias of Sol.
- **Provider / access:** OpenAI Responses and Chat Completions APIs under `gpt-5.6-sol` ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.6-sol)).
- **Release / knowledge:** General availability 2026-07-09; knowledge cutoff 2026-02-16 ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.6-sol)).
- **IDs:** OpenAI `gpt-5.6-sol`; OpenRouter `openai/gpt-5.6-sol`. No free API route verified.
- **Context window:** 1,050,000 total, 922,000 maximum input and 128,000 maximum output tokens per OpenAI.
- **Modalities:** Text and image input, text output; reasoning, function calling and computer-use tools supported.
- **Pricing (2026-11-01):** OpenAI promotional $4 input / $0.40 cached input / $20 output per million tokens through at least 2026-11-21. Prompts above 272K input use 2× input and 1.5× output rates for the full request ([OpenAI](https://developers.openai.com/api/docs/models/gpt-5.6-sol)).
- **Architecture:** Proprietary; parameter counts undisclosed.

### Raw benchmarks found

Agent / tool use:

- OpenAI Terminal-Bench 2.1 **88.8%**, Agents' Last Exam **52.7%**, and Toolathlon **58%** ([OpenAI](https://openai.com/index/gpt-5-6)).
- Vals Terminal-Bench 4.0 **37.88%**, evaluated separately ([Vals](https://www.vals.ai/models/openai_gpt-5.6-sol)); its benchmark version differs from 2.1.
- Tau2-Bench, Claw-Eval and MCP-Atlas: no verified exact-model score found in this research.

Reasoning / knowledge:

- GPQA Diamond **94.6%**, OpenAI; Vals GPQA **95.20% ± 1.07** and ProofBench v1.1 **83.00% ± 3.77** ([OpenAI](https://openai.com/index/gpt-5-6); [Vals](https://www.vals.ai/models/openai_gpt-5.6-sol)).
- HLE, CritPt and general hallucination rate: no verified score found in the sources used here.

Coding:

- OpenAI DeepSWE v1.1 **72.7%**, SWE-bench Pro **64.6%** ([OpenAI](https://openai.com/index/gpt-5-6)).
- Vals SWE-bench Verified **96.20% ± 0.86** and Vibe Code Bench v1.1 **80.50% ± 3.72** ([Vals](https://www.vals.ai/models/openai_gpt-5.6-sol)).
- SciCode: no verified exact-model score found here.

Long context:

- OpenAI MRCR v2 8-needle **91.5% at 256K–512K**, **73.8% at 512K–1M** ([OpenAI](https://openai.com/index/gpt-5-6)).

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong 2.1 terminal and Agents' Last Exam results are tempered by the lower independent 4.0 score.
- **Reasoning: 91/100.** Strong independent and vendor GPQA plus proof evidence supports a high score; no HLE score was verified here.
- **Context window: 95/100.** The documented 1.05M window is in the top size tier; MRCR at 512K–1M does not meet the 98% condition for 100.
- **Multimodal: 70/100.** Image input is supported, with no audio/video input or non-text output credited.
- **Coding: 94/100.** DeepSWE, SWE-bench and independent Vibe Code are strong, though results vary by harness.
- **Cost efficiency: 74/100.** The promotional $4/$20 rate is substantial, and long requests incur higher rates.
- **Overall Score: 88/100.** (91 + 91 + 95 + 70 + 94) / 5 = 88.2, rounded to 88; useful for complex coding and agent workflows.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independently evaluated results are distinguished.
- Reference URLs:
  - [OpenAI model announcement and benchmark tables](https://openai.com/index/gpt-5-6)
  - [OpenAI model specification and pricing](https://developers.openai.com/api/docs/models/gpt-5.6-sol)
  - [Vals independent evaluations](https://www.vals.ai/models/openai_gpt-5.6-sol)
- Future sources: add a new file next to this one using the same headings.
