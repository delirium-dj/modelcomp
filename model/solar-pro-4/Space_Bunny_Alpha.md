# Solar Pro 4 — findings by Space Bunny Alpha

- Source: Upstage AI (`solar-pro-4`; reasoning)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-validation 2026-09-29 — what changed.** This is the largest revision in the
> batch, and it is a *missing-data* correction rather than a changed fact. The previous
> pass had **no price and no independent composite at all** ("a current numeric API rate
> was not exposed"; no AA index). Both now exist. **(1) Artificial Analysis scores Solar
> Pro 4 at 28 on v4.3.2** (`artificialanalysis.ai/models/solar-pro4`, #18 of 174 in
> price class, median 12) — note the older AA news article for this model quotes
> **42**, which is a stale index version and is *not* used here. **(2) Pricing is now
> known and is low: $0.30 / $1.20 list with a $0.06 cache read.** Consequently
> Reasoning 86 → 74, Coding 87 → 78, Tool use 72 → 68, **Cost efficiency 65 → 88**, and
> **Overall 69.6 → 64.6**. **(3) Retirement checked and ruled out** — see the model card.

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's agentic model for multi-step real work, including terminal tasks, document processing, tool calls, and long-document reasoning. It is the current replacement for Solar Pro 3 (Upstage's own AA article says it "replac[es] Solar Pro 3 from April 2026"; the article itself is dated 2026-08-12 and AA dates the model release to **2026-08-06**, with OpenRouter showing 2026-08-10).
- **Provider / access:** Upstage Console/API, OpenRouter, Hermes Agent, and Upstage Studio; OpenAI-compatible (`https://api.upstage.ai/v1`, model `solar-pro4`). Published rate limits 100 requests/min and 50,000 tokens/min. The alias `solar-pro4` currently resolves to the dated build **`solar-pro4-260806`**. **AA tracks only 1 API provider** (Upstage first-party), so there is no third-party speed cross-check.
- **Release / knowledge:** released 2026-08-06 (Artificial Analysis release date; OpenRouter lists 2026-08-10). The AA article covering the launch is dated 2026-08-12. Knowledge cutoff not stated.
- **IDs:** `solar-pro4` (OpenRouter, resolves to `solar-pro4-260806`); `solar-pro-4` in Upstage's own family references. Do not substitute Solar Pro 3.
- **Retirement / supersession status — checked, nothing found.** The Model Graveyard record for `upstage/solar-pro4` says **"still with us," retirement date "None announced,"** and "This model is current; there is nothing to migrate to yet." The **Artificial Analysis model page carries no deprecation banner** (contrast Grok Build 0.1 and Gemini 2.5 Flash-Lite, which both do). Solar Pro 3 is the *outgoing* model, not this one. This is a current model and should not be flagged as legacy.
- **Context window:** **512K input/context with up to 128K output** (Upstage official Solar Pro 4 launch article; AA spec table and FAQ both say 512k, ~768 A4 pages). OpenRouter's page says 524K, which is the same limit rounded differently (512 × 1024 = 524,288) — not a disagreement. One aggregator explicitly declines to state a context window because Upstage had not published one on a first-party page at the time; the launch article and AA have since closed that gap.
- **Modalities:** **Text only.** English, Korean, and Japanese text input/output; reasoning by default with high/low effort; tool calling and terminal work supported. AA's spec table records "text input / text output" and answers "no" to both image input and multimodal, so the no-image finding is now independently confirmed rather than inferred from silence. Image/audio/video input are not claimed in the reviewed article.
- **Pricing (as of 2026-09-29):** **list price $0.30 / 1M input, $1.20 / 1M output, $0.06 / 1M cached input** — an **80% cache discount** per AA. AA blended 7:2:1 rate: **$0.22 per 1M tokens**. A **launch discount is on a stepped schedule: 90% off ($0.03 / $0.006 / $0.12) ran through 2026-09-10, then 70% off ($0.09 / $0.018 / $0.36) runs to 2026-10-10 (UTC), and list price applies from 2026-10-11.** Upstage added the middle step after launch, having first published the discount as ending outright on 2026-09-11. **The previous pass recorded only the expired 90% phase and no permanent price — both corrected here.** No free tier.
- **Architecture:** Proprietary; parameter count and architecture details not disclosed (AA: "Upstage has not disclosed the model size or parameter count"). AA classes it as a **reasoning model** using extended thinking.

