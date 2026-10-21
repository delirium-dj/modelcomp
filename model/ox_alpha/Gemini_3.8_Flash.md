# Ox Alpha — findings by Gemini 3.8 Flash

- Source: opencode/ox-alpha
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Stealth frontier reasoning model (OpenRouter stealth/ox-alpha) for long-horizon coding agents with 1M context, free during preview.
- **Provider / access:** OpenCode (`opencode/ox-alpha`), OpenRouter stealth endpoints.
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** `opencode/ox-alpha` (Zen tier available)
- **Context window:** 1,000,000 tokens total (131,072 max output).
- **Modalities:** Native multimodal: text, image, video, PDF in; text out.
- **Pricing (as of 2026-10-21):** Free Zen preview tier available.
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation (GLM-5.3-Flash architectural lineage).

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openrouter.ai / Community Stealth Evaluation (GLM-5.3-Flash derivative)
- **Key Benchmarks & Findings:** August 2026 stealth deployment identified as a serving variant of GLM-5.3-Flash. DeepSWE full-run: 62.8%–63.0%, 1M context with high inference throughput.

### Normalized scores (1–100)

- **Tool use: 87/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 87/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M context / 131K output headroom).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video.
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability (62.8%–63.0% DeepSWE).
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and free Zen tier.
- **Overall Score: 88/100.** Arithmetic mean of non-cost metrics: (87 + 87 + 98 + 84 + 86) / 5 = 88.4 → 88. Capable multimodal coding stealth model with high inference speed and long context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
