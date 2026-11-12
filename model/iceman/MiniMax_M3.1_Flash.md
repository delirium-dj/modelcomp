# Iceman — findings by MiniMax M3.1 Flash

- Source: OpenCode Zen / Console + Stealth Models (opencode/iceman-free)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (Free tier; also shipped as Iceman Contributor on OpenCode Go)
- **Short description:** OpenCode's anonymous "stealth" reasoning model, free for a limited time on OpenCode Zen as `iceman-free` and on OpenCode Go as `iceman-contributor-free`, with tool calling, four reasoning effort levels and a 262K-token context window. No lab has claimed it; the strongest published lead points to Microsoft's MAI family (unconfirmed), and the free access is paid for with prompts and completions.
- **Provider / access:** OpenCode Zen / OpenCode Console. In the app the id is `opencode/iceman-free`; direct API use sends model `iceman-free` to `https://opencode.ai/inference/openai/v1/chat/completions` (OpenAI-compatible Chat Completions). The Go plan serves the same name as `opencode-go/iceman-contributor-free` at `https://opencode.ai/inference/go/openai/v1/chat/completions`. Free use through the direct API carries a usage limit — Stealth Models reports that OpenCode refused their request and pointed them to the app or a Go plan. Go costs $10 per month.
- **Release / knowledge:** `iceman-free` released 2026-11-06 (models.dev and the OpenCode inference model list); `iceman-contributor-free` released 2026-10-24. First public sighting 2026-10-24 20:09 UTC (models.dev commit), then a Reddit thread at 21:03 UTC, the earliest social post at 21:06 UTC, and the token-count lead at 22:32 UTC. Knowledge cutoff: not published.
- **IDs:** `opencode/iceman-free` (Zen/Console), `iceman-free` (inference model id), `opencode-go/iceman-contributor-free` (Go), `iceman-contributor-free` (inference model id on the Go route). OpenCode's usage board tracks the two traffic ids `iceman` and `iceman-contributor` with lab "Unknown".
- **Context window:** 262,144 tokens in / 131,072 tokens out (models.dev `limit.context` and `limit.output`; identical in the OpenCode inference catalog and in modelbenchmark.io). Max output is comfortably above the 64K caveat threshold.
- **Modalities:** Text in; text out. Tool calls: yes (models.dev `tool_call: true`; OpenCode catalog lists tools supported). Reasoning: yes, effort levels low / medium / high / xhigh (Go accepts these and rejects `max`). Attachments and image input: no. Structured output: not documented.
- **Pricing (as of 2026-11-12):** Free on the evaluated tier — $0 input / $0 output / $0 cached read (OpenCode pricing table and models.dev cost fields are all zero; modelbenchmark.io lists "free"). Caveats from OpenCode's own Privacy section: "Iceman Free: During its free period, collected data is retained and used to improve the model." The Zen docs add that it is "a stealth model that's free on OpenCode for a limited time. The team is using this time to collect feedback and improve the model." On Go the same trade is explicit — free tokens in exchange for permission to use prompts and completions to improve the model, with requests retained.
- **Architecture:** Proprietary / closed weights (models.dev `open_weights: false`); size, architecture and knowledge cutoff are not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found** (Claw-Eval = N/A)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Tool calling: **supported** — models.dev `tool_call: true`; OpenCode's live inference catalog lists `iceman-free` with `capabilities.tools.supported: true` and `capabilities.reasoning.supported: true` (checked 2026-11-12). Stealth Models' field tests used it with active tool calling on the Go route.
- Tool-free multi-step planning proxy: StealthMark **Foresight 3.2/100** (rank 54 of 54) and **Latch 3.6/100** (rank 51 of 55) — both games run with no code and no tools (Stealth Models, 2026-10-25).
- Production agentic usage (not a benchmark): OpenCode Data shows 1,116,957 completed sessions on the `iceman` id and 4,093,592 on `iceman-contributor` over two months, averaging 2.8M tokens per session on the first id (updated 2026-11-12T00:10:43Z).

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (no GPQA run exists for Iceman on Stealth Models' pages; `https://benchlm.ai/models/iceman` and `https://artificialanalysis.ai/models/iceman` are absent)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** — OpenVibeEval's leaderboard shows a dash for Iceman's Intelligence Index and Coding Index, meaning Artificial Analysis has not benchmarked it.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- StealthMark (independent, Stealth Models; run 2026-10-25; current benchmark version 1.8.12): overall **19.2/100, rank 53 of 58**; General Intelligence **11.7/100**; Visual Intelligence **31.0/100**. Per task: Beach 46.4 (46/58), Selfie 39.3 (53/58), Pelican 38.0 (53/58), Raccoon 29.8 (55/58), Ground Truth 20.2 (52/58), Mona Lisa 19.3 (47/58), Newton's Mirror 10.1 (54/58).
- Reasoning efficiency (Balanced Integration Score, 50 = average, not part of StealthMark): single-step **29** (rank 52/56), multi-step **37** (rank 25/54) — verbose single-step thinking relative to the quality delivered.
- Output speed: **46 tokens/s** average, 18–62 tokens/s across three low-effort runs on OpenCode Go, with roughly **0.9 s** time to first token (Stealth Models, 2026-10-25).

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench (OpenVibeEval, frontend code generation): **95/100 average accessibility** over **8 of 8 scored runs** — per-run scores 78, 90, 94, 100, 100, 100, 100, 100; sample-size-adjusted score 85/100 (n = 8, ±7); page updated 2026-11-07, model released 2026-11-06. Zero-shot, single self-contained `index.html`, no agent loops and no retries (OpenVibeEval methodology). Raw average is at the top of the 47-model suite (Claude Fable 5 98, DeepSeek V4.1 Flash 1017 99, GPT-6 Astra 96); the suite also lists Iceman for head-to-head duels against 47 peers.
- DeepSWE / Coding Index / other: **no verified public score found**; closest artifact evidence besides OpenVibeEval is SVG construction (StealthMark Visual Intelligence 31.0/100; Beach 46.4, Selfie 39.3).

Long context:

- 262,144-token context is advertised, but **no long-context retrieval reported** — no MRCR, LCR, RULER or GraphWalks value exists for Iceman at any length.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **One model or two.** OpenCode ships both `iceman-free` (Zen, 2026-11-06) and `iceman-contributor-free` (Go, 2026-10-24) and has never said they are the same weights. Independent trackers read them as one model: Stealth Models notes they share the name, the 262,144-token context and the 131,072-token output cap, and ArtificialWatch states the two usage ids are "one model's traffic moving from one id to the other" (3.37T tokens since 2026-10-23). Resolved by scoring the single `iceman-free` entry and noting the Go twin, not by counting it twice.
- **Identity.** OpenCode deliberately shows the lab as "Unknown" (the model id sits on OpenCode's stealth list, which hides the lab on the data page); @aitrackerbot reported that Iceman introduces itself as "MAI, created and trained by Microsoft AI" and counts prompt tokens exactly like MAI Thinking 1; Stealth Models' own tokenizer test matched MAI Thinking 1 **and** OpenAI's GPT-6 family exactly (23 of 23 phrases each), so a token count cannot separate the two labs; ArtificialWatch confirms no lab had claimed it as of 2026-11-04. Resolved as an unconfirmed Microsoft MAI lead.
- **Free means free?** OpenCode's pricing table lists $0/$0/$0, while the same documentation's Privacy section states that during the free period collected data is retained and used to improve the model. Resolved by scoring cost efficiency on the $0 price and stating the retention trade-off explicitly rather than treating the endpoint as privacy-neutral.
- **Benchmark disagreement on the field, not on Iceman.** The Iceman benchmark page prints StealthMark 19.2 with "rank 53 of 58", while its guide page for the sibling stealth model quotes slightly different field sizes for the same benchmark family. Resolved by using the live benchmark page values and naming the version (current StealthMark 1.8.12) with the run date (2026-10-25).

### Notes on identity

- **Publicly documented:** model ids `iceman-free` and `iceman-contributor-free`; free for a limited time on OpenCode Zen and Go; 262,144-token context and 131,072-token max output; text in / text out; tool calls and reasoning supported with four effort levels (low, medium, high, xhigh; `max` rejected); closed weights; lab shown as "Unknown" on OpenCode's usage board; direct API endpoint `https://opencode.ai/inference/openai/v1/chat/completions`; release dates 2026-11-06 (Zen) and 2026-10-24 (Go). There is no vendor model card, no parameter count and no published knowledge cutoff.
- **Attribution-by-telemetry (not confirmed):** the reported self-introduction as Microsoft's MAI and exact prompt-token parity with MAI Thinking 1 on 20 of 20 tool schemas and 8 of 8 text tests (@aitrackerbot, 2026-10-24), reproduced independently by Stealth Models (23 of 23 phrase matches). Because the same test also matches GPT-6 Astra, Luna, Sol, 6.1 Sol and gpt-oss-120b exactly — all sharing the `o200k_base` tokenizer family — this identifies a tokenizer lineage, not a lab. Microsoft has said nothing.
- **Endpoint still live?** Yes. The OpenCode inference model list (`https://opencode.ai/inference/v1/models`, checked 2026-11-12) still returns `iceman-free` with release date 2026-11-06, tools and reasoning supported, context 262144, output 131072 and zero prices, and the Zen/Console docs list it with a free-for-a-limited-time note. Usage is live too: 3.1T tokens for the `iceman` id (rank #17 by tokens last week, 106K unique users) and 994B for `iceman-contributor` (rank #26) over two months to 2026-11-12.
- **Practical caution:** because the price is $0 and the endpoint can be re-pointed at any time, treat Iceman as a free daily driver with an unconfirmed pedigree — and never send confidential code, because OpenCode states prompts and completions are retained and used to improve the model during the free period.

### Normalized scores (1–100)

- **Tool use: 45/100.** Tool calling is confirmed in both the models.dev row and OpenCode's live catalog, and the model drives real agentic sessions (1.1M and 4.1M completed sessions in two months), but there is no verified agentic benchmark (TB2.1, Tau3, GDPval, Claw-Eval all N/A) and the tool-free planning proxies are last and second-to-last in the field (Foresight 3.2, rank 54/54; Latch 3.6, rank 51/55), so it is held below the 50–70 mid band.
- **Reasoning: 45/100.** No GPQA, HLE, LCR, CritPt or Intelligence Index number exists; the measured carry-over is weak (StealthMark General Intelligence 11.7/100, Latch and Foresight near the bottom) and single-step reasoning efficiency ranks 52 of 56, i.e. a lot of thinking for the quality delivered, so the score is set below its sibling stealth slot's GPQA-anchored reasoning score.
- **Context window: 72/100.** 262,144 tokens sits in the 200K–500K tier (65–84, 200K mapped to 70); the 131,072-token max output is not a caveat, but no retrieval benchmark at 262K or any shorter length is published, so it sits mid-tier rather than at the top.
- **Multimodal: 15/100.** Text in, text out only; no image, audio or video input and no non-text output, placing it in the 10–20 text-only band.
- **Coding: 62/100.** The one real coding measurement is strong: 95/100 average accessibility across 8 of 8 OpenVibeEval frontend runs (adjusted 85, n = 8), at the top of that suite's raw averages, and SVG construction is its best StealthMark area (Beach 46.4, Selfie 39.3). It stays in the mid band rather than higher because SWE-bench, LiveCodeBench, SciCode, DeepSWE and Terminal-Bench are all unverified and the OpenVibeEval runs were zero-shot single-file frontends, not repository work.
- **Cost efficiency: 100/100.** $0 input, $0 output and $0 cached read on the evaluated tier — the maximum on the inverse-price scale — flagged as time-limited and data-bound: OpenCode's Privacy section states that for Iceman Free "during its free period, collected data is retained and used to improve the model", and the Go tier is explicitly a trade of prompts for tokens.
- **Overall Score: 47.8/100.** (45 + 45 + 72 + 15 + 62) / 5 = 47.8. Best fit: a zero-cost frontend/UI builder and bulky-context reader for prototypes, not a long-horizon planner — its planning proxies are last in the field even though its code output is strong.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — OpenCode Zen/Console model and privacy documentation, the live OpenCode inference model catalog, models.dev catalog rows, OpenCode Data usage boards, Stealth Models' independent StealthMark runs and tokenizer test, OpenVibeEval's independent frontend runs and methodology, ArtificialWatch's usage analysis, and absence checks against BenchLM and Artificial Analysis. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenCode Console/Zen models, pricing and Privacy section](https://opencode.ai/docs/zen/)
  - [OpenCode Data — iceman usage, rank and retention](https://opencode.ai/data/unknown/iceman)
  - [Stealth Models model guide — Iceman Contributor](https://stealthmodels.com/iceman-contributor)
  - [Stealth Models benchmark results — Iceman Contributor](https://stealthmodels.com/benchmarks/models/iceman-contributor)
  - [OpenVibeEval — Iceman Free model page (95/100, 8 runs)](https://openvibeeval.com/models/iceman/)
  - [OpenVibeEval methodology](https://openvibeeval.com/methodology/)
  - [ArtificialWatch — Iceman stealth model usage analysis](https://artificialwatch.com/wire/iceman-opencode-stealth-model-3-trillion-tokens-unclaimed)
  - [modelbenchmark.io — Iceman Free specs and pricing](https://modelbenchmark.io/models/iceman-free)
  - [models.dev catalog (opencode/iceman-free and opencode-go/iceman-contributor-free rows)](https://models.dev/api.json)
