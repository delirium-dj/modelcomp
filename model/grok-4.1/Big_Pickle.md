# Grok 4.1 — findings by Big Pickle

- Source: xAI `Grok 4.1` consumer model (Thinking / Non-Thinking), SpaceXAI / xAI
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (SpaceXAI / xAI; not a Free-tier model)
- **Short description:** Released 2025-11-17, Grok 4.1 is xAI's *chat* flagship, not its API model. The launch post and the official model card are almost entirely about conversational quality — style, personality, emotional intelligence and factuality — not benchmarks. Its headline claims are human-preference wins (LMArena Text Arena #1 overall) and a 3x hallucination reduction. It ships in two configurations from the same weights: **Thinking** (code name `quasarflux`) and **Non-Thinking** (code name `tensor`). Do not confuse it with **Grok 4.1 Fast**, the separate $0.20/$0.50 API model with its own folder in this comparison.
- **Provider / access:** **Consumer only — no xAI API model ID exists for base Grok 4.1.** It is available to all users on grok.com, on X, and in the iOS and Android apps, in Auto mode or explicitly via the model picker. xAI's API surface exposes only `grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning` (see the `grok-4.1-fast` row elsewhere in this comparison). Practical consequence: there is no pay-per-token rate card, no programmatic batch access, and no stable endpoint — an application cannot depend on this model. Third-party catalogues that show a $0.20/$0.50 "Grok 4.1" are in practice listing Grok 4.1 Fast; treat that price as belonging to the Fast model, not this one.
- **Release / knowledge:** Released 2025-11-17, following a deliberate two-week silent rollout (2025-11-01 to 2025-11-14) across grok.com, X and mobile, during which xAI ran continuous blind pairwise evaluation on live traffic. Official model card: `data.x.ai/2025-11-17-grok-4-1-model-card.pdf`. **Knowledge cutoff not disclosed** in the model card; xAI's general chat documentation carries the standing caveat that Grok has no knowledge of current events beyond training data unless server-side web/X search is enabled.
- **IDs:** No API model string. Internal LMArena code names `quasarflux` (Thinking) and `tensor` (Non-Thinking). No OpenCode Zen Free ID — this is a consumer subscription / app model.
- **Context window:** **2,000,000 tokens** as documented for the Grok 4.1 generation (xAI generation spec, apxml, and launch coverage). Max output is **not published** for the consumer model. Retrieval quality at any window length is unmeasured — no MRCR, RULER or GraphWalks figure was ever released for the base model.
- **Modalities:** In: text, **image**. Out: text. Reasoning: yes, with a distinct zero-thinking Non-Thinking mode. Tool calls / structured outputs: not documented as API features for this model. Native real-time **web and X search** is integrated into the consumer product. Image *generation* in the app comes from the separate Grok Imagine family, not from Grok 4.1 itself. PDF input: not documented. Prompt caching: not applicable (no API).
- **Pricing (as of 2026-09-26):** **No official API price.** Access is via free tier on grok.com with usage limits, or bundled in xAI's consumer subscriptions (SuperGrok / Premium+ tiers), where it competes against Claude Opus 4.1 and GPT-5 Chat on the same subscription. Third-party listings that quote $0.20 in / $0.50 out for "Grok 4.1" are quoting Grok 4.1 Fast.
- **Architecture:** Proprietary; parameter count not disclosed. Built with the same large-scale RL infrastructure as Grok 4, but optimised for *non-verifiable* reward signals — style, personality, helpfulness, alignment — using frontier agentic reasoning models as automated reward models. That optimisation target is the single most important fact about this model.

### Raw benchmarks found

Human preference and style (xAI launch post, 2025-11-17):

- Blind pairwise win rate in production, Grok 4.1 vs previous production Grok: **64.78%**
- LMArena Text Arena, **#1 overall at 1483 Elo** (Grok 4.1 Thinking, `quasarflux`) — 31 Elo clear of the best non-xAI model
- LMArena Text Arena, **#2 at 1465 Elo** (Grok 4.1 Non-Thinking, `tensor`) — the only non-thinking configuration on the board to beat every other model's full-reasoning setup
- LMArena style-control Elo: 1325 overall / 1525 text
- For reference, Grok 4 ranked #33 in the same arena

Emotional intelligence and writing:

- EQ-Bench: **1586** (Thinking) / **1585** (Non-thinking) — #1 on the leaderboard at launch; previous Grok scored 1206
- Creative Writing v3: **1721.9 Elo** (Thinking) / **1708.6 Elo** (Non-thinking), reported as the largest single jump of any model in that category

Factuality (xAI, measured on real production queries):

- Hallucination rate **12.09% → 4.22%** (a reduction of more than 65%, "over threefold") for Grok 4.1 vs the previous production model
- FActScore error rate **9.89 → 2.97**

Third-party leaderboards (apxml, snapshot as of the 2025-11 release):

