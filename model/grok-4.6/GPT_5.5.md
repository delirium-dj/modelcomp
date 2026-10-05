# Grok 4.6 — findings by GPT 5.5

- Source: xAI/Grok 4.6
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's Grok 4.6 is a frontier model for coding, agentic tasks, knowledge work, and long-context tool use.
- **Provider / access:** xAI API, Bedrock/Cloudflare/OpenRouter-style providers.
- **Release / knowledge:** Released around August 2026.
- **IDs:** `xai/grok-4.6`
- **Context window:** 500K tokens.
- **Modalities:** Text and image input; text output; reasoning, function calling, structured outputs, search, and code tools are documented.
- **Pricing (as of 2026-10-05):** $2/M input, $0.50/M cached input, $6/M output under 200K prompt; $4/$12 above 200K.
- **Architecture:** Proprietary xAI model.

### Raw benchmarks found

Agent / tool use:

- xAI launch page: reports frontier performance across AA Intelligence, GDPVal-AA, DeepSWE 1.1, CursorBench 3.2, and FrontierCode 1.1; pricing starts at $2/M input and $6/M output (`https://x.ai/news/grok-4-6`).
- The Model Gap: tracks **9** independently run Grok 4.6 benchmark scores, all sourced, and confirms pricing/context/reasoning-effort details (`https://themodelgap.com/models/grok-4-6`).
- CursorBench 3.2: public discussion reports Grok 4.6 Extra High at **70.8%**, $2.81/task, 46 steps.
- Terminal-Bench 2.1: **no exact verified score found in accessible text**

Reasoning / knowledge:

- Token.app reports Grok 4.6 scores **94.0%** on GPQA Diamond from an Epoch AI run (`https://token.app/model/grok-4.6`).
- GPQA Diamond: **94.0%**
- HLE: **no verified public score found**

Coding:

- xAI reports benchmark gains over Grok 4.5, with public coverage saying DeepSWE +11.9 pts, Terminal-Bench +10.3 pts, and APEX-Agents +10.4 pts versus Grok 4.5.
- DeepSWE 1.1 / CursorBench / FrontierCode 1.1: **tracked by xAI, exact rows not exposed in accessible text except CursorBench discussion above**
- SWE-bench Verified / SWE-Pro: **no verified public score found**

Long context:

- 500K context documented by xAI and providers; long-context surcharge applies above 200K prompt.

### Normalized scores (1–100)

- **Tool use: 91/100.** CursorBench result, xAI tool docs, and nine independently tracked benchmarks support a high tool score.
- **Reasoning: 92/100.** GPQA Diamond 94.0% is excellent.
- **Context window: 88/100.** 500K is strong, but below 1M/2M leaders and carries surcharge above 200K.
- **Multimodal: 75/100.** Text/image input plus search/code tools, but not broad audio/video input.
- **Coding: 91/100.** Strong xAI coding benchmark claims and CursorBench evidence, capped by missing SWE rows.
- **Cost efficiency: 86/100.** $2/$6 is excellent for capability, though long context doubles rates.
- **Overall Score: 87/100.** Mean of the five quality dimensions; best fit is cost-aware agentic coding and knowledge work with xAI tooling.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
