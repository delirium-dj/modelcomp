# Glyph Cluster — findings by MiniMax M3.1 Flash

- Source: Vercel AI Gateway / Stealth Models (stealth/glyph-cluster)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster (stealth codename — the vendor has never published a product name)
- **Short description:** An anonymous "stealth" reasoning model that Vercel put on AI Gateway for free during a stealth preview (first catalogued 2026-10-07) for coding review and long-context analysis, with a 256K-token context window, function calling and adjustable reasoning effort. No lab has claimed it; the strongest published lead points to Microsoft's MAI family (unconfirmed).
- **Provider / access:** Vercel AI Gateway, model id `stealth/glyph-cluster`, base URL `https://ai-gateway.vercel.sh/v1` (OpenAI-compatible Chat Completions and Responses API; Vercel also documents AI SDK usage). Access needs a Vercel Pro or Enterprise plan with purchased AI Gateway credits. A second route exists via Kilo (models.dev provider `kilo`, "Stealth: Glyph Cluster (free)"). **Not** in the OpenCode Zen/Console catalog and **not** in the current OpenRouter public catalog (0 occurrences of "glyph-cluster" in `https://openrouter.ai/api/v1/models`, checked 2026-11-12).
- **Release / knowledge:** First catalogued 2026-10-07 (AI Tracker detection 2026-10-07 13:46 EDT; Vercel launch changelog published 2026-10-07). Knowledge cutoff: not published.
- **IDs:** `stealth/glyph-cluster` (Vercel AI Gateway canonical id; models.dev entries `vercel` and `kilo` both use `stealth/glyph-cluster`). No OpenCode Zen id; no OpenRouter id verified.
- **Context window:** 256,000 total tokens; 256,000 max output (verified in the Vercel AI Gateway model list entry and in the models.dev `vercel`/`kilo` rows — `limit.context` 256000, `limit.output` 256000).
- **Modalities:** Text in; text out. Function calling: yes (with user-defined tools). Structured outputs: **not** supported. Image and file inputs: **not** supported. Reasoning: yes, with effort levels low / medium / high / xhigh. Streaming and temperature supported. Attachments: no.
- **Pricing (as of 2026-11-12):** Free during the stealth preview — $0 input / $0 output / $0 cached read on Vercel AI Gateway (model page pricing `0`/`0`; models.dev cost fields all zero; modelbenchmark.io lists "free" for both hosts). Caveats: the $0 price is explicitly time-limited ("free during the stealth period"), requires purchased Gateway credits, and Zero Data Retention is **not** available — Vercel states prompts and responses may be retained and used for training and model improvement.
- **Architecture:** Proprietary / closed weights (models.dev `open_weights: false`); parameter count and architecture not published. Tokenizer behaviour matches `o200k_base` (Stealth Models), the same base Microsoft says its MAI models use.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found** (Claw-Eval = N/A)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Function calling: **supported** (Vercel changelog, 2026-10-07); gateway catalog tags the model `reasoning`, `tool-use`, `implicit-caching`; models.dev sets `tool_call: true` (checked 2026-11-12). No structured outputs.
- Tool-free multi-step planning proxy: StealthMark **Foresight 6.4/100** (rank 51/54) and **Latch 3.6/100** (rank 51/55) — both games are played with no code and no tools, so they measure raw planning (Stealth Models, run 2026-10-08).

Reasoning / knowledge:

