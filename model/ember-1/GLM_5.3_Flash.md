# Ember-1 — findings by GLM 5.3 Flash

- Source: Fireworks (`fireworks/ember-1`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1 (Research Preview)
- **Short description:** Specialized reasoning model from Fireworks Research, fine-tuned from Kimi K3 to "think less": it cuts unnecessary reasoning traces (~40% fewer tokens) while matching K3 quality. Top use case: agentic coding and long-horizon tool workloads where reasoning tokens dominate cost. It is a fine-tune of Kimi K3, not a smaller or different architecture — flag as a K3 variant.
- **Provider / access:** Fireworks Serverless (Research Preview, two-week serverless research release); OpenRouter hosts it as `fireworks/ember-1` (Chat Completions API).
- **Release / knowledge:** Released 2026-09-24 (launch post published 2026-09-23; Fireworks model-page metadata says created 2026-09-22, OpenRouter epoch ≈ 09-24 — minor conflict). Knowledge cutoff not disclosed (OpenRouter field `null`). **Research-Preview status: still LIVE as of 2026-10-10** — the nominal two-week serverless window lapsed (~Oct 7–8) with no removal: Fireworks model page "State: Ready" with serverless pricing active, OpenRouter `expiration_date: null`, and no deprecation entry in the Fireworks changelog through 2026-10-07.
- **IDs:** `fireworks/ember-1` (no Free ID on OpenCode Zen found — served via Fireworks/OpenRouter, paid)
- **Context window:** 1,048,576 tokens total; max completion 943,718 — verified via the OpenRouter models API (2026-10-10); Fireworks model page lists "1040k"; Vals lists 1M.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes (tools, tool_choice, reasoning_effort advertised on OpenRouter); JSON mode via response_format.
- **Pricing (as of 2026-10-02):** $3.00 / $15.00 per 1M (cached input $0.30/1M; blended 3:1 $6.00/1M) per RunFreeTools API pricing — same numbers as public Kimi K3 API pricing used in the launch post's cost analysis. Paid; proprietary research preview, no free tier.
- **Architecture:** Fine-tune of Kimi K3 on Fireworks Serverless Training (50+ training experiments, 200+ evaluations, new algorithms for shorter reasoning); proprietary weights, base variant.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (N=189): **82.0%** (Fireworks launch post, https://fireworks.ai/blog/ember-1 — vs K3-max 80.9%)
- τ²-Bench Airline (N=50): **66.0%** (Fireworks launch post — vs K3-max 64%)
- SWE-Interact (N=75): **20.0%** (Fireworks launch post — vs K3-max 21.3%)
- Terminal-Bench 4.0 (Vals independent, Mini-SWE-agent): **19.70%** (#23/45; $0.50-class cost/test $9.578 across suites; page current 2026-10-10) — the TB4.0-generation independent read sits far below the vendor's TB2.1 82.0%
- Vals Index: **50.81% ±1.28, #27/45** (Vals, 2026-10-10)
- Bedside Bench (Doximity, 500 clinical cases, Specialized Intelligence Index): **new Pareto frontier for cost/task** across open and closed models incl. GPT-5.6 Sol, GPT-6 Astra, Claude Opus 5 — no raw pass-rate number published
- Claw-Eval: no verified public score found
- GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found — **AA has no Ember-1 page at any slug (all 404, checked 2026-10-10)**; BenchLM lists Ember-1 as unranked, 5 benchmark rows, no overall
- ProofBench v1.1 (Vals): **61.0%**; IOI (Vals): **46.33%**; CyberBench v1.1 (Vals): **69.52%**; Harvey LAB (Vals): **9.17%**
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Bedside Bench (SII, physician-validated): Pareto-frontier lead on cost/task — quality claimed at K3 level; no absolute score published

Coding:

- SWE-bench Verified (N=500): **92.2%** (Fireworks launch post — vs K3-max 93.2%)
- DeepSWE 1.1 (N=1135): **75.2%** (Fireworks launch post — vs K3-max 66.4%)
- LiveCodeBench: no verified public score found
- Vibe Code Bench v1.1 (Vals independent): **83.87%** (#16/110) — first independent coding corroboration
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- no long-context retrieval reported (1.0M window advertised; no MRCR/RULER/GraphWalks numbers found)

Token efficiency (the model's core claim):

- Live A/B (2 customers, production coding): **71.3% reasoning-token reduction, 39% total-token reduction at equal quality** (score 0.75 in both arms; Fireworks launch post)
- Cost/task vs K3-max: Terminal-Bench **-51.9% / -23.1 USD**, SWE-bench Verified **-15.5% / -68.1 USD**, SWE-Interact **-32.5% / -60.8 USD**, DeepSWE **-23.7% / -126.9 USD**, τ²-Airline **-5.9% / -0.3 USD** (K3 public pricing: $3/$0.30/$15 per 1M)
- Internal rollout: developers on Fireworks' own coding/cowork traffic did not notice the switch while consuming substantially fewer tokens

### Normalized scores (1–100)

- **Tool use: 75/100.** Vendor TB2.1 82.0% and τ²-Airline 66% remain unverified by any overlapping harness; the first independent reads — Vals TB4.0 19.70% (#23/45) and Vals Index #27/45 — show the agentic numbers do not carry to the current harness generation, so the score drops from 80.
- **Reasoning: 64/100.** Still zero verified headline reasoning benchmarks (GPQA/HLE/LCR/Index all absent; AA has no page at all); the first independent reads — Vals ProofBench 61.0% and IOI 46.33% — are mid-band, so quality-at-K3-level rests on the equal-score A/B and Bedside Bench Pareto claims.
- **Context window: 95/100.** 1,048,576-token context window with 943,718 max completion, verified via the OpenRouter models API (2026-10-10) — ≥1M tier = 95–100; no measured ≥98% retrieval at 512K+ to justify 100.
- **Multimodal: 65/100.** Text + image input, text output only (RunFreeTools modality `text+image`) — the +image-in band (60–70); no video/PDF/audio input advertised.
- **Coding: 88/100.** Vendor DeepSWE 75.2% (+8.8 over K3-max) and SWE-bench Verified 92.2% are strong but unverified; Vals' independent Vibe Code Bench 83.87% (#16/110) corroborates frontier-adjacent coding quality, while TB2.1 82.0% misses the 85%+ ref and LiveCodeBench/SciCode are unmeasured.
- **Cost efficiency: 68/100.** List pricing $3/$15 per 1M maps to ~60 on the inverse-pricing rubric, adjusted upward for the model's defining Pareto-frontier token-efficiency lead (-51.9% cost/task on Terminal-Bench, -23.7% on DeepSWE, 39% fewer total tokens at equal quality vs K3-max).
- **Overall Score: 77/100.** Mean of the five quality dims (75+64+95+65+88)/5 = 387/5 = 77.4 → 77. Best fit: high-volume agentic coding and tool pipelines where reasoning-token cost dominates — frontier-adjacent coding quality at a fraction of the token bill; not the pick when raw reasoning or multimodal breadth is the bottleneck.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-10
- Method: public internet research (second pass 2026-10-10: Fireworks blog + model page + changelog, OpenRouter models API, Vals AI model page — first independent benchmark data, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
