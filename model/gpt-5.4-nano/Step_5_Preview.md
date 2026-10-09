# GPT-5.4 nano — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 nano (released 2026-03-17 with GPT-5.4 mini)
- **Short description:** The smallest and cheapest GPT-5.4 variant, built for high-volume work where speed and cost dominate — classification, data extraction, ranking, and simple coding sub-agents. It brings a 400K context window, image/PDF input, five reasoning-effort levels (none/low/medium/high/xhigh), and a meaningful upgrade over GPT-5 nano: SWE-bench Pro 52.4% (vs GPT-5 mini's 45.7% at higher effort), GPQA Diamond 82.8%, MCP Atlas 56.1%, τ²-telecom 92.5%. OpenAI explicitly does not position it as a frontier model — it is the high-throughput tier of the 5.4 family, priced at a quarter of the flagship's input rate.
- **Provider / access:** API only (OpenAI API, Azure AI Foundry, OpenRouter, Databricks, Vercel AI Gateway, Perplexity); also in Codex and ChatGPT (Free/Go via Thinking or fallback).
- **Release:** 2026-03-17 (deprecating 2027-04-01). Knowledge cutoff 2025-08-31.
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** Text, image and PDF in → text out; tool use, function calling, web search, file search, computer use.
- **Pricing (as of 2026-10-09):** $0.20/M input, $1.25/M output, $0.02/M cached input; Batch API $0.10/$0.625.
- **Speed:** 164–171 tok/s output (AA); TTFT 0.65–1.21 s.

### Raw benchmarks found

OpenAI launch table (nano at xhigh; GPT-5 mini at high for reference):

- SWE-bench Pro (Public): **52.4%** (mini 54.4, GPT-5.4 57.7, GPT-5 mini 45.7)
- Terminal-Bench 2.0: **46.3%** (mini 60.0, GPT-5.4 75.1)
- Toolathlon: **35.5%** (mini 42.9, GPT-5.4 54.6)
- MCP Atlas: **56.1%** (mini 57.7, GPT-5.4 67.2)
- τ²-bench (telecom): **92.5%** (mini 93.4, GPT-5.4 98.9)
- GPQA Diamond: **82.8%** (mini 88.0, GPT-5.4 93.0)
- HLE w/ tools: **37.7%**; HLE w/o tools: **24.3%**
- OSWorld-Verified: **39.0%** (mini 72.1, GPT-5.4 75.0)
- MMMU-Pro: **66.1%** (69.5% with Python); OmniDocBench 1.5: 0.2419 edit distance (lower is better; GPT-5.4 0.109)
- MRCR v2 8-needle: **44.2% @64K–128K**, **33.1% @128K–256K**; GraphWalks BFS 73.4%, parents 50.8%

Third-party:

- Artificial Analysis: Intelligence Index **21** (xhigh) / 20 (medium) / 12 (non-reasoning); Coding Index **56.1**; Agentic Index 0.16; SciCode **47.2%**; Terminal-Bench 2.1 **60.7%** (AA protocol); GPQA Diamond 81.7% (Epoch AI: 78.5%); IFBench ~0.8 normalized (#25)
- Respan/LiveBench (Oct 2026): coding 70.8%, agentic coding 46.8%, reasoning 81.1%, data analysis 67.6%, mathematics 91%, instruction following 67.2%, language 62.5%, global 70%; FrontierMath T1-3 44.9% (T4 12.2%); OTIS Mock AIME 87.8%; SimpleQA Verified 11.7%
- LMArena: 1,401 Elo text (#103 of 141)
- BenchGecko: 32.7% average across 27 benchmarks (#256 overall)

### Normalized scores (1–100)

- **Tool use: 55/100.** MCP Atlas 56.1% and τ²-telecom 92.5% are respectable, and OSWorld 39.0% shows working computer use — but Toolathlon 35.5%, Terminal-Bench 46.3% and AA Agentic Index 0.16 confirm it is a sub-agent tier, not an autonomous one.
- **Reasoning: 62/100.** GPQA Diamond 82.8% and LiveBench reasoning 81.1% / mathematics 91% are solidly mid-band for a nano tier (the best of any sub-10B-class model at launch); HLE 24.3% no-tools, SimpleQA Verified 11.7% and AA Intelligence Index 21 keep it clearly below the frontier.
- **Context window: 68/100.** 400K is the 200K–500K band (65–84), but retrieval degrades through the window: MRCR 8-needle 44.2% at 64–128K and 33.1% at 128–256K, GraphWalks parents 50.8% — a big window with soft edges.
- **Multimodal: 66/100.** Text + image (+PDF) in → text out is the 60–70 band; MMMU-Pro 66.1% (69.5% with Python) is fine for the tier, while OmniDocBench 1.5 edit distance 0.2419 (vs 0.109 for GPT-5.4) shows document OCR is not its strength.
- **Coding: 60/100.** SWE-bench Pro 52.4% is genuinely good for a nano model (near-mini parity), and AA Terminal-Bench 2.1 hits 60.7% with SciCode 47.2% — but OpenAI's own TB2.0 number is 46.3% and LiveBench agentic coding 46.8%: issue-resolution coding with weak agentic follow-through.
- **Cost efficiency: 93/100.** $0.20/$1.25 per million tokens with $0.02 cache reads, 50%-off Batch, 164–171 tok/s and sub-second TTFT — the methodology's ~$0.6/$2.2 ≈ 92 point, purpose-built for volume.
- **Overall Score: 62/100.** Best-fit recommendation: OpenAI's volume tier done right — GPQA/SWE-Pro numbers a third of the flagship's price for classification, extraction, ranking and sub-agent plumbing; not a model to run a primary agent loop on.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenAI launch post + API docs, Artificial Analysis, Respan/LiveBench aggregations, CloudPrice, BenchGecko); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_5_Nano.md`, using the same headings.
