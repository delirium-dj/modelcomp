# Laguna XS 2.1 — findings by Mimo v2.6 Flash

- Source: Poolside AI/Laguna XS 2.1 (`poolside/Laguna-XS-2.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's laptop-class open-weights coding agent — 33B total / **3B active** MoE (same architecture as Laguna XS.2) with gains on SWE-bench Multilingual (+5.4) and terminal-style tasks. Not the larger Laguna S 2.1 and not `laguna-s-2.1`.
- **Provider / access:** Hugging Face `poolside/Laguna-XS-2.1` (+ `-FP8` quant), OpenRouter `poolside/laguna-xs-2-1` (free route exists), Ollama/llama.cpp local serving, vLLM/SGLang/TRT-LLM pipelines, NVIDIA NIM.
- **Release / knowledge:** 2026-07-02 (Poolside release blog); knowledge cutoff not published.
- **IDs:** `poolside/Laguna-XS-2.1` (HF), `poolside/laguna-xs-2-1` (OpenRouter). **No OpenCode Zen Free ID found** — but an OpenRouter free route and near-zero hosted pricing effectively give free access.
- **Context window:** 262,144 tokens (256K in benchmark settings, HF model card).
- **Modalities:** text in / text out only — no image, audio or video input documented; native function/tool calling plus optional interleaved reasoning between tool calls; thinking mode enabled in the official evals. Reasoning/effort control through the system message is documented for sibling Inkling-style harnesses, not here — only "optional interleaved reasoning" is claimed.
- **Pricing (as of 2026-09-25):** OpenRouter **$0.06 in / $0.12 out** per 1M, cached input $0.03, plus a free OpenRouter route; self-host free under OpenMDW-1.1.
- **Architecture:** OpenMDW-1.1 (Linux Foundation/NVIDIA-permissive) MoE, 33B total / 3B active, 40 layers, 256 experts + 1 shared, mixed sliding-window/global attention, FP8 KV cache.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Everything below is **Poolside's own Harbor-framework run** (agent harness, ≤500 steps, temp 1.0, top_p 1, 256K ctx, sandboxed) — no independent lab has re-run this model.

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** mean pass@1 over 5 attempts (Poolside, 48 GB RAM / 32 CPUs) — on the same table GPT-5.4 Nano 46.3, MAI-Code-1-Flash 54.8, Qwen3.6-35B-A3B 51.5
- Tau2/Tau3-Bench, Toolathon, MCP-Atlas/MCP-Mark, GDPval, Claw-Eval: **no verified public score found** — no native function-calling score exists either
- Vals AI / Artificial Analysis / BenchLM agent rows: absent (BenchLM only mirrors the four vendor numbers)

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR, CritPt, AA Intelligence Index, BenchLM overall: **no verified public score found** — Poolside published no reasoning benchmark at all. Model card confirms native reasoning support only.
- LMArena / Chatbot Arena: no verified Elo found

Coding:

- SWE-bench Verified: **70.9%** mean pass@1 over 4 attempts (Poolside; HF `.eval_results/swe-bench_verified.yaml` = 70.9). ⚠️ Run-to-run ±0.85 and a **6.51% reward-hack flag rate** on the BF16 runs per Poolside's own post-hoc judge.
- SWE-bench Multilingual: **63.1%** (±1.42, 7.25% RH flag) — up 5.4 from XS.2's 57.7
- SWE-bench Pro (public dataset): **47.6%** (±0.96, 2.40% RH flag) over 2 attempts
- FP8 quant variant: 70.75 / 64.92 / 48.02 / 40.22 on the same four — quantization is neutral-to-positive
- LiveCodeBench, SciCode, Aider Polyglot, DeepSWE, Vibe Code Bench, TB2.1: **no verified public score found**
- Independent corroboration: none — the 70.9/63.1/47.6 figures are vendor-reported on benchmarks Poolside chose; third-party pages (BenchLM, NVIDIA NIM docs, press) only restate them

Long context:

- 262,144-token window used for the official coding-agent runs; MRCR / RULER / GraphWalks: **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 at 37.5% is the only measured agent score, and it trails Qwen3.6-35B-A3B (51.5) and GPT-5.4 Nano (46.3) on Poolside's own table; there is no Tau, MCP, Toolathon, GDPval or Claw number at all, so the harness that earned "agentic coding" marketing is barely instrumented in public. Mid-60s rather than higher, with the whole score resting on one vendor run.
- **Reasoning: 55/100.** Native interleaved reasoning is documented but **zero** standalone reasoning benchmarks (GPQA, HLE, LCR, CritPt, AA Index, BenchLM) exist for this model — the score is a floor from architecture + agent results, not evidence. Methodology's "no HLE/GPQA → conservative" path keeps it low.
- **Context window: 72/100.** 262,144 verified tokens lands in the 200K–500K tier (65–84), upper half of it since it is 31% above the 200K = 70 anchor; no retrieval-accuracy measurement (MRCR/RULER) exists to justify more, and the model was only exercised at 256K.
- **Multimodal: 15/100.** Text in/out only — no image/audio/video input, so the text-only floor (10–20) applies.
- **Coding: 70/100.** SWE-bench Verified 70.9 and Multilingual 63.1 are genuinely strong for a 3B-active local model and beat Laguna XS.2 — but they are **vendor self-reports** with a 6.5% reward-hack flag rate, no independent re-run exists, and the model publishes nothing on LiveCodeBench, SciCode, DeepSWE or TB2.1. SWE-bench Pro 47.6 is solid mid-band. Net: high-60s/low-70s — real, but one vendor's word.
- **Cost efficiency: 97/100.** $0.06/$0.12 with a free OpenRouter route sits right at the ~$0.10 → 97–99 anchor, and OpenMDW-1.1 weights run free on a laptop; only first-party premium pricing (none exists) would push it higher.
- **Overall Score: 55/100.** (62 + 55 + 72 + 15 + 70) / 5 = 54.8 → 55 — best-fit as a free/cheap local coding agent for repos where you can validate it yourself; do not treat 70.9 as frontier (Claude Haiku 4.5 is 73.3 on the same vendor table), and pick a model with independent reasoning numbers when hard reasoning or non-code work matters.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (HF `poolside/Laguna-XS-2.1` card and `.eval_results` files, Poolside release blog, Poolside models page methodology notes, NVIDIA NIM reference, FP8 quant card, BenchLM mirror, press caveats on vendor-only numbers); scores are normalized 1–100 interpretations, not official vendor scores. All four coding numbers are vendor-reported and are capped accordingly.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
