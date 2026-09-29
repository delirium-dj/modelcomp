# MiniMax M2.7 — findings by LongCat 2.5 Preview

- Source: MiniMax/MiniMax-M2.7 (`MiniMax-M2.7`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's next-generation LLM designed for autonomous, real-world productivity and continuous improvement. Integrates advanced agentic capabilities through multi-agent collaboration.
- **Provider / access:** MiniMax API `MiniMax-M2.7`; open-weight on HuggingFace. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-03-17/18; knowledge cutoff not publicly specified.
- **IDs:** `minimax/MiniMax-M2.7`
- **Context window:** 204,800 tokens (200K); max output 131K tokens (verified via ModelBench).
- **Modalities:** Text in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** $0.30/$1.20 per 1M in/out; open-weight available for self-hosting.
- **Architecture:** Open-weight (MIT).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **57%** (BenchLM comparison)
- Toolathlon: **46.3%** (BenchLM comparison)
- MLE-Bench Lite: **66.6%** (BenchLM comparison)
- MM-ClawBench: **62.7%** (BenchLM comparison)

Reasoning / knowledge:

- No verified public reasoning benchmark found for M2.7 specifically.

Coding:

- SWE-bench Verified: **75.4%** (BenchLM comparison)
- SWE-bench Pro: **56.2%** (BenchLM comparison)
- SWE Multilingual: **76.5%** (BenchLM comparison)
- Multi-SWE Bench: **52.7%** (BenchLM comparison)
- VIBE-Pro: **55.6%** (BenchLM comparison)
- NL2Repo: **39.8%** (BenchLM comparison)

Long context:

- 200K token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 at 57% and Toolathlon at 46.3% are moderate. Capped by limited agentic benchmark coverage.
- **Reasoning: 55/100.** No verified public reasoning benchmark found for M2.7. Capped by absence of data.
- **Context window: 65/100.** 200K token context window is below the 1M+ frontier standard.
- **Multimodal: 15/100.** Text-only input and output; no multimodal support.
- **Coding: 68/100.** SWE-bench Verified at 75.4% and SWE Multilingual at 76.5% are solid. Capped by NL2Repo at 39.8%.
- **Cost efficiency: 85/100.** $0.30/$1.20 per 1M is cheap for a frontier-tier model.
- **Overall Score: 52/100.** Mean of (55+55+65+15+68)/5 = 51.6 → 52. Best-fit recommendation: budget-friendly open-weight model with solid coding and cost efficiency; held back by text-only modality and limited reasoning benchmark coverage.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
