# Ling-3.0-tiny — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`inclusionai/ling-3.0-tiny`, released 2026-08-06)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny (the smallest model in the Ling 3.0 generation)
- **Short description:** inclusionAI's efficiency-tier MoE — **7.9B total / 1.3B active** per token, with 128 routed experts (8 routed + 1 shared activated), a 3:1 alternating stack of Kimi Delta Attention and MLA layers, and switchable Thinking/Instant reasoning via `enable_thinking`. It is built for local and resource-constrained deployment rather than raw capability: validated on NVIDIA DGX Spark (100–105 tok/s), an M4 Pro MacBook (86–90 tok/s) and Mac mini, with **8.34 GiB peak memory at 8K context** in FP8, and demonstrated running fully offline driving an `obsidian-cli` integration. It shipped with MIT-licensed BF16/FP8/INT4 weights and a 262K context window, and was distributed free on OpenRouter and Vercel AI Gateway (via Novita AI) during its August launch window. Artificial Analysis scored it 25 on Intelligence Index v4.1.1 — 6th of 56 in its size class against a median of 8, a genuinely strong result for 1.3B active parameters — though AA's rebased v4.3.2 now lists it at 11, and the only caveat of note is verbosity: AA measured ~230M output tokens across its eval suite versus a class median of ~63–82M (~3×).
- **Provider / access:** Open weights (MIT) on Hugging Face / ModelScope (BF16, FP8, INT4; 33 community quantizations listed); OpenRouter (`:free` and metered), Vercel AI Gateway, Novita AI; Ant Ling platform.
- **Release:** 2026-08-06.
- **Context window:** 262,144 tokens (256K class; YaRN 256K launch config); max output 32,768.
- **Modalities:** Text in → text out; hybrid reasoning, native function calling, prompt caching.
- **Pricing (as of 2026-10-09):** launch-free on OpenRouter/Vercel (ended ~2026-08-14); post-promo ≈ $0.06/M input, $0.18/M output, $0.01/M cached input (third-party listings).
- **Architecture:** MoE 7.9B/1.3B; 3:1 KDA–MLA hybrid linear attention; 128 routed experts, 8 active + 1 shared.

### Raw benchmarks found

Artificial Analysis (independent; no per-benchmark breakdown is published, only the aggregate):

- Intelligence Index: **25** on v4.1.1 at launch — class rank 6/56, class median 8; **11** on the current v4.3.2 (#36/142 in class, #26/697 overall)
- Agentic Index: **16** (v4.1.1, per the model card)
- Output speed: **154.1 tok/s** (class median ~148) at launch; **56.6 tok/s** median across providers on the current page (class median 85)
- Time to first token: **2.46 s** (class median 1.01 s); current page 2.57 s
- Token use: **~230M output tokens** across the Intelligence Index (median 82M) — "very verbose"; eval cost $0.00 during the free window
- Index composition (per-benchmark values not public): GDPval-AA v2, τ³-Banking, Terminal-Bench v2.1, SciCode, HLE, GPQA Diamond, CritPt, AA-Omniscience, AA-LCR

Other trackers:

- Franklin AI: intelligence index 24.5, coding index 26.5, 202.17 tok/s, TTFT 2.02 s
- AI BENCHY: score 3.6, rank #375, 23.2% pass rate (unreliable trackers — directional only)

### Normalized scores (1–100)

- **Tool use: 48/100.** Native function calling and an AA Agentic Index of 16 (in the 0–100 style scale used on the v4.1.1 card) with an eval composite containing τ³-Banking and Terminal-Bench 2.1 — mid-band for size; no public BFCL, τ²/τ³ or MCP-Atlas figure specific to this checkpoint.
- **Reasoning: 48/100.** Intelligence Index 25 (v4.1.1, 6th/56 in class) is above-median for its class, but 11 on the rebased v4.3.2 and the absence of any published GPQA/HLE/AIME number make this a low-mid score.
- **Context window: 66/100.** 262,144 tokens puts it in the 200K–500K band (65–84); AA-LCR is folded into the composite but unlisted, so the top of the band is not earned.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 45/100.** No SWE-bench, Terminal-Bench or SciCode figure is public for this checkpoint (SciCode and TB2.1 are index components only); third-party coding-index scores around 26.5 reflect a small-model coding tier.
- **Cost efficiency: 88/100.** ≈ $0.06/$0.18 per million with $0.01 cached input is the methodology's ~$0.1/$0.2 ≈ 97–99 tier, docked for AA's finding that it burns ~3× the class-median output tokens per task, which erodes the headline price.
- **Overall Score: 44/100.** Best-fit recommendation: the sub-server small model — 1.3B active parameters, 262K context and MIT weights for local/edge deployment; above-median class intelligence at $0.06/$0.18, with per-benchmark transparency still missing.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (inclusionAI Hugging Face model card, Artificial Analysis model page, AIToolsReview launch analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3_1.md`, using the same headings.
