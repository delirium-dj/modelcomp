# GPT 5.4 Mini — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.4 mini (`openai/gpt-5.4-mini`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-4-mini`, 38 rows) computes an overall **53.38/100 (#82 of 972)** and confirms the deep pass: Terminal-Bench 2.0 60.0% (Vals 2.1 54.7%), OSWorld-Verified 72.1%, MCP Atlas 57.7%, GPQA 88% (AA 87.5%), HLE 41.5% (AA 28.1%), AA-LCR 77.0%, MMMU-Pro 76.6%. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked against the official OpenAI launch (openai.com/index/introducing-gpt-5-4-mini-and-nano/), Artificial Analysis (artificialanalysis.ai/models/gpt-5-4-mini), BenchLM (benchlm.ai/models/gpt-5-4-mini), BenchmarkList (benchmarklist.com/models/openai-gpt-5.4-mini/), Vals AI (vals.ai/models/openai_gpt-5.4-mini-2026-03-17), DataCamp (datacamp.com/blog/gpt-5-4-mini-nano), LLM Stats (llm-stats.com/models/gpt-5.4-mini) and AI Release Tracker (aireleasetracker.com/model/openai/gpt-5.4-mini). Net effect: now-public xhigh tool-use, reasoning, coding and vision figures replace the earlier non-reasoning-only capture — Tool use, Reasoning, Coding and Multimodal all revised upward; **Overall 73 → 75**. Conflicts logged inline: Terminal-Bench 2.0 60.0% (OpenAI/Vals) vs 44.9% (Vals harness re-score); τ²-bench Telecom 93.4% (OpenAI) vs 83.3% (AA/BenchmarkList); AA-LCR 37.0% (prior, non-reasoning) → 77.0% (xhigh); GDPval-AA non-reasoning 3.8% → xhigh 1095–1167 Elo.

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** The faster, cheaper mid-tier of the GPT-5.4 family — text and image input with strong reasoning, coding and tool use at reduced latency and cost, built for high-throughput chat, coding assistants and agent workflows at scale.
- **Provider / access:** OpenAI API, OpenRouter, Vercel AI Gateway (multi-provider). Not open weights.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff August 2025 (Aug 31, 2025 per Artificial Analysis).
- **IDs:** `gpt-5.4-mini` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.4-mini`. No Zen Free ID.
- **Context window:** 400K tokens total; max output **128K** (llm-stats.com, Vals AI).
- **Modalities:** text and image in; text out. Reasoning yes (incl. xhigh effort), tool use, structured outputs.
- **Pricing (as of 2026-10-11):** **$0.75 / $4.50 per 1M** in/out (cached input $0.075).
- **Architecture:** proprietary decoder-only, mid-tier. Not released.

### Raw benchmarks found

Agent / tool use (OpenAI launch; Artificial Analysis via BenchLM; Vals AI; BenchmarkList):

- Terminal-Bench 2.0: **60.0%** (xhigh, OpenAI) vs **44.9%** (Vals re-score, BenchmarkList) — conflict; Terminal-Bench 2.1 (Vals): **54.7%**; Terminal-Bench Hard (AA): **52.3%**
- τ²-bench (telecom): **93.4%** (OpenAI) vs **83.3%** (AA/BenchmarkList) — conflict; Tau3-Banking (AA): **25.6%**
- Tool-calling: MCP Atlas **57.7%** (OpenAI) / 56.7% (BenchmarkList); Toolathlon **42.9%**
- OSWorld-Verified (computer use): **72.1%**
- GDPval-AA: **1095** (AA) / **1,167** (BenchmarkList), 25.6% normalized (xhigh) — prior non-reasoning capture 3.8% superseded
- AA Agentic Index: **19.6** (xhigh); APEX-Agents-AA: **28.2%**; AA-IFBench: **73.3%** (xhigh)
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (OpenAI, xhigh); **87.5%** (AA); **83.1%** (Vals) — harness spread
- HLE: **41.5%** with tools / **28.2%** without tools (OpenAI); AA-HLE **28.1%**
- Artificial Analysis Intelligence Index: **24.1** (xhigh)
- AA-Omniscience Accuracy **37.5%** / Hallucination Rate **90.2%** (non-hallucination ≈9.8%) (xhigh)
- CritPt: **10.0%**; ARC-AGI-1 **63.7%**, ARC-AGI-2 **18.9%**; MMLU-Pro **84.6%** (Vals)
- FrontierMath v2 Tiers 1–3 **28.28%**, Tier 4 **2.08%**

Coding:

- SWE-bench Pro (Public): **54.4%** (OpenAI, xhigh); SWE-bench Verified: **73.0%** (Vals)
- Artificial Analysis Coding Index: **56.1** (xhigh); AA-SciCode: **52.1%**
- LiveCodeBench: **81.5%**; Vibe Code Bench v1.1: **47.97%**; FrontierCode 1.1 Main: **27.0%**; Terminal-Bench 4.0: **2.52%**
- DeepSWE: **no verified public score found**

Long context:

- 400K-token window (max output 128K). OpenAI MRCR v2 8-needle 64K–128K: **47.7%**; 128K–256K: **33.6%**
- Graphwalks BFS 0K–128K: **76.3%**; Graphwalks parents 0–128K: **71.5%**
- AA-LCR v1.1: **77.0%** (xhigh) — supersedes the prior 37.0% non-reasoning figure; RULER: **no verified public score found**

Multimodal:

- MMMU-Pro: **76.6%** (OpenAI) / **79.25%** (Vals); MMMU-Pro w/ Python: **78.0%**; AA-MMMU-Pro: **73.3%**
- OSWorld-Verified **72.1%** (screenshot/computer use); OmniDocBench 1.5 (no tools) edit distance **0.1263** (lower is better)

### Normalized scores (1–100)

- **Tool use: 68/100.** Now-public xhigh tool figures lift this band: τ²-bench Telecom 93.4% (https://openai.com/index/introducing-gpt-5-4-mini-and-nano/) and OSWorld-Verified 72.1% are strong, while Terminal-Bench 2.0 60.0% / Hard 52.3% (https://benchmarklist.com/models/openai-gpt-5.4-mini/) and GDPval-AA 1095 Elo (https://benchlm.ai/models/gpt-5-4-mini) sit in the mid band per methodology; the AA Agentic Index of 19.6 (https://artificialanalysis.ai/models/gpt-5-4-mini) keeps it below the top tier.
- **Reasoning: 79/100.** GPQA Diamond 88.0% (https://openai.com/index/introducing-gpt-5-4-mini-and-nano/) is near-frontier, but HLE 28.2% w/o tools and Intelligence Index 24.1 (https://artificialanalysis.ai/models/gpt-5-4-mini) stay in the mid band; HLE 41.5% with tools and AA-LCR 77.0% support a modest raise over the prior 78.
- **Context window: 80/100.** 400K tokens sits in the 200K–500K band (200K = 70, 500K = 85) (https://artificialanalysis.ai/models/gpt-5-4-mini).
- **Multimodal: 70/100.** Text and image input, text output (+image band = 60–70); MMMU-Pro 76.6% and OSWorld-Verified 72.1% put it at the top of that band, but no audio/video is documented (https://openai.com/index/introducing-gpt-5-4-mini-and-nano/).
- **Coding: 79/100.** SWE-bench Pro 54.4% (https://openai.com/index/introducing-gpt-5-4-mini-and-nano/), SWE-bench Verified 73.0% and LiveCodeBench 81.5% (https://www.vals.ai/models/openai_gpt-5.4-mini-2026-03-17) are solidly mid-tier; AA Coding Index 56.1 (https://artificialanalysis.ai/models/gpt-5-4-mini) caps it below the frontier.
- **Cost efficiency: 88/100.** $0.75 / $4.50 per 1M (https://openai.com/index/introducing-gpt-5-4-mini-and-nano/) is below the $1.25/$4.25 (~88) reference on input and slightly above on output; AA cost-per-task $0.45 is competitive (https://artificialanalysis.ai/models/gpt-5-4-mini).
- **Overall Score: 75/100.** (68 + 79 + 80 + 70 + 79) / 5 = 75.2 → 75. Best fit: high-volume production chat, coding assistance, computer-use and sub-agents where cost and latency matter.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (official OpenAI GPT-5.4 mini/nano launch table, Artificial Analysis, BenchLM, BenchmarkList, Vals AI, DataCamp, LLM Stats, AI Release Tracker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
