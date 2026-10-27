# Muse Spark 1.3 — findings by Qoder Sonus

- Source: Meta / Muse Spark 1.3; Standard API at max reasoning is the evaluated quality profile.
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Muse Spark 1.3; Contributor is a discounted access mode, not a separate checkpoint. A currently free Zen tier was not verified.
- **Short description:** Meta's proprietary multimodal model for long-running coding and tool workflows. Its strong terminal and repository results coexist with weaker long-context reasoning and substantial reasoning-token consumption; retrieval accuracy alone does not establish reasoning reliability.
- **Provider / access:** Meta Model API and Muse Code; Meta documents Responses, Chat Completions, and Messages compatibility [S2]. OpenRouter serves `meta/muse-spark-1.3` through Chat Completions [S7]. Zen lists `muse-spark-1.3` at `https://opencode.ai/inference/openai/v1/responses` [S6].
- **Release / knowledge:** Released September 2, 2026 [S4, S5]. No exact knowledge cutoff verified in the consulted sources. Artificial Analysis now labels the release deprecated/superseded, while Meta still documents API availability; that evaluator label is not proof of API retirement [S2, S5].
- **IDs:** Meta `muse-spark-1.3` and `muse-spark-1.3-contributor`; OpenRouter `meta/muse-spark-1.3`; OpenCode `opencode/muse-spark-1.3`. No distinct free Muse Spark ID appears in the current Zen free-model list [S2, S6, S7].
- **Context window:** 1,048,576 tokens per current Meta documentation [S2]. Separate maximum output allowance was not verified; do not assume the entire window is usable output.
- **Modalities:** Text, images, video, and PDF input; text output; tools, structured output, search grounding, and configurable reasoning [S2]. Meta additionally advertises audio input but explicitly warns that 1.3 audio understanding is not fully supported and can degrade response quality. This report does not credit it as reliable full audio support. Max effort is unavailable on the Contributor endpoint [S2].
- **Pricing (as of 2026-10-27):** Standard input/output/cached input: **$1.25/$4.25/$0.15 per million tokens**, with no long-context premium [S3]. Contributor: **$0.10/$0.20/$0.002**, in exchange for permission to train on prompts, code, files, context, and responses; Standard content is not used for model training [S3]. Zen currently lists the Standard prices, not $0 [S6]. Search grounding adds **$2.50 per 1,000 queries** [S3]. Cost score below evaluates Standard, matching the max quality profile.
- **Architecture:** Proprietary; parameter count and active parameter count undisclosed [S5]. A separately named open-weight release is not evidence that this checkpoint has open weights.

### Raw benchmarks found

Results below distinguish independent measurements from Meta-reported results. Rounded values remain rounded; no missing precision is reconstructed.

Agent / tool use:

- Terminal-Bench 2.1: **86% max / 85% xhigh**, independently measured by Artificial Analysis at launch [S4]. Meta's own max score is **88.8%** [S1]. Keep these separate because the retrieved material does not establish identical agent harnesses and run settings.
- Tau3-Bench Banking: **52% max / 47% xhigh**, AA launch evaluation; max ranked first on that benchmark at the time, not necessarily today [S4]. No independently verified Tau2 score found.
- GDPval-AA v2: **1,754 Elo max / 1,709 Elo xhigh**, AA launch evaluation [S4]. The current AA index uses GDPval-AA v2.1, so these are explicitly historical v2 results [S5].
- OSWorld 2.0: **66.9% partial / 32.0% binary**, Meta-reported max results [S1]. Partial-credit and binary success are different metrics, not conflicting estimates of one quantity.
- JobBench: **64.9%**; DeepSearchQA: **90.3%**; AutomationBench: **49.6%**, all Meta-reported max results [S1].
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found in the consulted sources.
- SWEAtlas CodeBase QnA: **59.4%**, Meta-reported max; not equivalent to repository issue resolution [S1].

Reasoning / knowledge:

- GPQA Diamond: **94%**, AA's rounded launch result for both max and xhigh [S4].
- Humanity's Last Exam: **47% xhigh**; AA reports max gaining **2 percentage points**, implying approximately **49% max**, not a separately published precision measurement [S4].
- AA-LCR: **79%** for both effort settings, versus **83%** for 1.2 in the same launch comparison [S4]. This is reasoning over long context, not MRCR retrieval.
- MLCR: no verified public score found.
- CritPt: **26% xhigh**; max loses one point in AA's rounded comparison, approximately **25%** [S4].
- Artificial Analysis Intelligence Index: **62 max / 61 xhigh** at the September 2 launch; index revision is not explicitly specified in that article [S4]. The current max model page shows **48, rank 26/221**, explicitly under **v4.3.2**, whose evaluation mix includes Terminal-Bench 4.0 and GDPval-AA v2.1 [S5]. Do not treat 62 to 48 as a measured checkpoint regression.
- AA-Omniscience Accuracy: **44% max / 42% xhigh**, launch evaluation [S4]. Exact hallucination-rate percentages were not verified; AA explains that increased abstention reduced xhigh hallucinations while also reducing accuracy.

Coding:

- DeepSWE v1.1: **75.4%**, Meta-reported max; not independently reproduced in this research [S1].
- SWE-bench Verified / SWE-Pro: no verified public score found; DeepSWE is not relabeled as either benchmark.
- LiveCodeBench: no verified public score found.
- SciCode: **59% xhigh**, rounded independent AA launch result [S4]; a precise max score was not verified.
- Vibe Code Bench / separate Coding Index: no verified public score found.
- Independent terminal evidence is **86% max on Terminal-Bench 2.1** [S4]; it anchors the coding interpretation, with vendor DeepSWE and SWEAtlas as supporting, not independent, evidence.

