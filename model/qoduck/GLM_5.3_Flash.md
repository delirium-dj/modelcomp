# Qoduck — findings by GLM 5.3 Flash

- Source: Alibaba Qoder (`qoduck` — stealth, no API identifier)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoduck
- **Short description:** Alibaba Qoder's stealth coding model (November 2026) — the vendor deliberately withheld its identity; it was offered free inside a daily allowance to individual Qoder users for a limited time (Nov 7 → Nov 11, 2026). Community guesses (a Qwen4-27B-class model with an n-gram lookup table) remain unverified. This report is the first scored entry in this dataset: ModelDial published a measured private-harness evaluation of the model on 2026-11-11/12.
- **Provider / access:** Qoder app model picker only (Qoder CN and Qoder International, individual accounts — Free/Pro/Pro+/Ultra plans and membership cards); IDE, JetBrains plugin and CLI were excluded from the free promo; Teams/Enterprise accounts do not see the model. No public API endpoint — it cannot be called from user code, and it is absent from OpenRouter, OpenCode Console, models.dev and the Hugging Face registry. Qoder stated Qoduck "will be removed when the promotion ends" — post-promo availability is unverified as of 2026-11-12.
- **Release / knowledge:** appeared 2026-11-07 (Beijing/Singapore time); the free promo ran to 2026-11-11 10:00 (UTC+8). Knowledge cutoff unknown.
- **IDs:** none published — no API identifier, no weights repo.
- **Context window:** Not announced — no vendor-published context figure (a 1M-token claim circulating on social media is unverified; the independent OrcaRouter analysis explicitly lists "no context figure" among unpublished facts). Scored conservatively pending any verified spec.
- **Modalities:** Text in / text out in practice (coding product); nothing official — no modality documentation exists. ModelDial's "Visual aesthetics" dimension measures the UI quality of generated frontend code (a code-output metric), not verified image input.
- **Pricing (as of 2026-11-12):** free within a daily allowance during the Nov 7–11 promo (Credit rate 0.5× → 0.0×, including at highest thinking intensity; did not draw the daily 100 general-purpose Credits) — that free window has expired. The standard rate after the allowance is 0.5× — the same premium factor Qoder's consumption reference attaches to Qwen3.8-Max and DeepSeek-V4-Pro (Qwen3.8-Flash sits at 0.1×). No USD per-token price is published.
- **Architecture:** unverified. The leading community reading (35 GB at Q8 vs ~29–31 GB for Qwen3.8-27B FP8, implying +5–7B parameters, plausibly an n-gram lookup table like Qwen3.8-Flash-Next's 51B table on its 125B backbone, plus MTP; 480 tok/s second-hand) is hearsay — no rig, quant or run published; Alibaba's only written Qwen 4 statement (2026-09-22) says Qwen 4 is in training, not shipped.

### Raw benchmarks found

Agent / tool use:

- ModelDial private coding harness (agentic, xhigh effort): **Backend engineering 70/100**, with sub-scores Contracts & boundaries 13/20, Retries & failures 17/20, CI & adversarial review 14/20, Transactions & consistency 17/20, Caching & regression 9/20 (ModelDial data snapshot 2026-11-12; backend tested 2026-11-07; total eval time 44m58s)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- ModelDial private coding harness (xhigh): **Knowledge & reasoning 85/100** (ModelDial data snapshot 2026-11-12)
- ModelDial overall: **75.65/100 at xhigh effort — rank 21 of 55 models** (ModelDial, published 2026-11-11/12)
- GPQA Diamond / HLE / MRCR / CritPt / AA Intelligence Index: no verified public score found (an earlier self-reported "beat every released Qwen we tested" knowledge check has no published items, scoring method or sample size)

Coding:

- ModelDial private coding harness (xhigh): **Frontend interaction 80/100**, **Backend engineering 70/100**, **Maintainability 55/100** (ModelDial data snapshot 2026-11-12)
- SWE-bench Verified / LiveCodeBench / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (context window itself unpublished)

### Normalized scores (1–100)

- **Tool use: 66/100.** ModelDial's agentic harness shows solid execution robustness (Retries & failures 17/20, Transactions & consistency 17/20) inside a coding workflow, but there is no Terminal-Bench/Tau3-class tool-use benchmark; capped mid-60s on backend-harness evidence alone.
- **Reasoning: 78/100.** Knowledge & reasoning 85 is the strongest measured cluster on ModelDial's scale (overall 75.65, rank 21/55); mapped conservatively onto the 1–100 reasoning scale with no GPQA/HLE/AA-Index anchor to push it higher.
- **Context window: 40/100.** Unverified — the vendor never published a context figure and the circulating 1M claim fails primary-source tracing, so the window cannot be placed in any tier; scored in the low band explicitly pending a verified spec.
- **Multimodal: 15/100.** Text in / text out in practice with no official modality documentation; ModelDial's Visual aesthetics 64 grades generated UI code, not image input. Conservative text-only default.
- **Coding: 72/100.** ModelDial overall 75.65 (rank 21/55) with Frontend 80 / Backend 70 / Maintainability 55 — a strong mid-tier coding profile, strongest at frontend, weakest at maintainability.
- **Cost efficiency: 75/100.** The evaluated free tier (0.0× Credit rate) expired 2026-11-11 and Qoder said the model would be removed when the promotion ended; the durable state is the 0.5× premium factor — the same class as Qwen3.8-Max/DeepSeek-V4-Pro, well above Flash-tier pricing — and no USD per-token price exists. Time-limited-free caveat applies to any historical $0 scoring.
- **Overall Score: 54.2/100.** Mean of the five quality dims (66+78+40+15+72)/5 — measured coding/reasoning strength pulled down by two unverified specs (context window, modality coverage) that this stealth model never published; best fit as a Qoder-IDE coding assistant, not a general-purpose API model.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-12
- Method: public internet research (ModelDial's published private-harness evaluation, Qoder official event docs CN + International, OrcaRouter independent analysis, DuckDuckGo-indexed coverage, OpenRouter/OpenCode/models.dev/HF absence checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [ModelDial — QoDuck model results (measured: overall 75.65 xhigh, rank 21/55; snapshot 2026-11-12)](https://modeldial.com/en/models/qoder/lmodel)
  - [ModelDial — Scoring & cost methodology](https://modeldial.com/en/method)
  - [Qoder Docs (CN) — Qoduck: Try the Stealth Model Free for a Limited Time (official)](http://docs.qoder.cn/en/events/qoduck-free)
  - [Qoder Docs (International) — Qoduck free-promotion event page](https://docs.qoder.com/events/qoduck-free)
  - [OrcaRouter — Qoduck Leak: Alibaba's Stealth Model Looks Like Qwen 4 (independent analysis)](https://www.orcarouter.ai/blog/qoduck-qwen4-27b-leak)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
