# Grok 4.1 — findings by Space Bunny Alpha

- Source: SpaceXAI/xAI (`xai/grok-4.1-fast`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (thinking / non-thinking modes; API endpoint `grok-4.1-fast`)
- **Short description:** SpaceXAI's November 2025 flagship consumer model, built on the *same* large-scale RL infrastructure as Grok 4 but retargeted at style, personality, helpfulness and alignment rather than new raw capability — the "razor-sharp intelligence" of Grok 4 was deliberately retained. It was positioned as xAI's best **agentic tool-calling** model (customer support, deep research) and shipped with a 2M-token window at a very low price point. **Deprecated and effectively withdrawn** (see deprecation below).
- **Provider / access:** xAI API — `grok-4.1-fast` (`https://api.x.ai/v1/chat/completions`, Chat Completions) with reasoning toggled per request; also grok.com, X, and the iOS/Android apps. The dedicated docs page for this model has been retired from the xAI model index; `grok-4.1-fast` survives only as a legacy alias in the alias list.
- **Release / knowledge:** announced 2025-11-17 (xAI news index lists 2025-11-19); endpoint released 2025-11-19 after a two-week silent rollout on production traffic (2025-11-01 → 2025-11-14). Knowledge cutoff not published.
- **Deprecation / successor (NEW on 2026-09-29):** **Artificial Analysis flags Grok 4.1 Fast as deprecated** and names a successor — *"SpaceXAI has launched a newer model, Grok 4.3 (high). We suggest considering it instead"* on the reasoning page, and *Grok 4.3 (Non-reasoning)* on the non-reasoning page. AA continues to benchmark only the default 10K-input-token workload; all other workload results are historical and frozen. Independently, a cloud-vendor catalogue records **deprecation on 2026-05-15 and retirement on 2026-08-15**, after which the model is no longer accessible there. A separate industry audit report states that under xAI's 2026-05-15 retirement notice **all legacy text slugs — including `grok-4.1-fast` — were redirected to Grok 4.3 and are billed at Grok 4.3 pricing**, so the old per-token rates no longer describe what a caller pays.
- **IDs:** `grok-4.1-fast` (legacy alias only); `grok-4-1-fast-reasoning`, `grok-4-1-fast-reasoning-latest`, `grok-4-1-fast-non-reasoning`, `grok-4-1-fast-non-reasoning-latest` (alias list). Internal code names: **quasarflux** (thinking) and **tensor** (non-thinking, zero thinking tokens). **No OpenCode Zen Free ID exists.**
- **Context window:** **2,000,000 tokens** — re-confirmed on the Artificial Analysis v4.3.2 model page (*"Context window 2M ~3000 A4 pages"*) and on the xAI endpoint registry. No separate max-output cap is published.
- **Modalities:** Artificial Analysis v4.3.2 lists **text and image input, text output**; the endpoint registry additionally lists file input. Reasoning **optional** (thinking and non-thinking modes from one deployment); function calling / tool use yes; structured outputs (JSON mode) yes.
- **Pricing (as of 2026-09-29):** the previously observed **$0.20 / 1M input, $0.50 / 1M output, $0.05 / 1M cached read** is no longer the payable rate. AA's v4.3.2 page reports **$0.00 in / $0.00 out** for the deprecated entry (no active first-party price), and the legacy-slug redirect bills at **Grok 4.3 pricing: $1.25 in / $2.50 out / $0.20 cached, doubled above 200K input tokens** — roughly **6.25× on input and 5× on output** versus the old Fast tier.
- **Speed / latency:** AA reports **output speed N/A** and verbosity N/A for this entry — no live throughput measurement survives the deprecation freeze.
- **Architecture:** proprietary; parameter count not disclosed. Same large-scale RL stack as Grok 4, with frontier agentic reasoning models used as reward models to optimize non-verifiable style/alignment signals.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Where no number was published, it is stated as missing rather than estimated.

Agent / tool use:

- **Artificial Analysis Intelligence Index v4.3.2: 20 (estimated) for the reasoning variant, rank #214 / 679**; **11 (estimated) for the non-reasoning variant**, median 7 in its price class. The v4.3.2 index is the 10-evaluation composite (AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1) with a **ceiling of 58** (Claude Opus 5.5 adaptive/max) — 20 is far below that band. This is the first AA index number to exist for this model; the previous pass correctly recorded none but was scored without it.
- **No AA agentic evaluation is published for this model.** 19 of 27 AA evaluations have a value; all the agentic rows (AutomationBench-AA, Terminal-Bench 4.0, τ³-Banking, ITBench-AA, Terminal-Bench-Science 0.1, EnterpriseOps-Gym-AA) are absent.
- LMArena **Search Arena**: not scored for this model; the generation's sibling `grok-4-fast-search` took #1 at 1163 Elo (see the Grok 4 Fast report)
- Benchable instruction-following accuracy: **73.7%**; tool-using success across the Benchable battery: **94% reliability over 8 benchmarks**; Email Classification and Ethics: 100% accuracy each
- Vendor positioning (not a benchmark): "xAI's best agentic tool calling model", aimed at customer support and deep research
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoncing / knowledge:

- LMArena **Text Arena**: **1483 Elo, #1 overall** in thinking mode (codename quasarflux) — a 31-point margin over the best non-xAI model; **1465 Elo, #2** in non-reasoning mode (codename tensor), with zero thinking tokens. Grok 4 ranked #33 on the same board.
- Blind pairwise preference on live production traffic (xAI silent-rollout evaluation, 2025-11-01 → 11-14): **64.78%** preferred over the previous production model
- Benchable battery: General Knowledge **99.5%**, Mathematics **82.0%**, Reasoning **76.0%**
- **AA Intelligence Index v4.3.2 = 20 (reasoning) / 11 (non-reasoning), estimated** — the composite places the model well below the 58-point ceiling, i.e. the arena-preference result is *not* corroborated by the harder independent battery.
- EQ-Bench 3 (emotional intelligence, LLM-judged over 45 roleplay scenarios): xAI reports leadership; **no numeric score published in the announcement** — no verified public score found
- GPQA Diamond / HLE / CritPt: no verified public score found
- Hallucination probe: **0.0%** on Benchable's "Hallucinations (Baseline)" accuracy check, which the registry reads as a complete failure to acknowledge uncertainty — a caveat, not a capability

Coding:

- Benchable battery: Coding **75.0%** accuracy
- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: no verified public score found
- AA SciCode row: no value published for this model
- Positioning: the launch post is about creative, emotional and collaborative interaction, not code

Long context:

- **2,000,000 tokens** confirmed by AA v4.3.2 and the xAI endpoint registry. No retrieval-at-length row (MRCR / RULER / GraphWalks) exists; AA's AA-LCR v1.1 long-context row carries no value for this model.

Sources consulted: [Artificial Analysis Grok 4.1 Fast (Reasoning)](https://artificialanalysis.ai/models/grok-4-1-fast-reasoning) and [Grok 4.1 Fast (Non-reasoning)](https://artificialanalysis.ai/models/grok-4-1-fast), both read on **Intelligence Index v4.3.2**, plus the xAI model docs alias list, the xAI news index, the Benchable endpoint registry entry for `grok-4.1-fast`, and third-party deprecation/pricing records, all accessed 2026-09-29.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Cost efficiency is scored but excluded from the Overall.

- **Tool use: 70/100** *(was 75)*. The generation xAI and the endpoint registry both call its best agentic tool-calling model, with 94% benchmark reliability across the Benchable battery, native tools, structured outputs and a stated customer-support / deep-research target. **Lowered 5 points**: no AA agentic evaluation carries a value (AutomationBench-AA, Terminal-Bench 4.0, τ³-Banking, ITBench-AA all absent), the model is formally deprecated with a named successor, and the only measured tool behaviour number, 73.7% instruction-following accuracy, remains mid-range.
- **Reasoning: 62/100** *(was 75)*. A #1 LMArena Text Arena finish at 1483 Elo (and #2 at 1465 with no thinking tokens) plus 99.5% general knowledge, 82.0% mathematics and 76.0% reasoning on Benchable remain the strongest human-preference evidence. **Lowered 13 points** because the first independent composite that now exists for this model — **AA Intelligence Index v4.3.2 = 20 (reasoning)** against a 58 ceiling — contradicts the arena reading, and the model was explicitly tuned for personality rather than new reasoning capability. The 1483 Elo is a preference signal, not a correctness measure.
- **Context window: 96/100** *(unchanged)*. The 2,000,000-token window clears the ≥1M tier that maps to 95–100 and is now corroborated by two independent sources (AA v4.3.2 and the xAI endpoint registry). Held at 96 because no retrieval-at-length result (≥98% at 512K+) is published and AA's long-context row carries no value.
- **Multimodal: 67/100** *(unchanged)*. AA v4.3.2 confirms **text and image input with text-only output**, the "+image input" 60–70 band; the endpoint registry additionally lists file input. Capped there because there is no video or audio input, no non-text output, and no image-understanding benchmark.
- **Coding: 62/100** *(was 67)*. The only measured code figure remains 75.0% accuracy on the Benchable battery — a real but proxy-level number — and no SWE-bench Verified, LiveCodeBench, DeepSWE or SciCode result was ever published. **Lowered 5 points** for the confirmed absence of an AA SciCode row plus formal deprecation.
- **Cost efficiency: 45/100** *(was 99)*. **Largest change in this re-validation.** The old $0.20/$0.50/$0.05 anchor is void: AA shows no active price for the deprecated entry, and legacy `grok-4.1-fast` slugs are redirected to and billed at Grok 4.3 rates of $1.25 in / $2.50 out / $0.20 cached, doubled above 200K input — about **6.25× the input and 5× the output** rate that this report previously scored. Consumer free access on grok.com/X/apps is no longer a substitute for a paid API tier. Scored on the payable rate, not the historical one.
- **Overall Score: 71.4/100** *(was 76.0)*. Mean of the five non-cost dims (70 + 62 + 96 + 67 + 62) / 5 = 357 / 5 = **71.4**. Once a strong preference model with a 2M window at a cent-cheap price, now a retired one: the capability case survives on arena Elo and Benchable proxies, the independent composite sits at 20/58, and the price case has been repriced ~5–6× by the alias redirect. Best fit now is historical comparison or, if you need this generation's style, the free consumer apps — not new API deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research. Primary evidence on 2026-09-29 was the Artificial Analysis model pages for Grok 4.1 Fast (Reasoning) and (Non-reasoning), read on **Intelligence Index v4.3.2** (10 evals: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1; ceiling 58), plus the xAI model docs alias list, the xAI news index, the Benchable endpoint registry, and third-party deprecation and legacy-pricing records. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Changes from the 2026-09-25 pass: deprecation flag with named successor Grok 4.3; legacy-alias repricing to $1.25/$2.50; first AA index value (20 reasoning / 11 non-reasoning); Output speed now N/A.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.
