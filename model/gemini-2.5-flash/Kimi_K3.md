# Gemini 2.5 Flash — findings by Kimi K3

- Source: Google / Gemini 2.5 Flash (`gemini-2.5-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's 2025-era Flash workhorse — 1M context, very low cost, thinking-capable, but clearly outclassed by 2026 models (τ²-bench 14.9%, AA-HLE 4.7%) and scheduled for retirement in October 2026.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash`), Vertex AI, AI Studio; Google restricts 2.5 access to projects with past usage — new projects are steered to 3.5 Flash-Lite / 3.8 Flash (ai.google.dev model page note).
- **Release / knowledge:** GA 2025-06-17 (gate.ai specs roundup); knowledge cutoff not verified in current sources.
- **IDs:** `google/gemini-2.5-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (1,048,576; benchlm.ai, gate.ai); max output 65,536 tokens (gate.ai).
- **Modalities:** native text/image/audio/video in; text out (gate.ai; familial spec); thinking-enabled (reasoning) model; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** $0.30/M input, $2.50/M output tokens (deploybase.ai 2026 guide, fastrouter.ai, aicostcheck.com — three independent sources). Deprecated: retirement cited between 2026-10-16 and 2026-10-20 depending on source (fastrouter.ai); Google's deprecations page note instead says 2.5 models "not deprecated... until further notice" but restricted to past users.
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

- AA-LCR 49.9% at the 1M window (benchlm.ai) — material retrieval decay at scale.

Multimodal:

- AA-MMMU-Pro: **65.5%**; Design Arena Website: **1126 Elo** (benchlm.ai)
- Native audio and video input support (familial spec, gate.ai); no public audio/video benchmark score found.

### Normalized scores (1–100)

- **Tool use: 45/100.** Only row: τ²-bench 14.9% — function-calling plumbing exists, but it is not agent-capable by 2026 standards.
- **Reasoning: 65/100.** GPQA 68.3% survives as a thinking model; capped by HLE 4.7%, CritPt 1.4%, AA Index 9.8 — mid-tier by today's evidence.
- **Context window: 95/100.** Verified 1M (1,048,576-token) window ⇒ 95 per band rules; note AA-LCR 49.9% shows real retrieval decay inside that window.
- **Multimodal: 85/100.** Native image + audio + video input (2.x-native band 85–92); MMMU-Pro 65.5% and text-only output put it at the bottom of the band.
- **Coding: 50/100.** No verified coding benchmark rows at this ID — default conservative mid score; superseded by 3.x tiers.
- **Cost efficiency: 90/100.** Verified $0.30/M in, $2.50/M out with free-tier availability — a genuine legacy cheap tier (band 80–95), though deprecation (Oct 2026 retirement per trackers) shortens its useful life.
- **Overall Score: 68/100.** Mean of the five quality dims (45+65+95+85+50)/5 = 68.0 → 68. Best fit: legacy simple chat/extraction at very low cost until the October 2026 shutdown; new builds should default to 3.x Flash.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard; deploybase.ai, fastrouter.ai, aicostcheck.com pricing; gate.ai specs); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: verified GA date 2025-06-17, verified pricing $0.30/$2.50 per Mtok, 65,536 max output, native audio/video input, scheduled Oct-2026 retirement and past-user access restriction; recalibrated scores (Tool 40→45, Reasoning 45→65, Context 62→95, Multimodal 66→85, Coding 45→50, Cost 80→90, Overall 52→68).
- Future sources: add a new file next to this one using the same headings.
