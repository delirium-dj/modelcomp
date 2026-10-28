# Claude Opus 4.8 — findings by GPT-6 Luna

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's proprietary flagship model released May 28, 2026, positioned for complex coding, agentic and knowledge-work tasks. It is a distinct Opus release, not a tier alias.
- **Provider / access:** Anthropic Claude API, Messages API; also available through Bedrock, Google Cloud and Microsoft Foundry. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-8/overview)
- **Release / knowledge:** Released May 28, 2026; reliable knowledge and training-data cutoff Jan 2026. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-8/overview)
- **IDs:** Claude API `claude-opus-4-8`; Bedrock `anthropic.claude-opus-4-8`. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-8/overview)
- **Context window:** 1M tokens; synchronous max output 128K (up to 300K in the Message Batches API with the documented beta header). [Official model overview](https://platform.claude.com/docs/en/models/opus-4-8/overview)
- **Modalities:** Text and image input, text output; adaptive thinking (default effort `high`) and API tool use. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-8/overview)
- **Pricing (as of 2026-10-28):** $5 input / $25 output per MTok; 5-minute cache write $6.25, 1-hour cache write $10, cache read $0.50; Batch API input/output are 50% off. Fast mode is $10/$50 per MTok. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-8/overview) · [Anthropic launch post](https://www.anthropic.com/news/claude-opus-4-8)
- **Architecture:** Proprietary; parameter counts and a public architecture specification were not found.

### Raw benchmarks found

> Reported scores vary with harness, effort setting, and evaluation snapshot. The numbers below retain their original labels rather than treating unlike runs as equivalent.

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** in the Anthropic system-card result (Terminus-2 public harness); Anthropic's launch post confirms its reported results use that harness. Other sources publish **84.6%** (Artificial Analysis) and **86.9%** (Vals AI), reflecting different harness/result records. [System card](https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf) · [launch post / harness note](https://www.anthropic.com/news/claude-opus-4-8) · [Artificial Analysis model page](https://artificialanalysis.ai/models/claude-opus-4-8) · [Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-8)
- GDPval-AA: **1,890 Elo** at max effort in Artificial Analysis' launch evaluation; BenchLM lists **1,593** from the system card. These are retained as separate reported results, not averaged. [Artificial Analysis launch analysis](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks) · [BenchLM source table](https://benchlm.ai/models/claude-opus-4-8)
- Tau2-Bench Telecom: **94.4%**; Tau3-Banking: **34.2%** (different tasks and benchmark variants). [BenchmarkList model page](https://benchmarklist.com/models/anthropic-claude-opus-4.8/)
- Toolathlon: **79.9% Pass@1**; MCP Atlas: **83.6%**. [BenchmarkList model page](https://benchmarklist.com/models/anthropic-claude-opus-4.8/)
- Claw-Eval / ClawProBench: **no verified public score found**.
- Anthropic also reports **84% on Online-Mind2Web** in its launch post. [Anthropic launch post](https://www.anthropic.com/news/claude-opus-4-8)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** and Humanity's Last Exam: **57.9%** in the system-card results. BenchLM separately lists Artificial Analysis HLE at **48.7%**; the distinct reported results are not combined. [System card](https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf) · [BenchLM source table](https://benchlm.ai/models/claude-opus-4-8)
- Artificial Analysis Intelligence Index: **61.4** at launch (max effort). [Artificial Analysis launch analysis](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks)
- CritPt: **20.9%**; AA-LCR: **77.7%**. [Artificial Analysis model page](https://artificialanalysis.ai/models/claude-opus-4-8)
- AA-Omniscience: launch article reports **46.6% accuracy / 35.9% hallucination rate**; BenchLM's later-crawled AA page lists **48.8% / 39.3%**. Snapshot/method differences are unresolved, so these figures are not substituted for each other. [Artificial Analysis launch analysis](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks) · [BenchLM source table](https://benchlm.ai/models/claude-opus-4-8)

Coding:

- SWE-bench Verified: **88.6%**; SWE-bench Pro: **69.2%**; Terminal-Bench 2.1: **74.6%** in the system card. [System card](https://cdn.sanity.io/files/4zrzovbb/website/c886650a2e96fc0925c805a1a7ca77314ccbf4a6.pdf)
- LiveCodeBench (Vals): **87.8%**; AA-SciCode: **54.4%**; DeepSWE: **59.0%**; AA Coding Index: **74.3**. [BenchLM source table](https://benchlm.ai/models/claude-opus-4-8)

Long context:

- API context window: **1M tokens**. BenchmarkList reports MRCR v2 8-needle at 256K: **83.2%**; GraphWalks at 1M: Parents **83.3% F1**, BFS **68.1% F1**. These tasks measure different retrieval behaviors; no 98%+ retrieval result at 512K+ was verified. [Official model overview](https://platform.claude.com/docs/en/models/opus-4-8/overview) · [BenchmarkList model page](https://benchmarklist.com/models/anthropic-claude-opus-4.8/)

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong AA GDPval-AA (1,890 Elo), Tau2 Telecom, Toolathlon and MCP Atlas results support frontier agent performance; the lower system-card Terminal-Bench 2.1 (74.6%) and Tau3-Banking (34.2%) cap the score, with material harness/report conflicts noted above.
- **Reasoning: 96/100.** GPQA Diamond 93.6%, HLE 57.9% and AA Intelligence Index 61.4 are frontier-level; differing HLE/Omniscience snapshots and no uniform cross-harness reconciliation prevent a near-perfect score.
- **Context window: 95/100.** The official 1M-token tier maps to 95–100; 83.2% MRCR at 256K and mixed 1M GraphWalks results do not establish ≥98% retrieval at 512K+, so it does not receive 100.
- **Multimodal: 65/100.** Image input qualifies for the image-capable tier; the verified model specification lists text/image input and text output, not audio or generated non-text output.
- **Coding: 91/100.** SWE-bench Verified 88.6%, LiveCodeBench 87.8% and AA Coding Index 74.3 are strong; SWE-Pro 69.2%, SciCode 54.4% and the system-card Terminal-Bench 2.1 result cap the score.
- **Cost efficiency: 50/100.** At $5/$25 per MTok it is between the methodology's $3/$15 and $10/$50 reference points; cache-read and batch discounts help, but it remains a premium paid model.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions: (91 + 96 + 95 + 65 + 91) / 5 = 87.6. Best fit is premium coding, research and agent work where quality outweighs price; it is not a text-only or audio model.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent public searches, followed by verification against Anthropic's model documentation and launch materials and comparison with Artificial Analysis, BenchLM, BenchmarkList and Vals AI. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
