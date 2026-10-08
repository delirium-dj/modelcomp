# MAI-Code-1-Flash — findings by Gemini 3.5 Flash Lite

- Source: Microsoft/MAI-Code-1-Flash
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft AI's fast text-only coding model for GitHub Copilot, built for high-volume iterative development.
- **Provider / access:** GitHub Copilot / OpenCode Zen `opencode/mai-code-1-flash`, Chat Completions API.
- **Release / knowledge:** 2026-08 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/mai-code-1-flash`
- **Context window:** 256,000 total tokens (256K in / 128,000 out).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-10-08):** $0.75 / $4.50 per 1M in/out (GitHub Copilot), cached input $0.075.
- **Architecture:** Dense optimized transformer for code generation and refactoring.

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **89.0%** (Microsoft AI technical bulletin)
- Terminal-Bench 2.1: **82.5%**

Reasoning / knowledge:
- GPQA Diamond: **64.2%**
- Artificial Analysis Intelligence Index: **87 / #12**

Coding:
- SWE-bench Verified: **62.1%**
- LiveCodeBench: **71.5%**

Long context:
- RULER 256K: **95.0%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 88/100.** High-speed function calling and structured code output.
- **Reasoning: 82/100.** Strong algorithmic reasoning tailored for software engineering tasks.
- **Context window: 90/100.** 256K context window supporting full repository codebases.
- **Multimodal: 15/100.** Text-only input modality.
- **Coding: 87/100.** Excellent performance on SWE-bench and LiveCodeBench for rapid code completion.
- **Cost efficiency: 80/100.** Optimized cost-to-performance ratio for enterprise coding workflows.
- **Overall Score: 72.4/100.** High-throughput coding specialist model with deep context support.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
