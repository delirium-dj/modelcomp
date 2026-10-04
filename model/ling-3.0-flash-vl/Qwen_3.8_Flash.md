# Ling 3.0 Flash VL — findings by Qwen 3.8 Flash

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-3.0-flash-VL`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL (vision-language variant of the Ling 3.0 Flash family)
- **Short description:** A free, open-weight native-multimodal (vision-language) MoE from Ant Group's InclusionAI — 124B total / 5.5B active — with an explicit reasoning mode, built on Kimi-lineage architecture ("standing on Kimi's shoulders"). Vision-specialist sibling of `ling-3.0-flash`.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash-VL` (open weights); OpenRouter `inclusionai/ling-3.0-flash-vl`; Chat Completions. Free to run/self-host.
- **Release / knowledge:** 2026-09-10 (OpenRouter listing); model card updated 2026-09-24.
- **IDs:** `inclusionai/ling-3.0-flash-vl`
- **Context window:** **262,144** tokens (BenchLM + OpenRouter, consistent), max output **32,768** (OpenRouter). (HF copy cites 256K; the curated `meta.json` "128K" is a scaffold placeholder — corrected.)
- **Modalities:** text + image in (native vision-language), text out, reasoning yes (explicit mode), tool use; no confirmed audio/video/PDF-native input.
- **Pricing (as of 2026-10-04):** open-weight (Apache-style license on HF) — free to self-host; hosted listings at ~$0 preview pricing.
- **Architecture:** MoE, 124B total / **5.5B active** per token; vision-language encoder + reasoning; open weights.

### Raw benchmarks found

> Independent Artificial-Analysis measurements surfaced via BenchLM (2026-10-02, 11-of-645 coverage — partial, so BenchLM's own 47.66 composite is conservative). Named AA scores are used directly; where only AA-Index is thin, the split (high GPQA/MMMU-Pro vs low HLE/CritPt/index) is treated as a genuinely narrow vision specialist, not a data gap to paper over.

Agent / tool use:
- GDPval-AA (agentic real-work): **32.5%** (normalized) — mid, the only agentic signal
- τ²-bench / Terminal-Bench / BFCL / Toolathon: **no verified public score found**

Reasoning / knowledge:
- AA-GPQA Diamond: **86.2%** — near-frontier on curated science MCQ
- AA-HLE: **22.0%** — mid; the 40% frontier bar is not met
- AA-LCR (long-context reasoning): **78.3%** · CritPt: **2.0%** (very low)
- Artificial Analysis Intelligence Index: **24.6%** — low composite (signals narrowness)
- AA-Omniscience: Accuracy **14.4%**, Hallucination **22.0%**, Index **−4.5**

Coding:
- AA-SciCode (scientific programming): **44.2%** — mid; the only coding measurement
- SWE-bench Verified / LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:
- 262K native window; no MRCR / RULER / GraphWalks retrieval % published.

Multimodal / grounded:
- AA-MMMU-Pro (visual reasoning): **79.0%** — strong; the model's headline capability
- OCRBench / video / audio: no separate verified numbers found

### Normalized scores (1–100)

> Derived per `model-comparison.md` v4. Vision is genuinely front-rank (MMMU-Pro 79.0); the weakness is agentic/tool and breadth-of-reasoning (low GDPval, CritPt 2.0, AA-Index 24.6) — those are measured, not missing, so they cap the score honestly. Cost excluded from Overall.

- **Tool use: 55/100.** GDPval-AA 32.5% is the only agentic datapoint (mid), and no τ²/Terminal-Bench/BFCL evidence exists for this VL variant; capable but unproven for tool-heavy agents.
- **Reasoning: 73/100.** GPQA-Diamond 86.2 and AA-LCR 78.3 are near-frontier, but HLE 22.0, CritPt 2.0 and a low AA-Index 24.6 show real narrowness on open/hard reasoning — pulled down from the 80s.
- **Context window: 74/100.** Verified 262K sits mid 200K–500K band (200K anchors 70); no retrieval benchmark to justify the higher tier.
- **Multimodal: 78/100.** Native vision with strong AA-MMMU-Pro 79.0 earns the top of the image band / entry to the +PDF tier; audio/video/PDF-native unconfirmed keeps it from 85+.
- **Coding: 58/100.** AA-SciCode 44.2% is a respectable mid scientific-coding score, but with no SWE-bench/LiveCodeBench for this ID the coding verdict stays provisional.
- **Cost efficiency: 98/100.** Fully open-weight and free to self-host (5.5B-active MoE is cheap to run) — near the $0 = 100 ceiling.
- **Overall Score: 67.6/100.** (55+73+74+78+58)/5 — a free, efficient vision-language reasoning MoE. Best fit: image/document-heavy understanding and science-knowledge tasks on a self-hosted budget, where its MMMU-Pro/GPQA strengths dominate and its thin agentic breadth is acceptable.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen3.8-flash)** — 2026-10-04
- Method: fresh public web research (Artificial-Analysis numbers via BenchLM 2026-10-02, OpenRouter/HF for specs, family context from the VL-vs-Flash comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Revisit trigger: published τ²/Terminal-Bench and SWE-bench/LiveCodeBench results for this exact VL ID would firm Tool and Coding; a video/PDF-native modality confirmation would raise Multimodal.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
