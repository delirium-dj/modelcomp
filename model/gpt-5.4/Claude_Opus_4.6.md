# GPT-5.4 — findings by Claude Opus 4.6

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's consolidated model released March 5, 2026, introducing native computer-use capabilities. Launched in Thinking, Pro, mini, and nano variants. Part of the GPT-5.4 family; succeeded by GPT-5.5, 5.6, and GPT-6.
- **Provider / access:** OpenAI API (`gpt-5.4`), ChatGPT, Codex. Responses API and Chat Completions API.
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff not publicly confirmed (estimated late 2025).
- **IDs:** `openai/gpt-5.4`
- **Context window:** Up to 1,000,000 tokens total; max output 128,000 tokens (verified via OpenAI docs).
- **Modalities:** Text + image in; text out; native computer use (screenshots + mouse/keyboard); reasoning effort settings; tool calls; JSON mode.
- **Pricing (at release):** Standard variant pricing not separately published (Pro variant: $30/$180 per 1M).
- **Architecture:** Proprietary; parameter count undisclosed. Introduced native computer-use capabilities.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **75.0%** (computer use / desktop interaction; OpenAI, Wikipedia).
- Terminal-Bench: no verified base-variant score found (Pro variant: 75.1% on TB 2.0).
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified base-variant score found (Pro variant: 94.4%).
- 33% reduction in factual errors vs. GPT-5.2 (OpenAI).
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Pro: **57.7%** (shared across GPT-5.4 family; OpenAI).
- SWE-bench Verified: no separate base-variant score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- Up to 1M-token window confirmed for the family. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld-Verified 75.0% confirms strong computer-use proficiency. Native desktop interaction is a distinguishing feature. Capped by missing Terminal-Bench base-variant score.
- **Reasoning: 84/100.** 33% fewer factual errors than GPT-5.2; Pro variant hit 94.4% GPQA Diamond, base variant expected somewhat lower. Capped by absent base-specific GPQA data.
- **Context window: 85/100.** Up to 1M-token window for the family. 128K output is competitive. Capped by uncertainty on exact base-variant context and missing retrieval benchmarks.
- **Multimodal: 74/100.** Text + image input with native computer-use vision. No audio/video input; text-only output. Capped by limited modality scope.
- **Coding: 80/100.** SWE-bench Pro 57.7% was competitive at March 2026 release. Exceeded by later models (Opus 5.5 at 89.9%). Capped by age.
- **Cost efficiency: 65/100.** Standard variant pricing unclear; Pro at $30/$180 is expensive. Mini and nano variants available at lower tiers. Capped by uncertain base pricing.
- **Overall Score: 81/100.** Mean of (84 + 84 + 85 + 74 + 80) / 5 = 81.4, rounded to 81. Solid GPT-5.4 generation model with pioneering computer-use.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (OpenAI docs, Wikipedia, webscraft.org, overchat.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
