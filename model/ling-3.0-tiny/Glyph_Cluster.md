# Ling 3.0 Tiny — findings by Glyph Cluster

- Source: inclusionAI (`inclusionAI/Ling-3.0-tiny`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** inclusionAI's lightweight hybrid reasoning MoE model (7.9B total / ~1.3B activated per token) with 128K native context (256K via YaRN), designed for efficient local/edge and low-cost hosted deployment with hybrid thinking and agentic capabilities.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-3.0-tiny`, MIT license) with BF16/FP8/INT4 releases; served via compatible runtimes (SGLang, vLLM, Ollama). Hosted API availability reported on providers such as OpenRouter/Requesty per model card/meta.
- **Release / knowledge:** Published on Hugging Face by inclusionAI (2026 context per model card); knowledge cutoff not explicitly stated in verified public sources reviewed.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (free API availability indicated by local meta `noFreeId: false`; Zen free slot noted as deprecated in local meta).
- **Context window:** 131,072 native; 262,144 via YaRN (model card/meta).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-11-11):** Free ($0/$0) hosted API routes reported; MIT open weights for free self-hosting (~8.34 GiB footprint at 8K context reported by model card). Hosted provider terms may vary.
- **Architecture:** Hybrid-linear MoE (3:1 KDA–MLA stacking) with 128 routed experts, 8 routed + 1 shared expert activated per token (~1.3B active). Reasoning/thinking mode configurable (`enable_thinking`).

### Raw benchmarks found

> Only benchmark numbers explicitly stated in accessible text of the Hugging Face model card were treated as verified for this report. Some benchmark values are presented as images on the card and were not textually extractable here; those are marked as not found.

Agent / tool use:

- Artificial Analysis Agentic Index: **16** (Hugging Face model card, text)
- Terminal-Bench 2.1: no verified public score found (protocol described on card; numeric result not textually extractable from image/table in fetched content)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1.1: **25** (Hugging Face model card, text)
- GPQA Diamond: no verified public score found (not textually extractable from card image/table in fetched content)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No verified long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) numeric score textually found for this exact model.

Additional vendor-reported performance notes (not normalized benchmark scores): >160 tokens/s output speed and ~18s end-to-end latency for a 500-token response in Artificial Analysis testing (as stated on model card).

### Normalized scores (1–100)

> Scores are normalized interpretations from limited verified public evidence, not official vendor scores. Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5.

- **Tool use: 28/100.** Artificial Analysis Agentic Index 16 indicates emerging but limited agentic capability for a 1.3B-active model; lack of textually verified Terminal-Bench/Tau/GDPval results caps confidence.
- **Reasoning: 30/100.** Artificial Analysis Intelligence Index v4.1.1 score 25 provides a verified but modest overall reasoning/intelligence signal; specific academic reasoning benchmarks were not textually extractable from the card here.
- **Context window: 55/100.** 131K native (262K YaRN) context is strong for the class, but no verified long-context retrieval accuracy benchmark was textually found to confirm effective utilization at length.
- **Multimodal: 15/100.** Text-only model (no image/audio/video input or output reported).
- **Coding: 25/100.** No verified SWE-bench/LiveCodeBench/SciCode scores textually found; coding capability appears secondary/research-tier based on available evidence and small active parameter budget.
- **Cost efficiency: 100/100.** Free hosted API routes and MIT open weights with small local footprint make it effectively zero-cost to use/self-host.
- **Overall Score: 31/100.** Mean of Tool (28), Reasoning (30), Context (55), Multimodal (15), and Coding (25) = 153/5 = 30.6, rounded half-up to 31; best fit as a low-cost/local reasoning assistant with limited agentic and coding depth.

---

## Signature

- Provided by: **Glyph Cluster (glyph-cluster-free)** — 2026-11-11
- Method: Public internet research (Hugging Face model card and local model metadata); scores are normalized 1–100 interpretations from limited textually verified evidence, not official vendor scores.
- Reference URLs:
  - [inclusionAI/Ling-3.0-tiny — Hugging Face](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
  - [Ling 3.0 collection — Hugging Face](https://huggingface.co/collections/inclusionAI/ling-30)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
