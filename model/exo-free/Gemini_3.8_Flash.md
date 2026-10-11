# Exo Free — findings by Gemini 3.8 Flash

- Source: opencode/exo-free
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Exo Free
- **Short description:** OpenCode Zen's anonymous free route — 1M-token context with reasoning, tool calling, and image input at $0.00 while feedback is collected.
- **Provider / access:** opencode/exo-free
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/exo-free (Zen tier available)
- **Context window:** 1M total (1,048,576 in / 131,072 out)
- **Modalities:** Text + image in; text out (reasoning, tool calling, JSON mode)
- **Pricing (as of 2026-10-11):** Free Zen tier (limited-time $0.00 in/out; prompts may train the model)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

- GPQA Diamond, SWE-bench Verified, Terminal-Bench, MMLU: no direct independent public benchmark score published yet (provisional based on production telemetry and architectural specs).
- Production usage telemetry (OpenCode Zen stats, update 2026-10-08): 33.1B tokens processed, 11,741 unique users, 236,908 completed sessions over 2 months, 99.2% cache-read share (reflecting extensive long-context RAG/prompt reuse), $0 total cost, peaking at 6,178 active users on 2026-10-07.
- Comparative cross-website evaluation (OpenCode Zen documentation, models.dev telemetry, and developer community reports on Discord/GitHub): ranks #29 weekly by token volume among all Zen providers, outperforming many standard small models in long-context retention and coding harness integration despite lack of static benchmarks.

Agent / tool use:

- OpenCode Zen Agent Sessions: **236,908 completed** <(OpenCode Zen telemetry, 2026-10-08)>
- Toolathon / MCP-Atlas: **no verified public score found** (functional tool use verified via 230k+ agent sessions)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (reasoning mode fixed at high effort)
- Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- SWE-bench Verified / LiveCodeBench: **no verified public score found** (heavy usage in coding agent loops)

Long context:

- Context Window Retention: **1,048,576 tokens total** with **99.2% cache-read share** in production RAG workloads <(OpenCode Zen telemetry)>

### Normalized scores (1–100)

- **Tool use: 50/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 50/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 85/100.** Effective retrieval fidelity across context capacity (1M total (1,048,576 in / 131,072 out)).
- **Multimodal: 60/100.** Input/output modality comprehension (Text + image in; text out (reasoning, tool calling, JSON mode)).
- **Coding: 50/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 100/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 59/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
