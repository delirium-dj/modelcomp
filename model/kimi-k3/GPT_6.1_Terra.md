# Kimi K3 — findings by GPT-6.1 Terra

- Source: Moonshot AI / Kimi K3
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight multimodal mixture-of-experts model for coding, long-context work and agents.
- **Provider / access:** Moonshot Chat Completions API `kimi-k3`; open weights `moonshotai/Kimi-K3` and OpenRouter `moonshotai/kimi-k3` ([Moonshot](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)).
- **Release / knowledge:** Released 2026-07-16 per [Vals](https://www.vals.ai/models/kimi_kimi-k3); knowledge cutoff not independently verified.
- **IDs:** `kimi-k3`, `moonshotai/Kimi-K3`; Moonshot requires a successful top-up for API access.
- **Context window:** 1,048,576 tokens per [model card](https://huggingface.co/moonshotai/Kimi-K3); Moonshot documents output up to the context limit, subject to input and endpoint constraints.
- **Modalities:** Text, image and video input; text output, thinking and tool calling supported ([Moonshot quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)).
- **Pricing (2026-11-01):** Vals lists $3 input / $15 output per million tokens for its provider; verify current Moonshot pricing before use.
- **Architecture:** 2.8T total / 104B active MoE; weights under the Kimi K3 License ([Moonshot model card](https://huggingface.co/moonshotai/Kimi-K3)).

### Raw benchmarks found

Agent / tool use:

- Moonshot max-effort Terminal-Bench 2.1 **88.3%**, MCP-Atlas **84.2%**, Toolathlon-Verified **76.5%**, and tau3-Banking **33.4%** ([model card](https://huggingface.co/moonshotai/Kimi-K3)).
- Vals Terminal-Bench 4.0 **17.17% ± 0.51** and Vals Index **52.95% ± 1.00** ([Vals](https://www.vals.ai/models/kimi_kimi-k3)); different benchmark versions are not directly comparable.

Reasoning / knowledge:

- Moonshot GPQA Diamond **93.5%**, HLE-Full **43.5 / 56.0** and CritPt **23.4%** as listed in the vendor table; HLE settings are not specified in the retrieved table ([model card](https://huggingface.co/moonshotai/Kimi-K3)).
- Vals GPQA **92.93% ± 1.31** and ProofBench v1.1 **87.00% ± 3.38** ([Vals](https://www.vals.ai/models/kimi_kimi-k3)).

Coding:

- Moonshot DeepSWE **67.5%** and SciCode **58.7%** ([model card](https://huggingface.co/moonshotai/Kimi-K3)).
- Vals SWE-bench **93.40% ± 1.11**, Vibe Code Bench v1.1 **84.97% ± 2.75**, and Code Migration v1.1 **28.59% ± 3.78** ([Vals](https://www.vals.ai/models/kimi_kimi-k3)).

Long context:

- Moonshot lists AA-LCR **74.7** without a window length in the retrieved table; the model card documents 1,048,576 tokens. No 98%+ 512K retrieval result verified.

### Normalized scores (1–100)

- **Tool use: 89/100.** Strong vendor tool benchmarks are tempered by lower independent Terminal-Bench 4.0 results.
- **Reasoning: 91/100.** GPQA and proof results are strong, with more modest CritPt and HLE figures.
- **Context window: 95/100.** The documented 1M window earns the top size tier; no qualifying 98%+ long-context retrieval result verified.
- **Multimodal: 85/100.** Native image and video input is documented, but no audio or non-text output is credited.
- **Coding: 91/100.** Strong DeepSWE, SWE-bench and Vibe Code results are tempered by weaker independent code migration.
- **Cost efficiency: 78/100.** Vals' $3/$15 hosted rates are paid; open weights provide a self-hosting option with substantial hardware costs.
- **Overall Score: 90/100.** (89 + 91 + 95 + 85 + 91) / 5 = 90.2, rounded to 90; useful for long-context and visual coding when deployment costs fit.

---

## Signature

- Provided by: **GPT-6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Independent public-source research; scores are normalized 1–100 interpretations, not official vendor scores. Vendor and independent harnesses are distinguished.
- Reference URLs:
  - [Moonshot model card and evaluation table](https://huggingface.co/moonshotai/Kimi-K3)
  - [Moonshot API quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)
  - [Vals independent evaluations](https://www.vals.ai/models/kimi_kimi-k3)
- Future sources: add a new file next to this one using the same headings.
