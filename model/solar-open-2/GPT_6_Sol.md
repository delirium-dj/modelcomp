# Solar Open 2 — findings by GPT 6 Sol

- Source: Upstage (`upstage/Solar-Open2-250B`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (250B-A15B).
- **Short description:** Upstage's open-weight, text-only hybrid linear/softmax-attention MoE for long-horizon agentic work, coding and Korean/English/Japanese office tasks. It is not the separate proprietary Solar Pro 4 ([official model card](https://huggingface.co/upstage/Solar-Open2-250B), [technical report](https://arxiv.org/html/2607.20062)).
- **Provider / access:** Download `upstage/Solar-Open2-250B` and self-host with the Upstage vLLM fork (OpenAI-compatible `/v1/chat/completions`, configured served ID `solar-open2-250b`; optional Anthropic-compatible `/v1/messages`). Upstage's changelog records `solar-open2` API access initially by application on July 8, 2026, but its current [pricing page](https://www.upstage.ai/pricing/api) has no Open 2 tariff and [Artificial Analysis lists zero public providers](https://artificialanalysis.ai/models/solar-open2-250b/providers); do not assert an available public priced or Free route. The former Playground option was deprecated July 24 ([changelog](https://console.upstage.ai/docs/resources/changelog)).
- **Release / knowledge:** Open-weight announcement and report **2026-07-22** ([Upstage announcement](https://www.upstage.ai/blog/en/solar-open-2), [report](https://arxiv.org/abs/2607.20062)); [Artificial Analysis](https://artificialanalysis.ai/models/solar-open2-250b) lists a February 2026 knowledge cutoff but inconsistently dates release August 12. Prefer Upstage's release date; cutoff is secondary-source metadata, not vendor-confirmed.
- **IDs:** `upstage/Solar-Open2-250B` weights; `solar-open2-250b` is an example **self-hosted** served name, not proof of a paid public route. Historical `solar-open2` Upstage API name is distinct from `solar-pro4`; no verified OpenCode Zen Free ID ([card](https://huggingface.co/upstage/Solar-Open2-250B), [changelog](https://console.upstage.ai/docs/resources/changelog)).
- **Context window:** **1,048,576 tokens** nominal in vendor weights; generation recommendation up to 128K non-reasoning / 256K including reasoning at high effort in the recommended self-host setup. These output budgets are not separate context sizes; deployments can cap them ([model card](https://huggingface.co/upstage/Solar-Open2-250B)).
- **Modalities:** Text in/out; high/none reasoning modes and tool calling via vLLM parser. No native image/audio/video/PDF understanding or generation claimed for these weights ([model card](https://huggingface.co/upstage/Solar-Open2-250B), [AA specifications](https://artificialanalysis.ai/models/solar-open2-250b)).
- **Pricing (as of 2026-11-02):** Downloadable weights, but self-hosting incurs hardware/operations costs; Upstage recommends four H200 GPUs minimum (BF16), eight for its example serving, or two H200 with quantization. No verified per-million-token public API price, cached-token rate, or durable free tier for this exact model; do not transfer Solar Pro 4 pricing to Open 2 ([model card](https://huggingface.co/upstage/Solar-Open2-250B), [Upstage tariff](https://www.upstage.ai/pricing/api), [AA providers](https://artificialanalysis.ai/models/solar-open2-250b/providers)).
- **Architecture:** **250B total / 15B active**, 320 routed experts plus one shared, top eight routed plus shared; three linear-attention layers per softmax layer, no positional encoding. Weights use the **Upstage Solar License**, permitting commercial use with derivative-model naming, attribution and notice requirements; neither Apache-2.0 nor MIT ([card and license](https://huggingface.co/upstage/Solar-Open2-250B), [report](https://arxiv.org/html/2607.20062)).

### Raw benchmarks found

All exact-model numeric task scores below are **Upstage-reported** in its [model card](https://huggingface.co/upstage/Solar-Open2-250B) and [technical report](https://arxiv.org/html/2607.20062); [BenchLM republishes those rows without an independently computed overall](https://benchlm.ai/models/solar-open-2). Hugging Face's linked evaluation-result entries repeat the submitted claims rather than independently replicating the full harness. Artificial Analysis has a model page, but its currently rendered page reports **N/A** for an Intelligence Index and no public provider; an older search snippet displaying an estimated 25 is not stable independent evidence ([live AA page](https://artificialanalysis.ai/models/solar-open2-250b)).

- **Agent / tool use:** APEX-Agents **16.6%**, MCP-Atlas **58.2%**, τ³ Banking **19.6%**, Terminal Bench **Hard 28.3%**, GDPval-AA **v2 Elo 1128**, SWE-bench Verified **70.4%** (also coding). Neither the Terminal Bench Hard figure nor GDPval-AA v2 is interchangeable with a different benchmark release or independent AA rerun ([vendor table](https://huggingface.co/upstage/Solar-Open2-250B)).
- **Reasoning / knowledge:** GPQA Diamond **86.3%**, MMLU-Pro **86.2%**, HLE without tools **28.8%**, AIME 2026 **95.7%**, HMMT Feb 2026 **93.9%**; Korean CLIcK **90.7%** and KMMLU-Pro **78.4%** in the Upstage harness ([vendor table](https://huggingface.co/upstage/Solar-Open2-250B)).
- **Coding:** LiveCodeBench **v6 92.4%**, SWE-bench Verified **70.4%**, ArtifactsBench **55.9%** in Upstage's setup. No independently verified exact-checkpoint repo-repair score found ([vendor table](https://huggingface.co/upstage/Solar-Open2-250B)).
- **Long context:** AA-LCR **62.3%** as reported by Upstage; no independently measured retrieval-at-1M figure located. The nominal 1M context is an architectural maximum, not a demonstrated 1M needle-retrieval rate ([vendor table](https://huggingface.co/upstage/Solar-Open2-250B), [technical report](https://arxiv.org/html/2607.20062)).

### Normalized scores (1–100)

- **Tool use: 70/100.** Vendor agentic and tool scores are competitive, but τ³ and hard-terminal tasks remain difficult; external replication is thin.
- **Reasoning: 80/100.** Strong vendor GPQA, HLE and math, discounted because independent exact-model evaluation is unavailable.
- **Context window: 78/100.** 1M nominal and 62.3 vendor AA-LCR; no measured 1M-end retrieval to justify a higher mark.
- **Multimodal: 15/100.** Text-only input/output, despite its long-context document use case.
- **Coding: 77/100.** Vendor LiveCodeBench and SWE-bench are strong, but their harness is not independently reproduced here.
- **Cost efficiency: 61/100.** Open weights enable self-hosting, but 250B weights/H200 capacity and absent public tariff limit accessible value.
- **Overall Score: 64/100.** Half-up mean (70 + 80 + 78 + 15 + 77) / 5 = 64; best suited to organizations able to host a long-context, text-first agent and validate the vendor benchmarks themselves.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Fresh official weights/report, independent-benchmark-coverage and API/pricing web searches; vendor benchmarks separated from unreplicated third-party indexing and current provider availability. Scores are normalized interpretations.
- Reference URLs:
  - [Upstage official Solar Open 2 weights, benchmark table, serving guide and license](https://huggingface.co/upstage/Solar-Open2-250B)
  - [Upstage Solar Open 2 technical report](https://arxiv.org/html/2607.20062)
  - [Upstage July 22 announcement](https://www.upstage.ai/blog/en/solar-open-2)
  - [Artificial Analysis model page and current independent coverage](https://artificialanalysis.ai/models/solar-open2-250b)
  - [Artificial Analysis public-provider status](https://artificialanalysis.ai/models/solar-open2-250b/providers)
  - [Upstage API pricing](https://www.upstage.ai/pricing/api)
- Future sources: add a new file next to this one using the same headings.
