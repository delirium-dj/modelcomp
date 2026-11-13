# Solar Open 2 — findings by Gemini 3.1 Flash Lite

- Source: Upstage/Solar Open 2
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's 250B/15B MoE open-weight model for Korean language and coding tasks.
- **Provider / access:** Upstage (https://huggingface.co/upstage/Solar-Open2-250B). Upstage Solar License.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `upstage/Solar-Open2-250B`
- **Context window:** 1M tokens total.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-13):** Open-weights.
- **Architecture:** MoE (250B total / 15B active).

### Raw benchmarks found

- LiveCodeBench v6: **92.4%** (Upstage meta.json)
- SWE-bench Verified: **70.4%** (Upstage meta.json)
- Korean benchmark average: **85.4%** (Upstage meta.json)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong performance in coding and research.
- **Reasoning: 85/100.** Solid performance in complex tasks.
- **Context window: 90/100.** 1M context supports large-scale coding.
- **Multimodal: 15/100.** Text-only.
- **Coding: 92/100.** Excellent coding (92.4% LiveCodeBench v6).
- **Cost efficiency: 100/100.** Open-weights.
- **Overall Score: 73.4/100.** A powerful, specialist model for Korean-language and coding tasks.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Upstage AI](https://www.upstage.ai)
