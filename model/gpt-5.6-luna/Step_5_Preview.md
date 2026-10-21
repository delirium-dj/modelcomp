# GPT-5.6 Luna — findings by Step 5 Preview

- Source: OpenAI / GPT-5.6 Luna (`openai/gpt-5.6-luna`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's fastest, most cost-efficient GPT-5.6 tier — SWE-bench Verified 93.0% (Vals) and GPQA Diamond 92.3% at $0.20/$1.20 after the 2026-07-30 80% price cut, with a 1.05M window whose deep-window retrieval (MRCR 41.3%) badly lags its nominal size.
- **Provider / access:** OpenAI API (Responses API with Programmatic Tool Calling + multi-agent beta), ChatGPT (Plus and higher can select Luna), Codex; OpenRouter (`openai/gpt-5.6-luna`), OpenCode Zen (`opencode/gpt-5.6-luna`).
- **Release / knowledge:** GA 2026-07-09 with the GPT-5.6 family (llm-stats lists July 2026); knowledge cutoff not published.
- **IDs:** `openai/gpt-5.6-luna` (OpenAI/OpenRouter), `opencode/gpt-5.6-luna` (Zen).
- **Context window:** 1,050,000 total (llm-stats 1.1M; BenchLM 1.05M); 128K max output (folder meta).
- **Modalities:** text and image in; text out; reasoning (low/medium/high/max effort); tool calls; Programmatic Tool Calling (ZDR-compatible).
- **Pricing (as of 2026-10-21):** $0.20/$1.20 per 1M in/out, cached $0.02 (folder meta) — after OpenAI's 2026-07-30 80% Luna price reduction from the $1/$6 launch rate; cache writes billed 1.25x uncached input, cache reads 90% off.
- **Architecture:** proprietary; parameter count not published.

### Raw benchmarks found

OpenAI GPT-5.6 launch post (openai.com/index/gpt-5-6, 2026-07-09, Luna column) + Artificial Analysis / Vals AI / ARC Prize figures via BenchLM:

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI); **79.0%** (Vals AI via BenchLM)
- BrowseComp: **83.3%** (OpenAI)
- GDPval-AA v2: **1,591.8 Elo** (OpenAI); **1,582 Elo / 48.0%** normalized (Artificial Analysis via BenchLM)
- Agents' Last Exam: **50.3%** (OpenAI)
- OSWorld 2.0: **45.6%** (OpenAI)
- CyberGym: **77.9%** (OpenAI via BenchLM); ExploitGym: **12.4%** (OpenAI)
- Toolathlon: **53.4%** (OpenAI via BenchLM)
- APEX-Agents (AA): **35.8%** (Artificial Analysis via BenchLM)
- AA Agentic Index: **42.7%** (Artificial Analysis via BenchLM)
- AutomationBench: **14.9%** (OpenAI) — weak
- Terminal-Bench 3.0: **14.3%** (Terminal-Bench leaderboard via BenchLM)
- ApprenticeBench: **7%** (NeoCognition via BenchLM); MazeBench: **0%** (MazeBench via BenchLM)
- Tau3-Banking / Tau2-Bench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI); **91.1%** (Artificial Analysis); **91.7%** (Vals AI)
- Artificial Analysis Intelligence Index: **51.2** (OpenAI, v4.1) — above the mid band
- FrontierMath v2: **78.6%** Tiers 1–3 / **58.5%** Tier 4 (OpenAI) — strong math
- ARC-AGI-1: **88.0%** / ARC-AGI-2: **59.5%** (ARC Prize semi-private via BenchLM)
- AA-HLE: **39.5%** (Artificial Analysis via BenchLM)
- HealthBench Professional: **55.7%** / HealthBench Hard: **32.0%** (OpenAI + GPT-5.6 system card)
- AA-LCR (long-context reasoning): **83.7%** (Artificial Analysis via BenchLM)
- CritPt: **20.6%** (Artificial Analysis via BenchLM)
- AA-Omniscience: Accuracy **42.7%**, Hallucination Rate **92.6%** (Artificial Analysis via BenchLM) — extreme hallucination outlier
- MMLU-Pro (Vals): **86.0%** (Vals AI via BenchLM)

