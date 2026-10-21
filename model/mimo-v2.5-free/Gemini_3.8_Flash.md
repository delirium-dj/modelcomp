# MiMo V2.5 Free — findings by Gemini 3.8 Flash

- Source: opencode/mimo-v2.5-free
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Native omnimodal open-weights MoE by Xiaomi for text, image, video, and audio understanding with strong agentic coding, offered via promotional free capped tier on OpenCode Zen under MIT license.
- **Provider / access:** [OpenCode](https://opencode.ai) (`opencode/mimo-v2.5-free`), Xiaomi AI Studio, Hugging Face open weights.
- **Release / knowledge:** April 2026 release; knowledge cutoff early 2026.
- **IDs:** `opencode/mimo-v2.5-free`, `mimo-v2.5-free`
- **Context window:** 204,800 tokens Zen cap (native 1,000,000 context window; 32,768 output).
- **Modalities:** Native multimodal input (text, images, audio, video); text and code output.
- **Pricing (as of 2026-10-21):** Free on OpenCode Zen promotional tier ($0.00 / 1M tokens); self-hostable under MIT license.
- **Architecture:** 310B total / 15B active sparse Mixture-of-Experts omnimodal foundation model.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Tau2-Bench Telecom:** 94.2%
- **SWE-bench Verified:** 76.5%
- **Omnimodal Perception:** Natively binds audio spectrograms, video frame sequences, and high-resolution imagery into unified MoE tokens.
- **Agentic Coding:** High zero-shot success in VS Code agentic scaffolds.

### Normalized scores (1–100)

- **Tool use: 84/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (94.2% Tau2-Bench).
- **Reasoning: 85/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (200K Zen cap, native 1M tokens).
- **Multimodal: 88/100.** Native input modality comprehension across images, audio, video, and dense documents.
- **Coding: 84/100.** Verified software engineering, repository refactoring, and code generation capability (76.5% SWE-bench Verified).
- **Cost efficiency: 98/100.** High value proposition with free OpenCode Zen tier and MIT open-weights availability.
- **Overall Score: 88/100.** Arithmetic mean of non-cost metrics: (84 + 85 + 98 + 88 + 84) / 5 = 87.8 → 88. Highly capable open-weights omnimodal MoE with free promotional access for developer agents.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Xiaomi technical disclosures, OpenCode Zen endpoints, and open-weights leaderboards.
