# Laguna XS 2.1 — findings by MiniMax M3.1 Flash

- Source: Poolside (Laguna XS 2.1), `poolside/Laguna-XS-2.1`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's June 2026 open-weight (OpenMDW-1.1) small MoE — **33B total / 3B active**, 262K context, SWE-bench Verified 70.9% and SWE-bench Pro 47.6% from a 33B model, small enough to run on a **36 GB Mac**, with a free hosted route and $0.06/$0.12 per 1M elsewhere.
- **Provider / access:** Hugging Face `poolside/Laguna-XS-2.1` (OpenMDW-1.1; FP8/NVFP4/INT4 and GGUF quants, Ollama tag `laguna-xs-2.1`), OpenRouter `poolside/laguna-xs-2.1` (**$0.06/M in, $0.12/M out, $0.03 cached**) plus a **free** `poolside/laguna-xs-2.1:free` route, and free tiers on models.dev providers `poolside` and `nvidia` (16,384 output cap). **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-06-20** (HF repo created; GGUF 2026-06-29) vs **2026-07-02** (OpenRouter listing, models.dev release_date) — conflict noted. Knowledge cutoff not published.
- **IDs:** `poolside/Laguna-XS-2.1` (HF), `poolside/laguna-xs-2.1` (OpenRouter, models.dev).
- **Context window:** **262,144** tokens.
- **Modalities:** text in / text out only; native interleaved reasoning (`enable_thinking`).
- **Pricing (as of 2026-10-20):** **$0.06/M in, $0.12/M out, $0.03/M cached** (OpenRouter), plus a **free** tier; self-host $0 (OpenMDW-1.1).
- **Architecture:** MoE, **33B total / 3B active** (256 experts + 1 shared, 40 layers = 10 global attention + 30 sliding-window-512, sigmoid gating, FP8 KV cache, Muon optimizer).

### Raw benchmarks found

> Poolside's model card (Harbor framework, thinking on, 256K context, max 500 steps) is the
> only numeric source; Artificial Analysis has no page and BenchLM carries five rows with
> no overall score.

Coding:

- SWE-bench Verified: **70.9%** (mean pass@1 over 4 attempts) · SWE-bench Pro (public dataset): **47.6%** (mean pass@1 over 2 attempts) · SWE-bench Multilingual: **63.1%**
- Terminal-Bench 2.0: **37.5%** (mean pass@1 over 5 attempts, 48 GB RAM / 32 CPU) — the XS card measures **TB 2.0**, while the larger S 2.1 model is measured on TB 2.1, so the two are not directly comparable
- LiveCodeBench / DeepSWE / SciCode: no verified public score found

Agent / tool use:

- Toolathlon / Tau2 / Tau3 / GDPval-AA / OSWorld / AutomationBench / MCP-Atlas: **no verified public score found** for Laguna XS 2.1

Reasoning / knowledge:

- GPQA / HLE / AIME / MMLU-Pro / FrontierMath / LCR: **no verified public score found**
- Artificial Analysis: **no page** (404) · BenchLM: 5 source rows, **unranked** (no overall score computed)

Long context:

- No MRCR / RULER measurement published; 262,144 comes from the model card and registry.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench 2.0 37.5% is the only agentic row, with no τ², τ³, GDPval or OSWorld number at all.
- **Reasoning: 42/100.** No GPQA, HLE, AIME or MMLU figure was ever published for this model — the dimension is scored as unmeasured with a penalty.
- **Context window: 68/100.** 262,144 tokens is the 200K–500K tier, with no published retrieval measurement.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 64/100.** SWE-bench Verified 70.9% and SWE-bench Multilingual 63.1% are mid-band, SWE-bench Pro 47.6% and Terminal-Bench 2.0 37.5% are the soft spots, and there is no LiveCodeBench or DeepSWE row.
- **Cost efficiency: 98/100.** $0.06/M in and $0.12/M out, a free hosted route, and OpenMDW-1.1 weights that fit a 36 GB Mac.
- **Overall Score: 46/100.** Mean of the five quality dims = (40 + 42 + 68 + 15 + 64) / 5 = 45.8 → **46**. Best fit: local agentic coding on a single workstation — the XS tier trades agentic depth for a footprint most Macs can hold.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Poolside Laguna XS 2.1 Hugging Face model card and GGUF listings, Artificial Analysis absence check, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Laguna_S_2.1.md`, using the same headings.
