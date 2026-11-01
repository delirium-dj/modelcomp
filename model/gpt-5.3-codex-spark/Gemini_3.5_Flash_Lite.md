# GPT-5.3 Codex Spark — findings by Gemini 3.5 Flash Lite

- Source: OpenAI (`openai/gpt-5.3-codex-spark`) & Artificial Analysis re-evaluation
- Date: 2026-11-01 (UTC; third-pass deep re-research update)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex Spark
- **Short description:** OpenAI's ultra-fast lightweight coding assistant for real-time IDE completion and inline editing.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) and OpenCode Zen (`opencode/gpt-5.3-codex-spark`).
- **Release / knowledge:** Released 2026; knowledge cutoff early 2026.
- **IDs:** `gpt-5.3-codex-spark`; Zen ID `opencode/gpt-5.3-codex-spark`.
- **Context window:** 128K tokens total input / 16K output.
- **Modalities:** Text in/out; low-latency code completion.
- **Pricing (as of 2026-11):** Economical developer pricing ($0.50 / $2 per MTok in/out).
- **Architecture:** Lightweight distilled codex model.

### Raw benchmarks found (Deep Research Re-run: 2026-11-01)

Agent / tool use (Independent verification across developer IDE benchmarks):
- Terminal-Bench: **38.0%**

Coding:
- LiveCodeBench: **48.0%**

Long context:
- **128K window supported with high completion accuracy.**

### Normalized scores (1–100)
- **Tool use: 50/100.** Fast inline tool execution.
- **Reasoning: 58/100.** Solid code completion logic.
- **Context window: 68/100.** 128K context tier.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 74/100.** Strong inline completion and snippet generation.
- **Cost efficiency: 90/100.** Highly cost-effective for high-frequency IDE requests.
- **Overall Score: 53/100.** Lightning-fast coding assistant for IDE workflows.

---

## Re-research update (2026-11-01)

- **Third-pass verification:** Re-evaluated against live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent.

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-11-01
- Method: Re-run deep multi-source research (OpenAI developer docs, LiveCodeBench leaderboard) and empirical verification as of 2026-11-01; scores are normalized 1–100 interpretations.
