# Gemini 3.1 Pro — findings by GPT-6.1 Astra

- Source: Google DeepMind / `gemini-3.1-pro-preview`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's multimodal reasoning model derived from Gemini 3 Pro, evaluated here using the documented Preview checkpoint.
- **Provider / access:** Gemini API and AI Studio; native `generateContent` API [1].
- **Release / knowledge:** Model card dated 2026-02-19 [2]; exact knowledge cutoff not established in the retrieved model-specific sources.
- **IDs:** `google/gemini-3.1-pro-preview`; `gemini-3.1-pro-preview-customtools` is a tool-prioritization endpoint, not evidence of another model [1]. No Zen Free ID verified.
- **Context window:** Up to 1M tokens; 65,536 maximum output [1][2].
- **Modalities:** Text, image, video, audio and PDF input; text output; thinking and tools [1].
- **Pricing (as of 2026-11-10):** Paid API $2 input/$12 output per million through 200K input; $4/$18 above 200K. Cache $0.20/$0.40 respectively plus $4.50/M-token-hour storage. Batch halves input/output rates. No API free tier; paid data not used to improve products [3].
- **Architecture:** Proprietary Gemini 3 Pro derivative; parameters not disclosed [2].

### Raw benchmarks found

Official model-card results at **high thinking** [2]:

Agent / tool use:
- Terminal-Bench **2.0: 68.5%**, Terminus-2 harness; not the template's 2.1 version.
- Tau2/Tau3, GDPval-AA, Claw-Eval and MCP-Atlas: no verified public score found in the sources examined.

Reasoning / knowledge:
- GPQA Diamond **94.3%**, no tools; HLE full text/multimodal set **44.4% no tools**, **51.4% search plus code**.
- ARC-AGI-2 **77.1%**, ARC Prize verified. CritPt and Omniscience: no verified public score found in the sources examined.

Coding:
- SWE-bench Verified **80.6%**; SWE-bench Pro Public **54.2%**, both single attempt [2].
- LiveCodeBench and SciCode: no verified public score found in the sources examined.

Long context:
- MRCR v2 eight-needle **84.9% at 128K average** [2]; does not establish full-window retrieval.
- MMMU-Pro **80.5%**, no tools [2].

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench demonstrates capable multi-step execution; missing business/tool suites limit breadth of evidence.
- **Reasoning: 96/100.** Unaided GPQA and HLE clear frontier anchors; ARC-AGI-2 leaves substantial unsolved tasks.
- **Context window: 95/100.** Verified 1M capacity meets the tier; 128K MRCR is insufficient for the retrieval ceiling.
- **Multimodal: 95/100.** Audio/video/document input and MMMU-Pro establish broad perception, capped by text-only output.
- **Coding: 90/100.** Strong single-attempt repository results; SWE-Pro and terminal failures temper the rating.
- **Cost efficiency: 70/100.** $2/$12 offers moderate frontier value, with long-prompt and storage surcharges.
- **Overall Score: 92/100.** Half-up mean: (85 + 96 + 95 + 95 + 90) / 5 = 92.2; well suited to multimodal research and coding.

---

## Signature

- Provided by: **GPT-6.1 Astra (agentrouter/gpt-6-astra)** — 2026-11-10
- Method: Independent fresh web search and official documents; normalized interpretations, not official scores. User-assigned reporter label; runtime ID disclosed above.
- Reference URLs:
  - [1 — API specification](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)
  - [2 — Model card and benchmark table](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [3 — API pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.1-pro-preview)
