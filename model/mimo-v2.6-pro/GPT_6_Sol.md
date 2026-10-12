# MiMo-V2.6-Pro — findings by GPT 6 Sol

- Source: Xiaomi MiMo (`mimo-v2.6-pro`; open-weights checkpoint `MiMo-V2.6-Pro-RL`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's open-weights omnimodal, MoE agent/reasoning flagship, distinct from the lighter MiMo V2.6 Flash. The first-party hosted `mimo-v2.6-pro` route and `XiaomiMiMo/MiMo-V2.6-Pro-RL` checkpoint belong to this Pro line; benchmark harnesses may still differ ([Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)).
- **Provider / access:** Xiaomi Open Platform at `https://api.xiaomimimo.com/v1` with OpenAI-compatible chat completions and `mimo-v2.6-pro` ([Pi Xiaomi listing](https://pi.dev/models/xiaomi/mimo-v2-6-pro)); [OpenRouter Chat Completions](https://openrouter.ai/xiaomi/mimo-v2.6-pro) `xiaomi/mimo-v2.6-pro`, or self-host the MIT-licensed [checkpoint](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL). No verified OpenCode Zen Free ID or Zen `opencode/mimo-v2.6-pro` route in the consulted provider catalog.
- **Release / knowledge:** September 21, 2026 ([Vals model page](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro)); knowledge cutoff not published on the consulted model card.
- **IDs:** Xiaomi `mimo-v2.6-pro`, OpenRouter `xiaomi/mimo-v2.6-pro`, weights `XiaomiMiMo/MiMo-V2.6-Pro-RL`; model-card checkpoint name is not a second dataset folder.
- **Context window:** 1,048,576 total, 131,072 output on [Xiaomi provider configuration](https://pi.dev/models/xiaomi/mimo-v2-6-pro); [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) advertises 1M context, and [Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro) lists 128K output.
- **Modalities:** Native text/image/video/audio input, text output ([Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL), [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-pro)); Pi's particular Xiaomi provider configuration only lists text/image input, so verify gateway acceptance separately. Reasoning and tool calls supported, including self-hosted parsers from Xiaomi's deployment notes.
- **Pricing (as of 2026-10-12):** $0.435 input / $0.87 output / $0.0036 cached input per 1M on [Xiaomi provider listing](https://pi.dev/models/xiaomi/mimo-v2-6-pro), cross-checked against [Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro) and [AA](https://artificialanalysis.ai/models/mimo-v2-6-pro). Self-hosting costs infrastructure rather than $0 guaranteed API access.
- **Architecture:** Sparse MoE **1.02T total / 42B active**, 681M vision encoder and audio encoders; [Xiaomi's MIT-licensed Pro-RL card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) describes mixed-domain RL, 1M backbone and multimodal components.

### Raw benchmarks found

Compared [Xiaomi's primary weights/model-card score table](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) with independently run [Vals](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro) and [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-pro); [BenchLM](https://benchlm.ai/models/mimo-v2-6-pro) is an attributed evidence index, not a third experimental run. Vals ran the official Xiaomi API with reasoning and reported weaker results on several harder tasks; quote both, not an averaged faux benchmark.

Agent / tool use:

- [Xiaomi Terminal-Bench 2.1 **89.9%**, Terminal-Bench 4.0 **34.9%**, AutomationBench v1.0.6 **53.1%**, Toolathlon-Verified **76.9%**](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL). [Vals dated evaluation](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro) instead reports TB2.1 **67.79%** and current [TB4 **31.31% ±3.07**](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro); the TB2.1 gap is a substantial harness/time-limit caveat.
- [Xiaomi GDPval-AA 2.1 **1673 Elo**, OSWorld-Verified **82.0%**, Agents' Last Exam **31.6%**, JobBench **62.0%**](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL); independently [AA TB4 **34.8%** and AA AutomationBench **58.6%**](https://benchlm.ai/models/mimo-v2-6-pro).
- [Vals Index **55.20% ±1.18**](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro) (#14/47 on displayed cohort), Finance Agent v2 **57.34%**, CyberBench v1.1 **72.86%**, SRE Bench **3.05%**, Terminal-Bench Science **2.86%**. No exact Pro Tau3-Banking or Claw-Eval score verified.

Reasoning / knowledge:

- [AA Index v4.3.2 **46**](https://artificialanalysis.ai/models/mimo-v2-6-pro) (leading open-weights among AA's comparable cohort); [AA HLE **49.4%**, CritPt **26.6%**, Omniscience Index **8.4%**](https://benchlm.ai/models/mimo-v2-6-pro); low omniscience reliability tempers broad knowledge claims.
- [Vals ProofBench v1.1 **70.00%**, MysteryMechanism **15.31%** and IOI **39.33%**](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro), independent measured contrasts. No verified exact-model GPQA Diamond percentage found; don't substitute a predecessor.

Coding:

- [Xiaomi DeepSWE v1.1 **71.9%**, ProgramBench **26.5%**, MiMo Code Bench **63.2%**](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL); independently [Vals ProgramBench **0.50% fully resolved**](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro) (Xiaomi's and Vals's ProgramBench configurations/scoring differ dramatically).
- [Vals Vibe Code Bench v1.1 **85.22%**, Code Migration **43.01%**, TB4 **31.31%**](https://www.vals.ai/models/xiaomi_mimo-v2.6-pro); [AA SciCode **60.9%**](https://benchlm.ai/models/mimo-v2-6-pro). Exact SWE-bench Verified / LiveCodeBench: no verified public score found in consulted original results.

Long context / multimodal:

- [AA-LCR **86.3%**](https://benchlm.ai/models/mimo-v2-6-pro) for long-context reasoning; no independently verified MRCR/RULER retrieval figure at 512K–1M located. Native 1M capacity does not guarantee 98% long-range retrieval.
- [Xiaomi MiMo VisualCoding **72.3%**](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) is a vendor visual-agent result; [AA model page](https://artificialanalysis.ai/models/mimo-v2-6-pro) verifies advertised image/audio/video in and text out, but a standardized exact-model MMMU-Pro score was not found in these sources.

### Normalized scores (1–100)

- **Tool use: 82/100.** Xiaomi TB2.1 89.9%, AutomationBench 53.1% and Toolathlon 76.9% are strong, but independent Vals TB2.1 67.79% and SRE 3.05% limit confidence across harnesses.
- **Reasoning: 83/100.** AA Index 46 and HLE 49.4% imply strong open-weights reasoning; Omniscience 8.4%, Vals MysteryMechanism 15.31% and no GPQA cap it.
- **Context window: 96/100.** Verified 1M capacity and 128K/131K output qualify for the top range; near-1M retrieval is unmeasured, so not 100.
- **Multimodal: 93/100.** Native image/video/audio plus text input is unusually broad for open weights; provider-specific text/image caps, only text output and absent comparable vision-benchmark scores keep it below 100.
- **Coding: 86/100.** DeepSWE 71.9%, AA SciCode 60.9% and Vals Vibe Code 85.22% support strong code capability; TB4 ~31% and Vals ProgramBench 0.50% restrain longer task confidence.
- **Cost efficiency: 96/100.** Xiaomi $0.435/$0.87 and tiny $0.0036 cached-input pricing are excellent for 1M omnimodal open weights, although output caps and self-hosting costs still apply.
- **Overall Score: 88/100.** (82 + 83 + 96 + 93 + 86) / 5 = 88.0; best for affordable omnimodal analysis and mid-length coding, with independently tested harness limits noted.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Xiaomi model card/weights and provider documentation cross-checked against Vals, Artificial Analysis, OpenRouter and BenchLM's attributed rows; normalized scores are interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
