# Solar Pro 4 — findings by Ling 3.0

> Provided by: **Ling 3.0 (Upstage/solar-pro-4)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Solar Pro 4
- **Short description:** Upstage's proprietary reasoning-focused agentic LLM; 512K context window with up to 128K output, built for multi-step commercial work including document review and terminal tasks.
- **Provider / access:** Upstage Console, OpenRouter, Hermes Agent
- **Release / knowledge:** 2026-08-06
- **IDs:** upstage/solar-pro4
- **Context window:** 524,288 tokens input, 131,072 max output
- **Modalities:** Text input; text output
- **Pricing (as of 2026-09-23):** $0.30/$1.20 per million input/output tokens ($0.06 cached input)
- **Architecture:** Undisclosed params, transformer decoder, 512K context, proprietary

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **57.0%** (Upstage launch post / Benchgen)
- τ³ Banking: **23.0%** (Upstage launch post)
- MCP-Atlas: **61.4%** (Upstage launch post)
- BrowseComp: **49.2%** (Upstage launch post)
- AA Agentic Index: **33.6** (TheVibeFather)

Reasoning / knowledge:
- GPQA Diamond: **89.0%** (Upstage launch post / Benchgen)
- AA-LCR: **71.0%** (Upstage launch post)
- HLE: Not reported
- MMLU-Pro: **86.3%** (llm-stats.com)
- AIME 2026: **95.3%** (llm-stats.com)
- AA Intelligence Index: **~42** (TheVibeFather)
- GDPval-AA: **~1276 Elo** (Upstage launch post)

Coding:
- SWE-bench Verified: **70.6%** (Upstage launch post / Benchgen)
- Terminal-Bench 2.1: **57.0%** (Upstage launch post)
- AA Coding Index: **52.7** (TheVibeFather)
- SciCode: **48.6** (Artificial Analysis)
- LiveCodeBench: **87.8%** (llm-stats.com)

Long context:
- 512K token context window; 128K max output
- AA-LCR (71.0%) shows strong long-context reasoning improvement from Solar Pro 3 (31%)

### Normalized scores (1-100)
- **Tool use: 45/100.** Terminal-Bench 2.1 (57.0%), MCP-Atlas (61.4%), τ³ Banking (23%), BrowseComp (49.2%) — moderate agentic tool-use; AA Agentic Index (33.6) is below frontier.
- **Reasoning: 75/100.** GPQA Diamond (89.0%), AA-LCR (71.0%), MMLU-Pro (86.3%), AIME 2026 (95.3%) — strong reasoning on science and math; AA Intelligence Index (~42) is lower.
- **Context window: 75/100.** 512K token context window; larger than 200K-300K models but smaller than 1M competitors; 128K output cap.
- **Multimodal: 15/100.** Text-only model; no image, audio, or video input support. Per rules, text-only = Multimodal 15.
- **Coding: 68/100.** SWE-bench Verified (70.6%), Terminal-Bench 2.1 (57.0%), LiveCodeBench (87.8%), AA Coding Index (52.7) — solid coding; LiveCodeBench is notably strong.
- **Cost efficiency: 100/100.** $0.30/$1.20 per million tokens; 90% launch discount through September 10, 2026; among the cheapest frontier-tier models.
- - **Overall Score: 56/100.** Mean of five non-cost dimensions: (45+75+75+15+68)/5 = 56.

---

## Signature
- Provided by: **Ling 3.0 (Upstage/solar-pro-4)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/solar-pro-4/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
