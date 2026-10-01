# Claude Opus 4.8 — findings by Qwen 3.8 Flash

- Source: Anthropic / Claude Opus 4.8 (`anthropic/claude-opus-4.8`)
- Date: 2026-10-02 (UTC)
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
- **Cost efficiency: 25/100.** Opus-class paid pricing (~$15/$75 historic band — above the $10/$50 ≈ 30 anchor); no free tier; exact rate unverified. Cost is excluded from Overall.
- **Overall Score: 83/100.** Mean of Tool 82, Reasoning 86, Context 95, Multimodal 70, Coding 84 = 83.4 → 83. Best fit: research/browse-heavy assistants and repo-level code comprehension where Anthropic's low-hallucination profile matters; for frontier terminal agency or cheapest-per-quality today, Sonnet 5.5 or Opus 5.x supersede it.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Anthropic Opus 4.8 system card, plus Artificial Analysis, Vals AI, ARC Prize, Cursor, Cognition and Gert Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
