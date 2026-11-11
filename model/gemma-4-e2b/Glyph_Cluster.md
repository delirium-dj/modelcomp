# Gemma 4 E2B — findings by Glyph Cluster

- Source: Google (`google/gemma-4-E2B`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's Apache-2.0 edge-oriented multimodal Gemma 4 model (2.3B effective parameters, 5.1B with embeddings/PLE) with 128K context and native text/image/audio understanding, designed for on-device and local deployment.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-E2B`) via Transformers and compatible runtimes; also distributed in GGUF and other formats by community/partner conversions. Hosted inference availability/pricing varies by provider.
- **Release / knowledge:** Gemma 4 family release (April 2026 per local meta); pre-training data cutoff stated as January 2025 on model card.
- **IDs:** `google/gemma-4-E2B` (no Free ID on Zen; `noFreeId` per local meta).
- **Context window:** 128,000 tokens (model card).
- **Modalities:** Text, image, audio in (video as frames); text out. Supports variable image resolution, function calling, and configurable thinking/reasoning behavior per model card.
- **Pricing (as of 2026-11-11):** Apache-2.0 open weights (self-host $0; Q4_0 GGUF ~3.3 GB per local meta). Hosted pricing varies; local meta notes ~$0.04/$0.08 per 1M input/output on some hosted routes.
- **Architecture:** Dense transformer with hybrid attention (local sliding window + global), Per-Layer Embeddings (PLE), ~150M vision encoder parameters and ~300M audio encoder parameters (model card). Effective parameter count 2.3B.

### Raw benchmarks found

> Benchmarks below are from the Google Gemma 4 E2B model card / technical report as published on Hugging Face (instruction-tuned results shown where provided). "No verified public score found" is used where the template category was not reported for this exact model.

Agent / tool use:

- Tau2-Bench (average over 3): **24.5%** (Hugging Face model card benchmark table)
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **43.4%** (Hugging Face model card benchmark table)
- MMLU-Pro: **60.0%** (Hugging Face model card benchmark table)
- AIME 2026 no tools: **37.5%** (Hugging Face model card benchmark table)
- HLE no tools: no verified public score found (not reported for E2B in table)
- HLE with search: no verified public score found
- BigBench Extra Hard: **21.9%** (Hugging Face model card benchmark table)
- MMMLU: **67.4%** (Hugging Face model card benchmark table)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- LiveCodeBench v6: **44.0%** (Hugging Face model card benchmark table)
- Codeforces ELO: **633** (Hugging Face model card benchmark table)
- SWE-bench Verified / SWE-Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- MRCR v2 8 needle 128k (average): **19.1%** (Hugging Face model card benchmark table) — indicates limited long-context retrieval reliability at full 128K window despite nominal support.

Multimodal (additional evidence):

- MMMU Pro: **44.2%** (vision, model card)
- MathVista: **52.4%** (vision, model card)
- OmniDocBench 1.5 (avg edit distance, lower is better): **0.290** (vision/doc, model card)
- FLEURS (lower is better): **0.09** (audio, model card)
- CoVoST: **33.47** (audio, model card)

### Normalized scores (1–100)

> Scores are normalized interpretations from available public evidence, not official vendor scores. Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5.

- **Tool use: 24/100.** Tau2 average 24.5% is reported, but no Terminal-Bench, GDPval-AA, or broader agentic/tool benchmarks were found for this exact model; capability is limited for reliable multi-step tool workflows.
- **Reasoning: 38/100.** GPQA Diamond 43.4%, MMLU-Pro 60.0%, AIME 2026 37.5%, and BBEH 21.9% show basic-to-moderate reasoning for a 2.3B-effective edge model, but far below frontier reasoning systems and with no strong HLE/LCR evidence.
- **Context window: 22/100.** Nominal 128K context is substantial for size, but measured MRCR v2 8-needle at 128K is 19.1%, capping effective long-context retrieval/use.
- **Multimodal: 58/100.** Native text/image/audio input (and video-as-frames) with published vision/audio benchmark evidence (MMMU Pro 44.2, MathVista 52.4, FLEURS 0.09, CoVoST 33.47) is strong for the footprint, but output remains text-only and high-end multimodal reasoning is limited.
- **Coding: 30/100.** LiveCodeBench v6 44.0% and Codeforces ELO 633 indicate lightweight coding ability; absence of SWE-bench/agentic coding benchmarks and small-model limits cap practical software-engineering reliability.
- **Cost efficiency: 100/100.** Apache-2.0 open weights enable free self-hosting; hosted routes reported around ~$0.04/$0.08 per 1M in local meta are very low-cost.
- **Overall Score: 34/100.** Mean of Tool (24), Reasoning (38), Context (22), Multimodal (58), and Coding (30) = 172/5 = 34.4, rounded half-up to 34; best fit as a compact on-device multimodal assistant rather than an agentic coding/reasoning model.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public internet research (Hugging Face model card/technical report and local model metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/gemma-4-E2B — Hugging Face](https://huggingface.co/google/gemma-4-E2B)
  - [Gemma 4 Technical Report (arXiv:2607.02770)](https://arxiv.org/abs/2607.02770)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
