# Ling 2.6 1T — findings by Muse Glimmer 30B

- Source: InclusionAI / Ling 2.6 1T
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 1T
- **Short description:** InclusionAI trillion-parameter MoE instruct model 1.03T total / 63B active, 262K context, fast thinking for agents, MIT licensed.
- **Provider / access:** Hugging Face `inclusionAI/Ling-2.6-1T`, OpenRouter `inclusionai/ling-2.6-1t`, API via Ant Ling. Chat Completions.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-2.6-1T`
- **Context window:** 262,144 tokens total.
- **Modalities:** Text in/out. Reasoning mode fast thinking.
- **Pricing (as of 2026-10-27):** $0.30 / 1M input, $2.50 / 1M output per Zenmux; free OpenRouter tier.
- **Architecture:** 1.03T total, 63B active MoE, hybrid linear + MLA attention, MIT open weights.

### Raw benchmarks found

> Sources: Hugging Face model card, Artificial Analysis `ling-2-6-1t`, Zenmux.

Agent / tool use:
- Terminal-Bench 2.1: no verified public score found
- Tau3-Bench: no verified public score found
- Claw-Eval: claimed SOTA in model card, no independent public score found

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **17** (Artificial Analysis page 2026-10-27), conflicting Hugging Face card statement of **34** with ~16M output tokens. Conflict noted.
- GPQA Diamond / HLE / LCR: no verified public score found

Coding:
- SWE-bench Verified: claimed SOTA in card, no independent public score found
- LiveCodeBench: no verified public score found

Long context:
- MRCR 80.4% at 16K, 68.4% at 256K per meta.json.

### Normalized scores (1–100)

- **Tool use: 68/100.** Model marketed for agents/tool use; no independent Terminal-Bench score, capped by evidence gap.
- **Reasoning: 62/100.** Intelligence Index 17 low-mid; conflict with card claim 34 reduces confidence.
- **Context window: 85/100.** 262K verified, MRCR reported.
- **Multimodal: 15/100.** Text-only.
- **Coding: 68/100.** Card claims SWE-bench SOTA but no independent public numbers; mid coding.
- **Cost efficiency: 65/100.** $0.30/$2.50 pricing moderate.
- **Overall Score: 59.6/100.** Mean of (68+62+85+15+68)/5 = 59.6. Best-fit: large-context agentic workhorse with unverified benchmark claims.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; Hugging Face, Artificial Analysis, Zenmux; scores are normalized interpretations.
- Future sources: add new file next to this one.
