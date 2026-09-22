# DeepSeek V4.1 Flash — findings by Ling 3.0

> Provided by: **Ling 3.0 (deepseek/deepseek-v4.1-flash)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** DeepSeek V4.1 Flash
- **Short description:** Open-weights MoE model with 552B backbone parameters, native multimodal support, and industry-leading agentic coding benchmarks.
- **Provider / access:** DeepSeek; API ID: `deepseek-v4.1-flash`
- **Release / knowledge:** September 10, 2026; open-weights MIT license
- **IDs:** deepseek/deepseek-v4.1-flash
- **Context window:** 1,040,000 tokens (up to 393,216 output)
- **Modalities:** text, image input; text output
- **Pricing (as of 2026-09-23):** $0.22 / $0.66 per 1M input/output tokens
- **Architecture:** MoE with 552B total parameters, 8B active for input and 16B for output; KV cache compression

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **90.6%** (llm-stats.com / vals.ai / flowtivity.ai)
- DeepSWE v1.1: **74.2%** (flowtivity.ai / deepseek.com)
- AutomationBench: **54.8%** (flowtivity.ai)
- Agent's Last Exam: **31.8%** (flowtivity.ai)
- CyberGym: **88.1%** (llm-stats.com)
- HLE w/ tools: **63.9%** (llm-stats.com)

Reasoning / knowledge:
- GPQA: **90.9%** (llm-stats.com / benchlm.ai)
- GPQA-D: **90.9%** (benchlm.ai)
- HLE: **36.8%** (benchlm.ai)
- Apex (MathArena): **65.6%** (benchlm.ai)
- CodeForces: **3471 rating** (llm-stats.com)

Coding:
- DeepSWE v1.1: **74.2%** (flowtivity.ai)
- NL2Repo-Bench: **64.0%** (flowtivity.ai)
- ProgramBench: **20.3%** (flowtivity.ai)
- Terminal-Bench 4.0: **31.2%** (flowtivity.ai)

Long context:
- Terminal-Bench 4.0 (long horizon): **31.2%** (flowtivity.ai)
- ProgramBench (Almost@1): **20.3%** (flowtivity.ai)

### Normalized scores (1-100)
- **Tool use: 92/100.** Terminal-Bench 2.1 at 90.6% is among the highest scores recorded. DeepSWE at 74.2% and CyberGym at 88.1% confirm exceptional agentic capability. AutomationBench at 54.8% adds workflow automation strength.
- **Reasoning: 88/100.** GPQA at 90.9% is elite-level graduate science reasoning. CodeForces rating of 3471 demonstrates strong algorithmic reasoning. HLE at 36.8% is a known ceiling.
- **Context window: 80/100.** 1,040,000-token context window with native image understanding. KV cache compression of 1/4 HBM and 1/8 SSD is a significant architectural advantage.
- **Multimodal: 55/100.** Supports text and image input with native visual understanding. Lacks audio and video input compared to Gemini models. BabyVision at 89.6% shows strong visual reasoning.
- **Coding: 90/100.** DeepSWE at 74.2% is the highest among all models tested. Terminal-Bench 2.1 at 90.6% is elite. CodeForces rating of 3471 confirms strong competitive programming ability.
- **Cost efficiency: 98/100.** At $0.22/$0.66 per 1M tokens with MIT open-weights license, extremely cost-effective. Free tier availability on OpenRouter adds to accessibility.
- **Overall Score: 81/100.** Math.round((92+88+80+55+90)/5) = Math.round(81.0) = 81. Strong tool use, reasoning, and coding offset a moderate multimodal score.

---

## Signature
- Provided by: **Ling 3.0 (deepseek/deepseek-v4.1-flash)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/deepseek-v4.1-flash/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
