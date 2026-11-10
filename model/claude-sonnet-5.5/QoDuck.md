# Claude Sonnet 5.5 — findings by QoDuck

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's mid-tier Claude 5.5 model (released 2026-09-28) — a faster, cheaper complement to Opus 5.5, strongest at well-scoped everyday tasks, agentic coding and computer use. Same $2/$10 price as Sonnet 5 but markedly more token-efficient at low/medium effort. Not a variant/alias of another entry; it is the second model in the Claude 5.5 family.
- **Provider / access:** Claude API `claude-sonnet-5-5` (Messages API); Amazon Bedrock `anthropic.claude-sonnet-5-5`; also Google Cloud (Google-managed and Anthropic-managed), Microsoft Foundry, and Claude Platform on AWS, with zero data retention. OpenCode Zen lists it as a **paid** route `opencode/claude-sonnet-5-5` ($2/$10, Reasoning + Tool use + Image input). **No Free ID exists on Zen.** Migration note: Sonnet runs with thinking off must switch to the new `between_tools` setting before moving to 5.5.
- **Release / knowledge:** Released 2026-09-28 (status "Active (latest)"; retirement not sooner than 2027-09-28); reliable knowledge cutoff and training-data cutoff both **June 2026**.
- **IDs:** `claude-sonnet-5-5` (Claude API / Google Cloud / Foundry), `anthropic.claude-sonnet-5-5` (Bedrock), `opencode/claude-sonnet-5-5` (Zen, paid). No Free ID.
- **Context window:** 1M tokens total; max output **128K** tokens (300K via the Batch API with the `output-300k-2026-03-24` beta header). Verified directly against the Claude Platform docs capabilities table.
- **Modalities:** Text + image in → text out (no audio/video input, no non-text output). Reasoning: yes — adaptive thinking on by default, default effort **high**; lowest setting `between_tools` turns off up-front thinking and works at high effort or below. Setting `temperature`, `top_p` or `top_k` returns HTTP 400. Tool calls: yes. Computer use: yes (OSWorld 2.1 80.1%). Image understanding includes chart/screenshot reasoning (Chartography 61.6%, Pokémon Red from screenshots).
- **Pricing (as of 2026-11-09):** Paid — **$2 / $10 per 1M** (input / output), identical to Sonnet 5. Cache read **$0.10**/1M (half of Sonnet 5's $0.20); cache writes $2.50 (5-min) / $4 (1-hour); Batch API 50% off (**$1 / $5**). Anthropic claims "up to 30% less per task" and "30%+ faster output" vs Sonnet 5 — but see the cost conflict below: independent AA measurement at *max* effort puts cost/task **above** Opus 5.5. (Zen console card displays a $0.20 cache-read figure that conflicts with Anthropic's official $0.10 — likely a stale Sonnet-5 rate; in/out $2/$10 agrees across both.)
- **Architecture:** Proprietary; Anthropic does not disclose parameter counts. First Sonnet with cyber safeguards + fallbacks comparable to Opus 5 (higher-risk cyber tasks fall back to Sonnet 5); biology safeguards match Sonnet 5; first Sonnet with safety classifiers to prevent reasoning extraction and expanded "preserved thinking."

### Raw benchmarks found

> Vendor figures from Anthropic's launch page; independent figures from Artificial Analysis (via kingy.ai) and the 148-page system card (via computingforgeeks / benchmarklist). Where harnesses differ, both numbers are listed and the conflict is noted. SWE-bench Verified and GPQA Diamond are **not published** for this ID.

Agent / tool use:

- Terminal-Bench 4.0 (**group**): **70.6%** vendor (Sonnet 5: 10.3%; Opus 5.5: 66.4% at Xhigh) — Sonnet 5.5 *beats* Opus 5.5 here. Independent AA harness: **64%** (Sonnet 5: 14%; Opus 5.5: 60%; GPT-6 Sol: 44%) — lower than vendor.
- GDPval-AA v2.1: **1844** Elo (Sonnet 5: 1449; Opus 5.5: 1846; GPT-6 Sol: 1487). Run by AA on a pre-release build with a structured-output bug → likely slightly understated.
- AA-Briefcase v1.1: **1811** (Sonnet 5: 1359; Opus 5.5: 1822; GPT-6 Sol: 1483); same pre-release-bug caveat.
- OSWorld 2.1 (partial, computer use): **80.1%** (Sonnet 5: 57.0%; Opus 5.5: 81.8%).
- AutomationBench-AA: **71%** (independent AA).
- Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56** — ranked **#3 of 216** models, behind Opus 5.5 (58), ahead of Fable 5.1 and GPT-6 Astra (both 53); Sonnet 5 scored 38. AA ran all five effort levels with Anthropic's default fallback enabled (Sonnet 5.5 falls back in ~0.1% of tasks).
- Humanity's Last Exam: **64.5% with tools** (vendor; Sonnet 5: 54.9%; Opus 5.5: 67.7%) vs **55%** independent AA (Sonnet 5: 41%; Opus 5.5: 61%; GPT-6 Sol: 48%) — tools vs no-tools gap.
- CritPt: **31%** (AA).
- AA-Omniscience: **32** (Opus 5.5: 46) — reviewer notes it is "slightly more likely to state an incorrect answer" than Sonnet 5 (a hallucination regression).
- GPQA Diamond / LCR / MLCR: **no verified public score found** (GPQA not published; long-context covered by AA-LCR below).

