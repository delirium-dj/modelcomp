# Muse Spark 1.3 — findings by GPT-5.6 Luna

- Source: Meta / Muse Spark 1.3
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs' proprietary multimodal reasoning model for long-horizon agentic workflows, coding, computer use, and multi-agent orchestration. The 1.3 release is a distinct version of Muse Spark, not an access-tier alias; the Contributor ID is a data-use/pricing tier of the same model family.
- **Provider / access:** Meta Model API (`muse-spark-1.3` and `muse-spark-1.3-contributor`); Muse Code; OpenRouter (`meta/muse-spark-1.3`, Chat Completions). Meta's developer page documents an OpenAI-compatible client, and OpenRouter documents the Chat Completions route.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff not publicly stated.
- **IDs:** `meta/muse-spark-1.3`; Contributor variant `meta/muse-spark-1.3-contributor`. I did not verify a separate OpenCode Zen Free ID.
- **Context window:** 1,048,576 tokens (1M), verified on Meta's model page and independently on Artificial Analysis. Meta reports MRCR retrieval of 98.5% at 256K–512K and 98.1% at 512K–1M. Maximum output was not stated in the reviewed official material.
- **Modalities:** Text, image, video, and document input; text output; reasoning; tool calls and multi-agent orchestration. Meta's model page explicitly advertises video, images, and documents. Audio support was not confirmed by the official page; an independent deployment review says audio is not fully supported in 1.3, so it is not credited here.
- **Pricing (as of 2026-11-02):** Standard `muse-spark-1.3`: $1.25 input / $0.15 cached input / $4.25 output per 1M tokens. Contributor `muse-spark-1.3-contributor`: $0.10 input / $0.002 cached input / $0.20 output, but Meta says that tier may use prompts and completions to improve its products. Prices and the tier distinction are from Meta's developer page.
- **Architecture:** Proprietary, closed-weight API model; parameter count and active/total architecture were not disclosed. Meta describes it as natively multimodal and trained for agentic workflows; an open-weights release is only described as future roadmap material.

### Raw benchmarks found

> The primary 1.3 scorecard is Meta's own comparison at stated reasoning settings (Muse Spark 1.3 max, Muse Spark 1.2 xhigh, GPT-5.6 Sol max, Opus 5 max). I retain the harness and caveats rather than treating vendor comparisons as independent leaderboard results.

Agent / tool use:

- GDPval-AA v2: **1754 Elo** (Meta 1.3 scorecard; professional knowledge work).
- JobBench: **64.9%** (Meta scorecard; multi-step workplace tasks).
- OSWorld 2.0: **66.9% partial / 32.0% binary** (Meta scorecard; computer-use evaluation).
- DeepSearchQA: **90.3%** (Meta scorecard; agentic browsing and research).
- Agentic IF Index: **57.8** (Meta internal instruction-following index).
- AutomationBench: **49.6%** (Meta scorecard; end-to-end business workflows).
- Terminal-Bench 2.1: **88.8%** (Meta scorecard; agentic terminal coding).
- MRCR: **98.5% at 256K–512K** and **98.1% at 512K–1M** (Meta scorecard; long-context retrieval).
- Independent conflict: Flowtivity reproduces most of Meta's scorecard but reports DeepSearchQA **89.4%** and AutomationBench **49.4%**, rather than Meta's rendered-table values of 90.3% and 49.6%. I retain the official values and flag the small transcription/harness discrepancy instead of averaging them.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36** on its Muse Spark 1.3 release page (independent tracker; current release view; page also lists 1M context and reasoning support).
- GPQA Diamond, HLE, LCR/MLCR, and CritPt: **no directly attributable 1.3 result verified in Meta's 1.3 scorecard**.
- BenchLM's family/base page reports GPQA-D **89.5%**, HLE **50.4%**, AA-LCR **78.0%**, and an AA Intelligence Index **31.3**, but the same page labels the covered model “Muse Spark” and lists a 262K context window. Those figures conflict with the 1.3-specific 1M-context release page and are treated as family/legacy or mixed-provider proxies, not as exact 1.3 scores.

Coding:

