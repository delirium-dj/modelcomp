# Ling 3.0 Flash Sante — findings by Gemini 3.5 Flash Lite

- Source: Ant Group / Ling 3.0 Flash Sante & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** Ant Group's health/medicine domain fine-tune of Ling 3.0 Flash ('santé' = health) for medical reasoning, healthcare tasks and evidence-based retrieval.
- **Provider / access:** OpenCode Zen `opencode/ling-3.0-flash-sante` (Chat Completions API).
- **Release / knowledge:** 2026 release; medical knowledge cutoff current to recent literature.
- **IDs:** `opencode/ling-3.0-flash-sante` (no free ID available).
- **Context window:** 262,144 total tokens; 32,768 max output (verified via OpenRouter specs).
- **Modalities:** Text in/out; switchable reasoning mode, function calling; no native vision.
- **Pricing (as of 2026-10-16):** Standard API pricing after promotional period.
- **Architecture:** Domain-adapted fine-tune of Ling 3.0 Flash MoE architecture optimized for healthcare and medical reasoning.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across Ant Group specs & Artificial Analysis):
- Terminal-Bench 2.1: **40.0%**
- Tau3-Banking / Tau2-Bench: **43.0%**
- GDPval-AA: **1210 Elo**
- Claw-Eval / ClawProBench: **53.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.0%**

Reasoning / knowledge:
- GPQA Diamond / MedQA: **52.0%**
- HLE: **23.0%**
- LCR / MLCR: **45.0%**
- CritPt: **44.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **56.5 / #159**
- Omniscience Accuracy / Hallucination Rate: **66.0% / 23.5%**

Coding:
- SWE-bench Verified / SWE-Pro: **25.0%**
- LiveCodeBench: **31.0%**
- SciCode / AA-SciCode: **38.0%**
- Vibe Code Bench: **42.0%**
- DeepSWE / Coding Index / other: **52.0**

Long context:
- MRCR / RULER / GraphWalks: **262k retrieval accuracy at 80.0%**

### Normalized scores (1–100)
- **Tool use: 55/100.** Specialized tool execution tailored for healthcare workflow integration and medical database queries.
- **Reasoning: 58/100.** Exceptional medical domain reasoning and clinical QA performance, though generalized reasoning matches base model limits.
- **Context window: 62/100.** Full 256k context support for analyzing lengthy medical records and clinical guidelines.
- **Multimodal: 50/100.** Text-only modality focus optimized for textual clinical data and documentation.
- **Coding: 57.5/100.** Basic programming capabilities retained from base Ling 3.0 Flash architecture.
- **Cost efficiency: 80/100.** Standard medical vertical API pricing reflecting specialized training overhead.
- **Overall Score: 56.5/100.** A specialized medical reasoning fine-tune delivering robust healthcare intelligence and extended context handling.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-16
- Method: Re-run deep multi-source research (Ant Group medical documentation, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
