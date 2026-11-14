- Source: Alibaba Qwen/Qwen3.8-Omni-Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Omni-Flash
- **Short description:** Alibaba Qwen's 2026-09-18 **natively omni-modal** model, moving beyond "understanding omni content" to planning tasks, calling tools and completing creation. A distinct model; Qwen3.8-Flash, Qwen3.8-27B, Qwen3.8-Max and the realtime variant are separate.
- **Provider / access:** Cloud-hosted only (**weights not open**), via Alibaba Bailian and the 千问 platform across Beijing, Singapore, Hong Kong China, Tokyo, Frankfurt and Virginia regions. The `Qwen-MM-Plugins` multimodal plugin toolkit was open-sourced alongside, and `Qwen-Live-Harness` for realtime continuous audio/video interaction was announced. A separate `Qwen3.8-Omni-Flash-Realtime` SKU supports live spoken-language practice.
- **Release / knowledge:** 2026-09-18; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.8-omni-flash` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, with native support for up to **1 hour of continuous audio/video input**.
- **Modalities:** **text, image, audio and video in; text out**. On-demand long audio/video captioning, agentic active evidence gathering, meeting-task advancement, video deep-research reports, controllable captions (object / time range / granularity / output format); one-hour meetings with speaker diarisation, transcription, identity mapping, minutes, action items and project-risk analysis; tool calls to send email/organise tasks/code; Music2MV, short-drama translation, long-film narration. No verified non-text output.
- **Pricing (as of 2026-11-14):** API hourly audio input price cut **>98%** and hourly audio+video input price cut **>93%** vs the previous Qwen3.5-Omni-Plus generation (relative claims); no absolute rate card in the retrieved pages — no verified public price found.
- **Architecture:** Natively omni-modal; parameter count not disclosed; cloud-hosted, closed weights.

### Raw benchmarks found

Agent / tool use:

- AliMeeting test: speaker error rate **3.35**, speaker-attributed word error rate **17.18**
- 29 benchmarks: average score **improved >25%** vs Qwen3.5-Omni-Plus (vendor claim, relative)
- Long audio/video: on-demand description, agentic evidence gathering, meeting advancement, video deep research; one-hour meeting processing with diarisation/transcription/minutes/action items
- Tool calling for email, task organisation and coding; direct GUI-free content generation workflows
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Audio/video capability described as close to Gemini 3.8 Flash overall and **exceeding it on audio** (vendor claim, directional)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Tool-assisted coding within meeting/agent workflows (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window with up to 1-hour continuous audio/video and long-video deep-research reports; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** Genuine agentic omni workflows (planning, tool calls, meeting task advancement, email/task/code execution) with a 3.35 speaker-error rate and one-hour meeting processing; capped by no scored agent harness and the "improved >25%" figure being a relative vendor claim.
- **Reasoning: 84/100.** A 29-benchmark average gain and long-video deep-research reporting; capped by no numeric reasoning benchmark for this exact ID and no third-party replication of the vendor claims.
- **Context window: 94/100.** A verified 1M-token window with native one-hour continuous audio/video input — the longest verified media input in this comparison set; capped by no standard retrieval benchmark.
- **Multimodal: 97/100.** True native text + image + audio + video input with diarisation, caption control, Music2MV, translation and narration — the broadest modality coverage here; capped only by text-only output.
- **Coding: 80/100.** Tool-assisted coding inside agent workflows; capped by zero published coding benchmark scores for this exact ID — this is a media/agent model, not a coding model.
- **Cost efficiency: 91/100.** >98% audio and >93% audio+video hourly input price cuts, with six-region cloud availability; capped by closed weights and no absolute rate card. Excluded from Overall.
- **Overall Score: 89/100.** Half-up mean of 88, 84, 94, 97, 80 = 88.6 → 89. Best fit: long audio/video understanding, meeting automation and omni-modal agentic content production — not coding-focused work.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.8-Omni-Flash article retrieved via public web search excerpt (release, four input modalities, 1M context, 1-hour media, AliMeeting 3.35/17.18, cloud-only hosting, regions, plugins) and the Baidu Baike Qwen3.8 article (already fetched) for long audio/video capabilities. Launch coverage supplies the 29-benchmark >25% gain and the >98%/>93% price cuts, both labelled relative vendor claims, not absolute scores or prices. The Realtime variant and Qwen-Live-Harness are treated as separate SKUs. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [Qwen3.8-Omni-Flash — 百度百科 (retrieved via search excerpt; specs, AliMeeting, hosting)](https://baike.baidu.com/item/Qwen3.8-Omni-Flash/69084226)
  - [Qwen3.8 — 百度百科 (long audio/video capabilities, 1M context)](https://baike.baidu.com/item/Qwen3.8/68311983)
