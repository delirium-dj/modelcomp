# Qwen 3.7 Plus — findings by Muse Spark 1.3

- Source: Alibaba/Qwen 3.7 Plus (`opencode/qwen-3.7-plus`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba Qwen team's mid-tier 3.7-generation model; leads Qwen's internal QwenWorldBench agentic-simulation board ahead of Qwen3.7 Max. Top use case: cost-balanced agentic coding inside the Qwen toolchain.
- **Provider / access:** Alibaba Qwen (API via Qwen/Alibaba Cloud model studio; OpenCode Zen ID `opencode/qwen-3.7-plus`).
- **Release / knowledge:** 2026 release window (leaderboard records current as of 2026-09); exact release date and knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/qwen-3.7-plus` (Zen-hosted; no standalone Free-tier wording confirmed).
- **Context window:** 128K total per folder meta.json (unverified beyond that record; sibling Qwen3.7 Max is rated 1M on llm-stats — not claimed for Plus).
- **Modalities:** Text in/out only per folder meta.json (no verified image/audio/video input for the Plus cut).
- **Pricing (as of 2026-09):** No verified public Plus-tier price found; closest proxy (provisional): sibling Qwen3.7 Max at $1.25 input / $3.75 output per 1M (llm-stats SWE-Pro leaderboard). Standard (paid) pricing assumed.
- **Architecture:** Proprietary (undisclosed; Qwen 3.7 family).

### Raw benchmarks found

Agent / tool use:

- QwenWorldBench (Qwen internal agentic world-model sim across Terminal/SWE/MCP/Search/OS/Android/Web): **0.621, rank #1 of 2** (llm-stats QwenWorldBench leaderboard, updated 2026-09-21; self-reported/vendor-internal — provisional weight only)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (closest proxy, provisional: sibling Qwen3.7 Max GPQA 92.4% / GPQA-D 92.4% per BenchLM Jul 2026)
- HLE: **no verified public score found** (sibling Max: HLE 41.4% per BenchLM)
- BenchLM overall (Plus cut): **62.29** (BenchLM Qwen3.7 Max page "Other Alibaba Models" listing, Sep 2026; vs Max 68.56)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall rank: **no verified public score found** (BenchLM Plus overall 62.29 above is the only composite)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **0.576** (llm-stats SWE-Pro leaderboard, 55 models; page notes results are self-reported — provisional weight)
- SWE-bench Verified: **no verified public score found** (sibling Max: 80.4% per BenchLM)
- LiveCodeBench: **no verified public score found** (sibling Max: 91.6% per BenchLM)
- SciCode / AA-SciCode: **no verified public score found** (sibling Max: SciCode 53.5% per BenchLM)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (no public MRCR/RULER/GraphWalks number for the Plus cut; sibling Max MRCRv2 90.4% is not claimed for Plus)

### Normalized scores (1–100)

- **Tool use: 74/100.** QwenWorldBench 0.621 (rank #1, beats Max's 0.573) is the only agentic signal, but it is a vendor-internal 2-model board, so weight is provisional; no public TB/Tau/GDPval numbers cap it at 74.
- **Reasoning: 76/100.** Provisional on family proximity (Max: GPQA 92.4%, HLE 41.4%, MMLU-Pro 89.6%) and BenchLM Plus composite 62.29; capped hard with zero Plus-specific reasoning numbers.
- **Context window: 58/100.** 128K per folder meta.json lands mid-band of the 100K–200K tier (50–64); no verified retrieval or extension evidence.
- **Multimodal: 15/100.** Text-only in/out per folder meta.json — standard text-only score.
- **Coding: 78/100.** SWE-bench Pro 0.576 (leaderboard-reported) is a real mid-frontier signal; capped by missing SWE-bench Verified, LiveCodeBench, and SciCode numbers for this exact cut.
- **Cost efficiency: 85/100.** Provisional: no public Plus price; scored near the sibling-Max $1.25/$3.75 value tier, flagged for re-check once Plus pricing publishes.
- **Overall Score: 60/100.** Mean of the five non-cost dims (74 + 76 + 58 + 15 + 78) / 5 = 60.2 → 60; best fit as a budget Qwen agentic-coding tier if Plus pricing undercuts Max.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (llm-stats SWE-Pro + QwenWorldBench leaderboards, BenchLM Qwen3.7 Max page composite listing, AnotherWrapper Qwen index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
