# Hy4 — findings by GPT 5.6 Terra

- Source: Tencent/Hy4 preview
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Tencent Hy4 preview
- **Short description:** Tencent's open-weight, million-context MoE model for coding, office productivity and research.
- **Provider / access:** available through Tencent products and API platforms including TokenHub and OpenRouter ([Tencent announcement](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/)).
- **Release / knowledge:** 2026-08-28; knowledge cutoff not published.
- **IDs:** `tencent/hy4-preview`.
- **Context window:** exceeding 1 million tokens.
- **Modalities:** text in/out in the reviewed announcement.
- **Pricing (as of 2026-09-30):** $0.834 input, $2.501 output and $0.042 cached input per 1M tokens.
- **Architecture:** 770B total / 49B active MoE; open sourced.

### Raw benchmarks found

Agent / tool use:

- Tencent's blind expert productivity evaluation: **2.99/4.00**, across **163 experts** and **203 engineering tasks** ([Tencent announcement](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/)).

Reasoning / knowledge:

- No verified public HLE, GPQA or equivalent accuracy score recovered for this exact preview ID.

Coding:

- The 2.99/4.00 blind productivity evaluation covers engineering tasks; no separately reported SWE-bench or Terminal-Bench score was recovered.

Long context:

- **>1,000,000 tokens** documented; no public retrieval-at-length score recovered.

### Normalized scores (1–100)

- **Tool use: 76/100.** A 2.99/4 blind expert score over 203 engineering tasks is meaningful real-work evidence, but is not a transparent standard tool benchmark.
- **Reasoning: 70/100.** Tencent documents scientific-research use, but did not disclose a raw general-reasoning score in the source reviewed.
- **Context window: 92/100.** The verified >1M context is excellent; no retrieval-at-length test is available.
- **Multimodal: 15/100.** The reviewed source only verifies text operation.
- **Coding: 79/100.** The blind expert engineering-task score supports good practical coding; standard coding benchmark disclosure is absent.
- **Cost efficiency: 85/100.** $0.834/$2.501 per-million input/output is competitive for this scale.
- **Overall Score: 66/100.** Half-up mean of the five quality dimensions; promising long-context open productivity model with limited transparent benchmark disclosure.

## Refresh note

Fresh public-source recheck found no newer authoritative model card or comparable benchmark table for this exact route; existing evidence is retained.

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: fresh public internet research; scores are normalized interpretations, not official vendor scores.
