# Claude Haiku 5.5 — findings by Claude Opus 5

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's small/fast tier, launched 2026-10-07 and billed by Anthropic as "the cheapest, fastest, and most capable small model we've ever released." Built for high-volume, latency-sensitive work — classification, routing, extraction, summarisation, context compaction, and **subagent** roles underneath Opus 5.5 / Sonnet 5.5. Not a variant or alias of another entry; it is the first Haiku-class model with an adjustable `effort` parameter ([Anthropic announcement](https://www.anthropic.com/claude-haiku-5-5)).
- **Provider / access:** Claude API (Messages API) as `claude-haiku-5-5`; Amazon Bedrock (`anthropic.claude-haiku-5-5`), Google Cloud Vertex AI, Microsoft Foundry / Azure, and Claude Platform on AWS ([platform docs](https://platform.claude.com/docs/en/models/haiku-5-5/overview)). Messages API, not an OpenAI-style Responses API. This repo records the local route `opencode/claude-haiku-5.5`.
- **Release / knowledge:** Released **2026-10-07** — one day before this report, so independent third-party coverage is thin by necessity. Reliable knowledge cutoff and training-data cutoff both **Jun 2026**. Retirement committed no sooner than 2027-10-07.
- **IDs:** `anthropic/claude-haiku-5-5`. **No free tier.** The nearest thing is the new monthly API credit announced alongside it (Max 5x $100/mo, Max 20x $200/mo, Team up to $500/mo pooled) — a credit, not a free model ID. No Zen Free ID verified.
- **Context window:** **1,000,000 tokens**, **128,000 tokens** max synchronous output, **300,000** on the Message Batches API with the `output-300k-2026-03-24` beta header ([platform docs — Capabilities](https://platform.claude.com/docs/en/models/haiku-5-5/overview)). Uses the newer Claude 4.7+ tokenizer, so identical text consumes roughly 30% more tokens than on Haiku 4.5 — a real caveat when comparing window sizes across generations.
- **Modalities:** **Text and images in → text out.** No audio, no video, no generated media. Reasoning: adaptive thinking, default effort `medium`, steerable Low→Max. Tool calls: yes, with computer use and browser use in beta in the Python/TypeScript SDKs. `temperature`, `top_p` and `top_k` must be omitted — any non-default value returns HTTP 400.
- **Pricing (as of 2026-10-08):** **Tiered by prompt size.** Prompts **up to 100K tokens: $0.10 / MTok in, $0.50 / MTok out**; prompts **over 100K: $0.50 in, $2.50 out**. Cache reads $0.01 / $0.05; 5-minute cache writes $0.125 / $0.625; 1-hour cache writes $0.20 / $1.00; Batch API 50% off ([platform docs — Pricing](https://platform.claude.com/docs/en/models/haiku-5-5/overview)). Anthropic states this is 90% below Haiku 4.5 for sub-100K requests and 50% below above it, netting ~75% cheaper to run in practice after the tokenizer change. Paid only; standard Anthropic data handling (no mandatory 30-day retention of the kind imposed on Mythos-class models).
- **Architecture:** Proprietary, closed weights. Parameters, activation scheme and training compute undisclosed. Anthropic positions it as its fastest model at standard speed (slower than Opus in Fast Mode).

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.1, offline subset (**computer use**): **72.4%** ([Anthropic announcement](https://www.anthropic.com/claude-haiku-5-5)) — against Haiku 4.5 at 15.7%, GPT-6 Luna at 48.9%, and Sonnet 5.5 at 83.9%
- Terminal-Bench 4.0 (**agentic coding**): **39.2%** (Anthropic; Haiku 4.5 scored 0.0%, GPT-6 Luna 16.4%, Sonnet 5.5 70.6%). Independently replicated at **32.8%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/terminalbench-v4-0))
- GDPval-AA v2.1: **1620 Elo** (Anthropic; Haiku 4.5 735, GPT-6 Luna 1437, Sonnet 5.5 1840)
- AA-Briefcase v1.1: **1578 Elo** (Anthropic; Haiku 4.5 614, Sonnet 5.5 1824)
- AA Harvey LAB (legal agentic): **89.9%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/harvey-lab-aa))
- AA AutomationBench: **35.4%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/automationbench-aa))
- AA GDP.pdf: **20.8%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/gdp-pdf)) — the weakest agentic datapoint
- Customer-run (first-party-relayed, not independently published): HubSpot simulated-CRM suite **92.8%** averaged over three runs; AlphaSense "Ask in Document" **0.84** vs Haiku 4.5's 0.76 over 400 queries; Box reports **+11 points** over Haiku 4.5 at about half the latency; Asana reports **>30% latency reduction** and up to **2.5× faster** inference per agent turn
- Tau3-Banking / τ²-bench: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **45.9% without tools**, **57.4% with tools** (Anthropic; Haiku 4.5 10.2% / 18.7%, Sonnet 5.5 56.9% / 64.5%). Independently **AA-HLE 44.4%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/humanitys-last-exam)) — unusually close agreement with the vendor figure
- AA-LCR (long-context reasoning): **82.7%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning)) — frontier-adjacent, and the strongest number in the whole report
- CritPt: **18.9%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/critpt))
- Artificial Analysis Intelligence Index: **43.4**; BenchLM overall **66.32/100, rank #28 of 887** ([BenchLM](https://benchlm.ai/models/claude-haiku-5-5), 17 of 623 benchmarks covered and flagged conservative — expected one day post-launch)
- AA-Omniscience Index: **10.7** (Artificial Analysis). Accuracy / hallucination-rate split: no verified public score found
- GPQA Diamond: **no verified public score found** — Anthropic did not publish it for this model
- LCR / MLCR beyond AA-LCR: no verified public score found

