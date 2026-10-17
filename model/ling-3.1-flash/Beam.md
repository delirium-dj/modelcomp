# Ling 3.1 Flash — findings by Beam

- Source: InclusionAI/Ling 3.1 Flash, `inclusionai/ling-3.1-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's hybrid reasoning MoE (Sep 29, 2026): 560B total / 25B active, 262K context (1M targeted). Text in; text out. BenchLM 68.02 (#25 of 954). Terminal-Bench 2.1 81.2%, SWE-bench Pro 68.7%, BrowseComp 91.7%. AA Intelligence Index 41.1. $0.30/$0.90 per 1M.
- **Provider / access:** inclusionAI API; OpenRouter; Kilo Code.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff not stated.
- **IDs:** `inclusionai/ling-3.1-flash`
- **Context window:** 262,144 tokens (1M targeted); max output 32,768 (AIML API) / 235,929 (Kilo).
- **Modalities:** text in; text out; reasoning yes (hybrid, on by default); tool calling yes. Open weights (planned, not yet published).
- **Pricing (as of 2026-10-17):** $0.30 / 1M input, $0.90 / 1M output; paid.
- **Architecture:** Hybrid-linear MoE, 560B total / 25B active, 63 KDA + 9 Gated MLA layers, 512 routed experts, 262K context.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **62.7** (Estimated · #22/128)
- skillsBench: **68.7%** (InclusionAI model card)
- AutomationBench: **52.5%** (InclusionAI model card)
- CyberGym: **87.9%** (InclusionAI model card)
- Finance Agent v2: **57.9%** (InclusionAI model card)
- DRACO: **85.5%** (InclusionAI model card)
- Terminal-Bench 2.1: **81.2%** (InclusionAI model card)
- WideResearch: **83.3%** (InclusionAI model card)
- τ³-bench: **47.8%** (BenchLM)
- MCP Atlas: **83%** (BenchLM)
- BrowseComp: **91.7%** (BenchLM)
- GDPval-AA: **55.9%** (Artificial Analysis)
- terminalBench4: **46.0%** (BenchLM)
- SWE-Atlas Codebase QnA: **64.5%** (BenchLM)
- SWE Multilingual: **88.5%** (BenchLM)
- DeepSWE: **59.7%** (BenchLM)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **82.9** (Unranked · 2 rankable rows)
- AA-LCR: **83.0%** (Artificial Analysis)
- CritPt: **18.0%** (Artificial Analysis)
- HLE: **37.4%** (InclusionAI model card)
- AA-HLE: **39.4%** (Artificial Analysis)
- AA Intelligence Index: **41.1%** (Artificial Analysis)
- AA-Omniscience Index: **2.2%** (Artificial Analysis)
- AA-Omniscience Accuracy: **29.1%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **37.9%** (Artificial Analysis)
- HealthBench Professional: **65.3%** (InclusionAI model card)
- MultiChallenge: **69.8%** (BenchmarkList)

Coding:

- Coding public-lane (BenchLM): **57.2** (Estimated · #26/150)
- SWE-bench Pro: **68.7%** (InclusionAI model card)
- Terminal-Bench 2.1: **81.2%** (InclusionAI model card)
- SWE Multilingual: **88.5%** (BenchLM)
- DeepSWE: **59.7%** (BenchLM)
- SWE-Atlas Codebase QnA: **64.5%** (BenchLM)
- AA-SciCode: **54.1%** (Artificial Analysis)
- SWE-bench Pro: **68.7%** (InclusionAI model card)

Long context:

- 262K window (1M targeted); AA-LCR **83.0%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic lane #22/128 (62.7), Terminal-Bench 2.1 81.2%, CyberGym 87.9%, DRACO 85.5%, WideResearch 83.3%, MCP Atlas 83%, BrowseComp 91.7%, GDPval-AA 55.9%, Finance Agent 57.9%; caps at τ³-bench 47.8%.
- **Reasoning: 76/100.** HLE 37.4%, AA Intelligence 41.1%, AA-LCR 83.0%, CritPt 18.0%, MultiChallenge 69.8%; caps at CritPt 18.0%.
- **Context window: 66/100.** 262K window (1M targeted); AA-LCR 83.0%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 72/100.** SWE-bench Pro 68.7%, SWE Multilingual 88.5%, DeepSWE 59.7%, AA-SciCode 54.1%, coding lane #26/150 (57.2); caps at DeepSWE 59.7%.
- **Cost efficiency: 90/100.** Cheap $0.30/$0.90 per 1M.
- **Overall Score: 65.6/100.** Mean of five quality dims (BenchLM 68.02); best-fit for open-weight agentic coding at low cost. Vendor benchmarks only (no open weights published yet).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (InclusionAI HuggingFace, BenchLM, Kilo Code, AIML API, OpenCode data, BenchmarkList); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are vendor-reported; no open weights published yet.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>>2>