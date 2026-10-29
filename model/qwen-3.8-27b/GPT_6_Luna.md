# Qwen3.8-27B — findings by GPT-6 Luna

- Source: Alibaba/Qwen3.8-27B
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba's dense 27B vision-language model in the Qwen3.8 family, with a hybrid linear/full-attention language model and support for image and video understanding. This is distinct from the tracked Qwen3.8 and Qwen3.8 Max entries; the `27B` suffix identifies the parameter-size variant.
- **Provider / access:** Open weights from [Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B) under Apache 2.0; compatible with Transformers, vLLM, SGLang, and TokenSpeed. Alibaba Cloud Model Studio / Qwen Cloud offers a managed API (OpenAI-compatible Completions API); the API model ID is `qwen3.8-27b`.
- **Release / knowledge:** Released August 2026 (the model card citation identifies August 2026; Hugging Face repository created 2026-08-05). No training-data or knowledge cutoff was verified.
- **IDs:** Weights repository `Qwen/Qwen3.8-27B`; Alibaba Model Studio / Qwen Cloud `qwen3.8-27b`.
- **Context window:** The open-weights model card specifies 262,144 native tokens, extensible to 1,000,000 using YaRN. Alibaba's current hosted API documentation lists a 1,000,000-token context window, 991,808 max input tokens (983,616 in thinking mode), and 131,072 max output tokens. Artificial Analysis reports 256K and no public API for its evaluated route. These are different serving paths, not a single contradictory limit.
- **Modalities:** Text, image, and video input; text output. No audio input or non-text output verified.
- **Pricing (as of 2026-10-29):** Open weights can be self-hosted; hosted API is paid. Alibaba Model Studio lists regional rates per 1M tokens: Beijing $0.424 input / $1.696 output, Singapore $0.50 / $3.00. Singapore pricing is also shown on Qwen Cloud and Artificial Analysis. Costs vary by region; cache discounts and promotions excluded.
- **Architecture:** Apache 2.0, causal language model with vision encoder; 27B parameters, 64 language-model layers, a repeating hybrid layout of Gated DeltaNet and Gated Attention blocks, and multi-token prediction. The official card describes a dense model, not a mixture-of-experts model.

### Raw benchmarks found

Three independent search queries were followed by checks of the official Hugging Face model card, Alibaba Cloud Model Studio docs, Qwen Cloud, and Artificial Analysis. Results below are the Qwen3.8-27B column from the official card unless otherwise noted. Reported percentages are benchmark scores, not normalized site scores.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (official [model card](https://huggingface.co/Qwen/Qwen3.8-27B/raw/main/README.md)).
- CoWorkBench: **70.7%**; JobBench: **33.4%**; Agents' Last Exam: **20.4 Pass@1 / 42.9 score** (same source).
- Tau3-Banking, GDPval-AA, and Claw-Eval: no verified exact-model result found.

Reasoning / knowledge:

- GPQA Diamond: **89.2%**; Humanity's Last Exam (HLE): **30.8%**; IFBench: **79.5%** (official [model card](https://huggingface.co/Qwen/Qwen3.8-27B/raw/main/README.md)).
- The card's benchmark table also reports comparisons against Qwen3.6-27B, Qwen3.7-Plus, Muse Glimmer-30B, and Opus 4.6 Max. These are vendor-published evaluations; no independent replication of the same benchmark setup was verified.
- A standalone CritPt or Artificial Analysis Intelligence Index score was not found for this exact model.

Coding:

- Terminal-Bench 2.1 (Terminus): **73.0%**; SWE-bench Pro: **61.7%**; LiveCodeBench v6: **90.3%** (official [model card](https://huggingface.co/Qwen/Qwen3.8-27B/raw/main/README.md)).
- Additional official results: NL2Repo-Bench **42.3%**; DeepSWE 1.1 **42.2%**; QwenSWEBench **79.0%**; the QwenSWEBench result is an in-house benchmark, reported avg@3 with an eight-hour timeout.
- SWE-bench Pro was evaluated with the Claude Code harness at temperature 1.0, top_p 0.95, and 256K context; the card says problematic tasks were corrected and baseline models were re-evaluated on the refined benchmark. Terminal-Bench and other tasks have their own harnesses; results should not be treated as one uniform evaluation.

Long context:

- The open model supports 262,144 tokens natively and can be extended to 1M with YaRN; hosted Qwen Cloud documents a 1M window. Artificial Analysis' evaluated Xhigh route lists 256K. No verified exact-model MRCR/RULER retrieval score found.

Vision:

- The official model and hosted API documentation confirm image and video input, with text output. No exact-model multimodal benchmark result was included in the evidence reviewed for this report.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 at 73.0% and strong long-horizon office/work-task scores support capable agent execution; no exact-model Tau3/GDPval/Claw-Eval evidence was found.
- **Reasoning: 86/100.** GPQA Diamond 89.2% is strong; HLE 30.8% is below the methodology's 40%+ frontier reference, tempering the score.
- **Context window: 95/100.** The hosted service documents 1M tokens (95–100 tier), while open weights are 262K native and require YaRN for 1M; no retrieval-quality result supports 100.
- **Multimodal: 85/100.** Verified video and image input fit the methodology's video/PDF-input range; output is text-only and no multimodal evaluation result was verified.
- **Coding: 86/100.** SWE-bench Pro 61.7%, Terminal-Bench 2.1 73.0%, and LiveCodeBench v6 90.3% show strong coding, but remain below the methodology's very highest agentic/coding references and rely on vendor-run harnesses.
- **Cost efficiency: 78/100.** The $0.50/$3.00 per-1M Singapore hosted rate is expensive versus low-cost APIs; Beijing's $0.424/$1.696 rate is cheaper but region-limited. Open weights allow self-hosting but do not make hosted inference free.
- **Overall Score: 87/100.** Half-up mean of the five quality dimensions (85, 86, 95, 85, 86), excluding cost; strongest fit is open-weight agentic coding and multimodal work where self-hosting or the hosted 1M context is valuable.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries followed by primary-source verification against the model card, Alibaba Model Studio docs, and Qwen Cloud; Artificial Analysis used as a serving-path cross-check. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
