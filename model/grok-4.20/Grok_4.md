# Grok 4.20 — findings by Grok 4 (xAI/grok-4)

- Source: xAI (`xai/grok-4.20` / `x-ai/grok-4.20`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (also Grok 4.20 0309 / 0309 v2 Reasoning; Multi-Agent and Non-Reasoning variants exist)
- **Short description:** xAI (SpaceXAI) proprietary flagship reasoning LLM from the Grok 4 series with multi-agent options, strong tool-calling, low hallucination rates, and large context. Primary use cases include agentic workflows, coding, long-document analysis, and general chat/search-augmented tasks.
- **Provider / access:** xAI API (`grok-4.20` / `grok-4.20-0309`), OpenRouter (`x-ai/grok-4.20`), Oracle OCI, Snowflake, and others. Supports Chat Completions-style and Responses API with reasoning parameter.
- **Release / knowledge:** Public beta ~2026-02-17; API/GA variants ~2026-03-09 to 2026-03-31 (v2 updates into April 2026). Knowledge cutoff 2025-09-01 (or ~Aug 31 2025).
- **IDs:** `xai/grok-4.20`, `x-ai/grok-4.20`, `xai-grok-4-20`, `grok-4.20-0309` (no dedicated Free-tier ID confirmed on OpenCode Zen or equivalent free hosts).
- **Context window:** 2.0M tokens total (max output up to ~1.8M); verified via CloudPrice, OpenRouter, Artificial Analysis, and provider docs.
- **Modalities:** Text + image + PDF in; text out; reasoning yes (configurable/enabled variants); tool/function calling yes; structured outputs / JSON mode yes. No native audio/video in or non-text out for the core model.
- **Pricing (as of 2026-09-25):** ~$1.25 / 1M input, $2.50 / 1M output (cached ~$0.20); higher tier rates apply above ~200K tokens on some providers. Paid only (no free API tier found); privacy subject to provider terms.
- **Architecture:** Proprietary closed-weights (no public param count or MoE details verified for this exact ID).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Terminal-Bench Hard ~37.9–40.9% Artificial Analysis for Reasoning variants; Terminal-Bench 2.0 ~47.1% secondary; Vals Terminal-Bench 2.1 ~44.2%)
- Tau3-Banking / Tau2-Bench: **93.0–96.5%** (τ²-Bench Telecom, Artificial Analysis Reasoning variants)
- GDPval-AA: **1179 Elo** (Artificial Analysis for 0309 v2 Reasoning; mid-pack)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.5–91.1%** (Artificial Analysis Reasoning / 0309 v2 Reasoning; ~88.6% Vals)
- HLE: **32.4–34.5%** (Artificial Analysis Reasoning / 0309 v2; ~31.6% w/o tools secondary)
- LCR / MLCR: **67.7–69.0%** (AA-LCR, Artificial Analysis Reasoning)
- CritPt: **6.0–6.6%** (Artificial Analysis Reasoning)
- Artificial Analysis Intelligence Index / BenchLM overall: **25–26 / ~#105** (AA Index v4.x for 0309 v2 Reasoning; earlier snapshots ~48–49 pre-rescale; BenchLM ~59.7 estimated)
- Omniscience Accuracy / Hallucination Rate: **27.5–28.9% / non-hallucination ~77.6–82.6%** (AA-Omniscience, Artificial Analysis Reasoning; lowest hallucination noted at release)

Coding:

- SWE-bench Verified / SWE-Pro: **76.7%** (BenchLM / secondary; Vals ~72.2–74.2%; one report of ~80.8% independent later run)
- LiveCodeBench: **84.3%** (Vals secondary)
- SciCode / AA-SciCode: **~0.5 / ~46%** (CloudPrice / secondary AA)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public DeepSWE score found** (AA Coding Index secondary ~41)

Long context:

- AA-LCR 67.7–69.0% (Artificial Analysis); no verified MRCR / RULER / GraphWalks retrieval % at 512K+ reported

### Normalized scores (1-100)

- **Tool use: 62/100.** Strong Tau2-Telecom (93%+) but Terminal-Bench Hard ~38–41% and GDPval-AA Elo 1179 (mid) cap it below frontier (~88%+ TB / 50%+ Tau3 / 1750+ GDPval).
- **Reasoning: 78/100.** GPQA Diamond 88.5–91.1% and HLE ~34% place it solid mid-to-high (frontier 90%+ GPQA / 40%+ HLE / Index 60+); AA Index ~26 and CritPt ~6.5% prevent higher.
- **Context window: 100/100.** Verified 2.0M total (tier >=1M = 95–100; 100 awarded for full 2M support).
- **Multimodal: 65/100.** Text + image + PDF in, text out (no video/audio in or non-text out).
- **Coding: 72/100.** SWE-bench Verified ~76.7% and LiveCodeBench ~84% solid but below frontier DeepSWE 74%+ / TB 85%+ / SciCode 55%+ thresholds.
- **Cost efficiency: 88/100.** ~$1.25/$2.50 per 1M maps near the ~$1.25/$4.25 reference (~88).
- **Overall Score: 75.4/100.** Mean of five non-cost dims (half-up); best-fit for long-context agentic coding and low-hallucination reasoning where 2M window and Tau2 strength matter more than pure frontier agent/coding scores.

---

## Signature

- Provided by: **Grok 4 (xAI/grok-4)** — 2026-09-25
- Method: public internet research (CloudPrice, OpenRouter, Artificial Analysis aggregates, BenchLM, Epoch AI, xAI-related docs/announcements); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
