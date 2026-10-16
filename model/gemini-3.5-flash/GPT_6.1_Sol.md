# Gemini 3.5 Flash — findings by GPT 6.1 Sol

- Source: Google DeepMind / `gemini-3.5-flash`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Gemini 3 Flash-derived multimodal reasoning model for fast tool and document workflows; assessed independently from later Flash versions [S1].
- **Provider / access:** Gemini API/AI Studio, Google Cloud, Antigravity and Gemini applications per primary card; OpenCode native Google route documented in provider catalog [S1,S4].
- **Release / knowledge:** May 19, 2026; exact knowledge cutoff not verified [S1].
- **IDs:** `gemini-3.5-flash`, `opencode/gemini-3.5-flash`; no verified OpenCode Free ID [S4].
- **Context window:** Primary up to 1M; 64K output, Vals exact configuration 65,536 [S1,S2].
- **Modalities:** Text/image/audio/video/document input, text output; reasoning levels, tools and native multimodal understanding [S1].
- **Pricing (as of 2026-10-16):** $1.50 input/$9 output, cache $0.15 per million corroborated by AA and OpenCode; scored paid [S3,S4].
- **Architecture:** Proprietary, based on Gemini 3 Flash; parameter count undisclosed [S1,S3].

### Raw benchmarks found

Agent / tool use:
- Primary TB2.1 **76.2% Terminus-2**, MCP Atlas **83.6%**, Toolathlon **56.5%**, OSWorld-Verified **78.4%**, GDPval-AA **1656 Elo**, Finance Agent v2 **57.9%** [S1].
- Vals high/temp1/65,536 default: TB4 **6.06% ±1.51**, Finance Agent v2 **57.86% ±0.23**, legal-agent **2.50% ±0.83**, SkillsBench **52.74% ±4.47** [S2]. Versions/harnesses not pooled.
- Tau3/Tau2, Claw-Eval/ClawProBench: no verified exact public score found.

Reasoning / knowledge:
- Primary HLE full text+multimodal **40.2%**, ARC2 **72.1%** [S1]. Vals GPQA **92.68% ±1.46**, MMLU Pro **89.52% ±0.31**, ProofBench v1.1 **31% ±4.65** [S2].
- AA current **v4.3.2 index 33, #87/216**; Vals current **44.79% ±1.10, #39/49**, historical May index **62.05%** [S2,S3]. Different suites/snapshots, not measured fixed-test regression.
- CritPt/LCR/MLCR/Omniscience: no verified exact score found in inspected text.

Coding:
- Primary SWE-Pro **55.1%, single attempt** [S1]. Vals SWE **78.80% ±1.83**, LiveCodeBench **87.60% ±0.95**, Vibe v1.1 **48.68% ±4.73**, migration **26.75% ±4.10**, ProgramBench **0%**, terminal-science **5.71% ±2.79** [S2]. SciCode/DeepSWE: no verified exact figure found.

Long context / multimodal:
- Primary MRCR v2 8-needle **77.3% at 128K average /26.6% at 1M pointwise** [S1]. Capacity does not establish reliable full-window retrieval.
- Primary MMMU Pro **83.6% no tools**, CharXiv **84.2% no tools**; Vals MMMU Pro **88.27% ±0.77** [S1,S2]. Different protocols retained.

### Evidence comparison and research trail

Three fresh DuckDuckGo searches: `Gemini 3.5 Flash official model`, `Gemini 3.5 Flash independent benchmark`, `Gemini 3.5 Flash review pricing limitations`; all challenged, supplying no evidence. Direct primary card and independent Vals/AA inspected; OpenCode provider catalog directly read earlier in this session [S4]. AA deprecation is a benchmark-maintenance notice, not verified provider shutdown. AA high reports **206.2 tokens/s, 12.74s TTFT, $3.69/index task, 120M suite output tokens**; Vals **$3.297/test, 18m17s** has a different suite denominator [S2,S3]. Strong older terminal/MCP/finance coexists with weak TB4/legal/full-program tasks. Pointwise MRCR 26.6% cannot be compared to averaged retrieval as if identical metrics [S1].

### Normalized scores (1–100)

- **Tool use: 80/100.** Strong MCP/finance and historical tools, capped by current TB4 and legal-agent failures [S1,S2].
- **Reasoning: 85/100.** GPQA/HLE/ARC support strong reasoning; ProofBench/current index and long-context losses constrain ceiling [S1–S3].
- **Context window: 95/100.** Verified 1M capacity, without ≥98% retrieval bonus [S1].
- **Multimodal: 95/100.** Broad audio/video/image/document input with direct visual results, text-only output [S1,S2].
- **Coding: 83/100.** Useful SWE/LiveCode, capped by migration, Vibe and complete-program weaknesses [S1,S2].
- **Cost efficiency: 75/100.** Moderate paid rates and fast decoding, but $3.69/task limits bargain claims [S3,S4].
- **Overall Score: 88/100.** (80 + 85 + 95 + 95 + 83) / 5 = 87.6 → 88; best fit fast supervised multimodal/document work. Cost excluded.

### Sources
- [S1] https://deepmind.google/models/model-cards/gemini-3-5-flash/ — primary model and benchmark card.
- [S2] https://www.vals.ai/models/google_gemini-3.5-flash — independent high-effort current and historical results.
- [S3] https://artificialanalysis.ai/models/gemini-3-5-flash — independent current index/economics.
- [S4] https://opencode.ai/docs/zen — provider route/pricing, directly inspected during this session.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research; three search attempts, direct primary/evaluator inspection, with suites/settings distinguished. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
