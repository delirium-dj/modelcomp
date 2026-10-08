# GPT-5.4 Mini — findings by Ling 3.1 Flash

- Source: OpenAI (`opencode/gpt-5.4-mini`; API `gpt-5.4-mini`; OpenAI API, Codex, ChatGPT, Azure, OpenAI Flex/Fast)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's March-2026 mini tier ("strongest mini model yet for coding, computer use, and subagents"; >2× faster than GPT-5.4) — OSWorld-Verified 72.1% (near GPT-5.4's 75.0%), τ²-Bench Telecom 93.4%, GPQA Diamond 88.0%, HLE 41.5% (w/tools), SWE-bench Pro 54.4%, MCP Atlas 57.7% — across a 400K context at $0.75/$4.50 per 1M ($0.41 per AA Intelligence Index task); AA Intelligence Index 24.1.
- **Provider / access:** OpenAI API (reasoning effort none-default/low/medium/high/xhigh; text+image input, tool use, function calling, web search, file search, computer use, skills), Codex (30% of GPT-5.4 quota; delegates to mini subagents), ChatGPT (Free/Go via Thinking; rate-limit fallback for others), Azure, OpenAI Flex (50%), Fast (2×); regional +10%. `noFreeId`.
- **Release / knowledge:** 2026-03-17; knowledge cutoff August 2025 (AA).
- **IDs:** `opencode/gpt-5.4-mini` / `gpt-5.4-mini`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 400K-token window and takes text and image input. (OpenAI's API docs page lists 28K max output; llm-stats lists 128K — unresolved.)
- **Context window:** 400,000 tokens in; max output 28K per the OpenAI API docs (llm-stats lists 128K).
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $0.75/$4.50 per 1M input/output; cached input $0.075/M (10%); Batch/Flex 50% ($0.375/$2.25); Fast 2× ($1.50/$9.00); blended ~$1.28/M (AA, 7:2:1); 232.3 tok/s (AA, #7 of 212).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Vendor (OpenAI launch, 2026-03-17; xhigh effort; vs GPT-5.4 xhigh / GPT-5.4 nano xhigh / GPT-5 mini high):

Agent / tool use:

- OSWorld-Verified (computer use): **72.1%** (vs 75.0% / 39.0% / 42.0%) — "approaches the performance of the larger GPT-5.4"
- τ²-Bench Telecom: **93.4%** (vs 98.9% / 92.5% / 74.1%)
- MCP Atlas: **57.7%** (vs 67.2% / 56.1% / 47.6%)
- Toolathlon: **42.9%** (vs 54.6% / 35.5% / 26.9%)
- Terminal-Bench 2.0: **60.0%** (vs 75.1% / 46.3% / 38.2%)
- SWE-bench Pro (Public): **54.4%** (vs 57.7% / 52.4% / 45.7%)

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (vs 93.0% / 82.8% / 81.6%)
- HLE: **41.5%** with tools / **28.2%** without (vs 52.1%/39.8% / 37.7%/24.3% / 31.6%/18.3%)
- MMMU-Pro: **76.6%** (78.0% with Python; vs 81.2%/81.5% / 66.1%/69.5% / 67.5%/74.1%)
- OmniDocBench 1.5 (no tools, edit distance — lower is better): **0.1263** (vs 0.109 / 0.2419 / 0.1791)

Long context:

- OpenAI MRCR v2 8-needle: **47.7%** at 64–128K; **33.6%** at 128–256K (vs 86.0%/79.3% / 44.2%/33.1% / 35.1%/19.4%) — weak needle retrieval
- GraphWalks BFS 0–128K: **76.3%**; parents 0–128K: **71.5%** (vs 93.1%/89.8% / 73.4%/50.8% / 73.4%/64.3%)

Independent (Artificial Analysis, xhigh unless noted; model deprecated — historical results only):

- Intelligence Index: **24.1** (#115 of 212; median 25); Coding Index: **56.1**; Agentic Index: **17.9**
- GPQA Diamond: **87.5%**; HLE: **28.1%**; IFBench: **73.3%**; τ²-Bench Telecom: **83.3%**
- AA-LCR: **77.0%**; GDPval-AA: **25.0%**; CritPt: **10.0%**; SciCode: **52.1%**; Terminal-Bench Hard: **52.3%**
- AA-Omniscience: accuracy **37.5%**, non-hallucination **9.8%**
- 230M output tokens per Intelligence Index (very verbose vs median 88M); $0.41 cost per Intelligence Index task; $1,437.80 to evaluate

### Normalized scores (1–100)

- **Tool use: 71/100.** OSWorld-Verified 72.1% (approaching GPT-5.4's 75.0%), τ²-Bench Telecom 93.4% and MCP Atlas 57.7% (vendor) / 56.7% (BenchmarkList) lead, with Toolathlon 42.9%, Terminal-Bench 2.0 60.0% and AA-LCR 77.0% supporting; Terminal-Bench 2.1 at 54.7% (vals.ai) / 60.7% (BenchmarkList), APEX-Agents-AA 28.2%, GDPval-AA 25.8% and the AA Agentic Index of 19.6 are weak, and SWE-bench Verified/DeepSWE were not captured.
- **Reasoning: 72/100.** GPQA Diamond 88.0% and HLE 41.5% (with tools) are near the frontier bands, with MMMU-Pro 76.6–78.0% supporting; ARC-AGI-2 at 18.9% (BenchmarkList), the AA Intelligence Index of 24.1 (xhigh), CritPt 10.0% and AA-Omniscience (37.5% accuracy, 9.8% non-hallucination) cap the score.
- **Context window: 75/100.** 400K-token window with AA-LCR 77.0% (xhigh) and GraphWalks BFS 76.3% at 0–128K; MRCR v2 at 47.7% (64–128K) and 33.6% (128–256K) shows weak needle retrieval, so this sits well below the 90+ band despite exceeding the 200K=70 anchor.
- **Multimodal: 68/100.** text/image in with text out — the +image-in band (60–70); MMMU-Pro 76.6–78.0% and OmniDocBench 0.1263 edit distance support the top of the band.
- **Coding: 70/100.** SWE-bench Pro 54.4%, the AA Coding Index of 56.1 (xhigh), Terminal-Bench 2.0 60.0% and SciCode 52.1% are mid-tier; SWE-bench Verified, LiveCodeBench and DeepSWE were not captured, and this is explicitly a subagent/high-volume tier rather than a peak-coding model.
- **Cost efficiency: 90/100.** $0.75/$4.50 per 1M (blended ~$1.28/M at 3:1) with 10%-of-input cache reads ($0.075/M) and half-rate Batch/Flex ($0.375/$2.25) sits between the ~$0.10/$0.20≈97–99 and ~$1.25/$4.25≈88 anchors, at $0.41 per AA Intelligence Index task.
- **Overall Score: 71/100.** (71+72+75+68+70)/5 = 71.2 → 71 — a fast, cheap mini tier (OSWorld 72.1%, τ²-Telecom 93.4%, GPQA 88.0%, HLE 41.5% w/tools at $0.75/$4.50, 232 tok/s) whose AA Intelligence Index (24.1), Agentic Index (17.9–19.6), GDPval-AA (25.8%) and MRCR retrieval (33.6–47.7%) keep it below the frontier.

---

## Update 2026-10-08 (6-day re-research)

BenchLM, BenchmarkList and vals.ai rows found:

- Coding: LiveCodeBench (vals.ai) **81.5%** and SWE-bench (vals.ai) **73.0%** — strong for the tier; Vibe Code Bench v1.1 **47.97%**, FrontierCode 1.1 Main **27.0%**, AA-SciCode 52.1%, LiveCodeBench-Plus 29.6%, ProgramBench 16.4% raw pass rate, Code Migration 12.9%, IOI 6.4%, VeriContest 1.1%
- Agentic: Terminal-Bench 2.1 **54.7%** (vals.ai) / **60.7%** (BenchmarkList) — mid-band; Terminal-Bench Hard 52.3% (rank 9/326); APEX-Agents-AA 28.2%, APEX-Agents 37.5%, AA Agentic Index 19.6, GDPval-AA 25.8% / 1095 Elo, τ³-Banking 25.6%, ITBench-AA 35.2%, MCP Atlas 56.7% (rank 45/48), AgentCIBench 60.7%, PinchBench 76.2%, Agentic Skills Evaluation Framework 84.5%, Hindsight Memory 86.4%, TeamBench 33.3% (rank 2/13), Momento 75.2% (rank 3/5)
- Reasoning: ARC-AGI-2 **18.9%** (rank 47/99 — weak for the era), ARC-AGI-1 63.7%, CalBench 1.49 (rank 1/7)
- Other: Vals Index accuracy 52.42% ± 2.05, 1050s latency, $0.66/test; vals.ai lists max output 128K (resolves the 28K/128K spec discrepancy in favor of 128K); WebDev Arena 1397.24; ALE-Bench 1188.58 (rank 12/83)
- **Scores revised**: Tool 72→71 (TB 2.1 54.7–60.7% and APEX-Agents-AA 28.2% are mid/weak), Reasoning 73→72 (ARC-AGI-2 18.9%), Overall 72→71 ((71+72+75+68+70)/5 = 71.2)

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (OpenAI GPT-5.4 mini/nano launch + API docs, Artificial Analysis, OpenRouter, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_4_Mini.md`, using the same headings.
