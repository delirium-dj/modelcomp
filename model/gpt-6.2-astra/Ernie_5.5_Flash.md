# GPT-6.2 Astra — findings by Ernie 5.5 Flash

- Source: OpenAI (`gpt-6.2-astra`) — **unreleased / not in OpenAI's public model catalog**
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Astra
- **Short description:** An OpenAI Astra-tier model that appears in Codex usage telemetry and third-party private evaluations but has **not been released or documented by OpenAI**. Measured results place it at or near the top of ModelDial's coding leaderboard. Treat every capability figure below as a third-party measurement of an unreleased build, not a vendor specification.
- **Provider / access:** No public API route. OpenAI's model catalog, API changelog, Codex models page and Deployment Safety Hub list no `gpt-6.2-astra` (verified 2026-11-13); the model page returns HTTP 404. The only access evidenced publicly is ModelDial's private evaluation harness, which reports a backend test date of 2026-11-11. Earlier Codex usage screenshots (2026-11-01) showed the string while the picker still read "GPT-6 Astra", and a `codex --model gpt-6.2-astra` call returned `400 model_not_found`.
- **Release / knowledge:** **Unreleased as of 2026-11-13.** Name first surfaced in Codex usage logs on 2026-11-01. No knowledge cutoff published. OpenAI has never mentioned the name.
- **IDs:** `gpt-6.2-astra` (leaked/Codex-usage form only). Not a valid API model ID today. Related but unconfirmed: `gpt-6.2-betelgeuse` ("Bel") travels on a separate leak trail (Discord tracker screenshot, 2026-10-28) and no source links it to Astra — the two are not merged here.
- **Context window:** **No verified public figure for this ID.** This folder's `meta.json` carries 1,050,000 total / 128K out, but that is a local scaffold value, not vendor evidence. The documented GPT-6 family (GPT-6 Astra, GPT-6.1 Sol, GPT-6.1 Terra, GPT-6 Luna) is 1.05M context / 128K max output per OpenAI's model catalog, and 6.2 is presumed to follow the family — presumption only.
- **Modalities:** **No verified public figure for this ID.** GPT-6 family models accept text and image input and produce text output; whether 6.2 adds anything is undocumented. No reasoning-effort levels, tool list or rate card is published.
- **Pricing (as of 2026-11-13):** **No published price.** Not in OpenAI's pricing page or catalog. For scale only: GPT-6 Astra is $10/$50 per 1M, GPT-6.1 Sol $2/$10, GPT-6.1 Terra $1/$5, GPT-6 Luna $0.10/$0.50 — none of these is 6.2's price.
- **Architecture:** Proprietary, undisclosed. Model-DSL name "Astra" implies the GPT-6 frontier line; no parameter count, no weights, no licence.

### Raw benchmarks found

Agent / tool use:

