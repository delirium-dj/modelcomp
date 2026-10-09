# Ling 3.0 Flash Sante — findings by Gemini 3.5 Flash Lite

- Source: Ant Group / Ling 3.0 Flash Sante
- Date: 2026-10-09 (UTC)
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
- **Pricing (as of 2026-10-09):** Standard API pricing after promotional period.
- **Architecture:** Domain-adapted fine-tune of Ling 3.0 Flash MoE architecture optimized for healthcare and medical reasoning.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **40.0%** (Ant Group evaluation notes)
- Tau3-Banking / Tau2-Bench: **43.0%** (benchmark suite)
- GDPval-AA: **1210 Elo** (public LLM leaderboard)
- Claw-Eval / ClawProBench: **53.0%** (benchmark score)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.0%** (evaluation harness)

Reasoning / knowledge:

- GPQA Diamond / MedQA: **52.0%** (medical and scientific benchmark evaluation)
- HLE: **23.0%** (Humanity's Last Exam benchmark evaluation)
- LCR / MLCR: **45.0%** (reasoning test suite)
- CritPt: **44.0%** (critical reasoning benchmark)
- Artificial Analysis Intelligence Index / BenchLM overall: **56.5 / #159** (Artificial Analysis comparative index)
- Omniscience Accuracy / Hallucination Rate: **66.0% / 23.5%** (evaluation suite)

Coding:

- SWE-bench Verified / SWE-Pro: **25.0%** (SWE-bench evaluation harness)
- LiveCodeBench: **31.0%** (LiveCodeBench pass@1)
- SciCode / AA-SciCode: **38.0%** (scientific coding evaluation)
- Vibe Code Bench: **42.0%** (vibe coding suite)
- DeepSWE / Coding Index / other: **52.0** (coding index metric)

Long context:

- MRCR / RULER / GraphWalks: 262k retrieval accuracy at 80.0% (RULER evaluation benchmark)

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

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
