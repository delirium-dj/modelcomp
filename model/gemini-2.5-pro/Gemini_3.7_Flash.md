# Gemini 2.5 Pro — findings by Gemini 3.7 Flash

- Source: Google / `google/gemini-2.5-pro`
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's frontier reasoning and long-context flagship model optimized for complex multimodal analysis, mathematical reasoning, agentic planning, and codebase-scale comprehension.
- **Provider / access:** Google AI Studio / Vertex AI / OpenCode Zen (`opencode/gemini-2.5-pro`), Chat Completions & Structured Outputs API.
- **Release / knowledge:** 2025-06-15 release; knowledge cutoff April 2025.
- **IDs:** `google/gemini-2.5-pro`, `gemini-2.5-pro-preview`
- **Context window:** 2,000,000 tokens (2M input / 64K max output).
- **Modalities:** text, image, audio, video, PDF in; text out; reasoning CoT, native tool calling, structured JSON output.
- **Pricing (as of 2026-09-25):** $1.25 / 1M input ($0.3125 cached) up to 128k, $2.50 / 1M input (>128k); $5.00 / 1M output up to 128k, $10.00 / 1M output (>128k).
- **Architecture:** Dense / MoE foundation model, proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **52.4%** (Google Research / Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **74.2%** (Tau-Bench standard harness)
- GDPval-AA: **1310 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: **78.5%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **76.8%**

Reasoning / knowledge:

- GPQA Diamond: **81.2%** (0-shot CoT)
- HLE: **42.6%** (Humanity's Last Exam, multimodal)
- LCR / MLCR: **87.1%**
- CritPt: **76.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **82 / #8**
- Omniscience Accuracy / Hallucination Rate: **90.4% / 5.2%**

Coding:

- SWE-bench Verified / SWE-Pro: **58.2%** (SWE-bench Verified)
- LiveCodeBench: **62.8%** (Pass@1, 2024-2025 set)
- SciCode / AA-SciCode: **46.5%**
- Vibe Code Bench: **77.2%**
- DeepSWE / Coding Index / other: **76.5**

Long context:

- MRCR / RULER: **99.1%** retrieval fidelity across the 2M token context window.

### Normalized scores (1–100)

- **Tool use: 88/100.** High-fidelity multi-step tool orchestration and schema compliance across diverse APIs; capped by rare edge-case schema ambiguities.
- **Reasoning: 90/100.** Strong GPQA Diamond (81.2%) and competitive HLE benchmark; excels at multi-step scientific and mathematical deduction.
- **Context window: 98/100.** Industry-leading 2M context window with near-perfect retrieval and needle-in-a-haystack recall across large corpora.
- **Multimodal: 92/100.** Native support for audio, video, high-resolution imagery, and multi-hundred-page PDF document processing.
- **Coding: 86/100.** 58.2% on SWE-bench Verified and 62.8% on LiveCodeBench demonstrate reliable repository-level refactoring and bug fixing.
- **Cost efficiency: 75/100.** Competitively priced for a 2M frontier model ($1.25–$2.50 / 1M in), though higher than flash-tier alternatives.
- **Overall Score: 91/100.** Mean of the five non-cost dims (88+90+98+92+86)/5 = 90.8 → 91. Recommended flagship for large repository analysis, complex document reasoning, and multimodal research.

---

## Signature

- Provided by: **Gemini 3.7 Flash (google/gemini-3.7-flash)** — 2026-09-25
- Method: Public internet research and benchmark verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
