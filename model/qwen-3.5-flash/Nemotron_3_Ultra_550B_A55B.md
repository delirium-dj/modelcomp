## Qwen 3.5 Flash

- **Name:** Qwen3.5 Flash
- **Short description:** Alibaba's proprietary flash-tier model in the Qwen 3.5 family, optimized for speed and efficiency with 1M context window. Positioned as a fast, cost-effective option for coding and reasoning.
- **Provider / access:** Alibaba (proprietary) — available via Alibaba Cloud Model Studio, DashScope API, and select inference providers. Not open-weight.
- **Release / knowledge:** 2026 release; knowledge cutoff recent 2026.
- **IDs:** `qwen3.5-flash` (Alibaba Cloud), proprietary API endpoints.
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text in / text out only (proprietary flash tier typically text-only).
- **Pricing:** Proprietary API pricing; typically lower than Pro/Max tiers. Exact pricing not publicly listed in benchmarks.

### Raw benchmarks found
- **LiveCodeBench (Vals AI):** 83.3% (Vals AI leaderboard).
- **SWE-Bench (Vals AI):** 64.4% (Vals AI leaderboard).
- **GPQA Diamond (Vals AI):** 82.8% (Vals AI leaderboard).
- **MMLU-Pro (Vals AI):** 84.1% (Vals AI leaderboard).
- **FrontierMath v2 (Tiers 1-3, Epoch AI):** 18.246% (Epoch AI leaderboard).
- **BenchLM Overall Score:** 42.76/100 (#130 of 959 models, partial coverage — 5 of 666 benchmarks).
- **BenchLM Coding Benchmarks:** LiveCodeBench 83.3%, SWE-Bench 64.4%.
- **BenchLM Knowledge Benchmarks:** GPQA Diamond 82.8%, MMLU-Pro 84.1%.
- **BenchLM Mathematics Benchmarks:** FrontierMath v2 18.246%.
- **Terminal-Bench:** Not reported on BenchLM.
- **DeepSWE:** Not reported.
- **Tau3 / Tau2:** Not reported.
- **Claw-Eval:** Not reported.
- **GDPval / OSWorld / AutomationBench:** Not reported.
- **HLE / MRCR / LCR / CritPt / Intelligence Index:** Not reported.
- **SciCode / SWE-Atlas / SWE-bench Verified:** Not reported (SWE-Bench 64.4% likely Pro or Verified via Vals).
- **Cost per task / speed:** Proprietary API; "Flash" tier implies high throughput / low latency. No public cost-per-task data.

### Normalized scores (1–100)
- **Tool use: 55/100.** No Terminal-Bench, MCP Atlas, AutomationBench, or Tau3 scores found. SWE-Bench 64.4% suggests basic tool use but no agentic scaffolding benchmarks. Scored conservatively due to missing data.
- **Reasoning: 72/100.** GPQA Diamond 82.8% (frontier 90%+ → ~75), MMLU-Pro 84.1% (strong), FrontierMath 18.2% (low, frontier ~30%+), LiveCodeBench 83.3% (frontier 90%+ → ~75). Strong knowledge/reasoning on standard benchmarks; math reasoning weak.
- **Context window: 100/100.** 1M context window confirmed.
- **Multimodal: 15/100.** Text-only (flash tier typically lacks vision/audio).
- **Coding: 68/100.** SWE-Bench 64.4% (mid, frontier 85%+), LiveCodeBench 83.3% (frontier 90%+ → ~75). No DeepSWE, SciCode, SWE-Atlas, or Terminal-Bench data. Solid but not frontier.
- **Cost efficiency: 70/100.** Proprietary flash tier — typically priced below Pro/Max but not free. No public pricing to normalize; estimated mid-range for proprietary flash models.
- **Overall Score: 62/100.** Mean of (55 + 72 + 100 + 15 + 68) / 5 = 62.