# Gemini 3.1 Pro — findings by Mimo V2.6 Flash

- Source: Google DeepMind/`gemini-3.1-pro`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's February 2026 flagship reasoning model — the "0.1" refresh of Gemini 3 Pro with large gains on ARC-AGI-2, GPQA, and agentic coding while holding $2/$12 pricing. Not an alias of Gemini 3 Pro (measurably stronger evals).
- **Provider / access:** Google AI Studio / Gemini API (Chat Completions-style `generateContent`), Vertex AI, Gemini CLI; also surfaced as `google/gemini-3.1-pro` and free-tier access on OpenCode Zen. Free tier available on AI Studio; paid API on Google's price list.
- **Release / knowledge:** 2026-02-19 (DeepMind model card / release trackers); knowledge cutoff not separately published for 3.1 Pro in the sources reviewed.
- **IDs:** `gemini-3.1-pro` (Google API; often `gemini-3.1-pro-preview` at launch); Zen `google/gemini-3.1-pro`.
- **Context window:** 1M tokens input common tier (Google pricing tables; >200K billed at a higher tier implies long-window support); 64K max output reported in site metadata / model-card notes. Verified via Google pricing tiers and model-card eval tables (MRCR v2 reported at 128K and 1M points).
- **Modalities:** text, image, audio, video, PDF in; text out; thinking/adaptive reasoning (low/medium/high); tool calls; structured output supported.
- **Pricing (as of 2026-09-23):** $2.00 / $12.00 per 1M in/out up to 200K context; $4.00 / $18.00 over 200K context; context-cache hits ~$0.50 input. Free tier on AI Studio (rate-limited). Paid.
- **Architecture:** proprietary closed weights.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **70.3%** (AI Release Tracker / Google-published suite)
- Terminal-Bench 2.0: **68.5%** (DeepMind model card, Terminus-2 harness)
- Tau2-Bench: **95.6%** (Dataconomy aggregated card; harness as listed there)
- MCP Atlas: **78.2%** (AI Release Tracker; Dataconomy lists 69.2% — harness/version drift, both noted)
- Toolathlon: **48.8%** (AI Release Tracker)
- OSWorld-Verified: **76.2%** (AI Release Tracker)
- GDPval-AA: **1314** (AI Release Tracker; Dataconomy 1317)
- BrowseComp: **85.9%** (AI Release Tracker / DeepMind suite)
- IFBench: **77.1%** (Dataconomy)
- Claw-Eval / ClawProBench: **no verified public score found**
- APEX-Agents: **33.5%** (Dataconomy; topped Mercor leaderboard at launch per press)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (DeepMind model card, no tools)
- HLE: **44.4%** no tools / **51.4%** search+code (DeepMind model card)
- ARC-AGI-2: **77.1%** (DeepMind model card, ARC Prize verified)
- FrontierMath (T1–3): **36.9%** (AI Release Tracker)
- LCR: **82%** (Dataconomy)
- AA Intelligence Index: **57.2** (Dataconomy); Coding Index **55.5**
- Omniscience / hallucination: **no verified public score found** (AA-Omniscience not in the rows reviewed)

Coding:

- SWE-bench Verified: **80.6%** (DeepMind model card, single attempt)
- SWE-bench Pro (Public): **54.2%** (DeepMind model card)
- LiveCodeBench Pro: **2887 Elo** (Google / MetricNexus)
- SciCode: **58.7%** (Dataconomy)
- DeepSWE 1.1: **12%** (AI Release Tracker — atypical vs SWE-V; listed as published, possible harness mismatch)
- Next.js Evals: **75%** (AI Release Tracker)
- MLE-Bench: **42.6%** (AI Release Tracker)
- Vibe Code Bench: **no verified public score found**

Long context:

- MRCR v2 (8-needle) 128K average: **84.9%**; 1M pointwise: **26.3%** (AI Release Tracker / Google) — strong at 128K, soft at 1M pointwise.
- RULER: **no verified public score found**

Multimodal:

- MMMU-Pro: **80.5%** (DeepMind / Dataconomy)
- CharXiv Reasoning: **83.3%** (AI Release Tracker)
- Audio/video/PDF input confirmed in model card; non-text output: none.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 70.3 / TB2.0 68.5, Tau2 95.6, MCP Atlas 78.2, OSWorld 76.2, GDPval-AA 1314 — frontier tool/OS competence; capped below mid-90s by Toolathlon 48.8 and GDPval still trailing Claude Opus-class leaders.
- **Reasoning: 95/100.** GPQA 94.3 and ARC-AGI-2 77.1 were top-at-release; HLE 44.4–51.4 and Index 57.2 confirm depth — capped only by HLE-with-tools still under top Fable/Opus-tier 60%+ results.
- **Context window: 96/100.** 1M production window (≥1M tier 95–100); MRCR 84.9% at 128K verifies real retrieval, 1M pointwise 26.3% keeps it from a perfect 100. (Site meta lists 2M / 64K out — even at 2M the tier stays 95–100; 64K output is a noted cap.)
- **Multimodal: 88/100.** Text/image/audio/video/PDF in with MMMU-Pro 80.5 and CharXiv 83.3; text-only out and no audio out keeps it under 90+.
- **Coding: 90/100.** SWE-V 80.6 ties Opus 4.6-class, SWE-Pro 54.2 and LCB Pro 2887 are solid; capped by TB gap vs GPT-5.3-Codex (77.3 TB2.0) and the anomalous DeepSWE 12% row.
- **Cost efficiency: 74/100.** $2/$12 paid (≤200K) sits between the ~$1.25/$4.25≈88 and $3/$15≈60 anchors; free AIStudio tier and cache pricing improve practical cost but the evaluated path is paid standard pricing.
- **Overall Score: 92/100.** Mean of Tool 90 + Reasoning 95 + Context 96 + Multimodal 88 + Coding 90 = 459/5 = 91.8 → **92** (best-fit: top all-around paid pick when free-tier quotas or $2/$12 budget fit — strongest GPQA/ARC profile in this class).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (DeepMind model card, AI Release Tracker, Dataconomy, MetricNexus, NxCode); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
