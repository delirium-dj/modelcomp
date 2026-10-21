# GPT-5 Nano — findings by MiniMax M3.1 Flash

- Source: OpenAI (GPT-5 nano), `gpt-5-nano`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's August 2025 ultra-cheap tier — 400K context, **$0.05/M in and $0.40/M out**, AIME 2025 85.2% and SWE-bench Verified 54.7% — the price point that made frontier-family routing cheap, and the baseline that GPT-5.4 nano later replaced.
- **Provider / access:** OpenAI **Responses and Chat Completions** APIs (`gpt-5-nano`), OpenCode Zen `opencode/gpt-5-nano` (**$0.05/$0.40, cached $0.005**), OpenRouter `openai/gpt-5-nano`.
- **Release / knowledge:** **2025-08-07** (OpenAI "Introducing GPT-5" launch posts; AA agrees). Knowledge cutoff not published for this model.
- **IDs:** `gpt-5-nano` (OpenAI), `opencode/gpt-5-nano` (Zen), `openai/gpt-5-nano` (OpenRouter).
- **Context window:** **400,000** tokens total = 272,000 max input + 128,000 max reasoning+output.
- **Modalities:** text and image input, text out; reasoning effort minimal/low/medium/high; `verbosity` low/medium/high.
- **Pricing (as of 2026-10-20):** **$0.05/M input, $0.40/M output, $0.005/M cached input** (OpenAI developer post, models.dev, AA) — the cheapest frontier-family route of its generation.
- **Architecture:** proprietary.

### Raw benchmarks found

> OpenAI's launch tables (GPT-5 nano, high effort) with Artificial Analysis and Vals AI readings; no Terminal-Bench 2.x or ARC-AGI score has ever been published for it.

Reasoning / knowledge:

- AIME 2025: **85.2%** (OpenAI) / **83.67%** (AA) / **81.2%** (Vals) · GPQA Diamond: **71.2%** (OpenAI) / **67.58%** (AA) / **63.4%** (Vals)
- HLE (no tools): **8.7%** (OpenAI) / **9.50%** (AA) · MMLU-Pro: **78.0%** (AA) / **76.1%** (Vals) · MMMU / MMMU-Pro: **75.6 / 62.6%** (OpenAI) / **60.98%** (AA)
- FrontierMath (python tool): **9.6%** (OpenAI) · HMMT 2025: **75.6%** · Artificial Analysis Intelligence Index: **12.99** (High) / 12.5 (Medium) / 7.1 (Minimal)
- AA-LCR: **45.0%** · CritPt: **0%** · IFBench: **67.55%** · Omniscience Accuracy / Hallucination Rate: **19.08% / 59.01%** · Terminal-Bench Hard: **12.1%** (High) / 17.4% (Medium) / 6.8% (Minimal)

Agent / tool use:

- Tau2-bench: airline **41.0%**, retail **62.3%**, telecom **35.5%** (OpenAI) · Tau2 telecom (AA): **36.55%** · IT-Bench-SRE: no verified public score found
- Terminal-Bench 2.0 / 2.1: **no verified public score found** (OpenAI's tables omit TB; AA's `terminalBench21` is null; the tbench.ai leaderboard has no nano entry) · GDPval-AA / OSWorld / AutomationBench / Toolathlon / MCP-Atlas: no verified public score found

Coding:

- SWE-bench Verified: **54.7%** (OpenAI) · Aider polyglot (diff): **48.4%** · SWE-Lancer (IC SWE Diamond): **$49K** · LiveCodeBench: **78.94%** (AA) / **70.2%** (Vals)
- SWE-bench Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR 2-needle: **43.2%** at 128k, **34.9%** at 256k · GraphWalks bfs/parents (<128k): **64.0 / 43.8%** · BrowseComp Long Context: **80.4%** at 128k, **68.4%** at 256k
- LongFact-Concepts hallucination: **1.0%** · FActScore hallucination: **7.3%**

### Normalized scores (1–100)

- **Tool use: 35/100.** τ²-bench 35.5–36.6% on telecom and 41.0% on airline, Terminal-Bench Hard 12.1% and no GDPval, OSWorld or MCP-Atlas figure put it at the bottom of the agentic band.
- **Reasoning: 52/100.** AIME 2025 81.2–85.2%, GPQA 63.4–71.2%, MMLU-Pro 76.1–78.0% and MMMU-Pro 61.0–62.6% are mid-band, capped by HLE 8.7–9.5%, FrontierMath 9.6%, CritPt 0% and an AA Intelligence Index of 13.0.
- **Context window: 70/100.** 400,000 tokens, but MRCR 43.2% at 128k and 34.9% at 256k plus GraphWalks 43.8% show the retrieval is mediocre — the 200K–500K tier at its top.
- **Multimodal: 65/100.** Text and image input with text out — the "+image in" band.
- **Coding: 58/100.** SWE-bench Verified 54.7% and Aider polyglot 48.4% are modest, with LiveCodeBench 70.2–78.9% the bright spot and no SWE-bench Pro, DeepSWE or SciCode figure.
- **Cost efficiency: 100/100.** $0.05/M in, $0.40/M out and $0.005/M cached is the cheapest frontier-family route of its generation, and the price point alone justifies dedicated routing.
- **Overall Score: 56/100.** Mean of the five quality dims = (35 + 52 + 70 + 65 + 58) / 5 = 56.0 → **56**. Best fit: classification, extraction and routing at scale — superseded on both price and quality by GPT-5.4 nano ($0.20/$1.25, AA index 20.7).

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (OpenAI GPT-5 launch and developer posts, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.4_Nano.md`, using the same headings.
