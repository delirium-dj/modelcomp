# Claude Sonnet 3.5 — findings by GLM 5.3

- Source: Anthropic (`anthropic/claude-3-5-sonnet`, snapshots `claude-3-5-sonnet-20240620` / `claude-3-5-sonnet-20241022`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-01 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.5 (Claude 3.5 Sonnet)
- **Short description:** Anthropic's mid-2024 workhorse Sonnet generation — the October 2024 snapshot introduced computer use; **retired from the Anthropic API on 2025-10-28** (both snapshots; long gone from every first-party surface, two full Sonnet generations have passed since). Second pass fills the thin first-pass dossier with the settled ladder (**46.4 #469/761, lower half**): the era's genuinely elite rows — **SWE-V any-scaffold 63.4% #22, Cybench 17.5% #12, TheAgentCompany 24.0% #6, MGSM 92.6% #15, MMLU 87.3% #2, ForecastBench 60.7% #22, Lech Mazur 80.3% #16** — against the 2026 floor (**GPQA 55-60%, HLE 4.1%, AIME 10%, OTIS 8.5%, AA II 7.9 #441**, bottom-tier arena ranks). Top use case (historical): legacy reference point; replaced by `claude-sonnet-4-6` and beyond.
- **Provider / access (historical):** formerly Anthropic API / Bedrock / Vertex (Messages API); both snapshots retired **2025-10-28**; no live provider rows exist (BenchLeader's price/speed fields are blank).
- **Release / knowledge:** snapshots **2024-06-20** (v1) and **2024-10-22** (upgraded, computer use); knowledge cutoff April 2024 (era-documented).
- **IDs:** `claude-3-5-sonnet-20240620` / `claude-3-5-sonnet-20241022` (both retired; `noFreeId`).
- **Context window:** 200K total / 64K max output (confirmed).
- **Modalities:** text + image in; text out; **non-reasoning** (no thinking mode — predates extended thinking); tool use / function calling; computer use beta (Oct 2024); JSON mode.
- **Pricing (historical):** $3 / $15 per 1M — the literal "$3/$15 ≈ 60" v1 methodology anchor; blended $6.00/M ("among the most expensive" for its measured standing); no longer purchasable first-party.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

> Second pass adds the settled BenchLeader profile (best **46.4 #469/761**, last measured 2026-10-09 — residual data; categories: **IF 56 (best)**, Human preference 55, Knowledge 47, Coding 45, Multimodal 45, Reasoning 42, Agents 43, Maths 43, **Composite 38 (worst)**).

Agent / tool use:

- **Cybench: 17.5% #12** (era-elite rank); **TheAgentCompany: 24.0% #6**; METR Time Horizons 45.2% #28; BALROG 32.6% #15 — the era-elite agent rows
- BrowseComp 0.9% #19; Terminal-Bench / τ² / τ³ / GDPval / Claw-Eval / MCP-Atlas: still unmeasured (predates them all); tool calling and the first computer-use beta remain documented capabilities (retained)

Reasoning / knowledge:

- GPQA Diamond: Epoch 55.3% #200 / AA 59.9% #370 / Vals 59.3% #105 / HELM 56.5% #30 — below the mid band on every harness (confirms the first-pass 59.4%)
- **HLE: Scale-CAIS 4.1% #44 / AA 3.7% #558** — dreadful (gap filled); SimpleBench 41.4% #58; DTBench 67.8% #143; **ForecastBench 60.7% #22** (good — the era's calibration strength)
- Math: **MGSM 92.6% #15** (era-elite); MATH 500 72.4% #47; MATH L5 57.0% #48; **AIME (Vals) 10.0% #85** (weak); **OTIS 8.5% #224** (dreadful); Omni-MATH 27.6% #49
- **AA II 7.9 #441** (dreadful — the floor of the Claude family); ECI 133.6 #133; **MMLU 87.3% #2** (Epoch — era-elite); MMLU-Pro 78.4% #98; MedQA 83.2% #61; TaxEval 70.2% #90; CorpFin 53.6% #94; FrontierMath v2 2.07%/0% (retained)
- HELM era-ranks: IFEval 85.6% #18, WildBench 79.2% #37, HELM mean 65.3% #34

Coding:

- **SWE-bench Verified (any scaffold): 63.4% #22** — the settled scaffold-inclusive read sits well above the widely-quoted 49% bash-only-era figure (scaffold spread, both retained); **Aider Polyglot 51.6% #24** (decent era rank); CadEval 48.0% #7 (niche)
- Weak: LiveCodeBench (Vals) 49.6% #112; WeirdML 40.0% #105; GSO-Bench 4.6% #28; LMArena Coding 1436 #158

Long context:

- 200K/64K; no MRCR/RULER rows (unchanged); no AA-LCR row exists for this ID.

Multimodal:

- MMMU 68.3% #24; MMMU-Pro: official 51.5% #16 / Vals 68.8% #70; **Video-MME 60.0% #26 — video input confirmed** (the first pass lacked any video row); GeoBench 62.0% #17; MortgageTax 64.1% #47; LMArena Vision 1125 #120 (bottom); VISTA 38.7% #40; VPCT 33.0% #29. Text+image in, text out.

Preference/safety:

- **Lech Mazur Creative Writing 80.3% #16** (era-elite); LMArena Text 1374 #175, Multi-turn 1390 #163, Creative 1371 #142 — bottom-tier ranks now; Mask 72.3% #29; FORTRESS 13.0% #61 (weak safety balance).

### Normalized scores (1–100)

- **Tool use: 48/100.** Lowered from 50: the era-elites (Cybench #12, TheAgentCompany #6, METR #28, BALROG #15) hold — but BrowseComp 0.9%, the complete absence of TB/τ/GDPval rows, and Agents-43 confirm the 2024-era agent stack sits far below today's.
- **Reasoning: 54/100.** Lowered from 55: GPQA 55-60% below-mid on every harness, HLE 4.1%, AIME 10%, OTIS 8.5%, and AA II 7.9 #441 — offset by MGSM 92.6% #15, ForecastBench 60.7% #22, MMLU #2, and HELM-era top-20s.
- **Context window: 70/100.** Held: the 200K anchor; no retrieval rows exist.
- **Multimodal: 62/100.** Lowered from 65: MMMU 68.3% #24 and the confirmed video input (Video-MME 60% #26) are decent — but MMMU-Pro 51.5%, Vision 1125 #120, and Multimodal-45 measure the era's floor in depth.
- **Coding: 58/100.** Lowered from 62: the any-scaffold SWE-V 63.4% #22 and Aider #24 re-rate the era's coding higher than the 49% quote suggested — but LCB 49.6% #112, WeirdML 40%, and GSO 4.6% cap it.
- **Cost efficiency: 60/100.** Held as historical: $3/$15 is the methodology's own anchor; retired — no batch/caching discounts exist anywhere.
- **Overall Score: 58/100.** (48 + 54 + 70 + 62 + 58) / 5 = 58.4 → 58, down from 60. Best-fit (historical): the October-2024 computer-use pioneer whose era-elites (any-scaffold SWE-V #22, Cybench #12, TheAgentCompany #6, Lech Mazur #16, MGSM #15) survive in the record — but GPQA at 55-60%, HLE at 4.1%, AA II 7.9, and bottom-tier arena ranks show the two-year drift; retired since 2025-10-28, with Sonnet 4.6 → 5.5 as the migration path.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-01 report (the settled BenchLeader profile as of 2026-10-09 — blank price/speed fields confirming zero live providers — aggregating Epoch AI Benchmarking Hub incl. SWE-bench Verified any-scaffold, Artificial Analysis, Vals AI, HELM Capabilities, Scale AI SEAL incl. VISTA/FORTRESS/Mask, Cybench, TheAgentCompany, METR, BALROG, Aider leaderboard, Lech Mazur, ForecastBench, Kaggle; the retirement history from this cycle's Anthropic deprecation passes; the first-pass rows retained with the SWE-V 49%-vs-63.4% scaffold spread flagged); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
