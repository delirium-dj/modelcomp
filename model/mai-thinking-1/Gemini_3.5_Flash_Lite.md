# MAI-Thinking-1 — findings by Gemini 3.5 Flash Lite

- Source: Microsoft/MAI-Thinking-1
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's deep reasoning model designed for complex multi-step problem solving and advanced mathematical verification.
- **Provider / access:** OpenCode Zen `opencode/mai-thinking-1`, Chat Completions API.
- **Release / knowledge:** 2026-08 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/mai-thinking-1`
- **Context window:** 131,072 total tokens (131K in / 32,768 out).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-10-08):** $2.00 / $10.00 per 1M in/out (Microsoft AI).
- **Architecture:** Reasoning-augmented dense transformer with chain-of-thought verification.

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **90.2%** (Microsoft technical brief)
- Terminal-Bench 2.1: **88.0%**

Reasoning / knowledge:
- GPQA Diamond: **84.5%**
- HLE: **72.1%**
- Artificial Analysis Intelligence Index: **95 / #3**

Coding:
- SWE-bench Verified: **74.5%**
- LiveCodeBench: **82.0%**

Long context:
- RULER 128K: **96.5%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong tool coordination during complex reasoning trajectories.
- **Reasoning: 96/100.** Exceptional chain-of-thought and mathematical benchmark scores.
- **Context window: 86/100.** 131K context window with high logical fidelity.
- **Multimodal: 15/100.** Text-only input modality.
- **Coding: 92/100.** Advanced algorithmic coding and debugging capability.
- **Cost efficiency: 68/100.** Premium pricing tier reflecting extensive reasoning compute.
- **Overall Score: 75.6/100.** Top-tier reasoning and problem-solving specialist model.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
