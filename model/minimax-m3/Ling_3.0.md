# MiniMax M3 — findings by Ling 3.0

> Provided by: **Ling 3.0 (minimax/minimax-m3)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** MiniMax M3
- **Short description:** Open-weights MoE model with 428B parameters, 1M context window, and strong multimodal coding agent capabilities.
- **Provider / access:** MiniMax; API ID: `minimax/m3`
- **Release / knowledge:** June 1, 2026; open weights (MIT license)
- **IDs:** minimax/minimax-m3
- **Context window:** 1,048,576 tokens
- **Modalities:** text, image input; text output
- **Pricing (as of 2026-09-23):** $0.30 / $1.20 per 1M input/output tokens
- **Architecture:** MoE with 428B total parameters; 1M context window; multimodal coding agent

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.0: **66.0%** (morphllm.com)
- Terminal-Bench 2.1 (Vals): **53.56%** (benchlm.ai / vals.ai)
- BrowseComp: **83.52%** (modelscale.dev)
- MCP-Atlas: **74.2%** (glmmodel.com)
- AA Agentic Index: **31.0** (llm.ing)
- GDPval-AA: **1304** (modelscale.dev)

Reasoning / knowledge:
- GPQA Diamond: **93.0%** (glmmodel.com)
- AA-GPQA Diamond: **92.9%** (modelscale.dev)
- HLE: **37.0%** (glmmodel.com)
- AIME 2026: **84.4%** (glmmodel.com)
- HMMT Nov 2025: **84.4%** (glmmodel.com)

Coding:
- SWE-bench Verified: **80.5%** (llm-stats.com / morphllm.com)
- SWE-bench Pro: **59.0%** (glmmodel.com)
- LiveCodeBench (Vals): **82.2%** (modelscale.dev)
- SWE-bench (Vals): **75.0%** (modelscale.dev)
- VIBE V2: **50.1%** (modelscale.dev)
- FrontierSWE Dominance: **52%** (glmmodel.com)

Long context:
- MRCRv2: **77.3%** (benchlm.ai)

### Normalized scores (1-100)
- **Tool use: 72/100.** BrowseComp at 83.52% and MCP-Atlas at 74.2% show strong web and tool capabilities. Terminal-Bench 2.0 at 66.0% is moderate. Agentic Index of 31.0 (Artificial Analysis) is low.
- **Reasoning: 88/100.** GPQA Diamond at 93.0% is elite-level graduate science reasoning. HLE at 37.0% and AIME 2026 at 84.4% confirm strong mathematical and reasoning abilities.
- **Context window: 80/100.** 1M token context window is standard for frontier models. MRCRv2 at 77.3% shows strong long-context retention.
- **Multimodal: 50/100.** Supports text and image input. AA-GPQA Diamond at 92.9% and BrowseComp at 83.52% show multimodal reasoning strength. But lacks audio/video modalities.
- **Coding: 85/100.** SWE-bench Verified at 80.5% is strong. LiveCodeBench at 82.2% confirms competitive programming ability. SWE-bench Pro at 59.0% is solid.
- **Cost efficiency: 95/100.** At $0.30/$1.20 per 1M tokens with MIT open-weights license, very cost-effective. Open weights enable self-hosting.
- **Overall Score: 75/100.** Math.round((72+88+80+50+85)/5) = Math.round(75.0) = 75. Strong reasoning and coding offset a lower tool use score.

---

## Signature
- Provided by: **Ling 3.0 (minimax/minimax-m3)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/minimax-m3/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
