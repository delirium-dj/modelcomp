# GPT-5.6 Sol — findings by Kimi K3

- Source: OpenAI / GPT-5.6 Sol (`gpt-5.6-sol`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's top GPT-5.6 variant (predecessor-state to GPT-6 Astra), a reasoning flagship strong on agentic terminal work, math, and knowledge benchmarks. Siblings: GPT-5.6 Terra, Luna, Cyber.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`, OpenAI-compatible Chat/Responses API).
- **Release / knowledge:** Released 2026-07-09 (OpenCode Data, newly verified — my 2026-09-24 pass had "exact date not verified"); knowledge cutoff 2026-02-16 (OpenCode Data, new).
- **IDs:** `openai/gpt-5.6-sol` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.1M tokens (OpenCode Data; benchlm.ai listed 1.05M — minor listing conflict); max output **128K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/PDF in (OpenCode Data; MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $4/M input, $20/M output, cached input $0.40/M, cache write $5.00/M (OpenCode Data; consistent with the ~90% cache-read discount in the AA GPT-6 Astra article).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **88.8%** success rate (official openai.com/index/gpt-5-6 via OpenCode Data) — three-way conflict with benchlm.ai 91.9% and Vals 85.8%, all retained; Terminal-Bench 3.0: **34.6%**; terminalBenchHard: **65.9%** (benchlm.ai)
- Tau2-Bench (τ²-bench): **85.1%**; Tau3-Banking (AA): **44.3%** (benchlm.ai)
- GDPval-AA: **1735 Elo** (54.4% normalized) (benchlm.ai)
- BrowseComp: **90.4%** (official page via OpenCode Data; benchlm.ai had 92.2%); OSWorld: **62.6%** (official; matches benchlm.ai); CyberGym: **84.5%**; Toolathlon: **58%** (official; matches benchlm.ai)
- Agents' Last Exam: **52.7%** (official page — new this pass)
- AA Briefcase: **1487**; AA Agentic Index: **50.5%**; AA AutomationBench: **60.1%**; AA ITBench: **56.2%** (benchlm.ai)
- AA Intelligence Index **58.9** / AA Coding Agent Index **80** (artificialanalysis.ai "GPT-5.6 has landed" article via OpenCode Data)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (official page; AA 94.1%; Vals 95.2%)
- HLE: **54.5%** (HLE-Verified); 49.5% (AA-HLE) (benchlm.ai)
- AA-LCR: **84.0%**; MLCR-AA: **26.1%**; CritPt: **32.3%** (benchlm.ai)
- ARC-AGI-2: **92.5%**; ARC-AGI-3: **7.8%** (benchlm.ai)
- BenchLM overall **78.49/100, #7 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **59.4% / 92.2%** (hallucination rate poor — 92.2%) (benchlm.ai)
- FrontierMath: **89%** (official page); FrontierMath v2 T1–3: **89.0%**, Tier 4: **83.0%** (benchlm.ai)

Coding:

- SWE-bench Pro: **64.6%** (official page; matches benchlm.ai); SWE-bench (Vals): **96.2%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **82.6%** (benchlm.ai)
- AA-SciCode: **57.1%**; AA Coding Index: **77.4** (benchlm.ai); AA Coding Agent Index **80** (AA article)
- DeepSWE: **72.7%** (official page; matches benchlm.ai); FrontierSWE v2: **32.2%**; CursorBench 3.2: **67.2%** / 4.0: **41.7%**; VulcanBench CII: **86.5%** (benchlm.ai)

Long context:

- AA-LCR 84.0% at the 1.05–1.1M window; no separate MRCR/RULER/GraphWalks public score found.

Multimodal:

- MMMU-Pro: **83.0%** (official page; matches benchlm.ai's 83.0/84.6% w/ Python; AA 83.4%)

### Normalized scores (1–100)

- **Tool use: 89/100.** Unchanged: Terminal-Bench ~85.8–91.9% across harnesses (official 88.8%), τ²-bench 85.1%, BrowseComp ~90–92%, GDPval-AA 1735 — top-tier agentic; capped by Tau3-Banking 44.3% and ApprenticeBench 26%.
- **Reasoning: 89/100.** Unchanged: FrontierMath v2 89%/83%, GPQA 94.6% (official-confirmed), ARC-AGI-2 92.5%; capped hard by Omniscience hallucination rate 92.2% and ARC-AGI-3 7.8%.
- **Context window: 90/100.** Unchanged: 1.1M window with the strongest LCR (84.0%) among its peers; max output now verified (128K); capped by missing max-window retrieval probes.
- **Multimodal: 78/100.** Unchanged: solid vision (MMMU-Pro ~83–84.6%) but no measured audio/video rows and text-only output.
- **Coding: 86/100.** Unchanged: SWE-bench (Vals) 96.2%, SWE-Bench Pro 64.6% (official-confirmed), DeepSWE 72.7% (official-confirmed), Coding Agent Index 80; capped by FrontierSWE v2 32.2% and CursorBench 4.0 41.7%.
- **Cost efficiency: 55/100.** Unchanged, now verified: $4/$20 per 1M ($0.40 cached) — 40% of GPT-6 Astra's price for ~9 points less BenchLM overall.
- **Overall Score: 86/100.** Mean of the five quality dims (89+89+90+78+86)/5 = 86.4 → 86. Best fit: flagship-grade math/agentic coding where GPT-6 Astra's premium or access tier is unjustified.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official openai.com/index/gpt-5-6 table + artificialanalysis.ai article transcribed by OpenCode Data `openai/gpt-5-6-sol`; benchlm.ai scorecard). Second pass over my 2026-09-24 file: verified release date (2026-07-09), knowledge cutoff (2026-02-16), 128K max output, and cache pricing; added Agents' Last Exam and AA index rows; flagged the TB 88.8-vs-91.9/85.8 three-way harness conflict. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
