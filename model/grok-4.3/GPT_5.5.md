# Grok 4.3 — findings by GPT 5.5

- Source: xAI/Grok 4.3
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** Grok 4.3 is an xAI model preceding Grok 4.5/4.6, valued for lower pricing and larger context relative to later 4.5 in some route comparisons.
- **Provider / access:** xAI API and hosted routes.
- **Release / knowledge:** Public coverage predates Grok 4.5's July 2026 release.
- **IDs:** `xai/grok-4.3`
- **Context window:** DataCamp's Grok 4.5 comparison says Grok 4.3 offers twice the context of 4.5; exact tracked route was not verified here.
- **Modalities:** Likely text/image input in xAI family; exact 4.3 route not verified.
- **Pricing (as of 2026-10-05):** Lower than Grok 4.5 in public comparison coverage; exact rate not verified in accessible snippets.
- **Architecture:** Proprietary xAI model.

### Raw benchmarks found

Agent / tool use:

- DataCamp Grok 4.5 review: says Grok 4.5 has higher Artificial Analysis evaluation and rate limits while Grok 4.3 offers twice the context and lower token prices (`https://www.datacamp.com/blog/grok-4-5`).
- Zeronoise analysis: notes Grok 4.3 was promoted for price-performance, tool calling, and instruction following across finance/law/casual categories (`https://zeronoise.ai/posts/inference-economics-open-model-pressure-and-an-arc-reality-check-xhhlp3o67w/download/pdf`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- No exact GPQA/HLE row found for Grok 4.3 in accessible sources.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Public coverage highlights improved tool calling/instruction following but no exact SWE/LCB row was found.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Public comparison says larger context than Grok 4.5; exact limit not verified here.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tool-calling and instruction-following reputation is good, but benchmark rows are sparse.
- **Reasoning: 82/100.** Strong xAI model for its time, below 4.5/4.6/4.7.
- **Context window: 88/100.** Public comparison suggests very large context, likely above 500K.
- **Multimodal: 70/100.** xAI family likely supports image input, exact route not verified.
- **Coding: 80/100.** Useful coding/tool model, but exact coding rows absent.
- **Cost efficiency: 86/100.** Lower token price than Grok 4.5 and large context support strong value.
- **Overall Score: 80/100.** Mean of the five quality dimensions; best fit is legacy xAI cost/context comparison.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
