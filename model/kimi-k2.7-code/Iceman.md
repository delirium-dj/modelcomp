# Kimi K2.7 Code — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `kimi-k2.7-code` (Kimi K2.7 Code, Moonshot AI) — folder: `model/kimi-k2.7-code`

## Overall
- **Overall Score: 84/100.** Coding-specialized 1T-class MoE model with 256K context, strong software-engineering/agent benchmark claims on its model card, and competitive API pricing, but narrower general/multimodal breadth than generalist Kimi models and limited independently verifiable primary docs beyond HF/platform pages.

## Scores
- **Tool use: 86/100.** HF model card positions it for long-horizon coding agents and reports strong agentic/tool-use results (e.g. τ²-Bench 90.1%, MCP-Atlas 62.4%, BrowseComp 63.8%, Terminal-Bench 2.0 71.2%), indicating suitability for tool-augmented development workflows.
- **Reasoning: 83/100.** Built on Kimi K2.5 base with coding specialization and RL; benchmark table shows solid reasoning-adjacent performance (e.g. MMLU-Pro 86.8%, GPQA-Diamond 86.2%, AIME 2025 96.1%), though optimized primarily for engineering tasks rather than broad frontier reasoning leadership.
- **Context window: 84/100.** 256K context window (262,144 tokens per model card/metadata) supports long codebase and multi-file agent sessions, but is smaller than 1M-class long-context models.
- **Multimodal: 76/100.** Metadata/model card indicate image and video input capability inherited/available in this line, but the model is explicitly specialized for coding; multimodal breadth and validation details are less emphasized than coding performance.
- **Coding: 91/100.** Strong coding focus with high reported results (e.g. SWE-bench Verified 78.2%, SWE-bench Pro 65.2%, SWE-bench Multilingual 71.3%, LiveCodeBench v6 85.0%, SciCode 61.8%), targeting long-horizon terminal/software-engineering work.
- **Cost efficiency: 82/100.** Moonshot pricing pages list K2-series context/pricing context (256K class; K2.5/K2 series tiers around ~$0.60-$0.95 input and ~$3-$4 output per 1M with caching discounts depending on model), offering reasonable cost for a large coding MoE though not the cheapest option.
- **Overall Score: 83/100.** Excellent choice for long-horizon agentic coding with strong benchmark claims and 256K context, balanced by narrower generalist scope and some reliance on model-card-reported metrics.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://huggingface.co/moonshotai/Kimi-K2.7-Code
  - https://platform.moonshot.ai/docs/pricing/chat
  - https://platform.moonshot.ai/docs/pricing/models

```text
ENRICH-PROPOSAL (scaffold-only, not written to disk):
target: model/kimi-k2.7-code/meta.json
field: officialUrl
proposed: https://huggingface.co/moonshotai/Kimi-K2.7-Code
source: https://huggingface.co/moonshotai/Kimi-K2.7-Code
```