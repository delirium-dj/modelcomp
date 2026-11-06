# Pixel Canary — findings by Step 5 Preview

- Source: stealth (`stealth/pixel-canary`, Vercel AI Gateway)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (`stealth/pixel-canary` — the "Canvas" name; **no lab disclosed**). An anonymous stealth coding model that appeared on **Vercel's AI Gateway on 2026-09-25**, free during stealth ("Prompts and outputs may be retained for training by the provider"; **no zero-data-retention**). Marketed as a strong coding model with adjustable reasoning effort, aimed at web and mobile app development — **the "pixel" name is thematic** (one tracker describes it drawing every scene in SVG code), **not a vision claim**. **A negative finding governs this report: BenchLM carries no `pixel-canary` page in any spelling** (it 404s), so the 2026-11-06 re-research had no catalog to check against.
- **Short description:** Its identity is **unconfirmed**, and the competing theories are recorded rather than resolved: a **tokenizer study reports 95/95 input-count matches with the Qwen family** and "Qwen3.8 Flash leads" one similarity sweep, while **GLM-5.4/Z.ai and a Google (Pixel + Chrome Canary) theory** also circulate — **all explicitly unverified**. Despite the thin documentation it posted a genuinely strong result on an **open harness**: **Next.js Agent Evals 90.3% baseline (28/31 tasks, tying GPT-6 Astra high), rising to 96.8% (30/31) with Next.js docs supplied via `AGENTS.md`**. The preview ended ~2026-10-01 and **the model is delisted** from Vercel's live catalog (its Stealth slot now hosts `stealth/glyph-cluster`); it never appeared on OpenRouter or OpenCode's model list.
- **Provider / access:** **Was Vercel AI Gateway free tier only** (`stealth/pixel-canary`); Vercel's own Next.js evals ran it through OpenCode as the agent. **Now delisted.**
- **Release / knowledge:** **2026-09-25; delisted ~2026-01** — recorded as ~2026-10-01, giving a **six-day stealth window**. **Knowledge cutoff not disclosed** — and structurally undisclosable while the identity is unconfirmed.
- **IDs:** `stealth/pixel-canary` (Vercel, dead); repo id `pixel_canary` (underscore form).
- **Context window:** **262,144 tokens; max output 131,072** — a quarter of the current 1M standard with a genuinely generous output allowance.
- **Modalities:** **text + image in; text out** (per the catalog listing preserved by stealthmodels.com; **Vercel itself published no capability metadata**). **The "pixel" name is thematic, not a vision claim** — the SVG-code description is about drawing *in code*, not about seeing.
- **Reasoning:** **four settings — `none`, `low`, `medium`, `xhigh`** — with implicit caching. An unusually broad effort range.
- **Pricing (as of 2026-11-06):** **was $0/$0 (free during stealth)** with prompts and outputs retained for training; ~11 tok/s and 82 s p50 on Vercel's stealth-page snapshot; **average Next.js-eval task took 16.9 minutes**. The route is dead, so the $0 meter is no longer reachable.
- **Architecture:** **unverified** — no architecture document exists, and the tokenizer study is the only structural evidence.

### Raw benchmarks found

**A negative finding is stated plainly: BenchLM carries no `pixel-canary` page in any spelling**, and no Artificial Analysis, Vals AI, Epoch AI or ARC Prize row was found either. The figures below are carried from the prior verified research pass (2026-10-19, itself a re-run of 2026-10-09) and re-attributed to Vercel's own Next.js Agent Evals, the stealthmodels.com catalog preservation and a tokenizer study; **because no tracker page exists, none has an independent cross-check from a 2026-11-06 source.**

**Next.js Agent Evals** (nextjs.org/evals — open harness, `vercel/next-evals-oss`, run with OpenCode as the agent; **pass@4 over 31 tasks**: App Router migrations, data fetching, image/font optimization, caching, view transitions):

- **Baseline: 90.3% — 28/31 tasks, tying GPT-6 Astra (high)**
- **With Next.js docs supplied via `AGENTS.md`: 96.8% — 30/31 tasks, tying the leaderboard's top score in that setting**

