# GPT-5.2 Pro — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.2 Pro
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's high-compute Pro model for difficult professional and technical questions. It is a separate API model from GPT-5.2 Thinking; this report does not transfer Thinking benchmark results to Pro.
- **Provider / access:** OpenAI API, model ID `gpt-5.2-pro`, available in the **Responses API only**. OpenAI documents function calling, file search, image generation, MCP, and web search tools. The original release also rolled out GPT-5.2 Pro in ChatGPT to paid plans; the current API docs describe it as the previous Pro model and recommend GPT-5.5 Pro. Current ChatGPT availability was not verified.
- **Release / knowledge:** Released **2025-12-11**. API documentation lists an **2025-08-31** knowledge cutoff.
- **IDs:** Default snapshot `gpt-5.2-pro-2025-12-11`; alias `gpt-5.2-pro`.
- **Context window:** **400,000 tokens**, with **128,000 max output**, per OpenAI's model-specific API docs. No exact-Pro long-context retrieval result was found in the launch table.
- **Modalities:** Text and image input; text output. Reasoning supported, with `medium`, `high`, and `xhigh` effort. Tool use is available through the Responses API.
- **Pricing (as of 2026-10-30):** **$21 / MTok input, $168 / MTok output**; no cached-input rate is listed. Standard, non-batch pricing is used here.
- **Architecture:** Proprietary; OpenAI does not publish parameter count or detailed architecture.

### Raw benchmarks found

OpenAI's launch post provides a detailed benchmark table with a dedicated GPT-5.2 Pro column. These are vendor-reported results, run at maximum API reasoning effort (`xhigh`) except where the post identifies a different setup. Results shown only for GPT-5.2 Thinking are intentionally excluded.

Agent / tool use:

- BrowseComp: **77.9%** (OpenAI benchmark table; exact Pro result). BrowseComp evaluates web research/search and is not interchangeable with a general tool-call benchmark.
- GDPval: **74.1% wins-or-ties**, **60.0% clear wins**, and **67.6% no-ties** (OpenAI). These are distinct scoring summaries of the professional-work evaluation, not GDPval-AA Elo.
- No exact-Pro Tau2-bench, MCP-Atlas, Toolathlon, or Claw-Eval score was found.

Reasoning / knowledge:

- GPQA Diamond, no tools: **93.2%**; HLE, no tools: **36.6%**; HLE with search and Python: **50.0%** (OpenAI benchmark table).
- AIME 2025, no tools: **100.0%**; HMMT February 2025, no tools: **100.0%** (OpenAI benchmark table).
- ARC-AGI-1 Verified: **90.5%**; ARC-AGI-2 Verified: **54.2%** (the latter marked “high” in OpenAI's table).
- No exact-Pro Artificial Analysis Intelligence Index, CritPt, or LCR result found.

Coding:

- OpenAI's GPT-5.2 launch table gives no GPT-5.2 Pro result for SWE-Bench Pro, SWE-bench Verified, or SWE-Lancer; those cells are blank. GPT-5.2 Thinking's reported 55.6% SWE-Bench Pro and 80.0% SWE-bench Verified are not attributed to Pro.
- No other exact-Pro LiveCodeBench, SciCode, or coding-agent benchmark score verified.

Long context / multimodal:

- No exact-Pro MRCRv2, BrowseComp Long Context, or other retrieval-at-window-length score found in the launch table. OpenAI reports long-context MRCRv2 results for GPT-5.2 Thinking, not Pro; those numbers are excluded.
- The model supports image input, but no exact-Pro CharXiv, MMMU-Pro, Video-MMMU, or ScreenSpot-Pro score was shown in the launch table.

### Normalized scores (1–100)

- **Tool use: 80/100.** Exact-Pro BrowseComp is 77.9%, and GDPval wins-or-ties is 74.1%; the score is capped by the lack of Tau2/MCP-Atlas/Claw-Eval results and because GDPval's outcome percentage is not the GDPval-AA Elo scale.
- **Reasoning: 92/100.** GPQA is 93.2%, AIME and HMMT each reach 100%, and ARC-AGI-1/2 are 90.5%/54.2%; HLE without tools is 36.6%, below the project's frontier reference, and no independent Intelligence Index was verified.
- **Context window: 78/100.** The documented 400K window falls in the 200K–500K tier; no Pro-specific retrieval result supports a higher score.
- **Multimodal: 65/100.** Text and image input meet the project's image-input band; output is text-only and no Pro-specific audio/video score or input support was verified.
- **Coding: 65/100.** OpenAI describes Pro as strong for programming qualitatively, but its benchmark table has no exact-Pro SWE-bench result, and no exact-Pro LiveCodeBench/SciCode score was found. The GPT-5.2 Thinking coding results are not borrowed.
- **Cost efficiency: 15/100.** At $21/$168 per MTok, GPT-5.2 Pro is exceptionally expensive under the project's inverse-pricing scale; no cache discount is listed.
- **Overall Score: 76/100.** Half-up mean of the five quality dimensions: `(80 + 92 + 78 + 65 + 65) / 5 = 76`. Best suited to difficult reasoning and professional research where output quality justifies very high cost; coding and long-context conclusions remain limited by missing Pro-specific scores.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30
- Method: Four independent public searches, followed by direct review of OpenAI's GPT-5.2 launch post, current GPT-5.2 Pro API model documentation, pricing page, and system-card update. Only rows explicitly populated in the launch post's GPT-5.2 Pro column are attributed to Pro; GPT-5.2 Thinking and other Pro-family results are not substituted. Scores are normalized interpretations, not official ratings.
- Sources: [OpenAI GPT-5.2 release and benchmark table](https://openai.com/index/introducing-gpt-5-2/); [GPT-5.2 Pro API model documentation](https://platform.openai.com/docs/models/gpt-5.2-pro); [OpenAI API pricing](https://platform.openai.com/docs/pricing); [GPT-5.2 system-card update](https://openai.com/index/gpt-5-system-card-update-gpt-5-2/).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
