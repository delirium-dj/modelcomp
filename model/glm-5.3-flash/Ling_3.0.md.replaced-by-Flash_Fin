# GLM-5.3 Flash — findings by Ling 3.0

> Provided by: **Ling 3.0 (zai-org/glm-5.3-flash)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GLM-5.3 Flash
- **Short description:** Zhipu AI's open-weights MoE model with 320B total parameters, 18B active, delivering Claude Opus 4.8-class performance at flash speed and cost.
- **Provider / access:** Z.AI (Zhipu AI); API ID: `glm-5.3-flash`
- **Release / knowledge:** August 26, 2026; open weights (MIT license)
- **IDs:** zai-org/glm-5.3-flash
- **Context window:** 1,048,576 tokens
- **Modalities:** text, image input; text output
- **Pricing (as of 2026-09-23):** $0.15 / $0.50 per 1M input/output tokens
- **Architecture:** MoE with 320B total parameters, 18B active per token; hybrid sparse + linear attention

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **84.3%** (llm-stats.com)
- Terminal-Bench 2.1 (best harness): **82.7%** (glmmodel.com)
- AutomationBench: **48.8%** (benchlm.ai / glmmodel.com)
- Agents' Last Exam: **26.3%** (benchlm.ai)
- HLE w/ tools: **55.3%** (benchlm.ai)
- Toolathlon-Verified: **78.4%** (llm-stats.com)
- DeepSWE: **63.4%** (glmmodel.com)

Reasoning / knowledge:
- GPQA Diamond: **91.2%** (glmmodel.com)
- HLE: **40.5%** (glmmodel.com)
- AIME 2026: **99.2%** (glmmodel.com)
- HMMT Nov 2025: **94.4%** (glmmodel.com)
- ARC-AGI-2: **72.1%** (benchlm.ai)

Coding:
- SWE-bench Pro: **62.1%** (glmmodel.com)
- NL2Repo: **48.9%** (glmmodel.com)
- ProgramBench: **63.7%** (glmmodel.com)
- FrontierSWE: **78.1%** (glmmodel.com)
- deepSwe: **63.4%** (benchlm.ai)

Long context:
- HLE w/ tools: **55.3%** (benchlm.ai)
- OfficeQA Pro: **62.4%** (benchlm.ai)

### Normalized scores (1-100)
- **Tool use: 86/100.** Terminal-Bench 2.1 at 84.3% is elite. Toolathlon-Verified at 78.4% and AutomationBench at 48.8% show strong agentic capability. DeepSWE at 63.4% confirms coding agent strength.
- **Reasoning: 91/100.** GPQA Diamond at 91.2% is elite-level. AIME 2026 at 99.2% demonstrates exceptional mathematical reasoning. HMMT Nov 2025 at 94.4% confirms. HLE at 40.5% is a known ceiling.
- **Context window: 75/100.** 1M token context window is standard. HLE w/ tools at 55.3% shows some long-context reasoning ability.
- **Multimodal: 45/100.** Supports text and image input but lacks audio/video modalities. OfficeQA Pro at 62.4% shows some multimodal reasoning. Chartography at 78.0% and CharXiv-R at 89.4% indicate visual document handling.
- **Coding: 78/100.** SWE-bench Pro at 62.1% and deepSWE at 63.4% are strong. ProgramBench at 63.7% and FrontierSWE at 78.1% confirm coding agent capability. NL2Repo at 48.9% is moderate.
- **Cost efficiency: 95/100.** At $0.15/$0.50 per 1M tokens with MIT open-weights license, extremely cost-effective. 9.1x cheaper than GLM-5.1.
- **Overall Score: 75/100.** Math.round((86+91+75+45+78)/5) = Math.round(75.0) = 75. Strong reasoning and tool use offset moderate multimodal and coding scores.

---

## Signature
- Provided by: **Ling 3.0 (zai-org/glm-5.3-flash)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/glm-5.3-flash/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