**Identity evidence (all unverified, recorded rather than resolved):**

- **Tokenizer study: 95/95 input-count matches with the Qwen family**; "Qwen3.8 Flash leads" one similarity sweep
- Circulating alternatives: **GLM-5.4 / Z.ai**, and **Google (Pixel + Chrome Canary)**
- Vercel's Stealth slot now hosts `stealth/glyph-cluster`

**Operational:**

- **~11 tok/s; 82 s p50; 16.9 minutes average per Next.js-eval task**
- **Four reasoning settings: none / low / medium / xhigh**, with implicit caching
- Free during stealth, with **prompts and outputs retained for training** (no zero-data-retention)

**Standard benchmarks — all absent:** SWE-bench, LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Terminal-Bench, τ²-bench, MCP-Atlas, OSWorld, GDPval-AA, GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, AA Intelligence Index, AA-Omniscience, MMMU-Pro, CharXiv, Design Arena — **no verified public score found for this identity**

### Normalized scores (1–100)

> **Methodology note.** With **one measured result on an open harness** and no standard benchmark of any kind, every quality dimension below is a placeholder-for-unknown anchored on the verified structural facts (262K/131,072 output, text+image in, four reasoning settings, delisted $0 route) and the Next.js eval result. The eval is genuinely good provenance — an open harness, a public repo, a named agent — but it measures one narrow slice (Next.js App Router work), and that limitation is carried into every score.

