# Gemini 3.5 Flash — findings by GPT-6 Luna

- Source: Google/Gemini 3.5 Flash
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's proprietary natively multimodal reasoning model for fast agentic workflows, coding, and high-volume interactive tasks. Exact subject is the 2026 Gemini 3.5 Flash API SKU, not Gemini 3 Flash, 3.6 Flash, or 3.5 Flash-Lite.
- **Provider / access:** Google Gemini API; supports GenerateContent and Interactions APIs. The exact model code is now deprecated: as of Google's documentation last updated 2026-10-12, calls to `gemini-3.5-flash` are automatically routed to `gemini-3.6-flash`, and the SKU is no longer selectable in AI Studio. [Gemini API model overview](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash) · [What's new in Gemini 3.5 Flash](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.5)
- **Release / knowledge:** Released May 19, 2026; Google API docs list a January 2025 knowledge cutoff. [Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/) · [Gemini API guide](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.5)
- **IDs:** `gemini-3.5-flash` (deprecated alias, routed to `gemini-3.6-flash`); no frozen snapshot ID verified. [Gemini API model overview](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash)
- **Context window:** 1,048,576 input tokens; 65,536 output tokens. [Gemini API model overview](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash)
- **Modalities:** Text, image, video, audio, and PDF input; text output. Thinking, Google Search/Maps grounding, code execution, computer use (preview), file search, function calling, structured output, and URL context are supported. [Gemini API model overview](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash) · [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/)
- **Pricing (as of 2026-10-28):** The exact 3.5 SKU is retired from direct selection. Artificial Analysis and Vals AI record its original Google API paid rate as $1.50 input / $9.00 output per MTok. Google's current API price sheet instead lists Gemini 3.6 Flash at $0.75/$3.75 per MTok through December 31, 2026, with a stated increase to $1.50/$7.50 on January 1, 2027. Google confirms automatic routing of the old ID but does not specify on the cited page how billing for a routed request is labeled; 3.6 pricing is therefore not represented as an active 3.5 SKU rate. [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash) · [Vals AI](https://www.vals.ai/models/google_gemini-3.5-flash) · [Google API pricing](https://ai.google.dev/gemini-api/docs/pricing)
- **Architecture:** Proprietary and based on Gemini 3 Flash; Google describes the model as a natively multimodal reasoning model with adjustable thinking levels. Parameter count is undisclosed. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/)

### Raw benchmarks found

> Google DeepMind's May 2026 model card gives exact-version results and states its table is current as of May 2026. Third-party leaderboards may use different harnesses, benchmark revisions, model settings, or later reruns; discrepant results are retained as such.

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** in Google's model card, using the Terminus-2 harness; the Google launch announcement repeats 76.2%. BenchmarkList reports **78.7%** for its Vals-sourced Terminal-Bench 2.1 run, while BenchLM lists **76.2%** and cites Google's launch results. These are not established as a matched run. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/) · [Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/) · [BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash/) · [BenchLM](https://benchlm.ai/models/gemini-3-5-flash)
- MCP Atlas: **83.6%**; Toolathlon: **56.5%**; OSWorld-Verified: **78.4%**; Finance Agent v2: **57.9%**. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/)
- GDPval-AA Elo differs across reports: Google reports **1,656 Elo** in its May release model card and announcement; BenchmarkList's current page shows **1,373 Elo**, and BenchLM reports **1,345**. These snapshots/harnesses are not reconciled, and the official launch result is not substituted for the independent leaderboard figures. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/) · [Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/) · [BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash/) · [BenchLM, updated October 27, 2026](https://benchlm.ai/models/gemini-3-5-flash)
- Claw-Eval / ClawProBench: **no verified exact-version result found**.

Reasoning / knowledge:

