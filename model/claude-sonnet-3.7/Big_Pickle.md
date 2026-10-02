# Claude Sonnet 3.7 — findings by Big Pickle

- Source: Anthropic (`opencode/claude-sonnet-3.7`, API model `claude-3-7-sonnet-20250219`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 3.7
- **Short description:** Anthropic's first hybrid reasoning model, released 2025-02-24 — a single set of weights that produces either near-instant responses or visible, step-by-step extended thinking with a user-controlled reasoning budget (1,024 to 128K thinking tokens). It was state-of-the-art on SWE-bench Verified at launch and cut unnecessary refusals ~45% versus Claude 3.5 Sonnet. Now **deprecated** (late 2025), superseded by Claude Sonnet 4.6, and retained mainly for cost-tier and legacy-API compatibility.
- **Provider / access:** Anthropic Claude Developer Platform (`claude-3-7-sonnet-20250219`); Amazon Bedrock; Google Cloud Vertex AI; Claude.ai plans (Free / Pro / Team / Enterprise); aggregators incl. ZenMux, Helicone, DigitalOcean, SAP AI Core, Qiniu; OpenCode Zen `opencode/claude-sonnet-3.7`.
- **Release / knowledge:** released 2025-02-24 (snapshot dated 2025-02-19); knowledge cutoff reported as October 2024 by Anthropic's model comparison table.
- **IDs:** `opencode/claude-sonnet-3.7` (Zen, standard pricing); upstream `claude-3-7-sonnet-20250219`.
- **Context window:** 200,000 tokens; max output 8,192 standard, 64,000 in extended thinking (128K including thinking tokens at launch, beta).
- **Modalities:** text and image input; text output; tool use (bash + file-edit harness in Anthropic's own evals); visible extended thinking with a configurable budget.
- **Pricing (as of 2026-10-02):** $3.00 in / $15.00 out per 1M — identical to Claude 3.5 Sonnet at launch; thinking tokens billed as output; cache read ~$0.30 (90% discount), cache write $3.75; Batch API ≈50% off.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- TAU-bench Retail: **81.2%**; TAU-bench Airline: **58.4%** (Anthropic launch table; predecessor suite to τ²-bench)
- GAIA (HAL agent harness): **64.24%** (Anthropic research post, June 2025)
- SHADE-Arena overall success: **26.2%** — one of the highest in its class on agentic-safety evaluation (Benchgen)
- Unnecessary refusals: **~45% fewer** than Claude 3.5 Sonnet (Anthropic)
- Terminal-Bench / τ²-bench / MCP Atlas / Toolathlon: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **84.8%** with extended thinking (Anthropic; o1 78.0%)
- AIME 2025: **80.0%**; MMLU **88.8%**; GSM8K **96.4%**; HumanEval **94.0%**
- CyberGym: **14.5%** (Benchgen)
- HLE / CritPt / AIME-2024: no verified public score found for this ID

Coding:

- SWE-bench Verified: **62.3%** standard pass@1; **63.7%** vanilla without Anthropic's scaffold; **70.3%** with their custom bash + file-edit scaffold on the n=489 solvable subset — the launch record, ahead of o1 48.9%, o3-mini 49.3%, DeepSeek R1 49.2%
- BigCodeBench: **35.8%** (Benchgen)
- SWE-bench Pro / LiveCodeBench: no verified public score found

Long context / vision:

- ChartQA: **91.2%**; DocVQA: **93.5%** (Anthropic launch material)
- 200K window is a documented spec; no published RULER / MRCR / GraphWalks measurement for this model

### Normalized scores (1–100)

- **Tool use: 74/100.** TAU-bench Retail 81.2% and GAIA 64.24% at launch, plus the ~45% reduction in unnecessary refusals, made 3.7 Sonnet a strong agentic workhorse of early 2025; discounted now because TAU-bench has been superseded by τ²-bench with no newer agentic row published, and SHADE-Arena 26.2% shows a real ceiling on adversarial multi-turn agent behavior.
- **Reasoning: 78/100.** GPQA Diamond 84.8% with extended thinking, AIME 2025 80.0% and GSM8K 96.4% were near the frontier at launch and remain respectable; capped by a CyberGym 14.5% and no published HLE, which places it below every 2026 reasoner.
- **Context window: 70/100.** A verified 200,000-token window with a 64K extended-thinking output ceiling, and 90% cache reads that make long-context reuse cheap; scored conservatively because no needle-in-haystack or GraphWalks measurement was ever published and 200K is now mid-pack.
- **Multimodal: 80/100.** Document and chart understanding were headline features with measured ChartQA 91.2% and DocVQA 93.5% — real vision evidence rather than a modality claim, even though no modern MMMU-class figure was released.
- **Coding: 72/100.** SWE-bench Verified 62.3–70.3% was the record of February 2025 and is the model's lasting reputation; BigCodeBench 35.8% is more sober, and against 2026-era results (GPT-5.4 Pro, GPT-5.5) this is now a well-superseded coding model.
- **Cost efficiency: 58/100.** $3/$15 with 90% cache-read discounts and half-price batch is a workable enterprise rate card, but $15 per 1M output remains expensive for a deprecated model that has been superseded at the same vendor — there is no longer a reason to pick it on capability per dollar.
- **Overall Score: 74.8/100.** Half-up mean of the five quality dims. Best fit for legacy Anthropic-compatible stacks and cheap cached long-context document work; for new builds use Claude Sonnet 4.6 or later.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Anthropic Claude 3.7 Sonnet launch post and model comparison table, Anthropic June 2025 research post, Benchgen evaluation, DataCamp and Awesome Agents secondary compilations, ModelCompare provider table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.6.md`, using the same headings.

---