Long context:

- MRCR **98.5% at 256K–512K** and **98.1% at 512K–1M**, Meta-reported max [S1]. The latter clears the repository's stated retrieval threshold for a 100 context score, but the result is vendor-reported and does not negate AA-LCR's 79%.

### Evidence reconciliation and limitations

1. **Effort and price must match.** September launch reviews call max a limited preview with unpublished pricing [S4, S8]; current Meta docs make max available on Standard but not Contributor [S2]. This report uses current Standard pricing for max, not Contributor or an old free promotion.
2. **Token efficiency is workload-dependent.** Meta reports about **20% fewer tool calls and 25% fewer tokens** in its engineers' comparisons with 1.2 [S9]. AA instead observed xhigh using approximately **57% more input and 8% more output tokens** on its agentic comparison; max used **62% more reasoning on GDPval-AA v2 and 28% more on Tau3 Banking** than xhigh [S4]. Those are different workloads and baselines, so neither is generalized into a universal savings claim.
3. **Current index versus launch index.** The live max page reports **$1.31 per index task**, whereas launch xhigh cost **$0.55 per task** [S4, S5]. Different effort and evaluation composition make a direct cost-regression claim unjustified.
4. **Multimodal ambiguity resolved conservatively.** AA lists text/image/video input [S5]; current Meta docs also list PDF/audio, but explicitly qualify 1.3 audio support [S2]. Tool-generated audio artifacts in demonstrations do not prove native audio generation.
5. **Independent websites are not automatically independent experiments.** Eigent reproduces AA's launch tables and explains the LCR/abstention regressions [S8]; it is useful corroboration but is not counted as a second benchmark run. Meta's evaluation-report URL returned raw PDF data that could not be reliably read through the text fetch; its numbers were verified on Meta's HTML model page instead. A DataCamp fetch returned 403 and supplies no evidence here.

### Normalized scores (1–100)

These are rubric-based judgments, not benchmark percentages or a new on-device evaluation. Current AA v4.3.2 is not compared numerically to the rubric's older index anchors.

- **Tool use: 95/100.** Independent TB2.1 86%, Tau3 Banking 52%, and GDPval-AA v2 1,754 support high-end agentic ability [S4]; imperfect binary computer-use success and missing Claw/MCP evidence cap confidence.
- **Reasoning: 91/100.** GPQA 94% and HLE near 49% support strong reasoning, but CritPt near 25%, AA-LCR 79%, and abstention-sensitive knowledge results prevent a near-perfect score [S4].
- **Context window: 100/100.** The 1,048,576-token API window plus vendor MRCR 98.1% at 512K–1M meets the project's top retrieval tier [S1, S2]; this score is not a guarantee of perfect long-context reasoning.
- **Multimodal: 88/100.** Documented image/video/PDF understanding earns the upper visual-input tier [S1, S2]; explicitly degraded audio support and text-only output prevent full-omni credit.
- **Coding: 94/100.** Independent TB2.1 86% and xhigh SciCode 59% support strong coding, reinforced by vendor DeepSWE 75.4% [S1, S4]; absent independent repository reproduction and unequal harnesses cap the rating.
- **Cost efficiency: 88/100.** Standard $1.25/$4.25 per million tokens fits the rubric's value tier [S3]; max token consumption and search charges limit real task savings. Contributor is cheaper but has different effort availability and privacy terms.
- **Overall Score: 94/100.** Half-up rounding of (95 + 91 + 100 + 88 + 94) / 5 = 93.6; cost excluded. Best for high-quality long-context coding and agents with explicit action checks, not unattended audio workflows.

### Sources and search audit

All URLs accessed 2026-10-27. Four successful fresh searches were run before drafting: `"Muse Spark 1.3" Meta model official benchmarks`; `Muse Spark 1.3 independent evaluation Artificial Analysis Terminal Bench DeepSWE max xhigh`; `site:dev.meta.ai "Muse Spark 1.3" "context" "Contributor"`; `"Muse Spark 1.3" "MRCR" "DeepSWE" 98.5`.

- [S1 — Meta HTML model card and benchmark table](https://dev.meta.ai/models/muse-spark)
- [S2 — Meta current model documentation](https://dev.meta.ai/docs/models)
- [S3 — Meta current pricing and rate limits](https://dev.meta.ai/docs/pricing-rate-limits)
- [S4 — Artificial Analysis independent launch evaluation, September 2](https://artificialanalysis.ai/articles/muse-spark-1-3)
- [S5 — Artificial Analysis current max model page, index v4.3.2](https://artificialanalysis.ai/models/muse-spark-1-3)
- [S6 — OpenCode Zen current routes, pricing, and privacy](https://opencode.ai/docs/zen/)
- [S7 — OpenRouter model-specific Chat Completions documentation](https://openrouter.ai/meta/muse-spark-1.3)
- [S8 — Eigent launch analysis; secondary discussion of AA measurements](https://www.eigent.ai/blog/muse-spark-1-3-meta-frontier-model)
- [S9 — Meta release announcement and internal efficiency comparison](https://research.meta.ai/blog/introducing-muse-spark-1-3)

---

## Signature

- Provided by: **Qoder Sonus** — 2026-10-27
- Method: Sequential public-web research under the user-assigned reporter label Qoder_Sonus; four successful searches, official API/model-card verification, independent benchmark comparison, and explicit conflict reconciliation. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separately signed findings file alongside this one using the same headings.
