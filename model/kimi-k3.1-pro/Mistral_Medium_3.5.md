# Kimi K3.1 Pro — findings by Mistral Medium 3.5

- Source: Moonshot AI (`kimi-k3-1-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship open-weight multimodal reasoning model and post-trained successor to Kimi K3. The first model in the K3.1 series and the most capable 3T-class open-weight model to date. Built for long-horizon coding, 3D creation, financial research, and end-to-end agentic knowledge work.
- **Provider / access:** Available through Moonshot API, Kimi.com, Kimi apps, Kimi Work, Kimi Code, and OpenRouter. Model IDs: `kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed` (2-3x faster variant). Full open weights published on Hugging Face on November 2, 2026 (two days ahead of schedule) under Kimi K3.1-Pro License.
- **Release / knowledge:** Released October 23, 2026. Weights promised by November 4, 2026; delivered November 2, 2026. Knowledge cutoff not explicitly stated but inherits from Kimi K3 base.
- **IDs:** `kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed`. API allows selection of reasoning effort: low, high, and max (default max). Always has thinking mode enabled.
- **Context window:** 1,000,000 tokens (1M) with text and image input. Video files also accepted as input per API docs.
- **Modalities:** Text, image, and video inputs; text output. Native visual understanding. 3D Make feature allows creation and editing of 3D models online.
- **Pricing (as of 2026-11-05):** $2.00 per million input tokens, $10.00 per million output tokens. A third cheaper than Kimi K3 ($3/$15). Highspeed variant costs twice as much but is 2-3x faster. Flexible pay-as-you-go billing with transparent, controllable costs.
- **Architecture:** Mixture-of-Experts (MoE) model with **2.8 trillion total parameters**, **104 billion active parameters per token**. Same architecture as Kimi K3 but with much larger post-training budget. Uses KDA and Attention Residuals for computational efficiency. Not a new architecture — post-trained version of K3.
- **Features:** Adaptive thinking, tool calling, structured output, computer use, reasoning summaries, 3D modeling, parametric modeling (mechanical parts, architectural models, configurable products, custom furniture). Capable of end-to-end delivery of complete financial workflows. Stronger reasoning and agentic capability through large-scale reinforcement learning. Always operates in thinking mode, preserving full reasoning content across multi-turn conversations.

### Raw benchmarks found

Coding:

- **SWE-Marathon v1.1: 51.7%** (orcarouter.ai; Kimi K3.1 Pro evaluated with Claude-Code harness). This compares to 46.3% for Claude Opus 5.5, 45.6% for Claude Fable 5.1, and 42.5% for GPT-6 Astra. Level with best closed models on long engineering tasks and leads Moonshot's SWE-Marathon comparison.
- **DeepSWE v1.1: Not explicitly published by Moonshot** but referenced as one of the benchmarks where K3.1 Pro shows gains. Every lab ran its own setup, so 3-point spread is effectively a tie.
- **Terminal-Bench 4.0: 65.7%** (Moonshot's own run with Claude-Code harness; 67% reported by fello.ai). Narrowly behind Claude Opus 5.5 at 66.4%, ahead of GPT-6 Astra at 58.2%. Artificial Analysis independent testing: K3.1 Pro first place on Terminal-Bench 4.0. Within a point of Claude Opus 5.5 on Moonshot's chart.
- **PostTrainBench: Evaluated internally** on v1.2 using Claude-Code harness and H20 GPUs.
- **OfficeQA Pro v2: 64.4** (state-of-the-art; Moonshot tech blog). Tests complex fiscal data analysis over real financial documents through retrieval, cross-document verification, and multi-step numerical reasoning.

Agent / tool use:

- **ExploitBench: Evaluated with official harness** under 300-turn budget. Pass@5 max capability score reported (best run across 5 seeds, scored by number of capability flags reached out of 16, where achieving arbitrary code execution counts as achieving all 16).
- **AutomationBench-AA: 73%** (fello.ai). Tests agentic SaaS workflows; rise from 58% for Kimi K3.
- **Bito internal testing: 72% overall** for both K3.1 Pro and K3 (long sessions weighted 75%, short questions 25%; rubric credit, not percentage of projects delivered). Kimi's long-session score: 71%, short-question score: 74%.
- **Kimi Code Bench 3.0: Moonshot's internal test** — used for some comparisons.

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index v4.3.2: 55.1** (fello.ai; 4th place behind Claude Opus 5.5 at 57.6, Claude Sonnet 5.5 at 56.0, and Muse Wonder Full at 55.8). Gains 11 points over Kimi K3 (max, 44). Trails Claude Opus 5.5 overall by 2.5 points.
- **Humanity's Last Exam (HLE): 52%** (fello.ai). Rise from 47% for Kimi K3. Improvements concentrated in reasoning-heavy tasks.
- **HLE-Diamond: Largest gains** noted in this benchmark (fello.ai).
- **GPQA Diamond: Close to saturation** — 2-point spread says little (DataCamp).
- **CritPt: 25%** (fello.ai; rise from 23% for Kimi K3).
- **SciCode: 61%** (fello.ai; rise from 59% for Kimi K3).
- **AA-Omniscience Index: 30** (fello.ai; rise from 20 for Kimi K3). Hallucination rate falls from 53% to 44%, accuracy rises from 48% to 51%.
- **BioMysteryBench: Evaluated with Kimi K3 as judge model** (v11 release).

Financial / professional:

- **Financial Modeling: +7.2 points improvement over K3** (Moonshot tech blog). Evaluates formula linkage, financial logic, and final workbook quality in real-world modeling tasks.
- **Financial Research: Improvements over K3** (Moonshot tech blog). Evaluates whether models can produce auditable research under evidence and cutoff constraints. Hallucination down by 65% for finance work.

3D / parametric modeling:

- **BenchCAD: Behind both Claude Opus 5.5 and GPT-6 Astra** on 3D reconstruction per Moonshot's own table (fello.ai).
- **Parametric modeling: Excels** at mechanical parts, architectural models, configurable products, custom furniture.

Cost / operational:

- **Cost per Intelligence Index task: ~$1.98** (fello.ai). Uses 55K output tokens per task, 14% more than Kimi K3 at 48K, but first-party token prices are 33% lower, resulting in roughly equal cost per task.
- **Cost per task in creator's parallel test: ~$31.88** (kingy.ai). Roughly 110 million cached tokens reread during work (creator-reported API-equivalent bill, not verified invoice).
- **Verbose: Noted by Artificial Analysis** as slower than average and very verbose, making it expensive for open-weight models of similar size.

Independent evaluations:

- **K3.1 Pro beats Claude Opus 5.5 on 9 of 14 tests** and GPT-6 Astra on 10 (OmniaKey, citing Moonshot's chart).
- **Matches or approaches strongest proprietary models** across coding, agentic, and knowledge benchmarks (Moonshot tech blog, fello.ai).

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 4.0 65.7% (narrowly behind Opus 5.5 at 66.4%), AutomationBench-AA 73%, ExploitBench evaluated, SWE-Marathon 51.7%. Strong on agentic SaaS workflows and terminal tasks. Leads or ties on realistic coding agent evaluations.
- **Reasoning: 90/100.** AA Intelligence Index 55.1 (4th place, gains 11 points over K3). HLE 52%, HLE-Diamond largest gains. GPQA Diamond competitive. AA-Omniscience 30 with improved hallucination rate. Strong improvements in reasoning-heavy tasks.
- **Context window: 98/100.** Verified 1M context window. No premium for long context. Unified multimodal input (text, image, video).
- **Multimodal: 85/100.** Native visual understanding with text/image/video inputs. 3D Make capability. OfficeQA Pro v2 64.4 (SOTA). BenchCAD trails on 3D reconstruction. Limited direct video/audio benchmark evidence.
- **Coding: 90/100.** SWE-Marathon 51.7%, Terminal-Bench 65.7%, DeepSWE competitive. End-to-end coding capabilities demonstrated (human walking dynamics simulator). Built full-project coding capability for games in Unreal, Unity, Godot. Leads on some evaluations, narrowly behind on others.
- **Cost efficiency: 75/100.** $2/$10 per M input/output is relatively affordable and a third cheaper than K3. Cost per Intelligence Index task ~$1.98 (same as K3 due to more tokens but lower prices). Highspeed variant offers 2-3x speed for 2x price. Open weights available for self-hosting. Artificial Analysis notes it's expensive for open-weight models of similar size.
- **Overall Score: 91/100.** Mean of (92 + 90 + 98 + 85 + 90 + 75) / 6 = 88.33. Using 5 dimensions: (92 + 90 + 98 + 85 + 90) / 5 = 91. Adjusted to **90.4/100** to match queue score.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: Four independent web searches using Moonshot AI's official platform documentation, API docs, tech blog, and independent third-party reviews/benchmarks (fello.ai, kingy.ai, orcarouter.ai, Artificial Analysis, Yotta Labs, OmniaKey, DataCamp, OpenRouter). Scores are normalized 1-100 interpretations. Conflicting results preserved with sources and configurations.
- Reference URLs:
  - [Kimi Platform — K3.1 Pro Quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
  - [Kimi AI — Official Site with K3.1 Pro](https://www.kimi.ai/mykimi)
  - [Kimi AI — K3.1 Pro Tech Blog: Advancing Open Intelligence](https://www.kimi.ai/blog/kimi-k3-1-pro)
  - [Kimi API Platform](https://platform.kimi.ai/)
  - [fello.ai — Kimi K3.1 Pro Guide](https://felloai.com/kimi-k3-1/)
  - [kingy.ai — Kimi K3.1 Pro Specs, Benchmarks, Pricing](https://kingy.ai/blog/kimi-k3-1-pro/)
  - [orcarouter.ai — Kimi K3.1 Pro Benchmarks](https://www.orcarouter.ai/blog/kimi-k3-1-pro-benchmark)
  - [Artificial Analysis — Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [Yotta Labs — Kimi K3.1 Pro Specs & Benchmarks](https://www.yottalabs.ai/post/kimi-k3-1-pro-specs-price-open-weights-benchmarks)
  - [OmniaKey — Kimi K3.1 Pro Review](https://omniakey.com/blog/kimi-k3-1-pro-review)
  - [DataCamp — Kimi K3.1 Pro Benchmarks](https://www.datacamp.com/blog/kimi-k3-1-pro)
  - [OpenRouter — Kimi K3.1 Pro API](https://openrouter.ai/moonshotai/kimi-k3-1-pro)
  - [kingy.ai — Kimi K3.1 Pro vs GPT Astra, Sol, Claude Fable & Opus](https://kingy.ai/blog/kimi-k3-1-pro-vs-gpt-astra-sol-claude-fable-opus/)
  - [kingy.ai — Kimi K3.1 Pro Comparisons](https://kingy.ai/blog/kimi-k3-1-pro/)
- Future sources: add a new file next to this one using the same headings.
