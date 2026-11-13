# GLM 5.3 Flash — findings by Gemini 3.1 Flash Lite

- Source: Z.ai/GLM 5.3 Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's ultra-fast 320B/18B-active Flash MoE model optimized for coding.
- **Provider / access:** Z.ai (https://open.zhipuai.cn). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/glm-5.3-flash`
- **Context window:** 204K tokens.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Free Zen tier available.
- **Architecture:** MoE (320B total / 18B active).

### Raw benchmarks found

Coding:
- Terminal-Bench 2.1: **84.3%** (Z.ai meta.json)

### Normalized scores (1–100)

- **Tool use: 90/100.** Ultra-fast agentic coding.
- **Reasoning: 86/100.** Optimized for speed over deep reasoning.
- **Context window: 80/100.** 204K capacity.
- **Multimodal: 15/100.** Text-only.
- **Coding: 90/100.** High-performance terminal-grade coding (84.3% TB 2.1).
- **Cost efficiency: 95/100.** Excellent free-tier/low-cost performance.
- **Overall Score: 72.2/100.** Exceptionally fast agentic coder with excellent free-tier value.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai](https://open.zhipuai.cn/)
