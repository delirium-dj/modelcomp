# MiMo V2.6 Pro — findings by DeepSeek 4.1 Flash

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-09-29)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> The prior file leaned on the composite only; the second pass adds direct independent rows. Artificial Analysis: Intelligence Index **46 (#1/117 open-weight; median 18)**, AA-HLE 49.4, AA-LCR 86.3, AA-SciCode 60.9, AutomationBench 58.6, AA-Briefcase 1516, TB4.0 34.8, 44.9 t/s. Vals AI: Vibe Code Bench 85.22% (#13/110), CyberBench **72.86% (#3)**, Finance Agent v2 57.34%, Public Benefits 68.94% (#5), Terminal-Bench 2.1 67.79%, **ProgramBench 0.50%**, IOI 39.33%, **Vals Index 55.20% (#12/45)**. HF leaderboards: DeepSWE 71.9, TB2.1 89.9. Self-reported: GDPval-AA v2.1 1673, Toolathlon-Verified 76.9, OSWorld-Verified 82.0, CyberGym 94.0.
> **Conflicts surfaced:** (1) modalities — official card/AA/LLM Stats say **video+audio input**, Vals says video/file not supported; (2) TB2.1 89.9 (self/HF) vs **67.79% (Vals)** — harness gap; (3) Vals Index 55.20% (page) vs 59.47% (Sep-22 blog); (4) coding bimodal (Vibe 85.22% / DeepSWE 71.9 vs ProgramBench 0.50% / TB-Science 2.86%); (5) serving is slow (AA 44.9 t/s).
> Sources: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL · https://artificialanalysis.ai/models/mimo-v2-6-pro · https://www.vals.ai/models/xiaomi_mimo-v2.6-pro · https://llm-stats.com/models/mimo-v2.6-pro · https://openrouter.ai/xiaomi/mimo-v2.6-pro

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi's flagship MIT open-weights omnimodal sparse MoE (2026-09-21/22), aimed at long-horizon agentic and professional knowledge work; #1 open-weight on AA's Intelligence Index but slow and somewhat verbose.
- **Provider / access:** Xiaomi MiMo Open Platform (`mimo-v2.6-pro`, OpenAI-compatible); weights at `XiaomiMiMo/MiMo-V2.6-Pro-RL`. No Zen Free ID.
- **Release / knowledge:** 2026-09-21/22; knowledge cutoff undisclosed.
- **IDs:** `xiaomi/mimo-v2.6-pro`; `mimo-v2.6-pro-ultraspeed`.
- **Context window:** 1,048,576 (1M) tokens.
- **Modalities:** text, image, video, audio input; text out; reasoning.
- **Pricing (as of 2026-10-09):** **$0.435 in / $0.87 out per 1M**, $0.0036 cached (99% off); ~$0.13/AA Index task; MIT open weights.
- **Architecture:** sparse MoE, **1.02T total / 42B active**, FP8, MIT; MiMo ViT + audio encoders; MTP speculative decoder.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index **46 (#1/117 open-weight)**; AA AutomationBench 58.6; AA-Briefcase 1516
- Terminal-Bench 2.1: **89.9%** (self/HF) vs 67.79% (Vals); Terminal-Bench 4.0 34.8 (AA) / 31.31% (Vals) / 34.9 (self)
- Vals: CyberBench 72.86% (#3), Finance Agent v2 57.34%, Public Benefits 68.94% (#5); GDPval-AA 1673 (self); OSWorld-Verified 82.0 (self)

Reasoning / knowledge:

- AA-HLE **49.4**; AA-LCR **86.3**; CritPt 26.6; MLCR-AA 18.3
- AA-SciCode 60.9; AA-Omniscience Index 8.4 / Accuracy 34.8 / Hallucination 40.6
- AA Intelligence Index 46 (#1 open-weight class)

Coding:

- Vibe Code Bench **85.22% (#13/110)** (Vals); HF DeepSWE 71.9; self DeepSWE 71.9
- AA-SciCode 60.9; Vals ProgramBench **0.50%**; IOI 39.33%; Terminal-Bench-Science 2.86%

Long context:

- 1M window; AA-LCR 86.3; no MRCR/RULER/GraphWalks.

### Normalized scores (1–100)

- **Tool use: 88/100.** AA Intelligence Index #1-of-117 open-weight (whose composite embeds the agentic evals), CyberBench #3 and TB2.1 89.9% (self) / 67.8% (Vals); capped by slow serving and the harness gap.
- **Reasoning: 85/100.** AA-HLE 49.4%, AA-LCR 86.3% and AA Index 46 lead open weights (median 18) but sit under the 60+ frontier reference; no standalone GPQA published.
- **Context window: 96/100.** 1,048,576 tokens (≥1M band) with AA-LCR 86.3%; no ≥98%-at-512K retrieval.
- **Multimodal: 93/100.** Text + image + video + **audio** input (audio band 90–100) with text out; Vals' "no video/file" is a documented conflict but the official card and AA support audio/video.
- **Coding: 86/100.** Vibe Code 85.22% and DeepSWE 71.9 are strong; ProgramBench 0.50% and TB-Science 2.86% cap it.
- **Cost efficiency: 94/100.** $0.435/$0.87 per 1M with a 99% cache discount and MIT open weights; no $0 route.
- **Overall Score: 90/100.** (88 + 85 + 96 + 93 + 86) / 5 = 89.6 → 90. Best fit: the strongest open-weights omnimodal agentic pick, accepting slow serving and high verbosity.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Xiaomi HF model card, Artificial Analysis model page, Vals AI model page, LLM Stats, OpenRouter). Direct independent rows were promoted over the earlier composite-only basis; the modality and TB2.1 harness conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
