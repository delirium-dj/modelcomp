# North Mini Code — findings by DeepSeek 4.1 Flash

- Source: Cohere / North Mini Code 1.0 (`cohere/north-mini-code`; OpenCode route `opencode/north_mini_code`; upstream `CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Vendor re-confirmed as **Cohere** (not a stealth model): Cohere blog + HF card, Artificial Analysis, BenchmarkList, BenchLM, BenchLeader, LLM Stats and OpenRouter all agree on Cohere as creator. Independent sources re-read this pass: BenchLM (`benchlm.ai/models/north-mini-code`, updated 2026-10-12), **BenchLeader (`benchleader.com/models/north-mini-code`, data as of 2026-10-13)** and **LLM Stats (`llm-stats.com/models/north-mini-code-1.0`)** — the last two are new to this pass — plus Artificial Analysis (`artificialanalysis.ai/models/north-mini-code`), BenchmarkList (`benchmarklist.com/models/cohere-north-mini-code/`), OpenRouter (`openrouter.ai/cohere/north-mini-code:free`) and Sebastian Raschka's release teardown. BenchLeader adds an independent cross-vendor normalization (BenchLeader Index **46.0 ±6.8, #479/760**; Reasoning 42, Agents & tools 43, Knowledge 40, Instruction following 58, Long context 43, Composite 41) that is directionally consistent with the existing conservative band. Most first-pass figures hold; conflicts persist on the Artificial Analysis Intelligence Index (9.9 live BenchLeader/BenchLM vs 10 prior AA render vs 19.8 BenchmarkList), AA-LCR (37.3% vs 32.3% index subscore), GDPval-AA (543 Elo BenchmarkList vs 0.0% normalized BenchLeader/BenchLM) and IFBench (57.5% BenchLeader vs 57.6% BenchLM). None of the six dimension scores moves; Overall is unchanged at 53.

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's inaugural North-family open-weights coding model — a 30B-A3B sparse MoE built for agentic software engineering, code generation and terminal tasks, released 2026-06-09 under Apache 2.0.
- **Provider / access:** Free on OpenCode Zen (`opencode/north_mini_code`; OpenRouter also lists `cohere/north-mini-code` / `north-mini-code:free`) and on Hugging Face (`CohereLabs/North-Mini-Code-1.0`, bf16/fp8/w4a16), OpenRouter and Cohere Model Vault. Chat-completions style; supports interleaved thinking and JSON-schema tool calls.
- **Release / knowledge:** Released 2026-06-09 (Cohere blog + HF card + Artificial Analysis + LLM Stats + BenchLeader; some catalogues — OpenRouter/BenchmarkList — stamp the blog repost as 2026-06-17). Knowledge cutoff not published.
- **IDs:** `opencode/north_mini_code`; OpenRouter `cohere/north-mini-code`; upstream `CohereLabs/North-Mini-Code-1.0`.
- **Context window:** 256K tokens (256,000) with 64K max output — BenchLeader and OpenRouter both render "256k" and the HF model card / recommended OpenCode config list `context: 256000, output: 64000` (Artificial Analysis FAQ renders this as "260k").
- **Modalities:** Text in / text out only (code-focused). Reasoning (interleaved thinking, best left on), tool calls, JSON/structured outputs. No image/audio/video (AA: "does not support image input").
- **Pricing (as of 2026-10-11):** **$0 input / $0 output** per 1M on the free routes (OpenRouter, BenchmarkList and Artificial Analysis all list $0.00/$0.00; BenchLeader shows no blended price for the free config).
- **Architecture:** Open-weights Mixture-of-Experts, 30B total / 3B active parameters, Apache 2.0. 49-layer parallel transformer, 128 experts selecting top-8, 3:1 sliding-window (4,096) to global attention. Runs locally via transformers or vLLM (Cohere Melody parser).

### Raw benchmarks found

> Every number below is traceable to a named source; the vendor run uses the SWE-agent v1.1.0 harness (SWE-Bench), a ReAct single-terminal-tool harness (Terminal-Bench v2) and Terminus-2 (Terminal-Bench Hard). Live re-check (2026-10-11) adds BenchLeader and LLM Stats; it is mostly congruent with the 2026-10-03 pass.

Agent / tool use:

- Terminal-Bench 2.1: **35.6%** (BenchLeader, #143; BenchmarkList, #104/194, 47th percentile) — https://www.benchleader.com/models/north-mini-code and https://benchmarklist.com/models/cohere-north-mini-code/
- Terminal-Bench Hard: **31.1%** (BenchLeader, #107; BenchmarkList, #72/326, 78th percentile) — https://www.benchleader.com/models/north-mini-code
- Terminal-Bench 4.0 (AA): **0.5%** (BenchLeader, #132) — new this pass; the near-zero frontier-harness result — https://www.benchleader.com/models/north-mini-code
- Terminal-Bench v2 (2.0): **36.0%** (Cohere release table via Raschka) — https://sebastianraschka.com/blog/2026/north-mini-code-agentic-coding.html
- Tau2-Bench Telecom: **37.4%** (BenchLeader, #225; BenchLM lists the same 37.4%)
- Tau3-Banking: **6.4%** (BenchLeader, #164; BenchmarkList, #123/176, 30th percentile)
- GDPval-AA: **CONFLICT** — BenchmarkList **543 Elo** (#227/352, 36th percentile; field leader O-5 1861) vs BenchLeader/BenchLM normalized **0.0%** (#210) vs AA Intelligence-Index subscore **533.97 Elo** (normalized 1.7%)
- AA-Briefcase: **207 Elo** (BenchmarkList, #114/145, 22nd percentile; rubric pass 6.2%) — changed from the 240 ELO logged on 2026-10-03
- DuelLab GameBench 2: **27.0** (BenchmarkList, #45/48, 6th percentile)

Reasoning / knowledge:

- GPQA Diamond: **75.7%** (BenchLeader, #240; BenchmarkList, #170/468, 64th percentile; BenchLM lists the same 75.7%)
- HLE: **11.1%** (BenchLeader, #289; BenchmarkList, #176/478, 63rd percentile; BenchLM 11.1%) / **10.0%** index subscore (AA Intelligence Index breakdown)
- IFBench: **57.5%** (BenchLeader, #135) / **57.6%** (BenchLM, via Artificial Analysis) — 0.1-pt render conflict
- CritPt: **0.3%** (BenchLeader, #259; BenchLM / AA Intelligence Index breakdown)
- AA-Omniscience: Index **−48.6** (#363), accuracy **18.9%** (#312), non-hallucination **16.8%** (#315) — BenchLM renders the same index/accuracy plus hallucination rate **83.2%** (the complement of 16.8%)
- Artificial Analysis Intelligence Index: **CONFLICT** — BenchLeader and BenchLM both render **9.9** (BenchLeader #373/760, v4.3.2); live AA page renders **10** (#41/141); BenchmarkList renders **19.8** (#167/427, 61st pct). Likely an AA methodology-version mismatch
- ECI: **112.41** (first-pass log; no longer verified live — treat as historical)

Coding:

- SWE-bench Verified: **67.6%** (Cohere release table via Raschka, SWE-agent harness)
- SWE-bench Pro: **40.2%** (Cohere release table via Raschka)
- SciCode: **38.8%** (BenchLeader, #174; BenchmarkList, #128/296, 57th pct; BenchLM 38.8%) / **38.2%** (AA Intelligence Index breakdown)
- LiveCodeBench v6: **70.3** (Cohere release table via Raschka) — rival Qwen3.6-35B-A3B scores 80.4
- DuelLab GameBench 2: **27.0** (BenchmarkList, #45/48)

Long context:

- AA-LCR: **37.3%** (BenchLeader, #354; BenchmarkList, #232/408, 43rd percentile; BenchLM 37.3%) — conflict with **32.3%** index subscore (AA Intelligence Index breakdown)
- Context is catalogued at 256K (64K out); no RULER/MRCR retrieval curve published.

Multimodal:

- None — text in / text out only (Artificial Analysis: does not support image input; not multimodal).

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.1 35.6% and TB-Hard 31.1% sit below the mid band (TB2.1 45–60% → 50–70), Tau3-Banking 6.4% is under the 10–25% mid reference, GDPval-AA is far under the ~900–1200 mid reference (543 Elo by BenchmarkList, 0.0% normalized by BenchLeader/BenchLM) and the frontier Terminal-Bench 4.0 result is 0.5%; only Terminal-Bench Hard lands at the 78th percentile and BenchLeader's Agents & tools index (43) stays below its 50 average. Agentic-for-its-size via SciCode, but the terminal/agent numbers cap it — https://benchmarklist.com/models/cohere-north-mini-code/ and https://www.benchleader.com/models/north-mini-code
- **Reasoning: 60/100.** GPQA Diamond 75.7% is the bright spot (upper mid → 55–65 band), while HLE 11.1% and the AA Intelligence Index 9.9–19.8 (conflicting renders) hold it mid-band; BenchLeader's independent Reasoning 42 / Knowledge 40 indices corroborate a below-average reasoning profile — https://benchmarklist.com/models/cohere-north-mini-code/ and https://artificialanalysis.ai/models/north-mini-code
- **Context window: 73/100.** 256K total is the 200K–500K tier (200K = 70), interpolating to ~73; 64K max output noted as a caveat, not a separate score — https://www.benchleader.com/models/north-mini-code
- **Multimodal: 15/100.** Text-in / text-out only (code-specialised); no image, audio or video input — https://artificialanalysis.ai/models/north-mini-code
- **Coding: 70/100.** SWE-bench Verified 67.6% is solid mid-tier and LiveCodeBench v6 70.3 is moderate, but SciCode 38.2–38.8% sits just under the 40% mid line and SWE-bench Pro 40.2% plus Terminal-Bench 2.1 35.6% cap it below the frontier coding band — https://sebastianraschka.com/blog/2026/north-mini-code-agentic-coding.html and https://benchmarklist.com/models/cohere-north-mini-code/
- **Cost efficiency: 100/100.** $0 input / $0 output on the free HF/OpenRouter/OpenCode routes — https://openrouter.ai/cohere/north-mini-code:free
- **Overall Score: 53/100.** (48 + 60 + 73 + 15 + 70) / 5 = 53.2 → **53**. Best-fit: a free, self-hostable Apache-2.0 coding sub-agent for terminal edits and code generation when mid-tier agent accuracy is acceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-11
- Method: independent public internet research (Cohere blog + HF model card, Artificial Analysis, BenchmarkList, BenchLM, BenchLeader, LLM Stats, OpenRouter, Sebastian Raschka). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
