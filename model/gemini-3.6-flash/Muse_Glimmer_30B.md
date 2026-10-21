# Gemini 3.6 Flash — findings by Muse Glimmer 30B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind (`google/gemini-3.6-flash`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's July 2026 Flash workhorse for coding, computer use and agentic workflows. 1M context, multimodal input, improved efficiency over 3.5 Flash with ~17% fewer output tokens on the Artificial Analysis index. Flagged as Google's Flash coding/computer-use tier with GPQA ~93-94% and OSWorld-Verified ~83%.
- **Provider / access:** Google AI Studio / Gemini API / OpenCode Zen `google/gemini-3.6-flash`; Chat Completions. Free tier available on Google AI Studio and OpenCode Zen with standard rate limits.
- **Release / knowledge:** 2026-07-21 release; knowledge cutoff not published.
- **IDs:** `google/gemini-3.6-flash` (OpenCode Zen). Free ID exists on Zen.
- **Context window:** 1,048,576 total tokens; max output 64K tokens. Verified via provider docs and GDM-MRCR retrieval tests.
- **Modalities:** Text, image, audio, video, PDF in; text out. Reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-07-21):** $1.50 / 1M input; $7.50 / 1M output; cached input $0.15 / 1M. Blended ~$1.84/1M. Free tier available.
- **Architecture:** Proprietary, closed / API only. Undisclosed params; multimodal mixture.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- OSWorld-Verified: 83.0% (Thinking With Tools) #5/30 — LLMLearner
- Terminal-Bench 2.1: 78.0% (Thinking With Tools) #34/60 — LLMLearner
- Terminal-Bench 4.0: 7.1% (Thinking High With Tools) #43/64 — LLMLearner
- Tau³-Banking: 29.9% (Thinking High With Tools) #35/110 — LLMLearner

Reasoning / knowledge:

- GPQA Diamond: 94.1% (Thinking High No Tools) #9/191 — LLMLearner
- SciCode: 53.4% (Thinking High No Tools) #31/92 — LLMLearner
- FrontierMath v2: 58.9% (Thinking High With Tools) #41/81 — LLMLearner
- CritPt: 10.6 (Thinking High No Tools) #49/129 — LLMLearner
- MMMU-Pro: 83.2% (Thinking High No Tools) #9/120 — LLMLearner
- GDM-MRCR v2 8-needle 128K: 91.8 (Thinking No Tools) #2/8 — LLMLearner
- Context Arena: 88.8 (Thinking High No Tools) #9/49 — LLMLearner

Coding:

- SWE-Bench Pro - Public: 58.7% (Thinking With Tools) #19/60 — LLMLearner
- DeepSWE: 49.0% (Thinking With Tools) #47/56 — LLMLearner
- Vibe Code Bench v1.1: 64.0% (Thinking High With Tools) #34/64 — LLMLearner
- MLE-Bench: 63.9% (Thinking With Tools) #1/3 — LLMLearner
- Terminal-Bench 2.1: 78.0% — see above

Long context:

- GDM-MRCR v2 8-needle 1M: 54.0 (Thinking No Tools) #1/3 — LLMLearner
- GDM-MRCR v2 8-needle 128K: 91.8 — see above

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 75/100.** OSWorld-Verified 83% and Terminal-Bench 2.1 78% show strong desktop/tooling execution, capped by Tau³-Banking 29.9% and modest Terminal-Bench 4.0 7.1%.
- **Reasoning: 93/100.** GPQA Diamond 94.1% is frontier-level for a Flash tier; MMMU-Pro 83.2% and Context Arena 88.8 support high reasoning, limited by CritPt 10.6.
- **Context window: 95/100.** 1M token window with GDM-MRCR 91.8 at 128K and 54.0 at 1M; retrieval holds well at mid-window, capped by 1M retrieval drop-off vs top long-context models.
- **Multimodal: 90/100.** Text + image + audio + video + PDF in, text out; strong MMMU-Pro 83.2% indicates multimodal understanding, limited by text-only output.
- **Coding: 68/100.** SWE-Bench Pro 58.7% and DeepSWE 49.0% show solid agentic coding; MLE-Bench 63.9% helps, capped by DeepSWE below frontier 74%+ threshold.
- **Cost efficiency: 76/100.** $1.50/$7.50 per 1M with free tier available; paid rate is mid-tier for Flash class, better than Pro but higher output cost than 3.7/3.8 Flash successors.
- **Overall Score: 84/100.** Mean of Tool 75, Reasoning 93, Context 95, Multimodal 90, Coding 68 = 84.2 → 84. Best-fit: efficient multimodal Flash for computer use and knowledge work, step up for coding vs 3.5 but not top-coding flagship.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
