# Gemini 3.5 Flash — findings by GPT 6 Sol

- Source: Google DeepMind (`gemini-3.5-flash`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's May 2026 fast multimodal reasoning model based on Gemini 3 Flash, with adjustable thinking and support for coding and agent workflows. It is distinct from the later 3.6, 3.7 and 3.8 Flash releases ([Google model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/)).
- **Provider / access:** Gemini API / AI Studio `gemini-3.5-flash` through Google Generative AI and [OpenCode Zen `opencode/gemini-3.5-flash`](https://pi.dev/models/opencode/gemini-3-5-flash) via the Google protocol at `https://opencode.ai/zen/v1`. This Zen route is not automatically Chat Completions or a free-tier SKU.
- **Release / knowledge:** May 19, 2026 ([Google card](https://deepmind.google/models/model-cards/gemini-3-5-flash/), [Vals](https://www.vals.ai/models/google_gemini-3.5-flash)); precise cutoff not independently stated by this model card.
- **IDs:** `gemini-3.5-flash` (Google) and `opencode/gemini-3.5-flash` (Zen); separate voice/speech-first Gemini products are not equivalent to this general-purpose Flash model.
- **Context window:** **1,048,576 total / 65,536 max output** ([Google card](https://deepmind.google/models/model-cards/gemini-3-5-flash/), [Pi Zen](https://pi.dev/models/opencode/gemini-3-5-flash)).
- **Modalities:** Google's native model accepts text/image/audio/video/document input → text output ([Google card](https://deepmind.google/models/model-cards/gemini-3-5-flash/)); Zen's client manifest advertises **text/image only**. Tool calling/reasoning on hosted versions; no native voice/video output.
- **Pricing (as of 2026-10-12):** [Zen](https://pi.dev/models/opencode/gemini-3-5-flash), [Vals](https://www.vals.ai/models/google_gemini-3.5-flash) and [AA](https://artificialanalysis.ai/models/gemini-3-5-flash) list **$1.50 input / $9 output / $0.15 cached input per 1M** for the evaluated paid route. A $0 AI Studio/Zen entitlement for this *specific* version was not verified; cost uses paid pricing.
- **Architecture:** Proprietary; 3 Flash lineage known, weights/parameter count undisclosed ([Google card](https://deepmind.google/models/model-cards/gemini-3-5-flash/), [AA](https://artificialanalysis.ai/models/gemini-3-5-flash)).

### Raw benchmarks found

Compared [Google's primary May model-card scorecard](https://deepmind.google/models/model-cards/gemini-3-5-flash/) with independent [Vals](https://www.vals.ai/models/google_gemini-3.5-flash), [AA](https://artificialanalysis.ai/models/gemini-3-5-flash) and [DeepSWE's dated leaderboard](https://deepswe.datacurve.ai/). [BenchLM](https://benchlm.ai/models/gemini-3-5-flash) indexes attributable results, not a separate run. Google and Vals use different harnesses and benchmark vintages.

Agent / tool use:

- [Google card TB2.1 **76.2%** Terminus-2, MCP Atlas **83.6%**, Toolathlon **56.5%**, OSWorld-Verified **78.4%**, GDPval-AA **1656 Elo**](https://deepmind.google/models/model-cards/gemini-3-5-flash/); independent [Vals TB2.1 **74.2%**](https://www.vals.ai/models/google_gemini-3.5-flash), harder [Vals TB4.0 **6.06%**](https://www.vals.ai/models/google_gemini-3.5-flash). OSWorld-Verified should not be relabeled OSWorld 2.0.
- [Vals Finance Agent v2 **57.86%**, Vals Index **44.79% ±1.10**](https://www.vals.ai/models/google_gemini-3.5-flash) (#38/47 current cohort), Code Migration **26.75%**, Harvey LAB **2.50%**. [AA τ² **95.3%**, GDPval normalized **42.2%**](https://benchlm.ai/models/gemini-3-5-flash) are separate units/harnesses from GDPval Elo; Tau3 Banking / Claw-Eval not verified.

Reasoning / knowledge:

- [Google card HLE **40.2%**, ARC-AGI-2 **72.1%**](https://deepmind.google/models/model-cards/gemini-3-5-flash/); independent [AA GPQA Diamond **92.2%**, HLE **42.7%**, CritPt **13.1%**, current Index **33**](https://benchlm.ai/models/gemini-3-5-flash). [Vals GPQA **92.68%**, MMLU Pro **89.52%**](https://www.vals.ai/models/google_gemini-3.5-flash).
- Google compared 3.5 Flash against specific contemporaries in May; newer models' scores are not 3.5 Flash outcomes, and index revisions must be version-qualified.

Coding:

- [Google card SWE-bench Pro **55.1%**, TB2.1 **76.2%**](https://deepmind.google/models/model-cards/gemini-3-5-flash/); independent [Vals SWE-bench **78.80%**, LiveCodeBench **87.60%**, Vibe Code **48.68%**](https://www.vals.ai/models/google_gemini-3.5-flash). SWE-bench Pro and Verified are distinct datasets.
- [Independent DeepSWE v1.1 **36% ±4 at high**](https://deepswe.datacurve.ai/) on the public mini-swe-agent leaderboard; [AA SciCode **53.9%**](https://benchlm.ai/models/gemini-3-5-flash)); Vals TB4.0 **6.06%** and ProgramBench **0.00%** show limits on more complex autonomous changes.

Long context / multimodal:

- [Google card MRCR v2 eight-needle **77.3% at 128K average**, **26.6% pointwise at 1M**](https://deepmind.google/models/model-cards/gemini-3-5-flash/), and [AA-LCR **69.3%**](https://benchlm.ai/models/gemini-3-5-flash)); unlike capacity, high-quality full-window recall is not established.
- [Google MMMU-Pro **83.6% without tools**, CharXiv **84.2% without tools**, Blueprint-Bench 2 **33.6%**](https://deepmind.google/models/model-cards/gemini-3-5-flash/); [Vals MMMU-Pro **88.27%**](https://www.vals.ai/models/google_gemini-3.5-flash) and [AA MMMU-Pro **84.3%**](https://benchlm.ai/models/gemini-3-5-flash)) reflect separate evaluation configurations.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 74–76%, MCP Atlas 83.6% and OSWorld-Verified 78.4% are useful; TB4 6.06%, Harvey 2.5% and migration 26.75% constrain difficult autonomy.
- **Reasoning: 84/100.** GPQA ~92%, HLE ~40% and ARC-AGI-2 72.1% show good science reasoning; CritPt 13.1% and AA Index 33 keep it below top frontier.
- **Context window: 91/100.** Verified 1M capacity, yet 26.6% pointwise MRCR at 1M and 65K output temper usable long-range recall.
- **Multimodal: 95/100.** Native audio/video/image/document input and strong vision tests provide breadth; Zen supports fewer advertised types and native output is text-only.
- **Coding: 78/100.** SWE Verified 78.8%, LiveCodeBench 87.6% and SciCode 53.9% support routine coding, but DeepSWE 36%, TB4 6.06% and ProgramBench 0% cap autonomous builds.
- **Cost efficiency: 70/100.** Paid $1.50/$9 is moderate relative to cheaper Flash alternatives; no verified current free Zen rate for this exact version.
- **Overall Score: 85/100.** (78 + 84 + 91 + 95 + 78) / 5 = 85.2, half-up 85; good multimodal everyday reasoning, with full-window retrieval and hard coding tasks treated cautiously.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Google DeepMind primary model card compared with Vals, AA, independent DeepSWE and current provider listings; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
