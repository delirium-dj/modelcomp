# Muse Spark 1.2 Free — findings by Space Bunny Alpha

- Source: Meta via OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`; standard family ID `muse-spark-1.2`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** OpenCode Zen's free/contributor route to Meta's Muse Spark 1.2 family, a fast multimodal reasoning model for coding and agent workflows. The free route carries a data-use tradeoff and is not a separately benchmarked public model.
- **Provider / access:** OpenCode Zen (`https://opencode.ai/zen/v1/responses`); AI SDK OpenAI package. Zen lists `muse-spark-1.2-contributor-free` and standard `muse-spark-1.2`; the contributor route is heavily discounted in exchange for permission to use prompts/completions to train future Meta models.
- **Release / knowledge:** Artificial Analysis lists Muse Spark 1.2 as released in August 2026; no knowledge cutoff was shown on the reviewed pages.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (evaluated alias); `muse-spark-1.2-contributor-free` (Zen model ID); standard family `muse-spark-1.2`.
- **Context window:** 1M tokens for the standard Muse Spark 1.2 family (Artificial Analysis and BenchLM, accessed 2026-09-24). A separate alias-specific limit was not displayed by Zen.
- **Modalities:** Standard family supports text, image, speech, and video input with text output (Artificial Analysis). No different modality list was shown for the contributor route.
- **Pricing (as of 2026-09-24):** Standard Meta API pricing is $1.25/$4.25 per 1M input/output tokens, with an 88% cache discount (Artificial Analysis); BenchLM reports cached input at $0.15. Zen calls the contributor route heavily discounted but does not expose a numeric alias price on the reviewed page.
- **Architecture:** Proprietary; Meta has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (BenchLM, provider-exact Meta Muse Spark 1.2 page/harness)
- Terminal-Bench 2.1 (Vals AI): **69.7%** (BenchLM, Vals AI leaderboard; different harness)
- Artificial Analysis Intelligence Index: **40/100**, rank **#47/210** for standard Muse Spark 1.2 xhigh (Artificial Analysis, accessed 2026-09-24)
- Output speed: **172.4 tokens/s**; time to first token **14.78s** (Artificial Analysis)
- GDPval-AA, Tau3-Banking, Claw-Eval, and Toolathon/MCP-Atlas: **no verified public score found** for the exact contributor route

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **40** (Artificial Analysis, accessed 2026-09-24)
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench (Vals AI): **86.6%** (BenchLM, Vals AI leaderboard)
- DeepSWE: **59.3%** (BenchLM, provider-exact Meta Muse Spark 1.2 page/harness)
- FrontierSWE v2: **12.0%** (BenchLM, Proximal leaderboard)
- LiveCodeBench, SciCode, Vibe Code Bench, and exact SWE-bench Verified: **no verified public score found** for the exact contributor route

Long context:

- No public retrieval-at-length result for the exact contributor route was found. The standard family has a verified 1M-token context-window claim.

Sources consulted: [OpenCode Zen documentation](https://opencode.ai/docs/zen), [Artificial Analysis Muse Spark 1.2](https://artificialanalysis.ai/models/muse-spark-1-2), and [BenchLM Muse Spark 1.2](https://benchlm.ai/models/muse-spark-1-2), accessed 2026-09-24. Standard-family benchmark values are not claimed as alias-specific measurements where the source does not say so.

### Normalized scores (1–100)

- **Tool use: 88/100.** Exact-family Terminal-Bench 2.1 is 82.9% on the provider-exact BenchLM row and 69.7% on the Vals harness; AA Index 40 is strong, but the harness difference and missing Tau/GDPval values cap confidence.
- **Reasoning: 84/100.** AA Index 40 is well above the comparable-model median of 25; exact GPQA, HLE, and hallucination results were not found.
- **Context window: 95/100.** The standard family is verified at 1M tokens; no retrieval-at-length result was published.
- **Multimodal: 90/100.** Standard Muse Spark 1.2 supports text, image, speech, and video input with text output.
- **Coding: 89/100.** DeepSWE 59.3%, SWE-bench Vals 86.6%, and Terminal-Bench 82.9% provide strong measured evidence, though not all are exact contributor-route measurements.
- **Cost efficiency: 96/100.** The free/contributor route is heavily discounted and has strong standard-family pricing, but the data-training consent requirement makes it unsuitable for confidential code.
- **Overall Score: 89.2/100.** (88 + 84 + 95 + 90 + 89) / 5 = 89.2. Best fit: fast multimodal coding agents and long-context work when the contributor data-use terms are acceptable; prefer the standard route for sensitive workloads.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenCode Zen, Artificial Analysis, and BenchLM; benchmark values are labeled by source/harness and alias-level claims are kept separate. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
