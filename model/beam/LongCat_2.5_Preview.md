# Beam — findings by LongCat 2.5 Preview

- Source: Reflection/Beam-1.0-501B-A23B
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam
- **Short description:** Reflection's first open-weight model (October 2026), a 501B total / 23B active MoE built for coding, reasoning, and agentic workloads. Apache 2.0 license. Text-only.
- **Provider / access:** Open weights on Hugging Face `reflection/Beam-1.0-501B-A23B`; API via Baseten `baseten/reflection/Beam-1.0`, Together AI `reflection/Beam`, Nebius `nebius/reflection/beam`, Vercel AI Gateway `reflection/beam`. Compatible with Claude Code, OpenCode, vLLM, SGLang, transformers. No Zen Free ID.
- **Release / knowledge:** Announced 2026-10-05; weights released 2026-10-16; knowledge cutoff June 30, 2026.
- **IDs:** `reflection/Beam-1.0-501B-A23B` (no Free ID on Zen; paid + free tier on Vercel)
- **Context window:** 1,048,576 tokens (1M); max output 131,072 tokens.
- **Modalities:** Text only (no image/audio/video input); tool calls; structured outputs; reasoning (6 effort levels: low=8, medium=32, high=64, xhigh=128, max=256, max=512 tokens).
- **Pricing (as of 2026-10-18):** $0.25/MTok input, $1.00/MTok output (Nebius, cheapest); $1.30/$4.30 (Baseten); $0.40/$1.20 (Together AI); free tier on Vercel AI Gateway. Open weights can be self-hosted.
- **Architecture:** 501B total / 23B active MoE; 52 layers (3 dense + 49 MoE); 256 experts (8 routed per token); Gated GQA + Sliding Window Attention (43 sliding + 9 global layers); modified Harmony chat format; BF16/FP8/NVFP4 checkpoints. Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **80.8%** (BF16) / **81.5%** (FP8)
- Tau3 Banking: **36.1%** (BF16)
- BrowseComp (w/ ctx mgmt): **76.8%** (BF16)
- DeepSearchQA (w/ ctx mgmt): **80.5%** (BF16)
- AutomationBench (public): **39.3%** (BF16)

Reasoning / knowledge:

- GPQA Diamond: **90.6%** (BF16)
- AIME 2026: **97.7%** (BF16)
- HLE (no tools): **36.0%** (BF16)
- HLE (with tools): **51.1%** (BF16)
- SciCode: **49.2%** (BF16)
- CritPt AA: **16.3%** (BF16)
- IFBench: **79.6%** (BF16)
- AA Omniscience: **10.8** (BF16)

Coding:

- SWE-bench Verified: **81.6%** (BF16) / **80.2%** (FP8) / **80.7%** (NVFP4)
- SWE-bench Pro v1: **66.1%** (BF16)
- SWE-bench Pro v2-Hard: **76.5%** (BF16) / **78.4%** (FP8)
- Terminal Bench v2.1: **80.1%** (BF16)
- DeepSWE v1.1: **43.3%** (BF16)
- SWE-bench Multilingual: **78.3%** (BF16)
- SWE Atlas Codebase QnA: **31.8%** (BF16)
- LiveCodeBench: **88.3%** (BF16)

Long context:

- AA-LCR: **78.2%** (BF16)
- LongBench v2: **67.5%** (BF16)
- 1M token context window with hybrid attention (36 GiB KV cache at 1M vs 208 GiB naive)

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 80.8% is strong; BrowseComp 76.8% and DeepSearchQA 80.5% are solid. Capped by Tau3 Banking 36.1% and AutomationBench 39.3%.
- **Reasoning: 85/100.** GPQA Diamond 90.6% and AIME 97.7% are excellent; HLE 36.0% is moderate. Strong reasoning efficiency (3-4x fewer tokens than comparable models).
- **Context window: 95/100.** 1M tokens with efficient hybrid attention (36 GiB KV cache at full context). Matches frontier models.
- **Multimodal: 15/100.** Text-only model; no image/audio/video input. Scores minimum per methodology.
- **Coding: 82/100.** SWE-bench Verified 81.6%, Terminal Bench 80.1%, LiveCodeBench 88.3% — all strong. Capped by DeepSWE 43.3% and SWE Atlas 31.8%.
- **Cost efficiency: 92/100.** $0.25/$1.00 per MTok (Nebius) is exceptionally low for a 501B model; open weights enable self-hosting; 3-4x reasoning compute efficiency. Outstanding value.
- **Overall Score: 71/100.** Mean of (78+85+95+15+82)/5 = 71. A promising open-weights model with strong coding and reasoning, excellent cost efficiency, and Apache 2.0 license. Best for agentic coding, long-horizon tasks, and budget-conscious deployments. Text-only is a significant limitation vs multimodal competitors. All benchmarks are vendor-reported; independent verification pending.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (Reflection official blog + model card, Hugging Face, Artificial Analysis, TechCrunch, Together AI, Nebius, Vercel AI Gateway, LiteLLM, OrcaRouter, TL Dev Tech); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
