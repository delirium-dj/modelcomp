# Gemini 3.5 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-3.5-flash`; high reasoning mode), Artificial Analysis v4.3.2
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (high)
- **Short description:** Google's fast, multimodal reasoning model for sub-agent deployment, multi-step workflows, long-horizon tasks, and rapid coding iterations. Google now labels it a legacy Flash model.
- **Provider / access:** Google Gemini API (`gemini-3.5-flash`); Google AI Studio. High is a reasoning configuration; the effort levels are minimal / low / medium (default) / high.
- **Release / knowledge:** Google lists May 2026 as the latest update; no public knowledge cutoff was shown on the official model page.
- **IDs:** `gemini-3.5-flash`; repository family metadata identifies `google/gemini-3.5-flash`.
- **Context window:** 1,048,576 input tokens; 65,536 output tokens (Google Gemini API documentation, verified 2026-09-29).
- **Modalities:** Text, image, video, audio, and PDF input; text output; thinking, code execution, computer use (preview), function calling, structured outputs, URL context, and search grounding supported.
- **Pricing (as of 2026-09-29):** Artificial Analysis reports $1.50 per 1M input and $9.00 per 1M output tokens, with a 90% cache discount. The official page reviewed did not display price.
- **Lifecycle:** The model is now **deprecated**. Google's own models page describes Gemini 3.5 Flash as a "legacy Flash model, providing baseline speed and foundational performance for routine, high-throughput workloads," with 3.6 Flash, 3.7 Flash, and 3.8 Flash as the current generations. Artificial Analysis likewise flags the model as deprecated. It remains the `gemini-flash-latest` backing model only in the sense of its original launch; new deployments should target a later generation.
- **Architecture:** Proprietary; Google has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **33/100** (Artificial Analysis, accessed 2026-09-29; composite benchmark, v4.3.2 component set). This is a deprecation-era re-measurement and is not directly comparable to the 52/55 readings recorded on the earlier v4.1.1 index at high thinking.
- Output speed: **196.3 tokens/s**; time to first token **16.86s** (Artificial Analysis, accessed 2026-09-29)
- Earlier published results retained for reference, not re-scored: GDPval-AA **1,656 Elo**, AA-Omniscience hallucination rate **61%**, and over **280 output tokens/s** at launch (Artificial Analysis launch analysis, 2026-05-19)
- Terminal-Bench 2.1: **76.2%** (BenchLM, provider-exact Google source)
- OSWorld-Verified: **78.4%**; SWE-bench Pro: **55.1%**; Vibe Code Bench: **48.68%**; MRCRv2: **77.3%** (BenchLM, provider-exact Google source)
- Tau3-Banking, Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **33** (Artificial Analysis, accessed 2026-09-29)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics outside the AA launch figures: **no verified public exact value found**

Coding:

- SWE-bench Pro: **55.1%**; Vibe Code Bench: **48.68%** (BenchLM, provider-exact Google source)
- SWE-bench Verified, LiveCodeBench, SciCode / AA-SciCode, and DeepSWE: **no verified public exact value found**

Long context:

- MRCRv2: **77.3%** (BenchLM, provider-exact Google source)
- MRCR at 1M: **26.6%** (BenchLM, provider-exact Google source) — a much weaker long-context result at full length than the standard-length MRCRv2 figure
- Google verifies a 1,048,576-token input limit and 65,536-token output limit

Sources consulted: [Google Gemini 3.5 Flash documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash), [Google Gemini models index](https://ai.google.dev/gemini-api/docs/models), [Artificial Analysis Gemini 3.5 Flash launch analysis](https://artificialanalysis.ai/articles/gemini-3-5-flash-everything-you-need-to-know), and [BenchLM Gemini 3.5 Flash vs Flash-Lite](https://benchlm.ai/compare/gemini-3-5-flash-vs-gemini-3-5-flash-lite), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 79/100.** Terminal-Bench 2.1 at 76.2%, OSWorld-Verified at 78.4%, and documented computer use, code execution, and function calling provide strong sub-agent and agentic evidence; missing Tau, GDPval, and exact newer terminal values cap the score.
- **Reasoning: 79/100.** AA Index 33 on v4.3.2 is above the compared-model median; the launch-era hallucination rate of 61% is a meaningful caveat, and exact GPQA, HLE, and CritPt values were unavailable.
- **Context window: 95/100.** Google verifies 1,048,576 input tokens, meeting the top context tier, and MRCRv2 at 77.3% is a direct long-context result; the 26.6% MRCR at full 1M length is the counterweight.
- **Multimodal: 95/100.** Google verifies text, image, video, audio, and PDF input with text output.
- **Coding: 76/100.** SWE-bench Pro 55.1% and Vibe Code Bench 48.68% support workable coding; the model is designed for rapid coding iterations and supports code execution, but no exact SWE-bench Verified, LiveCodeBench, or SciCode score was found.
- **Cost efficiency: 78/100.** The independent $1.50/$9.00 price and 90% cache discount are reasonable, though materially higher than Gemini 3.6/3.7 and now a legacy price with no future path.
- **Overall Score: 84.8/100.** (79 + 79 + 95 + 95 + 76) / 5 = 424 / 5 = 84.8. Best fit: high-volume multimodal sub-agents and coding workflows on an existing Gemini 3.5 integration. The model is deprecated, so prefer Gemini 3.7/3.8 for new deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Google model documentation and model index, Artificial Analysis v4.3.2 measurements, the Artificial Analysis launch analysis, and BenchLM provider-exact rows; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
