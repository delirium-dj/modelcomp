# GPT 5.6 Terra — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5.6-terra`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.6 Terra
- **Short description:** OpenAI's lower-cost GPT-5.6 tier (launched 2026-07-09, price cut 2026-07-30) — balances intelligence and cost, roughly the "mini" tier of earlier GPT-5 families, with performance competitive with GPT-5.5; ~50% lower cost per task than Sol on the AA Intelligence Index.
- **Provider / access:** OpenAI API (`gpt-5.6-terra`), Azure, AWS Bedrock; ChatGPT Plus/Pro/Business/Enterprise. Reasoning effort none/low/medium (default)/high/xhigh/max. Tools: web search ($10/1K calls), file search, computer use, code interpreter.
- **Release / knowledge:** 2026-07-09; knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `openai/gpt-5.6-terra`. No Free ID on OpenCode Zen (`noFreeId`).
- **Context window:** 1,048,576 (1M) tokens total; prompts above 272K input reprice the FULL request at 2x input and 1.5x output.
- **Modalities:** text, image, audio, video, PDF in; text out; tool calls, structured outputs.
- **Pricing (as of 2026-10-02):** $2.00/$12.00 per 1M input/output (after the 2026-07-30 20% cut from $2.50/$15); cached input $0.20/M (90% off); cache writes $2.50/M (1.25x uncached); Batch 50% off; extended-context (>272K) $4/$18 for the full request.
- **Architecture:** proprietary MoE (OpenAI); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (vendor launch table, max effort; vs GPT-5.6 Sol 88.8%, Claude Fable 5 83.1%, Opus 4.8 78.9%)
- AA Coding Agent Index v1.1: **77.4** (Codex harness, max — vs Sol 80, Fable 5 77.2, Opus 4.8 72.5, Gemini 3.1 Pro 42.7)
- τ²-Bench Telecom: **86.3%** (Artificial Analysis, max; 72.8% medium)
- IFBench: **71.2%** (AA, max)
- Agents' Last Exam: **50.4%** (vendor; vs Sol 52.7%, Fable 5 46.9%)
- GDPval-AA: **1593 Elo** (vendor; vs Sol 1747.8, Fable 5 1759.6); AA's own GDPval-AA run (max): 46.6%
- AA-Agentic Index: **43.2** (AA, max)
- Management Consulting Tasks (internal): **37.2%**; Big Finance Bench: **44%**
- Claw-Eval / ClawProBench / Toolathlon-Verified: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (vendor, max); **92.5%** (Artificial Analysis, max; 90.8% xhigh, 89.6% high)
- Humanity's Last Exam: **42.9%** (AA, max; 41.9% xhigh, 38.5% high, 33.3% medium)
- FrontierMath (v2): Tiers 1–3 **84.9%**, Tier 4 **68.3%** (vendor)
- AA Intelligence Index: **55** (v4.1, vendor table, max) / **42.1** (AA's own v4.3.2 run, max; 38.0 xhigh, 34.2 high, 30.1 medium)
- CritPt: **30.0%** (AA, max)
- AA-Omniscience: Accuracy **46.8%**, Non-Hallucination Rate **12.1%** (AA, max) — a weakness
- AA-LCR: **83.0%** (AA, max — long-context retrieval/reasoning)
- Omniscience Accuracy / Hallucination Rate: see AA-Omniscience above

Coding:

- DeepSWE v1.1: **69.6%** (vendor, max; vs Sol 72.7%, Fable 5 69.7%)
- AA Coding Index: **76.7** (AA, max; 70.6 xhigh, 67.1 high, 64.7 medium)
- SciCode: **55.0%** (AA, max; 52.3-52.4% at xhigh/high)
- Terminal-Bench Hard: **57.6%** (AA, max; 62.9% xhigh)
- SWE-bench Pro: **63.4%** (vendor, max; vs Sol 64.6%, Mythos 5 80.3%, Fable 5 80.0%)
- LiveCodeBench / SWE-bench Verified / Vibe Code Bench: no verified public score found

Long context:

- 1M-token window; AA-LCR 83.0% (max) above; no MRCR / RULER / GraphWalks score published

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 87.4% sits just under the 88%+ frontier bar, with τ²-Bench Telecom 86.3% and IFBench 71.2% strong; GDPval-AA 1593 (mid-tier), Agents' Last Exam 50.4% and the AA-Agentic Index of 43.2 cap the score.
- **Reasoning: 85/100.** GPQA 92.5–92.9% clears the 90%+ frontier bar and HLE 42.9% (AA, max) just clears the 40%+ bar, with FrontierMath T4 68.3% strong; the AA Intelligence Index of 42.1–55 (under the 60+ bar), CritPt 30.0% and weak AA-Omniscience (46.8% accuracy, 12.1% non-hallucination) cap it.
- **Context window: 95/100.** 1M-token window with AA-LCR 83.0% (max); no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 92/100.** text/image/audio/video/PDF in with text out — the +audio-in band (90–100).
- **Coding: 89/100.** AA Coding Agent Index 77.4 (above Fable 5's 77.2), Coding Index 76.7, Terminal-Bench 2.1 87.4% (above the 85% bar) and SciCode 55.0% (at the 55% frontier reference) clear three of four coding references; DeepSWE 69.6% (under the 74% bar) and SWE-bench Pro 63.4% cap the score.
- **Cost efficiency: 72/100.** $2/$12 per 1M after the 20% July cut sits between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references; AA's $0.55 per Intelligence Index task (max) is ~50% below Sol's $1.04.
- **Overall Score: 89/100.** (86+85+95+92+89)/5 = 89.4 → 89 — the balanced GPT-5.6 pick: near-flagship coding-agent capability (Index 77.4) with omnimodal input at 40% of Sol's list price, with the lower Intelligence Index and weak Omniscience as the trade-offs.

---

## Update 2026-10-08 (6-day re-research)

BenchLM, BenchmarkList, goml and RankLLMs rows found:

- Terminal-Bench 2.1: **88.0%** (BenchmarkList, max, verified 2026-07-21, rank 12/194, 94th percentile; $0.17 weighted cost/task, 166s) — an independent read above the vendor's 87.4%; field leader Fable 5.1 at 91.4%. Vals.ai's own run reads 77.5% (setup-dependent)
- Coding fills: SWE-bench (Vals) **95.4%** — conflicts hard with BenchmarkList's SWE-bench Verified **75.2%** (rank 29/72) and RankLLMs' 77.4%; an unresolved ~20-point spread across harnesses, so neither is adopted into the score. LiveCodeBench (Vals) **85.9%**, Vibe Code Bench v1.1 67.8%, Convex Coding Evals 69.8% (111 tasks, no guidelines), CursorBench 3.1/3.2 64.9%, CursorBench 4.0 41.3%, IOI 65.3%, Code Migration 36.4%, FrontierCode 1.1 Extended 55.8% (Cognition/Devin), FrontierCode 41.3%, Senior SWE-Bench 27.4%, SWE-sweep 1.5%, SWE-Marathon 52/160 trials, Terminal-Bench 4.0 23.6%, Terminal-Bench 3.0 20.8%
- DeepSWE detail (BenchmarkList, verified 2026-10-03): 69.6% pass@1 (95% CI 67.1–72.2%), pass@4 88.5%, mean $4.95/attempt (median $4.11), 75.9 mean agent steps, 9.23M mean input tokens; field leader Opus 5.5 at 74.2%
- Tool/agent fills: BrowseComp **87.5%**, OSWorld 2.0 50.2%, Toolathlon 53.1%, CyberGym 81.8%, ExploitGym 23.2%, AA ITBench 51.0%, APEX-Agents-AA 38.9%, AA Agentic Index 43.7, ApprenticeBench 16%, Android Bench 86.8% (rank 7/46), ReactBench 40.5%, BenchCAD 0.714, VulcanBench v3 87.0%, CodeRabbit long-horizon repository tasks 40.7% pass
- Other: CharXiv 85.9%, BioMysteryBench 49.4% (difficult); goml cross-check: Intelligence Index 55 (max), ~50% lower cost per task than Sol ($0.55 vs $1.04), Coding Agent Index 77 at ~60% lower cost, Pareto position behind Sol and Luna ("at every reasoning effort level, a Sol or Luna setting matches or beats Terra's intelligence at equal or lower cost")
- No score change: TB 2.1 88.0% and BrowseComp 87.5% sit within the Tool 86 / Coding 89 rationale; the SWE-bench spread (75.2–95.4%) is flagged unresolved

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (OpenAI GPT-5.6 launch page and API docs, Artificial Analysis, OpenRouter, ARMES docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
