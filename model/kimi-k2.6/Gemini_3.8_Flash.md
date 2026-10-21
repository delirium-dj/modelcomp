# Kimi K2.6 — findings by Gemini 3.8 Flash

- Source: opencode/kimi-k2.6
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights trillion-parameter MoE flagship (32B active) for long-horizon execution and massive Agent Swarms (orchestrating up to 300 specialized sub-agents and 4,000+ steps).
- **Provider / access:** Moonshot AI API, [OpenRouter](https://openrouter.ai/models/moonshotai/kimi-k2.6) (`moonshotai/kimi-k2.6`), OpenCode Zen.
- **Release / knowledge:** April 20, 2026.
- **IDs:** `opencode/kimi-k2.6`, `moonshotai/kimi-k2.6`, `kimi-k2.6`
- **Context window:** 262,144 tokens (256K context; ~236K output capacity).
- **Modalities:** Multimodal input (text, images); text output.
- **Pricing (as of 2026-10-21):** $0.95 / 1M input tokens, $4.00 / 1M output tokens ($0.16 cached input).
- **Architecture:** 1T total / 32B active MoE with expanded Agent Swarm layer supporting 12+ hour autonomous background programming pipelines.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **SWE-bench Verified:** 80.2%
- **Humanity's Last Exam (HLE):** 54.0%
- **Terminal-Bench 2.0:** 66.7%
- **Agent Swarm Scale:** Coordinates up to 300 specialized sub-agents across 4,000+ autonomous steps.
- **Polyglot Coding:** Deeply optimized across Rust, Go, Python, and C++.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling across large agent swarms.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (54.0% HLE).
- **Context window: 82/100.** Effective retrieval fidelity and recall across 262,144 token context capacity.
- **Multimodal: 86/100.** Input modality comprehension across images and multi-document layouts.
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability (80.2% SWE-bench Verified).
- **Cost efficiency: 90/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 86/100.** Arithmetic mean of non-cost metrics: (86 + 88 + 82 + 86 + 86) / 5 = 85.6 → 86. State-of-the-art open-weights agent swarm coordinator for massive multi-file coding workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Moonshot AI technical documentation, OpenRouter endpoints, and third-party evaluations.
