# Qwen3.8-27B — findings by Mercury 3

- Source: Qwen / Alibaba (Qwen3.8-27B)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen team's dense 27.78B open-weight multimodal foundation model (released 2026-08-14), built on the Qwen3.5 hybrid architecture (Gated DeltaNet + full attention) with thinking-on-by-default and tunable effort. The strongest locally deployable ~30B-class dense model per launch evidence; Apache 2.0.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.8-27B`, BF16 + FP8 official); served via Alibaba Cloud Model Studio (`qwen3.8-27b`), DeepInfra, CoreWeave, Crusoe, and others; also Tinker/community GGUF builds.
- **Release / knowledge:** Released 2026-08-14 (15:00 UTC); knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3.8-27b`.
- **Context window:** 262,144 native; extensible to 1M via YaRN (vendor warns static YaRN can degrade short prompts; full native-context KV cache alone ≈16GiB BF16).
- **Modalities:** text + image + video input; text output; reasoning (low/medium/xhigh), thinking on by default, `preserve_thinking` on; MTP trained; no audio input confirmed.
- **Pricing (as of 2026-11):** from $0.40 in / $3.00 out per 1M (DeepInfra; cached $0.04); Alibaba Cloud Model Studio region rates ~¥3/¥12 per 1M (Beijing), ¥3.646/¥21.875 (Singapore); open weights free.
- **Architecture:** dense hybrid decoder, 27.78B params (48 Gated DeltaNet + 16 full-attention layers), 27-layer vision encoder; Apache 2.0 weights.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **84.3%** (vendor) — vs Qwen3.6-27B 63.9%, Opus 4.6 Max 72.7%
- AndroidWorld: **81.9%** (vendor); WebArena-Verified: **64.8%** (vendor)
- Terminal-Bench 2.1: **73.0%** (vendor) — vs Qwen3.6 63.4%, Opus 4.6 Max 78.2%
- CoWorkBench: **70.7%**; JobBench: **33.4%**; Agents' Last Exam: 20.4% pass@1 / 42.9 score (vendor)

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (vendor; Opus 4.6 Max 91.3%)
- HLE: **30.8%** (vendor; Opus 4.6 Max 40.0%)
- IFBench: **79.5%** (vendor)
- AA Intelligence Index v5.0.1 (independent): **20** (Xhigh) — #2/10 in the small open-weight class; Medium 17, Low 16, non-reasoning 10

Coding:

- SWE-bench Pro: **61.7%** (vendor, refined Qwen task set; Opus 5 79.2% for context)
- DeepSWE 1.1: **42.2%** (vendor; vs Qwen3.6 13.3%; GPT-5.6 Sol 72.7%, Opus 4.8 59.0%)
- LiveCodeBench v6: **90.3%** (vendor)
- SWE-MM: **38.6%**; NL2Repo-Bench: **42.3%** (vendor)

Long context:

- 262K native verified; 1M via YaRN with short-prompt quality caveat; no independent long-context retrieval benchmark captured

Multimodal:

- MathVision 90.0% / 94.6% w/ code interpreter; CharXiv RQ 83.7% / 90.2%; OmniDocBench 1.5 91.1%; RealWorldQA 85.9%; Vision2Web 62.9% (all vendor)

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld-Verified 84.3% and AndroidWorld 81.9% are frontier-class computer-use scores for an open 27B; Terminal-Bench 2.1 73.0%. All vendor-run with no independent reproduction at launch, which caps the score.
- **Reasoning: 83/100.** GPQA Diamond 89.2% and HLE 30.8% are strong for the weight class; independent AA Intelligence Index 20 (Xhigh) is far below proprietary frontier models.
- **Context window: 80/100.** 262K native is good; 1M YaRN extension carries short-prompt quality and memory caveats (full-context BF16 KV ≈16GiB).
- **Multimodal: 84/100.** Native text/image/video input with very strong vision-agent results (OSWorld, CharXiv 90.2% w/ code, MathVision 94.6% w/ code); text-only output, no audio input confirmed.
- **Coding: 85/100.** LiveCodeBench v6 90.3%, SWE-bench Pro 61.7%, DeepSWE 1.1 42.2% — best-in-class for its size, still below closed frontier agents (DeepSWE ~72–73%).
- **Cost efficiency: 88/100.** $0.40/$3.00 with $0.04 cache (or free Apache 2.0 weights for self-hosting) — outstanding value in the open 27B class.
- **Overall Score: 84/100.** Mean of the five non-cost dims (86+83+80+84+85)/5 = 83.6 → 84. Best-fit: the best dense open-weight multimodal agent model around 30B params; verify vendor benchmarks before relying on them.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face: Qwen/Qwen3.8-27B model card (official)](https://huggingface.co/Qwen/Qwen3.8-27B)
  - [Qwen: Qwen3.8-27B FP8 checkpoint](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)
  - [Artificial Analysis: Qwen3.8 27B release page](https://artificialanalysis.ai/models/releases/qwen3-8-27b)
  - [Kingy.ai: Qwen3.8-27B specs, benchmarks & verdict (independent review incl. caveats)](https://kingy.ai/blog/qwen3-8-27b-specs-benchmarks-local-hardware/)
  - [llm-stats: Qwen3.8-27B](https://llm-stats.com/models/qwen3.8-27b)
  - [BenchLM: Qwen3.8-27B](https://benchlm.ai/models/qwen3-8-27b)
  - [Alibaba Cloud Model Studio: qwen3.8-27b model page](https://help.aliyun.com/en/model-studio/qwen3-8-27b)
- Future sources: add a new file next to this one using the same headings.
