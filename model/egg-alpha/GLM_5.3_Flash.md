# Egg Alpha — findings by GLM 5.3 Flash

- Source: unverified operator (`egg-alpha` — anonymous stealth slot; no vendor identified)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Egg Alpha
- **Short description:** An anonymous stealth coding model (no vendor mark on any surface) whose only public footprint is a measured evaluation on ModelDial's private harness — a strong-frontend, strong-reasoning profile (K&R 90, Frontend 78) with weaker backend engineering (65) and no published identity, specs, or pricing. Treated like the dataset's other anonymous slots (QoDuck, Crouton Alpha, Space Bunny): measured where measurable, never attributed without a vendor statement.
- **Provider / access:** no provider identified. ModelDial lists it with an unknown-vendor mark; no OpenRouter, OpenCode Zen, Hugging Face, or vendor documentation page was found (web searches on 2026-11-13 returned zero LLM-relevant hits; DuckDuckGo transport failed mid-pass and Bing returned only unrelated results, so the access-failure fallback applies to coverage beyond ModelDial).
- **Release / knowledge:** first known measurement 2026-11-02 (ModelDial backend test date 2026-11-04 per the detail page; leaderboard row dated 2026-11-02); no release date or knowledge cutoff published.
- **IDs:** `egg-alpha` (ModelDial slug — the only public identifier).
- **Context window:** not published — no vendor figure exists anywhere. Scored conservatively pending any verified spec.
- **Modalities:** unknown — no modality documentation exists; the ModelDial harness exercises text-based coding tasks.
- **Pricing (as of 2026-11-13):** not published — ModelDial lists reference cost N/A; no price table found.
- **Architecture:** unknown — no vendor statement; the ModelDial entry carries no architecture notes.

### Raw benchmarks found

Agent / tool use:

- ModelDial private coding harness (agentic, default effort): **Backend engineering 65/100** — sub-scores Contracts & boundaries 10/20, Retries & failures 14/20, CI & adversarial review 15/20, Transactions & consistency 17/20, Caching & regression 9/20 (ModelDial detail page, backend tested 2026-11-04, data snapshot published 2026-11-13; total eval time 32m52s)
- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- ModelDial private coding harness (default): **Knowledge & reasoning 90/100** (ModelDial data snapshot 2026-11-13)
- ModelDial overall: **76.4/100 at default effort — rank 20 of 52 models** per the detail page (the leaderboard row shows 73.45 with Visual aesthetics 61 / Maintainability 51 — the two published figures disagree; the detail page is cited as primary)
- GPQA / HLE / AA Intelligence Index: no verified public score found

Coding:

- ModelDial private coding harness (default): **Frontend interaction 78/100**, **Backend engineering 65/100** (ModelDial data snapshot 2026-11-13)
- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: no verified public score found

Long context:

- No long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 62/100.** ModelDial's agentic harness shows uneven execution robustness (Transactions 17/20 but Caching 9/20 and Contracts 10/20); no Terminal-Bench/Tau3-class measurement — capped low-60s.
- **Reasoning: 80/100.** Knowledge & reasoning 90 is the model's strongest measured dimension (rank 20/52 overall); mapped conservatively with no GPQA/HLE/AA-Index anchor.
- **Context window: 40/100.** Unverified — no published window figure at all, so the tier cannot be placed; scored in the low band explicitly pending a verified spec.
- **Multimodal: 15/100.** No modality documentation exists; conservative text-only default.
- **Coding: 70/100.** ModelDial overall 76.4 (rank 20/52) with Frontend 78 / Backend 65 — a frontend-leaning mid-tier coding profile, weakest at maintainability/cache discipline.
- **Cost efficiency: 50/100.** No pricing published anywhere (ModelDial reference cost N/A) — unpriced unknown scores mid-band with the caveat recorded.
- **Overall Score: 53.4/100.** Mean of the five quality dims (62+80+40+15+70)/5 — genuinely measured coding/reasoning strength held down by three unpublished specs (context, modality, price); a "watch" entry until the operator reveals itself.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-13
- Method: public internet research via the fallback ladder (ModelDial detail page and leaderboard fetched directly; DuckDuckGo transport failed and was retried; Bing returned only unrelated hits — no other surface could be reached for this anonymous slot); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ModelDial — Egg Alpha model results (measured: overall 76.4 default, rank 20/52; snapshot 2026-11-13)](https://modeldial.com/en/models/egg-alpha)
  - [ModelDial — Coding rankings (Egg Alpha leaderboard row, snapshot 2026-11-13)](https://modeldial.com/en/leaderboard/coding?axis=overall)
  - [ModelDial — Scoring & cost methodology](https://modeldial.com/en/method)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
