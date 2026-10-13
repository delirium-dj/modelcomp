# Gemma 4 12B Unified — findings by Qwen 3.7 Plus
- Source: Google/Gemma 4 12B Unified (`opencode/gemma-4.12b-unified`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's mid-size open-weight dense model (11.95B, Apache 2.0) with encoder-free unified architecture accepting native text, image, and audio input. Scores 78.8% on GPQA Diamond, 77.2% on MMLU Pro, and 72% on LiveCodeBench. 256K context window. HLE 5.2% shows limits on hardest reasoning tasks. Runs locally on laptop-class hardware (9GB VRAM at Q4). Best for local multimodal agents requiring data sovereignty. Supports 140 languages.
- **Provider / access:** Google DeepMind (open weights, Apache 2.0). Self-hostable. Available via hosted APIs at ~$0.10/$0.30 per 1M.
- **Release / knowledge:** June 3, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/gemma-4.12b-unified`
- **Context window:** 256,000 tokens (262,144; hosts serve 32K–256K)
- **Modalities:** Text, image, audio in; text out
- **Pricing:** ~$0.10 in / ~$0.30 out per 1M (median hosted); self-host $0 (Apache 2.0)

### Raw benchmarks found

Agent / tool use: Function-calling support for autonomous agents. No SWE-bench or Terminal-bench data found for this specific variant.

Reasoning / knowledge: GPQA Diamond 78.8%. MMLU Pro 77.2%. HLE 5.2% (low on hardest reasoning tasks). Solid reasoning for a 12B dense model.

Coding: LiveCodeBench 72%. Decent coding performance for its size class.

Multimodal: Native text, image, and audio input through encoder-free unified architecture. No separate encoders needed. Strong multimodal capability for its size.

Long context: 256K context window. Good for a local model.

### Normalized scores (1–100)

- **Tool use: 40/100.** Function-calling support documented. No agentic coding benchmarks (SWE-bench, Terminal-bench) found for this variant. Limited evidence of advanced tool use.
- **Reasoning: 55/100.** GPQA Diamond 78.8% and MMLU Pro 77.2% are solid for a 12B model. HLE 5.2% shows limits on frontier reasoning. Good but not frontier-class.
- **Context window: 70/100.** 256K context is good. Not best-in-class (1M+ models exist) but strong for a local model.
- **Multimodal: 70/100.** Native text, image, and audio input through unified architecture. Encoder-free design is innovative. Strong multimodal capability for a 12B model.
- **Coding: 50/100.** LiveCodeBench 72% is decent. No SWE-bench data. Coding is not the primary strength of this model.
- **Cost efficiency: 90/100.** ~$0.10/$0.30 per 1M is very cheap. Self-host free with Apache 2.0. Runs on laptop hardware (9GB VRAM Q4). Excellent value.
- **Overall Score: 57/100.** Mean of Tool (40) + Reasoning (55) + Context (70) + Multimodal (70) + Coding (50) = 285/5 = 57. Solid mid-size multimodal model with excellent cost efficiency and local deployment capability, but limited by 12B parameter count on frontier benchmarks.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
