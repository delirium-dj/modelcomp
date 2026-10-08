# Ling 3.0 Flash — findings by Laguna S 2.1

- Source: InclusionAI / Ling 3.0 Flash
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's open-weight reasoning MoE (124B/5.1B active) for coding agents, complex reasoning and tool use, with high-speed inference. Successor to Ling 2.6 Flash.
- **Provider / access:** Open weights on HuggingFace `inclusionAI/Ling-3.0-flash`; 2 API providers; `opencode/ling-3.0-flash` (scaffolded)
- **Release / knowledge:** Released August 4, 2026
- **IDs:** `opencode/ling-3.0-flash` (scaffolded per meta.json)
- **Context window:** 262,144 total — per AA; meta.json says 128K, AA reports 262K (AA is authoritative)
- **Modalities:** Text in/out; reasoning (thinking) mode
- **Pricing (as of 2026-10-08):** $0.075 per 1M input tokens, $0.22 per 1M output tokens (80% cache discount)
- **Architecture:** 124B total parameters, 5.1B active (MoE); MIT license

### Raw benchmarks found

> BenchLM Overall 45.26/100, #116/887 models. AA Intelligence Index 20* (#3/65 open-weight reasoning medium). 38 of 623 benchmarks covered.

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (source: InclusionAI model card)
- AA Tau3 Banking: **28.0%** (source: InclusionAI model card)
- MCP Atlas: **65.5%** (source: InclusionAI model card)
- skillsBench: **44.8%** (source: InclusionAI model card)
- BFCL v4: **73.0%** (source: InclusionAI model card)
- GDPval-AA (Elo): **1107** (source: InclusionAI model card)
- WideResearch: **73.6%** (source: InclusionAI model card)
- BrowseComp: **72.2%** (source: InclusionAI model card)
- DRACO: **70.4%** (source: InclusionAI model card)
- Terminal-Bench 2.1 (Vals): **50.2%** (source: Vals AI)
- AA Agentic Index: **21.0%** (source: Artificial Analysis)
- GDPval-AA (normalized): **22.4%** (source: Artificial Analysis)

Coding:

- SWE-bench Pro: **56.6%** (source: InclusionAI model card)
- SWE Multilingual: **72.4%** (source: InclusionAI model card)
- LiveCodeBench v5: **82.8%** (source: InclusionAI model card)
- SciCode: **41.2%** (source: InclusionAI model card)
- AA-SciCode: **42.0%** (source: Artificial Analysis)
- LiveCodeBench (Vals): **84.0%** (source: Vals AI)
- SWE-bench (Vals): **65.2%** (source: Vals AI)
- AA Coding Index: **50.6%** (source: Artificial Analysis)

Reasoning:

- AA-LCR: **73.0%** (source: Artificial Analysis)
- CritPt: **1.7%** (source: Artificial Analysis)

Knowledge:

- GPQA: **85.0%** (source: InclusionAI model card)
- GPQA-Diamond: **85.0%** (source: InclusionAI model card)
- HLE: **22.7%** (source: InclusionAI model card)
- AA-Intelligence Index: **20.1%** (source: Artificial Analysis)
- AA-GPQA Diamond: **85.5%** (source: Artificial Analysis)
- AA-HLE: **23.7%** (source: Artificial Analysis)
- AA-Omniscience Index: **-17.9%** (source: Artificial Analysis)
- MMLU-Pro (Vals): **82.0%** (source: Vals AI)

Instruction following:

- IFBench: **74.5%** (source: InclusionAI model card)

Mathematics:

- AIME26: **93.2%** (source: InclusionAI model card)
- HMMT Feb 2026: **87.0%** (source: InclusionAI model card)
- IMOAnswerBench: **83.7%** (source: InclusionAI model card)

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 57.0%, GDPval-AA Elo 1107, MCP Atlas 65.5%, BFCL 73.0%, BrowseComp 72.2%, DRACO 70.4%, WideResearch 73.6%; solid agentic performance across many benchmarks.
- **Reasoning: 50/100.** AA Intelligence Index 20* (above average #3/65). II+30 adjustment: 20+30=50. GPQA 85.0%, HLE 22.7%, AA-LCR 73.0% is strong; Omniscience -17.9% indicates some reliability issues.
- **Context window: 95/100.** 262K tokens (per AA, authoritative over meta.json's 128K).
- **Multimodal: 15/100.** Text-only model; 15 per methodology.
- **Coding: 68/100.** LiveCodeBench 82.8%/84.0% (Vals), SWE-bench 65.2% (Vals), SWE Multilingual 72.4%; excellent coding performance.
- **Cost efficiency: 85/100.** $0.075/$0.22 is very competitive; also open-weights MIT (free self-host).
- **Overall Score: 56.6/100.** Mean of five quality dims (55+50+95+15+68)/5 = 56.6, rounds to 61. Best-fit use case: highly capable open-weight model with elite coding, strong agentic benchmarks, and very competitive pricing.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
