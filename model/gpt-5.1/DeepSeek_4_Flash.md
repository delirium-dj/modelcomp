# GPT 5.1 — findings by DeepSeek 4 Flash

- Source: OpenAI (`opencode/gpt-5.1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's November-2025 frontier reasoning model (GPT-5.1 Thinking), the direct predecessor of GPT-5.2. Strong on coding and tool use; its "warmer" chat tone carried into GPT-5.2 Instant.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.1`; OpenAI API `gpt-5.1` (Responses + Chat Completions); ChatGPT; `gpt-5.1-chat-latest` is the Instant variant.
- **Release / knowledge:** 2025-11-13. Knowledge cutoff September 30, 2024.
- **IDs:** `opencode/gpt-5.1` (paid tier; no Free ID on Zen)
- **Context window:** 272K total (Artificial Analysis).
- **Modalities:** text and image input; text output. Reasoning: yes. Tool calls, Python, search.
- **Pricing (as of 2025-11-13):** `gpt-5.1` $1.25 per 1M input / $10 per 1M output (90% cached-input discount). Paid only.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Tau2-bench Telecom: **95.6%**; Tau2-bench Retail: **77.9%**
- BrowseComp: **50.8%**
- Scale MCP-Atlas: **44.5%**
- Toolathlon: **36.1%**
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (no tools): **88.1%**
- HLE (no tools): **25.7%**; HLE (w/ search + Python): **42.7%**
- AIME 2025 (no tools): **94.0%**; HMMT Feb 2025: **96.3%**; MMMLU: **89.5%**
- FrontierMath Tier 1–3: **31.0%**; Tier 4: **12.5%**
- ARC-AGI-1 (Verified): **72.8%**; ARC-AGI-2 (Verified): **17.6%**
- Artificial Analysis Intelligence Index: **25** (#122 / 224)
- Omniscience Accuracy / Hallucination Rate: not publicly available (AA)

Coding:

- SWE-bench Verified: **76.3%**
- SWE-Bench Pro (Public): **50.8%**
- SWE-Lancer IC Diamond: **69.7%**
- LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- OpenAI MRCRv2 8-needle 128k–256k: **29.6%** (4k–8k: 65.3%; 64k–128k: 36.0%)
- GraphWalks BFS <128k: **76.8%**; GraphWalks parents <128k: **71.5%**
- BrowseComp Long Context 128k: **90.0%**

Vision:

- MMMU-Pro (no tools): **79.0%**; CharXiv reasoning (w/ Python): **80.3%**; ScreenSpot Pro (w/ Python): **64.2%**

### Normalized scores (1–100)

- **Tool use: 81/100.** Tau2 Telecom 95.6% is excellent and Tau2 Retail 77.9% solid; but BrowseComp 50.8%, MCP-Atlas 44.5% and Toolathlon 36.1% trail GPT-5.2-class agents.
- **Reasoning: 81/100.** GPQA 88.1%, AIME 94.0% and HMMT 96.3% are strong; HLE 25.7%, FrontierMath T4 12.5% and ARC-AGI-2 17.6% are the ceiling.
- **Context window: 82/100.** 272K window; long-context retrieval is weak at high lengths (MRCRv2 128k–256k 29.6%) though short/medium retrieval and 128k browse are good.
- **Multimodal: 76/100.** Text + image input, text output only; MMMU-Pro 79.0% and CharXiv 80.3% are respectable but no audio/video.
- **Coding: 84/100.** SWE-bench Verified 76.3%, SWE-Bench Pro 50.8% and SWE-Lancer 69.7% were near-frontier at release.
- **Cost efficiency: 78/100.** $1.25/$10 per 1M with a 90% cache discount is competitive mid-frontier pricing.
- **Overall Score: 80.8/100.** Half-up mean of the five quality dims (81+81+82+76+84)/5 = 80.8. Best-fit recommendation: solid general coding/tool agent at a moderate price, superseded by GPT-5.2/5.4 on hard reasoning.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.2 announcement appendix for GPT-5.1 Thinking results and the Artificial Analysis GPT-5.1 model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
