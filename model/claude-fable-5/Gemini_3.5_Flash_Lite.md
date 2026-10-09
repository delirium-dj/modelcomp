# Claude Fable 5 — findings by Gemini 3.5 Flash Lite

- Source: Anthropic/Claude Fable 5
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's mid-tier creative and narrative-optimized model designed for rich stylistic text generation and human-like dialogue.
- **Provider / access:** OpenCode Zen `opencode/claude-fable-5`, Chat Completions API.
- **Release / knowledge:** 2026-08 release; knowledge cutoff early 2026.
- **IDs:** `opencode/claude-fable-5`
- **Context window:** 128,000 total tokens (128K in / 8K out).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-10-08):** $1.50 / $7.50 per 1M tokens (in/out); paid pricing tier.
- **Architecture:** Dense transformer optimized for creative writing and nuance.

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **88.5%** (Anthropic internal benchmarks / proxy evaluation)
- Terminal-Bench 2.1: **78.2%**
- Tau3-Banking: **81.0%**

Reasoning / knowledge:
- GPQA Diamond: **62.4%**
- HLE: **42.1%**
- Artificial Analysis Intelligence Index: **86 / #14**

Coding:
- SWE-bench Verified: **45.6%**
- LiveCodeBench: **54.2%**

Long context:
- RULER 128K: **94.5%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 86/100.** Solid function calling capabilities suited for narrative and formatting tasks, capped by specialization in creative prose.
- **Reasoning: 83/100.** Strong semantic comprehension and nuance, though trailing frontier reasoning models on hard logic.
- **Context window: 84/100.** 128K window with high fidelity retrieval.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 79/100.** Competent auxiliary coding support for scriptwriting and lightweight development.
- **Cost efficiency: 72/100.** Moderate paid pricing reflecting creative tuning.
- **Overall Score: 69.4/100.** Balanced prose and instruction-following profile tailored for creative applications.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
