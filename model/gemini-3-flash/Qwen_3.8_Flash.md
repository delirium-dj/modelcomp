# Gemini 3 Flash — findings by Qwen 3.8 Flash

- Source: Google / Gemini 3 Flash (`opencode/gemini-3-flash`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash (base, non-reasoning)
- **Short description:** The original Gemini 3 Flash preview — a fast, cheap multimodal workhorse whose **non-reasoning** base variant scores weakly on deep-reasoning and agentic suites (HLE 15.0%, Intelligence Index 17.9, 92.4% hallucination) while retaining a 1M window and strong textbook recall.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3-flash` / `gemini-3-flash-preview`), also on OpenCode Zen (`opencode/gemini-3-flash`). Non-reasoning base variant; tool calls.
- **Release / knowledge:** late 2025 (Gemini 3 Flash preview); knowledge cutoff not disclosed.
- **IDs:** `opencode/gemini-3-flash` / `google/gemini-3-flash-preview`.
- **Context window:** BenchLM lists **1M**; curated `meta.json` says "128K total" — conflict, resolved in favour of the 1M figure the preview actually shipped with.
- **Modalities:** multimodal input capable; published evidence is image-only (MMMU-Pro) — curated `meta.json` lists "Text in/out". Text out; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (Flash-class low; exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (24 of 618 rows; 56.29/100, #60 of 645), citing Artificial Analysis, Vals AI, Epoch AI, Claw-Eval, JobBench, Gert Labs and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage; the base variant is listed as **Non-Reasoning**.

Agent / tool use:

- Terminal-Bench 2.1 (Vals) **53.9%**; τ²-bench 43.3%; Claw-Eval 49.2%; Gert Labs 56.6%
- JobBench **11.4%** — very weak long-horizon work

Reasoning / knowledge:

- **AA-HLE 15.0%** and CritPt **1.4%** — far under bars; Intelligence Index **17.9** (low); AA-LCR 55.3
- GPQA-Diamond 81.2 (AA) / 87.9 (Vals); MMLU-Pro (Vals) 88.6; Global-MMLU-Lite 92.7; AA-IFBench 55.1
- **Omniscience Index -4.3 / Accuracy 45.8% / Hallucination 92.4%** — extreme confabulation
- FrontierMath v2 Tiers 1-3 35.6% / Tier 4 4.2% (Epoch AI)

Coding:

- LiveCodeBench (Vals) **85.6%**; SWE-bench (Vals) 75.0% — but Vibe Code Bench **20.2%** (weak agentic code)

Multimodal / long context:

- AA-MMMU-Pro **78.6%**; Design Arena Website 1204 (only image-grounded rows published)
- 1M window (AA-LCR 55.3 low; no MRCR at length reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 52/100.** Terminal-Bench 2.1 (Vals) 53.9% and τ²-bench 43.3% are well under the 88/50 refs, Claw-Eval 49.2% is mid, and JobBench 11.4% shows the non-reasoning base variant cannot sustain long-horizon agent work.
- **Reasoning: 48/100.** Textbook recall is fine (GPQA 87.9 Vals, MMLU-Pro 88.6, Global-MMLU 92.7), but HLE 15.0%, CritPt 1.4%, Intelligence Index 17.9, AA-LCR 55.3 and a **92.4% hallucination rate** make this the weakest reasoning/factuality profile in the audit — consistent with a non-reasoning variant.
- **Context window: 95/100.** BenchLM's 1M-token window meets the ≥1M tier (curated meta conflicts at 128K); AA-LCR 55.3 and no MRCR-at-length evidence keep it at the band floor.
- **Multimodal: 66/100.** The only published grounded row is image (MMMU-Pro 78.6, solid), so a +image band (60–70); no audio/video/document rows are reported and curated meta says text-only, so no credit for the wider modality set the platform supports.
- **Coding: 62/100.** LiveCodeBench 85.6% and SWE-bench 75.0% (Vals) are respectable for a fast tier, but Vibe Code 20.2% and the non-reasoning profile undercut agentic/creative coding.
- **Cost efficiency: 88/100.** Flash-class low "standard pricing" with an AI Studio free tier (exact rates unpublished in curated meta), anchoring it high; provisional. Cost is excluded from Overall.
- **Overall Score: 65/100.** Mean of Tool 52, Reasoning 48, Context 95, Multimodal 66, Coding 62 = 64.6 → 65. Best fit: cheap, fast, high-volume extraction/summarisation and code-completion where answers are checked against provided context and abstention is enforced — never for unaided reasoning or autonomous agents; the reasoning Flash siblings (3.5/3.6/3.7) and the Pro line supersede it on every quality axis.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing Artificial Analysis, Vals AI, Epoch AI, Claw-Eval, JobBench, Gert Labs and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