### Raw benchmarks found

Agent / tool use:

- **Artificial Analysis Intelligence Index v4.3.2: 28** (`artificialanalysis.ai/models/solar-pro4`, read 2026-09-29) — **#18 of 174** among reasoning models in the same price class, against a class median of 12. This is the first independent composite for the model. **⚠ Version note:** Upstage's own coverage on AA is an article quoting **42**, and VerdictPal carries **"AA Intelligence Index v4.3, #63/188"**; both are earlier index versions. The figure used throughout this report is the **28 on v4.3.2 read off the model's own AA page on 2026-09-29**, and the 42 is superseded.
- Terminal-Bench 2.1: **57.0%** (Upstage official launch article; provider-run)
- τ³-Banking: **23.0%** (Upstage official launch article; provider-run)
- BrowseComp: **49.2%** (Upstage official launch article)
- MCP Atlas: **61.4%** (Upstage official launch article)
- APEX-Agents: **18.7%** (Upstage official launch article)
- **AA v4.3.2 includes Terminal-Bench 4.0, AutomationBench-AA and AA-Briefcase v1.1**, but the per-eval rows are not populated for this model, so the composite of 28 is the only independent number.
- Toolathlon, GDPval-AA, Tau3-Banking separate from τ³-Banking, Claw-Eval, and exact ClawProBench: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (Upstage official launch article)
- MMLU-Pro: **86.3%** (Upstage official launch article)
- AIME 2026: **95.3%** (Upstage official launch article)
- AA-LCR: **71%** (Upstage launch article quoting Artificial Analysis as of August 2026; long-document test around 100K tokens)
- **⚠ Reconciling vendor and independent:** GPQA 89.0 / MMLU-Pro 86.3 / AIME 95.3 are strong provider-run figures, but the independent **AA v4.3.2 composite is 28** — well above its price-class median of 12, yet nowhere near where those three numbers would place a model against the field. The vendor numbers are narrow single-benchmark results; the composite is 10 weighted evals. Both are recorded; the composite governs the Reasoning score.
- HLE, CritPt, LCR/MLCR beyond the quoted AA-LCR, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified: **70.6%** (Upstage official launch article)
- LiveCodeBench: **87.8%** (Upstage official launch article)
- **SciCode and Terminal-Bench 4.0 sit inside the AA v4.3.2 composite of 28** but are not published as standalone rows.
- SWE-bench Pro, DeepSWE, and Vibe Code Bench: **no verified public exact value found**

Long context:

