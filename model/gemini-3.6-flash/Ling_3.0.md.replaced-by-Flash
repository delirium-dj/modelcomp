# Gemini 3.6 Flash — findings by Ling 3.0

> Provided by: **Ling 3.0 (google/gemini-3.6-flash)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.6 Flash
- **Short description:** Google's efficient reasoning model with multimodal capabilities, offering strong coding and agentic performance at lower cost than prior generations.
- **Provider / access:** Google; API ID: `gemini-3.6-flash`
- **Release / knowledge:** July 21, 2026; knowledge cutoff March 31, 2026
- **IDs:** google/gemini-3.6-flash
- **Context window:** 1,048,576 tokens (up to 65,536 output)
- **Modalities:** text, image, video input; text output
- **Pricing (as of 2026-09-23):** $0.75 / $3.75 per 1M input/output tokens
- **Architecture:** MoE-based; 1M context window with reasoning capability

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **78.0%** (llm-stats.com)
- OSWorld-Verified: **83.0%** (llm-stats.com)
- CharXiv-R: **89.4%** (llm-stats.com)
- MLE-Bench: **63.9%** (llm-stats.com)

Reasoning / knowledge:
- GPQA Diamond: **91.0%** (GLM benchmark table, Z.AI)
- MMLU-Pro: **89.5%** (benchlm.ai)
- HLE: **36.8%** (benchlm.ai)
- ARC-AGI-2: **72.1%** (benchlm.ai)

Coding:
- SWE-bench Pro: **58.7%** (llm-stats.com)
- DeepSWE v1.1: **74.2%** (flowtivity.ai)
- Terminal-Bench 2.0: **69.4%** (benchlm.ai)

Long context:
- MRCRv2: **77.3%** (benchlm.ai)
- MRCR 1M: **26.6%** (benchlm.ai)

### Normalized scores (1-100)
- **Tool use: 84/100.** Terminal-Bench 2.1 at 78.0% and OSWorld-Verified at 83.0% show strong agentic capability. CharXiv-R at 89.4% reflects multimodal tool use.
- **Reasoning: 90/100.** GPQA Diamond at ~91% demonstrates graduate-level science reasoning. MMLU-Pro at 89.5% confirms broad knowledge. Intelligence Index of 40 (Artificial Analysis) is modest.
- **Context window: 75/100.** 1M token context window is standard. Matches Gemini 3.5 Flash.
- **Multimodal: 65/100.** Supports text, image, and video input but lacks audio input compared to Gemini 3.5 Flash. Intelligence Index multimodal score of 32.9 (Artificial Analysis) is modest.
- **Coding: 82/100.** SWE-bench Pro at 58.7% and DeepSWE at 74.2% show solid coding agent performance. Terminal-Bench 2.1 at 78.0% is strong for terminal-based coding.
- **Cost efficiency: 85/100.** At $0.75/$3.75 per 1M tokens, significantly cheaper than Gemini 3.5 Flash. One of the most cost-effective frontier models.
- **Overall Score: 79/100.** Math.round((84+90+75+65+82)/5) = Math.round(79.2) = 79. Strong tool use and reasoning offset a slightly lower multimodal score.

---

## Signature
- Provided by: **Ling 3.0 (google/gemini-3.6-flash)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemini-3.6-flash/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
