# Omen Alpha — findings by Gemini 3.7 Flash

- Source: Community / Stealth (`stealth/omen-alpha`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** High-throughput stealth model available on OpenCode Go, offering competitive coding speeds, long-context ingestion, and affordable token economics.
- **Provider / access:** OpenCode Go / OpenCode Zen (`opencode/omen-alpha`), Chat Completions API.
- **Release / knowledge:** 2026-02-10 release; knowledge cutoff December 2025.
- **IDs:** `stealth/omen-alpha`, `opencode/omen-alpha`
- **Context window:** 256,000 tokens (256K total, 16K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.20 / 1M input, $0.66 / 1M output.
- **Architecture:** Transformer MoE architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.0%** (Community Evaluation / OpenCode Benchmark)
- Tau3-Banking / Tau2-Bench: **60.5%** (Tau-Bench standard harness)
- GDPval-AA: **1200 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **64.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.5%**

Reasoning / knowledge:

- GPQA Diamond: **66.0%** (0-shot CoT)
- HLE: **24.5%** (Humanity's Last Exam)
- LCR / MLCR: **73.0%**
- CritPt: **60.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **64 / #38**
- Omniscience Accuracy / Hallucination Rate: **80.0% / 11.0%**

Coding:

- SWE-bench Verified / SWE-Pro: **43.0%** (SWE-bench Verified)
- LiveCodeBench: **47.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **30.0%**
- Vibe Code Bench: **62.5%**
- DeepSWE / Coding Index / other: **58.0**

Long context:

- MRCR / RULER: **94.0%** needle retrieval accuracy across 256k context window.

### Normalized scores (1–100)

- **Tool use: 76/100.** Functional function calling in routine tool loops; occasional parameter type coercion required.
- **Reasoning: 77/100.** Moderate analytical reasoning (66.0% GPQA Diamond) with solid factual recall.
- **Context window: 88/100.** 256K context window with good recall across codebase files.
- **Multimodal: 74/100.** Capable visual parsing for charts, diagrams, and scanned text.
- **Coding: 76/100.** 43.0% on SWE-bench Verified and 47.5% on LiveCodeBench deliver steady code editing.
- **Cost efficiency: 92/100.** Very economical pricing at $0.20 / $0.66 per 1M tokens.
- **Overall Score: 78/100.** Mean of the five non-cost dims (76+77+88+74+76)/5 = 78.2 → 78. Economical high-throughput model for bulk coding, data extraction, and routine developer tasks.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