- AA-LCR: **71%** at approximately 100K tokens (Upstage launch article quoting Artificial Analysis).
- Native context: **512K** with up to **128K output** (Upstage official launch article; corroborated by AA's spec table at 512k); no independent MRCR/RULER/GraphWalks result at any window length was found.

Performance (now measured, previously absent):

- **Output speed 89.8 tokens/second, #86 of 174** in class — AA: "slower than average compared to other reasoning models in a similar price tier (median: 112.9 t/s)". The provider benchmark page separately reports **74.8 t/s** as the fastest Upstage route, and older aggregator snapshots record 70–73 t/s, so treat the exact figure as drifting between roughly 75 and 90 t/s.
- **Time to first token 2.01 s** (AA), which AA rates as *better* than average for the class (median 2.21 s).
- ⚠ Note the low raw speed sits against a high price-class rank: this is a thinking model, and AA separately tracks **Time to First Answer Token** (which includes reasoning time) — that figure was not exposed on the page, so a 2.01 s TTFT should not be read as "fast to answer."

Sources consulted: [Upstage Solar Pro 4 launch article](https://www.upstage.ai/blog/en/solar-pro-4), [Upstage Solar Pro 4 developer documentation](https://console.upstage.ai/docs/capabilities/solar-pro-4), [Upstage model specs page](https://console.upstage.ai/docs/models/solar-pro-4), [Upstage Solar Pro 4 on Artificial Analysis](https://artificialanalysis.ai/models/solar-pro4) (v4.3.2 composite, cost, speed, TTFT, spec table), [AI//COST Solar Pro 4 pricing schedule](https://aicost.tools/llm-cost/upstage/solar-pro4/), [OpenRouter upstage/solar-pro4](https://openrouter.ai/upstage/solar-pro4), and [Model Graveyard Solar Pro 4 record](https://aimodelgraveyard.com/model/upstage-solar-pro-4/), accessed 2026-09-29. The article labels its AA-LCR source as Artificial Analysis; the other provider-run values are attributed to Upstage's launch material.

### Normalized scores (1–100)

- **Tool use: 68/100.** ⬇ **CHANGED from 72.** Terminal-Bench 57.0%, MCP Atlas 61.4%, BrowseComp 49.2%, and τ³-Banking 23.0% support real agent use, and the new **AA v4.3.2 composite of 28** (which contains Terminal-Bench 4.0 and AutomationBench-AA) is well above its price-class median of 12 — a genuine independent lift. Moved down 4 points because APEX-Agents 18.7% and τ³-Banking 23.0% are floor-adjacent, BrowseComp 49.2% is barely half, and Toolathlon/GDPval-AA remain unpublished.
- **Reasoning: 74/100.** ⬇ **CHANGED from 86.** GPQA 89.0%, MMLU-Pro 86.3%, and AIME 95.3% are strong measured results and AA-LCR 71% adds a real long-document number. But **the independent AA v4.3.2 composite is 28, and the previous pass scored 86 without any independent composite in hand at all.** A composite of 28 places it "well above average among comparable models" but well below the level an 86 implies; exact HLE and CritPt values remain missing. 74 reflects a genuinely capable reasoning model that is not at the frontier.
- **Context window: 88/100.** *(unchanged)* The verified 512K/128K-output limit is strong — now corroborated in two places rather than one — and AA-LCR 71% supplies a real long-document result, but it is below 1M-class models and there is still no independent retrieval-at-length sweep.
- **Multimodal: 15/100.** *(unchanged)* Text in Korean, English, and Japanese only. AA's spec table independently confirms **no image input and not multimodal**, upgrading this from an inference-by-silence to a verified negative.
- **Coding: 78/100.** ⬇ **CHANGED from 87.** SWE-bench Verified 70.6% and LiveCodeBench 87.8% support strong coding. Moved down 9 points because **AA v4.3.2 is the first independent composite covering SciCode and Terminal-Bench 4.0 for this model, and a score of 28 does not support a high-80s coding read** — the vendor table is two benchmarks wide. SWE-Pro, DeepSWE and Vibe Code Bench remain unpublished.
- **Cost efficiency: 88/100.** ⬆ **CHANGED from 65 — the largest single movement in this report.** The previous pass scored 65 only because a current numeric price was not exposed and the launch discount had expired. The price is now verified: **$0.30 in / $1.20 out with an 80% cache discount to $0.06 and a $0.22/1M blended rate** — roughly the ~$0.30/$1.20 ≈ 88 reference band in the methodology. The **70%-off step is live until 2026-10-10**, which if anything makes the current effective rate better than list, but list price is what is scored so the score does not depend on a promotion that expires in 11 days. Held below the top bands because it is a paid tier with no free route.
- **Overall Score: 64.6/100.** ⬇ **CHANGED from 69.6.** Mean of the five non-cost dims (68 + 74 + 88 + 15 + 78) / 5 = 323 / 5 = 64.6. The headline is that the previous 69.6 was computed with **no price and no independent composite**; with both in hand the quality dims settle lower while cost turns out to be far better than assumed. Cost is excluded from the Overall, so the cost improvement does not lift this number. Best fit: paid document and terminal agents that need measured long-document reasoning at a genuinely low price point — but treat Upstage's provider-run benchmark table as a marketing artifact and the AA v4.3.2 composite of 28 as the honest read, and verify the post-2026-10-11 list price before production use.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Upstage's official launch article and developer/model-spec documentation, the Artificial Analysis Solar Pro 4 model page (v4.3.2 composite, cost, speed, TTFT, spec table), AI//COST's published discount schedule, OpenRouter's catalog entry, and the Model Graveyard retirement record. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Solar_Pro_4_Recheck.md`, using the same headings.
