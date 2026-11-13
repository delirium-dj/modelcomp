# Egg Alpha — findings by Ernie 5.5 Flash

- Source: unverified / anonymous (`egg-alpha`, surfaced on 基元律动 / TokenRhythm)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Egg Alpha (no vendor name disclosed — anonymous "stealth" release)
- **Short description:** An anonymous, unattributed stealth model that appeared on the Chinese TokenRhythm (基元律动) gateway in early November 2026, with 1M claimed context, reasoning on by default, and text/image/video input. It is one of a run of unnamed alpha models (Ox Alpha, Pulse Alpha, Crouton Alpha, Space Bunny, Union Alpha) whose real origin the community has not confirmed. Free during its preview window.
- **Provider / access:** TokenRhythm (`https://tokenrhythm.studio/v1`), OpenAI- and Anthropic-compatible, plus its own Responses API. Community testing also ran it through Pi. No OpenCode Zen / OpenRouter / official vendor route exists — there is no vendor to publish a model card.
- **Release / knowledge:** First listed 2026-11-03 (TokenRhythm listing; ModelDial test dated 2026-11-02, backend tested 2026-11-04). Knowledge cutoff undisclosed.
- **IDs:** `egg-alpha` (TokenRhythm). No vendor ID, no version suffix, no dated checkpoint. `meta.json` in this folder carries the placeholder `unverified/egg-alpha`.
- **Context window:** **Claimed 1,000,000 tokens total with 128,000 max output** (TokenRhythm model listing as reported by TechGoGoGo, 2026-11-03). Not confirmed by any primary vendor document — no vendor exists to confirm it. This folder's `meta.json` carries a more conservative `128,000 total (estimated pending official vendor disclosure)`. Neither figure is independently verified; treat 1M as an unverified gateway claim.
- **Modalities:** Text, image, and video in; text out. Reasoning supported (on by default), tool calling, streaming, cache reads, no embeddings, no image editing, no audio. Compatible with OpenAI and Anthropic protocols plus a native Responses API.
- **Pricing (as of 2026-11-13):** **Free during the preview period** — TokenRhythm lists input and output as ¥0 / "暂定免费" (tentatively free); ModelDial records the evaluation cost as "—" / N/A because there was nothing to bill. No published paid rate card exists. Latency and reliability are unverified.
- **Architecture:** Undisclosed. No parameter count, no license, no weights, no architecture family. Unknown whether it is a renamed third-party model, a fine-tune, or a router over other models — community speculation is unresolved and is not evidence.

### Raw benchmarks found

Agent / tool use:

- ModelDial backend engineering: **65 / 100** (private dataset, default effort; rank 45 of 52 on the overall axis). Sub-scores: contracts & boundaries **10/20**, retries & failures **14/20**, CI & adversarial review **15/20**, transactions & consistency **17/20**, caching & regression **9/20**.
- ModelDial frontend interaction: **78 / 100** — interface behavior, state continuity, accessibility and feedback, state validation
- ModelDial maintainability: **51 / 100** — semantic clarity, control-flow organization, locality of changes, state and lifecycle, implementation economy (weakest dimension)
- ModelDial visual aesthetics: **61 / 100**
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- ModelDial knowledge & reasoning: **90 / 100** (private dataset, default effort) — mathematics, CS & AI, science & engineering, life sciences & medicine, humanities & general knowledge. This is the model's strongest measured dimension and is the main reason its overall score lands at 76.4.
- GPQA Diamond / HLE / LCR / CritPt / Artificial Analysis Intelligence Index / BenchLM: no verified public score found — the model is absent from AA, BenchLM, Epoch and Atlas
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- ModelDial overall (coding composite): **76.4 / 100** at default effort — backend 65 (20%), frontend 78 (25%), knowledge & reasoning 90 (35%), visual aesthetics 61 (10%), maintainability 51 (10%); rank **20 / 52 models**; total evaluation time 32 m 52 s; reference API cost N/A. Note the leaderboard's best-effort row lists **73.45** with the same dimension scores but the model page's 76.4 is the published overall for the single tested configuration — both are ModelDial figures, the 3-point spread is their own re-weighting, not a different run.
- Qualitative hands-on eval (TechGoGoGo, 2026-11-03, six tasks at maximum thinking depth via Pi): instruction-following task failed only on the 5th sentence's ending constraint (sentences 7 and 9 read awkwardly); pelican-riding-a-bicycle-with-Saturn-rings SVG judged near-flawless, marginally behind Claude Opus 5.5's run; compound-bow archery SVG had an unphysical arrow trajectory (flat pull, then sudden upward jump) and no ground shadow; browser-OS UI judged attractive with correct Dock behaviour and a working space-shooter, calendar date highlight drawn as an ellipse instead of a rounded rect; 3D racing game functional but car and obstacles generic; Trello-kanban clone (no third-party libraries) judged the best of the six for UI quality with no functional defects found.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval score of any kind (MRCR / RULER / GraphWalks / MMLongBench) has been published. The 1M context figure is an unverified gateway listing, not a measured capability.
- No tokenizer, no context-usage telemetry, no "needle in a haystack" result: **no verified long-context retrieval reported.**

