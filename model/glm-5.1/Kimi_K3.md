# GLM 5.1 Coding — findings by Kimi K3

- Source: Z.AI / GLM 5.1 Coding (`glm-5.1-coding`; base `zai-org/GLM-5.1` family)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 (Coding deployment)
- **Short description:** Z.AI's earlier GLM-5 snapshot marketed for coding — outstanding math (AIME'26 95.3%, HMMT-Nov 94.0%), τ²-bench 97.7% tool calling, ~200K context; now superseded by 5.2/5.3. Base GLM-5.1 is live on Zen (~#41 weekly).
- **Provider / access:** Z.AI API (coding plan endpoints); OpenCode Zen base route `zhipuai/glm-5.1` live; open weights `zai-org/GLM-5.1` (HF link confirmed live). No Zen Free ID verified.
- **Release / knowledge:** 2026-04-07 (OpenCode Data, newly verified — first pass had "date not verified"); cutoff not published.
- **IDs:** `zai/glm-5.1` class (`glm-5.1-coding` deployment); `zhipuai/glm-5.1` (OpenCode Data).
- **Context window:** 200K (OpenCode Data; benchlm.ai measured 203K — same band); max output **131K** (OpenCode Data — new).
- **Modalities:** text in/out (OpenCode Data confirms text-only; no vision rows); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $1.40/M input, $4.40/M output, $0.26 cached input, $0.00 cache write (OpenCode Data catalog — verified now; Z.AI coding-plan pricing per plan).
- **Architecture:** open-weight MoE (Z.AI; HF link live); params undisclosed in my sources.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **97.7%**; τ³-bench: **70.6%** (benchlm.ai)
- Claw-Eval: **62.3%**; ResearchClawBench: **18.2%** (benchlm.ai)
- Terminal-Bench 2.0: **63.5%** (benchlm.ai); TB pass@1 (AA coding-agents): **65.1** (artificialanalysis.ai via OpenCode Data — new this pass); TB 2.1 (Vals): 56.9%
- MCP Atlas: **71.8%**; CyberGym: **68.7%**; BrowseComp: **68.0%** (benchlm.ai)
- GDPval-AA: **1181 Elo** (30.2% normalized); AA Agentic Index: **25.2%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (GPQA-D); 86.8% (AA); 84.5% (Vals) (benchlm.ai)
- HLE: **52.3%** (w/ tools); AA-HLE: **30.1%** (benchlm.ai)
- AA-LCR: **73.7%**; CritPt: **4.6%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **26.1**; BenchLM overall **57.14/100, #48 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **23.7% / 29.9%** (benchlm.ai)
- AIME 2026: **95.3%**; HMMT Nov 2025: **94.0%**; HMMT Feb 2026: **82.6%**; FrontierMath v2: **33.4%** T1–3 / **12.5%** T4; MMLU-Pro (Vals): **86.9%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **76.4%**; SWE-bench Pro resolve: **58.4%** (benchlm.ai) — CONFLICT: AA coding-agents measures SWE-Bench Pro pass@1 at **19.8** (scaffold variant; both retained); SWE-Rebench: **62.7%** (benchlm.ai)
- SWE-Atlas Codebase QnA (AA): **73.2** pass@1 (artificialanalysis.ai via OpenCode Data — new this pass); AA Coding Agent Index: **52.7** (new this pass)
- LiveCodeBench (Vals): **81.4%** (benchlm.ai)
- Vibe Code Bench: **31.5%**; NL2Repo: **42.7%**; AA-SciCode: **44.8%**; AA Coding Index: **55.8** (benchlm.ai)

Long context:

- AA-LCR 73.7% within the ~200K window (benchlm.ai); 131K max output catalog-verified; no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1290 Elo** (benchlm.ai); text-only (catalog-confirmed).

### Normalized scores (1–100)

- **Tool use: 78/100.** Unchanged: τ² 97.7%, τ³ 70.6%, MCP Atlas 71.8%, Claw-Eval 62.3%; capped by GDPval 1181 and Agentic Index 25.2%.
- **Reasoning: 76/100.** Unchanged: AIME 95.3% / HMMT 94% / GPQA ~86%; capped by AA-HLE 30.1% and CritPt 4.6%.
- **Context window: 66/100.** Unchanged: ~200K window (not 1M) with LCR 73.7%; 131K output verified.
- **Multimodal: 15/100.** Unchanged: text-only deployment confirmed — floor.
- **Coding: 72/100.** Unchanged: LiveCodeBench 81.4%, SWE-bench (Vals) 76.4%, plus independent AA Coding Agent Index 52.7 / SWE-Atlas QnA 73.2 (new, consistent); capped by Vibe Code 31.5% and the pass@1/resolve spread.
- **Cost efficiency: 80/100.** Verified now: $1.40/$4.40 hosted with MIT open weights — provisional flag removed.
- **Overall Score: 61/100.** Mean of the five quality dims (78+76+66+15+72)/5 = 61.4 → 61 (unchanged). Best fit: math-heavy text agents on Z.AI's coding plan; 5.3 strictly better where available.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (OpenCode Data `zhipuai/glm-5-1` — verified release 2026-04-07, 200K/131K, pricing, open weights, live Zen usage; artificialanalysis.ai coding-agent rows; benchlm.ai scorecard from first pass). Second pass fixes: verified price replaces "no verified price"; pass@1-vs-resolve SWE-Pro conflict noted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
