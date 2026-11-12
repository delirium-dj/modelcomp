# Nemotron 3.5 Bolt 74B-A9B — findings by Ernie 5.5 Flash

- Source: NVIDIA/Nemotron 3.5 Bolt 74B-A9B (`nemotron-3.5-bolt-74b-a9b`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's open-weight Bolt-class MoE (74B total / 9B active) tuned for agentic tool use and web tasks, part of the Nemotron 3.5 family.
- **Provider / access:** Self-hosted (Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B`), NVIDIA NIM (free, rate-limited), plus build routes. Open weights.
- **Release / knowledge:** 2026 (Nemotron 3.5 family; not dated in the catalog snapshot); knowledge cutoff not published.
- **IDs:** `nemotron-3.5-bolt-74b-a9b`, `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B`.
- **Context window:** Not published in the sources reached for this checkpoint — treat as unverified (do not infer from the 3.5 family).
- **Modalities:** Not published for this checkpoint; the Nemotron 3.5 line is text-first with VL variants sold separately, so text in/out is the working assumption (unverified).
- **Pricing (as of 2026-11-11/12):** No first-party rate found; open weights plus a free NVIDIA NIM endpoint.
- **Architecture:** open-weight MoE, 74B total / 9B active (NVIDIA).

### Raw benchmarks found

Agent / tool use:

- PinchBench: **87.8%** (best verified row)
- BrowseComp: **66.8%**; Terminal-Bench 2.1: **51.0%**; WebArena: **50.9%**; MCP Atlas: **52.2%**
- τ³-Bench: **17.0%** (near-floor on the tool-agent-user loop)

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (strong for an A9B model)
- HLE without tools: **25.3%** (low)
- ARC-AGI / FrontierMath / CritPt: no verified public rows published

Coding:

- No coding benchmark row published for this checkpoint (no SWE-bench, LiveCodeBench or DeepSWE row)
- The closest proxy is Terminal-Bench 2.1 (51.0%)

Long context:

- No context window or MRCR / RULER / GraphWalks figure published for this checkpoint

### Normalized scores (1–100)

- **Tool use: 60/100.** PinchBench 87.8% and BrowseComp 66.8% are good, but MCP Atlas 52.2%, WebArena 50.9%, TB2.1 51.0% and especially τ³ 17.0% are below the agent baseline.
- **Reasoning: 72/100.** GPQA Diamond 86.4% is the strongest verified reasoning row of any A9B model here, but HLE 25.3% is low.
- **Context window: 50/100.** No context window is published for this checkpoint — scored at the unverified midpoint pending NVIDIA documentation.
- **Multimodal: 50/100.** No modality claim is published for this checkpoint — scored at the unverified midpoint.
- **Coding: 55/100.** No coding benchmark row was published; the score rests on the Terminal-Bench 2.1 proxy (51.0%).
- **Cost efficiency: 90/100.** Open weights with a free NIM endpoint and a 9B-active footprint that self-hosts cheaply.
- **Overall Score: 57.4/100.** Best fit for self-hosted research/browser agents that need GPQA-level knowledge at a tiny active footprint; two of the five dims are unverified, so treat this as provisional.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-12
- Method: public internet research (NVIDIA Nemotron 3.5 model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [NVIDIA-Nemotron-3.5-Bolt-74B-A9B — Hugging Face](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B)
  - [Nemotron 3.5 Bolt 74B-A9B benchmarks & sources — BenchLM](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Bolt_74B_A9B_v2.md`, using the same headings.