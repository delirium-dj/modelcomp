# Egg Alpha — findings by Inkling 2 Small

- Source: unverified / anonymous (`egg-alpha`, "unverified/egg-alpha") — stealth coding model
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Egg Alpha (anonymous stealth model)
- **Short description:** Anonymous stealth coding model that appeared in early November 2026 on 基元律动 (a Chinese model aggregator/relay) and on ModelDial's private coding benchmark suite. Identity, maker, weights, and specs never disclosed. As of ~2026-11-05/06 the model was pulled into "暂时休整" (temporary resting) on the aggregator and is no longer callable; third party tracking shows it likely retired with no rename announced.
- **Provider / access:** was: 基元律动 (unverified relay, `GET /v1/models`, error codes `MODEL_DISABLED` / `MODEL_NOT_AVAILABLE`); listed as free I/O with 1M context, text/image/video input, Responses-capable. Now: **not callable anywhere** (verified 2026-11-06 by community reproduction — 29 models returned, zero anonymous, `egg-alpha` 404). Also absent from OpenCode Zen and models.dev. No public API ID, no weights.
- **Release / knowledge:** ~2026-11-03 (first listed on the aggregator); resting notice 2026-11-05 20:43 (UTC+8); no knowledge cutoff disclosed.
- **IDs:** `egg-alpha` (aggregator slot; gone from the list); `unverified/egg-alpha` per ModelDial.
- **Context window:** claimed 1M (aggregator listing); unverified — no measured retrieval reported; never independently confirmed.
- **Modalities:** claimed text / image / video in → text out (aggregator listing); ModelDial evaluated coding only (Backend / Frontend / Knowledge & reasoning).
- **Pricing (as of 2026-11-13):** was free (input/output $0 on the aggregator); currently no price — model unavailable. Not selectable.
- **Architecture:** undisclosed — no parameters, no license, no family confirmed.

### Raw benchmarks found

ModelDial private coding suite (independent third-party evaluation; "default" effort; tasks methodology on ModelDial; data snapshot 2026-11-13; backend tested 2026-11-04):

- **Overall: 76.4** — rank **20 / 52**
- Backend engineering: **65** (Contracts & boundaries 10/20; Retries & failures 14/20; CI & adversarial review 15/20; Transactions & consistency 17/20; Caching & regression 9/20)
- Frontend interaction: **78**
- Knowledge & reasoning: **90**
- Evaluation time: 32m 52s; API cost: — (unpriced)

Agent / tool use:

- Backend engineering 65 / CI & adversarial review 15/20 on ModelDial (closest agentic-adjacent signal); Terminal-Bench / Tau3 / GDPval-AA: no verified public score found

Reasoning / knowledge:

- ModelDial Knowledge & reasoning: **90** (private suite; no GPQA/HLE/AA-Index published, no peer-reviewed harness)

Coding:

- ModelDial Overall **76.4** (rank 20/52); Frontend **78**, Backend **65**
- SWE-bench / LiveCodeBench / SciCode: no verified public score found

Long context:

- Claimed 1M (aggregator listing); no verified public long-context retrieval score found

### Normalized scores (1–100)

- **Tool use: 60/100.** Backend 65 with weak caching/regression (9/20) and only mid-pack CI review (15/20) on a private suite; no public terminal/agent harness — provisional.
- **Reasoning: 75/100.** ModelDial Knowledge & reasoning 90 is a single private-suite signal, uncorroborated by GPQA/HLE/AA-Index — strong but unverified breadth.
- **Context window: 85/100.** Claimed 1M context from the aggregator listing; zero measured retrieval at any length; capped well below the 1M ceiling tier.
- **Multimodal: 62/100.** Claimed image+video understanding per launch listing; no multimodal benchmark was published and only coding tasks were evaluated — provisional, no video evidence.
- **Coding: 66/100.** Frontend 78 / Backend 65 / overall 76.4 (20/52) is real third-party signal, but from one private suite with unpublished task mix; not reproducible elsewhere.
- **Cost efficiency: 70/100.** Was $0 input/output on the aggregator — effectively 100 while listed; but the model is now unavailable, so the score reflects "free when it existed, unobtainable now", not present value.
- **Overall Score: 70/100.** (60+75+85+62+66)/5 = 69.6 → 70. Best fit: not selectable — anonymous stealth slot, withdrawn into "resting" with no return date; revisit only if it reappears with an identity or a reproducible harness.

---

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-13 UTC
- Method: public internet research; web search returned HTTP 402 (quota), so the fallback ladder was used — one simpler retry (402 again), then direct `webfetch` of DuckDuckGo HTML results, the ModelDial model page (private-suite scores), and the 模真真 (mozhenzhen.com) community thread documenting the aggregator listing, free-tier shutdown and "暂时休整" notice (2026-11-05). No local repository files were used as evidence beyond the slug's own meta.json for identification. Scores are normalized 1–100 interpretations on thin, single-source evidence — treat them as provisional.
- Reference URLs:
  - [ModelDial: Egg Alpha — overall 76.4, rank 20/52 (Backend 65 / Frontend 78 / K&R 90)](https://modeldial.com/en/models/egg-alpha)
  - [模真真 community thread: 基元律动 egg-alpha removed, "暂时休整" announcement (2026-11-05/06)](https://mozhenzhen.com/circle/116)
- Future sources: add a new file next to this one, e.g. `Inkling_2_Small_2.md`, using the same headings.
