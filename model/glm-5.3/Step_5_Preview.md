# GLM-5.3 — findings by Step 5 Preview

- Source: Z.ai (`glm-5.3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai's August-2026 coding/cyber flagship (released 2026-08-14; API 2026-08-18; weights public 2026-08-25 under the GLM-5.3 License) — a post-training-only upgrade of the GLM-5.2 base (same 753B MoE) that delivers a ~50% coding gain, open-source SOTA on Terminal-Bench 3.0 (4.6 → 28.3) and Agents' Last Exam, and a surprise lead on CyberGym vulnerability discovery (84.5%). Independently scored #1 of 112 open-weights models on the AA Intelligence Index (45), ahead of Kimi K3 (44), at roughly one-fifth of K3's price.
- **Provider / access:** Z.ai API `glm-5.3` (OpenAI Chat Completions / Responses and Anthropic Messages protocols); OpenRouter `z-ai/glm-5.3`; GLM Coding Plan (from $18/mo, 50% off-peak points); open weights `zai-org/GLM-5.3` (FP8 ~756GB / BF16; smallest GGUF 217GB) + NVFP4 checkpoint `incoai/GLM-5.3-NVFP4` served by Morph as `morph-glm53-744b`.
- **Release / knowledge:** 2026-08-14. Knowledge cutoff not disclosed (GLM-5.2 base).
- **IDs:** `glm-5.3` (Z.ai), `z-ai/glm-5.3` (OpenRouter).
- **Context window:** 1,048,576 tokens; 128K max output.
- **Modalities:** **Text-only** (no vision). Reasoning always on (low / high / max, default max) — disabling thinking is no longer supported; function calling, structured output, context caching, tool streaming.
- **Pricing (as of 2026-10-09):** $1.40 / MTok input, $0.26 cached, $4.40 output — identical to GLM-5.2; cache writes free (limited-time); 39 OpenRouter endpoints list $0.12–$2.80 input.
- **Architecture:** MoE, 753.3B total / ~40B active (256 experts, 8+1 shared per token), same base as GLM-5.2; IndexShare sparse attention, SAO RL with compaction, slime RL framework; 73.1 tok/s measured (AA).

### Raw benchmarks found

Agentic / tool use:

- MCP-Atlas: **86.8%** (#4/48); Toolathlon Verified: 73.0% (#19/41)
- AutomationBench v1.0.6: **48.2%** (field leader in Z.ai's table); AutomationBench-AA: **62.2%** (#9/26)
- Agents' Last Exam (CLI): **28.5%** (#15/41; open-source SOTA at launch)
- GDPval-AA v2: **Elo 1769** (Z.ai) / 57.5% (AA) / 1763 (#6/352 BenchmarkList); AA-Briefcase: 1526 (#16/145)
- Vending-Bench 2: **$8,163.61** net worth (#11/60); τ³-Banking: 50.3% (#3/176); JobBench: 61.4% (#7/48)
- APEX-Agents: 38.1% (#2/8); DRACO: 82.3%

Reasoning / knowledge:

- AA Intelligence Index: **44.8** (max) — #1 open-weights of 112 (45 on v4.3, ahead of Kimi K3's 44)
- GPQA Diamond: **91.7%** (AA, #22/468); HLE: **42.3%** (AA, #33/478); HLE w/ tools: 62.5% (#5/29)
- SciCode: **59.0%** (AA, #10/296); CritPt: 19.1% (AA); MMLU-Pro: 86.8% (Vals)
- AA-LCR: **79.7%** (AA); AA-Omniscience accuracy 33.9%, non-hallucination rate 70.4%

Coding:

- SWE-bench Verified: **95.4%** (Vals AI, 2026-10-08 — #1 open-weights, level with the closed frontier's top cluster)
- SWE-bench Pro: **64.6%** (#14/58); DeepSWE v1.1: **66.9%** (Z.ai) / 69.0% (BenchmarkList #16/52)
- Terminal-Bench 2.1: **88.2%** (Z.ai, Claude Code) / 83.9% (AA) / 71.54% (Vals Terminus-2, #26/76)
- Terminal-Bench 3.0: **28.3%** (Z.ai) / 32.4% ±2.9 (BenchmarkList #4/20); Terminal-Bench 4.0: **41.9%** (AA) / 38.89% (Vals #10/45)
- Vibe Code Bench v1.1: **78.1%** (Vals); ProgramBench: 72.0% (#8/37); SWE-Marathon v1.1: 42.5% (68/160 trials, #11/33); FrontierSWE: 78.1 / v2 30.2%; NL2Repo: 58.0%; LiveCodeBench: 80.5% (Vals)
- LMArena WebDev Arena: 1609 Elo (#11/27); Arena: 1505

Cyber (its differentiating program):

- CyberGym: **84.5%** (Z.ai — best in its comparison table, ahead of Mythos 5's 83.8% and GPT-5.6 Sol's 83.6%)
- ExploitBench: **54.4%**; ExploitGym: **105 tasks (2h) / 130 tasks (6h)** vs GLM-5.2's 29/39
- AA Cyber Index: **36** (no tasks declined); with security teams it surfaced 2,436 vulnerabilities across 269 projects (1,097 medium-to-high severity)

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP-Atlas 86.8% (#4/48), τ³-Banking 50.3% (#3/176), Vending-Bench $8,163 and AutomationBench-AA 62.2% are genuinely strong agentic evidence; capped by Agents' Last Exam 28.5%, Toolathlon 73.0% and no published GDPval-AA Elo from an independent harness.
- **Reasoning: 84/100.** GPQA 91.7%, HLE 42.3%, SciCode 59.0% and the #1 open-weights AA Intelligence Index (44.8) are frontier-band for an open model; capped by CritPt 19.1%, AA-Omniscience accuracy 33.9% and the rebased index gap to Fable 5.1's 65.7.
- **Context window: 93/100.** 1M-token window in the ≥1M tier with IndexShare sparse attention as engineering evidence and AA-LCR 79.7%; the 100 tier needs ≥98% verified retrieval at 512K+ (no MRCR published).
- **Multimodal: 15/100.** **Text-only** — no image, video or audio input; the methodology's text-only band is 10–20.
- **Coding: 90/100.** SWE-bench Verified 95.4% (Vals, #1 open-weights), SWE-bench Pro 64.6%, DeepSWE 66.9–69.0% and TB2.1 83.9–88.2% are frontier-band, with Vibe Code Bench 78.1% and WebDev Arena #11 confirming breadth; capped by Terminal-Bench 3.0/4.0 at 28.3–41.9% (GPT-5.6 Sol leads 3.0 at 34.6%) and Fable 5's 39.5% on Z.ai's private bench vs GLM's 34.5%.
- **Cost efficiency: 88/100.** $1.40/$4.40 per MTok with $0.26 cached input maps to the methodology's ~$1.25/$4.25 ≈ 88 tier — about one-fifth of Kimi K3's output price for equal-or-better independent intelligence, with token-efficient runs (~50K output tokens at High effort vs Opus 4.8's 120K).
- **Overall Score: 72/100.** Best-fit recommendation: the leading open-weights agentic-coding model — #1 open-weights on SWE-bench Verified and the AA Index, class-leading CyberGym, at $1.40/$4.40; it is text-only, so vision workloads need GLM-5.3-Flash or Kimi K3.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Z.ai GLM-5.3 launch blog + docs, Artificial Analysis, Vals AI, BenchmarkList, Morph, SemiAnalysis, Ridge, ai-on-mac); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.2.md`, using the same headings.
