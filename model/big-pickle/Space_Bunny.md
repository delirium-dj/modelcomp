# Big Pickle — findings by Space Bunny

- Source: OpenCode Zen (`big-pickle`; litellm route `openai/big-pickle`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third revision of my own report for this slug. The history matters, so it is kept.**
> A first Space Bunny file scored it **44/100**. The 2026-10-01 pass revised that to
> **50/100**, on the reasoning that Big Pickle had been treated as a single stable
> checkpoint and that its free tier had been mis-scored as a promotion rather than a
> standing $0 rate card. **This 2026-10-13 pass revises it to 56/100**, and the reason
> is entirely new evidence rather than a change of opinion: a second independent
> evaluator has now run five real benchmarks against it, and the earlier finding that
> "every number in this file rests on a single third-party run of a single benchmark"
> **no longer holds**. What has got worse is availability, not capability.

## Model card

- **Name:** Big Pickle
- **Short description:** A **stealth model on OpenCode Zen**, released **2025-10-17**, and — critically — **not a single checkpoint but a named slot whose underlying model has been swapped at least twice without the ID changing.** OpenCode's own maintainers have confirmed this in public: the model "has been updated," and commenters report the underlying weights moving from **GLM-4.6** to **`deepseek-v4-flash`**, with one report noting the actual context limit is "around 1M" while OpenCode still advertises 200K. A **third** occupant is now claimed in the same thread ("currently Big Pickle is a stealth model for Ox Alpha"), and a separate community analysis of its reasoning-chain structure argues for **Qwen3.8-27B**. OpenCode's stated philosophy is candid about why the slot exists — "if a new oss model comes out thats way better wed prolly switch to it" — and about the economics: "it's just one of the better OSS models, so since we can host it ourselves we have a lot of levers to allow cheaper pricing." **This remains the single most important fact about this entry, and it caps every score below.**
- **Provider / access:** **OpenCode Zen** only, at `https://opencode.ai/zen/v1` — an OpenAI-compatible endpoint. No other host. One provider, one model ID, no version suffix.
- **Release / knowledge:** released **2025-10-17**. Knowledge cutoff recorded as **2025-01** by modelcompare.dev — for a slot whose weights have changed since, this is at best nominal.
- **IDs:** `big-pickle` (Zen request body); `openai/big-pickle` (litellm route).
- **Context window:** **200,000 tokens, max output 32,000** (OpenCode Zen / Pi / models.dev / whichllm all agree). **The 2026-10-01 conflict is now a three-way conflict and has not resolved in the model's favour:** an OpenCode GitHub thread reports the *actual* limit is "around 1M" while "they still haven't updated open code to reflect the actual context limit tho, cos it thinks 200k is the Max"; the same maintainer separately said "max output is 128k" in another reply, contradicting the 32K every registry carries; and **anyrouter.dev now lists the model's context as 32K and marks the route Disabled.** The advertised 200K/32K is still used here because it is what four independent registries carry, but the evidence that it is accurate is weaker in October than it was in September.
- **Modalities:** **text only** (models.dev `big-pickle.toml` and Pi both list `input: ["text"]`; anyrouter also classifies it as text). Reasoning: yes (`reasoning: true` in the Pi spec). API: OpenAI Completions compatibility, with `supportsStore: false` and `supportsDeveloperRole: false`.
- **Pricing (as of 2026-10-13):** **$0 across every line — input, output, cache read, cache write, all requests** — still what OpenCode's Zen pricing table and the live `/zen/v1/models` endpoint carry (the ID is present in the model list fetched 2026-10-13). howmanytoken's 2026-10-12 snapshot records "Free / not metered" with **"No data"** on every per-token line, i.e. nothing to price because nothing is being served. **Correcting the 2026-10-01 file on one point:** it argued this is *not* a limited-time promotion, on the strength of a maintainer's "we are hoping to keep it free in perpetuity." HorizonLux's 2026-10-08 check of OpenCode's own docs describes it as "priced Free … **for a limited time**," and Zen's free-models section groups Big Pickle with the explicitly limited-time routes. The perpetuity statement is a stated intention; the documentation says limited-time. **Treat $0 as limited-time.**
- **Architecture:** **not disclosed, and not attributable.** Weights have not been published by OpenCode. The GLM-4.6 attribution was community consensus, has since been contradicted, and is now joined by `deepseek-v4-flash`, `Ox Alpha` and Qwen3.8-27B as competing hypotheses. PhillipChaffee's run notes that "leaked provider errors and API response signatures suggest it is currently served by DeepSeek infrastructure" — a clue, not an identification. Any self-hosting discussion refers to the *underlying* open model, not to "Big Pickle," which exists only as a Zen endpoint.

### Raw benchmarks found

> **The measured record is no longer one number.** As of 2026-09-30 this file could
> claim a single figure — one third-party run of one benchmark. Two independent
> evaluators have now produced results, and they do not agree with each other, which
> is itself the finding.

**Run #1 — PhillipChaffee, Scale AI SWE Atlas Codebase QnA (run date 2026-08-11):**

- **50.81% task resolve rate (63/124)**, all 124 unmodified Codebase QnA tasks from
  `scaleapi/SWE-Atlas` (Apache-2.0), **mini-swe-agent** scaffold with Scale's shipped
  `mswea_qa_config.yaml` (step_limit 250), Harbor 0.18.0, mini-swe-agent 2.4.6.
  Verifier logs and reproduction configs published.
- Consumption **674M input / 4.3M output tokens at $0**; ~$70 of Modal compute at
  reduced sandbox resources (4 CPU / 8 GB against a declared 16/16) plus ~$25 of
  judging. The runner notes reduced resources "can only depress an agent's score…
  not inflate it," verified empirically: **zero command timeouts and zero exit-137
  kills across all 124 trajectories.**
- Official leaderboard placement (updated 2026-07-28): above Opus 4.8 (57.26 under
  Claude Code xHigh), below Opus 5 (63.17), above GLM 5.2 (48.12), GPT-5.6-Sol
  (46.00) and GPT-5.5 (45.43).
- **Staleness warning added this pass:** the run is dated **2026-08-11**. In the
  2026-10-01 file this was undated; it is now nearly two months old against a slot
  that has demonstrably changed at least twice.

**Run #2 — Fellipe Soares, five-benchmark suite (published 2026-10-04, measured 2026-10-02 to 10-04) — the new primary evidence:**

Five tests, **254 items per model**, all through **OpenCode 1.18.33**, against Big
Pickle, Space Bunny, Fledge Alpha and two cheap *paid* references (DeepSeek V4.1 Flash,
GLM-5.3-Flash):

| model | Omniscience index | HLE | SciCode | Terminal-Bench | SWE-Mini |
| --- | --- | --- | --- | --- | --- |
| **Big Pickle** | **+43** | **38%** | 44% | 71% | **65%** |
| Space Bunny | +29 | 28% | 40% | 64% | 75% |
| Fledge Alpha | −5 | 23% | **52%** | 79% | 75% |
| DeepSeek V4.1 Flash (paid ref.) | +29 | 23% | 51% | **100%** | **85%** |
| GLM-5.3-Flash (paid ref.) | +20 | 20% | 41% | 36% | 60% |

- **Knowledge and reasoning are where it wins, decisively.** Omniscience index **+43
  is the highest of all five models, including both paid references**; accuracy
  **64%** (highest), hallucination 58% (lowest of the three stealth models but
  still high in absolute terms), and **0 unanswered** — the only model in the set that
  never left a question unanswered. **HLE 38% is likewise the highest of the five**,
  ahead of Space Bunny's 28% and DeepSeek V4.1 Flash's 23%.
- **Agentic terminal work is strong: Terminal-Bench 71%**, third of five, above
  Space Bunny (64%) and GLM-5.3-Flash (36%), below Fledge Alpha (79%) and well below
  DeepSeek V4.1 Flash (100%, solving 14 of 14 tasks).
- **Coding is its weakest dimension in this suite: SWE-Mini 65% is the lowest of the
  three stealth models** (Fledge Alpha 75%, Space Bunny 75%), though it still beats
  GLM-5.3-Flash's 60%. SciCode 44% is third of five.
- SciCode detail: Fledge Alpha 52%, DeepSeek V4.1 Flash 51%, Big Pickle 44%,
  GLM-5.3-Flash 41%, Space Bunny 40%.
- The evaluator's own caveat, adopted here: "Stealth models change without notice.
  What I measured is what answered to each name between October 2 and 4, 2026."

**Availability and reliability — new, and this is the alarming part:**

- **anyrouter.dev: "Status: Disabled (since 2026-08-14) — no longer routable or listed;
  kept for history/usage reference. Reason: Its free route stopped accepting requests
  (HTTP 403 on 2026-10-12; earlier 502 on every 2026-08-14 probe). No provider
  currently serves this model."**
- **TokenDyno: 24-hour reliability 0%**, Intelligence Index "—", last tested 27 days
  ago, 49th of 67 providers on measured throughput (50.3 tok/s, TTFT 697 ms, from a
  stale successful run).
- howmanytoken's 2026-10-12 snapshot: every price line "No data", "Free / not metered".
- HorizonLux, checked **2026-10-08**: the route still worked — "Free only inside
  OpenCode and only for a limited time… **Trains on your data: Yes, on the free
  tier.** Not rated yet."
- OpenCode's live `/zen/v1/models` (fetched 2026-10-13): **`big-pickle` is still
  present in the model list.**

> **Conflict recorded and adjudicated.** Three sources disagree about whether this
> model currently works. HorizonLux (2026-10-08) says yes; anyrouter (2026-10-12) says
> HTTP 403 and "no provider currently serves this model"; TokenDyno says 0%
> reliability. The reconciliation is that **the listing, the documentation and the
> route have diverged** — the ID is still advertised and still returned by
> `/zen/v1/models`, while the endpoint behind it refuses service. That is the same
> failure mode `exo-free` exhibited on OpenCode Zen a month earlier (HTTP 410
> `ModelDeprecated` behind a still-live catalogue entry). **The honest position is
> that Big Pickle is, as of 2026-10-13, listed but not reliably serviceable, and the
> 2026-10-02-to-04 benchmark run may be measuring a slot that is being wound down.**
> The scores below are left standing on the October evidence, because that is the
> most recent capability data that exists; the availability risk is recorded as a
> first-class warning rather than smeared into the dimension scores.

**Still not found, under any name:**

- No SWE-bench Verified, SWE-bench Pro, DeepSWE, LiveCodeBench, Aider Polyglot,
  τ³-Banking, τ²-bench, GDPval-AA, Claw-Eval, Toolathlon, MCP-Atlas, AutomationBench
  or OSWorld score.
- **No GPQA Diamond, CritPt, LCR, FrontierMath, ARC-AGI or Artificial Analysis record.**
  Big Pickle still has no Artificial Analysis entry, and TokenDyno and HorizonLux
  both independently report it as unrated.
- No MMMU, MMMU-Pro, DocVQA or OmniDocBench score — consistent with the text-only
  modality list.
- **No MRCR, RULER or GraphWalks long-context retrieval measurement at any length.**

**Proxy data for the underlying model family — explicitly NOT transferred.** GLM-4.6
(the first reported occupant of this slot) has its own published record: 200K/203K
context, $0.50/$2.00 with $0.10 cached, TB2.1 49.4%, Tau3 10.5%, GDPval 934, SciCode
38.4%, LiveCode 81.0%, Vibe 3.1%, BenchmarkList overall 53.94. **None of these numbers
describes Big Pickle now**, and none is used in any score below. The same applies with
more force to the three newer occupant candidates (`deepseek-v4-flash`, `Ox Alpha`,
Qwen3.8-27B), each of which has a substantial public benchmark record that is
**deliberately excluded** — attributing DeepSeek's or GLM's numbers to a rotating slot
is exactly the error this file exists to avoid.

**Context for the SWE Atlas suite** (arXiv 2605.08366): GLM 5 under mini-SWE-agent
scores **24.03 ± 2.87 Pass@1** overall and **20.50 QnA**; Kimi K2.5 19.05/13.10;
MiniMax M2.5 15.20/10.30; Gemini 3 Flash 15.65/8.20. Frontier closed models under
their native scaffolds run far higher — GPT 5.4 (Codex) 43.49/40.80, Opus 4.7 (Claude
Code) 41.89/40.30. So a **50.8 QnA figure is genuinely strong for a mini-SWE-agent
run** — it is above every other mini-SWE-agent entry in the paper — which is the
strongest argument for treating the August number seriously despite the slot problem.

### Normalized scores (1–100)

> **Scoring-integrity notice, updated.** Two independent evaluations now exist, from
> different evaluators on different dates with different harnesses. **Tool use,
> Reasoning and Coding are now measured rather than inferred** — a genuine change in
> kind, not degree. **Context window** and **Multimodal** remain specification-only and
> are still capped because they are unmeasured. Above all else: **the underlying
> weights can change without the model ID changing, and the two runs are 59 days
> apart**, so even the measured numbers describe two different systems.

- **Tool use: 74/100.** *Revised up from 60 — the largest single change in this file.* The old score was anchored on one codebase-QnA number and explicitly noted that "no Terminal-Bench figure at any version" existed, which is the harness this dimension is normally read from. **That gap is now filled: Terminal-Bench 71%**, measured by an independent evaluator over 254 items in October. Against the same suite's field it is third of five (DeepSeek V4.1 Flash 100%, Fledge Alpha 79%, Big Pickle 71%, Space Bunny 64%, GLM-5.3-Flash 36%), which is a solidly above-mid-band result — the methodology's mid reference is TB2.1 45–60% and its frontier reference is roughly 88%+, and 71% sits comfortably between them. The August SWE Atlas figure (50.81%, above Opus 4.8 on that leaderboard) still supports the same region. Capped below the 80s by: no τ-bench, Toolathlon, Claw-Eval or AutomationBench number at all; the Terminal-Bench result being a single suite at a single moment for a rotating slot; and the evaluator's own warning that what answered to the name on 2–4 October is not guaranteed to answer again.
- **Reasoning: 64/100.** *Revised up from 50.* The 2026-10-01 file scored this from specification and reputation alone and said "no tighter claim is defensible." **A tighter claim is now defensible.** **Humanity's Last Exam 38% is the highest score on that suite across all five models in the evaluation, including both paid references** (Space Bunny 28%, Fledge Alpha 23%, DeepSeek V4.1 Flash 23%, GLM-5.3-Flash 20%). The **Omniscience index of +43 is also the highest of the five**, with 64% accuracy and **0 unanswered questions** — the only model in the set that answered every item. That is a real, measured knowledge-and-reasoning profile that happens to lead its own comparison group. It is held well below the 80s by three things: **no GPQA Diamond, CritPt, FrontierMath or ARC-AGI figure**, and therefore no way to place it against the methodology's reasoning bands; an **absolute hallucination rate of 58%**, which is better than its stealth-model peers but high in plain terms and directly contradicts a naive reading of the +43 index; and the fact that all of it rests on one evaluator's single October window.
- **Context window: 65/100.** Unchanged, and the evidence behind it is now weaker rather than better. **200,000 advertised with 32,000 max output** remains what four registries carry, but the 2026-10-01 file's single caveat has become a three-way conflict — community reports of "around 1M" actual, a maintainer's "max output is 128k" contradicting the 32K every registry carries, and anyrouter now listing 32K and marking the model Disabled. **No retrieval measurement exists at any length** — no MRCR, no RULER, no GraphWalks — and the new 254-item run added no context evidence either. A 200K window with no evidence of use, and a documented history of the advertised figure being wrong, stays at its 200K tier point.
- **Multimodal: 15/100.** **Text only** — models.dev, Pi and anyrouter all list text-only input, and no registry lists image, audio or video. No vision benchmark exists and none could. The new five-benchmark run is entirely text-based, as expected. Dataset floor for a text-only model, and the correct score, since unlike the 3D-heavy and video-heavy models elsewhere in this dataset there is no documented capability being left uncredited.
- **Coding: 62/100.** *Revised up from 58.* The dimension is no longer measured by a single benchmark. **SWE-Mini 65% and SciCode 44%** are new, independent, October measurements. The honest reading is mixed and is stated as such: **65% on SWE-Mini is the *weakest* of the three stealth models** (Fledge Alpha and Space Bunny both 75%) though still ahead of GLM-5.3-Flash's 60%, and **SciCode 44% is third of five** behind Fledge Alpha's 52% and DeepSeek V4.1 Flash's 51%. Those sit alongside the August SWE Atlas result (50.81%, above Opus 4.8 on that leaderboard and the strongest mini-SWE-agent entry in the paper's own table). Capped below the 70s by the absence of SWE-bench Verified/Pro, DeepSWE, LiveCodeBench and Aider Polyglot — so it still cannot be placed against any peer in this dataset on a shared frontier benchmark — and by the fact that the two evaluators measured different weights.
- **Cost efficiency: 100/100.** Unchanged on price, materially different on caveats. **$0 on input, output, cache read and cache write** is still what OpenCode's Zen table and the live `/zen/v1/models` endpoint carry. But three things this pass established that the 2026-10-01 file did not: OpenCode's own documentation describes it as **free "for a limited time,"** contradicting the perpetuity reading; howmanytoken's 2026-10-12 snapshot records **"No data" on every price line** because nothing is being served; and TokenDyno measures **0% 24-hour reliability**. The score stays 100 because the methodology keys it to price and the price is $0 — but the operative reading is that you are buying a $0 item whose *availability* is now in question, which is a different proposition from the 2026-10-01 file's "free is a stated intention, not a contractual guarantee."
- **Overall Score: 56/100.** (74 + 64 + 65 + 15 + 62) / 5 = 280 / 5 = **56** (was 50, was 44). The composition changed far more than the total: **Tool use +14, Reasoning +14, Coding +4**, all from real October measurements replacing specification-inference. The two unchanged dimensions are unchanged for the same reason as before — **no context retrieval evidence and no vision, so they stay at their specification-derived values**, and text-only correctly stays at the floor. Best fit is now stated with more confidence and one new caveat: **a free knowledge-and-reasoning-first assistant with genuinely above-mid terminal ability** — HLE 38% and an Omniscience index of +43 leading a five-model field that included two paid models, Terminal-Bench 71%, and $0. **It is not the free coding pick**: Fledge Alpha and Space Bunny both beat it on SWE-Mini, and DeepSeek V4.1 Flash beats it on both agent tests *and costs less than nothing to compare against at $1.04 against $1.36*.** Four explicit warnings. First, **availability is now the dominant risk** — listed but 403-ing as of 2026-10-12, 0% reliability measured, possibly being wound down; treat any plan that depends on this route as having no fallback. Second, **never use it for confidential code** — OpenCode's Zen privacy notes name Big Pickle among free routes whose prompts "may be used to improve the model," and HorizonLux's independent check agrees ("Trains on your data: Yes, on the free tier"), with only Space Bunny and LongCat zero-retention. Third, **pin nothing and assume drift** — the slot has changed from GLM-4.6 to `deepseek-v4-flash` and may now be something else again, and the two benchmark runs here are 59 days apart. Fourth, **this is a cheap daily driver, not a frontier model** — and if you want the same GLM lineage deterministically, paying Z.ai's **$0.60/$2.20 for GLM 4.6** buys a fixed checkpoint instead of a rotating, possibly-discontinued slot.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own reports for this slug (44 → 50 → **56**).
  New sources this pass: **Fellipe Soares' five-benchmark stealth-model evaluation**
  (published 2026-10-04, measured 2026-10-02 to 10-04, 254 items per model, OpenCode
  1.18.33) for HLE 38%, Omniscience index +43 with 64% accuracy / 58% hallucination /
  0 unanswered, SciCode 44%, Terminal-Bench 71% and SWE-Mini 65%, plus the two paid
  reference models it measured against; **PhillipChaffee's `big-pickle-swe-atlas`
  repository** re-verified, which established the previously undated run as
  **2026-08-11** and supplied the mini-swe-agent 2.4.6 / Harbor 0.18.0 stack, the
  DeepSeek-infrastructure signature clue and the data-exposure disclosure;
  **anyrouter.dev** for the Disabled status, the HTTP 403 on 2026-10-12 and the
  earlier 2026-08-14 502s; **TokenDyno** for 0% 24-hour reliability, the stale
  throughput reading and the absent Intelligence Index; **howmanytoken** for the
  2026-10-12 "No data" price snapshot; **HorizonLux** (checked 2026-10-08) for the
  limited-time framing, the trains-on-your-data confirmation and the zero-retention
  contrast with Space Bunny and LongCat; OpenCode's live `/zen/v1/models` endpoint
  fetched 2026-10-13 to confirm the ID is still listed; **OpenCode GitHub issue
  #4276** for the third occupant claim ("currently Big Pickle is a stealth model for
  Ox Alpha"), the "max output is 128k" maintainer reply and the "keep it free in
  perpetuity" statement now weighed against OpenCode's own "limited time" wording;
  and a community reasoning-chain analysis proposing Qwen3.8-27B. Also carried
  forward: the arXiv SWE Atlas paper (2605.08366) mini-SWE-agent comparison table.
  **Three conflicts were adjudicated explicitly rather than averaged**: the
  perpetuity-versus-limited-time reading of the $0 price (documentation wins),
  the availability contradiction (listed-but-unserviceable, reconciliation stated),
  and the three-way context-limit disagreement (advertised 200K retained, evidence
  weakness recorded rather than resolved in the model's favour). **No benchmark from
  any underlying-model candidate is transferred to this slot**, despite GLM-4.6,
  `deepseek-v4-flash`, Ox Alpha and Qwen3.8-27B all having public records. Scores are
  normalized 1–100 interpretations per `model-comparison.md`, not official vendor
  scores.
- Future sources: add a new file next to this one, e.g. `Big_Pickle_Availability.md`,
  using the same headings. **Re-run this file whenever the underlying weights change
  again, and immediately if the route goes fully dark** — that is not hypothetical,
  the slot has already changed at least twice and the route is currently returning
  403s. A published Big Pickle SWE-bench Verified or LiveCodeBench row, a GPQA
  Diamond or Artificial Analysis entry, or an OpenCode statement fixing the weights
  would move three of the five dimensions at once.