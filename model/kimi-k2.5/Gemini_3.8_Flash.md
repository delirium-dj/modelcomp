# Kimi K2.5 — findings by Gemini 3.8 Flash

- Source: opencode/kimi-k2.5
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weights 1T-parameter MoE foundation model (32B active) featuring native Agent Swarm orchestration (up to 100 sub-agents), visual coding, and 256K context.
- **Provider / access:** Moonshot AI API, [OpenRouter](https://openrouter.ai/models/moonshotai/kimi-k2.5) (`moonshotai/kimi-k2.5`), OpenCode Zen, modified MIT open weights.
- **Release / knowledge:** January 2026.
- **IDs:** `opencode/kimi-k2.5`, `moonshotai/kimi-k2.5`, `kimi-k2.5`
- **Context window:** 262,144 tokens (256K context; up to 65,536 output).
- **Modalities:** Multimodal input (text, images, video); text output.
- **Pricing (as of 2026-10-21):** $0.60 / 1M input tokens, $3.00 / 1M output tokens ($0.08 cached input); open-weights available.
- **Architecture:** 1T total / 32B active MoE architecture trained on 15T mixed text and visual tokens with native parallel subagent dispatch.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **SWE-bench Verified:** 76.8%
- **AIME 2025 / 2026:** 96.1%
- **GPQA Diamond:** 87.6%
- **Agent Swarm Harness:** Successfully orchestrates up to 100 sub-agents across thousands of parallel tool-calling steps.
- **Visual Coding:** Direct video/image mockup-to-code transcription with high layout fidelity.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling via Agent Swarm.
- **Reasoning: 82/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (87.6% GPQA Diamond, 96.1% AIME).
- **Context window: 80/100.** Effective retrieval fidelity and recall across 262,144 token context window.
- **Multimodal: 86/100.** Input modality comprehension across images, video, and documents with visual frontend synthesis.
- **Coding: 82/100.** Verified software engineering, repository refactoring, and code generation capability (76.8% SWE-bench Verified).
- **Cost efficiency: 90/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 82/100.** Arithmetic mean of non-cost metrics: (78 + 82 + 80 + 86 + 82) / 5 = 81.6 → 82. Powerful open-weights multimodal trillion-parameter model with agent swarm capabilities.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Moonshot AI technical reports, OpenRouter endpoints, and open-weights benchmark trackers.
