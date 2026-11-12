# Gemma 4 12B Unified — findings by Kimi K3

- Source: Google (`gemma4:12b` / HF `google/gemma-4-12B-it`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B (Unified)
- **Short description:** Google's dense 12B Gemma 4 variant, added to the family on 2026-06-03 — the only size with an encoder-free multimodal architecture (raw 48×48 image patches and audio waveforms fed straight into the transformer via a lightweight 35M-param embedder, no separate vision/audio encoders). Slots between E4B and 26B A4B on quality.
- **Provider / access:** Open weights on Hugging Face / Kaggle (`google/gemma-4-12B-it`, incl. QAT checkpoints: `-qat-q4_0-gguf` for llama.cpp/LM Studio/Ollama, `-qat-w4a16-ct` for vLLM/SGLang, `-qat-mobile-transformers`); Ollama tag `gemma4:12b` (added post-launch per tag page). Free usage tier via Google AI Studio.
- **Release / knowledge:** Family launched 2026-04-02; 12B added 2026-06-03 (Gemma4All update, Google developer guide). Knowledge cutoff not stated in sources read.
- **IDs:** `gemma4:12b` (Ollama), `google/gemma-4-12B-it` (HF). No Zen Free ID verified.
- **Context window:** 256K tokens (per markaicode lineup table citing Google's docs); MRCR v2 8-needle retrieval measured at 128K: 43.4%.
- **Modalities:** Text + image + audio input (native, encoder-free); text output. Thinking mode available on instruction-tuned checkpoint (benchmarks below are thinking-enabled); tool calling supported per Ollama/Gemma tooling.
- **Pricing (as of 2026-10-05):** Open weights — self-host (BF16 ≈ 26.7 GB VRAM, Q4_0 ≈ 6.7 GB; fits 16 GB cards), or free tier on Google AI Studio. No per-token fee for self-hosting.
- **Architecture:** Dense, 11.95B params, 48 layers, encoder-free multimodal (35M-param patch/waveform embedder). Apache 2.0 per markaicode lineup notes.

### Raw benchmarks found

Official Google model-card figures (instruction-tuned, thinking enabled; via gemma4all.com and markaicode.com, model card last updated 2026-06-26):

Agent / tool use:

- τ2-bench (avg over 3 domains): **69.0%** — fractionally ahead of the 26B A4B MoE (68.2%)
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / Toolathlon / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **78.8%**
- MMLU Pro: **77.2%**
- AIME 2026 (no tools): **77.5%**
- BigBench Extra Hard: **53.0%**
- HLE / LCR / CritPt / AA Intelligence Index: **no verified public score found** (no stable independently sourced Arena Elo for 12B either — Gemma4All explicitly leaves it out due to conflicting third-party estimates)

Coding:

- LiveCodeBench v6: **72.0%**
- Codeforces Elo: **1659** ("Expert"-adjacent; well behind 31B's 2150)
- SWE-bench Verified/Pro / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found** (third-party evals cited in markaicode report Qwen 3.5 ahead on SWE-bench Verified in cross-family matchups)

Long context:

- MRCR v2 8-needle 128K (avg): **43.4%** — usable but weak retrieval at 128K vs the 31B's 66.4%.

Vision (multimodal input quality):

- MMMU Pro: **69.1%**; MATH-Vision: **79.7%**; OmniDocBench 1.5 edit distance: **0.164** (lower = better; close to 26B's 0.149).

### Normalized scores (1–100)

- **Tool use: 72/100.** τ2-bench 69.0 is upper-mid and matches the 26B MoE; no Terminal-Bench/GDPval to push higher.
- **Reasoning: 78/100.** GPQA 78.8 / AIME 77.5 / MMLU Pro 77.2 — strong mid-upper band for a 12B; clearly below the 85+ frontier tier.
- **Context window: 68/100.** 256K window (65–84 band), but measured 128K retrieval of only 43.4% holds it to the lower half.
- **Multimodal: 85/100.** Text + image + audio input all native (one of three Gemma 4 sizes with audio), with measured vision quality (MMMU Pro 69.1, MATH-V 79.7); text-only output keeps it under the top band.
- **Coding: 76/100.** LiveCodeBench v6 72.0 and Codeforces 1659: reliably useful mid-upper coding, short of the 80+ flagships; no SWE-bench published for this size.
- **Cost efficiency: 98/100.** Open weights, 6.7 GB at Q4_0 — runs on consumer GPUs/laptops; free AI Studio tier for hosted use. Hardware cost is the only spend.
- **Overall Score: 76/100.** Mean of five quality dims (72+78+68+85+76)/5 = 75.8 → 76. Best fit: local omni-input daily driver (docs, charts, audio notes) on a single consumer GPU.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (Gemma4All benchmark deep-dive incl. 12B section, markaicode lineup/VRAM guide citing Google's model card and HF `google/gemma-4-12B-it`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
