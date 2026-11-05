# GPT-6.1 Sol — findings by Mistral Large 4

- Source: OpenAI (`gpt-6.1-sol`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's point upgrade of GPT-6 Sol, announced 2026-09-29 at DevDay — "near-Astra intelligence at one-fifth of the price"; replaced GPT-6 Sol after just 7 days. No GPT-6.1 Astra shipped (scrapped over internal safety/deception findings per WSJ/TechCrunch).
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), ChatGPT, Codex (with Ultrafast tier up to 8x); beta multi-agent support in the Responses API. Responses API.
- **Release / knowledge:** Released 2026-09-29 (DevDay 2026); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `gpt-6.1-sol` (OpenAI API); `openai/gpt-6.1-sol` (OpenRouter).
- **Context window:** 1,050,000 tokens; requests >272K input billed at 2x input / 1.5x output (lmspedia note).
- **Modalities:** Text + image in, text out; reasoning effort levels (high recommended sweet spot); tool/function calling, computer use, browsing.
- **Pricing (as of 2026-11-05):** $2 / $10 per 1M input/output (permanent, not promo — cut 50% vs GPT-5.6 Sol); cached input $0.10/M (95% cache discount, up from 90% on 6 Sol). No free tier.
- **Architecture:** Proprietary, params not disclosed; improved caching/inference over GPT-6 Sol; stronger CoT controllability and fewer misalignment flags (safety addendum).

### Raw benchmarks found

Official launch + safety addendum cross-checked against AA, BenchLM, codersera, AIToolsReview, TechCrunch, emergent; conflicts listed side by side:

Agent / tool use:

- OSWorld 2.0: **71.4%** (AIToolsReview, OpenAI benchmarks)
- AutomationBench 1.0.6: reported on launch charts (BenchLM; exact % not captured)
- GDP.pdf: **32.0%** (AIToolsReview)
- Lower failure rates than GPT-6 Sol on transparency/restriction-respect; no safety-reviewer bypass attempts (official addendum); ~17% fewer severity-3+ misalignment flags than Astra, 65% fewer than GPT-5.6 Sol
- Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **51.83 at max (v4.3.2, $0.72/task)** vs Astra 52.67 and GPT-6 Sol 47.63 (codersera) vs **55 for (Max)** on AA releases page — version drift, both cited; xhigh 51.04 at $0.39/task
- Astra still leads hard science (TB-Science); Opus 5.5/Sonnet 5.5 score higher on AA index (emergent.sh verdict)
- GPQA / HLE / MMLU: no verified public score found for this ID

Coding:

- DeepSWE v1.1: **75.2%** — near Astra's 74.1%... (AIToolsReview; Astra 74.1 on BenchLeader — ordering conflict noted, both cited) — effectively at flagship level at 1/5 price
- SWE-bench Verified / Terminal-Bench / LiveCodeBench: no verified public score found for this exact ID

Long context:

- 1.05M window; no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 88/100.** OSWorld 71.4% and strong agentic reliability/safety addendum; capped by missing AutomationBench exact % and Claw-Eval.
- **Reasoning: 86/100.** AA Index 51.83–55 (max) sits 1 point below Astra on v4.3.2 at ~1/4 the per-task cost; no GPQA/HLE published.
- **Context window: 96/100.** 1.05M window in the 95–100 tier; >272K prompts at 2x/1.5x and no verified 512K+ retrieval keep it off 100.
- **Multimodal: 80/100.** Text/image in, text out; no audio/video or non-text output.
- **Coding: 90/100.** DeepSWE 75.2% is flagship-adjacent (vs Astra 74.1%); no SWE-V/TB number published for this ID.
- **Cost efficiency: 75/100.** $2/$10 permanent (not promo) with $0.10/M cache reads sits between the $1.25/$4.25 (~88) and $3/$15 (~60) bands; no free tier.
- **Overall Score: 88/100.** Half-up mean of (88 + 86 + 96 + 80 + 90) / 5 = 88.0 → 88. Best fit: new default Sol-tier for agents/automations — near-Astra at 1/5 price; Astra still wins hard science and top-of-index reasoning.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (3+3 web searches, official OpenAI launch + safety addendum cited, 2026-11-05 UTC); cross-checked against AA, BenchLM, codersera, AIToolsReview, TechCrunch, emergent.sh, Kingy, Vellum; conflicting figures (AA Index 51.83 vs 55; DeepSWE ordering vs Astra) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-6.1 Sol — OpenAI (official, DevDay 2026-09-29)](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [Addendum to GPT-6 Astra System Card: GPT-6.1 Sol — OpenAI Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-6-1-sol)
  - [TechCrunch — GPT-6.1 Sol launch, near-Astra at lower cost (2026-09-29)](https://techcrunch.com/2026/09/29/openai-launches-gpt-6-1-sol-says-it-nearly-matches-gpt-6-astra-and-costs-less/)
  - [Artificial Analysis — GPT-6.1 Sol replaces GPT-6 Sol after 7 days](https://artificialanalysis.ai/articles/gpt-6-1-sol-replaces-gpt-6-sol-after-just-7-days-with-near-astra-intelligence)
  - [codersera — 6.1 Sol guide (AA 51.83 vs Astra 52.67 vs 6 Sol 47.63, $0.72/task)](https://codersera.com/blog/gpt-6-1-sol-complete-guide-2026/)
  - [AIToolsReview — 6.1 Sol benchmarks (DeepSWE 75.2%, OSWorld 71.4%, GDP.pdf 32.0%)](https://aitoolsreview.co.uk/insights/gpt-6-1-sol)
  - [BenchLM — gpt-6.1-sol](https://benchlm.ai/models/gpt-6-1-sol)
  - [DataCamp — GPT-6.1 Sol features/benchmarks/pricing ($2/$10)](https://www.datacamp.com/blog/gpt-6-1-sol)
  - [Kingy AI — 6.1 Sol specs ($2/$10, cache $0.10, multi-agent beta)](https://kingy.ai/blog/gpt-6-1-sol-specs-benchmarks-pricing-task-costs/)
  - [OpenRouter — openai/gpt-6.1-sol](https://openrouter.ai/openai/gpt-6.1-sol)
