# Ling 3.1 Flash — findings by GLM 5.3 Flash

- Source: InclusionAI (`ling-3.1-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's hybrid-reasoning mixture-of-experts Flash model for coding and tool-using agents, launched 2026-10-02 as the successor to Ling 3.0 Flash. BenchLM now computes an overall (62.06, #46 of 889) — a large jump over the 3.0 generation. BenchLM additionally ties launch-screenshot benchmark rows (September 30, 2026) to this model under the "Ant Ling" attribution — same family, one model.
- **Provider / access:** OpenRouter `inclusionai/ling-3.1-flash` (Chat Completions API); Novita `inclusionai/ling-3.1-flash-20261002` (262K context, $0/$0); Vercel AI Gateway `ling-3.1-flash` listing (BenchLM's official-card pointer); OpenCode Zen free tier `ling-3.1-flash-free`.
- **Release / knowledge:** Released 2026-10-02 (Benchable model page; models.dev listing). Launch-screenshot benchmarks surfaced September 30, 2026. Knowledge cutoff not published.
- **IDs:** `inclusionai/ling-3.1-flash` (OpenRouter); Zen Free ID `ling-3.1-flash-free` exists (models.dev + Zen catalog, $0.00/$0.00).
- **Context window:** 262K total (BenchLM concurs; Benchable spec sheet, Novita endpoint 262K, models.dev 262,144/32,768). Max output 32,768 per models.dev.
- **Modalities:** text in/out only; reasoning yes (hybrid instant/reasoning); tool calls yes (tools, tool choice supported); structured outputs not listed on Benchable's feature set.
- **Pricing (as of 2026-10-11):** $0 in / $0 out on the Zen Free ID and on Novita's endpoint (Benchable "Price data is currently unavailable, suggesting potential free-tier usage"; Novita $0/$0). Long-term paid pricing not yet published.
- **Architecture:** ~560B total / 25B active per token MoE (parameter count rumoured per Benchable; vendor spec sheet not published); BenchLM labels the source type "proprietary" while the Ling family historically ships MIT open weights — open-weights status unverified for this exact model.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: normalized **56.1%** (AA, independent — fills the gap the prior pass marked missing; solid for the class)
- skillsBench: **68.7%**; AutomationBench: **52.5%**; CyberGym: **87.9%**; Finance Agent v2: **57.9%**; DRACO: **85.5%** (Ant Ling launch screenshots — corroborated by benchlm); TB2.1: **81.2%**; MCP Atlas: **83.0%**; BrowseComp: **91.7%**; WideResearch: **83.3%**; GDPval-AA: **1673**; ττ³-bench: **47.8%** (InclusionAI HF model-card chart via benchlm.ai, added 2026-10-16 — strong agentic fills)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench: no verified public score found (TB 4.0 below is the measured terminal number)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **41.1** (AA — fills the index gap); AA-HLE: **39.4%** (AA — fills the HLE gap, just under the 40% bar)
- AA-LCR v1.1: **83.0%** (AA — fills the long-context gap, strong); CritPt: **18.0%** (AA — fills the gap, reasonable)
- AA-Omniscience: **29.1% accuracy / 37.9% non-hallucination row / 2.2 index** (AA — weak)
- Benchable Reasoning: **78.0%** (50th pct); Mathematics: **91.9%**; Instruction Following: **84.0%** (in-house harness, prior pass); HealthBench Professional: **65.3%** (corroborated)
- HLE (vendor chart): **37.4%** (added 2026-10-16 — corroborates AA 39.4%); GPQA Diamond: no verified public score found

Coding:

- AA-SciCode: **54.1%** (AA, independent — fills the SciCode gap; decent)
- Benchable Coding: **95.0%** (in-house, prior pass); Terminal-Bench 4.0: **46.0%** (HF card chart; the prior launch-screenshot read of 40.4% conflicts — both listed); SWE-Atlas Codebase QnA: **64.5%** (HF card chart; prior read 55.9% — conflict, both listed); SWE-bench Pro: **68.7%**; SWE Multilingual: **88.5%**; DeepSWE: **59.7%** (HF card chart, added 2026-10-16 — coding gaps filled)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 83.0% is the first measured long-context number (strong); no MRCR/RULER value found for the 262K window

Multimodal:

- Text-only input and output per Benchable and the Zen listing

### Normalized scores (1–100)

- **Tool use: 72/100.** (Was 66.) The 2026-10-16 HF-card fills are decisive: TB2.1 81.2%, MCP Atlas 83.0%, BrowseComp 91.7%, WideResearch 83.3% and GDPval 1673 (55.9% normalized) document a genuinely strong agentic tier; ττ³ 47.8% and the missing Tau3/Tau2 keep it below the frontier band.
- **Reasoning: 75/100.** (Was 74.) The AA board fills every prior gap: Index 41.1, HLE 39.4% (AA) now vendor-corroborated at 37.4%, AA-LCR 83.0% (strong) and CritPt 18.0% — docked for the weak Omniscience accuracy (29.1%) and the still-missing GPQA.
- **Context window: 72/100.** 262K total (BenchLM concurs) lands in the 200K–500K tier; AA-LCR 83.0% is the first measured long-context evidence (strong); 32K max output is a noted caveat.
- **Multimodal: 15/100.** Text-only input and output per Benchable and the Zen listing.
- **Coding: 76/100.** (Was 70.) The 2026-10-16 HF-card fills upgrade the coding story: SWE-bench Pro 68.7%, SWE Multilingual 88.5%, TB4 46.0% and DeepSWE 59.7% alongside AA-SciCode 54.1% and Benchable 95.0% — still missing SWE-bench Verified/LiveCodeBench keeps it below the frontier package.
- **Cost efficiency: 100/100.** $0 input and output on the Zen Free ID (`ling-3.1-flash-free`) and Novita's endpoint during the free period; long-term paid pricing and any training-data caveats are not yet published.
- **Overall Score: 62.0/100.** (Was 59.4.) Mean of the five quality dims per `RULES.md` (Cost excluded): (72 + 75 + 72 + 15 + 76) / 5 = 310/5 = 62.0 — raised again on the 2026-10-16 re-check as the HF model-card chart fills the terminal/coding/agentic gaps. Best fit: a zero-cost text agent for agentic coding and tool loops (TB2.1 81.2%, MCP Atlas 83%) — far stronger measured profile than the 3.0 generation, though still text-only and lacking SWE-bench Verified/LiveCodeBench verification.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: the freshly fetched benchlm.ai Ling 3.1 Flash page with AA board citations (now computing 62.06), the prior 2026-10-03 pass on Benchable/BenchLM launch-screenshot rows; 2026-10-16 re-check: BenchLM 27-row refresh adds the InclusionAI HF model-card chart rows (TB2.1 81.2%, MCP Atlas 83%, SWE Pro 68.7%, SWE-ML 88.5%, TB4 46.0%, DeepSWE 59.7%, HLE 37.4%, BrowseComp 91.7%) — tool 66 to 72, reasoning 74 to 75, coding 70 to 76, overall 59.4 to 62.0); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
