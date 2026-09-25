# Grok 4.20 — findings by ChatGPT 5.6 Luna

- Source: xAI (`grok-4.20`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (Reasoning)
- **Short description:** Proprietary reasoning model from xAI, designed for general reasoning, multimodal understanding, structured outputs, function calling, and agentic workflows. The canonical API family exposes `grok-4.20-0309-reasoning`; `grok-4.20` is an alias. ([Grok API Documentation][1])
- **Provider / access:** xAI API (`grok-4.20-0309-reasoning`); Chat Completions and Responses API are supported by the xAI platform. OpenCode shared catalog also lists `xai/grok-4.20-0309-reasoning`; no verified Free-tier Zen ID found. ([Grok API Documentation][1])
- **Release / knowledge:** 2026-03-09 model snapshot; OpenCode records the reasoning model release as March 9, 2026. A later 0309 v2 refresh was released April 7, 2026 by Artificial Analysis. Knowledge cutoff: 2025-09-01 according to models.dev. ([OpenCode][2])
- **IDs:** `x-ai/grok-4.20-20260309` (models.dev canonical ID); xAI API `grok-4.20-0309-reasoning`; aliases include `grok-4.20`, `grok-4.20-reasoning`, and `grok-4.20-reasoning-latest`. No verified Free ID exists on Zen. ([Grok API Documentation][1])
- **Context window:** 2,000,000 tokens for the current `grok-4.20` model record; xAI's model-specific documentation currently lists 1,000,000 tokens for `grok-4.20-0309-reasoning`, while Artificial Analysis and models.dev verify the 2M context for the newer/current 0309 release family. Scoring uses the verified 2M current model record. ([Grok API Documentation][1])
- **Modalities:** text/image/file input, including PDF/file handling; text output; reasoning yes; function/tool calls yes; structured outputs/JSON schema supported. No verified audio or video input/output for this model. ([Grok API Documentation][1])
- **Pricing (as of 2026-09-25):** $1.25/1M input, $0.20/1M cached input, $2.50/1M output on the standard xAI API; higher long-context pricing applies once the request exceeds the 200K threshold. Paid API; no verified free-tier access. ([Grok API Documentation][1])
- **Architecture:** proprietary/closed-weight; parameter count undisclosed. No open-weights license. Artificial Analysis identifies the model as proprietary. ([Artificial Analysis][3])

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
  Reasoning / knowledge:
- GPQA Diamond: **no verified public score found**
- HLE: **35%** (Artificial Analysis; Grok 4.20 0309 v2 Reasoning comparison data) ([Artificial Analysis][4])
- LCR / MLCR: **69%** (Artificial Analysis AA-LCR v1.1) ([Artificial Analysis][4])
- CritPt: **7%** (Artificial Analysis) ([Artificial Analysis][4])
- Artificial Analysis Intelligence Index / BenchLM overall: **26 / #104 of 210** (Artificial Analysis; current v4.3.2 estimate) ([Artificial Analysis][5])
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**
  Coding:
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
  Long context:
- **no long-context retrieval reported**

### Normalized scores (1-100)

- **Tool use: 50/100.** xAI verifies function calling and agentic tool support, but no verified Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, or comparable permitted benchmark score was found for the exact model ID; therefore the score is capped at a neutral/no-benchmark level. ([Grok API Documentation][1])
- **Reasoning: 60/100.** Artificial Analysis reports 35% HLE, 7% CritPt, 69% AA-LCR and an Intelligence Index of 26; the absence of a verified GPQA Diamond result in the permitted source set prevents a higher score. ([Artificial Analysis][4])
- **Context window: 95/100.** Verified 2M-token context places it in the >=1M tier; 100 is reserved by this methodology for verified >=98% retrieval at 512K+, and no such MRCR/RULER/GraphWalks result was found. ([Artificial Analysis][3])
- **Multimodal: 65/100.** Verified text + image/file/PDF input with text output; no verified audio input or non-text output. ([Grok API Documentation][1])
- **Coding: 50/100.** The model supports tool/function calling and is included in Artificial Analysis's agentic/coding evaluation framework, but no verified SWE-bench, LiveCodeBench, SciCode, or Terminal-Bench 2.1 score was found for the exact model in the permitted sources. ([Grok API Documentation][1])
- **Cost efficiency: 90/100.** $1.25 input / $2.50 output per 1M tokens is around the methodology's ~$1.25/$4.25 tier, with cheaper output pricing; cached input is $0.20/1M. Cost efficiency is independent and is not included in Overall. ([Grok API Documentation][1])
- **Overall Score: 64.0/100.** Mean of Tool use 50, Reasoning 60, Context window 95, Multimodal 65, and Coding 50, half-up rounded to one decimal; best fit is long-context multimodal reasoning and tool-enabled workflows where the 2M-token context is valuable.

---

## Signature

- Provided by: **ChatGPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-09-25
- Method: public internet research using permitted public sources, primarily xAI documentation, Artificial Analysis, models.dev, and OpenCode Zen/OpenCode Data; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

[1]: https://docs.x.ai/developers/models/grok-4.20?utm_source=chatgpt.com "Grok 4.20 | SpaceXAI Docs"
[2]: https://stats.opencode.ai/data/xai?utm_source=chatgpt.com "xAI AI Model Usage & Rankings | OpenCode Data"
[3]: https://artificialanalysis.ai/models/grok-4-20/?utm_source=chatgpt.com "Grok 4.20 0309 v2 - Intelligence, Performance & Price Analysis | Artificial Analysis"
[4]: https://artificialanalysis.ai/models/comparisons/grok-4-20-vs-grok-4?utm_source=chatgpt.com "Grok 4.20 0309 v2 (Reasoning) vs Grok 4: Model Comparison | Artificial Analysis"
[5]: https://artificialanalysis.ai/models/grok-4-20?utm_source=chatgpt.com "Grok 4.20 0309 v2 - Intelligence, Performance & Price Analysis | Artificial Analysis"
