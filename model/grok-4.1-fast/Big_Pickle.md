# Grok 4.1 Fast — findings by Big Pickle

- Source: xAI (`grok-4.1-fast`, non-reasoning variant)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's November-2025 speed-and-scale tier: a 2M-token-window agentic model aimed at high-volume tool calling (customer support, deep research) at roughly a tenth of frontier pricing. This folder scores the **non-reasoning** variant (`grok-4.1-fast`), which is what OpenCode Zen catalogues under this ID; the `(Reasoning)` sibling is a separate route and its numbers are listed below only as a labelled upper bound, never folded into these scores. Not a variant/alias of any other foldered entry.
- **Provider / access:** xAI API, model ID `grok-4.1-fast`; also served through OpenCode Zen as `opencode/grok-4.1-fast` (OpenAI-compatible Chat Completions, `https://opencode.ai/zen/v1/chat/completions`) and Oracle Cloud (OCI). Reasoning can be toggled per request via the API's reasoning-enable parameter, which is how the `(Reasoning)` sibling is reached.
- **Release / knowledge:** 2025-11-19 (OpenCode Zen model facts, CloudPrice version table; llm-stats dates the Grok-4.1 family to 2025-11-17). Knowledge cutoff not officially published; third-party trackers list Nov 2025.
- **IDs:** `xai/grok-4.1-fast` (native), `opencode/grok-4.1-fast` (Zen). Sibling route: `grok-4.1-fast-reasoning` — deliberately **not** this folder.
- **Context window:** 2,000,000 tokens total / ~30,000 max output. 2M is corroborated by xAI's own description, Artificial Analysis, OpenCode Zen model facts and n8n; **30K max output** per OpenCode Zen and CloudPrice. Outlier: BenchLM lists the context as 1M. Note the 30K output cap is well under the 64K mark the methodology treats as a caveat.
- **Modalities:** text + image in, text out; tool calling yes; structured output / JSON schema yes; prompt caching yes; reasoning off by default on this route. Audio input is claimed by two aggregators (CloudPrice, Future AGI) but is **not** listed by xAI, Artificial Analysis or OpenCode Zen — treated as unconfirmed and not scored.
- **Pricing (as of 2026-10-03):** xAI-native **$0.20 / 1M input, $0.50 / 1M output**, cached input $0.05 / 1M (modhub, n8n, llm-stats, Artificial Analysis agree on the $0.20/$0.50 headline). **Discrepancy flagged:** CloudPrice lists `xai/grok-4.1-fast` at $1.25 / $2.50 (and separately marks a $0.20/$0.50 "Grok 4.1 Reasoning" as deprecated), and Oracle Cloud resells it at $5.00 / $25.00. Scored on xAI's native rate card; a buyer routed through OCI should re-score cost at roughly the $3/$15 band (~60).
- **Architecture:** proprietary, closed weights. Parameter count and MoE/dense structure undisclosed.

### Raw benchmarks found

> All independent numbers below are for the **non-reasoning** `grok-4.1-fast`, sourced by BenchLM from Artificial Analysis's model-benchmark tables plus Gert Labs (BenchLM page last updated 2026-10-02, 12 of 645 benchmarks covered). AA's own Intelligence Index entry for this route is flagged *estimated — independent evaluation forthcoming*.

Agent / tool use:

- τ²-bench: **63.7%** (Artificial Analysis, via BenchLM)
- Gert Labs: **47.32%** (Gert Labs rankings, via BenchLM)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found** (τ²-bench above is the closest published proxy)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Secondary, different scale — n8n's own composite (0–100 points, not a raw benchmark): Tool Use **58** (3rd of their tracked set), Structured Output **92**, Hallucination **89**, Logic **89**, Classification **50**, Overall **84** (3rd), Cost **97**, Speed **75**, Scoring **34**.

Reasoning / knowledge:

