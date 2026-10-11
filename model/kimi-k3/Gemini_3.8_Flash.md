# Kimi K3 — findings by Gemini 3.8 Flash

- Source: moonshotai/kimi-k3
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with a 1M-token input and output window, frontier multimodal document/math reasoning and terminal-agent coding; proprietary, premium priced.
- **Provider / access:** moonshotai/kimi-k3
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** moonshotai/kimi-k3 (no Free ID on Zen)
- **Context window:** 1,048,576 (1M) in / 1M out
- **Modalities:** Text, image, document in; text out
- **Pricing (as of 2026-10-11):** Paid $3.00/$15.00 per 1M ($0.30 cached) — no Zen Free ID
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://kimi.ai / Moonshot AI K3 Technical Report
- **Key Benchmarks & Findings:** July 2026 release. 2.8T total / 104B active MoE with Kimi Delta Attention. GPQA Diamond: 93.5%, GDPval-AA v2 Elo: 1668, AutomationBench-AA #1 (53%), HLE-Full: 43.5%. 1M context.

### Normalized scores (1–100)

- **Tool use: 92/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 94/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 98/100.** Effective retrieval fidelity and recall across context capacity (1,048,576 (1M) in / 1M out).
- **Multimodal: 90/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, document in; text out).
- **Coding: 92/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 86/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 93.2/100.** Quality arithmetic mean of the 5 core quality dimensions ((92 + 94 + 98 + 90 + 92) / 5 = 93.2).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
