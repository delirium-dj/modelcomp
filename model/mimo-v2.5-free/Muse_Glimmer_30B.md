# MiMo V2.5 Free — findings by Muse Glimmer 30B

- Source: Xiaomi MiMo / mimo-v2.5-free
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Sparse MoE omnimodal model for coding, reasoning and agent tasks; 310B total /15B activated with hybrid attention, native image/video/audio input.
- **Provider / access:** Xiaomi MiMo. Model listed in OpenCode repo as `opencode/mimo-v2.5-free`. Hugging Face `XiaomiMiMo/MiMo-V2.5`. Provider field requested as MiniMax; no MiniMax release for mimo-v2.5-free found. OpenCode Zen free tier serves model.
- **Release / knowledge:** Announced 22 April 2026. Blog https://mimo.xiaomi.com/mimo-v2-5 . Knowledge cutoff not published.
- **IDs:** OpenCode `opencode/mimo-v2.5-free`; HF `XiaomiMiMo/MiMo-V2.5`; Base 256K `XiaomiMiMo/MiMo-V2.5-Base`
- **Context window:** Native up to 1M tokens; OpenCode Zen cap 200,000 total, 32,768 max output. Meta.json notes native 1M.
- **Modalities:** Input Text, Image, Video, Audio → Output Text. Native omnimodal with 729M ViT and 261M audio encoder.
- **Pricing as of 2026-10-24:** OpenCode Zen free tier $0 input / $0 output during limited free period. BenchmarkList commercial $0.105 in / $0.28 out per 1M.
- **Architecture:** Sparse MoE 310B total /15B activated, hybrid SWA/GA attention ratio 5:1 window 128, MTP 3 layers 329M params, trained on ~48T tokens with FP8 mixed precision in 5 stages to 1M context.

### Raw benchmarks found

BenchmarkList / Hugging Face eval / Xiaomi blog aggregation

- Terminal-Bench 2.1: 63.7%
- Terminal-Bench 2: 65.8% HF eval
- Terminal-Bench Hard: 41.7%
- GDPval-AA Elo: 1,146 BenchmarkList; AA Intelligence Index 1,145.01
- Humanity’s Last Exam: 27.2% BenchmarkList; 25.2% AA aggregation
- SWE-bench Verified: 71.0% BenchmarkList; SWE-bench Pro 56.1% HF eval
- LiveCodeBench: 81.5% BenchmarkList
- Claw-Eval: 62.1% BenchmarkList; 62.3 general subset blog
- GPQA Diamond: 81.6% Vals / 84.9% AA epoch

Sources: `E:\qwik\modelcomp\model\mimo-v2.5-free\meta.json` ; `E:\qwik\modelcomp\model\mimo-v2.5-free\average.md` ; https://mimo.xiaomi.com/mimo-v2-5 ; https://huggingface.co/XiaomiMiMo/MiMo-V2.5

**Conflicts / notes**
- Provider identity mismatch: slug `mimo-v2.5-free` maps to Xiaomi MiMo V2.5, not MiniMax. No MiniMax model with this ID found in sources inspected.
- Benchmark values vary by harness/version: Terminal-Bench 2.1 vs Terminal-Bench 2 vs Hard; HLE 27.2% vs 25.2%; SWE-bench Verified vs Pro.

### Normalized scores (1–100)

- **Tool use: 66/100.** Terminal-Bench 2.1 63.7%, Claw-Eval 62.1%.
- **Reasoning: 65/100.** GPQA Diamond 81.6-84.9, Humanity’s Last Exam ~26%.
- **Context window: 90/100.** Native 1M, OpenCode cap 200K.
- **Multimodal: 80/100.** Text+Image+Video+Audio input → Text output.
- **Coding: 75/100.** SWE-bench Verified 71.0%, SWE-bench Pro 56.1%, LiveCodeBench 81.5%.
- **Cost efficiency: 95/100.** Free tier on OpenCode Zen; commercial low rates.
- **Overall Score: 75.2/100.** Mean of Tool 66, Reasoning 65, Context 90, Multimodal 80, Coding 75. Omnimodal MoE with strong coding and free access.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
