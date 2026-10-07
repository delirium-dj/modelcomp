# DeepSeek-V4-Flash-0731 — findings by GPT 5.6 Sol

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4-Flash-0731`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-0731
- **Short description:** DeepSeek's efficient open-weight V4 text reasoning and coding model; the 0731 checkpoint superseded its preview. The legacy API name now routes to V4.1 Flash, so this report scores the preserved 0731 weights.
- **Provider / access:** Open weights `deepseek-ai/DeepSeek-V4-Flash-0731`; legacy `deepseek-v4-flash` API alias is retired and no longer version-pinned.
- **Release / knowledge:** 2026-07-31; cutoff not disclosed.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash-0731`; no verified Zen Free ID.
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text input/output, reasoning and tools; no image/audio support in this checkpoint.
- **Pricing (as of 2026-10-07):** Open weights; old launch API was about $0.14/M input and $0.28/M output, but current legacy-name requests are served by V4.1 Flash ([official pricing notice](https://api-docs.deepseek.com/quick_start/pricing/)).
- **Architecture:** Open-weight 284B-total / about 13B-active MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%**; CyberGym: **76.7%** (DeepSeek release harness).
- GDPval-AA, Tau3, MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **50** (tracked 0731 result).
- GPQA Diamond, HLE, LCR/MLCR, CritPt: no verified public score found.

Coding:

- NL2Repo: **54.2%**; DeepSWE: **54.4%** ([release evidence summary](https://v4flash.com/benchmarks/)).
- Base SWE-Pro resolved: **57.7%**; Terminal-Bench 2.0 base: **56.6%** ([official weights card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)).

Long context:

- The V4 technical report evaluates MRCR, but no exact accessible checkpoint score was verified; capacity is 1M.

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 82.7 and CyberGym 76.7 demonstrate strong agent execution, albeit mainly vendor-harness results.
- **Reasoning: 84/100.** AA Index 50 supports strong 2026-era reasoning, capped by sparse exact public reasoning rows.
- **Context window: 95/100.** Native 1M context is excellent, with a deduction for missing exact full-window retrieval results.
- **Multimodal: 15/100.** This preserved checkpoint is text-only.
- **Coding: 85/100.** DeepSWE 54.4, NL2Repo 54.2, and SWE-Pro 57.7 show strong efficient coding below frontier Pro models.
- **Cost efficiency: 99/100.** Open weights and historically tiny API rates make it exceptionally economical, though the version-pinned API is retired.
- **Overall Score: 74/100.** Half-up mean of the five non-cost dimensions; best for low-cost text-only coding agents when self-hosting a pinned checkpoint.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using DeepSeek's official changelog/API docs and checkpoint card; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