Coding:

- FrontierCode 1.1 Main: **46.4%** ([Claude Haiku 5.5 system card](https://www-cdn.anthropic.com/e1080d6bf5ae2018ea3c2f414064be03232f5be5/Claude%20Haiku%205.5%20System%20Card.pdf); GPT-6 Luna 42.4%, Sonnet 5.5 52.1% at Xhigh effort)
- AA-SciCode: **55.0%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/scicode))
- Terminal-Bench 4.0: **39.2%** (see above)
- Cognition reports Devin Fusion holding a **66.2** FrontierCode score with Haiku 5.5 as the sidekick model under an Opus 5.5 lead — a *harness* score, not a model score
- **SWE-bench Verified / SWE-bench Pro / LiveCodeBench: no verified public score found.** Anthropic published none for this model, and no independent harness has posted one yet.
- Vibe Code Bench / DeepSWE: no verified public score found

Multimodal:

- Chartography, no tools (**visual reasoning**): **46.4%** (Anthropic; Haiku 4.5 6.4%, GPT-6 Luna 29.1%, Sonnet 5.5 61.6%)
- OSWorld 2.1 at 72.4% is screenshot-driven and so doubles as vision evidence
- MMMU / MathVista / document-vision suites: no verified public score found

Long context:

- No MRCR, RULER, or GraphWalks retrieval curve published at the 1M window. **AA-LCR 82.7%** is the only quantified long-context measurement. Note the economic cliff rather than a capability cliff: crossing 100K tokens multiplies input and output price by 5×, so the back nine-tenths of the window is priced like a different model.

### Normalized scores (1–100)

- **Tool use: 74/100.** Exceptional *for its class* — OSWorld 2.1 72.4% and Terminal-Bench 4.0 39.2% beat GPT-6 Luna (48.9% / 16.4%) outright, and Haiku 4.5 scored a literal 0.0% on Terminal-Bench 4.0, so this is a generational jump rather than an increment; AA Harvey LAB 89.9% confirms real agentic competence on document work. Capped in the mid-70s because the absolute ceiling is still clearly below Sonnet 5.5 (70.6% TB4), because AA GDP.pdf 20.8% and AutomationBench 35.4% show where it breaks, and because Anthropic itself says to route complex agentic coding elsewhere.
- **Reasoning: 74/100.** HLE 45.9% no-tools / 57.4% with-tools is remarkable at this price and is corroborated almost exactly by an independent harness (AA-HLE 44.4%), which is rare; AA-LCR 82.7% is frontier-adjacent. Capped by CritPt 18.9%, an AA Intelligence Index of 43.4, an AA-Omniscience Index of only 10.7, and the complete absence of a published GPQA Diamond figure — a gap I will not paper over with a proxy.
- **Context window: 92/100.** Vendor-documented 1M-token window with 128K synchronous / 300K batch output, and AA-LCR 82.7% proves the window is usable rather than nominal — the best long-context evidence of any small model in this dataset. Held just under Fable-class scoring because no retrieval curve exists at depth and because the newer tokenizer consumes ~30% more tokens for the same text, shrinking the effective window versus the headline number.
- **Multimodal: 58/100.** Text and images in, text only out — no audio, no video, no generated media, so the structural ceiling applies. Within vision it is mid-band: Chartography 46.4% is a 7× improvement on Haiku 4.5 and beats GPT-6 Luna's 29.1%, but trails Sonnet 5.5's 61.6%, and there is no MMMU or document-vision suite number at all. OSWorld 72.4% is the one strong grounded-vision signal.
- **Coding: 62/100.** FrontierCode 1.1 at 46.4% actually edges GPT-6 Luna, and 55.0% on AA-SciCode is respectable; but the dimension is capped hard by Anthropic explicitly positioning it away from complex agentic coding, by Terminal-Bench 4.0 at 39.2%, and above all by the **total absence of any published SWE-bench Verified, SWE-bench Pro, or LiveCodeBench number** — the three benchmarks that would move this score. Cognition's 66.2 FrontierCode figure measures a Devin harness led by Opus 5.5, so it cannot be credited here.
- **Cost efficiency: 92/100.** $0.10 in / $0.50 out per MTok for the ~90% of requests under 100K tokens, with $0.01/MTok cache reads, makes this the cheapest credible agentic model in the Anthropic lineup — roughly 100× cheaper on input than Claude Fable 5 for a BenchLM rank of #28 versus #8. Docked for the 5× price cliff above 100K tokens (which undercuts the headline 1M window), for the tokenizer's extra token consumption, and for having no free tier at all.
- **Overall Score: 72/100.** Mean of the five non-cost dims (74 + 74 + 92 + 58 + 62) / 5 = 72.0. Best fit: exactly what Anthropic says — high-volume compaction, summarisation, classification, extraction and subagent fan-out under a frontier lead model, plus latency-critical browser/computer-use loops; keep it off long-horizon coding and off anything needing verified SWE-bench-grade repair ability.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Anthropic's launch page for Claude Haiku 5.5, the `platform.claude.com` model reference for specs/pricing/limits, the Claude Haiku 5.5 system card, BenchLM's aggregated model page, and the Artificial Analysis leaderboards it cites (Terminal-Bench 4.0, HLE, AA-LCR, CritPt, Harvey LAB, AutomationBench, GDP.pdf, SciCode, Omniscience, Intelligence Index). Customer evaluation figures are explicitly labelled as vendor-relayed and were not credited as independent measurements. Because the model shipped one day before this report, several standard benchmarks genuinely do not exist yet and are recorded as "no verified public score found" rather than proxied. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
