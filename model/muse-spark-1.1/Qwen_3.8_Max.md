# Muse Spark 1.1 — findings by Qwen 3.8 Max

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's July-2026 mid-frontier reasoning model and the first substantial jump of the Muse Spark line — **+8 Artificial Analysis Intelligence Index points over Muse Spark 1.0 (43 → 51) in three months**, with the gains concentrated in scientific reasoning, coding and knowledge. Its standout independent results are **SciCode 58% (#3 across every model Artificial Analysis has ever benchmarked**, behind only Claude Fable 5 and Gemini 3.1 Pro Preview), **Humanity's Last Exam 45%** (within a point of Claude Opus 4.8 and ahead of GPT-5.5 and Grok 4.5) and a **Coding Agent Index of 69** in the Opencode harness (above Claude Opus 4.8's 67, just below GPT-5.5's 71). It pairs that with a **1M-token context window** (up from 262K) and best-in-class cost-per-task (~$0.26) for its intelligence tier. Its clearest limits: **text + image only** (no video/audio, no published vision benchmark) and agentic knowledge work (GDPval-AA v2) that still lags the frontier.
- **Provider / access:** **Meta Model API** (public preview from 2026-07-09), "Thinking" mode in the Meta AI app, meta.ai, and an OpenCode listing. Regional availability limited; $20 free credit at launch. Effort levels up to **xhigh**.
- **Release / knowledge:** Released **2026-07-09** (one day after Grok 4.5). Knowledge cutoff not disclosed in the sources reviewed.
- **IDs:** `muse-spark-1.1` (predecessor Muse Spark 1.0 [Index 43]; successors 1.2 / 1.3; sibling line Muse Glimmer-30B).
- **Context window:** **1M tokens native** (up from 262K for 1.0); Meta emphasizes the model **"actively manages" its context** — compacting earlier work while retaining steps needed later — aimed at long-running agentic sessions. No MRCR-style long-context recall figure published in the sources reviewed.
- **Modalities:** **text + image in → text out** (no video, no audio). Reasoning ("Thinking") model with extended-thinking effort levels; function calling / tool use for agentic workflows.
- **Pricing (as of 2026-10-23):** **$1.25 / 1M input, $4.25 / 1M output**; **cache hits $0.15 / 1M (88% discount)**; $20 free credit. **~$0.26 per AA Intelligence-Index task** (2nd-cheapest among models at/above its intelligence, behind only GPT-5.6 Luna's $0.21; below GLM-5.2's $0.37 and ~3× below GPT-5.4's $0.89). Output speed **~114–121 tok/s** median on Meta's first-party API, ~21s time-to-first-token.
- **Architecture:** Undisclosed proprietary (Meta). Notably **token-efficient for its tier** — used **94M output tokens** to run the Intelligence Index (fewer than GPT-5.4 xhigh's 109M, GPT-5.6 Luna's 125M and GLM-5.2's 141M, though above the ~60M average and more than Claude Fable 5 / Grok 4.5). Full Index evaluation cost $548.07.

### Raw benchmarks found

Reasoning / knowledge (Artificial Analysis **independent** pre-release evaluation, xhigh):

- **AA Intelligence Index: 51** (up +8 from Muse Spark 1.0's 43) — effectively tied with **GLM-5.2 (max), GPT-5.4 (xhigh), GPT-5.6 Luna (max)**; 3 points behind **Grok 4.5 (high, 54)**; leading edge is **Claude Fable 5 (60), GPT-5.6 Sol (max, 59), Claude Opus 4.8 (max, 56)**
- **Humanity's Last Exam: 45%** (+5 from 40%) — within a point of Claude Opus 4.8 (max, 46%), ahead of GPT-5.5 (44%) and Grok 4.5 (high, 40%)
- **AA-Omniscience: 18** (+14 from 4) — but the gain is driven by **abstention, not accuracy**: hallucination rate fell 35 points (73% → 38%), attempt rate 95% → 82%, while raw accuracy was roughly flat/slightly down (45% → 41%)
- **Coding Index: 71** (+12 from 59)

Coding (Artificial Analysis **independent**):

- **SciCode: 58%** (+6 from 52%) — **#3 across all models AA has benchmarked**, behind only Claude Fable 5 (60%) and Gemini 3.1 Pro Preview (59%)
- **Coding Agent Index (Opencode harness): 69** — "just below GPT-5.5 (medium) in Codex (71) and ahead of Claude Opus 4.8 (medium) in Claude Code (67)"; ~$1.4 cost per task, among the lowest of frontier coding agents (tradeoff: higher time per task)
- **TerminalBench** gains noted (part of the +12 Coding Index jump); no absolute TerminalBench figure surfaced

Agent / knowledge work (Artificial Analysis **independent**):

- **GDPval-AA v2: 1376 Elo** (+232 from 1144) — agentic knowledge work "improves substantially but continues to lag the frontier"

Meta-authored / single-source claims (Alexandr Wang; **directional only**, not third-party confirmed):

- Finite model theory / theoretical-CS eval: beats Opus, Grok 4.5 and Gemini; topped CritPT (July 11)
- RadLE-H (radiology handover): SOTA, nearing human expert; HealthBench Professional: SOTA; Debate Benchmark: #3 behind Fable 5 and Opus 4.7

Multimodal:

- Text + image input only; **no MMMU / MathVision / vision benchmark published** in the sources reviewed

Documented weakness:

- A third-party n=3 game-generation test (AI/ML API) found Muse Spark 1.1 **lagged badly on a Crossy Road clone** where Grok 4.5 nailed physics/playback on all three — cheapest per run ($1.08 vs $2.47) but "cheap stops being cheap when it doesn't work"

> Provenance: The core capability figures come from **Artificial Analysis' independent pre-release evaluation** (AA "supported Meta with pre-release evaluation," article dated 2026-07-10) — a **neutral harness**, not a vendor chart, so these numbers carry more weight than the vendor-only models I discount elsewhere. The **AA-Omniscience** rise is explicitly flagged by AA as abstention-driven (accuracy flat), so it is not counted as a genuine knowledge gain. The **finite-model-theory / RadLE-H / HealthBench-Pro / Debate** wins are **single-source Meta-executive claims** and are treated as directional, not verified. The game-code failure is a small **n=3 third-party** test — the clearest concrete weakness documented but low-sample. Head-to-head coverage is thin as of mid-July 2026. Cost/speed/token figures are AA-measured at Meta's $1.25/$4.25 pricing. No benchmark was invented.

### Normalized scores (1–100)

- **Tool use: 83/100.** Solid agentic capability — **Coding Agent Index 69** in the Opencode harness (above Claude Opus 4.8's 67, just below GPT-5.5's 71) and **GDPval-AA v2 1376 Elo (+232)** with TerminalBench gains. Held below the frontier because AA explicitly notes agentic knowledge work "continues to lag the frontier" on GDPval-AA, and no OSWorld/MCP/τ2-bench computer-use figure is published.
- **Reasoning: 85/100.** Strong and **independently verified** — **AA Intelligence Index 51** (ties GLM-5.2/GPT-5.4/GPT-5.6 Luna), **HLE 45%** (within a point of Opus 4.8, ahead of GPT-5.5 and Grok 4.5), Coding Index 71. Capped because Index 51 sits a clear tier below the leaders (Fable 5 60, Sol 59, Opus 4.8 56, Grok 4.5 54), and the eye-catching **AA-Omniscience jump (4→18) is abstention-driven with flat accuracy** — not a true knowledge gain.
- **Context window: 88/100.** A **1M-token native window** (up from 262K) with active context management/compaction for long agentic sessions — on par with the native-1M leaders. Discounted below 89–93 because there is **no published MRCR-style long-context recall benchmark** to verify quality at depth.
- **Multimodal: 76/100.** The weakest dimension — **text + image only (no video/audio)** and **no published vision benchmark** (no MMMU/MathVision/DocVQA) in the sources reviewed. Vision is framed as an agentic aid rather than a measured strength, so I score conservatively rather than assume parity with text.
- **Coding: 88/100.** The standout — **SciCode 58% ranks #3 across every model AA has ever benchmarked** (behind only Fable 5 and Gemini 3.1 Pro Preview), **Coding Agent Index 69 beats Claude Opus 4.8** and sits just below GPT-5.5, with a +12 Coding Index jump and TerminalBench gains. Held just below the 90s by the documented **game-code/physics generation weakness** (n=3) and the absence of a published SWE-bench Verified/Pro figure.
- **Cost efficiency: 88/100.** Excellent for its tier — **~$0.26 per Index task** (2nd-cheapest at/above Index 51, behind GPT-5.6 Luna's $0.21), $1.25/$4.25 pricing with an 88%-off cache tier and strong token efficiency (94M tokens vs 141M for GLM-5.2). Below the MIT open-weight value models (96–97, $0 self-host) and tempered by **above-average verbosity (94M vs ~60M)** that erodes the input-price edge on long generations. Scored but **not** counted in the Overall per methodology.
- **Overall Score: 84/100.** Mean of Tool 83 + Reasoning 85 + Context 88 + Multimodal 76 + Coding 88 = 420/5 = 84.0 → 84. Best fit: **high-volume agentic reasoning and coding at the lowest frontier-tier cost** — multi-step quantitative work over structured documents, procedural review, report drafting, scientific/theoretical reasoning and long-horizon (1M-context) agent sessions where $/task matters; avoid graphics/physics/game-code generation that must run first-shot, and pair with a vision-capable model for image-heavy or video/audio tasks. Independent read: my 84 sits **below the queue's curated 88**, and — unlike the vendor-only models I discount — here the gap reflects the **independent evidence itself**: AA Index 51 places it a clear tier below Fable 5/Sol/Opus 4.8/Grok 4.5, its multimodal support is text+image-only with no vision benchmark, and GDPval agentic work still lags the frontier, even though its coding (SciCode #3) is genuinely elite.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23
- Method: public internet research (Artificial Analysis' independent pre-release evaluation "Muse Spark 1.1: Meta gains 8 Intelligence Index points in three months," 2026-07-10; kie.ai's "Muse Spark 1.1 vs Grok 4.5: Benchmarks & Pricing," 2026-07-14, citing the AA model page and Meta's official announcement). Core capability figures are **Artificial Analysis independent-harness** measurements (higher confidence than vendor charts); the finite-model-theory / RadLE-H / HealthBench-Pro / Debate wins are single-source Meta-executive claims treated as directional; the game-code weakness is a low-sample (n=3) third-party test. Scores are normalized 1–100 interpretations, not official vendor scores. No unverified benchmark was invented.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
