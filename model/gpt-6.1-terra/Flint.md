# GPT-6.1 Terra — findings by Flint

- Source: OpenAI
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's fast, efficient, cost-conscious model in the GPT-6.1 family — combines detailed visual reasoning and precise computer use with clearer, more natural writing; a significant step up from GPT-5.6 Terra while halving API prices vs GPT-5.6 Terra / GPT-6.1 Sol.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`); ChatGPT Work / Codex (Plus, Pro, Enterprise, Edu).
- **Release / knowledge:** Released 2026-11-06; knowledge cutoff 2026-11-06; system-card addendum published same day.
- **IDs:** `gpt-6.1-terra` (OpenAI API); snapshot `gpt-6.1-terra`.
- **Context window:** 1,050,000 tokens total; max input tokens 922,000; max output tokens 128,000.
- **Modalities:** Input text, image; output text; audio/video unsupported; tool calling via Responses API; reasoning effort none/low/medium(default)/high/xhigh/max.
- **Pricing (as of 2026-11-06):** $1.00/$5.00 per 1M input/output; cached input $0.05; cache writes $1.25 (30-min) / $2.50 (12h); prompts >272K input bill at 2× input / 1.5× output; batch & Flex 50% lower; Fast mode 2×; regional +10%.

- **Architecture:** Proprietary OpenAI closed model (GPT-6 family, Terra tier successor to GPT-5.6 Terra).

### Raw benchmarks found

Official (OpenAI — launch blog, system card addendum, API docs):

- Terminal-Bench 4.0: **50.3%** at max reasoning effort — more than double GPT-5.6 Terra's published 21.5%.
- Terminal-Bench-Science 0.1: at max, surpasses GPT-6.1 Sol at lower cost, within 5 pp of Claude Opus 5.5 at <1/5 estimated cost.
- Agents' Last Exam (computer use): at medium effort, **+15 pp** over GPT-5.6 Terra at ~1/3 cost; on par with GPT-6 Astra at 1/10 price; at max effort >3× token efficient vs Claude Opus 5.5, ~9× lower cost per task; 3× faster than Astra/Sol.
- MMMU-Pro: outperforms GPT-5.6 Terra at every reasoning setting; nearly matches GPT-6 Astra / GPT-6.1 Sol at much lower cost.
- OSWorld 2.1: surpasses GPT-5.6 Terra's best score at fraction of cost.
- Factuality: internal error-inducing-prompt benchmark error rate low effort 53.6% → 16.7% (drop ~37 pp); max effort 4.3%.
- ExploitBench internal port: 24.5% (vs GPT-6.1 Sol 21.5%, GPT-6 Astra 31.5%); SEC-Bench Pro: 83.33%.

Independent (Artificial Analysis, Epoch AI, OpenRouter/Vals, TheDecoder, DataCamp, TheModelIndex, AI Stats Live, LuminaBench):

- Artificial Analysis Intelligence Index: **48** (per TheDecoder) / **51** (per AI Stats Live / ai.lounge) — between GPT-6.1 Sol (52) and GPT-5.6 Terra (42); billed as "new benchmark for intelligence per dollar".
- Coding Agent Index v2.0: **48** (Sol 54, Luna 31).
- AA-Omniscience: guessing-only-when-lacking-answer **38%** vs 88% for GPT-5.6 Terra; accuracy +2.
- Cost per task ~$0.05–0.10; output speed 97 tok/s; TTFT 0.96s; end-to-end 6.46s.
- Epoch AI: GPQA Diamond **94.3%** ±1.5, FrontierMath Tiers 1–3 **90.9%**, APEX-Agents **68.3**, SimpleQA 57.3, EBR-bench 78.1; Epoch Capabilities Index **168.1** (#3 of 271).
- TheModelIndex: composite index score **191** (#7 of 209; GPT-4 = 100); GPQA Diamond 96%; HLE 46.2%.
- Vals AI: GPT-5.6 Terra SWE-bench 95.4%, Terminal-Bench 22.7%; GPT-6.1 Terra Terminal-Bench 49.5%.

Cross-source comparison & conflicts:

- OpenAI-reported vs independent: GPT-5.6 Terra reported TB numbers (OpenAI ~77.5/85.8 per other sources vs Vals 22.7) — version/harness spread; GPT-6.1 Terra TB 50.3 (OpenAI) vs Vals 49.5 — close.
- AA Intelligence Index figures differ slightly between publications (48 vs 51) — measurement-set differences.
- OpenAI internal safety/factuality numbers vs independent AA-Omniscience — different metrics.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 4.0 50.3%, OSWorld 2.1 ~74, Agents' Last Exam 57.6% — mid-band tool use (not frontier top tier vs Opus/Sol on hardest tasks).
- **Reasoning: 80/100.** GPQA Diamond 94.3%, FrontierMath ~91%, HLE 46.2 — frontier-adjacent reasoning.
- **Context window: 100/100.** 1.05M context (top tier).
- **Multimodal: 65/100.** Text + image input, text output.
- **Coding: 65/100.** Terminal-Bench 4.0 50.3%, Terminal-Bench-Science within 5 pp of Opus 5.5, SWE-bench (GPT-5.6 Terra 95.4 per Vals; Terra not independently reported) — mid-frontier coding.
- **Cost efficiency: 80/100.** $1.00/$5.00 per MTok — low-cost frontier-tier API pricing.

- **Overall Score: 74/100.** Mean of the five quality dims (Tool 60 + Reasoning 80 + Context 100 + Multimodal 65 + Coding 65) / 5 = 74.0 → 74; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research prioritizing official model card/docs (OpenAI launch + GPT-6.1 Terra system card addendum + OpenAI API docs) plus independent benchmarks/reviews (Artificial Analysis, Epoch AI, OpenRouter/Vals, TheDecoder, TheModelIndex) — three independent web searches.
- Reference URLs:
  - [Introducing GPT-6.1 Terra | OpenAI](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [Addendum to GPT-6 Astra System Card: GPT-6.1 Terra](https://deploymentsafety.openai.com/gpt-6-1-terra/gpt-6.1-terra.pdf)
  - [GPT-6.1 Terra](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [Artificial Analysis: GPT-6.1 Terra — benchmarks, pricing and versions](https://ai.lounge.ai/benchmarks/gpt-6.1-terra)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
