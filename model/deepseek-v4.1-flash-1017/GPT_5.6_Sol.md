# DeepSeek V4.1 Flash 1017 — findings by GPT-5.6 Sol

- Source: DeepSeek/DeepSeek-V4.1-Flash-1017
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** An MIT-licensed, open-weight multimodal reasoning update to DeepSeek V4.1 Flash, focused on faster and shorter execution with gains in reasoning, coding, agents, and visual tasks. It is especially competitive for economical long-context coding and tool-driven workloads.
- **Provider / access:** DeepSeek's OpenAI-compatible and Anthropic-compatible APIs; OpenRouter Chat Completions as `deepseek/deepseek-v4.1-flash-1017`; self-hosting from Hugging Face; Artificial Analysis tracks 19 hosted providers.
- **Release / knowledge:** Released 2026-10-17; no verified knowledge cutoff found.
- **IDs:** Weights `deepseek-ai/DeepSeek-V4.1-Flash-1017`; OpenRouter `deepseek/deepseek-v4.1-flash-1017`; DeepSeek first-party family alias `deepseek-flash` may advance over time, so exact reproducibility requires the 1017 weights/route.
- **Context window:** 1,048,576 tokens; official model card recommends `max_tokens` of at least 256K, while Vals tested with 384K maximum output.
- **Modalities:** Text and image input; text output; thinking/reasoning, interleaved images, tool calls, parallel tool calls, structured output/JSON, and Responses/Chat Completions prompt conversion.
- **Pricing (as of 2026-10-23):** DeepSeek's current V4-Flash family page lists $0.14 cache-miss input / $0.0028 cache-hit input / $0.28 output per 1M. Independent exact-1017 trackers report $0.30 input / $1.20 output, reflecting a provider/snapshot discrepancy; hosted prices vary, while self-hosting has infrastructure cost instead of token pricing.
- **Architecture:** Open-weight Causal Encoder-Decoder MoE, 552B total parameters with 8B active for input and 16B active for output according to DeepSeek's V4.1 architecture announcement; MIT license. The exact update retains the V4.1 family architecture.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **42.3%** (official model card, Claude Code harness) versus **31.82% ±2.62**, rank **18/54** (Vals independent run). This is a real harness/settings conflict, not averaged away.
- Automation-Bench v1.0.6: **60.5%** (official model card).
- Agents' Last Exam: **35.4%** (official model card).
- Vals Index: **61.26% ±1.05**, rank **8/26**; Finance Agent v2.1 **62.93% ±2.03**, rank **12/30**; Tax Agent Bench **44.35% ±3.57**, rank **6/75** (Vals).
- GDPval-AA: **55.0%** and AA AutomationBench **68.9%** are reported by BenchLM with Artificial Analysis attribution; treated as secondary aggregation because the live AA page did not expose these rows in its text response.
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- HLE without tools: **42.6%** overall and **44.0%** on the text-only subset (official model card).
- Artificial Analysis Intelligence Index v4.3.2: **45**, rank **#2/121** among the comparison class on the live exact-model page.
- AA-LCR: **84.0%**, CritPt **14.3%**, AA-Omniscience Accuracy **46.4%**, Hallucination Rate **96.5%** (BenchLM aggregation attributed to Artificial Analysis). These figures indicate strong long-context reasoning but poor calibrated knowledge; the exact live AA page exposes the aggregate rather than these component values.
- FrontierMath v2 Tiers 1-3 **67.368%** and Tier 4 **26.829%** are reported by BenchLM with Epoch AI links; the fetched Epoch benchmark page explains the harness but did not surface a model-filtered row, so these are retained as secondary evidence rather than primary scoring anchors.

Coding:

