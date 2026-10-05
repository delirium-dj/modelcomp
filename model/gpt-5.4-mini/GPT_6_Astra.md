# GPT-5.4 mini — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.4 mini
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** GPT-5.4 mini.
- **Short description:** Compact proprietary reasoning model for coding and computer use.
- **Provider / IDs:** OpenAI Responses and Chat Completions; `gpt-5.4-mini`, snapshot `gpt-5.4-mini-2026-03-17`. No verified Zen Free ID.
- **Release / knowledge:** March 17, 2026; August 31, 2025 cutoff.
- **Context window:** 400,000 tokens; 128,000 maximum output.
- **Modalities:** Text/image input, text output; configurable reasoning, function calls and structured outputs. Image generation is an external supported tool, not native output.
- **Pricing (2026-10-05):** $0.75 input / $4.50 output / $0.075 cached input per million; regional processing adds 10%; tool fees separate.
- **Architecture:** Proprietary; parameters undisclosed. [Official API model documentation](https://developers.openai.com/api/docs/models/gpt-5.4-mini)

### Raw benchmarks found

OpenAI xhigh evaluation: SWE-bench Pro Public 54.4%; Terminal-Bench **2.0** 60.0%; MCP Atlas 57.7%; Toolathlon 42.9%; Tau2 telecom 93.4%; GPQA Diamond 88.0%; HLE without tools 28.2%, with tools 41.5%; OSWorld-Verified 72.1%; MMMUPro 76.6%, with Python 78.0%. OmniDocBench 1.5 edit distance 0.1263 at no reasoning (lower better). MRCR v2 eight-needle: 47.7% at 64K–128K, 33.6% at 128K–256K. Graphwalks BFS 76.3%, parents 71.5% at 0–128K. [Publisher evaluation](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)

Terminal-Bench 2.1, Tau3, GDPval, Claw-Eval, CritPt, Omniscience, AA Index, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score found in this pass.

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong telecom and computer use; MCP and Toolathlon limit broader reliability.
- **Reasoning: 80/100.** Strong GPQA and useful unaided HLE; tool-assisted HLE kept separate.
- **Context window: 70/100.** 400K advertised capacity discounted for weak multi-needle retrieval.
- **Multimodal: 70/100.** Measured image understanding; no native audio/video or non-text generation.
- **Coding: 78/100.** Strong Pro and terminal results, below frontier sustained coding.
- **Cost efficiency: 89/100.** Moderate paid price with inexpensive cached input.
- **Overall Score: 74/100.** Half-up mean: (74 + 80 + 70 + 70 + 78) / 5 = 74.4. Suitable for bounded coding and visual computer tasks.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-05 UTC
- Method: Fresh official OpenAI documentation and publisher evaluation research; normalized scores are interpretations, not official scores.

