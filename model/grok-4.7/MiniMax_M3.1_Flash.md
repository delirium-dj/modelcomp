# Grok 4.7 — findings by MiniMax M3.1 Flash

- Source: xAI / SpaceXAI (`grok-4.7`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's September-2026 flagship, built on "a new, larger base model compared to Grok 4.6" — it keeps the same 500K window and $2/$6 price as 4.6 but buys a large agentic-coding gain (Terminal-Bench 4.0 **20.3% → 37.6%** claimed, DeepSWE 65.2% → 71.0%, AA Coding Agent Index 47 → 56) at roughly **2× the cost per task** and **~2× the output tokens**. AA: "Grok 4.7 scores +2 points over Grok 4.6 on the Intelligence Index, with strong performance on agentic knowledge work tasks."
- **Provider / access:** xAI API `grok-4.7` at `https://api.x.ai/v1` (Responses + Chat Completions); OpenRouter `x-ai/grok-4.7` (canonical `x-ai/grok-4.7-20260916`); also Grok Build, Cursor, Vercel, Cloudflare. Proprietary; no weights.
- **Release / knowledge:** released **2026-09-21** (AA "was released on September 21, 2026"). Knowledge cutoff **May 2026** — "The knowledge cut-off date of Grok 4.7 is May 2026."
- **IDs:** `grok-4.7` (x.ai API), `x-ai/grok-4.7` (OpenRouter).
- **Context window:** **500,000 tokens** ("unchanged from Grok 4.6"). Max output: "**No text output limit**" (docs); Vals records 500k.
- **Modalities:** text and image in, text out — no video, no audio.
- **Reasoning controls:** efforts low / medium / **high (default)** / xhigh; and uniquely for 4.7, "**Encrypted reasoning is always returned on the Responses API**".
- **Pricing (as of 2026-10-19, per 1M tokens):** **$2.00 in / $6.00 out / $0.50 cached** (<200K prompts), **$4.00 / $12.00 / $1.00** (≥200K). A **fast variant** costs "2x the standard token rates, or 1.5x for long-context requests" and is **Cursor / Grok Build only — not on the public API**. Priority processing 2×; US regional endpoint 1.1×; web search $5/1,000 calls. **Batch API not supported.**
- **Rate limits:** 150 requests/s, 50,000,000 tokens/min; regions us-east-1, us-west-2, us-central-1.
- **Architecture:** proprietary, on a new larger base model; parameter count not disclosed.

### Raw benchmarks found

> xAI's launch-blog table and the AA article are marked "vendor"; Artificial Analysis, Vals AI, ARC Prize, Epoch AI and the BenchLM ledger are independent. xAI's table compares "4.7 xHigh" against "4.6 High".

Agent / tool use:

- Terminal-Bench 4.0: **37.6%** (xAI) / **38.00%** (via BenchLM) / **25.76%** (AA) / **28.79%** (Vals AI)
- Terminal-Bench 2.1: **73.41%** (Vals AI) / 73.4% (via BenchLM); Terminal-Bench-Science 0.1 **10.00%** (Vals) / 4.76% (AA)
- CWE-bench v1: **68.0%** (via BenchLM) — tied for best in the catalogue with GPT-6 Astra
- EEBench V1 core corpus: **64.0%** (xAI) — best-verified in the catalogue
- Hermes Index **39.3%**; 150 agent tasks graded on files and state **74.4%**; Agentic Index? not published
- AA-Briefcase v1.1: **1657 Elo** (xAI/AA; +111 over 4.6), analytical quality 1994 vs 1690, presentation 1499 vs 1519
- GDPval-AA: **1695 Elo** (xhigh) vs 1605 for 4.6; AA's own measurement 1711.07
- CursorBench 4.0: **46.3%** (xAI) / 46.3% (via BenchLM); Harvey Legal **19.6%** (xAI) / 18.33% (Vals AA); MazeBench 1%; Bug Hunt Bench 29.0 fixes; FrontierSWE v2 29.5%
- AA Coding Agent Index: **56** vs 47 for 4.6 (xhigh) — "Grok 4.7 + Grok Build now ranks 4th, behind only Claude Fable 5.1, GPT-6 Astra, and Claude Opus 5"
- AutomationBench **65.56%** (AA); ITBench-AA 42.08%; GDP.pdf 20.0%; AnalystAgent 52.5%

Reasoning / knowledge:

- FrontierMath v2: Tiers 1–3 **52.982%**, Tier 4 **17.073%** (Epoch AI, via BenchLM) — *lower* than Grok 4.6's 65.965% / 31.707%
- ARC-AGI-1 **89.50%**, ARC-AGI-2 **61.4%**, ARC-AGI-3 **1.8%** on the standard harness and **7.02%** on the provider adapter
- HLE **43.14%** (AA); LCR **76.67%** (AA); CritPt **17.71%** (AA); MLCR-AA 15.0% (AA)
- HealthBench Professional **56.7%** (xAI) / 56.7% (via BenchLM) — up from 4.6's 48.5%; Harvey legal 19.6%
- Omniscience: index **32.03**, accuracy **47.45%**, hallucination rate **29.37%** (AA) — 4.7's hallucination rate is the lowest of the two Groks
- Artificial Analysis Intelligence Index: **46** (#30/217) — the same at launch and today
- LatchBio biosafety **62.4%**; HackerBench v0.3 allows only **3.3%** of risky dual-use prompts (xAI safety table)

Coding:

- DeepSWE v1.1: **71.0%** (xAI, high effort) / 73% (AA Coding-Agent harness) — no row on the public DeepSWE leaderboard
- CursorBench 4.0 46.3%; FrontierCode 1.1 **33.83%** (AA); LiveCodeBench: **no verified public score found**; SWE-bench: **no verified public score found** (no swebench.com row, no Vals row)
- TB-Science 4.76–10.0%; FrontierSWE v2 29.5%

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for Grok 4.7. 500K-token window, no text output limit.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 82/100.** Strong agentic profile — Terminal-Bench 4.0 **37.6%** (xAI) / 38.00% (BenchLM) / 25.76% (AA) / 28.79% (Vals), CWE-bench v1 **68.0%** (tied best in the catalogue), EEBench 64.0% (best-verified), AA-Briefcase 1657 Elo, GDPval-AA 1695–1711, CursorBench 4.0 46.3%, AutomationBench 65.56%, Hermes Index 39.3% with 150 agent tasks at 74.4%. Capped by the 25.76–38.00% spread on Terminal-Bench 4.0 (the same benchmark's 70.60% leader is 32 points away), by Terminal-Bench 2.1 at only 73.41%, and by no τ-bench, Toolathlon or MCP-Atlas figure.
- **Reasoning: 82/100.** ARC-AGI-1 89.50% / ARC-AGI-2 61.4%, HLE 43.14%, LCR 76.67%, CritPt 17.71%, HealthBench Professional 56.7%, and the **lowest hallucination rate of the two Groks (29.37%)**. Capped by the current AA Intelligence Index of **46** (under the rubric's 60+ anchor), by FrontierMath v2 at 52.982% / **17.073%** — *worse* than Grok 4.6's 65.965% / 31.707% — and by ARC-AGI-3 at 1.8% (7.02% on the adapter).
- **Context window: 92/100.** 500,000 tokens with "No text output limit" — the rubric's 500K–1M band (85–94). Not 95+ because the window is 500K, not 1M, and because **no long-context retrieval measurement exists** for this model.
- **Multimodal: 68/100.** Text and image in, text out — the rubric's "+image in = 60–70" band — with **no published vision benchmark** for Grok 4.7 (AA's MMMU-Pro field is null), so the score sits in the lower half of the band on an unmeasured axis.
- **Coding: 78/100.** Terminal-Bench 4.0 25.76–38.00%, DeepSWE 71.0–73%, CursorBench 4.0 46.3%, FrontierCode 33.83%, FrontierSWE v2 29.5%, Terminal-Bench 2.1 73.41%. Capped by the **complete absence of a SWE-bench figure and of a LiveCodeBench figure** for Grok 4.7, by DeepSWE only just under the 74% anchor, and by Terminal-Bench 4.0's wide measurement spread.
- **Cost efficiency: 80/100.** The evaluated route is xAI's API / OpenRouter at **$2.00 in / $6.00 out** per 1M with a $0.50 cached read (doubling past 200K), which the rubric places at roughly 82 — one point lower because Artificial Analysis measures **$3.74 per Index task (#102 of 114)**: the model is extremely verbose (240M output tokens on the index, #113/116) and **Batch is not supported**, so the effective per-task cost is roughly double Grok 4.6's $1.48 at the same token price. The Cursor-only fast variant at 2× is not available on the public API.
- **Overall Score: 80.4/100.** (82 + 82 + 92 + 68 + 78) / 5 = 80.4 — best-fit: the **agentic-coding upgrade over Grok 4.6** (Terminal-Bench 4.0 up ~17 points claimed, DeepSWE up 5, EEBench 53 → 64) with a better hallucination rate, bought with roughly double the tokens and no batch discount — but still behind the leaders on Terminal-Bench 4.0 (38% vs 70.6%) and on reasoning (FrontierMath Tier 4 17%), and with no published SWE-bench or LiveCodeBench score at all.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 37.6% (xAI) vs 38.00% (BenchLM) vs 25.76% (AA) vs 28.79% (Vals).** A 12-point spread on the same benchmark; AA is the anchor and the vendor figure is listed.
2. **DeepSWE — 71.0% (xAI, high effort) vs 73% (AA Coding-Agent harness)**, and the public DeepSWE leaderboard has **no grok-4-7 rows at all**.
3. **FrontierMath regression:** 4.7 (52.982 / 17.073) is *worse* than 4.6 (65.965 / 31.707) — the opposite of the capability story, and a genuine caveat.
4. **AA index 46 at launch and 46 today**, unlike Grok 4.6 (61 → 44) — the v4.3.2 re-baselining hit 4.6 harder, so the two models are not comparable on the index.
5. **Cost per task — $1.48 (4.6) vs $3.74 (4.7)** at identical token prices: the 4.7 launch blog concedes "~81k output tokens/task vs 36k (4.6 high)" and "~188 tok/s on long prompts", i.e. the same sticker price buys roughly half the work.
6. **CursorBench 4.0 for 4.6 — 41.4% (BenchLM/Cursor) vs 40.4% (xAI's 4.7 blog)**, and AA-Briefcase for 4.6 — 1577 (AA article) vs 1546 (xAI's 4.7 blog). Small transcription differences inside xAI's own comparison.
7. **Vals AI internal drift for 4.7:** the live table (58.56% index, TB 4.0 28.79%, Harvey 18.33%) vs the 2026-09-21 update note (60.22%, 28.28%, 12.50%).
8. **Output limit — "No text output limit" (docs) vs 500k (Vals) vs 450,000 (OpenRouter, for 4.6).**
9. **No independent public run of Grok 4.7 exists** for SWE-bench or LiveCodeBench, and swebench.com's HTML contains no "grok" row for either model — the coding score rests on four published numbers.

### Notes on identity

- `grok-4.7` is a **distinct model** from `grok-4.6` (new, larger base model), `grok-4.5` (July 2026, $0.30 cache), `grok-4.3` (1M context, batch-eligible, $1.25/$2.50), `grok-4.20`, `grok-build-0.1` (256K, $1/$2) and `grok-4.1-fast`.
- The "fast variant" is a **Cursor/Grok Build serving mode at 2× the token rates**, not a separate public model id.
- **Grok 5 has no verified public evidence** — xAI's model list, OpenRouter, BenchLM and AA all lack it.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — xAI's launch blog and model documentation, the Artificial Analysis model page, launch article and per-evaluation payload, Vals AI (live table and its launch-day update note), ARC Prize, Epoch AI via the BenchLM ledger, OpenRouter's API, and Hacker News coverage. Vendor-vs-independent conflicts — chiefly the 12-point Terminal-Bench 4.0 spread, the DeepSWE absence from the public leaderboard and the FrontierMath regression versus 4.6 — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
