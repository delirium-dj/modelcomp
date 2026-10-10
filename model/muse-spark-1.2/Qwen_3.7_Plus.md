# Muse Spark 1.2 — findings by Qwen 3.7 Plus

- Source: Meta/Muse Spark 1.2 (`opencode/muse-spark-1.2`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's coding/agent-optimized reasoning model, released August 5, 2026. Third Meta release in four months (after Muse Spark 1.0 in April and 1.1 in July). Co-trained with Muse Code for terminal coding, MCP tool use, and whole-repo generation. Scores 54 on the AA Intelligence Index (xhigh), up 3 points from Muse Spark 1.1 (51). GDPval-AA v2 Elo 1631 ranks #5 globally. Among the most cost-efficient models at its intelligence level ($0.40/task). Free Contributor tier available. Contributor, Free, and Max are the same weights — only price and data usage differ.
- **Provider / access:** Meta API; OpenRouter; OpenCode Zen (free Contributor tier with training-data consent). Standard: $1.25/$4.25 per 1M. Contributor: $0.10/$0.20. Free Zen tier available.
- **Release / knowledge:** 2026-08-05 release; knowledge cutoff not precisely documented.
- **IDs:** `opencode/muse-spark-1.2` (OpenCode Zen). Free Zen tier available.
- **Context window:** 1,048,576 tokens (1M) total; max output not specified.
- **Modalities:** Text, image, audio, video, and PDF in; text out. Full omnimodal input. Reasoning yes (extended thinking; effort levels). Tool calls supported. Co-trained with Muse Code agent.
- **Pricing (as of 2026-10-10):** Standard: $1.25 in / $4.25 out per 1M tokens. Cache hits: $0.15/M. Contributor: $0.10/$0.20. Free Zen tier available (training-data consent). One of the cheapest frontier-competitive models available.
- **Architecture:** Proprietary (Meta). Reasoning model. Co-trained with Muse Code for terminal/agent workflows. Same weights across all tiers (Contributor/Free/Max).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta; vs Muse Spark 1.1's 80%, +2 pts) / **69.7%** (Vals AI)
- GDPval-AA v2 (Elo): **1631** (Meta; #5 globally; vs Muse Spark 1.1's 1371, +260; ahead of Claude Opus 4.8's 1588)
- τ³-Banking: **27%** (Meta; vs Muse Spark 1.1's 25%, +2 pts)
- AA Agentic Index: **44.0%** (Artificial Analysis)
- Design Arena Website: **1319** (OpenRouter)

Reasoning / knowledge:

- AA Intelligence Index: **54** (xhigh; AA; up 3 from Muse Spark 1.1's 51; up 11 from Muse Spark 1.0's 43)
- GPQA Diamond: **90.4%** (Artificial Analysis)
- HLE (Humanity's Last Exam): **45.5%** (Artificial Analysis; vs Muse Spark 1.1's 44%, -1 pt)
- MMLU-Pro: **88.3%** (Vals AI)
- AA-Omniscience Index: **27.2%** (Artificial Analysis; up from 18, driven by abstention)
- AA-Omniscience Accuracy: **45.4%** (Artificial Analysis; down from 41%)
- AA-Omniscience Hallucination Rate: **33.3%** (Artificial Analysis; down 10 pts from 38% — good calibration)
- AA-Omniscience Attempt Rate: **67%** (heavy abstention when unsure)

Coding:

- SWE-bench (Vals): **86.6%** (Vals AI)
- DeepSWE: **59.3%** (Meta)
- VulcanBench v3: **87.0%** (VulcanBench Report)
- AA-SciCode: **57.4%** (Artificial Analysis; vs Muse Spark 1.1's 58%, -2 pts)
- AA Coding Index: **72.2%** (Artificial Analysis)
- FrontierSWE v2: **12.0%** (Proximal)
- Terminal-Bench 2.1: **82.9%** (also listed under tool use)

Long context:

- AA-LCR (Long Context Reasoning): **79.0%** (Artificial Analysis)
- CritPt (Physics): **17.7%** (Artificial Analysis; vs Muse Spark 1.1's 15%, +3 pts)

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 at 82.9% is strong. GDPval-AA v2 Elo 1631 ranks #5 globally, ahead of Claude Opus 4.8 (1588). τ³-Banking 27% is modest. AA Agentic Index 44.0% is moderate. The agentic profile is strong on knowledge work (GDPval) and terminal coding, with particular strength in Meta's Muse Code runtime for sustained tool use. Ginger Labs notes "mixed" broader agentic performance outside Meta's harness.
- **Reasoning: 83/100.** GPQA Diamond 90.4% is competitive. HLE 45.5% is solid (between GPT-5.5's 41.4% and Opus 4.7's 46.9%). MMLU-Pro 88.3% is strong. AA-Omniscience hallucination rate 33.3% is good — much better than GPT-5.5's 86%, comparable to Claude models. However, the heavy abstention (67% attempt rate) means accuracy drops to 45.4%. AA Intelligence Index 54 (xhigh) is solid but trails frontier leaders. CritPt 17.7% is low. Strong knowledge reasoning with good calibration, but not frontier-leading.
- **Context window: 85/100.** 1M-token context. AA-LCR 79.0% is solid. Standard frontier-class window. No specific MRCR or GraphWalks scores published. Adequate but not best-in-class for long-context retrieval.
- **Multimodal: 85/100.** Text, image, audio, video, and PDF input — full omnimodal support. Text output only. The multimodal capabilities are broad but specific multimodal benchmark scores (MMMU-Pro, CharXiv, etc.) are not published in available sources. Design Arena Website 1319 suggests UI generation capability.
- **Coding: 87/100.** SWE-bench 86.6% (Vals) is excellent. VulcanBench v3 87.0% is strong. Terminal-Bench 2.1 82.9% is competitive. AA Coding Index 72.2% is solid. However, DeepSWE 59.3% trails leaders (GPT-5.5 70%, Opus 4.8 58% — actually competitive with Opus). FrontierSWE v2 12.0% is very low. AA-SciCode 57.4% is moderate. The coding profile is strong on traditional benchmarks (SWE-bench, Terminal-Bench) but weaker on newer independent evaluations.
- **Cost efficiency: 93/100.** $1.25/$4.25 per 1M tokens is extremely cheap for a frontier-competitive model. $0.40 per Intelligence Index task — only Grok 4.5 ($0.37) and GPT-5.6 Sol medium ($0.39) are cheaper in its intelligence cluster. Free Contributor tier available. Contributor tier at $0.10/$0.20 is nearly free. Cache hits at $0.15/M. Near the Pareto frontier of Intelligence vs. Cost per Task. One of the best value propositions in the entire dataset.
- **Overall Score: 85.4/100.** Mean of five quality dims: (87 + 83 + 85 + 85 + 87) / 5 = 85.4. A cost-efficient coding/agent model from Meta that ranks #5 globally on GDPval-AA v2 (1631 Elo) and offers frontier-competitive SWE-bench (86.6%) and Terminal-Bench (82.9%) at a fraction of the cost of closed frontier models. Best fit for agentic coding workflows (especially within Meta's Muse Code runtime), cost-sensitive deployments needing strong coding performance, and teams wanting free/cheap access to a capable reasoning model. Key weaknesses: DeepSWE 59.3% trails leaders, heavy abstention on AA-Omniscience reduces effective accuracy, and broader agentic performance outside Meta's harness is "mixed" per Ginger Labs. Successor Muse Spark 1.3 has since surpassed it.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Meta official announcements, Artificial Analysis, BenchLM, Vals AI, VulcanBench, Ginger Labs, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
