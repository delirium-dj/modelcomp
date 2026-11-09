# Step 5 Preview — findings by MiMo 2.6 Flash

- Source: StepFun (`step-5-preview`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-13)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-13 (Overall 85.4). Fresh sources this pass: BenchLM model page
> (updated 2026-11-07, 42 rows sourced to StepFun's official launch page and
> AA leaderboards) and a DuckDuckGo sweep confirming OpenRouter/StepFun pages.
> Changes: Tool use 78→87 (MCP Atlas 85.6, Toolathlon-Verified 74.1,
> BrowseComp 88.7 rows now found — all absent previously), Multimodal 82→85
> (MMMU-Pro 76.0/76.4 now published, lifting the "no academic vision score"
> cap); Reasoning 88, Context 95, Coding 84, Cost efficiency 80 held.

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's flagship sparse-MoE foundation model for real-world agentic work (long-horizon reasoning, tool use, autonomous execution); skips the entire Step 4.x line, jumping from Step-3.7-Flash to Step 5. Open weights planned 2026-10-15 (Apache 2.0). BenchLM classifies it Open Weight, rank #61/1016 (56.83 composite, partial coverage).
- **Provider / access:** StepFun API; OpenRouter `stepfun/step-5-preview-20261008`; NanoGPT `stepfun/step-5-preview`; Blackbox AI route. Chat Completions (OpenAI-compatible).
- **Release / knowledge:** Preview released 2026-09-18/21 (sources differ slightly; LLMLearner says 2026-09-20); OpenRouter listing 2026-10-08; knowledge cutoff not disclosed.
- **IDs:** `stepfun/step-5-preview`; HF weights mirror `TypeSafeAI/Step-5-Preview-BF16` / `SHSLab/Step-5-Preview-BF16` (planned).
- **Context window:** 1,000,000 tokens (BenchLM + AA confirm 1M, 2026-11-07); max output 1M (NanoGPT listing).
- **Modalities:** text + image + video in; text out; reasoning (effort tiers High/Max); tool calls; JSON mode.
- **Pricing (as of 2026-11-08):** $1.00 / 1M input, $2.70 / 1M output; cache read $0.05 / 1M (OpenRouter, NanoGPT, themodelgap — re-confirmed this pass).
- **Architecture:** 600B total parameters, 27B active per token (~4.5% sparsity), 92-layer "narrow but deep" sparse MoE; Apache 2.0 open weights (planned).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **85.6%** (StepFun launch via BenchLM) — **new this pass** (previous pass: no row)
- Toolathlon-Verified: **74.1%** (StepFun launch via BenchLM) — **new**
- BrowseComp: **88.7%** (StepFun launch via BenchLM) — **new**
- AutomationBench: **44.0%** (StepFun launch) / **51.0%** (Artificial Analysis) — both listed
- AA-Briefcase v1.1: **1,433 Elo** (AA via NanoGPT; better than 83% of models)
- GDPval-AA: **1,566 Elo** (StepFun launch via BenchLM; better than 91% of models per AA)
- CyberGym: **84.7%** (StepFun launch); CyberGym-E2E-AA: 74.8% (AA)
- Terminal-Bench 4.0: **33.3%** (StepFun launch; AA's own run in previous pass)
- JobBench 59.0, DRACO 83.3, APEX-Agents 37.8 / APEX-Agents-AA 38.0, Agents' Last Exam 29.5, Hermes Bench 69.2, AA Harvey LAB 93.4, AA ITBench 55.6, AA EnterpriseOps-Gym 47.2, CWE-Bench-AA 52.5 (all new rows via BenchLM 2026-11-07)
- Tau2/Tau3-Bench, Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (StepFun HF model card — re-confirmed) — clears the 90%+ frontier ref
- Humanity's Last Exam (HLE): **46.5%** (AA — re-confirmed; AA-HLE row identical) — clears the 40%+ frontier ref
- AA-LCR v1.1 (long-context reasoning): **88.3%** (re-confirmed)
- Artificial Analysis Intelligence Index: **44** (v4.3.2, previous pass) vs **28.5** (AA's current suite via BenchLM, 2026-11-07) — suite-version conflict noted (v4.3.2 → v5.x harder suite); both readings sit in/below the 20–35 mid band, far under the 60+ frontier ref
- CritPt: **20.9%** (StepFun launch via BenchLM) — **new**
- GDP.pdf all-pass rate: **14.8%** (AA via NanoGPT); AA-Omniscience Index 16.4 / accuracy 36.4 / hallucination 31.3 (AA, new rows)

Coding:

- DeepSWE v1.1: **67.7%** (re-confirmed; leads open-weight set incl. Kimi K3 67.5%)
- Terminal-Bench 2.1: **85.0%** (re-confirmed — clears the TB-85 frontier bar)
- SciCode / AA-SciCode: **58.9%** (re-confirmed — clears the 55%+ ref)
- SWE-Marathon: **72.7%** (StepFun launch via BenchLM) — **new**
- StepCodeBench: **49.0%**; ProgramBench: **80.5%**; MLS-Bench Lite: **40.5%** (new row)
- SWE-bench Verified / SWE-Pro, LiveCodeBench: no verified public score found

Long context:

- AA-LCR v1.1 88.3% at long-context reasoning (proxy for 1M window utility); no MRCR/RULER figure published.

Multimodal:

- MMMU-Pro: **76.0%** (StepFun launch) / **76.4%** (AA independent run) — **new this pass** (previous pass: no academic vision score)
- OfficeQA Pro: **60.3%** (StepFun launch) — **new**; GDP.pdf 14.8% (document reasoning)
- Text + image + video in; text out; no audio, no non-text output.

### Normalized scores (1–100)

- **Tool use: 87/100.** Three previously missing agentic rows now found and strong: MCP Atlas 85.6, Toolathlon-Verified 74.1, BrowseComp 88.7, plus GDPval-AA 1,566 Elo (better than 91% of models) and AA-Briefcase 1,433; held under the 90+ band by GDPval below the 1750+ frontier anchor, TB4.0 33.3 / AutomationBench 44–51 (mid), Agents' Last Exam 29.5, and no Tau3/Claw-Eval rows.
- **Reasoning: 88/100.** Held: GPQA Diamond 93.5 and HLE 46.5 both clear their frontier refs and AA-LCR 88.3 is excellent; capped by the AA Intelligence Index reading (44 on v4.3.2 vs 28.5 on AA's current suite — either way far below the 60+ frontier ref), CritPt 20.9, and Omniscience index 16.4.
- **Context window: 95/100.** Held: full 1M (re-confirmed on BenchLM/AA) with AA-LCR 88.3 proving long-context reasoning holds; capped only by absence of classic MRCR/RULER retrieval curves (≥98%-at-512K+ evidence needed for 100).
- **Multimodal: 85/100.** Native text+image+video input now backed by a published academic vision score — MMMU-Pro 76.0 (vendor) / 76.4 (AA) — plus OfficeQA Pro 60.3 and document reasoning GDP.pdf 14.8; previous cap ("no MMMU-style score") lifted, but no audio in, no non-text out, and 76 MMMU-Pro isn't class-leading → stays under 90.
- **Coding: 84/100.** Held: DeepSWE 67.7 leads open-weight peers, TB2.1 85.0 clears the frontier bar, SciCode 58.9 clears the 55% ref, and new SWE-Marathon 72.7 adds long-horizon evidence; capped by TB4.0 33.3 and DeepSWE still short of the 74% frontier ref (GPT-6 Astra 74.1), with no SWE-bench Verified/Pro or LiveCodeBench row.
- **Cost efficiency: 80/100.** Held: $1/$2.70 re-confirmed unchanged (cache read $0.05 helps agentic loops) — mid-range pricing, strong quality-per-dollar at 27B active params; capped by single-provider latency (26.44s TTFT per AA) and preview status.
- **Overall Score: 87.8/100.** (87 + 88 + 95 + 85 + 84) / 5 = 87.8 — the best efficiency frontier available: near-frontier reasoning (GPQA 93.5, HLE 46.5) and coding (TB2.1 85) with now-verified MCP-Atlas/Toolathlon/BrowseComp agent scores at 1M context and $1/$2.70, ideal for long-horizon agentic coding and long-context work on a budget; open weights make it a top self-host candidate.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM model page updated 2026-11-07 with per-row source links to StepFun's launch page and AA leaderboards, DuckDuckGo HTML sweep over OpenRouter/StepFun/themodelgap/LLMLearner, plus the AA model page rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Step 5 Preview](https://benchlm.ai/models/step-5-preview)
  - [StepFun — Step 5 Preview (official launch, benchmark tables)](https://www.stepfun.com/step-5-preview)
  - [Artificial Analysis — Step 5](https://artificialanalysis.ai/models/step-5)
  - [OpenRouter — stepfun/step-5-preview](https://openrouter.ai/stepfun/step-5-preview)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
