# Grok 4 — findings by Claude Opus 5

- Source: xAI / SpaceXAI (`grok-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's July-2025 flagship, the first model the company trained with reinforcement learning *at pretraining scale* on its 200,000-GPU Colossus cluster, and the first Grok with **natively RL-trained tool use** — code interpreter, web browsing, and deep keyword/semantic search inside X ([xAI announcement, 2025-07-09](https://x.ai/news/grok-4)). Distinct from, but closely related to, **Grok 4 Heavy**, a parallel test-time-compute variant sold on the SuperGrok Heavy tier; several of xAI's most-quoted numbers belong to Heavy, not to base Grok 4, and are labelled as such below. Now superseded by Grok 4.1 → 4.7 and Grok 4.20, all of which have their own folders.
- **Provider / access:** xAI API (`grok-4`), grok.com, the Grok iOS/Android apps, Grok on X, and — at launch — SuperGrok and Premium+ subscriptions. OpenAI-compatible Chat Completions style. **Not listed on OpenCode Zen**, whose Grok line-up is 4.5 / 4.6 / 4.7 / Build 0.1 ([Zen docs](https://opencode.ai/docs/zen/)); this repo records the local route `opencode/grok-4`. `docs.x.ai/docs/models/grok-4` now returns **404**, consistent with retirement from the live model reference.
- **Release / knowledge:** Released **2025-07-09**. Knowledge cutoff: **no verified public date found** — xAI did not publish one, and the model's live X/web search was positioned as the substitute for a recent cutoff.
- **IDs:** `grok-4` (xAI API). **No free ID** — gated behind SuperGrok / Premium+ subscriptions or paid API at launch, and no free route exists now.
- **Context window:** **256,000 tokens**, stated directly by xAI: "frontier-level multimodal understanding, a 256,000 context window" ([xAI](https://x.ai/news/grok-4)). **Conflict worth flagging:** BenchLM records 128K for this model ([BenchLM](https://benchlm.ai/models/grok-4)). I take the vendor's own figure as authoritative for the API and report the aggregator disagreement rather than averaging them. Max output: no verified public figure found.
- **Modalities:** **Text + image in → text out.** xAI describes "multimodal understanding … across text and vision" and media-viewing inside X search. Reasoning: yes (RL-trained long-form reasoning; BenchLM nonetheless classifies the tracked row as the *non-reasoning* configuration). Tool calls: yes, natively trained, including self-directed search-query formulation. Grok 4 Voice Mode with live camera input is a **separate** voice product, not this API model, and under this repo's rules voice capability routes elsewhere — it is not credited here.
- **Pricing (as of 2026-10-08):** **No verified current public price found.** Grok 4 has been removed from xAI's tracked price list; the published Grok rates are Grok 4.5/4.6/4.7 at **$2.00 in / $6.00 out** per MTok (500K context) and Grok 4.3 / 4.20 at **$1.25 / $2.50** (1M context) ([BenchLM Grok API pricing, 2026-10-07](https://benchlm.ai/xai/api-pricing)). Enterprise posture at launch: SOC 2 Type 2, GDPR and CCPA certified.
- **Architecture:** Proprietary, closed weights. Parameter count, activation scheme and MoE structure undisclosed. What xAI *did* disclose is the training story: RL compute scaled to pretraining levels on Colossus, a claimed **6× training-compute-efficiency** improvement, verifiable-reward data expanded well beyond math and code, and "over an order of magnitude more compute" than prior runs.

### Raw benchmarks found

> Caution applied throughout: xAI's launch post publishes several benchmarks only as unlabelled charts (GPQA, LiveCodeBench Jan–May, HMMT 2025, AIME '25, and the HLE training curve), with no extractable numeric values. Those are recorded as "no verified public score found" rather than eyeballed off a graph. Numbers attributed to **Grok 4 Heavy** are kept separate.

Agent / tool use:

- τ²-bench: **74.9%** ([Artificial Analysis](https://artificialanalysis.ai/models/grok-4))
- Vending-Bench (**agentic, 5-run average**): **$4,694.15** net worth and **4,569 units sold**, against Claude Opus 4 at $2,077.41 / 1,412 units and human operators at $844.05 / 344 units ([xAI](https://x.ai/news/grok-4)) — the single most impressive agentic result in this report
- Gert Labs rankings: **42.34%** ([Gert Labs](https://gertlabs.com/rankings))
- **Terminal-Bench (any version), OSWorld, GDPval-AA, Toolathon, MCP-Atlas, Claw-Eval, τ³-bench: no verified public score found.** For a model whose headline feature is native tool use, the absence of any terminal- or computer-use benchmark is a genuine evidential hole, not an oversight on my part.

Reasoning / knowledge:

- AA-GPQA Diamond: **87.7%** (Artificial Analysis)
- ARC-AGI-2: **15.9%** (xAI) — state of the art for closed models at launch, "nearly double Opus's ~8.6%", but low in absolute terms against 2026 frontier results
- AA-HLE: **26.7%** (Artificial Analysis). **Grok 4 Heavy** was the first model to reach **50.7%** on the HLE text-only subset and is credited by xAI with ~50% on the full set — those are Heavy's numbers, not base Grok 4's
- AA-LCR: **68.0%** (Artificial Analysis)
- CritPt: **2.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **22.5**; BenchLM overall **52.07/100, rank #86 of 887** ([BenchLM](https://benchlm.ai/models/grok-4), only 15 of 623 benchmarks covered and flagged conservative)
- AA-Omniscience: Index **2.1**, Accuracy **40.5%**, **Hallucination Rate 64.5%**
- AA-IFBench: **53.7%**
- FrontierMath v2: Tiers 1–3 **19.66%**, Tier 4 **2.08%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard))
- USAMO 2025: **61.9%** — again **Grok 4 Heavy**, not base Grok 4

Coding:

- React Native Evals: **72.6%** ([rn-evals](https://rn-evals.vercel.app/))
- **SWE-bench Verified, SWE-bench Pro, LiveCodeBench (numeric), SciCode, FrontierCode, Vibe Code Bench: no verified public score found.** xAI charted LiveCodeBench (Jan–May) without publishing a value, and no independent harness in my sources posted a SWE-bench figure for `grok-4`.

Multimodal:

- AA-MMMU-Pro: **68.8%** (Artificial Analysis)
- No MathVision, CharXiv, Video-MME, OmniDocBench, ScreenSpot or document-vision number found. The live-camera scene analysis xAI demonstrates belongs to Voice Mode, not this model.

Long context:

- No MRCR, RULER, LongBench or needle-retrieval number published at any depth. **AA-LCR 68.0%** is the only quantified long-context signal, and it is mid-band.

### Normalized scores (1–100)

- **Tool use: 68/100.** Vending-Bench is genuinely exceptional — 2.3× Claude Opus 4's net worth and 5.6× a human operator's, averaged over five runs — and τ²-bench 74.9% confirms competent function calling; the RL-trained self-directed search is a real architectural capability, not a wrapper. The score is nonetheless held in the 60s because **the entire modern agentic battery is missing**: no Terminal-Bench at any version, no OSWorld, no GDPval, no MCP or multi-tool orchestration measurement. One spectacular single-environment result plus one function-calling score cannot carry the dimension.
- **Reasoning: 68/100.** AA-GPQA Diamond 87.7% is a strong, independently measured science result, and ARC-AGI-2 15.9% was a legitimate closed-model record in July 2025. Capped by AA-HLE 26.7% (the widely-quoted ~50% belongs to Grok 4 Heavy and cannot be credited here), CritPt 2.0%, FrontierMath Tier 4 2.08%, AA-IFBench 53.7%, an AA Intelligence Index of 22.5, and a 64.5% hallucination rate against 40.5% accuracy on Omniscience.
- **Context window: 70/100.** 256K is vendor-stated and was competitive at launch; AA-LCR 68.0% shows the window is usable. Held at 70 by three things: the aggregator-vs-vendor conflict (128K vs 256K) showing the public record is unreliable, the complete absence of any retrieval curve, and the fact that same-family successors now ship 500K–2M windows, which makes 256K unremarkable in 2026 terms.
- **Multimodal: 58/100.** Text and images in, text only out — no audio, no video, no generated media in this API model. The one hard number, AA-MMMU-Pro 68.8%, is respectable but solitary: there is no chart, document, OCR, video or GUI-grounding measurement anywhere. xAI's most visually impressive demonstration (live camera in Voice Mode) is a different model and is excluded by this repo's routing rules.
- **Coding: 60/100.** React Native Evals 72.6% is the only verifiable coding number I found, and it is a narrow front-end harness. xAI published a LiveCodeBench chart with no value attached, and **no SWE-bench result of any kind exists** for `grok-4` in my sources — for a dimension this heavily benchmarked across the field, that silence is itself the finding. Scored above the floor only because the one real datapoint is decent and the model is demonstrably a capable general coder in deployment.
- **Cost efficiency: 45/100.** No current price is published for `grok-4` at all, and `docs.x.ai` 404s for it — the practical reading is that it is retired in favour of siblings. Judged on value: every cheaper Grok in xAI's live price list outscores it on BenchLM — Grok 4.3 at **$1.25 / $2.50** scores 53.69 and Grok 4.5 at **$2.00 / $6.00** scores 63.97, versus Grok 4's 52.07 — so there is no price point at which this model is the rational choice within its own family. No free tier, and the subscription route it launched on (SuperGrok / Premium+) was never free either.
- **Overall Score: 64.8/100.** Mean of the five non-cost dims (68 + 68 + 70 + 58 + 60) / 5 = 64.8. Best fit: essentially historical — it remains interesting as the model that proved pretraining-scale RL and native tool use, and as a strong single-environment commercial agent (Vending-Bench), but for live work any Grok 4.3 or later is cheaper, better measured, and better scored. I would not deploy it new.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — xAI's own Grok 4 launch post (training methodology, 256K context, ARC-AGI-2, Vending-Bench, Grok 4 Heavy attributions, enterprise certifications), BenchLM's aggregated Grok 4 page and its Grok API pricing table, and the underlying Artificial Analysis, Epoch AI, Gert Labs and rn-evals leaderboards. `docs.x.ai/docs/models/grok-4` was requested and returned 404, which is reported as evidence of retirement rather than treated as a research failure. Benchmarks xAI published only as unlabelled charts were deliberately **not** estimated, and figures belonging to Grok 4 Heavy were kept out of Grok 4's scores. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
