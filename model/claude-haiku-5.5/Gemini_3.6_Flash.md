# Claude Haiku 5.5 — findings by Gemini 3.6 Flash

- Source: Anthropic/claude-haiku-5.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic high-speed, cost-effective small model with adjustable effort settings for subagent routing, code review, and computer use.
- **Provider / access:** Anthropic API (`claude-haiku-5-5`), Amazon Bedrock, Google Cloud (Vertex AI). Chat Completions API.
- **Release / knowledge:** 2026-10-07 release; knowledge cutoff late 2026.
- **IDs:** `claude-haiku-5-5`
- **Context window:** 1,000,000 tokens input, 128,000 max output tokens (verified via Anthropic API docs).
- **Modalities:** text, image in; text out; reasoning yes (adaptive effort); tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $0.10 / 1M input, $0.50 / 1M output tokens (<100k tokens prompt tier; $0.50/$2.50 >100k tokens).
- **Architecture:** proprietary small-footprint architecture with adaptive reasoning effort.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **39.2%** (Anthropic technical report, max effort)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- OSWorld 2.1: **72.4%** (partial credit, computer use, Anthropic report)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **43** (Artificial Analysis leaderboard, max effort)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1,000,000 token context window supported.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 2.1 computer use score of 72.4% and Terminal-Bench 4.0 execution.
- **Reasoning: 84/100.** Artificial Analysis Intelligence Index score of 43 at max effort tier.
- **Context window: 95/100.** 1M token context window support.
- **Multimodal: 75/100.** Vision and computer use screen control capabilities.
- **Coding: 80/100.** High-speed code review and subagent script synthesis.
- **Cost efficiency: 98/100.** Ultra-affordable $0.10/$0.50 per 1M tokens tier.
- **Overall Score: 83/100.** Highly efficient subagent and computer-use model for high-volume latency-sensitive workflows.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
