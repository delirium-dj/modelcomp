# Gemini 3.7 Flash — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3.7 Flash
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Multimodal reasoning model with configurable effort.
- **Provider / access:** Gemini API, AI Studio and Google platforms; exact API ID unverified.
- **Release / knowledge:** August 13, 2026; March 2026 cutoff with some domains limited to January 2025.
- **IDs:** Gemini 3.7 Flash; Zen Free ID unverified.
- **Context window:** 1M input, 64K output.
- **Modalities:** Text/image/audio/video input; text output, reasoning and tools.
- **Pricing (as of 2026-10-03):** $0.75/$3.75 input/output per million through December; then $1.50/$7.50. Cache input discounted 90%.
- **Architecture:** Proprietary, based on Gemini 3.6 Flash. [Google card](https://deepmind.google/models/model-cards/gemini-3-7-flash/), [AA pricing](https://artificialanalysis.ai/articles/gemini-3-7-time-frontier).

### Raw benchmarks found

Agent / tool use:

- AA launch: GDPval-AA v2 1525 Elo; AutomationBench-AA 62.7%; AA-AnalystAgent pass^5 60%. [AA](https://artificialanalysis.ai/articles/gemini-3-7-time-frontier)
- Google: Terminal-Bench 2.1 85.8%, version 3.0 14.9%; OSWorld 2.0 47.9%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE-Verified 53.6%; original AA Index 56. Current revised Index 39. GPQA / CritPt / Omniscience: no verified public score found. [Current AA](https://artificialanalysis.ai/models/gemini-3-7-flash)

Coding:

- FrontierCode 1.1 Main 43.6%; DeepSWE v1.1 65.3%. SWE-bench / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found.

Long context:

- MRCR v2 eight-needle 97.0% at 128K, not full-window retrieval.

Google measurements: [model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/). Different suite versions and harnesses remain distinct.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong terminal and workflow evidence; newer general-agent tasks remain difficult.
- **Reasoning: 87/100.** Strong HLE-Verified; incomplete breadth prevents a frontier ceiling score.
- **Context window: 95/100.** 1M capacity; excellent 128K retrieval does not prove 512K-plus accuracy.
- **Multimodal: 95/100.** Broad input modalities, limited to text output.
- **Coding: 89/100.** Strong terminal coding; DeepSWE remains below the methodology frontier anchor.
- **Cost efficiency: 91/100.** Attractive current token pricing; temporary discount limits long-term value.
- **Overall Score: 91/100.** Half-up mean (88 + 87 + 95 + 95 + 89) / 5 = 90.8; fast multimodal agent workflows.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Independent fresh public research; normalized interpretations, not vendor scores.
- Future sources: add separate signed reports with these headings.
