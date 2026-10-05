# Pareto 26.10 Preview — findings by Mimo v2.6 Flash

- Source: Unbiased AI (`pareto-26.10-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's blended/composite multimodal preview model (2026-10-01) pairing frontier reasoning numbers (GPQA 92.4%, HLE 49.9% text-only) with open-source pricing ($0.80/$3.20 per 1M) and attested zero data retention; backbone components undisclosed.
- **Provider / access:** Unbiased AI API (`pareto-26.10-preview`); OpenRouter listing `unbiased/pareto-26.10-preview` (also routed via Cloudflare AI Gateway per launch post); subscription tiers (Personal $10/mo, Personal Max $100/mo). Chat Completions via OpenRouter; Responses API not documented.
- **Release / knowledge:** Preview released 2026-10-01 (launch post; runs dated Oct 1, 2026, "may change before final publication"); knowledge cutoff not disclosed.
- **IDs:** `pareto-26.10-preview` (Unbiased API), `unbiased/pareto-26.10-preview` (OpenRouter). **No OpenCode Zen Free ID** (`noFreeId: true` in models.dev/meta).
- **Context window:** 1,000,000 in; 131,000 max output (models.dev / meta.json, verified 2026-10-05).
- **Modalities:** text + image in; text out. Reasoning/tool calls supported in agent runs; structured-output flags not documented.
- **Pricing (as of 2026-10-05):** paid — $0.80 input / $0.03 cached input / $3.20 output per 1M (launch post; 68% cheaper input than 26.9's $2.50/$7.50). No free tier → cost scored on paid pricing.
- **Architecture:** blended/composite router-style model — component models undisclosed; preview status ("will continue to improve over the coming week", slug graduates in place); ZDR attested on OpenRouter/Cloudflare traffic.

### Raw benchmarks found

> Measured numbers with (source, run date, cost-per-task) for traceability. All four are vendor first-party preliminary runs (2026-10-01).

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** <(Unbiased launch post, Oct 1 2026 run, $0.48 mean/task; preliminary — harness denominators unconfirmed)>
- DeepSWE v1.1: **69.9%** <(Unbiased model card + launch post, $0.24/task; Fable 5 comparator 70.0% at $13.50/task — Pareto matches it at ~1/56 the cost; Pareto 26.9 = 70.0% at $0.29)>
- Tau-bench / Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA-Diamond: **92.4%** <(Unbiased launch post, $0.004/task)>
- Humanity's Last Exam: **49.9%** <text-only, no tools (Unbiased launch post, $0.008/task)>
- Artificial Analysis Intelligence Index: no verified public score found
- CritPt / LCR / MLCR: no verified public score found

Coding:

- DeepSWE v1.1: **69.9%** <(agentic coding — listed above; primary coding evidence)>
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1,000,000-token window declared; MRCR / AA-LCR / RULER: no verified public score found

Multimodal:

- Image input declared (text + image in); MMMU / AI2D / CharXiv / Video-MME: no verified public score found

### Normalized scores (1–100)

- **Tool use: 76/100.** TB4.0 50.8% is a genuine but preliminary mid-band agentic result (frontier TB2.1 ref ≥85% → 100) and DeepSWE 69.9% is frontier-cost-adjusted; zero Tau/GDPval/MCP-Atlas/Claw-Eval evidence caps it at 76.
- **Reasoning: 88/100.** Two frontier-tier first-party results — GPQA 92.4% (≥90 ref) and HLE 49.9% text-only (≥30 ref → 90-100 tier) — but preliminary vendor runs with no independent replication, no AA Intelligence Index, and no CritPt keep it below 90.
- **Context window: 95/100.** 1M window lands the ≥1M tier (95–100); no retrieval evidence either way (no MRCR/AA-LCR score) → tier floor.
- **Multimodal: 75/100.** Text + image in / text out = 75–89 tier; zero multimodal benchmark numbers → floor of tier.
- **Coding: 82/100.** DeepSWE v1.1 69.9% matches Fable 5's 70.0% at 1/56 the task cost and TB4.0 50.8% is solid, but with no SWE-bench Verified, LiveCodeBench, or SciCode the composite caps at 82.
- **Cost efficiency: 90/100.** No Zen Free ID → paid scoring: $0.80 in / $3.20 out per 1M sits below the $1.25/$4.25 benchmark reference point (≈88); excellent $0.03 cached input, but no free tier keeps it at 90.
- **Overall Score: 83/100.** (76+88+95+75+82)/5 = 83.2 → 83 — best fit: preview blended router with frontier-tier reasoning (GPQA 92.4%, HLE 49.9%) and DeepSWE-matching agentic coding at open-source pricing — for cost-conscious devs who need reasoning muscle, not a proven tau3/MCP workhorse.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (Unbiased AI model card + launch post, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores. All vendor runs are preliminary (2026-10-01).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.