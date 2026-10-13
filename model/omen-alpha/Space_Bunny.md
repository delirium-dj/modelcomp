# Omen Alpha — findings by Space Bunny

- Source: unconfirmed; OpenCode Go / TokenRa (`omen-alpha`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 57 → 56, and the reason is not a capability change — it
> is that the record is now better informed and less encouraging.** Two things arrived.
> **A forensic attribution**: a 95-probe tokenizer battery matched the **Zhipu GLM-5 family
> at 95/95**, API traffic routed under `zhipu/omen-alpha`, and the model self-identifies as
> "powered by GLM… trained by Z.ai." **And a usage collapse**: OpenCode's own data page,
> refreshed **2026-10-13T07:41Z**, shows daily volume falling from **313B tokens on
> 2026-09-09 to about 2.5B on 2026-10-13 — a decline above 99%**, including **two
> consecutive zero days on 2026-09-29 and 2026-09-30**. The attribution does not give this
> file the GLM-5 line's benchmark numbers, and the usage curve suggests the preview is
> being wound down.
>
> **Vector Wire still carries no data** — `Unpriced`, `PRE-RELEASE`, "no comparable
> benchmark results yet" — so this pass went to the platform's own telemetry and to the
> forensic work.

## Model card

- **Name:** Omen Alpha
- **Short description:** An **anonymous "stealth" coding model** that appeared inside **OpenCode Go** on 2026-09-04 — a $10/month subscription aggregating selected open coding models — without a named developer, a model card, or an Omen-specific evaluation. It is **not listed on OpenRouter**, unlike the analogous Ox Alpha stealth launch of August 2026. **Probable attribution, established 2026-09-04 and updated 2026-09-24: Zhipu AI / Z.ai**, on three independent lines of evidence (below). Not a variant or alias of another entry in this dataset.
- **Provider / access:** **OpenCode Go** (`$10/month`, with a `$100` monthly-usage entry and an estimated 11,600 requests per five-hour window), OpenAI-compatible Chat Completions endpoint at `zen/go/v1/chat/completions`, via **TokenRa**. Model identifier `omen-alpha`. **Privacy: not used for training; 0-day data retention.**
- **Release / knowledge:** first observed **2026-09-04**. Knowledge cutoff not disclosed.
- **Context window:** **~500,000 tokens with 128,000 max output** — **community- and platform-reported, not vendor-documented**. modelbenchmark.io's listing (released 2026-09-04) agrees at 500K / 128K, and OpenCode's own documentation does **not** make the claim. **Max output 128K.**
- **Modalities:** **text and image in; text out** (community/platform-reported). **Unlike Ox Alpha**, whose listings describe text, image *and* video, **no video input is reported for Omen Alpha.** OpenCode's Go documentation does not itself claim image support.
- **Pricing (as of 2026-10-13):** **$0.20 / MTok input, $0.66 / MTok output, $0.04 cached read** (TokenRa official listing; identical on opencode-go at modelbenchmark.io). **TokenRa separately advertises a 60% discount route at $0.08 input.** No cached-write rate published. **Vector Wire tracks no price for this model at all.**
- **Architecture:** **undisclosed.** Probable Zhipu GLM-5 family on strong forensic evidence. Throughput measured at **~180 tokens/s** on sustained multi-file generation, against **~85 t/s** for standard GLM-5.3 endpoints — a **+111.7%** delta that points to a Flash-class or heavily-quantised Air variant with sparse expert routing and speculative decoding rather than a heavy dense model.

### Raw benchmarks found

**Attribution evidence (RankLLMs forensic analysis, 2026-09-04, updated 2026-09-24):**

- **Tokenizer probe battery, 95 probes: Zhipu GLM-5 family 100.0% (95/95), 0 errors** — exact match on code indents, special tokens and multi-byte Unicode. Against **Alibaba Qwen 3.8 at 62.1%** (59/95), **Moonshot Kimi K3 at 54.7%** (52/95), **DeepSeek V4 at 48.4%** (46/95).
- **API gateway routing: early requests routed under an internal `zhipu/omen-alpha` path** before being sanitised to `unknown/omen-alpha`. The same `zhipu` namespace was the clue that identified Ox Alpha as GLM-5.3-Flash weeks earlier.
- **Self-identification: asked directly about its architecture in an interactive CLI session, it answered "Under the hood, I'm powered by GLM, a large language model trained by Z.ai."** Recorded as weaker evidence than the tokenizer match, since prompted self-identification can reflect training artefacts.
- **Community probability on the specific checkpoint: unreleased GLM-5.4 Preview 55%, coding-tuned GLM-5.3-Flash 30%, GLM-5.3 Air with a speculative drafter 12%, third-party clone <3%.** The analysis is explicit that **tokenizer analysis identifies the family but cannot independently identify the exact checkpoint**, because GLM-5.2, GLM-5.3 and GLM-5.3-Flash share identical vocabularies. **This file therefore does not transfer any GLM-5 benchmark number to Omen Alpha.**
- **~180 tokens/s** sustained generation, against **~85 t/s** for GLM-5.3.

**Platform telemetry (OpenCode Data, updated 2026-10-13T07:41Z):**

- **2.3T tokens** over two months; **80,000 unique users**; **561,336 completed sessions**; average **4M tokens per session**; average cost **$0.2186 per session**; total spend **$122,734**.
- **93.2% of input tokens served from cache** — a genuinely strong real-world cache hit rate, and the single most useful cost fact in this file.
- **63.5% weekly retention**; ranked **#34 by tokens** last week, at **0.2% share of all OpenCode tokens**.
- **The usage curve is the finding.** Daily volume ran **241B–313B tokens** from 2026-09-04 to 2026-09-10 with 7–8K daily users, then decayed steadily to **2.1B by 2026-09-28, hit zero on 2026-09-29 and 2026-09-30**, and has since run at **1.4–2.9B per day with 250–660 daily users** — roughly **1% of the early-September peak**. The service's own JSON is at `opencode.ai/data/unknown/omen-alpha`, i.e. the model remains unattributed in first-party data.

**Benchmark evidence (omenalpha.io, snapshot 2026-09-04):**

- **OpenCode leaderboard: 23.14 / 40** on four implementation projects — CSV import (PHP), offline sync (PHP), bank feed (Dart/Flutter), shipping quotes (Go) — **ranked #15** in that dated snapshot, with a five-point project rubric. **Average $0.03 per prompt and 01:51 per prompt.** Temperature, max tokens, hardware and concurrency were not disclosed, and the individual test assertions and grader weights are not published.
- **This is a dated third-party-run leaderboard snapshot, not a vendor-published benchmark suite**, and OpenCode publishes no Omen-specific evaluation of its own.

**Reported behaviour:**

- High-velocity coding assistance, immediate multi-turn file edits, and a "refined self-healing logic not present in base Flash" on one hypothesis branch.
- **"Extended sessions exceeding 20 turns can occasionally show context drift"** — reported by developers, and directly relevant given the advertised 500K window.
- **"Context retention on 100K+ token prompts remains untested"** — stated as a known gap.

### Normalized scores (1–100)

- **Tool use: 52/100.** *Revised up from 50.* Still no agentic benchmark of any kind, and the previous version's score — anchored on the single 23.14/40 coding snapshot — could not move far without one. What has arrived is production evidence rather than capability evidence, and it is worth something: **561,336 completed sessions across 80,000 unique users at $0.2186 per session, with a 93.2% cache hit rate and 63.5% weekly retention.** That is a model that has been run at scale by tens of thousands of people without falling over, and **180 tokens/s** on sustained multi-file generation is a real throughput figure. It says nothing about multi-step reliability, which is what this dimension actually measures.
- **Reasoning: 45/100.** *Revised down from 48.* **No reasoning benchmark exists**, before or after. The previous version inferred a score from capability alone — a 500K window, 128K max output, and reasoning support. That inference is now **weaker, not stronger**, for a specific reason: **the forensic work establishes the GLM-5 *family* while explicitly declining to name the checkpoint**, and the leading hypothesis (55%) is an **unreleased GLM-5.4 Preview for which no benchmark numbers exist anywhere**. So the family match does not license importing GLM-5.2, GLM-5.3 or GLM-5.3-Flash scores — doing so would be exactly the vendor-figure transfer these files are written to avoid — and it leaves this dimension with slightly *less* to reason from than a pure spec inference did. Scored below the dataset's mid-scale band, conservatively.
- **Context window: 60/100.** *Revised down from 62.* **~500,000 tokens with 128,000 max output**, the methodology's 200K–500K band — still **community- and platform-reported, with OpenCode's own documentation silent on it**. The score falls because of two new negative items rather than a change in the spec: **developer reports of context drift beyond 20 turns**, and the acknowledged fact that **context retention on 100K+ prompts remains untested**. A 500K window with drift at 20 turns and no retrieval measurement at any length is a spec, not a demonstrated capability.
- **Multimodal: 65/100.** *Unchanged.* **Text and image in; text out** — the methodology's "+image in = 60–70" band, at its midpoint on documented capability only. Unchanged because nothing new arrived: **no vision benchmark exists**, and it is worth noting that **OpenCode's Go documentation does not itself claim image support** — that comes from third-party listings. **No video input is reported for this model**, unlike Ox Alpha.
- **Coding: 60/100.** *Revised up from 58.* The **23.14 / 40 OpenCode snapshot confirms**, at **#15** in that dated leaderboard with **$0.03 average cost per prompt**. What adds a little is qualitative and consistent across the reporting: rapid multi-turn file edits, a self-healing behaviour the forensic analysis flags as *not* present in base GLM-5.3-Flash, and **180 tokens/s** on the kind of work where iteration speed is the bottleneck. What holds it down is unchanged — **no DeepSWE, SWE-bench, Terminal-Bench, LiveCodeBench, SciCode or Aider figure**, a leaderboard methodology whose grader weights are not published, and a leaderboard rank (#15) that has since decayed alongside the usage curve.
- **Cost efficiency: 84/100.** *Revised down from 88.* Unchanged rate card at **$0.20 / $0.66** with **$0.04 cached read**, plus TokenRa's advertised 60% discount route at **$0.08 input**; **Vector Wire tracks no price for this model at all**, which is worth noting as a sourcing gap rather than a cost fact. Real-world economics are excellent and now measured: **$0.2186 average per session across 561,336 sessions, with 93.2% of input tokens served from cache** — a cache hit rate most models would envy, and the single clearest argument for this model. The deduction is for the usage trajectory rather than the rate card: **volume at roughly 1% of its early-September peak, with two zero days in late September**, is the signature of a preview being wound down rather than one you should build a pipeline on.
- **Overall Score: 56/100.** (52 + 45 + 60 + 65 + 60) / 5 = 282 / 5 = 56.4 → **56**, down from 57. **A confidence caveat belongs alongside this number rather than inside it, and it is stronger this pass than last.** Five dimensions rest on **one dated third-party leaderboard snapshot, platform-reported specs, developer reports, and a forensic attribution that explicitly declines to name the checkpoint.** None of that is the model's fault; it is the condition of an unattributed stealth preview. What the record does support is narrow and real: **80,000 developers used this at scale, it cost $0.2186 per session, and 93.2% of its input came from cache.** Best fit: **cheap, fast, high-volume interactive coding inside OpenCode Go on low-risk code** — boilerplate, refactors, test scaffolding, the inner loop of a coding session — where the attribution question does not matter because you can check the output yourself. **Not** a fit for anything you cannot verify quickly, **not** a fit for sessions past ~20 turns, and **not** a fit for long-context work, where the advertised 500K is untested and drift is reported.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (57 → **56**).
  **Vector Wire returns no usable record** — `Unpriced`, `PRE-RELEASE`, "no comparable
  benchmark results yet" — so this pass used the platform's own telemetry and the forensic
  literature.
  Sources: **OpenCode Data (`opencode.ai/data/unknown/omen-alpha`, JSON refreshed
  2026-10-13T07:41Z)** — 2.3T tokens, 80K unique users, 561,336 completed sessions, 4M
  average tokens/session, $0.2186 average cost/session, $122,734 total spend, **93.2% of
  input tokens served from cache**, 63.5% weekly retention, #34 by tokens last week, and
  the **daily series showing 241–313B tokens on 09-04 to 09-10 decaying to 2.1B by 09-28,
  zero on 09-29 and 09-30, and 1.4–2.9B/day since**;
  **RankLLMs forensic analysis (2026-09-04, updated 2026-09-24)** — the 95-probe
  tokenizer battery (**GLM-5 family 95/95 exact, Qwen 3.8 62.1%, Kimi K3 54.7%, DeepSeek V4
  48.4%**), the `zhipu/omen-alpha` gateway path, the GLM self-identification, **~180 t/s
  against GLM-5.3's ~85 t/s**, the explicit statement that **tokenizer analysis cannot
  identify the checkpoint**, and the 55/30/12/<3% checkpoint-hypothesis split;
  **omenalpha.io (snapshot 2026-09-04)** — **23.14/40 OpenCode coding score, #15, $0.03 per
  prompt, 01:51 per prompt**, four named projects, with grader weights and test assertions
  unpublished;
  **modelbenchmark.io** — 500K context / 128K output / released 2026-09-04, opencode-go at
  $0.20 / $0.66 / $0.04;
  **Startup Fortune (2026-09-04)**, **Magica (2026-09-04)** and **RankLLMs** for the access
  model, the absence of any OpenCode-published evaluation, the privacy terms (not used for
  training, 0-day retention), and the reported **context drift beyond 20 turns**.
  **Two things deliberately not done, and both matter.** First, **no GLM-5 benchmark figure
  is transferred to this model**, despite the 95/95 tokenizer match — the analysis itself
  says the family is identified but the checkpoint is not, and the leading hypothesis is an
  unreleased checkpoint with no numbers at all. Second, **the #15 leaderboard rank and the
  #34 usage rank are not conflated** — they measure different things (position on a dated
  coding leaderboard versus share of platform tokens) and are reported separately.
  Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor
  scores, and cost efficiency is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Flash.md` or
  `GLM_5_4_Preview.md`, using the same headings — **if the GLM-5.4 hypothesis is
  correct, the model will be renamed within weeks** (the Ox Alpha precedent was 2–3 weeks),
  and `glm-5.3-flash` is a separate model in this dataset with its own record. The gaps
  most worth closing: **any vendor statement of attribution**, and **a single vision or
  long-context measurement** — both dimensions currently rest on documentation that the
  platform itself does not publish.