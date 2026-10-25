# Nemotron 3 Nano Omni — findings by Muse Glimmer 30B

- Source: NVIDIA / Nemotron-3-Nano-Omni-30B-A3B-Reasoning
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** NVIDIA Nemotron 3 Nano Omni 30B-A3B Reasoning
- **Short description:** NVIDIA open multimodal LLM that unifies video, audio, image and text understanding for enterprise Q&A, summarization, transcription and document intelligence. Native audio support added vs Nemotron Nano V2 VL, with extended 256k context and multimodal token-reduction.
- **Provider / access:** Hugging Face `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16` / `FP8` / `NVFP4`; NVIDIA NIM `build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`; OpenRouter `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` free tier. Chat Completions API.
- **Release / knowledge:** 2026-04-28; knowledge cutoff not publicly disclosed.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16` ; `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-FP8` ; `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-NVFP4`
- **Context window:** 256k tokens total. Verified by Hugging Face model card and arXiv technical report.
- **Modalities:** Input video, audio, image, text; Output text. Reasoning on by default with `enable_thinking` toggle, tool calling supported, JSON mode supported, word-level timestamps for transcription.
- **Pricing (as of 2026-10-25):** Open weights under NVIDIA Open Model Agreement; available free via OpenRouter free tier. No official per-token NIM pricing published for this variant; self-host cost determined by GPU.
- **Architecture:** 31B total parameters, ~3B active per token, Mamba2-Transformer hybrid MoE. Vision encoder C-RADIO v4-H, audio encoder Parakeet-TDT-0.6B-v2. Open weights.

### Raw benchmarks found

> Sources: arXiv:2604.24954 Nemotron 3 Nano Omni technical report 2026-04-27/v2 2026-05-11, Hugging Face model card nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16 2026-04-28, NVIDIA Developer Nemotron page.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found. Tool calling is advertised in model card.

Reasoning / knowledge:

- GPQA Diamond no tools: **72.2** — arXiv Table 10
- MMLU-Pro: **77.3** — arXiv Table 10
- AIME25 no tools Pass@1 avg 8 runs: **82.1** — arXiv Table 10
- IFBench prompt: **74.2** — arXiv Table 10
- AA-LCR: **41.0** — arXiv Table 10
- TauBench V2 Telecom: **42.7** — arXiv Table 10

Coding:

- LiveCodeBench v5 07/24-05/25: **63.2** — arXiv Table 10
- SciCode: **32.0** — arXiv Table 10
- SWE-bench Verified / SWE-Pro: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MMLongBench-Doc: **46.1** reasoning off / **57.5** reasoning on — arXiv Table 7
- Max context 256k tokens verified.

Multimodal raw:

- OCRBench: **88.3** reasoning off — arXiv Table 7
- OCRBench-V2 EN/ZH: **65.8/52.0** — arXiv Table 7
- ChartQA Test: **89.9** — arXiv Table 7
- DocVQA Test: **93.3** — arXiv Table 7
- MathVista-Mini: **71.9** reasoning off / **82.8** reasoning on — arXiv Table 7
- VideoMME w/o sub: **70.8** reasoning off / **72.2** reasoning on — arXiv Table 7
- MMAU Avg: **74.6** — arXiv Table 8
- DailyOmni: **74.5** — arXiv Table 9
- WorldSense: **55.2** reasoning off / **55.4** reasoning on — arXiv Table 9

### Normalized scores (1–100)

- **Tool use: 62/100.** Tool calling and JSON mode advertised; no independent public tool-use benchmark numbers found for this exact ID. Score capped by lack of Terminal-Bench/Tau/Claw verification.
- **Reasoning: 76/100.** GPQA 72.2, MMLU-Pro 77.3, AIME25 82.1 and IFBench 74.2 show solid text reasoning with modest AA-LCR. No HLE/GPQA Diamond official public score published separately.
- **Context window: 92/100.** 256k verified context with MMLongBench-Doc gains vs prior; no public RULER/GraphWalks numbers.
- **Multimodal: 85/100.** Strong OCR/Document results OCRBench 88.3, DocVQA 93.3, ChartQA 89.9, VideoMME 70.8-72.2, MMAU 74.6, DailyOmni 74.5. Audio ASR and VoiceBench improvements vs Qwen3-Omni reported.
- **Coding: 62/100.** LiveCodeBench 63.2 with SciCode 32.0; no verified SWE-bench/LiveCodeBench v? public numbers beyond those reported.
- **Cost efficiency: 94/100.** Open weights under NVIDIA Open Model Agreement; free OpenRouter tier and efficient 3B active MoE with 3× throughput vs Qwen3-Omni on B200 per report.
- **Overall Score: 75.4/100.** Mean of five quality dims (62+76+92+85+62)/5 = 75.4 → 75. Best-fit: efficient open multimodal omni model with strong document/video/audio understanding and solid text reasoning, limited public tool-use benchmarks.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
