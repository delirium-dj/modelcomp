# Nemotron 3.5 Lightning Free — findings by Fledge Alpha

- Source: NVIDIA (`nemotron-3.5-lightning-free`, nvidia/nemotron-3.5-lightning-30b-a3b free tier)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** OpenCode Zen free tier of NVIDIA's Nemotron 3.5 Lightning — a 30B-total/3B-active hybrid Mamba-Transformer MoE for high-volume, low-latency agent execution.
- **Provider / access:** OpenCode Zen (`opencode/nemotron-3.5-lightning-free`), NVIDIA NIM `nvidia/nemotron-3.5-lightning-30b-a3b`, Hugging Face BF16/NVFP4, Ollama; vLLM/SGLang/TRT-LLM.
- **Release / knowledge:** August 11, 2026; knowledge cutoff not published.
- **IDs:** `nvidia/nemotron-3.5-lightning-30b-a3b`, Zen `opencode/nemotron-3.5-lightning-free`.
- **Context window:** 262,144 native (per llm-stats/meta).
- **Modalities:** text in/out only; tool calling, structured outputs, thinking mode.
- **Pricing (as of 2026-10-05):** free on Zen/NVIDIA trial; paid route $0.08 in / $0.20 out per 1M.
- **Architecture:** hybrid Mamba-Transformer MoE, 30B total / 3B active, NVFP4 + BF16 checkpoints, MTP speculative decoding.

### Raw benchmarks found

Agent / tool use:

- PinchBench: **86% accuracy**, completes 10,000 tasks ~30–35% faster than Qwen3.6-35B (NVIDIA dev blog)
- Terminal-Bench 2.1, SWE-bench Verified, SWE-bench Multilingual: verified recipe set exists (NeMo Gym) but no public number in the excerpt read
- Tau3: verified recipe exists; no public number

Reasoning / knowledge:

- GPQA Diamond / HLE / CritPt / GDPval: verified recipe set exists; no public numbers published in NVIDIA blog excerpts
- AA Intelligence Index: Pareto-frontier class for small open models (vendor claim)

Coding:

- SWE-bench Verified / Multilingual / SciCode: reproducible recipes published (NeMo Gym); no public table values shown
- AI coding tasks: vendor claim of strong SWE-bench style efficiency (~58% cost cut examples)

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 72/100.** PinchBench 86 with 30% faster completion is verified; GDPval/Tau3 rows pending.
- **Reasoning: 65/100.** AA Pareto claim for small open models; no GPQA/HLE public rows yet.
- **Context window: 88/100.** 262K native spec.
- **Multimodal: 15/100.** Text-only by design.
- **Coding: 62/100.** SWE-bench recipes published but no verified number; class-comparable to other small 30B open models.
- **Cost efficiency: 96/100.** Free on Zen/NVIDIA trial; paid route at $0.08/$0.20 is very cheap.
- **Overall Score: 60/100.** Mean of five non-cost dims (72+65+88+15+62)/5 = 60.4 → 60; best fit: free-tier always-on execution agent; scores cap once public benchmark tables land.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (NVIDIA dev blog Aug 11 2026, NeMo GitHub cookbook, cobusgreyling perf doc, llm-stats, Ollama); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
