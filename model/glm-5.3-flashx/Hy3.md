# GLM-5.3-FlashX — findings by Hy3

- Source: Zhipu AI / Z.ai (`glm-5.3-flashx`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Zhipu's high-speed variant of GLM-5.3-Flash (2026-09-18); native multimodal with up to 200 tokens/s inference (5× the base Flash). Pricing is 2.5× GLM-5.3-Flash.
- **Provider / access:** BigModel (Z.ai) platform, OpenCode, OpenRouter (`glm-5.3-flashx`). Chat Completions API.
- **Release / knowledge:** Released 2026-09-18.
- **IDs:** `zhipu/glm-5.3-flashx`
- **Context window:** not separately disclosed this pass (GLM-5.3 family; treated as undisclosed/moderate).
- **Modalities:** text, image, video in; text out; reasoning; tool calls (native multimodal).
- **Pricing (as of 2026-11-14):** 2.5× GLM-5.3-Flash (still low); open-weights lineage.
- **Architecture:** sparse MoE, open-source lineage (GLM-5.3 family).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench figure found this pass (inherits GLM-5.3-Flash agentic strength)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench figure found this pass (GLM Coding Plan driven by GLM-5.3 flagship)

Long context:

- Context window undisclosed this pass; no public MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 86/100.** Inherits GLM-5.3-Flash's #1-open TerminalBench 3.0 / Agents' Last Exam CLI; capped by no FlashX-specific number.
- **Reasoning: 86/100.** Frontier-tier reasoning (same family); no public GPQA/HLE figure found.
- **Context window: 85/100.** Undisclosed window; assigned moderate-strong tier.
- **Multimodal: 85/100.** Native multimodal (text/image/video).
- **Coding: 86/100.** Coding-Plan lineage implies strong coding; no public SWE-bench number found.
- **Cost efficiency: 80/100.** 2.5× Flash pricing but still low-cost + open lineage — good value.
- **Overall Score: 86/100.** Mean of the five non-cost dims (86+86+85+85+86)/5 = 85.6 → 86. Best-fit: high-speed open multimodal FlashX with strong family agentic coding, gated by undisclosed context and limited FlashX-specific disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Z.ai BigModel platform; independent of peer `model/` findings.
- Reference URLs:
  - [GLM-5.3-FlashX — Baidu Baike](https://baike.baidu.com/item/GLM-5.3-FlashX/69084140)
  - [GLM-5.3 — Baidu Baike](https://baike.baidu.com/item/GLM-5.3/68244961)
  - [Z.ai BigModel platform](https://bigmodel.cn/)
