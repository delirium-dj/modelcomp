# GPT 5.4 Mini — findings by Big Pickle

- Source: OpenAI (`opencode/gpt-5.4-mini`, API model `gpt-5.4-mini`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Mini
- **Short description:** OpenAI's strongest small model, released 2026-03-17 alongside GPT-5.4 nano — GPT-5.4's capabilities compressed into a faster, cheaper model for high-volume workloads, running more than 2× faster than GPT-5 mini and approaching full GPT-5.4 on SWE-Bench Pro and OSWorld-Verified. Designed to be delegated to: it consumes only ~30% of a GPT-5.4 Codex quota and is recommended as a Codex subagent.
- **Provider / access:** OpenAI API `gpt-5.4-mini` (snapshot `gpt-5.4-mini-2026-03-17`), supporting text and image input, tool use, function calling, web search, file search, computer use and skills; `reasoning.effort` none (default), low, medium, high, xhigh; Codex app/CLI/IDE/web; Microsoft Azure; OpenRouter; OpenCode Zen `opencode/gpt-5.4-mini`.
- **Release / knowledge:** released 2026-03-17; knowledge cutoff 2025-08-31.
- **IDs:** `opencode/gpt-5.4-mini` (Zen, standard pricing); upstream `gpt-5.4-mini`.
- **Context window:** 400,000 tokens, 128,000 max output (OpenAI API model page).
- **Modalities:** text and image input; text output; reasoning effort none–xhigh; tool calls; computer use.
- **Pricing (as of 2026-10-02):** $0.75 in / $4.50 out per 1M; cached input $0.075; batch ≈50%; regional-processing (data-residency) endpoints carry a 10% uplift. Artificial Analysis measures $0.41 cost per task at xhigh and 212 t/s output speed.
- **Architecture:** proprietary; weights not published. Marked deprecated on Artificial Analysis in favour of GPT-5.6 Terra.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (telecom): **93.4%** at xhigh (OpenAI launch table); **83.3%** on Artificial Analysis
- MCP Atlas: **57.7%**; Toolathlon: **42.9%** (OpenAI launch table)
- Terminal-Bench 2.0: **60.0%**; Terminal-Bench Hard: **52.3%** (AA xhigh)
- OSWorld-Verified: **72.1%** (within 3 points of full GPT-5.4's 75.0%)
- IFBench: **73.3%** at xhigh / **38.8%** non-reasoning (Artificial Analysis)
- GDPval-AA: **25.0%** at xhigh / **3.8%** non-reasoning (Artificial Analysis)
- Artificial Analysis Agentic Index: **17.9**; Intelligence Index: **24.1** (xhigh)

Reasoning / knowledge:

- GPQA Diamond: **88.0%** at xhigh (OpenAI); **87.5%** (AA xhigh); 82.3% medium; 60.6% non-reasoning
- HLE: **28.2%** without tools / **41.5%** with tools at xhigh (OpenAI); **28.1%** on AA
- CritPt: **10.0%** at xhigh / **0.0%** non-reasoning (Artificial Analysis)
- SciCode: **52.1%** at xhigh (Artificial Analysis)
- AA-Omniscience Accuracy / Non-Hallucination Rate: **37.5% / 9.8%** at xhigh (Artificial Analysis)

Coding:

- SWE-Bench Pro (public): **54.4%** at xhigh — within 3.3 points of full GPT-5.4's 57.7% and +8.7 over GPT-5 mini
- Artificial Analysis Coding Index: **56.1** at xhigh
- SciCode: **52.1%** (Artificial Analysis); Terminal-Bench 2.0 60.0%
- SWE-bench Verified / SWE-Pro / LiveCodeBench: no verified public score found for this ID

Long context:

- OpenAI MRCR v2 8-needle: 64K–128K **47.7%**, 128K–256K **33.6%** (OpenAI launch table — a steep drop from GPT-5.4's 86.0%/79.3%)
- GraphWalks: BFS 0–128K **76.3%**, parents 0–128K **71.5%** accuracy (GPT-5.4: 93.1%/89.8%)
- AA-LCR: **77.0%** at xhigh (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench Telecom 93.4%, IFBench 73.3% and OSWorld-Verified 72.1% (nearly matching full GPT-5.4) show a capable high-volume tool loop, with Terminal-Bench 2.0 60.0% and Terminal-Bench Hard 52.3% solid; capped by Toolathlon 42.9%, MCP Atlas 57.7%, a GDPval-AA of 25.0% and an Agentic Index of only 17.9.
- **Reasoning: 74/100.** GPQA Diamond 87.5–88.0% at xhigh is close to full GPT-5.4 and remarkable at this price point, with SciCode 52.1%; capped by HLE 28.1–28.2% and CritPt 10.0%, and by the steep non-reasoning collapse (GPQA 60.6%, HLE 5.9%).
- **Context window: 70/100.** The 400,000-token window is real, but its measured retention is the weak link: MRCR v2 8-needle falls to 47.7% at 64K–128K and 33.6% at 128K–256K, versus 86.0%/79.3% for GPT-5.4, with GraphWalks BFS 76.3% — long context is available but not reliable.
- **Multimodal: 78/100.** Text and image input with text output and measured vision scores — MMMU-Pro 76.6% (78.0% with Python) and OmniDocBench 1.5 edit distance 0.1263 — that trail full GPT-5.4 (81.2%/81.5%, 0.109) by a small margin.
- **Coding: 76/100.** SWE-Bench Pro 54.4% at xhigh, within 3.3 points of full GPT-5.4 and the standout result for this tier, plus an AA Coding Index of 56.1 and Terminal-Bench 2.0 60.0%; capped by the absence of any SWE-bench Verified or LiveCodeBench figure for this ID.
- **Cost efficiency: 92/100.** $0.75/$4.50 per 1M with $0.075 cache reads, $0.41 measured cost per task at xhigh, 212 t/s output speed, more than 2× GPT-5 mini's speed, ~30% of a GPT-5.4 Codex quota, and half-price batch — near the efficiency floor for a model of this class.
- **Overall Score: 74.0/100.** Half-up mean of the five quality dims. Best fit as the default high-volume workhorse and Codex subagent for tool-using, coding and vision tasks under budget pressure; avoid it for long-context retrieval or expert reasoning, where GPT-5.4 or the 5.6 line is the right call.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.4 mini/nano launch page, OpenAI GPT-5.4 mini API model docs, Artificial Analysis release and provider pages via OpenRouter, OpenTools); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.4.md`, using the same headings.

---