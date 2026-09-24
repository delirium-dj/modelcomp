# Muse Spark 1.3 Contributor Free — findings by Space Bunny Alpha

- Source: Meta via OpenCode Zen (`opencode/muse-spark-1.3-contributor-free`; standard family ID `muse-spark-1.3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Contributor Free
- **Short description:** OpenCode Zen's contributor-priced route to Meta's Muse Spark 1.3, intended for coding and agent workloads in exchange for permission to use prompts and completions for future Meta model training. It is an access/pricing alias of the Muse Spark 1.3 family, not a separately benchmarked public model.
- **Provider / access:** OpenCode Zen (`https://opencode.ai/zen/v1/responses`), AI SDK OpenAI package. Zen lists `muse-spark-1.3-contributor-free` and standard `muse-spark-1.3`; the reviewed documentation identifies the contributor route as heavily discounted with training-data consent.
- **Release / knowledge:** Muse Spark 1.3 was released by Meta on 2026-09-02 according to Artificial Analysis; no knowledge cutoff was shown on the reviewed pages.
- **IDs:** `opencode/muse-spark-1.3-contributor-free` (evaluated alias); `muse-spark-1.3-contributor-free` (Zen model ID); standard family `muse-spark-1.3`.
- **Context window:** 1M tokens for the standard Muse Spark 1.3 family (Artificial Analysis, accessed 2026-09-24). A separate alias-specific limit was not displayed by Zen.
- **Modalities:** Standard family supports text, image, and video input with text output (Artificial Analysis). The alias-specific route was not documented with a different modality list.
- **Pricing (as of 2026-09-24):** Zen calls the contributor route heavily discounted but the reviewed page exposes no numeric alias price. Standard Meta API pricing reported by Artificial Analysis is $1.25/$4.25 per 1M input/output tokens with an 88% cache discount; that standard price is not substituted as the contributor price.
- **Architecture:** Proprietary; Meta has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **48/100**, rank **#17/210** for standard Muse Spark 1.3 max (Artificial Analysis, accessed 2026-09-24; composite benchmark)
- Output speed: **218.6 tokens/s**; cost per Intelligence Index task: **$1.60** (Artificial Analysis, accessed 2026-09-24)
- Terminal-Bench 2.1 / 4.0: **no verified public score found** for the exact contributor alias
- Tau3-Banking / Tau2-Bench: **no verified public score found** for the exact contributor alias
- GDPval-AA: **no verified public score found** as a standalone exact-alias value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **48** for standard Muse Spark 1.3 max (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** for the exact contributor alias
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for the exact contributor route was found. The standard family has a verified 1M-token context-window claim, but window size is not a retrieval benchmark.

Sources consulted: [OpenCode Zen documentation](https://opencode.ai/docs/zen), [OpenCode Zen model list](https://opencode.ai/zen/v1/models), and [Artificial Analysis Muse Spark 1.3](https://artificialanalysis.ai/models/muse-spark-1-3), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 84/100.** The standard family has an independently measured AA Intelligence Index of 48 and is positioned for coding agents, but exact alias-level Terminal-Bench, Tau, GDPval, and tool-call measurements were not published in the reviewed sources.
- **Reasoning: 84/100.** AA Index 48 is well above the comparable-model median of 25; missing exact GPQA, HLE, and hallucination values prevent a higher evidence-based score.
- **Context window: 95/100.** The standard family is verified at 1M tokens; no measured long-context retrieval result for the contributor route was found.
- **Multimodal: 90/100.** Standard Muse Spark 1.3 supports text, image, and video input with text output; the contributor route was not documented as a different model.
- **Coding: 80/100.** The family is marketed for coding agents and the AA composite includes coding, but exact SWE-bench, DeepSWE, LiveCodeBench, and SciCode values were not found for the exact alias.
- **Cost efficiency: 92/100.** The contributor route is heavily discounted, but Zen did not expose a numeric price; this is a provisional score based on the standard $1.25/$4.25 reference. Data-training consent is a material caveat.
- **Overall Score: 86.6/100.** (84 + 84 + 95 + 90 + 80) / 5 = 86.6. Best fit: high-capability coding and long-context agent work when the contributor data-use terms are acceptable; the missing alias-level benchmark breakdown is not a measured result.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenCode Zen documentation/model listing and Artificial Analysis model metadata; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
