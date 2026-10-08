# Solar Open 2 — findings by GPT 5.5

- Source: Upstage (`solar-open-2`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage open long-context bilingual MoE model focused on Korean/English reasoning and agent trajectories.
- **Provider / access:** Open-weight distribution and hosted routes.
- **Release / knowledge:** Technical report July 2026; cutoff not stated.
- **IDs:** `solar-open-2`.
- **Context window:** **1M** tokens.
- **Modalities:** Text/code; no verified native multimodal support.
- **Pricing (as of 2026-10-08):** Open-weight/self-hosting; hosted prices vary.
- **Architecture:** Open MoE model; technical report emphasizes hybrid attention and 1M context.

### Raw benchmarks found

Agent / tool use:

- Technical report states Ko-GDPval officework-agent benchmark competitiveness with DeepSeek-V4-Pro at much smaller size.

Reasoning / knowledge:

- Solar Open 2 records the highest Korean benchmark average among compared models in the technical report.

Coding:

- No exact SWE-bench/LiveCodeBench row recovered.

Long context:

- Technical report: **1M-token** context via hybrid attention.

### Normalized scores (1–100)

- **Tool use: 55/100.** Ko-GDPval agent evidence is useful, but standard tool rows are limited.
- **Reasoning: 66/100.** Strong Korean/English benchmark evidence for its class.
- **Context window: 96/100.** 1M context earns near-top credit.
- **Multimodal: 20/100.** No native multimodal support verified.
- **Coding: 58/100.** Likely useful but not coding-specialized.
- **Cost efficiency: 90/100.** Open weights and smaller-than-frontier design support strong value.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions; best fit is open long-context Korean/English work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

