# omen-alpha — findings by Step 5 Preview

- Source: unidentified vendor — OpenCode Go stealth route (`omen-alpha`; catalog lab `unknown`, backend `opencode-go`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (catalog ID `omen-alpha`)
- **Short description:** An anonymous "stealth" coding model launched 2026-09-04 exclusively to OpenCode's $10/month Go subscribers ("$100 worth of usage for $10"), served through the OpenAI-compatible Go endpoint `https://opencode.ai/zen/go/v1`. The operating vendor has never been named. Startup Fortune (2026-09-04) reports OpenCode's own data URL files the model under a **`zhipu` namespace**, and an independent benchmark run found the model fails the exact same test lines as Ox Alpha and GLM-5.3-Flash with near-identical output — behavioral evidence consistent with a Zhipu AI (Z.ai) GLM-5.3-Flash-family model, possibly a faster-serving variant. **No vendor has confirmed the identity, so every inference below is labeled.**
- **Provider / access:** OpenCode Go only (`opencode-go` / `https://opencode.ai/zen/go/v1`); Chat-Completions-style API (`openai-completions`). Not on OpenRouter (unlike its predecessor Ox Alpha, which was listed there in August). One host in every tracker (modelbenchmark.io: "Available from 1 host").
- **Release / knowledge:** 2026-09-04 (OpenCode announcement; modelbenchmark.io agrees). Knowledge cutoff not disclosed.
- **IDs:** `omen-alpha` (opencode-go). No vendor model ID exists publicly — this is a route alias, not a vendor checkpoint name.
- **Context window:** **500,000 tokens / 128,000 max output** — Pi.dev's published config (`contextWindow: 500000, maxTokens: 128000`), modelbenchmark.io's "most-agreed" values, and the launch-day community reports all agree. Reasoning modes: `low` and `high` mapped via `thinkingLevelMap` (other levels null).
- **Modalities:** text + image in → text out (Pi.dev `input: ["text","image"]`); reasoning yes; supportsReasoningEffort yes; supportsStrictMode yes; tool calling assumed via agent use (no vendor modalities list exists).
- **Pricing (as of 2026-10-26):** **$0.20 / $0.66 per 1M in/out, $0.04 cache read** — identical across Pi.dev, modelbenchmark.io and OpenCode's own catalog (launch-day Magica report matches). Metered inside the $10 Go subscription ($100 of usage value/month), not sold per-token publicly.
- **Architecture:** undisclosed — no parameter count, no weights, no license. Behavioral fingerprint below suggests GLM-5.3-Flash-class (320B-A18B) weights, ~3× faster serving, but no source states this.

### Raw benchmarks found

Agent / tool use / coding — **one independent benchmark exists**, the only public evaluation of this route:

- **llmbench (independent, self-made SWE-bench-style harness, github.com/zephel01/swe-bench, MIT), run 2026-09-04** (note.com/zephel01, 60 questions × 5 trials + L7 grandmaster 16 questions × 3 trials, temperature 0.35, hidden-pytest pass/fail):
  - 60-question set: **Resolved 95.0% (57/60)**, Average success rate (pass@1) **95.7%**, Quality **84.5**, Combined **88.3** — "enters the top group among those I have tested with this 60-question configuration."
  - L7 grandmaster 16 questions: **Resolved 81.2% (13/16)**; failures t069, t103, t105; **all 16 questions 3/3 or 0/3 — all-or-nothing, a first in the author's records.**
  - Median throughput: **135.8 tok/s (60q) / 164.1 tok/s (L7)** — "about 3 times the actual measured speed of GLM-5.3-Flash (~52.8 / ~48.1)"; flagged by the author himself as "the only point that does not match."
- Behavioral identity evidence (same run): t103 and t105 are "the same problems that Ox Alpha on 8/23 and GLM-5.3-Flash on 8/27 failed on **the exact same line of the exact same test**"; t103's generated output (4 files, zero ruff issues, **MI=94**) was "almost identical across all three"; it passed t101 (log rotator), the second instance in the author's records after GLM-5.3-Flash. An X post cited by Startup Fortune claimed the model was **not** from Z.ai despite GLM-like behavior — unresolved conflict.
- Terminal-Bench 2.1: no verified public score found (llmbench is the closest proxy).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for this ID. Closest proxy (provisional, flagged): if the Zhipu/GLM-5.3-Flash behavioral link holds, the shared-weights figures are AA Intelligence Index 41.81 (#4/118 open-weights, v4.3.2, AA-measured) and GPQA Diamond 91% (third-party compilation) — **not measured on this route and not used as verified scores.**
- HLE: no verified public score found.
- LCR / MLCR / CritPt: no verified public score found.
- Artificial Analysis Intelligence Index: no entry (route is unlisted at AA; RankLLMs: "Not established").
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Verified: no verified public score found under this ID (llmbench is a SWE-bench-style independent equivalent, above).
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE (official datasets): no verified public score found for this ID.

Long context:

- 500,000-token window verified three ways (Pi.dev config, modelbenchmark.io, launch reports); MRCR / RULER / GraphWalks retrieval: no verified public score found.

Usage telemetry (OpenCode Data, updated 2026-10-26T19:38Z — platform activity, **not** quality evidence): 2.3T tokens over 2 months (+100% vs prior window), 90K unique users, 588,104 sessions, 3.9M tokens/session, $0.2114 avg cost/session, $124,319 total spend, 93.1% cache-served input, 63.4% weekly retention, rank #40 last week. Traffic history: launched 2026-09-04 at 241B tokens/day, decayed to zero on 2026-09-29/30 (withdrawn), returned 2026-10-01 and has been stable at ~1–3.7B/day since — consistent with a stealth preview that was pulled and partially restored. Geography: China 33.5%, US 15.1%, Japan 7.1%.

### Conflict / resolution notes

1. **Identity — zhipu vs unknown vs not-Zhipu.** OpenCode's data path (`unknown` lab; startupfortune reports a `zhipu` namespace in the data URL), the same-line failure signature plus MI=94 output identity with Ox Alpha/GLM-5.3-Flash, and the ~3× speed of GLM-5.3-Flash all point at a Zhipu GLM-5.3-Flash-family serving variant; an X post claims the opposite; RankLLMs' editorial review concludes the attribution is "not established." Resolution: treat identity as **unconfirmed but strongly indicated**; no GLM figure is used as a verified score — only as explicitly-labeled provisional context.
2. **Speed conflict:** llmbench-measured 135.8–164.1 tok/s median (one author, one day) vs GLM-5.3-Flash's independently measured ~48–52.8 tok/s and OpenCode's unpublished serving config — directionally consistent with a speed tier but both figures are single-source snapshots.
3. **Supersedes the 2026-10-09 `.excluded` twin.** That pass found a fully unmodeled route: null metadata, zero specs, zero benchmarks. Fresh research on 2026-10-26 found published specs (Pi.dev config + modelbenchmark.io + OpenCode catalog, three sources agreeing on 500K/128K/$0.20/$0.66/$0.04), the only independent benchmark evaluation of the route (llmbench, with published methodology and MIT-licensed harness), and behavioral identity evidence — i.e., the twin's own re-score trigger ("If the operator or a tracker publishes a model card, benchmark table or catalog listing matching this endpoint") has fired.
4. Caveats that cap the scores: one independent benchmark author (n=60 + 16, self-made harness — not a standard leaderboard); no vendor model card; no GPQA/HLE/AA measurement on this exact route; identity inference is indirect.

### Normalized scores (1–100)

- **Tool use: 80/100.** The single independent evaluation shows elite agentic resolution (95.0% on 60 tasks, 81.2% on L7 grandmaster set, all-or-nothing 3/3 consistency), but it is one author's self-made harness on one day, and no standard agentic suite (Terminal-Bench, Toolathlon, Tau) has ever been run on this route.
- **Reasoning: 70/100.** No direct reasoning benchmark exists for this ID; scored provisionally off the GLM-5.3-Flash shared-weights evidence (AA Index 41.81 #4/118 open-weights, GPQA Diamond 91%) that the same-line-failure fingerprint strongly suggests applies — flagged as inference, not measurement.
- **Context window: 90/100.** 500,000-token input / 128,000-token output verified by three independent listings (Pi.dev, modelbenchmark.io, OpenCode launch materials) — top-tier but below the 1M tier; no long-context retrieval benchmark exists for this route.
- **Multimodal: 55/100.** Text + image input and text output per Pi.dev's published config; no video, audio or document input is documented anywhere, and no vision benchmark exists for this route.
- **Coding: 85/100.** llmbench Resolved 95.0% / Quality 84.5 / Combined 88.3 with 3/3-or-0/3 L7 consistency and measured 135.8–164.1 tok/s median throughput (~3× GLM-5.3-Flash) — the strongest single-harness coding evidence in this queue for an anonymous route; capped because it is one independent harness, not a standard benchmark, and SWE-bench Verified itself reports nothing for this ID.
- **Cost efficiency: 85/100.** $0.20/$0.66 per 1M ($0.04 cache read) — near the cheap end of the measured-performance field, bundled as "$100 of usage for $10" inside OpenCode Go.
- **Overall Score: 76.0/100.** Mean of the five non-cost dims: (80 + 70 + 90 + 55 + 85) / 5 = 76.0. Best fit: a fast, cheap stealth coding-agent route with elite independent-harness coding scores; adopt pending either a vendor confirmation of identity or a standard-benchmark run on this exact route.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-26
- Method: public internet research across six independent source families on 2026-10-26 — OpenCode's own usage-data page and JSON catalog endpoint, Pi.dev's published model configuration, modelbenchmark.io's spec/pricing aggregation, Startup Fortune's identity report (zhipu namespace clue + community reaction), RankLLMs' editorial verification review, Magica's launch-day pricing report, and the independent llmbench evaluation (note.com/zephel01, MIT harness) with its behavioral comparison to Ox Alpha and GLM-5.3-Flash — cross-compared for conflicts (identity attribution and speed figures conflict and are resolved in the notes). Scores are normalized 1–100 interpretations, not official vendor scores; the reasoning score is explicitly provisional.
- Supersedes: `Step_5_Preview.md.excluded` (2026-10-09, "unmodeled stealth/test route") — that verdict no longer holds on the evidence found today.
- Future sources: add a new file next to this one, e.g. `Omen_Alpha.md`, using the same headings.
