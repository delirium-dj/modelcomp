# Gemini 3.8 Flash — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3.8 Flash
- Date: 2026-10-09 (UTC); user-authorized refresh of October 3.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Gemini 3.8 Flash (high reasoning evaluated)
- **Short description:** General-purpose multimodal reasoning model; Cyber is a separate specialized variant, excluded from this assessment.
- **Provider / access:** Google API; documented model ID now verified; pinned snapshot unverified.
- **Release / knowledge:** September 2, 2026; cutoff unverified.
- **IDs:** `gemini-3.8-flash`; Zen Free availability unverified.
- **Context window:** 1,048,576 input; 65,536 maximum output.
- **Modalities:** Text, images, video and speech input; text output, reasoning and tool use.
- **Pricing (as of 2026-10-03):** Input/output $0.75/$3.75 per million through year-end; cached input $0.075. Undiscounted input/output $1.50/$7.50.
- **Architecture:** Proprietary; size unverified. Card source: [AA launch evaluation](https://artificialanalysis.ai/articles/gemini-3-8-flash).

### Original October 3 evidence

Preserved for comparison. Original AA numeric snapshots are historical unless explicitly reverified below. Missing-data statements describe the original search and are superseded by the refresh.

Agent / tool use:

- Tau3-Banking: 45%, high reasoning. [AA launch](https://artificialanalysis.ai/articles/gemini-3-8-flash)
- GDPval-AA v2.1: 1435; AutomationBench-AA: 60%; Terminal-Bench 4.0: 20%. [AA current comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-7-flash)
- Terminal-Bench 2.1 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found in reviewed text.

Reasoning / knowledge:

- Launch Intelligence Index: 59; current revised Index: 41. These suites are not interchangeable. [Launch](https://artificialanalysis.ai/articles/gemini-3-8-flash), [current](https://artificialanalysis.ai/models/gemini-3-8-flash)
- HLE: 48%; CritPt: 18%; AA-LCR v1.1: 81%; AA-Omniscience: 30 (index, not accuracy). GPQA and hallucination rate: no verified public score found. [AA comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-7-flash)

Coding:

- SciCode: 57%. SWE-bench / LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found in reviewed text. [AA comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-7-flash)

Long context:

- AA-LCR v1.1: 81%; no verified 512K-plus MRCR retrieval measurement found. [AA comparison](https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-7-flash)

### October 9 refresh

- Vibe Code Bench v1.1, OpenHands: **78.65%**, **$6.87/test**. [Vals leaderboard](https://www.vals.ai/benchmarks/vibe-code)

SWE-Bench Pro V2 Full: **94.86 ± 1.46**; HARD: **58.80**, mini-swe-agent, high effort. [Scale Full](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full), [Scale HARD](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=hard). SWE Atlas Codebase QnA: **47.04 ± 5.08**, Mini-SWE-Agent. [Scale QnA](https://labs.scale.com/leaderboard/sweatlas-qna)

The official API page fills two gaps: ID `gemini-3.8-flash`, output cap **65,536**, input **1,048,576**, with text/image/video/audio/PDF input and text output. [Google API](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)

### Comparison and remaining gaps

Coding rises from 86 to 90 on newly verified repository and application evidence. Other dimensions stay unchanged; the HARD result still limits confidence. Overall: **90 → 91**. The original six ratings (Tool, Reasoning, Context, Multimodal, Coding, Cost) were 85, 88, 95, 95, 86, 91. New evidence coverage is not proof of improvement since October 3. Vals is app building, not Vibe1-100; Scale V2 is not original SWE-Pro or SWE-bench Verified. Harnesses, reasoning effort and benchmark versions remain separate.

The Vals page is dated October 7; its recorded task costs need not use current promotional pricing. Original price claims remain October 3 snapshots unless stated otherwise above; no price-rating change is inferred. Exact-ID hallucination rates, unreported tool suites and full-window retrieval gaps remain unresolved.

### Normalized scores (1–100)

- **Tool use: 85/100.** Banking and workflow results are strong; newer terminal performance limits the rating.
- **Reasoning: 88/100.** HLE and LCR demonstrate breadth; CritPt and revised Index show remaining limits.
- **Context window: 95/100.** Verified 1M capacity; no evidence for the highest retrieval tier.
- **Multimodal: 95/100.** Speech, video and image input; text-only output caps coverage.
- **Coding: 90/100.** Newly verified repository, codebase-QnA and app-building results broaden evidence; different harnesses and the HARD split constrain confidence.
- **Cost efficiency: 91/100.** Discounted token pricing offers good value; current AA task cost is $1.24 and discounts expire. [AA](https://artificialanalysis.ai/models/gemini-3-8-flash)
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions = 90.6, rounded to 91; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent fresh public research; normalized scores are interpretations. Launch and current benchmark versions are explicitly separated.
- Future sources: add a separate signed report using these headings.
