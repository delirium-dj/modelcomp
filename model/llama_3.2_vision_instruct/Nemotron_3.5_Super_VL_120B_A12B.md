# Llama 3.2 11B Vision Instruct — findings by Nemotron 3.5 Super VL 120B A12B

- Source: build.nvidia.com/meta/llama-3.2-11b-vision-instruct model card (official NVIDIA NIM page mirroring Meta's card), docs.api.nvidia.com/nim/re/reference/meta-llama-3_2-11b-vision-instruct, docs.nvidia.com/nim/vision-language-models examples, huggingface.co/hfhugs/Llama-3.2-11B-Vision-Instruct, dell.huggingface.co (Dell Enterprise Hub), developers.cloudflare.com/workers-ai/models, oracle.com/docs benchmark page, github.com/meta-llama/llama-models MODEL_CARD_VISION.md, benchmarklist.com/models/meta-llama-llama-3.2-11b-vision-instruct
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 11B Vision Instruct (Meta)
- **Short description:** Instruction-tuned vision-language model in the Llama 3.2 family, 11B parameters (10.6B active), text+image in → text out; 128K context; commercial-use license; released 2024-09-25. Optimized for visual recognition, image reasoning, captioning, and visual QA. Built on Llama 3.1 text model + separately trained vision adapter (cross-attention layers feeding a vision encoder into the LLM).
- **Provider / access:** Meta (gated on Hugging Face: meta-llama/Llama-3.2-11B-Vision-Instruct), NVIDIA NIM (build.nvidia.com/meta/llama-3.2-11b-vision-instruct), Oracle Cloud, Cloudflare Workers AI, Dell Enterprise Hub.
- **Release / knowledge:** Released 2024-09-25; pretraining data cutoff December 2023.
- **IDs:** `meta-llama/Llama-3.2-11B-Vision-Instruct` (HF/gated), `meta-llama-3.2-11b-vision-instruct` (NVIDIA NIM).
- **Context window:** 128,000 tokens (official model card; NVIDIA NIM card). Verified.
- **Modalities:** Text + image in, text out (multimodal — vision); no text-only reasoning specialization; no audio/video; tool calls not highlighted; structured output/JSON not highlighted.
- **Pricing (as of 2026-10-16):** benchmarklist.com lists $0.345/M input, $0.345/M output; Meta's model is openly available (self-host effectively $0 subject to license acceptance).
- **Architecture:** 11B parameters (10.6B), transformer with grouped-query attention, vision adapter (cross-attention layers + vision encoder), 6B image-text pairs pretraining + 3M+ synthetic instruction examples.

### Raw benchmarks found

Official Meta model card (NVIDIA NIM mirror) internal evaluation library results:

Base (pre-trained) Llama-3.2-11B-Vision:
- VQAv2 (test-dev, 30k), 0-shot, zero-shot accuracy: **66.83%**
- TextVQA (val), 0-shot, zero-shot relaxed accuracy: **73.14%**
- DocVQA (val, unseen), 0-shot, ANLS: **62.26%**

Instruction-tuned Llama-3.2-11B-Vision-Instruct:
- MMMU (val, CoT), 0-shot, micro avg accuracy: **50.7%**
- MMMU-Pro, Standard (10 opts, test), 0-shot, accuracy: **33.0%**
- MathVista (testmini), 0-shot, accuracy: **51.5%**
- ChartQA (test, CoT), 0-shot, relaxed accuracy: **83.4%**
- AI2 Diagram (test), 0-shot, accuracy: **91.1%**
- DocVQA (test), 0-shot, ANLS: **88.4%**

90B sibling (for scale reference, not this model): VQAv2 73.64, TextVQA 73.52, DocVQA 70.65, MMMU 60.3, MMMU-Pro 45.2, MathVista 57.3, ChartQA 85.5, AI2 Diagram 92.3, DocVQA 90.1.

Third-party: benchmarklist.com lists 24 benchmark rows, OpenVLM Leaderboard avg 57.7 (46th percentile), GPQA Diamond 22.1% (1st percentile — very weak scientific reasoning), SciCode 11.2%, MechVQA 25.5%, GeoRC 25.9%.

### Conflicting results noted

- Base vs instruct models reported separately in Meta's card — instruct-tuned numbers used here where available.
- 11B vs 90B sibling scores differ substantially — 11B numbers used (this slug).
- benchmarklist.com shows Llama 3.2 11B Vision Instruct trailing most modern models on shared rows (e.g., GPQA Diamond −97.9 pts vs Fable 5.1) — consistent with its 2024 vintage and small size.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 30/100.** No public agent/tool benchmarks (SWE-bench, Terminal-Bench, MCP Atlas, BrowseComp) found; vision-LLM not positioned as agentic; floor estimate.
- **Reasoning: 45/100.** MMMU 50.7, ChartQA 83.4, AI2 Diagram 91.1 show visual reasoning strength; but GPQA Diamond 22.1% and SciCode 11.2% show weak scientific/general reasoning; MMMU-Pro 33.0 weak.
- **Context window: 85/100.** Declared and verified 128K tokens; solid for a 2024 vision model; no public retrieval curve beyond.
- **Multimodal: 72/100.** Strong vision results: DocVQA 88.4 (ANLS), ChartQA 83.4, AI2 Diagram 91.1, VQAv2 66.83, MathVista 51.5, MMMU 50.7; MMMU-Pro 33.0 and OCRBench-type scores not found; text-only reasoning weak.
- **Coding: 25/100.** SciCode 11.2% is the only coding-related score found; very weak; no HumanEval/LiveCodeBench/Codeforces found for this vision variant.
- **Cost efficiency: 75/100.** Openly available weights ($0.345/$0.345 per M hosted per benchmarklist); small 11B model cheap to serve; not counted toward Overall.
- **Overall Score: 51.4/100.** Half-up mean of (30 + 45 + 85 + 72 + 25) / 5 = 51.4 → 51. Best-fit recommendation: compact vision-language model for image captioning, document QA, and chart reasoning on edge hardware; not a general language/reasoning or coding model (2024 vintage, 11B).

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Meta model card via NVIDIA NIM + docs.api.nvidia.com + docs.nvidia.com + github.com/meta-llama/llama-models + benchmarklist.com + Oracle/Cloudflare/Dell pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
