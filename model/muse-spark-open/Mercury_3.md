# Muse Spark Open — findings by Mercury 3

- Source: Meta (Muse Spark Open)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight release (2026-10-15) of Muse Spark, a sparse MoE multimodal model (816B total / 42B active) for coding and agentic work, with a 1M-token context and native text/image/audio/video input. Derived from the hosted Spark model (August) with extra safety post-training.
- **Provider / access:** Open weights on Hugging Face (`meta-models/Muse-Spark-Open-816B-A42B`, BF16 + NVFP4); hosted inference via Modal, Fireworks, Groq (enterprise preview, 131K ctx), OpenRouter, etc. Custom Muse Model License (attribution required; MaaS businesses >$20M annual revenue need a separate agreement).
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff not disclosed; training data described publicly but not reproducible.
- **IDs:** `meta/muse-spark-open`; HF `meta-models/Muse-Spark-Open-816B-A42B`.
- **Context window:** 1,048,576 tokens (per model card/OpenRouter; Groq preview serves 131,072).
- **Modalities:** text + image + audio + video input; text output; reasoning effort low/medium/high/xhigh (xhigh default); tool calling; no image/video/audio generation.
- **Pricing (as of 2026-10):** $1.25 in / $4.25 out per 1M (cached $0.15) on Modal/Fireworks; self-hosting requires ~537GB (NVFP4) to ~1.65TB (BF16) weights plus ~700GB+ GPU memory (NVFP4).
- **Architecture:** sparse MoE, 816B total / 42B active (62 layers, 256 experts, 8 selected; 16 full-attention + 46 sliding-window layers); 1.8B perception encoder.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **89.2%** (Meta-published, Scale AI attribution — not yet on public leaderboard at research time)
- JobBench: **61.8%** (Meta-published)
- GDPval-AA v2: **1401 rating** (Meta-published)
- OSWorld Verified: **80.4%**; Toolathlon Verified: **72.8%** (model card)

Reasoning / knowledge:

- AA Intelligence Index v4.3.2 (independent, measured): **38.9** (xhigh) — vs Claude Opus 5.5 57.6, GPT-6.1 Sol 51.8, Gemini 4 Argon 52.6
- HLE: **43.9%** no tools (independent AA; vs Opus 5.5 61.4%); HLE-Diamond no tools 26.1%; HLE with tools **61.0%** (model card)
- GPQA Diamond: **89.0%** (model card); AA Omniscience +24.65 (accuracy 39.3%)

Coding:

- Terminal-Bench 2.1 (Terminus 2): **76.4%** (Meta) — but Terminal-Bench 4.0: **8.1%** (independent AA, xhigh; vs Claude Sonnet 5.5 63.6, GPT-6 Astra 59.1)
- SciCode: **58.4–58.5%** (AA 58.4 > Astra 56.5/Sol 54.2; < Opus 66.9)
- DeepSWE 1.1 (preferred harness, Muse Code): **60** (Meta; vs GLM 5.3 67, Kimi K3 68)
- ZeroBench with tools: 50.0 (pass@5)

Long context:

- 1M verified; hybrid-attention KV cache math (BF16 1M ≈64GiB ideal); no independent 1M retrieval benchmark captured

Multimodal:

- BabyVision with tools 80.2%; SimpleVQA 73.6%; IntPhys2 68.3%; VideoMME v2 61.5% (subtitles, no audio); WorldVQA 49.4%

Safety:

- FORTRESS adversarial 5.8 (lower better); benign over-refusal 17.4%; StrongREJECT v2 attack success 0.5%

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP-Atlas 89.2%, OSWorld Verified 80.4%, Toolathlon 72.8% — strong agentic tool profile; scores are Meta-published (Scale-attributed) and not yet on public leaderboards.
- **Reasoning: 84/100.** HLE 43.9% no tools / 61.0% with tools and GPQA 89.0% are solid; independent AA Index 38.9 places it well below closed frontier models.
- **Context window: 92/100.** 1M verified; runtime KV-cache footprint is large (≈64GiB ideal BF16 at 1M).
- **Multimodal: 84/100.** Native text/image/audio/video input with text output; VideoMME 61.5% (subtitle-based) and strong vision-agent results.
- **Coding: 82/100.** Terminal-Bench 2.1 76.4% (Meta) vs Terminal-Bench 4.0 8.1% (independent) is a stark discrepancy; SciCode 58.5% and DeepSWE 60 are competitive middle-tier.
- **Cost efficiency: 65/100.** $1.25/$4.25 with $0.15 cache is mid-range, but huge self-host footprint and independent automation testing (Activepieces: ~18x latency and ~17x per-task cost vs GPT-5.4 mini) show it does not win on price for lightweight workloads; open weights are the value lever.
- **Overall Score: 86/100.** Mean of the five non-cost dims (86+84+92+84+82)/5 = 85.6 → 86. Best-fit: a capable self-hostable multimodal agent model with excellent tool results, but verify on your own harness — Terminal-Bench 4.0 and latency/cost gaps are material caveats.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta: Muse Spark Open announcement](https://research.meta.ai/blog/muse-spark-open)
  - [Meta dev: Muse Spark Open overview](https://dev.meta.ai/docs/muse-spark-open)
  - [Hugging Face: Muse-Spark-Open-816B-A42B model card](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B)
  - [Artificial Analysis: Muse Spark Open page (independent index/TB4.0/HLE)](https://artificialanalysis.ai/models/muse-spark-open)
  - [Kingy.ai: Muse Spark Open benchmarks, specs, hardware, costs](https://kingy.ai/blog/meta-muse-spark-open-benchmarks-specs-hardware-costs/)
  - [Activepieces: Muse Spark Open benchmarks & cost (independent latency/cost test)](https://www.activepieces.com/blog/muse-spark-open-benchmarks-and-cost-2026-guide)
  - [OpenRouter: meta/muse-spark-open](https://openrouter.ai/meta/muse-spark-open)
- Future sources: add a new file next to this one using the same headings.
