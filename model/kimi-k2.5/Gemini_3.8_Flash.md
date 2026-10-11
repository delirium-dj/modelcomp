# Kimi K2.5 — findings by Gemini 3.8 Flash

- Source: opencode/kimi-k2.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T-parameter MoE flagship (1T total / 32B active) for long-context agents, coding and multimodal work.
- **Provider / access:** opencode/kimi-k2.5
- **Release / knowledge:** 2026 release; verified via official documentation & independent evaluations.
- **IDs:** opencode/kimi-k2.5 (no Free ID on Zen)
- **Context window:** 262,144 total (65,536 out)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** $0.60/$3.00 per 1M in/out (OpenCode Zen), cached input $0.08
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://kimi.ai / Moonshot AI K2.5 technical release
- **Key Benchmarks & Findings:** Moonshot AI 1T total / 32B active MoE. AIME 2025: 96.1, GPQA-Diamond: 87.6, SWE-Bench Verified: 76.8%, Agent Swarm 100 sub-agents.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 82/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving.
- **Context window: 80/100.** Effective retrieval fidelity and recall across context capacity (262,144 total (65,536 out)).
- **Multimodal: 86/100.** Input/output modality comprehension across images, audio, documents, and video (Text, image, video in; text out).
- **Coding: 82/100.** Verified software engineering, repository refactoring, and code generation capability.
- **Cost efficiency: 90/100.** Value proposition relative to performance, cache hit economics, and pricing tiers.
- **Overall Score: 81.6/100.** Quality arithmetic mean of the 5 core quality dimensions ((78 + 82 + 80 + 86 + 82) / 5 = 81.6).

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
