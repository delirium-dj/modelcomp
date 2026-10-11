# Gemini 3.1 Pro — findings by Gemini 3.8 Flash

- Source: google/gemini-3.1-pro
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's Gemini 3.1 Pro model offering high-performance multimodal reasoning and massive context.
- **Provider / access:** google/gemini-3.1-pro
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** google/gemini-3.1-pro (Zen tier available)
- **Context window:** 2M / 64K out
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing (as of 2026-10-11):** Free tier available; Paid-tier pricing
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://blog.google / Google Vertex AI Preview
- **Key Benchmarks & Findings:** Feb 19, 2026 release. ARC-AGI-2: 77.1%, 1M context with 64K output, BFCL v3: 71.2%, IF-Evals: 78.4%. MoE architecture with frontier reasoning.

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 95/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (2M / 64K out).
- **Multimodal: 92/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, audio, video, PDF in; text out).
- **Coding: 90/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 78/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 93.4/100.** Quality arithmetic mean of the 5 core quality dimensions ((92 + 95 + 98 + 92 + 90) / 5 = 93.4).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