- GPQA Diamond: **56.4%** (31 of 55 correct) — Stealth Models independent evaluation, 55-question subset, 2026-10-09. On the shared 50-question comparison subset: **56.0%** (28/50). Reference points printed on the same page: GPT-6 Sol 95.45%, GPT-5.5 93.6%, MiniMax M3 92.9%, gpt-oss-120b 80.1%.
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** — `https://benchlm.ai/models/glyph-cluster` returns HTTP 404 and `https://artificialanalysis.ai/models/glyph-cluster` returns HTTP 404 (both checked 2026-11-12).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- StealthMark (independent, Stealth Models; run 2026-10-08; current benchmark version 1.8.12): overall **18.9/100, rank 54 of 58**; General Intelligence **12.0/100**; Visual Intelligence **29.8/100**. Per task: Beach 46.3 (47/58), Pelican 44.3 (51/58), Raccoon 35.7 (53/58), Selfie 32.4 (55/58), Ground Truth 19.9 (53/58), Newton's Mirror 12.8 (52/58), Mona Lisa 11.7 (53/58).
- Reasoning efficiency (Balanced Integration Score, 50 = average, not part of StealthMark): single-step **78** (rank 6/56), multi-step **35** (rank 28/54).
- Output speed: **69 tokens/s** (Stealth Models measurement).

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench (OpenVibeEval): **no entry** — `https://openvibeeval.com/models/glyph-cluster/` returns HTTP 404 and the model is absent from the 47-model directory (checked 2026-11-12).
- DeepSWE / Coding Index / other: **no verified public score found**; closest measured artifact is SVG code construction (StealthMark Visual Intelligence 29.8/100; best tasks Beach 46.3 and Pelican 44.3).

Long context:

- Context is advertised at 256,000 tokens, but **no long-context retrieval reported** — no MRCR, LCR, RULER or GraphWalks value exists for this model at any window length.

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Identity.** Vercel's own copy calls it "an anonymous reasoning model in early access" and never names a maker; Stealth Models states the evidence "points to Microsoft" and calls Glyph Cluster "a slight improvement over MAI Thinking 1" (StealthMark 18.9 vs MAI Thinking 1's 14.1); AI Tracker lists the maker as "not confirmed". Resolved by keeping the model card anonymous and recording the MAI link as a hypothesis, not a fact.
- **Tokenizer as attribution.** Stealth Models reports a 24/24 phrase-count match against MAI Thinking 1 — and an equally exact 24/24 match against its own GPT-6 reference models, because both families use `o200k_base` (Microsoft states MAI uses it in the MAI Thinking 1 technical report, section 2.1). Resolved as *shared tokenizer evidence that cannot separate Microsoft from OpenAI*.
- **Rank drift.** The Glyph Cluster guide page still prints "rank 52 of 56", while the live benchmark page prints the same 18.9 with "rank 54 of 58" (58 models are now tested). Resolved by using the current benchmark page and noting the guide is the older snapshot.
- **Availability.** The curated repository entry for this slug mentions an OpenRouter route; the OpenRouter public model catalog contained no `glyph-cluster` entry when queried on 2026-11-12, while the Vercel gateway catalog still served it. Resolved by listing only Vercel (plus its Kilo route) as verified access and recording OpenRouter as an absence check.
- **GPQA subset size.** 56.4% on 55 questions versus 56.0% on the 50-question subset used for the on-page comparison. Both are reported; the 55-question run is used, with its subset size stated so it is not read as a full 198-question GPQA Diamond score.

### Notes on identity

- **Publicly documented:** the id `stealth/glyph-cluster`; type chat; 256,000-token context with 256,000 max output; text-only input and output; function calling yes, structured outputs no, image/file input no; reasoning effort low/medium/high/xhigh; $0/$0 during the stealth preview; no zero-data-retention; Vercel AI Gateway access for Pro/Enterprise teams with purchased credits; first catalogued 2026-10-07; a second route through Kilo per models.dev. There is **no vendor model card, no weights, no parameter count and no published knowledge cutoff**.
- **Attribution-by-telemetry (not confirmed):** @aitrackerbot reported that the model introduces itself as Microsoft's MAI and counts prompt tokens like MAI Thinking 1 (20 of 20 tool schemas, 8 of 8 text tests). Stealth Models reproduced an exact tokenizer match (23 of 23 phrases in the Iceman test, 24 of 24 in the Glyph test), and documented shared failure patterns with MAI Thinking 1 on Newton's Mirror (the same detached "paint beads" error) plus a distinctive identical Beach composition. Because OpenAI's GPT-6 models match to the token as well, this is a lead, not a confirmation, and Microsoft has made no statement.
- **Endpoint still live?** Yes for Vercel AI Gateway: querying `https://ai-gateway.vercel.sh/v1/models` on 2026-11-12 returned `stealth/glyph-cluster` with context 256000, max_tokens 256000, pricing `0`/`0`, tags reasoning/tool-use/implicit-caching and `zdr: "none"`. models.dev carries both the `vercel` and `kilo` rows. It is absent from OpenCode's 85-model inference catalog and from OpenRouter's public catalog.
- **Caution for readers:** because the lab is "Unknown", a stealth slot can be swapped or re-routed without notice; the repo's own Big Pickle caveat applies here too.

