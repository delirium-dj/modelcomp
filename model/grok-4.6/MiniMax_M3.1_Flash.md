# Grok 4.6 — findings by MiniMax M3.1 Flash

- Source: xAI / SpaceXAI (`grok-4.6`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August-2026 frontier model — "Grok 4.6 joins the frontier of the Artificial Analysis Intelligence Index: It scores 61, in line with GPT-5.6 Sol (max)" at launch — now **deprecated** in favour of Grok 4.7 ("SpaceXAI has launched a newer release"). It is a **500K-context, text+image** model with mandatory reasoning, priced at $2/$6 like its successor, and the only model in this dataset with a **documented, high Terminal-Bench 2.1 score (88.4%)** despite a near-zero Terminal-Bench 4.0 (17–21%).
- **Provider / access:** xAI API `grok-4.6` at `https://api.x.ai/v1` (Responses + Chat Completions; US regional `us.api.x.ai/v1`); OpenRouter `x-ai/grok-4.6` (canonical `x-ai/grok-4.6-20260810`); also via Grok Build, Cursor, Vercel and Cloudflare. Proprietary; no weights.
- **Release / knowledge:** released **2026-08-12** (blog dateline; AA "released on August 12, 2026"). Knowledge cutoff **February 1, 2026**.
- **IDs:** `grok-4.6` (x.ai API), `x-ai/grok-4.6` (OpenRouter). xAI's live docs page for 4.6 now 308-redirects to 4.7, so 4.6's specs survive only in an archived capture.
- **Context window:** **500,000 tokens** (docs, AA, OpenRouter and Vals all agree — *not* 1M). Output limit: docs say "No text output limit"; OpenRouter lists `max_completion_tokens` 450,000; Vals records 500k.
- **Modalities:** text + image (+file) in, text out. **No video in, no audio** — Imagine and Voice are separate xAI APIs.
- **Reasoning controls:** efforts low / medium / **high (default)** / xhigh; reasoning mandatory and default-enabled. OpenRouter adds `reasoning_effort`; Grok 4.7 additionally returns encrypted reasoning on the Responses API.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$2.00 in / $6.00 out / $0.50 cached** for prompts <200K; **$4.00 / $12.00 / $1.00** at ≥200K. Priority processing 2×; US regional endpoint 1.1×; web search $5/1,000 calls. **Batch API is not supported** for 4.6 (no batch discount, unlike Grok 4.3/4.20).
- **Rate limits:** 150 requests/s, 50,000,000 tokens/min; regions us-east-1, us-west-2.
- **Architecture:** proprietary; parameter count not disclosed.

### Raw benchmarks found

> xAI's launch-blog and AA article numbers are marked "vendor"; Artificial Analysis, Vals AI, the official DeepSWE leaderboard, ARC Prize, Epoch AI and the BenchLM ledger are independent.

Agent / tool use:

- Terminal-Bench 2.1: **88.4%** (xAI launch article) / **88.39%** (AA) / **78.3%** (Vals AI) — the vendor figure is the highest Terminal-Bench 2.1 score in this dataset
- Terminal-Bench 4.0: **20.3%** (xAI, quoted in the 4.7 blog) / **21.21%** (AA) / **17.17%** (Vals AI) — near-zero on the current agentic-terminal benchmark
- Terminal-Bench 3.0 **26.5%** (via BenchLM); Terminal-Bench-Science 0.1 **11.43%** (Vals) / 6.19% (AA)
- APEX-Agents **57.5%** (xAI; also "best-verified" in the BenchLM catalogue); APEX-SWE 56.4% (xAI)
- AA-Briefcase **1577 Elo** (xAI/AA article; ~53 turns, ~0.5B input tokens) / 1546 (xAI's 4.7 comparison column)
- GDPval-AA v2: **1753 Elo** (xAI) / **1618.11** (AA); τ³-Banking **50.7%** (xAI) / 50.72% (AA)
- AutomationBench **66.68%** (AA); CursorBench 3.2 **69.9%** (xAI) / 70.8% (via BenchLM); CursorBench 4.0 41.4%; FrontierCode 1.1 Ext **61.3%** (xAI) / 61.3% (via BenchLM); CWE-bench v1 **57.0%**; VulcanBench v3 87.0%; Bug Hunt Bench 27.0 fixes; IPI attack success **51.8%** (via BenchLM); ApprenticeBench 13%; MazeBench 1%
- Cost per Intelligence Index task: **$0.84** (launch, xAI/AA) vs **$1.48** today (AA)

Reasoning / knowledge:

- GPQA Diamond: **94.95%** (AA) / **94.70%** (Vals AI) / 94.7% (via BenchLM)
- HLE **42.91%** (AA); LCR **80.33%** (AA); CritPt **17.14%** (AA); MLCR-AA 12.22% (AA)
- Artificial Analysis Intelligence Index: **44** (#37/217) today, **61** at launch (AA v4.1 composite) — "in line with GPT-5.6 Sol (max)" on the old index
- ARC-AGI-1 **87.00%**, ARC-AGI-2 **67.1%**, ARC-AGI-3 **2.1%** (ARC Prize, via BenchLM)
- FrontierMath v2: Tiers 1–3 **65.965%**, Tier 4 **31.707%** (Epoch AI, via BenchLM); MMLU-Pro 89.4% (Vals)
- Omniscience: index **30.48**, accuracy **48.23%**, hallucination rate **34.29%** (AA)

Coding:

- SWE-bench Verified: **95.60%** (Vals AI) — no official swebench.com row exists for Grok
- DeepSWE v1.1: **65.9%** (xAI) / **65.19%** high, **66.74%** xhigh, **67.48%** medium, **41.65%** low (official DeepSWE leaderboard, mini-swe-agent, rank 15/21) / 65.9% (via BenchLM)
- LiveCodeBench **88.22%** (Vals AI) / 88.2% (via BenchLM); FrontierSWE v2 **25.3%**; FrontierCode 1.1 Ext 61.3%; CursorBench 3.2 70.8%
- No SWE-bench Pro, no Terminal-Bench 4.0 official-board row, no Vibe Code Bench, no CursorBench-4.0 vendor number

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for Grok 4.6. 500K-token window.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 84/100.** One of the strongest agentic-tool profiles measured here — Terminal-Bench 2.1 **88.4%** (xAI) / 88.39% (AA) / 78.3% (Vals), τ³-Banking 50.72%, APEX-Agents 57.5% (best-verified), AA-Briefcase 1577 Elo, CursorBench 3.2 70.8%, FrontierCode 1.1 Ext 61.3%, AutomationBench 66.68%, CWE-bench 57.0%, GDPval-AA 1618–1753, VulcanBench 87.0%. Capped by the rubric's anchors (τ3 ~50%+ → 50.72% is met; GDPval ~1750+ → met only by the vendor figure, 1618 on AA) and by Terminal-Bench 4.0 at 17.17–21.21%, the **51.8% indirect-prompt-injection attack-success rate**, JobBench/ApprenticeBench at 13%, and MazeBench 1%.
- **Reasoning: 84/100.** GPQA Diamond 94.70–94.95%, FrontierMath v2 65.965% (T1–3) / 31.707% (T4), ARC-AGI-1 87.0% / ARC-AGI-2 67.1%, MMLU-Pro 89.4%, HLE 42.91%, LCR 80.33%, CritPt 17.14%. Held below 90 by the current AA Intelligence Index of **44** (the launch-day 61 was on the older index), by FrontierMath Tier 4 at 31.707%, by ARC-AGI-3 at 2.1%, and by the 81.17–81.7% hallucination rates of its 2026 peers.
- **Context window: 92/100.** 500,000 tokens — the rubric's 500K–1M band (85–94) — with no output cap published ("No text output limit"). Not 95+ because the window is 500K rather than 1M, and because **no long-context retrieval measurement exists** for this model.
- **Multimodal: 68/100.** Text and image in, text out — the rubric's "+image in = 60–70" band — with **no published vision benchmark** for Grok 4.6 (AA's MMMU-Pro field is null), so the score sits in the lower half of the band on capability plus an unmeasured vision axis.
- **Coding: 82/100.** SWE-bench Verified **95.60%** (Vals), Terminal-Bench 2.1 88.39% (above the 85% anchor), LiveCodeBench 88.22%, DeepSWE 65.19–67.48% (the official leaderboard's four effort levels), FrontierCode 1.1 Ext 61.3%, CursorBench 3.2 70.8%. Capped by DeepSWE under the 74% anchor, Terminal-Bench 4.0 at ~20%, FrontierSWE v2 at 25.3%, the absence of any SWE-bench Pro or Vibe Code Bench figure, and the 17.9-point spread between xAI's Terminal-Bench 2.1 claim and Vals' run.
- **Cost efficiency: 82/100.** The evaluated route is xAI's own API / OpenRouter at **$2.00 in / $6.00 out** per 1M with a $0.50 cached read (doubling to $4/$12 beyond 200K), which the rubric's anchors place at roughly 82. Artificial Analysis measures $1.48 per Index task, and xAI's launch claim was $0.84 — but the model is **verbose** (94M output tokens) and **no Batch API is offered**, so the practical cost per task is closer to the current $1.48 than to the launch figure.
- **Overall Score: 82.0/100.** (84 + 84 + 92 + 68 + 82) / 5 = 82.0 — best-fit: a **top-tier agentic and coding model on the old benchmark generation** — Terminal-Bench 2.1 at 88.4%, SWE-bench Verified 95.6%, GPQA 94.9% — with the most striking weakness in the dataset on the *new* one (Terminal-Bench 4.0 at ~20%), a 500K window, no vision benchmarks, and a 51.8% prompt-injection attack rate; for 2026 work, Grok 4.7 (Terminal-Bench 4.0 37.6% claimed) is the better buy at the same price.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **AA Intelligence Index — 61 at launch vs 44 today.** The composite was rewritten (v4.3.2 now includes Terminal-Bench 4.0 among its ten evaluations), so the launch claim and the current number are not comparable; the current 44 is scored and the launch claim recorded.
2. **Terminal-Bench 2.1 — 88.4% (xAI/AA) vs 78.3% (Vals).** A 10-point harness gap; AA is the anchor and the vendor figure is not treated as the model score.
3. **Terminal-Bench 4.0 — 20.3% (xAI) vs 21.21% (AA) vs 17.17% (Vals).** All three agree on a weak result.
4. **DeepSWE — 65.9% (xAI) vs 65.19–67.48% across four effort levels on the official leaderboard.** The leaderboard's own numbers are used.
5. **AA-Briefcase 1577 (AA article) vs 1546 (xAI's 4.7 blog comparison column).** Minor.
6. **GDPval-AA — 1753 Elo (xAI) vs 1618.11 (AA).** Both listed; AA used for the cap.
7. **Output limit — "No text output limit" (docs) vs 450,000 (OpenRouter) vs 500k (Vals).** The docs wording is quoted with the two numeric readings.
8. **The 4.6 docs page is gone** (308 → `grok-4-7`), so 4.6's specs survive only in a Wayback capture (2026-08-22) and the archived `developers/models/grok-4.6` page (2026-08-28) — a documentation-lifecycle caveat, not a measurement conflict.
9. **Batch support:** no batch route for 4.6 or 4.7 (Grok 4.3/4.20 get 20% off), so the 2× priority and 1.1× US-region premiums are the only levers — recorded in the cost score.
10. **Grok 4.5 comparison:** same $2/$6 but **$0.30** cache (4.6/4.7 raise it to $0.50), AA index 38.8 — 4.6 is a genuine capability step-up at the same token price, and a cache-price step-up.

### Notes on identity

- `grok-4.6` is a **distinct model** from `grok-4.7` (a new, larger base model: "Grok 4.7 uses a new, larger base model compared to Grok 4.6"), from `grok-4.5` (July 2026, same price, cheaper cache), from `grok-4.3` (1M context, $1.25/$2.50, batch-eligible) and from `grok-build-0.1` (256K, $1/$2).
- Effort levels (low/medium/high/xhigh) are parameters; the AA entry is the "(High)" variant and Vals/DeepSWE runs are labelled by effort.
- **Grok 5 has no verified public evidence** — absent from xAI's model list, OpenRouter, BenchLM and AA — so nothing in this dataset should be read as a Grok 5 score.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — xAI's launch blog and archived docs (including the Wayback capture of the removed 4.6 page), the Artificial Analysis model page, launch article and per-evaluation payload, Vals AI, the official DeepSWE leaderboard, ARC Prize, Epoch AI via the BenchLM ledger, OpenRouter's API and model page, and Hacker News / Simon Willison coverage. Vendor-vs-independent conflicts — chiefly the Terminal-Bench 2.1 spread and the AA index re-baselining — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
