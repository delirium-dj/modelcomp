# Qwen3-Max — findings by Ling 3.1 Flash

- Source: Alibaba (`qwen3-max`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Alibaba's largest and most capable Qwen3-series model (>1T parameters, 36T pre-training tokens), with state-of-the-art coding and agent results at launch; a separate Qwen3-Max-Thinking variant (100% on AIME 25 / HMMT with code interpreter + parallel test-time compute) was still in training at blog time. Current serving snapshot `qwen3-max-2026-01-23` is functionally equivalent to `qwen3-max`.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3-max`, API + Qwen Chat); thinking mode supports web search, web information extraction, and a code interpreter.
- **Release / knowledge:** Released 2025-09-05 (preview 2025-09-23; official release with agent upgrades; snapshot 2026-01-23); knowledge cutoff not stated.
- **IDs:** `qwen3-max` (Alibaba Cloud Model Studio). No OpenCode Zen Free ID found.
- **Context window:** 262,144 tokens — verified on Alibaba Cloud Model Studio docs and themodelbeat.
- **Modalities:** text in; text out; thinking/non-thinking modes; tool calls yes (agent programming and tool invocation upgrades); JSON mode per Qwen series.
- **Pricing (as of 2026-10-10):** $0.78 / 1M input, $3.90 / 1M output (Alibaba Cloud list, themodelbeat).
- **Architecture:** >1T parameter dense/MoE-family Qwen3 architecture with global-batch load balancing loss; pretrained on 36T tokens; proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **74.8%** (Alibaba launch blog — surpassing Claude Opus 4 and DeepSeek V3.1; themodelbeat lists 74.3%)
- SWE-bench Verified: **69.6%** (Alibaba launch blog — "among the world's top-performing models" at release)
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA / MCP-Atlas / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **72.6%** (themodelbeat / Epoch AI)
- HLE: **11.9%** (themodelbeat / Epoch AI)
- MMLU-Pro: **84.1%**
- SimpleQA Verified: **48.7%**
- AIME 2024/2025: **73.3%**; MATH Level 5: **97.1%**
- Qwen3-Max-Thinking (separate variant): 100% on AIME 25 and HMMT with code interpreter + parallel test-time compute (Alibaba blog — variant, not the Instruct model)
- LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- LiveCodeBench: **76.7%** (themodelbeat / Epoch AI)
- SciCode: **38.3%** (themodelbeat / Epoch AI)
- SWE-bench Verified: **69.6%** (Alibaba launch blog)
- DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported (262K window; no MRCR / RULER / GraphWalks number) — no verified public score found.

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-Bench 74.8% is a strong tool-calling result (above the mid band; it surpassed Claude Opus 4 and DeepSeek V3.1 at release) and SWE-bench Verified 69.6% is solid, but no Terminal-Bench 2.1, GDPval-AA, or MCP-Atlas numbers exist.
- **Reasoning: 69/100.** MMLU-Pro 84.1%, MATH Level 5 97.1%, and AIME 73.3% are strong, but GPQA 72.6% is mid-band and HLE 11.9% is weak — the profile is math-heavy with thin frontier-reasoning evidence.
- **Context window: 71/100.** 262,144 tokens — the 200K–500K band, just above the 200K = 70 anchor; no retrieval-at-length measurement published.
- **Multimodal: 15/100.** Text-only model (text in, text out) — the text-only floor band; Qwen3-VL covers vision.
- **Coding: 73/100.** LiveCodeBench 76.7% and SWE-bench Verified 69.6% are solidly mid-good; SciCode 38.3% (below the 40% frontier reference) and missing DeepSWE cap the score.
- **Cost efficiency: 88/100.** $0.78/$3.90 per 1M — cheap input, expensive output; sits between the ~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88 reference points.
- **Overall Score: 60/100.** Mean of Tool 74, Reasoning 69, Context 71, Multimodal 15, Coding 73 = 60.4 → 60. Best-fit: cost-effective general coding and tool-calling model with strong math; thin HLE/GPQA evidence for frontier reasoning work.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-10
- Method: public internet research (Alibaba Cloud Model Studio docs, Qwen launch blog 2025-09-23, themodelbeat/Epoch AI benchmark aggregation); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
