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

- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Paid $1.40/$4.40 per 1M.
- **Architecture:** MoE (744B total / 40B active).

### Raw benchmarks found

- SWE-bench Pro: **58.4%** (Z.ai meta.json)
- Terminal-Bench 2.1: **56.9%** (Z.ai meta.json)

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid for agentic coding.
- **Reasoning: 80/100.** Consistent reasoning.
- **Context window: 75/100.** 200K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 85/100.** Reliable long-hour coding.
- **Cost efficiency: 70/100.** Good pricing.
- **Overall Score: 67.4/100.** Reliable long-hour coding assistant, now superseded.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai](https://open.zhipuai.cn/)

## Scores
- **Tool use: 0/100**
- **Reasoning: 0/100**
- **Context window: 0/100**
- **Multimodal: 0/100**
- **Coding: 0/100**
- **Cost efficiency: 0/100**
- **Overall Score: 0/100**

