# Claude Haiku 4.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Haiku 4.5 (`anthropic/claude-haiku-4.5`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked against Anthropic's official model page + launch post plus five independent trackers (BenchLM, BenchmarkList, Vals AI, APX, LLM Stats). Prior figures held up: 200K context, $1/$5 per 1M, SWE-bench Verified 73.3% (vendor), AA-LCR 74.3%, HLE 10.4%, τ²-Bench Telecom 54.7%, Terminal-Bench Hard 27.3%, IFBench 54.3%, GPQA 67.2%, SciCode ~42–43%. New datapoints found: MCP Atlas 40.2%, BFCL 68.7%, MMLU-Pro 78.7–80.0%, AIME 2025 83.7%, Terminal-Bench 2.1 43.8–49.4%, SWE-bench (Vals harness) 66.6%, LiveCodeBench 41.2%, Vibe Code Bench v1.1 11.4%, MMMU Pro 46.1%. Conflicting numbers surfaced: SWE-bench Verified 73.3% (Anthropic) vs 66.6% (Vals) vs 69.8% (OpenAI harness); GPQA Diamond 72.2% (Vals) vs 67.2% (Epoch); AA Intelligence Index 29.58 (BenchmarkList) vs 16.9 (prior report). Distinguish from Claude Haiku 3.5 (2024-10-22, 200K) and Claude Haiku 5.5 (2026-10-07, $0.10/$0.50 first-100K tier).

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's fastest and most cost-efficient model — near-frontier intelligence at a fraction of larger Claude models' cost and latency, matching Claude Sonnet 4 on coding, computer-use and agent tasks (surpassing Sonnet 4 at some computer-use tasks). Brought extended thinking to the Haiku line for sub-agents and scaled deployment.
- **Provider / access:** Anthropic API (Claude API, Bedrock, Vertex AI, Microsoft Foundry), OpenRouter, Vercel AI Gateway, DeepInfra. Not open weights.
- **Release / knowledge:** Released 2025-10-15; knowledge cutoff February 2025 (LLM Stats).
- **IDs:** `claude-haiku-4-5` (Anthropic API); `anthropic/claude-haiku-4.5` (OpenRouter); OpenCode Zen tracks it as `opencode/claude-haiku-4.5`. No Zen Free ID.
- **Context window:** 200K tokens input / 64K max output (Anthropic, Vals AI, LLM Stats).
- **Modalities:** text and image in; text out. Vals AI additionally lists file/document input; video not supported. Extended thinking (controllable depth), tool use, bash, web search and computer-use tools.
- **Pricing (as of 2026-10-11):** **$1 / $5 per 1M** in/out (cached input ~$0.10/1M per BenchLM).
- **Architecture:** proprietary decoder-only, efficiency tier. Not released.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **54.7%**; Tau3-Banking: **9.3%**; Terminal-Bench Hard: **27.3%**; Terminal-Bench 2.1: **49.4%** (BenchmarkList) / **43.8%** (Vals) / vendor Terminus-2 **40.2–41.8%**; IFBench: **54.3%**; MCP Atlas: **40.2%**; BFCL: **68.7%**; Agentic Index: **8.0**; GDPval-AA: **915 Elo**
- Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **67.2%** (Epoch) / **72.2%** (Vals); HLE: **10.4%**; AA-LCR: **74.3%**; MMLU-Pro: **78.7%** (Vals) / **80.0%** (BenchmarkList); AIME 2025: **83.7%**; CritPt: **0.0%**; Artificial Analysis Intelligence Index: **29.58** (BenchmarkList) — prior report listed **16.9** (index/version conflict)
- AA-Omniscience Accuracy **18.0%** (reasoning)

Coding:

- **SWE-bench Verified 73.3%** (Anthropic, 50-trial average) vs **66.6%** (Vals harness) vs **69.8%** (OpenAI harness) vs **0.67** (APX) — harness disagreement
- SciCode: **43.3%**; Coding Index **43.9**; LiveCodeBench: **41.2%**; Vibe Code Bench v1.1: **11.4%**; ProgramBench 0.0% (Vals); SWE-PRBench 0.153 (BenchmarkList) — mixed
- DeepSWE: **no verified public score found**

Long context:

- 200K-token window documented; AA-LCR **74.3%** is the strongest long-context figure found; extended needle-in-a-haystack **78.8%**; **no MRCR/RULER/GraphWalks retrieval score** — **no verified public score found**.

Multimodal:

- MMMU Pro **46.1%**; Design Arena **1167**; ALL Bench Multimodal **30.1%** — text + image input only, no audio/video.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench Telecom 54.7%, IFBench 54.3%, MCP Atlas 40.2% and BFCL 68.7% are mid; Terminal-Bench Hard 27.3% and Tau3-Banking 9.3% are weak, and the low Agentic Index (8.0) / GDPval-AA (915 Elo) cap it despite the strong coding/computer-use tool support.
- **Reasoning: 68/100.** GPQA 67.2–72.2%, MMLU-Pro ~79% and AA-LCR 74.3% are solid for the tier, but HLE 10.4% and a mid Intelligence Index (29.58 new / 16.9 prior scale) are far below frontier.
- **Context window: 70/100.** 200K tokens = 70 on the methodology's 200K–500K scale.
- **Multimodal: 68/100.** Text and image input, text output (+image band = 60–70); Vals also lists file/document input; no audio/video documented.
- **Coding: 76/100.** SWE-bench Verified 73.3% (vendor) is strong for the class, but the independent Vals harness reads 66.6%, and LiveCodeBench 41.2% and Vibe Code Bench 11.4% are weak on the exact mid-band signals the methodology names; SciCode 43.3% and Coding Index 43.9 confirm the spread — lowered from 78 to reflect it.
- **Cost efficiency: 88/100.** $1 / $5 per 1M is near the $1.25/$4.25 (~88) reference — good value for near-Sonnet-4 coding capability.
- **Overall Score: 69/100.** (62 + 68 + 70 + 68 + 76) / 5 = 68.8 → 69. Best fit: fast, cheap sub-agents and high-volume coding/computer-use assistance.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: public internet research (Anthropic official model page + launch post; BenchLM; BenchmarkList; Vals AI; APX; LLM Stats). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_5.md`, using the same headings.
