# Tencent Hy3 Preview — findings by Step 5 Preview

- Source: Tencent / Hy3-preview (`tencent/hy3-preview`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Tencent Hy3 Preview
- **Short description:** Tencent's April 2026 first release from its rebuilt Hunyuan training stack — the 295B/21B-active MoE preview that would become GA Hy3, with vendor-reported SWE-bench Verified 74.4%, Terminal-Bench 2.0 54.4% and GPQA Diamond 87.2% at ~$0.18/$0.60 per 1M; superseded by the Apache-2.0 GA Hy3 (2026-07-06).
- **Provider / access:** Open weights (HF `tencent/Hy3-preview`, GitHub `Tencent-Hunyuan/Hy3-preview`) under the **Tencent Hy Community License** (not Apache — that arrived with GA); vLLM/SGLang/LLaMA-Factory, MTP speculative decoding; hosted via OpenRouter (~$0.18/$0.60, cache $0.06) and Chinese routes (~1.2 yuan per 1M); not on OpenCode Zen.
- **Release / knowledge:** released 2026-04-13 (Clore.ai guide; houdao cites an April 23 public launch); knowledge cutoff not published.
- **IDs:** `tencent/hy3-preview` (HF/hosted style).
- **Context window:** 256,000 total (256K); 64,000–128,000 max output (folder meta).
- **Modalities:** text in/out only; reasoning (`reasoning_effort`: `high` / `no_think`); tool calling (`hy_v3`/`hunyuan` parsers).
- **Pricing (as of 2026-10-21):** OpenRouter list ~$0.18/$0.60 per 1M (cache $0.06, folder meta); Chinese API from ~1.2 yuan per 1M (houdao); free self-host (BF16 weights ~590GB — 8×H100 class).
- **Architecture:** MoE, 295B total / 21B active per token, 192 experts top-8 routed, 80 Transformer layers + 1 MTP layer, GQA (64 heads, 8 KV, head dim 128), hidden 4096, BF16.

### Raw benchmarks found

Tencent Hy3-preview model card (2026-04-13, via the Clore.ai deployment guide and BenchLM) + Artificial Analysis rows via BenchLM:

Agent / tool use:

- Terminal-Bench 2.0: **54.4%** (vendor card via BenchLM/Clore.ai — matches the folder's claim)
- GDPval-AA: **1,136 Elo / 35.8%** normalized (Artificial Analysis Hy3-preview page via BenchLM)
- AA Agentic Index: **25.6%** (Artificial Analysis via BenchLM)
- Gert Labs: **36.9%** (Gert Labs via BenchLM)
- Tau2 / Tau3 / BrowseComp / OSWorld / Claw-Eval / MCP-Atlas: no verified public score found (vendor card covers only the rows below)

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (vendor card via Clore.ai/BenchLM); **89.7%** (Artificial Analysis via BenchLM)
- HLE: **~30%** (vendor card via Clore.ai); **25.5%** (AA preview page) / **33.5%** (AA model page via BenchLM)
- SuperGPQA: **51.6%** (vendor card via Clore.ai)
- Artificial Analysis Intelligence Index: **41.2** (AA Hy3-preview page via BenchLM)
- AA-LCR (long-context reasoning): **66.7%** (Artificial Analysis via BenchLM)
- CritPt: **4.9%** (Artificial Analysis via BenchLM) — weak
- AA-Omniscience: Accuracy **31.5%**, Hallucination Rate **73.0%** (Artificial Analysis via BenchLM)
- IFBench: **63.1%** (Artificial Analysis via BenchLM)
- AIME / MMLU-Pro: no verified public score found (vendor cites proprietary CL-bench and Tsinghua Qiuzhen math-PhD results)

Coding:

- SWE-bench Verified: **74.4%** (vendor card via BenchLM/Clore.ai — matches the folder's claim; GLM-5.1 ~79% and GPT-5.4 ~78% on the same guide's comparison)
- SciCode: **41.2%** (AA preview page) / **48.6%** (AA model page via BenchLM)
- AA Coding Index: **58.8%** (Artificial Analysis via BenchLM)
- SWE-bench Pro / LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **66.7%** long-context reasoning (Artificial Analysis via BenchLM) on the 256K window; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 54.4% and GDPval-AA 1,136 Elo (35.8% — better than the GA Hy3's 28.3%) are solid mid-band agentic results with working tool parsers in vLLM/SGLang; capped by AA Agentic Index 25.6%, Gert Labs 36.9% and no Tau/BrowseComp/OSWorld numbers.
- **Reasoning: 84/100.** GPQA Diamond 87.2–89.7% is strong graduate science and the AA Intelligence Index reads 41.2 (higher than the GA Hy3's 25.3); capped by HLE 25.5–33.5%, AA-LCR 66.7%, CritPt 4.9% and the 73.0% hallucination rate.
- **Context window: 78/100.** 256K native lands in the 200K–500K tier (65–84, above the 200K=70 floor); AA-LCR 66.7% is mid-band long-context reasoning and the full 256K realistically needs 8×H200-class hardware.
- **Multimodal: 15/100.** Text-only — text in, text out (Clore.ai guide, official GitHub); the text-only tier (10–20) applies.
- **Coding: 76/100.** SWE-bench Verified 74.4% (vendor, explicit multi-step tool-use optimization) and AA Coding Index 58.8% are upper-mid band; capped by SciCode 41.2–48.6%, Terminal-Bench 2.0 54.4% and no SWE-bench Pro/LiveCodeBench/DeepSWE numbers.
- **Cost efficiency: 93/100.** ~$0.18/$0.60 (cache $0.06) on OpenRouter and ~1.2 yuan per 1M domestically sit near the ~$0.60/$2.20 ≈ 92 band on the cheaper side; free self-host costs 590GB of BF16 VRAM, which erodes that floor in practice.
- **Overall Score: 66/100.** Mean of (76 + 84 + 78 + 15 + 76) / 5 = 65.8 → 66. Best fit: the historical preview snapshot for A/B comparisons against GA Hy3 — new deployments should use the Apache-2.0 GA Hy3, which scores higher at a similar price.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Tencent model card rows via BenchLM, Clore.ai deployment guide with the vendor comparison table, houdao, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
