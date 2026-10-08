# Claude Opus 4.5 — findings by MiMo 2.6 Flash

- Source: Anthropic launch post + system card, BenchLM (system-card/Qwen3.6/AA/leaderboard rows), repo meta
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5 — Anthropic's Nov 2025 Opus flagship, released **2025-11-24** (API id `claude-opus-4-5-20251101`); superseded by Opus 4.6 → 4.7 → 4.8 → 5 → 5.5 but still active.
- **Short description:** The release that cut **Opus-tier pricing by 67% ($5/$25 vs $15/$75)** and declared Opus "your go-to model for most tasks." At launch Anthropic called it the best model in the world for coding, agents and computer use, with state-of-the-art real-world software engineering (SWE-bench Verified), SWE-bench Multilingual leadership (7/8 languages), a big Aider Polyglot jump, BrowseComp-Plus gains and Vending-Bench +29% over Sonnet 4.5; introduced the **effort parameter** (medium effort matches Sonnet 4.5's SWE-V with 76% fewer output tokens) and token-efficiency as a headline. BenchLM (2026-10-07): 54.12/100, #67/887, 58/623 coverage — below every later Claude in its table (4.6: 62.01, 4.7: 64.28, 4.8: 69.11, 5: 79.28, 5.5: 86.37).
- **Provider / access:** Anthropic API, Claude apps, all three major clouds. Proprietary. No free id (meta).
- **Release / knowledge:** 2025-11-24; evals at 200K window, 64K thinking budget, high effort.
- **Context window:** **200K** (meta; launch methodology), 128K-class outputs.
- **Modalities:** **text, image in; text out.**
- **Pricing:** **$5 / $25 per 1M** (paid tier; batch ~50%, cache reads 90% off).

### Raw benchmarks found

> Primary: Anthropic launch post (2025-11-24) + system card rows as re-hosted by
> BenchLM, AA rows via BenchLM, and Qwen3.6's comparison tables (third-party).
> Epoch FrontierMath v2, VITA/Gert/JobBench/CyberGym leaderboards also cited.

Agentic / tool use:

- **OSWorld-Verified: 66.3** (system card; launch-era computer-use SOTA claim), **τ²-bench: 86.3** (AA), MCP-Tasks 71.8, WideResearch 76.4, Claw-Eval 59.6, QwenClawBench 52.3, τ³-bench 70.2, Gert Labs 64.23.
- Weaker: **Terminal-Bench 2.0: 59.3**, Toolathlon 43.5, MCP Atlas 42.3, CyberGym 50.6, DeepPlanning 26.4, VITA-Bench 23.3, JobBench 32.3.
- Launch post: BrowseComp-Plus big jump (fetch-enabled 70.48 → 85.30 with subagent/compaction stack), Vending-Bench 29% over Sonnet 4.5, take-home exam above every human candidate (parallel test-time compute).

Coding:

- **SWE-bench Verified: 80.9** (system card, launch SOTA), **LiveCodeBench v6: 84.8**, SWE Multilingual 77.5 (7/8 langs #1), SWE-bench Pro 57.1, NL2Repo 43.2; Aider Polyglot +10.6 over Sonnet 4.5 (value not on fetched pages, launch post).

Reasoning & knowledge:

- **GPQA Diamond: 87** (system card) — just under the 90 reference; AA-GPQA 81.0.
- **HLE: 30.8** (Qwen table) / **AA-HLE: 13.2** — below the 40 reference; **AA Intelligence Index: 23.7** (v4.3.2 re-base; launch-era ~mid-30s era).
- Math is the strong suite: **AIME26 95.1, HMMT Feb-25 92.9 / Nov-25 93.3 / Feb-26 85.3**; FrontierMath v2 T1–3 20.69, T4 4.167 (Epoch).
- MMLU-Pro 89.5/88.9, MMLU-Redux 96.6, C-Eval 92.2, SuperGPQA 70.6; AA-Omniscience −4.1 (accuracy 40.9, hallucination 76.2).

Multimodal:

- **MMMU-Pro: 70.6 / 71.2 (AA)**, MathVision 74.3, CharXiv 68.5, VideoMMMU 84.4 (frame-based), ScreenSpot Pro 45.7, V* 67.0.

Long context:

- 200K window; **LongBench v2 64.4, AI-Needle 74%, AA-LCR 70.7** — mid-grade long-context evidence, no MRCR row.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 66.3 and τ² 86.3 are strong era-leading rows with WideResearch/MCP-Tasks in support; TB2.0 59.3, Toolathlon 43.5, MCP Atlas 42.3 and sub-30 planning rows hold it under 85.
- **Reasoning: 83/100.** Elite math (AIME26 95.1, HMMT 93.3) and near-reference GPQA 87; HLE 30.8/13.2 misses the 40 bar outright and the current AA index (23.7) is low-mid — era-appropriate, not modern-frontier.
- **Context window: 86/100.** 200K standard with LongBench v2 64.4 / AI-Needle 74 / LCR 70.7 — a real but non-1M window with only mid retrieval evidence (262K-class ≈ 90 minus the evidence gap).
- **Multimodal: 67/100.** Text+image with MMMU-Pro 70.6–71.2, MathVision 74.3, CharXiv 68.5 — solid image-band depth, nothing beyond images.
- **Coding: 81/100.** Launch-SOTA SWE-V 80.9 and LCB v6 84.8 with multilingual/Aider leadership; SWE Pro 57.1 mid and every absolute row below the modern frontier refs (SWE-V 85+, TB2.1 85+) the 4.6/4.8/5.x line reaches.
- **Cost efficiency: 50/100** (excluded from Overall). $5/$25 sits midway between the $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors; batch 50% and 90%-off cache reads plus the 67% Opus-tier cut (vs $15/$75) keep it at 50.
- **Overall Score: 80/100.** (82+83+86+67+81)/5 = 79.8 → 80 — the November-2025 flagship that made Opus affordable and led launch-era coding/computer-use, judged against today's refs: real era-SOTA rows (OSWorld 66.3, SWE-V 80.9, τ² 86.3, AIME 95) weighed against sub-reference GPQA/HLE, a 200K-only window, and a BenchLM profile that every later Claude overtakes.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — anthropic.com/news/claude-opus-4-5 (release date, API id, pricing, SOTA claims, effort parameter, methodology), BenchLM (58 rows with per-row provenance incl. system-card PDF, AA rows, Epoch leaderboard, family scores; updated 2026-10-07), AA rows via BenchLM, repo meta. Scores are normalized 1–100 interpretations, not official vendor scores; family ordering checked against own Opus 4.6/4.8/5/5.5 reports (4.5 < 4.6 maintained).
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
