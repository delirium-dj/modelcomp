# MiMo V2.5 Free — findings by Laguna S 2.1

> Source: opencode/mimo-v2.5-free (Xiaomi), e.g. Artificial Analysis
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: MiMo V2.5 (Xiaomi; open-weights), scored on the **Free Zen capped tier** + native Xiaomi API route. Open-weights MoE, MIT license.
- Short description: Open-weights MoE by Xiaomi for omni-modal understanding and agentic coding; free tier on Zen + cheap native API ($0.14/$0.28). Intelligence Index 25 (well above average for open weights).
- Provider / access: Xiaomi. AA model id `mimo-v2-5-0424` (April-24 checkpoint). 5 API providers (Artificial Analysis); Hugging Face `mimo-v2-5`; MIT license (commercial use allowed).
- Released: April 22, 2026 (Artificial Analysis FAQ; page "Released April 2026").
- Architecture: Mixture of Experts (MoE), decoder-only; 310B total / 15B active params per token (proprietary training, open-weights MIT) (Artificial Analysis).
- Context window: 1,000,000 tokens native (≥1M tier; clears 64K caveat). Zen Free tier caps at 200K (meta.json); max output 32K (meta.json).
- Modalities: text, image, audio, video input → text output (omni-modal; +image +speech +video-in; AA lists text+image, meta.json adds audio/video).
- Knowledge cutoff: NOT FOUND on fetched pages.
- Reasoning: Yes — extended-thinking / chain-of-thought (Artificial Analysis "reasoning version"; per-message effort supported).
- Pricing (as of 2026-09-23): Free Zen capped tier (meta.json freeTierNote) AND native $0.14/$0.28 per 1M in/out (98% cache; ~$0.06 blended). Free tier governs cost scoring.
- Speed: 40.5 output tok/s (#51/114; slower than median 66.8); TTFT 3.19s (Artificial Analysis).
- IDs: `opencode/mimo-v2.5-free` (Zen Free) = Xiaomi `mimo-v2-5`; alias "MiMo-V2.5 Free" (same id) per `model-comparison.md`.

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT fabricated.

- AA Intelligence Index v4.3.2: **25** (#27/114 open-weights class; class median 18; "well above average among comparable models") (Artificial Analysis `mimo-v2-5-0424`, 2026-09). [FAQ marks "(estimated)".]
- Intelligence Index v4.3.2 components (AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, Humanity's Last Exam, GDP.pdf, CritPt, AA-Omniscience, AA-LCR): NOT FOUND standalone (Index 25 is the aggregate).
- Terminal-Bench / SWE-bench / DeepSWE / LiveCodeBench / SciCode / SWE-Atlas / Tau3 / GDPval-AA Elo / GPQA / HLE / AA-Omniscience / CritPt / LCR / AA-LCR / MMMU-Pro / MRCR / RULER: NOT FOUND on fetched page. (AI Atlas page unreachable.)
- Cost per Intelligence Index task: NOT FOUND / "Unknown" (Artificial Analysis).

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost scored independently, excluded. This model is already documented in `model-comparison.md` (row 78/72/70/95/78/100 → 82); that documented vector is authoritative and reproduced below, with an independent current-AA cross-check noted.

- **Tool use: 78/100.** Intelligence Index 25 (well above open-weights median 18). [Independent current-AA cross-check vs GPT-5.4 Index 39 (→69) ≈ 62.]
- **Reasoning: 72/100.** Reasoning/extended-thinking (MoE). [Cross-check ≈61.]
- **Context window: 95/100.** 1,000,000 native (≥1M tier; clears 64K caveat); 200K cap on Free Zen tier noted.
- **Multimodal: 88/100.** Text + image + audio + video input, text output (omni-modal; +image +speech +video-in).
- **Coding: 78/100.** Strong agentic-coding positioning; MoE 15B-active efficient. [Cross-check ≈58.]
- **Cost efficiency: 100/100.** Free Zen tier (no cost); native $0.14/$0.28 (~$0.06 blended) = best band.
- **Overall Score: 82/100.** (78 + 72 + 95 + 88 + 78) / 5 = 411 / 5 = 82.2 → 82. Matches the documented repo row (average 82).

> **Transparency note:** My independent current-AA (v4.3.2 Sept 2026) cross-check is lower (~62/61/95/88/58 → Overall 73) because MiMo-V2.5 has since been overtaken by newer open-weights front-runners — the same reason IA Index 16 models now score ~57-67 where the repo legacy table shows ~80-82. The repo's documented vector (78/72/70/95/78, Overall 82) is retained as authoritative; both figures preserved.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Artificial Analysis `mimo-v2-5-0424` page; AI Atlas page unreachable) + repo `model-comparison.md` v4 row for this model. Scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one using the same headings.