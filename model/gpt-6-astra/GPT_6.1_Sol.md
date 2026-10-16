# GPT-6 Astra — findings by GPT 6.1 Sol

- Source: OpenAI / `gpt-6-astra`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's proprietary frontier reasoning model for difficult coding, scientific work and computer-using agents. Production-access measurements are distinguished from unrestricted research cyber evaluations.
- **Provider / access:** OpenAI Responses and Chat Completions APIs; additional Microsoft/AWS access advertised by OpenAI [S1,S2].
- **Release / knowledge:** September 3, 2026, staged rollout; knowledge cutoff April 30, 2026 [S1,S3,S5]. Search results saying September 4 or 10 are not substituted for the dated system-card publication.
- **IDs:** `gpt-6-astra`; no separately dated API snapshot listed in inspected docs. No Zen Free ID verified [S1].
- **Context window:** 1,050,000 total; maximum input 922,000; maximum output 128,000 [S1].
- **Modalities:** Text/image input, text output; structured output, function calls, search, hosted shell, execution, MCP, tool search and computer use. Image-generation tool availability does not mean native image output [S1].
- **Pricing (as of 2026-10-16):** $10 input / $1 cached read / $12.50 cache write / $50 output per million tokens. Above 272K input, full-request input/cache rates double and output is 1.5×. Batch/Flex half price; Fast 2× applicable rates [S1].
- **Architecture:** Proprietary, undisclosed parameter count; recurrent-depth reports remain unconfirmed, not a verified model specification [S4,S7].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: vendor **57.9%**, highest-scoring setting [S2]; independent Vals **59.60% ±4.40** at max [S5]; AA Intelligence harness **59%**, versus **56%** in Codex Coding Agent harness [S6].
- AutomationBench **41.4%**, vendor table [S2]; AutomationBench-AA **69%**, separate independent implementation [S6].
- Agents' Last Exam **59.3%**, OSWorld 2.0 offline partial **72.6%**, ScreenSpot-Pro no tools **92.7%**, vendor-reported [S2].
- CUA-bench **19.17%, #1/9**; Finance Agent v2 **53.54% ±2.08**; Harvey Legal Agent **5.42% ±1.17**, independent Vals [S5].
- GDPval-AA v2: AA reports about **45 Elo points below** GPT-5.6 Sol, without an exact Astra Elo in the fetched article prose [S6]; no exact score invented.
- Tau3-Banking / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond **96.0%**, HLE **57.2% with tools**, FrontierMath Tier 4 v2 **97.6%**, vendor maximum-over-efforts results [S2].
- ARC-AGI-3 Semi-Private: **62.7% max, Standard harness** versus **99.9% high, Provider Adapter**; at matched max effort the adapter scores **98.6%** [S8]. These are harness-specific results, not one interchangeable score.
- AA Intelligence Index **53, #7/217**, current v4.3.2 [S4]; launch vendor table **61.2**, explicitly v4.1.1 [S2].
- AA-Omniscience hallucination rate **51%** at max [S6]; not a claim about the fraction of all normal user responses that are false.
- Vals Index **63.13% ±1.19, #7/48**; ProofBench v1.1 **99.00% ±1.00**; MysteryMechanism **53.15% ±3.36** [S5].
- CritPt / LCR / MLCR: no verified numeric score found in inspected prose.

Coding:

- DeepSWE v1.1 **74.1%**, FrontierCode 1.1 Extended **64.5%**, Main **53.3%**, vendor research/harness results [S2].
- AA Coding Agent Index **62** in Codex; DeepSWE **68%**, SWE-Atlas-QnA **62%**, independent agent-harness runs [S6].
- Vals Code Migration **67.74% ±4.22**; Vibe Code Bench v1.1 **89.59% ±2.17**; ProgramBench **5.50% ±1.62** [S5].
- Terminal-Bench Science **64.6%** vendor [S2], **62.86% ±5.82** Vals [S5].
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified exact score found in inspected sources.

Long context:

- MRCR v2 eight-needle: **100.0% at 256K–512K**, **96.3% at 512K–1M**, vendor [S2]. Near-full-window retrieval is excellent but does not meet ≥98% in the longest bracket.

### Evidence comparison and research trail

Three distinct DuckDuckGo searches: `"GPT-6 Astra" official OpenAI model`; `"GPT-6 Astra" Artificial Analysis benchmarks`; `"GPT-6 Astra" review pricing limitations`. Directly read official API docs, launch scorecard and system-card opening, independent AA and Vals, ARC Prize's own evaluation, and Ofox's review. No peer repository findings consulted.

The ARC Prize original confirms Ofox's central caveat: opaque reasoning preservation and compaction change the ARC-AGI-3 result dramatically [S7,S8]. Comparing 99.9% against a predecessor on a different harness is not controlled evidence. OpenAI's max-over-effort results, AA's generic inference harness and its Codex agent harness are separately labeled; DeepSWE 74.1% versus 68% is retained rather than averaged [S2,S6]. Vals' CyberBench **41.07%** [S5] does not contradict unrestricted ExploitBench **100%** [S2]: the latter disables production safeguards, uses a different dataset and is not a promised standard-endpoint capability. OpenAI's reverse-engineering **SRE-Bench 88.0%** is also a different named benchmark from Vals' site-reliability **SRE Bench 56.87%** [S2,S5]. AA's current index supersedes historical ranking claims, not historical benchmark scales. Provider reviews provide interpretation and attributed impressions, not additional independent reruns.

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong independent terminal/CUA results and broad native tooling support frontier agents; weak legal-agent performance and harness variance cap confidence [S1,S5,S6].
- **Reasoning: 96/100.** GPQA 96%, strong mathematical evidence and independent ARC results justify frontier reasoning, capped by harness dependency and hallucination [S2,S6,S8].
- **Context window: 98/100.** Million-token capacity with strong measured retrieval earns near-ceiling credit; longest-bracket MRCR is 96.3%, not perfect [S1,S2].
- **Multimodal: 80/100.** Image/document and computer-screen workflows are extensive, but the base model exposes neither audio/video input nor native media output [S1,S5].
- **Coding: 95/100.** Cross-source terminal, migration, scientific coding and DeepSWE evidence is strong, with differences between agent harnesses and weak ProgramBench limiting a ceiling score [S2,S5,S6].
- **Cost efficiency: 35/100.** Premium $10/$50 rates and long-context surcharge dominate despite token efficiency and $3.26/task on AA's specific suite [S1,S4,S6].
- **Overall Score: 93/100.** (95 + 96 + 98 + 80 + 95) / 5 = 92.8 → 93; best fit is hard computer-assisted technical work with sufficient budget. Cost excluded.

### Sources

- [S1] https://developers.openai.com/api/docs/models/gpt-6-astra — official API limits, modalities, pricing and tools.
- [S2] https://openai.com/index/gpt-6-astra/ — vendor scorecard and evaluation footnotes.
- [S3] https://deploymentsafety.openai.com/gpt-6-astra — dated system card; opening/training/change-log sections inspected, not every linked evaluation.
- [S4] https://artificialanalysis.ai/models/gpt-6-astra — current independent index and economics.
- [S5] https://www.vals.ai/models/openai_gpt-6-astra — independent max-effort suite and uncertainties.
- [S6] https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra — September 9 independent inference/agent-harness comparison.
- [S7] https://ofox.ai/blog/gpt-6-astra-review-2026/ — secondary review, explicitly not its own benchmark execution.
- [S8] https://arcprize.org/blog/astra — benchmark operator's direct Standard/Adapter measurements.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three distinct searches, direct primary and multiple independent evaluator comparisons. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
