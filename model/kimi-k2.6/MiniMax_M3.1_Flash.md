# Kimi K2.6 — findings by MiniMax M3.1 Flash

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's April-2026 open-weight MoE — a **1T-total / 32B-active** model on MLA attention with 384 experts (8 selected per token) and a 400M MoonViT vision encoder, released under the **Modified MIT Licence**. It was the **#1 open-weight model on the Vals Index** at launch ("Kimi K2.6 Thinking: new #1 open-weight on Vals Index … places #7 among all models at 63.9% accuracy") and is now **deprecated** in favour of Kimi K3 (2.8T, 1M context, AA index 44).
- **Provider / access:** Moonshot API `kimi-k2.6` (OpenAI-compatible at `api.moonshot.ai`); Kimi Code plan ids `kimi-k2.7-code`; **open weights** at `huggingface.co/moonshotai/Kimi-K2.6` (Modified MIT; 1.63k likes, 366,917 downloads last month); OpenRouter `moonshotai/kimi-k2.6` (canonical `moonshotai/kimi-k2.6-20260420`).
- **Release / knowledge:** released **2026-04-20** (AA "was released on April 20, 2026"; OpenRouter `created` 2026-04-20; HN post same day). Knowledge cutoff: **never published** (OpenRouter `knowledge_cutoff: null`).
- **IDs:** `kimi-k2.6` (Moonshot API), `moonshotai/kimi-k2.6` (OpenRouter), `moonshotai/Kimi-K2.6` (HF).
- **Context window:** **262,144 tokens** (256K) — "the `kimi-k2.7-code` and `kimi-k2.6` models both provide a 256K context window". The 1M window belongs to **Kimi K3**, not to K2.6. Max output: **no hard cap published**; the API defaults to 32,768; Vals records 256k; OpenRouter lists 235,929.
- **Modalities:** text + image + video in, text out ("It supports text, image, and video input, thinking and non-thinking modes"); OpenRouter lists only `text+image->text`.
- **Reasoning controls:** a `thinking` object only — "Default to be `{"type": "enabled"}`. Value can only be one of `{"type": "enabled"}` or `{"type": "disabled"}`" — plus `preserve_thinking` (`{"type":"enabled","keep":"all"}`), which "retains full reasoning content across multi-turn interactions". **There is no `reasoning_effort` for K2.6** (that is a Kimi K3 feature: low/high/max, default max). Fixed temperature 1.0 (0.6 non-thinking), top_p 0.95, n=1.
- **Pricing (as of 2026-10-19, per 1M tokens):** cache hit **$0.16**, cache miss **$0.95**, output **$4.00** (Moonshot, and OpenCode Zen: $0.95 / $4.00 / $0.16). **OpenRouter lists $0.65 in / $3.41 out / $0.15 cache read.**
- **Rate limits** (per-account recharge tier): Tier0 $1 → concurrency 1, RPM 3, TPM 500,000, TPD 1,500,000; Tier3 $100 → 50 / 200 / 3,000,000; Tier5 $3,000 → 100 / 300 / 5,000,000.
- **Architecture:** MoE, **1T total / 32B activated**; 61 layers (1 dense), **MLA** attention, 384 experts with 8 selected per token plus 1 shared expert, MoE hidden 2048, attention hidden 7168, 64 heads, vocab 160K, SwiGLU, MoonViT 400M vision encoder. "Kimi-K2.6 has the same architecture as Kimi-K2.5."

### Raw benchmarks found

> Moonshot's HF card and tech blog are marked "vendor" (temp 1.0, top_p 1.0, context 262,144; coding scores averaged over 10 runs; Terminal-Bench 2.0 "obtained with the default agent framework (Terminus-2) … operating in preserve thinking mode"); Artificial Analysis, Vals AI, Epoch AI (via BenchLM) and the BenchLM ledger are independent.

Agentic — HLE-Full with tools **54.0** / without tools **34.7** (text-only subset "36.4% accuracy without tools and 55.5% with tools"); BrowseComp **83.2** (Agent Swarm 86.3); DeepSearchQA F1 **92.5** / acc 83.0; WideSearch item-F1 **80.8**; Toolathlon **50.0**; MCPMark **55.9**; Claw Eval pass^3 **62.3** / pass@3 80.9; APEX-Agents **27.9**; OSWorld-Verified **73.1**; Terminal-Bench 2.0 **66.7**; τ²-bench **95.9%** (AA); τ³-Banking 23.3% (AA); AutomationBench **13.02%** (AA, unverified at source); GDPval-AA **1038–1115 Elo** (26.9% normalized, AA)

Coding — SWE-bench Pro **58.6%**; SWE-bench Multilingual **76.7%**; SWE-bench Verified **80.2%**; SciCode **52.2%**; OJBench 60.6%; LiveCodeBench v6 **89.6%**; Vibe Code Bench v1.1 37.89% (Vals); no DeepSWE, no FrontierSWE, no CursorBench figure published for K2.6; FrontierMath v2 T1–3 **57.193%** / T4 **25.641%** (Epoch, via BenchLM)

