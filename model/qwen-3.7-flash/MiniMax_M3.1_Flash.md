# Qwen 3.7 Flash — Research findings

- **Source**: Alibaba Cloud (Model Studio / QwenCloud) `qwen3.7-flash`; OpenRouter `qwen/qwen3.7-flash`
- **Researched by**: MiniMax M3.1 Flash — 2026-11-01 (UTC)

## Model card

- **Name**: Qwen 3.7 Flash (`qwen3.7-flash`, snapshot `qwen3.7-flash-2026-07-15`)
- **Short description**: Alibaba's cost-floor tier of the Qwen3.7 generation — a proprietary, multimodal (image + video in), reasoning-by-default model with a 1,000,000-token context window, positioned by the vendor for high-volume agentic work, search/CI-agent scenarios and long-context multimodal understanding rather than for frontier software engineering.
- **Provider / access**: Alibaba Cloud Model Studio (Beijing, Singapore, Tokyo, Frankfurt, US-Virginia deployments), QwenCloud, OpenRouter. **API-only — no open weights.** Not listed in the OpenCode Zen catalogue (verified live: Zen's Qwen ids are `qwen3.5-plus`, `qwen3.6-plus`, `qwen3.8-flash`, `qwen3.8-max`; there is **no** `qwen3.7` route). Puter hosted it during launch and has since removed it.
- **Release date**: snapshot dated **2026-07-15**; the OpenRouter listing and the aggregator "released Jul 27, 2026" note refer to the gateway listing date, not a second model release.
- **Architecture**: not disclosed (proprietary API). Thinking mode is on by default with a tunable reasoning budget.
- **Context window**: **1,000,000** tokens (max input 991,808; thinking-mode max input 983,616). Max output 131,072. Maximum chain-of-thought length 262,144.
- **Modalities**: Image, Text, Video **in** → Text **out**. Function calling, structured output, web search, prefix continuation, context caching; batch inference (Beijing region only); fine-tuning not supported.
- **Pricing** (international): ≤32K → **$0.030 in / $0.130 out**; 32K–256K → $0.100 / $0.400; 256K–1M → $0.200 / $0.800; batch inference −50% ($0.028/$0.110, $0.083/$0.330, $0.165/$0.660); free quota 1M tokens (alias only). China region: ¥0.2/¥0.8, ¥0.6/¥2.4, ¥1.2/¥4.8. Singapore: ¥0.225/¥0.974 (≤32K). OpenRouter lists $0.03/$0.13.
- **Identity notes**: the folder `meta.json` carries `opencode/qwen-3.7-flash`, an id that **does not exist** in any live catalogue (see the Zen check above). The real ids are Model Studio/QwenCloud `qwen3.7-flash` (currently equivalent to `qwen3.7-flash-2026-07-15`) and OpenRouter `qwen/qwen3.7-flash`.

## Raw benchmarks found

### Reasoning / knowledge — Epoch AI (independent suite, CC BY 4.0)

| Benchmark | Score | Context of the number |
| --- | --- | --- |
| GPQA Diamond | **82.3%** | closed book, n=198; #80 of 167 on the leaderboard; best listed = 96.4% (Gemini 4 Argon) |
| AIME 2024–2025 (OTIS Mock AIME) | **86.7%** | #67 of 162; record 100% (GPT-5.6 Sol) |
| FrontierMath Tiers 1–3 (v2) | **19.3%** | #76 of 88; record 93.7% (GPT-6 Astra) |
| Game puzzles | **15.0%** | #58 of 79; record 84.0% (GPT-6 Astra) |
| ECI (Epoch Capability Index) | **144.14** | **#103 of 272**; for scale: Qwen3.7-Plus 147.11, Qwen3.7-Max 154.22, Qwen 3.6 Flash 142.97, Gemini 3.5 Flash-Lite 144.97 |

### Coding / agentic — independent academic harness study (arXiv:2610.05039)

- **SWE-bench Verified pass@1** with Qwen3.7-Flash as the *solver*: **56.4 ± 0.9** (baseline harness, M0 Full History) and **58.0 ± 0.0** when the proposer is GPT-5.6 Sol → **63.6 ± 1.1** with the harness-optimized full-history + CIG setup (M4 Full CIG); five-run means, validation-selected on a 100-task held-out test split, mini-swe-agent initial harness.
- **LawBench** criminal-charge classification: 41.3 (Full History) → **53.8** (CIG Wide) / **49.4** (CIG Deep).

### Aggregators

- **BenchLM**: **47.33 / 100**, **#114 of 1004**, Proprietary, Reasoning, 1M ctx — but only **1 of 724** benchmarks is covered (FrontierMath v2 = 19.298%, credited to Epoch AI). The low aggregate reflects thin coverage, not measured weakness.
- **OpenCharts**: index **67.4 (provisional)** — 3 comparable tests; reasoning mean 81.0 (1 of 6 tests), math mean 53.7 (2 of 5); *"no comparable result yet in Multimodal"*.
- **BenchLM/Artificial-Analysis-style rows**: τ²-bench 92.1%, AA-MMMU-Pro 65.4%, AA-LCR 63.0%, CritPt 0.0%, AA-GPQA Diamond 77.1%, AA-HLE 9.9%, AA-IFBench 52.0% — **these rows belong to Qwen3.5-4B, not to this model** (verified by re-reading the aggregator record); they must not be attributed here.

### Explicitly not found (no verified public score)

Terminal-Bench 2.0/2.1, τ²-bench / τ³-bench, GDPval, SWE-bench Pro, LiveCodeBench, DeepSWE, SciCode, MMMU-Pro / AA-MMMU-Pro, HLE, LCR/MRCR, AA Intelligence Index — no measured row exists. Artificial Analysis has no page for this model (`/models/qwen3-7-flash` and `/models/qwen3.7-flash` both 404), Vals AI has no page, and **no vendor benchmark table was ever published for this tier** (Alibaba published a table for the sibling Qwen3.7-Max but describes 3.7-Flash qualitatively only: better object recognition, spatial intelligence, and Search/CI-agent suitability versus Qwen 3.6 Flash).

## Normalized scores (1–100)

- **Tool use: 58/100.** Independent SWE-bench Verified pass@1 of 56.4–63.6 % in a real agentic repo-repair loop, plus LawBench 41.3→53.8 on long-context legal classification, plus first-party function calling / structured output / web search. But there is **no** Terminal-Bench, τ²/τ³ or GDPval row at all, so it cannot enter the upper band; the independent harness study also shows the number is highly harness-dependent.
- **Reasoning: 60/100.** GPQA Diamond 82.3 % and Mock AIME 86.7 % are solid mid-band science/competition results, but FrontierMath Tiers 1–3 (19.3 %) and game puzzles (15.0 %) show the hard-math/puzzle tail is weak, and ECI 144.14 places it #103 of 272 — mid-pack overall.
- **Context window: 92/100.** 1,000,000 tokens first-party (991,808 max input, 131,072 max output, 262,144 CoT budget) puts it in the ≥1M band; discounted because no ≥98 % retrieval-at-512K+ measurement was published.
- **Multimodal: 75/100.** Image **and** video input confirmed first-party (text out) — bottom of the "video/PDF capable" band — but **no measured multimodal accuracy exists** for this tier (OpenCharts: *"no comparable result yet in Multimodal"*), so it cannot score higher.
- **Coding: 57/100.** The independent SWE-bench Verified number (56.4 % baseline / 61.4–63.6 % optimized) sits below the 65–75 mid anchor, and there is no LiveCodeBench / DeepSWE / SciCode row; the 86.7 % Mock AIME shows strong algorithmic ability but is not a repo-level coding metric.
- **Cost efficiency: 98/100.** $0.030 / $0.130 ≤32K, $0.100 / $0.400 at 32K–256K, $0.200 / $0.800 at 256K–1M, batch −50 %, ¥0.2 / ¥0.8 in China, cache-hit pricing — one of the cheapest 1M-context multimodal routes in the dataset; only the ≥256K tier is not ultra-cheap.
- **Overall Score: 68.4/100.** (58 + 60 + 92 + 75 + 57) / 5 = 342 / 5 = **68.4**.

**Best fit**: cheap high-volume multimodal sub-agent / fan-out worker, long-context multimodal retrieval and summarisation, competitive-math and PhD-level science QA pipelines.
**Worst fit**: frontier software-engineering agents, terminal/CLI-heavy work, and any multimodal reasoning task that needs a *measured* visual-accuracy guarantee.

## Agreement notes

- **Identity conflict**: `meta.json` says `opencode/qwen-3.7-flash`; the live Zen catalogue has no `qwen3.7` route at all, so this slug is a phantom Zen id — the real serving ids are Model Studio `qwen3.7-flash` / `qwen3.7-flash-2026-07-15` and OpenRouter `qwen/qwen3.7-flash`.
- **Two "release dates"**: 2026-07-15 (snapshot id and Model Studio doc) vs 2026-07-27 (OpenRouter listing / aggregator note). The snapshot date is the model release; the later date is gateway listing.
- **Capability drift**: Puter's launch record describes a 256K-context, text-only model; the current Model Studio doc lists 1M context with image + video input. The current first-party doc governs; the launch record describes the earlier profile.
- **BenchLM 47.33 vs OpenCharts 67.4 vs ECI #103/272**: not contradictions — BenchLM's score is built from a single benchmark (FrontierMath), OpenCharts' from three Epoch AI tests, and ECI is a capability composite. The OpenCharts/ECI readings are the more informative ones.
- **SWE-bench Verified 56.4 vs 63.6 for the same model**: same solver, two harness regimes (baseline full-history vs optimized CIG harness), same 100-task held-out split, five-run means. The baseline figure is the conservative reading of the model's own ability; the optimized figure should not be read as raw model capability.
- **No vendor table**: because Alibaba never published a benchmark table for this tier, every number above comes from independent runners (Epoch AI, arXiv) — evidence quality is high but coverage is thin, which is why Context and Multimodal are capped by documentation rather than measurement.

---

**Provided by**: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-11-01

**Method**: Official vendor documentation (Alibaba Model Studio, QwenCloud pricing + changelog), the independent Epoch AI benchmark suite, one independent peer-reviewed-style arXiv harness study (arXiv:2610.05039) and two aggregator cross-checks (BenchLM, OpenCharts). Catalogues were checked live to resolve identity (OpenCode Zen, OpenRouter, models.dev). Vendor-claimed numbers were used only where no independent measurement exists and are labelled as such; aggregator rows that belong to a different model were rejected.

**Reference URLs**:
- https://help.aliyun.com/zh/model-studio/qwen3-7-flash — Alibaba Model Studio model page (context limits, capabilities, pricing)
- https://docs.qwencloud.com/developer-guides/getting-started/model-prices — QwenCloud international price table
- https://docs.qwencloud.com/changelog/models — QwenCloud changelog (US-Virginia rollout 2026-10-08)
- https://benchlm.ai/models/qwen3-7-flash — BenchLM record (47.33/100, #114/1004, FrontierMath v2 19.298 %)
- https://roo3.co/en/ai-benchmark/qwen3-7-flash — Epoch AI suite results and ECI rank
- https://www.opencharts.com/benchmarks/qwen3-7-flash — OpenCharts per-benchmark index (67.4 provisional)
- https://arxiv.org/html/2610.05039v1 — independent SWE-bench Verified / LawBench harness study using Qwen3.7-Flash as solver
- https://ai-tldr.dev/models/qwen3-7-flash/ — independent spec cross-check
- https://opencode.ai/zen/v1/models — OpenCode Zen catalogue (no `qwen3.7` route)

**Future sources to check**: Alibaba Qwen3.8-Flash/3.8-Max successor notes (may absorb 3.7-Flash's role and change the served profile), a first-party benchmark table if Alibaba ever publishes one for the Flash tier, Artificial Analysis and Vals AI pages if the model is ever added, and any Terminal-Bench / τ-bench / GDPval submission for this id.
