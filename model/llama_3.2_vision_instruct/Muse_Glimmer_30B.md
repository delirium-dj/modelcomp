# Llama 3.2 Vision Instruct — findings by Muse Glimmer 30B

- Source: meta-llama/Llama-3.2-11B-Vision-Instruct
- Date: 2026-10-28
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta’s multimodal vision-instruct model released 2024-09-25. 11B and 90B variants for image reasoning, visual recognition, captioning and visual Q&A. Built on Llama 3.1 text model with a separately trained vision adapter using cross-attention. Positioned as an open-weights commercial-use multimodal model for image+text in / text out tasks.
- **Provider / access:** Meta / Hugging Face repo meta-llama/Llama-3.2-11B-Vision-Instruct and Llama-3.2-90B-Vision-Instruct. Available via NVIDIA NIM, Microsoft Azure Model Catalog, IBM watsonx, Ollama. License gated.
- **Release / knowledge:** 2024-09-25. Knowledge cutoff December 2023 per model card.
- **IDs:** meta-llama/Llama-3.2-11B-Vision-Instruct ; meta-llama/Llama-3.2-90B-Vision-Instruct. No Free/OpenCode Zen ID.
- **Context window:** 128k total tokens. Verified on Hugging Face model card and NVIDIA NIM model card.
- **Modalities:** Text + Image in; Text out. Reasoning yes for visual Q&A; tool calls no native; JSON mode not advertised.
- **Pricing (as of 2026-10-28):** Open-weights; inference cost varies by provider. No official Meta pricing; community deployments are free to self-host under Llama 3.2 Community License.
- **Architecture:** Llama 3.1 auto-regressive transformer with Grouped-Query Attention. Vision adapter with cross-attention layers. Parameters 11B (10.6B) and 90B (88.8B) sizes. Training data 6B image-text pairs.

### Raw benchmarks found

Official model card benchmarks, Hugging Face:

- Image Understanding:
  - VQAv2 val 0-shot: 66.8% 11B / 73.6% 90B
  - TextVQA val 0-shot relaxed accuracy: 73.1% 11B / 73.5% 90B
  - DocVQA val unseen ANLS: 62.3% 11B / 70.7% 90B
- Visual Reasoning:
  - MMMU val 0-shot micro avg accuracy: 41.7% 11B / 49.3% 90B
  - ChartQA test 0-shot accuracy: 39.4% 11B / 54.2% 90B
  - InfographicsQA val unseen ANLS: 43.2% 11B / 56.8% 90B
  - AI2 Diagram test accuracy: 62.4% 11B / 75.3% 90B

Instruction-tuned benchmarks from model card:

- MMMU val CoT: 50.7% 11B / 60.3% 90B
- ChartQA test CoT relaxed accuracy: 83.4% 11B / 85.5% 90B
- DocVQA test ANLS: 88.4% 11B / 90.1% 90B
- VQAv2 test accuracy: 75.2% 11B / 78.1% 90B

Independent provider description:

- NVIDIA NIM model card describes Llama 3.2 Vision instruction-tuned models as optimized for visual recognition, image reasoning, captioning and answering general questions about an image, outperforming many open source and closed multimodal models on common industry benchmarks. Confirms 11B/90B sizes, text+images in / text out, commercial use ready.
- Microsoft Foundry catalog repeats the same description and notes the collection is pretrained and instruction-tuned image reasoning generative models.

Conflicting / missing:
- No independent third-party benchmark replication found beyond vendor-reported numbers. NVIDIA and Microsoft descriptions are paraphrases of Meta’s model card with no new numeric results. No pricing numbers published by Meta; self-host cost depends on hardware.

### Normalized scores (1–100)

- **Tool use: 35/100.** No native tool calling advertised in model card; multimodal assistant use only. Caps at low-mid.
- **Reasoning: 60/100.** MMMU 41.7-49.3% base and 50.7-60.3% CoT, plus GPQA/MMLU not reported for vision variant. Mid-range multimodal reasoning, behind frontier text models.
- **Context window: 66/100.** 128k total maps to mid-tier per methodology; insufficient public retrieval verification at high offsets.
- **Multimodal: 74/100.** Image input + text output with strong captioning/VQA numbers; no audio/video generation. Strong for open-weights vision instruct class.
- **Coding: 45/100.** No coding-specific benchmarks reported for vision variant; inherits Llama 3.1 text coding capability indirectly, but no SWE-bench numbers published.
- **Cost efficiency: 92/100.** Open-weights Apache-style commercial license, self-hostable on single GPU for 11B variant; very high cost efficiency vs closed APIs.
- **Overall Score: 56/100.** Mean of Tool 35, Reasoning 60, Context 66, Multimodal 74, Coding 45, Cost 92 = 62.0. Best fit: strong open-weights multimodal value with limited tool/code capabilities.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-28
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Muse_Glimmer_30B.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Muse_Glimmer_30B.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Llama 3.2 Vision Instruct — findings by Muse Glimmer 30B

