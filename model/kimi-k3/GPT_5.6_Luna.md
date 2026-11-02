# Kimi K3 — findings by GPT-5.6 Luna

- Source: Moonshot AI / Kimi K3
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight, native-multimodal reasoning model for long-horizon coding, agentic knowledge work, visual workflows, and large repositories. K3 is distinct from the later K3.1 Pro line; it is not a subscription tier.
- **Provider / access:** Moonshot Kimi API (`kimi-k3` at `https://api.moonshot.ai/v1`, OpenAI-compatible Chat Completions), Kimi Code (`k3`), OpenRouter (`moonshotai/kimi-k3`), and self-hosted deployment with vLLM, SGLang, or TokenSpeed recipes. The official API requires a successful minimum $1 top-up for flagship access.
- **Release / knowledge:** 2026-07-16 hosted release; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k3` (OpenRouter), `kimi-k3` (Moonshot API), and `k3` (Kimi Code). The full checkpoint is available from `moonshotai/Kimi-K3` on Hugging Face.
- **Context window:** 1,048,576 tokens. The API guide says `max_completion_tokens` defaults to 131,072 and can be configured up to 1,048,576, subject to the total context limit; this is not a guarantee of 1M simultaneous input plus output.
- **Modalities:** Text and image are explicit in the official model summary. The introduction and API guide also document video understanding/file input, including a video request example; this conflicts slightly with the summary table, so video is credited as documented capability but not treated as unqualified audio/video support. Text output, always-on reasoning, tool calls, structured output, and preserved thinking history are supported. Audio was not verified.
- **Pricing (as of 2026-11-02):** Native Kimi API: $3.00 cache-miss input / $0.30 cache-hit input / $15.00 output per 1M tokens; cache writes are billed separately by TTL. OpenRouter displays a different provider-route price (about $0.1495 input / $7.15 output), which is not substituted for Moonshot's first-party rate. K3 API inputs/outputs are not free; public weights offer a separate self-hosting path.
- **Architecture:** Open-weight 2.8T-parameter sparse MoE with 104B active parameters, 93 layers, 896 routed experts with 16 selected per token and 2 shared experts, Kimi Delta Attention (KDA), Gated MLA, Attention Residuals, Stable LatentMoE, MoonViT-V2 (401M vision encoder), and MXFP4 weights / MXFP8 activations. Released under the custom Kimi K3 License, not an automatically permissive MIT/Apache license.

### Raw benchmarks found

> Moonshot's official table uses K3 at maximum reasoning, temperature 1.0, and mixes Kimi Code, other agent harnesses, internal tests, and externally sourced competitor results. Independent sources confirm frontier-level capability but warn that harness choice, context compaction, and grading definitions materially affect comparisons.

Agent / tool use:

- BrowseComp: **91.2%** with 300K-token context compaction; the model-card footnote reports **90.4%** with the full 1M context and no compaction.
- DeepSearchQA (F1): **95.0%**.
- Toolathlon-Verified: **76.5%**.
- MCPMark-Verified: **94.5%**.
- MCP-Atlas: **84.2%**.
- GDPval-AA v2: **1686 Elo**.
- AutomationBench: **30.8%**; JobBench: **54.3%**; OSWorld-Verified: **84.8%**; OSWorld 2.0: **58.3%**.
- τ³-Banking: **33.4%**; Agents' Last Exam: **28.3%**; SpreadsheetBench 2: **34.8%**.
- Independent comparison: WhatLLM and NxCode describe K3 as frontier-level but emphasize that the official table mixes Kimi Code, Claude Code, Codex, mini-SWE-agent, fallbacks, and provider results. The 91.2/90.4 BrowseComp pair is a concrete reminder that context management can change the result.

Reasoning / knowledge:

- GPQA Diamond: **93.5%**.
- HLE-Full: **43.5% without tools / 56.0% with tools**.
- AA-LCR: **74.7%**.
- CritPt: **23.4%**.
- Artificial Analysis historical snapshots: WhatLLM reports **59.7 Intelligence**, **76.2 Coding**, and **54.3 Agentic** (August 28); Kili reports an Intelligence Index score of **57** and highlights a **51% hallucination rate** on AA-Omniscience. The current Artificial Analysis model page now marks K3 deprecated and shows Intelligence Index **N/A**, so these are versioned historical signals rather than a current live composite.
- Kili's interpretation is important: AA-Omniscience accuracy rose to about **46%** while hallucination rate rose to **51%**; higher benchmark accuracy did not imply calibrated refusal. This is a reliability caveat, not a contradiction in the raw accuracy score.

Coding:

- DeepSWE v1.1: **67.5%** with Kimi Code; **67.3%** with mini-SWE-agent (Moonshot/NxCode reporting; common-harness result is the more comparable one).
- ProgramBench: **77.8% raw hidden-test pass rate**; this is not the same as fully resolving 77.8% of programs.
- Terminal-Bench 2.1: **88.3%** (Kimi Code harness).
- FrontierSWE: **81.2 dominance**.
- SWE-Marathon: **42.0%**; PostTrainBench **36.6%**; MLS-Bench-Lite **48.3%**.
- SciCode: **58.7%**; Kimi Code Bench 2.0: **72.9%** (in-house).
- No official K3 score was reported for SWE-bench Verified or LiveCodeBench. NxCode and WhatLLM both caution that the benchmark table's model-plus-harness scores do not establish a universal best coding model.

Long context:

- Official context limit: **1,048,576 tokens**. AA-LCR is **74.7%**. BrowseComp is **91.2% with 300K compaction** versus **90.4% with the full 1M context**, so capacity is verified but perfect long-context retrieval is not.
- KDA is claimed by Moonshot to improve long-sequence decoding efficiency; this is an architectural/vendor claim, not a retrieval benchmark.

Multimodal:

- MMMU-Pro: **81.6% without tools / 83.4% with Python**.
- Video-MME with subtitles: **90.0%**.
- OmniDocBench: **91.1%**; MMVU **82.1%**; CharXiv **84.8/91.3** depending metric; ZeroBench pass@5 **23/41**.
- The official summary table says text/image, while the introduction/API guide document video. I report that conflict rather than silently treating K3 as audio/video-universal.

### Normalized scores (1–100)

- **Tool use: 90/100.** MCPMark 94.5, DeepSearchQA 95, BrowseComp 91.2, OSWorld-Verified 84.8, and Terminal-Bench 88.3 are strong; AutomationBench 30.8, OSWorld 2.0 at 58.3, and mixed harnesses cap the score.
- **Reasoning: 92/100.** GPQA 93.5, HLE with tools 56.0, AA-LCR 74.7, and historical independent Intelligence Index results support frontier reasoning; CritPt 23.4, index/version drift, and the 51% hallucination-rate signal prevent a higher rating.
- **Context window: 97/100.** The 1M window and KDA design earn the top context tier, but the BrowseComp 90.4 full-window result is below the methodology's 98% retrieval ceiling and no clean MRCR 1M score was verified.
- **Multimodal: 88/100.** Strong official MMMU-Pro, Video-MME, OmniDocBench, and image capabilities justify the video/PDF band; audio is unverified and official modality wording is inconsistent.
- **Coding: 90/100.** Terminal-Bench 88.3, FrontierSWE 81.2, ProgramBench 77.8 raw, SciCode 58.7, and long-horizon evidence are frontier-level, but DeepSWE 67.3/67.5, missing SWE-bench/LiveCodeBench, and mixed agent harnesses cap it.
- **Cost efficiency: 60/100.** First-party $3/$15 pricing is in the methodology's roughly $3/$15 band; cached input and public weights improve flexibility, but native output is expensive and self-hosting requires datacenter-scale infrastructure.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions `(90 + 92 + 97 + 88 + 90) / 5 = 91.4`; best fit is long-horizon coding, visual agent work, and large-context research where open weights and deployment control justify the cost.

---

## Signature

- Provided by: **GPT-5.6 Luna (openai/gpt-5.6-luna-fast)** — 2026-11-02
- Method: Four independent web searches plus Moonshot's GitHub model card/API documentation and independent Artificial Analysis, SemiAnalysis, WhatLLM, Kili Technology, NxCode, and OpenRouter sources were compared. Versioned index values, provider-route pricing, and model-plus-harness benchmarks are explicitly separated; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [MoonshotAI GitHub model card and technical details](https://github.com/MoonshotAI/Kimi-K3)
  - [Kimi API K3 quickstart and capabilities](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)
  - [Kimi API pricing](https://platform.kimi.ai/docs/pricing/chat)
  - [Artificial Analysis: Kimi K3 model analysis and deprecation note](https://artificialanalysis.ai/models/kimi-k3)
  - [SemiAnalysis: Kimi K3 architecture and inference analysis](https://inferencex.semianalysis.com/model/kimi-k3)
  - [WhatLLM: independent Kimi K3 benchmark and deployment review](https://whatllm.org/blog/kimi-k3)
  - [Kili Technology: independent benchmark and hallucination analysis](https://kili-technology.com/blog/kimi-k3s-benchmarks-and-hallucinations----what-that-tells-us-about-ai-evaluation)
  - [NxCode: coding-agent benchmark methodology review](https://www.nxcode.io/resources/news/kimi-k3-benchmarks-coding-agent-evaluation-guide-2026)
  - [OpenRouter: Kimi K3 API route](https://openrouter.ai/moonshotai/kimi-k3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
