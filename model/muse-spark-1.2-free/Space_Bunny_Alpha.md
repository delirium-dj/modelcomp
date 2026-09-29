# Muse Spark 1.2 Free — findings by Space Bunny Alpha

- Source: Meta via OpenCode Zen (`muse-spark-1.2-contributor-free`; standard family ID `muse-spark-1.2`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-validation 2026-09-29 — **MATERIAL CHANGE.** Two facts moved. (1) **The free route is gone.** OpenCode Zen's model table and pricing table (page last updated 2026-09-28) no longer list `muse-spark-1.2-contributor-free` in any form; the only Muse Spark contributor-free route is now `muse-spark-1.3-contributor-free`. Muse Spark 1.2 survives on Zen as a **paid** model at $1.25 / $4.25 per 1M tokens. (2) **Artificial Analysis marks Muse Spark 1.2 deprecated** and points to Muse Spark 1.3 as the successor. The AA Intelligence Index itself did **not** move: Muse Spark 1.2 (xhigh) is still **40** on v4.3.2. Throughput did move: 172.4 → **240.1 tokens/s**, now #4 of 216. Because the free alias is no longer purchasable, cost efficiency is rescored against the paid list price.

## Model card

- **Name:** Muse Spark 1.2 Free (contributor route; **withdrawn** — see above)
- **Short description:** OpenCode Zen's former free/contributor route to Meta's Muse Spark 1.2 family, a very fast multimodal reasoning model for coding and agent workflows. As of 2026-09-29 Zen lists no free Muse Spark 1.2 route; the free Muse Spark offering has moved to Muse Spark 1.3. The standard Muse Spark 1.2 remains available on Zen and on Meta's own API.
- **Provider / access:** OpenCode Zen (`https://opencode.ai/zen/v1/responses`); AI SDK OpenAI package. Zen's endpoint table now lists **Muse Spark 1.2** (`muse-spark-1.2`) and **Muse Spark 1.3 Contributor Free** (`muse-spark-1.3-contributor-free`); the `muse-spark-1.2-contributor-free` ID is absent from both the endpoint table and the pricing table. The contributor tier carries the same data-use tradeoff as before: permission to use prompts and completions to train future Meta models.
- **Release / knowledge:** Artificial Analysis lists Muse Spark 1.2 as released 2026-08-05 (August 2026); no knowledge cutoff was shown on the reviewed pages. AA now flags the model **deprecated** and recommends Muse Spark 1.3.
- **IDs:** `muse-spark-1.2-contributor-free` (previously evaluated alias, **no longer listed on Zen**); `muse-spark-1.2` (Zen model ID, paid); `muse-spark-1.3-contributor-free` (current free Muse Spark route).
- **Context window:** 1M tokens for the Muse Spark family (Artificial Analysis, accessed 2026-09-29: 1,048,576 tokens, 131,072 max output per third-party catalogs).
- **Modalities:** The family supports text, image, speech, and video input with text output (Artificial Analysis, re-confirmed 2026-09-29). No different modality list was shown for the contributor route.
- **Pricing (as of 2026-09-29):** OpenCode Zen lists **Muse Spark 1.2 at $1.25 in / $4.25 out per 1M tokens, $0.15 cached read — paid, not free**. The former contributor-free route no longer appears in Zen's free-model table; Zen's notes say contributor-free routes are "available for a limited time." Artificial Analysis reports the same $1.25/$4.25 with an 88% cache discount (blended 7:2:1 rate $0.78 per 1M).
- **Architecture:** Proprietary; Meta has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (BenchLM, provider-exact Meta Muse Spark 1.2 page/harness)
- Terminal-Bench 2.1 (Vals AI): **69.7%** (BenchLM, Vals AI leaderboard; different harness)
- Artificial Analysis Intelligence Index v4.3.2: **40/100**, rank **#51/216** for standard Muse Spark 1.2 xhigh (Artificial Analysis, accessed 2026-09-29; value unchanged from the v4.1.1 reading of 40)
- Output speed: **240.1 tokens/s** (was 172.4 on 2026-09-24) — rank **#4 of 216**; time to first answer token **12.14s**; Intelligence Index task cost **$0.97** (Artificial Analysis, accessed 2026-09-29)
- Verbosity: **130M** output tokens across the Intelligence Index, vs a comparable-model median of 88M
- GDPval-AA v2.1, Tau3-Banking, AutomationBench-AA, Claw-Eval, and Toolathon/MCP-Atlas: **no verified public score found** for the exact contributor route

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **40** (Artificial Analysis, accessed 2026-09-29; unchanged)
- GPQA Diamond, HLE, AA-LCR v1.1, CritPt, AA-Omniscience, and hallucination metrics: **no verified public score found**

Coding:

- SWE-bench (Vals AI): **86.6%** (BenchLM, Vals AI leaderboard)
- DeepSWE: **59.3%** (BenchLM, provider-exact Meta Muse Spark 1.2 page/harness)
- FrontierSWE v2: **12.0%** (BenchLM, Proximal leaderboard)
- LiveCodeBench, SciCode / AA-SciCode, Vibe Code Bench, and exact SWE-bench Verified: **no verified public score found** for the exact contributor route

Long context:

- No public retrieval-at-length result for this exact model was found. The family has a verified 1M-token context-window claim, which AA lists among the largest on its leaderboard (~1,573 A4 pages).

Sources consulted: [OpenCode Zen documentation](https://opencode.ai/docs/zen/) (page last updated 2026-09-28), [Artificial Analysis Muse Spark 1.2](https://artificialanalysis.ai/models/muse-spark-1-2), and [BenchLM Muse Spark 1.2](https://benchlm.ai/models/muse-spark-1-2), accessed 2026-09-29. Standard-family benchmark values are not claimed as alias-specific measurements where the source does not say so. No Muse Spark 1.3 numbers are claimed here.

### Normalized scores (1–100)

- **Tool use: 88/100.** Exact-family Terminal-Bench 2.1 is 82.9% on the provider-exact BenchLM row and 69.7% on the Vals harness; AA Index 40 is strong, but the harness difference and missing Tau/GDPval values cap confidence.
- **Reasoning: 84/100.** AA Index 40 is well above the 2026-09-29 comparable-model median of 26; exact GPQA, HLE, and hallucination results were not found.
- **Context window: 95/100.** The family is verified at 1M tokens; no retrieval-at-length result was published.
- **Multimodal: 90/100.** Muse Spark 1.2 supports text, image, speech, and video input with text output.
- **Coding: 89/100.** DeepSWE 59.3%, SWE-bench Vals 86.6%, and Terminal-Bench 82.9% provide strong measured evidence, though not all are exact contributor-route measurements.
- **Cost efficiency: 74/100.** Rescored down from 96. The evaluated free/contributor route is no longer offered on OpenCode Zen, so cost is now the paid $1.25 / $4.25 list with $0.15 cached reads — still among the cheapest frontier-adjacent tiers and AA measured just $0.97 per index task, but no longer free, and the contributor data-training consent still disqualifies it for confidential code.
- **Overall Score: 89.2/100.** (88 + 84 + 95 + 90 + 89) / 5 = 446 / 5 = 89.2. Unchanged because cost efficiency is excluded from the mean. Best fit: fast multimodal coding agents and long-context work on the paid route; for a free Muse Spark route today, use `muse-spark-1.3-contributor-free` and accept the same data-use terms.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of OpenCode Zen (endpoint and pricing tables, page last updated 2026-09-28), Artificial Analysis (v4.3.2 Intelligence Index, accessed 2026-09-29), and BenchLM; benchmark values are labeled by source/harness and alias-level claims are kept separate. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Alpha_v2.md`, using the same headings.
