# GPT-6.1 Sol — findings by Big Pickle

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's mid-tier upgrade to GPT-6 Sol, announced at DevDay 2026-09-29. Positioned below GPT-6 Astra and above GPT-6 Luna; designed to nearly match Astra on agentic coding, computer use, and professional work at roughly one-fifth Astra's token cost. Replaces GPT-6 Sol after just 7 days.
- **Provider / access:** OpenAI. Available in ChatGPT Work and Codex (Plus, Pro, Business, Enterprise, Edu), OpenAI API as `gpt-6.1-sol`, and third-party platforms (OpenRouter `openai/gpt-6.1-sol`, Vercel AI Gateway, GitHub Copilot for Pro+, Max, Business, Enterprise). Chat Completions supports no tool calling; tool calling requires the Responses API.
- **Release / knowledge:** 2026-09-29 (announced). Knowledge cutoff not disclosed.
- **IDs:** `gpt-6.1-sol`.
- **Context window:** 1,050,000 input tokens; max output 128,000. Prompts > 272,000 input tokens are charged at 2x input/cache rates and 1.5x output for the entire request. EU data residency restricts Fast mode.
- **Modalities:** text and image input, text output. Tool calls (Responses API only). JSON mode: not explicitly stated.
- **Pricing (as of 2026-10-01):** $2.00 in / $10.00 out per 1M; cached input $0.10/1M (down from GPT-6 Sol's $0.20); cache writes $2.50/1M. Fast mode 2x; Batch/Flex 50% below standard. Overage: >272K input → 2x in/cache, 1.5x out for whole request.
- **Architecture:** proprietary reasoning model; reasoning effort `low`, `medium` (default), `high`, `xhigh`, `max` (no `none`/`minimal`).

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **75.2%** at high effort (OpenAI; per OpenAI announcement matches GPT-6 Astra at roughly 1/5 cost). Artificial Analysis' GPT-6.1 Sol (max) page shows **73% ±3%** on DeepSWE 1.1 (the Deepswe site also lists GPT-6.1 Sol at 73% in its release coverage). DeepSWE leaderboard from llm-stats reports GPT-6.1 Sol at **0.730 (73%)**.
- DeepSWE v1.0: 68.8% best for GPT-6 Sol context (mentioned in comparisons) — current 1.1 values higher; use 1.1.
- Terminal-Bench 4.0: **37.3% ± 3.8%** (Terminal-Bench leaderboard; max effort, Codex agent).
- Terminal-Bench Science 0.1: **cost $5.47/task average at max effort**; score not published as a single percentage in the main announcement but OpenAI states it "more than doubles GPT-6 Sol's score at maximum reasoning effort at less than half the cost per task". Astra leads at **68.1%**.
- AutomationBench 1.0.6: **+2.2 pp above Opus 5.5** at medium effort (OpenAI chart).
- AA-Briefcase v1.1: improved ~80 Elo over GPT-6 Sol (AA article coverage of GPT-6.1 Sol); GPT-6.1 Sol (max) AA page shows Elo details as part of AA-Briefcase v1.1 (specific value not numerically extracted here).
- OSWorld 2.0 (offline set): **outperforms GPT-6 Sol by 7 pp at max effort**, within **2.1 pp of Astra** at max effort at ~1/7 Astra cost/task.
- GDP.pdf: outperforms Opus 5.5 with fallbacks at < 1/2 cost/task across tested efforts; approaches Astra at ~1/5 cost/task.
- ExploitBench: **99.7%** at max effort (Astra 100%, GPT-6 Sol 81.7%).
- ExploitBench Internal Port (recent vulnerabilities): **21.5%** (GPT-6 Sol 5.5%, Astra 31.5%).
- SEC-Bench Pro (pass@1): **78.8%** (Astra 85.4%, GPT-6 Sol 66.3%, GPT-5.6 Sol 79.1%).
- ExploitGym (intended vulnerability): **35.1%** (Astra 42.4%, GPT-6 Sol 22.1%, GPT-5.6 Sol 30.3%).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2: **52** / **#11 of 223** (GPT-6.1 Sol max, AA model page). AA article reports it "scores 1 point below GPT-6 Astra in the Intelligence Index".
- HealthBench Professional (length-adjusted): **64.2** (Astra 64.7, GPT-6 Sol 60.8).
- HealthBench Hard: **36.2** (Astra 36.6, GPT-6 Sol 30.1).
- MentalHealthBench overall: **57.9% ±1.0** (Astra 58.7%, GPT-6 Sol 54.2%).
- AA-Omniscience Accuracy / Hallucination Rate: **50% / 15%** pattern context (improved from GPT-6 Sol; Astra 51% hallucination context not directly comparable, but OpenAI notes large reduction).
- TroubleshootingBench: **47.96%** (Astra 63.46%, GPT-6 Sol 45.3%) — below Astra.
- ProtocolQA Open-Ended: **40.74%** (Astra 45.37%, GPT-6 Sol 44.4%, threshold 54%).
- Tacit Knowledge and Troubleshooting: **88.50%** (Astra 92.55%, threshold 80%).
- Multimodal Troubleshooting Virology: **55.34%** (Astra 63.11%, GPT-6 Sol 50.6%, threshold 31%).
- Factual error share (de-identified ChatGPT flagged cases, low effort): **7.7%** vs GPT-6 Sol 11.4% (32% reduction).

Coding:

- DeepSWE v1.1: **75.2%** at high effort (OpenAI), 73% (AA/Deepswe). See above.
- Coding Agent Index (AA): gains +3 pts over GPT-6 Sol at max effort; sits 2 pts below Astra.
- ExploitBench Internal Port coding: **21.5%**. See agent/tool use above.

Long context:

- Context window: **1,050,000 input tokens**, **128,000 max output**. 2x overage charges apply >272K input.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong agentic gains: DeepSWE v1.1 73–75%, Terminal-Bench 4.0 37.3% (Codex), OSWorld 2.0 within 2.1 pp of Astra at max effort, AutomationBench beats Opus 5.5 by 2.2 pp at medium effort. Capped because Terminal-bench 4.0 at 37.3% is low relative to top-tier peers and TroubleshootingBench gaps (cyber-related 21.5% vs Astra 31.5%) show it is not Astra-level on hardest cyber exploitation tasks.
- **Reasoning: 87/100.** AA Intelligence Index 52 (#11/223), nearly matches Astra on health (HealthBench Professional 64.2 vs 64.7), low hallucination context, and 32% factual-error reduction at low effort. Capped by TroubleshootingBench 47.96% vs Astra 63.46%, ProtocolQA Open-Ended 40.74% below threshold, and 1–16 point gaps on hardest science/cyber evaluations.
- **Context window: 98/100.** 1,050,000 input with 128K output and documented pricing; overage is well-specified. Held off 100 only because >272K input triggers 2x/1.5x multiplier on the whole request, reducing effective value for very large single prompts.
- **Multimodal: 70/100.** Text and image input with text output; no video/audio input independently verified and AA lists text+image. Tool calling only in Responses API. Limited multimodal harness coverage in published numbers.
- **Coding: 87/100.** DeepSWE v1.1 73–75% is very strong and matches Astra cost-effectively; coding agent index gains +3 pts over GPT-6 Sol. Capped by Terminal-Bench 4.0 being 37.3% (coding/agent environment) and no standalone LiveCodeBench/SWE-bench Verified values published.
- **Cost efficiency: 91/100.** $2/$10 base with $0.10 cached input and 50% below standard for Batch/Flex; OpenAI reports 1/5 Astra task cost on DeepSWE/GDP.pdf and $5.47/task on Terminal-Bench Science 0.1 vs Astra $23.80. Slightly reduced by >272K overage multiplier and verbose reasoning at high/max effort.
- **Overall Score: 85/100.** Mean of the five non-cost dims (Tool 82 + Reasoning 87 + Context 98 + Multimodal 70 + Coding 87) / 5 = 84.8 → 85. Best fit: cost-effective agentic coding, computer use, and business workflows where Astra is overkill; avoid for the hardest wet-lab/cyber exploitation cases.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-01
- Method: public internet research (OpenAI announcement, DeepSWE leaderboard, Terminal-Bench leaderboard, Artificial Analysis model page and articles, llm-stats, OpenAI system card addendum summary). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
