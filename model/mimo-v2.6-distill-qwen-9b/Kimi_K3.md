# MiMo V2.6 Distill Qwen 9B — findings by Kimi K3

- Source: Xiaomi/MiMo-V2.6-Distill-Qwen-9B (HF `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** A 9B checkpoint from Xiaomi's MiMo-V2.6 release — Qwen3.5-9B supervised-fine-tuned on MiMo-generated data, published explicitly as a research starting point for agentic RL, not as a flagship. The laptop-class member of the MiMo-V2.6 family. Variant of the V2.6 series, not an alias of Pro/Flash.
- **Provider / access:** Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (self-host; ~18.8 GB BF16; community GGUF — e.g. `ollama run hf.co/bartowski/MiMo-V2.6-Distill-Qwen-9B-GGUF:Q4_K_M` — and MLX 4-bit builds). No hosted API listing found on Xiaomi's platform. Not on OpenCode Zen.
- **Release / knowledge:** Released with the MiMo-V2.6 series — HF repos live late 2026-09-21 UTC, announcement 2026-09-22. Knowledge cutoff not stated publicly.
- **IDs:** `xiaomi/mimo-v2.6-distill-qwen-9b` (HF-derived). No Zen ID (free or paid) exists.
- **Context window:** Not published for the distill (Qwen3.5-9B base context not restated on the card in coverage reviewed; do not assume the 1M window of Pro/Flash).
- **Modalities:** Text in/out only (SFT of a text base on MiMo-generated data); reasoning traces inherited from MiMo task data; tool-call formats per the MiMo stack. No multimodal encoders.
- **Pricing (as of 2026-09-29):** Free weights (no API price — nothing hosted). Runs on a single 8–12 GB GPU (Q4 GGUF) or Apple Silicon via MLX.
- **Architecture:** 9B dense (Qwen3.5-9B base) SFT checkpoint. License: shipped with the MIT-licensed MiMo-V2.6 release wave — confirm on the model card before commercial redistribution (not explicitly restated in coverage reviewed).

### Raw benchmarks found

> All numbers vendor-reported (Xiaomi), reproduced in Codersera's MiMo-V2.6 guide; harness = Xiaomi internal. Baseline = the Qwen3.5-9B base model.

Agent / tool use:

- Terminal-Bench 2.1: **37.1** (Qwen3.5-9B base: 27.0) — vendor-reported
- Tau3 / GDPval / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / Omniscience / CritPt / LCR: no verified public score found

Coding:

- SWE-bench Pro: **44.6%** (Qwen3.5-9B base: 32.0%) — vendor-reported
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe / DeepSWE: no verified public score found

Long context:

- No long-context retrieval benchmark reported; context window not officially republished for the distill.

### Normalized scores (1–100)

- **Tool use: 40/100.** Terminal-Bench 2.1 37.1 is a real lift over its 9B base (27.0) and respectable for the size class, but far below frontier agents (70+) and with no other agentic data points.
- **Reasoning: 40/100.** No reasoning benchmarks published; SFT on MiMo reasoning traces implies some transfer, unmeasured publicly. Provisional.
- **Context window: 40/100.** Context not republished for the distill — scored provisionally in the sub-100K band pending the model card; do not assume the family 1M window.
- **Multimodal: 15/100.** Text-only SFT checkpoint; no vision/audio encoders.
- **Coding: 50/100.** SWE-bench Pro 44.6% is remarkable at 9B (the base scored 32.0) and beats several much older mid-size models on the same suite — but TB2.1 at 37.1 shows its ceiling, and the harness is vendor-internal.
- **Cost efficiency: 100/100.** Free weights that run on a single consumer GPU or a Mac (Q4 GGUF / MLX 4-bit) — effectively $0 at laptop scale; capped only by "you supply the hardware."
- **Overall Score: 37/100.** Mean of the five non-cost dims (40+40+40+15+50)/5 = 37. Best fit: a research baseline for agentic-RL experiments and offline/local tinkering — explicitly not positioned by Xiaomi as a production flagship.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: Public internet research (Codersera MiMo-V2.6 guide reproducing Xiaomi's model-card numbers for the distill, HF community quant listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
