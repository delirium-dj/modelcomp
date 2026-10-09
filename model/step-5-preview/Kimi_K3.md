# Step 5 Preview — findings by Kimi K3

- Source: StepFun / 阶跃星辰 (`step-5-preview`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship agentic model — sparse MoE, 600B total / 27B active, 1M-token context, native text/image/video input, with particular strength in finance and long context. API-only preview; open weights promised for 2026-10-15.
- **Provider / access:** StepFun Platform API (`step-5-preview`, Chat Completions with high-effort thinking mode); launch post `stepfun.com/step-5-preview`; OpenAI-compatible endpoint per platform docs.
- **Release / knowledge:** Launch post 2026-09-20 (BenchmarkList citation); Vals lists API listing 2026-09-28. Knowledge cutoff not published.
- **IDs:** `step-5-preview` (StepFun API). No OpenCode Zen Free ID verified.
- **Context window:** 1M tokens; max output not published; host coverage confirms the 1M window (StepFun docs page).
- **Modalities:** text/image/video in → text out; thinking (high-effort mode used in launch table); tool calls / function calling; JSON mode not separately documented but standard on the platform.
- **Pricing (as of 2026-10-09):** $1.00 / $2.70 per 1M in/out, $0.05/M cached input (StepFun pricing docs via BenchmarkList).
- **Architecture:** sparse MoE, 600B total / 27B active per token; weights announced for 2026-10-15 (braindetox.kr); preview is API-hosted.

### Raw benchmarks found

(BenchmarkList table: 27 rows, "22 first-party launch-table + verified AA rows"; effort = High unless noted)

Agent / tool use:

- Tau3-Banking: **42.5%** (pass@1, #13/176, 93rd pct)
- MCP Atlas: **85.6%** (#5/48)
- GDPval-AA v2.1: **1566 Elo** (#28/352)
- AA-Briefcase: **1433 Elo** (#26/145)
- Toolathlon: **74.1%** (#16/41); BrowseComp **88.7%** (#12/60); DRACO **83.3%** (#9/24); JobBench **59.0%** (#9/48)
- AutomationBench-AA: **51.0%** (#20/26 — weak spot)
- CyberGym: **84.7%** (#9/43)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (#11/468, 98th pct)
- Humanity's Last Exam: **46.5%** (#21/478)
- CritPt: **20.9%** (#13/28)
- Artificial Analysis Intelligence Index: **43.7** (#38/427, verified 2026-10-03)
- AA-Omniscience Index: **16.38** (#16/30 — mediocre factual reliability)
- MLS-Bench Lite: **40.5%** (#9/15); OfficeQA Pro **60.3%** (#15/18 — weak)

Coding:

- Terminal-Bench 2.1: **85.0%** (#21/194); Terminal-Bench 4.0: **33.3%** (#14/29, mid)
- DeepSWE 1.1: **67.7%** (#19/52); SciCode: **58.9%** (#12/296)
- ProgramBench: **80.5%** (#4/37); SWE Atlas Codebase QnA **63.6%** (#5/37), Test Writing **50.8%** (#7/30)

Long context:

- AA-LCR: **88.3%** — **#2/408**, within 0.4 pts of the leader (Kimi K3 88.7; verified 2026-10-03)

Multimodal:

- MMMU-Pro: **76.4%** (#18/72)

Cross-checks: BenchmarkList consolidated view — "roughly level with GLM-5.3 and Kimi K3 at Max on many coding and agent benchmarks, generally trails GPT-6 Astra and the Claude models, with exceptions such as long-context reasoning." Vals AI Index: **49.35%**, #30/45; Harvey's Legal Agent Benchmark #18/76 on Vals (AA-run Harvey LAB-AA row: 15.8%, #4/18 of its cohort).

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 86/100.** Tau3-Banking 42.5%, MCP Atlas 85.6%, BrowseComp 88.7%, Toolathlon 74.1% — broadly top-decile agentic work; capped by weak AutomationBench-AA (51%, 24th pct).
- **Reasoning: 85/100.** GPQA Diamond 93.5% (98th pct) plus HLE 46.5% and AA Index 43.7; capped by mid CritPt (20.9%) and mediocre AA-Omniscience factual reliability (16.38).
- **Context window: 94/100.** 1M window and #2/408 on AA-LCR (88.3%) — elite measured long-context reasoning, its standout dimension.
- **Multimodal: 78/100.** True text/image/video intake (rare at this tier) with MMMU-Pro 76.4% (76th pct); capped by text-only output and weak OfficeQA Pro document results (18th pct).
- **Coding: 84/100.** Terminal-Bench 2.1 85.0%, DeepSWE 67.7%, SciCode 58.9%, ProgramBench 80.5% (#4/37), SWE-Atlas QnA 63.6%; capped by mid-pack Terminal-Bench 4.0 (33.3%).
- **Cost efficiency: 90/100.** $1.00/$2.70 with $0.05 cached input is cheap for a flagship agentic model; AA notes "notably low cost per task."
- **Overall Score: 85/100.** Mean of 86/85/94/78/84 = 85.4 → 85. Best fit: long-context, finance-leaning agentic knowledge work and repo-scale coding where open-weights availability (Oct 15) matters.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-09
- Method: public internet research (BenchmarkList consolidated benchmark table incl. verified Artificial Analysis rows, StepFun official launch/docs pages, Vals AI listing, easy-benchmarks.com, braindetox.kr analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.
