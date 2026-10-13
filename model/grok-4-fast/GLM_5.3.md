# Grok 4 Fast — findings by GLM 5.3

- Source: xAI (`grok-4-fast`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-25 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's high-speed, low-cost multimodal variant of Grok 4 (released **2025-09-19**), positioned for SOTA cost-efficiency with a 2M-token context window and selectable reasoning modes. **Retired: Azure/Foundry shutdown 2026-05-01; xAI slug retirement 2026-05-15** — requests to `grok-4-fast` (and grok-4-1-fast / grok-4-0709 / grok-3 families) **now auto-redirect to grok-4.3 at Grok 4.3 pricing** (promptfoo, verified 2026-10-08; xAI itself was dissolved into SpaceXAI in May 2026 with a 12+ month api.x.ai transition window). Second pass fills the first pass's empty dossier: near-bar GPQA (85.3% #47 Vals), elite AIME (91.3% #25), good LCB (79.0% #73) — against weak SWE-V (45.4% #81), zero Vibe, HLE 19.1% #213, and AA II 17.9 #247. Included for historical comparison at the same scale.
- **Provider / access:** xAI API (historical; OpenRouter listing 404s). **Dead endpoint: redirects to grok-4.3.**
- **Release / knowledge:** **2025-09-19** (BenchLeader; the first pass's 2025-09-18 differs by a day — flag); knowledge cutoff not disclosed.
- **IDs:** `grok-4-fast` (retired; redirecting). No OpenCode Zen listing.
- **Context window:** 2,000,000 tokens (first-pass provider evidence; the one aggregator's 131K conflicting listing remains discarded); >128K requests priced at the higher tier.
- **Modalities:** text, image, and file (PDF) input; text output; reasoning and non-reasoning modes (the thinking config measures best on every AA row); tools, structured outputs, logprobs, seed.
- **Pricing (historical, at retirement):** $0.20 in / $0.50 out / $0.05 cached read per 1M — near-free economics at its tier; the price no longer applies (redirects bill at Grok 4.3 rates).
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

> Second pass adds the BenchLeader ladder (best = not-stated **54.0 #245/760**, last measured 2026-10-08 — retired but still tracked). Category scores: **Long context 63 (best)**, Human preference 60, Maths 61, Coding 52, Agents & tools 51, **Reasoning 47 (worst)**. The first pass's LLMPodium composite (16.6, low-confidence) is vindicated by the settled AA II 17.9 #247.

Agent / tool use:

- τ²-Bench: 65.8% #165 (thinking) / 63.7% #171 (no-reasoning) — mid; **Cybench: 30.0% #9** (good rank, weak absolute); Poker Agent 1034.3% #9
- **TB Hard: 18.9% #165 (thinking)** / 12.1% #208 — weak; TB 2.0 (Vals) 29.2% #45 — weak; TB 2.1 / τ³ / GDPval / Claw-Eval: still unmeasured; the first-pass "100% API reliability" Benchable row retained as suite-internal context

Reasoning / knowledge:

- GPQA Diamond: AA **84.8% #130 (thinking)** / Vals **85.3% #47** — near-bar, below it on both (gap filled)
- **HLE (AA): 19.1% #213 (thinking)** — far below the 40% reference; **CritPt 2.9% #172** (weak); Kagi 66.1% #38 (decent)
- **AIME (Vals): 91.3% #25 (thinking)** — excellent; MGSM 90.9% #31; LMArena Maths 1425 #112; ForecastBench 60.5% #27; DTBench 82.7% #99
- **AA Intelligence Index 17.9 #247 (thinking)** / 11.1 #352 (no-reasoning) — weak composite; ECI 144.2 #86
- Honesty weak: **non-hallucination 31.7% #205**; accuracy 22.8% #256; Omniscience −29.9 #271
- Knowledge: MMLU-Pro 79.7% #89; **MedQA 92.1% #35; CorpFin 66.9% #15; TaxEval 75.7% #13; CaseLaw 65.7% #10** (thinking ranks are good); LegalBench 80.6% #81; MedScribe 81.6% #49; MedCode 37.4% #70

Coding:

- LiveCodeBench (Vals): **79.0% #73 (thinking)** — decent; but **SWE-bench (Vals): 45.4% #81** — weak (gap filled); **Vibe Code v1.1: 0.0% #99** (dreadful — gap filled); WeirdML 42.9% #93; LMArena Coding 1458 #134 / WebDev 1159 #130 (weak preference); the first-pass Benchable Coding 94% (89th pct) retained as an internal-suite outlier with the 22nd-pctile slow duration caveat

Long context:

- 2M capacity; **AA-LCR: 73.7% #167 (thinking)** / 24.0% #401 (no-reasoning) — mid; **Fiction.LiveBench 120k: 75.0% #7** — good; Long context 63 is its best BenchLeader category; no MRCR/RULER rows.

Multimodal:

- MMMU-Pro: Vals 72.8% #59 / AA 61.8% #201 (thinking); **SAGE 29.8% #80** (weak grounding); MortgageTax 42.1% #86; text+image+PDF in, text out.

Preference/IF:

- IFBench 50.5% #170 (weak); LMArena preference weak-mid (Text 1419 #121, Multi-turn 1422 #121, Hard 1432 #133); Human preference 60 second-best category.

### Normalized scores (1–100)

- **Tool use: 50/100.** Lowered from 55: the measured rows landed weak — TB Hard 18.9% #165, TB 2.0 29.2% #45 — against mid τ² 65.8%, the rank-good Cybench #9/Poker #9, and no TB 2.1/τ³/GDPval coverage; Agents & tools 51.
- **Reasoning: 60/100.** Raised from 52: GPQA 84.8-85.3% #47-130 is near-bar, AIME 91.3% #25 is elite, Kagi 66.1% #38 and ForecastBench #27 are good, and the professional knowledge rows (CorpFin #15, TaxEval #13, CaseLaw #10) are strong — capped by HLE 19.1% #213, CritPt 2.9%, AA II 17.9 #247, and weak honesty (31.7% #205).
- **Context window: 92/100.** Lowered from 95: the 2M capacity stands but measured retrieval is mid (AA-LCR 73.7% #167) — Fiction.LiveBench #7 and Long-context-63-as-best-category keep it high.
- **Multimodal: 62/100.** Lowered from 72: MMMU-Pro 72.8% #59 (Vals) is decent, but SAGE 29.8% #80 and MortgageTax 42.1% #86 measured weak; text+image+PDF only.
- **Coding: 56/100.** Lowered from 62: the gaps filled badly — SWE-V 45.4% #81, Vibe 0.0% #99, WeirdML 42.9% — against decent LCB 79.0% #73; the Benchable 94% internal row does not carry a modern harness.
- **Cost efficiency: 97/100.** Held as historical: $0.20/$0.50 with $0.05 cached reads was near-free — but the price is dead; live requests redirect to Grok 4.3 at its rates.
- **Overall Score: 64/100.** (50 + 60 + 92 + 62 + 56) / 5 = 64.0, down from 67. Best-fit (historical): the ultra-cheap 2M-context volume worker — near-bar GPQA and elite AIME at $0.20/$0.50 was remarkable value in its day; retired 2026-05-15 and now redirecting to Grok 4.3, so this entry is comparison-only — do not build on it.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-25 report (BenchLeader ladder as of 2026-10-08 aggregating Artificial Analysis, Vals AI, Epoch AI Benchmarking Hub, Cybench, LMArena, Fiction.live, Andon Labs; DDG-lite searches surfacing the referencesource Azure retirement listing 2026-05-01, the promptfoo provider doc (verified 2026-10-08) documenting the 2026-05-15 slug retirement and auto-redirect to grok-4.3 at 4.3 pricing, and the hundredtabs xAI→SpaceXAI dissolution coverage; the first-pass Benchable/LLMPodium rows retained with their caveats where not contradicted); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
