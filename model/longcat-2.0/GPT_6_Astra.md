# LongCat 2.0 — findings by GPT 6 Astra

- Source: Meituan / LongCat-2.0
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Name:** LongCat 2.0
- **Short description:** Open-weight text model for coding and long-running agents; evaluated final release rather than an anonymous preview.
- **Provider / access:** OpenRouter Chat Completions; self-hosted compatible servers.
- **Release / knowledge:** Official release article June 30, 2026; OpenRouter listing July 20, 2026 is a separate hosting date. Knowledge cutoff unverified. [Publisher announcement](https://tech.meituan.com/2026/06/30/LongCat2.0.html)
- **IDs:** `meituan-longcat/LongCat-2.0` weights; `meituan/longcat-2.0` hosted. No verified Zen Free ID.
- **Context window:** Approximately 1M; OpenRouter literally lists 1,048,756 tokens and 262,144 maximum completion tokens. The unusual exact context value is preserved as a provider claim.
- **Modalities:** Text input/output, reasoning and tools. Hosted `response_format` is not enforced.
- **Pricing (as of 2026-10-07):** AtlasCloud through OpenRouter: discounted $0.30 input / $1.20 output / $0.006 cache read per million, versus displayed base $0.75/$3/$0.015. Paid route; no privacy or free-access guarantee inferred. [Provider specifications](https://openrouter.ai/meituan/longcat-2.0)
- **Architecture:** Publisher describes 1.6T total and approximately 48B active MoE, LongCat Sparse Attention, n-gram embeddings and multi-token prediction; MIT weights. [Model card](https://huggingface.co/meituan-longcat/LongCat-2.0)

### Raw benchmarks found

[Publisher model-card evaluation table](https://huggingface.co/meituan-longcat/LongCat-2.0): in-house unified harness unless starred; target-model figures below are not starred. Full task-specific budgets are not provided in the table.

Agent / tool use:
- Terminal-Bench 2.1 **70.8%**; FORTE **73.2%**; BrowseComp **79.9%**; RWSearch **78.8%**.
- Tau3/Tau2, GDPval-AA Elo, Claw-Eval, Toolathon and MCP-Atlas: no independently verified primary-source score found in this pass.

Reasoning / knowledge:
- GPQA Diamond **88.9%**; IMO-AnswerBench **81.8%**; IFEval **90.0%**.
- HLE, LCR/MLCR, CritPt and Omniscience: no independently verified primary-source score found in this pass.
- Artificial Analysis independently reports Intelligence Index **19**, on the current **v4.3.2** page. Do not map this directly to the project's older index thresholds: the benchmark composition changed. Individual benchmark charts were unavailable in the readable page. [Evaluator](https://artificialanalysis.ai/models/longcat-2-0)

Coding:
- SWE-bench Pro **59.5%**; SWE-bench Multilingual **77.3%**.
- DeepSWE, LiveCodeBench, SciCode and Vibe Code Bench: no independently verified primary-source score found.

Long context:
- Native 1M capacity is documented; no primary-source numeric retrieval measurement verified here.

Evidence handling:
- OpenRouter reproduces a different set of AA sub-scores, but the evaluator's readable page did not expose them. Those secondary benchmark values are not substituted into the raw table or treated as independently checked.
- The model's benchmark table establishes useful coding and agent performance; stronger claims about general frontier parity remain unsupported.

### Normalized scores (1–100)

- **Tool use: 72/100.** Publisher Terminal-Bench 70.8% and search-task results support strong practical agents; missing independently checked tool-suite results cap confidence.
- **Reasoning: 76/100.** GPQA 88.9% and IMO-AnswerBench 81.8% support good reasoning; limited broad primary evidence constrains the score.
- **Context window: 95/100.** Advertised 1M tier without verified retrieval accuracy.
- **Multimodal: 15/100.** Text-only model; other LongCat multimodal products are separate.
- **Coding: 76/100.** SWE-Pro 59.5% and multilingual repository work support a strong midrange, below top-tier DeepSWE evidence.
- **Cost efficiency: 95/100.** Discounted $0.30/$1.20 with inexpensive caching; promotion and token consumption affect actual costs.
- **Overall Score: 67/100.** Half-up mean: (72 + 76 + 95 + 15 + 76) / 5 = 66.8. Low-cost long-context text agents.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-07 UTC
- Method: Independent primary-source web research; normalized scores are interpretations, not vendor scores.
- Future sources: Add a separate signed report using the same headings.

