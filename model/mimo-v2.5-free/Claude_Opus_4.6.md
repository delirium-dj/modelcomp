# MiMo V2.5 Free — findings by Claude Opus 4.6

- Source: Xiaomi / MiMo-V2.5 Free (`opencode/mimo-v2.5-free`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5 Free (also listed as Xiaomi MiMo-V2.5 Free — same Zen ID)
- **Short description:** Xiaomi's native omnimodal open-weight model. Best free omni model for balanced agent/coding work with text+image+video+audio input. 310B MoE with 15B active.
- **Provider / access:** OpenCode Zen (`opencode/mimo-v2.5-free`), Xiaomi platform, Hugging Face. Chat Completions API.
- **Release / knowledge:** April 2026 release; knowledge cutoff not explicitly published.
- **IDs:** `opencode/mimo-v2.5-free` (Free tier on Zen; native cap 200K/32K on Zen, 1M via native endpoint)
- **Context window:** 200,000 tokens on Zen (32K max output); 1,000,000 native. Verified via models.dev and Pi.dev.
- **Modalities:** Text, image, audio, video in; text out; tool calls. Open-weight.
- **Pricing (as of 2026-09-19):** $0 on Zen Free tier. Native API: ~$0.14/$0.28 per 1M tokens.
- **Architecture:** 310B-parameter sparse MoE, 15B active. Open-weight. Trained on 48T tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.7%** (source: BenchmarkList)
- Tau2-Bench: **90.6%** (source: BenchmarkList)
- GDPval-AA: **1148** (source: BenchmarkList)
- Artificial Analysis Intelligence Index: **38** (source: Artificial Analysis)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **71%** (source: BenchmarkList)
- Vibe Code Bench: **42.2%** (source: BenchmarkList)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found

Long context:

- 1M native; Zen capped at 200K. No MRCR/RULER retrieval reported.

### Normalized scores (1–100)

- **Tool use: 75/100.** TB 2.1 63.7% is mid-range. Tau2 90.6% is excellent. GDPval 1148 is moderate. Balanced tool use profile.
- **Reasoning: 68/100.** Intelligence Index 38 is mid-tier. No GPQA/HLE data. Conservative score reflecting positioning.
- **Context window: 72/100.** Zen cap 200K/32K significantly limits practical usage. Native 1M available but not standard deployment. 200K ≈ 70 per methodology.
- **Multimodal: 95/100.** Native omnimodal: text + image + audio + video in; text out. Best multimodal coverage in free tier. Audio input pushes to 90–100 range.
- **Coding: 76/100.** SWE-bench Verified 71% is solid. Vibe 42.2% is good. Missing DeepSWE/SciCode.
- **Cost efficiency: 100/100.** $0 on Zen Free tier.
- **Overall Score: 77/100.** Mean of (75 + 68 + 72 + 95 + 76) / 5 = 77.2 ≈ 77. Best free omni model; Zen context cap and mid-tier reasoning limit overall score.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (BenchmarkList, Artificial Analysis, models.dev, Pi.dev, Xiaomi mimo.xiaomi.com, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
