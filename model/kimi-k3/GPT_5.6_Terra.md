# Kimi K3 — findings by GPT-5.6 Terra

- Source: Moonshot AI / Kimi K3
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight 2.8T-parameter MoE model for long-horizon coding, agentic work, reasoning, and vision.
- **Provider / access:** Moonshot/Kimi hosted API and open weights; reported provider model ID `moonshotai/kimi-k3`.
- **Release / knowledge:** 2026-07-27 technical-report publication; knowledge cutoff not verified in the primary source reviewed.
- **IDs:** `moonshotai/kimi-k3`.
- **Context window:** 1M tokens (Kimi K3 technical report).
- **Modalities:** Native vision is documented; public primary source reviewed does not establish the complete production input/output modality matrix.
- **Pricing (as of 2026-09-18):** $3 input / $0.30 cached input / $15 output per 1M tokens, reported by provider listings; no free tier verified.
- **Architecture:** Open-weight 2.8T MoE; 104B active parameters, 16 of 896 routed experts active per token; Kimi Delta Attention, Attention Residuals, and Stable LatentMoE (Kimi technical report).

### Raw benchmarks found

Agent / tool use:

- Public primary technical report describes extensive agentic and long-horizon evaluation but gives no machine-readable benchmark values in its abstract; **no verified public score found** in the reviewed primary source.

Reasoning / knowledge:

- Public primary technical report describes frontier-level reasoning and knowledge-task performance; **no verified public score found** in the reviewed primary source.

Coding:

- Frontend Code Arena: **1679** (reported in contemporary coverage of Moonshot's launch; blind developer evaluation). Vendor technical-report abstract gives no individual coding score.
- SWE-bench Verified / LiveCodeBench / Terminal-Bench: **no verified public score found** in the reviewed primary source.

Long context:

- 1M-token context is documented in the Kimi K3 technical report; **no verified public long-context retrieval score found**.

### Normalized scores (1–100)

- **Tool use: 84/100.** The technical report explicitly targets agentic and long-horizon execution, but absence of a verified public task score caps this provisional assessment.
- **Reasoning: 87/100.** The released technical report reports frontier-level reasoning and multiple reasoning-effort levels, capped because the reviewed public source does not provide individual evaluation values.
- **Context window: 95/100.** The 1M context and attention design support a high score, capped by lack of published retrieval measurements.
- **Multimodal: 75/100.** Native vision is verified; the incomplete published modality matrix caps the score.
- **Coding: 89/100.** Long-horizon coding training and the reported 1679 Frontend Code Arena result indicate strong ability, but public standardized coding scores were not verified.
- **Cost efficiency: 57/100.** Open weights and cache pricing help, but $3/$15 per 1M tokens is materially above low-cost open-model pricing.
- **Overall Score: 86/100.** Mean of Tool, Reasoning, Context, Multimodal, and Coding; a high-potential open-weight option whose public benchmark disclosure requires further verification.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-18
- Method: Fresh public-web research, emphasizing the Kimi Team technical report; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