- DeepSWE v1.1: **75.4%** (Meta scorecard; long-horizon agentic software engineering).
- SWEAtlas CodeBase QnA: **59.4%** (Meta scorecard; codebase understanding).
- Terminal-Bench 2.1: **88.8%** (Meta scorecard; also relevant to tool use).
- LiveCodeBench, SciCode, SWE-bench Verified, and Vibe Code Bench: **no directly attributable 1.3 result verified in the reviewed primary scorecard**.
- Meta additionally reports roughly **20% fewer tool calls** and **25% fewer tokens** than Muse Spark 1.2 on its internal coding comparisons; this is an efficiency claim, not a public benchmark score.

Long context:

- MRCR **98.5% at 256K–512K** and **98.1% at 512K–1M** (Meta scorecard). This is the strongest exact-model evidence found and supports the 1M context claim.

Multimodal:

- Meta's model page verifies native perception of **images, video, and documents**, with text output. No exact 1.3 MMMU/vision score was found in the official 1.3 scorecard.
- BenchLM's family page lists MMMU-Pro **80.4%**, CharXiv **86.4%**, and ScreenSpot Pro **84.1%**, but its 262K “Muse Spark” identity makes these provisional proxies only; they are not used as exact 1.3 measurements.

### Normalized scores (1–100)

- **Tool use: 94/100.** GDPval-AA 1754, Terminal-Bench 2.1 at 88.8%, DeepSearchQA at 90.3%, and strong long-horizon workflow claims justify a frontier score; OSWorld partial 66.9%, AutomationBench 49.6%, and vendor-only comparisons cap it below the very top.
- **Reasoning: 90/100.** The 98%+ MRCR retrieval results and Artificial Analysis index of 36 support strong reasoning, while the absence of a clean 1.3 GPQA/HLE set and the conflicting family-level BenchLM index prevent a higher score.
- **Context window: 100/100.** The verified 1,048,576-token window plus 98.5%/98.1% MRCR retrieval at both long spans meets the methodology's ≥1M and ≥98% retrieval ceiling.
- **Multimodal: 85/100.** Official documentation verifies image, video, and document input with text output, matching the high video/PDF tier; unverified audio and no exact official multimodal score cap the rating.
- **Coding: 95/100.** DeepSWE 75.4%, Terminal-Bench 88.8%, and SWEAtlas 59.4% are frontier agent-coding results, with Meta also reporting lower tool/token use; the lack of independently reproduced 1.3 coding scores caps it.
- **Cost efficiency: 88/100.** Standard pricing is $1.25/$4.25 per 1M input/output tokens, approximately the methodology's ~$1.25/$4.25 band. Contributor is much cheaper but carries an explicit training-data trade-off and is a separate tier, so it is not silently scored as free.
- **Overall Score: 93/100.** Half-up mean of the five quality dimensions `(94 + 90 + 100 + 85 + 95) / 5 = 92.8`; best fit is long-context agentic coding and terminal work, not a universal substitute for independently validated general knowledge work.

---

## Signature

- Provided by: **GPT-5.6 Luna (openai/gpt-5.6-luna-fast)** — 2026-11-02
- Method: Three independent web searches plus official Meta documentation/release material and independent Artificial Analysis, BenchLM, Flowtivity, TrueFoundry, and OpenRouter pages were compared. Scores are normalized 1–100 interpretations, not official vendor scores; conflicting family-level or vendor-only figures are explicitly marked rather than merged.
- Reference URLs:
  - [Meta developer model card and pricing](https://dev.meta.ai/models/muse-spark)
  - [Meta AI Research: Introducing Muse Spark 1.3](https://research.meta.ai/blog/introducing-muse-spark-1-3)
  - [Meta evaluation methodology link](https://ai.meta.com/static-resource/muse-spark-eval-methodology)
  - [Artificial Analysis: Muse Spark 1.3 release intelligence](https://artificialanalysis.ai/models/releases/muse-spark-1-3)
  - [BenchLM: Muse Spark benchmark aggregation](https://benchlm.ai/models/muse-spark)
  - [Flowtivity: independent Muse Spark 1.3 benchmark analysis](https://flowtivity.ai/blog/meta-muse-spark-1-3-benchmarks-ai-agents/)
  - [TrueFoundry: independent deployment and pricing review](https://www.truefoundry.com/blog/muse-spark-1-3)
  - [OpenRouter: Meta Muse Spark 1.3 API documentation](https://openrouter.ai/meta/muse-spark-1.3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
