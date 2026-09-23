# GLM-5.2 — findings by Ling 3.0

> Provided by: **Ling 3.0 (zai-org/glm-5.2)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GLM-5.2
- **Short description:** Z.ai's flagship open-weight MoE model for long-horizon agentic coding with 1M-context and IndexShare sparse attention.
- **Provider / access:** zai-org/glm-5.2 (Hugging Face, Z.ai API, NVIDIA NIM, DeepInfra, OpenRouter)
- **Release / knowledge:** June 16, 2026
- **IDs:** zai-org/glm-5.2
- **Context window:** 1,048,576 tokens
- **Modalities:** Text → Text (text-only)
- **Pricing (as of 2026-09-23):** $1.40/$4.40 per 1M input/output (Z.ai official); $0.95/$3.00 via some routes; MIT open weights
- **Architecture:** 753B total, ~40B active per token, Mixture-of-Experts with IndexShare and MTP; MIT license

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **81.0%** (Z.ai official blog, glmmodel.com, GitHub README)
- MCP-Atlas: **76.8%** (Z.ai official benchmark table)
- ProgramBench: **63.7%** (Z.ai official benchmark table)
- Tool-Decathlon: **48.2%** (Z.ai official benchmark table)

Reasoning / knowledge:
- GPQA Diamond: **91.2%** (Z.ai official Hugging Face model card, BenchLM leaderboard #21)
- HLE: **40.5%** (Z.ai official benchmark table)
- HLE w/ Tools: **54.7%** (Z.ai official benchmark table)
- AIME 2026: **99.2%** (Z.ai official benchmark table)
- Intelligence Index: **52.6** (CommandCode model page)

Coding:
- SWE-bench Pro: **62.1%** (Z.ai official blog, Featherless, glmmodel.com)
- FrontierSWE: **74.4%** (Featherless blog, glmmodel.com)
- DeepSWE: **46.2%** (Z.ai official benchmark table)
- NL2Repo: **48.9%** (Z.ai official benchmark table)
- SWE-Marathon: **13.0%** (Featherless blog)

Long context:
- 1M-token context with IndexShare architecture reducing per-token FLOPs by 2.9x at 1M (Z.ai technical report, NVIDIA NGC)
- SWE-Marathon 13.0% at 1M context (ultra-long-horizon test)

### Normalized scores (1-100)
- **Tool use: 85/100.** Terminal-Bench 2.1 at 81.0% is among the highest open-source scores; MCP-Atlas 76.8% confirms strong agentic tool-calling; ProgramBench 63.7% adds multi-step execution evidence.
- **Reasoning: 80/100.** GPQA Diamond 91.2% and AIME 2026 99.2% are frontier-level; HLE 40.5% (54.7% with tools) is solid but below the very top (Opus 4.8 ~49.8%); Intelligence Index 52.6 is mid-tier.
- **Context window: 95/100.** Full 1M-token context window with demonstrated stability across long-horizon tasks; IndexShare architecture specifically designed for efficient long-context reasoning.
- **Multimodal: 15/100.** Text-only model; no image, audio, video, or PDF input capabilities.
- **Coding: 80/100.** SWE-bench Pro 62.1% clears GPT-5.5 and Gemini 3.1 Pro; DeepSWE 46.2% and FrontierSWE 74.4% show strong long-horizon coding; TB 2.1 81.0% is top-tier agentic coding.
- **Cost efficiency: 60/100.** Paid model at $1.40/$4.40 per 1M tokens; not available on any free tier; competitive for an open-weight frontier model but not cost-efficient.
- **Overall Score: 71/100.** Strong across all five quality dimensions: excellent tool use and reasoning, full 1M context, solid coding, but held back by text-only modality and paid pricing. (85+80+95+15+80)/5 = 71.0.

---

## Signature
- Provided by: **Ling 3.0 (zai-org/glm-5.2)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/glm-5.2-coding/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
