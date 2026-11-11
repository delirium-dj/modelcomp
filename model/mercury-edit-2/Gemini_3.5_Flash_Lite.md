# Mercury Edit 2 — findings by Gemini 3.5 Flash Lite

- Source: Mercury Systems / Mercury Edit 2
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2
- **Short description:** Specialized text editing and refactoring model tuned specifically for patch application and git diff generation.
- **Provider / access:** Mercury API (`mercury/edit-2`).
- **Release / knowledge:** Released Q2 2026; knowledge cutoff early 2026.
- **IDs:** `mercury/edit-2`
- **Context window:** 8,192 tokens input / 2,048 tokens output.
- **Modalities:** Text in; text/patch out.
- **Pricing (as of 2026-11-11):** Low-cost developer API tiers.
- **Architecture:** Compact transformer specialized in token-level diff editing.

### Raw benchmarks found

Agent / tool use:
- ToolCall-Eval: **40.0%**

Reasoning / knowledge:
- GPQA Diamond: **20.0%**

Coding:
- Patch Application Benchmark: **58.2%**

Long context:
- RULER 8k: **70.0%**

### Normalized scores (1–100)

- **Tool use: 40/100.** Minimal tool use capabilities focused purely on text editing.
- **Reasoning: 42/100.** Limited general reasoning outside of diff refactoring.
- **Context window: 50/100.** 8k context window suited for targeted code patches.
- **Multimodal: 25/100.** Text-only editing utility.
- **Coding: 60/100.** Specialized patch application and code refactoring.
- **Cost efficiency: 95/100.** Economical pricing for specialized editing API calls.

- **Overall Score: 43.4/100.** Mean of the five quality dims (40 + 42 + 50 + 25 + 60) / 5 = 217 / 5 = 43.4 (rounds to 43.5); Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-11
- Method: Mercury Systems developer documentation and patch benchmark evaluation.
- Reference URLs:
  - [Mercury Edit 2 Documentation — Mercury Systems](https://mercury.systems/docs/edit-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
