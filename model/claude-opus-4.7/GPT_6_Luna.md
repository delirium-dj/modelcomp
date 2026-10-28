# Claude Opus 4.7 — findings by GPT-6 Luna

- Source: Anthropic/Claude Opus 4.7
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's proprietary Opus model for advanced software engineering, long-running agent tasks, research, and professional work. It is a distinct release, not a separate effort tier; adaptive thinking and effort are configurable on the same model.
- **Provider / access:** Anthropic Claude API, Messages API; also available on Amazon Bedrock, Google Cloud, Microsoft Foundry, and Claude Platform on AWS. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-7/overview)
- **Release / knowledge:** Released April 16, 2026; reliable knowledge and training-data cutoff January 2026. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-7/overview) · [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)
- **IDs:** Claude API / Google-managed: `claude-opus-4-7`; Bedrock: `anthropic.claude-opus-4-7`. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-7/overview)
- **Context window:** 1M tokens; synchronous max output 128K, or 300K in Message Batches API beta with the documented header. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-7/overview)
- **Modalities:** Text and image input, text output; adaptive thinking with default API effort `high`, optional higher effort controls, and tool calling. The model supports image input up to a 2,576-pixel long edge (~3.75 MP). [Official model overview](https://platform.claude.com/docs/en/models/opus-4-7/overview) · [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)
- **Pricing (as of 2026-10-28):** $5 input / $25 output per MTok; 5-minute cache write $6.25, 1-hour cache write $10, cache read $0.50; Batch API input/output are 50% off. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-7/overview)
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count or a public architecture specification. [Artificial Analysis model page](https://artificialanalysis.ai/models/claude-opus-4-7)

### Raw benchmarks found

> Results vary by effort setting, run, harness, and benchmark revision. Variant-specific results are labeled; the reported numbers should not be treated as one directly comparable leaderboard run.

Agent / tool use:

- GDPval-AA: **1,753 Elo** (BenchmarkList's benchmark snapshot; Artificial Analysis independently identifies Opus 4.7 as state-of-the-art on GDPval-AA at launch). [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.7/) · [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)
- OSWorld-Verified: **83.6%**; Tau2-Bench Telecom: **88.6%**; Tau3-Banking: **34.6%**; Toolathlon: **59.3%**; MCP Atlas: **79.1%**. [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.7/)
- Terminal-Bench results conflict materially: Vals AI's model page reports **68.54%** for Terminal-Bench 2.1, while BenchmarkList lists **83.1%** for TB 2.1 and **69.4%** for TB 2.0. The sources do not expose enough shared run metadata to reconcile them. Anthropic confirms its launch Terminal-Bench 2.0 setup used Terminus-2, thinking disabled, five attempts, and averaged results. [Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-7) · [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.7/) · [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)
- Claw-Eval / ClawProBench: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **90.15%** (Vals AI); BenchLM's row sourced from the Artificial Analysis non-reasoning configuration lists **88.5%**. [Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-7) · [BenchLM](https://benchlm.ai/models/claude-opus-4-7)
- Humanity's Last Exam: **54.7%** in BenchmarkList's benchmark record versus **33.3%** in BenchLM's Artificial Analysis non-reasoning row; these are not a matched setup. [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.7/) · [BenchLM](https://benchlm.ai/models/claude-opus-4-7)
- AA-LCR: **75.7%** and CritPt: **5.1%** in the BenchLM table sourced to Artificial Analysis' non-reasoning run. [BenchLM](https://benchlm.ai/models/claude-opus-4-7)
- Artificial Analysis Intelligence Index: BenchmarkList records a historical **53.53** result; its current model page has deprecated legacy workloads and shows the refreshed v5 index as unavailable. Do not treat the historical composite as a current v5 score. BenchLM's separate partial-coverage aggregate is **65.44/100, rank #37 of 1,000**, not the project's score. [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.7/) · [Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7) · [BenchLM](https://benchlm.ai/models/claude-opus-4-7)
- AA-Omniscience Accuracy / Hallucination Rate: **44.7% / 54.1%** in BenchLM's source table for the Artificial Analysis non-reasoning configuration. [BenchLM](https://benchlm.ai/models/claude-opus-4-7)

Coding:

- SWE-bench Verified: **87.6%** in BenchmarkList's source table; Vals AI reports **82.0%** on its own SWE-bench run. Anthropic says its memorization screen flags some SWE-bench problems, but that the relative improvement remains when flagged tasks are excluded. [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.7/) · [Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-7) · [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)
- SWE-bench Pro: **64.3%**; LiveCodeBench: **85.1%** (Vals AI); SciCode: **54.5%**; DeepSWE: **54.0%** (BenchLM's Artificial Analysis source table). [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.7/) · [Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-7) · [BenchLM](https://benchlm.ai/models/claude-opus-4-7)
- Vibe Code Bench v1.1: **71.0%** (Vals AI). Anthropic's launch post separately cites CursorBench at **over 70%** in a partner evaluation. [Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-7) · [Anthropic announcement](https://www.anthropic.com/news/claude-opus-4-7)

Multimodal:

- MMMU-Pro: **85.55%** in Vals AI's model evaluation; the Artificial Analysis-sourced non-reasoning row in BenchLM lists **76.4%**. [Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-7) · [BenchLM](https://benchlm.ai/models/claude-opus-4-7)

Long context:

- API context is **1M tokens**. BenchmarkList reports OpenAI MRCR v2 8-needle **59.2% at 128K–256K** and **32.2% at 512K–1M**; GraphWalks at 1M: Parents **56.6 F1**, BFS **40.3 F1**. These are distinct retrieval tests; no 98%+ result at 512K+ was verified. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-7/overview) · [BenchmarkList](https://benchmarklist.com/models/anthropic-claude-opus-4.7/)

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1,753 Elo and OSWorld-Verified 83.6% are strong, but Tau3-Banking at 34.6%, Toolathlon at 59.3%, and the unresolved Terminal-Bench 2.1 spread (68.5–83.1%) keep it below the top tier.
- **Reasoning: 92/100.** GPQA Diamond is about 90% and the higher HLE record is 54.7%; conflicting HLE results (33.3% on an AA non-reasoning run), mixed index snapshots, and no unified effort-matched score cap confidence.
- **Context window: 95/100.** Officially 1M tokens, reaching the methodology's ≥1M tier; measured retrieval falls to 32.2% on MRCR at 512K–1M and 40.3 F1 on 1M GraphWalks BFS, so it does not earn 100.
- **Multimodal: 65/100.** Official text/image input qualifies for the image tier; there is no verified video, audio input, or non-text output capability.
- **Coding: 89/100.** SWE-bench Verified reaches 87.6% in one published record and LiveCodeBench 85.1%; SWE-Pro 64.3%, DeepSWE 54%, SciCode 54.5%, and inconsistent Terminal-Bench records prevent a higher score.
- **Cost efficiency: 50/100.** $5/$25 per MTok is premium pricing between the methodology's $3/$15 and $10/$50 reference points; cache reads and Batch discounts help but do not make it a low-cost model.
- **Overall Score: 85.8/100.** Half-up mean of the five quality dimensions: (88 + 92 + 95 + 65 + 89) / 5 = 87.8. Best suited to high-stakes coding and tool-assisted professional work where quality is worth the premium; do not assume reliable retrieval across the full 1M-token window.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public searches, then cross-checked Anthropic's model documentation and launch announcement against Artificial Analysis, BenchmarkList, BenchLM, and Vals AI. Effort/configuration, benchmark-version, and harness conflicts are kept explicit. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
