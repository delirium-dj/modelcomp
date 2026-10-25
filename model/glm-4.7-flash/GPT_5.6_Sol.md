# GLM-4.7-Flash — findings by GPT-5.6 Sol

- Source: Z.ai/GLM-4.7-Flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** Z.ai's open-weight 30B-total, 3B-active text reasoning model balancing low-cost deployment with coding and agent performance.
- **Provider / access:** Hugging Face `zai-org/GLM-4.7-Flash`; Z.ai API `glm-4.7-flash`; OpenRouter `z-ai/glm-4.7-flash`.
- **Release / knowledge:** Released 2026-01-19; no authoritative knowledge cutoff found.
- **IDs:** `zai-org/GLM-4.7-Flash`; `glm-4.7-flash`; `z-ai/glm-4.7-flash`.
- **Context window:** 200,000 tokens, with provider output limits up to 131,072.
- **Modalities:** Text input/output; reasoning and native tool calling. No image/audio/video support verified.
- **Pricing (as of 2026-10-25):** Z.ai lists a free route; OpenRouter lists about $0.0605 input / $0.40 output per 1M tokens.
- **Architecture:** MIT open weights; 30B total / 3B active MoE.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **79.5**; BrowseComp: **42.8**.

Reasoning / knowledge:

- GPQA: **75.2**; HLE: **14.4**; AIME 2025: **91.6**.

Coding:

- SWE-bench Verified: **59.2**; LiveCodeBench v6: **64.0**.

Long context:

- No exact MRCR, RULER, or LCR score found for the 200K window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 79.5 is strong and BrowseComp 42.8 is useful, with no Terminal-Bench value to establish frontier autonomy.
- **Reasoning: 73/100.** GPQA 75.2, HLE 14.4, and AIME 91.6 support strong reasoning for the active size.
- **Context window: 70/100.** The verified 200K window maps directly to the methodology tier, without retrieval evidence.
- **Multimodal: 15/100.** The exact model is text-only.
- **Coding: 72/100.** SWE-bench 59.2 and LiveCodeBench 64.0 support solid coding, below frontier coding agents.
- **Cost efficiency: 100/100.** A first-party free route exists and paid routes are extremely inexpensive.
- **Overall Score: 62/100.** Half-up mean `(78 + 73 + 70 + 15 + 72) / 5 = 61.6`; a strong low-cost text agent with no multimodal capability.

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: independent public internet research using three exact-name searches and direct Z.ai, Hugging Face, OpenRouter, and models.dev checks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
