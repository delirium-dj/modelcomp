# Gemini 2.5 Flash — findings by Kimi K3

- Source: Google / Gemini 2.5 Flash (`gemini-2.5-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash
- **Short description:** Google's 2025-era Flash workhorse — 1M context, low cost, now clearly outclassed (τ²-bench 14.9%, AA-HLE 4.7%). Kept for legacy compatibility.
- **Provider / access:** Google Gemini API (`gemini-2.5-flash`), Vertex AI, AI Studio.
- **Release / knowledge:** Released 2025-06-17 (OpenCode Data, newly verified); knowledge cutoff 2025-01 (OpenCode Data; consistent with the 2.5 generation).
- **IDs:** `google/gemini-2.5-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (OpenCode Data confirms); max output **66K** (OpenCode Data — new).
- **Modalities:** text/image/audio/video/PDF in (OpenCode Data — full family input coverage); text out; tool calls; JSON mode. Reasoning per catalog (benchlm classified base as Non-Reasoning — conflict noted as before).
- **Pricing (as of 2026-10-11):** $0.30/M input, $2.50/M output, $0.03/M cached (OpenCode Data catalog — verifies my "historically ~$0.30/$2.50" note).
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **14.9%** (benchlm.ai)
- Terminal-Bench Hard: **13.6%** success rate (openrouter.ai/google/gemini-2.5-flash/benchmarks via OpenCode Data — new this pass)
- All other agentic rows: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **68.3%** (benchlm.ai)
- HLE (AA-HLE): **4.7%** (benchlm.ai)
- AA-LCR: **49.9%**; CritPt: **1.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **9.8**; BenchLM overall **43/100, #103 of 507**
- AA-Omniscience Index: **−42.6%** — Accuracy **26.1%** / Hallucination Rate **93.0%** (benchlm.ai)
- FrontierMath v2: **4.8%** T1–3 / **4.2%** T4; AA-IFBench: **39.0%** (benchlm.ai)

Coding:

- Aider Polyglot: **55.1%** (aider.chat leaderboards via OpenCode Data — new this pass)
- AA Coding Index: **22.2** (OpenRouter benchmarks via OpenCode Data — new); SciCode: **39.4%** (same)
- SWE-bench / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 49.9% at the 1M window (benchlm.ai) — material retrieval decay; 66K output catalog-verified.

Multimodal:

- AA-MMMU-Pro: **65.5%**; Design Arena Website: **1126 Elo** (benchlm.ai); familial audio+video+PDF input confirmed by catalog

### Normalized scores (1–100)

- **Tool use: 40/100.** Unchanged: τ²-bench 14.9% and TB-Hard 13.6% (new) — not agent-capable anymore.
- **Reasoning: 45/100.** Unchanged: GPQA 68.3% survives; capped by HLE 4.7%, CritPt 1.4%, AA Index 9.8.
- **Context window: 62/100.** Unchanged: 1M window / 66K output verified; LCR 49.9% shows degraded retrieval at scale.
- **Multimodal: 66/100.** Unchanged: MMMU-Pro 65.5% plus familial audio-in (now catalog-confirmed); text-only output caps it.
- **Coding: 45/100.** Unchanged: SWE-bench/LiveCodeBench rows still absent; new measured rows (Aider 55.1%, Coding Index 22.2, SciCode 39.4%) confirm the low placement.
- **Cost efficiency: 80/100.** Verified now ($0.30/$2.50 cached $0.03): legacy cheap Flash tier holds.
- **Overall Score: 52/100.** Mean of the five quality dims (40+45+62+66+45)/5 = 51.6 → 52 (unchanged). Best fit: legacy simple chat/extraction at very low cost; everybody else should move to 3.x Flash.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data `google/gemini-2-5-flash` — release/cutoff/price verified; new independent rows from aider.chat + OpenRouter benchmark tables; benchlm.ai scorecard from first pass). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
