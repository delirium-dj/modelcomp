# GPT-6 Luna — findings by GLM 5.2 Coding

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's lightweight GPT-6 tier model, released 2026-09-22 alongside GPT-6 Sol (launch post: openai.com/index/introducing-gpt-6-sol-and-luna/). The budget workhorse of the GPT-6 family at $0.10/$0.50 per 1M tokens — for always-on agents (OpenAI's Dots persistent-agent line, announced at DevDay 2026, is the stated use case: "agents that run for a long time and reuse a lot of context need a model that's cheap enough to leave running").
- **Provider / access:** OpenAI API only per LLM Stats (1 provider tracked). ChatGPT consumer placement not verified this session.
- **Release / knowledge:** 2026-09-22; knowledge cutoff May 2026 (LLM Stats).
- **IDs:** `openai/gpt-6-luna`. Family card (per AlphaCorp GPT-6.1 Sol article): Astra $10/$50 → GPT-6.1 Sol $2/$10 → Luna $0.10/$0.50; Luna is the only family member at a 10% cached rate ($0.01) that is also 1/10th of an already-tiny input price.
- **Context window:** 1.1M tokens in / 128K out (LLM Stats — larger than Astra's 1.05M and 6.1 Sol's 1.05M).
- **Modalities:** text + image input; text out (LLM Stats multimodal FAQ). Reasoning effort levels not independently verified this session.
- **Pricing (as of 2026-10-09):** $0.10 input / $0.50 output / $0.01 cached per 1M tokens — cheapest tracked provider price in its class; vs Qwen3.8 Flash, Gemini 3.8 Flash ($0.75/$3.75), GPT-5.6 Sol.
- **Architecture:** proprietary, closed weights; parameters undisclosed. System-card documentation folds into the GPT-6 Astra deploymentsafety page.

### Raw benchmarks found

> Thin independent coverage this session: LLM Stats dataset tables render empty (JS-gated), no vendor launch-table numbers surfaced in fetches. Findings below are what could be verified; no score was invented.

Agent / tool use:

- No verified public agent benchmark score found this session (no DeepSWE/OSWorld/TB/AA Briefcase rows for Luna surfaced).
- LLM Stats "most-compared" list (Qwen3.8 Flash, Qwen3.8-Flash-Next, GPT-5.6 Sol, Gemini 3.7/3.8 Flash) positions Luna in the budget-flash competitive set, implying AA Index ~55 territory — NOT treated as a score (comparison-list inference only, logged as context).

Reasoning / knowledge:

- No verified HLE/GPQA/AA Index score found this session.

Coding:

- No verified coding benchmark score found this session.

Long context:

- 1.1M / 128K out (LLM Stats). No MRCR/RULER score published — no retrieval score found.

### Normalized scores (1–100)

> Derivation per `../../model-comparison.md` v4. Overall = half-up mean of the five quality dims; Cost excluded. Scores below are conservative placements from verified specs (context, price, modality) and peer positioning only — flagged low-confidence pending a real benchmark table; a future findings file should replace them.

- **Tool use: 60/100 (low confidence).** Budget tier with 1.1M context and the family's agent-harness lineage (Dots-targeted), but zero verified agent rows this session; placed at the floor of the flash-class band.
- **Reasoning: 62/100 (low confidence).** Knowledge cutoff May 2026 and GPT-6 lineage suggest flash-class reasoning; no verified score — placed at flash-tier baseline.
- **Context window: 100/100.** 1.1M input / 128K output — the LARGEST context window in the entire GPT-6 family, verified; no retrieval score keeps it from being contested but the spec is full-tier.
- **Multimodal: 65/100.** Text + image input, text out (+image = 60–70 band per methodology).
- **Coding: 60/100 (low confidence).** No verified coding rows; family budget tier implies sub-Sol capability; placed at flash baseline pending data.
- **Cost efficiency: 99/100.** $0.10/$0.50/$0.01-cached is the cheapest verified per-token price of any tracked frontier-lab model this session; only true free-tier Zen models beat it on absolute cost. Docked 1 pt for unverified volume discounts.
- **Overall Score: 69/100.** (60 + 62 + 100 + 65 + 60) / 5 = 69.4 → 69. Best-fit (provisional): the always-on agent / high-volume background-processing default where per-token cost dominates and 1.1M context matters; escalate to Sol/Astra for capability peaks.

---

## Signature

- Provided by: **GLM 5.2 Coding (zai-org/glm-5.2-coding)** — 2026-10-09
- Method: independent public internet research (LLM Stats GPT-6 Luna page primary: pricing/context/modality/cutoff; AlphaCorp GPT-6 family pricing table; DevDay context via prior session's GPT-6.1 Sol research); scores are normalized 1–100 interpretations, not official vendor scores — capability dims explicitly flagged low-confidence due to absent benchmark rows; they should be revised when OpenAI's Luna launch-table data or an AA profile becomes readable.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.