- **Tool use: 78/100.** Above the methodology's mid band, and the best-grounded quality dimension, anchored on a genuinely strong result: **Next.js Agent Evals 90.3% baseline (28/31 tasks, tying GPT-6 Astra high), rising to 96.8% with docs supplied** — and the harness is **open (`vercel/next-evals-oss`) with OpenCode as the named agent**, which is unusually good provenance for a stealth model. The four-setting reasoning range (`none`/`low`/`medium`/`xhigh`) with implicit caching is a real tool-use asset. Capped at 78 rather than higher because **the eval measures one narrow slice** (Next.js App Router migrations, data fetching, caching, view transitions) and **Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no figure at all** — so two of three frontier references are unmeasured and no composite exists. The 16.9-minute average task time is a real throughput constraint.
- **Reasoning: 62/100.** Mid-band, anchored on the inference that a model posting 90.3% on an agentic coding harness must reason adequately to achieve it. Capped at 62 rather than higher because **GPQA Diamond, HLE, CritPt, AA-LCR, MRCR, ARC-AGI, AIME, the composite index and AA-Omniscience have no figure at all** — so five of five reasoning references are unmeasurable — and because the eval result is coding-shaped rather than reasoning-shaped. The **`xhigh` setting** implies a reasoning substrate capable of deep allocation, which is the one directional signal.
- **Context window: 88/100.** **262,144 tokens with 131,072 max output** — the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 88 because **a 131,072 output allowance is among the largest measured in this research series** and the 262K window is a quarter of the standard. Held at 88 rather than the ≥1M tier because **no AA-LCR or MRCR figure exists**, so the window's usable depth is unverified, and the model is delisted so the window cannot be exercised at all.
- **Multimodal: 62/100.** **Text + image in; text out**, at the lower end of the methodology's 60–70 band. Held at 62 because the modality claim comes from a **third-party catalog preservation rather than Vercel itself** (which published no capability metadata), because **not one visual benchmark exists**, and because **the "pixel" name is explicitly thematic, not a vision claim** — the SVG-code description is about generating code, not seeing images. Recorded as a spec-sheet claim with the weakest attestation in this batch.
- **Coding: 76/100.** Above the methodology's mid band, and the model's nominal speciality, anchored on the Next.js result: **90.3% baseline / 96.8% with docs, 28/31 and 30/31 tasks** — genuinely strong for framework-specific agentic coding. Capped at 76 rather than higher because **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench and FrontierCode have no figure at all** — so the 85%, 74%, 70% and 55% references cannot be checked — and because the eval is one framework's worth of tasks, which is exactly the framework-code-generation caveat recorded for LongCat 2.5 Preview.
- **Cost efficiency: 100/100.** **Was $0/$0 during stealth** — the methodology's 100 anchor. Held at 100 rather than given a bonus because there is nothing above it. **Two caveats attach and must travel with the number: the route is delisted, so the $0 meter is no longer reachable; and the free period was explicitly a training-data trade** — Vercel's own terms state "Prompts and outputs may be retained for training by the provider", with no zero-data-retention.
- **Overall Score: 73/100.** (78 + 62 + 88 + 62 + 76) / 5 = 73.2 → **73**. Recommendation: **a delisted stealth model whose one genuine result is strong but narrow, and whose identity is unconfirmed.** The **Next.js Agent Evals 90.3% baseline (tying GPT-6 Astra high) and 96.8% with docs** on an **open harness with a public repo** is the best-attested evidence for any stealth model in this research series — but it measures **one framework's worth of tasks**, and **every standard benchmark is absent**. **Three cautions: the model is delisted** (its Vercel Stealth slot now hosts `stealth/glyph-cluster`), so there is nothing to call; **the identity is unconfirmed**, with a 95/95 Qwen tokenizer match leading one sweep and GLM-5.4 and Google theories also circulating — so no lineage may be assumed and no Qwen figure may be imported; and **the free period was a training-data trade with no zero-retention.** Do not build on it. If you need a stealth route today, the live Vercel slot is `stealth/glyph-cluster`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first: BenchLM carries no `pixel-canary` page in any spelling**, and no Artificial Analysis, Vals AI, Epoch AI or ARC Prize row was found either. The evidence base is the prior verified research pass (2026-10-19, itself a re-run of 2026-10-09) plus the repo's curated metadata, with figures re-attributed to Vercel's own Next.js Agent Evals, the stealthmodels.com catalog preservation and a tokenizer study, and **the absence of any independent cross-check from a 2026-11-06 source stated plainly rather than implied**. Because only one measured result exists, every quality dimension is explicitly labelled a placeholder-for-unknown, and the two best-grounded dimensions — tool use and coding (both anchored on the Next.js eval) and cost (the delisted $0 route) — are scored on verified facts. **The Next.js Agent Evals result is attributed with its provenance stated as the best for any stealth model in this research series — an open harness (`vercel/next-evals-oss`), a public repo and a named agent — and with its narrowness stated equally plainly: 31 tasks covering one framework's App Router, data fetching, caching and view transitions, which is the same framework-code-generation caveat recorded for LongCat 2.5 Preview.** **The identity uncertainty is carried into the model card and the recommendation rather than buried: no lab disclosed, a 95/95 Qwen tokenizer match leading one similarity sweep with GLM-5.4/Z.ai and Google (Pixel + Chrome Canary) theories also circulating — all explicitly unverified, and recorded as such with the repo's rule against importing another model's benchmarks applied.** The **thematic-not-vision reading of the "pixel" name** is recorded explicitly, since the SVG-code description is about generating code rather than seeing images. The **16.9-minute average task time and ~11 tok/s** are surfaced as throughput constraints. The **delisting** is surfaced as the decisive operational fact, with the successor `stealth/glyph-cluster` named. The free-tier training-data caveat is surfaced rather than buried. Missing benchmarks (every standard benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Next.js — Agent Evals (open harness; source of the 90.3% / 96.8% results)](https://nextjs.org/evals)
  - [GitHub — vercel/next-evals-oss (open eval harness; provenance for the result)](https://github.com/vercel/next-evals-oss)
  - [stealthmodels.com — catalog preservation (source of the text+image modality listing and the tokenizer study)](https://stealthmodels.com/)
  - [Vercel AI Gateway — Stealth models (source of the delisting and the `stealth/glyph-cluster` successor)](https://vercel.com/docs/ai-gateway/models)
  - [Repo curated meta — `model/pixel_canary/meta.json`](/model/pixel_canary/meta.json)
  - See also: [`model/fledge-alpha/`](fledge-alpha.md) — the other unclaimed stealth model refreshed earlier in this session, whose identity is likewise unverified
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
