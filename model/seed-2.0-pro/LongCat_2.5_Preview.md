# Seed 2.0 Pro — findings by LongCat 2.5 Preview

- Source: ByteDance Seed (`doubao-seed-2.0-pro`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed 2.0 Pro
- **Short description:** ByteDance's flagship general-purpose agent and reasoning model — world-class math (AIME 2025 98.3), grandmaster-tier competitive coding (Codeforces 3020), and hour-long video understanding at ~10x lower cost than Western flagships.
- **Provider / access:** Volcano Engine API — `ark-doubao-seed-2.0-pro` (OpenAI-compatible); also DeepInfra, Gate.AI, OhMyGPT. Core model behind Doubao (155M+ WAU). Released 2026-02-14.
- **Release / knowledge:** Released 2026-02-14; knowledge cutoff not confirmed from official sources.
- **IDs:** `bytedance/doubao-seed-2-0-pro` (DeepInfra), `ark-doubao-seed-2.0-pro-260215` (Volcano Engine). No Zen Free ID — paid only.
- **Context window:** 256K tokens; max output 32K.
- **Modalities:** Text, image, document, and video in; text out; reasoning yes; function calling, structured outputs, prompt caching.
- **Pricing (as of 2026-09-27):** ¥3.20/M in, ¥16.00/M out (Volcano Engine, <32K; tiers rise with context); ~$0.47/$2.37 via DeepInfra. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **55.8%**
- BrowseComp: **77.3%**; WideSearch: **74.7%**
- Tau2-Bench: **90.4%** retail / **94.2%** telecom
- GDPval-AA / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.9%**
- HLE-Verified: **73.6%**
- AIME 2025: **98.3**; AIME 2026: **94.2**; HMMT Feb: **97.3**; MMLU-Pro: **87.0%**

Coding:

- SWE-bench Verified: **76.5%**
- LiveCodeBench v6: **87.8%**
- SWE-Bench Pro: **46.9%**; SWE-Lancer: **49.4%**; Multi-SWE-Bench: **45.2%**
- Codeforces: **3020** (no tools); IMO gold 35/42, CMO gold, ICPC gold x5 (vendor claim)

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Multimodal extras:

- VideoMME: **89.5%**; MathVision: **88.8%**; MotionBench: **75.2%**; MMMU: **85.4%**

Arena standings:

- LMArena leaderboard #6 (vendor-reported at release)

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau2-Bench 90.4%/94.2% and BrowseComp 77.3% are strong; TB2.0 55.8% sits mid-band (45–60% → 50–70), capping the dimension.
- **Reasoning: 85/100.** GPQA 88.9%, HLE-Verified 73.6% and AIME 98.3 are all frontier-tier for the generation; no AA Intelligence Index to confirm the top band.
- **Context window: 72/100.** 256K tokens lands in the 200K–500K tier (200K = 70); no published 512K+ retrieval result.
- **Multimodal: 80/100.** Text/image/document/video input lands in the 75–90 band; text-only output caps it there.
- **Coding: 70/100.** SWE-bench Verified 76.5% and LiveCodeBench 87.8% are solid; SWE-Bench Pro 46.9% and TB2.0 55.8% keep it mid-band.
- **Cost efficiency: 92/100.** ~$0.47/$2.37 pricing matches the methodology's ~$0.60/$2.20 ≈ 92 reference point — 5–10x cheaper than Western flagships.
- **Overall Score: 76/100.** Mean of the five quality dims (72+85+72+80+70)/5 = 75.8 → 76. Best-fit: cost-efficient Chinese-ecosystem flagship for reasoning-heavy and video/document workloads — exceptional value, a step behind the frontier on agentic coding.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (ByteDance launch + model card summaries, llm-stats, CloudPrice, evolink/tokenmix reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
