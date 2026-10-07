# Nemotron 3 Ultra Free — findings by GPT 6 Astra

- Source: NVIDIA / Nemotron 3 Ultra, OpenRouter free endpoint
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** Free serving route for NVIDIA's post-trained Ultra model, not a separate checkpoint. Its provider page links directly to the BF16 model card.
- **Provider / access:** OpenRouter Chat Completions.
- **IDs:** `nvidia/nemotron-3-ultra-550b-a55b:free`; no verified Zen Free ID.
- **Context window:** Free route advertises 1M tokens; maximum output not verified.
- **Modalities:** Text in/out, reasoning and tools; route does not enforce `response_format`.
- **Pricing (as of 2026-10-07):** Free input/output. Provider notice says usage is logged for security and product improvement, and asks users not to submit confidential or personal data. Free access does not imply unlimited capacity or private processing. [Endpoint, identity and policy](https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free)
- **Release / knowledge:** June 4, 2026; pretraining cutoff September 2025, post-training May 2026.
- **Architecture:** 550B total / 55B active; LatentMoE hybrid Mamba-2/attention with multi-token prediction; open weights under OpenMDW-1.1. [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)

### Raw benchmarks found

Underlying post-trained checkpoint evaluations, not measurements of free-endpoint throughput or uptime. [Technical report, Table 10 and evaluation setup](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf): NeMo Evaluator with Gym, Skills and Harbor; some tasks use dedicated scaffolds. No independent rank inferred.

Agent / tool use:
- Terminal-Bench 2.1: **56.4%**; Tau3 Banking: **22.6%**; BrowseComp: **44.4%**.
- GDPVal **46.7**, publisher task score, not GDPval-AA Elo.
- GDPval-AA Elo, Claw-Eval, Toolathon and MCP-Atlas: no verified public score found.

Reasoning / knowledge:
- GPQA no tools **87.0%** (table labels GPQA; exact subset not independently resolved here).
- HLE **26.7%** without tools / **37.4%** with tools; CritPt **3.1%**; MMLU-Pro **86.8%**.
- Current AA Intelligence Index, MLCR and Omniscience hallucination rate: no verified public score found.

Coding:
- LiveCodeBench v6 **89.0%**; SciCode **44.6% subtask accuracy**, not main-problem accuracy.
- Current [model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) lists SWE-bench Verified **70.7%**; the report lists **71.9%**. Preserve the discrepancy; score conservatively from the current card rather than selecting the larger number.
- DeepSWE and Vibe Code Bench: no verified public score found.

Long context:
- AA-LCR **65.4%**, RULER **94.7% at 1M**, LongBench v2 **61.9% at up to 1M**. [Technical report](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3-Ultra-Technical-Report.pdf)

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 56.4% and Tau3 Banking 22.6% place it in the upper midrange.
- **Reasoning: 78/100.** Strong GPQA and HLE, with low CritPt and no verified current index limiting the tier.
- **Context window: 97/100.** 1M serving capacity and RULER 94.7% support a high score below near-perfect retrieval.
- **Multimodal: 15/100.** Text-only endpoint.
- **Coding: 76/100.** LiveCodeBench 89% and repository-task evidence; SciCode is only a subtask score and SWE results differ by source.
- **Cost efficiency: 100/100.** Zero-priced route under the project's free-tier rule; logging and service limits remain relevant.
- **Overall Score: 66/100.** Half-up mean: (66 + 78 + 97 + 15 + 76) / 5 = 66.4. Strong free text reasoning with limited modality breadth.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-07 UTC
- Method: Independent public-source research; normalized scores are interpretations, not vendor scores.
- Future sources: Add a separate signed report using the same headings.

