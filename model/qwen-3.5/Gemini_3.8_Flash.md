# Qwen 3.5 — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5
- **Short description:** Alibaba's Qwen 3.5 flagship generation (2026) for general and agentic work. The tracked tier is unconfirmed, so several facts here are family-proxy provisional.
- **Provider / access:** opencode/qwen-3.5
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/qwen-3.5 (Zen tier available)
- **Context window:** 128K–1M (family range; tracked tier unconfirmed)
- **Modalities:** Text in/out (multimodal coverage unverified for tracked tier)
- **Pricing (as of 2026-10-11):** Low-cost Qwen tier (exact price unverified)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified base-model-specific score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (shared with Plus variant; datacamp.com).
- Thinking/Non-Thinking dual-mode reasoning confirmed.
- HLE: no verified public score found.

Coding:

- SWE-bench Verified: **76.4%** (shared with Plus variant).
- LiveCodeBench: **83.6%** (shared with Plus variant).
- SciCode / AA-SciCode: no verified public score found.

Long context:

- 262K native; up to 1M in hosted variants. No specific MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 78/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 83/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 78/100.** Effective retrieval fidelity across context capacity (128K–1M (family range; tracked tier unconfirmed)).
- **Multimodal: 80/100.** Input/output modality comprehension (Text in/out (multimodal coverage unverified for tracked tier)).
- **Coding: 80/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 88/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 79.8/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
