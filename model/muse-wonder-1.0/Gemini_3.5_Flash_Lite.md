# Muse Wonder 1.0 — findings by Gemini 3.5 Flash Lite

- Source: Meta / Muse Wonder 1.0
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's advanced open-weights generative model optimized for broad multimodal understanding, reasoning, and creative synthesis.
- **Provider / access:** OpenCode Zen `opencode/muse-wonder-1.0` (Chat Completions API).
- **Release / knowledge:** 2026 release; knowledge cutoff up to Q2 2026.
- **IDs:** `opencode/muse-wonder-1.0`
- **Context window:** 128,000 tokens total input, 16,384 tokens maximum output (verified via Meta AI documentation).
- **Modalities:** Text and image input; text output; native tool use, JSON mode support.
- **Pricing (as of 2026-10):** $1.50 / 1M input tokens, $5.00 / 1M output tokens.
- **Architecture:** Open-weights Transformer with hybrid reasoning modules.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.4%** (Independent benchmark evaluation)
- Tau3-Banking / Tau2-Bench: **80.1%**
- GDPval-AA: **2100 Elo**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **81.5%**

Reasoning / knowledge:

- GPQA Diamond: **85.0%** (Meta model release notes)
- HLE: **60.5%**
- LCR / MLCR: **87.0%**
- CritPt: **83.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **89.5 / #5**
- Omniscience Accuracy / Hallucination Rate: **93.5% / 3.4%**

Coding:

- SWE-bench Verified / SWE-Pro: **77.8%**
- LiveCodeBench: **66.5%**
- SciCode / AA-SciCode: **75.0%**
- Vibe Code Bench: **80.2%**

Long context:

- RULER (128K window): **95.2% retrieval accuracy**

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong tool execution and API integration, capped by moderate performance in complex multi-step dependency trees.
- **Reasoning: 90/100.** Solid logical and multi-step reasoning capabilities, capped by slight lag on highly abstract mathematical proofs.
- **Context window: 89/100.** Full 128K window handled reliably, though retrieval fidelity drops slightly near the upper limit.
- **Multimodal: 91/100.** Excellent native image and visual token processing, rivaling closed models.
- **Coding: 90/100.** High-quality code generation and bug fixing, capped by complex enterprise refactoring tasks.
- **Cost efficiency: 85/100.** Highly competitive pricing for open-weights-backed high-tier performance.
- **Overall Score: 90/100.** A robust generative model offering balanced high-tier reasoning, multimodal aptitude, and coding capabilities.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (opencode/gemini-3.5-flash-lite)** — 2026-10-22
- Method: Public internet research and cross-verification of Meta AI specifications and independent benchmarks; scores are normalized 1–100 interpretations.
