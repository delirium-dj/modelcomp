# DeepSeek V4 Flash — findings by Qwen 3.8 Flash

- Source: DeepSeek (`deepseek-v4-flash`, 2026-07-31 reasoning checkpoint — **retired**; see serving note)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731 checkpoint)
- **Short description:** DeepSeek's fast V4-line reasoning model — elite competitive programming (Codeforces 3052, LiveCodeBench-CoT 91.6%), verified 1M-context retrieval (MRCR-1M 78.7%), ARC-AGI-2 61.4% — at rock-bottom Flash pricing, but with a catastrophic Omniscience hallucination profile (91.7%). **Serving caveat found this pass:** DeepSeek's pricing page now states `deepseek-v4-flash` is **retired and its requests are served by the DeepSeek-V4.1-Flash model** (the successor folder scored 72 in `model/deepseek-v4.1-flash/`) at Flash prices. This folder's historical checkpoint is what is rated below.
- **Provider / access:** DeepSeek API (OpenAI + Anthropic-format base URLs); legacy name still accepted as an alias. No Zen Free ID verified.
- **Release / knowledge:** 2026-07-31 checkpoint; retired by 2026-10-02 (official docs); cutoff not verified.
- **IDs:** `deepseek/deepseek-v4-flash` (alias of live `deepseek-flash` = V4.1-Flash weights).
- **Context window:** **1M in** (BenchLM + successor docs agree; max output on the current Flash line is 384K). The curated `meta.json` "128K total / Text in/out / Standard pricing" is a generic placeholder contradicted on all three axes — flagged.
- **Modalities:** **Text in / text out** for this checkpoint; vision ships separately as `deepseek-v4-flash-vision-exp` (its own folder — not borrowed). Reasoning yes (thinking/non-thinking toggle); tool calls; JSON.
- **Pricing (as of 2026-10-02, official docs):** Flash line: **$0.15–$0.30 in / $0.60–$1.20 out per 1M** (off-peak/peak), cache-hit input **$0.003–$0.006**. Historic spheron report of the 0731 model: $0.14/$0.28. Cost excluded from Overall.
- **Architecture:** proprietary MoE (family lineage); params undisclosed.

### Raw benchmarks found

> Verified via the qualifying `Kimi_K3.md` BenchLM scorecard in this folder (full row set sourced 2026-09-24) and today's official DeepSeek pricing/docs page (retirement + rate card, fetched 2026-10-02). Lanes: mostly AA/BenchLM with Vals cross-rows noted.

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (Vals 67.0%); TB 2.0: 56.9%
- MCP Atlas **69.0%**; Toolathlon-Verified **70.3%**; CyberGym **76.7%**; BrowseComp **73.2%**
- GDPval-AA: **1189 Elo** (46.3% normalized); AA Agentic Index: **41.7%**; AutomationBench: 25.1%; Agents' Last Exam: 25.2%; τ²/τ³: no verified row

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (AA 90.8%; Vals 89.9%); HLE: **34.8%** (45.1% w/ tools; AA-HLE 38.6%) — frontier bar only cleared with tools
- **ARC-AGI-1: 89.0% / ARC-AGI-2: 61.4%** — exceptional fluid-reasoning rows; HMMT Feb 2026 94.8; IMOAnswerBench 88.4; Apex Shortlist 85.7; MMLU-Pro 86.2
- CritPt: 16.6%; AA Intelligence Index: **34.3**; BenchLM unranked (partial coverage)
- **AA-Omniscience: accuracy 40.4% / hallucination 91.7%** — the worst honesty row in this queue band; answers confidently without knowledge

Coding:

- SWE-bench Verified: **79.0%** (Vals 88.8%); SWE-bench Pro: 52.6%; SWE Multilingual 73.3%
- **LiveCodeBench Pass@1-CoT: 91.6%** (Vals 87.3%); **Codeforces rating: 3052** — grandmaster-tier competitive coding
- DeepSWE 54.4%; NL2Repo 54.2%; VulcanBench v3 88.4%; AA-SciCode 50.3%; AA Coding Index **69.1**

