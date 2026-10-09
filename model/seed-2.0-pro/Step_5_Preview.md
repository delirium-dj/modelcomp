# Seed 2.0 Pro — findings by Step 5 Preview

- Source: ByteDance (`doubao-seed-2-0-pro`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (Doubao-Seed-2.0-pro)
- **Short description:** ByteDance Seed's February 2026 flagship (released 2026-02-14) — the top variant of the four-model Seed 2.0 family (Pro/Lite/Mini/Code) that powers the Doubao app (155M+ WAU) and the TRAE coding IDE. Gold-medal-level competition math (AIME 2025 98.3, Codeforces 3020, IMO/ICPC/CMO golds) with hour-long video understanding, positioned at roughly an order of magnitude below Western frontier pricing. ByteDance's own model card is candid about two gaps: repository-scale coding behind Claude and long-tail factual knowledge behind Gemini.
- **Provider / access:** Volcano Engine (Ark) `doubao-seed-2-0-pro` (snapshots `-260215`/`-260328`); BytePlus, DeepInfra, AtlasCloud, Requesty, Ofox; OpenAI-compatible API. No OpenCode Zen Free ID found.
- **Release / knowledge:** 2026-02-14 (snapshot updated 2026-03-28); knowledge cutoff January 2024 (per API host docs).
- **IDs:** `doubao-seed-2-0-pro` (Volcengine), `bytedance-seed/seed-2.0-pro` (catalogs), `seed-2-0-pro-260328` (latest snapshot).
- **Context window:** 256,000 tokens; 128,000 max output (some routes 256K output).
- **Modalities:** Text, image and video in → text out; native video tool-use (re-inspect at higher frame rates mid-task); thinking mode; function calling; structured outputs.
- **Pricing (as of 2026-10-09):** $0.47 / MTok input, $2.37 output first-party (¥3.41/¥17.04); third-party hosts $0.50–0.67 / $3.00–3.79 with $0.10 cache reads — ~3.7x cheaper than GPT-5.2 on input and ~10x cheaper than Claude Opus 4.5.
- **Architecture:** Proprietary (parameters undisclosed).

### Raw benchmarks found

Reasoning / knowledge (Seed2.0 model card, Table 3):

- AIME 2025: **98.3**; AIME 2026: **94.2**; BeyondAIME: **86.5**; HMMT Feb 2026: **97.3** — gold-medal-level on IMO 2025 and CMO 2025
- GPQA Diamond: **88.9**; MMLU-Pro: **87.0**; SuperGPQA: **68.7** (neck-and-neck with GPT-5.2/Gemini 3 Pro); PhyBench: **80.0**; BABE 53.5
- HLE (no tools, text-only): **32.4**; SimpleQA Verified: 36.8; HealthBench: **63.3** (model-card lead)
- ARC-AGI-2: **37.5**; FrontierSci-research 25.0; FrontierSci-olympiad 74.0; Superchem 51.6

Coding (model card + hosts):

- Codeforces Elo: **3020** (no tools, Jun–Dec 2025 problem set)
- LiveCodeBench v6: **87.8**
- SWE-bench Verified: **76.5%** (agentic evaluation, Table 11)
- SWE-bench Pro: **46.9%**; SWE-bench Multilingual: **71.7%**; NL2Repo-Bench: 27.9–37.9
- Terminal-Bench 2.0: **55.8%**; PaperBench: 53.8; Vibe Coding: 48.4
- LMArena: #6 text / #3 vision at launch (rank only, no Elo published)

Agentic (model card + API host):

- BrowseComp: **77.3%**; WideSearch: **74.7%**
- τ²-Bench: Retail **90.4%** / Telecom **94.2%**
- MCP-Atlas / Toolathlon / Claw-Eval / GDPval-AA: **no verified public score found**

Multimodal (model card, Table 8 — highest scores across the majority of vision benchmarks):

- MMMU-Pro: **78.2%**; MMMU: **85.4%**; VideoMME: **89.5%**; MathVision: **88.8%**; MotionBench: 75.2%

Long context (model card, Table 4):

- Frames: **84.0% — #1 on the leaderboard**; LongBench v2 (128K): 84.5%; GraphWalks BFS (<128K): 80.5%; GraphWalks Parents (<128K): 99.0%
- **MRCR v2 8-needle: 47.1** — ByteDance concedes needle-style retrieval "still shows some headroom"; DeR Bench 58.9; CL-Bench 18.1

### Normalized scores (1–100)

- **Tool use: 72/100.** BrowseComp 77.3%, WideSearch 74.7% and τ²-Bench Retail/Telecom 90.4/94.2% are solid mid-frontier agentic evidence; capped by Terminal-Bench 2.0 at 55.8% and no public MCP-Atlas, Toolathlon, Claw-Eval or GDPval-AA numbers.
- **Reasoning: 82/100.** AIME 98.3, Codeforces 3020, HMMT 97.3, GPQA 88.9 and MMLU-Pro 87.0 are frontier-band math/STEM reasoning with gold-medal competition results; capped by HLE 32.4% no-tools, ARC-AGI-2 37.5%, SimpleQA 36.8% and the model card's own concession on long-tail factual knowledge.
- **Context window: 78/100.** 256K-token window with 128K output sits in the 200K–500K band; it tops the Frames leaderboard (84.0%) and posts GraphWalks BFS 80.5%, but the 47.1 MRCR v2 needle-retrieval score is the documented weak spot and keeps it out of the higher band.
- **Multimodal: 84/100.** Native text + image + video in → text out is the 75–90 band, anchored by VideoMME 89.5%, MMMU 85.4%, MathVision 88.8% and hour-long video processing with mid-task frame re-inspection; no audio input or non-text output.
- **Coding: 79/100.** Codeforces 3020, LiveCodeBench 87.8% and SWE-bench Verified 76.5% are frontier-adjacent competitive/repository coding; capped by SWE-bench Pro 46.9%, Terminal-Bench 2.0 55.8%, Vibe Coding 48.4% and NL2Repo 27.9% — the ByteDance card itself flags repository-scale work as behind Claude.
- **Cost efficiency: 92/100.** $0.47/$2.37 per MTok first-party ($0.50/$3.00 with $0.10 cache reads on hosts) maps to the methodology's ~$0.60/$2.20 ≈ 92 tier — roughly a tenth of Opus-class pricing for comparable user-experience quality, which ByteDance calls the model's key advantage.
- **Overall Score: 79/100.** Best-fit recommendation: the value reasoning+multimodal pick — competition-math and video understanding at an order of magnitude below Western frontier prices; add retrieval for needle-style long-context work and route repository-scale coding to a Claude-class model.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Seed2.0 model card PDF, seed.bytedance.com, Volcano Engine/Ark docs, evals.report, DigitalApplied, APIYI, llm-stats, models.dev, Phaseo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Seed_2.0_Lite.md`, using the same headings.
