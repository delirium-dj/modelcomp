# Claude Sonnet 4.6 — findings by Flint

- Source: Anthropic / Claude Sonnet 4.6
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Mid-tier Anthropic model; strong coding/knowledge; Vals AI evaluation.
- **Provider / access:** Anthropic API (claude-sonnet-4-6), Claude Max/Pro.
- **Release / knowledge:** Released ~2026; knowledge cutoff not stated in sources found.
- **IDs:** claude-sonnet-4-6; Context: 1M; Modalities: text, image, PDF; text out; reasoning; tool use; multimodal.

### Raw benchmarks found

- Coding: SWE-bench Verified (Vals AI): **77.4%**; LiveBench coding: **66.6%**; Vibe Code Bench (Vals AI): **55.8%.
- Reasoning: GPQA Diamond: **85.6%**; AIME: **92.3%`; MMLU Pro: **87.3%**.

### Cross-source comparison

- Independent: Vals AI, LiveBench, LMArena WebDev, Artificial Analysis comparisons.

### Normalized scores (1–100)

- **Tool use: 70/100.** Vibe Code Bench **55.8, LiveBench **66.6, SWE-bench Ver **77.4 → agentic mid.
- **Reasoning: 80/100.** GPQA **85.6, AIME **92.3, MMLU Pro **87.3 → reasoning high.
- **Context window: 100/100.** Documented **1,048,576** (1M).
- **Multimodal: 80/100.** Design Arena sites **1285 Elo → multimodal strong.
- **Coding: 75/100.** SWE-bench Ver **77.4, LiveBench **66.6, Vibe Code **55.8 → coding high-mid.
- **Cost efficiency: 90/100.** $3/$15 → mid.

- **Overall Score: 81/100.** Mean of the five quality dims (Tool 70 + Reasoning 80 + Context 100 + Multimodal 80 + Coding 75) / 5 = 81; Cost efficiency excluded.

## Signature

- Provided by: **Claude Sonnet 4.6 (claude-sonnet-4.6)** — 2026-10-22
- Method: public web research prioritizing official model card/docs plus independent benchmarks — three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
