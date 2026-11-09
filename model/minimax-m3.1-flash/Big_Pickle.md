# MiniMax M3.1 Flash Preview — findings by Big Pickle

- Source: MiniMax (`minimax-ai/minimax-m3.1-flash-preview`, canonical ID `MiniMax-M3.1-Flash-Preview`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-activated 2026-10-02 after fresh research.** The 2026-09-28 attempt self-excluded
> this checkpoint because zero measured numbers existed. Since then one genuine
> third-party measurement has appeared (AICodeKing KingBench 3), vendor documentation now
> confirms the multimodal input set and the five-level thinking dial directly, and Token
> Plan pricing is documented. The scores below still rest on thin evidence and are
> deliberately conservative; every dimension names its weakest link.

- Prior verdict: `Big_Pickle.md.excluded` (2026-09-28), retired with this file.
- Identity caveat carried forward: secondary reporting (Gate News, AIbase) has linked
  M3.1-Flash-Preview to "Space Bunny". Unverified community speculation, not vendor
  confirmation. The two names are not interchangeable on evidence.

## Model card

- **Name:** MiniMax M3.1 Flash Preview (`MiniMax-M3.1-Flash-Preview`). A **preview**
  checkpoint, distinct from the released `MiniMax-M3` flagship (tracked separately) and
  from `MiniMax-M2.7`. Not an alias of either.
- **Short description:** MiniMax's newest coding-first model, shipped as the default inside
  **MiniMax Code** and available through the Token Plan. MiniMax's own documentation
  describes it as a frontier multimodal coding model with a 1M context window and tunable
  thinking depth, positioned for everyday development — bug fixes, review, full feature
  implementation, test verification — rather than benchmark-maximal behavior.
- **Provider / access:** **Token Plan and MiniMax Code only** — subscription plans at
  `minimax.cn` and `minimax.io` (models.dev provider IDs `minimax-cn-coding-plan`,
  `minimax-coding-plan`). The same model ID works over MiniMax's Anthropic-compatible,
  OpenAI-compatible and OpenAI Responses endpoints. No pay-as-you-go route, no OpenRouter ID,
  no OpenCode Zen free ID.
- **Release / knowledge:** launched 2026-09-27 (UTC+8) inside MiniMax Code; Token Plan
  quotas reset for all users the same day. Knowledge cutoff not disclosed.
- **IDs:** `minimax-ai/minimax-m3.1-flash-preview` (this folder); upstream
  `MiniMax-M3.1-Flash-Preview`.
- **Context window:** **1,000,000 tokens**, stated in MiniMax's own OpenAI-compatible API
  documentation; models.dev additionally lists a 512,000-token output limit. Same 1M ceiling
  as MiniMax-M3. Verified as a vendor spec, not as a measured retrieval result.
- **Modalities:** **text, image and video input; text output**, plus a separate thinking
  stream. Tool calling supported. Structured output not listed on either provider row.
- **Pricing (as of 2026-10-02):** no per-token rate card exists. Token Plan subscriptions:
  **Plus $22 / Max $55 / Ultra $132 per month** (MiniMax's current pricing docs; some
  secondary sources still quote $20 / $50 / $120), with 5-hour rolling plus weekly quota
  windows sized by the vendor at roughly 3–4, 4–5 and 6–7 concurrent agents. Purchased
  Credits run 1,000 credits per $1 and deduct at each model's pay-as-you-go list price.
  Unused monthly quota does not carry over. Check-in credits doubled 2026-09-28 → 2026-10-07.
  There is no free unlimited public API route.
- **Architecture:** **closed weights**. No parameter count, no architecture family, no
  technical report. Media have noted a restricted Hugging Face repository
  `MiniMax-M3.1-preview-private` (~250GB) that outsiders cannot download; whether it holds
  these weights, and whether it will be open-sourced like M3 was, is unconfirmed. The
  MiniMaxAI org's two most recent public repos remain MiniMax-Music3 and MiniMax-H3.

### Raw benchmarks found

Coding / app generation:

- **KingBench 3 (AICodeKing): 53 / 80 = 66.25%** — eight tasks covering visual design,
  application state, rendering logic and user interaction, run as a video walkthrough by
  AICodeKing on MiniMax M3.1 Flash (Volanea review, 2026-09-28). In the same comparison
  MiniMax M3 scored 31.25%. This is currently the **only** measured benchmark number that
  exists for this exact checkpoint.
- SWE-bench Verified / SWE-bench Pro / Terminal-Bench 2.x / LiveCodeBench / SciCode:
  **no verified public score found.** BenchLM lists the model unranked.

Throughput:

- Decode speed: **~90–110 t/s**, measured by day-one developers (eesel AI review, quoting
  community reports). MiniMax has published no throughput figure; MiniMax-M3 is listed at
  roughly 100 t/s. Reported as faster than MiMo-v2.6-flash, slower than deepseek-v4.1-flash.

Agent / tool use:

- Terminal-Bench 2.1 / τ²-bench / MCP Atlas / Toolathlon / GDPval-AA: **no verified public
  score found.**

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME / MMLU-Pro / CritPt: **no verified public score found.** The
  model has no entry on Artificial Analysis's index, so its column is genuinely empty
  rather than merely early.
- Thinking dial: five effort levels — `low`, `medium`, `high`, `xhigh`, `max` — **defaulting
  to `max`**, and thinking **cannot be disabled** (MiniMax documentation). The mapping from
  effort label to token budget is not specified publicly.

Long context / multimodal:

- AA-LCR / MRCR / RULER / GraphWalks: **no verified public score found**, despite the 1M
  window.
- MMMU-Pro / Design Arena / OmniDocBench: **no verified public score found.**

**Deliberately excluded proxies (recorded so they are not mistaken for M3.1 data):**
`MiniMax-M3` vendor figures — SWE-bench Verified 80.5%, SWE-bench Pro 59.0%, Terminal-Bench
2.1 66.0%, MCP Atlas 74.2%, BrowseComp 83.52, OSWorld-Verified 70.06, PAYG ≈$0.30/$1.20 per
1M under 512K input and $0.60/$2.40 above it, with a 1.5× Priority tier — describe a
different model ID and **none of it transfers to M3.1-Flash-Preview**. Third-party review is
explicit: *"M3 results should not be presented as M3.1 results."*

### Normalized scores (1–100)

- **Tool use: 60/100.** The lowest-confidence dimension. No tool-orchestration benchmark
  exists, so the score rests on documented capability rather than measurement: native tool
  calling, an Anthropic-compatible endpoint for agent harnesses, and the fact that the model
  ships as the default inside an agentic coding product where users run long edit-run-fix
  loops. Deliberately conservative.
- **Reasoning: 52/100.** Also unmeasured — no GPQA, HLE, AIME or AA row exists. The tunable
  five-level thinking dial (default `max`, non-disableable) is evidence that reasoning depth
  is a real design axis, but a dial is not a score; the floor reflects a model whose
  advertised tier ("Flash") implies speed-first rather than maximum-depth reasoning.
- **Context window: 80/100.** A 1,000,000-token window confirmed directly in MiniMax's
  OpenAI-compatible API docs, tied for the largest in this comparison and matched only by its
  own MiniMax-M3 sibling. Discounted hard because no MRCR, RULER or GraphWalks measurement
  has ever been run, and because the sibling's rate card prices >512K input at 2× — a strong
  hint that long-context attention here is not cheap.
- **Multimodal: 68/100.** Text, image **and video** input confirmed in official docs —
  genuinely broader than the twin recorded, and unusual for a coding-tier model — with text
  output plus a separate thinking stream. Capped by zero vision benchmarks: the only
  multimodal-adjacent evidence is KingBench 3's visual-design task, which measures generated
  design output rather than comprehension.
- **Coding: 66/100.** Anchored on the single hard number: **KingBench 3 66.25%** (53/80) from
  AICodeKing, a +35-point gain over MiniMax M3's 31.25% in the same comparison. That is real
  evidence of strong interactive app generation. It is not a repo-level SWE number, it comes
  from a video walkthrough rather than a blind harness, and no SWE-bench or Terminal-Bench
  row exists — so the score tracks the measurement rather than the family's reputation.
- **Cost efficiency: 68/100.** No per-token price can be computed, which caps the dimension
  outright. What can be judged: Token Plan at $22/$55/$132 per month with 1,000 credits per
  $1 charged at each model's own list price makes the marginal cost usage-dependent rather
  than forecastable, quota does not roll over, and there is no free public route. Measured
  90–110 t/s keeps the subscription honest for interactive work, and the "Flash" tier plus
  M3's track record of shipping cheap after preview make a low eventual rate card likely.
- **Overall Score: 65.2/100.** Half-up mean of the five quality dims (60 + 52 + 80 + 68 + 66 =
  326 / 5), Cost excluded. Best read as *a real, fast, well-specified but unvalidated model*:
  strong on paper (1M context, video input, tunable thinking) and promising on the one
  measurement that exists, yet priced by subscription rather than tokens and evidenced by a
  single non-standard benchmark. Treat as **unvalidated** and trial inside MiniMax Code if a
  Token Plan seat is already paid for; do not build a dependency on it, and never quote
  MiniMax-M3 numbers for it.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research on 2026-10-02 (MiniMax OpenAI-compatible API documentation, MiniMax Token Plan pricing docs, models.dev canonical model page and provider rows, Volanea AICodeKing KingBench 3 review, eesel AI review incl. measured throughput, orcarouter.ai launch analysis, DataNorth AI, SaaSCity, Yangtzeer, Cocoloop launch coverage). **No MiniMax-M3 or MiniMax-M2.7 figure was carried over**; the single measured M3.1 Flash number (KingBench 3) is attributed to AICodeKing via Volanea.
- Twin note: supersedes the 2026-09-28 self-exclusion. New evidence since then: one third-party measured benchmark, vendor-confirmed multimodal input set and effort dial, vendor-documented subscription pricing, and measured throughput.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1.md`, using the same headings.

---