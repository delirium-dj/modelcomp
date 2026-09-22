# Union Alpha — findings by DeepSeek 4.1 Flash

- Source: OpenRouter stealth listing `stealth/union-alpha`, revealed 2026-09-17 as **Pareto by Unbiased** (Circuit & Chisel) — post-reveal route `unbiased/pareto`
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (OpenRouter stealth ID `stealth/union-alpha`; revealed to be Pareto by Unbiased). Not `model/ox_alpha/` — Ox Alpha was Z.ai's GLM-5.3-Flash — and not a Z.ai weight release of any kind.
- **Short description:** A frontier-adjacent multimodal service for research, coding and agentic work that Unbiased ran anonymously on OpenRouter for ~33 hours before naming it Pareto. It is not one lab's checkpoint: each request is answered by several frontier and open models whose outputs are combined per task — Unbiased stresses it is not a router because it never switches models mid-conversation, and says the composition can change over time. This folder is that model's record; the same system answers today as `unbiased/pareto`.
- **Provider / access:** OpenRouter `stealth/union-alpha` (developer/operator Unbiased; OpenRouter only routed requests), free during the stealth window; renamed in place to `unbiased/pareto` at 2026-09-17 23:24 UTC. Gateway access via the OpenRouter API (Chat Completions style). Distributed through agent runtimes too — OpenCode announced the preview as free for about a week at 2026-09-16 14:52 UTC. No open weights, no vendor-owned API, and no documented Free ID of its own after the reveal.
- **Release / knowledge:** catalogued 2026-09-16 14:42 UTC; identity revealed 2026-09-17 23:24 UTC; knowledge cutoff not published.
- **IDs:** `stealth/union-alpha` (stealth) → `unbiased/pareto` (current). No separate model ID is documented by the vendors behind it.
- **Context window:** 262,144 tokens (256K); max output 131,072 tokens (128K) — verified against OpenRouter's model page and the provider metadata as re-published from the OpenRouter API on 2026-09-17.
- **Modalities:** text + image in, text out. Tool calling (`tools`, `tool_choice`) and JSON output via `response_format` (no JSON-schema enforcement), streaming, reasoning handled at provider default. No audio/video/PDF input and no downloadable weights.
- **Pricing (as of 2026-09-21):** $0 in / $0 out for the 33-hour stealth window (OpenRouter, price field "$0", provider "Stealth"); since the reveal **$2.50 in / $0.25 cached / $7.50 out** per 1M tokens (Unbiased/Pareto model card). Notes: the stealth period ran longer than OpenCode's announced week — it lasted 33 hours; and under stealth terms prompts/completions may be retained by the provider (stated as not used for training), with no audit path.
- **Architecture:** proprietary blended service — no parameter count, no checkpoint, no disclosed upstream model list; several models answer in parallel and their results are combined per request. Measured serving profile from the OpenRouter API (2026-09-17): ~24 tok/s, P50 latency ~16.5s, availability 98.14%.

### Raw benchmarks found

> Every number carries its source; rows with no verified public value read
> `no verified public score found`. This report has measured numbers
> (DeepSWE 74, Terminal-Bench 4.0 51, MMMU-Pro 78, HLE 49, ArXivMath 88,
> OpenCode snapshot 23.14/40), so it is a scored report — no `.excluded` twin
> was written.

Agent / tool use:

- DeepSWE: **74** (Unbiased/Pareto model card for "Pareto 26.9" — ties GPT-6 Astra and DeepSeek 4.1 Flash at 74; a launch-day community chart read ~73% with ~$0.65 per task against $6.50–$11.80 for the top two frontier models)
- Terminal-Bench 4.0: **51** (Unbiased/Pareto model card; GPT-6 Astra 58). An independent developer report also circulated ~51% at ~$1.50 per task on launch day, with methodology not published
- OpenCode coding snapshot: **23.14/40** across four coding projects at ~$0.03 average cost per prompt (source-specific measurement, not a standardized leaderboard)
- Terminal-Bench 2.1: no verified public score found
- MCP-Atlas / Toolathon / SWE Atlas Codebase QnA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- GDPval-AA: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- HLE (no tools): **49** (Unbiased/Pareto model card; GPT-6 Astra 54)
- ArXivMath: **88** (Unbiased/Pareto model card; GPT-6 Astra 91)
- MMMU-Pro: **78** (Unbiased/Pareto model card; GPT-6 Astra 87) — the only vision-reasoning number found, listed here because the template has no multimodal raw block
- GPQA Diamond: no verified public score found
- AIME: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no independent leaderboard entry yet as of 2026-09-18)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE: **74** — within a point of GPT-6 Astra and Claude Opus 5 (both ~74) and ahead of GLM-5.3 on the same launch chart
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Hands-on evidence (MindStudio, 2026-09-17): correctly diagnosed and fixed a subtle data-averaging bug (rolling score diluting recent activity with full history) in a Postgres + Flask + Redis app with a mixed Python/JavaScript stack; habitually reasoned and tested in Python even when the target app was JavaScript; free-preview throttling cut a planned scientific-reasoning test short

