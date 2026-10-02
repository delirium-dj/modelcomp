# Ember 1 — findings by Big Pickle

- Source: Fireworks AI / Fireworks Research (`opencode/ember-1`, upstream `fireworks/ember-1`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Fireworks Research's first specialized model, released 2026-09-23 as a **Research Preview on Fireworks Serverless** — Kimi K3 retrained to reason more concisely, cutting generated tokens ~40% while holding quality on Fireworks' evaluations and live customer A/B tests. It is not a new architecture: over 50 training experiments and 200+ evaluations produced a token-thrifty derivative. The thesis is specific — reasoning models often spend >90% of generated tokens on deliberation, and in multi-turn agent loops every turn re-sends and re-bills that reasoning, so context grows roughly quadratically with turns.
- **Provider / access:** Fireworks AI serverless API (`fireworks/ember-1`) and on-demand dedicated-GPU deployments; Vercel AI Gateway; OpenRouter; Codex CLI (`codex --model fireworks/ember-1`); OpenCode Zen `opencode/ember-1`. Zero Data Retention and No Prompt Training on the Fireworks endpoint. Research preview ships with an initial **two-week** serverless window, made permanent based on community demand.
- **Release / knowledge:** released 2026-09-23 (Vals AI lists 2026-09-22); knowledge cutoff not published.
- **IDs:** `opencode/ember-1` (Zen, standard pricing); upstream `fireworks/ember-1`.
- **Context window:** **1,048,576 tokens** (Fireworks metadata, OpenRouter, Vals AI, LLM Reference); max output 131,072 tokens.
- **Modalities:** text and image input; text output; tool calling; implicit prompt caching; video and file input not supported.
- **Pricing (as of 2026-10-02):** **$3.00 in / $15.00 out per 1M**, cached input $0.30 — identical to Kimi K3's public rate card, which Fireworks itself used to price its own benchmark deltas. OpenRouter's realized average input price is ~$1.50. Measured Fireworks route: 49 t/s, 0.65s latency.
- **Architecture:** proprietary weights; a Kimi K3 derivative. Fireworks publishes no parameter count; aggregator listings give ~2.78T total, which is unconfirmed by the vendor.

### Raw benchmarks found

Fireworks' own comparison against Kimi K3 at three reasoning efforts (Fireworks Research harness; dollar deltas computed at K3's $3 / $0.30 / $15 rate card):

| Benchmark | N | K3 low | K3 high | K3 max | **Ember-1** | Token reduction vs K3 max | Cost delta |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Terminal Bench 2.1 | 89 | 76.4% | 77.6% | 80.9% | **82.0%** | −51.9% | −$23.10 |
| SWE-bench Verified | 500 | 80.4% | 86.0% | 93.2% | **92.2%** | −15.5% | −$68.10 |
| SWE-Interact | 75 | 6.7% | 13.3% | 21.3% | **20.0%** | −32.5% | −$60.80 |
| DeepSWE 1.1 | 113 | 55.8% | 62.8% | 66.4% | **75.2%** | −23.7% | −$126.90 |
| τ-2 Bench Airline | 50 | 64% | 64% | 64% | **66%** | −5.9% | −$0.30 |

- Ember-1 **beats** Kimi K3 at max effort on Terminal Bench 2.1, DeepSWE 1.1 and τ-2 Bench Airline, and trails slightly on SWE-bench Verified and SWE-Interact.
- The spread in savings is the honest headline: 51.9% fewer tokens on Terminal Bench 2.1 down to 5.9% on τ-2 Bench Airline — a model that cuts deliberation is worth a lot where the base over-thinks and little where it does not.

Live production A/B tests (two customers, coding workloads):

- Quality held: score **0.751 → 0.753**, steps **23.8 → 21.4**, output tokens **49.3K → 29.9K** (**−71.3% reasoning tokens, −39% total tokens**)
- One customer moved Ember-1 to live production with plans to replace the base model entirely

Industry benchmarks:

