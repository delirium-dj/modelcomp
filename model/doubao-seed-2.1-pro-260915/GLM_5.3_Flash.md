# Doubao Seed 2.1 Pro (260915) — findings by GLM 5.3 Flash

- Source: ByteDance / Volcano Engine Ark (`doubao-seed-2-1-pro-260915`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.1 Pro (260915)
- **Short description:** ByteDance's Doubao Seed 2.1 Pro flagship text/multimodal model on the Volcano Engine Ark platform (2026-09-15 snapshot): 1M-token context, deep thinking by default, GUI task processing, and the platform's full tool suite (function calling, MCP, knowledge base, web plugin, image processing, context caching). Mid-pack on ModelDial's independent coding harness (rank 40/52) — a long-context GUI-capable workhorse rather than a top-tier agentic coder.
- **Provider / access:** Volcano Engine Ark, model ID `doubao-seed-2-1-pro-260915` (detail page groups it under Id `doubao-seed-2-1-pro`); Chat API, Responses API, Messages API. Rate limits: max 500 RPM / 1,000,000 TPM. A newer quick-iteration sibling (`doubao-seed-evolving`, same 1024K envelope) and a 256K-context predecessor snapshot (`doubao-seed-2-1-pro-260628`) exist; this folder tracks the 260915 Pro snapshot.
- **Release / knowledge:** snapshot dated 2026-09-15 (the `260915` ID suffix); knowledge cutoff not stated in the fetched docs.
- **IDs:** `doubao-seed-2-1-pro-260915` (Ark); sibling snapshots `doubao-seed-2-1-pro-260628` (256K ctx), `doubao-seed-2-1-lite-260915`, `doubao-seed-2-1-turbo-260628`.
- **Context window:** 1,024K (1M) tokens total; max input 1,024K; maximum answer 256K (default 4K); maximum thinking chain 256K — verified from Volcano Engine's official model list.
- **Modalities:** text + multimodal understanding (the model appears in Ark's image/video understanding and GUI-task sections) with deep thinking, tool calling, and structured output; text out. Verified tool suite (Responses API): function calling, knowledge-base search, MCP (cloud/remote), web-content plugin, image processing, Doubao assistant. Implicit + explicit (prefix/session) context caching.
- **Pricing (as of 2026-11-13):** per-token list price not verified in this pass (Ark's pricing page was not fetched); ModelDial's independent run cost $1.44 per full evaluation, in the same band as DeepSeek V4 Pro ($1.15) and GLM-5.3 ($1.83) and well below Qwen3.8-Max ($4.98) on the same harness.
- **Architecture:** not published in the fetched docs — parameter count and MoE structure unverified; proprietary.

### Raw benchmarks found

Agent / tool use:

- ModelDial private coding harness (agentic, default effort): **Backend engineering 64/100** — sub-scores Contracts & boundaries 11/20, Retries & failures 15/20, CI & adversarial review 11/20, Transactions & consistency 15/20, Caching & regression 12/20 (ModelDial detail page, backend tested 2026-10-16, data snapshot published 2026-11-13; total eval time 104m54s, cost $1.44)
- Terminal-Bench / Tau3 / GDPval-AA / OSWorld: no verified public score found

Reasoning / knowledge:

- ModelDial private coding harness (default): **Knowledge & reasoning 55/100** (ModelDial data snapshot 2026-11-13)
- ModelDial overall: **60.4/100 at default effort — rank 40 of 52 models** per the detail page (the leaderboard row shows 59.00 — minor snapshot discrepancy; the detail page is cited as primary)
- GPQA Diamond / HLE / AA Intelligence Index: no verified public score found

Coding:

- ModelDial private coding harness (default): **Frontend interaction 61/100**, **Backend engineering 64/100** (ModelDial data snapshot 2026-11-13)
- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: no verified public score found

Long context:

- No long-context retrieval reported (1M window is a listed spec; no MRCR / RULER / GraphWalks value published)

### Normalized scores (1–100)

- **Tool use: 68/100.** Measured backend 64 is middling (CI & adversarial review 11/20 is the weak spot), but the verified platform tool suite is unusually complete (function calling + MCP + knowledge base + web plugin + image processing + GUI task processing + dual caching) — mid-to-high 60s.
- **Reasoning: 60/100.** Knowledge & reasoning 55 is the weakest measured dimension relative to peers on the same harness (Qwen4-Max 90, QoDuck 85); no GPQA/HLE/AA-Index evidence to lift it above the low-60s.
- **Context window: 95/100.** 1,024K-token window verified on the official model list (≥1M tier = 95–100), with a generous 256K answer/256K thinking budget; no ≥98% retrieval measurement exists, so not 100.
- **Multimodal: 78/100.** Verified multimodal understanding with GUI task processing and image-processing tooling — the +video tier (75–90); held mid-tier because no measured visual benchmark of its own exists (ModelDial's Visual aesthetics is not published for this entry's tested config).
- **Coding: 62/100.** ModelDial overall 60.4 (rank 40/52) with Backend 64 / Frontend 61 — below the mid-pack agentic coders on the same harness; the 1M context is the differentiator, not raw coding strength.
- **Cost efficiency: 65/100.** No verified per-token list price in this pass; ModelDial's $1.44 full-eval cost sits mid-band among paid flagships (cheaper than Qwen3.8-Max, dearer than DeepSeek V4.1 Flash) — scored mid with the pricing-verification caveat.
- **Overall Score: 72.6/100.** Mean of the five quality dims (68+60+95+78+62)/5 — a long-context GUI-capable multimodal flagship whose measured coding/reasoning trails its impressive spec sheet; best fit for 1M-context document/GUI agent pipelines on Ark rather than top-tier agentic coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-13
- Method: public internet research via the fallback ladder (Volcano Engine Ark official model-list documentation and ModelDial detail page/leaderboard fetched directly; DuckDuckGo transport failed twice and Bing returned unrelated hits, so no third-party coverage beyond ModelDial was reachable); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Volcano Engine Ark — model list (doubao-seed-2-1-pro-260915: 1024K context, capabilities, tool suite, rate limits)](https://www.volcengine.com/docs/82379/1330310)
  - [ModelDial — Doubao Seed 2.1 Pro (260915) model results (measured: overall 60.4 default, rank 40/52, $1.44; snapshot 2026-11-13)](https://modeldial.com/en/models/doubao-seed-2-1-pro-260915)
  - [ModelDial — Coding rankings (leaderboard row, snapshot 2026-11-13)](https://modeldial.com/en/leaderboard/coding?axis=overall)
  - [ModelDial — Scoring & cost methodology](https://modeldial.com/en/method)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
