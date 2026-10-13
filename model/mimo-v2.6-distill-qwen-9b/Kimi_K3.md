# MiMo V2.6 Distill Qwen 9B — findings by Kimi K3

- Source: Xiaomi/MiMo-V2.6-Distill-Qwen-9B (HF `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-10-13 (UTC) — deep second pass (first pass 2026-09-29; **license verified MIT**, params 9.41B BF16 verified, creation stamp matches the 09-21 release wave; **architecture correction: it's an image-text multimodal checkpoint (Qwen3_5ForConditionalGeneration) with vision+audio+video tokens in its template — not a bare text-only SFT**)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Distill-Qwen-9B
- **Short description:** A 9B checkpoint from Xiaomi's MiMo-V2.6 release — Qwen3.5-9B supervised-fine-tuned on MiMo-generated data, published explicitly as a research starting point for agentic RL, not as a flagship. The laptop-class member of the MiMo-V2.6 family.
- **Provider / access:** Hugging Face `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` — **verified live, ungated, 9.41B params BF16 (~18.8 GB), created 2026-09-21 / lastModified 2026-09-22 (✓ matches first-pass release-wave dates), 24.3K downloads/month**; community GGUF/MLX builds exist. No hosted API; not on Zen (verified 2026-10-13).
- **Release / knowledge:** Released with the MiMo-V2.6 series (HF repos live 2026-09-21 UTC, announcement 09-22 — ✓ confirmed from repo stamps). Cutoff not stated publicly.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` (HF, canonical).
- **Context window:** Still not published for the distill (HF metadata carries no max-length field — checked this pass; do not assume the 1M window of Pro/Flash).
- **Modalities — CORRECTED this pass:** pipeline `image-text-to-text`, auto-model **AutoModelForMultimodalLM**, and the chat template handles **image, audio (`<|mimo_audio_start|>`), and video** tokens with a `video_preprocessor_config.json` present — the checkpoint inherits the Qwen3.5 multimodal stack. No multimodal benchmark has been published for this distill, so measured quality stays unverified — but "no multimodal encoders" (first pass) was wrong.
- Reasoning traces inherited from MiMo task data (think-block template); tool-calling template format (`<tool_call><function=…>` — new detail).
- **Pricing (as of 2026-10-13):** free weights; **license MIT (verified on the card — first pass's "confirm before commercial redistribution" resolved)**; runs on a single 8–12 GB GPU (Q4 GGUF) or Apple Silicon via MLX.
- **Architecture:** **9.41B-parameter** multimodal transformer (Qwen3.5-9B base, `qwen3_5` model_type) — SFT checkpoint, MIT.

### Raw benchmarks found

> All numbers vendor-reported (Xiaomi), reproduced in Codersera's MiMo-V2.6 guide; harness = Xiaomi internal. Baseline = the Qwen3.5-9B base model. No new rows published since the first pass.

Agent / tool use:

- Terminal-Bench 2.1: **37.1** (Qwen3.5-9B base: 27.0) — vendor-reported
- Tau3 / GDPval / OSWorld / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / Omniscience / CritPt / LCR: no verified public score found

Coding:

- SWE-bench Pro: **44.6%** (base: 32.0%) — vendor-reported
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe / DeepSWE: no verified public score found

Long context:

- No long-context retrieval benchmark; context window not officially republished.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded. (Change vs first pass shown inline.)

- **Tool use: 40/100.** Unchanged — TB 2.1 37.1 lifts over the 9B base (27.0); respectable for the class, far below frontier (70+).
- **Reasoning: 40/100.** Unchanged — no reasoning benchmarks published; SFT transfer unmeasured. Provisional.
- **Context window: 40/100.** Unchanged — context not republished (HF metadata checked again this pass); provisionally sub-100K.
- **Multimodal: 30/100.** +15 — architecture correction: multimodal input (image/audio/video) is present in the template and pipeline; zero published scores, so it stays far below measured vision models, but the first-pass floor was wrong on facts.
- **Coding: 50/100.** Unchanged — SWE-bench Pro 44.6% at 9B is remarkable (base 32.0); vendor harness caps it.
- **Cost efficiency: 100/100.** Free weights, MIT (verified), single consumer GPU.
- **Overall Score: 40/100.** Mean of (40+40+40+30+50)/5 = 40 (was 37). Best fit: a research baseline for agentic-RL experiments and offline/local tinkering — with the added benefit that the multimodal stack is inherited if it proves usable.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-13
- Method: deep second-pass public web research (HF API metadata for `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B` fetched 2026-10-13 — MIT license, 9.41B BF16, created 2026-09-21 / modified 09-22 ✓, image-text-to-text pipeline + multimodal template tokens incl. audio/video, Qwen3.5-9B finetune relation; Zen listing 2026-10-13 — absent). First-pass vendor-reported rows retained. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
