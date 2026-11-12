# Gemma 4 26B A4B — findings by MiniMax M3.1 Flash

- Source: Google DeepMind (`google/gemma-4-26B-A4B`, `google/gemma-4-26B-A4B-it`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's sparse Mixture-of-Experts Gemma 4, released 2026-04-02: 25.2B total parameters with roughly 3.8B active per token, so it runs at close to 4B-class speed while keeping 31B-class quality. Top use case: high-throughput multimodal serving and agentic workflows on a single GPU or workstation, where the 26B total footprint is affordable but inference cost has to stay low.
- **Provider / access:** Open weights under Apache 2.0 — Hugging Face `google/gemma-4-26B-A4B` (pre-trained) and `google/gemma-4-26B-A4B-it` (instruction-tuned); hosted at OpenRouter as `google/gemma-4-26b-a4b-it` and `google/gemma-4-26b-a4b-it:free` (OpenAI-compatible chat completions), on Google Vertex AI as `google/gemma-4-26b-a4b-it-maas`, on Amazon Bedrock as `google.gemma-4-26b-a4b`, plus DeepInfra, Requesty, Hugging Face, Cloudflare Workers AI, Scaleway, Novita, Vercel and other hosts (models.dev registry, checked 2026-11-12). Artificial Analysis lists 7 API providers and measures 78 tok/s output and 23.14 s time to first answer token. OpenCode Zen's published model table lists no Gemma 4 entry (checked 2026-11-12), so the repo-level ID `opencode/gemma-4-26b-a4b` is a curated catalogue label rather than a confirmed Zen route.
- **Release / knowledge:** Released 2026-04-02 per Artificial Analysis and the models.dev registry; the family technical report (arXiv 2607.02770) followed on 2026-07-02 and the Hugging Face checkpoints were refreshed 2026-07-15 and 2026-07-20; training-data cutoff January 2025 per the Gemma 4 model card.
- **IDs:** `google/gemma-4-26B-A4B` (HF base), `google/gemma-4-26B-A4B-it` (HF instruct), `google/gemma-4-26b-a4b-it` (OpenRouter, Vertex, DeepInfra, Requesty, Hugging Face, Novita), `google.gemma-4-26b-a4b` (Amazon Bedrock), `@cf/google/gemma-4-26b-a4b-it` (Cloudflare Workers AI), `gemma-4-26b-a4b-it` (Scaleway). Repository entry ID: `opencode/gemma-4-26b-a4b`.
- **Context window:** 262,144 tokens total (256K) per the official model card; Artificial Analysis lists 256k; most hosts expose a 32,768-token maximum output (OpenRouter 128,000, Vertex 128,000, Vercel 131,072, SiliconFlow 262,144), so the usable budget depends on the host.
- **Modalities:** text and image in (variable aspect ratio and resolution; token budgets 70/140/280/560/1120), video handled as image frames, text out; reasoning/thinking mode yes (toggled through the chat formatting control tokens); native function calling; native system-prompt support; no native audio input on this size (audio is exclusive to the E2B, E4B and 12B models).
- **Pricing (as of 2026-11-12):** OpenRouter `google/gemma-4-26b-a4b-it` $0.08 in / $0.10 out per 1M with a $0 `:free` variant; Artificial Analysis median across 7 providers $0.10 in / $0.34 out; DeepInfra and Requesty $0.07 in / $0.34 out; Cloudflare Workers AI and wandb $0.10 in / $0.30 out; Hugging Face and Novita $0.13 in / $0.40 out; Google Vertex AI MaaS and Vercel $0.15 in / $0.60 out. The Apache 2.0 weights can be self-hosted at $0 software cost.
- **Architecture:** Sparse MoE decoder — 25.2B total parameters, 3.8B active, 30 layers, 8 of 128 fine-grained experts active per token plus 1 shared expert, 1,024-token sliding window, 262K vocabulary, hybrid local/global attention with unified Keys/Values and proportional RoPE (p-RoPE), plus a roughly 550M-parameter vision encoder. Not encoder-free: unlike the 12B Unified, this model keeps a dedicated vision tower and has no audio path.

### Raw benchmarks found

Agent / tool use:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| Tau2 average over 3 domains | **68.2%** | Google (vendor) | Gemma 4 model card, ai.google.dev/gemma/docs/core/model_card_4 |
| tau2-bench | **43.6%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks, benchlm.ai/models/gemma-4-26b-a4b |
| GDPval-AA | **713 Elo / 3.2% normalized** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| AA-IFBench | **72.4%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| ScarfBench | **24.4%** | IBM Research ScarfBench team (independent) | Kaggle ScarfBench leaderboard, via BenchLM |
| Terminal-Bench 2.1 | no verified public score found | — | no public leaderboard entry for Gemma 4 26B A4B (checked 2026-11-12) |
| Claw-Eval / ClawProBench, Toolathon / MCP-Atlas | no verified public score found | — | not published by Google or a third party |
| Native function calling | **yes** (Google docs) | Google | Gemma 4 model card, "Core Capabilities" |

Reasoning / knowledge:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| GPQA Diamond | **82.3%** | Google (vendor, also HF eval leaderboard) | Gemma 4 model card; HF eval results for `google/gemma-4-26B-A4B-it` |
| AA-GPQA Diamond | **79.2%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| MMLU Pro | **82.6%** | Google (vendor) | Gemma 4 model card |
| MMMLU | **86.3%** | Google (vendor) | Gemma 4 model card |
| AIME 2026 (no tools) | **88.3%** | Google (vendor) | Gemma 4 model card |
| HLE without tools / with search | **8.7% / 17.2%** | Google (vendor) | Gemma 4 model card |
| AA-HLE | **19.3%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| BigBench Extra Hard | **64.8%** | Google (vendor) | Gemma 4 model card |
| AA-LCR | **65.7%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| CritPt | **0.0%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| IFBench prompt-level loose | **72%** | Google (HF eval leaderboard) | HF eval results, `google/gemma-4-26B-A4B-it` |
| Artificial Analysis Intelligence Index / BenchLM composite | **not published for this model** (no API on AA) / 41.36 (BenchLM, #134 of 1026, partial coverage) | BenchLM aggregator | benchlm.ai/models/gemma-4-26b-a4b |
| Omniscience Accuracy / Hallucination Rate | no verified public score found | — | not published for this model |

Coding:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| LiveCodeBench v6 | **77.1%** | Google (vendor) | Gemma 4 model card |
| Codeforces ELO | **1718** | Google (vendor) | Gemma 4 model card |
| AA Coding Index | **39.3%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| AA-SciCode | **40.0%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| SWE-bench Verified / SWE-Pro | no verified public score found | — | not published for Gemma 4 26B A4B |
| Vibe Code Bench / DeepSWE | no verified public score found | — | not published for this model |

Long context:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| MRCR v2, 8 needles, 128K (average) | **44.1%** | Google (vendor) | Gemma 4 model card |
| AA-LCR (long-context reasoning) | **65.7%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| Retrieval at 512K or beyond | no long-context retrieval reported | — | no MRCR / RULER / GraphWalks run beyond 128K published |

Multimodal:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| MMMU Pro | **73.8%** | Google (vendor, also HF eval leaderboard) | Gemma 4 model card; HF eval results |
| AA-MMMU-Pro | **69.2%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| MATH-Vision | **82.4%** | Google (vendor) | Gemma 4 model card |
| MedXpertQA (MM) | **58.1%** | Google (vendor) | Gemma 4 model card |
| OmniDocBench 1.5 (average edit distance, lower is better) | **0.149** | Google (vendor) | Gemma 4 model card |
| ExtractBench (LlamaIndex) | **70.27%** | LlamaIndex (independent) | BenchLM, November 10 2026 leaderboard snapshot |
| ParseBench | **58.50%** | ParseBench (independent) | BenchLM, November 10 2026 leaderboard snapshot |
| LongShot (video, rubric-weighted) | **34.76 overall / 29.78 core perception** | Google (HF eval leaderboard) | HF eval results, longshot-bench |

### Normalized scores (1–100)

- **Tool use: 59/100.** Google's Tau2 average of 68.2% is strong on paper, but the independent Artificial Analysis run scores tau2-bench at 43.6% and GDPval-AA at only 713 Elo (3.2% normalized) with ScarfBench at 24.4%, so end-to-end agentic reliability is mid-tier; native function calling is documented, but there is no Terminal-Bench 2.1, Claw-Eval or MCP-Atlas entry.
- **Reasoning: 67/100.** GPQA Diamond 82.3% vendor and 79.2% independent plus AIME 2026 88.3% and MMLU Pro 82.6% are above the 60-80% mid band, and AA-HLE 19.3% beats the mid-tier HLE marker, but HLE without tools is 8.7%, CritPt is 0.0% and only 3.8B parameters are active per token, which caps the score below the frontier band.
- **Context window: 72/100.** The documented 262,144-token window sits in the 200K-500K tier (200K = 70); measured retrieval is weak (MRCR v2 8-needle at 128K averages 44.1%) and nothing is published beyond 128K, so the score stays near the bottom of the tier.
- **Multimodal: 79/100.** Text plus image input (video as frames) with text output belongs in the 75-90 video/PDF-in band, with MMMU Pro 73.8% vendor and 69.2% independent, ExtractBench 70.27% and ParseBench 58.50%; it stays below the audio-capable band because this size has no native audio input.
- **Coding: 64/100.** LiveCodeBench v6 77.1% and Codeforces ELO 1718 are good mid-tier numbers, but the independent AA Coding Index is 39.3% and AA-SciCode 40.0%, and no SWE-bench, Vibe Code Bench or DeepSWE result exists to support a higher agentic-coding score.
- **Cost efficiency: 98/100.** The evaluated hosted tier is $0.08 in / $0.10 out per 1M on OpenRouter with a $0 free variant, $0.07/$0.34 on DeepInfra and Requesty, and $0.15/$0.60 on Vertex MaaS and Vercel, plus a $0 self-host path on Apache 2.0 weights; the score is at the top of the ~$0.10 input band, held below 100 because some hosts price output materially higher.
- **Overall Score: 68.2/100.** Mean of Tool use 59, Reasoning 67, Context window 72, Multimodal 79 and Coding 64 — arithmetic: 59 + 67 + 72 + 79 + 64 = 341, divided by 5 = 68.2; best fit is a cheap, fast multimodal serving and batch agent model, not a frontier reasoning or coding replacement.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Tau2 tool use:** Google reports a Tau2 average of 68.2% over three domains; Artificial Analysis measured 43.6% on tau2-bench. Resolution: the independent harness wins for scoring, because the vendor run is not reproducible from a published harness, while AA runs a fixed suite against live endpoints; the gap is treated as a genuine drop on unseen enterprise policies.
- **HLE:** Google reports 8.7% without tools and 17.2% with search; AA reports 19.3%. Resolution: the two agree once the tool setting is accounted for, so the reasoning score uses the 8.7-19.3% band and credits the with-search figure only partially.
- **GPQA Diamond:** 82.3% (Google, also on the HF eval leaderboard) versus 79.2% (AA). Resolution: a 3-point spread across two harnesses is reproduced agreement; the score uses the independent number.
- **MMMU Pro:** 73.8% (Google, reproduced on the HF eval leaderboard) versus 69.2% (AA). Resolution: the independent value is used for scoring, the vendor value is reported as the upper bound.
- **Modality support:** OpenRouter and the models.dev registry list video as an input modality, while Google's model card lists supported modalities as text and image only, with video handled as image frames (60 s at 1 fps). Resolution: the vendor description wins — video is a frame pipeline, not a native video encoder.
- **Context window:** Google documents 256K, Artificial Analysis reports 256k, but several hosts expose 128K or cap output at 16K-32K. Resolution: the model-level 262,144 figure is recorded, with host limits noted as a deployment caveat rather than a model property.
- **Repo ID spelling:** the repo carries both `gemma-4-26b-a4b` (hyphenated, researched here) and `gemma-4.26b-a4b` (dotted). Resolution: both point at the same upstream checkpoint, so the dotted folder is treated as a duplicate listing of the same weights rather than a second model.

### Notes on identity

- The upstream checkpoint for `gemma-4-26b-a4b` is Google's Gemma 4 26B A4B MoE: Hugging Face `google/gemma-4-26B-A4B` (pre-trained) and `google/gemma-4-26B-A4B-it` (instruction-tuned). "A4B" denotes about 4B active parameters per token out of 25.2B total.
- The repo's two spellings, `gemma-4-26b-a4b` (hyphenated, researched here) and `gemma-4.26b-a4b` (dotted), denote the same upstream weights and the same vendor benchmark table; only the slug punctuation differs, so they are duplicate listings of one model.
- The two Gemma spellings handled in this batch are different checkpoints of the same family: the 12B Unified (dense, encoder-free, with native audio input) and the 26B A4B (sparse MoE, dedicated vision tower, no audio). Their modality coverage differs, which is why the 12B ranks higher on multimodal despite lower text-only benchmarks.

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Fresh public web research only — Google DeepMind model card and technical report metadata, Hugging Face model card and eval results, Artificial Analysis model and provider pages (via the BenchLM mirror), IBM Research ScarfBench and LlamaIndex ExtractBench/ParseBench leaderboard snapshots, and the models.dev and OpenRouter pricing registries; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemma 4 model card — ai.google.dev](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [google/gemma-4-26B-A4B-it model card — Hugging Face](https://huggingface.co/google/gemma-4-26B-A4B-it)
  - [Gemma 4 26B A4B (Reasoning) — Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-26b-a4b)
  - [Gemma 4 26B A4B benchmark profile — BenchLM](https://benchlm.ai/models/gemma-4-26b-a4b)
  - [google/gemma-4-26b-a4b-it — OpenRouter](https://openrouter.ai/google/gemma-4-26b-a4b-it)
  - [Gemma 4 technical report — arXiv 2607.02770](https://arxiv.org/abs/2607.02770)