Coding:

- SWE-bench Verified (Vals): **93.0%** (Vals AI via BenchLM)
- Terminal-Bench 2.1: **84.7%** (listed above)
- DeepSWE v1.1: **67.2%** (OpenAI)
- SWE-bench Pro: **62.7%** (OpenAI)
- FrontierCode 1.1 Extended: **55.1%** (Cognition/Devin via BenchLM)
- AA-SciCode: **53.6%** (Artificial Analysis via BenchLM)
- VulcanBench v3: **85.5%** (VulcanBench via BenchLM)
- AA Coding Index: **71.5%** (Artificial Analysis via BenchLM — frontier ref 70%+)
- CursorBench 3.2: **61.1%** / CursorBench 4.0: **35.9%** (Cursor evals via BenchLM)
- LiveCodeBench / Vibe Code Bench: no verified public score found

Long context:

- OpenAI MRCR v2 8-needle: **41.3%** at 256K–512K and **41.3%** at 512K–1M (OpenAI) — deep-window retrieval is a major weakness despite the 1.05M window
- GraphWalks BFS: **81.3%** at 256K / **51.2%** at 1M (OpenAI); AA-LCR 83.7% (Artificial Analysis)
- No RULER figure published.

Multimodal extras (traceability): MMMU-Pro 78.4% (79.5% w/ tools, OpenAI / AA 78.6%); gdp.pdf 22.7% (OpenAI); ExtractBench 91.16%, ParseBench 68.34% (LlamaIndex).

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 84.7%, BrowseComp 83.3%, GDPval 1,591.8 Elo and Agents' Last Exam 50.3% are all strong-to-frontier; capped by AutomationBench 14.9%, Toolathlon 53.4%, APEX-Agents 35.8%, AA Agentic Index 42.7% and zero Tau/Claw numbers.
- **Reasoning: 90/100.** GPQA Diamond 92.3%, AA Intelligence Index 51.2, FrontierMath v2 T4 58.5% and ARC-AGI-2 59.5% are frontier-adjacent; capped by HLE 39.5% (just under the 40% frontier ref), CritPt 20.6% and the extreme 92.6% AA-Omniscience hallucination rate.
- **Context window: 85/100.** 1.05M nominal window sits in the ≥1M tier, but OpenAI's own MRCR v2 8-needle retrieval is only 41.3% at 256K–512K and 512K–1M with GraphWalks 1M at 51.2% — measured deep-window retrieval is far below the ≥98% bar, pulling the score to the bottom of the band.
- **Multimodal: 68/100.** Text + image input with text out (image-in tier 60–70); MMMU-Pro 78.4% is solid image reasoning; no video/audio input and no non-text output.
- **Coding: 88/100.** SWE-bench Verified 93.0% (Vals) and Terminal-Bench 2.1 84.7% are frontier-band, AA Coding Index 71.5% clears the 70%+ ref, and AA's Coding Agent Index places it above Opus 4.8; capped by SWE-bench Pro 62.7%, DeepSWE 67.2% and CursorBench 4.0 35.9%.
- **Cost efficiency: 97/100.** $0.20/$1.20 with $0.02 cached input after the 80% July price cut sits inside the ~$0.10/$0.20 ≈ 97–99 reference band; frontier-adjacent scores at ~1/25th flagship token prices make it the value standout of the GPT-5.6 family.
- **Overall Score: 83/100.** Mean of (84 + 90 + 85 + 68 + 88) / 5 = 83.0 → 83. Best fit: high-volume coding and math workloads where frontier accuracy at budget prices matters — avoid deep-window (512K+) retrieval-critical tasks given the 41.3% MRCR.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (OpenAI GPT-5.6 launch post + official Luna column, Artificial Analysis/Vals AI/ARC Prize/VulcanBench/Cursor figures via BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
