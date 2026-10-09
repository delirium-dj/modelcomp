# GLM-5.3 Free — findings by Step 5 Preview

- Source: Z.ai (`z-ai/glm-5.3-free` — free route of GLM-5.3)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Free
- **Short description:** The zero-cost hosting route of GLM-5.3 — the identical 753B MoE weights served free via TokenRouter (`z-ai/glm-5.3-free`) and bundled free inside the Z.ai GLM Coding Plan (points quota, 50% off-peak) and the Alibaba Token Plan. **Identity note:** there is no separate "GLM-5.3 Free" model — it is the same August-2026 GLM-5.3 post-training upgrade of the GLM-5.2 base; every capability number below is the GLM-5.3 evidence base, and the only difference is the $0 price and the plan/route terms.
- **Provider / access:** TokenRouter `z-ai/glm-5.3-free` (free, 1M context); Z.ai GLM Coding Plan (`glm-5.3`, points-based, off-peak 50% points, from $18/mo); Alibaba Token Plan (`glm-5.3`, free within plan); the paid routes remain `glm-5.3` on Z.ai / OpenCode Zen / OpenRouter at $1.40/$4.40. Open weights are separately downloadable (GLM-5.3 License, 2026-08-25).
- **Release / knowledge:** 2026-08-14 (same model as GLM-5.3). Knowledge cutoff not disclosed.
- **IDs:** `z-ai/glm-5.3-free` (TokenRouter), `glm-5.3` (Z.ai / Zen / OpenRouter).
- **Context window:** 1,048,576 tokens; 131,072 max output.
- **Modalities:** **Text-only** (no vision); reasoning always on (low / high / max; default max; thinking cannot be disabled); function calling, structured output, context caching, tool streaming.
- **Pricing (as of 2026-10-09):** **$0.00 / $0.00 per MTok on the free route** (free-for-a-limited-time / plan terms apply); the paid sibling is $1.40 / $0.26 cached / $4.40.
- **Architecture:** MoE, 753.3B total / ~40B active (256 experts, 8+1 shared), same base as GLM-5.2; IndexShare sparse attention, SAO RL, slime RL framework; 73.1 tok/s measured (AA).

### Raw benchmarks found

(Identical weights to GLM-5.3 — GLM-5.3's evidence base applies.)

Agentic / tool use:

- MCP-Atlas: **86.8%** (#4/48); Toolathlon Verified: 73.0%
- AutomationBench v1.0.6: **48.2%** (field leader in Z.ai's table); AutomationBench-AA: **62.2%** (#9/26)
- Agents' Last Exam (CLI): **28.5%** (#15/41; open-source SOTA at launch)
- GDPval-AA v2: **Elo 1769** (Z.ai) / 57.5% (AA); AA-Briefcase: 1526 (#16/145)
- Vending-Bench 2: **$8,163.61** (#11/60); τ³-Banking: 50.3% (#3/176); JobBench: 61.4% (#7/48)
- APEX-Agents: 38.1%; DRACO: 82.3%

Reasoning / knowledge:

- AA Intelligence Index: **44.8** (max) — #1 open-weights of 112 (45 on v4.3, ahead of Kimi K3's 44)
- GPQA Diamond: **91.7%** (AA, #22/468); HLE: **42.3%** (AA); HLE w/ tools: 62.5% (#5/29)
- SciCode: **59.0%** (AA); CritPt: 19.1%; MMLU-Pro: 86.8% (Vals)
- AA-LCR: **79.7%** (AA); AA-Omniscience accuracy 33.9%, non-hallucination 70.4%

Coding:

- SWE-bench Verified: **95.4%** (Vals AI — #1 open-weights)
- SWE-bench Pro: **64.6%** (#14/58); DeepSWE v1.1: **66.9%** (Z.ai) / 69.0% (BenchmarkList)
- Terminal-Bench 2.1: **88.2%** (Z.ai) / 83.9% (AA) / 71.54% (Vals)
- Terminal-Bench 3.0: **28.3%**; Terminal-Bench 4.0: **41.9%** (AA) / 38.89% (Vals #10/45)
- Vibe Code Bench v1.1: **78.1%** (Vals); ProgramBench: 72.0%; SWE-Marathon: 42.5% (68/160); FrontierSWE: 78.1; NL2Repo: 58.0%; LiveCodeBench: 80.5%
- LMArena WebDev Arena: 1609 Elo

Cyber:

- CyberGym: **84.5%** (Z.ai — best in its table, ahead of Mythos 5 and GPT-5.6 Sol); ExploitBench: 54.4%; ExploitGym: 105 (2h) / 130 (6h) tasks; AA Cyber Index: 36

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 86.8% (#4/48), τ³-Banking 50.3% (#3/176), Vending-Bench $8,163 and AutomationBench-AA 62.2% are genuinely strong agentic evidence; capped by Agents' Last Exam 28.5%, Toolathlon 73.0% and no independently harnessed GDPval-AA Elo.
- **Reasoning: 84/100.** GPQA 91.7%, HLE 42.3%, SciCode 59.0% and the #1 open-weights AA Intelligence Index (44.8) are frontier-band for an open model; capped by CritPt 19.1%, AA-Omniscience accuracy 33.9% and the index gap to Fable 5.1's 65.7.
- **Context window: 93/100.** 1M-token window in the ≥1M tier with IndexShare sparse attention as engineering evidence and AA-LCR 79.7%; the 100 tier needs ≥98% verified retrieval at 512K+ (no MRCR published).
- **Multimodal: 15/100.** **Text-only** — no image, video or audio input; the methodology's text-only band is 10–20.
- **Coding: 90/100.** SWE-bench Verified 95.4% (Vals, #1 open-weights), SWE-bench Pro 64.6%, DeepSWE 66.9–69.0% and TB2.1 83.9–88.2% are frontier-band, with Vibe Code Bench 78.1% confirming breadth; capped by TB3.0/4.0 at 28.3–41.9% (GPT-5.6 Sol leads 3.0 at 34.6%) and Fable 5's 39.5% vs GLM's 34.5% on Z.ai's private bench.
- **Cost efficiency: 100/100.** **$0.00 per MTok** on the free route (the methodology's $0 = 100 tier) — full GLM-5.3 capability at zero token cost within plan/route terms; the usual free-tier caveats (rate limits, data-use terms, plan quotas) apply.
- **Overall Score: 72/100.** Best-fit recommendation: the leading open-weights agentic-coding model at zero cost — #1 open-weights SWE-bench Verified and AA Index with class-leading CyberGym; text-only, so vision workloads need GLM-5.3-Flash or Kimi K3.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Z.ai GLM-5.3 launch blog/docs, models.dev + LLM-List free-route records, Artificial Analysis, Vals AI, BenchmarkList, Morph, Ridge); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash.md`, using the same headings.
