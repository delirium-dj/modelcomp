# Grok 4.7 — findings by Qwen 3.8 Flash

- Source: xAI / Grok 4.7 (`opencode/grok-4.7`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — **pass-1 arithmetic typo fixed**: dims sum 385/5 = **77** (the body line's "81.0 → 81" contradicted its own header); Cost 75 provisional→**70 verified** ($2.20/$6.60 official + >200K doubling to $4.40/$13.20; $2/$6 aggregate readings logged); flagship status confirmed ("succeeds Grok 4.6"); quality bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (base)
- **Short description:** xAI's agentic flagship — broad tool-use coverage (Terminal-Bench 2.1 73.4%, GDPval-AA 1695, DeepSWE 71.0%) with strong reasoning (HLE 43.1%) and an unusually **low 29.3% hallucination rate**, on a 500K window. BenchLM shows partial coverage (26/618) and no published overall rank yet.
- **Provider / access:** xAI API (`grok-4.7`); OpenCode Zen (`opencode/grok-4.7`); OpenRouter. Reasoning + tool calls.
- **Release / knowledge:** Grok 4.7 launch (xAI newsroom); knowledge cutoff not disclosed.
- **IDs:** `opencode/grok-4.7` / xAI `grok-4.7`.
- **Context window:** BenchLM lists **500K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 500K.
- **Modalities:** Design Arena Website row indicates image-in; curated `meta.json` lists "Text in/out". Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (xAI flagship-class; exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (26 of 618 rows; **no public overall score yet — unranked**), citing the xAI Grok 4.7 launch post, plus Artificial Analysis, Vals AI, Cursor, Collinear, Proximal and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Agent / tool use:

- Terminal-Bench 2.1 (Vals) **73.4%**; GDPval-AA **59.8%** / **1695** Elo; AA Briefcase 1657
- AA AutomationBench 65.6%; AA ITBench 42.1%; Terminal-Bench 4.0 38.0% / AA-Terminal-Bench 4.0 25.8%; CWE-bench v1 68.0%; AA Harvey LAB 19.6%; GDP.pdf 20.0%

Coding:

- DeepSWE **71.0%**; EEBench **64.0%**; AA-SciCode **57.4%** (clears 55 bar)
- CursorBench 4.0 46.3%; FrontierSWE v2 29.5% (no SWE-bench Verified / LiveCodeBench rows published)

Reasoning / knowledge:

- **AA-HLE 43.1%** (clears the 40% bar); AA Intelligence Index 46.5; AA-LCR 76.7; CritPt 17.7; MLCR-AA 15.0
- AA-Omniscience Index 32.0 / Accuracy 47.4% / **Hallucination 29.3%** — notably low confabulation; HealthBench Professional 56.7%

Multimodal / long context:

- Design Arena Website 1222 (only image-grounded row)
- 500K window (AA-LCR 76.7 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 79/100.** Broad, genuinely agentic coverage — Terminal-Bench 2.1 73.4%, GDPval-AA 1695 Elo / 59.8%, AutomationBench 65.6% and Briefcase 1657 — but the headline agentic scores sit mid-band (no τ² / ≥85% Terminal-Bench read) and Harvey LAB 19.6% / GDP.pdf 20.0% are weak, so a strong-but-not-frontier placement.
- **Reasoning: 82/100.** AA-HLE 43.1% clears the 40% bar, Intelligence Index 46.5 is solid, and the **29.3% hallucination rate** (Omniscience Index 32.0, Accuracy 47.4%) is one of the most grounded profiles in this queue — trimmed by CritPt 17.7% and MLCR 15.0%.
- **Context window: 80/100.** BenchLM's 500K window sits between the 100–200K (50–64) and ≥1M (95–100) bands, well into the upper half; AA-LCR 76.7 supports it and no ≥98% MRCR is demonstrated (curated meta conflicts at 128K).
- **Multimodal: 62/100.** The only grounded non-text row is image (Design Arena Website 1222) — a +image band (60–70); no audio/video/document rows and curated meta says text-only, so no higher-tier credit.
- **Coding: 82/100.** DeepSWE 71.0% (near the 74 bar), EEBench 64.0% and SciCode 57.4% (clears 55) are strong agentic-code signals, trimmed by CursorBench 46.3%, FrontierSWE v2 29.5% and the absence of SWE-bench Verified / LiveCodeBench rows.
- **Cost efficiency: 70/100.** (Revised by the 2026-11-03 second pass from 75/100: exact list now verified — **"For grok-4.7 this is $2.20 / $0.55 / $6.60 per 1M tokens (input / cached input / output) below 200k prompt tokens, and $4.40 / $1.10 / $13.20 above"** (docs.x.ai; AWS Bedrock agrees at $2.20/$6.60/$0.55) — between the $3/$15≈60 and $1.25/$4.25≈88 anchors (~66 raw), nudged to 70 for the $0.55 cached lane, with the >200K doubling cliff trimming; x.ai/api and BenchLM's **"$2/$6 per million … cached input at $0.50 and a 500K context"** readings logged un-averaged. Cost is excluded from Overall.
- **Overall Score: 77/100.** Mean of Tool 79, Reasoning 82, Context 80, Multimodal 62, Coding 82 = 385/5 = 77.0 → 77. (Second pass: the prior body text read "81.0 → 81", a transcription typo contradicted by its own header and by the dimension sum; corrected to 77.) Best fit: agentic software/engineering work and long-horizon tool tasks where grounding matters — its low hallucination rate and strong HLE/DeepSWE make it a dependable autonomous coder, but the thin multimodal profile and unranked status mean it is not yet a breadth flagship.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://docs.x.ai/developers/pricing (**"For grok-4.7 this is $2.20 / $0.55 / $6.60 per 1M tokens … below 200k prompt tokens, and $4.40 / $1.10 / $13.20 above"**) and https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-xai-grok-4-7.html (**"Geo CRIS, $2.20, $6.60, $0.55"** — Bedrock on-demand table) and https://x.ai/api (**"grok-4.7, the latest flagship, costs $2 per million input tokens and $6 per million output tokens"**) and https://benchlm.ai/xai/api-pricing (Oct 2026: **"The Grok API costs $2/$6 … for Grok 4.7 … cached input at $0.50 and a 500K context"**) and https://inworld.ai/models/xai-grok-4-7 (**"$2/1M input, $6/1M output. 500K context"**) · lifecycle/status — https://openrouter.ai/x-ai/grok-4.7 (**"Grok 4.7 is SpaceXAI's flagship model for coding, agentic tasks, and knowledge work, succeeding Grok 4.6. 500000 token context window"**) · benchmarks — no post-2026-10-02 AA/Vals re-run found that rebases this id's rows; the batch-5 grok-4.6 pass corroborates the launch deltas quoted at the time (**"Grok 4.7 … +2 Index, GDPval 1695 +90, $2.20/$6.60"**) against a second vendor surface.

**What moved and how it was resolved:**

1. **Arithmetic correction (no judgment change):** pass 1's Overall header said 77 while its body line summed to "81.0 → 81" — the five listed dims actually total 385, i.e. **77.0**. Header was right; the prose sum is fixed to match. 79+82+80+62+82 = 385/5 = **Overall 77**.
2. **Cost 75→70 (provisional→verified):** official $2.20/$6.60 (+$0.55 cached) sits ~66 between the anchors; cached-input discount lifts the blended read to 70, with the >200K doubling ($4.40/$13.20) noted. The $2/$6 readings (x.ai marketing page, BenchLM, Inworld) vs the $2.20/$6.60 docs/Bedrock invoices are logged side by side, un-averaged; the invoiced docs lane governs.
3. **Status confirmed, 500K reconfirmed:** OpenRouter lists it as the current flagship succeeding 4.6 (4.6 scored in its own folder per exact-ID rule — no cross-contamination), and three sources independently repeat the 500K window that pass 1 resolved over the 128K curated stub — Context 80 stands. Tool 79, Reasoning 82 (HLE 43.1 over bar, 29.3% hallucination unrebutted), Multimodal 62, Coding 82 unchanged.

**Scores changed by this pass:** Cost efficiency 75→70 (excluded from Overall); pass-1 prose-sum typo corrected 81→77 in the Overall line (header already 77). **Overall = 77** (site average recomputes from this file on next sync).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the xAI Grok 4.7 launch post, plus Artificial Analysis, Vals AI, Cursor, Collinear, Proximal and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (docs.x.ai, AWS Bedrock model card, x.ai/api, BenchLM, Inworld, OpenRouter); fixed pass-1 prose arithmetic (385/5 = 77, not 81); Cost 75→70 on the verified $2.20/$6.60 + cached-$/doubling-cliff list — **no quality dim changed and Overall stands at 77 (typo-corrected)**. Prior pass retained verbatim per RULES.md except the flagged sum line.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
