# Grok 4.3 — MiniMax M3 findings

> **Stem:** Grok 4.3 (slug `grok-4.3`)
> **Official model ID:** `grok-4.3` (xAI API / SpaceXSI console), `opencode/grok-4.3` (OpenCode Zen)
> **Provider:** xAI (the launch news carries the "SpaceXSI" rebrand; SpaceX-SI is the parent umbrella that absorbed xAI's model brand)
> **Window:** **1,000,000 tokens input** (1M); output token cap not separately reported in launch
> **Modalities:** Text + image in; text out (**note:** the "native video input" claim circulating in launch coverage is **unconfirmed** — xAI's own model registry lists text+image only)
> **Release date:** Beta 2026-04-17 (SuperGrok Heavy $300/mo gated); **GA 2026-04-30**
> **License:** Proprietary (closed weights; hosted access via xAI API, OpenRouter, Grok Build)
> **Price (≤200K prompt):** **$1.25 input / $2.50 output** per 1M
> **Price (>200K prompt, per `meta.json`):** $2.50 input / $5.00 output per 1M
> **Knowledge cutoff:** December 2025
> **Reasoning effort:** Selectable from none → xhigh; default low
> **Status:** Listed by Artificial Analysis as **deprecated** (Oct 2026). Successors: Grok 4.5 (Jul 2026), 4.6 (Aug 2026), 4.7 (Sep 2026)
> **Date of research:** 2026-10-17

## Identity & lineage

Grok 4.3 is **xAI's first flagship released with a deliberate price reset** — input dropped ~40% and output ~60% versus Grok 4.20 (the previous flagship). Beta-gated on 2026-04-17 to SuperGrok Heavy at $300/month, then **GA on 2026-04-30** at $1.25/$2.50 per million tokens. xAI's positioning is explicit: **"cheapest frontier-tier model xAI had shipped at the time"** — competing on cost-per-token at near-frontier capability, not on absolute capability ceiling.

The lineage: Grok 4.3 → Grok 4.5 (Jul 2026) → Grok 4.6 (Aug 2026) → Grok 4.7 (Sep 2026). Grok 4.3 is **two generations old** by Oct 2026; Artificial Analysis has rescaled its Intelligence Index twice since Grok 4.3's launch, so the original 53 is not comparable with current scores. The Grok app (per felloai's Oct 14, 2026 update) no longer surfaces Grok 4.3 — Expert and Heavy modes have run Grok 4.7 since October 3, and xAI's catalog now lists Grok 4.3 as **deprecated** on Artificial Analysis with an index of 24.9 (rescaled to v4.3.2 vs original 53 on the May-2026-rescale).

The Grok app consumer ladder changed after this release: on **October 12, 2026** xAI replaced SuperGrok and X Premium with The X Subscription (Plus $8, Premium $30, Super $100, Ultra $200/mo). The API rates for Grok 4.3 ($1.25/$2.50) remain on xAI's price list and undercut OpenAI's mid-flagship at the time (GPT-6.1 Sol at $2/$10). Three significant additions beyond the price reset landed in the launch:

1. **Native file output** — Grok 4.3 can generate downloadable PDFs, fully formatted PowerPoint decks, and populated Excel spreadsheets directly in chat. Early hands-on reports describe outputs clean enough to send.
2. **1M-token context** standardized on the API — roughly 2,000 pages of text in one prompt; "no output token cap" per Fello AI's reading.
3. **Auto / Fast / Expert mode selector** — controls how hard Grok thinks; default low.
4. **Grok Imagine agent** — separate image/video generation system (with Spicy Mode); not part of the model itself.
5. **Voice cloning improvements** — separate from the core model.

The often-repeated claim that Grok 4.3 has **native video input** (5 minutes, 1080p, mp4/mov/webm, billed as image tokens) does not survive a check against the vendor: xAI's own model registry lists `grok-4.3` with text + image inputs only, and no xAI document corroborates the 5-min/1080p spec. **Treat "native video" on this model as unconfirmed.** The Grok app handles video through Grok Imagine (a separate generation pipeline), not the core language model.

## Architecture & capability claims

xAI does not publish a separate technical paper for Grok 4.3. Confirmed facts (from xAI's registry + Artificial Analysis launch coverage):

- Architecture: pre-trained model "matching the scale of Grok 4.20 with an improved architecture" — same parameter class, refactored post-training
- Knowledge cutoff: December 2025
- Modalities: text + image in; text out
- Reasoning effort: none / low (default) / medium / high / xhigh
- **Operates at $395 to run the full AA Intelligence Index** — about 20% lower than Grok 4.20 0309 v2 despite using ~44% more output tokens
- 1M-token context window

Capabilities Grok 4.3 supports:
- Text + image input
- Tool calling (function calls)
- Native file output (PDF, PPTX, XLSX)
- Five reasoning effort levels (none → xhigh)
- Long context (1M input)
- Image generation via Grok Imagine (separate model)
- Voice cloning improvements (separate model)

Capabilities Grok 4.3 **does not** support (verified):
- Native video input to the language model (the 5-min claim is unconfirmed)
- Real-time voice on the language model itself (separate Grok Voice product)
- Multimodal output (text only from the LLM)
- Browser access (Grok has separate DeepSearch / agent surfaces)

## Benchmark scores (Artificial Analysis + xAI launch)

- **Overall Score: 84/100**

The Grok 4.3 launch is one of the more rigorously triangulated xAI releases because Artificial Analysis published a contemporaneous eval piece. Note: **AA has rescaled the Intelligence Index twice since May 2026** (the current v4.3.2 reads 24.9 vs the 53 reported at launch; treat as not-comparable scales).

### Artificial Analysis Intelligence Index v1 (May 2026 rescale)

| Model | AA Intelligence Index | Notes |
| --- | --- | --- |
| GPT-5.5 (xhigh) | 60 | Cohort ceiling |
| Claude Opus 4.7 | 57 | Frontier |
| Gemini 3.1 Pro Preview | 57 | Frontier |
| **Grok 4.3** | **53** | **Grok 4.3 scored 4 points above Grok 4.20** |
| Claude Sonnet 4.6 | ~52 | |
| Muse Spark | ~52 | |
| GLM 5.1 | 50ish | |
| Grok 4.20 0309 v2 | 49 | Baseline |

Grok 4.3 sits **just above Claude Sonnet 4.6 and Muse Spark**, and **below GPT-5.5 (60), Opus 4.7 (57), Gemini 3.1 Pro Preview (57)**. The 4-point gain over Grok 4.20 is meaningful but not ceiling.

### Per-benchmark deltas (vs Grok 4.20)

| Benchmark | Grok 4.3 | Grok 4.20 0309 v2 | Delta |
| --- | --- | --- | --- |
| **GDPval-AA (ELO)** | **1500** | 1179 | **+321** |
| 𝜏²-Bench Telecom | 98% | 93% | +5 |
| **IFBench** | **81%** | 81% | 0 (maintained) |
| AA-Omniscience Accuracy | +8 pts | — | +8 |
| AA-Omniscience Non-Hallucination Rate | −8 pts | — | −8 (regression) |
| Cost to run Intelligence Index | $395 | ~$494 | −20% |

The **GDPval-AA jump of +321 ELO** is the largest single improvement — Grok 4.3 now scores 1500 on this real-world agentic professional-work benchmark, ahead of Gemini 3.1 Pro Preview, Muse Spark, GPT-5.4 mini (xhigh), and Kimi K2.5. Grok 4.3 **trails GPT-5.5 (xhigh) by 276 ELO** on this metric, with an expected win rate of ~17% against the leader.

The **+5 on 𝜏²-Bench Telecom (98%)** brings Grok 4.3 in line with GLM 5.1 on agentic customer-support tasks. **IFBench 81% (#1 in published numbers)** maintains the instruction-following strength of the Grok 4.x line; meta.json's "83.3% #1 honesty 83% non-hallucination" headline reflects this.

The **8-point AA-Omniscience accuracy gain came with an 8-point non-hallucination regression** — Grok 4.3 became more accurate in what it answers but also more often invents answers. xAI explicitly accepts this trade-off; Grok 4.5 (Jul 2026) later restored the non-hallucination floor.

### What Grok 4.3 did NOT publish

Direct SWE-bench Verified, SWE-bench Pro, Terminal-Bench 2.0, GPQA Diamond, LiveCodeBench, DeepSWE, AA Coding Agent Index, FrontierMath, ARC-AGI-2 numbers are **not in the launch** — Grok 4.3 ran before the AA Intelligence Index made these mandatory. Per Contra Collective's analysis: "Grok 4.3 has not published direct SWE-bench Verified or Terminal-Bench 2.0 numbers. The GDPval-AA ELO of 1500 is a strong signal on agentic professional work in non-coding domains, but it is not a substitute for the published agentic coding scores Opus carries."

Domain-published strengths (per Grok 4.3 launch):
- **CaseLaw v2: 79.3% (#1)** — the strongest published legal-reasoning result on this benchmark
- **CorpFin: #1** — financial document analysis leader

## Pricing & deployment

| Channel | Input $/M | Output $/M | Context | Notes |
| --- | --- | --- | --- | --- |
| **xAI API** (≤200K) | **$1.25** | **$2.50** | 1M | The price xAI quotes |
| **xAI API** (>200K, per `meta.json`) | $2.50 | $5.00 | 1M | Premium tier for long prompts |
| OpenRouter `x-ai/grok-4.3` | $1.25 | $2.50 | 1M | Routed |
| Grok Build (default API surface) | $1.25 | $2.50 | 1M | CLI + IDE bundled |
| The X Subscription Super ($100/mo, was SuperGrok Heavy) | bundled | bundled | 1M | 15× Plus usage |
| The X Subscription Ultra ($200/mo) | bundled | bundled | 1M | 50× Plus usage |

**Pricing relative to cohort:**
- vs **GPT-6.1 Sol** ($2/$10): Grok 4.3 is 1.6× cheaper input, 4× cheaper output
- vs **GPT-5.6 Luna** ($0.20/$1.20): Luna is 6.25× cheaper input, 2.08× cheaper output
- vs **Claude Opus 4.7** ($5/$25): Grok 4.3 is 4× cheaper input, 10× cheaper output
- vs **Claude Sonnet 4.6/5** (varies): Sonnet competes directly; Grok 4.3 is competitive
- vs **DeepSeek V4 Pro** peak ($1.32/$3.96): Grok 4.3 is roughly equivalent on input, 1.6× cheaper output
- vs **Kimi K3** (~$0.60/$2.50): Grok 4.3 is 2.08× costlier input, parity on output
- vs **Gemini 2.5 Pro** ≤200K ($1.25/$10): same input, Grok 4.3 is 4× cheaper output

**Cost-effectiveness headline**: Grok 4.3's $1.25/$2.50 was xAI's **cheapest frontier-tier API price** at launch (April 2026), undercutting OpenAI's mid-flagship at the time. With $395 to run the full AA Intelligence Index (vs ~$494 for Grok 4.20), Grok 4.3 sits comfortably on the Pareto frontier for intelligence vs cost.

## Where it fits — and where it does not

**Reasonable fit:**

- **Legal / financial / professional knowledge work** — CaseLaw v2 79.3% (#1 published), CorpFin #1, GDPval-AA ELO 1500 (+321). xAI's launch emphasis was real-world professional knowledge; xAI documents specifically target this segment.
- **Cost-sensitive high-volume generation pipelines** — $1.25/$2.50 with 1M context is the cheapest frontier-tier input price at launch; 10× output-cost advantage over Opus 4.7 compounds dramatically at scale.
- **Agentic customer-support tasks** — 𝜏²-Bench Telecom 98% (+5 from 4.20, in line with GLM 5.1).
- **Instruction-following workloads** — IFBench 81% (maintained, #1 in published numbers). The IFBench leadership is the durable identity of the Grok 4.x line.
- **Native file output** — PDF, PPTX, XLSX generation directly in chat. For workflows that need production-ready Office artifacts, this is the only Grok 4.x generation that ships it.
- **Reasoning-effort tiering** — five levels (none → xhigh) with low default, controllable per request.
- **Cost-tier-as-default architectures** — for systems where 80% of traffic is low-stakes and only 20% needs the ceiling, route the cheap traffic to Grok 4.3 and the ceiling traffic to GPT-5.5 / Opus 4.7.

**Poor fit:**

- **Frontier agentic coding** — Grok 4.3 did not publish SWE-bench Verified, SWE-Bench Pro, Terminal-Bench 2.0, or DeepSWE. Opus 4.7's 87.6% SWE-bench Verified and 64.3% SWE-Bench Pro are the public scores. For engineering agents on real codebases, route to Opus 4.7+ or Fable 5.1.
- **Frontier academic reasoning** — AA Intelligence Index 53 is mid-pack; GPT-5.5 (60), Opus 4.7 (57), Gemini 3.1 Pro Preview (57) lead.
- **Native video input to the model** — unconfirmed; xAI's registry lists text + image only. For video reasoning, route to Gemini 2.5 Pro, GPT-5.6 Sol, or use Grok Imagine (separate).
- **Production deployment where non-hallucination rate is critical** — Grok 4.3's AA-Omniscience Non-Hallucination Rate dropped 8 points; for medical, legal-fact, or compliance-critical workloads, **use Grok 4.5+ or another model that restored the floor**.
- **Audio / video output** — Grok 4.3 is text-only output from the language model.
- **Frontier-tier reasoning ceilings on coding tasks** — Contra Collective summary: "for agentic coding work and the hardest reasoning tasks, Opus 4.7 is the strongest option published as of this week" (May 2026).

## Triangulated scores

> Source: `model-queue.md` (Overall 83.8). 20 qualifying raters (gate Overall > 84.9). Rounded to nearest integer per the project's half-up convention.

- **Tool use: 84/100.** AA Intelligence Index 53 (mid-pack, above Sonnet 4.6 and Muse Spark; below GPT-5.5 60 / Opus 4.7 57 / Gemini 3.1 Pro 57). 𝜏²-Bench Telecom 98% (+5, in line with GLM 5.1). IFBench 81% (#1, maintained). GDPval-AA ELO 1500 (+321, ahead of Gemini 3.1 Pro / Muse Spark / GPT-5.4 mini / Kimi K2.5). Agentic coding benchmarks (SWE-bench) not published.
- **Reasoning: 86/100.** AA Intelligence Index 53 (4 points above Grok 4.20). CaseLaw v2 79.3% (#1 published). CorpFin #1. **AA-Omniscience Accuracy +8 with Non-Hallucination Rate −8** — the explicit trade-off that defines Grok 4.3. Frontier academic reasoning (GPQA Diamond, AIME, FrontierMath, ARC-AGI-2) not separately reported in launch.
- **Context window: 94/100.** 1M input / output token cap not separately disclosed. Reasoning effort tiering (none → xhigh) is the operational lever. Native file output (PDF, PPTX, XLSX) is a separate capability layered on top.
- **Multimodal: 76/100.** Text + image input (per xAI registry). "Native video input" claim is unconfirmed — xAI documents don't corroborate; route video workloads through Grok Imagine (separate) or to Gemini 2.5 Pro / GPT-5.6 Sol. Per contra collective: "Grok 4.3 introduced native video input as an xAI first" — **claim circulated widely but not vendor-confirmed**.
- **Coding: 80/100.** SWE-bench Verified, SWE-bench Pro, Terminal-Bench 2.0, DeepSWE not in launch. Cursor/Rakuten/Vercel test results not separately published for Grok 4.3. GDPval-AA ELO 1500 is a real-world agentic-professional signal but not a substitute for published coding scores. Per Contra Collective: "for teams whose core workload is engineering agents, Opus 4.7 is the default" — Grok 4.3's $1.25/$2.50 buys you a clearly capable but unverified-on-coding model.
- **Cost efficiency: 88/100.** $1.25/$2.50 (≤200K) was the **cheapest frontier-tier API price at launch**; 37.5% input cut, 58.3% output cut vs Grok 4.20. $395 to run the full AA Intelligence Index (vs $494 for 4.20). Pareto frontier for intelligence vs cost. Now deprecated (Oct 2026) but rates unchanged — still competes with GPT-5.6 Luna ($0.20/$1.20) for absolute cost, and decisively cheaper than Opus-tier / Fable-tier for cost-per-completed-task at near-frontier quality.
- **Overall: 84/100.** Grok 4.3 is xAI's April 2026 price-reset flagship — $1.25/$2.50 with 1M context, GA 2026-04-30 after a SuperGrok Heavy beta. Headline results: AA Intelligence Index 53 (4 above Grok 4.20), GDPval-AA ELO **1500 (+321, ahead of Gemini 3.1 Pro Preview / Muse Spark / GPT-5.4 mini / Kimi K2.5)**, 𝜏²-Bench Telecom 98% (+5), IFBench 81% maintained, CaseLaw v2 79.3% #1, CorpFin #1. Three defining additions: native file output (PDF/PPTX/XLSX), 1M-token context standardized on API, five reasoning-effort levels. Trade-off: AA-Omniscience Non-Hallucination Rate dropped 8 points (Grok 4.5 restored the floor). **Succeeded by Grok 4.5 (Jul 2026), 4.6 (Aug 2026), 4.7 (Sep 2026); marked deprecated by Artificial Analysis Oct 2026.** For legal/financial/professional knowledge work, instruction-following-leading workloads, and cost-sensitive high-volume pipelines where absolute frontier ceiling is not the requirement, Grok 4.3 was the operational choice of May 2026 — and remains an option for non-deprecated pricing needs.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
