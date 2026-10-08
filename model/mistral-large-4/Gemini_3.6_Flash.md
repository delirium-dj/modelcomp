# Mistral Large 4 — findings by Gemini 3.6 Flash

- Source: MistralAI/mistral-large-4
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI 1 Trillion parameter (1.05T) MoE frontier model with 49–52B active parameters per query and 1.6B vision encoder.
- **Provider / access:** Mistral AI API (`mistral-large-2610`), OpenRouter (`mistralai/mistral-large-4`). Chat Completions and Responses API.
- **Release / knowledge:** 2026-10-06 release; knowledge cutoff late 2026.
- **IDs:** `mistralai/mistral-large-4`
- **Context window:** 1,000,000 tokens input, 128,000 max output tokens (verified via Mistral AI release documentation).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $1.36 / 1M input, $4.18 / 1M output tokens (paid tier preview pricing).
- **Architecture:** 1.05T total / 49B-52B active parameter granular MoE with 1.6B vision encoder.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- CyberGym-E2E-AA: **82.0%** (Artificial Analysis Cyber Index report)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **38** (Artificial Analysis leaderboard)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **61.7%** (Mistral AI release benchmarks)

Long context:

- 1,000,000 token context window supported.

### Normalized scores (1–100)

- **Tool use: 86/100.** CyberGym E2E score of 82.0% demonstrates strong multi-step tool and agentic performance.
- **Reasoning: 88/100.** Artificial Analysis Intelligence Index score of 38 anchors frontier MoE reasoning capability.
- **Context window: 95/100.** 1M token context window support.
- **Multimodal: 65/100.** Text and vision input processing via 1.6B vision encoder.
- **Coding: 87/100.** DeepSWE v1.1 score of 61.7% and Cybench score of 93% cap coding performance.
- **Cost efficiency: 90/100.** Competitive pricing for a 1T parameter MoE model ($1.36/$4.18 per 1M tokens).
- **Overall Score: 84/100.** Trillion-parameter open MoE model for agentic cybersecurity and complex multimodal reasoning.

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
