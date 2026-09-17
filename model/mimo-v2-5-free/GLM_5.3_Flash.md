# MiMo V2.5 Free — findings by GLM 5.3 Flash

- Source: Xiaomi (`opencode/mimo-v2.5-free` — also covers the "Xiaomi MiMo-V2.5 Free" alias; native model MiMo-V2.5)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (free Zen tier of Xiaomi's MiMo-V2.5; note MiMo-V2.6 is already in RL training per Xiaomi's 2026-09-17 livestream announcement)
- **Short description:** Xiaomi's frontier-agency + native-multimodality model: a 310B/15B sparse MoE (48T tokens) with in-house visual and audio encoders, 1M context, and best-in-class agentic scores — "sees, hears, and acts on what it perceives". Evaluated here on the $0 Zen free tier.
- **Provider / access:** OpenCode Zen free tier (`opencode/mimo-v2.5-free`, Chat Completions; also aliased "Xiaomi MiMo-V2.5 Free" — same ID); Xiaomi native API (`mimo.xiaomi.com`, Token Plans: V2.5 = 1× credit, Pro = 2×, no 1M multiplier anymore); open weights (weights + tokenizer + model card on Hugging Face, FP8 E4M3 mixed).
- **Release / knowledge:** released 2026-04-22 (Xiaomi launch post; BenchmarkList concurs).
- **IDs:** `opencode/mimo-v2.5-free` (Zen free); `mimo-v2.5` (Xiaomi). Base-only 256K checkpoint exists separately.
- **Context window:** 1,000,000 tokens (progressively extended 32K → 256K → 1M during agentic post-training); max output 32K per Zen's serve config (repo catalog models.dev toml: 200K/32K on Zen — the Zen serve cap is below the native 1M, verify before long-context jobs).
- **Modalities:** text, image, video, audio in (native visual + audio encoders, pretrained in-house, joined via lightweight projectors); text out. Reasoning + agentic post-training + RL/MOPD.
- **Pricing (as of 2026-09-18):** **$0** on the evaluated Zen free tier (training-data consent applies — no confidential code); Xiaomi list $0.105 in / $0.28 out per 1M (BenchmarkList).
- **Architecture:** 310B total / 15B active sparse MoE; hybrid sliding-window attention backbone (inherited from MiMo-V2-Flash) + dedicated vision/audio encoders.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **90.6%** (rank 49/332, 85th pct) (BenchmarkList)
- Terminal-Bench Hard: **41.7%** (rank 29/326, 91st pct) (BenchmarkList)
- GDPval-AA: **1,146** (rank 71/340, 79th pct) (BenchmarkList)
- ClawProBench: **60.39** (74th pct); Claw-Eval general subset: **62.3** — "Pareto frontier of performance and efficiency" (Xiaomi launch post)
- Terminal-Bench 2.1: **63.7%** (rank 49/182); Tau3-Banking: **8.7%** (BenchmarkList)

Reasoning / knowledge:

- GPQA Diamond: **84.9%** (83rd pct run; another tracked run 81.6%); HLE: **27.2%**; MMLU-Pro: **82.9%**; MMMU-Pro: **80.0%**; AA-LCR: **68.3%** (75th pct) (BenchmarkList)
- Artificial Analysis Intelligence Index: **38** (rank 70/418, 83rd pct) (BenchmarkList)

Coding:

- SWE-bench Verified: **71.0%**; LiveCodeBench: **81.5%**; Vibe Code Bench v1.1: **42.2%**; SciCode: **43.1%**; WebDev Arena: **1437.89**; ALE-Bench: **513.95** (BenchmarkList)
- Internal MiMo Coding Bench: matches MiMo-V2.5-Pro at half the cost (Xiaomi claim, no public number)

Long context:

- Native **1M tokens** with AA-LCR 68.3% measured retrieval; multimodal long-horizon "level with Gemini 3 Pro on video, Claude Sonnet 4.6 on multimodal agentic work" (Xiaomi claim)

### Normalized scores (1–100)

> Independent derivation per the methodology in `../../model-comparison.md`; Overall = mean of the six.

- **Tool use: 80/100.** Tau2 Telecom 90.6 + TB-Hard 41.7 (91st pct) + GDPval-AA 1146 + Claw-Eval 62.3 — the strongest measured free-tier agentic profile in the repo's open-model band.
- **Reasoning: 76/100.** GPQA 84.9 / HLE 27.2 / AA II 38 — solid frontier-adjacent knowledge.
- **Context window: 100/100.** Native 1M with measured AA-LCR 68.3; caveat: Zen's serve config caps at 200K/32K.
- **Multimodal: 93/100.** Native image + audio + video understanding with MMMU-Pro 80, Vals Multimodal 52.8 and Design Arena 1288 (80th pct) — the best multimodal package on a free tier in this repo.
- **Coding: 80/100.** SWE-V 71 + LCB 81.5 + TB2.1 63.7 — balanced strong, not specialist-deep (Vibe 42.2).
- **Cost efficiency: 100/100.** Evaluated $0 Zen tier; list pricing $0.105/$0.28 is among the cheapest paid rates measured here.
- **Overall Score: 88/100.** Mean: (80 + 76 + 100 + 93 + 80 + 100) / 6 = 529/6 = 88.2 → **88**. Best fit: the default free omni pick — multimodal agency, 1M context and $0 in one model.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-09-18
- Method: fresh public internet research from zero (Xiaomi's official MiMo-V2.5 launch page for architecture/training/Claw-Eval claims, BenchmarkList model page with 45 tracked benchmarks and percentiles, repo catalog's models.dev Zen serve config); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
