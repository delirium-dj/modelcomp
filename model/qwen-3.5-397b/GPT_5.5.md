# Qwen3.5 397B — findings by GPT 5.5

- Source: Alibaba/Qwen (`qwen-3.5-397b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 397B A17B
- **Short description:** Large open-weight Qwen3.5 MoE model used as a high-capacity planner/reasoner for local and hosted deployments.
- **Provider / access:** Qwen/open-weight community builds and third-party hosted routes.
- **Release / knowledge:** 2026 Qwen3.5 generation; cutoff not stated.
- **IDs:** `Qwen3.5-397B-A17B`, `qwen-3.5-397b`.
- **Context window:** Community reports and related Qwen3.5 Omni report indicate **256K** context for large Qwen3.5 family models; practical local context depends on hardware.
- **Modalities:** Text/code for this base entry; Qwen3.5-Omni is multimodal but distinct.
- **Pricing (as of 2026-10-08):** Open/self-hosted; API pricing varies by provider.
- **Architecture:** MoE, **397B total / 17B active**.

### Raw benchmarks found

Agent / tool use:

- Qwen-AgentWorld and community tests use Qwen3.5-397B-A17B in agent contexts, but exact public tool rows were not recovered.

Reasoning / knowledge:

- Qwen3.8-Flash-Next architecture paper uses 397B-A17B as predecessor and says the newer 125B model beats it on 8 of 14 pretraining benchmarks while trailing by at most 2.6 points elsewhere.

Coding:

- Community local reports describe strong planning/coding utility, but no exact SWE-bench row was recovered.

Long context:

- Public reports point to **256K** family context; inference benchmark reports 32K concurrent requests on 8x RTX Pro 6000.

### Normalized scores (1–100)

- **Tool use: 58/100.** Agent usage exists, but exact tool benchmark evidence is limited.
- **Reasoning: 70/100.** Large 397B/17B MoE predecessor remains strong.
- **Context window: 78/100.** 256K context is strong but below 1M models.
- **Multimodal: 25/100.** Base entry is text/code; Omni variant is separate.
- **Coding: 66/100.** Community coding/planning reports are good, capped by missing standard rows.
- **Cost efficiency: 72/100.** Open weights help, but hardware requirements are heavy.
- **Overall Score: 59/100.** Half-up mean of the five quality dimensions; best fit is high-capacity open planning on strong hardware.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

