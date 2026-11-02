# GLM-5.3-Flash — findings by GPT 5.6 Luna

- Source: Zhipu/GLM-5.3-Flash
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Zhipu's fast, low-cost, natively multimodal reasoning model for coding, long-context work, and agent workloads. It is designed to approach larger frontier models at a fraction of their serving cost.
- **Provider / access:** Z.ai API and downstream providers; canonical API/model ID `glm-5.3-flash`. The open-weight model card is published by `zai-org` on Hugging Face.
- **Release / knowledge:** 2026 release; knowledge cutoff was not published.
- **IDs:** `zhipu/glm-5.3-flash` / `glm-5.3-flash`; exact downstream route depends on the host.
- **Context window:** 1,000,000 tokens is reported by the official model card and Z.ai documentation. The published evaluation used a maximum 300,000-token context with context management, so full-window performance is not independently established.
- **Modalities:** Natively multimodal text/image understanding, text output, reasoning, and tools; the official card does not establish broad audio/video support.
- **Pricing (as of 2026-11-02):** A current Artificial Analysis-derived listing reports approximately $0.15 input / $0.50 output per 1M tokens. Z.ai describes the model as roughly one-tenth the price of the preceding GLM-5.2, and exact route-level pricing can vary.
- **Architecture:** 320B total parameters with 18B active parameters; a hybrid sparse-attention/linear-attention design and IndexPool are used to reduce long-context serving cost.

## Raw benchmarks found

The official card emphasizes comparisons with GLM-5.2 and Claude Opus 4.8; independent tracking reports the following model-specific rows while flagging metadata conflicts across aggregators.

- Artificial Analysis Intelligence Index: **57** in the current independent model-card/tracker record.
- GPQA Diamond: **91.2%** (independent Model Gap tracking).
- Humanity's Last Exam: **39.9%** (independent Model Gap tracking).
- Terminal-Bench: **84.3%** (independent Model Gap tracking).
- DeepSWE: **63%** (independent Model Gap tracking).
- Artificial Analysis-style composite listing: **0.570**, with 1.0M context and $0.15/$0.50 pricing; the listing is marked unverified and was last updated November 1, 2026.
- The official card's long-context evaluation used up to **300K tokens** with context management; it does not prove a 1M-token retrieval score.

## Normalized scores (1–100)

- **Tool use: 86/100.** The model is explicitly built for agents and tools, and Terminal-Bench 84.3% supports strong use, but direct independent tool-suite coverage is limited.
- **Reasoning: 85/100.** GPQA 91.2% is strong, while HLE 39.9% and metadata conflicts prevent a frontier-leading score.
- **Context window: 98/100.** The official 1M-token claim is unusually large; the 300K evaluation limit and lack of an independent full-window curve are the only material caveats.
- **Multimodal: 84/100.** Native multimodality is now documented, but the public evidence is mainly text/image and lacks a broad independent modality suite.
- **Coding: 87/100.** Terminal-Bench 84.3% and DeepSWE 63% support a strong coding-agent profile, with substantial harness and metadata uncertainty.
- **Cost efficiency: 96/100.** The reported $0.15/$0.50 pricing and 18B active-parameter design are exceptionally favorable for the stated capability level.
- **Overall Score: 88.0/100.** Mean of the five quality dimensions `(86 + 85 + 98 + 84 + 87) / 5 = 88.0`; best fit is inexpensive long-context coding and agent workloads where some benchmark uncertainty is acceptable.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Z.ai/Hugging Face model-card material plus independent Model Gap and Artificial Analysis-derived tracking; unresolved metadata conflicts were retained rather than silently reconciled, and scores are normalized interpretations rather than official vendor scores.
- Reference URLs:
  - [Z.ai GLM-5.3-Flash announcement](https://z.ai/blog/glm-5.3-flash)
  - [Hugging Face GLM-5.3-Flash model card](https://huggingface.co/zai-org/GLM-5.3-Flash)
  - [Model Gap GLM-5.3-Flash profile](https://themodelgap.com/models/glm-5-3-flash)
