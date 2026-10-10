# Ling-2.6-flash — findings by Ling 3.1 Flash

- Source: inclusionAI (`Ling-2.6-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-flash
- **Short description:** inclusionAI's open-weight, non-reasoning Ling-variant of the Ling 2.6 family — hybrid linear attention (Multi-Head Latent Attention + Lightning Linear), targeted at agent scenarios (tool use, multi-step planning, task execution), with day-0 support in Claude Code, Kilo Code, Qwen Code, Hermes Agent and OpenClaw; up to 340 tok/s on multi-GPU setups.
- **Provider / access:** Hugging Face (`inclusionAI/Ling-2.6-flash`, open weights); Novita API (`novita/inclusionai/ling-2.6-flash`) via Opper gateway.
- **Release / knowledge:** Released 2026-04-21; knowledge cutoff not stated.
- **IDs:** `inclusionai/Ling-2.6-flash` (HF); `novita/inclusionai/ling-2.6-flash` (Novita).
- **Context window:** 262,144 tokens — verified on the Opper/Novita catalogue and Artificial Analysis model page; max output 33,000 tokens.
- **Modalities:** text in; text out; tools and structured output supported; reasoning mode not available (non-reasoning Ling variant per AA).
- **Pricing (as of 2026-10-10):** $0.10 / 1M input, $0.30 / 1M output (Novita, US residency, zero data retention on pay-as-you-go, no training by default, GDPR DPA available).
- **Architecture:** hybrid linear attention (MLA + Lightning Linear); parameter count not stated in sources found — no verified public score found.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **61.2%** (Opper catalogue, inclusionAI listing)
- BFCL-V4, TAU2-bench, Claw-Eval, PinchBench: inclusionAI claims "competitive with, and in some cases SOTA-level against, models with larger active parameter counts" — numeric values not published in the sources found — no verified public score found
- Terminal-Bench 2.1 / GDPval-AA / MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **10** (AA — above the comparable-model median of 7; composite of reasoning, knowledge, mathematics and coding)
- Base checkpoint (Ling-2.6-flash-base, arXiv 2606.15079 — pre-post-training, not directly comparable): MMLU 84.13, MMLU-Pro 61.36, GPQA 37.88, HumanEval-Plus 81.10, LiveCodeBench 33.48
- Post-trained GPQA / HLE / AIME / CritPt / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **61.2%** (see tool use)
- HumanEval-Plus 81.10 and LiveCodeBench 33.48 are base-checkpoint numbers (arXiv 2606.15079) — post-trained values: no verified public score found
- DeepSWE / SciCode / Terminal-Bench: no verified public score found

Long context:

- 262K window claimed; no MRCR / RULER / GraphWalks measurement — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 60/100.** SWE-bench Verified 61.2% is mid-strong and inclusionAI claims SOTA-level BFCL-V4/TAU2/PinchBench results, but no numeric values for those or for Terminal-Bench 2.1, GDPval-AA, or MCP-Atlas were published.
- **Reasoning: 45/100.** AA Intelligence Index 10 is low-mid (median 7 among comparable open non-reasoning models); it is a non-reasoning variant, and post-trained GPQA/HLE/AIME numbers do not exist — only weak base-checkpoint GPQA 37.88.
- **Context window: 71/100.** 262K tokens with 33K max output — the 200K–500K band; no retrieval-at-length measurement published.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band.
- **Coding: 60/100.** SWE-bench Verified 61.2% is mid-strong; base-checkpoint HumanEval-Plus 81.10 is strong but LiveCodeBench 33.48 (base) is weak, and no post-trained LiveCodeBench/DeepSWE/SciCode number exists.
- **Cost efficiency: 97/100.** $0.10/$0.30 per 1M with open weights — near the top of the cost scale.
- **Overall Score: 50/100.** Mean of Tool 60, Reasoning 45, Context 71, Multimodal 15, Coding 60 = 50.2. Best-fit: cheap open-weight agent scaffolding and tool-calling workloads at 262K context; thin published evidence on reasoning and long-context retrieval.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (inclusionAI Hugging Face model card 2026-06-13, Opper/Novita catalogue, Artificial Analysis model page, arXiv 2606.15079 Ling/Ring 2.6 report for base-checkpoint numbers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
