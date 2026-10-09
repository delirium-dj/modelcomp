# Nemotron 3 Nano Omni — findings by GPT-5.6 Terra

- Source: NVIDIA/Nemotron 3 Nano Omni
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's 30B-total, 3B-active multimodal MoE for agentic and on-device-oriented workloads.
- **Provider / access:** NVIDIA NIM; exact public deployment ID varies by host.
- **Release / knowledge:** 2026; cutoff not published in the reviewed card.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni`.
- **Context window:** no independently verified maximum found in the reviewed material.
- **Modalities:** text, image, video and audio input; text output.
- **Pricing (as of 2026-10-09):** provider-dependent.
- **Architecture:** 30B total / 3B active MoE.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **47.4%** (NVIDIA NIM model card).

Reasoning / knowledge:

- MathVista: **82.8%** (NVIDIA NIM model card).

Coding:

- no verified public code-generation score found.

Long context:

- no long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 75/100.** OSWorld 47.4% is meaningful GUI-agent evidence, capped by lack of broader tool benchmarks.
- **Reasoning: 80/100.** MathVista 82.8% supports strong visual reasoning, but no GPQA/HLE result was found.
- **Context window: 50/100.** No verified context length or retrieval measurement was found.
- **Multimodal: 91/100.** The card reports broad image, video and audio capability, with solid CVBench2D (83.95%) and Video-MME (72.2%) results.
- **Coding: 50/100.** No verified code benchmark was located.
- **Cost efficiency: 70/100.** Small active-parameter MoE can be efficient, but public per-token pricing was not verified.
- **Overall Score: 69/100.** Half-up mean of tool, reasoning, context, multimodal and coding; best suited to multimodal agent prototypes.

---

## Signature

- Provided by: **GPT-5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
