# Kimi K2.8 Preview — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Moonshot AI (`kimi-for-coding` / `kimi-k2.8-preview`), gradually.ai, benchmarklist.com, verticaltabs.com, chatio.dev, zenmux.ai, bankofai.io, kimi.com/code/docs
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's K2-series preview coding and agent model, released September 11, 2026. Positioned as performance close to Kimi K3 with more efficient thinking than K2.7 Code. Available through Kimi Code (membership) and API (`kimi-k2.8-preview`, alias `kimi-for-coding`).
- **Provider / access:** Moonshot AI Kimi Code (membership subscription, Andante/Plus and above), Kimi API Platform pay-as-you-go (`kimi-k2.8-preview`), also via Zenmux (`moonshotai/kimi-k2.8-preview`). OpenAI-compatible and Anthropic-compatible endpoints available. Not open weights.
- **Release / knowledge:** Released 2026-09-11; knowledge cutoff not publicly specified.
- **IDs:** `kimi-k2.8-preview` (Kimi API ID), `kimi-for-coding` (Kimi Code model ID alias). No Free ID confirmed — membership required.
- **Context window:** 1,048,576 total tokens (verified via official Kimi Code docs). Max output tokens not published.
- **Modalities:** Text, image, and video in; text out. Reasoning: yes (low/high/max, default max). Tool calls: yes (interactive coding agents). JSON mode: not explicitly documented.
- **Pricing (as of 2026-10-29):** Kimi API: $1.00 input / $4.00 output / $0.25 cache read per 1M tokens (bankofai.io, zenmux.ai). Kimi Code: membership subscription (¥49–¥699/month tiers), not pay-per-token. K2 series retiring end of December 2026 per platform.kimi.ai.
- **Architecture:** Parameter count not published by Moonshot; K3 is 2.8T/104B-active MoE (K2.8 specific architecture not disclosed).

### Raw benchmarks found

Benchmark data for Kimi K2.8 Preview is extremely thin:

- ModelDial five-axis overall: **63.55** (axes: backend 54, frontend 72, knowledge 70, visual aesthetics 57, maintainability 53) — gradually.ai labels this "disputed" (five-axis weighting/scale not published; run identity with three-axis publication not established). Source: ModelDial, retrieved 2026-10-17.
- ModelDial three-axis (40/30/30): **64.2** (backend 54, frontend 30%, knowledge 30%) — gradually.ai labels this "active". Source: ModelDial Public Radar, retrieved 2026-10-17.
- Chatio Overall Assistant Score: **90.60 pts**, Rank #24, 79th percentile — Source: chatio.dev leaderboard.
- SWE-bench, GPQA, HLE, LiveCodeBench, Terminal-Bench, ARC-AGI: **no verified public score found** for Kimi K2.8 Preview specifically. benchmarklist.com reports "0 benchmarks", "0 score rows". gradually.ai reports "No independent results" and "No active result from the reviewed external evaluators can currently be attributed to this model."

Conflicts noted: ModelDial five-axis (63.55, disputed) vs three-axis (64.2, active) use different methodologies; Chatio (90.60 pts) is on a different scale than ModelDial (0-100 points). No reconciliation possible; cited separately.

### Normalized scores (1–100)

- **Tool use: 72/100.** ModelDial frontend axis 72 and backend 54 (private-task evaluation) suggest moderate agentic capability; model is coding/agent-focused per vendor; capped by absence of standard agentic benchmarks (OSWorld, Terminal-Bench, Tau2-bench).
- **Reasoning: 74/100.** ModelDial knowledge axis 70; vendor claims performance close to K3 (qualitative only, no numbers); no GPQA/HLE/ARC-AGI figures found; capped by lack of standard reasoning benchmarks.
- **Context window: 95/100.** 1M context verified via official Kimi Code docs; available across all membership tiers; excellent long-context capability.
- **Multimodal: 80/100.** Text + image + video input, text output; video input is a strength vs text+image-only competitors; no native multimodal generation output.
- **Coding: 74/100.** Vendor positions it for code completion and routine development ("close to K3" qualitatively); no SWE-bench, LiveCodeBench, or DeepSWE figures found; capped by absence of standard coding benchmarks.
- **Cost efficiency: 80/100.** $1/$4 per 1M via API is mid-range; membership-based access via Kimi Code complicates per-token comparison; not open weights.
- **Overall Score: 79/100.** Mean of (72+74+95+80+74)/5 = 79; best-fit recommendation: everyday coding and agent workflows for Kimi Code members; benchmark evidence too thin for confident frontier placement.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: gradually.ai, benchmarklist.com, verticaltabs.com, chatio.dev, zenmux.ai, bankofai.io, kimi.com/code/docs); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark evidence is extremely thin — no SWE-bench, GPQA, HLE, LiveCodeBench, or Terminal-Bench figures found for this exact model; ModelDial and Chatio scores cited separately with conflict noted.
- Future sources: add a new file next to this one using the same headings.