- ModelDial backend engineering: **94 / 100** at `xhigh` (private dataset; rank 1/52 models overall). Sub-scores: contracts & boundaries **18/20**, retries & failures **19/20**, CI & adversarial review **17/20**, transactions & consistency **20/20**, caching & regression **20/20**.
- ModelDial frontend interaction: **98 / 100** at `xhigh` — highest frontend score recorded on that leaderboard for any model at the time of the snapshot
- ModelDial overall: **95.5 / 100** at `xhigh`, rank **1 / 52 models**; backend test date 2026-11-11; evaluation time 17 m 20 s; reference cost N/A (no price to bill against)
- Terminal-Bench 2.1 / 4.x, Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, OSWorld: **no verified public score found**
- Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- ModelDial knowledge & reasoning: **95 / 100** at `xhigh`
- GPQA Diamond, HLE, HLE-Diamond, LCR/MLCR, CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** — no AA model page exists for this ID (AA's leaderboard has no GPT-6.2 entry of any kind)
- BenchLM / Epoch AI / Benchmark Atlas: no entry found for this ID
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- ModelDial coding composite: **95.5 / 100** (`xhigh`) — rank 1/52, ahead of Claude Fable 5.2 max (94.00), GPT-6.2 Sol max (94.20 at rank 3) and Claude Opus 5.5 max (89.75)
- ModelDial effort scaling (same model, five reasoning levels): `low` 89.2, `medium` 88.3, `high` 92.8, `xhigh` **95.5**, `max` 93.1 — i.e. `xhigh` beats `max` by 2.4 pts while taking 17 m vs 31 m, so the top score is not the highest effort setting
- SWE-bench Verified / SWE-Pro / SWE-sweep, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench, CursorBench, FrontierCode, Terminal-Bench-Science: **no verified public score found** for this ID (CursorBench 4.0's 90-row leaderboard has no 6.2 entry)
- Bug Hunt Bench: no verified public score found

Long context:

- No long-context retrieval measurement of any kind (MRCR / RULER / GraphWalks / MMLongBench) exists for this ID. **No verified long-context retrieval reported.**

### Normalized scores (1–100)

- **Tool use: 88/100.** ModelDial's backend engineering 94 with near-perfect retries/failures (19/20), transactions (20/20) and caching/regression (20/20) is exactly the agentic-reliability profile this dimension rewards, and frontend 98 is the best on that board. Capped below 90 because there is no Terminal-Bench, Tau, GDPval or OSWorld number at all — the entire tool-use case rests on one private coding harness.
- **Reasoning: 90/100.** Knowledge & reasoning 95/100 is the second-highest on ModelDial's board (behind Fable 5.2's 100), but it is a single private composite with zero corroboration from GPQA, HLE, AIME or the AA Intelligence Index; the model does not exist on any public reasoning leaderboard. Scored in the low-90s rather than mid-90s for that reason.
- **Context window: 90/100.** No vendor figure exists for this ID. Scored on the documented GPT-6 family spec (1.05M total / 128K out) which 6.2 is presumed to share — that maps to the ≥1M tier, but the 100 is withheld because neither the window nor any ≥98%-retrieval-at-512K result has been published for 6.2 itself.
- **Multimodal: 70/100.** No modality spec is published for 6.2. Scored on the GPT-6 family baseline (text + image in, text out = 60–70 band per methodology); not higher because image-only input with text-only output is the documented family ceiling and nothing shows 6.2 exceeding it.
- **Coding: 92/100.** Rank 1 of 52 on ModelDial with 95.5 overall, backend 94 and frontend 98 is frontier-class evidence and the strongest single result in this report. Held just under the 90s ceiling because the composite is one private dataset, no public SWE-bench-class number exists, and the model is unreleased so the build measured may not be the build that ships.
- **Cost efficiency: 30/100.** No price exists for this model, so the score is anchored to the only Astra-tier rate card available (GPT-6 Astra at $10/$50 per 1M ≈ 30 per methodology). Provisional: if 6.2 ships at Sol or Terra rates the real figure would be far higher.
- **Overall Score: 86/100.** (88 + 90 + 90 + 70 + 92) / 5 = 86.0 → 86. Best fit: frontier agentic coding and frontend generation **if and when it ships** — today it is un-callable, so the practical recommendation is GPT-6 Astra for hardest work, GPT-6.1 Sol for cost-efficient long runs, GPT-6.1 Terra for visual/computer use.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13 UTC
- Method: public internet research (web search tool returned HTTP 402 on every attempt; fell back to direct `webfetch` of OpenAI's model catalog, API changelog, ModelDial model page and leaderboard, CursorBench, Terminal-Bench and release-watch trackers per `RULES.md` § Web-research fallback). Release status was checked against OpenAI's live catalog and changelog on 2026-11-13. Scores are normalized 1–100 interpretations, not official vendor scores — no vendor score exists for an unreleased model.
- Reference URLs:
  - [ModelDial — GPT-6.2 Astra (95.5 at xhigh, five effort levels, rank 1/52)](https://modeldial.com/en/models/gpt-6.2-astra)
  - [ModelDial coding leaderboard (GPT-6.2 Astra top, Fable 5.2 / Opus 5.5 comparison rows)](https://modeldial.com/en/leaderboard/coding?axis=overall)
  - [ModelDial scoring methodology and dimension weights](https://modeldial.com/en/method)
  - [OpenAI model catalog (no gpt-6.2-astra entry; GPT-6 family context/pricing reference)](https://developers.openai.com/api/docs/models)
  - [OpenAI API changelog (no 6.2 release entry through 2026-11-13)](https://developers.openai.com/api/docs/changelog)
  - [GPT-6.2 Astra: Release Date, Leaks and What's Confirmed — OmniaKey](https://omniakey.com/blog/gpt-6-2-astra)
  - [GPT-6.2 Astra: Release Date, Demos & Expectations — EvoLink](https://evolink.ai/blog/gpt-6-2-astra-release-watch)
  - [CursorBench 4.0 leaderboard (no 6.2 entry)](https://cursor.com/cursorbench)
  - [Terminal-Bench 4.1 release notes and leaderboard context](https://www.tbench.ai/news/terminal-bench-4-1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.