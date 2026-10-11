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
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / MCP-Atlas: no verified public score found (GDPVal-Diamond and XPert Bench described only as "competitive"); SWE-Lancer: **49.4** (vs Claude Opus 4.5's 56.1 — a new cap, per evolink's summary of the launch table).

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (APIYI/llm-stats).
- AIME 2025: **98.3%**; AIME 2026: **94.2%**; MathVision: **88.8%**.
- MMLU-Pro: **87.0%**. SuperGPQA: higher than GPT-5.2; HealthBench: leads; FrontierSci-research: matches or edges Gemini-3-Pro; AInstein Bench: leads.
- IMO / ICPC / CMO 2025: gold-medal results; strong Putnam-200 (formal theorem proving).
- HLE: no verified public score found (HLE-text referenced but not quantified — ByteDance's own page confirms "high scores across seven evaluations including BrowseComp-zh and HLE-text"); HMMT: **97.3** (Opper); FrontierSci-olympiad: **74.0** (Opper); SuperGPQA: higher than GPT-5.2 (ByteDance); FrontierSci-research: leads; AInstein Bench: leads.

Coding:

- Codeforces Elo: **3020** (no tools).
- LiveCodeBench v6: **87.8%**.
- SWE-bench Verified: **76.5%**.
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found — and no Artificial Analysis model page exists for Seed 2.0 Pro (allthemodels: "No Artificial Analysis link yet"; gradually.ai: "No exact Artificial Analysis model page located in the checked public sitemap"), so there is no AA Intelligence Index, Coding Index or AA-LCR read either.

Long context:

- MRCR v2 8-needle: **89.4**; Graphwalks BFS (<128K): **80.5**; LongBench v2 (128K): **84.5**; Frames leaderboard: **#1**; industry-best on DUDE / MMLongBench / MMLongBench-Doc (model-card table, first column attribution).

Multimodal:

- VideoMME: **89.5%**; MMMU: **85.4%**; MotionBench: **75.2%**.
- SOTA on MathVista / MathVision / MathKangaroo / MathCanvas, ChartQAPro, OmniDocBench 1.5; #3 on LMSYS Vision Arena (as of 2026-02-16); #6 on Text Arena; surpasses human-level on EgoTempo.

### Normalized scores (1–100)

- **Tool use: 73/100.** τ²-Retail 90.4% / Telecom 94.2% and BrowseComp 77.3% are frontier-tier, but TerminalBench 2.0 55.8% is mid-band (ByteDance itself acknowledges it trails GPT-5.2's 62.4%), SWE-Lancer 49.4% is a new cap, and no TB2.1/MCP-Atlas/τ³ evidence exists — and every row is vendor-reported, with no independent or AA run on file.
- **Reasoning: 78/100.** AIME 2025 98.3%, AIME 2026 94.2% and HMMT 97.3% are near-perfect and GPQA 88.9% approaches the frontier line, with FrontierSci-olympiad 74.0% supporting; capped because the HLE value was never quantified and GPQA sits just under 90%.
- **Context window: 74/100.** 256K input (65K output) sits between the 200K=70 and 1M=95 anchors; MRCR 89.4 and Frames #1 suggest strong retrieval but at shorter ranges.
- **Multimodal: 82/100.** Text/image/video input with VideoMME 89.5%, MMMU 85.4%, MathVision 88.8% and #3 Vision Arena — top of the video-input band.
- **Coding: 76/100.** Codeforces 3020 and LiveCodeBench v6 87.8% are elite and SWE-bench Verified 76.5% clears the 74% frontier anchor; TerminalBench 2.0 55.8% lags (ByteDance acknowledges trailing GPT-5.2's 62.4%), SWE-Lancer 49.4% is a new cap, and no SciCode/DeepSWE/Vibe row exists to confirm the band independently.
- **Cost efficiency: 96/100.** $0.47/$2.37 per 1M is an order of magnitude below frontier pricing (vs GPT-5.2 $1.75/$14.00).
- **Overall Score: 76.6/100.** Mean of the five quality dimensions; frontier-class math, coding, agent and multimodal evidence at a fraction of frontier prices — held back by an unquantified HLE and mid-tier TerminalBench.

---

## Update 2026-10-11 (deep second pass, 2 independent searches)

**No score change: Tool use 73 / Reasoning 78 / Context 74 / Multimodal 82 / Coding 76 / Cost 96 / Overall 76.6** — the second pass confirms the file's figures (all still vendor-reported via APIYI/llm-stats) and fills three rows (HMMT 97.3, FrontierSci-olympiad 74.0, SWE-Lancer 49.4), but finds no independent or AA verification at all:

- **No Artificial Analysis page exists for Seed 2.0 Pro** (allthemodels: "No Artificial Analysis link yet"; gradually.ai: "No exact Artificial Analysis model page located in the checked public sitemap") — so there is no AA Intelligence Index, Coding Index, Agentic Index, AA-LCR or AA-Omniscience read. Every benchmark on file is ByteDance's own (via APIYI/llm-stats). This is the verification gap that caps trust in the bands, not a score change.
- **New rows:** HMMT **97.3** (Opper — a strong math support alongside AIME 2025 98.3% / AIME 2026 94.2%); FrontierSci-olympiad **74.0** (Opper); SWE-Lancer **49.4** (vs Claude Opus 4.5's 56.1 — a new cap; evolink's summary of the launch table).
- **ByteDance's own gap acknowledgment (evolink):** Seed 2.0 Pro trails Claude Opus 4.5 on code generation (SWE-bench 76.5% vs 80.9%) and GPT-5.2 on Terminal-Bench (55.8% vs 62.4%), and "underperforms Western competitors on hallucination avoidance" / factual accuracy — the hallucination-control caveat is the model's most consistent independent criticism.
- **Independent context (baristalabs, 2026-02-14):** per Artificial Analysis analysis and researchers (Yifan Zhang, Quanquan Gu; also @scaling01, @zephyr_z9), Seed 2.0 Pro held the #1 position globally on image and video understanding at launch ("Not #1 among Chinese models. Not #1 among open-weight models. Number one, period"), with general intelligence in "near-frontier territory… competitive with Claude Opus 4.6 and GPT-5.2, models that cost multiples more" — Google's Deedy Das called it an "LLM drop". The 80-page technical report is a transparency signal, but benchmark performance does not always translate to production quality.
- **Ecosystem:** one of the core models behind the Doubao app (155M+ weekly active users); LMArena #6 overall (text) and #3 (vision) at launch; series pricing — Pro $0.47/$2.37, Lite $0.09/$0.53, Mini $0.03/$0.31, Code ~$0.47/~$2.37 (Pro is ~3.7× cheaper than GPT-5.2 on input, ~5.9× on output, ~10× cheaper than Opus 4.5); latest version `seed-2-0-pro-260328` (2026-03-28).
- **Still open:** Terminal-Bench 2.1, τ³-Banking, GDPval-AA, MCP-Atlas, a quantified HLE, SciCode, DeepSWE and Vibe Code Bench — all unpublished; no independent rerun of any headline figure exists in captured sources.
- Score impact: none — the new rows (HMMT 97.3, FrontierSci 74.0 support; SWE-Lancer 49.4 cap) balance; the absence of any independent verification is documented as the standing caveat. Overall stays 76.6.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-11)
- Method: public internet research (ByteDance Seed2.0 model card + launch page, APIYI/llm-stats, Opper, evolink, baristalabs, allthemodels, gradually.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