- GPQA Diamond: **92.2%** in Artificial Analysis' benchmark table; Vals AI reports **92.7%**. The independent sources' evaluation setups are not documented as identical. [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash) · [Vals AI](https://www.vals.ai/models/google_gemini-3.5-flash)
- Humanity's Last Exam: **40.2%** in Google's full-set text-and-multimodal table; Vals AI lists **42.7%** in its AA-sourced HLE evaluation. Keep these as differently sourced runs, not a single settled value. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/) · [Vals AI](https://www.vals.ai/models/google_gemini-3.5-flash)
- ARC-AGI-2: **72.1%** in Google's model card; CritPt: **13.1%** in Artificial Analysis' benchmark table. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/) · [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash)
- Artificial Analysis Intelligence Index: **50.2/100** in the current BenchLM cross-reference to AA; Artificial Analysis' own model page now marks the model deprecated and does not show an updated overall index score. These are not equivalent to the project's normalized reasoning score. [BenchLM](https://benchlm.ai/models/gemini-3-5-flash) · [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash)
- AA Omniscience: **51.9% accuracy / 60.7% hallucination rate** on the source table shown by BenchLM. [BenchLM](https://benchlm.ai/models/gemini-3-5-flash)

Coding:

- SWE-bench Pro (Public): **55.1%** in Google's model card; LiveCodeBench: **87.6%**, SWE-bench Verified: **78.8%**, and Vibe Code Bench v1.1: **48.7%** in Vals AI's evaluations. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/) · [Vals AI](https://www.vals.ai/models/google_gemini-3.5-flash)
- SciCode: **53.1%** in Artificial Analysis; its separate AA-SciCode row in BenchLM is **53.9%**. DeepSWE 1.1: **37.0%** in BenchLM's Google-model table. [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash) · [BenchLM](https://benchlm.ai/models/gemini-3-5-flash)
- Coding score spread is significant: Google's Terminal-Bench 2.1 card result is 76.2%, while BenchmarkList's Vals-sourced record is 78.7%; Vals AI lists Terminal-Bench 4.0 at only **6.06%**. These are different benchmark generations/harnesses and should not be conflated. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/) · [BenchmarkList](https://benchmarklist.com/models/google-gemini-3.5-flash/) · [Vals AI](https://www.vals.ai/models/google_gemini-3.5-flash)

Multimodal:

- CharXiv Reasoning: **84.2%** and MMMU-Pro: **83.6%** in Google's exact-version model card. Vals AI reports **88.3%** MMMU-Pro; Artificial Analysis reports **84.3%** on its independent AA-MMMU-Pro leaderboard. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/) · [Vals AI](https://www.vals.ai/models/google_gemini-3.5-flash) · [Artificial Analysis](https://artificialanalysis.ai/models/gemini-3-5-flash)

Long context:

- Official limit is **1,048,576 input tokens**. Google's model card reports MRCR v2 8-needle **77.3% average at 128K** but just **26.6% pointwise at 1M**. The large gap cautions against treating the advertised 1M window as uniformly reliable retrieval. [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-5-flash/)

### Normalized scores (1–100)

- **Tool use: 87/100.** MCP Atlas 83.6%, OSWorld-Verified 78.4%, and Terminal-Bench 2.1 at 76.2% show broad capability, while Toolathlon at 56.5% and the unresolved GDPval-AA and terminal score differences cap confidence.
- **Reasoning: 89/100.** GPQA Diamond around 92% and HLE around 40–43% are strong, but ARC-AGI-2 at 72.1%, CritPt at 13.1%, and unaligned HLE runs keep the rating below the very top tier.
- **Context window: 95/100.** The official 1M-token input window falls in the methodology's ≥1M tier; the 26.6% MRCR 1M result is a major retrieval caveat, so the score is at the bottom of that tier.
- **Multimodal: 95/100.** Official docs verify audio and video as well as image input, with text output; no audio or image generation is documented for this model.
- **Coding: 87/100.** SWE-bench Verified 78.8%, LiveCodeBench 87.6%, and SWE-bench Pro 55.1% indicate strong coding, but Terminal-Bench 2.1 remains below the methodology's 85% frontier reference, SciCode is below 55%, and Vibe Code Bench is 48.7%.
- **Cost efficiency: 83/100.** Historical exact-model API pricing of $1.50/$9 per MTok is moderate rather than low; free-tier availability and present-day alias routing complicate any current-price comparison.
- **Overall Score: 90.6/100.** Half-up mean of the five quality dimensions: (87 + 89 + 95 + 95 + 87) / 5 = 90.6. A fast, capable multimodal agent for coding and tool workflows, but the 1M-token MRCR result and deprecated API ID merit caution for new integrations.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent Bing web searches, then cross-checked Google's API documentation, DeepMind model card, and launch announcement against Artificial Analysis, BenchmarkList, BenchLM, and Vals AI. Conflicting leaderboard scores and the SKU's deprecation/rerouting are stated explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
