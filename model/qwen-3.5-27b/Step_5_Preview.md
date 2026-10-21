# Qwen 3.5 27B — findings by Step 5 Preview

- Source: Alibaba / Qwen3.5-27B (`qwen/qwen3.5-27b`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 27B
- **Short description:** Alibaba's February 2026 dense open-weight multimodal model — 27B params (Gated DeltaNet + FFN), 262K native context (YaRN to 1M), text/image/video early-fusion input and 201 languages under Apache 2.0, with GPQA Diamond 85.5%, MMLU-Pro 86.1% and SWE-bench Verified 72.4% at $0.26–$0.30/$2.16–$2.40.
- **Provider / access:** Open weights (`Qwen/Qwen3.5-27B`, HF, Apache 2.0); DeepInfra (FP8, 153.3 t/s, $0.26/$2.40-class), Alibaba Cloud Model Studio ($0.30/$2.40), Novita, OpenRouter ($0.27/$2.16 per folder meta); not on OpenCode Zen.
- **Release / knowledge:** released February 2026 (DeepInfra blog 2026-04-03, llm-stats 2026-02-24, awesomeagents); knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-27b` (route style), `Qwen/Qwen3.5-27B` (HF).
- **Context window:** 262,144 native, extensible to 1,010,000 via YaRN (DeepInfra, model card); 65,536 max output (folder meta).
- **Modalities:** text, image, video in; text out; thinking + non-thinking modes; tool calling; 201 languages.
- **Pricing (as of 2026-10-21):** OpenRouter $0.27/$2.16 per 1M (folder meta); DeepInfra $0.26 input (blended $0.84/1M), Alibaba Cloud/Novita $0.30/$2.40 (DeepInfra provider analysis); free self-host under Apache 2.0.
- **Architecture:** dense 27B (27.8B incl. vision), Gated DeltaNet linear attention + FFN, early-fusion multimodal training.

### Raw benchmarks found

Qwen3.5-27B model card (via BenchLM) + Artificial Analysis / leaderboard figures via BenchLM + DeepInfra provider analysis:

Agent / tool use:

- τ²-bench: **93.9%** (Artificial Analysis via BenchLM)
- BrowseComp: **61%** (model card via BenchLM)
- OSWorld-Verified: **56.2%** (model card via BenchLM)
- Terminal-Bench 2.0: **41.6%** (model card via BenchLM) — mid-weak
- Gert Labs: **39.4%** (Gert Labs via BenchLM)
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (model card via BenchLM); **85.8%** (Artificial Analysis via BenchLM)
- MMLU-Pro: **86.1%** (model card via BenchLM); SuperGPQA: **65.6%**; MMLU-ProX: **82.2%** (model card)
- AA-HLE: **23.9%** (Artificial Analysis via BenchLM) — mid-low
- Artificial Analysis Intelligence Index: **22.9%** (Artificial Analysis via BenchLM — mid band)
- AA-LCR (long-context reasoning): **77.7%** (Artificial Analysis via BenchLM)
- LongBench v2: **60.6%** (model card via BenchLM)
- CritPt: **0.9%** (Artificial Analysis via BenchLM) — near-zero
- AA-Omniscience: Accuracy **20.7%**, Hallucination Rate **81.5%** (Artificial Analysis via BenchLM)
- IFEval: **95%** (model card via BenchLM); AA-IFBench: **75.6%** (Artificial Analysis via BenchLM)

Coding:

- SWE-bench Verified: **72.4%** (model card via BenchLM — matches GPT-5-mini per awesomeagents)
- LiveCodeBench v6: **80.7%** (model card via BenchLM)
- SWE-Rebench: **58.9%** (SWE-Rebench leaderboard via BenchLM)
- Terminal-Bench 2.0: **41.6%** (listed above)
- SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **77.7%** and LongBench v2 60.6% (AA / model card via BenchLM) on the 262K native window; YaRN extension to 1M is static-factor; no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (traceability): MMMU 82.3%, MMVU 73.3%, MMMU-Pro 75.0% (AA-confirmed), CharXiv 79.5%, MathVision 86.0%, V* 93.7% (model cards via BenchLM).

### Normalized scores (1–100)

- **Tool use: 80/100.** τ²-bench 93.9% (Artificial Analysis) is frontier-leaning and BrowseComp 61% / OSWorld-Verified 56.2% show real browsing/computer-use agent ability; capped by Terminal-Bench 2.0 41.6% and Gert Labs 39.4% — the hardest agentic harnesses sit at mid.
- **Reasoning: 82/100.** GPQA Diamond 85.5–85.8% and MMLU-Pro 86.1% are strong graduate-level/knowledge results for a dense 27B, and AA-LCR 77.7% is good long-context reasoning; capped by HLE 23.9%, AA Intelligence Index 22.9% (mid band), CritPt 0.9% and the 81.5% hallucination rate.
- **Context window: 78/100.** 262,144 native with 65,536 max output lands in the 200K–500K tier (65–84, above the 200K=70 floor); AA-LCR 77.7% is solid but below the frontier long-context reference and the 1M YaRN extension is static-factor.
- **Multimodal: 88/100.** Native text, image and video input via early-fusion training (video-in tier 75–90) with text-only output; MMMU 82.3%, MMVU 73.3%, MathVision 86.0% and V* 93.7% are excellent for the class; no audio input or non-text output.
- **Coding: 78/100.** SWE-bench Verified 72.4% (GPT-5-mini parity) and LiveCodeBench v6 80.7% are strong upper-mid band; capped by Terminal-Bench 2.0 41.6%, SWE-Rebench 58.9% and no SWE-bench Pro/DeepSWE/SciCode numbers on any harness.
- **Cost efficiency: 90/100.** $0.26–$0.30 in / $2.16–$2.40 out sits near the ~$0.60/$2.20 ≈ 92 reference band on the cheaper side for input; Apache 2.0 weights hold the self-host floor at $0.
- **Overall Score: 81/100.** Mean of (80 + 82 + 78 + 88 + 78) / 5 = 81.2 → 81. Best fit: the best free/open dense 27B for multilingual multimodal work with real coding ability — self-host under Apache 2.0; keep a frontier model for HLE-class knowledge and the hardest agentic runs.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Qwen3.5-27B model card + Artificial Analysis/SWE-Rebench/Gert Labs figures via BenchLM, DeepInfra provider analysis, awesomeagents); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
