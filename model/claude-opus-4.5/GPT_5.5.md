# Claude Opus 4.5 — findings by GPT 5.5

- Source: Anthropic/Claude Opus 4.5
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Claude Opus 4.5 is an Anthropic Opus model focused on high-end coding, agentic tasks, and knowledge work before the 4.6/4.8 line.
- **Provider / access:** Anthropic Claude API and cloud partner routes.
- **Release / knowledge:** Public launch/benchmark coverage appeared around late 2025 / early 2026.
- **IDs:** `anthropic/claude-opus-4-5`
- **Context window:** Public system-card/route evidence points to Claude Opus 4.x long-context support, commonly **200K** on older routes and larger in some cloud configurations.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-09):** Anthropic May 2026 list prices show Claude Opus 4.5 at $3/M input and $15/M output on Microsoft Foundry global route, with cache and batch variants.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Claude Opus 4.5 system card discusses Vending-Bench 2 for long-horizon business/tool behavior and notes the model used High effort with 8,192-token reasoning budget per turn (`https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf`).
- SystemCard.io/Opus comparison table lists Claude Opus 4.5 with overall benchmark score **72.6**.
- Community launch coverage describes Opus 4.5 as strong in coding and agentic AI, but exact rows were not visible in accessible snippets.
- Vending-Bench 2: **evaluated, exact accessible score not found**
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- System card and launch coverage position it as a high-end Opus reasoning model; exact GPQA/HLE rows not found.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Solvency reports a public Scale SEAL SWE-bench Pro row for `claude-opus-4-5-20251101`: **45.9%**.
- SWE-bench Verified: **no exact verified public score found**
- SWE-bench Pro: **45.9%**
- LiveCodeBench: **no verified public score found**

Long context:

- No independent MRCR/RULER result found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Vending-Bench/system-card evidence supports strong agentic ability, but newer Opus/Fable models supersede it.
- **Reasoning: 84/100.** Opus-class reasoning remains strong, with public aggregate score 72.6 as a grounding point.
- **Context window: 78/100.** Claude Opus context was strong for the era, but exact 1M support was not verified for this route.
- **Multimodal: 70/100.** Text and image input only.
- **Coding: 82/100.** SWE-bench Pro 45.9 is useful but clearly below later Claude coding models.
- **Cost efficiency: 68/100.** $3/$15 partner pricing is decent for Opus, but later models improve capability.
- **Overall Score: 79/100.** Half-up mean of the five quality dimensions; best fit is legacy Claude Opus coding and agent work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: refreshed public internet research and comparison against the 2026-10-05 file; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
