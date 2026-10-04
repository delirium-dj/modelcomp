# GPT-5.4 — findings by GPT 6 Astra

- Source: OpenAI / `gpt-5.4`
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-5.4, standard model (not Pro).
- **Short description:** General professional-work model with native computer use and coding capabilities.
- **Provider / access:** OpenAI Responses and Chat Completions APIs; hosted tools depend on endpoint.
- **Release / knowledge:** March 5, 2026 release; August 31, 2025 knowledge cutoff.
- **IDs:** `gpt-5.4`, pinned `gpt-5.4-2026-03-05`; no verified Zen Free ID.
- **Context window:** 1,050,000 total; 128,000 maximum output.
- **Modalities:** Text/image input, text output; no native audio/video. Function calling and structured outputs supported. Reasoning none/low/medium/high/xhigh; none is default.
- **Pricing (2026-10-04):** USD 2.50 input / 0.25 cached input / 15 output per million tokens. Above 272K input, full-session input doubles and output increases 1.5×; regional processing adds 10%. Paid API, tool charges separate.
- **Architecture:** Proprietary; parameter count not disclosed. Specifications: [official model documentation](https://developers.openai.com/api/docs/models/gpt-5.4); release: [announcement](https://openai.com/index/introducing-gpt-5-4/).

### Raw benchmarks found

Agent / tool use:

- Vendor release results: OSWorld-Verified **75.0%**, Toolathlon **54.6%**, MCP Atlas **67.2%**, Tau2 Telecom **98.9%**; GDPval **83.0% wins/ties**, not GDPval-AA Elo. Tau2 uses reasoning none. [Launch evaluation](https://openai.com/index/introducing-gpt-5-4/).
- Terminal-Bench **2.0: 75.1%**, xhigh; no verified public score found for 2.1, Tau3-Banking or Claw-Eval. [March 17 evaluation](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).

Reasoning / knowledge:

- GPQA Diamond **92.8%**, HLE **39.8% without tools / 52.1% with tools** at launch. [Launch evaluation](https://openai.com/index/introducing-gpt-5-4/).
- The later table reports GPQA **93.0%** at xhigh; retained as a separate evaluation rather than replacing the launch number. [March 17 evaluation](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).
- CritPt, Omniscience and independent Intelligence Index: no verified public score found in this research.

Coding:

- SWE-bench Pro Public **57.7%**, xhigh; Terminal-Bench 2.0 as above. [Evaluation](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).
- SWE-bench Verified, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified public score found.

Long context:

- MRCR v2 eight-needle **86.0% at 64K–128K**, **79.3% at 128K–256K**, xhigh. [March 17 evaluation](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).
- Graphwalks **256K–1M: BFS 21.4%, parents 32.4%**, substantially weaker than shorter-context results. [Launch evaluation](https://openai.com/index/introducing-gpt-5-4/).
- Vision: MMMU-Pro **81.2%**, **81.5% with Python**. [March 17 evaluation](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong terminal, computer and tool measurements; missing newer terminal/banking coverage caps the score.
- **Reasoning: 89/100.** Excellent GPQA and near-frontier HLE; extended-context Graphwalks limits confidence on long reasoning chains.
- **Context window: 95/100.** Million-token tier by capacity; measured retrieval and graph reasoning do not justify 100.
- **Multimodal: 70/100.** Strong image understanding, without native audio/video support.
- **Coding: 84/100.** Strong SWE-Pro and terminal execution; no verified DeepSWE/SciCode evidence for the highest band.
- **Cost efficiency: 63/100.** Paid standard pricing is slightly cheaper on input than the methodology's USD 3/15 reference; long-context premiums matter.
- **Overall Score: 84/100.** Half-up mean: (84 + 89 + 95 + 70 + 84) / 5 = 84.4; suitable for professional tool-driven work.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Fresh public research using official API documentation and vendor evaluations; normalized scores are interpretations, not official scores.

