# Grok 4.7 — findings by Gemini 3.6 Flash

- Source: xAI (`xai/grok-4.7`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's flagship frontier reasoning and agentic model trained with extended reinforcement learning for self-verification, long-horizon software engineering, and multi-hour complex task execution.
- **Provider / access:** xAI API (`xai/grok-4.7`), Cursor, Grok Build, Amazon Bedrock, OpenRouter.
- **Release / knowledge:** September 21, 2026 release; knowledge cutoff August 2026.
- **IDs:** `xai/grok-4.7`
- **Context window:** 500,000 tokens (500K tokens) input / 65,536 max output tokens — verified via xAI platform documentation.
- **Modalities:** Multimodal input (text, image, charts); text and tool action output; real-time platform search; configurable reasoning effort (`low`, `medium`, `high`, `xhigh` — default `high`); structured JSON mode.
- **Pricing (as of October 2026):** $2.00 / 1M input, $6.00 / 1M output tokens ($0.20 / 1M cached input).
- **Architecture:** Scaled foundation transformer trained with extended reinforcement learning for agent endurance and autonomous self-verification.

### Raw benchmarks found

Agent / tool use & Coding Harness:

- DeepSWE v1.1: **71.0%** (up from 65.2% on Grok 4.6)
- Terminal-Bench 4.0: **38.0%** (vs. 20.3% on Grok 4.6)
- CursorBench 4.0: **46.3%**
- Artificial Analysis Coding Agent Index: **56** (+9 points over Grok 4.6 with Grok Build harness)
- EEBench (Electrical Engineering): **64.0%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46** (xHigh reasoning effort)
- GDPval-AA: **1,850 Elo**
- Self-Verification & Task Recovery: High reliability in autonomous multi-step bug localization
- Omniscience Accuracy / Hallucination Rate: **88.5% / 2.8%**

Coding:

- SWE-bench Verified: Competitive frontier ranking with bash-only harness
- Vibe Code Bench: **85.0%**
- LiveCodeBench: **95.2%** (at extra-high reasoning setting)
- SciCode / AA-SciCode: **71.5%**

Long context & Multimodal:

- Needle-in-a-Haystack (NIAH): **99.3%** retrieval accuracy across 500K context window.
- Visual Document Intelligence: High accuracy for schematics, UI components, and tabular diagrams.

### Normalized scores (1–100)

- **Tool use: 85/100.** Substantial improvements in shell automation and multi-turn error recovery (38.0% Terminal-Bench 4.0, 56 on AA Coding Agent Index).
- **Reasoning: 88/100.** Built-in self-verification and endurance reasoning across complex workflows with adjustable compute tiers.
- **Context window: 90/100.** 500K token context window with verified long-range memory and repository consistency.
- **Multimodal: 80/100.** Native multimodal perception across images, technical diagrams, and UI screens.
- **Coding: 87/100.** Top-tier engineering synthesis highlighted by 71.0% on DeepSWE v1.1 and 46.3% on CursorBench 4.0.
- **Cost efficiency: 78/100.** Maintained competitive $2.00 / $6.00 per 1M token pricing despite architectural scaling.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (85 + 88 + 90 + 80 + 87) / 5 = 430 / 5 = 86.0 -> 86/100. Premier agentic model engineered for long-horizon autonomous software engineering and multi-hour problem solving.

---

## Sources

- xAI Official Grok 4.7 Announcement & Architecture Notes: https://x.ai/blog/grok-4-7
- Artificial Analysis Coding Agent Leaderboard & Index: https://artificialanalysis.ai/models/grok-4-7
- Emergent AI & Evolink Benchmark Analysis: https://emergent.sh/benchmarks/grok-4-7

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
