# Muse Wonder Full — findings by GPT-5.6 Terra

- Source: Meta / Muse Wonder Full
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's subscription-only highest-capability Muse Wonder variant for long-horizon personal and professional agent work.
- **Provider / access:** Muse Code Power or Maximum Usage plan; no public per-token API route verified.
- **Release / knowledge:** Announced 2026-10-12; knowledge cutoff not specified.
- **IDs:** `meta/muse-wonder-full` (no Zen Free ID verified).
- **Context window:** no exact public limit verified.
- **Modalities:** agentic text and coding use; a complete modality contract was not published in reviewed sources.
- **Pricing (as of 2026-11-03):** subscription-only; $50/month Power or $200/month Maximum Usage reported by independent coverage.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Meta publishes Muse Wonder and Wonder Full agent benchmarks; exact independently verified task values were not available in the reviewed material.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: independently reported benchmark evidence is available, but the exact result must be read with its configuration and calibration ([The Latent](https://thelatent.co/score/models/muse-wonder-full)).

Coding:

- SWE-Marathon: **57.5%** (Meta-reported, Full; cited by independent coverage).

Long context:

- no verified public long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Meta positions it for agent work, but public independent task-level validation is limited.
- **Reasoning: 89/100.** Independent leaderboard evidence supports a frontier rating, capped for incomplete public protocol detail.
- **Context window: 80/100.** Long-horizon use is claimed, but no verified numeric window or retrieval score was located.
- **Multimodal: 45/100.** Public sources reviewed did not establish the complete modality contract.
- **Coding: 90/100.** The reported 57.5% SWE-Marathon result is strong, capped because it is vendor-reported.
- **Cost efficiency: 58/100.** Subscription access is materially cheaper than premium token pricing for heavy users but is not free or metered transparently.
- **Overall Score: 78/100.** Mean of Tool, Reasoning, Context, Multimodal, and Coding = 77.8; promising but evidence remains incomplete.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Muse Wonder](https://dev.meta.ai/models/muse-wonder)
  - [Axios launch coverage](https://www.axios.com/2026/10/12/meta-new-ai-models-anthropic-openai)
  - [Independent benchmark evidence](https://thelatent.co/score/models/muse-wonder-full)
