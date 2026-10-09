# Gemma 4 E4B — findings by Step 5 Preview

- Source: Google DeepMind (`google/gemma-4-E4B`, Gemma 4 family released 2026-04-02)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (the effective-4B edge model of the Gemma 4 family)
- **Short description:** The mobile/edge member of Gemma 4 — 4.5B effective parameters (8B with embeddings, 42 layers, 512-token sliding window, 262K vocabulary) that natively processes **text, image and audio** with frozen 150M vision and 305M audio encoders (the audio encoder shrank 55% vs Gemma 3n). Built with Google's Pixel team, Qualcomm and MediaTek to run completely offline with near-zero latency on phones, Raspberry Pi and Jetson Orin Nano, with an AICore Developer Preview for Android and forward-compatibility with Gemini Nano 4. It is the only size that gets both edge deployment and full multimodal input at 128K context — but the capability numbers are edge-class: MMLU-Pro 69.4%, GPQA 58.6%, LiveCodeBench 52.0%, MMMU-Pro 52.6%, MRCR-128K 25.4%.
- **Provider / access:** Open weights (Gemma terms) on Hugging Face (`google/gemma-4-E4B`); Google AI Edge Gallery; Android AICore preview; Transformers.
- **Release:** 2026-04-02 (family launch).
- **Context window:** 128K tokens.
- **Modalities:** Text, image and audio in → text out; video processed as frames; configurable thinking mode; native system prompt; function calling.
- **Pricing:** open weights, free; designed for on-device inference.
- **Architecture:** effective-4B dense edge transformer (Per-Layer Embedding design); 70–1,120 configurable vision soft-tokens per image.

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

SWE-bench, Terminal-Bench, MCP Atlas, GDPval, HLE: **no verified public score found** for E4B.

### Normalized scores (1–100)

- **Tool use: 42/100.** Tau2 (3-domain average) 42.2% is the only agentic figure and it is low-mid; no Terminal-Bench, MCP Atlas or GDPval run exists for this size.
- **Reasoning: 45/100.** GPQA 58.6%, MMLU-Pro 69.4%, AIME 42.5%, Codeforces 940 and BBH 33.1% are mid-low-band — strong for an effective-4B edge model (it beats Gemma 3 27B on MMLU-Pro and doubles it on AIME), nowhere near the frontier.
- **Context window: 58/100.** 128K is the 100K–200K band (50–64) with MRCR-128K at 25.4% — a large window with weak needle retrieval.
- **Multimodal: 78/100.** Text + image + audio in → text out is the 90–100 band on input breadth (audio + video-as-frames are real); docked well within it because the quality is edge-class (MMMU-Pro 52.6%, MATH-Vision 59.5%, CoVoST 35.54) and there is no non-text output.
- **Coding: 40/100.** LiveCodeBench 52.0% and Codeforces 940 Elo are low-mid; no SWE-bench or Terminal-Bench score exists for E4B.
- **Cost efficiency: 97/100.** Open weights, effective-4B footprint, offline edge deployment on phones/Jetson/Raspberry Pi — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier, and it is the only Gemma size that does this with full multimodal input.
- **Overall Score: 53/100.** Best-fit recommendation: the offline edge choice — text/image/audio understanding at 128K context on a phone or $35 single-board computer, with Gemma-3-27B-beating quality at a fraction of the size; a mid-low capability tier, not a cloud replacement.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Gemma 4 model card + technical report arXiv:2607.02770, Google launch blog, DeepMind model page, Transformers docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemma_5.md`, using the same headings.
