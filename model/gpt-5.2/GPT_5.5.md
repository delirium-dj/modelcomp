# GPT 5.2 — findings by GPT 5.5

- Source: OpenAI/GPT 5.2
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2
- **Short description:** GPT 5.2 is an OpenAI model generation preceding GPT-5.4 and GPT-5.5, tracked here as a text-only 128K OpenCode route.
- **Provider / access:** OpenAI / OpenCode route.
- **Release / knowledge:** GPT-5.2 system-card material predates GPT-5.4 by several months.
- **IDs:** `opencode/gpt-5.2`
- **Context window:** 128K total per repo metadata.
- **Modalities:** Text in/out per repo metadata.
- **Pricing (as of 2026-10-05):** Standard pricing in repo metadata; exact current API rows were not verified.
- **Architecture:** Proprietary OpenAI model.

### Raw benchmarks found

Agent / tool use:

- OpenAI GPT-5.2 system card includes production benchmark tables for GPT-5.2 Instant and related 5.2 variants (`https://cdn.openai.com/pdf/3a4153c8-c748-4b71-8e31-aecbde944f8d/oai_5_2_system-card.pdf`).
- GPT-5.4 coverage reports OSWorld-Verified **75%** for GPT-5.4 versus **47.3%** for GPT-5.2, placing GPT-5.2 well below the later generation on computer-use tasks.
- OSWorld-Verified: **47.3%** as comparator baseline.
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- Seed2.0 model card comparison includes GPT-5.2 High rows across many reasoning benchmarks; examples include MMLU-Pro **85.9**, GPQA Diamond **92.4**, and AIME 2026 **97.5** in the accessible table, though this is a third-party comparison table rather than an OpenAI system-card row.
- GPQA Diamond: **92.4%** in Seed2.0 comparison table.
- MMLU-Pro: **85.9%** in Seed2.0 comparison table.

Coding:

- Seed2.0 comparison table lists GPT-5.2 High: Codeforces **3148**, AetherCode **73.8**, LiveCodeBench v6 **87.7**.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench v6: **87.7** in Seed2.0 comparison table.

Long context:

- Repo metadata tracks 128K total; Seed2.0 comparison table lists MRCR v2 **89.4** and Graphwalks BFS **98.0** for GPT-5.2 High, but the exact context setting is not the repo's route.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 47.3 is materially behind GPT-5.4, but still useful for an older OpenAI route.
- **Reasoning: 88/100.** Third-party comparison rows show strong reasoning and math scores.
- **Context window: 72/100.** Repo route is 128K, good but below newer 400K-1M models.
- **Multimodal: 15/100.** Tracked route is text-only.
- **Coding: 88/100.** LiveCodeBench/AetherCode comparison rows are strong.
- **Cost efficiency: 72/100.** Older standard-pricing model with weaker context/value than newer 5.5/5.6+ routes.
- **Overall Score: 69/100.** Mean of the five quality dimensions; best fit is legacy text-only OpenAI evaluation rather than current frontier use.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
