# Gemini 3.7 Flash — findings by GPT 6 Sol

- Source: Google DeepMind (`gemini-3.7-flash`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's fast, reasoning-configurable multimodal model for coding, video understanding and agentic workflows; built on Gemini 3.6 Flash, not a separate speech-first model ([Google model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)).
- **Provider / access:** Gemini API / AI Studio `gemini-3.7-flash` through Google's generative API ([Pi first-party listing](https://pi.dev/models/google/gemini-3-7-flash)); OpenCode Zen `opencode/gemini-3.7-flash` is listed using Google Generative AI protocol at `https://opencode.ai/zen/v1` ([Pi Zen listing](https://pi.dev/models/opencode/gemini-3-7-flash)). The latter is not automatically a Chat Completions endpoint.
- **Release / knowledge:** August 13, 2026; Google describes a March 2026 cutoff, with some domains possibly reflecting January 2025 knowledge ([Google card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)).
- **IDs:** Google `gemini-3.7-flash`; Zen `opencode/gemini-3.7-flash`. A currently priced Zen route exists; a separate $0 Zen ID was not confirmed by that provider listing.
- **Context window:** 1,048,576 input+output / 65,536 max output according to [Pi Google](https://pi.dev/models/google/gemini-3-7-flash) and [Pi Zen](https://pi.dev/models/opencode/gemini-3-7-flash); Google's card rounds output to 64K.
- **Modalities:** Native text, image, audio, video and document input with text output ([Google card](https://deepmind.google/models/model-cards/gemini-3-7-flash/)); provider listing for Zen advertises only text/image inputs, so the full set is not guaranteed via Zen. Adjustable thinking and tool workflows; no native audio/video output claimed.
- **Pricing (as of 2026-10-12):** [Google's official model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/) specifies introductory $0.75 input / $3.75 output per 1M until December 31, 2026, then $1.50/$7.50 starting January 1, 2027. [Pi first-party](https://pi.dev/models/google/gemini-3-7-flash) lists $0.075 cached; [Pi Zen](https://pi.dev/models/opencode/gemini-3-7-flash) already lists $1.50/$7.50/$0.15 cached. Cost is scored on verified first-party intro pricing, not an unverified free offer.
- **Architecture:** Proprietary; card confirms 3.6 Flash lineage but does not publish parameter count or weights ([Google](https://deepmind.google/models/model-cards/gemini-3-7-flash/)).

### Raw benchmarks found

Compared [Google's primary model card](https://deepmind.google/models/model-cards/gemini-3-7-flash/) against independent [Vals](https://www.vals.ai/models/google_gemini-3.7-flash), [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-7-flash), [ARC Prize](https://arcprize.org/results/google-gemini-3-7-flash) and [Collinear](https://cwe-bench.com/?v=v0). [BenchLM's row index](https://benchlm.ai/models/gemini-3-7-flash) links further provenance; it is not a separate re-run.

Agent / tool use:

- Terminal-Bench 2.1 **85.8%** (Google card) versus **77.5%** ([Vals independently](https://www.vals.ai/models/google_gemini-3.7-flash)); Google's Terminal-Bench 3.0 is **14.9%** (different version), while Vals Terminal-Bench 4.0 is **12.12% ±3.03**: strong dependence on task set and harness.
- Google's [AutomationBench **30.4%**, OSWorld 2.0 **47.9%**, Agents' Last Exam **26.3%**, GDPval-AA v2 **1525 Elo**](https://deepmind.google/models/model-cards/gemini-3-7-flash/); [Vals SRE Bench **4.58%**, Finance Agent v2 **59.04%**](https://www.vals.ai/models/google_gemini-3.7-flash). Different professional tasks should not be conflated.
- [CWE-bench v0 **44.0% programmatic pass@1**](https://cwe-bench.com/?v=v0) with Antigravity on the 100-task set; v1 lists no Gemini 3.7 Flash run. [AA GDPval normalized **44.6%**](https://benchlm.ai/models/gemini-3-7-flash) uses a different scale from Google's Elo. Tau3-Banking / Claw-Eval: no verified exact-model result found.

Reasoning / knowledge:

- [ARC Prize ARC-AGI-2 **84.6% at high effort**, versus medium **63.7%** and low **52.9%**](https://arcprize.org/results/google-gemini-3-7-flash); results strongly depend on effort.
- [AA GPQA Diamond **94.5%**, HLE **47.9%**, CritPt **14.3%**, Intelligence Index v4.3.2 **39**](https://benchlm.ai/models/gemini-3-7-flash); Google's [HLE-Verified **53.6%**](https://deepmind.google/models/model-cards/gemini-3-7-flash/) is a different evaluation. [Vals GPQA **93.94%**](https://www.vals.ai/models/google_gemini-3.7-flash) adds independent corroboration.
- Google's card says **56** on an earlier Artificial Analysis Index snapshot; the current independent page shows **39** after changes in Index methodology, not a comparable before/after score.

Coding:

- [Google DeepSWE v1.1 **65.3%**, FrontierCode 1.1 Main **43.6%**](https://deepmind.google/models/model-cards/gemini-3-7-flash/); [Proximal FrontierSWE v2 **20.3%**](https://www.frontierswe.com/) on harder long-running tasks (linked by [BenchLM](https://benchlm.ai/models/gemini-3-7-flash)).
- [Vals SWE-bench **80.80%**, LiveCodeBench **88.65%**, Vibe Code Bench v1.1 **70.39%**, Code Migration **34.80%**](https://www.vals.ai/models/google_gemini-3.7-flash); [AA SciCode **57.2%**](https://benchlm.ai/models/gemini-3-7-flash)).

Long context / multimodal:

- Google's [GDM-MRCR v2 eight-needle **97.0% at 128K**](https://deepmind.google/models/model-cards/gemini-3-7-flash/), **not** at 512K+; [AA-LCR **81.7%**](https://benchlm.ai/models/gemini-3-7-flash) for long-context reasoning. No verified near-1M retrieval percentage found.
- [Google LVBench **85.4%** for long video, CharXiv **84.5% without / 88.7% with tools**](https://deepmind.google/models/model-cards/gemini-3-7-flash/); independent [Vals MMMU Pro **88.96%**](https://www.vals.ai/models/google_gemini-3.7-flash), [AA MMMU-Pro **85.5%**](https://benchlm.ai/models/gemini-3-7-flash)).

### Normalized scores (1–100)

- **Tool use: 79/100.** TB2.1 77.5–85.8%, OSWorld 47.9% and CWE v0 44% are substantial, but Vals TB4 12.12% and SRE 4.58% cap robust autonomy.
- **Reasoning: 88/100.** GPQA ~94% and ARC-AGI-2 84.6% at high effort are strong; CritPt 14.3% and AA Index 39 hold back the frontier band.
- **Context window: 95/100.** Verified 1M capacity reaches the top tier, but the 97% MRCR result covers only 128K and no qualifying near-1M retrieval supports a ceiling score.
- **Multimodal: 95/100.** Native audio, video, image and document input plus strong LVBench/MMMU support broad perception; Zen's text/image-only listing and text-only output cap the rating.
- **Coding: 82/100.** SWE-bench 80.8%, LiveCodeBench 88.65% and SciCode 57.2% support practical code work; FrontierSWE 20.3%, DeepSWE 65.3% and TB4 12.12% temper extended-agent confidence.
- **Cost efficiency: 89/100.** First-party introductory $0.75/$3.75 is competitive for this scope, with $0.075 cache hits; Zen's listed $1.50/$7.50 and announced 2027 increase make value provider/date-specific.
- **Overall Score: 88/100.** (79 + 88 + 95 + 95 + 82) / 5 = 87.8, half-up 88; efficient for high-effort multimodal and shorter coding workflows, with difficult agent tasks checked separately.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh comparison of Google DeepMind model card, Vals, AA, ARC Prize, CWE-bench, and first-party/Zen provider listings; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
