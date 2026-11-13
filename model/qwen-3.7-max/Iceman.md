# Qwen 3.7 Max — Iceman findings

- Model (from kickoff): `Iceman` (opencode/iceman-free) — `AGENT_SOURCE_STEM: Iceman`
- Date: 2026-11-13
- Researched subject: `qwen-3.7-max` (Qwen3.7 Max, Alibaba/Qwen) — folder: `model/qwen-3.7-max`

## Overall
- **Overall Score: 78.6/100.** Proprietary long-context Qwen Max-tier model aimed at agentic coding and office/document automation with 1M context and strong reported coding benchmarks, but text-only modality and limited directly retrievable primary documentation reduce confidence in some details.

## Scores
- **Tool use: 86/100.** OpenRouter advertises support for tool-related parameters (`tools`, `tool_choice`) and reasoning controls for `qwen/qwen3.7-max`, indicating suitability for agentic/API workflows; repo metadata positions it for long-horizon coding and office automation.
- **Reasoning: 84/100.** Marketed as a Max-tier agent model with reasoning support in provider APIs; repo/meta cites strong coding/agent benchmarks (e.g. SWE-bench Verified 80.4%, SWE Pro 60.6%), but I could not retrieve the Qwen blog page for this exact version (404).
- **Context window: 95/100.** Repo metadata states 1,000,000 total context with 131,072 max output, well suited for long-horizon repository and document/office workflows.
- **Multimodal: 40/100.** Repo metadata specifies text in/out only, making it unsuitable for native image/video/audio understanding compared with multimodal Qwen and competitor models.
- **Coding: 88/100.** Positioned for long-horizon coding and automation with strong reported benchmark performance, and provider/tooling support suggests practical use in software engineering agents where text-only input is sufficient.
- **Cost efficiency: 82/100.** OpenRouter pricing indicates roughly ~$1.475/$4.425 to ~$2/$6 per 1M input/output depending on provider/tier, reasonable for a proprietary 1M-context Max model but not low-cost.
- **Overall Score: 84/100.** A capable text-only long-context proprietary agent/coding model with solid benchmark claims and tool support, limited by lack of multimodality and partially unavailable primary documentation.

- Signed: Iceman (opencode/iceman-free)
- Reference URLs:
  - https://openrouter.ai/qwen/qwen3.7-max
  - https://openrouter.ai/qwen/qwen3.7-max/api
  - https://qwenlm.github.io/
