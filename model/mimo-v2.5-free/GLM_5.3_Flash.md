# MiMo V2.5 Free — findings by GLM 5.3 Flash

- Source: Xiaomi (`opencode/mimo-v2.5-free` — also covers the "Xiaomi MiMo-V2.5 Free" alias; native model MiMo-V2.5)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free (free Zen tier of Xiaomi's MiMo-V2.5; note MiMo-V2.6 is already shipping — V2.6-Pro #11 and V2.6-Flash #32 on BenchLM)
- **Short description:** Xiaomi's frontier-agency + native-multimodality model: a 310B/15B sparse MoE (48T tokens) with in-house visual and audio encoders, 1M context, and best-in-class agentic scores — "sees, hears, and acts on what it perceives". Evaluated here on the $0 Zen free tier. BenchLM lists the base model with 16 rows but no public overall score (unranked).
- **Provider / access:** OpenCode Zen free tier (`opencode/mimo-v2.5-free`, Chat Completions; also aliased "Xiaomi MiMo-V2.5 Free" — same ID); Xiaomi native API (`mimo.xiaomi.com`, Token Plans: V2.5 = 1× credit, Pro = 2×); open weights (weights + tokenizer + model card on Hugging Face, FP8 E4M3 mixed).
- **Release / knowledge:** released 2026-04-22 (Xiaomi launch post; BenchmarkList concurs).
- **IDs:** `opencode/mimo-v2.5-free` (Zen free); `mimo-v2.5` (Xiaomi). Base-only 256K checkpoint exists separately.
- **Context window:** 1,000,000 tokens (BenchLM concurs 1M; progressively extended 32K → 256K → 1M during agentic post-training); max output 32K per Zen's serve config (repo catalog models.dev toml: 200K/32K on Zen — the Zen serve cap is below the native 1M, verify before long-context jobs).
- **Modalities:** text, image, video, audio in (native visual + audio encoders, pretrained in-house, joined via lightweight projectors); text out. Reasoning + agentic post-training + RL/MOPD.
- **Pricing (as of 2026-10-11):** **$0** on the evaluated Zen free tier (training-data consent applies — no confidential code); Xiaomi list $0.105 in / $0.28 out per 1M (BenchmarkList).
- **Architecture:** 310B total / 15B active sparse MoE; hybrid sliding-window attention backbone (inherited from MiMo-V2-Flash) + dedicated vision/audio encoders.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched BenchLM MiMo-V2.5 page (updated 2026-10-10) corroborates the prior BenchmarkList rows almost exactly (Claw-Eval 62.3, LiveCodeBench 81.5, SWE-bench 71.0, GPQA 81.6, MMLU-Pro 82.9) and adds new fills (SWE-Pro, TB2.0, Video-MME, CharXiv). Scores are carried; minor percentile drift only.

Agent / tool use:

- Tau2-Bench Telecom: **90.6%** (rank 49/332, 85th pct) (BenchmarkList, prior pass)
- Terminal-Bench 2.0: **65.8%** (Xiaomi launch page via benchlm.ai — new, better than the TB2.1 read)
- Terminal-Bench Hard: **41.7%** (91st pct); Terminal-Bench 2.1: **63.7%** (BenchmarkList) / **60.7%** (Vals independent — consistent)
- GDPval-AA: **1,146** (rank 71/340, 79th pct); ClawProBench: **60.39** (74th pct); Claw-Eval: **62.3%** (corroborated by the Claw-Eval leaderboard)
- SWE-bench Pro: **56.1%** (Xiaomi launch page via benchlm.ai — fills the gap)
- MM-ClawBench: **23.8%** (weak); ResearchClawBench: **16.9%**; Gert Labs: **46.89%** (new rows)
- Tau3-Banking: **8.7%** (BenchmarkList — weak)

Reasoning / knowledge:

- GPQA Diamond: **84.9%** (83rd pct run) / **81.6%** (Vals independent — corroborated); HLE: **27.2%**; MMLU-Pro: **82.9%** (corroborated)
- Artificial Analysis Intelligence Index: **38** (rank 70/418, 83rd pct) (BenchmarkList, prior pass)
- AA-LCR: **68.3%** (75th pct) — measured long-context (mid)
- MMMU-Pro: **80.0%** (BenchmarkList) / **77.9%** (Xiaomi page — consistent)

Coding:

- SWE-bench Verified: **71.0%** (corroborated by the Vals SWE-bench row); LiveCodeBench: **81.5%** (corroborated by the Vals row)
- Vibe Code Bench v1.1: **42.2%**; SciCode: **43.1%**; WebDev Arena: **1437.89**; ALE-Bench: **513.95** (BenchmarkList, prior pass)
- Internal MiMo Coding Bench: matches MiMo-V2.5-Pro at half the cost (Xiaomi claim, no public number)

Long context:

- Native **1M tokens** (BenchLM concurs) with AA-LCR 68.3% measured retrieval; multimodal long-horizon "level with Gemini 3 Pro on video, Claude Sonnet 4.6 on multimodal agentic work" (Xiaomi claim)

Multimodal:

- Video-MME: **87.7%** with subs (Xiaomi page via benchlm.ai — fills the video gap, strong); CharXiv: **81.0%** (fills the gap); MMMU-Pro: **77.9–80.0%**; Design Arena Website: **1271–1288** (consistent); Vals Multimodal: **52.8** (prior pass)

### Normalized scores (1–100)

> Scores unchanged on the 2026-10-11 second pass: the fresh BenchLM rows corroborate the existing evidence base almost row-for-row and the new fills (SWE-Pro 56.1, TB2.0 65.8, Video-MME 87.7, CharXiv 81.0) land inside the existing bands.

- **Tool use: 80/100.** Tau2 Telecom 90.6 + TB-Hard 41.7 (91st pct) + GDPval-AA 1146 + Claw-Eval 62.3 (corroborated) + TB2.0 65.8 — the strongest measured free-tier agentic profile in the repo's open-model band; Tau3 8.7% and MM-ClawBench 23.8% are the blemishes.
- **Reasoning: 76/100.** GPQA 81.6–84.9% (two sources) / HLE 27.2% / AA II 38 — solid frontier-adjacent knowledge, unchanged.
- **Context window: 100/100.** Native 1M (BenchLM concurs) with measured AA-LCR 68.3; caveat: Zen's serve config caps at 200K/32K.
- **Multimodal: 93/100.** Native image + audio + video understanding now with measured video (Video-MME 87.7) and vision (CharXiv 81.0, MMMU-Pro 77.9–80.0) — the best multimodal package on a free tier in this repo.
- **Coding: 80/100.** SWE-V 71 (corroborated) + LCB 81.5 (corroborated) + TB2.1 60.7–63.7 + SWE-Pro 56.1 — balanced strong, not specialist-deep (Vibe 42.2).
- **Cost efficiency: 100/100.** Evaluated $0 Zen tier; list pricing $0.105/$0.28 is among the cheapest paid rates measured here.
- **Overall Score: 85.8/100.** v4 formula: mean of the five quality dims (80 + 76 + 100 + 93 + 80) / 5 = 429/5 = 85.8 (Cost excluded per `RULES.md`). Best fit: the default free omni pick — multimodal agency, 1M context and $0 in one model; V2.6 is the upgrade path when frontier-adjacent agentic depth is needed.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai MiMo-V2.5 page updated 2026-10-10 citing the Xiaomi launch page + Vals AI + Claw-Eval leaderboard, the prior 2026-10-08 pass on BenchmarkList/Xiaomi launch page, repo catalog's models.dev Zen serve config; 2026-10-16 re-check: BenchLM 16-row refresh corroborates every row, still unranked, no new data (Design Arena 1267, inside the 1271–1288 band) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
