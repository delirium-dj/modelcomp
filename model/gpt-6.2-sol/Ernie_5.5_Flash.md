# GPT-6.2 Sol — findings by Ernie 5.5 Flash

- Source: OpenAI (`gpt-6.2-sol`) — **unreleased / not in OpenAI's public model catalog**
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Sol
- **Short description:** A leaked, unreleased OpenAI Sol-tier model positioned (per the same leak trail as GPT-6.2 Astra) as the mainstream reasoning model for efficient agentic coding and complex math at mid-tier pricing. One ModelDial private evaluation exists; OpenAI has published nothing.
- **Provider / access:** No public API route. Absent from OpenAI's model catalog, API changelog, Codex models page and pricing page as of 2026-11-13. The only public measurement is ModelDial's private coding benchmark (backend test date 2026-11-09). Community reports describe suspected Codex routing from GPT-6.1 Sol rather than an accessible model ID — a cloud-console filter screenshot (2026-11-04) showed both `base_model:gpt-6.2-sol` and `base_model:gpt-6.2-astra`, which is an infrastructure clue, not a public route.
- **Release / knowledge:** **Unreleased as of 2026-11-13.** No announcement, no date, no knowledge cutoff. OpenAI's public changelog stops at 2026-11-05 (GPT-6 Cyber) with no 6.2 entry.
- **IDs:** `gpt-6.2-sol` (leak form only, not a callable API ID). Related family IDs that *are* real: `gpt-6-sol` (2026-09-22), `gpt-6.1-sol` (2026-09-29). This report never merges 6.2 measurements into those folders.
- **Context window:** **No verified public figure for this ID.** Local `meta.json` says 1,050,000 total / 128K out — a scaffold value, not vendor evidence. Documented GPT-6 family is 1.05M / 128K out; 6.2 presumed to match. Presumption only.
- **Modalities:** **No verified public figure for this ID.** GPT-6 family accepts text + image input, text output. This folder's `meta.json` adds "file in", which is also unconfirmed for 6.2.
- **Pricing (as of 2026-11-13):** **No published price.** Nearest documented Sol-tier reference is GPT-6.1 Sol at $2 input / $10 output per 1M ($0.10 cached, $2.50 cache write). That is a sibling's rate, not 6.2's.
- **Architecture:** Proprietary, undisclosed. "Sol" is OpenAI's mid-tier reasoning line in the GPT-6 family; no parameter count, weights or licence.

### Raw benchmarks found

Agent / tool use:

