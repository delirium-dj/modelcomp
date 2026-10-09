# Step 5 Preview — findings by DeepSeek 4.1 Flash

- Source: StepFun / Step 5 Preview (`stepfun/step-5-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic model (previewed 2026-09-20) — a sparse Mixture-of-Experts built for long-running coding, software engineering, professional knowledge work and finance. Positioned as a Pareto-frontier option: frontier-adjacent scores at a fraction of task cost, with open weights promised for 2026-10-15.
- **Provider / access:** StepFun API (`stepfun/step-5-preview`, platform.stepfun.ai), OpenCode Zen `opencode/step-5-preview`; OpenAI-compatible. Open weights (license) promised 2026-10-15.
- **Release / knowledge:** 2026-09-20 (03:15 UTC); knowledge cutoff not published.
- **IDs:** `stepfun/step-5-preview`; `opencode/step-5-preview`.
- **Context window:** 1,000,000 tokens (LLM Reference / BenchmarkList / explains.ai). Max output not separately published.
- **Modalities:** text, image and **video** in; text out. Reasoning (effort levels incl. high); tool calls; long-context.
- **Pricing (as of 2026-10-09):** **$1.00 / $2.70 per 1M** in/out; cached input **$0.05/1M** (StepFun platform). Among the cheapest agentic frontier-adjacent options.
- **Architecture:** sparse MoE, **600B total / 27B active** parameters; open weights announced.

### Raw benchmarks found

Agent / tool use:

- Tau3-Banking: **42.5%** (Pass@1, high effort; rank 13/176, 93rd pct)
- GDPval-AA: **1566 Elo** (rank 28/352); AA-Briefcase **1433 Elo**
- MCP Atlas: **85.6%** (rank 5/48); Toolathlon **74.1%**; BrowseComp **88.7%**
- JobBench **59.0%**; DRACO **83.3%**; AutomationBench-AA **51.0%** (24th pct)
- CyberGym **84.7%** (rank 9/43)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (rank 11/468, 98th pct)
- HLE: **46.5%** (rank 21/478); CritPt 20.9%
- Artificial Analysis Intelligence Index: **43.7** (rank 38/427)
- AA-LCR **88.3%** (rank 2/408 — 100th pct); AA-Omniscience **16.38**; OfficeQA Pro 60.3%
- Vals Index: **49.35%** (#30 of 45); Harvey Legal Agent Benchmark all-pass 15.8% (criteria pass 93.4%)

Coding:

- Terminal-Bench 2.1: **85.0%** (rank 21/194); Terminal-Bench 4.0 33.3%
- SciCode **58.9%** (rank 12/296); ProgramBench **80.5%** (rank 4/37); DeepSWE 1.1 67.7%
- SWE Atlas Codebase QnA 63.6% (rank 5/37); SWE Atlas Test Writing 50.8%; MLS-Bench Lite 40.5%

Multimodal:

- MMMU-Pro **76.4%** (rank 18/72)

Long context:

- 1M-token window; **AA-LCR 88.3% (rank 2 of 408)** — the standout long-context retrieval result; **no MRCR/RULER/GraphWalks published**.

### Normalized scores (1–100)

- **Tool use: 84/100.** MCP Atlas 85.6% (rank 5/48), BrowseComp 88.7%, Toolathlon 74.1% and GDPval-AA 1566 are strong; capped by a weak Tau3-Banking 42.5% and AutomationBench-AA 51.0%.
- **Reasoning: 83/100.** GPQA Diamond 93.5% (98th pct) is elite, but HLE 46.5%, CritPt 20.9% and an AA Intelligence Index of 43.7 pull the aggregate well below frontier.
- **Context window: 94/100.** 1M-token input (≥1M band) with the #2 AA-LCR score (88.3%); no ≥98%-at-512K retrieval benchmark, so held at 94.
- **Multimodal: 76/100.** Text + image + **video** input with MMMU-Pro 76.4%; video support lifts it above a pure image band; no audio.
- **Coding: 85/100.** Terminal-Bench 2.1 85.0%, ProgramBench 80.5% (rank 4/37), SciCode 58.9% and DeepSWE 67.7% are strong; Terminal-Bench 4.0 33.3% and SWE Atlas Test Writing cap it.
- **Cost efficiency: 90/100.** $1.00/$2.70 per 1M with $0.05 cached input plus promised open weights; 65% lower cost at matched AA intelligence per StepFun.
- **Overall Score: 84/100.** (84 + 83 + 94 + 76 + 85) / 5 = 84.4 → 84. Best fit: cost-sensitive long-horizon coding/agent work and finance pipelines where GLM-5.3/Kimi-K3-class quality is enough.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across BenchmarkList (per-benchmark ranks), Vals AI, Artificial Analysis references, StepFun's launch page and third-party reviews (explains.ai, cellcog, aiintelreport). Note that StepFun's launch table mixes its own runs with AA measurements; independently verified figures are preferred here. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
