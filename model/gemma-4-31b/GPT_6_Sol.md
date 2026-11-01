# Gemma 4 31B — findings by GPT 6 Sol

- Source: Google DeepMind (`google/gemma-4-31B-it`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's 30.7B-parameter **dense** multimodal open model, assessed here in the instruction-tuned thinking configuration. The base `google/gemma-4-31B` weights exist but the [published benchmark table](https://ai.google.dev/gemma/docs/core/model_card_4) explicitly uses instruction-tuned checkpoints; do not transfer those scores to a base-only run.
- **Provider / access:** [Official 31B IT weights](https://huggingface.co/google/gemma-4-31B-it), Google AI Studio and self-hosting through compatible engines; [Vals](https://www.vals.ai/models/google_gemma-4-31b-it) and [Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-31b) evaluate hosted routes. **Apache 2.0** license ([Google launch](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)). No independently verified Zen Free route for this checkpoint.
- **Release / knowledge:** Initial family release **March 31, 2026** in [Google's release log](https://ai.google.dev/gemma/docs/releases); public launch post and Vals metadata say **April 2**. Google states pre-training data cutoff **January 2025**, not a promised full knowledge cutoff ([model card](https://ai.google.dev/gemma/docs/core/model_card_4)).
- **Context window:** **256K tokens** on the [model card](https://ai.google.dev/gemma/docs/core/model_card_4) (Vals uses a rounded/implementation-specific 262K and 33K output). Hosted output cap and effective retrieval depend on implementation; no universal maximum output guaranteed by the card.
- **Modalities:** Text, images and video-as-frames input, text output, thinking toggle and function calling. **No native audio on 31B**: Google's audio feature applies only to E2B/E4B/12B ([card](https://ai.google.dev/gemma/docs/core/model_card_4)).
- **Pricing:** Downloadable Apache-2.0 weights have no token license fee but inference consumes hardware; [Google's deployment guidance](https://ai.google.dev/gemma/docs/core) estimates **~69.9 GB BF16 model-loading memory**, **~17.5 GB Q4** before full workload-specific KV cache. Vals displays **$0/$0** for its evaluated route; that is not a universal API tariff or a claim that self-hosting is free ([Vals](https://www.vals.ai/models/google_gemma-4-31b-it)).
- **Architecture:** Dense 30.7B/60 layers, hybrid 1,024-token sliding plus global attention, ~550M vision encoder, 262K vocabulary ([Google card](https://ai.google.dev/gemma/docs/core/model_card_4)). Do not confuse it with the 26B-A4B sparse MoE sibling.

### Raw benchmarks found

- **Agents/tool use:** Google's [instruction-tuned thinking results](https://ai.google.dev/gemma/docs/core/model_card_4) report **τ²-Bench 76.9% three-domain average**, including retail **86.4%**; [technical report](https://arxiv.org/html/2607.02770v2) gives **Terminal-Bench Hard 36.0%**. [Vals independently](https://www.vals.ai/models/google_gemma-4-31b-it) finds **Terminal-Bench 2.0 39.33% ±5.21** and MortgageTax **61.37% ±0.97**. TB Hard and TB 2.0 are different versions/tasks, not repeated measurements; strong simulated retail handling does not imply high general terminal success.
- **Reasoning:** Google reports **GPQA Diamond 84.3%, AIME 2026 no tools 89.2%, MMLU Pro 85.2%, HLE without tools 19.5%** ([card](https://ai.google.dev/gemma/docs/core/model_card_4)). [Vals' current profile](https://www.vals.ai/models/google_gemma-4-31b-it) displays SAGE **82.78% ±2.08**, whereas its *April 9 update* on that same page describes an earlier **55.03%** SAGE result; do not silently combine different versions/task sets. Its current TB2.0 remains **39.33%**. [Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-31b) currently shows no v5 Intelligence Index for this route; **N/A is not zero**.
- **Coding:** Google reports **LiveCodeBench v6 80.0%**, **Codeforces Elo 2150** and [technical-report SciCode **43.0%**](https://arxiv.org/html/2607.02770v2). Vals' April update gives **SWE-bench Verified subset 53.92%** ([Vals](https://www.vals.ai/models/google_gemma-4-31b-it)); it is not full 500-task Verified and cannot be compared directly with full-set SWE scores. Its TB2.0 **39.33% ±5.21** adds an independent agentic coding check.
- **Long context and vision:** [Google technical report Table 9](https://arxiv.org/html/2607.02770v2) finds **RULER 96.4% at 128K**, **LOFT retrieval recall@k 79.5% at 128K**, **MRCR v2 eight-needle 66.4% at 128K**; none validates 256K end-to-end recall. [Google card](https://ai.google.dev/gemma/docs/core/model_card_4) reports **MMMU Pro 76.9%**, **MATH-Vision 85.6%** and OmniDocBench 1.5 **0.131 edit distance (lower is better)**; no audio benchmark for this 31B checkpoint. Vals' April update quotes **Vals Multimodal Index 45.12%** on its independent evaluation, a different metric from MMMU Pro.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor τ² 76.9, checked against independent Vals TB2.0 39.33 and distinct vendor TB Hard 36.
- **Reasoning: 77/100.** Strong vendor GPQA/AIME; HLE 19.5, changing independent SAGE results and no AA v5 rerun reduce confidence.
- **Context window: 76/100.** 256K with solid 128K RULER but weaker MRCR and no near-cap reproduction.
- **Multimodal: 77/100.** Images/video frames, vendor MMMU Pro 76.9, but no audio on 31B and different independent multimodal index.
- **Coding: 73/100.** Vendor LCB v6 80, independent SWE subset 53.92/TB2.0 39.33; not a frontier repository agent.
- **Cost efficiency: 90/100.** Apache-2.0 weights, possible local quantization and hosted $0 evaluation route, tempered by hardware/latency and non-universal pricing.
- **Overall Score: 75/100.** Half-up mean (72 + 77 + 76 + 77 + 73) / 5 = 75; strong open 31B for local reasoning/vision, less reliable on extended agent tasks.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Three independent web searches; compared Google model card/technical report with independent Vals and Artificial Analysis listings, resolving SAGE version and context-cap differences rather than treating the open weights as free compute. Normalized scores are interpretive.
- Reference URLs:
  - [Google Gemma 4 model card, 31B architecture and benchmarks](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [Gemma 4 technical report, Table 9 long-context tests](https://arxiv.org/html/2607.02770v2)
  - [Google launch and Apache-2.0 license](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
  - [Vals independent 31B IT evaluation and update](https://www.vals.ai/models/google_gemma-4-31b-it)
  - [Artificial Analysis 31B reasoning profile](https://artificialanalysis.ai/models/gemma-4-31b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
