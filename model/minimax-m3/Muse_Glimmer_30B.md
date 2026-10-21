# MiniMax M3 — findings by Muse Glimmer 30B

- Source: MiniMax (`minimax-ai/minimax-m3`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's June 2026 open-weight flagship MoE with 1M native context via MiniMax Sparse Attention, native multimodal text/image/video training from step zero, and frontier-level coding/agentic performance at open-weight pricing.
- **Provider / access:** MiniMax API `minimax-ai/minimax-m3`; OpenRouter, Fireworks, DeepInfra, Together, Nebius, Novita, Azure AI Foundry, Volcengine Ark, plus Token Plan. Weights on Hugging Face under MiniMax Community License.
- **Release / knowledge:** 2026-06-01 release; knowledge cutoff not published.
- **IDs:** `minimax-ai/minimax-m3` / `minimax-m3` / `MiniMaxAI/MiniMax-M3`
- **Context window:** 1,048,576 tokens total / 512K output on most providers (meta.json: 1,048,576 / 512K out)
- **Modalities:** Text, image, video in; text out; reasoning enabled via `thinking` parameter, tool calls / JSON mode supported
- **Pricing (as of 2026-10-20):** Paid $0.30/$1.20 per 1M input/output; cache discount 80% per Artificial Analysis. No Free ID on Zen.
- **Architecture:** ~428B total parameters / ~23B active MoE; MiniMax Sparse Attention; open weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- BrowseComp: **83.5** (minimax.io/models/text/m3, surpasses Opus 4.7 79.3)
- Terminal-Bench 2.1: **66.0%** (minimax.io/blog/minimax-m3)
- MCP Atlas: **74.2** (minimax.io/blog/minimax-m3)
- Claw-Eval overall: **74.5** (Hugging Face .eval_results/minimax-m3.yaml, general task)
- Apex-Agents: **27.7** (Hugging Face .eval_results/minimax-m3.yaml)

Reasoning / knowledge:

- MMMU-Pro: **78.1** (Hugging Face .eval_results/minimax-m3.yaml, mapped to standard 10-options)
- Video-MME w/ sub: **85.4** (Hugging Face .eval_results/minimax-m3.yaml, mapped to Video-MME-v2)
- Artificial Analysis Intelligence Index: **29** (#23/121 open-weight, artificialanalysis.ai)
- GPQA Diamond / HLE: no verified public score found

Coding:

- SWE-bench Verified: **80.5** (Hugging Face .eval_results/minimax-m3.yaml, SWE-bench/SWE-bench_Verified)
- SWE-bench Pro: **59.0** (Hugging Face .eval_results/minimax-m3.yaml, ScaleAI/SWE-bench_Pro)
- SWE-fficiency: **34.8** (minimax.io/blog/minimax-m3)
- KernelBench Hard: **28.8** (minimax.io/blog/minimax-m3)

Long context:

- No verified public long-context retrieval score found; 1M context supported via MSA. Context Arena not verified.

Multimodal:

- Native text/image/video/PDF in; MMMU-Pro 78.1 and Video-MME 85.4 above.

### Normalized scores (1–100)

- **Tool use: 75/100.** BrowseComp 83.5 and MCP Atlas 74.2 show strong autonomous browsing/tool use; Terminal-Bench 66.0 and Claw-Eval 74.5 keep it below frontier TB ~88+ tier.
- **Reasoning: 72/100.** MMMU-Pro 78.1 and Video-MME 85.4 indicate solid multimodal reasoning; Artificial Analysis Intelligence Index 29 is above median open-weight but GPQA/HLE not verified, capping score.
- **Context window: 95/100.** 1,048,576 total with 512K output and MSA; verified 1M native support, elite long-context class.
- **Multimodal: 85/100.** Native image/video input from step zero; MMMU-Pro 78.1 and Video-MME 85.4 verified. No audio output.
- **Coding: 78/100.** SWE-bench Verified 80.5 and SWE-Pro 59.0 are strong open-weight; Terminal-Bench 66.0 supports agentic coding, but SWE-fficiency/KernelBench Hard show headroom vs frontier.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M with 80% cache discount and 12+ providers; best-in-class capability-per-dollar for 1M multimodal MoE.
- **Overall Score: 81/100.** Mean of the five quality dims (75+72+95+85+78)/5 = 81.0. Best-value open multimodal workhorse with 1M context and strong SWE performance at commodity pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research via webfetch; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
