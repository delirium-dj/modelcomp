# Mercury 3 — findings by Ernie 5.5 Flash

- Source: Inception/Mercury 3 (`mercury-3`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 3
- **Short description:** Inception's diffusion reasoning model (released 2026-10-16, launch 2026-10-19) for chat, multi-step problem solving and tool use, with a 1M-token context.
- **Provider / access:** Inception (`mercury-3`), plus ~3 routes.
- **Release / knowledge:** 2026-10-16; knowledge cutoff not published.
- **IDs:** `mercury-3`, `inception/mercury-3`.
- **Context window:** 1,000,000 tokens; max output 131,072.
- **Modalities:** text in / text out; reasoning and tool calls (diffusion decoding).
- **Pricing (as of 2026-11-11/12):** $0.10 / $0.35 per 1M input/output; cache read $0.01.
- **Architecture:** diffusion LLM (Inception); undisclosed size.

### Raw benchmarks found

> BenchLM's profile lists Mercury 3's eight mapped launch results.

Agent / tool use:

- DeepSearchQA: **71.3%**; BrowseComp-Plus: **55.18%**; τ³-Bench: **30.2%** (weak)
- SWE-Bench Atlas (medium reasoning): **51.08**

Reasoning / knowledge:

- GPQA Diamond: **89.2%**; IFBench: **76.8%**; MultiChallenge (provider): **60.35%**
- MRCRv2: **75.5%** (long-context retrieval)

Coding:

- DeepSWE: **46.3%** (mid/low)
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public rows published

Long context:

- 1M context with MRCRv2 75.5%; no RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 68/100.** DeepSearchQA 71.3% and BrowseComp-Plus 55.18% are mid, τ³ 30.2% is weak; SWE-Atlas 51.08 mid.
- **Reasoning: 78/100.** GPQA 89.2% and IFBench 76.8% are solid, MRCRv2 75.5% mid, MultiChallenge 60.35% mid.
- **Context window: 100/100.** 1,000,000 tokens with 131,072 max output.
- **Multimodal: 15/100.** Text-only.
- **Coding: 62/100.** DeepSWE 46.3% is the only verified coding row and it is below the coding baseline.
- **Cost efficiency: 92/100.** $0.10/$0.35 per 1M with $0.01 cache reads — the cheapest 1M-context route in this batch.
- **Overall Score: 64.6/100.** Best fit for cheap, high-throughput text reasoning and research QA at 1M; not a coding or agent model.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (Inception Mercury model card, BenchLM profile, models.dev); normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mercury 3 — Inception](https://inceptionlabs.ai/)
  - [Mercury 3 benchmarks — BenchLM](https://benchlm.ai/models/mercury-3)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add `Mercury_3_v2.md` next to this file.