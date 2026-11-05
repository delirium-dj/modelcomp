# Ember-1 — findings by GLM 5.3 Flash

- Source: Fireworks (`fireworks/ember-1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-10, 2026-10-16): Vals' Ember-1 page has
> grown from ~7 rows to 16 — adding SAGE 86.38% (#12/28), EMB 63.37%, BioMysteryBench 67.04%,
> Finance Agent v2 51.85%, Legal Research 44.71%, Tax Agent 31.08%, Public Benefits 66.17%,
> MysteryMechanism 22.52%, TB-Science 5.71% and an updated TB4.0 20.71% (#33/60); Vals Index
> drifts 50.81%→49.03%. Still zero GPQA/HLE/LCR/Index anywhere and still unranked on BenchLM
> (Nov 4: 5 vendor rows). Reasoning 64→66; Overall 77→78.

## Model card

- **Name:** Ember-1 (Research Preview)
- **Short description:** Specialized reasoning model from Fireworks Research, fine-tuned from Kimi K3 to "think less": it cuts unnecessary reasoning traces (~40% fewer tokens) while matching K3 quality. Top use case: agentic coding and long-horizon tool workloads where reasoning tokens dominate cost. A fine-tune of Kimi K3, not a smaller or different architecture — flag as a K3 variant.
- **Provider / access:** Fireworks Serverless (Research Preview); OpenRouter `fireworks/ember-1` (Chat Completions API).
- **Release / knowledge:** Released 2026-09-22/24 (minor date conflict across sources). Knowledge cutoff not disclosed. **Research-Preview status: still LIVE** past the nominal two-week window (re-verified Nov 4–5: BenchLM and Vals both still track it).
- **IDs:** `fireworks/ember-1`. No Free ID on OpenCode Zen.
- **Context window:** 1,048,576 tokens; max completion **943,718** per OpenRouter — CONFLICT: Vals lists max output 131k (their serving config). Flag both.
- **Modalities:** text + image in; text out; reasoning yes; tool calls yes; JSON mode.
- **Pricing (as of 2026-11-05):** $3.00 / $15.00 per 1M (cached $0.30; blended $6.00) — unchanged.
- **Architecture:** Fine-tune of Kimi K3 on Fireworks Serverless Training; proprietary weights.

### Raw benchmarks found

> Vendor rows (launch post) + Vals independent suite (16 rows as of Nov 5). BenchLM (Nov 4): still unranked, 5 vendor rows only; AA still has no Ember-1 page at any slug.

Agent / tool use:

- Terminal-Bench 2.1 (vendor, N=189): **82.0%** (vs K3-max 80.9%)
- Terminal-Bench 4.0 (Vals, Mini-SWE-agent): **20.71% ±3.64** (#33/60 — updated from 19.70%); Terminal-Bench-Science (Vals): **5.71%** (NEW, weak)
- τ²-Bench Airline (vendor, N=50): **66.0%**; SWE-Interact (vendor): 20.0%
- Vals Index: **49.03%** (was 50.81% #27/45 at the Oct 10 read — drift flagged)
- CyberBench v1.1 (Vals): **69.52%**; Harvey LAB (Vals): 9.17%
- SAGE (Vals): **86.38% ±1.89** (#12/28 — NEW, strong); Public Benefits 66.17%; MysteryMechanism 22.52%
- Bedside Bench (Doximity): Pareto-frontier lead on cost/task — no absolute score published
- Claw-Eval / GDPval-AA / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / AA Index / Omniscience: **no verified public score found** (AA has no Ember-1 page — re-checked via BenchLM Nov 4)
- ProofBench v1.1 (Vals): **61.00%**; IOI (Vals): **46.33%** — unchanged
- **EMB (Vals): 63.37%** (NEW); **BioMysteryBench (Vals): 67.04% ±3.03** (NEW); **MysteryMechanism 22.52%** (NEW)
- Bedside Bench (SII): Pareto-frontier cost/task lead; quality claimed at K3 level

Coding:

- SWE-bench Verified (vendor, N=500): **92.2%** (vs K3-max 93.2%); DeepSWE 1.1 (vendor): **75.2%** (+8.8 over K3-max)
- Vibe Code Bench v1.1 (Vals): **83.87% ±3.15** (#21/124 — rank slipped from #16/110, score unchanged)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1.0M window; no MRCR/RULER/GraphWalks retrieval numbers found

Token efficiency (core claim):

- Live A/B: **71.3% reasoning-token reduction, 39% total-token reduction at equal quality**; cost/task vs K3-max: TB −51.9%, SWE-V −15.5%, DeepSWE −23.7%
- Vals latency: **61 min 58 s** average — the token savings do not translate to wall-clock speed on Vals' harness

### Normalized scores (1–100)

- **Tool use: 75/100.** Unchanged — vendor TB2.1 82.0% still unverified by any overlapping harness; the TB4.0-generation independent reads (20.71% #33/60, TB-Science 5.71%) keep the agentic story generation-bound.
- **Reasoning: 66/100.** CHANGED from 64 — the new Vals rows add measured mid-band strength (SAGE 86.4% #12, EMB 63.4%, BioMystery 67.0%) on top of ProofBench 61.0%/IOI 46.3%; still zero GPQA/HLE/LCR/Index and still unranked on BenchLM.
- **Context window: 95/100.** Unchanged — 1,048,576 context verified; the 943,718-vs-131K max-output conflict is noted, not resolved.
- **Multimodal: 65/100.** Unchanged — text + image in, text out.
- **Coding: 88/100.** Unchanged — vendor DeepSWE 75.2%/SWE-V 92.2% strong-but-unverified; Vals Vibe 83.87% corroborates frontier-adjacent coding.
- **Cost efficiency: 68/100.** Unchanged — $3/$15 list with the defining Pareto token-efficiency lead; the 62-minute Vals latency is the new offset.
- **Overall Score: 78/100.** CHANGED from 77 — (75 + 66 + 95 + 65 + 88) / 5 = 389/5 = 77.8 → 78. Best-fit: high-volume agentic coding where reasoning-token cost dominates — with the caveat that its quality claims remain mostly vendor-side and its Vals Index slipped below 50.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetches (web-search quota exhausted): BenchLM Ember-1 page (Nov 4, still unranked/5 vendor rows) + Vals AI model page fetched 2026-11-05 (16-row suite — 9 new rows since the last pass, Vals Index drift 50.81→49.03, TB4.0 19.70→20.71); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
