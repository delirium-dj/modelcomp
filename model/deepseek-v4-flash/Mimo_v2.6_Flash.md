# DeepSeek V4 Flash — findings by Mimo v2.6 Flash

- Source: DeepSeek/DeepSeek V4 Flash (`deepseek/deepseek-v4-flash`; Preview 2026-04-24, 0731 refresh 2026-07-31)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (predecessor of V4.1 Flash; the tracked `deepseek-v4-vision-exp` entry is a separate vision variant). Not V4 Pro.
- **Short description:** DeepSeek's MIT-licensed open-weights efficiency tier — 284B total / **13B active** MoE, full 1M context at ~10% of V3.2's FLOPs, deliberately positioned below V4 Pro on quality and roughly 3× cheaper on output. The **0731** post-training refresh (2026-07-31, same architecture/size) is the checkpoint that carries the current agentic numbers.
- **Provider / access:** DeepSeek first-party API plus ~18 providers (Artificial Analysis); OpenRouter `deepseek/deepseek-v4-flash`; weights `deepseek-ai/DeepSeek-V4-Flash` on Hugging Face (vLLM/SGLang, FP8 ≈158 GB → 2× H200 or 4× A100); thinking modes Non-Think / Think High / Think Max (High / xHigh in API docs). Note: DeepSeek's current docs use the successor id `deepseek-flash`; `deepseek-v4-flash` is described as a legacy-style name.
- **Release / knowledge:** Preview 2026-04-24 (technical report arXiv:2606.19348, submitted 2026-04-26); 0731 checkpoint public beta 2026-07-31; knowledge cutoff 2025-05 (llm.ing).
- **IDs:** `deepseek-v4-flash` (DeepSeek API), `deepseek/deepseek-v4-flash` (OpenRouter). **No OpenCode Zen Free ID found**, but third-party hosts (ZenMux free route, DeepInfra) provide free/cheap access.
- **Context window:** 1,000,000 tokens (1,048,576); max output **384K** (local high/max configs recommend ≥256K–384K).
- **Modalities:** **text in / text out only** — codersera's spec table and Artificial Analysis's checkpoint page both say text-only, while the OpenRouter/llm.ing listing shows text + image in. Image input is therefore treated as **provisional and unverified**; no audio/video. Reasoning controls: `reasoning_effort` / High / Max; thinking on by default (tokens billed at output price).
- **Pricing (as of 2026-09-25):** first-party **$0.14 in / $0.28 out** per 1M, cache-hit **$0.0028** (98% off), reported ~50% off-peak discount; third-party hosts from ~$0.10/$0.20 (DeepInfra). ⚠️ Conflict flagged: BetterToken's 2026-09-18 table for the renamed `deepseek-flash` baseline shows $0.15/$0.60 off-peak and $0.30/$1.20 peak — rates may have moved with the ID change.
- **Architecture:** MoE 284B total / 13B active, Compressed Sparse Attention (CSA) + Heavily Compressed Attention (HCA), MIT license, open weights, 32T+ training tokens.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). (vendor) = DeepSeek's own model card / changelog tables. Preview (April) and 0731 (July) checkpoints differ sharply on agentic rows — stated per number.

Agent / tool use:

- Terminal-Bench 2.1: **82.7** (0731 vendor) vs Flash Preview 61.8 and V4-Pro-Preview 72.1 on the same table; Terminal-Bench 2.0: **56.9%** (V4-Flash Max, preview) vs V4-Pro 67.9; Terminal-Bench 4.0: **7.0** (0731) vs Opus-5.0 51.8, GLM-5.3 37.9
- Toolathlon (verified): **70.3** (0731 vendor); Agents' Last Exam: **25.2** (0731; Opus-4.8 25.7, GLM-5.2 23.8); AutomationBench (public): 25.1; DSBench-FullStack: 68.7 / DSBench-Hard 59.6 (both **internal**)
- GDPval-AA: **Elo 1395** (preview table; an adjacent comparison lists 1388) vs V4-Pro 1554, GPT-5.4 1674
- BrowseComp: **73.2%** (vs V4-Pro 83.4, Opus 4.6 83.7)
- Artificial Analysis Agentic Index: **41.0** (llm.ing mirror, 2026-09) with an older snapshot of 31.1 — mirrors disagree (see caveat below)
- Tau2/Tau3-Bench, Toolathon-Tau, MCP-Atlas/MCP-Mark, Claw-Eval, ClawProBench: **no verified public score found** for this checkpoint

Reasoning / knowledge:

