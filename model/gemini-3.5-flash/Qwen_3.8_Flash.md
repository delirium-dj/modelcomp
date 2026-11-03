# Gemini 3.5 Flash — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3.5 Flash (`google/gemini-3.5-flash`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — paid rate verified $1.50/$9 (Cost 92 provisional→verified) + TB row corroborated + family succession noted, bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** The entry of the modern 3.x Flash line — a 1M-context multimodal model (text/image/audio/PDF in) with a comparatively high Intelligence Index and solid τ²-bench tool use, but weak long-context retrieval at full length (MRCR 1M 26.6%) and a high hallucination rate.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.5-flash`); free tier on AI Studio / OpenCode Zen with standard rate limits, plus a paid tier. Reasoning + tool calls.
- **Release / knowledge:** 2026 (Google DeepMind Gemini 3.5 Flash launch); knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.5-flash`.
- **Context window:** 1,048,576 (1M) total (curated meta; BenchLM confirms 1M).
- **Modalities:** text, image, audio, PDF in; text out; reasoning on; tool calls. No video in, no non-text output.
- **Pricing (as of 2026-10-02):** Free tier (AI Studio / OpenCode Zen); exact paid-tier rates not published in curated meta.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (49 of 618 rows; 63.93/100, #41 of 645), citing the Google DeepMind Gemini 3.5 Flash launch, Artificial Analysis, Vals AI, Epoch AI, Cursor, OpenRouter and Gert Labs (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- τ²-bench **95.3%**; MCP Atlas **83.6%**; OSWorld-Verified 78.4%; Toolathlon 56.5%
- Terminal-Bench 2.1 **76.2%** (Vals 74.2%) — under the 88 frontier ref
- GDPval-AA **1345** (normalized 42.2%); Finance Agent v2 57.9%; APEX-Agents-AA 47.1%
- AA EnterpriseOps-Gym 50.1%; AA Agentic Index **27.3%**; ResearchClawBench 18.0%

Reasoning / knowledge:

- Intelligence Index **50.2** (well above the 3.6/3.7 Flash siblings); GPQA-Diamond 92.2/92.7%; HLE 40.2% (AA 42.7%)
- ARC-AGI-2 **72.1%**; MMLU-Pro (Vals) 89.5%; IFBench 76.3%; CritPt 13.1%
- FrontierMath v2 Tiers 1-3 38.97% / Tier 4 14.58% (Epoch AI)
- Omniscience Index 21.2 / Accuracy 51.9% / Hallucination **60.7%** — elevated guessing rate

Coding:

- LiveCodeBench (Vals) **87.6%**; SWE-bench (Vals) 78.8%; AA Coding Index 70.1%
- SWE-bench Pro 55.1%; AA-SciCode 53.9% (under the 55 ref); Vibe Code 48.68%; CursorBench 3.2 48.8%

Multimodal / long context:

- CharXiv **84.2%**; AA-MMMU-Pro 84.3%; Blueprint-Bench 2 33.6% (weak); Design Arena Website 1273
- **MRCR 1M only 26.6%** and MRCRv2 77.3% — retrieval collapses at full 1M length (AA-LCR 69.3).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 77/100.** τ²-bench 95.3% and MCP Atlas 83.6% are strong tool-orchestration signals, but Terminal-Bench 2.1 76.2% sits under the 88 ref, GDPval-AA 1345 (normalized 42.2%) misses the 1750 bar and AA Agentic Index 27.3% / ResearchClawBench 18.0% keep it mid-tier.
- **Reasoning: 80/100.** A high Intelligence Index 50.2 with GPQA-Diamond 92.7%, ARC-AGI-2 72.1%, MMLU-Pro 89.5% and HLE clearing the 40% bar are genuinely strong; the 60.7% Omniscience hallucination rate and mid CritPt 13.1% pull it back.
- **Context window: 88/100.** The nominal 1M window meets the ≥1M tier, but demonstrated retrieval collapses at length (MRCR 1M 26.6%, MRCRv2 77.3%, AA-LCR 69.3) — well under the ≥98%-at-512K+ standard, so below the 95 floor.
- **Multimodal: 88/100.** Text+image+audio+PDF in / text out with strong grounded visual work (CharXiv 84.2, MMMU-Pro 84.3) — audio input lifts it into the 90-band, but Blueprint-Bench 2 33.6% and no video/non-text output hold it at the floor.
- **Coding: 74/100.** LiveCodeBench 87.6% and SWE-bench 78.8% (Vals) are good, but SWE-bench Pro 55.1%, SciCode 53.9% (under ref), Coding Index 70.1%, Vibe Code 48.68% and CursorBench 48.8% drag it below the 3.6-tier coding.
- **Cost efficiency: 92/100.** Free tier on AI Studio / OpenCode Zen plus verified Flash-class paid pricing — second pass (2026-11-03) fills pass 1's "exact paid rates not published" gap: **$1.50 in / $9 out per 1M (OpenRouter), with a 90% cached-input discount (Artificial Analysis)** — well under the $3/$15 ≈ 60 anchor alongside a genuine free tier, so the near-top placement stands, now on verified numbers. Cost is excluded from Overall.
- **Overall Score: 81/100.** Mean of Tool 77, Reasoning 80, Context 88, Multimodal 88, Coding 74 = 81.4 → 81. Best fit: broad multimodal QA and strong on-length reasoning at a free/low price where you control the context to well under 1M (retrieval fails at full length); for long-document agents or heavy coding, the 3.7/3.8 Flash siblings are safer.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://openrouter.ai/google/gemini-3.5-flash (**"In / Out Price $1.50 / $9 per 1M … Context 1.0M … Released May 19, 2026"**) and https://artificialanalysis.ai/articles/gemini-3-5-flash-everything-you-need-to-know (launch profile: **"scores 55 on the Artificial Analysis Intelligence [Index] … with a 90% discount for cached input tokens"**) · lifecycle — https://ai.google.dev/gemini-api/docs/deprecations (Google's deprecation schedule, page updated 2026-10-22; **no shutdown entry found for gemini-3.5-flash itself**) and https://www.layer3labs.io/guides/gemini-model-deprecations (**"Ten preview models face retirement between October 22, 2026, and November 17, 2026"** — watch-list context) · corroboration — https://poloapi.com/poloapi-blog/Gemini-3.5-Flash-Scores-76.2-per-on-Terminal-Bench-2-1 (**"76.2% on Terminal-Bench 2.1, Outperforming Its Own Pro Model"** — matches the captured row) and https://codingfleet.com/blog/gemini-3-1-pro-vs-gemini-3-5-flash/ ($9/1M, 152 tok/s, beats 3.1 Pro on agentic suites) · succession — https://llmlearner.com/compare/gemini-3-5-flash-vs-gemini-3-8-flash (**"Across 36 comparable benchmarks, Gemini 3.8 Flash has better reported results on 33"**) and https://theaicommand.com/ai-news/gemini-3-5-flash-surface-lifecycle-address (surface-lifecycle discussion).

**What moved and how it was resolved:**

1. **Paid pricing gap closed (Cost stays 92, now verified).** Pass 1 scored near the top of the band on the free tier alone with the paid rate unpublished. OpenRouter and AA now document **$1.50/$9 per 1M with 90% cached-input discount** — comfortably under the $3/$15 ≈ 60 anchor, so 92 converts from provisional to verified with no movement. Cost is excluded from Overall regardless.
2. **Terminal-Bench 2.1 76.2% independently restated** (poloapi), confirming the row pass 1 used to cap Tool at 77; no new agentic absolutes change that picture, and the AA launch 55 vs BenchLM-captured 50.2 Index delta is the familiar scale/snapshot difference (recorded side by side, not averaged) under the batch-wide **v5 (2026-10-27)** rescale — no band moved.
3. **Lifecycle: no shutdown notice, but succession is complete.** Google's deprecations page (updated 2026-10-22) carries no `gemini-3.5-flash` retirement entry — the Oct 22–Nov 17 wave targets preview ids, so no curation concern like `gemini-3-pro-preview`; flagged only as watch-list. Functionally, LLMLearner's 36-benchmark comparison shows the current **3.8 Flash beats 3.5 Flash on 33 of 36** rows — pass 1's own advice ("for long-document agents or heavy coding, the 3.7/3.8 Flash siblings are safer") is strengthened, not contradicted.
4. **The MRCR-at-1M collapse (26.6%) and 60.7% hallucination flag stand uncontradicted** — no source published a corrected long-context retrieval or Omniscience row, so Context 88 and the Reasoning cap remain the scored evidence.

**Scores changed by this pass:** None in the quality dims. Cost 92 converted provisional→verified on published $1.50/$9 + 90% cached. Tool 77, Reasoning 80, Context 88, Multimodal 88, Coding 74 → Overall = half-up mean(77, 80, 88, 88, 74) = 407/5 = 81.4 → **81, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Google DeepMind Gemini 3.5 Flash launch, plus Artificial Analysis, Vals AI, Epoch AI, Cursor, OpenRouter and Gert Labs); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (OpenRouter, Artificial Analysis launch article, Google deprecations page, layer3labs, poloapi, codingfleet, llmlearner, theaicommand); paid rate verified $1.50/$9 (Cost 92 now verified), TB 76.2% corroborated, no shutdown entry (preview-wave watch-list only), 3.8-succession noted, v5 index delta un-averaged — **no dimension changed and Overall remains 81**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
