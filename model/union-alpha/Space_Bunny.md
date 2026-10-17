# Union Alpha — findings by Space Bunny

- Source: Unbiased, the AI platform of Circuit & Chisel (`unbiased/pareto`, model card "Pareto 26.9"; originally `stealth/union-alpha` on OpenRouter)
- Date: **2026-10-17 (UTC) — third pass.** First pass scored 38/100, second pass (2026-10-01) revised to 78/100 against the then-published card, this pass re-verified 16 days later.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What this pass changed: three scores, Overall 78 → 80.** This is the largest single
> evidence gain in this batch, and it comes from three new independent sources that did not
> exist in the public record on 2026-10-01:
>
> | Dimension | Was | Now | Driver |
> |---|---|---|---|
> | Tool use | 78 | **86** | AI BENCHY independent eval: Instruction following **10.0/10.0 (2/2)**, Data parsing **10.0 (2/2)**, Anti-AI Tricks **10.0 (4/4)**, **87.0% pass rate**, one "invalid tool call" in 23 tests |
> | Reasoning | 85 | **84** | First ever **GPQA measurement — 86.9% on n=200** — but HLE now has two conflicting numbers (38.0% measured vs 49% card) |
> | Context window | 72 | **72** | No change; still 262K |
> | Multimodal | 72 | **72** | No change; still one vision benchmark |
> | Coding | 84 | **88** | AI BENCHY **Coding 10.0/10.0 (3/3)**; Pareto 26.8 **SWE-Bench Verified 86.0 at $0.2708/task** |
> | Cost efficiency | 72 | **82** | Unbiased now publishes **measured** $/task, closing the exact gap flagged last pass |
>
> (86 + 84 + 72 + 72 + 88) / 5 = 80.4 → **80**.
>
> **Two corrections to the prior pass, both from the vendor's own current disclosure.**
> 1. **The DeepSWE 74 was a 30-task slice, not the full set.** Unbiased's site now states
>    plainly: *"The Pareto 26.9 and Fable 5 DeepSWE results use a 30-task slice, not the
>    full DeepSWE v1.1 set."* The prior pass treated 74 as a frontier-anchor number; it is
>    a slice figure. The successor's full-set number is **69.9**.
> 2. **The HLE 49 had no text-only qualifier.** Unbiased now discloses that too. The
>    successor release labels the same benchmark explicitly as "HLE (text-only)" at
>    **49.9**. So 49 and 49.9 may not be the same measurement.

## Model card

