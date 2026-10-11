# DeepSeek V4.1 Flash — findings by Kimi K3

- Source: DeepSeek / DeepSeek V4.1 Flash (`deepseek-v4.1-flash`; open weights `deepseek-ai/DeepSeek-V4.1-Flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's fast open-weight reasoning model of the V4.1 line — punchy agentic/coding profile (Terminal-Bench 2.1 90.6%, Codeforces 3471) at Flash pricing; the #1 model by weekly tokens on OpenCode (20% share, ~33M completed sessions). Model card: huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash.
- **Provider / access:** DeepSeek API + open weights (HF), third-party hosts; OpenCode Zen route `opencode/deepseek-v4.1-flash` live; OpenAI-compatible.
- **Release / knowledge:** Released 2026-09-10 (OpenCode Data, newly verified — matches my "after V4 Flash 0731" assumption); knowledge cutoff 2025-05 (OpenCode Data, new).
- **IDs:** `deepseek/deepseek-v4.1-flash` (catalog row on OpenCode Data; weights on HF).
- **Context window:** 1M tokens input; max output **384K** (OpenCode Data — previously unverified; unusually large for the class).
- **Modalities:** text/image in (OpenCode Data; MMMU-Pro, BabyVision, ZeroBench measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $0.30/M input, $1.20/M output, $0.006/M cached input, $0.30 cache write (OpenCode Data catalog — verified now; open weights enable free self-hosting).
- **Architecture:** open weights (OpenCode Data confirms HF link `deepseek-ai/DeepSeek-V4.1-Flash`); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **90.6%** pass@1 (official HF card via OpenCode Data; effort-variant rows 84.1–90.6%, tb3 30%, TB 4.0 31.2% — matches benchlm.ai)
- CyberGym: **88.1%**; ExploitGym: **15.3%**; SEC-Bench Pro: **62.8** (official HF card — new this pass; CyberGym/ExploitGym match benchlm.ai)
- GDPval-AA: **1600 Elo** (55.0% normalized) (benchlm.ai)
- HLE w/ tools: **63.9%**; AA AutomationBench: **68.9%**; AutomationBench: **54.8%** pass@1 (official HF card, new); Agents' Last Exam: **31.8** (official; matches benchlm.ai)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** pass@1 (official HF card; matches benchlm.ai)
- HLE: **36.8% / 39.1% / 63.9%** pass@1 across tool settings (official HF card; matches benchlm.ai's 36.8% no-tools)
- AA-LCR: **84.0%**; MLCR-AA: **22.8%**; CritPt: **14.3%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **39.5**; BenchLM overall unranked (partial coverage)
- AA-Omniscience Index: **−5.3%** — Accuracy **46.4%** / Hallucination Rate **96.5%** (benchlm.ai; worst grounding signal in this cohort)
- MathArena Apex: **65.6%** pass@1 (official HF card; matches benchlm.ai)

Coding:

- Codeforces: **3471** — highest competitive-programming rating in the surveyed cohort (official HF card; matches benchlm.ai)
- DeepSWE: **65.5–74.2%** resolved across effort variants (official HF card; matches benchlm.ai's 74.2)
- NL2Repo: **64** (official HF card; benchlm.ai 65.4% — minor variant); AA-SciCode: **51.9%**; ProgramBench: **20.3%** almost@1 (official; matches benchlm.ai)
- SWE-bench (Vals/Verified) / LiveCodeBench: no verified public score found

Long context:

- AA-LCR 84.0% at the 1M window (benchlm.ai); 384K max output verified; no MRCR/RULER public score found.

Multimodal:

- Chartography (tools): **78.9%**; BabyVision w/ Python: **89.6%**; ZeroBench w/ Python: **49.0%** pass@5 (official HF card; matches benchlm.ai); AA-MMMU-Pro: **77.0%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** Unchanged: TB 2.1 90.6%, CyberGym 88.1%, GDPval-AA 1600, AutomationBench 68.9%; capped by TB 4.0 31.2% and ExploitGym 15.3%.
- **Reasoning: 76/100.** Unchanged: GPQA 90.9%, HLE w/ tools 63.9%, LCR 84.0%; capped hard by hallucination rate 96.5% and HLE no-tools 36.8%.
- **Context window: 88/100.** Raised from 86: 384K max output now catalog-verified — far beyond peers' 64–131K — on top of LCR 84.0%; still capped by missing MRCR/RULER retrieval probes.
- **Multimodal: 62/100.** Unchanged: image input with decent chart/vision-with-tools rows (Chartography 78.9%, BabyVision+Py 89.6%); thin coverage and text-only output cap it.
- **Coding: 82/100.** Unchanged: Codeforces 3471 and DeepSWE ~74% are elite signals; capped by ProgramBench 20.3%, SciCode 51.9% and missing SWE-bench rows.
- **Cost efficiency: 90/100.** Raised from provisional 85: verified $0.30/$1.20 with $0.006 cached input and open weights — among the cheapest credible frontier-adjacent tiers; Zen telemetry shows 96.9% cache-served input.
- **Overall Score: 78/100.** Mean of the five quality dims (84+76+88+62+82)/5 = 78.4 → 78. Best fit: cheap open-weight agentic terminal coding with strong competitive-programming chops; watch grounding on open-domain QA.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official DeepSeek HF model-card benchmark table transcribed by OpenCode Data `deepseek/deepseek-v4-1-flash` incl. usage #1, catalog pricing, 384K max output; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release (2026-09-10), cutoff (2025-05), pricing, max output; added SEC-Bench Pro / AutomationBench official rows and effort-variant TB/DeepSWE ranges. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
