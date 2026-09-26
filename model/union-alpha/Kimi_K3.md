# Union Alpha — findings by Kimi K3

- Source: Circuit & Chisel (via Unbiased) / Union Alpha — revealed 2026-09-18 as **Pareto 26.9** (`unbiased/pareto`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (stealth preview, 2026-09-16 → 18) = **Pareto 26.9**
- **Short description:** Stealth multimodal model that launched free on OpenRouter + OpenCode + Cloudflare on 2026-09-16; revealed on 2026-09-18 as Circuit & Chisel's Pareto 26.9, a multi-model ensemble service (a harness coordinates existing open + frontier models — no new foundation training run) sold through Unbiased.
- **Provider / access:** `unbiased/pareto` on OpenRouter (Chat Completions), Cloudflare Workers AI, and Unbiased platform. Original stealth IDs (`stealth/union-alpha`, `opencode/union-alpha`) delisted after the free preview ended.
- **Release / knowledge:** stealth release 2026-09-16 (RunFreeTools spec record); identity reveal and paid launch 2026-09-18 (official X announcement per union-alpha.com portal).
- **IDs:** `unbiased/pareto` (current). Historical: `stealth/union-alpha`. No Zen Free ID currently.
- **Context window:** 262,144 tokens total / 131,072 max output (OpenRouter catalog, corroborated by RunFreeTools and union-alpha.com).
- **Modalities:** text + image in; text out; tool calling (`tools`/`tool_choice` listed); no `response_format`/reasoning controls in current catalog entry.
- **Pricing (as of 2026-09-25):** $2.50/1M input, $0.25/1M cached input, $7.50/1M output (official Unbiased rate card + OpenRouter catalog, checked 2026-09-18 by union-alpha.com). Was $0 during the 2-day stealth preview.
- **Architecture:** multi-model ensemble/router ("Many models. One answer." — coordinates existing models with an evaluation harness; component list undisclosed). Not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **51** (official Pareto 26.9 model card, #3/4 vs GPT-6 Astra 58, Claude Fable 5.1 56, DeepSeek 4.1 Flash 31)
- AI BENCHY (private 22-test suite, paid endpoint, 2026-09-18): **8.9/10, #34/330, 18/22 passed, incl. 1/1 tool-calling test** (aibenchy.com)
- LiveBench agentic coding: **54.7/100** (preview snapshot 2026-09-17)
- Tau3 / Tau2 / GDPval-AA / Claw-Eval: **no verified public score found** (tau2-bench result marked "awaiting")

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (OpenRouter AutoExacto, preview, 2026-09-17)
- HLE (no tools): **49** (official model card — compare GPT-6 Astra 54)
- ArXivMath: **88** (official model card)
- MMMU-Pro: **78** (official model card)
- LiveBench overall: **76.1, #26/58** (reasoning 80.8, mathematics 95.3, language 85.9, instruction following 59.5, data analysis 74.6)
- ARI Bench (hidden exact match): **32/100, #2/36** (1/3 seeds — provisional)

Coding:

- DeepSWE: **74** (official model card — ties GPT-6 Astra 74; explainx reported the preview beat GPT-5.6 Sol)
- LiveBench coding: **82.1/100**
- SWE-bench Verified: **not published** for this ID/release
- LiveCodeBench / SciCode / Vibe: **no verified public score found**

Long context:

- 262K window verified by catalog; **no MRCR/RULER retrieval score reported** for this exact ID.

### Normalized scores (1–100)

> Methodology: `../../model-comparison.md`. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 62/100.** Terminal-Bench 4.0 = 51 sits in the mid band (45–60 → 50–70); tool-calling passed in independent AI BENCHY testing, but LiveBench agentic coding 54.7 and missing Tau3/GDPval cap it.
- **Reasoning: 88/100.** GPQA 90.9% and HLE 49 both clear the frontier reference bands (90%+, 40%+); LiveBench reasoning 80.8 corroborates. Held below low-90s by the weak ARI hidden-set result (32/100) and LiveBench instruction following 59.5.
- **Context window: 74/100.** 262,144 tokens → 200K–500K band (65–84, 200K = 70); modestly above 200K, no published long-context retrieval test.
- **Multimodal: 65/100.** Text + image input only → 60–70 band. No video/PDF/audio input, no non-text output.
- **Coding: 85/100.** DeepSWE 74 meets the frontier reference (74%+) and ties GPT-6 Astra; LiveBench coding 82.1 corroborates; discounted from 90+ by mediocre agentic-coding 54.7 and no SWE-bench Verified.
- **Cost efficiency: 78/100.** $2.50/$7.50 per 1M sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) references; $0.25 cached input helps. Was 100 during the free preview, which has ended.
- **Overall Score: 74.8/100.** Mean of (62 + 88 + 74 + 65 + 85)/5 = 74.8. Best fit: high-reasoning research/coding assistant via OpenRouter at half of Claude Opus pricing; not the pick for >250K-context jobs or pure agentic loops.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-25
- Method: public internet research (union-alpha.com portal aggregating the official Unbiased model card, OpenRouter catalog, AI BENCHY, LiveBench, ARI Bench; RunFreeTools spec record; explainx.ai coverage). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
