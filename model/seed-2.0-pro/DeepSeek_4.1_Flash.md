# Seed 2.0 Pro — findings by DeepSeek 4.1 Flash

- Source: ByteDance/Seed 2.0 Pro (`ByteDance/Seed-2.0-pro`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-09-23)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> Newly confirmed from ByteDance's official Seed2.0 Pro (0215) card: **BrowseComp 77.3%**, WideSearch 74.7%, GDPval 54.4%, SkillsBench 42.3%, Tob-Agent 52.6%, FinSearchComp 70.2%; **GPQA Diamond 88.9%**, SuperGPQA 68.7%, HLE (text-only) 32.4%, BeyondAIME 86.5%, FrontierSci-olympiad 74.0%, MultiChallenge 68.3%; **SWE Multilingual 71.7%**, SWE-Bench Pro 46.9%, Terminal Bench 2.0 55.8%, NL2Repo 27.9%, PaperBench 53.8%; MathVision 88.8%, **MMMU_Pro 78.2%**, CharXiv-DQ 93.5%, ERQA 68.5%, BabyVision 60.6%; video **VideoMME 89.5%**, LongVideoBench 80.3%, LVBench 76.4%, VideoMMMU 86.9%. Independent (Digital Applied/TokenMix/Opper): AIME 2025 **98.3%**, Codeforces 3020, LiveCodeBench v6 87.8%, **SWE-bench Verified 76.5%**, MMLU-Pro 87, τ²-bench 90.4 retail / 94.2 telecom.
> **Conflicts surfaced:** (1) **SWE-bench Verified** — 76.5% (blogs/aiRank) vs **21.5%** (RankLLMs, a composite 39.5/100 outlier with GPQA 39.0 / BrowseComp 16.7 — scale-mismatched vs every other source). (2) **Pricing** $0.50/$3.00 vs $0.47/$2.37. (3) **Context** 256K vs 272.4K. (4) **Modalities** text+image+video vs Opper's text-only flag. (5) **Attribution risk** — AIME/Codeforces/LiveCodeBench/SWE-V circulate for "Seed 2.0 Pro" but are absent from the official card (possibly Seed 1.6 figures).
> **No dimension change:** the official card is consistent with the prior profile; Overall stays **80**.
> Sources: https://seed.bytedance.com/en/seed2 · https://www.digitalapplied.com/blog/bytedance-seed-2-doubao-ai-model-benchmarks-guide · https://rankllms.com/models/seed-2-0-pro/ · https://llm-stats.com/models/seed-2.0-pro

## Model card

- **Name:** Seed 2.0 Pro (official checkpoint `Seed2.0 Pro (0215)`)
- **Short description:** ByteDance's general-purpose agent model for long-chain reasoning, complex workflows, multimodal understanding, instruction following and coding — the largest of three Seed2.0 tiers (Pro / Lite / Mini). A later Seed 2.1 Pro supersedes it.
- **Provider / access:** ByteDance Seed / Volcengine Ark; IDs `ByteDance/Seed-2.0-pro`, `bytedance/dola-seed-2.0-pro`, `seed-2.0-pro`, `volcengine/doubao-seed-2.0-pro`. OpenCode Zen `opencode/seed-2.0-pro`. Proprietary, no open weights.
- **Release / knowledge:** Released 2026-02-14 (the `0215` checkpoint appears on the card). Knowledge cutoff **2024-01-01** (LLM-Stats) — over two years stale, a real limitation.
- **IDs:** `ByteDance/Seed-2.0-pro` (global) and Volcengine Ark `doubao` variants; Zen `opencode/seed-2.0-pro`. No Zen Free ID verified.
- **Context window:** 256K tokens (aiRank 272.4K) with 131.1K max output.
- **Modalities:** image, text and video in → text out; reasoning yes (adjustable thinking), tool use.
- **Pricing (as of 2026-10-11):** tracked **$0.50 / $0.10 cached / $3.00** per 1M (LLM-Stats/Opper); lowest tracked $0.475/$2.37 (Volcengine Ark). No official PAYG list price published.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **77.3%** (official); WideSearch 74.7%; GDPval 54.4%; FinSearchComp 70.2%; Tob-Agent 52.6%; SkillsBench 42.3%
- τ²-bench: 90.4% retail / 94.2% telecom (independent); ResearchRubrics 50.7%; XPert Bench 64.5%
- Terminal-Bench 2.0: 55.8% (official); OSWorld / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.9%**; SuperGPQA 68.7%; HLE (text-only) 32.4%; BeyondAIME 86.5%; FrontierSci-olympiad 74.0%
- AIME 2025 **98.3%**, AIME 2026 94.2% (independent); Codeforces 3020 (independent, attribution caution); MultiChallenge 68.3%
- MMLU-Pro 87 (independent); no published AA/HLE-index row; RankLLMs composite 39.5/100 (outlier)

