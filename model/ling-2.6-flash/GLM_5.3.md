# Ling 2.6 Flash — findings by GLM 5.3

- Source: inclusionAI / Ant Group (`inclusionAI/Ling-2.6-flash`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-flash
- **Short description:** inclusionAI (Ant Group)'s efficiency-focused instant (instruct) model in the Ling-2.6 family — a 104B-total / 7.4B-active highly sparse MoE retrofitted from the Ling-2.0 base checkpoint with a hybrid linear-attention design, built for fast responses, token-efficient execution, and lightweight agent work.
- **Provider / access:** OpenRouter (`inclusionai/ling-2.6-flash`); Novita AI ($0.10/$0.30 per 1M); Hugging Face open weights MIT (`inclusionAI/Ling-2.6-flash` + `-base` research checkpoint). No OpenCode Zen ID found.
- **Release / knowledge:** April 2026 (MIT-licensed open-weight release, per Opper/HF); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-2.6-flash` (Hugging Face); `inclusionai/ling-2.6-flash` (OpenRouter/Novita).
- **Context window:** 262,144 tokens (262K, verified via OpenRouter/BenchLM/llmcloudhub).
- **Modalities:** text in / text out; instant (instruct) model — no extended thinking (BenchLM: Non-Reasoning); function calling supported; JSON output supported on some providers. Text-only.
- **Pricing (as of 2026-10-09):** $0.10 / 1M input, $0.30 / 1M output (Novita via metatext); open weights for self-hosting at 7.4B active.
- **Architecture:** 104B total / 7.4B active sparse Mixture-of-Experts, hybrid linear attention, continued pre-training + long-context mid-training from the Ling-2.0 base checkpoint (HF model card lineage).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **86%** (Artificial Analysis harness via BenchLM)
- GDPval-AA: **550 Elo / 0.0% normalized** (Artificial Analysis — very weak real-world work-task performance)
- Claw-Eval / MCP Atlas / Terminal-Bench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **59.3%** (Artificial Analysis; GPQA overall 59%)
- HLE: **6.3%** (Artificial Analysis)
- AA-LCR: **31.3%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **14.1** (Artificial Analysis)
- AA-Omniscience: **-66.1 index / 15.6% accuracy / 96.7% hallucination rate** (Artificial Analysis — among the worst knowledge-reliability readings tracked)

Coding:

- SciCode: **27%** (Artificial Analysis)
- AA Coding Index: **25.3%** (Artificial Analysis)
- SWE-bench / LiveCodeBench / Terminal-Bench: no verified public score found

Instruction following:

- IFBench: **57.4%** (Artificial Analysis; screenshot reading 57%)

Long context:

- 262K window verified; AA-LCR 31.3% (above) is the only long-context-adjacent figure — no MRCR/RULER retrieval benchmark found

Multimodal:

- Text-only model — no verified multimodal benchmark exists

### Normalized scores (1–100)

- **Tool use: 52/100.** A genuinely good τ²-bench 86% shows usable conversational-agent behavior, but GDPval-AA at 550 Elo (0.0% normalized) is near the bottom of the field and no Terminal-Bench/MCP/tool-athlon row exists anywhere.
- **Reasoning: 38/100.** GPQA 59.3% sits below the 60–80% mid band, HLE 6.3% and CritPt 0.0% are floor-level, the AA Intelligence Index is 14.1, and a 96.7% hallucination rate makes its open-domain answers untrustworthy.
- **Context window: 72/100.** Verified 262,144-token window lands the 200K–500K tier just above the 200K=70 anchor — the one spec where it holds its own; AA-LCR 31.3% shows weak use of it.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 35/100.** SciCode 27% and AA Coding Index 25.3% are weak for a 2026 model, with no SWE-bench Verified number published; token efficiency partially compensates in high-volume routine work.
- **Cost efficiency: 97/100.** $0.10/$0.30 per 1M is right at the near-free anchor, with MIT open weights and a 7.4B-active MoE that self-hosts cheaply — its genuine strength.
- **Overall Score: 42/100.** Half-up mean of (52 + 38 + 72 + 15 + 35) = 42.4 → 42. Best fit: very cheap open-weights executor for token-efficient routine drafts and simple conversational agents — escalate to Ling-3.0-flash (same price class, far better scores) for anything knowledge-critical.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (BenchLM's AA-sourced 16-benchmark profile, OpenRouter/Opper/metatext listings, Hugging Face model-card lineage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