- GPQA Diamond: **88.1** (Think Max, preview card); 0731 table says **89.9**; MMLU-Pro: **86.2**; MMLU base: 88.7
- HLE: **34.8** (~34.6 in the comparison table); **HLE w/ tools 45.1**
- HMMT 2026 Feb: **94.8**; IMOAnswerBench: **88.4**; Codeforces rating: **3052**
- SimpleQA-Verified: **34.1** (vs V4-Pro 57.9 — a 23.8-point recall gap)
- AA-Omniscience: accuracy **-23**, hallucination rate **96%**
- Artificial Analysis Intelligence Index: **47** (#9 of 78, V4-Flash Max) in one 2026 comparison table; other mirrors record **50**, **44** and **34.3** (llm.ing, 2026-09-20) for the 0731 max-effort checkpoint — **mirrors disagree**, so no single index value is treated as definitive here
- Chatbot Arena: text overall **1436** Elo (±4.6, 36,817 votes), coding **1480** (±7.1)
- BenchLM aggregate (non-think): overall **57/100** (#50 of 79), knowledge 45.2 (#67 of 107), agentic 48.3, math 30.2, reasoning 0.0 (not ranked)

Coding:

- SWE-bench Verified: **79.0%** (V4-Flash Max; High mode 78.6) — vs V4-Pro Max 80.6, Claude Opus 4.6 80.8
- LiveCodeBench: **91.6** (Max) vs V4-Pro 93.5; SWE-bench Pro: **52.6%** (Max)
- DeepSWE v1.1: **54.4** (0731) vs preview **7.3** — a 645% jump from post-training alone; still behind V4.1 Flash 74.2 and Opus-5.0 74.0
- NL2Repo-Bench: **54.2** (0731); HumanEval base: **69.5**; BenchLM coding: **62.1** (#48 of 101, 53rd percentile)
- Aider Polyglot / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- MRCR @ 1M: **78.7 MMR** (vs V4-Pro 83.5); CorpusQA @ 1M: **60.5%**; LongBench-V2 base: 44.7
- RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 at 82.7 (0731) is close to the 88 frontier reference, Toolathlon 70.3 and Agents' Last Exam 25.2 (≈ Opus-4.8's 25.7) are respectable, and BrowseComp 73.2 is strong. Capped by Terminal-Bench 2.0 56.9 and Terminal-Bench 4.0 7.0, GDPval-AA Elo 1395 (frontier ~1554+), an Agentic Index of only 31–41, and no Tau/MCP/Claw row at all.
- **Reasoning: 78/100.** GPQA Diamond 88.1–89.9 sits just under the 90+ frontier reference, MMLU-Pro 86.2, HMMT 94.8 and IMOAnswerBench 88.4 are near-parity with V4 Pro, and Arena coding 1480 is top-class. Capped by HLE 34.8 (below the 40+ reference), SimpleQA-Verified 34.1, AA-Omniscience accuracy -23 with a 96% hallucination rate, an Intelligence Index of ~47 against the 60+ frontier reference, and conflicting index mirrors (34–50).
- **Context window: 96/100.** Full 1M tokens in the ≥1M tier (95–100) with *measured* long-context evidence — MRCR 78.7 MMR and CorpusQA 60.5% at 1M — which most models at this tier lack. Not 100 because retrieval is far under the ≥98%-at-512K bar the methodology reserves for a perfect score, and no RULER cross-check exists.
- **Multimodal: 15/100.** First-party docs, the spec table and Artificial Analysis all describe a text-only model; the OpenRouter image-in listing is contradicted by them, so it is credited with nothing above the text-only floor (10–20).
- **Coding: 84/100.** SWE-bench Verified 79.0 is within 1.6 points of V4 Pro and under Claude Opus 4.6 by 1.8; LiveCodeBench 91.6 is within 1.9 of Pro; SWE-bench Pro 52.6 is solid. Capped by DeepSWE 54.4 (frontier 74.2), BenchLM's coding rank at only the 53rd percentile, and no Aider/SciCode/Vibe rows — it is a strong routine-coding model, not a top-quartile agentic one.
- **Cost efficiency: 97/100.** $0.14/$0.28 with $0.0028 cache reads sits just above the ~$0.10/$0.20 → 97–99 anchor (self-host is free under MIT, though 158 GB of weights needs real hardware); the only thing keeping it from 99+ is that the current `deepseek-flash` ID may carry higher $0.30/$1.20 peak rates.
- **Overall Score: 70/100.** (78 + 78 + 96 + 15 + 84) / 5 = 70.2 → 70 — best-fit as the default cheap high-volume coding/reasoning engine with a genuine 1M window (hybrid routing: Flash for most traffic, escalate to Pro for deep multi-step agent chains); pick V4.1 Flash or a closed frontier model when DeepSWE-class agentic coding, factual recall or hard reasoning is the job.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: fresh public internet research (DeepSeek official pricing/model pages and 0731 changelog tables, Macaron and FlowHunt benchmark consolidations, Codersera's Pro-vs-Flash comparison, ZenMux/AIModelsNavi/GLM5 profiles, BetterToken's pricing-date note, deepseekv4guide's 0731 table, BenchLM aggregate); scores are normalized 1–100 interpretations, not official vendor scores. Preview vs 0731 checkpoint is stated per number and conflicting AA index mirrors are cited rather than averaged.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