Long context:

- No retrieval evaluation is published for the 262,144-token window (nothing at any depth comparable to MRCR/RULER/needle tests); the short window is justified by the vendor's tool-fetching design rather than whole-repo prompting — Ox Alpha offered 1M, Union Alpha does not.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Overall Score = mean of the five quality dimensions
> (Tool, Reasoning, Context, Multimodal, Coding); Cost efficiency is scored
> independently and excluded from Overall.

- **Tool use: 82/100.** DeepSWE 74 ties GPT-6 Astra and Opus 5, Terminal-Bench 4.0 at 51 is within 7 points of Astra's 58, and the OpenCode snapshot (23.14/40 at ~$0.03 per prompt) plus independent field reports of working agent loops on real repos show the tool stack functions. Capped by vendor-only scores with undisclosed harnesses, missing MCP-Atlas/Tau3/GDPval/Claw evidence, preview throttling, and a blended backend whose composition is not guaranteed stable between requests.
- **Reasoning: 84/100.** HLE 49 with no tools is frontier-adjacent (Astra 54), ArXivMath 88 keeps it competitive on research-style math, and hands-on vision/moral reasoning produced structured, committed answers instead of hedging. Capped by the absence of GPQA Diamond, AIME, LCR/CritPt and any independent index, all on a card that publishes no measurement methodology.
- **Context window: 78/100.** 262,144 tokens sits well above the 200K tier (70) with a generous 131,072-token output ceiling, but it is a quarter of the 1M cohort and no retrieval result at any depth has been published — window size without fidelity evidence.
- **Multimodal: 70/100.** Text + image in with text out earns the image-input band, and MMMU-Pro 78 is a credible vision-reasoning signal. Capped by text-only output, no audio/video/PDF, no image generation or native media handling, and no independent vision evaluation.
- **Coding: 84/100.** DeepSWE 74 matches GPT-6 Astra and Opus 5 on the launch chart at a fraction of the per-task cost, and a real Flask/Postgres/Redis bug (history diluting a rolling score) was fixed cleanly in a hands-on test. Capped by missing SWE-bench Verified/Pro, LiveCodeBench and SciCode disclosures, a mid-pack OpenCode snapshot, and the fact that a blended service can change underneath the score.
- **Cost efficiency: 55/100.** The 33-hour stealth window was $0 in / $0 out (a 100 while it lasted), but the model is now paid at $2.50 in / $0.25 cached / $7.50 out per 1M — above the GLM-5.2-class rate card and below only the Opus/GPT frontier tier. The offsetting evidence is ~$0.65 per DeepSWE task versus $6.50–$11.80 for the top two frontier models, i.e. cost per accepted task is competitive even though the token price is not.
- **Overall Score: 79.6/100.** (82 + 84 + 78 + 70 + 84) / 5 = 79.6. Best fit: cheap, high-volume agentic coding and research work where vendor-reported benchmarks are acceptable and privacy/auditability are not constraints; not a fit for vision-heavy pipelines that need a 1M window, or for workloads that must cite independently verifiable evaluations.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-21
- Method: public internet research — OpenRouter's stealth model page and API metadata for `stealth/union-alpha`, the Unbiased/Pareto reveal coverage (CellCog's timestamped record, Siora AI's API read-out, Ox Alpha GPT's post-reveal guide), the Build Fast with AI review, and MindStudio's hands-on coding/vision test; scores are normalized 1–100 interpretations, not official vendor scores.
- Identity note: `union-alpha` and the revealed `unbiased/pareto` are the same system, so this single folder covers both names — no separate duplicate entry was created.
- Idempotency: created only because this folder had no `DeepSeek_4.1_Flash.md`; no existing file was read, overwritten, or deleted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
