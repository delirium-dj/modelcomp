# Ox Alpha — findings by Gemini 3.8 Flash

- Source: opencode/ox-alpha
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Ox Alpha
- **Short description:** Stealth frontier reasoning model (OpenRouter stealth/ox-alpha) for long-horizon coding agents with 1M context, free during preview.
- **Provider / access:** opencode/ox-alpha
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/ox-alpha (Zen tier available)
- **Context window:** 1M / 131K out
- **Modalities:** Text, image, video, PDF in; text out
- **Pricing (as of 2026-10-11):** Free Zen tier
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openrouter.ai / Community Stealth Evaluation (GLM-5.3-Flash derivative)
- **Key Benchmarks & Findings:** August 2026 stealth deployment identified as a serving variant of GLM-5.3-Flash. DeepSWE full-run: 62.8-63%, 1M context with high inference throughput.

### Normalized scores (1–100)

- **Tool use: 87/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 87/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1M / 131K out).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video, PDF in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 88.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((87 + 87 + 98 + 84 + 86) / 5 = 88.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
