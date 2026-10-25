# GLM-4.6V-Flash — findings by GPT-5.6 Sol

- Source: Z.ai/GLM-4.6V-Flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.6V-Flash
- **Short description:** Z.ai's open-weight 9B visual-language model for multimodal documents, visual agents, frontend replication, and local low-latency deployment.
- **Provider / access:** Z.ai `glm-4.6v-flash`; weights at `zai-org/GLM-4.6V-Flash`; OpenAI-compatible provider routes.
- **Release / knowledge:** Released 2025-12-08; no public knowledge cutoff found.
- **IDs:** `glm-4.6v-flash`; `zai-org/GLM-4.6V-Flash`.
- **Context window:** 128K trained context and 32K output on first-party metadata; some gateways expose 200K/128K.
- **Modalities:** Text, image, video, and provider PDF input; text output; native multimodal function calling.
- **Pricing (as of 2026-10-25):** Free first-party route; a FlashX host lists about $0.04 input / $0.40 output per 1M tokens.
- **Architecture:** MIT open weights; 9B GLM-V model.

### Raw benchmarks found

Agent / tool use:

- MMBrowseComp: **7.1**; OSWorld: **21.1**; AndroidWorld: **42.7**; WebVoyager: **71.8**; WebQuest SingleQA/MultiQA: **75.1/53.4** (official exact-model benchmark graphic).

Reasoning / knowledge:

- MMMU validation: **71.1**; MMMU-Pro: **60.6**; MathVista: **82.7**; WeMath: **60.0** (official graphic).

Coding:

- Design2Code: **69.8** and Flame-React-Eval: **78.8**. No exact general SWE-bench or LiveCodeBench score was found.

Long context:

- MMLongBench-Doc: **53.0**; MMLongBench-128K: **63.4**; LVBench: **49.5**.

Multimodal:

- MMBench v1.1: **86.9**; VideoMMMU: **70.1**; OCRBench: **84.7**; AI2D: **89.2**.

### Normalized scores (1–100)

- **Tool use: 66/100.** WebVoyager 71.8 and WebQuest 75.1 are useful, but OSWorld 21.1 and MMBrowseComp 7.1 show uneven visual agency.
- **Reasoning: 66/100.** MMMU 71.1 and MathVista 82.7 support solid multimodal reasoning, capped by the absence of exact text-only GPQA/HLE evidence.
- **Context window: 65/100.** The 128K native window is validated by MMLongBench-128K 63.4, with LVBench 49.5 limiting the score.
- **Multimodal: 84/100.** Native image/video/document processing and strong MMBench, OCRBench, and AI2D results support broad visual capability.
- **Coding: 68/100.** Design2Code 69.8 and Flame-React-Eval 78.8 show visual frontend strength, but no general coding-agent benchmark was found.
- **Cost efficiency: 100/100.** The first-party route is free and open weights permit self-hosting.
- **Overall Score: 70/100.** Half-up mean `(66 + 66 + 65 + 84 + 68) / 5 = 69.8`; best for inexpensive visual-document and frontend agents.

### Sources

- Official model card: https://huggingface.co/zai-org/GLM-4.6V-Flash
- Official exact-model benchmark graphic: https://raw.githubusercontent.com/zai-org/GLM-V/refs/heads/main/resources/bench_46v.jpeg
- Official release article: https://z.ai/blog/glm-4.6v
- Provider metadata cross-check: https://models.dev/api.json

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: fresh second-pass research using seven exact-name searches, official docs/card and direct inspection of the official benchmark artifact; scores are normalized interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
