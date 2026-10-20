# Grok 4.6 — findings by Step 5 Preview

- Source: xAI (`grok-4.6`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August 2026 flagship (released 2026-08-12; succeeded by Grok 4.7 on 2026-09-21) — a post-training refresh of Grok 4.5 focused on long-running agents and interactive/visual work. Returns to the frontier group on the Artificial Analysis Intelligence Index (61, tied with GPT-5.6 Sol), takes #1 on GPQA Diamond, and leads the knowledge-work Elo boards (GDPval-AA v2, AA-Briefcase) at unchanged $2/$6 pricing.
- **Provider / access:** xAI API `grok-4.6` (Responses API + Chat Completions); Grok Build, Cursor, OpenRouter `x-ai/grok-4.6`, Vercel AI Gateway, Cloudflare, Amazon Bedrock. No OpenCode Zen Free ID found — paid API only.
- **Release / knowledge:** 2026-08-12; knowledge cutoff 2026-02-01.
- **IDs:** `grok-4.6` (xAI), `x-ai/grok-4.6` (OpenRouter), `spacexai/grok-4.6` (Vercel route).
- **Context window:** 500,000 tokens (no published output cap; Vercel lists 500K max output). Texts and images in → text out.
- **Modalities:** Text + image in → text out (jpg/png, 20 MiB max); reasoning effort low / medium / high (default) / xhigh (cannot be disabled); function calling, web search ($5/1K calls), X search ($5/1K), code execution ($5/1K).
- **Pricing (as of 2026-10-09):** $2.00 / MTok input, $0.50 cached, $6.00 output — **at or above 200K prompt tokens the whole request bills at $4 / $1 / $12**; Priority Processing (`service_tier: priority`) 2x all token types; tools billed per call. Note: cached input rose from $0.30 (Grok 4.5) to $0.50, and AA measured the same suite costing 1.84x more than 4.5 ($1,068 vs $579; $0.84/task) because 4.6 emits 47% more output tokens.
- **Architecture:** Proprietary (undisclosed parameters).

### Raw benchmarks found

- BenchLM composite (2026-10-19): **67.09/100** overall, #28 of 956 models, 40 of 644 benchmarks covered (partial coverage — conservative); an official xAI model-documentation page now exists
- Artificial Analysis today (2026-10-19): Intelligence Index **44** (#37/217, 4/4 units — matches the file's rebased 44.3), 65.4 tok/s, TTFT 37.19s, $2.00/$6.00 with 75% cache discount (blended $1.35/M; $1.48 per Index task), 500k context, 4 providers, 94M Index tokens (somewhat verbose) — DEPRECATED on AA (suggests Grok 4.7)

Agent / tool use:

- Terminal-Bench 2.1: **88.4%** (AA, high — #3) / 88.0% (vendor); Vals Terminus-2 archived run: **78.28%** (#13/76)
- Terminal-Bench 3.0: **26.0–26.5%** (leaderboards — far behind GPT-5.6 Sol Max's 34.6%)
- Terminal-Bench 4.0: **17.2%** (AA) / 17.17% (Vals, #26/45 — same as Kimi K3)
- τ³-Banking: **50.7%** (AA, #2); τ-Bench Banking 44.3–50.7% across efforts
- AutomationBench-AA: **66.7%**; AA Agentic Index: **53.4%**
- GDPval-AA: **Elo 1753** (vendor — table lead) / **1643 Elo, 56.1%** (AA)
- AA-Briefcase: **Elo 1577** (vendor — table lead)
- APEX-Agents: **57.5%** (vendor; Fable 5 Max 59.2%); APEX-SWE: 56.4% (Terminus-2)
- Claw-Eval / ClawProBench: **no verified public score found**
- Cost per task: **$0.84** (AA Intelligence Index run; $0.78/test on genztech's coding board)

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (AA — #1 of 246 models); Vals 94.7%
- HLE: **42.9%** (AA, high — #15)
- Artificial Analysis Intelligence Index: **61** on v4.1.1 (high; tied with GPT-5.6 Sol Max at 60.93, 2 behind Opus 5's 63, 6th of 95) / **44.3** on the rebased v4.3.2
- SciCode: **56.5%** (AA, high); MMLU-Pro: **89.4%** (Vals)
- AA-Omniscience: index **30.5**, accuracy 48.2%, hallucination rate 34.3% (AA, high)
- AA-LCR: **81.0%** (AA, high)

Coding:

- SWE-bench Verified: **95.6% ±0.92** (Vals AI, mini-swe-agent bash-only — #3 of 30 on one coding board; 4th of 82 systems behind Claude Opus 5's 97.0%, DeepSeek V4 Pro 0813's 96.4% and GPT-5.6 Sol's 96.2%); independent RankLLMs composite reads 78.5%; xAI publishes no SWE-bench figure
- DeepSWE v1.1: **65.9%** (vendor; behind GPT-5.6 Sol's 73% and Fable 5's 70%)
- CursorBench 3.2: **69.9%** (vendor) / 70.8% (Cursor); CursorBench 4.0: **41.4%**
- FrontierCode 1.1 Extended: **61.3%** (vendor; Fable 5 Max 63.6%)
- LiveCodeBench: **88.2%** (Vals); Vibe Code Bench v1.1: **76.2%** (Vals); AA Coding Index: **76.8%**
- SWE-Marathon v1.1 and OfficeQA Pro reported in the model card (no public figure extracted)
- New independent rows (2026-10-19): AA EnterpriseOps-Gym **48.3%**, ApprenticeBench **13%**, CWE-bench v1 **57.0%**, MazeBench **1%**, Bug Hunt Bench **27.0 fixes**, VulcanBench v3 **87.0%**, FrontierSWE v2 **25.3%**, Design Arena Website **1289**, AA-LCR **80.3%** (reconfirms the 81.0% read), CritPt **17.1%**, ARC-AGI-1 **87.00%** / ARC-AGI-2 **67.1%** (ARC Prize — the file's first ARC-AGI-2 row) / ARC-AGI-3 **2.1%**, Gray Swan IPI **51.8%** (weak safety), Epoch FrontierMath v2 Tiers 1–3 **65.965%** / Tier 4 **31.707%** (mid-band math)

Multimodal:

- Text + image in; **no MMMU-Pro / CharXiv figure published** for Grok 4.6

Long context:

- 500K window with the whole-request doubling above 200K prompt tokens; AA-LCR 81.0% (AA, high) is the only public long-context measure; **no MRCR/RULER**

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 88.4% (AA, #3), τ³-Banking 50.7% (#2), AutomationBench-AA 66.7% and GDPval-AA 1643 are frontier-band; capped by Terminal-Bench 3.0 at 26%, TB4.0 at 17.2%, APEX-Agents 57.5% and no published Claw-Eval.
- **Reasoning: 90/100.** GPQA Diamond 94.9% is #1 of 246 on AA's board, the AA Intelligence Index reads 61 on v4.1.1 (tied with GPT-5.6 Sol), and HLE 42.9% / SciCode 56.5% / MMLU-Pro 89.4% support depth; capped by HLE ~12 points behind the Fable-5 class and the rebased index reading of 44.3.
- **Context window: 89/100.** 500,000 tokens with no published output cap sits in the 500K–1M band; AA-LCR 81.0% (high) supports it, but the 100 tier is unreachable at 500K and the ≥200K cliff reprices the entire request 2x — while xAI's own older Grok 4.3/4.20 models carry 1M windows.
- **Multimodal: 68/100.** Text + image in → text out is the 60–70 band, placed near its top (top-of-board GPQA-adjacent vision-assisted work and Cursor-positioned interactive use) with no MMMU-Pro/CharXiv number published to justify more.
- **Coding: 87/100.** SWE-bench Verified 95.6% (Vals, independent — #3–4 in the field), CursorBench 3.2 69.9%, FrontierCode 61.3% and Coding Index 76.8% are frontier-band; capped by DeepSWE 65.9% (13–16 points behind Sol/Fable on the contamination-resistant suite), CursorBench 4.0 41.4% and TB3.0/TB4.0 mid-20s/17%.
- **Cost efficiency: 66/100.** $2/$6 per MTok is the same tier as GPT-6.1 Sol/Claude Sonnet 5 (between the methodology's $3/$15 ≈ 60 and $0.60/$2.20 ≈ 92), and it is the cheapest of the AA-index-61 cohort; capped by the $0.50 cache rate (up 67% vs 4.5), the 200K whole-request cliff with no batch discount, $5/1K tool calls, and a measured 1.84x bill growth from higher output verbosity.
- **Overall Score: 84/100.** Best-fit recommendation: the intelligence-per-dollar frontier pick — Opus-5-class reasoning and knowledge-work Elo at $2/$6; run your own repository evals before trusting the vendor coding table, and pin a cache key to avoid the 4x input-price failure mode.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (deprecated, suggests Grok 4.7: Index 44 #37/217, 4/4 units — unchanged; 65.4 tok/s; TTFT 37.19s; $2/$6 confirmed) and BenchLM (composite 67.09/100, #28/956, 40/644 benchmarks; official xAI docs page now exists): new rows AA EnterpriseOps-Gym 48.3%, ApprenticeBench 13%, CWE-bench v1 57.0%, MazeBench 1%, Bug Hunt Bench 27.0 fixes, VulcanBench v3 87.0%, FrontierSWE v2 25.3%, AA-LCR 80.3% (reconfirms 81.0%), CritPt 17.1%, ARC-AGI-1 87.00% / ARC-AGI-2 67.1% (first ARC-AGI-2 row), Gray Swan IPI 51.8% (weak safety), Epoch FrontierMath v2 66.0%/31.7% — all consistent with the existing Tool use 84 / Reasoning 90 / Context 89 / Multimodal 68 / Coding 87 / Cost 66 reads, no score change. Second-pass verification (2026-10-10) cross-referenced rankllms.com (independent composite — SWE-bench Verified 78.5%, OSWorld 58.0%, Terminal-Bench 2.1 26.0% low-confidence, GDPVal-AA Elo 1753, APEX-Agents 57.5%, AA Intelligence Index 61, composite 55.6 #15) — same conclusion. Prior pass (2026-10-09) used xAI launch post + model card + pricing docs, Artificial Analysis, Vals AI, BenchLM, OpenRouter, Ridge, eesel AI, agentguides, genztech.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
