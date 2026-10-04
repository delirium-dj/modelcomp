# MiMo-V2.6-Pro — findings by GPT 5.6 Sol

- Source: Xiaomi/MiMo-V2.6-Pro
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's MIT-licensed trillion-parameter sparse-MoE flagship for inexpensive long-context reasoning, multimodal understanding, coding, and agents.
- **Provider / access:** Xiaomi MiMo API as `mimo-v2.6-pro`, plus open weights (`XiaomiMiMo/MiMo-V2.6-Pro-RL`) and third-party inference providers.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not disclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro`; no verified OpenCode Zen Free ID found.
- **Context window:** 1M tokens with 128K maximum output.
- **Modalities:** The open-weight model card documents text, image, video, and audio input with text output; deep thinking, tool calling, streaming, web search, structured output, and caching.
- **Pricing (as of 2026-10-04):** $0.435/1M uncached input, $0.0036 cached input, and $0.87 output through Xiaomi.
- **Architecture:** Open-weight MIT sparse MoE, 1.02T total parameters with 42B active per token.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **67.79%** (Vals AI independent Terminus 2 run), versus Xiaomi's 89.9% claim.
- Artificial Analysis Intelligence Index: **46.32** (Xiaomi cites the independent composite).
- Toolathon / GDPval-AA / Tau3-Banking: no verified public score found.

Reasoning / knowledge:

- HLE: **49.35%** (Artificial Analysis independent text-only run).
- GPQA Diamond / CritPt / MLCR: no independently verified public score found in the consulted sources.

Coding:

- DeepSWE v1.1: **71.9%** in Xiaomi's model card; a training report gives 72.6%, neither independently confirmed.
- SWE-bench Verified / LiveCodeBench / SciCode: no independently verified public score found.

Long context:

- AA-LCR: **86.3%**, ranked third among configurations tracked by BenchLeader, with a 1M-token window.

Multimodal:

- Text, image, audio, and video input are documented by the open-weight model card; no independently verified public MMMU/CharXiv score found.

Sources: [Xiaomi official model page](https://mimo.mi.com/models/en-US/mimo-v2.6-pro), [The Model Gap evidence ledger](https://themodelgap.com/models/mimo-v2-6-pro), [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-pro/), and [BenchLeader](https://www.benchleader.com/models/mimo-v2-6-pro).

### Normalized scores (1–100)

- **Tool use: 85/100.** Independent Terminal-Bench 2.1 is capable but far below Xiaomi's claim, so agent quality is scored conservatively.
- **Reasoning: 89/100.** HLE 49.35 and an AA composite around 46 indicate strong frontier-adjacent reasoning, capped by sparse independent coverage.
- **Context window: 97/100.** A 1M-token window with 86.3% AA-LCR demonstrates excellent measured long-context use.
- **Multimodal: 92/100.** Broad native text, image, audio, and video input earns a high score, capped by limited independent multimodal evaluation.
- **Coding: 88/100.** DeepSWE around 72% is strong, but it remains vendor-reported and real-world reports are mixed.
- **Cost efficiency: 99/100.** $0.435/$0.87 pricing, near-free cached input, MIT weights, and 42B active parameters provide exceptional value.
- **Overall Score: 90/100.** Half-up mean of the five quality dimensions; best for low-cost million-token multimodal workloads where open weights and throughput economics matter.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-04
- Method: Fresh public internet research using Xiaomi documentation and independent benchmark evidence; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
