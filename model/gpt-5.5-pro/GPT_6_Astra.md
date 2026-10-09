# GPT-5.5 Pro — findings by GPT 6 Astra

- Source: OpenAI / GPT-5.5 Pro
- Date: 2026-10-09 (UTC); user-authorized refresh of October 3.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** GPT-5.5 Pro.
- **Short description:** Extra-compute GPT-5.5 variant for difficult research and professional work; distinct from the base model.
- **Provider / access:** OpenAI Responses API; Batch supported.
- **Release / knowledge:** April 2026; December 1, 2025 knowledge cutoff.
- **IDs:** `openai/gpt-5.5-pro`, snapshot `gpt-5.5-pro-2026-04-23`; no verified Free Zen ID.
- **Context window:** 1,050,000 tokens; maximum output 128,000.
- **Modalities:** Text/image input, text output; medium/high/xhigh reasoning, function calls and structured outputs. Native audio/video absent. Computer use and tool search are unsupported; image generation is a separate tool.
- **Pricing (as of 2026-10-03):** $30 input / $180 output per million tokens; no cached-input rate listed.
- **Architecture:** Proprietary; parameter counts undisclosed. Specifications: [official model documentation](https://developers.openai.com/api/docs/models/gpt-5.5-pro).

### Original October 3 evidence

Preserved for comparison. AA numeric snapshots remain historical unless explicitly reverified below. Original missing-data statements are superseded where the refresh provides new evidence.

Agent / tool use:

- BrowseComp: **90.1%**; GDPval wins/ties: **82.3%**, not GDPval-AA Elo. OpenAI research environment, xhigh reasoning: [launch evaluations](https://openai.com/index/introducing-gpt-5-5/).
- Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon, MCP Atlas and SWE Atlas: no verified public score found for this exact Pro variant.

Reasoning / knowledge:

- HLE: **43.1% without tools**, **57.2% with tools**; FrontierMath Tier 1–3 **52.4%**, Tier 4 **39.6%**; GeneBench **33.2%**. Same [vendor evaluation table](https://openai.com/index/introducing-gpt-5-5/).
- GPQA Diamond, LCR/MLCR, CritPt, AA Intelligence Index, BenchLM and Omniscience: no verified public score found for Pro.

Coding:

- SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE and Coding Index: no verified public score found for Pro. The launch table leaves Pro coding cells blank; base-model coding results are only a provisional family proxy.

Long context:

- No verified Pro-specific retrieval result found; base GPT-5.5 MRCR/Graphwalks results are not Pro measurements.

### October 9 refresh

Current documentation says **streaming unsupported**, function calling and structured outputs supported; hosted shell and code interpreter are supported, but computer use, apply patch and tool search are unsupported. Background mode is recommended for long-running requests. [Model specification](https://developers.openai.com/api/docs/models/gpt-5.5-pro)

The launch table still publishes BrowseComp 90.1% and GDPval 82.3% for this Pro variant, with blank coding cells. A targeted official-source search did not close exact-Pro coding gaps. [Launch evaluation](https://openai.com/index/introducing-gpt-5-5/)

PDF input is supported through Responses: vision models receive extracted text and page images. [File-input documentation](https://developers.openai.com/api/docs/guides/file-inputs)

The exact model's current API page reconfirms the original context/output limits and standard token prices. API features above follow the feature/tool matrix, not the site's generic endpoint navigation. [Official specification](https://developers.openai.com/api/docs/models/gpt-5.5-pro)

### Comparison and remaining gaps

Coding 80 remains explicitly provisional. Tool availability is not a measured tool-success score. Multimodal changes from 70 to 80 for verified PDF handling; this corrects omitted evidence rather than establishing a newly added capability. Other dimensions stay unchanged. Overall: **85 → 87**. Original ratings (Tool, Reasoning, Context, Multimodal, Coding, Cost): 88, 94, 95, 70, 80, 15.

No measured improvement between October 3 and October 9 is inferred. Vals v1.1 measures app building, not Vibe1-100; its October 7 page date is not a run date. Scale V2 is not original SWE-Pro or SWE-bench Verified. Costs and scores depend on harness and effort. Remaining unverified exact-ID suites and full-window retrieval remain gaps; Pro/base models are never interchangeable.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong BrowseComp and GDPval support research workflows; missing terminal results and computer-use support cap breadth.
- **Reasoning: 94/100.** HLE and FrontierMath establish high-end reasoning, with limited independent corroboration.
- **Context window: 95/100.** Million-token capacity meets the top size tier; unverified retrieval prevents a perfect score.
- **Multimodal: 80/100.** Image and PDF input meet the PDF-input tier; native audio/video and non-text output are not established.
- **Coding: 80/100.** Provisional family-level estimate from GPT-5.5's coding specialization; no exact Pro coding measurement supports a frontier claim.
- **Cost efficiency: 15/100.** $30/$180 pricing substantially limits routine deployment value despite research strength.
- **Overall Score: 87/100.** Half-up mean of the five quality dimensions = 87.4, rounded to 87; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent public web research; normalized scores are interpretations, not official vendor scores. Coding is provisional.
- Future sources: Add a separate signed findings file alongside this report.
