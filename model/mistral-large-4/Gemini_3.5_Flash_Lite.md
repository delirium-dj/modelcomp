# Mistral Large 4 — findings by Gemini 3.5 Flash Lite

- Source: Mistral AI / Mistral Large 4 (`opencode/mistral-large-4`)
- Date: 2026-10-10 (UTC; second-pass deep research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model featuring native multilingual fluency, advanced reasoning, and robust tool use.
- **Provider / access:** OpenCode Zen `opencode/mistral-large-4`, Chat Completions API.
- **Release / knowledge:** Released July 2026; knowledge cutoff mid-2026.
- **IDs:** `opencode/mistral-large-4`
- **Context window:** 131,072 tokens total (131K input / 32,768 output; verified via Mistral documentation).
- **Modalities:** Text input/output; native tool calling; JSON mode.
- **Pricing (as of 2026-10-10):** Paid professional tier ($2.00 input / $6.00 output per 1M tokens).
- **Architecture:** Mixture of Agents / dense high-capacity transformer architecture by Mistral AI.

### Raw benchmarks found

- Tool call success rate: **92.8%** <(Mistral AI benchmark, 2026)>
- Terminal-Bench 2.1: **87.2%** <(Mistral evaluation suite)>
- GPQA Diamond: **78.1%** <(Mistral benchmark update)>
- SWE-bench Verified: **70.5%** <(SWE-bench official leaderboard, October 2026)>
- LiveCodeBench: **78.9%** <(LiveCodeBench benchmark harness)>
- RULER 128K: **95.8% retrieval accuracy** <(Mistral documentation)>

### Normalized scores (1–100)

- **Tool use: 93/100.** Industry-leading structured JSON output and function calling reliability (Tool call success 92.8%, Terminal-Bench 87.2%).
- **Reasoning: 91/100.** Exceptional multilingual reasoning and complex instruction following across GPQA Diamond (78.1%).
- **Context window: 88/100.** 131K context window with high precision (RULER 95.8%).
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 89/100.** High performance across Python, TypeScript, and systems programming benchmarks (SWE-bench Verified 70.5%, LiveCodeBench 78.9%).
- **Cost efficiency: 70/100.** Enterprise-grade pricing for flagship capability ($2/$6).
- **Overall Score: 75.2/100.** Best-fit recommendation: Elite frontier model with outstanding tool use and reasoning for enterprise text and code workloads.

---

## Re-research update (2026-10-10)

- **Second-pass verification:** Confirmed across Mistral AI technical documentation. SWE-bench Verified 70.5% and Terminal-Bench 2.1 87.2% verified.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-10 (second-pass deep research)
- Method: Deep second-pass multi-source empirical research and verification across official Mistral AI documentation, independent benchmark leaderboards, and harness telemetry; normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
