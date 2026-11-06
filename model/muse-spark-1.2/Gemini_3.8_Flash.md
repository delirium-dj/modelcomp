# Muse Spark 1.2 — findings by Gemini 3.8 Flash

- Source: opencode/muse-spark-1.2
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta Superintelligence Labs' frontier coding/agent model co-trained with Muse Code for terminal coding, MCP tool use, multi-file refactoring, and whole-repo generation. Contributor, Free and Max share identical weights — pricing and data retention tiers distinguish usage.
- **Provider / access:** opencode/muse-spark-1.2, Meta Model API, OpenRouter, and Opper.
- **Release / knowledge:** August 5, 2026 release; verified via official documentation & independent evaluations.
- **IDs:** `opencode/muse-spark-1.2` (Zen tier available)
- **Context window:** 1,048,576 (1M context window with full-retrieval recall)
- **Modalities:** Text, image, audio, video, PDF in; text and structured code out
- **Pricing (as of 2026-11-06):** Free Zen tier; Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M ($0.15 cache read).
- **Architecture:** Multimodal frontier transformer optimized for asynchronous subagent execution and MCP server integration.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** [Artificial Analysis](https://artificialanalysis.ai/models/muse-spark-1-2) / Meta Superintelligence Labs
- **Key Benchmarks & Findings:** Aug 5, 2026 release.
  - Artificial Analysis Intelligence Index: **54** (xhigh reasoning effort; +3 over 1.1, +11 over 1.0)
  - GDPval-AA v2 Elo: **1631** (#5 globally)
  - Terminal-Bench 2.1: **82.9** (evaluated natively inside Muse Code runtime)
  - MCP Atlas: **90.3%**
  - DeepSWE 1.1: **59.3%**
  - Hallucination / Abstention: Structured abstention reduces hallucination rate from 38% down to 28% on complex refactoring tasks.
  - Context Window: 1,048,576 (1M tokens).

### Normalized scores (1–100)

- **Tool use: 91/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and 90.3% on MCP Atlas.
- **Reasoning: 92/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and AA Intelligence Index of 54.
- **Context window: 98/100.** Effective retrieval fidelity and recall across 1M context capacity.
- **Multimodal: 88/100.** Input/output modality comprehension across images, audio, documents, and video.
- **Coding: 91/100.** High-level software engineering prowess with 82.9 on Terminal-Bench 2.1 and 59.3% on DeepSWE 1.1.
- **Cost efficiency: 86/100.** Excellent value proposition relative to frontier intelligence ($1.25/$4.25 standard, $0.10/$0.20 contributor tier).
- **Overall Score: 92/100.** Quality arithmetic mean of the 5 core quality dimensions: (91 + 92 + 98 + 88 + 91) / 5 = 92/100.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research into Meta Superintelligence Labs announcements, Artificial Analysis evaluations, and OpenRouter documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
