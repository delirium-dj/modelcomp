# Solar Mini 4 — findings by MiniMax M3.1 Flash

- Source: Upstage (Solar Mini 4), `upstage/solar-mini4`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's September 2026 compact reasoning MoE — **35B total / 3B active**, a 512K window, text-only, with an AA Intelligence Index of 24, the best AA-LCR (83.3%) of its price class and a 25.8% HLE — cheap, fast and strong at long-context recall, but weak on the newest agentic harnesses.
- **Provider / access:** Upstage Console (`solar-mini4`, version `solar-mini4-260922`), OpenRouter `upstage/solar-mini4`, models.dev `upstage/solar-mini4`. **Proprietary — weights are not published** (`huggingface.co/upstage/SOLAR-Mini-4` returns 401); on-premises and quantised deployments are sold by sales contact. **Not on OpenCode Zen.**
- **Release / knowledge:** model/API version **2026-09-22** (console docs, AA, models.dev); public announcement blog dated **2026-10-01**. Training-data cutoff **February 2026**.
- **IDs:** `solar-mini4` (Console), `upstage/solar-mini4` (OpenRouter, models.dev).
- **Context window:** **524,288** (512K) with **131,072** max output — Artificial Analysis states **1M** instead; conflict flagged.
- **Modalities:** text in / text out only; English, Korean and Japanese; reasoning off by default with `reasoning_effort` configurable; JSON schema outputs, tool calling and parallel tool calling.
- **Pricing (as of 2026-10-20):** list **$0.10/M in, $0.40/M out, $0.01/M cached**; promo schedule $0.03/$0.12 (to 2026-10-11) then **$0.05/$0.20** (to 2026-10-23, "50% off"). OpenRouter lists $0.05/$0.20.
- **Architecture:** MoE, 35B total / 3B active, pretrained from scratch; Upstage publishes no token-count or layer detail.

### Raw benchmarks found

> Upstage's own blog and console docs, plus Artificial Analysis. No BenchLM profile
> exists (404) and no GPQA, LiveCodeBench or MMLU-Pro figure is published.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24** (AA page) / **24.1** (Upstage blog) — rank #38/173
- AA-LCR: **83.3%** (Upstage) / **83.33%** (AA) — one of the strongest long-context recall figures in the dataset · HLE: **25.8%** (Upstage) / **25.76%** (AA) · SciCode: **47.6%** (Upstage) / **47.57%** (AA)
- Artificial Analysis: CritPt **1.43%** · Omniscience Accuracy / Hallucination Rate: **18.4% / 35.8%** · GDPval-AA **1089.14** · output speed **121 tok/s**, TTFT **1.79 s**, **370M** output tokens on the Index (very verbose vs a 100M median), $0.37 per Index task
- GPQA Diamond / AIME / MMLU-Pro / KMMLU-Pro / KBL / Hae-Rae (Korean evals): **no verified public score found**

Agent / tool use:

- Tau3-bench (Banking): **47.2%** (Upstage) · AutomationBench-AA: **22.3%** (Upstage) / **22.25%** (AA) · Terminal-Bench 4.0: **1.01%** (AA) · Terminal-Bench 2.1: not published · GDPval-AA 1089 Elo · MCP-Atlas / OSWorld / Toolathlon: no verified public score found
- Upstage's own throughput claim: **>70 tok/s per request at 32 concurrent requests** on 2×H100, and **$1.25 per 1,000 three-task sets** vs MiMo-V2.5's $2.20 (−43%)

Coding:

- LiveCodeBench / SWE-bench / DeepSWE / SciCode (beyond the 47.6% AA row): no verified public score found
- BenchLM: no profile for this model (404, absent from the 227-model leaderboard)

### Normalized scores (1–100)

- **Tool use: 45/100.** τ³-Banking 47.2% and AutomationBench 22.3% are mid, with no Terminal-Bench 2.1, MCP-Atlas or OSWorld measurement and Terminal-Bench 4.0 at 1.0%.
- **Reasoning: 60/100.** An Intelligence Index of 24, AA-LCR 83.3% and HLE 25.8% are solid mid-band, capped by the absence of any published GPQA/AIME/MMLU figure and a 1.43% CritPt.
- **Context window: 80/100.** A 512K window (AA claims 1M) with the strongest AA-LCR reading in its class at 83.3%; the tier score reflects the declared window, discounted for the 1M/512K conflict.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 45/100.** SciCode 47.6% is the only code-facing number, with no SWE-bench, LiveCodeBench or DeepSWE row.
- **Cost efficiency: 95/100.** $0.10/M in and $0.40/M out at list, $0.05/$0.20 on the current promo, $0.01/M cached — cheap, and 121 tok/s with 1.79 s TTFT.
- **Overall Score: 49/100.** Mean of the five quality dims = (45 + 60 + 80 + 15 + 45) / 5 = 49.0 → **49**. Best fit: cheap long-context reasoning in Korean/English/Japanese on a 3B-active budget — but the agentic numbers (Terminal-Bench 4.0 at 1%) are the weak flank.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Upstage Solar Mini 4 console docs and blog, Artificial Analysis, BenchLM absence check, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Solar_Open_2.md`, using the same headings.
