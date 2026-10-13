# Solar Pro 4 — findings by GLM 5.3

- Source: Upstage (`solar-pro4`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's agentic LLM (released **2026-08-06** per BenchLeader; the first pass's 08-11 was the launch-post date — both flagged) built for multi-step real work — tool calling, terminal tasks, and long-document reasoning with strong Korean/Japanese coverage and evidence-grounded (anti-hallucination) behavior. Second pass validates the design story and sharpens the ceiling: **the abstention-by-design claim measured TRUE — non-hallucination 75.6% #20 (elite)** — while the 2026 agent suites floored it (**τ³ 23.3% #84, GDPval 30.3% #134, LMArena Agent −17 #49, TB 4.0 0.5%, Agents & tools 38 worst category**). A pricing discovery: **the hosted floor fell to $0.09/$0.36 per 1M** (from the $0.30/$1.20 launch rate — a 3× cut on OpenRouter in October). Top use case: document-heavy, honesty-critical office-agent work (Excel/Word/PowerPoint) in EN/KO/JA — at the new floor, exceptional value.
- **Provider / access:** Upstage Console API `solar-pro4` (OpenAI-compatible); **OpenRouter `upstage/solar-pro4` — two Upstage rows at $0.090 in / $0.360 out per 1M, 524K context, 65-78 tok/s**; Hermes Agent (Nous Research); Upstage Studio; dedicated/on-prem.
- **Release / knowledge:** **2026-08-06** (BenchLeader) / 2026-08-11 (launch post — flagged); knowledge cutoff not stated publicly.
- **IDs:** `upstageai/solar-pro-4` (no Zen Free ID; paid tier).
- **Context window:** **524K tokens** (confirmed — BenchLeader header and both provider rows; up to 128K output).
- **Modalities:** text in / text out (English, Korean, Japanese); reasoning by default with visible trace (effort dial high/low); tool calls; JSON mode not separately verified.
- **Pricing (as of 2026-10-13):** **OpenRouter floor $0.09 in / $0.36 out per 1M** (price-history shows the cut landing in October; cached input $0.06); the launch rate $0.30/$1.20 with its 90%-off promo ended 2026-09-10 — the current floor is the promo-class price made permanent; blended $0.525/M; 95 tok/s, 23 s first answer; $0.023 per agentic session.
- **Architecture:** proprietary (API-only; the sibling Solar Open 2 is the open-weights alternative); parameters undisclosed.

### Raw benchmarks found

> Second pass adds the settled BenchLeader profile (best **53.7 #261/761**, ±8.5, trend 45→55→65 rising, last measured 2026-10-08). Category scores: **Long context 62 (best)**, Knowledge 61, Maths 59, Human preference 56, Reasoning 52, Coding 47, **Agents & tools 38 (worst)**, Composite 61.

Agent / tool use:

- **τ³-Banking: 23.3% #84** (weak — the launch's 23.0 confirmed); **GDPval-AA: 30.3% #134** (settled below the launch's 38.8); **LMArena Agent: −17 #49** — the worst agent-arena score measured this cycle; **Agents & tools 38 is its worst category**
- Terminal-Bench: 2.1 (AA) **57.3% #98** (confirms — mid); **TB 4.0: 0.5% #132** (floor); MCP Atlas 61.4% (vendor, retained); APEX-Agents 18.7% (retained); Claw-Eval / Toolathlon / SWE Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond (AA): **89.1% #80** (confirms — near-bar); HLE (AA): **29.2% #148** (confirms — below the 40% line); **CritPt: 5.4% #143** (weak)
- AIME26 95.3% (vendor, retained — elite); LMArena Maths 1414 #127 (bottom rank); MMLU-Pro 86.3%, KMMLU-Pro 79.2%, KBL 77.5%, KorMedMCQA 93.2%, Ko-GDPval 87.3%, Arena-Hard v2 (JA) 81.9% (vendor table, retained — the Korean/Japanese specialization stands)
- **Honesty — the design claim measured TRUE: AA-Omniscience non-hallucination 75.6% #20 (elite)** — with accuracy 18.9% #311 (it abstains rather than guesses; the first pass's "24.4% hallucination field" is the same 75.6% non-hall, correctly re-read); Omniscience index −0.8 #137
- **AA II 28.1 #131** (confirms); **AA-LCR: 74.0% #161** (settled above the launch's 71.0% — the long-document claim improves on re-measurement)

Coding:

- SciCode (AA): **44.6% #141** (confirms — below the 55% reference); SWE-bench Verified 70.6% (OpenHands, vendor, retained); LiveCodeBench 87.8% (vendor, retained); LMArena Coding 1461 #125 / WebDev 1371 #95 (weak preference); SWE-bench Pro / Vibe / DeepSWE: still no verified public score

Long context:

- **524K confirmed**; **AA-LCR 74.0% #161** — the flagship long-document claim holds and improves; no MRCR/RULER per-length table.

Multimodal:

- Text in/out only (unchanged).

Preference:

- Bottom ranks across LMArena (Text 1386 #165, Multi-turn 1386 #166, Creative 1311 #200, IF 1380 #162, Hard 1409 #162) — the document-agent profile never charmed the arena.

### Normalized scores (1–100)

- **Tool use: 46/100.** Lowered from 58: the 2026 agent suites floored it — τ³ 23.3% #84, GDPval 30.3% #134, LMArena Agent −17 #49, TB 4.0 0.5%, Agents-38-worst — against mid TB 2.1 57.3% #98 and the retained MCP Atlas 61.4%.
- **Reasoning: 68/100.** Lowered from 70: GPQA 89.1% #80 near-bar, HLE 29.2% #148 below the line, CritPt 5.4%, AA II 28.1 #131 — offset by the elite measured honesty (75.6% non-hall #20 — the abstention-by-design claim is TRUE), AIME26 95.3%, and the strong KO/JA specialization.
- **Context window: 90/100.** Raised from 87: 524K confirmed, and the settled AA-LCR 74.0% #161 improved on the launch's 71.0% — the long-document claim is its strongest measured dimension.
- **Multimodal: 15/100.** Held: text-only by design.
- **Coding: 62/100.** Lowered from 68: SciCode 44.6% #141 below the reference and TB 4.0 0.5% measure the floor — the retained vendor rows (SWE-V 70.6%, LCB 87.8%) hold mid-upper; it was never a coding-agent-first model.
- **Cost efficiency: 96/100.** Raised from 93: **the floor fell to $0.09/$0.36 per 1M** — near the cheapest tier measured this cycle for a 524K-context agent — with $0.06 cached reads, 95 tok/s, and $0.023/session.
- **Overall Score: 56/100.** (46 + 68 + 90 + 15 + 62) / 5 = 56.2 → 56, down from 60. Best-fit: the honesty-first document agent — the abstention-by-design claim is now measured true (75.6% non-hallucination #20), the 524K long-document window improved on re-measurement, and the KO/JA specialization stands — but its 2026 agent suites (τ³, GDPval, arena −17) floored, SciCode sits below the reference, and the arena never liked it; at the new $0.09/$0.36 floor it is exceptional value for exactly its niche: grounded, long-document, multilingual office work — nothing else.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (the settled BenchLeader profile as of 2026-10-08 aggregating Artificial Analysis — incl. the elite non-hallucination row, LMArena, Epoch AI Benchmarking Hub; two Upstage OpenRouter provider rows and the price history documenting the October floor drop to $0.09/$0.36; the 2026-08-06/08-11 release-date discrepancy flagged; the first-pass vendor rows retained where not contradicted, with the abstention claim now measurement-confirmed); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
