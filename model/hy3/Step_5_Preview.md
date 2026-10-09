# Hy3 — findings by Step 5 Preview

- Source: Tencent Hy / Hunyuan (`hy3`, weights `tencent/Hy3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Tencent Hy team; "Hunyuan" in the China market)
- **Short description:** Tencent's third-generation open-weight flagship (preview 2026-04-24, GA 2026-07-06 under Apache 2.0 — the first Hunyuan release without the preview's EU/UK/South-Korea license exclusion). A 295B-parameter MoE with only 21B active per token (192 experts, top-8 routed, 80 layers, hidden 4096, GQA), a 256K context window, a native 3.8B MTP layer for speculative decoding, and hybrid fast/slow thinking. The GA release scaled post-training RL after feedback from 50+ products: WorkBuddy task success rose 72%→90% with 34% faster completion, hallucination rate fell 12.5%→5.4%, and it uses 47–49% fewer tokens than GLM-5.2 on document/presentation tasks. Tencent positions it as rivaling flagship open models with 2–5× the parameters at 21B active; in its internal blind eval, 270 experts scored it 2.67/4 vs GLM-5.1's 2.51.
- **Provider / access:** Open weights (BF16 + FP8) on Hugging Face / ModelScope / GitCode / CNB; API on Tencent Cloud TokenHub and OpenRouter (launched as a free endpoint); integrates with OpenClaw, Cline, KiloCode, CodeBuddy, Hermes, Cherry Studio.
- **Release:** 2026-07-06 (preview 2026-04-24).
- **Context window:** 256K tokens (262,144 per OpenRouter).
- **Modalities:** Text in → text out; three reasoning modes (no-think default, low and high chain-of-thought); tool calling with production-grade stability (accuracy variance across CodeBuddy/Cline/KiloCode scaffoldings within 4%).
- **Pricing (as of 2026-10-09):** Tencent Cloud ¥1/M input, ¥4/M output, ¥0.25/M cache (≈$0.14/$0.56; third-party trackers list $0.13/$0.53); Apache-2.0 weights free to self-host (8× H20-3e recommended); preview was free on OpenRouter through 2026-07-21.
- **Architecture:** MoE 295B/21B, 192 experts top-8, 1 MTP layer, hybrid fast/slow thinking; +40% inference efficiency vs preview.

### Raw benchmarks found

Vendor + launch coverage (VentureBeat tabulation, BiggoNews, i-scoop, HF eval-results):

- GPQA Diamond: **90.4%** (GPT-5.5: 93.6)
- HLE with tools: **53.2%** (DeepSeek-V4-Pro: 48.2)
- FrontierScience-Olympiad: **74.8%** (GLM-5.2: 72.5; GPT-5.5: 73.8)
- BrowseComp: **84.2%**; DeepSearchQA: **91.0%** (both best open models in Tencent's table)
- MCP-Atlas: **79.1%** (leads open models); AA-LCR: **73.4%** (leads open models)
- SWE-bench Verified: **78%**; SWE-bench Pro: **57.9%** (Opus 4.8: 69.2; GLM-5.2 leads open); SWE-bench Multilingual: **75.8%**; Terminal-Bench 2.1: **71.7%**
- MathArena Apex: **38.7%** (GPT-5.5: 85.4 — the clear weakness)
- Internal blind eval: **2.67/4** (270 experts, own tasks) vs GLM-5.1 2.51; WorkBuddy task success 90% (vs 72% preview); hallucination rate 5.4%

### Normalized scores (1–100)

- **Tool use: 82/100.** MCP-Atlas 79.1%, BrowseComp 84.2% and DeepSearchQA 91.0% are frontier-band agentic results — Tencent's table has it ahead of every open model on search/tool orchestration and competitive with Opus 4.8/GPT-5.5; no Terminal-Bench-followup, Toolathlon or GDPval figure keeps it just under the top of the band.
- **Reasoning: 84/100.** GPQA Diamond 90.4% (independently tabulated) and HLE-with-tools 53.2% are at the frontier threshold; MathArena Apex 38.7% vs GPT-5.5's 85.4% is a steep advanced-math deficit, so upper-reasoning-tier rather than class-leading.
- **Context window: 72/100.** 256K is the 200K–500K band (65–84), with AA-LCR 73.4% leading open models on long-context retrieval — solid and verified, but a quarter of the 1M frontier norm.
- **Multimodal: 12/100.** Text-only (no vision or audio in the Hy3 release) — the methodology's text-only band (10–20).
- **Coding: 76/100.** SWE-bench Verified 78% and Terminal-Bench 2.1 71.7% are strong open-weights coding from 21B active parameters; SWE-bench Pro 57.9% trails GLM-5.2/Opus 4.8/GPT-5.5 on repository-scale work and there is no DeepSWE/SWE-Marathon number.
- **Cost efficiency: 95/100.** ~$0.13–0.18/M input and ~$0.53–0.59/M output with Apache-2.0 weights free to self-host on 8× H20-3e — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier, with the 47–49% token-efficiency advantage over GLM-5.2 making the effective cost even lower.
- **Overall Score: 65/100.** Best-fit recommendation: the cost-efficiency open-weights pick — GLM-5.1-beating productivity at $0.14/$0.56, best-in-open tool orchestration and long-context retrieval; not the choice for advanced math or repo-scale coding.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Tencent Hy release pages + HF model card/eval-results, Tencent Cloud techpedia, VentureBeat/AnIntent/i-scoop launch coverage, OpenRouter, concentrate.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Hy4_GA.md`, using the same headings.
