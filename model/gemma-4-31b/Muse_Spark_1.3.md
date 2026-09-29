# Gemma 4 31B — findings by Muse Spark 1.3

- Source: Google/Gemma 4 31B (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: price drop + video modality + uncited rows recorded; scores hold 75); re-verified 2026-09-29 (UTC, user-signed-off re-research: card reconfirmed + MMMLU 88.4 + BigBench-EH 74.4 + MATH-Vision 85.6 + MRCR 66.4 + AA Index 19/14 + Tau2-retail 86.4 + video-variance noted; Reasoning 78 → 79, Context 74 → 75, Multimodal 68 → 69, Overall 75 → 76)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (Google DeepMind, instruction-tuned)
- **Short description:** Google DeepMind's dense 30.7B open-weights multimodal model with frontier-for-size reasoning, native function calling, and 256K context, Apache 2.0 licensed.
- **Provider / access:** Google DeepMind via Hugging Face (`google/gemma-4-31b-it`) + NVIDIA build catalog; OpenRouter `google/gemma-4-31b-it:free` route (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-04-02 release (v1.0, HF + NVIDIA build); knowledge cutoff undisclosed
- **IDs:** `google/gemma-4-31b-it` (open-weights ID; no paid Zen Free-ID distinction — weights are free)
- **Context window:** 256,000 total — verified via Google AI for Developers Gemma 4 model card (medium models 256K, 31B dense 60 layers) and NVIDIA build page
- **Modalities:** text, image in (card lists Text+Image for 31B; video per InfoQ/AA-listing but unconfirmed by card — variance noted — re-verified 2026-09-29); text out; reasoning yes (thinking variant tracked); tool calls yes (native function calling); structured outputs yes
- **Pricing (as of 2026-09-21, re-verified 2026-09-27):** Free open weights (Apache 2.0) + hosted ~$0.09 in / $0.34 out per 1M (down 25% from $0.12; pricepertoken Sep 2026); OpenRouter free route available
- **Architecture:** open-weights dense, 30.7B total (11.95B-class 12B sibling is separate unified build), 60 layers, sliding window 1024, P-RoPE long-context; Apache 2.0

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Official instruction-tuned numbers below are from the NVIDIA Gemma 4 31B IT build page and Google model card (Apr 2026) unless noted.

Agent / tool use:

- Tau2 (average over 3): **76.9%** (NVIDIA build benchmark table, 31B column; vs 26B A4B 68.2%); Tau2-retail slice **86.4%** (DeepMind page — re-verified 2026-09-29)
- Gert Labs: **35.26%** (BenchLM mirror — amended 2026-09-27)
- Terminal-Bench 2.1: **no verified public score found** (closest proxy: Terminal-Bench Hard pass@1 **27.08%**, Hugging Face NVIDIA NVFP4 eval card, temp 1.0)
- Tau3-Banking: **no verified public score found** (Tau2 76.9% above is the tracked Tau-family number)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (native function-calling support per model card, no harness percentage published)

Reasoning / knowledge:

- GPQA Diamond: **84.3%** (NVIDIA build table; CodeSOTA registry confirms 84.3% #23/74; NVFP4 eval 85.35–85.80%)
- HLE: **19.5% HLE no tools / 26.5% HLE with search** (NVIDIA build table); CodeSOTA aggregate **26.5% #21/74**
- AIME 2026 no tools: **89.2%** (NVIDIA build table)
- MMLU Pro: **85.2%** (NVIDIA build + Google model card; NVFP4 eval 84.94–85.25%; community MMLU 87.1% on gemma4 blog is a different harness)
- MMMLU: **88.4%**; BigBench Extra Hard: **74.4%** (model card — re-verified 2026-09-29)
- IFBench: **92.6 (#12/120)** (BenchLM mirror — amended 2026-09-27)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **19 Reasoning / 14 Non-reasoning** (AA release page v4.3.2-scale; llm-stats Score 33.2 #94 different scale retained — re-verified 2026-09-29); BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **80.0% LiveCodeBench v6** (NVIDIA build table; CodeSOTA confirms 80.0% #11/24; NVFP4 eval pass@1 82.27–82.49%)
- Codeforces ELO: **2150** (NVIDIA build table, vs 26B A4B 1718)
- SWE-Rebench: **41.6%** (BenchLM mirror); **React Native Evals 75.2%** (BenchLM mirror — amended 2026-09-27)
- HumanEval: **76.8%** (gemma4 community benchmark compilation, Apr 2026)
- SciCode / AA-SciCode: **33.61% SciCode subtask acc pass@1** (Hugging Face NVFP4 eval card; CloudPrice SciCode 0.4 panel consistent)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (closest proxy: CloudPrice Coding Index 33.2 #107 on non-reasoning config)
- MMMU-Pro (multimodal evidence): **76.9%** (BenchLM mirror); **OmniDocBench 0.131 edit distance** (filed scoring evidence, recorded here — amended 2026-09-27); MATH-Vision **85.6%** / MedXPertQA-MM **61.3%** (model card — re-verified 2026-09-29)

Long context:

- **256K via P-RoPE without typical degradation; MRCR v2 8-needle 66.4% @128k** (model card — re-verified 2026-09-29)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 76/100.** Tau2 76.9% with native function calling shows strong open-weights agency; capped by TB-Hard 27.08% and missing TB2.1/GDPval harnesses.
- **Reasoning: 79/100.** GPQA 84.3%, AIME 89.2%, MMLU Pro 85.2% and MMMLU 88.4% lead the 30B open class; capped by HLE 19.5–26.5% well below frontier.
- **Context window: 75/100.** Verified 256K with MRCR 66.4% @128k measured; capped well below 1M models.
- **Multimodal: 69/100.** Text/image in with MMMU Pro 76.9%, MATH-Vision 85.6% and OmniDocBench 0.131; capped below video/audio omni models (video input unconfirmed by card).
- **Coding: 79/100.** LiveCodeBench 80.0%, Codeforces 2150 and HumanEval 76.8% show strong open coding; capped by SciCode ~33.6% and missing SWE-bench absolutes.
- **Cost efficiency: 98/100.** Free Apache 2.0 weights with $0.14/$0.40 hosting and a free API route approach the $0 band.
- **Overall Score: 76/100.** Mean of the five non-cost dims (76+79+75+69+79)/5 = 75.6 → 76; best-fit open-weights local-deployment pick for reasoning and coding at 31B.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: public internet research (NVIDIA build catalog page, Google AI for Developers model card, Hugging Face NVFP4 eval card, CodeSOTA registry, CloudPrice specs, llm-stats comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