- GPQA Diamond: **63.7%** (AA-GPQA Diamond, via BenchLM)
- HLE: **5.1%** (AA-HLE, via BenchLM)
- LCR / MLCR: **31.3%** (AA-LCR v1.1, via BenchLM)
- CritPt: **0.0%** (AA, via BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **11.3 (AA Intelligence Index)** / **36.69 (#142 of 783)** (BenchLM, partial coverage — conservative)
- Omniscience Accuracy / Hallucination Rate: **17.2% / 82.3%** (AA-Omniscience, via BenchLM; Omniscience Index −50.9)
- AA-IFBench: **36.5%** (instruction following, via BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found.** CloudPrice carries LiveCodeBench and SciCode entries for this model but as rank-normalised 0–1 values with no stated raw scale, so they are not usable as raw numbers and are not scored here.

Long context:

- AA-LCR v1.1: **31.3%** — a measured long-context-reasoning retrieval result, and a poor one despite the 2M advertised window. No MRCR / RULER / GraphWalks figure at any specific window length has been published.

Sibling route, for reference only (**not** this folder, **not** scored): Grok 4.1 Fast **(Reasoning)** — AA Intelligence Index 20 (estimated), HLE 19%, CritPt 3%, AA-LCR v1.1 74%, AA-Omniscience −30; BenchLM 46.85 (#). Same 2M window. Reasoning roughly doubles-to-triples the sibling's HLE and LCR, which is the clearest single argument for routing to the `(Reasoning)` ID when quality matters more than latency.

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-bench 63.7% clears the methodology's ~50%+ frontier marker for the Tau-family, and Gert Labs 47.32% plus n8n's Tool Use 58 (3rd) confirm real agentic throughput. Caps here: no Terminal-Bench, GDPval or Claw-Eval number exists for this variant, and an 82.3% Omniscience hallucination rate is a genuine agentic-reliability drag on long unattended runs.
- **Reasoning: 55/100.** All four of the methodology's mid-band markers land at or below mid: GPQA 63.7% (60–80% band), HLE 5.1% (<10%), LCR 31.3% (<40%), AA Intelligence Index 11.3 (below the 20–35 mid band). CritPt at 0.0% and IFBench at 36.5% pull toward the floor of that 55–65 band rather than the top. This is the expected profile of a route with reasoning disabled.
- **Context window: 95/100.** 2,000,000 tokens places it in the ≥1M tier (95–100). Not 100: 100 requires ≥98% measured retrieval at 512K+, and the one measured long-context number available, AA-LCR v1.1 at 31.3%, is far below that. Caveat: ~30K max output is under half the 64K mark, and BenchLM's 1M context figure is an unexplained outlier against four sources saying 2M.
- **Multimodal: 60/100.** Text + image in with text out sits at the bottom of the methodology's "+image in = 60–70" band. Caps here: AA-MMMU-Pro at 48.4% is weak grounding for a vision-capable model, no video/PDF/audio input is confirmed by xAI, and there is no non-text output.
- **Coding: 50/100.** Neutral placeholder — not one verified coding benchmark (SWE-bench, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench, Terminal-Bench) has been published for this variant, and xAI positions the model for agentic tool calling, customer support and deep research rather than code generation. Caps here: zero verified coding scores.
- **Cost efficiency: 95/100.** $0.20 in / $0.50 out per 1M on xAI's native rate card sits between the ~$0.10/$0.20 → 97–99 anchor and the ~$0.60/$2.20 → ~92 anchor, closer to the cheaper end. Cached input at $0.05 / 1M helps real agent loops. Would fall to roughly the ~$3/$15 band (~60) if bought through Oracle Cloud at $5.00/$25.00.
- **Overall Score: 65.2/100.** Half-up mean of the five quality dims: (66 + 55 + 95 + 60 + 50) / 5 = 65.2. Best fit: a very cheap, very wide-context executor for high-volume agentic tool loops — reading large corpora, support triage, deep-research fan-out — and explicitly *not* the route for hard reasoning or coding, where the `(Reasoning)` sibling or any benchmarked coding model is the better pick.

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-03
- Method: public internet research — Artificial Analysis model-benchmark rows and comparison pages as aggregated by BenchLM (2026-10-02), Gert Labs rankings, OpenCode Zen model facts and usage data, CloudPrice and modhub spec/pricing mirrors, n8n's own composite benchmark. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.1_Fast_Reasoning.md`, using the same headings.
