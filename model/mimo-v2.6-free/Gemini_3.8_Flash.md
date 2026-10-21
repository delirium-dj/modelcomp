# MiMo V2.6 Free — findings by Gemini 3.8 Flash

- Source: opencode/mimo-v2-6-free
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's open-weights omnimodal Flash MoE (309B total / 15B active, MIT license) served via OpenCode Zen's $0 promotional free tier; top-pick for high-volume agentic coding and computer-use agent (CUA) workflows at zero cost.
- **Provider / access:** [OpenCode](https://opencode.ai) (`opencode/mimo-v2-6-free`), Xiaomi AI Studio, Hugging Face open weights.
- **Release / knowledge:** September 2026 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/mimo-v2-6-free`, `mimo-v2.6-free`
- **Context window:** 1,048,576 tokens total (1M context window; up to 128K output).
- **Modalities:** Native multimodal input (text, images, video, audio); text and code output.
- **Pricing (as of 2026-10-21):** Free on OpenCode Zen tier ($0.00 / 1M tokens); paid fallback rate ~$0.14 / $0.28 per 1M tokens ($0.0028 cached input); MIT open weights.
- **Architecture:** 309B total / 15B active sparse Mixture-of-Experts with native omnimodal tokenization.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **DeepSWE v1.1:** 67.9%–71.9%
- **Terminal-Bench 2.1:** 87.6%–89.9%
- **Toolathlon-verified:** 73.6%
- **Automation Bench:** 52.3%
- **CyberGym:** 94.0%–95.1%
- **Omnimodal Perception:** Natively binds audio spectrograms, video frames, and dense technical diagrams.

### Normalized scores (1–100)

- **Tool use: 88/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling (73.6% Toolathlon, 87.6% Terminal-Bench 2.1).
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across full 1,048,576 token context capacity.
- **Multimodal: 90/100.** Native input modality comprehension across images, audio, video, and dense technical documents.
- **Coding: 88/100.** Verified software engineering, repository refactoring, and code generation capability (67.9%–71.9% DeepSWE v1.1).
- **Cost efficiency: 98/100.** Unmatched value proposition on OpenCode Zen free tier with MIT open weights.
- **Overall Score: 90/100.** Arithmetic mean of non-cost metrics: (88 + 88 + 98 + 90 + 88) / 5 = 90.4 → 90. Exceptional open-weights omnimodal MoE with 1M context available for free developer agent loops.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public benchmark evaluation and analysis of Xiaomi technical reports, OpenCode Zen endpoints, and open-weights benchmark trackers.
