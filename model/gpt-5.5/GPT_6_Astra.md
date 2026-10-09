# GPT-5.5 — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.5
- Date: 2026-10-09 (UTC); user-authorized refresh of October 3.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** GPT-5.5, xhigh evaluated
- **Short description:** Proprietary professional reasoning and coding model.
- **Provider / access:** OpenAI Responses and Chat Completions APIs.
- **Release / knowledge:** April 2026 snapshot; December 1, 2025 cutoff.
- **IDs:** `gpt-5.5-2026-04-23`; Zen Free ID unverified.
- **Context window:** 1,050,000; output 128,000.
- **Modalities:** Text/image input, text output; reasoning, tools, structured output.
- **Pricing (as of 2026-10-03):** $5/$30 input/output, $0.50 cache per million; above 272K input, input doubles and output increases 1.5x.
- **Architecture:** Proprietary; parameter count undisclosed. [Official specifications](https://developers.openai.com/api/docs/models/gpt-5.5)

### Original October 3 evidence

Preserved for comparison. AA numeric snapshots remain historical unless explicitly reverified below. Original missing-data statements are superseded where the refresh provides new evidence.

Agent / tool use:

- GDPval-AA v2.1 1353 Elo; AutomationBench-AA 47%; Terminal-Bench 4.0 15%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Intelligence Index 38; HLE 46%; CritPt 27%; Omniscience index 21. GPQA / hallucination rate: no verified public score found.

Coding:

- SciCode 56%; SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found in reviewed measurements.

Long context:

- AA-LCR v1.1 84%; full-window needle retrieval unverified.

Measurements: [AA comparison](https://artificialanalysis.ai/models/comparisons/gpt-5-5-low-vs-gpt-5-5), xhigh column; revised suites are not directly comparable to historical anchors.

### October 9 refresh

- Vibe Code Bench v1.1, OpenHands: **69.85%**, **$16.66/test**. [Vals leaderboard](https://www.vals.ai/benchmarks/vibe-code)

SWE Atlas Codebase QnA **45.43 ± 5.08**, Codex, xhigh. [Scale QnA](https://labs.scale.com/leaderboard/sweatlas-qna). MCP Atlas **75.30 ± 2.70**, xhigh. [Scale MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas)

The vendor launch additionally reports Terminal-Bench 2.0 **82.7%**, SWE-Bench Pro Public **58.6%**, and MRCR v2 eight-needle **87.5% at 128K–256K**. These do not replace the historical AA Terminal-Bench 4.0 result or establish full-window retrieval. [Launch evaluation](https://openai.com/index/introducing-gpt-5-5/)

PDF input is supported through Responses: vision models receive extracted text and page images. [File-input documentation](https://developers.openai.com/api/docs/guides/file-inputs)

The exact model's current API page reconfirms the original context/output limits and standard token prices. API features above follow the feature/tool matrix, not the site's generic endpoint navigation. [Official specification](https://developers.openai.com/api/docs/models/gpt-5.5)

### Comparison and remaining gaps

Coding increases from 82 to 86 with broader exact-model repository and application evidence. Multimodal changes from 70 to 80 for verified PDF handling; this corrects omitted evidence rather than establishing a newly added capability. Other dimensions stay unchanged. Overall: **82 → 85**. Original ratings (Tool, Reasoning, Context, Multimodal, Coding, Cost): 78, 87, 95, 70, 82, 45.

No measured improvement between October 3 and October 9 is inferred. Vals v1.1 measures app building, not Vibe1-100; its October 7 page date is not a run date. Scale V2 is not original SWE-Pro or SWE-bench Verified. Costs and scores depend on harness and effort. Remaining unverified exact-ID suites and full-window retrieval remain gaps; Pro/base models are never interchangeable.

### Normalized scores (1–100)

- **Tool use: 78/100.** Useful workflow performance but weak newer terminal results.
- **Reasoning: 87/100.** Strong HLE and scientific reasoning, with factual reliability gaps.
- **Context window: 95/100.** Above-1M documented capacity; no retrieval bonus justified.
- **Multimodal: 80/100.** Image and PDF input meet the PDF-input tier; native audio/video and non-text output are not established.
- **Coding: 86/100.** Newly verified exact-model coding results broaden evidence; harness and benchmark-version differences remain material.
- **Cost efficiency: 45/100.** $5/$30 pricing and long-context surcharges reduce value.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions = 85.2, rounded to 85; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent fresh research; normalized interpretations, not official scores.
- Future sources: add separate signed reports with these headings.
