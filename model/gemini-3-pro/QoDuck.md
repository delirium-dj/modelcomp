# Gemini 3 Pro — findings by QoDuck

- Source: Google DeepMind/Gemini 3 Pro (`gemini-3-pro-preview`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (the original November 2025 Gemini 3 flagship; distinct from the later Gemini 3.1 Pro)
- **Short description:** Google DeepMind's flagship natively-multimodal reasoning model, released 2025-11-18. First model to break 1500 Elo on LMArena (1501, #1) and debuted #1 on the Artificial Analysis Intelligence Index (+3 over GPT-5.1). Outperformed Gemini 2.5 Pro across every major benchmark. Now legacy — succeeded by Gemini 3.1 Pro (Feb 2026) and the 3.x Flash line. A separate **Deep Think** parallel-reasoning mode is gated to the Google AI Ultra ($250/mo) tier.
- **Provider / access:** Google AI Studio `gemini-3-pro-preview` (free tier with rate limits); Vertex AI `gemini-3-pro-preview` (enterprise); Gemini App (Gemini Advanced $20/mo; Deep Think via AI Ultra $250/mo). Native Gemini Agent + Google Antigravity agentic IDE.
- **Release / knowledge:** Released 2025-11-18 (preview). Knowledge cutoff reported **October 2025** (apxml); not stated on the official launch blog. (apxml lists a 2026-01-08 refresh — see conflicts.)
- **IDs:** `gemini-3-pro-preview` (launch API ID); roster slug `gemini-3-pro`.
- **Context window:** **1,000,000 input tokens**; **64,000 output tokens** (official launch / llm-stats). apxml divergently lists 2M — see conflicts.
- **Modalities:** **Text, image, video, audio, PDF in → text out** (native unified multimodal). Reasoning model with thinking levels + a separate Deep Think mode. Tool calling, structured outputs / JSON mode. No non-text output confirmed.
- **Pricing (as of 2026-11-10):** **$2 / 1M input, $12 / 1M output** (≤200K context); **$4 / $18** (>200K). Batch −50% ($1/$6 standard). Context caching $0.20/M (≤200K), $0.40/M (>200K), storage $4.50/M-tokens/hour. ~12% higher cost-to-run the AA Index than Gemini 2.5 Pro. Output speed ~128 tokens/sec.
- **Architecture:** Proprietary, closed weights; trained/optimized on TPU v5p pods. No public technical report at launch.

### Raw benchmarks found

> Figures are from the official Nov-2025 launch (Google-reported, surfaced via llm-stats) and independent Artificial Analysis. This is a November-2025 vintage model — its "best" ranks are relative to that launch cohort, not the current 2026 frontier. Deep Think (gated) figures are separated from base.

Agent / tool use:

- Terminal-Bench 2.0 (**agentic**, Google, launch): **54.2% — #1** at launch (GPT-5.1 47.6%, Claude 42.8%). NOTE: this is Terminal-Bench **2.0**, an older/easier version — not directly comparable to the TB2.1 ~88% anchor.
- Tau2-Bench Telecom (**agentic**, AA independent): **second-highest** at launch (no numeric value published in the article).
- Terminal-Bench Hard (**agentic**, AA): second-highest / leads (no numeric value).
- SWE-bench Verified (**agentic coding**, Google): **76.2%** (Claude Opus 4.5 80.9%, GPT-5.1 77.9% at launch).
- GDPval-AA Elo, Tau3-Banking, Toolathon, MCP-Atlas, AutomationBench, Claw-Eval: no verified public score found for this exact ID.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (**independent**): **#1 at launch (2025-11-18)**, debuting +3 points above GPT-5.1. Exact value is chart-only in the AA article (Nov-2025 methodology vintage; not comparable to the current v5 Index).
- GPQA Diamond (**reasoning**, Google): **91.9% — best** at launch (GPT-5.1 88.1%, Claude Opus 4.5 83.4%).
- HLE (**Humanity's Last Exam**): **37.5%** base / **41.0%** Deep Think (Google); AA independently measures **37%** (+10 pp over previous best). GPT-5.1 26.5–31.6%, Claude ~28% at launch.
- AIME 2025 (**math**, Google): **95.0%** (100% with code execution); Gemini 2.5 Pro 88.0%.
- ARC-AGI-2 (**abstract reasoning**, Google): **31.1%** base / **45.1%** Deep Think (with code); GPT-5.1 17.6%, Claude ~15%.
- MathArena Apex (**math**, Google): **23.4%** (Gemini 2.5 Pro 0.5%).
- LMArena Text (**Elo**): **1501 — #1**, first model to break 1500 (launch headline). Later re-measures ~1486–1498 (apxml/medium).
- AA-Omniscience (**independent**): leads accuracy, but **hallucination rate 88%** (high). MMLU-Pro: leads (no numeric value).
- CritPt, FrontierMath, LCR/MLCR: no verified public score found for this exact ID.

Coding:

- SWE-bench Verified (**coding**, Google): **76.2%** (harness conflict — see notes).
- SciCode (**scientific coding**, AA independent): **56%** (+10 pp over prior best; hits the ~55% anchor).
- LiveCodeBench (**coding**, AA): **leads** at launch (no numeric value published).
- WebDev Arena (**web-dev Elo**, Google): **1487**.
- Terminal-Bench 2.0: **54.2%** (see Agent/tool use; older version).
- DeepSWE, SWE-bench Pro, Vibe Code Bench, AA-SciCode: no verified public score found for this exact ID.

Long context:

- Native window **1M tokens** (official). The launch blog highlights long-context leadership but no MRCR/RULER/GraphWalks numeric retrieval figure was captured for this exact ID → the ≥98%-at-512K+ ceiling for 100/100 is not demonstrated.

Multimodal:

- MMMU-Pro (**multimodal**, Google): **81.0% — leads all models** (AA confirms lead; Gemini 2.5 Pro 68.0%). Video-MMMU (**video**, Google): **87.6%**. Native text/image/video/audio/PDF input → text output.

### Conflicting-results notes

- **Context window:** official launch + llm-stats say **1M input / 64K output**; apxml lists **2M / 2.1M**. apxml may reflect a later GA refresh or an aggregator error — I use the official 1M launch figure and flag the divergence.
- **Release date / cutoff:** official blog **2025-11-18**; apxml **2026-01-08** with cutoff **Oct 2025** (an earlier apxml snippet said Sep 2025). The Nov-2025 preview launch is authoritative; cutoff is not confirmed on the official blog.
- **SWE-bench Verified harness gap:** Google headlines **76.2%**, but whatllm's standardized comparison (Gemini 3.1 Pro Preview 71.4% = +4.2 pp over 3 Pro) implies ~**67.2%** for 3 Pro on a uniform harness. Vendor vs standardized-harness conflict; I cite 76.2% as the Google-reported figure with the caveat.
- **Terminal-Bench version:** the 54.2% is **TB 2.0**, not TB 2.1 — it must not be compared to the ~88% TB2.1 anchor used for 2026 models.
- **Deep Think is gated:** HLE 41.0% / ARC-AGI-2 45.1% require the $250/mo AI Ultra Deep Think mode; base model is 37.5% / 31.1%. I score the base model and note the gated ceiling.
- **Omniscience hallucination:** AA reports leading accuracy but an **88% hallucination rate** — a reliability caveat against the headline reasoning lead.
- **LMArena vintage:** 1501 is the Nov-2025 launch headline; later re-measures sit ~1486–1498. AA Index "#1, +3 over GPT-5.1" is the Nov-2025 methodology, not the current v5 Index.
- **Legacy status:** succeeded by Gemini 3.1 Pro (Feb 2026, which the deepmind.google/pro page now redirects to). Scores here describe the Nov-2025 flagship relative to its launch cohort.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and NEVER included.

- **Tool use: 86/100.** #1 Terminal-Bench 2.0 (54.2%) at launch, second-highest Tau2-Bench Telecom and Terminal-Bench Hard (AA), SWE-bench Verified 76.2%, and a native Gemini Agent evidence strong launch-era agentic capability; but TB2.0 is an older version (not the TB2.1 ~88% anchor), no Tau3/GDPval-Elo is published, and the field has since moved — capping it below 90.
- **Reasoning: 90/100.** GPQA Diamond 91.9% (#1, hits the 90% anchor), AIME 2025 95%/100%-with-code, AA Index #1 at launch (+3 over GPT-5.1), LMArena 1501 (#1), and ARC-AGI-2 31.1% evidence frontier reasoning; base HLE 37.5% sits just under the 40% anchor (Deep Think 41% is gated), ARC-AGI-2 base is modest, and the 88% Omniscience hallucination rate + Nov-2025 vintage cap it below 93.
- **Context window: 95/100.** Native 1M tokens (≥1M tier = 95–100); no published ≥98% retrieval figure at 512K+, so 100 is not awarded (apxml's 2M claim is unverified against the official launch).
- **Multimodal: 86/100.** Native text/image/video/audio/PDF input → text output, with MMMU-Pro 81.0% (leads all models) and Video-MMMU 87.6% quantifying strong multimodal understanding; no non-text output. Top of the +video/PDF/audio-in 75–90 band.
- **Coding: 88/100.** SciCode 56% (AA, hits the ~55% anchor), LiveCodeBench leader (AA), WebDev Arena 1487 Elo, and SWE-bench Verified 76.2% evidence strong coding; SWE-bench Verified trails Opus 4.5 (80.9%) with a harness conflict, no DeepSWE/TB2.1 figure, and TB2.0 54.2% is an older version — capping it below 90.
- **Cost efficiency: 65/100.** Standard $2 in / $12 out per 1M (≤200K) is cheaper than the $3/$15≈60 anchor (~65); >200K context rises to $4/$18 (~55), Batch halves it, and Deep Think is gated to a $250/mo subscription.
- **Overall Score: 89.0/100.** Half-up mean of (86 + 90 + 95 + 86 + 88) / 5 = 445 / 5 = 89.0. Best fit: broadly-multimodal frontier reasoning and long-context knowledge-work at a moderate price; it was the #1 launch model of Nov 2025, but choose Gemini 3.1 Pro for the current flagship and note the gated Deep Think mode and high Omniscience hallucination rate.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official Google Gemini 3 launch blog + llm-stats launch guide (specs/benchmarks), cross-checked against independent Artificial Analysis (Index #1, HLE 37%, SciCode 56%, MMMU-Pro lead, Omniscience), apxml, whatllm, and LMArena reporting. 5 successful independent web searches. Scores are normalized 1–100 interpretations, not official vendor scores; Nov-2025 launch vintage, Google-reported vs independent numbers, base vs gated Deep Think, and benchmark-version differences are distinguished throughout.
- Reference URLs:
  - [Google — A new era of intelligence with Gemini 3 (official launch)](https://blog.google/products-and-platforms/products/gemini/gemini-3/)
  - [Artificial Analysis — Gemini 3 Pro: Everything you need to know](https://artificialanalysis.ai/articles/gemini-3-pro-everything-you-need-to-know)
  - [llm-stats — Gemini 3 Pro: Complete guide, pricing, context window](https://llm-stats.com/blog/research/gemini-3-pro-launch)
  - [apxml — Gemini 3 Pro Preview specs & benchmarks](https://apxml.com/models/gemini-3-pro-preview)
  - [Google DeepMind — Gemini Pro model card (3.1 Pro, with 3 Pro comparison)](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
  - [whatllm — Gemini 3.1 Pro Preview: what the .1 means (SWE-bench comparison)](https://whatllm.org/blog/gemini-3-1-pro-preview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.