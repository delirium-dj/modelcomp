# Inkling Small — findings by GPT 6 Sol

- Source: Thinking Machines Lab (`Inkling-Small`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's July 2026 smaller open-weight Inkling MoE for efficient coding, calibrated forecasting and text/image/audio reasoning; distinct from larger Inkling and earlier preview ([official launch](https://thinkingmachines.ai/news/inkling-small/)).
- **Provider / access:** Released weights `thinkingmachines/Inkling-Small` and Tinker API/playground; [Vals](https://www.vals.ai/models/thinkingmachines_inkling-small) tests provider `thinkingmachines/inkling-small`. A current `opencode/inkling-small` free Zen endpoint was not independently verified.
- **Release / knowledge:** July 30, 2026 ([Thinking Machines](https://thinkingmachines.ai/news/inkling-small/)); exact knowledge cutoff not verified.
- **IDs:** Hugging Face `thinkingmachines/Inkling-Small`; avoid importing results for the separate 975B/41B larger `Inkling`.
- **Context window:** [Vendor claims **up to 1M**](https://thinkingmachines.ai/news/inkling-small/); [Vals](https://www.vals.ai/models/thinkingmachines_inkling-small) actually lists **262K context / 262K max output** on its evaluated route. Capacity alone does not prove 1M quality or that 1M is available on Tinker.
- **Modalities:** Text/image/audio in → text out, variable thinking effort ([vendor launch](https://thinkingmachines.ai/news/inkling-small/)); native video and speech generation not established. Hosted modalities can be narrower.
- **Pricing (as of 2026-10-13):** [AA](https://artificialanalysis.ai/models/inkling-small) and [Vals](https://www.vals.ai/models/thinkingmachines_inkling-small) quote **$0.30 input / $1.20 output per 1M** on tested paid API, with AA citing ~80% cache-read discount. Downloadable weights permit self-hosting subject to compute costs. No verified Zen free API tier.
- **Architecture:** Vendor [reports sparse MoE **276B total / 12B active**](https://thinkingmachines.ai/news/inkling-small/) with encoder-free image/audio processing; AA lists 266B total, a discrepancy in published counts. [AA](https://artificialanalysis.ai/models/inkling-small) lists Apache-2.0 weights; verify license in the actual weight repository before redistribution.

### Raw benchmarks found

Read Thinking Machines' [first-party full evaluation table](https://thinkingmachines.ai/news/inkling-small/) and compare with independent [Vals](https://www.vals.ai/models/thinkingmachines_inkling-small) and [AA](https://artificialanalysis.ai/models/inkling-small). Vendor evals use effort 0.99, best harness for TB2.1 and a bash-only SWE Verified harness; Vals reports 0.99 effort and a different suite. Vendor AA Index **40** was from v4.1; current AA Index **26** is a revised methodology, not an apples-to-apples drop.

Agent / tool use:

- [Vendor TB2.1 **64.7%** best harness, MCP Atlas **79.6% public / 79.2% all**, BrowseComp **77.4%**, Toolathlon-Verified **54.4%**, GDPval-AA v2 **1269 Elo**, Tau3 Banking **15.5%**](https://thinkingmachines.ai/news/inkling-small/).
- [Vals TB4.0 **0.00%**, Finance Agent v2 **41.26% ±0.83**, Code Migration **13.68% ±3.81**, Harvey Legal Agent **1.67% ±0.83**, SkillsBench **33.58% ±3.66**](https://www.vals.ai/models/thinkingmachines_inkling-small); TB2.1 from Vals is [**55.1%**](https://benchlm.ai/models/inkling-small) under its own harness.

Reasoning / knowledge:

- [Vendor GPQA Diamond **89.5%**, HLE **31.6% text-only / 47.8% with tools**, ARC-AGI-2 **40.1%**, CritPt **8.3%**, IFBench **82.2%**](https://thinkingmachines.ai/news/inkling-small/). [Vals GPQA **83.59% ±2.04**, MMLU Pro **85.57% ±0.35**, ProofBench v1.1 **6.00% ±2.39**](https://www.vals.ai/models/thinkingmachines_inkling-small).
- [AA current Intelligence Index **26**, HLE **33.3%**, Omniscience Index **−8.9**](https://benchlm.ai/models/inkling-small) (attributed to AA). Benchmarks with/without tools are different tasks.

Coding:

- [Vendor SWE-bench Verified **80.2%** bash-only, SWE-bench Pro **55.9%**, SciCode **48.7%**, TB2.1 **64.7%**](https://thinkingmachines.ai/news/inkling-small/). [Vals SWE-bench **82.20% ±1.71**, LiveCodeBench **85.93% ±0.99**, Vibe Code Bench v1.1 **19.05% ±3.40**, ProgramBench **0.50% ±0.50**](https://www.vals.ai/models/thinkingmachines_inkling-small); high patch accuracy does not establish long-horizon application success.

Long context / multimodal:

- 1M vendor capacity against 262K Vals tested route ([vendor](https://thinkingmachines.ai/news/inkling-small/), [Vals](https://www.vals.ai/models/thinkingmachines_inkling-small)); [AA-LCR **75.7%**](https://benchlm.ai/models/inkling-small) does not establish 1M retention. No verified full-window MRCR result.
- [Vendor MMMU-Pro **74.0%**, CharXiv **77.4% without Python / 81.3% with Python**, Audio MC **54.9%**, MMAU **77.0%**, VoiceBench **90.1%**](https://thinkingmachines.ai/news/inkling-small/). Audio comprehension is a capability of this general model, not a reason to route it as a voice-first model.

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 79.6% and TB2.1 55–65% support agent tasks; Tau3 15.5%, Vals TB4 0% and migration 13.7% sharply limit difficult autonomy.
- **Reasoning: 77/100.** GPQA vendor 89.5% vs Vals 83.6%, HLE 31.6–47.8% and CritPt 8.3%; ProofBench 6% and Omniscience −8.9 temper reliability.
- **Context window: 88/100.** Vendor up-to-1M but only 262K independently hosted limit, AA-LCR 75.7% and no 1M retrieval result.
- **Multimodal: 87/100.** Text/image/audio input with vendor MMAU 77%, MMMU 74%; no native video or audio output.
- **Coding: 76/100.** SWE Verified 80–82% and LiveCodeBench 85.9%, but Vals Vibe Code 19% and TB4 0% cap engineering autonomy.
- **Cost efficiency: 90/100.** $0.30/$1.20 and open weights offer flexible low-cost deployment; self-host compute and actual provider routing still matter.
- **Overall Score: 80/100.** (72 + 77 + 88 + 87 + 76) / 5 = 80.0; economical audio-aware text/image coding for bounded tasks with hosted context/long-horizon limits checked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-13
- Method: Fresh Thinking Machines primary launch/eval table compared with independent Vals/AA, with context and index-version discrepancies noted; normalized scores are interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
