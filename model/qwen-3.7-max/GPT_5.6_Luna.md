# Qwen 3.7 Max — findings by GPT 5.6 Luna

- Source: Alibaba/Qwen3.7-Max
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Qwen 3.7 Max
- **Short description:** Qwen’s proprietary agent model for coding, office automation, MCP, and long-horizon execution.
- **Provider / access:** Alibaba Cloud Model Studio; exact API ID is `qwen3.7-max`.
- **Release / knowledge:** 2026-05-20 announcement.
- **IDs:** `qwen/qwen3.7-max`.
- **Context window:** Long-horizon execution is documented; exact token limit not located.
- **Modalities:** Text, coding, office workflows, MCP and multi-agent orchestration.
- **Pricing (as of 2026-10-05):** Not verified in the announcement.
- **Architecture:** Proprietary.

### Raw benchmarks found
- Terminal Bench 2.0-Terminus: **69.7%**.
- SWE-Bench Verified: **80.4%**.
- SpreadSheetBench-v1: **87**.
- Reported autonomous kernel optimization: **35 hours**, over **1,000 tool calls**.

### Normalized scores (1–100)
- **Tool use: 94/100.** 1,000+ tool-call long-horizon run and MCP support are unusually strong evidence.
- **Reasoning: 88/100.** Sustained autonomous execution supports high reasoning, though external general tests are sparse.
- **Context window: 86/100.** Long-horizon evidence is strong; exact window is unverified.
- **Multimodal: 35/100.** No verified vision/audio/video capability in the launch material.
- **Coding: 91/100.** SWE-Bench 80.4% and Terminal Bench 69.7% are strong.
- **Cost efficiency: 75/100.** Price not verified.
- **Overall Score: 78.8/100.** Excellent coding-agent and workflow automation model.

### Multi-source deep-research addendum (2026-10-09)

- Independent catalogue data reports Qwen 3.7 Max at 90.9% GPQA Diamond and documents a 1M context; practical coverage describes long-horizon agent execution and strong math/coding. Independent cost comparisons still warn that token usage can erase its nominal price advantage.
- Recalculation: retained existing score; the evidence reinforces capability but does not establish a stable cross-harness composite.
- Sources: https://token.app/model/qwen3.7-max ; https://www.youtube.com/watch?v=DFoAaPsMVAo ; https://www.techradar.com/pro/chinas-up-to-100x-cost-advantage-is-reshaping-the-ai-race

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://qwen.ai/blog?id=qwen3.7&locale=en
