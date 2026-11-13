# Gemini 4 Hydrogen — findings by GLM 5.3 Flash

- Source: Google (`google/gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's high-efficiency workhorse model of the Gemini 4 family, "built for high-throughput agentic workflows, coding and multi-model routing at lower cost and latency" than the Carbon/Argon flagships — full omni-input (text, image, video, audio, file), mandatory reasoning with four effort levels, and a 1M-token window with a near-1M output budget.
- **Provider / access:** OpenRouter `google/gemini-4-hydrogen` (canonical slug `gemini-4-hydrogen-20261112`), Chat Completions/Completions/Messages/Responses endpoints; a half-price `:batch` variant exists ($0.75/$3.75). Listed with web_search as a billed tool ($14 per 1K searches per the OpenRouter pricing block). Not yet on the OpenCode Console catalog (checked 2026-11-12).
- **Release / knowledge:** listed on OpenRouter with canonical slug dated 2026-11-12 (created timestamp 1794506460 ≈ 2026-11-12); knowledge cutoff not stated in the listing.
- **IDs:** `google/gemini-4-hydrogen`, `google/gemini-4-hydrogen:batch`, canonical `gemini-4-hydrogen-20261112`.
- **Context window:** 1,048,576 (1M) tokens total; maximum completion 943,718 tokens (OpenRouter top-provider row) — an unusually large output budget; no independent long-context retrieval measurement published.
- **Modalities:** audio + file + image + text + video input → text output (OpenRouter architecture row); reasoning mandatory, supported efforts xhigh/high/medium/low (default medium); tool calling, structured outputs, seed, stop, temperature/top_p supported.
- **Pricing (as of 2026-11-13):** $1.50 in / $7.50 out per 1M tokens (cache read $0.075); batch variant $0.75/$3.75. No free variant listed.
- **Architecture:** not published in the fetched surfaces — proprietary; parameter count unverified. Positioned below Gemini 4 Carbon/Argon in the family as the efficiency tier.

### Raw benchmarks found

Agent / tool use:

- ModelDial private coding harness (agentic, xhigh effort): **Backend engineering 83/100** (ModelDial detail/leaderboard, data snapshot 2026-11-13; eval time 21m51s, cost $2.86, speed 91 tok/s)
- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- ModelDial private coding harness (xhigh): **Knowledge & reasoning 85/100** (ModelDial data snapshot 2026-11-13)
- ModelDial overall: **80.70/100 at xhigh — rank 11 of 57 models**; flagged NEW with "+21.20 vs previous" on the harness
- GPQA / HLE / AA Intelligence Index: no verified public score found

Coding:

- ModelDial private coding harness (xhigh): **Frontend interaction 85/100**, **Backend engineering 83/100**, **Maintainability 61/100**, **Visual aesthetics 70/100** (ModelDial data snapshot 2026-11-13)
- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: no verified public score found

Long context:

- No long-context retrieval reported (1M window is a listed spec; no MRCR / RULER / GraphWalks value published)

### Normalized scores (1–100)

- **Tool use: 80/100.** ModelDial backend 83 with fast, cheap agentic runs (21m51s at $2.86) and a verified tool surface (web search, structured outputs, four reasoning efforts); no Terminal-Bench/Tau3-class row — capped at 80.
- **Reasoning: 78/100.** Knowledge & reasoning 85 on ModelDial's scale (rank 11/57 overall); no GPQA/HLE/AA-Index anchor yet — day-old listing.
- **Context window: 95/100.** 1,048,576-token window verified on the OpenRouter row (≥1M tier = 95–100), with an exceptional 943,718-token completion budget; no ≥98% retrieval measurement, so not 100.
- **Multimodal: 90/100.** Verified audio + file + image + text + video input — the +audio-in tier (90–100); text-only output.
- **Coding: 78/100.** ModelDial overall 80.70 (rank 11/57) with Frontend 85 / Backend 83 / Maintainability 61 — strong mid-frontier agentic coding, single-harness evidence.
- **Cost efficiency: 80/100.** $1.50/$7.50 per 1M sits between the ~$1.25/$4.25 (~88) and $3/$15 (~60) reference points; the half-price batch lane helps throughput workloads; no free tier.
- **Overall Score: 84.2/100.** Mean of the five quality dims (80+78+95+90+78)/5 — an omni-input efficiency workhorse with a verified 1M/near-1M envelope and solid measured agentic coding; best fit for high-throughput multimodal agent routing where Carbon/Argon cost 2×.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-13
- Method: public internet research (OpenRouter model API listing and ModelDial detail/leaderboard fetched directly; DuckDuckGo/Bing fallbacks failed or returned unrelated hits, so no vendor blog coverage was reachable on run day); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter — model API listing for google/gemini-4-hydrogen (specs, pricing, modalities, 2026-11-12 slug)](https://openrouter.ai/api/v1/models)
  - [ModelDial — Gemini 4 Hydrogen leaderboard row (80.70 xhigh, rank 11/57, snapshot 2026-11-13)](https://modeldial.com/en/leaderboard/coding?axis=overall)
  - [ModelDial — Scoring & cost methodology](https://modeldial.com/en/method)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
