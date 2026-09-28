# Gemini 3.1 Flash — findings by Qwen 3.8 27B

- Source: Google (`google/gemini-3.1-flash`; Gemini API / Google AI Studio / Vertex AI)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Google's efficient Gemini 3.1-generation Flash model: budget-priced (2026 refresh of the Gemini 3 Flash lineage) multimodal reasoning model with 1M context and very fast first-token latency.
- **Provider / access:** Gemini API / Google AI Studio / Vertex AI (`gemini-3.1-flash`). Free tier on Google AI Studio; repo meta notes a Free tier on OpenCode Zen as well.
- **Release / knowledge:** First tracked pricing data May 8, 2026 (userightai.com daily tracker); exact GA date not verified. Sits between Gemini 3 Flash (Dec 2025) and the 3.5+ Flash generation.
- **IDs:** `google/gemini-3.1-flash` (repo registry / Gemini API). Free-tier ID available per repo meta.
- **Context window:** 1,048,576 tokens (1M) — userightai.com and repo `meta.json`.
- **Modalities:** Text, image, audio, video in (userightai); repo meta adds PDF in; text out. Controllable thinking levels (family: minimal/low/medium/high); tool calls; family features include Google Search grounding, URL context, code execution.
- **Pricing (as of 2026-09-28):** $0.50 input / $3.00 output per 1M tokens (userightai.com, unchanged since May 2026); free tier available.
- **Architecture:** Proprietary (Google); parameter count not disclosed.

### Raw benchmarks found

> Evidence note: independent coverage of the base 3.1 Flash is thin. The only
> model-specific published numbers found are userightai.com's "published
> benchmarks" block, which runs well below the sibling Gemini 3.1 Flash-Lite
> (GPQA 86.9% per aimlapi.com) and resemble Gemini 2.5 Flash-era figures —
> likely a default/non-thinking configuration or stale tracking. Treated as
> verified-public-but-provisional. Cross-check: predecessor Gemini 3 Flash
> (Dec 2025, same $0.50/$3.00 price) scored 71 on the AA Intelligence Index
> (artificialanalysis.ai).

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- OSWorld / AutomationBench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **51%** (userightai.com "published benchmarks"; flagged: well below sibling Flash-Lite's 86.9% — likely non-thinking config or stale)
- MMLU: **84%** (userightai.com)
- MATH: **78.4%** (userightai.com)
- Arena Elo: **1,265** (userightai.com)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no 3.1 Flash entry found; predecessor Gemini 3 Flash scored **71** (artificialanalysis.ai, 2025-12-17)

Coding:

- SWE-bench: **35%** (userightai.com "published benchmarks"; flagged: near Gemini 2.5 Flash-era level, inconsistent with 2026 Flash lineage — provisional)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks retrieval reported; 1M window per userightai.com.

### Normalized scores (1–100)

- **Tool use: 60/100.** No direct agentic measurements found (TB2.1/Tau3/GDPval/Claw all N/A); functional tool-calling at very high throughput (2.5× faster TTFT than 2.5 Flash per userightai.com) and the predecessor's AA Index 71 support mid-tier tooling; capped for lack of evidence.
- **Reasoning: 66/100.** Verified-published GPQA 51% + MMLU 84% + MATH 78.4% (userightai.com) sit in the mid band; the flagged inconsistency with sibling models and the predecessor's AA Index 71 suggest upside in thinking mode, but only the published numbers are scored.
- **Context window: 95/100.** 1M (1,048,576) window is top tier; no retrieval measurement found, so the ≥1M band floor applies.
- **Multimodal: 90/100.** Native text + image + audio + video input (userightai.com; repo meta adds PDF) with text out — audio-in band.
- **Coding: 55/100.** Published SWE-bench 35% (userightai.com) is the only coding number; it is low for the 2026 Flash lineage and flagged as provisional; no current SWE-bench Verified/LiveCodeBench found.
- **Cost efficiency: 93/100.** $0.50/$3.00 per 1M with a free tier sits just above the ~$0.60/$2.20 ≈ 92 reference; 2.5× faster TTFT improves effective cost.
- **Overall Score: 73/100.** (60 + 66 + 95 + 90 + 55) / 5 = 73.2 → 73; best-fit for high-volume multimodal/long-context work where speed and price dominate; expect to verify coding claims before production.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
- Method: public internet research (userightai.com model page + daily price tracker, aimlapi.com Flash-Lite review with family table, artificialanalysis.ai Gemini 3 Flash article); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
