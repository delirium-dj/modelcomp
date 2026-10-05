# Gemma 4 12B Unified — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/gemma-4-12B-it`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's mid-sized open-weight, encoder-free multimodal Gemma — ~12B dense parameters taking text, image, audio and video directly into the LLM backbone; designed to run locally on a 16 GB-VRAM/unified-memory machine.
- **Provider / access:** Google DeepMind. Hugging Face `google/gemma-4-12B-it` (and base `gemma-4-12B`), Vertex AI Model Garden `gemma-4-12b`, Ollama `gemma-4-12b`; open weights (Apache 2.0).
- **Release / knowledge:** Released 2026-06-03; knowledge cutoff January 2025.
- **IDs:** `google/gemma-4-12B-it`; no OpenCode Zen Free ID verified.
- **Context window:** 256K tokens (official model card). Max output not officially broken out.
- **Modalities:** Text, image, audio and video in; text out. Reasoning; native function calling and structured JSON output; 140+ languages. Runtime caps: ~30 s audio, 60 s video at 1 FPS per model card.
- **Pricing (as of 2026-10-05):** Open weights, self-host free under Apache 2.0. No first-party per-token API price verified (Vertex Model Garden deployment is usage-priced per Google Cloud).
- **Architecture:** Dense transformer, 11.95B params, 48 layers, 262K vocab. Encoder-free "unified" stack: raw 48×48 image patches and 16 kHz/40 ms audio frames projected straight into the LLM via ~35M-param embedders; native MTP speculative-decoding drafter. Apache 2.0; QAT Q4_0 packs released 2026-06-05.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **69.0%** (Google model-card table via Creeta)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **77.2%** (Google model card, independently cross-checked by two briefs)
- GPQA Diamond: **78.8%** (Google model card)
- AIME 2026 (no tools): **77.5%** (Google model card)
- MMMLU (multilingual): **83.4%** (Google model card)
- BigBench Extra Hard: **53.0%** (Google model card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- LiveCodeBench v6: **72.0%** (Google model card)
- Codeforces ELO: **1659** (Google model card)
- SWE-bench Verified / SWE-Pro / SciCode / DeepSWE: no verified public score found

Long context:

- MRCR v2 (8 needle, 128K): **43.4%** (Google model card) — weak retrieval at depth relative to the 256K claim

Multimodal:

- MMMU Pro: **69.1%** (Google model card)
- MATH-Vision: **79.7%** (Google model card)

### Normalized scores (1–100)

- **Tool use: 62/100.** Native function calling and structured JSON output, and Tau2-Bench 69.0% shows usable agentic competence for a 12B; capped by the absence of any Terminal-Bench 2.1, Tau3 or GDPval-AA evidence and by trailing the 26B A4B on multi-step agentic work.
- **Reasoning: 72/100.** MMLU Pro 77.2%, GPQA 78.8% and AIME 2026 77.5% are strong for the size (near the Gemma 3 27B baseline), but GPQA sits in the 60–80% mid band and BigBench Extra Hard 53.0% caps it well below frontier.
- **Context window: 72/100.** 256K tokens maps just above the 200K=70 anchor in the 200K–500K band; MRCR v2 43.4% at 128K shows shallow retrieval, so it stays mid-band rather than near the top.
- **Multimodal: 88/100.** Native image + audio + video input with text out lands in the +audio band (90–100 range), supported by MMMU Pro 69.1% and MATH-Vision 79.7%; no non-text output and merely good (not leading) vision caps it below 90.
- **Coding: 70/100.** LiveCodeBench v6 72.0% and a 1659 Codeforces ELO are excellent for an open ~12B dense model; no SWE-bench/SciCode/DeepSWE evidence and a modest LiveCode number keep it in the mid band.
- **Cost efficiency: 95/100.** Apache 2.0 open weights mean $0 self-host with no MAU cap or field-of-use restriction; scored just under 100 because first-party API access still carries cloud compute cost and the free local path needs quantization-aware runtimes.
- **Overall Score: 73/100.** Mean of (62 + 72 + 72 + 88 + 70) / 5 = 72.8 → **73**. Best-fit: local/on-device multimodal assistants and privacy-sensitive self-hosting on a single 16 GB-class machine.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-05
- Method: public internet research (Google blog + model card, AI/TLDR registry, Creeta analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
