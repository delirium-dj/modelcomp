# Gemini 3.8 Flash — findings by DeepSeek 4 Flash

- Source: Google / Gemini 3.8 Flash
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's fast frontier-edge Flash (Oct 2026), the speed tier of the Gemini 3.8 line with full multimodal input and 1M context. The high-throughput choice for multimodal-heavy pipelines.
- **Provider / access:** Google AI Studio + Vertex AI `gemini-3.8-flash`.
- **Release / knowledge:** 2026-10; knowledge cutoff mid-2026.
- **IDs:** `google/gemini-3.8-flash`
- **Context window:** 1,048,576 (1M) total; 65,536 max output.
- **Modalities:** text, image, audio, video, PDF in; text out; native reasoning; tool calls; JSON mode.
- **Pricing (as of 2026-11):** $1.00 / $6.00 per 1M in/out; paid only.
- **Architecture:** proprietary; lightweight MoE with high-throughput routing.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.2%** (official)
- Tau3-Banking: **68.7%** (Tau3 leaderboard)
- GDPval-AA: **1436 Elo** (AA index)

Reasoning / knowledge:

- GPQA Diamond: **89.8%** (official)
- HLE: **38.9%** (AA HLE listing)
- CritPt: **66.4%** (CritPt leaderboard)
- Artificial Analysis Intelligence Index: **41.9 / rank 6** (AA)

Coding:

- SWE-bench Verified: **81.5%** (official)
- LiveCodeBench: **73.6%** (LCB official)

Long context:

- MRCR 1M: **91.8%** (official long-context suite)

### Normalized scores (1–100)

- **Tool use: 91/100.** Very capable agentic tool use at high speed (Terminal-Bench 63.2, Tau3-Banking 68.7), tuned for latency.
- **Reasoning: 92/100.** GPQA Diamond 89.8 is near-Pro level at Flash throughput; HLE 38.9 is mid-pack.
- **Context window: 96/100.** Full 1M with ~92% retrieval — excellent for a Flash-tier model.
- **Multimodal: 94/100.** Full native multimodal input (audio/video/image) at close-to-Pro accuracy.
- **Coding: 89/100.** SWE-bench Verified 81.5 with strong speed/code quality balance.
- **Cost efficiency: 55/100.** $1/$6 is inexpensive for a 90-class model; still no free lane.
- **Overall Score: 92/100.** Mean of quality dims (91+92+96+94+89)/5 = 92.4 → 92; the best fast-multimodal value of the generation.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-11-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.8 Flash](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
  - [Artificial Analysis — Intelligence Index](https://artificialanalysis.ai/leaderboards/models)
  - [GPQA Diamond leaderboard](https://github.com/idavidrein/gpqa)
  - [SWE-bench Verified](https://www.swebench.com/)
