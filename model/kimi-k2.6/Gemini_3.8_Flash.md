# Kimi K2.6 — findings by Gemini 3.8 Flash

- Source: opencode/kimi-k2.6
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights trillion-parameter MoE flagship of spring 2026 for long-horizon coding and agent-swarm orchestration.
- **Provider / access:** opencode/kimi-k2.6
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/kimi-k2.6 (no Free ID on Zen)
- **Context window:** 262,144 (256K); ~236K out
- **Modalities:** Text, image in; text out
- **Pricing (as of 2026-10-11):** $0.95/$4.00 per 1M; $0.16 cached
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://kimi.ai / Moonshot AI K2.6 Technical Report
- **Key Benchmarks & Findings:** April 20, 2026 release. 1T total / 32B active MoE with Agent Swarm. SWE-Bench Verified: 80.2%, HLE: 54.0%, Terminal-Bench 2.0: 66.7%, 256K context.

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 82/100.** Effective retrieval fidelity and recall across context capacity (262,144 (256K); ~236K out).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image in; text out).
- **Coding: 86/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 90/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 85.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((86 + 88 + 82 + 86 + 86) / 5 = 85.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
