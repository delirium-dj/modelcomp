# Gemini 2.5 Flash — findings by Kimi K3

- Source: Google / Gemini 2.5 Flash (`gemini-2.5-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's 2025-era Flash workhorse — 1M context, low cost, now clearly outclassed (τ²-bench 14.9%, AA-HLE 4.7%). Kept for legacy compatibility.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash`), Vertex AI, AI Studio.
- **Release / knowledge:** 2025 release; knowledge cutoff not verified in current sources.
- **IDs:** `google/gemini-2.5-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai).
- **Modalities:** text/image (familial audio) in; text out; reasoning: base classified Non-Reasoning (benchlm.ai); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified current price in my sources; legacy Flash tier (historically ~$0.30/$2.50, unverified today).
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **14.9%** (benchlm.ai)
- All other agentic rows: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **68.3%** (benchlm.ai)
- HLE (AA-HLE): **4.7%** (benchlm.ai)
- AA-LCR: **49.9%**; CritPt: **1.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **9.8**; BenchLM overall **43/100, #103 of 507**
- AA-Omniscience Index: **−42.6%** — Accuracy **26.1%** / Hallucination Rate **93.0%** (benchlm.ai)
- FrontierMath v2: **4.8%** T1–3 / **4.2%** T4; AA-IFBench: **39.0%** (benchlm.ai)

Coding:

- No SWE-bench/LiveCodeBench/SciCode rows at this ID: no verified public score found.

Long context:

- AA-LCR 49.9% at the 1M window (benchlm.ai) — material retrieval decay.

Multimodal:

- AA-MMMU-Pro: **65.5%**; Design Arena Website: **1126 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 40/100.** Only row: τ²-bench 14.9% — not agent-capable anymore.
- **Reasoning: 45/100.** GPQA 68.3% survives; capped by HLE 4.7%, CritPt 1.4%, AA Index 9.8.
- **Context window: 62/100.** 1M window but LCR 49.9% shows degraded retrieval at scale.
- **Multimodal: 66/100.** MMMU-Pro 65.5% plus familial audio-in; text-only output caps it.
- **Coding: 45/100.** No verified coding benchmark rows at this ID — default conservative mid-low; superseded by 3.x tiers.
- **Cost efficiency: 80/100.** Legacy cheap Flash tier (provisional).
- **Overall Score: 52/100.** Mean of the five quality dims (40+45+62+66+45)/5 = 51.6 → 52. Best fit: legacy simple chat/extraction at very low cost; everybody else should move to 3.x Flash.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
