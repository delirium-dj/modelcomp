# Qwen3.5-Flash — findings by Big Pickle

- Source: OpenCode (`opencode/big-pickle`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Flash
- **Short description:** Alibaba's **hosted production profile of the open Qwen3.5-35B-A3B weights**
  (35B total / 3B activated sparse MoE with hybrid linear-attention + gated-attention layers), released
  2026-02-23/25 as the fast, cheap tier of the Qwen 3.5 Medium series. It is **not new weights**: Qwen's
  own announcement says "Qwen3.5-Flash is the hosted production version aligned with 35B-A3B", and the
  Qwen3.5-35B-A3B model card adds that "Qwen3.5-Flash is the hosted version corresponding to
  Qwen3.5-35B-A3B with more production features, e.g., 1M context length by default and official
  built-in tools". Native vision-language model (text/image/video in, text out) with switchable
  thinking and 7 reasoning-effort levels (none → max) plus server-side built-in tools; weights are
  **closed** (Apache-2.0 applies to the open 35B-A3B checkpoint it serves).
- **Provider / access:** OpenRouter `qwen/qwen3.5-flash-02-23` (OpenAI-compatible Chat Completions,
  `tools` / `tool_choice` and `response_format` JSON schema supported, single provider — Alibaba Cloud
  Int.). Alibaba Cloud Model Studio — model id `qwen3.5-flash` (alias of the `qwen3.5-flash-2026-02-23`
  snapshot; OpenAI-compatible endpoint, `enable_thinking` toggle). Served in 5 regions (Beijing,
  Singapore, Frankfurt, Virginia, Hong Kong). **No Free ID exists on OpenCode Zen** — the Zen catalogue
  lists `qwen3.5-plus`, `qwen3.6-plus`, `qwen3.7-max`, `qwen3.7-plus`, `qwen3.8-flash`, `qwen3.8-max`
  but no `qwen3.5-flash`, free or paid (verified 2026-10-22).
- **Release / knowledge:** 2026-02-23 snapshot (announced 2026-02-24/25; first seen on OpenRouter
  2026-02-25). Knowledge cutoff reported as **April 2025** by the Epoch AI-derived catalogue entry
  (vendor does not publish a cutoff on the Model Studio page).
- **IDs:** `qwen/qwen3.5-flash-02-23` (OpenRouter) · `qwen3.5-flash` / `qwen3.5-flash-2026-02-23`
  (Alibaba Cloud Model Studio) · "Qwen 3.5 Flash (hosted 35B-A3B)" (Epoch AI record) · `Qwen3.5-Flash`
  (Qwen's own naming).
- **Context window:** **1,000,000 tokens by default**, verified in the official Model Studio context
  table: max input **991,808** (983,616 in thinking mode), max output **65,536** (65,536 in thinking
  mode), max chain-of-thought length **81,920**. OpenRouter's live catalogue API also reports
  `context_length: 1000000`, max output 65,536. This 1M default is the hosted tier's headline feature —
  the open 35B-A3B weights default to 262,144 — and it is the only structural difference from that
  checkpoint besides the built-in tools.
- **Modalities:** **text, image and video in; text out** (Qwen 3.5 is "native multimodal"; video in
  video is supported by the API layer). Reasoning: yes, switchable, 7 effort levels. Tool calling:
  yes, native `tools`/`tool_choice` plus "official built-in tools" hosted server-side. JSON / structured
  output: yes.
- **Pricing (as of 2026-10-22):** OpenRouter snapshot `qwen/qwen3.5-flash-02-23` — **$0.065 input /
  $0.26 output** per 1M (price history: $0.10/$0.40 on 2026-06-15 → $0.07/$0.26 on 2026-09-06).
  Model Studio **international**: flat **$0.10 in / $0.40 out**, explicit cache creation $0.125,
  cache read $0.01. Model Studio **China (Beijing)**, tiered by prompt length: **≤128K $0.029 / $0.287**
  (cache read $0.003, batch file $0.014/$0.143), **128K–256K $0.115 / $1.147** (cache read $0.012),
  **256K–1M $0.172 / $1.72** (cache read $0.017). Paid only — no free lane, no Zen tier.
- **Architecture:** hosted-only (no weights published for Flash itself); the underlying checkpoint is
  Qwen3.5-35B-A3B — sparse Mixture-of-Experts, **35B total / ~3B activated**, hybrid **linear attention
  (Gated DeltaNet) + gated attention** layers, Apache-2.0 weights published separately for the open
  model. Throughput measured in the 90–200 tok/s range by third-party routers (92 tps on the
  OpenRouter provider page, 197 tok/s median with 1.1 s TTFT in another 30-day router sample).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **24.7%** (Vals AI harness, 2026-07-28, 56/68 models = 18th percentile; 716.5 s
  latency, $0.11 per test) — AA's "TerminalBench Hard" variant reads **31.8%** for the same model
- Tau2 (agentic tool use in customer-support workflows): **43.3%** (Artificial Analysis)
- Terminal-Bench 2.1: **no verified public score found** for the hosted Flash endpoint
- GDPval-AA: **no verified public score found**
- OSWorld / AutomationBench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- OpenHands Index (holistic software-engineering agent): **38.1%** (23/26 = 12th percentile,
  2026-05-06) — SWE-Bench 62.0%, SWE-Bench Multimodal 27.9%, SWT-Bench 38.3%, Commit0 12.5%,
  GAIA 49.7%; $11.17 total cost per instance, 2,909.6 s average runtime
- Agentic / long-task evals by Epoch AI: **not tested by Epoch** ("Agents and long tasks — not
  tested"), so no independent agent score exists there

Reasoning / knowledge:

- GPQA Diamond: **82.8%** (Vals AI) · **81.2%** (Artificial Analysis) · **82.3%** (Epoch AI's own
  evaluation, published 2026-08-07) — three sources agree within ~1.6 pp
- MMLU-Pro: **88.2%** (Artificial Analysis) · **84.1%** (Vals AI) — conflict, ~4 pp
- HLE: **14.1%** (Artificial Analysis) — low; an independent aggregator instead *estimates* 28–35%
  for this model, which is a prediction, not a measurement
- Artificial Analysis Intelligence Index: **35** (Coding Index 37.8, Math Index 55.7)
- Epoch AI Capabilities Index: **143.8** (#99 of 277, range 141.5–145.3; a second Epoch-derived
  tracker reads 144, #101/270) — the strongest aggregate placement of any model in this report
- AIME: **93.3%** (AIME 2024 avg@8), **91.7%** (AIME 2025 avg@8), **92.5%** (AIME 2024–2025) — but
  Artificial Analysis reports AIME 2025 at **55.7%** and Epoch's OTIS mock AIME 2024–2025 at 84.4%
- FrontierMath v2 (Tiers 1–3): **18.2%** (Epoch AI, measured, 2026-08-28; 9.5% in a second setting) —
  the weakest published datapoint for this checkpoint
- SimpleQA Verified: **20%** (Epoch AI) · Chess puzzles 14%, Mystery game puzzles 20% (Epoch AI)
- Long-context reasoning: LCR **48%** (Artificial Analysis)
- IFBench 55.1% (AA); EPIC/SAGE 42.5% (Vals); GlobalDentBench macro-average 51.4% (Vals)
- SuperIndex SI 58.5 (#67 of 124): Math 63.4, Preference 72.8, Reasoning 52.1, coding pillar not
  measured; BenchLM 42.73/100 (#130 of 972, 5 of 668 benchmarks covered); ModelCap index 51.3
  (#190 of 507 archive, 2 measured boards)

Coding:

- LiveCodeBench: **83.3%** (Vals AI, 39/123 = 69th percentile, 209 s latency, $0.01 per test) ·
  **79.7%** (Artificial Analysis)
- SWE-bench Verified: **64.4%** (Vals AI, 59/72 = 18th percentile, 363 s, $0.26 per test)
- SciCode: **49.9%** (Artificial Analysis)
- Arena AI WebDev Arena: **1238.05 Elo** (Vals, 95/105 = 10th percentile, 1,270 votes, 2026-09-02;
  field leader 1663) · Arena Code WebDev per-category ELO 1183–1291 (Brand & Marketing 1284,
  HTML 1291, Frontend 1242, Data & Analytics 1235, React 1229, Content Creation 1192)
- ALE-Bench: **826** performance (Self-Refine ×16) / 265.93 (×1)
- Artificial Analysis Coding Index: **37.8**
- Terminal-Bench 2.0 **24.7%** — the agentic-terminal half of coding is this model's weak spot
- SWE-bench Pro / DeepSWE / Vibe Code Bench / LiveCodeBench v6 (vendor number): **no verified public
  score found** for the hosted endpoint (aggregator *estimates* of 57.0% and 56.3% exist — predictions,
  not measurements)

Long context:

- 1,000,000-token default window verified from the official Model Studio context table and the
  OpenRouter catalogue API (max input 991,808; 983,616 in thinking mode)
- MRCR / RULER / GraphWalks at 512K–1M: **no verified public score found** for this endpoint —
  Epoch AI explicitly lists "Agents and long tasks" as not tested, and no ≥98%-retrieval figure exists
- LCR 48% (Artificial Analysis) is the only long-context *reasoning* datapoint; its benchmark length
  is not stated, so it cannot substitute for a 1M-window retrieval score
- Practical long-window evidence: the 1M window is a hosted-tier feature (the open weights default to
  262,144), and AA's MMMU-Pro 81.9% shows the vision path still works at length

### Normalized scores (1–100)

- **Tool use: 55/100.** Mid-band: Terminal-Bench 2.0 **24.7%** (18th percentile) is below the 45–60%
  TB band, but **Tau2 43.3%** sits at the frontier end of the mid band and the OpenHands Index 38.1%
  shows real agentic work (SWE-Bench 62.0%, GAIA 49.7% inside it), with native tool calling plus
  Qwen-hosted built-in tools as the product's selling point. Capped by a terminal-heavy, slow agent
  profile (716.5 s and $0.11 per Terminal-Bench test) and by the complete absence of GDPval, OSWorld
  and Claw-Eval numbers.
- **Reasoning: 68/100.** GPQA Diamond is a consistent **82%** across three sources (Vals 82.8, AA 81.2,
  Epoch 82.3) — above the 60–80% mid band but short of the 90%+ frontier reference; HLE **14.1%** is
  near-zero, AA's Intelligence Index **35** sits at the top of the 20–35 mid band, and FrontierMath
  Tiers 1–3 **18.2%** is the hard cap. Epoch's Capabilities Index 143.8 (#99/277) says the aggregate
  is better than the mid band alone suggests, hence above the 55–65 mid range but not frontier.
- **Context window: 95/100.** The hosted tier defaults to a **1,000,000-token** window (991,808 max
  input, 65,536 max output) — the top tier of the methodology (≥1M = 95–100) — but the 100-point
  condition (≥98% retrieval at 512K+) is **not met**: no MRCR/RULER/GraphWalks figure exists for this
  endpoint and LCR reads only 48%. Max output of 65,536 and the 81,920 CoT cap are recorded as caveats
  only.
- **Multimodal: 80/100.** Native vision-language with **text, image and video in / text out** — the
  "+video/PDF in" band (75–90) — supported by a measured **MMMU-Pro 81.9%** (31st of 79) and
  Dr.DocBench 57.5. No audio input and no non-text output keep it below the 90–100 band, and no
  video-specific benchmark was run.
- **Coding: 70/100.** Strong for its price band: LiveCodeBench **83.3%**, SciCode **49.9%** (above the
  40% threshold the methodology uses) and SWE-bench Verified **64.4%** put it in the 65–75 mid band,
  but the ceiling is held down by Terminal-Bench 2.0 **24.7%**, AA Coding Index **37.8**, Arena WebDev
  at the **10th percentile** (1238 Elo) and no SWE-bench Pro / DeepSWE / Vibe Code Bench measurement.
- **Cost efficiency: 97/100.** Scored on the evaluated tier `qwen/qwen3.5-flash-02-23`:
  **$0.065 in / $0.26 out** per 1M on OpenRouter (blended ≈ $0.11 at a 3:1 ratio, cheaper than the
  $0.10/$0.20 reference band) — inside the 97–99 band. Model Studio's international rate is
  $0.10/$0.40 and the China region is $0.029/$0.287 for ≤128K prompts, so the price is either way at
  the "small-model money" end while the model delivers a 1M context. Paid only — no free Zen lane
  exists for this model, so there is no free-tier caveat to apply.
- **Overall Score: 74/100.** Mean of the five quality dims (55 + 68 + 95 + 80 + 70) / 5 = 73.6 → 74 —
  the cheapest way to buy a **1M-context multimodal** model with ~82% GPQA and ~83% LiveCodeBench;
  the weak spots are agentic terminal work (TB2.0 24.7%), frontier maths (FrontierMath 18.2%) and
  HLE (14.1%), so route it for high-volume multimodal/long-document and light coding work, not for
  hard research or long-horizon terminal tasks.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-22
- Method: public internet research (Qwen's official "Introducing the Qwen 3.5 Medium Model Series"
  announcement, the Qwen3.5-35B-A3B Hugging Face model card, the official Alibaba Cloud Model Studio
  `qwen3.5-flash` documentation with its context and pricing tables, the OpenRouter catalogue and
  live `openrouter.ai/api/v1/models` record, the OpenCode Zen catalogue, plus benchmark trackers —
  Vals AI, Artificial Analysis, Epoch AI, LiveBench-derived aggregates, BenchLM, SuperIndex, ModelCap
  — and the QwenCloud pricing page). Conflicting figures are listed side by side with their source and
  harness (e.g. MMLU-Pro 88.2% vs 84.1%, AIME 2025 91.7% vs 55.7%, Epoch Capabilities Index 143.8 vs
  144); aggregator *estimates* were excluded from scoring; scores are normalized 1–100
  interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
