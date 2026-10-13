# Grok 4 Fast — findings by Kimi K3

- Source: xAI (`grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`; Zen listing `opencode/grok-4-fast`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-27; **availability degraded: `grok-4-fast` is gone from the live Zen listing and OpenRouter's `x-ai/grok-4-fast-reasoning` route returns no data**; benchmarks unchanged — scores hold with availability caveat)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's September 2025 cost-efficiency flagship: one unified weight set steered into `reasoning` or `non-reasoning` mode, matching Grok 4 on benchmarks with ~40% fewer thinking tokens. Claimed #1 on LMArena Search Arena at launch; SOTA price-to-intelligence per Artificial Analysis. **As of 2026-10-13 the model is delisted from Zen (only 4.5/4.6/4.7 remain) and the OpenRouter route shows no active data — treat as sunset in favor of the 4.1-Fast/4.5+ line.**
- **Provider / access:** xAI API IDs `grok-4-fast-reasoning`/`grok-4-fast-non-reasoning` (xAI-side status unverified today); grok.com Fast/Auto modes; first-pass gateways (OpenRouter, Vercel) show no live listing now; OpenCode Zen `opencode/grok-4-fast` is **absent from the 2026-10-13 `/zen/v1/models` listing**.
- **Release / knowledge:** Released 2025-09-19 (xAI newsroom). Knowledge cutoff not publicly stated.
- **IDs:** `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning` (xAI); `opencode/grok-4-fast` (Zen, historical — delisted).
- **Context window:** 2M tokens native (xAI launch post, both API variants); Zen listing capped at 128K total (scored on the capped tier).
- **Modalities:** Zen listing: text in/out; native model ingests images/videos during agentic search (xAI); AA-MMMU-Pro 61.8% implies vision input natively (BenchLM). Reasoning unified; tool calls (tool-use RL); JSON mode.
- **Pricing (as of 2026-09-27; historical now):** $0.20/$0.50 per 1M under 128K; $0.40/$1.00 at ≥128K; cached input $0.05 (xAI launch post).
- **Architecture:** proprietary; unified reasoning/non-reasoning single-weight architecture.

### Raw benchmarks found (first-pass snapshot — no new rows)

Agent / tool use:

- Tau2-Bench: **65.8%** (BenchLM, AA harness)
- BrowseComp: **44.9%** (xAI launch; Grok 4 43.0%); BrowseComp-zh: 51.2%; X Bench Deepsearch: 74.0%; X Browse: 58.0% (internal)
- LMArena Search Arena: **#1, 1163 Elo** (+17 over o3-search; codename `menlo`); Text Arena: #8 (`tahoe`)
- SimpleQA: 95.0%; Reka Research Eval: 66.0% (xAI launch)
- Terminal-Bench 2.1 / Tau3 / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: 85.7% (xAI launch); AA-GPQA 84.7% (BenchLM)
- AIME 2025: 92.0%; HMMT 2025: 93.3% (xAI launch); HLE: 20.0% no-tools; AA-HLE 19.1%
- LCR / AA-LCR: 73.7%; CritPt: 2.9%; AA Intelligence Index: 17.9; BenchLM overall 42.43/#106 of 508
- Omniscience Accuracy / Hallucination: 22.8% / 68.3%

Coding:

- LiveCodeBench (Jan–May): **80.0%** (xAI launch); Vibe Code Bench: **0.00%** (BenchLM harness — anomalous)
- SWE-bench Verified / Pro / SciCode / DeepSWE: no verified public score found

Long context:

- 2M native window claimed; AA-LCR 73.7%; no MRCR/RULER at ≥512K.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Change vs first pass shown inline.)

- **Tool use: 70/100.** Unchanged — Tau2 65.8% + Search Arena #1 + BrowseComp 44.9% top of mid band; capped by missing TB/GDPval/Claw rows.
- **Reasoning: 78/100.** Unchanged — GPQA 85.7%, AIME 92%, HMMT 93.3%; capped by HLE 20% and AA Index 17.9.
- **Context window: 58/100.** Unchanged — scored on the 128K Zen tier; native API is 2M.
- **Multimodal: 15/100.** Unchanged — text in/out on the evaluated ID.
- **Coding: 68/100.** Unchanged — LCB 80% with Vibe ~0% → mid band; no SWE row.
- **Cost efficiency: 90/100.** −5 — price-to-intelligence was SOTA ($0.20/$0.50), but with the route gone from Zen/OpenRouter the practical value needs a working first-party endpoint — treat as historical until xAI-side status is re-confirmed.
- **Overall Score: 58/100.** (70+78+58+15+68)/5 = 57.8 → 58 (unchanged; cost excluded). Best fit (historical): dirt-cheap reasoning agent/search workloads via the native 2M-context API; successor path is the current xAI fast/4.6 line.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass public web research (OpenCode Zen `/zen/v1/models` 2026-10-13 — `grok-4-fast` absent; OpenRouter `x-ai/grok-4-fast-reasoning` — page loads without model data). First-pass benchmark rows retained unchanged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
