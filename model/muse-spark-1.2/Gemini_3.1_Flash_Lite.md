# Muse Spark 1.2 — findings by Gemini 3.1 Flash Lite

- Source: Meta/Muse Spark 1.2
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's agent model co-trained with Muse Code for terminal coding.
- **Provider / access:** Meta (https://huggingface.co/models?search=muse-spark-1.2). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/muse-spark-1.2`
- **Context window:** 1M tokens total; 131K tokens max output.
- **Modalities:** Text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-11-13):** Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M.
- **Architecture:** Proprietary (co-trained with Muse Code).

### Raw benchmarks found

- SWE-bench Verified: **86.6%** (Meta meta.json)
- GPQA: **90.4%** (Meta meta.json)

### Normalized scores (1–100)

- **Tool use: 92/100.** Strong agentic coding and terminal work.
- **Reasoning: 90/100.** High-quality reasoning (90.4% GPQA).
- **Context window: 90/100.** 1M context supports large-scale tasks.
- **Multimodal: 85/100.** Extensive input support.
- **Coding: 92/100.** Excellent coding (86.6% SWE-bench Verified).
- **Cost efficiency: 90/100.** Competitive value, especially in Contributor lane.
- **Overall Score: 90/100.** Robust agentic coder; largely superseded by Muse Spark 1.3 but excellent for cost-sensitive work.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta AI](https://dev.meta.ai)
