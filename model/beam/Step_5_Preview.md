# Beam — findings by Step 5 Preview

- Source: Reflection AI / Beam 1.0 (`reflection/Beam-1.0-501B-A23B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 (Beam 501B-A23B)
- **Short description:** Reflection AI's first open-weight model — a 501B-total / 23B-active sparse MoE (256 experts, 1M context, Apache 2.0, day-one BF16/FP8/NVFP4) with SWE-bench Verified 81.6%, AIME 2026 97.7% and Terminal-Bench 2.1 80.1%, served free on Zen as Beam Free; text-only and token-efficient (~3x fewer reasoning tokens per Reflection).
- **Provider / access:** Open weights on Hugging Face (`reflection/Beam-1.0-501B-A23B`, Apache 2.0); free OpenCode Zen tier (Beam Free); hosted routes $0.25–$1.30 in / $1.00–$4.30 out (folder meta); vLLM/SGLang serving.
- **Release / knowledge:** debut 2026-10-05/06 (llm-releases, aimodelreport); open-weight drop with FP8/NVFP4 variants 2026-10-17 (Benchgen, digitalapplied, saltindex); knowledge cutoff 2026-06-30 (Benchgen).
- **IDs:** `reflection/Beam-1.0-501B-A23B` (HF), `opencode/beam-free` (Zen free route, folder meta).
- **Context window:** 1,048,576 (1M) pretrained; API beta requests capped at 262,144 (llm-releases); 131,072 max output (folder meta).
- **Modalities:** text in/out only — no vision/multimodal (Benchgen "Where it lags"); reasoning; tool calling (MCP).
- **Pricing (as of 2026-10-21):** open weights free to self-host (Apache 2.0); free Zen tier; paid hosted $0.25–$1.30 in / $1.00–$4.30 out (folder meta).
- **Architecture:** sparse MoE, 501.3B total / 23.4B active, 256 experts, 52 layers (3 dense + 49 MoE), gated GQA + sliding-window attention; trained on ~23.8T tokens; Reflection emphasizes token-efficient reasoning (~3x fewer reasoning tokens than comparable open models, vendor claim).

### Raw benchmarks found

Reflection AI Beam 1.0 model card (via BenchLM and Benchgen, BF16 numerics, temp=0.7/top_p=0.99) + Artificial Analysis figures via BenchLM:

Agent / tool use:

- MCP Atlas: **80.8%** (Reflection card via BenchLM)
- DeepSearchQA: **80.5%** (Reflection card via BenchLM)
- Terminal-Bench 2.1: **80.1%** (Reflection card via BenchLM)
- BrowseComp: **76.8%** (Reflection card via BenchLM)
- AA AutomationBench: **48.5%** (Artificial Analysis via BenchLM) / **39.3%** public split (Reflection card via Benchgen)
- τ³-bench (banking): **36.1%** (Reflection card via BenchLM) — mid
- GDPval-AA: **1,177 Elo / 33.9%** normalized (Artificial Analysis via BenchLM); AA Briefcase: **976** (AA via BenchLM)
- AA Terminal-Bench 4.0: **3.0%** (Artificial Analysis via BenchLM) — collapses on the newest harness
- GDP.pdf: **11.6%** (Artificial Analysis via BenchLM)
- Tau2-Bench / Claw-Eval / OSWorld: no verified public score found

Reasoning / knowledge:

- AIME 2026: **97.7%** (Reflection card via BenchLM/Benchgen)
- GPQA Diamond: **90.6%** (Reflection card via BenchLM); aimodelreport carries 90.5%
- HLE (no tools): **36.0%** (Reflection card); **51.1% with tools** (Reflection card); AA-HLE **34.7%** (Artificial Analysis via BenchLM)
- LiveCodeBench: **88.3%** (Reflection card, carried in Benchgen's footnote)
- Artificial Analysis Intelligence Index: **30.3%** (Artificial Analysis via BenchLM — mid band)
- AA-LCR (long-context reasoning): **78.2%** (Reflection card via BenchLM)
- CritPt: **16.3%** (Reflection card via BenchLM)
- AA-Omniscience: Accuracy **33.1%**, Hallucination Rate **47.2%** (Artificial Analysis via BenchLM) — low hallucination for the class
- IFBench: **79.6%** (Reflection card via BenchLM)
- MMLU-Pro: no verified public score found

Coding:

- SWE-bench Verified: **81.6%** (Reflection card via BenchLM — matches the folder's claim; aimodelreport carries an earlier 80.9)
- SWE-bench Pro: **66.1%** (Reflection card via BenchLM); SWE Multilingual: **78.3%**
- Terminal-Bench 2.1: **80.1%** (listed above)
- DeepSWE: **43.3%** (Reflection card via BenchLM; aimodelreport carries 44.4%)
- SciCode: **49.2%** (Reflection card) / **48.5%** (Artificial Analysis via BenchLM)
- SWE-Atlas Codebase QnA: **31.8%** (Reflection card via BenchLM)
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **78.2%** and LongBench v2 **67.5%** (Reflection card / AA via BenchLM) on the full 1M pretrained window; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 80.1%, MCP Atlas 80.8%, DeepSearchQA 80.5% and BrowseComp 76.8% are a genuinely strong agentic suite; capped by AA AutomationBench 48.5%, τ³-bench 36.1%, GDPval 1,177 Elo (33.9%) and AA Terminal-Bench 4.0 collapsing to 3.0%.
- **Reasoning: 88/100.** AIME 2026 97.7%, GPQA Diamond 90.6% and LiveCodeBench 88.3% are frontier-adjacent, HLE 36.0% (51.1% w/tools) is solid-mid, and the 47.2% hallucination rate is low for the class; capped by AA Intelligence Index 30.3% (mid band), CritPt 16.3% and no MMLU-Pro number.
- **Context window: 95/100.** 1,048,576 pretrained window lands in the ≥1M tier; AA-LCR 78.2% is good but below the ≥98% retrieval-at-512K evidence needed for 100, and the hosted API beta caps requests at 262,144.
- **Multimodal: 15/100.** Text-only model — text in, text out (Benchgen's explicit "where it lags"); the text-only tier (10–20) applies.
- **Coding: 84/100.** SWE-bench Verified 81.6%, Terminal-Bench 2.1 80.1%, SWE-bench Pro 66.1% and SWE Multilingual 78.3% are strong agentic-coding evidence with token efficiency as the multiplier; capped by DeepSWE 43.3%, SciCode ~49%, SWE-Atlas QnA 31.8% and AA TB4.0 3.0%.
- **Cost efficiency: 98/100.** Apache 2.0 open weights (free self-host, day-one FP8/NVFP4) plus a free Zen tier put the floor at $0; the ~3x reasoning-token efficiency claim, if it holds, compounds the free-weights advantage.
- **Overall Score: 73/100.** Mean of (82 + 88 + 95 + 15 + 84) / 5 = 72.8 → 73. Best fit: the strongest free/Apache-2.0 1M-context agentic coding backbone you can self-host or run free on Zen — text-only, so vision workloads route elsewhere.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Reflection AI model card figures via BenchLM and Benchgen, Artificial Analysis figures via BenchLM, llm-releases, aimodelreport); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
