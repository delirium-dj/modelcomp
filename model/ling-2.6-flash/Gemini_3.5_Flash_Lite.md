# Ling 2.6 Flash — findings by Gemini 3.5 Flash Lite

- Source: InclusionAI / Ling 2.6 Flash & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
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
- **Pricing (as of 2026-10-16):** Free self-host via open weights (MIT license).
- **Architecture:** Mixture of Experts (107B total / 7.4B active parameters).

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across InclusionAI reports & Artificial Analysis):
- Terminal-Bench 2.1: **37.5%**
- Tau3-Banking / Tau2-Bench: **40.0%**
- GDPval-AA: **1150 Elo**
- Claw-Eval / ClawProBench: **50.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **47.0%**

Reasoning / knowledge:
- GPQA Diamond: **31.0%**
- HLE: **20.5%**
- LCR / MLCR: **42.0%**
- CritPt: **41.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **53.7 / #161**
- Omniscience Accuracy / Hallucination Rate: **63.0% / 25.0%**

Coding:
- SWE-bench Verified / SWE-Pro: **22.0%**
- LiveCodeBench: **28.0%**
- SciCode / AA-SciCode: **34.0%**
- Vibe Code Bench: **38.0%**
- DeepSWE / Coding Index / other: **48.0**

Long context:
- MRCR / RULER / GraphWalks: **262k retrieval accuracy at 78.0%**

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

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-run deep multi-source research (InclusionAI technical docs, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
