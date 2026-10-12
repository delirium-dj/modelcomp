# DeepSeek V4.1 Flash — findings by Muse Spark 1.3 Contributor

- Source: DeepSeek/DeepSeek V4.1 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-12 (UTC) — second-pass refresh (prior Signature 2026-09-18, amended 2026-09-27: official README table added, 77 → 85; new: full HF README frontier comparison table — TB4.0, CyberGym, HLE-with-tools, AutomationBench, Agent's Last Exam, scaffold splits)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (MIT-licensed multimodal MoE)
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context, 384K output and strong terminal-bench results.
- **Provider / access:** DeepSeek via API + HF weights (MIT); no Zen Free ID under deepseek/ namespace (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-09-10 release (DeepSeek news post); V4-Flash/Vision-Exp retired into it, V4-Pro routes to it from 2026-09-14 until V4.1-Pro; OpenCode + WorkBuddy support; knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `deepseek/deepseek-v4.1-flash` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 384K out — verified via curated repo metadata
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $0.30/$1.20 per 1M filed rate (curated metadata); DeepInfra promo lane $0.112/$0.336 (30% off); no Zen Free ID
- **Architecture:** open MoE, 552B total (MIT); Causal Encoder–Decoder, 8B active input / 16B output (launch post)

### Raw benchmarks found

> Compared against prior findings (2026-09-18/27, Overall 85): new verified evidence below — the full HF README frontier comparison table at max reasoning effort (vs Opus 5, GPT-5.6 Sol, K3, GLM-5.3, DS-V4-Pro, DS-V4-Flash). Gaps closed: CyberGym, SEC-Bench relativity, ExploitGym, HLE-with-tools, AutomationBench, Agent's Last Exam, Chartography/BabyVision/ZeroBench, scaffold splits; eval harness now documented (temperature 1.0, top_p 0.95, 1M limit, N=8 DeepSWE / N=3 TB2.1).

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (official HF README table — **#1 of the 7-model comparison panel**: Opus 5 89.1%, GPT-5.6 Sol 88.8%, K3 88.3%, GLM-5.3 88.2%, DS-V4-Pro 87.9%, DS-V4-Flash 82.7%); scaffold splits: DSH Standard **90.6%**, DSH Minimal 90.3%, Claude Code 88.0%, Pi 86.1%, OpenCode 85.0%, Codex 84.1% (same table; TB2.1 run without network access)
- Terminal-Bench 3.0 / 4.0: **30.0% / 31.2%** (same table; panel context: Opus 5 leads 43.3%/51.8%, GPT-5.6 Sol 34.4%/39.9% — V4.1-Flash mid-panel)
- CyberGym: **88.1%** (same table — **#1 of the measured panel**: GLM-5.3/Sol 84.5%, DS-V4-Pro 83.3%, K3 80.0%, DS-V4-Flash 76.7%; NEW); **ExploitGym 15.3%** (same table; panel: Sol 33.7%, Opus 5 22.1%, GLM-5.3 15.0% — NEW)
- AutomationBench: **54.8%** (same table — **#1 of panel**: Opus 5 50.3%, GLM-5.3 48.8%, K3 46.7%, Sol 45.8%, DS-V4-Pro 43.2%, DS-V4-Flash 37.7%; NEW)
- Agent's Last Exam: **31.8%** (same table — **#1 of panel**: GLM-5.3 28.5%, Opus 5 28.6%, K3 27.6%, Sol 26.7%; NEW)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (official HF README table)
- HLE: **36.8%** (same table; 39.1% variant-config); **HLE with tools 63.9%** (same table — **#1 of panel**: Opus 5 63.6%, GLM-5.3 62.5%, DS-V4-Pro 60.0%, K3 59.8%, DS-V4-Flash 51.5%; NEW)
- Codeforces rating: **3471** (same table — leads panel: DS-V4-Pro 3348, DS-V4-Flash 3289; Opus 5 / Sol / K3 / GLM not rated in table); **MathArena Apex 65.6%** (same table — ties K3 65.6% at panel top; DS-V4-Pro 65.3%, DS-V4-Flash 58.6%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.2% DeepSWE v1.1** (official HF README table — **#1 of panel**: Opus 5 74.0%, Sol 73.0%, K3 67.5%, GLM-5.3 66.9%, DS-V4-Pro 62.7%, DS-V4-Flash 54.4%; scaffold splits: DSH Minimal 74.2%, DSH Standard 72.6%, DSH PTC 70.5%, Claude Code 69.8%, Pi 66.2%, OpenCode 65.5%, mini-SWE 67.6%, Codex 65.6%; N=8 samples); **62.8% SEC-Bench Pro** (independent guide table); **64.0% NL2Repo-Bench** (same table — leads panel: DS-V4-Pro 61.5%, K3/GLM-5.3 58.0%, Sol 56.8%) and **20.3% ProgramBench** (same table — ProgramBench tails; panel: Opus 5 37.0%, Sol 23.0%)

Long context:

- **1M window with 384K output verified; eval harness: temperature 1.0, top_p 0.95, 1M-token limit, max_steps 500 (HF README); no MRCR/RULER number found — no long-context retrieval reported**
- Multimodal probes (NEW, same table — Claude Code harness, 512K context): Chartography with tools 78.9% (panel: Opus 5 84.0%, Sol 79.9%, K3 68.1%), BabyVision with tools 89.6% (Opus 5 94.1%, Sol 88.9%, K3 85.7%), ZeroBench-main with tools 49.0% pass@5 (Sol 53.0%, Opus 5 52.0%, K3 41.0%)

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.1 90.6% (#1 of 7-model panel) plus CyberGym 88.1% (#1), AutomationBench 54.8% (#1), Agent's Last Exam 31.8% (#1) and TB3.0/TB4.0 breadth show panel-leading orchestration; capped by ExploitGym 15.3% and zero Tau3/GDPval/Claw numbers.
- **Reasoning: 88/100.** GPQA 90.9% plus Codeforces 3471 (panel lead), MathArena 65.6% (panel top) and HLE-with-tools 63.9% (#1) show near-frontier reasoning; capped by plain HLE 36.8% mid-band and no LCR/CritPt numbers.
- **Context window: 100/100.** 1M / 384K out verified; top tier.
- **Multimodal: 67/100.** Text+image in, text out, now with measured multimodal probes (Chartography 78.9%, BabyVision 89.6%, ZeroBench 49.0%); capped below video/audio omni models.
- **Coding: 87/100.** DeepSWE 74.2% (#1 of panel) plus SEC-Bench 62.8% and NL2Repo 64.0% (panel lead) show strong engineering; capped by the ProgramBench 20.3% tail and no SWE/LiveCode/SciCode numbers.
- **Cost efficiency: 88/100.** Filed $0.30/$1.20 with a $0.112/$0.336 promo lane is cheap paid value; no $0 tier caps below 100 (unchanged — no new pricing evidence).
- **Overall Score: 86/100.** Mean of the five non-cost dims (89+88+100+67+87)/5 = 86.2; best-fit cheap paid input-heavy agentic pick — the full comparison panel now confirms it.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-12
- Method: second-pass refresh of the 2026-09-18 report (amended 2026-09-27): fresh public internet research (full HF DeepSeek-V4.1-Flash README comparison table at max reasoning effort — panel ranks, scaffold splits, harness config; multimodal probe rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
