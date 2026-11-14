# Qwen3.8-Flash — findings by Hy3

- Source: Alibaba (`qwen-3.8-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash
- **Short description:** Alibaba's production Flash model (2026-08-26), built on the open-weight Qwen3.8-Flash-Next architecture preview. Defaults to 1M context with official built-in tools; supports thinking and standard modes. Multimodal MoE.
- **Provider / access:** Alibaba BaiLian (Model Studio), Qwen AI Platform, Qoder. Chat Completions API; open weights (Flash-Next).
- **Release / knowledge:** Released 2026-08-26 (Flash-Next open weights same day).
- **IDs:** `qwen/qwen-3.8-flash`
- **Context window:** 1,000,000 tokens (default; verified).
- **Modalities:** text, image, video in; text out; reasoning (thinking mode); tool calls.
- **Pricing (as of 2026-11-14:** competitive API; open weights available — strong value.
- **Architecture:** multimodal MoE (Flash-Next: 125B MoE / 6B active per CSDN).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / τ²-Bench figure found this pass
- Official built-in tools; "top-1 on many text benchmarks (coding, agent, general)" (Zhihu)

Reasoning / knowledge:

- No verified public GPQA/HLE figure found this pass

Coding:

- Text benchmarks (coding/agent/general): **rank #1 among peer models** (Zhihu, no exact number)

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** Built-in tools + #1 agent-text benchmark claim; capped by no public agentic benchmark number.
- **Reasoning: 87/100.** Thinking-mode reasoning flagship; no public GPQA/HLE figure found.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 88/100.** Multimodal MoE (text/image/video in).
- **Coding: 87/100.** #1 coding-text benchmark claim implies strong coding; no public SWE-bench number found.
- **Cost efficiency: 85/100.** Competitive API + open weights — strong value.
- **Overall Score: 89/100.** Mean of the five non-cost dims (86+87+99+88+87)/5 = 89.4 → 89. Best-fit: open-weight multimodal Flash with 1M context and built-in tools, gated by thin public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Aliyun dev community, CSDN, Zhihu; independent of peer `model/` findings.
- Reference URLs:
  - [Qwen3.8-Flash intro (Aliyun)](https://developer.aliyun.com/article/1761164)
  - [Qwen3.8-Flash-Next deploy (CSDN)](https://blog.csdn.net/deepin20100/article/details/164748417)
  - [Qwen3.8-Flash release (CSDN)](https://blog.csdn.net/aidoudoulong/article/details/164097986)
  - [Qwen3.8-Flash view (Zhihu)](https://www.zhihu.com/question/2076062310221747473)
