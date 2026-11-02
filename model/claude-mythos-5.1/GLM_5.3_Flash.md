# Claude Mythos 5.1 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (no Free tier; invite-only trusted-access deployment)
- **Short description:** Anthropic's gated twin of Claude Fable 5.1 — the identical Mythos-class flagship weights shipped with relaxed cybersecurity and life-sciences safeguards, reserved for vetted defensive-security and life-sciences organizations (it powers Anthropic's Claude Security product). Flag: this is a safeguard-configuration variant of the same weights as Claude Fable 5.1, covered by one joint system card; all capability rows below are shared-weights evidence unless explicitly labeled Mythos-run.
- **Provider / access:** Anthropic Claude API, model ID `claude-mythos-5-1` (Messages API; handle `stop_reason: "refusal"`). Also listed on Amazon Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud, and Microsoft Foundry (`claude-mythos-5-1`, gated research preview) — but platform listing ≠ call access: the model is reachable only by organizations approved through Anthropic's trusted-access programs (Cyber Verification Program — opened to approved users 2026-10-06 — and the Life Sciences Verification Program run with the US government). US organizations only at launch, with expansion coordinated with the US government. Not offered on Claude Platform on AWS. No third-party aggregator or OpenCode Zen access exists, which is why independent harnesses (e.g. Artificial Analysis) evaluate the shared Fable 5.1 weights instead.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff June 2026 (stated in the system card); retirement committed no sooner than 2027-09-01.
- **IDs:** `anthropic/claude-mythos-5-1` (Bedrock: `anthropic.claude-mythos-5-1`). No Free ID exists anywhere — access is verification-program gated.
- **Context window:** 1,048,576 tokens (~1M) total; 128K max output. Verified across the Anthropic platform docs model page, the Amazon Bedrock model card, and ARC Prize's verified listing; the full 1M window bills at the standard per-token rate (no long-context surcharge).
- **Modalities:** Text and images in (docs highlight dense charts, filings, and tables nested in PDFs with crop-and-zoom vision) → text out (~69 tok/s measured). Adaptive thinking is always on — no toggle — with effort levels low/medium/high/xhigh/max (default high in Claude Code, medium on claude.ai/Cowork). Tool calls: yes (native Claude API tool use). Structured/JSON output: supported. No audio or video input. EU AI Act text watermark applied to outputs (models released after 2026-08-02).
- **Pricing (as of 2026-11-02):** $10 in / $50 out per 1M tokens; cache reads $0.25 per 1M (2.5% of base input — cheapest cache rate in the Claude lineup, cut 75% vs Fable 5's $1.00, worth ~25% typical / up to ~45% agentic workload savings per Anthropic); 5-minute cache write $12.50; Batch API −50% ($5/$25); full 1M context at standard rate. Caveats: 30-day data retention is mandatory and the model is not available under zero data retention unless expressly authorized by Anthropic; no free tier.
- **Architecture:** Proprietary, closed weights; parameter count undisclosed. Same weights as Claude Fable 5.1 ("the same model, but with different levels of safeguards" — joint system card); Mythos-class = Anthropic's capability tier above Opus. Strongest cyber capabilities of any Anthropic release (measured with safeguards off), still assessed in the lower risk category of Anthropic's Frontier Compliance Framework and below the CB-2 biological-risk threshold.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Mythos 5.1 config; Anthropic system card/announcement, 10 trials/task, 660 trials — same weights under the Fable 5.1 safeguard config scored 55.8%, gaps attributed to safeguard interventions; vs Opus 5 52.3%, Fable 5 42.0%, GPT-5.6 Sol 37.3%)
- Terminal-Bench-Science 0.1: **52.6%** (system card, shared Fable 5.1/Mythos 5.1 column; vs Fable 5 24.7%, Opus 5 29.0%, GPT-5.6 Sol 22.4%; ±3.5–4.5 pts std error)
- OSWorld 2.0 (computer use, Aug 2026 task release): **77.9% partial / 41.7% strict** (system card; vs Fable 5 72.9/36.1, Opus 5 75.4/39.6)
- GDPval-AA v2: **1853 Elo** at max effort (Anthropic announcement table + Artificial Analysis; +130 over Fable 5's 1723, ahead of Opus 5 max 1824; 1835 at xhigh per system card)
- AA-Briefcase: **1694 Elo** (system card/announcement; vs Fable 5 1572, Opus 5 1685; AA's fallback-config run measured 1662)
- AutomationBench: **31.4%** (system card; vs Fable 5 17.1%, Opus 5 26.9%, GPT-5.6 Sol 19.6%)
- CursorBench 3.2.0: **73.4%** (announcement; vs Fable 5 70.5%, Opus 5 70.0%, GPT-5.6 Sol 67.2%)
- Terminal-Bench 2.1: **91.4%** (Artificial Analysis harness, launch-day evaluation, shared weights)
- τ³-Banking: **+9 points over Fable 5** (Artificial Analysis); absolute value not published — no verified absolute public score found
- Tau2-Bench: no verified public score found
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.7%** at max effort (BenchmarkList launch-data aggregate; corroborated by third-party GPT-6 Astra comparison tables; one secondary source reports 92.6% — Anthropic did not headline GPQA in the launch tables). Field leader GPT-6 Astra: 96.0–96.3%
- HLE: **60.9% no tools / 65.0% with tools** (system card, #1 among Claude models at release; vs Fable 5 57.8/63.8, Opus 5 56.6/63.6); Artificial Analysis's own harness measured **59.1%** (prev. best Fable 5 at 55.5%)
- ARC-AGI-1 Semi-Private: **97.5%** verified at max effort, $1.40/task (ARC Prize Foundation verified run; xhigh 96.5%, high 96.0%, medium 94.5%, low 90.0%)
- ARC-AGI-2 Semi-Private: **90.0%** verified at max effort, $4.49/task (ARC Prize verified; vs Fable 5 89.2%; system card table lists GPT-5.6 Sol at 92.5%). ARC-AGI-3: no score — none published
- ArXivMath (June 2026 release, 49 problems): **91.33% no tools / 93.88% with tools** (system card, Mythos 5.1 at max effort, 4 runs/problem; vs GPT-5.6 Sol 86.73%)
- CritPt: **29.7%** (BenchmarkList, Fable 5.1 shared weights, rank 8/32)
- Artificial Analysis Intelligence Index: **66** at max effort at launch — #1, ahead of Opus 5 max 63, Fable 5 max 62, GPT-5.6 Sol max 61 (AA, 2026-09-01; AA notes ~4% of output tokens came from server-side fallback models); on AA's later re-based v4.3 the same weights measure **53** (tied #1 with GPT-6 Astra, deeplearning.ai/The Batch); on AA Index v5 (2026-10-28) Gemini 4 Carbon took #1
- Vals AI Index: **68.83%** (Vals AI, shared weights, leads at publication)
- AA-Omniscience / hallucination rate: no verified public score found

Coding:

- SWE-bench Pro: **81.2%** (system card, #1 at release; vs Fable 5/Mythos 5 80.0%, Opus 5 79.2%, GPT-5.6 Sol 64.6%). On BenchLM's 2026-10-29 refresh the same shared-weights score ranks **#3**, behind Claude Opus 5.5 (89.9%) and Claude Sonnet 5.5 (81.3%)
- SWE-bench Verified: no verified public score found for the 5.1 generation (Vals AI archived the benchmark as saturated on 2026-09-01 and runs no new models; the llm-stats ladder's leader is prior-generation Fable 5 at 95.0%)
- SWE-bench Multilingual: **89.1%** (system card; vs Fable 5 86.6%, Opus 5 89.5%)
- SWE-bench Multimodal: **54.7%** (system card; below Opus 5's 59.4%)
- LiveCodeBench: no verified public score found
- SciCode: **62.0%** (Artificial Analysis launch eval; 63.1% in the fallback config per deeplearning.ai — leads at publication)
- AA Coding Index / DeepSWE / Vibe Code Bench: no verified public score found for 5.1

Long context:

- MRCR v2: no verified public score found for the 5.1 generation — Anthropic published no MRCR rows; third-party head-to-heads note GPT-6 Astra carries the strongest published long-context evidence of the two (MRCR v2 8-needle 100% at 256K–512K, 96.3% at 512K–1M)
- GraphWalks: no 5.1-generation number published (prior-gen Mythos Preview scored 80.0% BFS at 256K–1M — indicative of the lineage only)
- RULER: no verified public score found
- Window itself: 1,048,576 tokens at standard per-token pricing (platform docs; no surcharge), 128K max output

### Normalized scores (1–100)

- **Tool use: 96/100.** Broadest agent SOTA sweep at release — Terminal-Bench 4.0 60.9% (Mythos config, the only benchmark where the gated twin outscores its GA twin), Terminal-Bench-Science 52.6%, OSWorld 2.0 77.9% partial, GDPval-AA v2 1853 Elo, AA-Briefcase 1694, AutomationBench 31.4% — capped by the ~6-week shelf life of those crowns (AA v5 handed #1 to Gemini 4 Carbon on 2026-10-28) and the absence of any independent harness run on the gated deployment itself.
- **Reasoning: 94/100.** HLE 60.9%/65.0%, GPQA Diamond 93.7%, ARC-AGI-1 97.5% and ARC-AGI-2 90.0% ARC-Prize-verified, ArXivMath 91.33%/93.88%, and a launch-day AA Intelligence Index of 66 (#1) — capped by trailing GPT-6 Astra on GPQA (96.0–96.3%), GPT-5.6 Sol on ARC-AGI-2 (92.5% in the system card table), and no ARC-AGI-3 score at all.
- **Context window: 90/100.** Full 1,048,576-token window with 128K output, billed at the standard rate with no long-context surcharge and the lineup's cheapest cache reads ($0.25) — capped by zero verified long-context retrieval benchmarks (MRCR/GraphWalks/RULER) published for this generation while GPT-6 Astra publishes MRCR v2 100%/96.3% at depth.
- **Multimodal: 70/100.** Text + image (and PDF/chart) input with text output, but the only published multimodal benchmark — SWE-bench Multimodal 54.7% — trails in-house Opus 5 (59.4%), and no CharXiv/MMMU-class or audio/video rows exist, capping an image-in/text-out model well below vision-first entries.
- **Coding: 93/100.** SWE-bench Pro 81.2% was the outright #1 at release alongside SWE-bench Multilingual 89.1%, CursorBench 73.4%, SciCode 62.0–63.1% and Terminal-Bench 4.0 60.9% — capped by no published SWE-bench Verified score for 5.1 (prior-gen Fable 5 leads that ladder at 95.0%) and Opus 5.5's 89.9% taking the SWE-bench Pro crown by late October.
- **Cost efficiency: 55/100.** $10/$50 per 1M is the joint-most-expensive flagship tier (2.5× Opus 5.5's $4/$20) with ~1.7× output-token consumption (AA: $3.76/task at max, +20% vs Fable 5), though the $0.25 cache reads, batch −50%, and the xhigh effort lever (65 at $2.72/task, within 1 point of max) recover real value — and invite-only US-gated access plus mandatory 30-day retention further shrink the pool who can buy that value at all.
- **Overall Score: 89/100.** Half-up mean of the five quality dims (96 + 94 + 90 + 70 + 93) / 5 = 88.6 → 89; best fit: vetted defensive-security and life-sciences teams that need Fable-5.1-class frontier reasoning with the safety envelope lifted — for everyone else the identical, generally available Fable 5.1 (or cheaper Opus 5.5) is the practical route.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-19)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Fable 5.1 and Claude Mythos 5.1 — Anthropic (launch announcement, benchmark tables, access programs)](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [System Card: Claude Fable 5.1 & Claude Mythos 5.1 — Anthropic (PDF, joint capability summary)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Claude Fable 5.1 ARC-AGI Verified Results — ARC Prize Foundation](https://arcprize.org/results/anthropic-claude-fable-5-1)
  - [Pricing — Claude Platform Docs (cache-read and long-context pricing)](https://platform.claude.com/docs/en/about-claude/pricing)
  - [Claude Mythos 5.1 — Amazon Bedrock Model Card](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-mythos-5-1.html)
  - [Artificial Analysis on X — Fable 5.1/Mythos 5.1 Intelligence Index and cost-per-task evaluation](https://x.com/ArtificialAnlys/status/2094881171066978525)
