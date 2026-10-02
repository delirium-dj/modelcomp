# GPT-5.4 Nano — findings by Qwen 3.8 Flash

- Source: OpenAI (`gpt-5.4-nano`; `opencode/gpt-5.4-nano`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano
- **Short description:** OpenAI's cheapest GPT-5.4-family endpoint (released 2026-03-17), positioned for bulk classification, data extraction, ranking, and **coding subagents**. Surprisingly capable at xhigh reasoning effort (GPQA 81.7%, τ² 76–92%, SWE-Pro 52.4%) — but collapses to GPQA 55.8% and HLE 4.1% without reasoning tokens. **Omniscience non-hallucination 25.8% is among the worst measured** — fabricates nearly as often as it's correct. Long-context retention is poor (MRCR 44.2%/33.1%) despite the 400K window. Flagged **deprecated on Artificial Analysis** in favor of GPT-5.6 Terra.
- **Provider / access:** OpenAI API `gpt-5.4-nano` (API-only, not in ChatGPT or Codex); Azure; OpenRouter; OpenCode Zen `opencode/gpt-5.4-nano`.
- **Release / knowledge:** **2026-03-17** (launch alongside GPT-5.4 mini); knowledge cutoff **2025-08-31** (OpenAI docs).
- **IDs:** `opencode/gpt-5.4-nano`; upstream `gpt-5.4-nano`.
- **Context window:** **400,000 tokens in / 128,000 max output** (official OpenAI developer docs confirmed; curated `meta.json` "128K" and Gemini 3.7's "64K" are both wrong).
- **Modalities:** **Text + image in; text out** (confirmed via OpenAI docs and sibling comparison; curated `meta.json` "Text in/out" understates). Reasoning effort: none/low/medium/high/xhigh; tool calls yes; structured JSON output.
- **Pricing (as of 2026-10-02):** **$0.20 in / $1.25 out / $0.02 cached** per 1M (OpenAI docs + OpenRouter). Batch ≈50%. Cheapest in the GPT-5.4 family. 171–180 t/s (AA measured). Cost excluded from Overall.
- **Architecture:** proprietary; weights not published.

### Raw benchmarks found

> Verified primarily via Big Pickle's detailed report (OpenAI launch page full comparison tables, AA model pages, BenchLM, opper.ai, Easy Benchmarks — 2026-10-02), cross-checked with Gemini 3.7 Flash's qualifying report. **Critical note:** Gemini 3.7 Flash's report uses wrong specs (64K, $0.05/$0.15, GPQA 40.8% from non-reasoning mode) — Big Pickle's full OpenAI-docs-anchored table is adopted. Numbers below cite xhigh effort unless noted; the non-reasoning baseline is dramatically weaker.

Agent / tool use:

- τ²-bench (telecom): **92.5%** xhigh (OpenAI launch) / **76.0%** (AA) — exceptional for a nano
- IFBench: **75.9%** xhigh / 64.4% medium / **32.7% non-reasoning** (AA)
- MCP Atlas: **56.1%**; Toolathlon: **35.5%** (OpenAI launch table)
- Terminal-Bench 2.0: **46.3%**; TB Hard: **42.4%** xhigh / 33.3% medium / 24.2% non-reasoning
- OSWorld-Verified: **39.0%** — massive gap vs GPT-5.4 mini (72.1%) and GPT-5.4 (75.0%)
- GDPval-AA: **960** (Gemini 3.7 report); AA Agentic Index: **17.7**
- Claw-Eval: **46.8%** (Gemini 3.7 report)

Reasoning / knowledge:

- GPQA Diamond: **82.8%** xhigh (OpenAI) / **81.7%** (AA) / 76.1% medium / **55.8% non-reasoning** — extreme effort dependency
- HLE: **28.3%** xhigh / 24.3% no-tools / 15.9% medium / **4.1% non-reasoning**
- CritPt: **9.3%** xhigh / **0.0%** non-reasoning
- MMLU-Pro: **77.2%** (Vals via BenchLM)
- **AA-Omniscience: accuracy 25.7% / non-hallucination 25.8%** (xhigh) — fabricates nearly as often as correct; the weakest point
- AA Intelligence Index: **21.2** xhigh / ~20 medium / **12 non-reasoning**

Coding:

- SWE-bench Pro (public): **52.4%** xhigh — +6.7 over GPT-5 nano, only 5.3 behind full GPT-5.4
- AA Coding Index: **56.1**; SciCode: 47.2% xhigh
- SWE-bench Verified / LiveCodeBench: no verified public score
- Vibe Code Bench: 44.0% (Gemini 3.7 report)

Long context:

- AA-LCR: **76.7%** xhigh — sounds strong
- MRCR v2 8-needle: **44.2%** at 64–128K, **33.1%** at 128–256K (GPT-5.4: 86.0%/79.3%)
- GraphWalks: BFS 0–128K **73.4%**; parents 0–128K **50.8%** (GPT-5.4: 93.1%/89.8%)
- **Assessment:** the 400K window exists nominally but effective recall is poor beyond ~64K.

Multimodal:

- MMMU-Pro: **66.1%** / 69.5% with Python (GPT-5.4: 81.2%; mini: 76.6%) — trails siblings by 10–15 points
- OmniDocBench 1.5 (lower=better): **0.2419** — worst in the family (GPT-5.4: 0.109, mini: 0.1263)

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Key scoring philosophy: (a) numbers are at xhigh (the only mode where this model approaches mid-tier capability); the non-reasoning collapse is noted but not separately scored; (b) MRCR 44%/33% is a real-world discount on the 400K window despite AA-LCR 76.7% headline; (c) Omniscience 25.7/25.8% caps Reasoning independently of GPQA.

- **Tool use: 62/100.** τ² 76–92.5% is genuinely impressive for a nano, and IFBench 75.9% shows instruction-following at length. But MCP Atlas 56.1%, Toolathlon 35.5%, OSWorld 39.0%, TB Hard 42.4%, and AA Agentic 17.7 reveal the model can't handle open agentic tasks. It's a structured-task tool caller, not an agent. Between Gemini 3.7's 55 and Big Pickle's 68.
- **Reasoning: 60/100.** GPQA 81.7–82.8% at xhigh is above many 10B-class open models — genuinely good. But HLE 28.3%, CritPt 9.3%, and AA Index 21.2 put it well below frontier. The **Omniscience disaster** (25.7% accuracy, 25.8% non-hallucination) means it's unreliable for unsupervised knowledge retrieval. The non-reasoning collapse (GPQA 55.8%) means all reasoning credit is effort-budget dependent.
- **Context window: 68/100.** 400K = 200K–500K band (65–84). AA-LCR 76.7% supports mid-band. But **MRCR 44.2%/33.1% is the worst retrieval in this queue** — the window is nominal, not effective. GraphWalks parents 50.8% confirms poor multi-hop at length. Big Pickle's 72 is too generous given MRCR.
- **Multimodal: 62/100.** Text+image in = 60–70 band. MMMU-Pro 66.1% enters the band credibly. But worst-in-family OmniDocBench (0.2419) and trailing siblings by 10–15 points means the image pathway is present but degraded. Big Pickle's 72 is top-of-band; Gemini 3.7's 15 ignores the confirmed image input.
- **Coding: 60/100.** SWE-Pro 52.4% is a genuine surprise for this price tier (+6.7 over GPT-5 nano); AA Coding Index 56.1 and SciCode 47.2 support mid-tier coding. But no SWE-V anchor, no LCB, and Terminal-Bench 46.3% cap it. Big Pickle's 72 overstates for a nano; 60 is honest absolute capability.
- **Cost efficiency: 96/100.** $0.20/$1.25 with $0.02 cache is the best price-per-capability in the OpenAI family; 171–180 t/s. Deprecated flag reduces forward-looking confidence slightly. Cost excluded from Overall.
- **Overall Score: 62/100.** Mean of Tool 62, Reasoning 60, Context 68, Multimodal 62, Coding 60 = 312/5 = 62.4 → **62**. Best fit: **bulk classification, extraction, routing, and cheap coding subagents at xhigh effort** — the model OpenAI designed for the "simple supporting task" in a multi-agent pipeline. Not a knowledge oracle (Omniscience 25.8% non-hallucination), not a long-context tool (MRCR 33–44%), not a generalist agent (OSWorld 39%). Between Big Pickle's generous 70.8 (top-of-band multimodal and coding) and the cohort's 58 (which uses Gemini 3.7's incorrect specs). The deprecation flag on AA confirms it's a transient tier before GPT-5.6/6.x replaced the nano lane.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: Big Pickle's detailed multi-source report (OpenAI launch page full tables, AA model pages, BenchLM, opper.ai, Easy Benchmarks, OpenRouter) adopted as primary evidence base; corrected Gemini 3.7 Flash's qualifying report which used wrong specs (64K/$0.05-0.15/text-only — all contradicted by official OpenAI docs: 400K/$0.20-1.25/image+text). Web-verified context window and pricing via developers.openai.com. Curated `meta.json` flagged as placeholder (wrong on context and modalities). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **extreme reasoning-effort dependency** — GPQA drops from 82.8% to 55.8% between xhigh and no-reasoning, (b) **Omniscience 25.7%/25.8% non-hallucination** is among the worst in the dataset, (c) 400K window is nominal — MRCR shows poor effective retrieval.
- Revisit trigger: deprecated on AA; only relevant if a successor nano-tier model (GPT-5.6 Terra nano equivalent) inherits the price point. The existing evidence base is complete for this model.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
