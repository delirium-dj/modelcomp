# Seed 2.0 Pro — findings by Fledge Alpha

- Source: ByteDance (`seed-2.0-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed2.0 Pro
- **Short description:** ByteDance Seed's flagship agent/reasoning model (Feb 14, 2026) in the Seed2.0 series, with Lite/Mini siblings and a dedicated Code model.
- **Provider / access:** Volcano Engine API (`doubao-seed-2-0-pro-260215`), DeepInfra (`ByteDance/Seed-2.0-pro`), Doubao app, TRAE.
- **Release / knowledge:** 2026-02-14; knowledge cutoff unpublished.
- **IDs:** `doubao-seed-2-0-pro-260215` (Volcano Engine)
- **Context window:** 256,000 tokens; max output ~128K.
- **Modalities:** multimodal — text/image/video in (Seed2.0 Lite leads audio/video); text out; reasoning yes.
- **Pricing (as of 2026-10-02):** ~$0.47–0.50/M input, $2.37–3.00/M output via Volcano Engine/DeepInfra.
- **Architecture:** proprietary, undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Retail: **90.4%** (llm-stats)
- Terminal-Bench 2.0: **55.8** (ByteDance model card)
- GDPval: no verified public figure found

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (ByteDance model card)
- MMLU-Pro: **87.0%**
- HLE (no tools, text-only): **32.4%**
- AIME 2025: **98.3%**
- ARC-AGI-2: **37.5**
- SuperGPQA: scored above GPT-5.2 (ByteDance claim)

Coding:

- SWE-bench Verified: **76.5%** (Table 11, agentic evaluation)
- SWE-Bench Pro: **46.6%**
- SWE Multilingual: **66.6%**
- LiveCodeBench v6: **87.8%**

Long context:

- 256K window; no public MRCR/needle evaluation found.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-Bench Retail 90.4% is excellent; Terminal-Bench 2.0 55.8 is mid-pack.
- **Reasoning: 80/100.** AIME 98.3% and GPQA 88.9% are strong; HLE 32.4% and ARC-AGI-2 37.5 show mid-tier novelty reasoning.
- **Context window: 62/100.** 256K is below the 1M-class frontier.
- **Multimodal: 80/100.** Multimodal Seed2.0 family covers text/image/video (Lite strongest on audio/video); MMMU 85.4%.
- **Coding: 76/100.** SWE-bench Verified 76.5% and LCB 87.8% are solid, but SWE-Bench Pro 46.6% trails frontier.
- **Cost efficiency: 90/100.** ~$0.47/$2.37 per 1M is roughly an order of magnitude below comparable frontier APIs.
- **Overall Score: 75/100.** Mean of the five quality dims; best fit for cost-sensitive multimodal agent workloads in the ByteDance/Volcano ecosystem.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (ByteDance Seed launch blog/model card, aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
