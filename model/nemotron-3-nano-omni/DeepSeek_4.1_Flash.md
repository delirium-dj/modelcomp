# NVIDIA Nemotron 3 Nano Omni — findings by DeepSeek 4.1 Flash

- Source: NVIDIA / Nemotron 3 Nano Omni (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3 Nano Omni (Nemotron-3-Nano-Omni-30B-A3B-Reasoning)
- **Short description:** NVIDIA's small open "omni" multimodal reasoning model (released 2026-04-28) — a Mamba2-Transformer hybrid MoE that accepts video, audio, image and text, aimed at edge/agent execution with word-level ASR timestamps. English-only.
- **Provider / access:** Open weights via Hugging Face / NGC / build.nvidia.com; serve-it-yourself (vLLM/SGLang/TensorRT-LLM) at multiple providers. OpenCode Zen tracks `opencode/nemotron-3-nano-omni`. NVIDIA Open Model Agreement.
- **Release / knowledge:** 2026-04-28; knowledge cutoff not separately published.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning` (BF16/FP8/NVFP4 variants).
- **Context window:** 256,000 tokens (model card), 65,536 max output.
- **Modalities:** **video, audio, image and text** in; text out. Reasoning on by default (`enable_thinking`), tool calling, JSON, word-level ASR timestamps. English only.
- **Pricing (as of 2026-10-09):** open weights (self-host; $0.00 at self-serve providers). No first-party per-token price.
- **Architecture:** Mamba2-Transformer hybrid MoE, **31B total / ~3B active** (a.k.a. 30B-A3B); Nemotron 3 Nano LLM backbone + CRADIO v4-H vision encoder + Parakeet speech encoder; BF16 61.5 GB / FP8 32.8 GB / NVFP4 20.9 GB.

### Raw benchmarks found

> All rows are NVIDIA's HF model card (self-reported); no independent third-party suite found.

Multimodal / audio / tool use:

- CVBench2D 83.95; OCRBenchV2 (EN) 67.04; CharXiv Reasoning 63.6; MMLongBench-Doc 57.5; MathVista_MINI 82.8; OCR Reasoning 54.14
- Video MME 72.2; World Sense 55.4; Daily Omni 74.52; MMAU 74.62
- Voice interaction (VoiceBench) **89.39**; Tedium Long WER 3.11; HF-ASR WER 5.95
- OSWorld **47.4** (self)

Reasoning / quantization check (BF16 / FP8 / NVFP4):

- MathVista_MINI 71.90 / 71.05 / 71.30; CharXiv 49.10 / 48.05 / 47.95; MMLongBench-Doc 46.10 / 45.84 / 45.78; Video MME 70.80 / 69.40 / 69.60

Long context:

- 256K window; **no MRCR/RULER/GraphWalks published — no verified public score found**.

Independent: **none found**.

### Normalized scores (1–100)

- **Tool use: 70/100.** OSWorld 47.4% and general omni task performance are reasonable for a 3B-active nano; capped by no agent/tool/terminal suite.
- **Reasoning: 66/100.** MathVista 82.8% and CharXiv 63.6% are decent for its size; no GPQA/HLE/index, and OSWorld 47.4% is mid.
- **Context window: 72/100.** 256K-token window (200K–500K band); no long-context retrieval benchmark published.
- **Multimodal: 95/100.** Video + audio + image + text input (audio band 90–100) with VoiceBench 89.39, Video MME 72.2 and MMAU 74.62 — the model's standout axis.
- **Coding: 55/100.** No coding suite published (SWE/LiveCode/SciCode all absent); scored as a weak-proxy agent executor.
- **Cost efficiency: 98/100.** Open weights, free at self-serve providers; only hardware/serving cost applies.
- **Overall Score: 72/100.** (70 + 66 + 72 + 95 + 55) / 5 = 71.6 → 72. Best fit: local/edge omni perception + voice/ASR execution inside a larger agent; not a primary planner/coder.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research from the NVIDIA Hugging Face model card, NGC/build.nvidia catalogs and models.dev metadata. All capability scores are NVIDIA self-reported (no independent suite found); capability dimensions are scored with that limitation stated. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
