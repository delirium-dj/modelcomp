# Pixel Canary — findings by Step 5 Preview

- Source: stealth (`stealth/pixel-canary`, Vercel AI Gateway)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary (`stealth/pixel-canary` — "Canvas" name; no lab disclosed)
- **Short description:** An anonymous stealth coding model that appeared on **Vercel's AI Gateway on 2026-09-25**, free during stealth ("Prompts and outputs may be retained for training by the provider"; no zero-data-retention). Marketed as a strong coding model with adjustable reasoning effort, aimed at web and mobile app development — the "pixel" name is thematic (one tracker describes it drawing every scene in SVG code), not a vision claim. Its identity is unconfirmed: a tokenizer study reports 95/95 input-count matches with the Qwen family and "Qwen3.8 Flash leads" one similarity sweep, while GLM-5.4/Z.ai and a Google (Pixel + Chrome Canary) theory also circulate — all explicitly unverified. The preview ended ~2026-10-01 and the model is delisted from Vercel's live catalog (its Stealth slot now hosts `stealth/glyph-cluster`); it never appeared on OpenRouter or OpenCode's model list.
- **Provider / access:** Was Vercel AI Gateway free tier only (`stealth/pixel-canary`); Vercel's own Next.js evals ran it through OpenCode as the agent. Now delisted.
- **Release:** 2026-09-25; delisted ~2026-10-01.
- **Context window:** 262,144 tokens; max output 131,072.
- **Modalities:** Text + image in → text out (per the catalog listing preserved by stealthmodels.com; Vercel itself published no capability metadata).
- **Reasoning:** four settings — `none`, `low`, `medium`, `xhigh` — with implicit caching.
- **Pricing:** was $0/$0 (free during stealth); ~11 tok/s and 82 s p50 on Vercel's stealth page snapshot; average Next.js-eval task took 16.9 minutes.

### Raw benchmarks found

Next.js Agent Evals (nextjs.org/evals — open harness, vercel/next-evals-oss, run with OpenCode as the agent; pass@4 over 31 tasks: App Router migrations, data fetching, image/font optimization, caching, view transitions):

- Baseline: **90.3% — 28/31 tasks, tying GPT-6 Astra (high)**
- With Next.js docs supplied via `AGENTS.md`: **96.8% — 30/31 tasks, tying the leaderboard's top score in that setting**
- Same-run comparison (with docs → without): Claude Opus 5.5 (high) 97%→97%; GPT-6 Astra (high) 90%→97%; Gemini 3.8 Flash 90%→97%; Grok 4.7 94%→94%; Kimi K3 84%→97%
- GPQA, SWE-bench, Terminal-Bench, LMArena, Artificial Analysis: **no verified public score found** — AA's profile lists both Intelligence and Coding indices as "not yet scored"

### Normalized scores (1–100)

- **Tool use: 50/100.** It was run as a full agent in Vercel's open eval harness (OpenCode driving terminal/file tools to completion), which is working evidence of tool-loop competence — but no TB2.1, τ³, MCP Atlas or GDPval number exists, so a structural mid score.
- **Reasoning: 50/100.** Four reasoning-effort settings are documented and the eval shows strong task completion, but no GPQA/HLE/math/reasoning benchmark was ever run — unevidenced beyond the coding eval.
- **Context window: 78/100.** A 262K window is the 200K–500K band (65–84); the long multi-minute eval tasks (16.9 min average) imply usable long context, but no MRCR/RULER/AA-LCR measurement exists.
- **Multimodal: 62/100.** Text + image in → text out is the 60–70 band per the preserved catalog listing (screenshots/mockups for frontend work); no vision benchmark was run.
- **Coding: 72/100.** 90.3% baseline and 96.8% with project docs on Vercel's open Next.js eval — tying GPT-6 Astra at baseline and the leaderboard lead with docs, above Grok 4.7's 94% and Kimi K3's 84% — is genuinely frontier-class *on Next.js app development*; it is one narrow eval harness, so it does not generalize to SWE-bench-scale repository work.
- **Cost efficiency: 100/100.** It was free ($0/$0) — the methodology's $0 tier — but the stealth window closed around 2026-10-01 and the endpoint is delisted, so the price no longer buys anything.
- **Overall Score: 62/100.** Best-fit recommendation: while it lasted, a free stealth coding model with frontier-class Next.js/frontend agent scores (96.8% with project docs) and 262K context — delisted as of October 2026, lab undisclosed, every capability number resting on Vercel's own open eval harness.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Vercel changelog + AI Gateway model/stealth listings, nextjs.org/evals + next-evals-oss harness, stealthmodels.com and Command Code registry snapshots, HF blog coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Glyph_Cluster.md`, using the same headings.
