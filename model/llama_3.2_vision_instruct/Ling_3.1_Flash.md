# Llama 3.2 11B Vision Instruct — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Llama 3.2 Vision Instruct
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 11B Vision Instruct (Llama 3.2-Vision 11B)
- **Short description:** Meta's September 2024 open multimodal vision model — 11B (10.6B) image-reasoning model optimized for visual recognition, image reasoning, captioning, and answering questions about images; a drop-in replacement for the Llama 3.1 11B text model.
- **Provider / access:** Meta — llama.com and Hugging Face (`meta-llama/Llama-3.2-11B-Vision-Instruct`); fine-tunable with torchtune, deployable with torchchat; 25+ launch partners (AMD, AWS, Databricks, Dell, Google Cloud, Groq, IBM, Intel, Microsoft Azure, NVIDIA, Oracle Cloud, Snowflake; on-device: Arm, MediaTek, Qualcomm); Amazon Bedrock (cross-region inference); NVIDIA NIM; Meta AI assistant.
- **Release / knowledge:** 2024-09-25 (Meta Connect). Knowledge cutoff December 2023.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct`; folder `llama_3.2_vision_instruct`. Sibling: Llama 3.2 90B Vision (88.8B).
- **Context window:** 128,000 tokens.
- **Modalities:** Text and image in, text out (no audio/video).
- **Pricing (as of 2026-10):** Open weights (Llama 3.2 Community License Agreement; "ready for commercial use" per NVIDIA NIM); hosted median **$0.34 / $0.34 per 1M** input/output (AA: "expensive" for open-weight input, median $0.03/$0.14); blended $0.35/M.
- **Architecture:** 11B (10.6B) dense transformer with a vision adapter — cross-attention layers feeding a pretrained image encoder into the language model; adapter and image-encoder weights updated during adapter training while language-model parameters were intentionally frozen (keeping text-only capabilities intact); GQA; pretrained on 6B (image, text) pairs.

### Raw benchmarks found

**Vendor-reported (Meta model card, internal evaluation library; 0-shot):**

*Pretrained model:* VQAv2 (val) 66.8; Text VQA (val, relaxed acc) 73.1; DocVQA (val, unseen, ANLS) 62.3; MMMU (val, micro avg) 41.7; ChartQA (test) 39.4; InfographicsQA (val, unseen, ANLS) 43.2; AI2 Diagram (test) 62.4.

*Instruction-tuned model (image rows):* MMMU (val, CoT, micro avg) **50.7**; MMMU-Pro Standard (10 opts, test) **33.0**; MMMU-Pro Vision (test) **23.7**; MathVista (testmini) **51.5**; ChartQA (test, CoT, relaxed acc) **83.4**; AI2 Diagram (test) **91.1**; DocVQA (test, ANLS) **88.4**; VQAv2 (test) **75.2**.

*Instruction-tuned model (text rows):* MMLU (CoT, macro avg) **73.0**; MATH (CoT, final em) **51.9**; GPQA **32.8**; MGSM (CoT, em) **68.9**.

**Artificial Analysis (independent):** Intelligence Index **5** — "among the least intelligent models and particularly expensive when comparing to other open weight non-reasoning models of similar size"; non-reasoning; 128K context; knowledge Dec 2023.

**Meta positioning claims:** competitive with Claude 3 Haiku and GPT-4o-mini on image recognition and a range of visual understanding tasks (per Meta's evaluation over 150+ benchmark datasets; no third-party replication captured).

## Scores

- **Tool use: 36/100.** No tool-use benchmark captured for the vision models (tool-use claims in the release cover the 1B/3B text models, not the 11B/90B vision models).
- **Reasoning: 39/100.** GPQA 32.8%, MATH (CoT) 51.9%, MMLU (CoT) 73.0%, AA Intelligence Index 5 — all well below the 2026-10 frontier.
- **Context window: 70/100.** 128K tokens; no long-context retrieval benchmark captured.
- **Multimodal: 61/100.** Text and image in, text out, with strong image-understanding rows (DocVQA 88.4, AI2 Diagram 91.1, ChartQA 83.4, MathVista 51.5, MMMU 50.7) but no audio/video and a December 2023 knowledge cutoff.
- **Coding: 32/100.** No coding benchmark captured (no HumanEval/SWE-bench row); MMLU 73.0 is general knowledge, not coding.
- **Cost efficiency: 86/100.** Open weights (Llama 3.2 Community License; commercial use allowed); hosted median $0.34/$0.34 is expensive for an open-weight model (AA), so the score reflects open weights with a pricey hosted median.
- **Overall Score: 47.6/100.** Mean of Tool use 36, Reasoning 39, Context window 70, Multimodal 61, Coding 32 = 47.6.

> **Gap vs folder average (58.2): −10.6.** This is a September 2024 vision model anchored to the 2026-10 frontier: its reasoning rows (GPQA 32.8%, MATH 51.9%, AA Index 5) and the absent coding/tool-use rows are the main drags, while its genuinely strong image-understanding rows (DocVQA 88.4, AI2 Diagram 91.1, MMMU 50.7) are fully credited in Multimodal. The peer set appears to credit the multimodal profile and open weights more than the measured 2024-era reasoning rows.

## Notes

- Verification trail: Meta model card `MODEL_CARD_VISION.md` (specs; full benchmark tables; adapter training design; knowledge cutoff), Meta blog "Llama 3.2: Revolutionizing edge AI and vision" (2024-09-25; release; partner list; Claude 3 Haiku / GPT-4o-mini positioning claim), HF `meta-llama/Llama-3.2-11B-Vision-Instruct` (release date; benchmark tables; license), NVIDIA NIM reference (commercial-use statement; benchmark tables), AWS Bedrock blog (availability; use cases), Artificial Analysis (Intelligence Index 5; $0.34/$0.34 hosted median; license; non-reasoning; Dec 2023 cutoff).
- Known conflicts: hosted price $0.34/$0.34 (AA median) vs open-weight self-hosting at effectively zero marginal compute; Meta's "competitive with Claude 3 Haiku and GPT-4o-mini" claim is vendor-side with no captured third-party replication.
- Open questions: coding and tool-use rows; long-context retrieval; fine-tuned variant performance.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: coding/tool-use benchmarks, long-context retrieval rows, third-party replications.
