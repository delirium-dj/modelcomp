# Union Alpha — findings by Kimi K3

- Source: Circuit & Chisel (via Unbiased) / Union Alpha — revealed 2026-09-18 as **Pareto 26.9** (`unbiased/pareto`)
- Date: 2026-10-13 (UTC) — second-pass audit (first pass 2026-09-25; OpenRouter listing re-verified — price, context, and release date all hold; no new benchmark coverage since the reveal)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (stealth preview, 2026-09-16 → 18) = **Pareto 26.9**
- **Short description:** Stealth multimodal model that launched free on OpenRouter + OpenCode + Cloudflare on 2026-09-16; revealed on 2026-09-18 as Circuit & Chisel's Pareto 26.9, a multi-model ensemble service (a harness coordinates existing open + frontier models — no new foundation training run) sold through Unbiased.
- **Provider / access:** `unbiased/pareto` on OpenRouter (**listing live and paid as of 2026-10-13**, page re-fetched this pass); Cloudflare Workers AI; Unbiased platform. Original stealth IDs delisted after the free preview ended.
- **Release / knowledge:** stealth release 2026-09-16; identity reveal / paid launch 2026-09-18; **OpenRouter now shows "Released Sep 17, 2026"** (composite-date nuance vs the 18th reveal — noted, immaterial).
- **IDs:** `unbiased/pareto` (current, ✓ live). Historical: `stealth/union-alpha`, `opencode/union-alpha`. No Zen Free ID currently.
- **Context window:** **262,144 tokens** total (OpenRouter — re-verified this pass) / 131,072 max output (first-pass catalog row).
- **Modalities:** text + image in; text out; tool calling listed; no reasoning controls in the catalog entry (unchanged). OpenRouter blurb: "multimodal composite model built for research, coding, and agentic workflows".
- **Pricing (as of 2026-10-13):** **$2.50/M input, $7.50/M output** (OpenRouter — re-verified, matches the Unbiased rate card; $0.25 cached input per first pass).
- **Architecture:** multi-model ensemble/router (component list still undisclosed); not open-weights.

### Raw benchmarks found (first-pass snapshot — no new rows from any tracker since the 2026-09-18 reveal)

Agent / tool use:

- Terminal-Bench 4.0: **51** (official Pareto 26.9 card, #3/4 vs GPT-6 Astra 58, Claude Fable 5.1 56, DeepSeek 4.1 Flash 31)
- AI BENCHY (private 22-test suite): **8.9/10, #34/330, 18/22 passed, incl. 1/1 tool-calling test** (aibenchy.com)
- LiveBench agentic coding: **54.7/100** (preview snapshot)
- Tau3 / Tau2 / GDPval-AA / Claw-Eval: no verified public score found (tau2 row still "awaiting" — checked)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (OpenRouter AutoExacto, preview); HLE (no tools): **49** (card); ArXivMath: **88**; MMMU-Pro: **78**
- LiveBench overall: **76.1, #26/58** (reasoning 80.8, math 95.3, language 85.9, IF 59.5, data analysis 74.6)
- ARI Bench (hidden exact match): **32/100, #2/36** (1/3 seeds — provisional)

Coding:

- DeepSWE: **74** (card — ties GPT-6 Astra 74); LiveBench coding: **82.1/100**
- SWE-bench Verified: not published; LiveCodeBench / SciCode / Vibe: no verified public score found

Long context:

- 262K window ✓ (re-verified); no MRCR/RULER retrieval score.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. **All unchanged — listing re-verified, benchmarks static.**

- **Tool use: 62/100.** TB 4.0 = 51 mid band; tool-calling passed at AI BENCHY; LiveBench agentic coding 54.7 caps it.
- **Reasoning: 88/100.** GPQA 90.9% and HLE 49 clear frontier reference bands; LiveBench reasoning 80.8 corroborates; held by ARI 32/100 and LiveBench IF 59.5.
- **Context window: 74/100.** 262,144 tokens re-verified; no published long-context retrieval test.
- **Multimodal: 65/100.** Text + image input only; no video/PDF/audio, no non-text output.
- **Coding: 85/100.** DeepSWE 74 (ties Astra); LiveBench coding 82.1; discounted by agentic-coding 54.7 and no SWE-bench Verified.
- **Cost efficiency: 78/100.** $2.50/$7.50 confirmed still live; $0.25 cached input helps. Was 100 during the (ended) free preview.
- **Overall Score: 74.8/100.** Mean of (62 + 88 + 74 + 65 + 85)/5 = 74.8 (unchanged). Best fit: high-reasoning research/coding assistant via OpenRouter at half of Claude Opus pricing; not the pick for >250K-context jobs or pure agentic loops.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: second-pass public web research (OpenRouter `unbiased/pareto` re-fetched 2026-10-13 — live, $2.50/$7.50, 262K, released Sep 17 2026; Zen listing — absent; benchmark set re-checked for new rows — none since the reveal). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
