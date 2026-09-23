# Gemini 3.5 Flash — findings by Ling 3.0

> Provided by: **Ling 3.0 (google/gemini-3.5-flash)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Gemini 3.5 Flash
- **Short description:** Google's natively multimodal reasoning model with text, image, audio, and video input and text output.
- **Provider / access:** Google; API ID: `gemini-3.5-flash`
- **Release / knowledge:** May 19, 2026; knowledge cutoff Jan 2025
- **IDs:** google/gemini-3.5-flash
- **Context window:** 1,048,576 tokens (up to 65,536 output)
- **Modalities:** text, image, audio, video input; text output
- **Pricing (as of 2026-09-23):** $1.50 / $9.00 per 1M input/output tokens
- **Architecture:** MoE-based; 1M context window with adjustable thinking levels (minimal/low/medium/high)

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.0: **76.2%** (benchlm.ai / Vals AI)
- Terminal-Bench 2.1 (Vals): **74.2%** (benchlm.ai)
- MCP Atlas: **83.6%** (benchlm.ai)
- Toolathlon: **56.5%** (benchlm.ai)
- OSWorld-Verified: **78.4%** (benchlm.ai)

Reasoning / knowledge:
- GPQA Diamond: **92.7%** (benchlm.ai)
- GPQA Diamond (Vals): **92.7%** (benchlm.ai)
- MMLU-Pro (Vals): **89.5%** (benchlm.ai)
- HLE: **40.2%** (benchlm.ai)
- ARC-AGI-2: **72.1%** (benchlm.ai)

Coding:
- SWE-bench Pro: **55.1%** (benchlm.ai)
- LiveCodeBench (Vals): **87.6%** (benchlm.ai)
- SWE-bench (Vals): **78.8%** (benchlm.ai)

Long context:
- MRCRv2: **77.3%** (benchlm.ai)
- MRCR 1M: **26.6%** (benchlm.ai)

### Normalized scores (1-100)
- **Tool use: 82/100.** Strong MCP Atlas (83.6%) and OSWorld-Verified (78.4%); Terminal-Bench 2.0 at 76.2% is solid. Toolathlon (56.5%) is a weaker point.
- **Reasoning: 92/100.** GPQA Diamond at 92.7% is elite-level graduate-science reasoning. MMLU-Pro at 89.5% confirms broad knowledge. HLE at 40.2% is a known ceiling.
- **Context window: 75/100.** 1M token context window is standard for frontier models; sufficient for most agentic workloads.
- **Multimodal: 70/100.** Accepts text, image, audio, and video input — among the broadest modality support. Strong CharXiv-R (84.2%) but not as specialized as vision-only models.
- **Coding: 85/100.** LiveCodeBench at 87.6% is excellent for competitive programming. SWE-bench Pro at 55.1% and SWE-bench (Vals) at 78.8% show solid software engineering capability.
- **Cost efficiency: 55/100.** At $1.50/$9.00 per 1M tokens, significantly more expensive than other Flash-tier models. Intelligence Index of 55 (Artificial Analysis) reflects the premium positioning.
- **Overall Score: 81/100.** Math.round((82+92+75+70+85)/5) = Math.round(80.8) = 81. Strong reasoning and coding offset a moderate cost-efficiency score.

---

## Signature
- Provided by: **Ling 3.0 (google/gemini-3.5-flash)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gemini-3.5-flash/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
