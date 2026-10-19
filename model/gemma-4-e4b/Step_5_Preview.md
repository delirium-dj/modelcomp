# Gemma 4 E4B — findings by Step 5 Preview

- Source: Google DeepMind (`google/gemma-4-E4B`, Gemma 4 family released 2026-04-02)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (the effective-4B edge model of the Gemma 4 family)
- **Short description:** The mobile/edge member of Gemma 4 — 4.5B effective parameters (8B with embeddings, 42 layers, 512-token sliding window, 262K vocabulary) that natively processes **text, image, audio and video** with frozen 150M vision and 305M audio encoders (the audio encoder shrank 55% vs Gemma 3n). Built with Google's Pixel team, Qualcomm and MediaTek to run completely offline with near-zero latency on phones, Raspberry Pi and Jetson Orin Nano, with an AICore Developer Preview for Android and forward-compatibility with Gemini Nano 4. It is the only size that gets both edge deployment and full multimodal input at 128K context — but the capability numbers are edge-class: MMLU-Pro 69.4%, GPQA 58.6%, LiveCodeBench 52.0%, MMMU-Pro 52.6%, MRCR-128K 25.4%.
- **Provider / access:** Open weights (Gemma terms) on Hugging Face (`google/gemma-4-E4B`); Google AI Edge Gallery; Android AICore preview; Transformers. **New in the 2026-10-19 re-run: AA lists 1 hosted API provider at $0.02/$0.10 per MTok** — cheap hosted access now exists alongside the free edge deployment.
- **Release:** 2026-04-02 (family launch; AA lists 2026-04-03 for the reasoning variant).
- **Context window:** 128K tokens (AA lists 128k/130k).
- **Modalities:** Text, image, audio and video in (video processed as frames) → text out (AA independently lists text/image/speech/video input, text output); configurable thinking mode; native system prompt; function calling.
- **Pricing (as of 2026-10-19):** open weights, free, designed for on-device inference; one hosted provider at $0.02/$0.10 per MTok (blended ~$0.03, ~$0.01 per Index task).
- **Architecture:** effective-4B dense edge transformer (Per-Layer Embedding design; 8B total / 4.5B active per AA); 70–1,120 configurable vision soft-tokens per image.
- **Speed (new in the 2026-10-19 re-run):** 28.7 output tokens/s and 0.93 s TTFT (median across providers) — slow, but highly concise (20M output tokens on the Index vs an 82M median).

### Raw benchmarks found

Vendor (Gemma 4 model card / DeepMind page, instruction-tuned, thinking):

- MMLU-Pro: **69.4%**; MMMLU: **76.6%**; BBH: **33.1%**
- GPQA Diamond: **58.6%**; AIME 2026 (no tools): **42.5%**
- LiveCodeBench v6: **52.0%**; Codeforces: **940 Elo**
- Tau2 (average over 3): **42.2%**
- MMMU-Pro: **52.6%**; MATH-Vision: **59.5%**; OmniDocBench 1.5: 0.181 edit distance; MedXPertQA MM: **28.7%**
- CoVoST (speech translation): **35.54**; FLEURS (ASR, lower better): **0.08**
- MRCR v2 8-needle 128K (average): **25.4%**
- Reference points: Gemma 3 27B (no think) scores MMLU-Pro 67.6 / LCB 29.1 / MMMU-Pro 49.7 — E4B beats it on every eval the family publishes

**New in the 2026-10-19 re-run (Artificial Analysis):** Intelligence Index **9** (#51/141 in its open-weight class, above the class median of 8); 28.7 tok/s; 0.93 s TTFT; $0.02/$0.10; 128K; 8B/4.5B parameters; text/image/speech/video input confirmed independently.

SWE-bench, Terminal-Bench, MCP Atlas, GDPval, HLE: **no verified public score found** for E4B (unchanged after the re-check).

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **scores unchanged.** AA's re-measured composite (Index 9, above its class median) and the new hosted price point ($0.02/$0.10) confirm the existing placement of an edge-class model whose value is deployability, not raw capability.

- **Tool use: 42/100.** Tau2 (3-domain average) 42.2% is the only agentic figure and it is low-mid; no Terminal-Bench, MCP Atlas or GDPval run exists for this size.
- **Reasoning: 45/100.** GPQA 58.6%, MMLU-Pro 69.4%, AIME 42.5%, Codeforces 940 and BBH 33.1% are mid-low-band — strong for an effective-4B edge model (it beats Gemma 3 27B on MMLU-Pro and doubles it on AIME), nowhere near the frontier.
- **Context window: 58/100.** 128K is the 100K–200K band (50–64) with MRCR-128K at 25.4% — a large window with weak needle retrieval.
- **Multimodal: 78/100.** Text + image + audio + video-as-frames in → text out is the 90–100 band on input breadth (AA independently confirms all four input modalities); docked well within it because the quality is edge-class (MMMU-Pro 52.6%, MATH-Vision 59.5%, CoVoST 35.54) and there is no non-text output.
- **Coding: 40/100.** LiveCodeBench 52.0% and Codeforces 940 Elo are low-mid; no SWE-bench or Terminal-Bench score exists for E4B.
- **Cost efficiency: 97/100.** Open weights, effective-4B footprint, offline edge deployment on phones/Jetson/Raspberry Pi — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier (and now a $0.02/$0.10 hosted fallback); it is the only Gemma size that does this with full multimodal input.
- **Overall Score: 53/100.** Best-fit recommendation: the offline edge choice — text/image/audio/video understanding at 128K context on a phone or $35 single-board computer, with Gemma-3-27B-beating quality at a fraction of the size; a mid-low capability tier, not a cloud replacement.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — Artificial Analysis model page (Index 9, pricing, speed, modality specs); original run used the Gemma 4 model card + technical report (arXiv:2607.02770), the Google launch blog, the DeepMind model page and Transformers docs. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_5.md`, using the same headings.
