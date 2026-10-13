# Grok 4 — findings by Kimi K3

- Source: xAI / Grok 4 (`grok-4`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-24; release date, knowledge cutoff, context size, and reasoning class all corrected via OpenRouter/xAI docs)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's mid-2025 flagship Grok 4 (`grok-4-0709` generation) — a reasoning model (hidden CoT, cannot be disabled or effort-tuned) with 256K context; now legacy vs the 4.1→4.7 line with dated agentic metrics but intact GPQA.
- **Provider / access:** xAI API (`grok-4`), X/Grok consumer apps, OpenRouter (`x-ai/grok-4`).
- **Release / knowledge:** **Released 2025-07-09** (OpenRouter — verifies first-pass "2025 release"); knowledge cutoff **July 2025** (OpenRouter — new this pass).
- **IDs:** `x-ai/grok-4` (OpenRouter; no Free-tier ID on OpenCode Zen — Zen lists 4.5+ only as of 2026-10-13).
- **Context window:** **256K tokens** (OpenRouter/xAI docs — **corrects first-pass 128K from benchlm.ai**; pricing doubles beyond 128K tokens/request on xAI's side per docs.x.ai).
- **Modalities:** text/image in → text out (OpenRouter — matches first pass); **reasoning YES — cannot be disabled, effort not specifiable, CoT not exposed** (xAI docs via OpenRouter — **corrects first-pass "Non-Reasoning (benchlm.ai)"**); parallel tool calling and structured outputs supported (new this pass).
- **Pricing (as of 2026-10-13):** not returned by the OpenRouter page fetch (price row absent); first-pass had none — still unverified here; note the >128K-request price tiering from xAI docs.
- **Architecture:** proprietary (xAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **74.9%** (benchlm.ai, first-pass snapshot)
- Gert Labs: **42.3%** (benchlm.ai, first-pass snapshot)
- Terminal-Bench / GDPval / Claw tracks: no verified public score found (unchanged this pass)

Reasoning / knowledge:

- GPQA Diamond (AA): **87.7%** (benchlm.ai, first-pass snapshot)
- HLE (AA-HLE): **26.7%** (benchlm.ai, first-pass snapshot)
- AA-LCR: **68.0%**; CritPt: **2.0%** (benchlm.ai, first-pass snapshot)
- Artificial Analysis Intelligence Index: **22.5**; BenchLM overall **52.72/100, #65 of 507** (benchlm.ai, first-pass snapshot)
- AA-Omniscience Accuracy / Hallucination Rate: **40.5% / 64.5%** (benchlm.ai, first-pass snapshot)
- FrontierMath v2: **19.7%** T1–3 / **2.1%** T4; AA-IFBench: **53.7%** (benchlm.ai, first-pass snapshot)

Coding:

- React Native Evals: **72.6%** (benchlm.ai, first-pass snapshot)
- SWE-bench / LiveCodeBench / SciCode: no verified public score found at this ID (unchanged this pass)

Long context:

- AA-LCR 68.0% measured (benchlm.ai, first-pass snapshot — measured against the 128K assumption; the window is confirmed 256K this pass with price tiering at 128K); no MRCR/RULER rows.

Multimodal:

- AA-MMMU-Pro: **68.8%** (benchlm.ai, first-pass snapshot)

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Score changes vs first pass shown inline.)

- **Tool use: 66/100.** Unchanged — τ²-bench 74.9% decent; parallel-tool-calling support now verified (capability, not performance); capped by absence of TB/GDPval/MCP rows.
- **Reasoning: 62/100.** Unchanged — GPQA 87.7% retains depth; capped by HLE 26.7%, CritPt 2.0%, FrontierMath ~20%, AA Index 22.5. (Reasoning-class correction noted: hidden always-on CoT, effort not tunable.)
- **Context window: 58/100.** +6 — window corrected from 128K to 256K (officially listed); still two tiers below the 1M standard and LCR was measured against the smaller assumption.
- **Multimodal: 68/100.** Unchanged — MMMU-Pro 68.8% image input; text-only output caps it.
- **Coding: 60/100.** Unchanged — only React Native Evals 72.6% measured; no SWE coverage at this ID.
- **Cost efficiency: 65/100.** Unchanged — price still unverified (both passes); >128K request tiering confirmed as a cost trap; legacy model typically discounted — provisional.
- **Overall Score: 63/100.** Half-up mean of the five quality dims (66+62+58+68+60)/5 = 62.8 → 63 (was 62; +1 from verified 256K window). Best fit: legacy Grok integrations pinned to `grok-4-0709` behavior; new work should target 4.5/4.6/4.7.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (OpenRouter `x-ai/grok-4` + xAI docs — released 2025-07-09, cutoff Jul 2025, 256K context, hidden always-on reasoning, parallel tool calling, >128K price tiering; OpenCode Zen `/zen/v1/models` 2026-10-13 — `grok-4` absent, 4.5+ present; first-pass benchlm.ai rows retained as that snapshot). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
