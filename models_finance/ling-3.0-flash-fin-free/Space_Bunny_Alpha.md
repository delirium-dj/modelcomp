# Ling 3.0 Flash Fin — findings by Space Bunny Alpha

- Source: InclusionAI / Ant Group (`inclusionAI/Ling-3.0-flash-Fin`; OpenCode Zen free route)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin (Free tier)
- **Short description:** Finance-tuned MoE model from InclusionAI / Ant Group for source-grounded financial research, long-horizon tool use, valuation work, and coding-style agent execution. Built on Ling 3.0 Flash; the sibling Ling-3.0-flash-VL is the image/video-capable variant, not this one.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash-Fin`; OpenCode Zen `opencode/ling-3-0-flash-fin-free`; OpenRouter `inclusionai/ling-3.0-flash-fin:free` (rate-limited free endpoint, zero token price); OpenAI-compatible local serving examples use Chat Completions and tool-call parsers. Artificial Analysis serves measurements from the single first-party InclusionAI API route.
- **Release / knowledge:** Release dates disagree across sources and are reported as found: Artificial Analysis says **2026-09-11**, OpenRouter lists the free variant at **2026-08-27**, and the Hugging Face repository was created **2026-09-03**. No reliable knowledge cutoff is published on the model card.
- **IDs:** `inclusionAI/Ling-3.0-flash-Fin`; `opencode/ling-3-0-flash-fin-free`; `inclusionai/ling-3.0-flash-fin:free`.
- **Context window:** 262,144 tokens (256K marketed; Artificial Analysis shows 262k and rounds it to 260K on its own text).
- **Modalities:** Text input/output; reasoning is enabled by default; tool calls and JSON/structured output are supported. Artificial Analysis lists text-only input and explicitly answers "no" to image input.
- **Pricing (as of 2026-09-29):** The Zen route is still listed as a limited-time free promotion, with **Free input / Free output / Free cache read** on the current Zen model table. OpenRouter's `:free` endpoint is likewise zero-priced and rate-limited. Artificial Analysis measures the paid InclusionAI API at **$0.07 input / $0.22 output per 1M** (blended 7:2:1 = $0.05) with an **80% cache discount**; provider rates vary. OpenCode's free routes carry a data-retention exception — data collected during the promotion may be used to improve the model.
- **Architecture:** Open-weight mixture of experts, 124B total parameters and 5.1B active parameters; MIT license. On the Artificial Analysis Intelligence-vs-Active-Parameter chart it sits on the Pareto frontier.
- **Performance (Artificial Analysis, first-party API):** **165.2 output tokens/second, rank #7/65** in its class (class median 129.1), and **TTFT 1.73 s** (better than the 2.19 s class median). It is however **very verbose**: 250M output tokens across the Intelligence Index, rank #9/65, against a 100M class median.

### Raw benchmarks found

Agent / tool use:

- Finance Agent v2: **59.8%** (secondary exact reproduction of the InclusionAI launch chart, as indexed by BenchLM)
- APEX-Agents: **29.2%** (secondary exact reproduction of the InclusionAI launch chart, as indexed by BenchLM)
- SpreadsheetBench 2: **21.8%** (secondary exact reproduction of the InclusionAI launch chart, as indexed by BenchLM)
- **Artificial Analysis Agentic Index: 27.9** (new since 2026-09-24; sourced from Artificial Analysis and republished on the OpenRouter model page). This is the first independent agentic number for this checkpoint and it is **low**, which lines up with the 29.2% APEX figure rather than with the 59.8% Finance Agent one.
- Artificial Analysis GDPval-AA: **29.6%** (new since 2026-09-24, same source path).
- FinFIRST, FinSearchComp Verified, FinCRAFT, and τ³-Banking are named in the official model card, but their exact values were not exposed in the reviewed text; **no verified public exact score found** for those rows.
- Terminal-Bench, Toolathlon, Claw-Eval, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23**, rank **#3/65** in its class — **unchanged from the 2026-09-24 reading of 23**, now explicitly on **index version v4.3.2** (AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1). The class median is 8, so 23 is well above average for open-weight models of this size.
- Artificial Analysis **Finance & Accounting Index: 24** (7 evaluations: AA-Omniscience, GDPval-AA v2.1, AA-Briefcase v1.1, HLE, AutomationBench-AA, AA-LCR v1.1, GDP.pdf).
- HLE: **22.6%**; CritPt: **2.6%**; AA-Omniscience Accuracy: **17.9%**; AA-Omniscience Non-Hallucination Rate: **60.5%** (all new since 2026-09-24, sourced from Artificial Analysis via OpenRouter). **CritPt 2.6% is a real weakness** — near-total failure on physics-reasoning precision — and Omniscience accuracy under 20% is a hallucination risk that belongs in any financial-research deployment.
- GPQA Diamond: **no verified public exact score found**

Coding:

- **Artificial Analysis SciCode: 42.4%** and **AA Coding Index: 55.6** (new since 2026-09-24, same source path). SciCode at 42.4% is a respectable research-code score for an 11B-class-active MoE.
- LiveCodeBench v5, SWE-bench, Vibe Code Bench, and DeepSWE: **no verified public exact score found** for this exact Fin checkpoint.
- SpreadsheetBench 2 (21.8%) remains useful evidence for spreadsheet operations but is not a general coding benchmark.

Long context:

- **Artificial Analysis AA-LCR: 73.7%** (new since 2026-09-24). This is the first retrieval-at-length measurement for this model and it is strong — well clear of the 52.0% AA-LCR recorded for much larger open-weight competitors.
- No separate MRCR, RULER, or GraphWalks score was found. The official card documents a 262K context window and long-horizon financial-document workflows.

Sources consulted: [official Ling-3.0-flash-Fin model card](https://huggingface.co/inclusionAI/Ling-3.0-flash-Fin), [Artificial Analysis Ling-3.0-flash-Fin](https://artificialanalysis.ai/models/ling-3-0-flash-fin), [Artificial Analysis — Ant Group releases finance-focused Ling-3.0-flash-Fin](https://artificialanalysis.ai/articles/ant-group-releases-finance-focused-ling-3-0-flash-fin), [OpenRouter Ling 3.0 Flash Fin (free)](https://openrouter.ai/inclusionai/ling-3.0-flash-fin:free), [BenchLM Ling 3.0 Flash Fin](https://benchlm.ai/models/ling-3-0-flash-fin), and the [OpenCode Zen documentation](https://opencode.ai/docs/zen/), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 52/100.** Unchanged. Finance Agent v2 59.8% and documented tool use are positive, but the first independent agentic number to appear for this checkpoint — **AA Agentic Index 27.9** — plus APEX-Agents 29.2% and SpreadsheetBench 2 21.8% show uneven complex execution. Half of the agentic benchmark family is strong and half is weak; 52 is the midpoint that reflects both.
- **Reasoning: 58/100.** Unchanged. AA Intelligence Index 23 (class median 8), the Finance & Accounting Index 24, GDPval-AA 29.6% and HLE 22.6% support genuinely useful finance-domain reasoning. The cap is knowledge hygiene: **CritPt 2.6%** and **Omniscience Accuracy 17.9%** are poor, and there is still no public GPQA Diamond value.
- **Context window: 85/100.** **Up from 82.** The 262K window is unchanged, but it is no longer an unmeasured claim: **AA-LCR 73.7%** is now a real long-context reasoning measurement on the model, which moves this dimension out of the "documented size only" band.
- **Multimodal: 15/100.** Unchanged. Artificial Analysis explicitly answers "no" to image input; the text-only floor applies. The image/video sibling is Ling-3.0-flash-VL, a different model.
- **Coding: 55/100.** **Up from 50.** SciCode 42.4% and AA Coding Index 55.6 are now measured on this exact checkpoint, so the score reflects evidence rather than the absence of evidence. It stops well short of dedicated coding models because SWE-bench, LiveCodeBench and DeepSWE are still unpublished.
- **Cost efficiency: 100/100.** Unchanged. The Zen free route is still live on the current OpenCode model table (Free / Free / Free) alongside the zero-priced, rate-limited OpenRouter `:free` endpoint, and the paid route is one of the cheapest measured. Promotion limits and the data-use exception apply.
- **Overall Score: 53.0/100.** (52 + 58 + 85 + 15 + 55) / 5 = 53.0 — **up from 51.4**, entirely because Context window (82 → 85) and Coding (50 → 55) gained measured evidence; no dimension was cut. Best fit: financial research and tool-heavy execution where finance specialization matters more than general coding breadth. Pair it with retrieval or a second pass for anything physics-adjacent or precision-critical: CritPt 2.6% and 17.9% Omniscience accuracy are the two numbers to design around.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of the official InclusionAI model card, Artificial Analysis (index v4.3.2) including the per-evaluation breakdown republished by OpenRouter, the Artificial Analysis release article, BenchLM, and OpenCode/OpenRouter documentation; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- **Re-validation 2026-09-29 (MATERIAL):** the AA Intelligence Index itself did **not** move (still 23, still #3/65), but the per-evaluation breakdown (Agentic Index 27.9, Coding Index 55.6, SciCode 42.4%, HLE 22.6%, GDPval-AA 29.6%, CritPt 2.6%, AA-LCR 73.7%, Omniscience 17.9% / 60.5%), the speed/TTFT pair (165.2 t/s, 1.73 s) and the release-date discrepancy all became available. Overall 51.4 → 53.0.
- Future sources: add a new file next to this one, e.g. `Ling_3_0_Flash_Fin_Recheck.md`, using the same headings.
