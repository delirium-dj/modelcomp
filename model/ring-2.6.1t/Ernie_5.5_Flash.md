# Ring 2.6-1T — findings by Ernie 5.5 Flash

- Source: InclusionAI/Ring 2.6-1T (`ring-2.6.1t`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6-1T (the dataset slug drops the dots: `ring-2.6.1t`)
- **Short description:** InclusionAI's (Ant Group) trillion-parameter open-weights reasoning flagship (released 2026-05-08), the reasoning sibling of Ling 2.6-1T — built for agent execution, long-horizon tool workflows and complex reasoning, with high/xhigh reasoning-effort settings.
- **Provider / access:** Open weights `inclusionAI/Ring-2.6-1T` on Hugging Face / ModelScope (MIT); OpenRouter (`inclusionai/ring-2.6-1t`), Requesty and other gateways; SGLang multi-node deployment (4 nodes, TP8/PP4).
- **Release / knowledge:** 2026-05-08 (weights; tech report arXiv:2606.15079, 2026-06-13); knowledge cutoff not published.
- **IDs:** `ring-2.6.1t` (dataset), `inclusionAI/Ring-2.6-1T` (HF), `inclusionai/ring-2.6-1t` (OpenRouter), `ring-2.6-1t` (Requesty).
- **Context window:** 131,072 native → 262,144 with YaRN (catalogue: 262,144 in/out).
- **Modalities:** text in / text out; reasoning with `high` / `xhigh` effort levels; agentic tool use (PinchBench/ClawEval/Tau2 evidence); JSON via structured output.
- **Pricing (as of 2026-11-13):** $0.30 in / $2.50 out per 1M (Requesty); a free route exists (Kilo Code `inclusionai-ring-2.6-1t-free`, $0).
- **Architecture:** MoE, 1T total / 63B active (bailing_hybrid), 7:1 hybrid Lightning Attention + MLA, MTP; Async RL + IcePop training; MIT license.

### Raw benchmarks found

> InclusionAI's own model-card tables (high and xhigh columns) plus the HF eval-results tab.

Agent / tool use:

- PinchBench (agent execution, high): **87.60** — above GPT-5.4 xHigh and Gemini-3.1-Pro high per vendor
- ClawEval (high): **63.82**
- Tau2-Bench Telecom (high): **95.32** — within 1 point of the top score
- Terminal-Bench / GDPval / MCP Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (xhigh): **88.27%** (HF eval-results row)
- AIME 2026 (xhigh): **95.83%** (MathArena)
- ARC-AGI-V2 (xhigh): **66.18** — above Gemini-3.1-Pro high and Claude-Opus-4.7 xhigh per vendor
- HLE / CritPt / MMLU-Pro: no verified public score found

Coding:

- SWE-bench Verified: **74%** (HF eval-results row)
- SWE-bench Pro: **53.76%** (HF eval-results row)
- LiveCodeBench / DeepSWE: no verified public score found

Long context:

- 128K native → 256K via YaRN; no MRCR / RULER / GraphWalks figure published.

### Normalized scores (1–100)

- **Tool use: 88/100.** PinchBench 87.60, ClawEval 63.82 and Tau2-Telecom 95.32 are strong agent-execution rows (Tau2 within 1 point of the best); this is the model's headline strength. Capped by missing TB2.1/GDPval rows.
- **Reasoning: 88/100.** GPQA 88.27%, AIME 2026 95.83% and ARC-AGI-V2 66.18 are frontier-adjacent for an open model; the GPQA/AIME pair is what caps it just under the top band.
- **Context window: 88/100.** 128K native, 256K with YaRN — tier 200K–500K high band; no retrieval-quality figure published.
- **Multimodal: 15/100.** Text-only in/out (no vision tower on this checkpoint).
- **Coding: 82/100.** SWE-bench Verified 74% and SWE-bench Pro 53.76% are solid open-model coding rows; no LCB/DeepSWE figure caps it below the coding frontier.
- **Cost efficiency: 90/100.** $0.30/$2.50 per 1M for 1T-class quality (and a free route) — very strong value.
- **Overall Score: 72.2/100.** Best fit for agentic workflows, tool-heavy automation and complex reasoning pipelines that need open weights at trillion scale; the text-only modality is the hard cap.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (inclusionAI/Ring-2.6-1T Hugging Face model card and its evaluation tables, HF eval-results rows for GPQA/SWE-bench/AIME/Claw-Eval, tech report arXiv:2606.15079, OpenRouter/Requesty listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [inclusionAI/Ring-2.6-1T — Hugging Face model card (evaluation tables)](https://huggingface.co/inclusionAI/Ring-2.6-1T)
  - [Ling and Ring 2.6 Technical Report (arXiv:2606.15079)](https://arxiv.org/abs/2606.15079)
  - [Ring-2.6-1T — OpenRouter](https://openrouter.ai/inclusionai/ring-2.6-1t)
  - [Ring-2.6-1T — BenchmarkList](https://benchmarklist.com/models/inclusionai-ring-2.6-1t/)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.