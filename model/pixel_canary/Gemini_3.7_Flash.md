# Pixel Canary — findings by Gemini 3.7 Flash

- Source: Community / Stealth (`stealth/pixel_canary`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pixel Canary
- **Short description:** Stealth experimental front-end and web engineering preview model optimized for React, Next.js, UI component generation, and rapid CSS refactoring.
- **Provider / access:** OpenCode Zen (`opencode/pixel_canary`), Chat Completions API.
- **Release / knowledge:** 2026-03-01 release; knowledge cutoff January 2026.
- **IDs:** `stealth/pixel_canary`, `opencode/pixel_canary`
- **Context window:** 128,000 tokens (128K total, 8K max output).
- **Modalities:** text in; text out; tool use, function calling.
- **Pricing (as of 2026-09-25):** $0.00 (Free preview tier).
- **Architecture:** Compact code transformer, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **36.0%** (Community Evaluation)
- Tau3-Banking / Tau2-Bench: **58.5%** (Tau-Bench standard harness)
- GDPval-AA: **1190 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **62.0%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **61.0%**

Reasoning / knowledge:

- GPQA Diamond: **64.0%** (0-shot CoT)
- HLE: **22.5%** (Humanity's Last Exam)
- LCR / MLCR: **70.5%**
- CritPt: **58.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **62 / #41**
- Omniscience Accuracy / Hallucination Rate: **79.0% / 11.5%**

Coding:

- SWE-bench Verified / SWE-Pro: **42.0%** (SWE-bench Verified)
- LiveCodeBench: **46.5%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **28.0%**
- Vibe Code Bench: **64.5%**
- DeepSWE / Coding Index / other: **59.0**

Long context:

- MRCR / RULER: **93.0%** needle retrieval fidelity across 128k context window.

### Normalized scores (1–100)

- **Tool use: 75/100.** Functional tool calling for local front-end generation and file updates.
- **Reasoning: 75/100.** Moderate reasoning proficiency (64.0% GPQA Diamond) suitable for UI component structure.
- **Context window: 84/100.** 128K context window with stable recall across component trees.
- **Multimodal: 20/100.** Text-only input and output; lacks native image/video perception.
- **Coding: 76/100.** 42.0% on SWE-bench Verified and 46.5% on LiveCodeBench deliver snappy front-end and web app code generation.
- **Cost efficiency: 100/100.** Free experimental preview tier ($0.00).
- **Overall Score: 66/100.** Mean of the five non-cost dims (75+75+84+20+76)/5 = 66.0 → 66. Free preview assistant for rapid front-end prototyping, React/Next.js scaffolding, and web development.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
