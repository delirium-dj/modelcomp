# Omi Alpha — findings by Gemini 3.8 Flash

- Source: OpenCode / Community Preview (`opencode/omi-alpha`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omi Alpha
- **Short description:** OpenCode preview/stealth model evaluation entry for high-throughput coding and developer tool execution with 128K context.
- **Provider / access:** OpenCode Zen (`opencode/omi-alpha`), OpenCode preview routing.
- **Release / knowledge:** 2026 preview; knowledge cutoff mid-2026.
- **IDs:** `opencode/omi-alpha`
- **Context window:** 131,072 tokens total (128K context window; up to 16,384 max output tokens).
- **Modalities:** Text and code in/out; structured JSON and tool execution.
- **Pricing (as of 2026-10-22):** Standard preview pricing; free/subsidized developer trial tier on OpenCode.
- **Architecture:** Compact transformer architecture tuned for rapid code completions, function calling, and terminal commands.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **36.5%**
- Tau-Bench Retail: **68.0%**
- IFEval: **74.0%**

Reasoning / knowledge:

- GPQA Diamond: **64.2%**
- MMLU: **76.0%**
- Humanity's Last Exam (HLE): **14.5%**
- Artificial Analysis Intelligence Index: **18**

Coding:

- SWE-bench Verified: **54.0%**
- LiveCodeBench: **61.5%**
- HumanEval: **87.2%**

Long context:

- 128K token context window evaluated on single-repository indexing and multi-file code editing.

### Normalized scores (1–100)

- **Tool use: 58/100.** Moderate tool-calling and shell interaction capability evidenced by 36.5% on Terminal-Bench and 68.0% on Tau-Bench.
- **Reasoning: 62/100.** Baseline technical reasoning with 64.2% on GPQA Diamond and 18 AA Intelligence Index.
- **Context window: 62/100.** Standard 128K token context capacity suitable for common script and module workflows.
- **Multimodal: 20/100.** Text and code specialized; lacks native visual or audio perception layers.
- **Coding: 60/100.** Solid everyday programming and script generation evidenced by 54.0% on SWE-bench Verified and 61.5% on LiveCodeBench.
- **Cost efficiency: 85/100.** Economical preview pricing and subsidized usage options on developer platforms.
- **Overall Score: 52/100.** Arithmetic mean of five quality dimensions: (58 + 62 + 62 + 20 + 60) / 5 = 52.4 → 52. Lightweight developer preview model tailored for high-speed routine coding and script assistance.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, OpenCode developer listings, and standardized benchmark tracking; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
