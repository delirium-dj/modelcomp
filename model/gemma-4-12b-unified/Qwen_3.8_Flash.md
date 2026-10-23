# Gemma 4 12B Unified — findings by Qwen 3.8 Flash

- Source: Google DeepMind (`google/gemma-4-12B` "Unified"; curated id `opencode/gemma-4-12b-unified`), cross-checked against the **Gemma 4 Technical Report** (arXiv 2607.02770), Google's launch blog, ai.google.dev Gemma docs, the HF model card, and Analytics Vidhya's writeup
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Twin-provenance note:** `gemma-4.12b-unified` (dot-slug) is the **same Google model** under an alternate filename spelling and already carries a signed report from this STEM. This hyphen-slug is scored on the identical first-party evidence, not reattributed.

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's **encoder-free, "unified" multimodal Gemma 4** — a 12B dense model that processes **text, image, and audio natively through a single stack**, instead of bolting on dedicated per-modality encoders the way other Gemma 4 members do. Google's pitch: **performance nearing the larger 26B-A4B MoE at under half the total memory footprint**, making it the family's best small-model all-rounder for on-device multimodal work.
- **Provider / access:** open weights (Hugging Face `google/gemma-4-12B`, Apache-2.0 family license); Google AI, OpenRouter, self-host.
- **Release / knowledge:** **~2026-06-03** (post the 2026-04-03 Gemma 4 family launch).
- **IDs:** `gemma-4-12B` (Unified); family `gemma-4-31b`, `gemma-4-26b-a4b`, `gemma-4-e4b`, `gemma-4-e2b`.
- **Context window:** **262,144 total**; **32,768 max output**.
- **Modalities:** **text + image + audio in** (its defining encoder-free trait), text out; thinking/reasoning mode yes; Multi-Token-Prediction drafter.
- **Pricing (as of 2026-10-23):** **free open weights**; hosted ≈ **$0.10/M in, $0.25/M out**.
- **Architecture:** 12B dense, encoder-free unified multimodal; hybrid attention + MTP.

### Raw benchmarks found

> **Provenance:** absolutes are **Google first-party** (Gemma 4 Tech Report, "12B" column = this Unified model, non-thinking). Google's own cross-model claim — "nearing the 26B-A4B at <½ the memory" — is vendor framing; the tech-report numbers are consistent with it (12B trails 26B-A4B only modestly on most suites).

Reasoning / knowledge:

- **MMLU-Pro: 77.2** · **GPQA-Diamond: 78.8** · **AIME 2026 (no tools): 77.5** · **Big-Bench Extra-Hard: 53.0** · **MMMLU: 83.4**
- **HLE: 5.2** (thin at the hardest frontier); **IFEval: 97.2** · **IFBench: 74.0**

Coding / agentic:

- **LiveCodeBench v6: 72.0** · **Codeforces Elo: 1659** · **SciCode: 38.0**
- **τ²-bench (airline): 75.0** (strong tool-use) · **Terminal-Bench Hard: 18.0** (weak-to-modest agency)

Long context / multimodal:

- **MRCR v2 (8-needle, 128k): 43.4** (modest deep retrieval inside the 262K span)
- **MMMU-Pro: 69.1** · **MATH-Vision: 79.7** — and uniquely here, **native audio input** via the encoder-free design (the plain 26B/31B cards route audio through separate encoders)

### Normalized scores (1–100)

- **Tool use: 73/100.** τ²-airline 75.0 is genuinely competent tool-calling; Terminal-Bench-Hard 18.0 keeps it from being a strong autonomous agent — a mid-high split.
- **Reasoning: 78/100.** MMLU-Pro 77.2 / GPQA-D 78.8 / AIME 77.5 for a 12B dense model is impressive (near the 26B-A4B); docked for BBExtra-Hard 53 and HLE 5.2 at the tail.
- **Context window: 65/100.** Same **262K / 32K** spec as its siblings with **MRCR-128k 43.4** — broad window, unremarkable recall; the family's common soft spot.
- **Multimodal: 80/100.** Its standout: **encoder-free native text+image+audio**, with strong image-reasoning (MMMU-Pro 69.1, MATH-Vision 79.7). Above the image-only siblings because a single stack handles three input modalities; capped below peak for no independent vision/audio eval and text-only output.
- **Coding: 73/100.** LiveCodeBench 72.0 and Codeforces 1659 are solid for 12B; discounted for SciCode 38 / Terminal-Bench 18 and vendor-only provenance.
- **Cost efficiency: 96/100.** **Free Apache-2.0 open weights**, ~$0.10/$0.25 hosted, and Google's "<½ the 26B's memory" footprint claim — near-frontier-per-byte is the whole selling point.
- **Overall Score: 73.8/100.** Half-up mean of the five quality dims (73+78+65+80+73)/5 = 73.8. Best fit: **on-device / cost-constrained multimodal assistants** that want text+image+**audio** in one lightweight encoder-free stack at near-26B reasoning/coding quality. Held below the flagship MoE by **modest long-context recall (MRCR 43), weak hard-terminal agency (18), and thin extreme-tail reasoning (HLE 5.2)**; multimodality and efficiency are its clear peaks. (All absolutes are Google first-party.)

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **Gemma 4 Technical Report (arXiv 2607.02770)** "12B" column (MMLU-Pro 77.2, GPQA-D 78.8, AIME 77.5, BBExtraHard 53.0, MMMLU 83.4, HLE 5.2, IFEval 97.2, IFBench 74.0, LiveCodeBench v6 72.0, Codeforces 1659, SciCode 38, τ²-airline 75.0, Terminal-Bench-Hard 18.0, MRCR-128k 43.4, MMMU-Pro 69.1, MATH-Vision 79.7), **blog.google** "Introducing Gemma 4 12B: a unified, encoder-free multimodal" (nearing 26B-A4B at <½ memory), **ai.google.dev** Gemma docs ("Unified: a 12B encoder-free multimodal model"), the HF `google/gemma-4-12B` card, and Analytics Vidhya's architecture explainer. Curated `meta.json` supplies 262K/32K, text+image+audio, ~$0.10/$0.25. Scores are normalized 1–100 interpretations; all absolutes are **Google first-party (vendor-executed)**, with the encoder-free 3-modality multimodality and open-weight efficiency as the load-bearing strengths and MRCR/Terminal-Bench/HLE the explicit docks; identity cross-checked against the dot-slug twin folder.
- Revisit trigger: an independent (Artificial Analysis / third-party) re-run of `gemma-4-12b-unified`, or a published audio-input benchmark (e.g. AIR-Bench) quantifying the encoder-free multimodal claim.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.
