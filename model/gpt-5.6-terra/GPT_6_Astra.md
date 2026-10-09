# GPT-5.6 Terra — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.6 Terra
- Date: 2026-10-09 (UTC); user-authorized refresh of October 3.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** GPT-5.6 Terra, max reasoning evaluated
- **Short description:** Middle-priced reasoning model for professional workflows.
- **Provider / access:** OpenAI Responses and Chat Completions APIs.
- **Release / knowledge:** Release date unverified here; February 16, 2026 cutoff.
- **IDs:** `gpt-5.6-terra`; no verified Zen Free ID.
- **Context window:** 1,050,000; 128,000 output.
- **Modalities:** Text/image input, text output; tools and structured outputs; configurable reasoning.
- **Pricing (as of 2026-10-03):** $2 input / $12 output / $0.20 cache per million; above 272K input, full-request input doubles and output increases 1.5x.
- **Architecture:** Proprietary, size unverified. [Official specifications](https://developers.openai.com/api/docs/models/gpt-5.6-terra)

### Original October 3 evidence

Preserved for comparison. AA numeric snapshots remain historical unless explicitly reverified below. Original missing-data statements are superseded where the refresh provides new evidence.

Agent / tool use:

- GDPval-AA v2.1 1453 Elo; AutomationBench-AA 60%; Terminal-Bench 4.0 35%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Intelligence Index 42; HLE 43%; CritPt 30%; Omniscience index 0. GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode 55%; SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found in reviewed measurements.

Long context:

- AA-LCR v1.1 83%; no full-window retrieval result verified.

Measurements: [AA comparison](https://artificialanalysis.ai/models/comparisons/gpt-5-6-terra-vs-gpt-5-4), Terra max column, current revised suites.

### October 9 refresh

- Vibe Code Bench v1.1, OpenHands: **74.59%**, **$7.89/test**. [Vals leaderboard](https://www.vals.ai/benchmarks/vibe-code)

SWE-Bench Pro V2 Full **92.37 ± 1.81**, HARD **86.30**, Codex, xhigh. [Scale Full](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full), [Scale HARD](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=hard)

Cache writes cost 1.25× uncached input; the $2/$12 pricing and above-272K surcharges remain documented. [Model specification](https://developers.openai.com/api/docs/models/gpt-5.6-terra)

PDF input is supported through Responses: vision models receive extracted text and page images. [File-input documentation](https://developers.openai.com/api/docs/guides/file-inputs)

The exact model's current API page reconfirms the original context/output limits and standard token prices. API features above follow the feature/tool matrix, not the site's generic endpoint navigation. [Official specification](https://developers.openai.com/api/docs/models/gpt-5.6-terra)

### Comparison and remaining gaps

Coding increases from 85 to 90 on repository and app-building evidence. Xhigh measurements are kept separate from the original max configuration. Multimodal changes from 70 to 80 for verified PDF handling; this corrects omitted evidence rather than establishing a newly added capability. Other dimensions stay unchanged. Overall: **84 → 87**. Original ratings (Tool, Reasoning, Context, Multimodal, Coding, Cost): 84, 87, 95, 70, 85, 68.

No measured improvement between October 3 and October 9 is inferred. Vals v1.1 measures app building, not Vibe1-100; its October 7 page date is not a run date. Scale V2 is not original SWE-Pro or SWE-bench Verified. Costs and scores depend on harness and effort. Remaining unverified exact-ID suites and full-window retrieval remain gaps; Pro/base models are never interchangeable.

### Normalized scores (1–100)

- **Tool use: 84/100.** Useful workflow performance; knowledge-work and terminal gaps cap the score.
- **Reasoning: 87/100.** HLE and CritPt support strong reasoning; Omniscience reveals factual reliability limitations.
- **Context window: 95/100.** Above-1M capacity without near-perfect retrieval evidence.
- **Multimodal: 80/100.** Image and PDF input meet the PDF-input tier; native audio/video and non-text output are not established.
- **Coding: 90/100.** Newly verified exact-model coding results broaden evidence; harness and benchmark-version differences remain material.
- **Cost efficiency: 68/100.** Moderate $2/$12 pricing, with long-prompt surcharges.
- **Overall Score: 87/100.** Half-up mean of the five quality dimensions = 87.2, rounded to 87; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent public research; normalized interpretations, not official scores.
- Future sources: add separate signed reports with these headings.
