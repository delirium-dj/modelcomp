# Gemma 4 E4B — findings by Ling 3.1 Flash

- Source: Google DeepMind (`gemma-4-e4b`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's edge-tier open model from the Gemma 4 family — an "effective 4B" (4.5B effective / 8B with embeddings) multimodal model engineered for on-device use (phones, Raspberry Pi, NVIDIA Jetson Orin Nano) with native audio input, running completely offline with near-zero latency. Sibling of E2B, 12B Unified, 26B A4B, and 31B.
- **Provider / access:** Hugging Face `google/gemma-4-E4B` (open weights); Google AI Edge Gallery; Android AICore Developer Preview / ML Kit GenAI Prompt API.
- **Release / knowledge:** Released 2026-04-02 (Gemma 4 family launch); knowledge cutoff not stated.
- **IDs:** `google/gemma-4-E4B` (HF). No OpenCode Zen Free ID found — open weights, self-hosted.
- **Context window:** 128,000 tokens (sliding window 512) — verified on the Google AI model card.
- **Modalities:** text, image, and audio in; text out (vision encoder ~150M, audio encoder ~300M; speech recognition and understanding); reasoning yes (thinking mode); tool calls / agentic flows per Android AICore.
- **Pricing (as of 2026-10-10):** Apache 2.0 open weights — no per-token API price; self-hosted / on-device inference is free per token.
- **Architecture:** 4.5B effective parameters (8B with embeddings), 42 layers, vocab 262K; part of the Gemma 4 family (dense + MoE mix).

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3 domains): **42.2%** (Google AI model card, instruction-tuned, thinking)
- τ²-Bench Retail: **57.5%** (Google DeepMind model page)
- Terminal-Bench 2.1 / GDPval-AA / MCP-Atlas / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **58.6%** (Google AI model card)
- MMLU Pro: **69.4%**; MMMLU: **76.6%**
- AIME 2026 (no tools): **42.5%**
- BigBench Extra Hard: **33.1%**
- HLE / LCR / CritPt / AA Intelligence Index: no verified public score found (HLE not reported for E4B)

Coding:

- LiveCodeBench v6: **52.0%** (Google AI model card)
- Codeforces ELO: **940**
- SWE-bench Verified / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR v2, 8 needles @ 128K (average): **25.4%** (Google AI model card — weak retrieval at 128K); no RULER / GraphWalks number reported.

Vision & audio:

- MMMU Pro: **52.6%**; MATH-Vision: **59.5%**; MedXPertQA MM: **28.7%**; OmniDocBench 1.5 avg edit distance: **0.181** (lower is better)
- CoVoST: **35.54**; FLEURS: **0.08** (lower is better; excluding Chinese)

### Normalized scores (1–100)

- **Tool use: 50/100.** τ²-Bench Retail 57.5% is mid-band but the τ² three-domain average of 42.2% is low, and no Terminal-Bench 2.1, GDPval-AA, or MCP-Atlas number exists for this edge model.
- **Reasoning: 55/100.** MMLU-Pro 69.4% and MMMLU 76.6% are mid-band, but GPQA 58.6% sits just below the mid-band floor and AIME 2026 42.5% / BigBench Extra Hard 33.1% are weak; no HLE or Intelligence Index number exists.
- **Context window: 55/100.** 128K tokens (100K–200K band), with weak measured MRCR v2 retrieval at 128K (25.4%) pulling toward the bottom of the band.
- **Multimodal: 92/100.** Native text, image, and audio input (speech recognition/understanding) lands in the 90–100 audio-input band; text-only output and weak MMMU Pro 52.6% keep it off 95+.
- **Coding: 55/100.** LiveCodeBench v6 52.0% is mid-band and Codeforces ELO 940 is weak; no SWE-bench or DeepSWE numbers published.
- **Cost efficiency: 95/100.** Apache 2.0 open weights with no per-token price — on-device inference is free per token (runs offline on phones and Jetson Orin Nano).
- **Overall Score: 61/100.** Mean of Tool 50, Reasoning 55, Context 55, Multimodal 92, Coding 55 = 61.4 → 61. Best-fit: on-device multimodal assistant for mobile/IoT agentic flows; not a frontier reasoning or coding engine.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Google AI for Developers Gemma 4 model card, Google DeepMind Gemma 4 page, Google launch blog 2026-04-02, Hugging Face google/gemma-4-E4B card); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are Google-reported for instruction-tuned thinking models.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
