# Qwen 3.5 122B — findings by Step 5 Preview

- Source: Alibaba / Qwen3.5-122B-A10B (`qwen/qwen3.5-122b-a10b`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 122B (Qwen3.5-122B-A10B)
- **Short description:** Alibaba's February 2026 open-weight mid-size MoE — 125B total / 10B active on a hybrid Mamba-2 + attention + MoE stack (runs on a single DGX Spark), 262K native context (YaRN to 1M) and native text/image/video input, with GPQA 86.6%, SWE-bench Verified 72.0% and τ²-bench 93.6% at $0.26–$0.29/$2.08–$2.40.
- **Provider / access:** Open weights (HF `Qwen/Qwen3.5-122B-A10B`, Apache 2.0); OpenRouter (`qwen/qwen3.5-122b-a10b`), SiliconFlow, Alibaba Model Studio, DeepInfra; vLLM + DFlash speculative decoding on GB10/DGX Spark (community bench); not on OpenCode Zen.
- **Release / knowledge:** released 2026-02-24/25 (llm-stats, DataLearner, LLMLearner); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-122b-a10b` (route style), `Qwen/Qwen3.5-122B-A10B` (HF).
- **Context window:** 262,144 native, extensible to 1,010,000 via YaRN; 65,536 max output (folder meta).
- **Modalities:** text, image, video in; text out; explicit reasoning mode; tool calling; 201 languages.
- **Pricing (as of 2026-10-21):** OpenRouter/SiliconFlow $0.26/$2.08 per 1M (folder meta); llm-stats $0.29/$2.40; Alibaba Model Studio $0.40/$3.20; free self-host under Apache 2.0.
- **Architecture:** MoE with 125B total / 10B active (naming: A10B); hybrid Mamba-2 + attention + MoE layers (community DGX-Spark serving bench); 27.8B-class dense sibling is the separate Qwen3.5-27B.

### Raw benchmarks found

Qwen3.5-122B-A10B model card + Artificial Analysis figures via BenchLM + Benchgen cross-check:

Agent / tool use:

- τ²-bench: **93.6%** (Artificial Analysis via BenchLM)
- BrowseComp: **63.8%** (model card via BenchLM; Benchgen cross-check same)
- OSWorld-Verified: **58%** (model card via BenchLM)
- Terminal-Bench 2.0: **49.4%** (model card via BenchLM — matches the folder's claim)
- GDPval-AA: **925 Elo / 15.7%** normalized (Artificial Analysis via BenchLM) — low
- AA Agentic Index: **9.6%** (Artificial Analysis via BenchLM) — very low
- Tau3-Banking / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (model card via BenchLM); **85.7%** (Artificial Analysis via BenchLM); HLE **47.5%** on Benchgen's snapshot
- MMLU-Pro: **86.7%** (model card via BenchLM); SuperGPQA: **67.1%**; MMLU-ProX: **82.2%** (model card)
- AA-HLE: **25.2%** (Artificial Analysis via BenchLM) — mid-low
- Artificial Analysis Intelligence Index: **15.6%** (Artificial Analysis via BenchLM — mid-low)
- AA-LCR (long-context reasoning): **76.3%** (Artificial Analysis via BenchLM)
- LongBench v2: **60.2%** (model card via BenchLM)
- CritPt: **0.6%** (Artificial Analysis via BenchLM) — near-zero
- AA-Omniscience: Accuracy **24.4%**, Hallucination Rate **87.1%** (Artificial Analysis via BenchLM)
- IFEval: **93.4%** (model card via BenchLM); AA-IFBench: **75.7%** (Artificial Analysis via BenchLM)

Coding:

- SWE-bench Verified: **72.0%** (model card via BenchLM — matches the folder's claim)
- LiveCodeBench v6: **78.9%** (model card via BenchLM)
- Terminal-Bench 2.0: **49.4%** (listed above)
- AA-SciCode: **39.7%** (Artificial Analysis via BenchLM)
- AA Coding Index: **45.7%** (Artificial Analysis via BenchLM)
- SWE-bench Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **76.3%** and LongBench v2 60.2% (AA / model card via BenchLM) on the 262K native window; YaRN 1M extension is static-factor; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU 83.9%, MMVU 74.7%, MMMU-Pro 76.9% (card) / 75.0% (AA), MathVision 86.2%, CharXiv 77.2%, V* 93.2% (model cards via BenchLM).

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-bench 93.6% is frontier-leaning tool calling, with BrowseComp 63.8% and OSWorld-Verified 58% adding real browsing/computer-use evidence; capped hard by GDPval 925 Elo (15.7%), AA Agentic Index 9.6%, Terminal-Bench 2.0 49.4% and no Tau3/Claw/MCP numbers — the knowledge-work agentic boards are its weak half.
- **Reasoning: 80/100.** GPQA Diamond 85.7–86.6% and MMLU-Pro 86.7% are strong graduate-level/knowledge results for a 10B-active MoE, and AA-LCR 76.3% is competent long-context reasoning; capped by HLE 25.2%, AA Intelligence Index 15.6%, CritPt 0.6% and the 87.1% hallucination rate.
- **Context window: 78/100.** 262,144 native with 65,536 max output lands in the 200K–500K tier (65–84, above the 200K=70 floor); AA-LCR 76.3% is mid-to-good and the 1M YaRN extension is static-factor.
- **Multimodal: 88/100.** Native text, image and video input (video-in tier 75–90) with text-only output; MMMU 83.9%, MathVision 86.2%, V* 93.2% and MMVU 74.7% are excellent for the class; no audio input or non-text output.
- **Coding: 74/100.** SWE-bench Verified 72.0% and LiveCodeBench v6 78.9% are solid upper-mid band; capped by Terminal-Bench 2.0 49.4%, SciCode 39.7%, AA Coding Index 45.7% and no SWE-bench Pro/DeepSWE numbers on any harness.
- **Cost efficiency: 90/100.** $0.26–$0.29 in / $2.08–$2.40 out sits near the ~$0.60/$2.20 ≈ 92 reference band on the cheaper side for input; Apache 2.0 weights (free self-host, single-DGX-Spark class) hold the floor at $0.
- **Overall Score: 79/100.** Mean of (76 + 80 + 78 + 88 + 74) / 5 = 79.2 → 79. Best fit: the mid-size open MoE for multimodal document/video work and τ²-class tool calling on one Spark-class box — vision strength outpaces its text-agentic profile.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Qwen3.5-122B-A10B model card + Artificial Analysis figures via BenchLM, Benchgen cross-check, DataLearner/llm-stats, community DGX-Spark serving bench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
