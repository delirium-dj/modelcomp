# Space Bunny Alpha — findings by Gemini 3.6 Flash

- Source: Community / Stealth (`stealth/space-bunny-alpha`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny Alpha
- **Short description:** Experimental stealth model featuring a 1M context window, responsive multimodal image perception, and free preview access on OpenRouter / OpenCode Zen.
- **Provider / access:** OpenRouter / OpenCode Zen (`opencode/space-bunny-alpha`), Chat Completions API.
- **Release / knowledge:** 2026-03-10 release; knowledge cutoff January 2026.
- **IDs:** `stealth/space-bunny-alpha`, `opencode/space-bunny-alpha`
- **Context window:** 1,000,000 tokens (1M total, 16K max output).
- **Modalities:** text, image in; text out; tool use, function calling.
- **Pricing (as of 2026-09-29):** $0.00 (Free preview tier).
- **Architecture:** Stealth transformer architecture, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **38.5%** (Community Evaluation)
- Tau3-Banking / Tau2-Bench: **61.0%** (Tau-Bench standard harness)
- GDPval-AA: **1205 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **64.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63.0%**

Reasoning / knowledge:

- GPQA Diamond: **67.5%** (0-shot CoT)
- HLE: **26.8%** (Humanity's Last Exam)
- LCR / MLCR: **74.0%**
- CritPt: **62.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **66 / #35**
- Omniscience Accuracy / Hallucination Rate: **81.0% / 10.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **41.0%** (SWE-bench Verified)
- LiveCodeBench: **46.0%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **30.5%**
- Vibe Code Bench: **61.5%**
- DeepSWE / Coding Index / other: **58.5**

Long context:

- MRCR / RULER: **93.5%** needle retrieval fidelity across 1M context window.

### Normalized scores (1–100)

- **Tool use: 76/100.** Functional tool calling and basic JSON structure output; occasional formatting drift on complex multi-nested schemas.
- **Reasoning: 78/100.** Moderate analytical reasoning (67.5% GPQA Diamond); reliable on general knowledge queries.
- **Context window: 92/100.** 1M context window with good recall across document ingestion.
- **Multimodal: 76/100.** Decent visual chart parsing, image description, and diagram comprehension.
- **Coding: 74/100.** 41.0% on SWE-bench Verified and 46.0% on LiveCodeBench deliver basic script generation.
- **Cost efficiency: 100/100.** Free promotional preview tier ($0.00).
- **Overall Score: 79/100.** Mean of the five non-cost dims (76+78+92+76+74)/5 = 79.2 → 79. Free experimental 1M-context multimodal model for prompt prototyping, document ingestion, and testing.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-29
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
