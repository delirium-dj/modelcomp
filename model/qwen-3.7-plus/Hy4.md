- Source: Alibaba/Qwen3.7-Plus
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.7-Plus
- **Short description:** Alibaba Qwen's 2026-06-02 unified vision-language multimodal interactive agent model (preview 2026-05-19), the multimodal upgrade of the Qwen3.7 series and a foundation for AI agents. A distinct model; Qwen3.7-Max and the Qwen3.8 series are separate, and the bare `qwen-3.7` name is a **parked** family shorthand per the project identity roster (never scaffolded or written).
- **Provider / access:** Alibaba Cloud Bailian (百炼) and Qwen Studio; OpenAI-compatible API and Anthropic protocol; Qwen Chat and Arena AI for the preview. Cloud API only (the preview was explicitly **not open-sourced**).
- **Release / knowledge:** preview 2026-05-19, GA 2026-06-02; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.7-plus` family ID as cited; preview `Qwen3.7-Plus-Preview`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens** shared with Qwen3.7-Max (per a secondary Aliyun developer comparison); the primary Baike excerpt does not state a figure — reported with its provenance.
- **Modalities:** **image, video, screen, web page and text in; text out**; visual understanding, reasoning, cross-modal tasks, coding, tool calling, productivity workflows. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Hybrid-Agent system built on it can autonomously complete the full app-development chain from requirements to version iteration.

### Raw benchmarks found

Agent / tool use:

- Vision Arena: Alibaba ranked **global top 5, #1 in China** (vendor-level ranking, not a Qwen3.7-Plus-specific score)
- BabyVision and OSWorld-Verified: reported improvements in multimodal benchmarks (no exact figures in the retrieved excerpt)
- Hybrid-Agent full-chain app development from requirements to version iteration (qualitative)
- Preview restriction: thinking mode only, with search and code-interpreter tools unavailable — a documented limitation of the preview ID
- Tau3-Banking / Tau2-Bench / GDPval-AA / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Strengthened reasoning and cross-modal task handling (qualitative)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Retained coding and tool-calling capability with agent-driven app delivery (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window (secondary source) with long-webpage/document inputs; no MRCR / RULER / GraphWalks figure found — no verified public score found

Generational context (not this model): the later Qwen3.8-Flash used a next-generation architecture with training/inference costs "dramatically lower" than Qwen3.7-Plus — a comparison, not a Qwen3.7-Plus score.

### Normalized scores (1–100)

- **Tool use: 86/100.** Native tool calling, a Hybrid-Agent system that delivers full app iterations, and five input modalities including screen and web pages; capped by no scored agent harness and by preview-mode tool restrictions.
- **Reasoning: 84/100.** Unified vision-language reasoning with documented cross-modal gains; capped by no published numeric reasoning benchmark for this exact ID.
- **Context window: 89/100.** A 1M-token window (secondary source) with long webpage/video/document inputs; capped by the figure not being in the primary source and no retrieval benchmark.
- **Multimodal: 91/100.** Image, video, screen, web page and text input — among the broadest input sets for its generation — with Vision Arena top-5 standing; capped by text-only output, no verified audio input, and no per-model multimodal score.
- **Coding: 83/100.** Retained coding/tool use with agent-driven delivery; capped by zero published named coding benchmark scores for this exact ID.
- **Cost efficiency: 82/100.** Cloud API with an efficient Plus-tier positioning and a successor generation that cut costs sharply; capped by closed weights, no rate card and no free tier. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 86, 84, 89, 91, 83 = 86.6 → 87. Best fit: multimodal agent workflows over screens, web pages, images and video; note the parked bare-family identity and the newer Qwen3.8 generation.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.7-Plus article retrieved via public web search excerpt (release, modalities, Vision Arena standing, Hybrid-Agent, platform access), plus the Baidu Baike Qwen3.7-Plus-Preview excerpt for preview limitations and a secondary Aliyun developer page for the 1M context — labelled secondary. Directional "improvements" are not assigned numbers. Identity handling follows the project's generated roster: the bare `qwen-3.7` family name is parked and is never queued, researched or written; research belongs in the member folder for the ID actually cited. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3.7-Plus模型 — 百度百科 (retrieved via search excerpt; specs, modalities, Vision Arena)](https://baike.baidu.com/item/Qwen3.7-Plus%E6%A8%A1%E5%9E%8B/67910842)
  - [Qwen3.7-Plus-Preview — 百度百科 (retrieved via search excerpt; preview limitations)](https://baike.baidu.com/item/Qwen3.7-Plus-Preview/67808519)
