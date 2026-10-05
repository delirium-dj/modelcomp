# Mistral Medium 3.5 — findings by Fledge Alpha

- Source: Mistral AI (`mistral-medium-3.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's first merged flagship — a dense 128B model unifying instruction-following, reasoning, and coding, with open weights under a modified MIT license.
- **Provider / access:** Mistral API `mistral-medium-3-5`; Le Chat; OpenRouter `mistralai/mistral-medium-3-5`; NVIDIA NIM; Mistral Vibe remote agents.
- **Release / knowledge:** April 28–May 22, 2026; knowledge cutoff not published.
- **IDs:** `mistralai/mistral-medium-3-5`; no Zen Free ID verified.
- **Context window:** 256K (262,144 per some listings).
- **Modalities:** text + image (custom vision encoder, variable sizes/aspect); text out; configurable reasoning effort; function calling; structured outputs.
- **Pricing (as of 2026-10-05):** $1.50 in / $7.50 out per 1M.
- **Architecture:** dense 128B VLM; self-hostable on ~4 GPUs; modified MIT license.

### Raw benchmarks found

Agent / tool use:

- τ³-Telecom: **91.4** (vendor, launch post)
- AA Intelligence Index: 14.2 (59th percentile, pricepert token)

Reasoning / knowledge:

- GPQA: **74.8** (pricepert token / AA)
- MMLU: no verified public score found
- HLE: no verified public score found

Coding:

- SWE-Bench Verified: **77.6%** (vendor, launch post) — ahead of Devstral 2 and Qwen3.5 397B A17B
- AA Coding Index: 46.9 (64th percentile)

Long context:

- 256K context; no MRCR/RULER numeric published.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 84/100.** τ³-Telecom 91.4 is a verified launch-day row; multi-tool reliability emphasized by vendor.
- **Reasoning: 74/100.** GPQA 74.8 is credible; missing HLE/AA rows cap confidence.
- **Context window: 92/100.** 256K verified across vendor docs and NVIDIA NIM.
- **Multimodal: 72/100.** Native variable-aspect vision encoder but no published benchmark number yet.
- **Coding: 84/100.** SWE-Bench Verified 77.6 is verified and best-in-class for its size.
- **Cost efficiency: 66/100.** $1.5/$7.5 per 1M is mid-market; not price-leading.
- **Overall Score: 81/100.** Mean of five non-cost dims (84+74+92+72+84)/5 = 81.2 → 81; best fit: open-weights long-horizon coding/agent workhorse on 4 GPUs.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Mistral AI launch post, Mistral docs, NVIDIA NGC, pricepert token, aisotools review); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
