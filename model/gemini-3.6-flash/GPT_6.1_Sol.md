# Gemini 3.6 Flash — findings by GPT 6.1 Sol

- Source: Google DeepMind / `gemini-3.6-flash`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.6 Flash
- **Short description:** 3.5 Flash-based multimodal workhorse with improved coding/retrieval and lower output price; not interchangeable with 3.7/3.8 [S1].
- **Provider / access:** Gemini API/AI Studio, Google Cloud, Antigravity and applications [S1].
- **Release / knowledge:** July 21, 2026. March 2026 cutoff, but some domains remain January 2025 per primary limitation statement [S1].
- **IDs:** `gemini-3.6-flash`, provider `opencode/gemini-3.6-flash`; no verified Free ID [S3].
- **Context window:** Primary 1M/64K output; Vals configured 65,536 output [S1,S2].
- **Modalities:** Text/image/audio/video/documents input, text output; thinking and tool calling [S1,S2].
- **Pricing (as of 2026-10-16):** $1.50 input/$7.50 output per million, cache $0.15 on OpenCode; paid [S1,S3].
- **Architecture:** Proprietary, based on 3.5; parameter count not verified [S1].

### Raw benchmarks found
Agent / tool use:
- Primary TB2.1 **78.0% Terminus-2**, GDPval-AA **v2 1421 Elo**, OSWorld-Verified **83.0%** [S1].
- Vals high/temp1/65,536 default: TB2.1 **73.78% ±1.63** across three full trials, Finance Agent v2 **56.30% ±0.18**, legal-agent **3.33% ±1.17**, legal research **25.00% ±3.01**, tax-agent **18.04% ±2.77** [S2]. Per-benchmark overrides possible.
- Tau3/Tau2, MCP Atlas, Claw-Eval/ClawProBench: no verified exact score found.

Reasoning / knowledge:
- Vals GPQA **93.43% ±1.33**, MMLU Pro **89.28% ±0.30**, LegalBench **86.70% ±0.41**, BioMysteryBench **58.52% ±1.61** [S2]. Profile accuracy **55.44%** is not a ranked current Index row. July Index **55.35%, #13/43** is dated [S2].
- HLE, CritPt, AA index, LCR/MLCR and Omniscience exact numbers not verified in inspected sources.

Coding:
- Primary SWE-Pro **58.7%**, DeepSWE v1.1 **49%**, MLE-Bench **63.9%** [S1].
- Vals SWE **79.60% ±1.80**, LiveCodeBench **88.08% ±0.94**, Vibe v1.1 **64.00% ±4.29**, migration **30.93% ±4.07**, ProgramBench **0%**, terminal-science **4.29% ±2.44** [S2]. SciCode not verified.
- Historical Vals Cyber Patch **84.75%** is a particular track, not current CyberBench v1.1 **45.36% ±3.75** overall [S2].

Long context / multimodal:
- Primary GDM-MRCR v2 8-needle **91.8% at 128K average /54.0% at 1M pointwise** [S1].
- Primary CharXiv **85.2% no tools /89.4% tools**; Vals MMMU Pro **88.38% ±0.77** [S1,S2]. Text-only output despite broad inputs.

### Evidence comparison and research trail
Three fresh Google searches: `Gemini 3.6 Flash official model`, `Gemini 3.6 Flash independent benchmarks`, `Gemini 3.6 Flash pricing review limitations`; all interstitials. Direct primary card and independent Vals read; OpenCode provider doc directly inspected earlier in this session [S3]. Primary explicitly notes hallucination, occasional slowness/timeouts and uneven cutoff coverage. Historical Vals Index-subset SWE **77.45%** and Vibe **57.88%** are not current full-suite 79.60/64.00 results. Its **16m27s** profile latency is workload-specific. Vendor 3.5 GDPval comparison **1349** on v2 differs from earlier model card **1656** on another snapshot; neither supports a fixed-score regression claim. Strong 128K gains do not imply reliable full million-token retrieval [S1,S2].

### Normalized scores (1–100)
- **Tool use: 82/100.** Good terminal/finance/OSWorld, capped by legal/tax complete workflows [S1,S2].
- **Reasoning: 86/100.** Strong GPQA/MMLU, capped by missing hardest-suite corroboration and uneven domain evidence [S2].
- **Context window: 95/100.** Official 1M, pointwise retrieval 54% prevents perfect-retrieval bonus [S1].
- **Multimodal: 95/100.** Broad audio/video/image/document input and strong visual tasks; text-only output [S1,S2].
- **Coding: 85/100.** Useful SWE/LiveCode/Vibe and better MLE, capped by ProgramBench/science/migration [S1,S2].
- **Cost efficiency: 78/100.** Moderate $1.50/$7.50 with caching; token/task behavior and timeouts still matter [S1,S3].
- **Overall Score: 89/100.** (82 + 86 + 95 + 95 + 85) / 5 = 88.6 → 89. Best fit fast supervised multimodal coding/document workflows; cost excluded.

### Sources
- [S1] https://deepmind.google/models/model-cards/gemini-3-6-flash/ — exact primary specs/results/limitations.
- [S2] https://www.vals.ai/models/google_gemini-3.6-flash — independent current suite and historical subset results.
- [S3] https://opencode.ai/docs/zen — provider rates/routes, directly read this session.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent web research, three search attempts and direct primary/evaluator comparison; subsets, metrics and dates retained. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