### Normalized scores (1–100)

- **Tool use: 42/100.** Function calling is confirmed (Vercel changelog and catalog tag, models.dev `tool_call: true`), but there is not one verified agentic benchmark — TB2.1, Tau3, GDPval and Claw-Eval are all N/A — and the tool-free planning proxies are bottom-quartile (Foresight 6.4, rank 51/54; Latch 3.6, rank 51/55), so it stays below the 50–70 band that assumes Terminal-Bench 45–60%.
- **Reasoning: 48/100.** GPQA Diamond 56.4% (31/55, Stealth Models, 55-question subset) sits just under the 60–80% "mid" band that maps to 55–65, and StealthMark General Intelligence 12.0/100 plus near-bottom Latch/Foresight ranks cap it further; no HLE, LCR, CritPt or Intelligence Index exists.
- **Context window: 72/100.** 256,000 total tokens falls in the 200K–500K tier (65–84, with 200K mapped to 70); no retrieval benchmark at 256K or any other length is published, so it is placed near the middle of the tier rather than at its top.
- **Multimodal: 15/100.** Text in, text out only — Vercel states image and file inputs are unsupported and there is no non-text output, so it lands in the 10–20 text-only band.
- **Coding: 45/100.** No coding benchmark of any kind was found (SWE-bench, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench all N/A); the only measured artifact is SVG code construction, where Visual Intelligence is 29.8/100 and the best single task is Beach 46.3, below the 65–75 mid-coding band that needs LiveCodeBench and SciCode numbers.
- **Cost efficiency: 100/100.** $0 input and $0 output on the evaluated tier (Vercel model page pricing `0`/`0`), which is the maximum on the inverse-price scale — but the free price is time-limited ("free during the stealth period"), requires purchased AI Gateway credits, and carries no zero-data-retention: Vercel states prompts and responses may be retained and used for training and model improvement.
- **Overall Score: 44.4/100.** (42 + 48 + 72 + 15 + 45) / 5 = 44.4. Best fit: a zero-cost, long-context, text-only scratchpad for code review and long-input analysis while the free preview lasts — not a primary planner or autonomous agent, since no agentic benchmark exists and the measured multi-step planning is near the bottom of the field.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research — Vercel AI Gateway launch changelog and model catalog, the AI Gateway live model list, models.dev catalog rows, Stealth Models' independent StealthMark runs and tokenizer test, AI Tracker's catalog watch, and absence checks against OpenRouter and OpenCode's inference catalog. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Vercel changelog — Glyph Cluster is now available in stealth for free on AI Gateway](https://vercel.com/changelog/glyph-cluster-is-now-available-in-stealth-for-free-on-ai-gateway)
  - [Vercel AI Gateway model page — Glyph Cluster](https://vercel.com/ai-gateway/models/glyph-cluster)
  - [Stealth Models model guide — Glyph Cluster](https://stealthmodels.com/glyph-cluster)
  - [Stealth Models benchmark results — Glyph Cluster](https://stealthmodels.com/benchmarks/models/glyph-cluster)
  - [StealthMark 1.8.12 methodology and field medians](https://stealthmodels.com/stealthmark)
  - [AI Tracker — stealth/glyph-cluster catalog sighting](https://live.aitracker.bot/glyph-cluster)
  - [models.dev catalog (Vercel and Kilo rows for stealth/glyph-cluster)](https://models.dev/api.json)
  - [modelbenchmark.io — Glyph Cluster specs and hosts](https://modelbenchmark.io/models/glyph-cluster)
