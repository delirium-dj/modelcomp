# Kimi K3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: llm-stats.com/models/kimi-k3 (aggregating MoonshotAI official), build.nvidia.com/moonshotai/kimi-k3/modelcard (NVIDIA NIM), docs.aws.amazon.com Bedrock model card, www.kimi.ai/ai-models/kimi-k3
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** MoonshotAI's flagship open-weight MoE model (released 16 July 2026) for long-horizon coding, knowledge work, visual understanding, and reasoning; 2.8T total / ~104B active parameters, Kimi Delta Attention + Attention Residuals + Stable LatentMoE, 1M-token context, native multimodal (text/image/video in), Kimi K3 License (open weights).
- **Provider / access:** Moonshot AI API (`platform.kimi.ai`), plus DeepInfra, Fireworks, Novita, Together; NVIDIA NIM; AWS Bedrock; Microsoft Foundry (`FW-Kimi-K3`). Open weights on Hugging Face (`moonshotai/Kimi-K3`).
- **Release / knowledge:** Released 2026-07-16; knowledge cutoff not stated in fetched sources.
- **IDs:** `moonshotai/Kimi-K3` (Hugging Face weights); `kimi-k3` (API route on DeepInfra/Fireworks/Moonshot/Together/NVIDIA NIM); `FW-Kimi-K3` (Microsoft Foundry). No Free ID confirmed.
- **Context window:** 1.0M tokens input and output (verified on llm-stats, NVIDIA NIM card, AWS Bedrock, kimi.ai); ~1.6k pages of text.
- **Modalities:** Text, image, and video in; text out; reasoning yes (long-horizon reasoning); tool use yes (agentic workflows); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** DeepInfra lowest: input $2.85/M, cached input $0.285/M, output $14.25/M; Fireworks/Moonshot/Novita/Together: $3.00/$0.300/$15.00. Context 1.0M/1.0M across providers.
- **Architecture:** Open-weights Mixture-of-Experts, 2.8T total parameters, activates 16 of 896 experts (~104B active per NVIDIA NIM card), Kimi Delta Attention (KDA), Attention Residuals (AttnRes), Stable LatentMoE; native vision.

### Raw benchmarks found

The llm-stats benchmark dashboard and NVIDIA NIM modelcard did not surface concrete numeric benchmark scores in the fetched page (charts loaded without values). The following were confirmed as capability/spec claims rather than measured benchmark numbers:

- Native multimodal agentic model for long-horizon coding, knowledge work, visual understanding, and reasoning (NVIDIA NIM card / kimi.ai).
- 2.8T total parameters, 104B activated (NVIDIA NIM card); 2.8T total, 16 of 896 experts activated (llm-stats).
- 1M-token context window (all sources).

No verified public benchmark numbers found for: GPQA, HLE, ARC-AGI, MMLU-Pro, SWE-bench, LiveCodeBench, DeepSWE, MMMU-Pro, MRCR, OSWorld, Terminal-Bench, CritPt — not rendered in fetched sources.

### Normalized scores (1–100)

Derived from the specs above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin for this exact model, so most dims rest on declared specs and open-weight MoE class; treat as provisional.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Positioned for long-horizon coding and knowledge-work agent workflows; no verified Terminal-Bench/OSWorld/MCP scores found for this exact model; capped by thin independent benchmark evidence.
- **Reasoning: 70/100.** Frontier open-weight MoE (2.8T/104B active) with Kimi Delta Attention targeting reasoning and knowledge work; capped by absence of public GPQA/HLE/ARC-AGI/CritPt scores for this exact model.
- **Context window: 95/100.** Verified 1.0M tokens input AND output across all sources (llm-stats, NVIDIA NIM, AWS Bedrock, kimi.ai) — among the largest declared windows; capped only because no public full-depth needle-recall score at 1M was found.
- **Multimodal: 75/100.** Native vision, text+image+video in, text out; capped by absence of public MMMU-Pro/Chartography/LVBench scores for this exact model and text-only output.
- **Coding: 70/100.** Positioned for long-horizon coding; 2.8T/104B MoE suggests strong code capacity; capped by absence of public SWE-bench/LiveCodeBench/DeepSWE scores for this exact model.
- **Cost efficiency: 80/100.** Open weights (self-hosting = effectively $0 inference) plus competitive hosted pricing ($2.85/$14.25); not counted toward Overall.
- **Overall Score: 75/100.** Half-up mean of (65 + 70 + 95 + 75 + 70) / 5 = 75.0 → 75. Best-fit recommendation: strong open-weight long-context multimodal MoE for self-hosted coding/knowledge work; verify on your own coding and reasoning benchmarks given thin public score coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (llm-stats aggregating MoonshotAI official + NVIDIA NIM modelcard + AWS Bedrock model card + kimi.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
