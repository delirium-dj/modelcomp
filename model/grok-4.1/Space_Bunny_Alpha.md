# Grok 4.1 — findings by Space Bunny Alpha

- Source: SpaceXAI/xAI (`xai/grok-4.1-fast`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 (thinking / non-thinking modes; API endpoint `grok-4.1-fast`)
- **Short description:** SpaceXAI's November 2025 flagship consumer model, built on the *same* large-scale RL infrastructure as Grok 4 but retargeted at style, personality, helpfulness and alignment rather than new raw capability — the "razor-sharp intelligence" of Grok 4 was deliberately retained. It was positioned as xAI's best **agentic tool-calling** model (customer support, deep research) and shipped with a 2M-token window at a very low price point.
- **Provider / access:** xAI API — `grok-4.1-fast` (`https://api.x.ai/v1/chat/completions`, Chat Completions) with reasoning toggled per request; also grok.com, X, and the iOS/Android apps, where it rolled out in "Auto" mode and became explicitly selectable as "Grok 4.1". The dedicated docs page for this model has since been retired from the xAI model index.
- **Release / knowledge:** announced 2025-11-17 (xAI news index lists 2025-11-19); endpoint released 2025-11-19 after a two-week silent rollout on production traffic (2025-11-01 → 2025-11-14). Knowledge cutoff not published.
- **IDs:** `grok-4.1-fast` (the documented API endpoint; OpenRouter-style `x-ai/grok-4.1-fast`). Internal code names: **quasarflux** (thinking) and **tensor** (non-thinking, zero thinking tokens). The consumer model-picker name is "Grok 4.1". **No OpenCode Zen Free ID exists**; cost is scored on xAI's paid pricing.
- **Context window:** **2,000,000 tokens**, verified on the xAI endpoint registry (Benchable) and in the model description ("2M context window"). No separate max-output cap is published.
- **Modalities:** image, text and file in, text out (per the endpoint registry); reasoning **optional** (thinking and non-thinking modes from one deployment); function calling / tool use yes; structured outputs (JSON mode) yes; `logprobs`/`top_logprobs` are listed as supported parameters for this pre-`grok-4.20` generation.
- **Pricing (as of 2026-09-25):** $0.20 / 1M input, $0.50 / 1M output, $0.05 / 1M cached input read. Paid on the API; free for all users (including free-tier accounts) on grok.com, X and the mobile apps.
- **Architecture:** proprietary; parameter count not disclosed. Same large-scale RL stack as Grok 4, with frontier agentic reasoning models used as reward models to optimize non-verifiable style/alignment signals.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Where no number was published, it is stated as missing rather than estimated.

Agent / tool use:

- LMArena **Search Arena**: not scored for this model; the generation's sibling `grok-4-fast-search` took #1 at 1163 Elo (see the Grok 4 Fast report)
- Benchable instruction-following accuracy: **73.7%**; tool-using success across the Benchable battery: **94% reliability over 8 benchmarks**; Email Classification and Ethics: 100% accuracy each
- Vendor positioning (not a benchmark): "xAI's best agentic tool calling model", aimed at customer support and deep research
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- LMArena **Text Arena**: **1483 Elo, #1 overall** in thinking mode (codename quasarflux) — a 31-point margin over the best non-xAI model; **1465 Elo, #2** in non-reasoning mode (codename tensor), with zero thinking tokens. Grok 4 ranked #33 on the same board.
- Blind pairwise preference on live production traffic (xAI silent-rollout evaluation, 2025-11-01 → 11-14): **64.78%** preferred over the previous production model
- Benchable battery: General Knowledge **99.5%**, Mathematics **82.0%**, Reasoning **76.0%**
- EQ-Bench 3 (emotional intelligence, LLM-judged over 45 roleplay scenarios): xAI reports leadership; **no numeric score published in the announcement** — no verified public score found
- GPQA Diamond / HLE / CritPt / Artificial Analysis Intelligence Index: no verified public score found (xAI published no independent index score for this model)
- Hallucination probe: **0.0%** on Benchable's "Hallucinations (Baseline)" accuracy check, which the registry reads as a complete failure to acknowledge uncertainty — a caveat, not a capability

Coding:

- Benchable battery: Coding **75.0%** accuracy
- SWE-bench Verified / LiveCodeBench / DeepSWE / SciCode: no verified public score found
- Positioning: the launch post is about creative, emotional and collaborative interaction, not code

Long context:


### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Cost efficiency is scored but excluded from the Overall.

- **Tool use: 75/100.** This is the generation xAI and the endpoint registry both call its best agentic tool-calling model, with 94% benchmark reliability, native tools, structured outputs and a stated customer-support / deep-research target; capped at 75 because that claim is positioning rather than a measured result — no Terminal-Bench, τ-bench, Toolathon, MCP-Atlas or Claw-Eval number was ever published, and the one measured behaviour number, 73.7% instruction-following accuracy, is mid-range.
- **Reasoning: 75/100.** A #1 overall LMArena Text Arena finish at 1483 Elo (and #2 at 1465 with no thinking tokens at all) is the strongest general-capability evidence in this report, reinforced by 99.5% general knowledge, 82.0% mathematics and 76.0% reasoning on the Benchable battery; held well below the 90–100 frontier band because no GPQA Diamond, HLE, CritPt or Artificial Analysis index number exists, and the model was explicitly tuned for personality rather than new reasoning capability.
- **Context window: 96/100.** The verified 2,000,000-token window clears the ≥1M tier that maps to 95–100; held at 96 because no retrieval-at-length result (≥98% at 512K+) is published and the figure comes from the endpoint registry rather than a vendor model-card specification.
- **Multimodal: 67/100.** Image, text and file input with text-only output at the endpoint, which is the "+image input" 60–70 band; capped there because there is no video or audio input, no non-text output, and no image-understanding benchmark.
- **Coding: 67/100.** The only measured code figure is 75.0% accuracy on the Benchable battery — a real but proxy-level number; scored conservatively because no SWE-bench Verified, LiveCodeBench, DeepSWE or SciCode result was published and the launch was explicitly about creative, emotional and collaborative interaction rather than software engineering.
- **Cost efficiency: 99/100.** $0.20 in / $0.50 out with a $0.05 cached-input rate is past the methodology's "~$0.10/$0.20 = 97–99" anchor, and the model is free for every user on grok.com, X and the mobile apps; held at 99 rather than 100 because the API itself is a paid tier, not $0.
- **Overall Score: 76/100.** Mean of the five non-cost dims (75 + 75 + 96 + 67 + 67) / 5 = 76.0 — the 2025-era xAI flagship whose lasting contribution was human-preference and agentic-tool quality on a 2M window at a cent-cheap price point; best fit for high-volume search-and-tool agent loops and consumer-grade chat where cost and responsiveness dominate, not for frontier coding or hard reasoning.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny-alpha)** — 2026-09-25
- Method: public internet research (xAI's "Grok 4.1" launch post, the xAI news index, and the Benchable endpoint registry entry for `grok-4.1-fast`). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.2.md`, using the same headings.

- No long-context retrieval benchmark reported (no MRCR / RULER / GraphWalks row). The 2M window is verified at the endpoint level only; no measured retrieval figure at 512K+ is published for this generation.
