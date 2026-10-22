# Union Alpha — findings by DeepSeek 4.1 Flash

- Source: OpenRouter stealth listing `stealth/union-alpha`, revealed 2026-09-17/18 as **Pareto 26.9 by Circuit & Chisel, sold through Unbiased** — post-reveal route `unbiased/pareto`
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-21); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM has **no page** for `union-alpha`/Pareto (404); no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). The 2026-09-21 pass relied on the stealth-window pages (OpenRouter API, Siora, Crypto Briefing, MindStudio). This pass re-checked the post-reveal record against the independent portal [union-alpha.com](https://union-alpha.com/) (updated 18 Sep 2026), the [LiveBench leaderboard](https://livebench.ai/) (Union Alpha preview snapshot, #26/58, 17 Sep 2026), [AI BENCHY](https://aibenchy.com/model/unbiased-pareto-none/) (paid `unbiased/pareto` endpoint, tested 18 Sep 2026), [StealthMark / stealthmodels.com](https://stealthmodels.com/benchmarks#model-union-alpha) (7 SVG agentic/visual results), the [ARI Bench Union Alpha report](https://aribench.com/reports/union-alpha.html), and Cloudflare's [`unbiased/pareto` model page](https://developers.cloudflare.com/ai/models/unbiased/pareto/). Newly verified, previously-missing numbers: **GPQA Diamond 90.9%**, **LiveBench 76.1**, **ARI Bench 32/100**, **AI BENCHY 8.9/10**, **StealthMark 60.7/100**. Conflicts surfaced below; unverifiable marketing numbers are flagged and not scored.

## Model card

- **Name:** Union Alpha (OpenRouter stealth ID `stealth/union-alpha`; revealed as **Pareto 26.9** — a blended service, not a single checkpoint). Not `model/ox_alpha/` — Ox Alpha was Z.ai's GLM-5.3-Flash — and not a Z.ai weight release of any kind.
- **Short description:** A frontier-adjacent multimodal service for research, coding and agentic work that ran anonymously on OpenRouter for ~33 hours before being named Pareto 26.9. It is not one lab's checkpoint: each request is answered by several frontier and open models whose outputs are combined per task. The post-reveal portal states the composition is GPT-6 Astra + DeepSeek + GLM; Unbiased stresses it is not a runtime router because it never switches models mid-conversation, and says the composition can change over time. This folder is that model's record; the same system answers today as `unbiased/pareto`.
- **Provider / access:** OpenRouter `stealth/union-alpha` (developer/operator Unbiased — built by Circuit & Chisel; OpenRouter only routed requests, alongside OpenCode and Cloudflare), free during the stealth window; renamed in place to `unbiased/pareto` at the reveal. Gateway access via the OpenRouter Chat Completions API, Cloudflare AI Gateway (`unbiased/pareto`), and the Unbiased platform. No open weights, no vendor-owned model-training API, and no documented Free ID of its own after the reveal.
- **Release / knowledge:** catalogued 2026-09-16 14:42 UTC; identity confirmed 2026-09-17/18 (Pareto 26.9); knowledge cutoff not published.
- **IDs:** `stealth/union-alpha` (stealth) → `unbiased/pareto` (current; also `unbiased/pareto` on Cloudflare). Union-alpha.org also shows an `opencode-go/union-alpha` OpenCode route — that ID is not corroborated by OpenCode or OpenRouter and is not scored. No separate model ID is documented by the vendors behind it.
- **Context window:** 262,144 tokens (256K); max output 131,072 tokens (128K) — verified against the OpenRouter model page and API metadata (2026-09-17) and re-confirmed by the [union-alpha.com portal](https://union-alpha.com/) and [Cloudflare](https://developers.cloudflare.com/ai/models/unbiased/pareto/) (2026-09-18).
- **Modalities:** text + image in, text out. Tool calling (`tools`, `tool_choice`) and JSON output via `response_format` on OpenRouter (no JSON-schema enforcement); streaming; reasoning handled at provider default. Cloudflare's `unbiased/pareto` listing adds an optional `reasoning_effort` field ("availability and accepted values are model-dependent"). No audio/video/PDF input and no downloadable weights.
- **Pricing (as of 2026-10-11):** $0 in / $0 out for the ~33-hour stealth window (OpenRouter, price field "$0", provider "Stealth"); since the reveal **$2.50 in / $0.25 cached / $7.50 out** per 1M tokens (Unbiased/Pareto card; [Cloudflare](https://developers.cloudflare.com/ai/models/unbiased/pareto/) lists the same $2.50 / $0.25 / $7.50). Notes: the stealth period ran longer than OpenCode's announced week — it lasted ~33 hours; and under stealth terms prompts/completions may be retained by the provider (stated as not used for training), with no audit path. Post-reveal the service states Zero Data Retention.
- **Architecture:** proprietary blended service — no parameter count, no checkpoint, no disclosed upstream model list at launch; the post-reveal portal names GPT-6 Astra + DeepSeek + GLM, answers them in parallel, and combines their results per request (union-alpha.org describes a Mixture-of-Agents fan-out with tree-sitter syntax verification and consensus synthesis — that pipeline description is not vendor-confirmed). Measured serving profile from the OpenRouter API (2026-09-17): ~24 tok/s, P50 latency ~16.5s, availability 98.14%.

### Raw benchmarks found

> Every number carries its source; rows with no verified public value read
> `no verified public score found`. This report has measured numbers
> (DeepSWE 74, Terminal-Bench 4.0 51, GPQA Diamond 90.9, LiveBench 76.1,
> StealthMark 60.7, AI BENCHY 8.9/10, MMMU-Pro 78, HLE 49, ArXivMath 88,
> ARI Bench 32, OpenCode snapshot 23.14/40), so it is a scored report — no
> `.excluded` twin was written.

Agent / tool use:

- DeepSWE: **74** (Unbiased/Pareto 26.9 official model card — ties GPT-6 Astra at 74; a launch-day community chart read ~73%; Siora AI also reported "about 73%")
- Terminal-Bench 4.0: **51** (official model card; GPT-6 Astra 58, Claude Fable 5.1 56, DeepSeek 4.1 Flash 31)
- AI BENCHY: **8.9/10, rank #34/330**, 18/22 tests fully passed, 86.4% attempt pass rate, consistency 9.2/10, $1.172 suite cost — passed 3/3 coding tests and 1/1 tool-calling test (independent test of the paid `unbiased/pareto` endpoint, 18 Sep 2026; private 22-test suite)
- StealthMark (independent SVG agentic benchmark): **60.7/100 overall, rank 6/43**, 7 rated results — general intelligence 52.5, visual intelligence 70.5 ([stealthmodels.com](https://stealthmodels.com/benchmarks#model-union-alpha))
- LiveBench agentic coding: **54.7** (Union Alpha preview snapshot, [LiveBench](https://livebench.ai/))
- OpenCode coding snapshot: **23.14/40** across four coding projects at ~$0.03 average cost per prompt (source-specific measurement from the 2026-09-21 pass, not a standardized leaderboard)
- Terminal-Bench 2.1: no verified public score found
- MCP-Atlas / Toolathon / SWE Atlas Codebase QnA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- GDPval-AA: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (independent OpenRouter AutoExacto preview listing under Union Alpha, 17 Sep 2026 — a new verified number for this pass; rank not listed)
- HLE (no tools): **49** (official model card; GPT-6 Astra 54)
- ArXivMath: **88** (official model card; GPT-6 Astra 91)
- LiveBench: **76.1 overall, rank #26/58** — reasoning 80.8, mathematics 95.3, data analysis 74.6, language 85.9, instruction following 59.5 (Union Alpha preview snapshot, 17 Sep 2026)
- ARI Bench: **32/100, rank #2/36**, provisional (1/3 seeds; 25/25 public calibration) — independent agentic-reasoning build task
- MMMU-Pro: **78** (official model card; GPT-6 Astra 87) — the only vision-reasoning number on the card
- AIME: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no independent leaderboard entry surfaced)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE: **74** — within a point of GPT-6 Astra (74) and Claude Opus 5, ahead of GLM-5.3 on the same chart, at a fraction of the per-task cost
- LiveBench coding: **82.1** (Union Alpha preview snapshot)
- AI BENCHY: passed **3/3 coding tests** on the paid endpoint (independent)
- SWE-bench Verified: **conflict — not scored.** [union-alpha.org](https://union-alpha.org/) claims **74.2%** (with HumanEval+ 91.8%, MMLU-Pro 89.8%), but the official 26.9 model card publishes **no** SWE-bench Verified result and the independent [union-alpha.com](https://union-alpha.com/) portal states explicitly "SWE-bench Verified — No 26.9 result published". The marketing-site figure is treated as unverified.
- SWE-bench Pro / LiveCodeBench / SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- Hands-on evidence (MindStudio, 2026-09-17, from the prior pass): correctly diagnosed and fixed a subtle data-averaging bug (rolling score diluting recent activity with full history) in a Postgres + Flask + Redis app with a mixed Python/JavaScript stack; habitually reasoned and tested in Python even when the target app was JavaScript; free-preview throttling cut a planned scientific-reasoning test short

Long context:

- No retrieval evaluation is published for the 262,144-token window (nothing at any depth comparable to MRCR/RULER/needle tests) across the official card, union-alpha.com, LiveBench, AI BENCHY, ARI or StealthMark; the short window is justified by the vendor's tool-fetching design rather than whole-repo prompting — Ox Alpha offered 1M, Union Alpha does not.

Multimodal:

- MMMU-Pro: **78** (official card) — credible vision-reasoning signal
- StealthMark visual intelligence: **70.5/100** across 7 independent SVG visual results (rank 6/43 overall) — the first independent visual evaluation found for this model
- Input text + image, output text only; no audio/video/PDF input, no image generation or native media handling; no independent vision leaderboard (e.g. MMMU) entry surfaced

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Overall Score = mean of the five quality dimensions
> (Tool, Reasoning, Context, Multimodal, Coding); Cost efficiency is scored
> independently and excluded from Overall.

- **Tool use: 83/100.** DeepSWE 74 ties GPT-6 Astra, Terminal-Bench 4.0 at 51 is within 7 points of Astra's 58, and independent evidence now backs the tool stack: AI BENCHY passed its tool-calling test plus 3/3 coding tests (18/22 overall) on the paid endpoint, and StealthMark ranks the system #6/43. Capped by vendor-only DeepSWE/TB4.0 with undisclosed harnesses, LiveBench agentic coding of only 54.7, missing MCP-Atlas/Tau3/GDPval/Claw evidence, preview throttling, and a blended backend whose composition is not guaranteed stable between requests — the portal says the mix is GPT-6 Astra + DeepSeek + GLM and can change over time.
- **Reasoning: 87/100.** The newly verified GPQA Diamond 90.9% is frontier-tier (methodology's 90%+ band), HLE 49 with no tools is frontier-adjacent (Astra 54), ArXivMath 88 stays competitive on research math, and LiveBench 76.1 (#26/58) with mathematics 95.3 is strong independent corroboration. Capped by no MRCR/LCR/CritPt, a low LiveBench instruction-following 59.5, a provisional ARI Bench 32/100 (1/3 seeds), and the absence of any independent composite index.
- **Context window: 78/100.** Unchanged — 262,144 tokens sits well above the 200K tier (70) with a generous 131,072-token output ceiling, but it is a quarter of the 1M cohort and still no retrieval result at any depth has been published (re-confirmed this pass) — window size without fidelity evidence.
- **Multimodal: 70/100.** Text + image in with text out earns the image-input band; MMMU-Pro 78 and now an independent StealthMark visual intelligence of 70.5/100 are credible vision signals. Capped by text-only output, no audio/video/PDF, no image generation, and no independent vision leaderboard entry.
- **Coding: 86/100.** DeepSWE 74 matches GPT-6 Astra on the launch chart at a fraction of the per-task cost, LiveBench coding 82.1 (agentic 54.7) is independent support, AI BENCHY passed 3/3 coding tests, and a real Flask/Postgres/Redis bug was fixed cleanly in the prior hands-on test. Capped by a **conflicting, unscored SWE-bench Verified claim** (union-alpha.org 74.2% vs. officially unpublished), missing SWE-bench Pro/LiveCodeBench/SciCode disclosures, and the fact that a blended service can change underneath the score.
- **Cost efficiency: 55/100.** Unchanged — the ~33-hour stealth window was $0 in / $0 out (a 100 while it lasted), but the model is now paid at $2.50 in / $0.25 cached / $7.50 out per 1M ([Cloudflare](https://developers.cloudflare.com/ai/models/unbiased/pareto/) confirms), above the GLM-5.2-class rate card and below only the Opus/GPT frontier tier. The offsetting evidence is ~$0.65 per DeepSWE task versus $6.50–$11.80 for the top two frontier models, and AI BENCHY's 22-test suite cost only $1.172, i.e. cost per accepted task is competitive even though the token price is not.
- **Overall Score: 81/100.** (83 + 87 + 78 + 70 + 86) / 5 = 80.8 → 81. Best fit: cheap, high-volume agentic coding and research work where vendor-reported benchmarks are acceptable and privacy/auditability are not constraints; not a fit for vision-heavy pipelines that need a 1M window, or for workloads that must cite independently verifiable evaluations.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research — OpenRouter's stealth model page and API metadata for `stealth/union-alpha`, the post-reveal independent portal union-alpha.com, the Unbiased/Pareto reveal coverage (Siora AI's API read-out, Crypto Briefing, the Melvin Vivas note), Cloudflare's `unbiased/pareto` model page, and the independent benchmark sources LiveBench, AI BENCHY, StealthMark/stealthmodels.com and ARI Bench; scores are normalized 1–100 interpretations, not official vendor scores.
- Identity note: `union-alpha` and the revealed `unbiased/pareto` (Pareto 26.9) are the same system, so this single folder covers both names — no separate duplicate entry was created.
- Idempotency: this is a deep second-pass re-verification approved by the user, overwriting only this file (`DeepSeek_4.1_Flash.md`); no other file was read-for-overwrite, overwritten, or deleted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
