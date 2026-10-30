# Gemini 2.0 Flash — findings by Qwen 3.8 Max

- Source: Google (`gemini-2.0-flash`; id `google/gemini-2.0-flash`; AA `gemini-2-0-flash`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** Google's Feb-2025 Gemini 2.0 Flash — the workhorse that mainstreamed **1M-context, four-modal (text/image/audio/video) input with native text+image output** at rock-bottom pricing ($0.10/$0.40). Non-reasoning base; the reasoning sibling is the separate Gemini 2.0 Flash **Thinking**. **Deprecated and shut down 2026-06-01** (→ Gemini 2.5 Flash); AA v5.0 fully delists it (Intelligence / Speed / Cost / Verbosity all N/A). Historically important for agentic multimodal speed, but nothing new should target it. Best-fit: a historical reference point for the Flash line.

## Model card

- **Name:** Gemini 2.0 Flash (AA renders "Gemini 2.0 Flash (Feb '25)")
- **Short description:** Google's fast, cheap, 1M-context multimodal workhorse (text/image/audio/video in; text+image out) for high-throughput agentic and everyday tasks. The non-reasoning base — distinct from Gemini 2.0 Flash **Thinking**, **Lite**, and **Experimental**, and from the 2.5/3.x Flash successors.
- **Provider / access:** Google AI Studio / Gemini API `google/gemini-2.0-flash`; Vertex AI. OpenCode `opencode/gemini-2.0-flash`. No Free ID on Zen (`noFreeId: true`). **Shut down 2026-06-01** (both `gemini-2.0-flash` and `-lite` removed).
- **Release / knowledge:** Released 2025-02-05 (GA; experimental Dec 2024). Knowledge cutoff June 2024 (AA spec + FAQ).
- **IDs:** `google/gemini-2.0-flash` (no Free ID exists on Zen)
- **Context window:** 1,048,576 total / 8,192 max output (meta; AA confirms "1M"). Output cap is meta-sourced (AA does not surface it).
- **Modalities:** Input **text, image, speech (audio), video** → output **text AND image** (native image generation; AA-confirmed). Non-reasoning. Native tool use (function calling, Google Search grounding, code execution). **Meta lists "text out" only — AA corrects this to text+image output.**
- **Pricing (historical, as of 2026-10-30):** $0.10 / $0.40 per 1M in/out (Google AI Studio; audio in $0.70); Vertex AI $0.15 / $0.60. Independently corroborated (Gemini 2.5 Flash-Lite "priced identically at $0.10/$0.40"). No free tier now (shut down).
- **Architecture:** Proprietary, closed weights; parameter count undisclosed by Google.

### Raw benchmarks found

> AA fully delists the model on Intelligence Index v5.0 (not among the 29 of 718 scored; every eval chart reads "No publicly available API"). Base-variant vendor numbers are sparse because Google's headline Gemini 2.0 Flash results were for the separate **Thinking** variant.

Agent / tool use:

- Native tool use (function calling, Google Search grounding, code execution; foundations for Project Mariner / Astra) — architectural, **no verified independent agentic benchmark** on AA v5.0 (delisted)
- Terminal-Bench / GDPval-AA / AutomationBench-AA: N/A (delisted)

Reasoning / knowledge:

- AA Intelligence Index: **N/A** on v5.0 (delisted; historical pre-v5 value was below-median, not revived)
- GPQA Diamond / AIME: **NOT credited** — the widely-circulated 73.3% AIME / 74.2% GPQA Diamond belong to Gemini 2.0 Flash **Thinking**, a different (reasoning) variant

Coding:

- SWE-bench Verified (mini-SWE-agent harness): **13.52%** (swebench.com leaderboard, 2025-07-26 — minimal single-agent scaffold)
- SWE-bench Verified (full agent) / LiveCodeBench / SciCode: no cleanly-verified base-variant public score found (successor Flash numbers, e.g. Gemini 3 Flash 78%, NOT reattributed)

Long context:

- 1M window is spec; no independently verified long-context retrieval (MRCR / RULER) score surfaced on the delisted AA page.

> **Meta-verification:** scaffolded `meta.json` is largely accurate — shutdown 2026-06-01 ✓ (2 independent sources), pricing $0.10/$0.40 ✓, 1M context ✓, "native tool use" ✓. **One correction:** meta lists output modality as "text out," but AA confirms **text AND image output** (native image generation). Reattribution guards honored: Thinking / Lite / Experimental variants and 2.5/3.x Flash successors are separate models.

### Normalized scores (1–100)

- **Tool use: 75/100.** Pioneered native agentic tool use (function calling, Search grounding, code execution; Mariner/Astra foundations), but zero verified independent agentic benchmark survives on delisted AA v5.0 — capped by evidence, not capability.
- **Reasoning: 72/100.** Non-reasoning base; AA Index N/A (delisted), historical pre-v5 Index below median. The strong AIME/GPQA numbers are the Thinking variant's and are excluded.
- **Context window: 86/100.** 1M total (1,048,576) — top-tier window, multimodal-proven at launch; the modest 8,192 max output and no fresh long-context retrieval proof keep it off the very top.
- **Multimodal: 85/100.** Broadest input tier — text + image + audio + video — **plus native image output** (AA-confirmed). One of the first mainstream models with native multimodal generation.
- **Coding: 71/100.** Only verified figure is mini-SWE-agent 13.52% (minimal harness); no clean base-variant SWE-bench Verified / LiveCodeBench. Modest — coding was not its focus.
- **Cost efficiency: 68/100.** Rock-bottom historical $0.10/$0.40 for a 1M-context four-modal model was exceptional value, but the model is shut down (2026-06-01) and no longer procurable. Not counted in Overall.
- **Overall Score: 78/100.** Mean of the five quality dims (75+72+86+85+71)/5 = 77.8 → 78. Divergence **+2.9** vs curated 75.1, driven by the standout 1M four-modal + native-image-output Multimodal (85) and 1M Context (86). Best-fit: a historical reference for the Flash line — superseded by Gemini 2.5 Flash for any live workload.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-30
- Method: public internet research (Artificial Analysis `gemini-2-0-flash` page, Google/Vertex pricing docs, swebench.com leaderboard, deprecation/migration coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
