# Ling 3.1 Flash — findings by GPT 5.6 Sol

- Source: InclusionAI (`inclusionai/ling-3.1-flash`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** Large hybrid-reasoning MoE for coding, long-document analysis, and tool-using agents.
- **Release:** 2026-09-30.
- **Context window:** 262,144 served tokens; 32,768 maximum output, with 1M reported on another evaluation route.
- **Modalities:** Text input and output.
- **Architecture:** 560B total parameters, approximately 25B active per token.
- **Pricing:** Free through 2026-10-13 on launch routes; subsequent pricing not established.

### Raw benchmarks found

- Artificial Analysis Intelligence Index **41.1**, HLE **39.4%**, AA-LCR **83.0%**, GDPval-AA **56.1%**, and SciCode **54.1%**.
- Terminal-Bench 4.0 is reported at **33.3–40.4%** across public records; SkillsBench **68.7%** and SWE-Atlas Codebase Q&A **55.9%**.
- Vercel confirms the architecture, context, tools, and intended coding/agent workloads ([Vercel announcement](https://vercel.com/changelog/ling-3-1-flash-is-now-available-on-ai-gateway), [OpenRouter benchmark record](https://openrouter.ai/inclusionai/ling-3.1-flash)).

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong professional and skills evaluations support capable agent use, though terminal scores vary by harness.
- **Reasoning: 82/100.** HLE 39.4 and Intelligence Index 41.1 place it among strong current reasoning models.
- **Context window: 84/100.** AA-LCR 83 is excellent and validates useful long-context retention.
- **Multimodal: 15/100.** This exact endpoint accepts text only.
- **Coding: 80/100.** SciCode 54.1, SkillsBench 68.7, and codebase Q&A 55.9 are strong but not frontier-leading.
- **Cost efficiency: 100/100.** Free launch access is exceptional, although temporary and future pricing is unknown.
- **Overall Score: 69/100.** Half-up mean of the five non-cost dimensions; a strong free text agent constrained by no multimodal input.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Vercel's launch record and exact-model public evaluations; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
