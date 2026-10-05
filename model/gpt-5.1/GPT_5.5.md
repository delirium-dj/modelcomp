# GPT-5.1 — findings by GPT 5.5

- Source: OpenAI/GPT-5.1
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** GPT-5.1 is OpenAI's post-GPT-5 update, with Thinking and Codex variants that improved usability, reasoning, and coding before GPT-5.2/5.4/5.5.
- **Provider / access:** OpenAI API / ChatGPT / Codex.
- **Release / knowledge:** GPT-5.1 public coverage appeared November 2025; GPT-5.1-Codex-Max was released 2025-11-19.
- **IDs:** `openai/gpt-5.1`
- **Context window:** Not verified for exact repo route in accessible sources.
- **Modalities:** GPT-family multimodal support likely; exact route modalities not verified.
- **Pricing (as of 2026-10-05):** Not verified for exact route in accessible sources.
- **Architecture:** Proprietary OpenAI model family.

### Raw benchmarks found

Agent / tool use:

- OpenAI GPT-5.1 system-card PDF includes production benchmark tables and notes GPT-5.1 Thinking had some light safety-category regressions relative to GPT-5 Thinking (`https://cdn.openai.com/pdf/4173ec8d-1229-47db-96de-06d87147e07e/5_1_system_card.pdf`).
- TechRadar comparison reports GPT-5.1 improved over GPT-5 in OpenAI-claimed areas, including practical math/contextual reasoning examples (`https://www.techradar.com/ai-platforms-assistants/chatgpt/i-compared-gpt-5-1-to-gpt-5-on-chatgpt-and-now-i-dont-want-to-go-back`).
- Terminal-Bench 2.1: **no verified public score found**
- OSWorld / computer-use: **no verified public score found**

Reasoning / knowledge:

- GPT-5.1 system-card production benchmark tables exist, but exact rows were not exposed in accessible snippet.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- GPT-5.1-Codex-Max is described publicly as an agentic coding model, but exact GPT-5.1 base coding rows were not found.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- No exact context or retrieval score found for this route in accessible sources.

### Normalized scores (1–100)

- **Tool use: 84/100.** GPT-5.1 improved on GPT-5 and had Codex variants, capped by missing exact agent rows.
- **Reasoning: 88/100.** Strong GPT-5-family reasoning update, below later GPT-5.4/5.5.
- **Context window: 84/100.** Likely large, but exact route was not verified.
- **Multimodal: 78/100.** GPT-family multimodal likely, exact route not verified.
- **Coding: 85/100.** Codex-Max lineage supports coding strength, but exact rows absent.
- **Cost efficiency: 76/100.** Superseded by later better price/performance variants.
- **Overall Score: 84/100.** Mean of the five quality dimensions; best fit is legacy GPT-5.1 reasoning/coding comparison.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
