# Gemma 4 26B-A4B — findings by Ernie 5.5 Flash

- Source: Google/Gemma 4 26B-A4B (`gemma-4.26b-a4b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B-A4B (Gemma-4-26B-A4B-IT)
- **Short description:** Open Gemma instruction model (released 2026-04-02) for efficient chat and self-hosted deployments — 26B total / 4B active, with image and video input.
- **Provider / access:** Self-hosted (Hugging Face `google/gemma-4-26b-a4b-it`, Gemma licence), Empirio Labs, Merge Gateway, NanoGPT, W&B, plus ~4 routes.
- **Release / knowledge:** 2026-04-02; knowledge cutoff not published.
- **IDs:** `gemma-4.26b-a4b`, `google/gemma-4-26b-a4b-it`, `gemma-4-26b-a4b-it`.
- **Context window:** 262,144 tokens; max output 32,768.
- **Modalities:** text, image and video in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** Open weights — free to self-host. Hosted lanes: $0.05/$0.29 (Empirio), $0.10/$0.30 (W&B), $0.012/$0.036 (NanoGPT), $0.13/$0.40 (Merge).
- **Architecture:** open-weight MoE, 26B total / 4B active (Google Gemma 4).

### Raw benchmarks found

Agent / tool use:

- MRCRv2: **44.1%**; StealthMark Intelligence: **21.2**
- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- MMLU-Pro: **82.6%**; GPQA: **82.3%**
- HLE: **17.2%** with tools, **8.7%** without (near-floor)
- Chart Arena: **1330** Elo; FACTS Multimodal: **39.5%**

Coding:

- LiveCodeBench v6: **77.1%**; ScarfBench (Java migration): **24.4%**
- SWE-bench Verified / SWE-bench Pro / DeepSWE: no verified public rows published

Long context:

- MRCRv2: **44.1%** — below mid-pack; 262K window

### Normalized scores (1–100)

- **Tool use: 55/100.** MRCRv2 44.1% is below mid-pack and StealthMark 21.2 is weak; no terminal/OSWorld/Toolathlon row was published, so the score is a low-confidence floor.
- **Reasoning: 65/100.** MMLU-Pro 82.6% and GPQA 82.3% are decent for an A4B model, but HLE 17.2% is near-floor.
- **Context window: 78/100.** 262,144 tokens with 32,768 max output.
- **Multimodal: 75/100.** Text, image and video in with MMMU-Pro 73.8%, ParseBench 58.50% and ExtractBench 70.27% proving document work; FACTS Multimodal 39.5% is the weak row.
- **Coding: 70/100.** LiveCodeBench v6 77.1% is decent for 4B active, ScarfBench 24.4% weak; no SWE-bench row was published.
- **Cost efficiency: 95/100.** Open weights with $0.012–$0.13 per 1M hosted lanes — the cheapest credible self-hosted multimodal option here.
- **Overall Score: 68.6/100.** Best fit for always-on local chat and document extraction at a tiny active footprint; not an agent or a reasoner.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google Gemma 4 model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [google/gemma-4-26b-a4b-it — Hugging Face](https://huggingface.co/google/gemma-4-26b-a4b-it)
  - [Gemma 4 26B-A4B benchmarks & sources — BenchLM](https://benchlm.ai/models/gemma-4-26b-a4b)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemma_4_26B_A4B_v2.md`, using the same headings.