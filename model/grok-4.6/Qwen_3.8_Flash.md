# Grok 4.6 — findings by Qwen 3.8 Flash

- Source: xAI / Grok 4.6 (`xai/grok-4.6`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — vendor rebranded xAI → SpaceXAI (Jul 2026) / SpaceXSI (Oct 2026) — id `xai/grok-4.6` unchanged; Grok 4.7 (Sep 21) now flagship (+2 Index, +90 GDPval-AA) but 4.6 still sold at $2/$6 with the 200K doubling cliff verified; Index 44.3-vs-61 conflicting readings logged un-averaged; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (base)
- **Short description:** xAI's frontier flagship for coding and agentic work — elite SWE-bench (Vals 95.6%) / LiveCodeBench (Vals 88.2%) / Coding-Index (76.8%), top-tier reasoning (GPQA 94.9%, HLE 42.9%, ARC-AGI-2 67.1%) on a 500K window. BenchLM ranks it #22 of 645 (69.38), with 37/618 rows covered.
- **Provider / access:** xAI API (`grok-4.6`); OpenRouter. Reasoning + tool calls; no free ID.
- **Release / knowledge:** Grok 4.6 launch (xAI newsroom); knowledge cutoff not disclosed.
- **IDs:** `xai/grok-4.6` / xAI `grok-4.6`.
- **Context window:** 500K (curated meta and BenchLM agree).
- **Modalities:** Text and image in; text out (curated meta); Design Arena Website row confirms image grounding. Reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** $2 in / $6 out per 1M (cached $0.50) under 200K prompt; doubles to $4 / $12 above 200K.
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (37 of 618 rows; 69.38/100, #22 of 645), citing the xAI Grok 4.6 launch post, plus Artificial Analysis, Vals AI, ARC Prize, Cursor, Collinear, Proximal, VulcanBench and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Coding:

- SWE-bench (Vals) **95.6%**; LiveCodeBench (Vals) **88.2%**; AA Coding Index **76.8%** (clears 70 bar)
- DeepSWE 65.9%; CursorBench 3.2 70.8% / 4.0 41.4%; AA-SciCode 56.5%; VulcanBench v3 87.0%; FrontierCode 1.1 61.3%; FrontierSWE v2 25.3%

Reasoning / knowledge:

- **AA-GPQA Diamond 94.9%** / Vals GPQA 94.7% (clear 90); **AA-HLE 42.9%** (clears 40 bar); MMLU-Pro (Vals) 89.4; AA Intelligence Index 44.3
- **ARC-AGI-1 87.0%, ARC-AGI-2 67.1%** (standout abstraction), ARC-AGI-3 2.1%; CritPt 17.1; Omniscience Index 30.5 / Accuracy 48.2% / Hallucination 34.3%

Agent / tool use:

- Terminal-Bench 2.1 (Vals) **78.3%**; GDPval-AA 1643 / 55.5%; AA AutomationBench 66.7%; AA Agentic Index 53.4%; APEX-Agents 57.5%
- AA τ3-Banking 50.7%; EnterpriseOps-Gym 48.3%; Terminal-Bench 3.0 26.5%; CWE-bench v1 57.0%; ApprenticeBench 13% (weak)

Multimodal / long context:

- Design Arena Website 1299 (only image-grounded row); text+image in per curated meta
- 500K window (AA-LCR 80.3 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 78/100.** Terminal-Bench 2.1 78.3%, AutomationBench 66.7% and GDPval-AA 1643 are solid agentic reads, but τ3-Banking 50.7%, EnterpriseOps-Gym 48.3% and especially ApprenticeBench 13% / Terminal-Bench 3.0 26.5% show the harder long-horizon suites still bite — strong, not frontier.
- **Reasoning: 87/100.** GPQA-Diamond 94.9% and HLE 42.9% clear their bars, MMLU-Pro 89.4 is high, and **ARC-AGI-2 67.1% / ARC-AGI-1 87%** are genuinely frontier abstraction results; a 34.3% hallucination rate and CritPt 17.1 hold it under the top band.
- **Context window: 80/100.** The 500K window sits between the 100–200K (50–64) and ≥1M (95–100) bands, well into the upper half; AA-LCR 80.3 supports it and no ≥98% MRCR is demonstrated.
- **Multimodal: 65/100.** Text+image in with a strong single image-grounded row (Design Arena 1299) — a +image band (60–70); no audio/video/document benchmark rows, so no higher-tier credit.
- **Coding: 89/100.** SWE-bench (Vals) 95.6%, LiveCodeBench (Vals) 88.2% and AA Coding Index 76.8% (clears 70) are elite agentic-code results; DeepSWE 65.9% and CursorBench 4.0 41.4% trim the very top, but this is a genuine frontier coder.
- **Cost efficiency: 78/100.** $2 / $6 per 1M (cached $0.50) is under the $3/$15≈60 anchor, but pricing doubles above a 200K prompt, so long-context use erodes the value; net upper-mid. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 78, Reasoning 87, Context 80, Multimodal 65, Coding 89 = 79.8 → 80. Best fit: frontier agentic software engineering and abstract reasoning (ARC/SWE/LiveCodeBench) where its coding and reasoning cores shine; keep it in text/image lanes, watch the >200K price step, and verify factual output given the 34.3% hallucination rate.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing/lifecycle — https://openrouter.ai/x-ai/grok-4.6 (**"Grok 4.6 costs $2.00/M input tokens and $6.00/M output tokens, with separate rates for Cache Read at $0.50/M tokens"**) and https://docs.x.ai/developers/pricing (current lineup: **"Currently grok-4.7 and grok-4.6 only. For grok-4.7 this is $2.20 / $0.55 / $6.60 per 1M tokens"** — 4.6 still an active paid sku one generation on) and https://benchlm.ai/xai/api-pricing (**"The Grok API costs $2/$6 per million input/output tokens for Grok 4.7 … with cached input at $0.50 and a 500K context"**) and https://ofox.ai/blog/grok-4-6-api-pricing-vs-grok-4-5-2026/ (**"Grok 4.6 costs $2/$6 per 1M tokens until your prompt hits 200K, then every token doubles"** — the 200K cliff pass 1 flagged still stands) · successor — https://artificialanalysis.ai/articles/benchmarking-grok-4-7 (**"Grok 4.7 scores +2 points over Grok 4.6 on the Intelligence Index"**, 2026-09-21) and https://x.com/ArtificialAnlys/status/2102074898327932987 (**"On GDPval-AA, it scores 1695 Elo, +90 ahead of Grok 4.6 (high)"**) · vendor identity — https://en.wikipedia.org/wiki/SpaceXAI (**"In July 2026, xAI was rebranded as SpaceXAI"**) and https://www.taskade.com/blog/xai-grok-history (**"Renamed SpaceXAI July 2026 … SpaceXSI rebrand begins October 2026"**) and https://x.ai/news (current masthead **"SpaceXSI … We rebuilt the combined SpaceXSI and Cursor support operation around Grok Bot"**) · benchmarks — https://www.vals.ai/benchmarks/swebench (**"Grok 4.6 … 95.60% ±0.92"** — Vals SWE-bench unchanged from pass 1) and https://www.tbench.ai/ + https://presenc.ai/research/terminal-bench-leaderboard-2026 (**"Grok 4.6, Grok Build, high, 20.30% ±3.09"** on the newer Terminal-Bench 4.0 board) · index readings kept side by side: https://emergent.sh/learn/grok-4-6-benchmarks (**"Grok 4.6 scored 61 on the Artificial Analysis Intelligence Index … ties it with GPT-5.6"**) and https://www.datacamp.com/blog/grok-4-6 (**"At high effort, Grok 4.6 scores 61 … two points behind Opus 5"**) vs pass 1's BenchLM-sourced 44.3 — NOT averaged.

**What moved and how it was resolved:**

1. **Vendor rebrand (xAI → SpaceXAI Jul 2026 → SpaceXSI Oct 2026).** A naming/lineage fact, not an identity change: the API slug `grok-4.6` and the OpenRouter namespace `x-ai/grok-4.6` are unchanged, so the curated id `xai/grok-4.6` stays as written. Logged for provenance; no dim touched.
2. **Successor Grok 4.7 shipped 2026-09-21** (AA: "+2 points over Grok 4.6", GDPval-AA 1695 "+90 ahead of Grok 4.6 (high)", priced $2.20/$6.60). Per the exact-ID rule the 4.7 row belongs to its own folder — this base report keeps its 4.6 rows. 4.6 remains an actively-sold sku (docs.x.ai lists only 4.7 and 4.6), so no legacy/deprecation flag applies.
3. **Cost line reverified, no change:** $2/$6 (cached $0.50) with the >200K prompt doubling cliff confirmed by four independent pages. 78/100 as written.
4. **Intelligence Index 44.3 (pass 1, BenchLM fetch 2026-10-02) vs 61 at high effort (emergent.sh, datacamp — launch-era 2026-08 readings).** Most likely effort-mode vs default-profile variance on the evolving AA scale; recorded un-averaged per house rule. No band move — Reasoning 87 rests on GPQA 94.9/HLE 42.9/ARC-AGI-2 67.1, none of which moved (Vals SWE-bench 95.60% also reconfirmed verbatim).
5. **Terminal-Bench 4.0 board now lists Grok 4.6 (Grok Build, high) at 20.30%** — a different harness version than the 2.1/3.0 rows already in the report; noted only, no cross-version re-scoring.

**Scores changed by this pass:** none. Tool 78, Reasoning 87, Context 80, Multimodal 65, Coding 89 → mean 79.8 → **Overall 80 unchanged**; Cost 78 verified.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the xAI Grok 4.6 launch post, plus Artificial Analysis, Vals AI, ARC Prize, Cursor, Collinear, Proximal, VulcanBench and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (OpenRouter, docs.x.ai, BenchLM, AA launch article + post, Vals, Wikipedia/Taskade rebrand coverage, ofox.ai); vendor rebrand and Grok 4.7 successor logged per exact-ID rule; Index 44.3-vs-61 conflict kept side by side un-averaged — **no dimension changed and Overall remains 80**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
