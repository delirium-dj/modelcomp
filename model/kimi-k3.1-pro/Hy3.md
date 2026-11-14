# Kimi K3.1 Pro — findings by Hy3

- Source: Moonshot AI (`kimi-k3.1-pro`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's flagship (2026-10-24); ~3-trillion-parameter model for long-horizon coding, deep research, and autonomous tasks. Ranked #1 among Chinese models on Artificial Analysis Intelligence Index (2026-11-06).
- **Provider / access:** Kimi platform, Moonshot API (`kimi-k3.1-pro`). Chat Completions API.
- **Release / knowledge:** Released 2026-10-24.
- **IDs:** `moonshot/kimi-k3.1-pro`
- **Context window:** 1,000,000 tokens (verified via Moonshot).
- **Modalities:** text in/out; reasoning; tool calls. Multimodal coverage not detailed this pass.
- **Pricing (as of 2026-11-14):** not itemized this pass; Moonshot API tiered.
- **Architecture:** proprietary (~3T params).

### Raw benchmarks found

Agent / tool use:

- No verified public Terminal-Bench / SWE-agent figure found this pass

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **#1 among Chinese models** (2026-11-06, no exact score)
- No verified public GPQA/HLE figure found this pass

Coding:

- No verified public SWE-bench / LiveCodeBench figure found this pass

Long context:

- 1,000,000-token window verified; no public MRCR/RULER score found this pass.

### Normalized scores (1–100)

- **Tool use: 85/100.** Frontier agentic positioning; capped by no public agentic benchmark number.
- **Reasoning: 88/100.** AA Intelligence Index #1 among Chinese models implies top-tier reasoning; no exact public score.
- **Context window: 99/100.** 1,000,000-token context (top tier).
- **Multimodal: 75/100.** Text-centric this pass; no verified image/audio modality disclosed.
- **Coding: 87/100.** Long-horizon coding emphasis; no public SWE-bench number found to confirm higher.
- **Cost efficiency: 72/100.** Moonshot API competitive tier; exact rates undisclosed.
- **Overall Score: 87/100.** Mean of the five non-cost dims (85+88+99+75+87)/5 = 86.8 → 87. Best-fit: leading Chinese flagship with elite reasoning index rank, gated by thin public numeric disclosure.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: public internet research — Baidu Baike, Moonshot AI site & API platform; independent of peer `model/` findings.
- Reference URLs:
  - [Kimi K3.1 Pro — Baidu Baike](https://baike.baidu.com/item/Kimi%20K3.1%20Pro/69478066)
  - [Moonshot AI](https://moonshot.cn/)
  - [Kimi API Platform](https://platform.moonshot.cn/)
