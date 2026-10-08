# Ember-1 — findings by Laguna XS 2.1

- Source: Fireworks Research (`ember-1`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1 (Research Preview)
- **Short description:** Fireworks Research's first specialized model (2026-09-23) — post-trained from Moonshot's Kimi K3 to cut unnecessary reasoning, delivering K3-max quality with ~40% fewer tokens (~35% in live customer A/B tests). API-only; no weights published.
- **Provider / access:** Fireworks Serverless API (Research Preview; research releases get an initial two-week window, made permanent on demand) and Vercel AI Gateway. Zero Data Retention + No Prompt Training supported.
- **Release / knowledge:** 2026-09-23; knowledge cutoff inherited from Kimi K3 (not separately published).
- **IDs:** `ember-1` (Fireworks). No Zen Free ID found.
- **Context window:** 1,048,576 tokens (inherited from K3).
- **Modalities:** text + image in; text out; reasoning yes (shortened traces); tool calls yes; implicit prompt caching.
- **Pricing (as of 2026-10-04):** $3.00 / $15.00 per 1M in/out, cached input $0.30 — identical sticker to Kimi K3; value sits in the ~40% lower token count per task.
- **Architecture:** post-trained Kimi K3 (2.8T MoE base); trained on Fireworks' own data only (no customer data); proprietary serving.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks, N=89; vs K3-max 80.9 on the same run)
- τ²-Bench Airline: **66.0%** (Fireworks, N=50; vs K3-max 64)
- Doximity Bedside Bench (500 clinical cases): **new cost-per-task Pareto frontier** across open + closed models incl. GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5 (Fireworks Specialized Intelligence Index)
- Terminal-Bench 4.0: **19.7%** (TensorFeed benchmark table — far below frontier)
- Claw-Eval / MCP-Atlas / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- No independent reasoning benchmark published for Ember-1 (GPQA/HLE/CritPt/LCR: no verified public score found); capability claims rest on parity with K3-max at fewer tokens across Fireworks' seven-benchmark suite

Coding:

- SWE-bench Verified: **92.2%** (Fireworks, N=500; vs K3-max 93.2 — a 15.5% token reduction for ~1 pt quality)
- DeepSWE 1.1: **75.2%** (Fireworks, N=113; beats K3-max's 66.4 on the same run with 23.7% fewer tokens)
- SWE-Interact: **20.0%** (Fireworks, N=75; vs K3-max 21.3)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1,048,576-token window inherited from K3; no separate retrieval measurement published

Production evidence: two live customer A/B tests on coding workloads — **~35% fewer tokens per task at comparable quality**, task completion/success/failure metrics held or improved; one customer moving to full production replacement (Fireworks).

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 82.0% (beating K3-max on the same run), τ² 66% and the Bedside Bench Pareto-frontier result are strong; capped by every number being vendor-reported, TB 4.0 19.7%, and no MCP-Atlas/Tau3 rows.
- **Reasoning: 80/100.** No direct reasoning benchmark exists for Ember-1; scored on the K3 base's reasoning class (GPQA 93.5%) tempered by the reasoning-shortening post-training and zero independent verification.
- **Context window: 95/100.** 1,048,576-token window (95–100 tier) inherited from K3; no retrieval-at-length measurement of its own.
- **Multimodal: 65/100.** Text + image in, text out (image-in band) per Fireworks/Vercel docs; no audio/video in.
- **Coding: 88/100.** SWE-bench Verified 92.2% and DeepSWE 75.2% (beating K3-max by 8.8 pts on the same vendor run) are excellent; capped by vendor-only evidence and SWE-Interact/TB 4.0 weakness.
- **Cost efficiency: 68/100.** $3/$15 sticker maps to ~60, but ~40% fewer tokens per task (validated in two live A/B tests) lifts effective cost toward the $1.80/$9 class; Research Preview availability uncertainty caps it.
- **Overall Score: 82.6/100.** Mean of (85, 80, 95, 65, 88) = 82.6 — a strictly-better-way-to-serve-K3 for token-heavy agentic coding, if Fireworks makes the preview permanent.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Fireworks launch blog + model page, Vercel AI Gateway changelog, TensorFeed, ModelPriceWatch, BenchLM, LavX News, LinkedIn launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
