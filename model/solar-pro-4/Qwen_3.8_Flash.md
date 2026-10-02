# Solar Pro 4 — findings by Qwen 3.8 Flash

- Source: Upstage AI (`upstageai/solar-pro-4`; API `upstage/solar-pro4`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's closed-weights agentic flagship (Aug 2026), tuned for document extraction and sequential tool-calling in production workflows. **Elite math** (AIME 95.3%) and solid GPQA 89.0 with **exceptional LiveCodeBench 87.8%** — but HLE 29.2 (well below the 40% frontier bar), CritPt 5.4 near-floor, and **confirmed text-only modality** (no vision input per catalog). Korean-market specialization (KMMLU-Pro 79.2). AA Index 28.1 from BenchLM vs vendor PR claim of 42 — significant lane disagreement.
- **Provider / access:** Upstage Solar API (`solar-pro4`, OpenAI-compatible); OpenRouter (`upstage/solar-pro4`); Kilo Gateway, NanoGPT routes; Hermes Agent integration. No Zen Free ID. Proprietary.
- **Release / knowledge:** **2026-08-06**; knowledge cutoff 2026-02 (Muse verified); 90%-off launch promo expired 2026-09-10.
- **IDs:** `upstageai/solar-pro-4` / OpenRouter `upstage/solar-pro4`.
- **Context window:** **524,288 total / 131,072 max out** (five provider catalogs agree); vendor blog cites "512K/128K baseline". In the 500K–1M v4 band.
- **Modalities:** **Text in / text out** — no vision/attachment input confirmed by catalog ("Vision input No" per Muse). Reasoning yes (configurable high/low effort); tool calls yes; structured output yes. Design Arena 1187 is text→code (website generation), not vision input. The curated `meta.json` "Unknown" is a placeholder — resolved here.
- **Pricing (as of 2026-10-02):** Upstage first-party **$0.30 in / $1.20 out / $0.06 cached** per 1M (AA confirms post-promo standard). OpenRouter budget routes **$0.09/$0.36**. 3× increase from Solar Pro 3's $0.15/$0.60. No free tier. Cost excluded from Overall.
- **Architecture:** proprietary dense (parameter count undisclosed); EN/KO/JA trilingual; dedicated/on-prem enterprise deploys available.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (BenchLM/AA panel, 2026-09-24) and `Muse_Spark_1.3.md` (Upstage official blog table + CrucibleMark + Seoul Economic Daily, 2026-09-21). **Lane note:** Upstage PR claims AA Index 42; BenchLM measures 28.1 — scoring at the independent figure. Vendor blog table is the primary source for instruct-level absolutes (TB, MCP, GDPval-AA v2 are Upstage's own numbers); BenchLM adds GPQA-D, HLE, CritPt, Omniscience, and LCB independently.

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (vendor + BenchLM agree); MCP Atlas: **61.4%** (same)
- GDPval-AA v2: **38.8%** (vendor, normalized percentage); BrowseComp: **49.2%** (vendor + BenchLM)
- Tau3-Banking: **23.0%** (vendor); APEX-Agents: **18.7%** (vendor + BenchLM — floor)
- CrucibleMark: Tool Execution **90/100** (ties best); ToolUse Score 70.54; CLI Benchmark 89.9 (Muse)
- τ²-bench / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (vendor) / **89.0–89.1%** (BenchLM/AA) — lanes agree
- AIME 2026: **95.3%** (vendor + BenchLM) — elite competition math
- HLE: **29.2%** (BenchLM/AA) — well below 40% frontier bar; no vendor HLE row
- MMLU-Pro: **86.3%**; KMMLU-Pro: **79.2%** (Korean specialization)
- CritPt: **5.4%** (BenchLM) — near-floor
- **AA-Omniscience: accuracy 18.9% / hallucination 24.4%** (BenchLM) — low accuracy but also low hallucination: model mostly declines rather than fabricating (epistemically honest, unlike hy3's 73%)
- AA Intelligence Index: **28.1** (BenchLM) vs **42** (vendor PR) — 14-pt lane disagreement scored at the independent figure
- AA-LCR: **71.0%** (vendor + BenchLM agree; Seoul Economic Daily confirms)
- BenchLM overall: unranked (partial coverage)

Coding:

- SWE-bench Verified: **70.6%** (vendor, OpenHands harness; +1.4 over Solar Open 2)
- LiveCodeBench: **87.8%** (BenchLM) — elite-tier, comparable to models 5× the param budget
- AA-SciCode: **44.6%** (BenchLM); DeepSWE / SWE-Pro: no verified row
- CrucibleMark Code Quality: 74.36 (Muse); ModelBench Coding Index #83/202

Long context:

- 524K window with AA-LCR 71.0% (vendor + press); 131K output; no MRCR/RULER rows.

Multimodal:

- **None** — confirmed text-only per catalog (Muse: "Vision input No"); Design Arena 1187 is text→HTML generation quality, not vision input.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Key scoring decisions: (a) multimodal at text-only floor per methodology, contradicting Kimi K3's generous 50 for Design Arena; (b) reasoning anchored at GPQA/HLE/CritPt absolutes rather than the disputed AA Index; (c) context credited for measured LCR 71 within the 500K–1M band.

- **Tool use: 68/100.** TB 57.0 and MCP 61.4 are mid-tier; GDPval-AA 38.8% normalized and BrowseComp 49.2% show reasonable agency; CrucibleMark 90/100 tool execution is an independent highlight. But APEX-Agents 18.7 and Tau3-Banking 23.0 reveal generalist long-horizon breakdowns. Between Kimi's 64 and Muse's 74.
- **Reasoning: 72/100.** GPQA 89.0 and AIME 95.3 are genuinely strong; MMLU-Pro 86.3 adds breadth. But HLE 29.2 misses the 40% frontier bar by 11 points, CritPt 5.4 is floor-level, and the independent AA Index 28.1 confirms mid-range reasoning (not the vendor's claimed 42). Omniscience 18.9% accuracy is low — it simply doesn't know much outside its training domain — but the 24.4% hallucination rate is at least honest.
- **Context window: 85/100.** 524K = lower end of the 500K–1M band (85–94); AA-LCR 71.0% is measured and supports the bottom of the band; 131K output is generous; no MRCR/RULER rows. Muse's 90 is slightly generous for a barely-500K window; Kimi's 74 underweights the band placement.
- **Multimodal: 15/100.** **Text-only confirmed** (no vision input per catalog) = band floor 10–20. Design Arena 1187 is code-gen from text, not multimodal understanding. Kimi K3's 50 for this dimension is a methodology error (crediting text→code output as if it were vision input). Muse's 15 and the v4 band agree.
- **Coding: 78/100.** LiveCodeBench 87.8 is exceptional (competitive with 1T+ models); SWE-V 70.6 is solid; SciCode 44.6 and absence of SWE-Pro/DeepSWE rows cap the upside. Kimi 74, Muse 82 — splitting at 78.
- **Cost efficiency: 82/100.** $0.30/$1.20 first-party is mid-range for a 500K-context proprietary model (the AA anchor puts $3/$15 at 60, so $0.30/$1.20 ≈ ~85); OpenRouter $0.09/$0.36 budget routes are genuinely cheap; no free tier. Cost excluded from Overall.
- **Overall Score: 64/100.** Mean of Tool 68, Reasoning 72, Context 85, Multimodal 15, Coding 78 = 318/5 = 63.6 → **64**. Best fit: **Korean/English/Japanese enterprise document workflows and competitive-math-heavy coding tasks** where text-only modality is acceptable and LiveCodeBench-tier code generation at 512K matters. The model's AIME 95.3 and LCB 87.8 are genuinely frontier-adjacent; the sub-40% HLE and CritPt floor confirm it's a specialist, not a generalist reasoner. Kimi K3's 67 is inflated by a multimodal scoring error; Muse's 69 leans on the vendor AA Index claim.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` BenchLM/AA panel + `Muse_Spark_1.3.md` (official Upstage blog table, CrucibleMark, Seoul Economic Daily, provider catalogs) + AA article confirming pricing. Curated `meta.json` is entirely "Unknown" placeholders — resolved via catalog evidence. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **Kimi K3's Multimodal 50** is a methodology misapplication — Design Arena is text→code, not vision input; (b) **AA Index 42 vendor claim vs 28.1 BenchLM measurement** — 14-point lane gap scored at the independent figure; (c) Omniscience 18.9% accuracy is low but the 24.4% hallucination rate is at least honest (contrasts hy3's 73%).
- Revisit trigger: if HLE settles independently above 35% (confirming vendor PR reasoning claims), or if Upstage ships a vision-capable Pro-variant; the AA Index lane war (28.1 vs 42) would benefit from a BenchLM full-coverage re-rating.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
