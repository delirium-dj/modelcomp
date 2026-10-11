# Kimi K2.7 Code — findings by Gemini 3.8 Flash

- Source: opencode/kimi-k2.7-code
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's dedicated long-horizon coding model (June 2026), the coding-specialised cut of the Kimi K2 line; a general coding-agent workhorse that replaces K2.6 inside Kimi Code.
- **Provider / access:** opencode/kimi-k2.7-code
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/kimi-k2.7-code (no Free ID on Zen)
- **Context window:** 262,144 (256K)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** $0.95/$4.00 per 1M in/out; $0.19 cached input
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://kimi.ai / Moonshot AI K2.7 Code Technical Release
- **Key Benchmarks & Findings:** June 2026 release. 1T total / 32B active MoE with 30% reduction in thinking tokens. Kimi Code Bench v2: 62.0, MCP Mark: 81.1, handles 4,000+ tool call traces.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 87/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 82/100.** Effective retrieval fidelity and recall across context capacity (262,144 (256K)).
- **Multimodal: 84/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 89/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 85.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 87 + 82 + 84 + 89) / 5 = 85.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
