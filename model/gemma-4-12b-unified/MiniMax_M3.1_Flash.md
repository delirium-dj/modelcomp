# Gemma 4 12B Unified — findings by MiniMax M3.1 Flash

- Source: Google DeepMind (`google/gemma-4-12B`, `google/gemma-4-12B-it`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's mid-size dense open-weights multimodal model, released 2026-06-03. "Unified" is its architecture tag, not a separate checkpoint: Gemma 4 12B drops the separate vision and audio encoders used by the rest of the family and projects raw image patches, raw audio frames and text straight into one decoder-only backbone, which makes it the first medium-sized Gemma with native audio input. Top use case: local, offline agentic and multimodal work on a 16 GB laptop; it is the mid-size sibling of the sparse Gemma 4 26B A4B and the dense 31B.
- **Provider / access:** Open weights under Apache 2.0 — Hugging Face `google/gemma-4-12B` (pre-trained) and `google/gemma-4-12B-it` (instruction-tuned); Google Cloud Model Garden publisher version `gemma-4-12b-it`; locally via llama.cpp, MLX, SGLang, vLLM, Ollama, LM Studio and `litert-lm serve` (OpenAI-compatible local server). No OpenCode Zen entry for this model exists in the published Zen model table or the `opencode.ai/inference/v1/models` list (both checked 2026-11-12), so hosted access is via third-party providers; the repo-level ID `opencode/gemma-4-12b-unified` should be treated as a curated catalogue label rather than a confirmed Zen route.
- **Release / knowledge:** Announced 2026-06-03 (Google blog, Google Developers blog); Artificial Analysis lists the release date as 2026-06-03; training-data cutoff January 2025 per the Gemma 4 model card; family technical report arXiv 2607.02770 published 2026-07-02.
- **IDs:** `google/gemma-4-12B` (HF base), `google/gemma-4-12B-it` (HF instruct), `gemma-4-12b-it` (SiliconFlow), `gemma-4-12b-it` (nano-gpt), `gemma-4-12b-it` (Google Cloud Model Garden), `litert-community/gemma-4-12B-it-litert-lm` (LiteRT-LM pack). Repository entry ID: `opencode/gemma-4-12b-unified`.
- **Context window:** 262,144 tokens total (256K) per the official model card and Artificial Analysis (262k); max output 32,768 on most public hosts (nano-gpt lists 131,072 total, so host-side limits differ); Google does not publish a separate max-output figure, and the 256K figure is the documented model limit, not a measured retrieval result.
- **Modalities:** text, image (variable aspect ratio and resolution, token budgets 70/140/280/560/1120), audio (native, 16 kHz, 40 ms frames, 30 s max) and video (as frames, 1 fps, 60 s max) in; text out; reasoning/thinking mode yes (toggled through the chat formatting control tokens); native function calling; JSON mode via the serving stack; audio is input only — no speech or image output.
- **Pricing (as of 2026-11-12):** Free open weights (Apache 2.0) for self-hosting. Hosted prices vary by provider: SiliconFlow `google/gemma-4-12B-it` $0.10 in / $0.30 out per 1M; nano-gpt `gemma-4-12b-it` $0.05 in / $0.25 out per 1M (both from the models.dev registry, checked 2026-11-12). Artificial Analysis lists no API provider for this model on its benchmark roster, so there is no benchmark-verified hosted tier; no free hosted tier found.
- **Architecture:** Dense decoder-only, 11.95B total parameters, 48 layers, 1,024-token sliding window with global final layer, 262K vocabulary, hybrid local/global attention with unified Keys/Values and proportional RoPE (p-RoPE). Encoder-free: a 35M-parameter vision embedder (single matrix multiply on 48x48 patches plus factorized X/Y coordinate lookup) replaces the 27-layer vision tower of the other medium models, and the 12-layer conformer audio encoder is replaced by direct linear projection of raw audio. Ships with multi-token-prediction (MTP) drafters for latency reduction.

### Raw benchmarks found

Agent / tool use:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| Tau2 average over 3 domains | **69.0%** | Google (vendor) | Gemma 4 model card, ai.google.dev/gemma/docs/core/model_card_4 |
| tau2-bench | **36.3%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks, benchlm.ai/models/gemma-4-12b |
| GDPval-AA | **591 Elo / 0.0% normalized** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| AA-IFBench | **73.5%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| Terminal-Bench 2.1 | no verified public score found | — | no public leaderboard entry for Gemma 4 12B (checked 2026-11-12) |
| GDPval-AA (vendor), Claw-Eval, Toolathon / MCP-Atlas | no verified public score found | — | not published by Google or a third party |
| Native function calling | **yes** (Google docs) | Google | Gemma 4 model card, "Core Capabilities" |

Reasoning / knowledge:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| GPQA Diamond | **78.8%** | Google (vendor) | Gemma 4 model card |
| AA-GPQA Diamond | **75.3%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| MMLU Pro | **77.2%** | Google (vendor) | Gemma 4 model card |
| MMMLU | **83.4%** | Google (vendor) | Gemma 4 model card |
| AIME 2026 (no tools) | **77.5%** | Google (vendor) | Gemma 4 model card |
| HLE without tools | **5.2%** | Google (vendor) | Gemma 4 model card |
| AA-HLE | **15.7%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| BigBench Extra Hard | **53.0%** | Google (vendor) | Gemma 4 model card |
| AA-LCR | **63.7%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| CritPt | **0.0%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| Artificial Analysis Intelligence Index / BenchLM composite | **not published for this model** (no API on AA) / 35.22 (BenchLM, #159 of 1026, partial coverage) | BenchLM aggregator | benchlm.ai/models/gemma-4-12b |
| Omniscience Accuracy / Hallucination Rate | no verified public score found | — | not published for this model |

Coding:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| LiveCodeBench v6 | **72.0%** | Google (vendor) | Gemma 4 model card |
| Codeforces ELO | **1659** | Google (vendor) | Gemma 4 model card |
| AA Coding Index | **31.0%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| SWE-bench Verified / SWE-Pro | no verified public score found | — | not published for Gemma 4 12B |
| SciCode / AA-SciCode / Vibe Code Bench / DeepSWE | no verified public score found | — | not published for this model |

Long context:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| MRCR v2, 8 needles, 128K (average) | **43.4%** | Google (vendor) | Gemma 4 model card |
| AA-LCR (long-context reasoning) | **63.7%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| Retrieval at 512K or beyond | no long-context retrieval reported | — | no MRCR / RULER / GraphWalks run beyond 128K published |

Multimodal / audio:

| Benchmark | Value | Who ran it | Source |
| --- | --- | --- | --- |
| MMMU Pro | **69.1%** | Google (vendor) | Gemma 4 model card |
| AA-MMMU-Pro | **69.7%** | Artificial Analysis (independent) | BenchLM mirror of AA model benchmarks |
| MATH-Vision | **79.7%** | Google (vendor) | Gemma 4 model card |
| MedXpertQA (MM) | **48.7%** | Google (vendor) | Gemma 4 model card |
| OmniDocBench 1.5 (average edit distance, lower is better) | **0.164** | Google (vendor) | Gemma 4 model card |
| CoVoST (ASR, excluding Chinese) | **38.5** | Google (vendor) | Gemma 4 model card |
| FLEURS (WER, lower is better, excluding Chinese) | **0.069** | Google (vendor) | Gemma 4 model card |
| ExtractBench (LlamaIndex) | **45.39%** | LlamaIndex (independent) | BenchLM, November 10 2026 leaderboard snapshot |

### Normalized scores (1–100)

- **Tool use: 57/100.** Google's own Tau2 average of 69.0% would sit in the frontier band, but the independent Artificial Analysis run scores tau2-bench at only 36.3% and GDPval-AA at 591 Elo (0.0% normalized), so real-world agentic reliability is far below the vendor curve; no Terminal-Bench 2.1 or Claw-Eval entry exists and native function calling is documented, which caps the score in the mid band.
- **Reasoning: 63/100.** GPQA Diamond 78.8% vendor and 75.3% independent, AIME 2026 77.5% and MMLU Pro 77.2% put it at the upper end of the mid band, but HLE without tools is only 5.2% (AA-HLE 15.7%) and CritPt is 0.0%, so frontier-level hard-reasoning behaviour is not there.
- **Context window: 72/100.** The documented 262,144-token window lands in the 200K-500K tier (200K = 70), and measured retrieval is weak — MRCR v2 at 128K averages 43.4% — with no published retrieval evidence beyond 128K, so the score stays near the bottom of that tier.
- **Multimodal: 92/100.** Text, image, native audio and video-frame input with text output places it in the 90-100 band for audio-capable input (MMMU Pro 69.1%, CoVoST 38.5, FLEURS 0.069 WER); the score is held below the top of the band because output is text only and the audio path is the least independently verified part.
- **Coding: 61/100.** LiveCodeBench v6 72.0% and Codeforces ELO 1659 are solid mid-tier results, but the independent AA Coding Index is only 31.0% and there is no SWE-bench, SciCode or Vibe Code Bench number to support an agentic-coding claim.
- **Cost efficiency: 97/100.** The evaluated hosted tier is roughly $0.05-$0.10 in and $0.25-$0.30 out per 1M across public hosts (models.dev registry, checked 2026-11-12), and the Apache 2.0 weights make local self-hosting a $0 option; the score is set at the ~$0.10/$0.25 band rather than the $0 ceiling because hardware cost and the lack of a free hosted tier still apply.
- **Overall Score: 69/100.** Mean of Tool use 57, Reasoning 63, Context window 72, Multimodal 92 and Coding 61 — arithmetic: 57 + 63 + 72 + 92 + 61 = 345, divided by 5 = 69.0; best fit is a free, local, multimodal-and-audio agent on developer hardware, not a cloud reasoning or coding benchmark leader.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Tau2 tool use:** Google reports a Tau2 average of 69.0% over three domains; Artificial Analysis measured 36.3% on tau2-bench. Resolution: the independent run wins for scoring, because the vendor number comes from an in-house harness that is not published, while AA runs a fixed harness against live provider endpoints; the gap is treated as a real capability drop on unseen customer-service policies.
- **HLE:** Google reports 5.2% for HLE without tools and does not publish an HLE-with-search figure for the 12B; AA reports 15.7%. Resolution: both are kept, the vendor no-tools number is treated as the conservative lower bound and the AA run as the upper bound, and the reasoning score uses the band between them.
- **GPQA Diamond and MMMU Pro:** 78.8% vs 75.3% (GPQA) and 69.1% vs 69.7% (MMMU Pro). Resolution: these agree within a few points, so they are treated as reproduced and the scores rely on the independent runs.
- **Hosting and pricing:** Artificial Analysis lists zero API providers for Gemma 4 12B while the models.dev registry lists at least two paid hosts; OpenRouter and OpenCode Zen carry no listing at all. Resolution: the model is scored as a self-host-first open-weights model, and cost efficiency is based on the cheapest publicly listed hosted prices rather than on a benchmark-verified provider tier.
- **Repo ID spelling:** the repo carries both `gemma-4-12b-unified` and `gemma-4.12b-unified`. Resolution: both denote the same upstream checkpoint (see identity note), so the hyphenated folder researched here carries the findings and the dotted folder is treated as a duplicate listing of the same weights.

### Notes on identity

- The upstream checkpoint for `gemma-4-12b-unified` is Google's Gemma 4 12B in its encoder-free "Unified" form: Hugging Face `google/gemma-4-12B` (pre-trained) and `google/gemma-4-12B-it` (instruction-tuned), both tagged `gemma4_unified`, with the model card stating that "Unified" refers to the encoder-free architecture rather than to a separate release. There is no separate "12B Unified" checkpoint on Hugging Face.
- The repo's two Gemma 4 12B folders, `gemma-4-12b-unified` (hyphenated, researched here) and `gemma-4.12b-unified` (dotted), point at the same upstream weights and the same vendor benchmarks; only the slug spelling differs, so they are duplicate listings of one model rather than two distinct checkpoints.
- The two Gemma 4 spellings handled in this batch are the 12B Unified (dense, encoder-free, audio-capable, 11.95B parameters) and the 26B A4B (sparse MoE with a dedicated vision tower, no native audio, 25.2B total and 3.8B active parameters) — different upstream checkpoints from the same family, not variants of each other.
- The name "12B" is a family label, not the parameter count of the multimodal stack: the language backbone is 11.95B parameters and the unified embedders add a 35M vision module with no separate audio tower.

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: Fresh public web research only — Google DeepMind model card and launch blogs, Hugging Face model card and eval results, Artificial Analysis model and provider pages (via the BenchLM mirror), LlamaIndex ExtractBench leaderboard snapshot and the models.dev pricing registry; scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemma 4 model card — ai.google.dev](https://ai.google.dev/gemma/docs/core/model_card_4)
  - [google/gemma-4-12B model card — Hugging Face](https://huggingface.co/google/gemma-4-12B)
  - [Introducing Gemma 4 12B — Google blog, 2026-06-03](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12B/)
  - [Gemma 4 12B: The Developer Guide — Google Developers blog](https://developers.googleblog.com/en/gemma-4-12b-the-developer-guide/)
  - [Gemma 4 12B (Reasoning) — Artificial Analysis](https://artificialanalysis.ai/models/gemma-4-12b)
  - [Gemma 4 12B benchmark profile — BenchLM](https://benchlm.ai/models/gemma-4-12b)
