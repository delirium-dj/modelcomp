# Gemini 3 Flash — findings by GPT 6.1 Sol

- Source: Google / historical `gemini-3-flash-preview`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3 Flash
- **Short description:** December 2025 multimodal Flash reasoning model; this assessment does not transfer later Flash capabilities [S1].
- **Provider / access:** Launch Gemini API/AI Studio, Vertex, Antigravity, Gemini CLI and consumer surfaces [S1]. Current exact-preview lifecycle not independently verified.
- **Release / knowledge:** December 17, 2025; cutoff unverified [S1,S2].
- **IDs:** Historical `gemini-3-flash-preview`; OpenCode `gemini-3-flash` route listed [S4]. Consumer free access is not a verified free API route.
- **Context window:** 1M; Vals output cap 65,536 [S2].
- **Modalities:** Text/image/audio/video/documents input, text output; reasoning/tool workflows [S1,S3].
- **Pricing (as of 2026-10-16):** $0.50 input/$3 output per million; launch audio input $1, gateway cache $0.05 [S1,S4]. Paid pricing scored.
- **Architecture:** Proprietary; parameter count unverified.

### Raw benchmarks found
Agent / tool use:
- Google later comparison: TB2.1 **58.0% Terminus-2**, MCP Atlas **62%**, Toolathlon **49.4%**, OSWorld **65.1%**, GDPval-AA **1204 Elo** [S3].
- Vals high/temp1/65,536 default: TB2.1 **53.93% ±1.30**, finance v2 **42.55% ±0.43**, legal-agent **0%** [S2]. Tau3/Tau2/Claw scores not verified.
Reasoning / knowledge:
- Primary GPQA **90.4%**, HLE **33.7% without tools** [S1]. Vals GPQA **87.88% ±1.64**, MMLU Pro **88.59% ±0.32** [S2]. Exact AA index/CritPt/Omniscience/MLCR not verified.
Coding:
- Vendor SWE Verified **78%**; Vals current **75.00% ±1.94**, historical **76.2%** [S1,S2]. Vals LiveCode **85.59% ±1.00**, Vibe v1.1 **20.20% ±3.95**, migration **6.39% ±1.09**, ProgramBench **0%** [S2]. DeepSWE/SciCode not verified.
Long context / multimodal:
- Google comparison MRCR v2 eight-needle **67.2% at128K average /22.1% at1M pointwise**, MMMU **81.2%** [S3]. Vals MMMU **87.63% ±0.79** [S2]. Different harnesses, not averaged.

### Evidence comparison and research trail
Three fresh Google queries: `Gemini 3 Flash official model`, `Gemini 3 Flash independent benchmarks`, `Gemini 3 Flash pricing limitations review`; all interstitials. Direct launch and Vals inspected; primary3.5 comparison and OpenCode catalog directly read earlier this session [S3,S4]. Vals profile accuracy50.61% is not a ranked current Index. Launch “30% fewer tokens” concerns typical traffic versus2.5Pro, not all agent tasks. Strong competitive programming/vision coexists with low app-building/migration/legal completion. Pointwise1M retrieval22.1% limits context reliability despite capacity. Preview/hosted identity and present lifecycle uncertainty retained.

### Normalized scores (1–100)
- **Tool use: 72/100.** Useful terminal/MCP, capped by finance/legal workflow weakness [S2,S3].
- **Reasoning: 82/100.** GPQA/HLE/MMLU support strong academic reasoning, capped by practical and retrieval gaps [S1–S3].
- **Context window: 95/100.** Verified1M capacity, no perfect-retrieval bonus [S2,S3].
- **Multimodal: 95/100.** Broad audio/video/image inputs, text-only output [S1,S3].
- **Coding: 77/100.** Useful SWE/LiveCode, capped by Vibe20.2/migration6.39/ProgramBench0 [S2].
- **Cost efficiency: 91/100.** Cheap$0.50/$3, separate audio/cache rates and task costs matter [S1,S4].
- **Overall Score: 84/100.** (72 + 82 + 95 + 95 + 77) /5 =84.2 →84; historical fit fast supervised multimodal work. Cost excluded.

### Sources
- [S1] https://blog.google/products/gemini/gemini-3-flash/ — primary launch.
- [S2] https://www.vals.ai/models/google_gemini-3-flash-preview — independent exact historical model/configuration.
- [S3] https://deepmind.google/models/model-cards/gemini-3-5-flash/ — primary3Flash comparison, directly read this session.
- [S4] https://opencode.ai/docs/zen — gateway route/rates, directly read this session.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three search attempts, primary/evaluator comparison. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
