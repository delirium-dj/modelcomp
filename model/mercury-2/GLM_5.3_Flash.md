# Mercury 2 — findings by GLM 5.3 Flash

- Source: Inception Labs / Mercury 2 (`inception/mercury-2` / `mercury-2`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2
- **Short description:** Inception Labs' reasoning diffusion LLM (dLLM) — the first production reasoning model that generates via parallel refinement (denoising a full draft) instead of left-to-right token decoding. Built for latency-critical production loops (agent tool-selection, real-time voice/search, instant coding/editing) at ~1,000 tok/s; quality is mid-tier by design, not frontier.
- **Provider / access:** Inception API (`https://api.inceptionlabs.ai/v1`, Chat Completions, OpenAI-compatible; model string `mercury-2`); also on OpenRouter (`inception/mercury-2`), Vercel AI Gateway, Baseten (first dLLM host, 2026-06-11) and other gateways (~7 providers). **Deprecation: closed to new users since 2026-10-19; existing customers keep access until 2026-11-15 (enterprise agreements excepted).** Successors: Mercury 2.5 (260K ctx) and Mercury 3 (flagship, 1M ctx).
- **Release / knowledge:** Launched 2026-02-24 (press release; aggregators first listed 2026-03-04); knowledge cutoff 2025-01-01 per pricing trackers (AA leaves it blank).
- **IDs:** `mercury-2` (Inception direct), `inception/mercury-2` (OpenRouter). No Free ID exists on any host found.
- **Context window:** 128,000 tokens total (Inception docs, OpenRouter, Vercel); max output 50,000 tokens (docs' example caps `max_completion_tokens` at 8,192). Verified from Inception's official docs table and multiple gateways. Long-context quality at depth is unverified — no MRCR/RULER run; AA-LCR 43.7% is the only long-context data point and it is weak.
- **Modalities:** text in → text out; reasoning yes (tunable reasoning levels / refinement depth); tool use yes (native function calling); structured outputs yes (schema-aligned JSON / `response_format`); temperature supported. No image/audio input, no non-text output.
- **Pricing (as of 2026-11-05):** $0.25 / $0.75 per 1M in/out (Inception list, matched by Vercel); cached input $0.025 (90% off); OpenRouter's weighted average actually paid: $0.097 in / $0.748 out. Caveat: the model is verbose — AA measured 69M output tokens for its Index run vs a 20M median (~3.5x), inflating effective output cost.
- **Architecture:** proprietary diffusion (dLLM) — parallel multi-token refinement over a small number of denoising passes; closed weights. Parameter count unpublished (one review's "~8B" claim is unverified). Speed: Inception reports 1,009 tok/s on NVIDIA Blackwell (NVFP4); AA measured 502–712 tok/s depending on run — first of ~132 tracked models either way. Known trade-off: fixed denoising-pass overhead makes very short outputs (10–30 tokens) slower than autoregressive models.

### Raw benchmarks found

> Inception-reported rows (methodology stated as consistent with Artificial Analysis) vs AA-measured rows; conflicts flagged. Post-deprecation, AA marks some Mercury 2 cells as legacy/estimated ("no publicly available API").

Agent / tool use:

- AA τ²-Bench Telecom: **70.8%** (AA measured — its one strong agentic row)
- AA Terminal-Bench 2.1: **27.3%**; Terminal-Bench Hard: **26.5%**; Terminal-Bench 4.0: **0.0%** (AA measured — far below the 45–60% mid band)
- AA AutomationBench-AA: **2%**; AA Agentic Index: **1.6** (better than only ~26% of models)
- AA τ-Bench Banking: **9.5%**
- GDPval-AA v2.1: **494 Elo** (AA measured, low; OpenRouter's percent-normalized row shows 0.1%)
- PinchBench (Inception-run, OpenClaw agent tasks): **78% success**, fastest execution in its accuracy class (vendor harness)
- Ship-Bench (independent single-model SDLC test): **60.1/100** average across five roles, 1 of 5 passed — upstream documents strong (73–78), implementation 31.3, verification collapsed
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **77.0%** (AA measured; Inception-reported "GPQA" 73.6 — version difference, both listed)
- AIME 2025: **91.1** (Inception-reported); AIME 2026: **90%** (Decrypt, same model vs DiffusionGemma 69.1%)
- IFBench: **69.8%** (AA) / **71.3%** (Inception)
- HLE: **17.1%** (AA measured)
- AA-LCR v1.1: **43.7%**
- AA-Omniscience: **−51** (negative — severe knowledge/hallucination deficit; benchable's General Knowledge row: 8% accuracy; its hallucination-baseline row: 98%)
- CritPt: **~1%** (AA measured; anomalous near-zero, likely long-form format failure — flagged, not hidden)
- Artificial Analysis Intelligence Index: **33** (v4.3-era, #22 of 132, median 19) / **11** on the later v4.3.2 10-eval rebuild — scale change + post-deprecation estimation caveats
- GPQA (Inception, launch): 73.6; no MMLU/GPQA conflict beyond the Diamond/plain split

Coding:

- LiveCodeBench: **67.3** (Inception-reported; benchable's independent "Coding" row 67.0 agrees)
- SciCode: **38.4** (Inception) / **37.7%** (AA measured)
- AA Coding Index: **31.1** — #93 of 152 (better than 39% of models; sits between Devstral 2 at 31.3 and gpt-oss-120b at 30.4)
- Design Arena code-category Elo: **1019** ("Top 89%"; website Elo 1036, UI components 993)
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 128K window documented; no MRCR/RULER/GraphWalks retrieval run published; AA-LCR 43.7% is the only measured long-context signal

### Normalized scores (1–100)

- **Tool use: 40/100.** One strong agentic row (τ²-Telecom 70.8%) and a vendor-run PinchBench 78% cannot offset AA-measured TB2.1 27.3%, TB4.0 0.0%, AutomationBench 2%, τ²-Banking 9.5% and an Agentic Index better than only ~26% of models — diffusion's parallel refinement currently structurally underperforms on long sequential agent horizons.
- **Reasoning: 60/100.** GPQA Diamond 77.0% (AA measured) and AIME 91–91.1 sit at the top of the 60–80% mid band, HLE 17.1% is above the sub-10% mid anchor, and IFBench ~70% is solid — capped hard by the Intelligence Index collapse to 11 on the v4.3.2 rebuild, the negative AA-Omniscience (−51), and the near-zero CritPt row.
- **Context window: 54/100.** 128K total (100K–200K tier) with a 50K output ceiling; no published retrieval benchmark and the only long-context signal (AA-LCR 43.7%) is weak, keeping it at the bottom of the tier.
- **Multimodal: 15/100.** Text-only input and output on every provider; no vision, audio, or file modalities.
- **Coding: 55/100.** LiveCodeBench 67.3 corroborated independently (benchable 67.0) and Design Arena code Elo 1019 (top 89%) — but the AA Coding Index 31.1 (#93/152), SciCode ~38, and the independent Ship-Bench implementation collapse (31.3) show real-world coding agents should not rely on it; no SWE-bench number exists at all.
- **Cost efficiency: 92/100.** $0.25/$0.75 per 1M with 90%-off cached input is well below the methodology's ~$0.60/$2.20 ≈ 92 anchor, and production evidence is strong (Augment Code: 90% cost and 82% latency cut replacing Opus 4.7 on compaction); the ~3.5x output verbosity AA measured is the one discount.
- **Overall Score: 45/100.** (40 + 60 + 54 + 15 + 55) / 5 = 44.8 → 45. Best-fit recommendation: a speed instrument, not a brain — ideal for sub-second tool-routing, classification, compaction and real-time voice loops where 1,000 tok/s matters more than depth; not viable as a primary coding or long-horizon agent model, and it is being sunset (new-user sales closed 2026-10-19, access ends 2026-11-15).

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-05
- Method: public internet research (official Inception launch release + docs/models pages, OpenRouter, Baseten, Vercel, Decrypt, The Neuron, ComputerTech, AwesomeAgents, developersdigest, llm-stats, llmpricing, benchable, Artificial Analysis comparison pages, Inception's PinchBench post, and an independent Ship-Bench SDLC run; conflicting figures compared — GPQA 73.6 vendor vs 77.0 AA-measured, speed 502–712–1,009 tok/s by hardware/methodology, AA Index 33 v4.3 vs 11 v4.3.2 scale rebuild — with same-harness measured sources preferred); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Business Wire — Inception Launches Mercury 2, the Fastest Reasoning LLM (official launch)](https://www.businesswire.com/news/home/20260224034496/en/Inception-Launches-Mercury-2-the-Fastest-Reasoning-LLM-5x-Faster-Than-Leading-Speed-Optimized-LLMs-with-Dramatically-Lower-Inference-Cost)
  - [Inception Labs — Introducing Mercury 2 (official blog)](https://www.inceptionlabs.ai/blog/introducing-mercury-2)
  - [Inception Labs — Models page (deprecation: closed to new users 2026-10-19, access ends 2026-11-15)](https://www.inceptionlabs.ai/models)
  - [Inception docs — Models table (128K ctx, 50K out, pricing, endpoints)](https://docs.inceptionlabs.ai/get-started/models)
  - [OpenRouter — Inception Mercury 2 (AA-measured benchmark rows, pricing, uptime)](https://openrouter.ai/inception/mercury-2)
  - [Baseten — Mercury 2 now available (Augment Code 90%/82% case study)](https://www.baseten.co/blog/mercury-2-is-now-available-on-baseten/)
  - [Decrypt — Mercury 2 beats DiffusionGemma (AIME 2026 90%, GPQA 77%)](https://decrypt.co/371722/inception-labs-mercury-2-ai-beats-googles-diffusiongemma)
  - [Artificial Analysis — Mercury 2 vs K2 Think V2 (v4.3.2 rows, verbosity, cost/task)](https://artificialanalysis.ai/models/comparisons/mercury-2-vs-k2-think-v2)
  - [Artificial Analysis — Mercury 2 vs GPT-5 mini (v5.0.1 comparison, speed)](https://artificialanalysis.ai/models/comparisons/mercury-2-vs-gpt-5-mini)
  - [ComputerTech — Mercury 2 Review 2026 (AA Index 33/100, #22 of 132; trade-offs)](https://computertech.co/mercury-2-review/)
  - [Awesome Agents — Mercury 2 review: 1,000 tokens per second, tested (AA 711.6 tok/s, verbosity asterisk)](https://awesomeagents.ai/reviews/review-mercury-2/)
  - [Inception — Mercury 2 on PinchBench (78% agent success, vendor harness)](https://www.inceptionlabs.ai/blog/mercury-2-on-pinchbench)
  - [Jason Agostoni — Ship-Bench SDLC experiment (independent: 60.1/100, implementation collapse)](https://jason.agostoni.net/can-the-incredible-speed-of-a-diffusion-llm-accelerate-your-sdlc-my-guess-is-no-but-let-s-see)
  - [LLM Stats — Mercury 2 benchmarks, pricing & context window](https://llm-stats.com/models/mercury-2)
  - [benchable.ai — Inception Mercury 2 details & benchmarks](https://benchable.ai/models/inception/mercury-2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
