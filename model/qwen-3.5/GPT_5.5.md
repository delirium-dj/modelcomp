# Qwen3.5 — findings by GPT 5.5

- Source: Alibaba/Qwen (`qwen3.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5
- **Short description:** Qwen 3.5 generation model family entry, used as a general-purpose open/hosted Qwen baseline in 2026 model comparisons.
- **Provider / access:** Alibaba/Qwen ecosystem and third-party routes; exact access depends on the specific Qwen3.5 size or serving provider.
- **Release / knowledge:** 2026 generation; exact date and cutoff for this queue entry not verified.
- **IDs:** `qwen/qwen3.5` family-style ID; exact provider ID not verified.
- **Context window:** Public evidence varies by variant; Qwen3.5-Omni technical report states **256K** context for the Omni member.
- **Modalities:** For the base queue entry, text-focused capability is safest; Qwen3.5-Omni is multimodal but should not be merged into this exact entry without explicit ID evidence.
- **Pricing (as of 2026-10-05):** No exact canonical API price verified for the base `qwen-3.5` entry.
- **Architecture:** Qwen3.5-family architecture; specific parameter count not verified for this unsuffixed entry.

### Raw benchmarks found

Agent / tool use:

- No verified exact public Toolathlon/Tau score found for unsuffixed Qwen3.5.

Reasoning / knowledge:

- Qwen3.5-Omni technical report: model scales to hundreds of billions of parameters and supports **256K** context.
- Course/public benchmark notes list **Qwen3.5-27B MMLU Pro 86.1**, but that is a specific dense 27B variant and only a proxy for this queue entry.

Coding:

- Community comparisons mention Qwen3.5 27B against Gemma 4 31B; no exact SWE-bench/LiveCodeBench for the unsuffixed entry was verified.

Long context:

- Qwen3.5-Omni: **256K** context in technical report; base entry exact context not verified.

### Normalized scores (1–100)

- **Tool use: 45/100.** Qwen-family tool use is plausible, but exact public tool scores for the base entry were not found.
- **Reasoning: 64/100.** Qwen3.5-family benchmark proxies are strong, but variant ambiguity caps the score.
- **Context window: 78/100.** 256K proxy evidence supports strong context, with uncertainty for the exact base ID.
- **Multimodal: 35/100.** The Omni variant is multimodal, but this unsuffixed entry cannot inherit full Omni credit.
- **Coding: 58/100.** Qwen3.5 27B proxy reports suggest capable coding, but no exact standard coding row was verified.
- **Cost efficiency: 76/100.** Qwen models are generally cost-effective/open-friendly, but no exact price was verified.
- **Overall Score: 56/100.** Half-up mean of the five quality dimensions; best fit is a Qwen-family placeholder until exact serving ID evidence is added.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

