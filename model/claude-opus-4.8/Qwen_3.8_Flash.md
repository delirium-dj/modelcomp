# Claude Opus 4.8 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Opus 4.8 (`anthropic/claude-opus-4.8`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — pricing verified at $5/$25 (historic $15/$75 assumption corrected) + legacy-not-deprecated status + AA v5 succession, Cost 25→45, Overall unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's flagship 4.8 reasoning model with advanced multi-step execution, deep code architecture comprehension, and long-horizon thinking — strong browsy/search agency and clean knowledge scores, now a generation behind the Opus 5 / Sonnet 5.5 line.
- **Provider / access:** Anthropic API (`claude-opus-4.8`); no OpenCode Zen free ID (`noFreeId`). Reasoning + tool calls.
- **Release / knowledge:** 2026 (Opus 4.8 system card); knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-opus-4.8`.
- **Context window:** BenchLM lists **1M**; curated meta says 200K — conflicting, scored on BenchLM's confirmed field (see Context note).
- **Modalities:** text, image in; text out; reasoning on; tool calls. No audio/video, no non-text output.
- **Pricing (as of 2026-10-02):** Paid-tier Opus-class pricing (exact rate not in curated meta; historic Opus band ≈ $15/$75 per 1M).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (55 of 618 rows), citing the Anthropic Claude Opus 4.8 system card, Artificial Analysis, Vals AI, ARC Prize, Cursor, Cognition and Gert Labs (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (system card; Vals 71.9%) — TB 3.0 only 21.1%
- BrowseComp **84.3%**; DeepSearchQA **93.1%**; OSWorld-Verified **83.4%** (but OSWorld 2.0 20.6%)
- τ²-bench **94.4%** (AA); MCP Atlas 82.2%; Toolathlon 59.9%; Finance Agent v2 53.9%
- GDPval-AA **1593** (AA normalized 46.9%); AA Agentic Index 42.6%; Gert Labs 72.97%; ResearchClawBench 21.1%

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **93.6%** (AA 92.0, Vals 92.4); HLE **57.9%** (w/o tools 49.8%, AA 48.7%)
- ARC-AGI-2 **72.1%** (ARC Prize) — ARC-AGI-3 only 1.5%; AA-LCR 77.7%; CritPt 20.9%
- Intelligence Index **41.8**; MMLU-Pro (Vals) 89.6; Omniscience Accuracy / Hallucination: 48.8% / **39.3%** (low); IFBench 62.2

Coding:

- SWE-bench Verified **88.6%** (also Vals 88.6); SWE Multilingual 84.4%; LiveCodeBench (Vals) **87.8%**
- SWE-bench Pro 69.2%; AA Coding Index 74.3%; Terminal-Bench 2.1 74.6%; no DeepSWE row
- AA-SciCode 54.4% (under 55 ref); FrontierCode 1.1 46.5%; SWE Multimodal 38.4%; CursorBench 3.1/3.2 58.4/62.3

Multimodal / long context:

- CharXiv **89.9** (w/o tools 80.5); ScreenSpot Pro **87.9**; OfficeQA Pro 66.2; Design Arena 1264
- AA-LCR 77.7 at the claimed 1M window (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** τ²-bench 94.4%, DeepSearchQA 93.1%, BrowseComp 84.3% and OSWorld-Verified 83.4% are standout, but TB 2.1 74.6% is well under the 88 ref, TB 3.0 21.1%, GDPval-AA 1593 and Agentic Index 42.6 show its long-horizon agency is a generation behind.
- **Reasoning: 86/100.** GPQA-Diamond 93.6%, HLE 57.9% (49.8% no-tools) and ARC-AGI-2 72.1% clear the bars with a low 39.3% hallucination rate; Index 41.8, ARC-AGI-3 1.5% and CritPt 20.9% cap it.
- **Context window: 95/100.** Scored on BenchLM's confirmed 1M field (curated meta's 200K flagged as conflicting); AA-LCR 77.7 is supportive and no ≥98% retrieval metric is published, so the band floor. If the true window is 200K this dim would drop to the 50–64 band — verify before relying on it.
- **Multimodal: 70/100.** Text+image in / text out — capped at the +image-in band despite genuinely strong visual rows (CharXiv 89.9, ScreenSpot Pro 87.9); no audio/video in and no non-text output.
- **Coding: 84/100.** SWE-bench Verified 88.6%, LiveCodeBench 87.8% and SWE Multilingual 84.4% are strong; SWE-bench Pro 69.2%, TB 74.6%, SciCode 54.4% (under ref), no DeepSWE row and SWE Multimodal 38.4% keep it below the 90 band.
- **Cost efficiency: 45/100.** (Revised by the 2026-11-03 second pass from 25/100: the "historic Opus band ≈ $15/$75" assumption was wrong — Opus 4.8 shipped and is still served at **$5/$25 per 1M**, the same price as Opus 4.5–4.7, per Morph and Anthropic-docs-sourced writeups.) $5/$25 sits midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors; no free tier. Cost is excluded from Overall.
- **Overall Score: 83/100.** Mean of Tool 82, Reasoning 86, Context 95, Multimodal 70, Coding 84 = 83.4 → 83. Best fit: research/browse-heavy assistants and repo-level code comprehension where Anthropic's low-hallucination profile matters; for frontier terminal agency or cheapest-per-quality today, Sonnet 5.5 or Opus 5.x supersede it.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing/spec — https://www.morphllm.com/opus-4-8 (**"Claude Opus 4.8 shipped May 28, 2026 at $5/M input and $25/M output, the same price as Opus 4.5, 4.6, and 4.7. It has a 1M-token context"**) and https://sagnikbhattacharya.com/blog/claude-opus-4-8-explained (**"a legacy model but not deprecated: claude-opus-4-8 is still served at $5 / $25, with retirement not sooner than 28 May 2027"**) · Anthropic — https://www.anthropic.com/news/claude-opus-5 (Opus 5, 2026-07-24: "greatly improved performance for the same cost as its predecessor, Opus 4.8"), https://platform.claude.com/docs/en/models/opus-5-5/whats-new-opus-5-5 (Opus 5.5 at **$4/$20**, below Opus 5's $5/$25) and https://platform.claude.com/docs/en/about-claude/model-deprecations (Opus 4.1 retired 2026-08-05; **4.8 not on the retiree list**) · Index — https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5 (v5 published 2026-10-27; **Opus 5.5 max leads at 58**) and https://benchlm.ai/benchmarks/artificialanalysis (2026-10-29: Opus 4.8 **41.8%** — matches this report's captured row) · launch record — https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks (was #1 at 61.4 on the pre-v5 scale on 2026-05-28).

**What moved and how it was resolved:**

1. **Pricing corrected (the one real change).** Pass 1 scored Cost 25 from an unverified "historic Opus band ≈ $15/$75" guess. Two independent sources confirm the actual served price is **$5/$25 per 1M** (unchanged since launch, same as Opus 4.5–4.7). Cost re-anchored to 45 (midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 references). Because Cost is excluded from Overall, the Overall is unaffected.
2. **Context-window conflict resolved in favor of 1M.** Morph confirms the 1M-token context that BenchLM listed, so the pass-1 caveat ("if the true window is 200K this dim would drop") is retired; Context stays 95 with higher confidence.
3. **Lifecycle: legacy, not deprecated.** Opus 4.8 was #1 at launch (May 28) but Opus 5 (Jul 24) and Opus 5.5 (now $4/$20) superseded it within months; Anthropic's deprecations page retires Opus 4.1 (Aug 5) while 4.8 remains served with retirement no sooner than 2027-05-28. No routing/shutdown event like the `gemini-3-pro-preview` case — curation flag: keep ranked, mark as previous generation (pass-1 text already says so).
4. **AA Index v5 (2026-10-27) — scale drift, bands unchanged.** The current 41.8 reading matches the row pass 1 already captured (BenchLM 2026-10-29), so nothing moved to re-score; the 61.4 launch figure was the older index scale. v5's 9-eval basket (Terminal-Bench 4.0 etc.) re-anchors the leaderboard around Opus 5.5 at 58 — a methodology change, not an Opus 4.8 capability change; no quality dimension band adjusted. τ²-bench 94.4%, SWE-bench Verified 88.6%, LiveCodeBench 87.8%, GPQA-D 93.6% rows stand uncontradicted.

**Scores changed by this pass:** Cost efficiency **25 → 45** (verified $5/$25 pricing replacing the wrong $15/$75 assumption). All five quality dims unchanged: Tool 82, Reasoning 86, Context 95, Multimodal 70, Coding 84. Overall = half-up mean(82, 86, 95, 70, 84) = 417/5 = 83.4 → **83, unchanged** (Cost is excluded by methodology).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Opus 4.8 system card, plus Artificial Analysis, Vals AI, ARC Prize, Cursor, Cognition and Gert Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Morph, Anthropic news/docs, Artificial Analysis, BenchLM, launch-record writeups); pricing corrected to verified $5/$25 (**Cost 25→45**), 1M window conflict resolved, AA v5 treated as scale drift — **no quality dimension changed and Overall remains 83**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
