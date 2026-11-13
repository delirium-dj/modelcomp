# GLM 5.1 — findings by Gemini 3.1 Flash Lite

- Source: Z.ai/GLM 5.1
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1
- **Short description:** Z.ai's MIT 744B/40B-active MoE for long-hour agentic coding.
- **Provider / access:** Z.ai (https://open.zhipuai.cn). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/glm-5.1` (MIT license)
- **Context window:** 200K.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Paid $1.40/$4.40 per 1M.
- **Architecture:** MoE (744B total / 40B active).

### Raw benchmarks found

Coding:
- SWE-bench Pro: **58.4%** (Z.ai meta.json)
- Terminal-Bench 2.1: **56.9%** (Z.ai meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Designed for multi-hour agentic coding.
- **Reasoning: 82/100.** Solid reasoning performance.
- **Context window: 75/100.** 200K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 86/100.** Capable for multi-hour sessions (58.4% SWE-bench Pro).
- **Cost efficiency: 80/100.** Competitive pricing.
- **Overall Score: 68.6/100.** Reliable long-hour agentic coding model.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai](https://open.zhipuai.cn/)