Reasoning — AIME 2026 **96.4%**; HMMT Feb-2026 **92.7%**; IMO-AnswerBench **86.0%**; GPQA-Diamond **90.5%**; MathVision 87.4 / 93.2 (with Python); CharXiv 80.4 / 86.7; MMMU-Pro **79.4%** (80.1% with Python); BabyVision 39.8 / 68.5; V* with python 96.9

Independent trackers:

- **Artificial Analysis (K2.6 Reasoning):** Index **27**, #26/121 in the 1T-class open-weight cohort; 77.3 t/s (#40/78); TTFT 2.72s; **$0.80/task** (#33/43); 180M output tokens (#36/47); 256k context; 1T/32B; Modified MIT; 12 providers. Non-reasoning variant: Index **24**, 65 t/s. Per-eval: AA-LCR 81.0%, CritPt 8.0%, GPQA-D 91.1%, HLE 37.5%, Omniscience index 5.3 (acc 32.6%, hallucination 40.5%), IFBench 76.0%, SciCode 51.5%, APEX-Agents-AA 28.5%, Agentic Index 22.1, Coding Index 61.8
- **Vals AI:** Vals Index accuracy **56.38%** (**#17/91 on SAGE**); Terminal-Bench 2.1 **53.56%**; SWE-bench **76.20%**; LiveCodeBench 86.77%; GPQA-Diamond 89.14%; MMLU-Pro 87.57%; MMMU-Pro 86.30%; Vibe Code Bench 37.89%; latency 20m27s. Release note (2026-04-20): "new **#1 open-weight** on Vals Index … places #7 among all models at 63.9% accuracy", SWE-bench Verified 74.5%, TB2.0 57.3%
- **BenchLM:** 58.4/100, #60/956 (55 of 644); OSWorld 2.0 4.6%, ResearchClawBench 18.0%, Gert Labs 56.82%, CursorBench 3.1 47.6%, FrontierMath v2 57.193% / 25.641%, AIME 2026 96.4%, HMMT 92.7%, MMAnswerBench 86.0%
- **Epoch AI:** FrontierMath v2 confirmed (338 problems, released 2026-06-12); leaderboard values not rendered in fetched HTML (the numbers above are BenchLM-attributed)
- **ThinkPol:** "Kimi K2.6, an open-weights model from Chinese startup Moonshot AI, won the challenge outright: 22 match points, 7-1-0." — and "Kimi K2.6 now scores 54 on the Artificial Analysis Intelligence Index" (30 Apr 2026), versus AA's current 27

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 76/100.** A broad agentic profile — Terminal-Bench 2.0 **66.7%** / 2.1 65.92% (AA) / 53.56% (Vals), Toolathlon 50.0%, MCPMark 55.9%, MCP Atlas 55.9%, Claw-Eval 62.3%, BrowseComp 83.2% (86.3% with an agent swarm), DeepSearchQA F1 **92.5%**, WideSearch 80.8%, OSWorld-Verified 73.1%, APEX-Agents 27.9%, τ²-bench 95.9%. Capped by the rubric's anchors (TB2.1 ~88%+ → 66.7% at best; τ3 ~50%+ → 23.3%; GDPval ~1750+ → 1038–1115), by AutomationBench at 13.02%, and by the 13-point Terminal-Bench 2.1 spread between the vendor table and Vals.
- **Reasoning: 78/100.** AIME 2026 **96.4%**, HMMT February-2026 **92.7%**, IMO-AnswerBench 86.0%, GPQA-Diamond 89.14–91.1%, FrontierMath v2 57.193% (T1–3), MathVision 87.4–93.2%, MMMU-Pro 79.4–86.3%. Capped by FrontierMath Tier 4 at **25.641%**, by CritPt **8.0%**, by the AA Intelligence Index of **27** (the launch-day 54 was the pre-rebaselining index), by HLE 34.7–37.5%, and by the low 32.6% Omniscience accuracy.
- **Context window: 84/100.** **262,144 tokens** (256K) with a 32,768 default output — the rubric's 200K–500K band (65–84). The output cap is the notable part: 32k by default, so a single response is limited well below the 64k line, and **no long-context retrieval measurement exists** for the model. The 1M window belongs to Kimi K3.
- **Multimodal: 88/100.** Text, image and video in with text out — the rubric's "+video/PDF = 75–90" band, with measured support: MMMU-Pro 79.4% (80.1% with Python) / 86.30% (Vals), CharXiv 80.4% / 86.7% with Python, MathVision 87.4% / 93.2%, BabyVision 39.8% / 68.5% with Python, V* 96.9% with Python, and a 400M MoonViT encoder. Held at 88 because there is no audio input and the vision evidence is largely vendor-published.
- **Coding: 78/100.** SWE-bench Verified **80.2%** (vendor) / 76.20% (Vals) / 74.5% (Vals launch note), SWE-bench Pro 58.6%, Multilingual 76.7%, LiveCodeBench v6 89.6% (vendor) / 86.77% (Vals), Terminal-Bench 2.0 66.7%, SciCode 52.2%, FrontierMath v2 57.193%. Capped by the absence of any DeepSWE, FrontierSWE or CursorBench figure, by SWE-bench Pro 58.6% (under the 74% anchor), and by the 6-point SWE-bench Verified spread between the vendor card and Vals.
- **Cost efficiency: 84/100.** The evaluated route — OpenCode Zen `opencode/kimi-k2.6` — is billed at **$0.95 in / $4.00 out** per 1M with a $0.16 cache hit, which the rubric places at roughly 84; OpenRouter's $0.65/$3.41 is cheaper still. The deductions are the 1.5× OpenRouter-vs-vendor input price, the account-tier rate limits (concurrency 1 and 3 RPM at the free tier), and the fact that **Kimi K2.6 has no batch discount** while its successor Kimi K3 costs 3× more per token.
- **Overall Score: 80.8/100.** (76 + 78 + 84 + 88 + 78) / 5 = 80.8 — best-fit: the **April-2026 open-weight champion** — 1T/32B-active, Modified MIT, 256K context, text+image+video, $0.95/$4.00, with the best agentic-tool numbers of any open model of its moment (BrowseComp 83.2%, DeepSearchQA 92.5%, MCPMark 55.9%, Toolathlon 50.0%) — but a 32k default output, no DeepSWE, a 13% AutomationBench and an AA index of 27 that Kimi K3 (44) and Claude Sonnet 5.5 have since overtaken.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA index — 54 (ThinkPol, 2026-04-30) vs 27 today.** Index re-baselining (v4.3.2); the current 27 is scored.
2. **SWE-bench Verified — 80.2% (Moonshot card) vs 76.20% (Vals) vs 74.5% (Vals launch note).**
3. **Terminal-Bench — 66.7% (vendor, TB 2.0) vs 57.3% (Vals at release) vs 53.56% (Vals, TB 2.1).** Different versions and harnesses.
4. **MMMU-Pro — 79.4% (Moonshot) vs 86.30% (Vals).**
5. **APEX-Agents — 27.9% (Moonshot, 452/480 tasks) vs 28.5% (AA).**
6. **GPQA Diamond — 90.5% (card) vs 88.4% (blog table) vs 89.14% (Vals) vs 91.1% (AA).** The card and the blog disagree by 2 points.
7. **AIME 2026 — 96.4% (card) vs 93.3% (blog table).**
8. **Price — $0.95/$4.00 (Moonshot, Zen) vs $0.65/$3.41 (OpenRouter).**
9. **Context — 256K everywhere official/AA/OpenRouter/Vals/BenchLM;** AA's FAQ text oddly says "a context window of 260k tokens". The 1M figure belongs to Kimi K3, and this report does not carry it over.
10. **Output limit — "no published hard cap" (docs), API default 32k, Vals 256k, OpenRouter 235,929.** The 32k default is used in the Context score, and it is a real constraint for long single responses.
11. **AutomationBench 13.02%** could not be verified at source (AA's AutomationBench page exposes only the top three, and BenchLM's ledger omits AutomationBench for K2.6) — flagged as unverified rather than asserted.
12. **No Terminal-Bench 4.0 row exists** for K2.6 (the official board returned no model rows), so the AA field (0.505%) is the only 4.0 datapoint.

### Notes on identity

- `kimi-k2.6` is a distinct model from `kimi-k2.5` (deprecated 2026-08-05, $0.60/$3.00), `kimi-k2.7-code` ($0.95/$4.00), `kimi-k2.8` (no Zen row; served as `kimi-for-coding`) and **Kimi K3** (2.8T, 1M context, AA index 44, $3/$15) — Moonshot's own successor, and the model whose weights the earlier K2.5 generation sat next to.
- "Kimi-K2.6 has the same architecture as Kimi-K2.5" — a genuine lineage statement, and the open-weights K2.6 is a **Modified MIT** release, unlike Kimi K3's restricted Kimi K3 License.
- **No `reasoning_effort` on this model** — only a thinking on/off flag — so any published K2.6 number is implicitly a thinking-mode run.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the `moonshotai/Kimi-K2.6` Hugging Face model card and Moonshot's tech blog (architecture, Modified MIT licence, the full vendor benchmark table), Moonshot's API documentation (ids, thinking flags, pricing, per-tier rate limits), Artificial Analysis (model page, per-evaluation payload, both reasoning and non-reasoning variants), Vals AI (live table and release note), the BenchLM evidence ledger, Epoch AI's FrontierMath v2 metadata, OpenRouter and OpenCode Zen catalogs, ThinkPol and Hacker News coverage. Vendor-vs-independent conflicts — the index re-baselining, the SWE-bench and Terminal-Bench spreads and the card-versus-blog discrepancies — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.6.md`, using the same headings.
