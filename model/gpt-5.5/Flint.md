# GPT-5.5 — findings by Flint

- Source: OpenAI (`openai/gpt-5.5`) / Artificial Analysis (`artificial-analysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's GPT-5.5 generation, served in tiers — notably `GPT-5.5 Instant` (June 2026) and the higher `GPT-5.5 Pro (Xhigh)` (April 2026). Flags: proprietary, undisclosed parameter counts.
- **Provider / access:** OpenAI first-party API (`openai/gpt-5.5`); reasoning tier variants via extended thinking; text + image input, text output for the Pro tier.
- **Release / knowledge:** `GPT-5.5 Instant` released June 2026 (Artificial Analysis leaderboard); knowledge cutoff not independently resolved for the generation.

### Raw benchmarks found

- Artificial Analysis leaderboard: `GPT-5.5 Instant (June 2026)` — Intelligence Index **26**, context **400k**, cost per task **$0.69**, output speed **155 tokens/s**.
- `GPT-5.5 Pro (Xhigh)` (April 2026) — reasoning tier, context ~920k/922k, Intelligence Index **N/A**.

### Normalized scores (1–100)

- **Tool use: 50/100.** Intelligence Index-based band for the Instant tier; no dedicated tool-use benchmark captured.
- **Reasoning: 50/100.** Intelligence Index **26** → mid-low reasoning band.
- **Context window: 60/100.** 400k context → mid band (200K–500K tier).
- **Multimodal: 15/100.** text-only positioning for the Instant tier; no verified multimodal coverage captured.
- **Coding: 50/100.** no dedicated coding benchmark captured for the Instant tier.
- **Cost efficiency: 95/100.** $0.69 per Intelligence Index task → low cost → high cost score.

- **Overall Score: 45/100.** Mean of five quality dims: Tool 50 + Reasoning 50 + Context 60 + Multimodal 15 + Coding 50 = 225 /5 = 45; Cost excluded.

## Signature

- Provided by: **Flint (openai/gpt-5.5)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (OpenAI) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
