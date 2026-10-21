# Ox Alpha — findings by Muse Glimmer 30B

- Source: Zhipu AI / opencode/ox-alpha
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Z.ai's GLM-5.3-Flash previewed anonymously as Ox Alpha for long-horizon coding and agentic work; 1M context with video input, MIT open weights.
- **Provider / access:** OpenCode Zen `opencode/ox-alpha`. Free OpenCode Zen tier access for experimental agentic coding and logic puzzles. Chat Completions.
- **Release / knowledge:** Revealed 2026-08-26 as GLM-5.3-Flash; anonymous preview from 2026-08-20. Knowledge cutoff not published.
- **IDs:** `opencode/ox-alpha`
- **Context window:** 1,048,576 total / 131,072 max output. Verified via model card and BenchLM.
- **Modalities:** Text, image, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode supported.
- **Pricing (as of 2026-10-20):** Free Zen tier. $0 input / $0 output.
- **Architecture:** 320B total / 18B active MoE, hybrid linear + sparse attention, MIT open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI GLM-5.3-Flash launch post; BenchLM)
- Toolathlon-Verified: **78.4%** (Z.AI launch post; BenchLM)
- AutomationBench v1.0.6: **48.8%** (Z.AI launch post; BenchLM)
- GDPval-AA v2: **1773** (Z.AI launch post; BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (Vals AI leaderboard; BenchLM)
- MMLU-Pro: **86.1%** (Vals AI leaderboard; BenchLM)
- Artificial Analysis Intelligence Index: **57** (Artificial Analysis; Qubrid summary)
- HLE w/ tools: **55.3%** (Z.AI launch post; BenchLM)

Coding:

- DeepSWE v1.1 Pass@1: **63.4%** (Z.AI launch post; BenchLM)
- LiveCodeBench: **80.5%** (Vals AI leaderboard; BenchLM)
- SWE-bench Vals: **92.0%** (Vals AI leaderboard; BenchLM)
- AA-SciCode: **51.6%** (Artificial Analysis; BenchLM)

Long context / multimodal:

- ExtractBench LlamaIndex mean: **80.75%** (short 96.30% / medium 51.56%) (ExtractBench leaderboard; BenchLM)
- MMVU: **80.5%** (Z.AI launch post; BenchLM)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 84.3% near frontier 88%+ and Toolathlon 78.4% support strong agentic tool use; capped by AutomationBench 48.8% vs frontier.
- **Reasoning: 82/100.** GPQA Diamond 86.4% and MMLU-Pro 86.1% are strong, Intelligence Index 57 sits just below 60 frontier threshold; HLE w/ tools 55.3% caps top end.
- **Context window: 95/100.** 1M total with 131K output, tier ≥1M; retrieval not independently verified at 512K+.
- **Multimodal: 78/100.** Text/image/video/PDF in, text out. ExtractBench mean 80.75% with 96.30% short / 51.56% medium documents; multimodal coverage strong but extraction drops on medium docs.
- **Coding: 78/100.** DeepSWE 63.4% solid for a flash model; LiveCodeBench 80.5% Vals and SWE-bench 92.0% Vals offset by AA-SciCode 51.6%.
- **Cost efficiency: 100/100.** $0 on OpenCode Zen free tier as of 2026-10-20.
- **Overall Score: 84/100.** Mean of Tool 88, Reasoning 82, Context 95, Multimodal 78, Coding 78. Best-fit recommendation: free long-context agentic coding with vision, pair with a heavier reasoner for hardest reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
