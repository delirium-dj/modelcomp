# Nemotron 3.5 Super VL — findings by Qwen 3.8 Flash

- Source: NVIDIA (`nvidia/nemotron-3.5-super-vl`), cross-checked against Artificial Analysis, H Company (Holotron) independent evals, OpenRouter, eigent
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open-weight 120B-A12B hybrid Mamba-Transformer MoE vision-language model (Oct 2026) for always-on enterprise agents; one checkpoint unifies reasoning, tool use, and text/image/document/video understanding. Current leading US open-weight model on the AA Intelligence Index (26).
- **Provider / access:** Open weights (base, post-trained, NVFP4 checkpoints) on Hugging Face / ModelScope; hosted APIs via NVIDIA NIM (`build.nvidia.com` free tier), OpenRouter (`nvidia/nemotron-3.5-super-vl`, Chat Completions), Together AI, Baseten, fal.
- **Release / knowledge:** 2026-10-15 release; knowledge cutoff not announced.
- **IDs:** `nvidia/nemotron-3.5-super-vl` (OpenRouter/NIM); NVFP4 checkpoint `NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`.
- **Context window:** 1,048,576 tokens total (OpenRouter model page; hybrid Mamba-attention backbone for long-context). Max output not separately published — unverified.
- **Modalities:** text + image + document + video in; text out; reasoning yes; tool calls yes (GUI + MCP/API); JSON mode yes (response_format accepted on OpenRouter).
- **Pricing (as of 2026-10-17):** open weights (self-host free); NVIDIA hosted free tier on build.nvidia.com; paid per-token rates on OpenRouter/NIM not confirmed in this pass. NVFP4 4-bit path runs on a single H200 / DGX Spark.
- **Architecture:** 120B total / 12B active MoE, hybrid Mamba-2 + attention, distilled from Nemotron 3 Ultra; ~26T pretraining tokens, ~3.8M post-training samples + RL; OpenMDW-style permissive open-weight license.

### Raw benchmarks found

> Vendor numbers (NVIDIA dev blog) triangulated with H Company's independent
> OSWorld/AutomationBench runs and Artificial Analysis. VentureBeat/eigent frame the
> "beat frontier" claims as post-training-dependent, not out-of-the-box.

Agent / tool use:

- Hermes Bench: **63.44%** (NVIDIA; > Nemotron 3 Ultra 56.33%)
- LangChain behavioral Evals: **87.05%** (NVIDIA; > Nemotron 3 Ultra 84.3%)
- OSWorld (computer use, base checkpoint): **51.9%** (H Company, mean of 3 runs); post-trained Holotron4 Super reaches 77.0
- OSWorld 2.1 (base, partial credit): **28.4%** (H Company); AutomationBench (base): **23.0%** (H Company)
- Throughput: **>600 TPS** on AA agentic tasks (Baseten endpoint); up to 5× other open models in class on single GPU (NVIDIA)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26** (AA model page; leading US open-weight). Note: one AA social post cites 21.4 for a different effort/reasoning config — the AA model page value 26 is used here.
- Indic benchmarks (MILU 1.5, Indic GPQA/AIME/FrontierMath/MBPP): highest of the compared set vs Sarvam-105B and Gemma-4-31B-It (NVIDIA; absolute values chart-only)

Coding:

- SWE-bench / Terminal-Bench: **outperforms Nemotron 3 Super across multiple setups** (NVIDIA; no absolute public score found)
- CursorBench/PinchBench: not reported for Super VL (those are the Bolt 74B edge models)

Long context / vision:

- CharXiv (chart reasoning): **80.8%**, rising to **84%** with Python code interpretation (NVIDIA)
- OCRBench v2: **among the top open models on the leaderboard** (NVIDIA; exact score not published)

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong for an open model — Hermes 63.4, LangChain 87, native GUI+MCP tool calling — but base OSWorld 51.9 (H Company) keeps it below the frontier agentics tier; the 77.0 OSWorld figure requires H Company's post-training, not the shipped default.
- **Reasoning: 75/100.** AA Index 26 leads US open-weights and it's distilled from Nemotron 3 Ultra, yet 26 sits well below the ~57 closed-frontier band; capped by that absolute gap.
- **Context window: 90/100.** Full 1,048,576-token window with a hybrid Mamba backbone and cross-turn context reuse (prefix + Mamba-state caching) — best-in-class long-context design for agentic loops; max-output figure unverified is the only gap.
- **Multimodal: 88/100.** Text/image/document/video in one checkpoint is the model's headline strength — CharXiv 80.8 (84 with code) and top-open OCJBench v2 placement — but no image/audio output.
- **Coding: 72/100.** Beats Nemotron 3 Super on SWE-bench/Terminal-Bench and wins Indic MBPP, but NVIDIA published no absolute coding scores, so the ceiling stays provisional pending third-party reproduction.
- **Cost efficiency: 90/100.** Open weights (permissive license), NVFP4 4-bit on a single H200/DGX Spark, 5× agentic throughput in class, and a free NVIDIA hosted tier make it one of the cheapest capable VL models to run.
- **Overall Score: 80.6/100.** Half-up mean of the five quality dims (78+75+90+88+72)/5 = 80.6. Best fit: self-hosted or NVIDIA-hosted multimodal document/video agents and tool-calling workflows where a single open checkpoint replaces a text+vision pipeline on your own infrastructure.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — NVIDIA developer blog, Artificial Analysis model page/article, H Company (Holotron) Lab Notes independent evals, eigent explainer, OpenRouter; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
