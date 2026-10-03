# Kimi K2.6 — findings by Ling 3.1 Flash

- Source: Moonshot AI (`moonshotai/kimi-k2.6`; Kimi.com, Kimi App, API, Kimi Code)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's 1T-parameter open-weight flagship (2026-04-21) — HLE-Full 54.0% with tools (top of its release table), GPQA Diamond 88.4–90.5%, DeepSearchQA 92.5 F1 (best in table), SWE-bench Verified 80.2%, LiveCodeBench 89.6%, agent swarms scaling to 300 sub-agents / 4,000 coordinated steps; $0.95/$4.00 per 1M.
- **Provider / access:** Moonshot AI API (Kimi.com, Kimi App, Kimi Code), OpenRouter, Vercel AI Gateway, Cloudflare Workers AI, and ~40 third-party hosts ($0.30/$1.20 to $1.79/$8.94); open weights (1T, KimiK25ForConditionalGeneration); thinking mode; function calling; vision. Web search is not in the base mode table (eval harnesses equipped search, code-interpreter and browsing tools).
- **Release / knowledge:** 2026-04-21 (84 days after K2.5); knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k2.6` / `opencode/kimi-k2.6`. NOTE: the repo `meta.json` is a stale stub ("128K total", "Text in/out") — the model has a 262K window and vision.
- **Context window:** 262,144 (256K) tokens in and out; evals ran at 262,144 with per-step limits (e.g., 49,152 for HLE-Full with tools) and simple context management (only the most recent tool round retained past the threshold).
- **Modalities:** text, image in (vision); text out (ARMES claims native text/image/video — video unverified by Moonshot's own materials).
- **Pricing (as of 2026-10-02):** $0.95/$4.00 per 1M input/output; cached input $0.16/M; third-party hosts from $0.30/$1.20 (Vultr) to $1.79/$8.94 (Privatemode AI); free listings on Nvidia and Alibaba Token Plan.
- **Architecture:** 1.06T-parameter open-weight (KimiK25ForConditionalGeneration).

### Raw benchmarks found

Agent / tool use (Moonshot tech blog; thinking mode, temp 1.0, top-p 1.0, 262,144 context; baselines: Kimi K3, GPT-5.4 xhigh, Claude Opus 4.6 max, Gemini 3.1 Pro high):

- BrowseComp: **83.2%** (behind Gemini 3.1 Pro's 85.9% and Opus 4.6's 83.7%, ahead of GPT-5.4's 82.7% and K2.5's 74.9%); BrowseComp (Agent Swarm): **86.3%** (K2.5: 78.4%)
- DeepSearchQA: **92.5 F1** / **83.0 accuracy** — best in table (Opus 4.6: 91.3/80.6; GPT-5.4: 78.6/63.7; Gemini 3.1 Pro: 81.9/60.2; K2.5: 89.0/77.1)
- WideSearch: **80.8 item-F1** (K2.5: 72.7)
- Toolathlon: **50.0%** (GPT-5.4 54.6, Gemini 3.1 Pro 48.8, Opus 4.6 47.2, K2.5 27.8)
- MCPMark: **55.9%** (GPT-5.4 62.5, Opus 4.6 56.7, Gemini 3.1 Pro 55.9, K2.5 29.5)
- Claw Eval: **62.3 pass^3** / **80.9 pass@3** (Opus 4.6: 70.4/82.4; GPT-5.4: 60.3/78.4)
- APEX-Agents: **27.9** (GPT-5.4 33.3, Opus 4.6 33.0, Gemini 3.1 Pro 32.0, K2.5 11.5)
- OSWorld-Verified: **73.1%** (GPT-5.4 75.0, Opus 4.6 72.7, K2.5 63.3)
- GDPval-AA: **1520 Elo** (vs K2.5's 1309); hallucination rate **39%** (vs K2.5's 65%)
- Agent swarm: scales to **300 sub-agents executing 4,000 coordinated steps** (vs 100/1,500 in K2.5)
- Terminal-Bench 4.0 / τ-Bench / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (Full, w/ tools): **54.0%** — top of its release table (K3 58.7, GPT-5.4 52.1, Opus 4.6 53.0, Gemini 3.1 Pro 51.4, K2.5 50.2); HLE-Full (no tools): **34.7%** (text-only subset: 36.4% without tools, 55.5% with tools)
- GPQA Diamond: **88.4%** (Moonshot blog; third-party trackers cite 90.5%) — behind K3's 91.2 and GPT-5.4's 89.6 in the blog table
- AIME 2026: **93.3** (blog; 96.4 per trackers); HMMT 2026 (Feb): **92.7**; IMO-AnswerBench: **86.0**
- BullshitBench v2: **65%**; Arena Elo — Text **1461**, Code **1513**; WebDev Arena **1513**
- AA Intelligence Index: no verified public score found

Coding:

- Terminal-Bench 2.0 (Terminus-2): **66.7%** (K3 71.8, Gemini 3.1 Pro 68.5, GPT-5.4 65.4, Opus 4.6 65.4, K2.5 50.8)
- SWE-bench Verified: **80.2%** (Opus 4.6 80.8, Gemini 3.1 Pro 80.6, K2.5 76.8)
- SWE-bench Pro: **58.6%** (K3 63.4, GPT-5.4 57.7, Opus 4.6 53.4, K2.5 50.7)
- SWE-bench Multilingual: **76.7%** (Opus 4.6 77.8, Gemini 3.1 Pro 76.9, K2.5 73.0)
- SciCode: **52.2%** — under the 55% reference (GPT-5.4 56.6, Gemini 3.1 Pro 58.9, Opus 4.6 51.9)
- LiveCodeBench v6: **89.6%** (Gemini 3.1 Pro 91.7, Opus 4.6 88.8, K2.5 85.0)
- OJBench (python): **60.6%**; CursorBench v3.1: **47.6%**; Next.js Evals: **67%**; Kimi Code Bench 2.0 (internal): **72.9%**
- DeepSWE / FrontierSWE / AA Coding Index: no verified public score found

Long context / multimodal:

- 262K window; no MRCR/RULER/GraphWalks score published
- MMMU-Pro: **79.4%** (80.1% w/ python); MathVision: **87.4%** (93.2% w/ python); CharXiv (RQ): **80.4%** (86.7% w/ python); BabyVision: **39.8%** (68.5% w/ python); V* (w/ python): **96.9%**

### Normalized scores (1–100)

- **Tool use: 79/100.** DeepSearchQA 92.5 F1 (best in table), BrowseComp 83.2% (86.3% with the agent swarm) and Toolathlon 50.0% (at the ~50% frontier bar) are strong, with MCPMark 55.9%, OSWorld-Verified 73.1% and Claw Eval 62.3 pass^3 supporting; Terminal-Bench 2.0 66.7%, APEX-Agents 27.9 and GDPval-AA 1520 Elo (under the ~1750+ frontier) cap the score.
- **Reasoning: 84/100.** HLE-Full 54.0% with tools tops its release table and GPQA Diamond 88.4–90.5% sits just under the 90%+ frontier band, with AIME 2026 93.3%, HMMT 92.7% and IMO-AnswerBench 86.0% supporting; HLE-Full 34.7% without tools and the missing AA Intelligence Index cap the score.
- **Context window: 74/100.** 262,144-token window (in and out) — above the 200K=70 reference with no ≥98%-at-512K+ figure; well under the 1M frontier.
- **Multimodal: 72/100.** text/image in with text out — the +image-in band (60–70) pushed to 72 by a strong vision suite (MMMU-Pro 79.4%, MathVision 93.2% w/ python, V* 96.9% w/ python); ARMES claims native video input, unverified by Moonshot's own materials.
- **Coding: 78/100.** SWE-bench Verified 80.2%, LiveCodeBench v6 89.6% and SWE-bench Multilingual 76.7% are strong, but Terminal-Bench 2.0 66.7% (under the 85% bar), SciCode 52.2% (under the 55% bar), SWE-bench Pro 58.6% (mid-tier) and CursorBench 47.6% cap the score; DeepSWE and the AA Coding Index are unpublished.
- **Cost efficiency: 89/100.** $0.95/$4.00 per 1M (cached $0.16/M) sits just under the ~88 ($1.25/$4.25) anchor, with open weights and third-party hosts from $0.30/$1.20 as further offsets.
- **Overall Score: 77/100.** (79+84+74+72+78)/5 = 77.4 → 77 — a strong-value open-weight agentic model: best-in-table DeepSearchQA, HLE 54.0% with tools, SWE-bench Verified 80.2%, LiveCodeBench 89.6% at $0.95/$4.00; the 262K context, TB2.0 66.7% and SciCode 52.2% are the gaps.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Moonshot Kimi K2.6 tech blog, Models.dev, ARMES, AI Release Tracker, haimaker); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2_6.md`, using the same headings.
