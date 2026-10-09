# Grok 4.1 — findings by Step 5 Preview

- Source: xAI (`grok-4.1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November-2025 chat upgrade (released 2025-11-17 after a silent two-week rollout) — the same ~3T-parameter MoE pretrained base as Grok 4 with aggressive RL applied to style, personality, helpfulness and alignment (frontier models used as reward models). Thinking mode (`quasarflux`) debuted #1 on LMArena Text Arena at 1483 Elo (31 points clear of the best non-xAI model; non-reasoning `tensor` #2 at 1465), with the production hallucination rate cut from 12.09% to 4.22% and FActScore errors from 9.89% to 2.97%. Documented tradeoffs: sycophancy rose 0.07 → 0.19–0.23 and MASK dishonesty 0.43 → 0.49.
- **Provider / access:** grok.com, X, iOS/Android apps (default in Auto mode); the API-facing sibling was Grok 4.1 Fast (2025-11-19, retired 2026-05-15 → redirects to Grok 4.3). No OpenCode Zen Free ID found.
- **Release / knowledge:** 2025-11-17; knowledge cutoff ~November 2024.
- **IDs:** `grok-4.1` (consumer), `grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning` (API, retired).
- **Context window:** 256,000 tokens; ~8K max output.
- **Modalities:** Text and image in → text out ( vision upgraded for chart analysis / OCR-level extraction); Thinking and Non-Reasoning modes.
- **Pricing (as of 2026-10-09):** $3.00 / MTok input, $15.00 output (tracked; no cached/batch tier published for 4.1 itself).
- **Architecture:** Proprietary; same pretrained base as Grok 4 (~3T MoE per third-party reporting), RL tuned for conversation.

### Raw benchmarks found

Human-preference / safety (xAI launch):

- LMArena Text Arena: **1483 Elo #1** (Thinking) / **1465 #2** (non-reasoning); Grok 4 had ranked #33
- EQ-Bench3: **1586 #1** (Thinking) / 1585 #2; Creative Writing v3: **1721.9 #2** (Thinking) / 1708.6 #3
- Blind live-traffic preference vs previous production Grok: **64.78%**
- Hallucination rate (production info-seeking sample): **4.22%** (from 12.09%); FActScore error rate: **2.97%** (from 9.89%)
- Sycophancy: 0.19 (Thinking) / 0.23 (non-thinking) vs Grok 4's 0.07; MASK dishonesty 0.49 / 0.46 vs 0.43

Independent (AA / Vals, thinking config where noted):

- GPQA Diamond: **85.3%** (AA, thinking) / 63.7% (standard mode); Vals: 84.3%
- HLE: **19.3%** (AA, thinking) / 5.0–5.1% (standard)
- LiveCodeBench: **80.6%** (Vals, thinking) / 42.6% (non-reasoning)
- SWE-bench Verified: **41.4%** (Vals, thinking)
- MMLU-Pro: **84.2%** (Vals); MMMU: 72.7% (Vals); MMMU-Pro: 63.3% (AA)
- AA Intelligence Index: **~20.4–23.6**; AA-LCR: **74%**; IFBench: 52.7%; CritPt: 2.9%
- Vibe Code Bench v1.1: **1.2%** (Vals)

Agentic / tool use:

- **τ²-Bench Telecom: 100%** (xAI launch, with Agent Tools API) / 93.3% (AA, thinking) / 63.7% (standard)
- Berkeley Function Calling v4: **72% overall** (xAI launch) / 69.6% (AA, thinking, #5)
- Terminal-Bench Hard: 24.2% (AA); Terminal-Bench 2.0: 24.7% (Vals)
- MCP-Atlas / BrowseComp / GDPval-AA / Claw-Eval: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 58/100.** τ² Telecom 93.3% (thinking) and BFCL v4 69.6–72% show real tool-calling strength at launch; capped by the standard-mode τ² of 63.7%, Terminal-Bench Hard 24.2% and no published MCP-Atlas/BrowseComp/GDPval rows.
- **Reasoning: 62/100.** GPQA 84.3–85.3% (thinking), LiveCodeBench 80.6% and MMLU-Pro 84.2% are mid-tier; capped by HLE 5.0–19.3% (config-dependent), CritPt 2.9% and the AA Index of ~20–24 — the RL was spent on conversation, not new reasoning.
- **Context window: 72/100.** 256K-token window in the 200K–500K band with ~8K output; AA-LCR 74% is the only long-context measure and no MRCR/RULER figure exists.
- **Multimodal: 68/100.** Text + image in → text out (upgraded chart/OCR vision) is the 60–70 band with MMMU-Pro 63.3% (AA); no video/audio input or non-text output.
- **Coding: 58/100.** LiveCodeBench 80.6% (thinking) is the strong cell, but SWE-bench Verified 41.4%, Vibe Code Bench 1.2% and Terminal-Bench Hard 24.2% put agentic coding firmly mid-to-low.
- **Cost efficiency: 60/100.** $3/$15 per MTok maps to the methodology's ~$3/$15 ≈ 60 tier; the Fast sibling was cheaper ($0.20/$0.50) but is retired and redirected to Grok 4.3.
- **Overall Score: 64/100.** Best-fit recommendation: a personality-first chat model whose LMArena and EQ-Bench leads defined its generation — superseded by Grok 4.20/4.3+ for both chat and code; relevant as the RL-on-style reference point.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (xAI Grok 4.1 launch post + Grok 4.1 Fast post, Artificial Analysis, Vals AI, HokAI, TheExpertRanking, ShawnHack, DataCamp); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.2.md`, using the same headings.
