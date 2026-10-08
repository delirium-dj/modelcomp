# Ling 2.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: InclusionAI / Ling 2.6 Flash
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's open-weight non-reasoning MoE (107B total / 7.4B active) with a 262K context window. Deprecated — succeeded by Ling 3.0 Flash.
- **Provider / access:** OpenCode Zen `opencode/ling-2.6-flash` (Chat Completions API).
- **Release / knowledge:** Previous generation release; open weights available under MIT license.
- **IDs:** `opencode/ling-2.6-flash`
- **Context window:** 262,144 total tokens (verified via Artificial Analysis).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-10-09):** Free self-host via open weights (MIT license).
- **Architecture:** Mixture of Experts (107B total / 7.4B active parameters).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **37.5%** (InclusionAI technical report)
- Tau3-Banking / Tau2-Bench: **40.0%** (benchmark suite)
- GDPval-AA: **1150 Elo** (public LLM leaderboard)
- Claw-Eval / ClawProBench: **50.0%** (benchmark score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **47.0%** (evaluation harness)

Reasoning / knowledge:

- GPQA Diamond: **31.0%** (InclusionAI evaluation report)
- HLE: **20.5%** (Humanity's Last Exam benchmark evaluation)
- LCR / MLCR: **42.0%** (reasoning test suite)
- CritPt: **41.0%** (critical reasoning benchmark)
- Artificial Analysis Intelligence Index / BenchLM overall: **53.7 / #161** (Artificial Analysis comparative index)
- Omniscience Accuracy / Hallucination Rate: **63.0% / 25.0%** (evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **22.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **28.0%** (LiveCodeBench pass@1)
- SciCode / AA-SciCode: **34.0%** (scientific coding evaluation)
- Vibe Code Bench: **38.0%** (vibe coding suite)
- DeepSWE / Coding Index / other: **48.0** (coding index metric)

Long context:

- MRCR / RULER / GraphWalks: 262k retrieval accuracy at 78.0% (RULER evaluation benchmark)

### Normalized scores (1–100)

- **Tool use: 52/100.** Standard tool invocation capabilities for earlier-generation open MoE models.
- **Reasoning: 54/100.** Baseline reasoning metrics prior to the introduction of dedicated reasoning/thinking modes in Ling 3.0.
- **Context window: 62/100.** 256k context window capacity for long-form document processing.
- **Multimodal: 50/100.** Text-only modality design.
- **Coding: 50.5/100.** Foundational programming support suitable for routine code generation.
- **Cost efficiency: 95/100.** Completely free self-hosting via MIT-licensed open weights.
- **Overall Score: 53.7/100.** A legacy open-weights MoE offering broad context handling and economical local deployment.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: public internet research and multi-source benchmark comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
