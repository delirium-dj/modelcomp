# Claude Opus 5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-opus-5`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's July Opus release for careful agentic coding and professional work. Still active as a legacy model; current official recommendation is Opus 5.5, not a rename of these weights [S1].
- **Provider / access:** Claude Messages API, Bedrock, Google Cloud, Microsoft Foundry and Claude Platform on AWS [S1].
- **Release / knowledge:** July 24, 2026; May 2026 reliable/training cutoff [S1,S2]. Vals' July 22 date and July 23 evaluation update are preserved as evaluator metadata, not the official public release [S4].
- **IDs:** `claude-opus-5`, Bedrock `anthropic.claude-opus-5`; Cursor Fast mode `claude-opus-5-fast` [S1,S5]. No Zen Free ID verified.
- **Context window:** 1M tokens, 128K synchronous output; 300K on Message Batches with extended-output beta [S1].
- **Modalities:** Text/image input and text output, file/document workflows, adaptive thinking and tool/computer-use workflows; no verified native audio/video input or media output [S1,S4,S5].
- **Pricing (as of 2026-10-16):** $5 input / $25 output per million tokens; $0.50 cached read, $6.25 five-minute write, $10 one-hour write. Batch half price; Fast $10/$50. No long-context multiplier in Cursor; zero-data-retention compatible [S1,S2,S5].
- **Architecture:** Proprietary; undisclosed parameter count [S3].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.64% high**, Vals launch; **81.27%** with fallback-assisted tasks counted as failures [S4].
- Terminal-Bench 4.0: **53.53% ±1.34**, Vals current max-effort table [S4]. Not interchangeable with 2.1.
- Finance Agent v2 **58.63% ±0.08**; Legal Research **55.29% ±3.46**, **#2/78**; Tax Agent **45.55% ±3.59**, Vals [S4].
- CUA-bench **9.00%**; SRE Bench **12.21% ±2.03**; Harvey Legal Agent **6.67% ±1.65**, Vals [S4]. Broad legal knowledge does not imply strong legal-agent all-pass performance.
- GDPval-AA: official launch claims leadership, but figures are image-only in fetched text [S2]; no exact Elo inferred.
- Tau3-Banking / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found in inspected text.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index **51, #17/217**, v4.3.2; **$5.86/task** in max setting [S3].
- GPQA Diamond **93.43% ±1.24**, MMLU Pro **91.59% ±0.28**, Vals [S4].
- Vals Index **63.67% ±0.96, #6/48**, current table. Historical update says **67.21%** and separately uses **74.82% → 74.47%** for fallback sensitivity; the page does not reconcile these index values [S4].
- ProofBench v1.1 **99.00% ±1.00** current, versus historical ProofBench **78.00%**; different versions/snapshots retained [S4].
- HLE / CritPt / AA-LCR / MLCR / Omniscience accuracy and hallucination rate: no verified exact numeric score found in inspected primary/current independent prose.

Coding:

- SWE-bench Verified **97.00%** explicitly identified in Vals' historical update; current row **97.00% ±0.76** [S4]. This is a particular evaluator setup, not a guaranteed universal solve rate.
- LiveCodeBench **89.03% ±0.91**, Vibe Code Bench v1.1 **88.40% ±3.00**, Code Migration **57.47% ±4.37**, ProgramBench **3.00% ±1.21** [S4].
- Terminal-Bench Science **27.14% ±5.35** [S4].
- Frontier-Bench v0.1: vendor claims state-of-the-art but plots are image-only; disclosed mini-SWE-agent/GKE, mean reward over five attempts, Opus 4.8 fallback [S2]. No number invented.
- CursorBench: provider confirms near-Fable-5 performance and recommends high thinking, without exact numeric score [S5].
- SWE-Pro / DeepSWE / SciCode: no verified numeric result found in inspected sources.

Long context and multimodal:

- 1M capacity verified; no exact-model MRCR/RULER/full-window retrieval percentage verified [S1].
- MMMU Pro **89.88% ±0.72**, **#2/93**, independent Vals [S4].

### Evidence comparison and research trail

Three distinct DuckDuckGo queries: `"Claude Opus 5" official Anthropic model docs`; `"Claude Opus 5" Artificial Analysis independent benchmarks`; `"Claude Opus 5" review pricing context limitations`. Read Anthropic's current API specification and launch post, AA's current profile, Vals, Cursor, and AI for Anything's independent-testing review. An attempted AA article URL returned 404 and supplies no evidence.

AA calls the model deprecated for its performance-benchmarking policy, while Anthropic calls it active legacy with retirement not before July 24, 2027 [S1,S3]; evaluator labeling is not vendor retirement. Vals' launch/current index and fallback examples contain unreconciled values, so only the current table is used for present ranking, and no delta is calculated between them [S4]. Fallback assistance is real: vendor Frontier-Bench and Vals terminal measurements can include Opus 4.8. The signed scores characterize the reported production system, with a cap for isolated-model uncertainty [S2,S4]. The secondary review cites Epoch ECI 159 and CodeRabbit precision 39.3% with increased nitpicks, but does not provide usable primary result links for those claims; they are qualitative leads rather than adopted verified score anchors [S6]. Cursor's current view also qualifies launch enthusiasm: Opus 5.5 now performs better on its coding benchmark at lower prices [S5].

### Normalized scores (1–100)

- **Tool use: 91/100.** Strong terminal and professional-agent results support high capability, capped by CUA/SRE weaknesses and fallback effects [S2,S4].
- **Reasoning: 92/100.** GPQA 93.43%, MMLU Pro 91.59% and current AA index support strong reasoning; conflicting aggregate snapshots and unavailable key subscores constrain certainty [S3,S4].
- **Context window: 95/100.** Official 1M capacity qualifies for the top tier without verified ≥98% retrieval [S1].
- **Multimodal: 80/100.** Strong image/document performance and MMMU Pro 89.88%; text-only output and no native audio/video evidence cap coverage [S1,S4].
- **Coding: 93/100.** Cross-suite SWE/LiveCodeBench/Vibe performance is strong; low ProgramBench and uneven scientific-terminal results prevent universal superiority claims [S4,S5].
- **Cost efficiency: 48/100.** $5/$25 and $5.86/task at max are premium economics, especially beside the newer lower-priced Opus release [S1,S3,S5].
- **Overall Score: 90/100.** (91 + 92 + 95 + 80 + 93) / 5 = 90.2 → 90; effective for established careful coding/document workflows. Cost excluded.

### Sources

- [S1] https://platform.claude.com/docs/en/models/opus-5/overview — official current lifecycle, API specs, dates and pricing.
- [S2] https://www.anthropic.com/research/claude-opus-5 — original launch, qualitative benchmark claims and harness/fallback footnote.
- [S3] https://artificialanalysis.ai/models/claude-opus-5 — current independent max-effort profile, v4.3.2 and economics.
- [S4] https://www.vals.ai/models/anthropic_claude-opus-5 — current independent suite, uncertainty and historical fallback disclosures.
- [S5] https://cursor.com/docs/models/claude-opus-5 — integration experience, pricing and current successor comparison.
- [S6] https://www.aiforanything.io/blog/claude-opus-5-benchmarks-independent-tests-2026 — secondary review; unlinked external numeric claims not treated as independently verified.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research with three distinct searches and official/independent/provider/review comparisons. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
