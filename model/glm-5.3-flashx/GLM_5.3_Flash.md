# GLM-5.3-FlashX — findings by GLM 5.3 Flash

- Source: Z.ai (`glm-5.3-flashx`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** High-speed serving variant of GLM-5.3-Flash from Z.ai (Zhipu AI) — identical weights and capabilities as GLM-5.3-Flash, served at roughly 4x speed (~200 tokens/s). Explicitly a variant of the `glm-5.3-flash` entry, not new weights; use it when Flash-class multimodal quality is needed at lower latency.
- **Provider / access:** Z.ai API, Chat Completions (model ID `glm-5.3-flashx`). Also served via Vercel AI Gateway (~200 tok/s), OpenRouter, Merge Gateway, CometAPI, and AIHubMix.
- **Release / knowledge:** went live on the Z.ai API 2026-09-17/18 (announced with Zhipu's API + experience-center update); knowledge cutoff not separately published — same weights (and thus same knowledge) as GLM-5.3-Flash, released 2026-08-26.
- **IDs:** `zai/glm-5.3-flashx` (Z.ai native). No OpenCode Zen ID verified in this pass — cost is scored on paid pricing.
- **Context window:** 1,048,576 tokens (1M) total, ~128K max output (Z.ai developer docs for the GLM-5.3 family).
- **Modalities:** text + image + video in (inherits GLM-5.3-Flash's native multimodality — first natively multimodal GLM-5 model), text out; explicit reasoning mode; tool calls supported (agentic/coding positioning); JSON mode not separately verified.
- **Pricing (as of 2026-10-06):** $0.37 / 1M input, $1.25 / 1M output (Z.ai docs pricing table; output price corroborated by AIHubMix). Sits between GLM-5.3-Flash ($0.15/$0.50) and full GLM-5.3 ($1.40/$4.40).
- **Architecture:** same weights as GLM-5.3-Flash (vendor-stated: "same model weights and capabilities, optimized for fast inference"); reported ~320B total / ~18B active MoE, open weights with an NVFP4 quantized release published ~2026-09-09 (third-party trackers; license per z.ai model card).

### Raw benchmarks found

> FlashX publishes no separate benchmark set — Z.ai documents it as the same
> weights as GLM-5.3-Flash, so the numbers below are GLM-5.3-Flash scores and
> they transfer to FlashX by that vendor statement, not by independent
> FlashX-labeled measurement. No FlashX-specific independent eval was found.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Qubrid compilation of official + independent results; some reports up to 88.2%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **57** (Qubrid compilation)
- BenchLM overall: **58.56/100** (BenchLM model page, independent)
- GPQA Diamond: no verified public score found
- HLE / LCR / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **63.4** (z.ai release blog "GLM-5.3-Flash: Frontier Intelligence, Flash Cost"; GLM-5.2 scored 46.2)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- z.ai claim: outperforms GLM-5.2 across **six** coding/agentic benchmarks (release blog)

Long context:

- No MRCR / RULER retrieval score published for the GLM-5.3-Flash weights — 1M window is a spec claim, retrieval quality unverified.

Speed / other:

- Generation speed: up to ~**200 tokens/s** (Z.ai docs; Vercel AI Gateway serves it at approximately this rate; speed not guaranteed per request)
- Vals.ai MedScribe: **#7 of 106** models (vals.ai leaderboard)
- HN commentary on GLM-5.3-Flash: ~7x slower per task than Gemini-class peers — the latency gap FlashX exists to close.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 84.3% sits just under the ~88% frontier reference; DeepSWE 63.4 confirms strong agentic execution. Capped by missing Tau3/GDPval/Claw-Eval corroboration.
- **Reasoning: 85/100.** AA Intelligence Index 57 is just below the 60+ frontier band; explicit reasoning mode documented. Capped by no verified GPQA/HLE numbers.
- **Context window: 95/100.** Verified 1M (1,048,576) window with ~128K max output — top tier (≥1M = 95–100); no published retrieval-quality score, so not scored 100.
- **Multimodal: 85/100.** Native text+image+video input inherited from GLM-5.3-Flash (75–90 band for +video input); no audio input, text-only output keeps it below 90.
- **Coding: 85/100.** DeepSWE v1.1 63.4 (vs GLM-5.2's 46.2) plus a clean sweep of six vendor-reported coding/agentic benchmarks — strong but below the 74%+ DeepSWE frontier reference; no SWE-bench Verified number published.
- **Cost efficiency: 93/100.** $0.37/$1.25 per 1M is cheaper than the ~$0.60/$2.20 ≈ 92 reference point, and the ~200 tok/s serving removes the latency penalty commentators flagged on standard Flash; not scored higher because Flash itself remains 2.5x cheaper.
- **Overall Score: 87/100.** Mean of the five quality dims: (86 + 85 + 95 + 85 + 85) / 5 = 436/5 = 87.2 → **87**. Best fit: same multimodal agent/coder brain as GLM-5.3-Flash with ~200 tok/s serving — pick it over `glm-5.3-flash` when wall-clock latency or throughput per dollar matters, and over full GLM-5.3 when budget matters more than peak reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-06
- Method: public internet research (Z.ai docs/blog, Qubrid, BenchLM, vals.ai, gateway/aggregator pages); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark numbers transfer from GLM-5.3-Flash via the vendor's same-weights statement — no independent FlashX-labeled evals existed yet at research time.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
