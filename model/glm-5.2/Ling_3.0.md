# GLM-5.2 — findings by Ling 3.0

> Provided by: **Ling 3.0 (Zhipu/glm-5.2)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GLM-5.2
- **Short description:** Z.AI's flagship open-weight MoE model for long-horizon coding and agentic work; first open model in striking distance of closed frontier on agentic benchmarks.
- **Provider / access:** Z.AI API, Hugging Face, OpenRouter, Fireworks, Together, DeepInfra
- **Release / knowledge:** 2026-06-13
- **IDs:** zai-org/glm-5.2, glm-5.2
- **Context window:** 1,000,000 tokens, 131K max output
- **Modalities:** Text input; text output
- **Pricing (as of 2026-09-23):** $1.40/$4.40 per million input/output tokens (Z.AI); $0.95/$3.00 (DeepInfra)
- **Architecture:** 753B total params, 40B active, Mixture of Experts, MIT license, open weights

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **81.0%** (Z.AI official / glmmodel.com)
- Terminal-Bench 2.1 (best harness, Claude Code): **82.7%** (glmmodel.com)
- MCP-Atlas (public set): **76.8%** (Z.AI official)
- QwenClawBench: **54.1%** (BenchLM.ai)
- DeepSWE: **46.2%** (glmmodel.com)
- Tool-Decathlon: **48%** (glmmodel.com)

Reasoning / knowledge:
- GPQA Diamond: **91.2%** (glmmodel.com)
- HLE: **40.5%** (glmmodel.com)
- HLE w/ Tools: **54.7%** (glmmodel.com)
- CritPt: **20.9%** (glmmodel.com)
- AIME 2026: **99.2%** (glmmodel.com)
- HMMT Nov. 2025: **94.4%** (glmmodel.com)
- HMMT Feb. 2026: **92.5%** (glmmodel.com)
- IMO-AnswerBench: **91.0%** (glmmodel.com)
- AA Intelligence Index: **51** (Artificial Analysis)
- FrontierMath Tier 4: Not disclosed

Coding:
- SWE-bench Pro: **62.1%** (Z.AI official / glmmodel.com)
- FrontierSWE Dominance: **74.4%** (Z.AI official)
- SWE-bench Verified: **77.8%** (BenchLM.ai)
- NL2Repo: **48.9%** (glmmodel.com)
- SWE-Marathon: **13.0%** (glmmodel.com)
- PostTrainBench: **34.3%** (glmmodel.com)
- ProgramBench: **63.7%** (glmmodel.com)

Long context:
- 1M token context window; stable long-horizon agentic trajectories
- AA-LCR: Not separately reported

### Normalized scores (1-100)
- **Tool use: 88/100.** Terminal-Bench 2.1 (81.0%), MCP-Atlas (76.8%), DeepSWE (46.2%) — strong agentic terminal performance, near Opus 4.8 (85%) and GPT-5.5 (84%) on TB2.1.
- **Reasoning: 85/100.** GPQA Diamond (91.2%), AIME 2026 (99.2%), HLE w/ Tools (54.7%), HMMT (94.4%) — very strong math and reasoning; AA Intelligence Index (51) is lower due to broader eval set.
- **Context window: 98/100.** 1M token context window; explicitly designed for long-horizon coding-agent trajectories.
- **Multimodal: 15/100.** Text-only model; no image, audio, or video input support. Per rules, text-only = Multimodal 15.
- **Coding: 87/100.** SWE-bench Pro (62.1%), FrontierSWE (74.4%), SWE-bench Verified (77.8%), ProgramBench (63.7%) — top-tier open coding model, within striking distance of closed frontier.
- **Cost efficiency: 65/100.** $1.40/$4.40 paid pricing (no free tier on Zen); cheaper than closed models but not free.
- - **Overall Score: 75/100.** Mean of five non-cost dimensions: (88+85+98+15+87)/5 = 75.

---

## Signature
- Provided by: **Ling 3.0 (Zhipu/glm-5.2)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/glm-5.2/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