Coding:

- SWE-Bench Pro: **81.3%** at max effort (system card; benchmarklist ranks it **#2**, behind Opus 5.5 89.9%, ahead of Fable 5.1 81.2%; Sonnet 5: 63.2%).
- Terminal-Bench 4.0 (agentic coding): **70.6%** vendor / **64%** AA (see Tool use).
- FrontierCode 1.1 (Main): **46.2% at Max** (Sonnet 5: 42.4%; Opus 5.5: 54.4%; GPT-6 Sol: 49.3% / 52.1% Xhigh). Effort anomaly: scores *lower* at Max than at Xhigh; at High it matches GPT-6 Sol's best for ~1/5 the cost/task.
- CursorBench 4.0: **55.5%** (Sonnet 5: 34.1%; Opus 5.5: 57.8%) — within ~2 points of Opus 5.5.
- SciCode: **61%** (independent AA; ≥55% top band).
- SWE-bench Verified / LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found** for this ID.

Long context:

- AA-LCR (long-context retrieval): **83%** (independent AA). 1M window confirmed; no MRCR/RULER pointwise-at-1M figure published, and 83% is below the ≥98%-at-512K+ bar for a perfect context score.

### Normalized scores (1–100)

> Derived from the raw numbers above per `model-comparison.md`. Overall = half-up mean of the five quality dims (Cost excluded).

- **Tool use: 94/100.** GDPval-AA v2.1 **1844** Elo (≈ Opus 5.5's 1846, top ≥1750 band), OSWorld 2.1 **80.1%**, AutomationBench-AA **71%**, TB4 **70.6%** vendor — Opus-tier agentic/tool capability. Capped below 95 by the AA-harness TB4 **64%** (vs vendor 70.6%) and the pre-release structured-output bug caveat on GDPval/Briefcase.
- **Reasoning: 90/100.** HLE **64.5%** with tools / **55%** AA (well above the 40% anchor) and AA Intelligence Index **56** (#3 of 216). Held at 90, not higher, because Index 56 is just below the 60+ top-band threshold, GPQA Diamond is unpublished, and AA-Omniscience **32** (vs Opus 5.5's 46) signals a slight hallucination regression vs Sonnet 5.
- **Context window: 95/100.** 1M-token window (≥1M tier = 95–100) with AA-LCR **83%** confirming usable long context. Not 100 because no ≥98% retrieval-at-512K+ measurement is published.
- **Multimodal: 68/100.** Text + image in → text out only (+image band 60–70), with strong chart/screenshot understanding (Chartography 61.6%, OSWorld computer use, Pokémon Red). Capped by no audio/video/PDF-native input and no non-text output.
- **Coding: 93/100.** SWE-Bench Pro **81.3%** (#2, behind only Opus 5.5's 89.9%), TB4 **70.6%** (beats Opus 5.5), SciCode **61%** (≥55 anchor), CursorBench **55.5%** (~Opus tier). Capped at 93 by FrontierCode **46.2%** (below Opus 5.5's 54.4% and GPT-6 Sol's 49.3%), no published SWE-bench Verified, and the vendor-vs-AA TB4 gap.
- **Cost efficiency: 64/100.** Per-token $2/$10 is cheap (cheaper output than Gemini 3.1 Pro's $2/$12), with $0.10 cache reads and $1/$5 Batch. Discounted from the per-token-only value because independent AA measurement at **max effort** puts cost/task at **$7.60** (193K output tokens, 142K reasoning tokens) — *above* Opus 5.5's $5.98 and ~7× GPT-6 Sol's $1.06. Anthropic's "30% cheaper / fewer tokens" holds at Low/Medium effort, not Max.
- **Overall Score: 88.0/100.** Half-up mean of the five quality dims (94 + 90 + 95 + 68 + 93) / 5 = 440 / 5 = **88.0**. Best fit: high-volume everyday agentic coding and computer-use work at Medium/High effort, where it delivers near-Opus quality at a fraction of the per-task cost — avoid Max effort unless you have compared against Opus first.

### Conflicting-results notes

1. **Terminal-Bench 4.0: vendor 70.6% vs AA harness 64%.** Different harnesses (Anthropic's run vs AA's). Predecessor Sonnet 5 is 10.3% vendor / 14% AA — both low, reflecting TB4's harder agentic release. Scored Tool/Coding at the vendor figure with the AA caveat.
2. **HLE: 64.5% "with tools" (vendor) vs 55% (AA).** The gap is tool access, not a contradiction; both are reported.
3. **Cost — the central conflict.** Anthropic: "up to 30% less per task," "far fewer tokens," partner anecdotes (Balyasny 121k vs Sonnet 5's 497k tokens/answer; Slack ~14% fewer output tokens; Base44 3.6 vs Opus 5's 7.7 iterations/build). Independent AA at **max effort**: $7.60/task and 193K output tokens — *more* than Opus 5.5 ($5.98, 119K) and ~7× GPT-6 Sol ($1.06, 31K). Resolution: the efficiency win is real at Low/Medium effort and reverses at Max (it "thinks for ~60% more tokens" than Opus). Cost efficiency scored 64 to reflect both.
4. **GDPval-AA v2.1 1844 / AA-Briefcase 1811 understated.** AA ran a pre-release build with a structured-output bug; the published numbers likely slightly understate production performance.
5. **FrontierCode effort anomaly.** 46.2% at Max is *lower* than at Xhigh; at High it matches GPT-6 Sol's best. Max effort is not uniformly better.
6. **AA Index vintage.** Launch Index 56 (#3, behind Opus 5.5 58). Current rescaled leaderboards (benchlm) show a different vintage (Fable 5.2 64.6%, Gemini 4 Carbon 60.0%, Opus 5.5 59.1%) — not directly comparable to the launch 56.
7. **Zen cache-read discrepancy.** Zen console card shows $0.20 cache read; Anthropic official docs/announcement say $0.10 (explicitly "half of Sonnet 5's $0.20"). In/out $2/$10 agrees across both; the $0.10 official figure is used.
8. **AA-Omniscience 32 vs Opus 5.5's 46** — slightly higher incorrect-answer rate than Sonnet 5; a reasoning/hallucination caveat, not a coding one.
9. **SWE-bench Verified / GPQA Diamond not published.** The system-card coding figure is SWE-Bench Pro 81.3% (corroborated by benchmarklist #2 and computingforgeeks); no SWE-bench Verified number was invented.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-09
- Method: Public internet research — five successful independent web searches plus primary/independent source verification (Anthropic launch page, Claude Platform docs model overview, kingy.ai independent AA review, computingforgeeks system-card coverage, benchmarklist SWE-Bench Pro leaderboard, Artificial Analysis launch tweet, OpenCode Zen console). Scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent (AA-harness) figures are both reported where they diverge; the cost-per-task conflict is resolved by effort level.
- Reference URLs:
  - [Introducing Claude Sonnet 5.5 (Anthropic, official launch + benchmark table)](https://www.anthropic.com/claude-sonnet-5-5)
  - [Claude Sonnet 5.5 — Claude Platform Docs (specs, pricing, capabilities table)](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)
  - [Claude Sonnet 5.5 Review: Specs, Benchmarks, Pricing (kingy.ai — independent AA Index 56, cost/task conflict)](https://kingy.ai/blog/claude-sonnet-5-5-specs-benchmarks-pricing/)
  - [Claude Sonnet 5.5: Benchmarks, Pricing, Tested (computingforgeeks — 148-page system card, SWE-Bench Pro 81.3%)](https://computingforgeeks.com/claude-sonnet-5-5-released-features-benchmarks/)
  - [SWE-bench Pro Benchmark Scores & Leaderboard (benchmarklist — Sonnet 5.5 max 81.3%, #2)](https://benchmarklist.com/benchmarks/swe_bench_pro/)
  - [Artificial Analysis launch tweet — Sonnet 5.5 scores 56 on the Intelligence Index](https://x.com/ArtificialAnlys/status/2104640155843989864)
  - [OpenCode Console Models — Claude Sonnet 5.5 ($2/$10, Reasoning/Tool use/Image input)](https://opencode.ai/console/models)
  - [Claude Sonnet 5.5 Benchmarks: Scores vs Opus 5.5 (emergent.sh — independent cost-claim analysis)](https://emergent.sh/learn/claude-sonnet-5-5-benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.