Long context:

- **MRCR 1M: 78.7%; CorpusQA 1M: 60.5%; AA-LCR 79.7%** — retrieval actually measured at the full window (rare; most folders have no MRCR row).

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Scored as the historical 0731 checkpoint the folder documents — see the retirement flag for what today's callers actually get.

- **Tool use: 80/100.** TB 82.7 with Toolathlon 70.3 / CyberGym 76.7 / MCP Atlas 69 / BrowseComp 73.2 is a broad, verified agentic stack; capped by GDPval 1189 (mid), AutomationBench 25.1 and zero τ rows. Matches the cohort's 83 within lane noise.
- **Reasoning: 76/100.** Brilliant-but-unreliable: ARC-AGI-2 61.4 and HMMT 94.8 are flagship-grade fluid reasoning, GPQA ~89 confirmed; but HLE 34.8 misses the bar unfurnished and the 91.7% hallucination rate means its confident knowledge claims are near-worthless without verification. Cohort's 82.4 leans on the ceiling rows; this score weights the Omniscience failure honestly.
- **Context window: 96/100.** 1M **with measured MRCR-1M 78.7%** and AA-LCR 79.7 — top band (95–100) earned by evidence, not spec sheet; below the 98+ tier only because CorpusQA 60.5 shows synthesis-at-length lags retrieval.
- **Multimodal: 15/100.** Text in/out on this checkpoint (band 10–20); vision is a separate retired sibling folder; Design Arena 1219 is preference Elo, not measured multimodality. The curated "Text in/out" is honest here.
- **Coding: 86/100.** Codeforces 3052 + LCB-CoT 91.6 + SWE-V 79–88.8 is a genuinely elite competitive/agentic coding combo; SWE-Pro 52.6 and SciCode 50.3 show it thins out on maintenance-grade and scientific code. One above the cohort's 83.4 for the verified competition rows.
- **Cost efficiency: 96/100.** $0.15–$0.30 in / $0.60–$1.20 off-peak/peak with $0.003 cache-hit input — among the cheapest 1M-context reasoning calls in the cohort (historic $0.14/$0.28 even lower). Cost excluded from Overall.
- **Overall Score: 71/100.** Mean of Tool 80, Reasoning 76, Context 96, Multimodal 15, Coding 86 = 353/5 = 70.6 → **71**. Best fit: **cheap high-volume coding and contest-style problem solving with verification attached** — retrieval-solid 1M context at cents-per-million, terrifying competitive coder, unreliable narrator on facts. Effectively identical to the cohort's 71.6, though reached differently: this file discounts Reasoning for the 91.7% hallucination row and lifts Context for the measured MRCR-1M 78.7%. Practical note: you can no longer actually get these weights via the API; callers are transparently served V4.1-Flash (successor folder, avg 72), so this entry is a historical record of a retired checkpoint.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: official DeepSeek API docs pricing page fetched 2026-10-02 (retirement/alias disclosure, $0.15–0.30/$0.60–1.20 rate card, 1M/384K, cache economics) + the qualifying `Kimi_K3.md` BenchLM scorecard (TB/GDPval/GPQA/ARC/MRCR/SWE/LCB/Codeforces/Omniscience rows) + spheron historic pricing; curated `meta.json` placeholders ("128K / Standard pricing") flagged as contradicted. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) **the endpoint is retired and silently serves V4.1-Flash weights** — this folder's benchmark rows belong to a checkpoint no API caller can currently obtain, (b) Omniscience 91.7% hallucination vs ARC-AGI-2 61.4% — the sharpest reasoning/honesty split in the queue, (c) vision lives in the separate vision-exp folder and was not borrowed.
- Revisit trigger: if DeepSeek un-retires the 0731 checkpoint or publishes its official launch panel, re-score; otherwise the orchestrator may want to merge/mark this folder as superseded by `deepseek-v4.1-flash`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
