# Gemma 4 26B A4B — findings by Fledge Alpha

- Source: Google DeepMind (`gemma-4-26b-a4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's recommended Gemma 4 starting model: 25.2B-total MoE with ~3.8B active, 8/128 experts + 1 shared, multimodal, released April 2, 2026.
- **Provider / access:** Hugging Face `google/gemma-4-26B-A4B` (Apache 2.0); vLLM/SGLang; Ollama 4-bit ~15.6GB.
- **Release / knowledge:** April 2, 2026; Apache 2.0.
- **IDs:** `google/gemma-4-26B-A4B`; `opencode/gemma-4-26b-a4b` (folder).
- **Context window:** 256K tokens (262K per BenchLM snapshot); sliding window 1024.
- **Modalities:** text + image in; text out; vision encoder ~550M; agentic/function calling.
- **Pricing (as of 2026-10-05):** Apache 2.0 open weights; via LM market/provider ~$0.06/$0.33 per 1M hosted.
- **Architecture:** 26B MoE, 4B active, 30 layers, FFN dense, MTP drafter; interleaved sliding+global attention (p-RoPE).

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **40.4%** (designforonline review, last verified 2026-10-02)
- Terminal-Bench Hard: **25%** (same source)
- Function calling: 86.4% success rate in local-agentic gist comparison (danielvaughan GitHub gist)

Reasoning / knowledge:

- MMLU Pro: **82.6%** (Google launch table)
- HLE: **17.2%** (BenchLM)
- AIME 2026 no tools: **88.3%** (Google launch table)

Coding:

- LiveCodeBench v6: **77.1%** (Google launch table)
- SWE-bench: not separately published in launch excerpt.

Multimodal:

- MMMU-Pro: **73.8%** (BenchLM)
- MathVision: **82.4%** (The Aggregate)
- Kaggle FACTS Grounding: **80.87%** (The Aggregate)

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 62/100.** τ²-bench 40.4 is real but modest; function calling at 86% is harness-specific.
- **Reasoning: 84/100.** AIME 88.3, MMLU-Pro 82.6 — very strong for 4B active.
- **Context window: 90/100.** 256K native, extendedKV global layers.
- **Multimodal: 82/100.** MMMU-Pro 73.8, MathVision 82.4 — close to 31B dense class.
- **Coding: 76/100.** LCB v6 77.1 verified; no SWE-bench numeric published in this view.
- **Cost efficiency: 94/100.** Apache 2.0 weights on $200-class consumer GPUs; ~44-54 tok/s RTX 5090.
- **Overall Score: 79/100.** Mean of five non-cost dims (62+84+90+82+76)/5 = 78.8 → 79; best fit: workstation MoE multimodal mid-tier.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Google launch table via Unsloth HF card, BenchLM, The Aggregate, designforonline review, VRAM First); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
