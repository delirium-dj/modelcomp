# Gemini 4 Hydrogen — findings by Hy3

- Source: Google DeepMind, Gemini 4 Hydrogen
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google DeepMind's Flash-level Gemini 4 model (successor to Gemini 3.8 Flash), released 2026-11-12. Positioned as the daily-execution layer for coding, tool calling, and multi-step agentic tasks. Native multimodal with a unified 1M-token window (input + output share 1M) and four thinking levels (low/med/high/max).
- **Provider / access:** Gemini API (`gemini-4-hydrogen`), Google AI Studio, Vertex AI. Chat + tool/agent API; native multimodal.
- **Release / knowledge:** Released 2026-11-12; knowledge cutoff current.
- **IDs:** `gemini-4-hydrogen` (Google).
- **Context window:** 1M tokens (unified input+output).
- **Modalities:** Native text + image + audio + video in / text (and multimodal) out; four thinking levels; tool/function calling.
- **Pricing (as of 2026-11-14):** $1.50 in / $7.50 out per 1M tokens.
- **Architecture:** Google DeepMind proprietary; native multimodal.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.1: **57%** (vs Gemini 3.8 Flash 18.2% — roughly 3×)
- Reported to exceed the larger Argon model on agentic tasks.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51** at default high (reportedly beats Argon).

Coding:

- Strong agentic coding per Terminal-Bench 4.1 (57%); exact SWE-bench not published for Hydrogen this pass.

Long context:

- 1M unified context; no MRCR/RULER number found for Hydrogen this pass.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong agentic execution (Terminal-Bench 4.1 57%, > larger Argon); Flash-tier.
- **Reasoning: 84/100.** AA Intelligence Index 51 — mid-high, below top reasoning flagships.
- **Context window: 94/100.** 1M unified window → top tier.
- **Multimodal: 92/100.** Native multimodal (text/image/audio/video) is a standout.
- **Coding: 82/100.** Good agentic coding but not the leading coding score in this band.
- **Cost efficiency: 72/100.** $1.50/$7.50 is competitive for a 1M-context native-multimodal model.
- **Overall Score: 88/100.** Mean of five non-cost dims = (86+84+94+92+82)/5 = 438/5 = 87.6 → 88. Best fit: everyday multimodal agentic tasks needing long context at low latency/cost.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Gemini — Google DeepMind](https://deepmind.google/technologies/gemini/)
  - [谷歌新 Gemini 4,跑分超 Argon — Baidu Baijiahao](https://baijiahao.baidu.com/s?id=1881713658461119138)
  - [Gemini 4 Hydrogen 发布 — Tencent Cloud](https://cloud.tencent.com/developer/article/2783329)
