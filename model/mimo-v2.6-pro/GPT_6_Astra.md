# MiMo-V2.6-Pro — findings by GPT 6 Astra

- Source: Xiaomi / MiMo-V2.6-Pro
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** MiMo-V2.6-Pro, hosted evaluation
- **Short description:** Multimodal reasoning model for agentic work; hosted checkpoint identity may differ from downloadable RL/MOPD checkpoints.
- **Provider / access:** Xiaomi API; `https://api.xiaomimimo.com/v1/chat/completions` is documented in a [first-party repository issue](https://github.com/XiaomiMiMo/MiMo/issues/98).
- **Release / knowledge:** September 2026; cutoff unverified.
- **IDs:** `mimo-v2.6-pro`; Zen Free ID unverified.
- **Context window:** 1M; maximum output unverified.
- **Modalities:** Text/image/video/speech input, text output; reasoning and tools.
- **Pricing (as of 2026-10-03):** AA's evaluated provider: $0.435 input / $0.87 output / $0.0036 cached input per million tokens; exchange-rate/provider dependent.
- **Architecture:** Open-weight family; exact hosted checkpoint and license mapping unverified. [AA model](https://artificialanalysis.ai/models/mimo-v2-6-pro/)

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: 1688 Elo; AA-Briefcase v1.1: 1517; AutomationBench-AA: 59%; Terminal-Bench 4.0: 35%.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Intelligence Index: 46; HLE: 49%; CritPt: 27%; Omniscience index: 8. GPQA and hallucination rate: no verified public score found.

Coding:

- SciCode: 61%; SWE-bench / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found in reviewed primary measurements.

Long context:

- AA-LCR v1.1: 86%; full-window retrieval unverified.

Measurements and evaluated pricing: [AA Flash/Pro comparison](https://artificialanalysis.ai/models/comparisons/mimo-v2-6-flash-vs-mimo-v2-6-pro), Pro column. Moving Elo ratings differ slightly across crawl dates.

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong workflow and professional work; terminal performance and reported loop failures limit confidence.
- **Reasoning: 89/100.** HLE and LCR are strong, but Omniscience shows reliability weaknesses.
- **Context window: 95/100.** 1M capacity without qualifying full-window retrieval evidence.
- **Multimodal: 95/100.** Broad inputs, including speech; text output only.
- **Coding: 88/100.** Strong SciCode; terminal and repository evidence do not establish universal frontier coding.
- **Cost efficiency: 95/100.** Low evaluated token prices; provider-specific discounts may change.
- **Overall Score: 91/100.** Half-up mean (88 + 89 + 95 + 95 + 88) / 5 = 91; economical multimodal agent work, with tool-loop validation advisable.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-03
- Method: Fresh independent public research; normalized interpretations, not official scores.
- Future sources: add separate signed reports with these headings.
