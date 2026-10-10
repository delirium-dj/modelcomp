# Gemma-4-E2B — findings by Ling 3.1 Flash

- Source: Google (`gemma-4-e2b`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's compact Gemma 4 variant — 2.3B effective parameters (5.1B with embeddings), 35 layers, natively multimodal (text, image and audio input) with a 128K context window, positioned as an efficient on-device/multimodal model.
- **Provider / access:** Google (Gemma 4 family); tracked in the OpenCode Zen catalogue as `gemma-4-e2b`.
- **Release / knowledge:** release date and knowledge cutoff not stated in the sources found — no verified public score found.
- **IDs:** `gemma-4-e2b` (OpenCode Zen).
- **Context window:** 128,000 tokens — verified on the Google Gemma 4 model card (E2B row).
- **Modalities:** text in; image in; audio in; text out (native multimodal per the Gemma 4 model card).
- **Pricing (as of 2026-10-10):** no verified public pricing found — cost score omitted; cost is excluded from the Overall score by methodology.
- **Architecture:** dense, 2.3B effective parameters (5.1B with embeddings), 35 layers; per the Google Gemma 4 model card.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench (Tau2): **24.5%** (Google Gemma 4 model card, E2B row)
- τ²-Retail: **29.4%** (Google Gemma 4 model card, E2B row)
- Terminal-Bench / GDPval / MCP-Atlas / BFCL: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **60.0%** (Google Gemma 4 model card, E2B row)
- GPQA: **43.4%** (Google Gemma 4 model card, E2B row)
- AIME 2026: **37.5%** (Google Gemma 4 model card, E2B row)
- BigBench Extra Hard: **21.9%** (Google Gemma 4 model card, E2B row)
- MMMLU: **67.4%** (Google Gemma 4 model card, E2B row)
- MedXPertQA: **23.5%** (Google Gemma 4 model card, E2B row)
- HLE / CritPt / MLCR: no verified public score found

Coding:

- LiveCodeBench v6: **44.0%** (Google Gemma 4 model card, E2B row)
- Codeforces: **633** (Google Gemma 4 model card, E2B row)
- SWE-bench Verified / DeepSWE / SciCode: no verified public score found

Multimodal:

- MMMU-Pro: **44.2%** (Google Gemma 4 model card, E2B row)
- MATH-Vision: **52.4%** (Google Gemma 4 model card, E2B row)
- OmniDocBench: **0.290** (Google Gemma 4 model card, E2B row)
- CoVoST: **33.47**; FLEURS: **0.09** (speech translation / recognition, Google Gemma 4 model card, E2B row)

Long context:

- MRCR v2 at 128K: **19.1%** (Google Gemma 4 model card, E2B row)
- RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 35/100.** τ²-Bench 24.5% and τ²-Retail 29.4% are weak, and no Terminal-Bench, GDPval, BFCL, or MCP-Atlas number exists for this variant.
- **Reasoning: 45/100.** MMLU-Pro 60.0% and AIME 2026 37.5% are mid, GPQA 43.4% is weak-mid and BigBench Extra Hard 21.9% is weak — no HLE number exists.
- **Context window: 52/100.** 128K tokens — the 100K–200K band — with weak measured retrieval (MRCR v2 128K 19.1%).
- **Multimodal: 90/100.** Native text, image and audio input with MMMU-Pro 44.2%, MATH-Vision 52.4%, OmniDocBench 0.290 and speech benchmarks (CoVoST 33.47, FLEURS 0.09) — the multimodal band.
- **Coding: 48/100.** LiveCodeBench v6 44.0% is mid and Codeforces 633 is weak-mid; no SWE-bench or DeepSWE number exists.
- **Cost efficiency: 98/100.** Apache 2.0 open weights ($0 self-host); no verified hosted per-token price found — cost is excluded from the Overall score by methodology.
- **Overall Score: 54/100.** Mean of Tool 35, Reasoning 45, Context 52, Multimodal 90, Coding 48 = 54.0. Best-fit: compact multimodal (incl. audio) workloads at 128K context; weak agentic tool use and long-context retrieval at this size.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Google Gemma 4 model card, E2B row; OpenCode Zen catalogue); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
