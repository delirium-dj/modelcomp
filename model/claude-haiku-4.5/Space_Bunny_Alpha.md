# Claude Haiku 4.5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-haiku-4-5-20251001`, alias `claude-haiku-4-5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's small, fast, cheap tier — a lightweight version of the Claude 4 generation, pitched as matching Sonnet 4 on coding, computer use and agent tasks at roughly one-third the price of a frontier Claude. Its real niche is high-volume, low-latency work: sub-agents, parallelised execution, routing and classification under a Sonnet/Opus orchestrator. Not a variant of another entry in this dataset; a distinct first-party model ID.
- **Provider / access:** Anthropic Claude Platform (Messages API), plus Amazon Bedrock (`anthropic.claude-haiku-4-5-20251001-v1:0`) and Google Vertex AI. OpenRouter and Vercel AI Gateway both list it as `anthropic/claude-haiku-4.5`. Artificial Analysis measures it through **5 API providers**. Messages API, not the Responses API.
- **Release / knowledge:** released 2025-10-15 (API and Claude apps same day). Reliable knowledge cutoff **February 2025**; training-data cutoff **July 2025** (Anthropic platform docs; Artificial Analysis lists Jul 1 2025). Retirement: **not sooner than 2026-10-15**.
- **IDs:** `claude-haiku-4-5-20251001` (canonical API ID), alias `claude-haiku-4-5`. Third-party IDs: `anthropic/claude-haiku-4.5` (OpenRouter, Vercel AI Gateway).
- **Context window:** **200,000 tokens**, max output **64,000 tokens** (Anthropic platform docs — first-party spec sheet, not inferred). There is **no 1M-token option** on this model, unlike Sonnet 5 / Opus 5 / Fable 5. Artificial Analysis confirms 200k.
- **Modalities:** text and image **in**; text **out** (Anthropic spec table). Reasoning: **extended thinking** with controllable depth; Anthropic explicitly documents **no default-effort parameter** on this tier ("Not supported") — it is the only model in the current Anthropic line-up without an effort control. Full tool support: bash, file editing, web search, computer use; JSON mode supported. No audio or video input documented.
- **Pricing (as of 2026-10-01):** **$1.00 / MTok input, $5.00 / MTok output** (Anthropic pricing docs). Cache read **$0.10** (90% discount), 5-minute cache write $1.25, 1-hour cache write $2.00, **Batch API 50% off** both directions ($0.50 / $2.50). Measured blended rate at a 7:2:1 cache-hit/input/output ratio: **$0.77 / MTok**. Artificial Analysis measured **$0.28 cost per Intelligence Index task**, ranking **#13 of 224** among reasoning models in its price class — one of the cheapest per-task costs on the board. No free tier; it is included in claude.ai's paid tiers only.
- **Architecture:** proprietary. Anthropic has not disclosed parameter count, layer count, or architecture for this model.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **73.3%** (Anthropic launch post, 2025-10-15 — averaged over 50 trials, no test-time compute, 128K thinking budget, default sampling, full 500-problem set, simple two-tool bash + string-replacement scaffold, with a minor prompt addition)
- Terminal-Bench 2.1 (Terminus-2 harness): **~41%** (Anthropic-reported, launch table; vendor figure, not independently reproduced)
- Terminal-Bench 4.0 / Terminal-Bench Hard: **27.3%** (Artificial Analysis, Claude 4.5 Haiku (Reasoning))
- τ²-Bench Telecom: **54.7%** (Artificial Analysis, reasoning variant); **32.5%** (non-reasoning variant)
- OSWorld-Verified: **50.7%** (Anthropic-reported at launch; Sonnet 4 comparison point 42.2%, Sonnet 4.6 72.5%)
- GDPval-AA v2.1: **10.9%** (Artificial Analysis)
- Artificial Analysis Agentic Index: **8.0** (Claude 4.5 Haiku (Reasoning))
- Augment (launch partner): reported Haiku 4.5 reaching **90% of Sonnet 4.5's performance** on Augment's agentic coding eval — vendor-partner claim, no public harness.
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **17** — **#167 of 224** reasoning models (Claude 4.5 Haiku (Reasoning), v4.3.2 index family). AA characterises it as "among the least intelligent models" while still well priced for its tier.
- Artificial Analysis Intelligence Index (non-reasoning variant): **15 (estimated)**, #30 of 61 non-reasoning models
- GPQA Diamond: **67.2%** (Artificial Analysis, reasoning); 64.6% non-reasoning
- Humanity's Last Exam: **10.4%** (Artificial Analysis, reasoning); 4.2% non-reasoning
- CritPt: **0.0%** (Artificial Analysis, both variants)
- AA-LCR v1.1 (long-context reasoning): **74.3%** (Artificial Analysis, reasoning); 49.7% non-reasoning
- AA-Omniscience Accuracy / Non-Hallucination Rate: **18.0% / 72.7%** (Artificial Analysis, reasoning); 14.4% / 74.3% non-reasoning — i.e. it declines to answer far more often than it guesses
- IFBench: **54.3%** (Artificial Analysis, reasoning)
- Output speed / latency: **100.0 tokens/s**, **TTFT 22.03s** on the reasoning variant (Artificial Analysis, Anthropic's first-party API; #49 of 224 on speed). Non-reasoning variant: **88.5 tokens/s**, **TTFT 0.59s** (#15 of 618). The 22s reasoning TTFT is a real extended-thinking cost, well above the 4.04s class median.

Coding:

- SWE-bench Verified: **73.3%** (Anthropic, harness described above) — the model's strongest and most-cited number
- SciCode: **42.2%** (Artificial Analysis, reasoning)
- Artificial Analysis Coding Index: **43.9** (Claude 4.5 Haiku (Reasoning))
- LiveCodeBench / DeepSWE / Vibe Code Bench / SWE-bench Pro: **no verified public score found**

Long context:

- **AA-LCR v1.1: 74.3%** at the 200k window (Artificial Analysis, reasoning variant) — this is the only long-context retrieval figure that exists for the model.
- No MRCR, RULER, or GraphWalks measurement published. The 200k ceiling is a documented spec with no retrieval measurement above 74%.

### Normalized scores (1–100)

- **Tool use: 55/100.** Real, working computer-use and agentic plumbing — 73.3% SWE-bench Verified, 50.7% OSWorld-Verified, 54.7% τ²-Bench Telecom — but the harness-level agentic numbers are mid-tier at best: Terminal-Bench Hard 27.3%, GDPval-AA v2.1 10.9%, AA Agentic Index 8.0, and a #167/224 Intelligence Index placement. Capped by Terminal-Bench, not by tool-calling reliability: this model calls tools cleanly and then reasons too weakly to finish long agent chains.
- **Reasoning: 56/100.** GPQA Diamond 67.2% lands squarely in the methodology's 60–80% mid-band, and AA-LCR 74.3% is a genuine long-context strength. Everything else caps it: HLE 10.4%, CritPt **0.0%**, Omniscience Accuracy 18.0%, and an Intelligence Index of 17 that Artificial Analysis places at the bottom of the reasoning field. It is a reasoning-light model sold on price and latency.
- **Context window: 70/100.** 200,000 tokens with 64,000 max output — the methodology's explicit "200K = 70" tier point, and there is **no 1M option** on this model while Sonnet 5, Opus 5 and Fable 5 all carry one. The 74.3% AA-LCR is a real retrieval result and holds the score at the top of its band rather than below it; it is far short of the ≥98%-at-512K bar for a 95+.
- **Multimodal: 65/100.** Text and image in, text out (Anthropic spec table). That is the "+image in = 60–70" band, sitting at its midpoint. No documented audio or video input and no non-text output, so it cannot climb toward the 75–90 or 90–100 bands.
- **Coding: 72/100.** 73.3% on SWE-bench Verified is genuinely strong for this tier and near the Sonnet 4 flagship's 72.7% five months earlier — the launch comparison holds up. Capped by SciCode 42.2% and a Coding Index of 43.9, both mid-tier, and by Terminal-Bench Hard 27.3%, which says the model writes plausible patches far more reliably than it drives a terminal to completion.
- **Cost efficiency: 90/100.** $1.00 / $5.00 per MTok sits just under the methodology's ~$1.25/$4.25 ≈ 88 anchor, and the second-order effects push it up: cache reads at $0.10 (90% off), Batch at 50% off, a $0.77 blended rate, and a measured **$0.28 per Intelligence Index task — #13 of 224** in its price class. Not free, and not the cheapest small model on the market (GPT-5 mini and the Gemini Flash tier undercut it on raw price), but close to the top of the paid band.
- **Overall Score: 64/100.** (55 + 56 + 70 + 65 + 72) / 5 = 63.6 → **64**. Best fit: a cheap, fast sub-agent, router and high-volume executor under a Sonnet or Opus orchestrator, or a 200k-context vision reader — not a model for open-ended reasoning, long-horizon agent chains, or whole-codebase ingestion.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — Anthropic's own model page, launch post (`anthropic.com/news/claude-haiku-4-5`) and platform documentation (`platform.claude.com/docs/en/models/haiku-4-5/overview`), Artificial Analysis model pages for both the reasoning and non-reasoning variants, and the OpenRouter / Vercel AI Gateway / llm-stats provider records. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores; Anthropic's Terminal-Bench and OSWorld rows are labelled vendor-reported because no party has reproduced them.
- Future sources: add a new file next to this one, e.g. `Haiku_4.6.md`, using the same headings.