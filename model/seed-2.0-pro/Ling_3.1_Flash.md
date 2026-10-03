# ByteDance Seed 2.0 Pro — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / ByteDance Seed 2.0 Pro
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance Seed team's flagship multimodal agent model — the Pro tier of the Seed2.0 series (Pro/Lite/Mini/Code), optimized for large-scale production deployment and long-chain real-world tasks.
- **Provider / access:** ByteDance — Doubao App, TRAE, Volcano Engine API (model id `Doubao-Seed-2.0-pro`; latest version `seed-2-0-pro-260328`, 2026-03-28); DeepInfra host per repo meta.json. OpenAI-compatible API.
- **Release / knowledge:** Released 2026-02-14 (Pro 0215; updated 0328). Knowledge cutoff: January 2024 (per llm-stats via APIYI).
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (repo meta.json); `Doubao-Seed-2.0-pro` (Volcano Engine). No Free ID on Zen (meta.json `noFreeId: true`).
- **Context window:** 256K input / 65K output (repo meta.json).
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-10):** $0.47 input / $2.37 output per 1M tokens (official model card; ¥3.41/¥17.04) — roughly 4–10× cheaper than GPT-5.2 ($1.75/$14.00) and Opus 4.5 ($5.00/$25.00).
- **Architecture:** proprietary; not published in captured sources.

### Raw benchmarks found

All figures from ByteDance's official Seed2.0 model card / launch materials (2026-02-14) unless noted:

Agent / tool use:

- τ²-Bench Retail: **90.4%**; τ²-Bench Telecom: **94.2%** (APIYI/llm-stats).
- BrowseComp: **77.3%**; WideSearch: **74.7%**; high scores on BrowseComp-zh and HLE-text (exact HLE-text value not captured).
- TerminalBench 2.0: **55.8%** (APIYI/llm-stats).
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / MCP-Atlas: no verified public score found (GDPVal-Diamond and XPert Bench described only as "competitive").

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (APIYI/llm-stats).
- AIME 2025: **98.3%**; AIME 2026: **94.2%**; MathVision: **88.8%**.
- MMLU-Pro: **87.0%**. SuperGPQA: higher than GPT-5.2; HealthBench: leads; FrontierSci-research: matches or edges Gemini-3-Pro; AInstein Bench: leads.
- IMO / ICPC / CMO 2025: gold-medal results; strong Putnam-200 (formal theorem proving).
- HLE: no verified public score found (HLE-text referenced but not quantified).

Coding:

- Codeforces Elo: **3020** (no tools).
- LiveCodeBench v6: **87.8%**.
- SWE-bench Verified: **76.5%**.
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found.

Long context:

- MRCR v2 8-needle: **89.4**; Graphwalks BFS (<128K): **80.5**; LongBench v2 (128K): **84.5**; Frames leaderboard: **#1**; industry-best on DUDE / MMLongBench / MMLongBench-Doc (model-card table, first column attribution).

Multimodal:

- VideoMME: **89.5%**; MMMU: **85.4%**; MotionBench: **75.2%**.
- SOTA on MathVista / MathVision / MathKangaroo / MathCanvas, ChartQAPro, OmniDocBench 1.5; #3 on LMSYS Vision Arena (as of 2026-02-16); #6 on Text Arena; surpasses human-level on EgoTempo.

### Normalized scores (1–100)

- **Tool use: 73/100.** τ²-Retail 90.4% / Telecom 94.2% and BrowseComp 77.3% are frontier-tier, but TerminalBench 2.0 55.8% is mid-band and no TB2.1/MCP-Atlas/τ³ evidence exists.
- **Reasoning: 78/100.** AIME 2025 98.3% and AIME 2026 94.2% are near-perfect and GPQA 88.9% approaches the frontier line; capped because the HLE value was never quantified and GPQA sits just under 90%.
- **Context window: 74/100.** 256K input (65K output) sits between the 200K=70 and 1M=95 anchors; MRCR 89.4 and Frames #1 suggest strong retrieval but at shorter ranges.
- **Multimodal: 82/100.** Text/image/video input with VideoMME 89.5%, MMMU 85.4%, MathVision 88.8% and #3 Vision Arena — top of the video-input band.
- **Coding: 76/100.** Codeforces 3020 and LiveCodeBench v6 87.8% are elite and SWE-bench Verified 76.5% clears the 74% frontier anchor; TerminalBench 2.0 55.8% lags.
- **Cost efficiency: 96/100.** $0.47/$2.37 per 1M is an order of magnitude below frontier pricing (vs GPT-5.2 $1.75/$14.00).
- **Overall Score: 76.6/100.** Mean of the five quality dimensions; frontier-class math, coding, agent and multimodal evidence at a fraction of frontier prices — held back by an unquantified HLE and mid-tier TerminalBench.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (Exa web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