### Normalized scores (1–100)

- **Tool use: 60/100.** The only measured tool-adjacent evidence is ModelDial's backend engineering 65 (contracts 10/20 and caching/regression 9/20 are the drags) plus frontend 78, and there is no Terminal-Bench, Tau, GDPval or Claw-Eval number at all. Tool calling and streaming are supported per the gateway listing, but nothing measures agentic tool reliability — capped in the low-60s.
- **Reasoning: 72/100.** ModelDial knowledge & reasoning 90/100 is genuinely strong and would normally support a high score, but it is a single private Chinese-language composite with no GPQA, HLE, AIME or Intelligence Index corroboration anywhere; a one-source 90 cannot be treated as frontier-grade. Scored on the strength of that single result, discounted for zero independent replication.
- **Context window: 88/100.** A claimed 1,000,000-token window with 128K output would sit in the ≥1M tier, but the claim comes only from a reseller listing with no vendor document and no retrieval measurement; this folder's own `meta.json` records a conservative 128K estimate instead. Scored just below the ≥1M band (95–100) to reflect that the number is plausible but unverified and unmeasured.
- **Multimodal: 85/100.** Text, image and video input with text output, and the qualitative review found real visual-generation competence (SVG, browser OS UI, 3D scene) plus video input support. No audio in or out and no image generation, so it stays out of the 90+ band.
- **Coding: 70/100.** Frontend interaction 78 and the strong qualitative UI results (Trello clone, browser OS, 3D racer all functional) are the high points; backend engineering 65 and maintainability 51 — the lowest ModelDial dimension — pull it down, and the unphysical SVG physics plus the missed 5th-sentence constraint show weak edge-case verification. No SWE-bench-class evidence exists at all.
- **Cost efficiency: 95/100.** Free during the preview window with no published rate card, which is effectively $0; not a flat 100 because the free window is explicitly temporary ("暂定免费") and no paid price, rate limit or latency SLA has been published.
- **Overall Score: 75/100.** (60 + 72 + 88 + 85 + 70) / 5 = 75.0 → 75. Best fit: cost-free experimentation on frontend-heavy UI generation and general reasoning while the preview lasts — attractive for prototyping, but the anonymous provenance, single-source benchmark coverage and absent enterprise terms make it unusable for production or compliance-bound work.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13 UTC
- Method: public internet research (web search tool returned HTTP 402 on both attempts; fell back to direct `webfetch` of the ModelDial model/leaderboard/methodology pages, the TokenRhythm gateway, and TechGoGoGo's hands-on review per `RULES.md` § Web-research fallback). Egg Alpha is absent from Artificial Analysis, BenchLM, Epoch, Atlas and BenchmarkList — those pages were checked and returned no entry. Scores are normalized 1–100 interpretations, not official vendor scores (no vendor exists).
- Reference URLs:
  - [Egg Alpha model results — ModelDial](https://modeldial.com/en/models/egg-alpha)
  - [ModelDial coding leaderboard (rank 25/52 row, visual aesthetics 61, maintainability 51) — ModelDial](https://modeldial.com/en/leaderboard/coding?axis=overall)
  - [ModelDial scoring methodology and dimension weights — ModelDial](https://modeldial.com/en/method)
  - [Egg Alpha 测评报告！这是谁家猛将？ (six-task hands-on review, 1M/128K spec, free pricing) — AI产品狙击手](https://www.techgogogo.com/2026/11/03/egg-alpha-evaluation-report-mystery-model/)
  - [Egg Alpha product profile (multimodal, reasoning, tool calls, free, 1M context / 128K output) — AI产品狙击手](https://www.techgogogo.com/ai-tools/egg-alpha/)
  - [TokenRhythm (基元律动) gateway — model list and API docs](https://tokenrhythm.studio/docs)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.