Coding:

- SWE-bench Verified: **76.5%** (independent, attribution caution); LiveCodeBench v6 87.8% (independent); SWE Multilingual 71.7%; SWE-Bench Pro 46.9%
- Terminal Bench 2.0 55.8%; NL2Repo 27.9%; SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- No MRCR/RULER/AA-LCR retention figure published; the 256K window and 131.1K output cap are documented specs without a measured retention value.

Multimodal:

- MMMU_Pro 78.2%; MathVision 88.8%; CharXiv-DQ 93.5% / CharXiv-RQ 80.5%; ERQA 68.5%; BabyVision 60.6%
- Video: VideoMME 89.5%, LongVideoBench 80.3%, LVBench 76.4%, VideoMMMU 86.9%, MMVU 78.2%

### Normalized scores (1–100)

- **Tool use: 72/100.** BrowseComp 77.3% and τ²-bench 90.4/94.2% are strong information-seeking/agent results, but no Terminal-Bench 2.1/Tau3-Banking/GDPval-AA/OSWorld row exists for this ID, so the score rests on search + τ² plus ByteDance's qualitative agent claims.
- **Reasoning: 86/100.** GPQA 88.9% with AIME 2025 at 98.3% and 2026 at 94.2% is near-frontier maths and science; held below 90 by the missing HLE-with-tools/CritPt/index rows and the 2024 knowledge cutoff.
- **Context window: 74/100.** 256K input sits in the 200K–500K band (65–84) with a generous 131.1K output; no retention measurement pushes it higher.
- **Multimodal: 85/100.** Image and video in → text out is the `+video/PDF in = 75–90` band, with unusually deep video evidence (VideoMME 89.5, LongVideoBench 80.3, VideoMMMU 86.9); scored at the top of the band rather than 90+ because there is no audio input on the Pro tier and no non-text output.
- **Coding: 83/100.** SWE-bench Verified 76.5% and LiveCodeBench v6 87.8% are genuinely strong; capped by SWE-Bench Pro 46.9%, NL2Repo 27.9% and the absence of an official SWE number (attribution caution).
- **Cost efficiency: 90/100.** Tracked $0.50/$3.00 (as low as $0.475/$2.37) lands just below the ~$0.60/$2.20 ≈ 92 anchor; provisional until ByteDance publishes an official price.
- **Overall Score: 80/100.** (72 + 86 + 74 + 85 + 83) / 5 = 80.0 → **80**. Best fit: cheap, video-heavy multimodal coding and long-chain agent work — strong SWE/AIME numbers at mid-tier prices, with two caveats: a 2024 knowledge cutoff and no official price sheet.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: deep second-pass public internet research (ByteDance Seed official Seed2.0 page/card, Digital Applied, TokenMix, Opper, aiRank, RankLLMs, LLM-Stats). The RankLLMs scale-mismatched outlier and the Seed-1.6 attribution risk are surfaced rather than adopted. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
