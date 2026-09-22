# GLM 5.3 Free — findings by Ling 3.0

> Provided by: **Ling 3.0 (opencode/glm-5.3-free)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GLM 5.3 Free
- **Short description:** Z.AI's flagship open-weights GLM-5.3 MoE model optimized for agentic software development, complex reasoning, and multi-step tool execution.
- **Provider / access:** Z.AI / Zhipu AI (`opencode/glm-5.3-free`, `zai-org/GLM-5.3`)
- **Release / knowledge:** August 14, 2026 (GLM-5.3); weights publicly available via HuggingFace
- **IDs:** opencode/glm-5.3-free
- **Context window:** 204K tokens
- **Modalities:** Text in/out
- **Pricing (as of 2026-09-23):** Free Zen tier available
- **Architecture:** 320B MoE, ~18B active; hybrid linear + sparse attention; MIT license

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1 (GLM-5.3): **88.2%** (z.ai official blog)
- Terminal-Bench 3.0 (GLM-5.3): **28.3%** (llm-stats.com, rank #1)
- DeepSWE 1.1: **66.9%** (z.ai official blog)
- Toolathlon Verified: **73.0%** (z.ai official blog)
- CyberGym: **84.5%** (z.ai official blog)
- AutomationBench v1.0.6: **48.2%** (z.ai official blog)
- Agents' Last Exam ALE-CLI: **28.5%** (z.ai official blog)
- ProgramBench Almost Solved: **19.0%** (z.ai official blog)

Reasoning / knowledge:
- GPQA Diamond: **91.7%** (regolo.ai comparison table)
- HLE w/ Tools: **62.5%** (z.ai official blog)
- GDPval-AA v2: **1769** (z.ai official blog)

Coding:
- SWE-bench Pro: **64.6%** (hy4 benchmarks page, GLM-5.3 column)
- FrontierSWE: **78.1%** (z.ai official blog)
- SWE-Marathon v1.1: **42.5%** (z.ai official blog)
- LiveCodeBench: **~91.9** (regolo.ai, GLM-5.3-Flash variant)
- NL2Repo: **58.0%** (z.ai official blog)

Long context:
- No specific long-context benchmark found for GLM-5.3; 204K context window

### Normalized scores (1-100)
- **Tool use: 80/100.** Terminal-Bench 2.1 at 88.2% and Terminal-Bench 3.0 at 28.3% (rank #1) demonstrate exceptional agentic tool use; DeepSWE 66.9%, Toolathlon 73.0%, and CyberGym 84.5% confirm strong multi-tool coordination.
- **Reasoning: 80/100.** GPQA Diamond 91.7% is near-frontier; HLE w/ Tools 62.5% shows strong reasoning with tool assistance; the GLM-5.3 family ranks highly on multiple reasoning benchmarks.
- **Context window: 55/100.** 204K context window is modest compared to 1M+ frontier models; long-context benchmarks are not prominently reported.
- **Multimodal: 15/100.** Text-only model; no image, audio, or video modalities supported.
- **Coding: 80/100.** SWE-bench Pro 64.6%, FrontierSWE 78.1%, and LiveCodeBench ~91.9 demonstrate excellent coding capability; the model was explicitly designed for agentic software development.
- **Cost efficiency: 100/100.** Free Zen tier available; MIT license allows self-hosting; among the most cost-effective frontier models.
- **Overall Score: 62/100.** Exceptional tool use and coding performance with strong reasoning, offset by a modest context window and text-only modality.

---

## Signature
- Provided by: **Ling 3.0 (opencode/glm-5.3-free)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/glm-5.3-free/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
