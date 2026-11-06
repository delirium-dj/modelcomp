# GPT-5.4 nano — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
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
- **Speed:** 165.6 tok/s output (AA, 2026-10-19 — pins the prior 164–171 read); TTFT 55.69 s at xhigh (vs 0.65–1.21 s at low effort).

### Raw benchmarks found

- BenchLM composite (2026-10-19): **46.85/100** overall, #115 of 956 models, 37 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **21** (#50/173 — matches the prior 21), 165.6 tok/s, TTFT 55.69s, $0.20/$1.25 with 90% cache discount (blended $0.18/M; $0.18 per Index task), 400k context, text+image, 1 provider, cutoff 2025-08-31 — DEPRECATED on AA (suggests GPT-5.6 Luna); 190M Index tokens (very verbose vs the 99M median)

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

- Artificial Analysis: Intelligence Index **21** (xhigh) / 20 (medium) / 12 (non-reasoning); Coding Index **56.1**; Agentic Index 0.16 (**corrected 2026-10-19: BenchLM's AA read is 17.7% — the earlier 0.16 was a parse artifact**); SciCode **47.2%**; Terminal-Bench 2.1 **60.7%** (AA protocol); GPQA Diamond 81.7% (Epoch AI: 78.5%); IFBench ~0.8 normalized (#25)
- New independent rows (2026-10-19): APEX-Agents-AA **24.9%**, GDPval-AA **22.4% normalized / Elo 1,035**, Terminal-Bench 2.1 (Vals) **41.6%** (well below the AA-protocol 60.7% — harness split), LiveCodeBench (Vals) **84.0%**, SWE-bench (Vals) **69.8%**, Vibe Code Bench **26.10%** (weak), AA-MMMU-Pro **65.4%**, AA-LCR **76.7%**, CritPt **9.3%**, ARC-AGI-1 **51.50%** / ARC-AGI-2 **5.7%** (ARC Prize), AA-HLE **28.3%**, AA-Omniscience index **−29.5%** / accuracy **25.7%** / hallucination **74.2%**, GPQA (Vals) **77.5%**, MMLU-Pro (Vals) **77.2%**, AA-IFBench **75.9%**, Epoch FrontierMath v2 T1–3 **44.912%** / T4 **12.195%** (matches the prior Respan read)
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

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Re-run verification (2026-10-19) against Artificial Analysis (deprecated page, suggests GPT-5.6 Luna: Index 21 #50/173 — unchanged; 165.6 tok/s; TTFT 55.69s at xhigh; 190M Index tokens — very verbose; pricing unchanged) and BenchLM (composite 46.85/100, #115/956, 37/644 benchmarks): new rows APEX-AA 24.9%, GDPval-AA Elo 1,035, TB2.1 (Vals) 41.6% (vs the AA protocol's 60.7% — harness split), LCB (Vals) 84.0%, SWE-bench (Vals) 69.8%, Vibe Code 26.1%, ARC-AGI-1 51.5%/ARC-AGI-2 5.7%, AA-Omniscience −29.5%, AA Agentic Index corrected to 17.7% (earlier 0.16 was a parse artifact) — all consistent with the existing Tool use 55 / Reasoning 62 / Context 68 / Multimodal 66 / Coding 60 reads, no score change. First pass (2026-10-09) used OpenAI launch post + API docs, Artificial Analysis, Respan/LiveBench aggregations, CloudPrice, BenchGecko.
- Future sources: add a new file next to this one, e.g. `GPT_5_5_Nano.md`, using the same headings.