- LiveBench Reasoning: **0.87** (#18 closed)
- LiveBench Average: **0.76** (#21 closed)
- MMLU-Pro: **0.84** (#23 closed)
- Text Arena: **1466** (#37)

Agent / tool use:

- Terminal-Bench 2.1 / 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench / Tau-squared Telecom: **no verified public score found** for the base model. xAI published a τ²-bench Telecom result for **Grok 4.1 Fast** (~72% overall accuracy, SOTA among compared models) — that number belongs to the Fast model and must not be credited here
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **no score exists** — Artificial Analysis never benchmarked base Grok 4.1 (its model page 404s), because there is no API to point at
- GPQA Diamond: **no verified public score found**
- AIME 2025 / HMMT 2025: **no verified public score found**
- HLE: **no verified public score found** (Grok 4 Fast, a different and much cheaper model, managed only 20.0%)
- LCR / MLCR / CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no AA-Omniscience score published**; the 4.22% production hallucination rate and FActScore 2.97 above are the closest available proxies
- BenchLM overall: **no public overall score found**

Coding:

- LiveCodeBench: **no verified public score found** for base Grok 4.1 (Grok 4, its predecessor, scored 79.0% at launch)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no verified public score found**

Long context:

- 2M-token window documented for the generation; **no long-context retrieval result reported at any length** for the base model. Note that xAI's own 2M long-horizon RL work and its published 2M contract are on **Grok 4.1 Fast**; for the consumer model the 2M figure is a documented spec, not a measured capability.

### Normalized scores (1–100)

- **Tool use: 68/100.** The real asset is grounding, not agentic plumbing: a 4.22% production hallucination rate, FActScore errors down to 2.97, and integrated live web + X search in the product. That is genuinely good for a chat model that must answer about current events. It stays at 68 because **no** agentic benchmark exists for it — no Terminal-Bench, no τ-bench, no GDPval, no Claw-Eval — and there is no documented function-calling or structured-output surface, because there is no API. 68 is a mid-band judgement on search quality, not a measurement.
- **Reasoning: 80/100.** LMArena Text Arena **#1 overall at 1483 Elo** against every other frontier model, plus LiveBench Reasoning 0.87 (#18) and MMLU-Pro 0.84, is a strong package — and the Non-Thinking mode reaching #2 while beating every competitor's full-reasoning config is the more interesting result. Capped well below 90 because no GPQA, AIME or HLE number was ever published, and because a preference leaderboard measures *how good the answer reads*, not whether it is right.
- **Context window: 95/100.** ≥1M maps to the 95–100 tier, and 2M is documented consistently across xAI material and independent trackers. The missing 5 points are the unmeasured retrieval: no MRCR/RULER was published, and the strong long-horizon context claim belongs to Grok 4.1 Fast rather than this model.
- **Multimodal: 70/100.** Text and **image** in, text out — the "+image in = 60–70" tier, taken at the top of the band for a consumer product with mature image handling. Not higher: no audio, no video input, no PDF, no non-text output from the model itself, and the app's image *generation* is a separate Imagine model.
- **Coding: 58/100.** **No verified public score found on any coding benchmark** — LiveCodeBench, SWE-bench, SciCode, Vibe Code Bench and DeepSWE are all absent, and xAI's launch post makes no coding claim at all; it is entirely about EQ, creativity and factuality. The 58 is a deliberately conservative family inference (Grok 4 measured 79.0% LiveCodeBench, and xAI's current code flagships descend from the same line), not a measurement. Treat base Grok 4.1 as unproven for code.
- **Cost efficiency: 88/100.** Scored on the fact that **no pay-per-token price exists**: the model is free-with-limits on grok.com and bundled into SuperGrok / Premium+, which is outstanding value for interactive chat. It cannot score 95+ because there is no documented $/Mtok rate, no batch tier, and no programmatic access — the cost dimension the methodology actually measures simply does not apply. If you need this quality as an API, the answer is Grok 4.1 Fast at $0.20/$0.50, not this model.
- **Overall Score: 74.2/100.** Mean of the five quality dims: (68 + 80 + 95 + 70 + 58) / 5. **Best fit — pick it if you want the best conversational model money can't rent.** It is #1 on LMArena Text Arena, #1 on EQ-Bench, three times more factual than its predecessor, and it ships free or inside a subscription. The two things to weigh: it is **consumer-only**, so no application can call it; and it was optimised for *style*, not for verified correctness on hard reasoning or code — where the absence of any published GPQA, HLE or SWE-bench number is itself the finding.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-26
- Method: public internet research (xAI launch post `x.ai/news/grok-4-1`, official model card PDF `data.x.ai/2025-11-17-grok-4-1-model-card.pdf`, xAI API model docs, LMArena / EQ-Bench / apxml leaderboards); scores are normalized 1–100 interpretations, not official vendor scores. Every number above carries its source; missing rows are stated as "no verified public score found" rather than estimated. Numbers belonging to Grok 4.1 **Fast** are explicitly flagged and not credited to this model.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
