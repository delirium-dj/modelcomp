# Claude Opus 5 — findings by Qwen 4 Max

- Source: Anthropic/claude-opus-5
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's "everyday work" Opus-class model (Jul 24, 2026): near-Fable-5 intelligence at half the per-token price, state-of-the-art at launch on Frontier-Bench, GDPval-AA, AutomationBench and OSWorld cost-efficiency. Self-verifying, proactive agency; most aligned Claude to date (2.3 misaligned-behavior score). Now a legacy model — Opus 5.5 is the current flagship and Sonnet 5.5 beats it on the hardest agentic coding (TB 4.0 70.6 vs 52.3).
- **Provider / access:** Claude API (`claude-opus-5`), Claude.ai (default on Max, strongest on Pro at launch), Claude Code, Cowork; Bedrock/Vertex via Anthropic partners. No data-retention requirement for general access. Cyber Verification Program offers approved enterprises a less-restricted variant.
- **Release / knowledge:** Released 2026-07-24. Knowledge cutoff not stated in the sources read.
- **IDs:** `claude-opus-5`. Fast mode: same ID, ~2.5x default speed at 2x base price.
- **Context window:** 1M tokens input; 128K max output. Eligible for the 300K-output batch beta (Fable/Mythos excluded from that list).
- **Modalities:** Text and image in; text out. No native audio/video input or media generation documented; notably strong code-generated visual artifacts (wind-tunnel and cell-artifact demos). Google's cross-model table reports LVBench 75.4% and CharXiv 83.7% for it.
- **Pricing (as of 2026-11-11):** $5 in / $25 out per 1M — same as Opus 4.8, half of Fable 5 ($10/$50). Cache reads $0.50/1M (10%). Fast mode $10/$50. Effort control (low→max) trades tokens for intelligence.
- **Architecture:** Proprietary; parameters undisclosed. Deliberately not trained on cyber tasks; safeguards close to Opus 4.8 with cyber classifiers intervening ~85% less often than Fable 5's (source-code vuln finding allowed; binary scanning, pentesting, exploit generation blocked). Flagged requests fall back to Opus 4.8 by default in Claude apps; automatic API fallbacks and cache-preserving mid-conversation tool changes shipped in beta alongside it. Biology requests blocked on Fable 5 route to Opus 5.

### Raw benchmarks found

Agent / tool use:

- Zapier AutomationBench: **26.9%** (Anthropic Opus 5.5 cross-table, vendor-run); at launch ~1.5x the next-best pass rate at equal cost/task, and its lowest effort setting still passed more tasks than any model. Zapier: 100% on an end-to-end churn-prevention sequence previous models failed
- OSWorld 2.0: **75.4%** (Google 3.8 Flash table, Google-run) — launch claim: beats Fable 5's best result at ~1/3 the cost; OSWorld 2.1: **74.0%** (Anthropic cross-table; Fable 5 80.7%, Opus 5.5 81.8%, Sonnet 5.5 80.1%)
- Terminal-bench 4.0: **52.3%** (Anthropic Opus 5.5 table) / **51.8%** (Google 3.8 table) — two vendor runs, both cited, not averaged; trails Sonnet 5.5 70.6% and Opus 5.5 66.4%
- GDPval-AA: **1,708 Elo v2.1** (Anthropic) / **1,824 v2** (Google) — different benchmark versions, labelled separately
- Vals Finance Agent v2: **58.6%** (Google table — leads all listed); Harvey Legal all-pass: **6.7%** (second to 3.8 Flash 10.0%)
- Gray Swan IPI ASR@15: **4.8%** — lowest (best) of 16 charted models
- AA Coding Agent Index v1.4: **68.1**

Reasoning / knowledge:

- ARC-AGI-3: **30.2%** — 3x the next-best model at launch (codersera; OpenAI comparison table)
- HLE with tools: **63.6%** (Anthropic cross-table; Fable 5 65.6%, Opus 5.5 67.7%); HLE-Verified: **54.4%** (Google table)
- AA Intelligence Index v4.1.1: **63.1** — second to Fable 5.1 (65.7) in that snapshot; never compare across AA versions
- TB-Science: **29.0**; GDP.PDF: **37.0%** (Google table; Sol 40.0%)
- BioMysteryBench human-difficult: **49.4%**; LABBench2: **84.2%** (Google table)
- Life sciences (Anthropic internal): +10.2 pts spectroscopy structure inference, +7.7 pts protein variant-effect prediction vs Opus 4.8; improves every life-sciences eval

Coding:

