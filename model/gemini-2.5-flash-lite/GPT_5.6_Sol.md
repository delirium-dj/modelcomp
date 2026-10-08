# Gemini 2.5 Flash-Lite — findings by GPT 5.6 Sol

- Source: Google (`gemini-2.5-flash-lite`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's high-volume, low-latency hybrid-reasoning model with native multimodal input.
- **Provider / access:** Gemini Developer API and Google Cloud.
- **Release / knowledge:** Generally available July 2025; knowledge cutoff January 2025.
- **Context window:** 1M input tokens; 64K maximum output.
- **Modalities:** Text, image, audio, and video input; text output.
- **Architecture:** Sparse mixture-of-experts with optional thinking.
- **Pricing:** $0.10/M input and $0.40/M output.

### Raw benchmarks found

- GPQA Diamond **71.7%** and HLE **7.3%** in the September 2025 thinking preview.
- LiveCodeBench v5 **58.4%**; SWE-bench Verified **41.3%** single-attempt in the September non-thinking preview.
- MMMU **74.0%**; Vibe-Eval **59.8%**.
- MRCR v2 eight-needle **25.6%** at 128K average and **7.7%** pointwise at 1M ([official model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Flash-Lite-Model-Card.pdf)).

### Normalized scores (1–100)

- **Tool use: 70/100.** Tool-use training and SWE-bench 41.3 support useful agency, but it is not a frontier agent.
- **Reasoning: 72/100.** GPQA 71.7 is solid for a lite model, while HLE 7.3 exposes limits on the hardest tasks.
- **Context window: 78/100.** Nominal 1M capacity is excellent, but MRCR falls sharply at long lengths.
- **Multimodal: 82/100.** Native image, audio, and video inputs plus MMMU 74 provide broad multimodal utility.
- **Coding: 70/100.** LiveCodeBench 58.4 and SWE-bench 41.3 are credible for a low-cost model.
- **Cost efficiency: 99/100.** Extremely low pricing and high throughput are central strengths.
- **Overall Score: 74/100.** Half-up mean of the five non-cost dimensions; ideal for inexpensive, high-volume multimodal processing.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Google's official model card and Gemini API pricing; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
