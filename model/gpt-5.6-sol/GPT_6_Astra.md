# GPT-5.6 Sol — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.6 Sol
- Date: 2026-10-09 (UTC); user-authorized refresh of October 3.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** GPT-5.6 Sol, max effort evaluated
- **Short description:** Reasoning model for complex professional and coding tasks.
- **Provider / access:** OpenAI Responses and Chat Completions APIs.
- **Release / knowledge:** Release date unverified here; February 16, 2026 cutoff.
- **IDs:** `gpt-5.6-sol`; `gpt-5.6` aliases Sol. No verified Zen Free ID.
- **Context window:** 1,050,000; 128,000 output.
- **Modalities:** Text/image input, text output; tools, structured output, configurable reasoning. Image-generation tool support is not native image output.
- **Pricing (as of 2026-10-03):** $4/$20 input/output, $0.40 cached input per million; promotional through at least November 21. Above 272K input: double input, 1.5x output pricing.
- **Architecture:** Proprietary; parameter count unverified. [Official model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-sol)

### Original October 3 evidence

Preserved for comparison. AA numeric snapshots remain historical unless explicitly reverified below. Original missing-data statements are superseded where the refresh provides new evidence.

Agent / tool use:

- GDPval-AA v2.1 1611 Elo; AA-Briefcase v1.1 1478; AutomationBench-AA 60%; Terminal-Bench 4.0 40%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Current Intelligence Index 47; HLE 49%; CritPt 32%; Omniscience index 22. GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode 57%; terminal result above. SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- AA-LCR v1.1 84%; full-window needle retrieval not verified.

Independent measurements: [AA comparison](https://artificialanalysis.ai/models/comparisons/step-5-vs-gpt-5-6-sol), Sol max column. Current suites differ from the repository's historical anchors.

### October 9 refresh

- Vibe Code Bench v1.1, OpenHands: **80.50%**, **$33.40/test**. [Vals leaderboard](https://www.vals.ai/benchmarks/vibe-code)

SWE-Bench Pro V2 Full **95.50 ± 1.40**, HARD **82.40**, Codex, xhigh. [Scale Full](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full), [Scale HARD](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=hard). SWE Atlas Codebase QnA **46.00 ± 5.00**, Codex, xHigh; Scale notes benign-query security refusals counted as zero. [Scale QnA](https://labs.scale.com/leaderboard/sweatlas-qna)

Cache writes cost 1.25× uncached input; the $4/$20 promotion and above-272K surcharges remain documented. [Model specification](https://developers.openai.com/api/docs/models/gpt-5.6-sol)

PDF input is supported through Responses: vision models receive extracted text and page images. [File-input documentation](https://developers.openai.com/api/docs/guides/file-inputs)

The exact model's current API page reconfirms the original context/output limits and standard token prices. API features above follow the feature/tool matrix, not the site's generic endpoint navigation. [Official specification](https://developers.openai.com/api/docs/models/gpt-5.6-sol)

### Comparison and remaining gaps

Coding increases from 88 to 92 on repository and app-building evidence. Xhigh measurements are not max-effort measurements. Multimodal changes from 70 to 80 for verified PDF handling; this corrects omitted evidence rather than establishing a newly added capability. Other dimensions stay unchanged. Overall: **86 → 89**. Original ratings (Tool, Reasoning, Context, Multimodal, Coding, Cost): 88, 91, 95, 70, 88, 55.

No measured improvement between October 3 and October 9 is inferred. Vals v1.1 measures app building, not Vibe1-100; its October 7 page date is not a run date. Scale V2 is not original SWE-Pro or SWE-bench Verified. Costs and scores depend on harness and effort. Remaining unverified exact-ID suites and full-window retrieval remain gaps; Pro/base models are never interchangeable.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong workflow results, with incomplete terminal and knowledge-work success.
- **Reasoning: 91/100.** HLE and CritPt support strong reasoning; scientific tasks remain unsolved.
- **Context window: 95/100.** Above-1M capacity; no qualifying retrieval bonus.
- **Multimodal: 80/100.** Image and PDF input meet the PDF-input tier; native audio/video and non-text output are not established.
- **Coding: 92/100.** Newly verified exact-model coding results broaden evidence; harness and benchmark-version differences remain material.
- **Cost efficiency: 55/100.** $4/$20 is expensive, with surcharges for long prompts.
- **Overall Score: 89/100.** Half-up mean of the five quality dimensions = 89.2, rounded to 89; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent public research; official specifications and evaluator measurements; normalized interpretations.
- Future sources: add separate signed reports using these headings.