- DeepSWE v1.1: **77.0%** (official model card, Mini-SWE-V2 harness).
- ProgramBench: **29.1%**; NL2Repo-Bench: **68.2%** (official model card).
- Vibe Code Bench v1.1: **87.73% ±2.75**, rank **11/118**; Code Migration v1.1 **67.52% ±2.76**, rank **7/28** (Vals exact-1017 page).
- AA-SciCode: **51.9%** (BenchLM aggregation attributed to Artificial Analysis).
- SWE-bench Verified / LiveCodeBench: no verified exact-1017 public score found.

Multimodal:

- Chartography with tools: **83.0%**; BabyVision with tools: **92.5%**; ZeroBench-main with tools: **51.0%** (official model card).
- ExtractBench **87.11%**, ParseBench **65.72%**, and AA-MMMU-Pro **77.0%** are independently aggregated by BenchLM from LlamaIndex and Artificial Analysis sources.

Long context:

- Native context: **1M tokens**, confirmed by the official model card, DeepSeek platform, Artificial Analysis, and Vals.
- AA-LCR **84.0%** is reported by BenchLM from Artificial Analysis; it is strong but below the ≥98% threshold needed for a 100 context score.

### Cross-source comparison

- The official [DeepSeek model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) is the primary source for exact-ID HLE, Terminal-Bench 4.0, DeepSWE, ProgramBench, NL2Repo, Automation-Bench, Agents' Last Exam, and visual benchmark results.
- [Vals AI](https://www.vals.ai/models/deepseek_deepseek-v4.1-flash-1017) independently tests the exact 1017 model. Its Terminal-Bench 4.0 result is 10.48 points below the official card, while its Vibe Code and Code Migration results remain strong; the gap demonstrates meaningful harness sensitivity.
- [Artificial Analysis](https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017) measures Index 45, 198.4 tokens/s, 1.09 s time to first token, and confirms 1M context, image input, open weights, and the 552B/16B architecture.
- [BenchLM](https://benchlm.ai/models/deepseek-v4-1-flash) aggregates 46 benchmark records and reports 65.65/100 overall, but mixes exact-1017 rows with some base V4.1 Flash lineage rows. Only rows explicitly attributed to the exact 1017 model or clearly labelled independent exact-model evaluations are used here.
- [DeepSeek's API platform](https://www.deepseek.com/en/platform/) currently advertises lower family-alias pricing than AA and Vals report for exact 1017. This is treated as current first-party alias pricing, not proof that every pinned third-party route charges the same rate.

### Normalized scores (1–100)

- **Tool use: 82/100.** Automation-Bench 60.5%, Agents' Last Exam 35.4%, Vals Index 61.26%, and broad native tool support are strong; Terminal-Bench 4.0's 31.82–42.3% cross-harness range prevents a frontier score.
- **Reasoning: 88/100.** HLE 42.6% reaches the frontier reference and AA Index 45 is strong, but low CritPt and the secondary-source 96.5% hallucination rate materially cap reliability.
- **Context window: 95/100.** Native 1M context is independently confirmed and AA-LCR is reported at 84%; it lacks the ≥98% retrieval result required for 100.
- **Multimodal: 70/100.** Image input and excellent BabyVision/Chartography results earn the top of the image-only band, but there is no audio/video input or non-text output.
- **Coding: 92/100.** DeepSWE 77.0% exceeds the frontier reference, with Vibe Code 87.73% and NL2Repo 68.2% supporting breadth; inconsistent Terminal-Bench and absent SWE-bench Verified keep it below the maximum.
- **Cost efficiency: 97/100.** Current first-party $0.14/$0.28 pricing is near the rubric's highest paid-value tier, with extremely cheap cache hits; third-party exact-snapshot prices can be $0.30/$1.20 or higher.
- **Overall Score: 85/100.** Mean of the five non-cost dimensions; an unusually strong open-weight coding/reasoning value, constrained mainly by image-only multimodality and variable agent-harness results.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-23
- Method: independent public internet research with official model-card evidence cross-checked against Vals, Artificial Analysis, BenchLM, OpenRouter, and DeepSeek API documentation; conflicting harness and pricing results are shown explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