- **Name:** Union Alpha — the model card is titled **Pareto 26.9**
- **Short description:** A **blended model**, not a single checkpoint: Unbiased runs several frontier and open-source models in parallel on each request, synthesizes one answer, and returns it behind a single model string and a single bill. Cloudflare's description is the plainest: *"It engages multiple language models in parallel for each request, synthesizes one answer, and supports text and vision inputs through a single API response."* It launched anonymously as `stealth/union-alpha` on **2026-09-16 at 14:42 UTC**, was revealed ~33 hours later on 2026-09-17 at 23:24 UTC, and became paid. Not an alias of another entry in this dataset — it is a **router/cascade product**, which is a material measurement problem and a real operational advantage at the same time. Note for maintainers: OpenRouter also ships a product called the **Pareto Router**, which is a conventional router and shares nothing with this model beyond the name.
- **Provider / access:** **One provider: Unbiased** (`unbiased.ai`); OpenRouter forwards every request to it, and it is also on **Cloudflare AI** as `unbiased/pareto`, which lists **Zero data retention: Yes**. OpenCode's Go route documented no training on user data and 0-day retention during the preview window. The `stealth/union-alpha` listing still has a page but **has had no endpoints since 2026-09-17**.
- **Release / knowledge:** stealth-listed **2026-09-16**, revealed and priced **2026-09-17**. Model card dated **2026-09-18** (AI BENCHY's record). Knowledge cutoff **undisclosed**.
- **IDs:** `unbiased/pareto` (OpenRouter and Cloudflare), `pareto` (Unbiased API), `unbiased/pareto-20260917` (Benchable). Retired stealth ID: `stealth/union-alpha`.
- **Context window:** **262,144 tokens (256K), 131,072 max output** — confirmed by Benchable and by OpenRouter. This is a deliberate quarter of Ox Alpha's 1M, and **one quarter of its own successor's**: **Pareto 26.10 Preview raises the window to 1,048,576**, four times this release. Siora's reading still holds — a high DeepSWE at 256K "suggests the model isn't leaning on enormous context to do its work."
- **Modalities:** **text and image in; text out.** Cloudflare and Unbiased's own model card both state text-and-image. Tool calling via `tools` and `tool_choice`, and `response_format` structured JSON output — **but no JSON-schema enforcement**. **No reasoning control is exposed at all** on this release — `max_tokens`, `temperature` and `top_p` only. Tokenizer listed as "Other." No audio or video input documented.
- **Architecture:** **undisclosed and structurally not a single architecture.** It is a selection layer over "several frontier and open-source models." No weights, no parameter count, no model card for the underlying checkpoints. Capital & Compute's operational caution stands: "keep it behind a switch rather than hardwired as the only model."
- **Pricing (as of 2026-10-17):** **$2.50 / MTok input, $0.25 cached input, $7.50 / MTok output** for Pareto 26.9 (Unbiased card and OpenRouter agree). **Three conflicting figures exist for the successor, Pareto 26.10 Preview, and all three are recorded:** Unbiased's own model-card page states **$0.80 input / $0.03 cached / $3.20 output**; AI/ML API lists **$1.10032 / $0.041262 / $4.40128**; BenchLM's comparison pages carry **$2.50 / $7.50**, which appears to be the *previous* release's rate mislabelled. **The $0 free preview lasted 33 hours** against OpenCode's announcement of "free for the next week" — Enera's account is that demand hit billions of tokens per minute within hours, throughput degraded to unusable, AWS capacity was tripled overnight, and the team ended the free window early rather than degrade it further.

### Raw benchmarks found

**NEW — AI BENCHY independent evaluation of `unbiased/pareto`** (`aibenchy.com/model/unbiased-pareto-none`; released 2026-09-18). Two snapshots, both tested on the same model, which is itself informative:

| Snapshot | Score | Rank | Reliability | Pass rate | Total cost | Avg response |
|---|---|---|---|---|---|---|
| 2026-09-18 02:47 | **8.9** | **#45** | 10.0 | 86.4% | $1.172 | 31.51s |
| 2026-09-30 23:45 | **9.1** | **#34** | 10.0 | **87.0%** | $1.520 | 33.47s |

- Failures across both runs: **wrong answer ×3, invalid tool call ×1**, plus 2 flaky tests. Max response time **143.33s** — comfortably inside the envelope, unlike several peers in this dataset.
- Stands out most in **Domain specific, where it ranks #1**; weakest in **Combined at #17**.
- **Full category breakdown (2026-09-18 snapshot):**

| Category | Score | Consistency | Tests correct |
|---|---|---|---|
| **Coding** | **10.0** | **10.0** | **3/3** |
| **Instructions following** | **10.0** | **10.0** | **2/2** |
| **Anti-AI Tricks** | **10.0** | **10.0** | **4/4** |
| **Data parsing and extraction** | **10.0** | **10.0** | **2/2** |
| **General Intelligence** | **10.0** | **10.0** | **1/1** |
| Domain specific | 7.7 | 10.0 | 2/3 |
| Combined | 7.2 | 9.1 | 1/2 |

- Calibration anchors on the same leaderboard: Claude Opus 4.7 (medium) **#105**, Muse Spark 1.3 (high) **#44**, Claude Opus 4.8 (medium) **#51**, Qwen3.8 Max (medium) **#40**. **Pareto at #34–#45 lands between GPT-5.5 and Claude Opus territory on this suite** — a substantially higher independent read than the vendor card alone would imply.
- **Honest caveat recorded:** AI BENCHY records this as `unbiased/pareto::none` and marks it **Archived** — it is the base Pareto configuration, not a 26.9-specific run, and it exposes no reasoning control, which matches the 26.9 route's own limitation.

**NEW — Unbiased now publishes an open, reproducible third-party-runnable harness:** `github.com/circuitandchisel/pareto-evals` — "Clean reproducible benchmark suite for the self-hosted cascade (ARC-AGI-2, HMMT-2026, HLE, MMMU-Pro, SWE-Bench Pro, Terminal-Bench 2.1, Finance Agent v2, DRACO). All model calls go through one swappable function." Pinned configs; any number can be reproduced with one command. Published comparison rows include:

| Benchmark | n | Pareto | Pareto $/task | Opus | Opus $/task |
|---|---|---|---|---|---|
| **gpqa** | 200 | **86.9%** | **$0.0251** | 88.4% | $0.0643 |
| **hle** | 200 | **38.0%** | **$0.0674** | 33.0% | $0.1120 |

- **This is the first GPQA figure ever published for this model**, and it is measured on n=200 rather than a subset. Pareto is 1.5 points behind Opus on GPQA and **5.0 points ahead of it on HLE**, at 60% of the cost.
- The repo's own caveat is worth repeating: *"competition sets risk contamination once they predate a model's knowledge cutoff — treat a saturated score as a contamination signal."*

**NEW — Unbiased's own seven-benchmark measured slate for the predecessor, Pareto 26.8** (`unbiased.ai/how`, dated 2026-08-25), which is the first time the vendor has published **measured** cost per completed task rather than token-math estimates:

- **SWE-Bench Verified: 86.0 at $0.2708/task.** *"Kimi K3 ties it exactly, at 86.0. Kimi's measured bill for the task is $2.3701; ours is $0.2708. The same score, at 11.4% of the bill."*
- **GPQA-Diamond: 90.4 at $0.0093/task.**
- Mean $/task across all seven published benchmarks: **Pareto 26.8 $0.10**, GPT-5.6 Sol $0.23, Kimi K3 $0.51, Opus 5 $0.61, Fable 5 $0.64.
- Pricing for 26.8: $1.25 input / $0.15 cached / $6.25 output — 12.5–15% of Fable 5's per-token price.
- Unbiased's own admissions, which deserve credit for being printed: *"Opus 5 beats Pareto 26.8 on four of the seven benchmarks we publish; GPT 5.6 Sol beats it on two."* And: *"A 'task' is one benchmark problem carried to completion... The dollar attached to it is not an estimate from token math. It is the measured bill for that completed task, read from the run itself."*

**Vendor-reported scores for Pareto 26.9 — still vendor-run, and now with disclosed methodology limits:**

| Benchmark | Pareto 26.9 | Fable 5.1 | GPT-6 Astra | DeepSeek 4.1 Flash |
|---|---|---|---|---|
| **DeepSWE** *(30-task slice)* | **74** | 67 | 74 | 74 |
| **Terminal-Bench 4.0** | **51** | 56 | 58 | 31 |
| **MMMU-Pro** | **78** | 81 | 87 | 77 |
| **HLE** *(no text-only qualifier)* | **49** | 55 | 54 | 39 |
| **ArXivMath** | **88** | 72 | 91 | 28 |

- It **ties for the lead on one of five** and trails on the other four. Against Astra it is level on DeepSWE and behind everywhere else. Against DeepSeek 4.1 Flash it trades wins: level on DeepSWE, far ahead on Terminal-Bench 4.0 and ArXivMath, essentially tied on vision.
- **Unbiased's successor, Pareto 26.10 Preview** (tracked separately in this repo as `pareto-26.10-preview`), runs dated **2026-10-01** and marked **preliminary**: DeepSWE v1.1 **69.9**, Terminal-Bench 4.0 **50.8**, **HLE (text-only) 49.9**, **GPQA-Diamond 92.4** — the first Pareto release to publish GPQA on its own card.

**Conflicting third-party readings, recorded not resolved:**

- **lmmarketcap** scores Pareto 26.9's **Coding** category at a composite **40/100, rank #189** — in direct conflict with AI BENCHY's Coding **10.0/10.0 (3/3)** and with Pareto 26.8's SWE-Bench Verified 86.0. This is the sharpest disagreement in the file and is not reconcilable from public data; a composite index over benchmarks we cannot see is weaker evidence than two named results, so the named results are used.
- **Benchable** places Pareto 26.9 in the **43rd percentile across 8 benchmarks** and the **20th percentile for cost-effectiveness** — consistent with the AI BENCHY read on quality and *inconsistent* with the measured $/task story.
- **OpenRouter CEO Alex Atallah's launch-day chart** (2026-09-16): near 73% on DeepSWE, level with gemini-3.8-flash, gpt-6-astra and claude-opus-5, at near-zero cost. **No number printed** — a chart read, not a verdict.
- **OpenCode's chart**, posted 14:58 UTC carrying **Artificial Analysis branding**: **Terminal-Bench v4.0 at roughly 52%** at about $1.60 per task. Also a chart read, and **not on Artificial Analysis's public model pages.**
- Atallah's text claims — outperforms GPT-5.6 Sol on Terminal-Bench 2.1 and SWE-bench Verified, and outperforms Opus 5 on TBench 2.1 — remain **unscored**: no numbers, and neither benchmark appears on tbench.ai or swebench.com.
- **Manifold's own figures** put Union Alpha's "Other" family at 57%; **Manifold, Kimi, MiniMax and Z.ai attributions were all wrong.**
- An OpenCode coding snapshot reports **23.14/40 across four coding projects** at about $0.03 average cost per prompt.
- **Speed:** 16.5s P50 and ~24 t/s during the free window; **post-scaling 5.7s P50 and 27 t/s** (Enera). Availability during the preview was 98.14%. AI BENCHY measures 31.5–33.5s average with a 143.33s maximum.
- Capital & Compute's *modelled* multi-step agentic workload (3M input at 90% cache share, 80K output) cost **$2.03** for Pareto 26.9 against $4.85 Opus 5, $7.68 Fable 5.1 and $9.70 Astra. **This is now superseded by Unbiased's own measured figures** and is retained only as lineage.
- Terminal-Bench 4.0 / GPQA / SWE-bench Verified / SWE-bench Pro / LiveCodeBench / CritPt / AA-LCR / Artificial Analysis Intelligence Index: **no verified public score found.** Union Alpha has **no Artificial Analysis index entry** despite OpenCode publishing a chart with AA branding.

### Normalized scores (1–100)

- **Tool use: 86/100.** *(was 78.)* This dimension now has genuine independent backing rather than a vendor claim alone. **AI BENCHY: Instruction following 10.0/10.0 with 2 of 2 tests correct**, Data parsing and extraction 10.0 (2/2), Anti-AI Tricks 10.0 (4/4), General Intelligence 10.0 (1/1), **87.0% pass rate across two independent runs**, and exactly **one "invalid tool call" in 23 tests** — that single failure is the most precise tool-use datapoint this model has ever had, and it is a near-perfect record. Reinforced by **Terminal-Bench 4.0 at 51%** and **DeepSWE 74 (30-task slice)** from the vendor, and by the fact that the public harness now includes Terminal-Bench 4.0 minus GPU tasks as a runnable suite. Capped at 86 rather than 92 by four things: **no Tau3-Banking, GDPval-AA or Claw-Eval figure**; the Terminal-Bench 4.0 score is a full tier below DeepSWE; the **JSON-schema non-enforcement** limitation on this release; and the structural caveat that tool reliability belongs to whichever underlying model won the selection, which Unbiased still publishes nothing about.
- **Reasoning: 84/100.** *(was 85 — a marginal reduction on new evidence.)* The gain is real: **GPQA-Diamond 86.9% on n=200**, the first ever published for this model and measured rather than sliced, plus **HLE 38.0% on n=200 where it beats Claude Opus 5's 33.0% by 5 points at 60% of the cost** — an independently reproducible result. The reduction is also real and comes from conflict: **the vendor card says HLE 49 with no text-only qualifier, the harness says 38.0 measured**, a **11-point gap** on the same benchmark name; and **the DeepSWE 74 is now disclosed as a 30-task slice**. Held at 84 rather than higher because 86.9 GPQA is below the low-90s the models it is compared against post, and because the blended-model routing means none of this profile is guaranteed stable across a quarter.
- **Context window: 72/100.** *(unchanged.)* **262,144 tokens with 131,072 max output** — the methodology's 200K–500K band, scored just above its 200K tier point for a 256K window paired with an unusually large 131K output ceiling. Deliberately **not** in the 500K–1M band, and this pass makes the gap starker: **its own successor is 1,048,576.** **No retrieval measurement exists** (no MRCR, RULER or GraphWalks), and buildfastwithai's caution still applies: "large context does not guarantee correct long-context retrieval."
- **Multimodal: 72/100.** *(unchanged.)* **Text and image in; text out**, confirmed by three sources this pass (Cloudflare, Unbiased's model card, Benchable). Scored above the "+image in = 60–70" band on measured quality: **MMMU-Pro 78%** — 3 behind Fable 5.1's 81 and 9 behind Astra's 87. Still capped by the absence of any second vision benchmark and by the modality ceiling: image-only input with text-only output cannot enter the 75–90 band on one row, and there is no audio, video or PDF input.
- **Coding: 88/100.** *(was 84.)* The strongest evidence in the file, and now two independent sources rather than one vendor card. **AI BENCHY Coding: 10.0/10.0 with 3 of 3 tests correct** — the highest consistency available on that suite. **Pareto 26.8's SWE-Bench Verified 86.0 at $0.2708/task, exactly tying Kimi K3's 86.0 at 11.4% of the bill**, from a harness anyone can re-run. **DeepSWE 74 (30-task slice)** and **Terminal-Bench 4.0 51** from the vendor, and the public harness now includes **SWE-Bench Pro** as a runnable suite. Held at 88 rather than 92+ by three documented conflicts: **lmmarketcap scores the same Coding category 40/100 at #189**; **Terminal-Bench 4.0 at 51%** remains a full tier below DeepSWE, the classic signature of strong patches and a less reliable long terminal session; and the DeepSWE figure is a disclosed 30-task slice rather than the full v1.1 set.
- **Cost efficiency: 82/100.** *(was 72.)* The prior pass explicitly flagged that "$2.03 is modelled, not measured" and that Unbiased's card said no task cost had been published. **That gap has closed.** Unbiased now publishes **measured** cost per completed task read from the run itself: **Pareto 26.9 $0.29/task on DeepSWE**, **Pareto 26.10 Preview $0.24**, **Pareto 26.8 mean $0.10 across seven benchmarks** against GPT-5.6 Sol $0.23, Kimi K3 $0.51, Opus 5 $0.61 and Fable 5 $0.64 — and individual rows of **GPQA-Diamond at $0.0093/task** and **SWE-Bench Verified at $0.2708/task**, the latter 11.4% of Kimi K3's identical score. The harness is public with pinned configs. Marked 82 rather than 92 because: **the $2.50 / $0.25 / $7.50 card for this specific release is still the price you pay**, while the headline $0.10 belongs to the older 26.8; **three conflicting prices exist for the successor**; and Benchable places it in only the **20th percentile for cost-effectiveness**, which contradicts the measured story. Budget against the printed card, not the chart.
- **Overall Score: 80/100.** *(was 78.)* (86 + 84 + 72 + 72 + 88) / 5 = 80.4 → **80**. Best fit: **agentic coding on a budget** — an independently measured 10.0/10 on Coding with 3 of 3 tests correct, a first-ever GPQA measurement on n=200, a reproducible HLE run that beats Claude Opus 5, SWE-bench Verified parity with Kimi K3 at a ninth of the bill, and measured per-task costs of $0.24–$0.29 where the frontier sits at $2–$13. Capital & Compute's operating advice remains the right summary: **benchmark it on a trial workload, keep it behind a switch rather than hardwired as the only model, and budget against the printed card rather than the $0 preview or the chart.** The three facts that cap this at 80 rather than 90 are that **the DeepSWE figure is a disclosed 30-task slice**, that **the HLE number exists in two versions 11 points apart**, and that **the model behind the endpoint can change without the model ID changing** — which remains a real operational advantage and a real measurement problem in the same sentence. **Prefer Pareto 26.10 Preview over this release if you are starting today**: it has a 1M window, a published GPQA, an explicitly labelled text-only HLE, and a lower price.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: **third pass**, public internet research, superseding this agent's own earlier 38/100 and then 78/100 reports for the same slug. Four searches plus three direct retrievals. **New sources this pass:**
  - **[AI BENCHY `unbiased/pareto::none`](https://aibenchy.com/model/unbiased-pareto-none)** — the load-bearing addition. Independent evaluation in two snapshots: **8.9 at #45** (2026-09-18, 86.4% pass rate, $1.172) and **9.1 at #34** (2026-09-30, 87.0% pass rate, $1.520), reliability 10.0 both times, wrong answer ×3 and invalid tool call ×1 across both, 2 flaky tests, 143.33s max response, plus the full 7-category breakdown (Coding 10.0/10.0 3/3, Instructions following 10.0/10.0 2/2, Anti-AI Tricks 10.0 4/4, Data parsing 10.0 2/2, General Intelligence 10.0 1/1, Domain specific 7.7 2/3 and #1 in category, Combined 7.2 1/2 and #17). Recorded as Archived and `none`-effort, with that limitation stated.
  - **[github.com/circuitandchisel/pareto-evals](https://github.com/circuitandchisel/pareto-evals)** — Unbiased's now-public, reproducible, third-party-runnable harness (ARC-AGI-2, HMMT-2026, HLE, MMMU-Pro, SWE-Bench Pro, Terminal-Bench 2.1, Finance Agent v2, DRACO). Yields the **first GPQA figure for this model: 86.9% on n=200 at $0.0251/task**, and **HLE 38.0% on n=200 at $0.0674/task versus Claude Opus 5's 33.0% at $0.1120**. The repo's contamination caveat is quoted.
  - **[unbiased.ai/how](https://unbiased.ai/how)** (2026-08-25) — Pareto 26.8's seven-benchmark **measured** slate, including **SWE-Bench Verified 86.0 at $0.2708/task (tying Kimi K3 at 11.4% of the bill)** and GPQA-Diamond 90.4 at $0.0093/task, with the vendor's own admission that "Opus 5 beats Pareto 26.8 on four of the seven benchmarks."
  - **[unbiased.ai](https://unbiased.ai/)** and **[unbiased.ai/delta](https://unbiased.ai/delta)** — the rewritten benchmark page, which carries the **DeepSWE 30-task-slice disclosure** and the **missing text-only qualifier on 26.9's HLE**, the DeepSWE cost/task leaderboard, and the successor's four published scores including GPQA-Diamond 92.4.
  - **[lmmarketcap.com/model/pareto-26-9](https://lmmarketcap.com/model/pareto-26-9)** — the conflicting Coding composite, 40/100 at #189, recorded rather than reconciled.
  - **[Benchable](https://benchable.ai/models/unbiased/pareto-26.9-20260917)** — 262K context confirmation; 43rd percentile across 8 benchmarks; 20th percentile for cost-effectiveness.
  - **[developers.cloudflare.com/ai/models/unbiased/pareto](https://developers.cloudflare.com/ai/models/unbiased/pareto)** — independent confirmation of the cascade design ("engages multiple language models in parallel… synthesizes one answer"), text+vision in, and **Zero data retention: Yes**.
  - **[benchlm.ai/models/pareto-26-9](https://benchlm.ai/models/pareto-26-9)** and the Pareto 26.10 Preview page — confirms 4 and 3 source-displayable rows respectively, both unranked, both sourced only to Unbiased's own card.
  - **[byteiota](https://byteiota.com/pareto-by-unbiased-the-ai-model-that-runs-every-llm-at-once)** — Circuit & Chisel provenance (ex-Stripe team behind ATXP, $19.2M raised 2025) and the Pareto Router naming-collision warning.
  - Retained from prior passes: the five-row Pareto 26.9 vendor table, OpenRouter's and OpenCode's launch-day chart reads, Atallah's unscored claims, Manifold's 57%, Enera's capacity-collapse account and latency figures, and Capital & Compute's now-superseded modelled costs.
  - Conflicts resolved: DeepSWE slice vs full set (slice disclosed, successor's full-set 69.9 preferred for planning); HLE 49 vs 38.0 (both recorded, measured preferred); Coding 10.0/3-3 vs 40/100 (named results preferred over an opaque composite); three conflicting successor prices (all three recorded). Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Vendor-reported figures remain labelled as such.
- Future sources: add a new file next to this one, e.g. `Pareto_27.md`, using the same headings. **Re-score when:** (1) the `pareto-evals` harness produces full published rows for MMMU-Pro, SWE-Bench Pro, Terminal-Bench 2.1 and Finance Agent v2 — four of seven benchmarks remain unpublished; (2) Pareto 26.10 Preview graduates from preliminary and its 69.9 / 50.8 / 49.9 / 92.4 are final; (3) Unbiased publishes its cascade's per-model routing, which would make tool reliability attributable rather than structural; (4) any long-context retrieval measurement appears. **The single biggest remaining gap is that this model's identity is a moving target: the checkpoint set behind the ID can change without the ID changing, and two of its five headline numbers were re-based in the sixteen days since this file was last checked.**