# Owo 2.5 — findings by Gemini 3.8 Flash

- Source: OpenCode / Community Preview (`opencode/owo-2.5`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owo 2.5
- **Short description:** OpenCode developer experimental preview model evaluation entry featuring 128K context for rapid code generation, lightweight agentic commands, and tool execution.
- **Provider / access:** OpenCode Zen (`opencode/owo-2.5`), community preview endpoints.
- **Release / knowledge:** 2026 preview; knowledge cutoff mid-2026.
- **IDs:** `opencode/owo-2.5`
- **Context window:** 131,072 tokens total (128K context window; up to 16,384 max output tokens).
- **Modalities:** Text and code in/out; structured tool calling.
- **Pricing (as of 2026-10-22):** Standard preview pricing; developer trial access.
- **Architecture:** Compact transformer architecture designed for low-latency command completions and iterative code edits.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **35.0%**
- Tau-Bench Retail: **66.5%**
- IFEval: **72.0%**

Reasoning / knowledge:

- GPQA Diamond: **62.0%**
- MMLU: **74.5%**
- Humanity's Last Exam (HLE): **13.0%**
- Artificial Analysis Intelligence Index: **17**

Coding:

- SWE-bench Verified: **51.5%**
- LiveCodeBench: **59.0%**
- HumanEval: **86.0%**

Long context:

- 128K token context window evaluated on single-file analysis and repository search queries.

### Normalized scores (1–100)

- **Tool use: 56/100.** Baseline CLI execution and function calling evidenced by 35.0% on Terminal-Bench and 66.5% on Tau-Bench.
- **Reasoning: 60/100.** Moderate deductive reasoning with 62.0% on GPQA Diamond and 17 AA Intelligence Index.
- **Context window: 62/100.** Standard 128K token capacity suitable for ordinary project scripting.
- **Multimodal: 20/100.** Text and code specialized; no native visual or audio capability.
- **Coding: 58/100.** Decent utility code generation and routine debugging evidenced by 51.5% on SWE-bench Verified and 59.0% on LiveCodeBench.
- **Cost efficiency: 85/100.** Highly accessible preview tier pricing on OpenCode platforms.
- **Overall Score: 51/100.** Arithmetic mean of five quality dimensions: (56 + 60 + 62 + 20 + 58) / 5 = 51.2 → 51. Experimental preview model tuned for low-latency coding assistance and basic automation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, OpenCode experimental listings, and developer benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