- ModelDial backend engineering: **96 / 100** at `max` (private dataset). Sub-scores: contracts & boundaries **19/20**, retries & failures **20/20**, CI & adversarial review **17/20**, transactions & consistency **20/20**, caching & regression **20/20** — the highest backend engineering score on that leaderboard snapshot
- ModelDial frontend interaction: **91 / 100** at `max`
- ModelDial overall: **94.2 / 100** at `max`, rank **3 / 52 models** (behind GPT-6.2 Astra xhigh 95.5 and Claude Fable 5.2 max 94.00 — actually ahead of Fable 5.2's 94.00 on the leaderboard row, and behind only Astra's 95.5); backend test date 2026-11-09; evaluation time 47 m 41 s; reference cost N/A
- Terminal-Bench 2.1 / 4.x, Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, OSWorld: **no verified public score found**
- Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- ModelDial knowledge & reasoning: **95 / 100** at `max`
- GPQA Diamond, HLE, HLE-Diamond, LCR/MLCR, CritPt, AIME: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** — AA has no GPT-6.2 Sol entry (the EvoLink release-watch explicitly notes the AA leaderboard had no 6.2 Sol entry, so circulating "benchmark victory" claims have no support there)
- BenchLM / Epoch AI / Benchmark Atlas / BenchmarkList: no entry found for this ID
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- ModelDial coding composite: **94.2 / 100** (`max`) — rank 3/52, the only tested configuration (no effort sweep was run, unlike Astra's five levels)
- SWE-bench Verified / SWE-Pro / SWE-sweep, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench, CursorBench, FrontierCode, Terminal-Bench-Science: **no verified public score found** for this ID (CursorBench 4.0's leaderboard lists GPT-5.6 Sol and GPT-6 Sol, no 6.2)
- Bug Hunt Bench: no verified public score found
- Qualitative only (not scored, attribution unconfirmed): community Three.js single-file demos — a day/night village scene, a black-hole light disk, a Hokusai "Great Wave" spatial scene, floating islands with waterfalls — posted 2026-11-08/09 by users who *label* them 6.2 Sol. Posters themselves hedge the backend identity; these are demos, not measurements, and are never used as numbers here.

Long context:

- No long-context retrieval measurement of any kind (MRCR / RULER / GraphWalks / MMLongBench) exists for this ID. **No verified long-context retrieval reported.**

### Normalized scores (1–100)

- **Tool use: 89/100.** Backend engineering 96 with perfect retries/failures, transactions and caching/regression (20/20 each) is the best backend figure on ModelDial's board, and frontend 91 is strong. Marginally above Astra's 88 because the backend score is higher, but still capped below 90+ by the total absence of Terminal-Bench, Tau, GDPval or OSWorld evidence — one private harness cannot carry a frontier tool-use claim.
- **Reasoning: 90/100.** Knowledge & reasoning 95/100 at `max` matches Astra's `xhigh` figure, but again it is a single private composite with no GPQA, HLE or AA Intelligence Index corroboration, and AA has explicitly no entry for this model. Same low-90s treatment as Astra.
- **Context window: 90/100.** No vendor figure for this ID; scored on the documented GPT-6 family spec (1.05M / 128K out) which 6.2 is presumed to share. Withheld from the 95–100 band because neither the window nor any retrieval result is published for 6.2 itself.
- **Multimodal: 70/100.** No modality spec published for 6.2. Scored on the GPT-6 family baseline (text + image in, text out); this folder's `meta.json` adds "file in" but that is unverified scaffold data, so it earns no extra credit.
- **Coding: 90/100.** Rank 3/52 on ModelDial with 94.2 is strong frontier-adjacent evidence, but it rests on a single configuration (no effort sweep), a single private dataset, and an unreleased build — so it sits below Astra's 92-tier coding score rather than above it despite the near-identical composite.
- **Cost efficiency: 40/100.** No price exists. Provisionally anchored between the documented Sol tier (GPT-6.1 Sol at $2/$10 ≈ 92) and the Astra tier ($10/$50 ≈ 30); scored at 40 to reflect the "mid-tier pricing" positioning in the leak trail while flagging that no rate card exists. If 6.2 ships at actual Sol rates this would rise sharply.
- **Overall Score: 86/100.** (89 + 90 + 90 + 70 + 90) / 5 = 85.8 → 86. Best fit: high-volume agentic coding and complex math at mid-tier cost **if it ships as described** — today there is no way to call it, so GPT-6.1 Sol is the real-world substitute.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13 UTC
- Method: public internet research (web search tool returned HTTP 402 on every attempt; fell back to direct `webfetch` of OpenAI's model catalog, API changelog, ModelDial model page and leaderboard, CursorBench, and release-watch trackers per `RULES.md` § Web-research fallback). Release status verified against OpenAI's live catalog and changelog on 2026-11-13. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ModelDial — GPT-6.2 Sol (94.2 at max, rank 3/52)](https://modeldial.com/en/models/gpt-6.2-sol)
  - [ModelDial coding leaderboard (GPT-6.2 Sol row, GPT-6.2 Astra comparison)](https://modeldial.com/en/leaderboard/coding?axis=overall)
  - [ModelDial scoring methodology and dimension weights](https://modeldial.com/en/method)
  - [OpenAI model catalog (no gpt-6.2-sol entry; GPT-6 family context/pricing reference)](https://developers.openai.com/api/docs/models)
  - [OpenAI API changelog (no 6.2 release entry through 2026-11-13)](https://developers.openai.com/api/docs/changelog)
  - [GPT-6.2 Sol: Release Date, Rollout & Early Demos — EvoLink](https://evolink.ai/blog/gpt-6-2-sol-release-watch)
  - [GPT-6.2 Astra release watch (shared leak trail, base_model screenshot) — EvoLink](https://evolink.ai/blog/gpt-6-2-astra-release-watch)
  - [CursorBench 4.0 leaderboard (no 6.2 entry)](https://cursor.com/cursorbench)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.