- Source: Meta / llama_3.2_vision_instruct
- Archived date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

### Model card

- **Name:** Llama 3.2 Vision Instruct
- **Short description:** Meta's September 2024 open-weights multimodal family for image understanding and visual reasoning. Released as 11B and 90B instruction-tuned variants built on Llama 3.1 with a cross-attention vision adapter. Optimized for document/chart/diagram QA and visual question answering, English-only for image+text. Now legacy, largely delisted by hosts.
- **Provider / access:** Open weights under Llama 3.2 Community License; hosted via OpenAI-compatible Chat Completions on NVIDIA NIM, Cloudflare Workers AI, DeepInfra, io.net, Inference.net. No Responses API. No OpenCode Zen ID.
- **Release / knowledge:** 2024-09-25; knowledge cutoff December 2023
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`, `meta-llama/Llama-3.2-90B-Vision-Instruct` (Hugging Face gated); `meta/llama-3.2-11b-vision-instruct` (NVIDIA NIM), `@cf/meta/llama-3.2-11b-vision-instruct` (Cloudflare)
- **Context window:** 128,000 tokens total, 4,096 max output verified on hosted endpoints. Verified by Meta model card and NVIDIA NIM spec.
- **Modalities:** Input text + image; Output text. No audio/video. English only for image+text; text-only supports en/de/fr/it/pt/hi/es/th. No native reasoning mode, no verified tool calling on reference endpoint.
- **Pricing (as of 2026-10-25):** Open weights free to self-host. Hosted $0.00/$0.00 on NVIDIA NIM developer credits, Cloudflare $0.0485/M in / $0.676/M out, DeepInfra $0.345/$0.345, Inference.net $0.055/$0.055 with 16K window. Llama 3.2 Community License with 700M MAU commercial threshold.
- **Architecture:** 11B dense 10.6B params, 90B dense 88.8B params, GQA, cross-attention vision adapter on Llama 3.1. Pretrained on 6B image-text pairs; instruction tuned with public vision datasets + 3M synthetic examples. SFT + RLHF.

## Raw benchmarks found

> Sources: Meta Llama 3.2 Vision model card reproduced on Hugging Face and NVIDIA NIM; Meta blog release notes Sept 2024; independent re-measurements on BenchmarkList / Artificial Analysis. 11B and 90B numbers are reported separately where divergent; conflicts favor the official Meta card values.

Agent / tool use:

- Tau2-Bench Telecom: 14.6% success rate 11B (Artificial Analysis, 2026-06-10, rank 281/332)
- Terminal-Bench Hard: 0.8% 11B (Artificial Analysis, 2026-06-10, rank 279/326)
- Function calling: not supported on NVIDIA NIM reference endpoint; no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- MMLU CoT Macro avg: 73.0% 11B / 86.0% 90B (Meta official)
- MATH CoT Final EM: 51.9% 11B / 68.0% 90B (Meta official)
- GPQA: 32.8% 11B / 46.7% 90B (Meta official); Artificial Analysis re-measure 22.1% 11B
- Humanity's Last Exam: no verified public score found for 11B/90B; Artificial Analysis Intelligence Index uses 5.2% component for 11B
- MGSM CoT EM: 68.9% 11B / 86.9% 90B (Meta official)
- Artificial Analysis Intelligence Index v4.3.2: 3.33 11B approx (rank 382/418) per third-party aggregation; 90B not independently indexed

Coding:

- SciCode: 11.2% 11B (Artificial Analysis, rank 402/458)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR v1.1: 15.7% 11B (Artificial Analysis, rank 293/409); 11.7% inside Intelligence Index
- MRCR / RULER / GraphWalks: no long-context retrieval reported

Image / multimodal:

- VQAv2 test accuracy: 75.2% 11B / 78.1% 90B (Meta instruction tuned)
- DocVQA test ANLS: 88.4 11B / 90.1 90B
- AI2 Diagram test accuracy: 91.1% 11B / 92.3% 90B
- ChartQA test CoT relaxed accuracy: 83.4% 11B / 85.5% 90B
- MMMU val CoT micro avg: 50.7% 11B / 60.3% 90B
- MMMU-Pro Standard: 33.0% 11B / 45.2% 90B
- MathVista testmini: 51.5% 11B / 57.3% 90B

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
