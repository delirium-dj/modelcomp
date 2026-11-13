# GPT-6.2 Sol — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-6.2-sol` — identity/spec surface not yet public)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Sol
- **Short description:** OpenAI's newest Sol-line model, surfaced in mid-November 2026 through ModelDial's independent harness at rank 6 of 57 (88.90 max effort) with elite backend engineering (96) and the fastest measured profile of the 6.2 pair (47m41s vs Astra's 94m34s) — the measured successor to GPT-6.1 Sol (88.10 on the same harness). No vendor model card, API listing, or spec sheet was reachable on run day.
- **Provider / access:** none verified — absent from OpenRouter's model API (checked 2026-11-12) and from the OpenCode Console catalog (checked 2026-11-12, which tops out at GPT-6.1 Sol); no pricing or endpoint located. Access route unverified.
- **Release / knowledge:** first measured by ModelDial with the 2026-11-13 data snapshot (listed "NEW"); no vendor release date or knowledge cutoff verifiable.
- **IDs:** `gpt-6.2-sol` (ModelDial slug — the only public identifier; no vendor API ID verified).
- **Context window:** not published on any reachable surface — no verified figure. Scored conservatively pending a spec sheet.
- **Modalities:** unknown — no modality documentation reachable; the ModelDial harness exercises text-based coding tasks.
- **Pricing (as of 2026-11-13):** not published — ModelDial lists reference cost N/A; no price table found.
- **Architecture:** unknown — no vendor statement; parameter count and structure unverified.

### Raw benchmarks found

Agent / tool use:

- ModelDial private coding harness (agentic, max effort): **Backend engineering 96/100** (ModelDial leaderboard/detail, data snapshot 2026-11-13; eval time 47m41s, cost N/A)
- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- ModelDial private coding harness (max): **Knowledge & reasoning 95/100** (ModelDial data snapshot 2026-11-13)
- ModelDial overall: **88.90/100 at max effort — rank 6 of 57 models** (behind GPT-6.2 Astra's 93.00 and GPT-6.1 Sol's 88.10 lineage it succeeds)
- GPQA / HLE / AA Intelligence Index: no verified public score found

Coding:

- ModelDial private coding harness (max): **Frontend interaction 91/100**, **Backend engineering 96/100**, **Visual aesthetics 73/100**, **Maintainability 64/100** (ModelDial data snapshot 2026-11-13)
- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: no verified public score found

Long context:

- No long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 84/100.** Backend engineering 96 with a 47m41s eval (half of Astra's runtime) indicates strong, efficient agentic execution; no Terminal-Bench/Tau3-class row caps it below 90.
- **Reasoning: 82/100.** Knowledge & reasoning 95 on ModelDial's scale, rank 6/57 overall; mapped conservatively with no GPQA/HLE/AA-Index anchor.
- **Context window: 40/100.** Unverified — no published window figure on any reachable surface, so the tier cannot be placed; scored in the low band explicitly pending a vendor spec sheet.
- **Multimodal: 15/100.** No modality documentation reachable; conservative text-only default despite the family's known multimodal heritage — nothing is verified for this ID yet.
- **Coding: 84/100.** ModelDial overall 88.90 (rank 6/57) with Backend 96 / Frontend 91 — high-frontier measured coding on the only independent harness covering it.
- **Cost efficiency: 50/100.** No pricing published anywhere (ModelDial reference cost N/A); unpriced unknown scores mid-band with the caveat recorded.
- **Overall Score: 61/100.** Mean of the five quality dims (84+82+40+15+84)/5 — measured high-frontier coding/reasoning held down by three unpublished specs (context, modality, price); re-anchor the unverified dims as soon as OpenAI publishes the card or an API listing appears.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-13
- Method: public internet research via the fallback ladder (ModelDial leaderboard/detail fetched directly; OpenRouter model API and OpenCode Console catalog checked for access/specs — both negative; DuckDuckGo transport failed, Bing returned unrelated hits); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ModelDial — coding rankings (GPT-6.2 Sol: 88.90 max, rank 6/57, snapshot 2026-11-13)](https://modeldial.com/en/leaderboard/coding?axis=overall)
  - [ModelDial — GPT-6.2 Sol model results (dimension breakdown, eval time)](https://modeldial.com/en/models/gpt-6.2-sol)
  - [ModelDial — Scoring & cost methodology](https://modeldial.com/en/method)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
