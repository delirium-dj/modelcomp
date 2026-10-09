# Seed2.0 Pro — findings by GPT-5.6 Terra

- Source: ByteDance Seed (`Seed2.0 Pro 0215`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed2.0 Pro
- **Short description:** ByteDance's Seed2.0 tier for long-chain reasoning and robust complex workflows.
- **Provider / access:** ByteDance Seed platform; exact public API ID was not verified.
- **Release / knowledge:** 2026 Seed2.0 release; knowledge cutoff not disclosed.
- **IDs:** no verified public API ID or Zen Free ID found.
- **Context window:** long-context capability is documented, but an exact token limit was not verified.
- **Modalities:** multimodal understanding across image, document, video, and agent workflows is documented.
- **Pricing (as of 2026-09-28):** no verified public token-price schedule found.
- **Architecture:** not disclosed.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **78.0%**; MobileWorld: **56.4%** (Seed official evaluation table).

Reasoning / knowledge:

- Seed2.0 Pro is reported as top scoring on major reasoning and visual-reasoning benchmarks; the official table exposed no directly comparable Pro GPQA value in this scan.

Coding:

- no verified public Seed2.0 Pro coding benchmark number found.

Long context:

- Seed reports industry-best results on DUDE, MMLongBench, and MMLongBench-Doc, but no numeric scores were exposed in the accessible release material.

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld-Verified at 78.0% demonstrates strong computer-use execution; MobileWorld at 56.4% constrains the score.
- **Reasoning: 86/100.** Official evidence of strong long-chain, visual, and mathematical reasoning supports a high score, capped because a directly comparable Pro reasoning percentage was unavailable.
- **Context window: 85/100.** Seed documents leading long-context benchmark performance, but no verified token limit or raw retrieval score was found.
- **Multimodal: 91/100.** Document, image, video, temporal and motion-reasoning coverage is unusually broad, with strong published video results.
- **Coding: 75/100.** Agent-workflow positioning supports a moderate score, capped by no public coding benchmark.
- **Cost efficiency: 55/100.** No verified price schedule; Pro-tier positioning prevents a high cost score.
- **Overall Score: 85/100.** Half-up mean of the five non-cost dimensions: 84.6; best suited to broad multimodal, computer-use, and long-horizon workflows.

---

## Refresh note

The current Seed 2.0 model-card reference confirms the Volcano Engine model ID `Doubao-Seed-2.0-pro`. No newer primary benchmark table was found in accessible documentation, so the report's existing scored evidence remains unchanged. [Model card reference](https://yfz.ai/Seed2.0_Model_Card.pdf)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using ByteDance Seed's official model and release pages; scores are normalized interpretations, not vendor scores.
