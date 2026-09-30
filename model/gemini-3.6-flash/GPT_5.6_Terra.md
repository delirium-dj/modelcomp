# Gemini 3.6 Flash — findings by GPT-5.6 Terra

- Source: Google DeepMind / Gemini 3.6 Flash
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's native-multimodal Flash workhorse, positioned as more token-efficient than Gemini 3.5 Flash for coding, knowledge work, and agentic workflows.
- **Provider / access:** Google Gemini API, Vertex AI, Gemini app, AI Studio, and Antigravity; model ID `gemini-3.6-flash`.
- **Release / knowledge:** Released 2026-07-21; knowledge cutoff March 2026 for some domains, with the Gemini 3-family January 2025 limitation in others.
- **IDs:** `google/gemini-3.6-flash` (no OpenCode Zen Free ID verified).
- **Context window:** 1M input tokens and 64K output tokens (Google DeepMind model card).
- **Modalities:** Text, image, audio, video, and document input; text output (Google DeepMind model card).
- **Pricing (as of 2026-09-18):** $1.50 input / $7.50 output per 1M tokens in Google’s July model card; current pricing should be checked against the live Gemini API table.
- **Architecture:** Proprietary; based on Gemini 3.5 Flash, with no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.0%**; GDPval-AA v2: **1421 Elo**; OSWorld-Verified: **83.0%** (Google DeepMind model card).
- Agent's Last Exam: **24.2%**; AutomationBench-AA: **51.1%**; τ³-Banking: **29.9%** (BenchmarkList aggregation).
- Claw-Eval / ClawProBench, Toolathlon, MCP Atlas, and SWE Atlas Codebase QnA: no public values were located in the official card or reviewed aggregations.

Reasoning / knowledge:

- GPQA Diamond: **93.4%**; HLE: **40.8%**; MMLU-Pro: **89.3%**; Artificial Analysis Intelligence Index: **52** (BenchmarkList aggregation).
- CharXiv: **85.2%** without tools / **89.4%** with tools (Google DeepMind model card).
- LCR / MLCR, CritPt, and Omniscience Accuracy / Hallucination Rate: no public values were located in the official card or reviewed aggregations.

Coding:

- SWE-bench Pro: **58.7%**; DeepSWE v1.1: **49.0%**; Terminal-Bench 2.1: **78.0%**; MLE-Bench: **63.9%** (Google DeepMind model card).
- SWE-bench Verified: **79.6%**; LiveCodeBench: **88.1%**; SciCode: **52.7%**; Vibe Code Bench v1.1: **57.3%** (BenchmarkList aggregation).

Long context:

- GDM-MRCR v2 8-needle: **91.8%** at 128K average and **54.0%** at 1M pointwise (Google DeepMind model card).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 at 78.0%, OSWorld-Verified at 83.0%, GDPval-AA 1421 Elo, and AutomationBench-AA 51.1% are strong evidence; weaker τ³-Banking and Agents' Last Exam results cap it.
- **Reasoning: 89/100.** GPQA Diamond 93.4%, MMLU-Pro 89.3%, CharXiv up to 89.4%, and AA Intelligence Index 52 support a high score; HLE 40.8% and missing critical-reasoning rows cap it.
- **Context window: 91/100.** A 1M window with 91.8% MRCR at 128K is strong, but the 54.0% result at 1M shows a significant retrieval drop-off.
- **Multimodal: 93/100.** Native text, image, audio, video, and document input with strong chart reasoning gives broad coverage; output remains text-only.
- **Coding: 86/100.** Terminal-Bench 78.0%, LiveCodeBench 88.1%, SWE-bench Verified 79.6%, and MLE-Bench 63.9% are strong; DeepSWE 49.0% and middling SciCode/Vibe results cap it.
- **Cost efficiency: 84/100.** $1.50/$7.50 per 1M tokens is competitive for multimodal 1M-context capability, but it is paid and higher than lower-cost Flash tiers.
- **Overall Score: 88.2/100.** Mean of the five quality dimensions: (82 + 89 + 91 + 93 + 86) / 5 = 88.2; best for multimodal, computer-use, and long-context workflows with measured 1M retrieval caveats.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: fresh public-web research using Google DeepMind's Gemini 3.6 Flash model card, Google API documentation, and public benchmark aggregations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
