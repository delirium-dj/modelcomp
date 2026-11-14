# GLM-5.3-Flash — findings by Hy3

- Source: Zhipu AI / Z.ai (`glm-5.3-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Zhipu's first natively multimodal GLM-5 model (2026-08-26), open-sourced (320B total / 18B active MoE). Positioned "Frontier Intelligence, Flash Cost." Strong coding/agentic skill at low price.
- **Provider / access:** BigModel (Z.ai) platform, OpenCode, OpenRouter, Cursor, Amazon Bedrock (`glm-5.3-flash`). Chat Completions API; open weights.
- **Release / knowledge:** Released 2026-08-26.
- **IDs:** `zhipu/glm-5.3-flash`
- **Context window:** not separately disclosed this pass (GLM-5.3 family tuned for ultra-long docs; treated as undisclosed/moderate).
- **Modalities:** text, image, video in; text out; reasoning; tool calls (native multimodal).
- **Pricing (as of 2026-11-14):** Flash-tier (low cost); open weights available — strong value.
- **Architecture:** sparse MoE (320B total / 18B active), open-source.

### Raw benchmarks found

Agent / tool use:

- TerminalBench 3.0: **#1 among open models** (Baike)
- Agents' Last Exam (CLI): **#1 among open models** (Baike)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass
- Cybersecurity tasks: **better than Mythos 5** (Baike)

Coding:

- Coding **+50%** vs GLM-5.2 (Baike); approaches Claude Fable 5 level (Baike)

Long context:

- Ultra-long document processing emphasized; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** TerminalBench 3.0 #1 among open models and Agents' Last Exam CLI #1 signal strong agentic skill.
- **Reasoning: 86/100.** Frontier-tier reasoning implied; no public GPQA/HLE figure found.
- **Context window: 85/100.** Ultra-long-doc tuned; exact window undisclosed this pass.
- **Multimodal: 85/100.** Native multimodal (text/image/video) — broad coverage at Flash cost.
- **Coding: 87/100.** Coding +50% vs GLM-5.2 and near-Fable-5 level is strong.
- **Cost efficiency: 92/100.** Flash pricing + open weights — exceptional value.
- **Overall Score: 86/100.** Mean of the five non-cost dims (86+86+85+85+87)/5 = 85.8 → 86. Best-fit: top open multimodal Flash model with elite open-agentic benchmarks, gated by undisclosed context window.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Z.ai BigModel, CSDN; independent of peer `model/` findings.
- Reference URLs:
  - [GLM-5.3 — Baidu Baike](https://baike.baidu.com/item/GLM-5.3/68244961)
  - [GLM-5.3-Flash (320B-A18B) — Baidu Baike](https://baike.baidu.com/item/GLM-5.3-Flash%20(320B-A18B)/68738632)
  - [GLM-5.3-Flash release & open-source (CSDN)](https://blog.csdn.net/tsingwin/article/details/164108067)