- SWE-bench Verified: **96.0%** (vendor, via seawork); independent vals.ai leaderboard: **97.00%** with Mini-SWE-agent, rank #1 as of 2026-09-01 — harness-labelled, not averaged
- Frontier-Bench v0.1: **43.3** (seawork; mini-SWE-agent harness on GKE, mean reward over 5 attempts) — launch SOTA, >2x Opus 4.8 at lower cost/task; wrote its own CV pipeline to solve a FreeCAD task no competitor solved in 5 attempts
- CursorBench 3.2: within **0.5%** of Fable 5's peak at half the cost/task (launch claim); best performance-per-dollar at high/xhigh/max effort. CursorBench 4.0: **46.6** (Anthropic cross-table; Fable 5 51.8, Opus 5.5 57.8)
- FrontierCode v1.1: **48.0** (Anthropic cross-table; Devin: "approaches Fable-level performance at half the cost")
- SWE-bench Pro: **79.2**; DeepSWE: **73.7** (Anthropic) / **74.0** (Google) — within 0.5 pts of Opus 5.5's 74.2
- Customer evals: Lovable +22% over Opus 4.7 on hardest agentic coding with lower variance; Box +8% overall / +11% data analysis / +17% due diligence; finance +9 pts accuracy, 1/3 fewer turns, 60% less time; trading firm 1/7 reasoning tokens at half latency; legal 26% fewer tokens

Long context:

- 1M input / 128K output; $0.50/1M cache reads; 300K-output batch beta eligible
- LVBench: **75.4%**; CharXiv Reasoning: **83.7%** (Google table)
- No MRCR/GraphWalks full-length retrieval number published for Opus 5 in the sources read

### Normalized scores (1–100)

- **Tool use: 92/100.** Launch-era SOTA on AutomationBench (1.5x next-best at equal cost) and OSWorld cost-efficiency, GDPval 1,708, Vals Finance lead, best-in-class prompt-injection robustness (4.8% ASR); capped by TB 4.0 52.3 and OSWorld 2.1 74.0 trailing Sonnet 5.5 / Opus 5.5 / Fable 5.
- **Reasoning: 91/100.** ARC-AGI-3 30.2% (3x next-best at launch), AA v4.1.1 63.1, HLE-with-tools 63.6, broad life-sciences gains; capped by HLE-Verified 54.4 and GDP.PDF 37.0 trailing Sol, and no GPQA figure published.
- **Context window: 96/100.** 1M/128K with 300K batch eligibility and $0.50 cache reads; capped by the 10% cache-read rate (2x Sonnet 5.5 / Opus 5.5's 5%) and no published full-length needle-retrieval evidence.
- **Multimodal: 72/100.** Text+image in, text out; CharXiv 83.7 and strong code-generated visual artifacts; no native media generation or audio/video input.
- **Coding: 92/100.** SWE-bench Verified 96.0% (independent vals 97.0%), Frontier-Bench 43.3 launch SOTA, CursorBench near-Fable at half cost, DeepSWE 73.7 ≈ Opus 5.5; capped by TB 4.0 52.3 and FrontierCode 48.0 trailing Fable 5.1 / Opus 5.5 on the hardest agentic work.
- **Cost efficiency: 52/100.** $5/$25 is 25% above Opus 5.5's $4/$20 and 2.5x Sonnet 5.5, but half Fable 5 with exceptional cost-per-task (OSWorld at ~1/3 Fable cost, best perf/$ on CursorBench high/xhigh/max); Fast mode doubles the rate; cache reads 10%.
- **Overall Score: 88.6/100.** Mean of the five quality dims (92+91+96+72+92)/5 = 88.6. Best-fit: daily-driver agentic coding, knowledge work and computer use at half Fable pricing — but as of Nov 2026 it is legacy: Opus 5.5 and Sonnet 5.5 supersede it on the hardest long-horizon tasks.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Anthropic launch announcement + Appwrite analysis, corroborated by seawork, codersera and the vals.ai SWE-bench leaderboard, plus Anthropic/Google cross-model tables gathered for sibling reports); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting figures kept separate with run/version labels (TB 4.0 52.3 Anthropic vs 51.8 Google; GDPval v2.1 1,708 vs v2 1,824; SWE-V vendor 96.0 vs vals 97.0 Mini-SWE-agent); launch-era SOTA claims dated 2026-07-24 and noted as since superseded; AA index cited only at v4.1.1.
- Reference URLs:
  - [Introducing Claude Opus 5 — Anthropic](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 nears Fable 5 intelligence at half the price — Appwrite](https://appwrite.io/blog/claude-opus-5-nears-fable-5-intelligence-at-half-the-price)
  - [Claude Opus 5 for Coding: 96% SWE-bench, $5/$25 — seawork](https://seawork.ai/en/blogs/claude-opus-5-for-coding/)
  - [Claude Opus 5 Benchmarks Explained (2026) — codersera](https://codersera.com/blog/claude-opus-5-benchmarks-explained-2026/)
  - [SWE-bench Verified Leaderboard and Methodology — vals.ai](https://www.vals.ai/benchmarks/swebench)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.