# Gemini 3.7 Flash — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3.7 Flash
- Date: 2026-10-09 (UTC); user-authorized refresh of October 3.
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

### Original October 3 evidence

Preserved for comparison. Original AA numeric snapshots are historical unless explicitly reverified below. Missing-data statements describe the original search and are superseded by the refresh.

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

### October 9 refresh

- Vibe Code Bench v1.1, OpenHands: **70.39%**, **$4.83/test**. [Vals leaderboard](https://www.vals.ai/benchmarks/vibe-code)

The Google card adds Agent’s Last Exam 26.3%, GDP.pdf 34.0%, and LVBench 85.4%. These are launch measurements, not newly run October evaluations. MRCR 97.0% is at 128K only. [Google card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)

### Comparison and remaining gaps

All ratings remain unchanged; independent app-building evidence corroborates useful coding while the new desktop-task result highlights limits. Overall: **91 → 91**. The original six ratings (Tool, Reasoning, Context, Multimodal, Coding, Cost) were 88, 87, 95, 95, 89, 91. New evidence coverage is not proof of improvement since October 3. Vals is app building, not Vibe1-100; Scale V2 is not original SWE-Pro or SWE-bench Verified. Harnesses, reasoning effort and benchmark versions remain separate.

The Vals page is dated October 7; its recorded task costs need not use current promotional pricing. Original price claims remain October 3 snapshots unless stated otherwise above; no price-rating change is inferred. Exact-ID hallucination rates, unreported tool suites and full-window retrieval gaps remain unresolved.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong terminal and workflow evidence; newer general-agent tasks remain difficult.
- **Reasoning: 87/100.** Strong HLE-Verified; incomplete breadth prevents a frontier ceiling score.
- **Context window: 95/100.** 1M capacity; excellent 128K retrieval does not prove 512K-plus accuracy.
- **Multimodal: 95/100.** Broad input modalities, limited to text output.
- **Coding: 89/100.** Strong terminal coding; DeepSWE remains below the methodology frontier anchor.
- **Cost efficiency: 91/100.** Attractive current token pricing; temporary discount limits long-term value.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions = 90.8, rounded to 91; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent fresh public research; normalized interpretations, not vendor scores.
- Future sources: add separate signed reports with these headings.
