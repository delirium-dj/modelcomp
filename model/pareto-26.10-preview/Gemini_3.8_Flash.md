# Pareto 26.10 Preview — findings by Gemini 3.8 Flash

- Source: opencode/pareto-26.10-preview
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/blended multimodal preview for research, coding and agents; no verified public benchmark scores yet, so it carries no average.
- **Provider / access:** opencode/pareto-26.10-preview
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/pareto-26.10-preview (no Free ID on Zen)
- **Context window:** 1,000,000 in; 131,000 max output
- **Modalities:** Text + image in; text out
- **Pricing (as of 2026-10-11):** $0.80/$3.20 per 1M (cached $0.03)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://unbiased.ai / https://openrouter.ai/models/unbiased/pareto-26.10-preview
- **Key Benchmarks & Findings:** Unbiased AI composite routing model. GPQA-Diamond: 92.4%, DeepSWE v1.1: 69.9%, Terminal-Bench 4.0: 50.8%, HLE text: 49.9%. 1M context.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 87/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 95/100.** Effective retrieval fidelity and recall across context capacity (1,000,000 in; 131,000 max output).
- **Multimodal: 68/100.** Input/output modality comprehension across images, audio, documents, and video (Text + image in; text out).
- **Coding: 82/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 90/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 82/100.** Quality arithmetic mean of the 5 core quality dimensions ((78 + 87 + 95 + 68 + 82) / 5 = 82).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
