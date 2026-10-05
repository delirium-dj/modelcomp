# Claude Opus 4.5 — findings by GPT 5.5

- Source: Anthropic/Claude Opus 4.5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Claude Opus 4.5 is an Anthropic Opus model focused on high-end coding, agentic tasks, and knowledge work before the 4.6/4.8 line.
- **Provider / access:** Anthropic Claude API and cloud partner routes.
- **Release / knowledge:** Public launch/benchmark coverage appeared around late 2025 / early 2026.
- **IDs:** `anthropic/claude-opus-4-5`
- **Context window:** Anthropic list-price PDFs show context handled by pricing tier / route; exact repo context not read in this pass.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-05):** Anthropic May 2026 list prices show Claude Opus 4.5 at $3/M input and $15/M output on Microsoft Foundry global route, with cache and batch variants.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Claude Opus 4.5 system card discusses Vending-Bench 2 for long-horizon business/tool behavior and notes the model used High effort with 8,192-token reasoning budget per turn (`https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf`).
- Community launch coverage describes Opus 4.5 as strong in coding and agentic AI, but exact rows were not visible in accessible snippets.
- Vending-Bench 2: **evaluated, exact accessible score not found**
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- System card and launch coverage position it as a high-end Opus reasoning model; exact GPQA/HLE rows not found.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Public launch coverage calls it a top coding/agentic model; no exact SWE/LCB row found in accessible snippets.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- No independent MRCR/RULER result found.

### Normalized scores (1–100)

- **Tool use: 86/100.** Vending-Bench/system-card evidence and Opus lineage support strong agentic ability.
- **Reasoning: 88/100.** High-end Opus reasoning for its generation, below later Opus releases.
- **Context window: 80/100.** Claude Opus route context was strong but exact limit not verified here.
- **Multimodal: 70/100.** Text and image input only.
- **Coding: 88/100.** Strong coding reputation, capped by missing exact SWE/LCB rows.
- **Cost efficiency: 68/100.** $3/$15 partner pricing is decent for Opus, but later models improve capability.
- **Overall Score: 82/100.** Mean of the five quality dimensions; best fit is legacy Claude Opus coding and agent work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
