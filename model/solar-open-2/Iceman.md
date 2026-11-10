# Solar Open 2 — findings by Iceman

- Source: Upstage/Solar-Open2-250B
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2 (250B)
- **Short description:** Upstage’s Solar Open 2 is an open-weight Korean-sovereignty MoE model (250B/15B active, 1M context) for agentic reasoning, coding, and long-context tasks, runnable on 2x quantized H200s.
- **Provider / access:** Open weights on Hugging Face (`upstage/Solar-Open2-250B`, Upstage Solar License). Local metadata lists `upstage/Solar-Open2-250B`, `noFreeId`, and self-hosting guidance (no published per-token price).
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `Solar-Open2-250B`, `upstage/Solar-Open2-250B`.
- **Context window:** 1,000,000 tokens (1M); 131,072 reasoning output cap noted in metadata (max_tokens up to 256K).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** Open weights (Upstage Solar License). Self-host 4x H200 BF16 or 2x H200 quantized; no published per-token hosted price in local metadata.
- **Architecture:** Sparse MoE, 250B total / 15B active parameters, GQA, 1M context, reasoning mode support (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark tables for `upstage/Solar-Open2-250B`.

Agent / tool use:

- SWE-bench Verified: **74.6%**
- SWE-bench Multilingual: **71.4%**
- Terminal-Bench 2.0: **54.9%**
- BrowseComp (agentic search): **65.4%**
- TOOLATHLON: **26.1%**

Reasoning / knowledge:

- AIME 2026 (no tools): **91.7%**
- HMMT Feb 2026 (no tools): **85.4%**
- GPQA Diamond: **84.9%**
- HLE (with tools): **26.0%**
- AA-Omniscience: **44.6%**
- AA-Omniscience Hallucination: **32.0%**

Coding:

- LiveCodeBench v6: **92.4%**
- BigCodeBench: **67.0%**
- SWE-bench Verified: **74.6%**
- SWE-bench Multilingual: **71.4%**
- Terminal-Bench 2.0: **54.9%**

Long context:

- Fiction.liveBench (128K): **79.4%**
- 1M context supported (RoPE scaling/mid-training for extended context described in card).

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 82/100.** Strong coding-agent and browsing capability (SWE-bench Verified 74.6%, BrowseComp 65.4%) with moderate terminal/toolathlon performance (Terminal-Bench 2.0 54.9%, TOOLATHLON 26.1%).
- **Reasoning: 84/100.** Strong math/reasoning and solid knowledge (AIME 2026 91.7%, HMMT Feb 2026 85.4%, GPQA Diamond 84.9%, HLE 26.0% with tools, AA-Omniscience 44.6%).
- **Context window: 92/100.** Native 1M context support with strong 128K long-context benchmark result (Fiction.liveBench 79.4%).
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 86/100.** Excellent code generation/contest-style coding (LiveCodeBench v6 92.4%) plus strong software engineering results (SWE-bench Verified 74.6%, SWE-bench Multilingual 71.4%, BigCodeBench 67.0%).
- **Cost efficiency: 82/100.** Open weights with efficient serving profile (15B active, 2x H200 quantized) but no published per-token hosted price and large model footprint.
- **Overall Score: 77/100.** Mean of the five non-cost dims (82, 84, 92, 40, 86) = 76.8 → 77. Best fit for open-weight, long-context coding and agentic reasoning where self-hosting is feasible.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [Solar-Open2-250B model card (Hugging Face)](https://huggingface.co/upstage/Solar-Open2-250B)
  - Local repository metadata consulted: `model/solar-open-2/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
