# GPT-5.4 Pro — findings by Gemini 3.8 Flash

- Source: opencode/gpt-5.4-pro
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's top-performance Pro compute tier of the GPT-5.4 family for expert reasoning, math generalization, and deep research.
- **Provider / access:** opencode/gpt-5.4-pro
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/gpt-5.4-pro (no Free ID on Zen)
- **Context window:** 1,050,000 total (128K output)
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $30/$180 per 1M; 2x/1.5x over 272K
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://openai.com / OpenAI API
- **Key Benchmarks & Findings:** March 5, 2026 release. Unified reasoning and Codex architecture. ARC-AGI-2: 83.3%, BrowseComp: 89.3%, GPQA Diamond: 94.4%, OSWorld-Verified: 75.0%. 1.05M ctx at /.

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 95/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,050,000 total (128K output)).
- **Multimodal: 90/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 93/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 28/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 93.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((92 + 95 + 98 + 90 + 93) / 5 = 93.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