- **Doximity Bedside Bench** (500 physician-validated clinical cases, 10 categories): Ember-1 set a **new Pareto frontier on cost/task** across open and closed models, including GPT-5.6 Sol, GPT-6 Astra and Claude Opus 5; Fireworks also found it a Pareto leader against GPT-6 Astra, Claude Opus 5 and GLM 5.3 on quality-vs-cost.

Independent:

- **Vals AI**: average accuracy **42.81%**; one benchmark **63.37% ±2.95**, rank 26 of 69; recorded latency 46m 40s (full agentic runs, not per-call)
- No published GPQA Diamond, HLE, MMLU-Pro, AIME, IFBench, MMMU/MMMU-Pro, LongContext Reasoning, Terminal-Bench Hard, τ²-Bench Telecom, MCP Atlas, LiveCodeBench or SciCode row for Ember-1 — the vendor published the five rows above and nothing else.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal Bench 2.1 at **82.0%** — better than K3 at every effort level, including max — is the strongest agentic-terminal signal in this comparison, and τ-2 Bench Airline 66% shows tool-use competence holds when the task does not reward longer deliberation. Capped by SWE-Interact at only 20.0% (K3 max: 21.3%), so interactive tool sequences remain a weak spot for the whole K3 lineage, and by the absence of any MCP Atlas or IFBench measurement.
- **Reasoning: 76/100.** DeepSWE 1.1 at **75.2%** against K3 max's 66.4% is a genuine *gain* — trimming deliberation left long-horizon software reasoning intact or better — and the Bedside Bench Pareto result suggests clinical knowledge work is unaffected. Discounted for Vals AI's 42.81% average accuracy and because the model was deliberately trained to reason *less*: on tasks where extra deliberation would have helped, quality is traded away, as the −$0.30 saving on τ-2 Bench Airline shows.
- **Context window: 78/100.** A 1,048,576-token window is the joint-largest here and matches its base model exactly, with implicit prompt caching and 131K max output. Discounted for the complete absence of any published retrieval measurement (no MRCR, RULER, GraphWalks or LongContext Reasoning row) — this is an inherited spec, not a tested one.
- **Multimodal: 68/100.** Text **and image** input confirmed by Fireworks, Vercel AI Gateway and Vals AI, with tool calling and JSON support, inherited from Kimi K3's native multimodality; no vision benchmark published, so the modality breadth is documented rather than measured.
- **Coding: 86/100.** The strongest coding numbers in this comparison: **SWE-bench Verified 92.2%** on 500 tasks and **DeepSWE 1.1 75.2%**, both at or above Kimi K3 at max effort, plus Terminal Bench 2.1 82.0%. All vendor-reported on Fireworks' own harness with no independent replication, which is why this stops short of the 90s despite the raw figures.
- **Cost efficiency: 82/100.** The reason the model exists, and a real win — identical $3 / $0.30 / $15 rate card as Kimi K3 while consuming **~40% fewer generated tokens** (−51.9% on Terminal Bench 2.1, −71.3% reasoning tokens in live A/B), so the *effective* output rate lands near $9/M-equivalent. Held below the leaders because the sticker price is unchanged: a 40% saving on a $15/M output rate still costs more per token than GPT-5.4-class models, and the two-week research-preview window means permanence is not guaranteed.
- **Overall Score: 76.4/100.** Half-up mean of the five quality dims. Best fit for agentic coding loops whose bill is dominated by reasoning tokens, where the measured 15–52% token reduction is worth real money at K3's rates. Caveat to carry forward: **Ember-1's savings are defined relative to Kimi K3's rate card**, so on a cheaper flagship the same percentage saving is a much smaller absolute win — and the benchmark sheet is vendor-run with n as low as 50 on one row.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Fireworks AI "Introducing Ember-1" launch post incl. the full K3 comparison table and A/B results, Fireworks Ember-1 model page, Vercel AI Gateway changelog, OpenRouter, Vals AI, LLM Reference, orcarouter.ai comparative analysis). All benchmark figures are **vendor-reported on Fireworks' own harness**; sample sizes are recorded because several are small (n=50 to n=113).
- Future sources: add a new file next to this one, e.g. `Ember_2.md`, using the same headings.

---