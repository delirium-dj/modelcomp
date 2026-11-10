# Pareto 26.10 Preview — findings by Iceman

- Source: Unbiased AI/Pareto 26.10 Preview
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Pareto 26.10 Preview is Unbiased AI’s composite multimodal preview model/system that routes/blends across underlying models for research, coding, and agent tasks, with performance-cost positioning emphasized.
- **Provider / access:** Unbiased AI platform/API (`pareto`). Local metadata lists `opencode/pareto-26.10-preview` and `noFreeId`.
- **Release / knowledge:** Model card page reviewed 2026-11-10 (updated October 2026; preliminary runs noted). Knowledge cutoff not explicitly stated.
- **IDs:** `pareto-26.10-preview`, `pareto`.
- **Context window:** 1,000,000 input; 131,000 max output (local metadata). Not independently verified from reviewed official page text.
- **Modalities:** Text and image input; text output (Unbiased model card states “Pareto accepts text and image inputs”).
- **Pricing (as of 2026-11-10):** $0.80 / 1M input, $0.03 / 1M cached input, $3.20 / 1M output (Unbiased model card/local metadata).
- **Architecture:** Composite/blended system selecting frontier and open models per request (Unbiased model card); underlying architecture not a single disclosed model.

### Raw benchmarks found

> Verified figures below are from Unbiased AI’s Pareto 26.10 model card (vendor-reported). The page marks Pareto 26.10 results as preliminary (October 1, 2026 run) and notes comparison caveats (different task sets/harnesses for other models).

Agent / tool use:

- Terminal-Bench 4.0: **50.8% solved** at **$0.48 per task** (preliminary; frontier chart)
- DeepSWE v1.1: **69.9%** at **$0.24 per task** (preliminary; benchmark table/chart)
- Agents’ Last Exam: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- HLE (text-only): **49.9% solved** at **$0.008 per task** (preliminary; frontier chart)
- GPQA Diamond: **no verified public score found** in reviewed sources (page notes GPQA-Diamond left out of frontier comparison due to missing comparable cost data)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- DeepSWE v1.1: **69.9%** at **$0.24 per task**
- Terminal-Bench 4.0: **50.8% solved** at **$0.48 per task**
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**

Long context:

- 1M input / 131K output stated in local metadata; no standalone long-context retrieval benchmark score extracted from reviewed page.

Multimodal:

- Text and image input supported (vendor page). No standalone multimodal benchmark scores extracted.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores are based on vendor-reported preliminary results and should be treated as provisional for a preview/composite system.

- **Tool use: 83/100.** Vendor-reported preliminary agentic/coding-task results (Terminal-Bench 4.0 50.8%, DeepSWE v1.1 69.9%) indicate capable tool-using performance at low cost, but coverage of broader agent benchmarks is limited.
- **Reasoning: 82/100.** Preliminary HLE (text-only) 49.9% suggests solid expert-reasoning capability, but breadth of verified reasoning benchmark evidence is limited.
- **Context window: 93/100.** 1M input / 131K output (as stated in metadata) is strong for long-context workflows, though not independently detailed on the reviewed model-card page.
- **Multimodal: 82/100.** Verified text+image input support provides multimodal utility, but no multimodal benchmark scores were extracted and the system is text-output only.
- **Coding: 86/100.** Preliminary DeepSWE v1.1 (69.9%) and Terminal-Bench 4.0 (50.8%) indicate strong coding/agentic coding value, but evidence is limited to vendor-reported results.
- **Cost efficiency: 94/100.** Very strong reported cost-per-task/performance positioning ($0.24/task DeepSWE, $0.48/task Terminal-Bench 4.0, $0.008/task HLE in preliminary runs) and moderate token pricing indicate high efficiency.
- **Overall Score: 85/100.** Mean of the five non-cost dims (83, 82, 93, 82, 86) = 85.2 → 85. Best fit as a cost-efficient preview composite for coding/research/agent tasks where preliminary vendor results and blend behavior are acceptable; independent verification remains limited.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Unbiased AI model card; scores are normalized 1–100 interpretations from vendor-reported preliminary figures, not official vendor scores.
- Reference URLs:
  - [Pareto 26.10 model card (Unbiased AI)](https://unbiased.ai/model-card/)
  - Local repository metadata consulted: `model/pareto-26.10-preview/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
