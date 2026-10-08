# Claude Opus 4.6 — findings by Step 5 Preview

- Source: Anthropic (`claude-opus-4-6`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's February 2026 flagship (released 2026-02-05) — improved agentic coding, longer-horizon agency, better self-checking, and the first Opus-class 1M-token context window (beta at launch, GA 2026-03-13 at standard pricing). Set release-time records on Terminal-Bench 2.0, HLE, GDPval-AA and BrowseComp. Now legacy (succeeded by Opus 4.7/4.8/5) but still active, retirement not before 2027-02-05.
- **Provider / access:** Claude API (Messages API) `claude-opus-4-6`; Amazon Bedrock, Google Cloud Vertex, Microsoft Foundry, Claude Platform on AWS; Claude Code (agent teams), Claude in Excel/PowerPoint. No OpenCode Zen Free ID found — paid API only.
- **Release / knowledge:** 2026-02-05; reliable knowledge cutoff May 2025, training data cutoff Aug 2025.
- **IDs:** `claude-opus-4-6` (Claude API alias); Bedrock/Vertex equivalents.
- **Context window:** 1,000,000 tokens (GA since 2026-03-13, no beta header, no long-context premium — a 900K-token request bills at standard rates); 128K max output (300K in Batch API beta); up to 600 images/PDF pages per request.
- **Modalities:** Text and images in → text out. Adaptive thinking with effort low/medium/high/max (default `high`; extended thinking deprecated); context compaction (beta); tool use.
- **Pricing (as of 2026-10-09):** $5.00 / MTok input, $25.00 output; 5m cache write $6.25 / 1h $10; cache read $0.50; Batch API $2.50 / $12.50 (50% off); US-only inference 1.1x. (The >200K premium pricing of $10/$37.50 was removed at 1M GA.)
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (Anthropic system card, Terminus-2, max effort, 1,335 trials — highest at release; Opus 4.5 59.8%, GPT-5.2 64.7% via Codex CLI)
- τ²-bench: **Retail 91.9% / Telecom 99.3%** (system card)
- MCP-Atlas: **59.5%** (system card)
- OSWorld-Verified: **72.7%** (system card)
- GDPval-AA: **Elo 1606** (system card — +144 over GPT-5.2's 1462, +190 over Opus 4.5's 1416)
- BrowseComp: **84.0%** (system card; 86.8% with a multi-agent harness)
- Claw-Eval: **70.4%** (Claw-Eval leaderboard via BenchLM)
- CyberGym: **66.6%** (leaderboard); DeepSearchQA **73.7%** (Meta comparison chart); ResearchClawBench 19.9%; JobBench 36.7%; ApprenticeBench 5%
- Finance Agent: **60.7%**; OpenRCA 34.9%

Reasoning / knowledge:

- HLE: **53.0% with tools** (system card, restated 2026-02-23 after an improved cheating-detection pipeline; led all frontier models at release); ~40% without tools
- GPQA Diamond: **91.3%** (system card, 5 trials, max effort); Arcee comparison table lists 89.2%
- ARC-AGI-2 (verified): **68.8%** (system card; Opus 4.5 37.6%)
- MMMLU: **91.1%**
- Artificial Analysis Intelligence Index: **26.4** (rebased scale; AA's own GPQA/HLE runs sit lower at 84.0%/19.1% — configuration-dependent)

Coding:

- SWE-bench Verified: **80.8%** (80.84% avg over 25 trials, max effort; 81.42% with a prompt modification; Arcee's table lists 75.6%)
- SWE-bench Multilingual: **77.8%**
- SWE-bench Pro: **53.4%** (Meta Muse Spark comparison chart)
- LiveCodeBench Pro: **70.7%**; SWE-Rebench 65.3%; React Native Evals 84.1%
- Vibe Code Bench v1.1: **57.57%** (Vals AI); FrontierCode 1.1 Main: **26.9%** (Cognition)
- LMArena Arena Elo: text 1504, code 1543 (release-time)

Long context:

- MRCR v2 8-needle: **93.0% at 256K / 78.3% at 1M** (Anthropic; highest published frontier figure at 1M at the time — Sonnet 4.5 was 18.5%)
- GraphWalks BFS 1M (F1): **41.2** (64k) / 38.7 (max)

Multimodal:

- MMMU-Pro: **73.9% no tools / 77.3% with tools** (system card)

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval-AA Elo 1606, BrowseComp 84.0%, τ² Telecom 99.3% and Claw-Eval 70.4% are strong, but this is a February-generation model measured on the older suites — Terminal-Bench 2.0 65.4% is mid-band against the current TB4.0 frontier (50–63%), and there is no TB4.0/AutomationBench reading; capped by MCP-Atlas 59.5% and ResearchClawBench 19.9%.
- **Reasoning: 87/100.** GPQA 91.3%, HLE 53.0% with tools and ARC-AGI-2 68.8% sit in the frontier band and led the field at release; capped by the knowledge cutoff (May 2025 — the oldest in this comparison), the low AA re-based index (26.4), and SuperGPQA/MMMLU-Pro readings below the newest flagships.
- **Context window: 95/100.** 1M tokens GA at standard pricing with 128K output, and the best published 1M retrieval of its generation (MRCR v2 93.0% at 256K / 78.3% at 1M) — missing only the 100 tier's ≥98% retrieval-at-512K bar; GraphWalks 1M F1 38.7–41.2 shows structured long-context reasoning still lags retrieval.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band, at its top on MMMU-Pro 77.3% (with tools); no video/audio input or non-text output.
- **Coding: 80/100.** SWE-bench Verified 80.8% and LiveCodeBench Pro 70.7% are solidly frontier-adjacent, but SWE-bench Pro 53.4%, FrontierCode 26.9% and Vibe Code Bench 57.57% show the long-horizon agentic-coding gap that Opus 4.8/Sonnet 5 closed months later.
- **Cost efficiency: 45/100.** $5/$25 per MTok sits between the methodology's $3/$15 ≈ 60 and $10/$50 ≈ 30 tiers; $0.50 cache reads and 50%-off batch help, and 1M context now bills at standard rates, but it is 2.5x Sonnet 5's price with no free tier.
- **Overall Score: 82/100.** Best-fit recommendation: a proven previous-generation flagship — strong long-context knowledge work and coding at mid-frontier pricing; superseded by Opus 4.8/5 and Sonnet 5 for new deployments, but still one of the best-documented 1M-context models.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic Opus 4.6 launch post, model page, pricing page, system card PDF, 1M-context GA blog, BenchLM, Traictory, AI Release Tracker, DataCamp, DigitalApplied); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
