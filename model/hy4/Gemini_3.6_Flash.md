# HY4 — findings by Gemini 3.6 Flash

- Source: Tencent / Hy4 preview (`hy4`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** HY4
- **Short description:** Tencent's flagship open-weights 770B MoE (49B active) model engineered for long-context reasoning, terminal agentic tasks, and software development.
- **Provider / access:** Tencent Cloud API (`hy4`), OpenCode Zen (`opencode/hy4`). Chat Completions API.
- **Release / knowledge:** 2026-08-28 release; knowledge cutoff mid-2026.
- **IDs:** `tencent/hy4`
- **Context window:** 1,000,000 tokens (1M input context, up to 64K output tokens).
- **Modalities:** text input, text output; native tool calls, JSON mode.
- **Pricing (as of 2026-09-21):** $0.60 / 1M input tokens, $2.40 / 1M output tokens (open-weights deployment options).
- **Architecture:** Open-weights 770B MoE (49B active), Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%**
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **58.5 / #12**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: **82.9%** (SWE-bench Multilingual)
- LiveCodeBench: **2790 Elo**
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **85.4%** (Terminal-Bench 2.1)

Long context:

- 1M token context window supported with stable long-context retrieval performance.

### Normalized scores (1–100)

- **Tool use: 86/100.** Strong terminal agent performance backed by 85.4% on Terminal-Bench 2.1.
- **Reasoning: 91/100.** High performance on GPQA Diamond (92.3%).
- **Context window: 96/100.** 1M input token context window with 49B active MoE execution.
- **Multimodal: 15/100.** Text input and output focus.
- **Coding: 86/100.** Excellent coding capabilities across Terminal-Bench 2.1 (85.4%) and SWE-bench Multilingual (82.9%).
- **Cost efficiency: 90/100.** Highly cost-effective open-weights model ($0.60/$2.40 per 1M tokens).
- **Overall Score: 75/100.** Mean of the five quality dimensions (86, 91, 96, 15, 86); excellent open-weights long-horizon text reasoning model.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-09-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
