# Claude Opus 4.6 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship Opus-tier reasoning model (2026-02-05) for agentic coding, computer use and multidisciplinary reasoning, with adaptive/extended thinking and 1M beta context.
- **Provider / access:** Anthropic API `anthropic/claude-opus-4.6`, Claude.ai, Bedrock/Vertex/Azure, and OpenCode Zen `anthropic/claude-opus-4.6` (Chat Completions via adapter)
- **Release / knowledge:** 2026-02-05; knowledge cutoff reliable 2025-05, training cutoff 2025-08 (system card)
- **IDs:** `anthropic/claude-opus-4.6` (no Free tier)
- **Context window:** 200K standard / 1M beta (128K out, up to 300K batch) — verified via system card and announcement (paid 1M beta $15/$75 via Claude Platform)
- **Modalities:** Text, image, PDF in; text out; reasoning yes (adaptive + extended thinking); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $5.00 / $25.00 per 1M in/out ($15/$75 for 1M beta prompt-caching beta)
- **Architecture:** Proprietary (Opus family, undisclosed params)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **65.4%** (Anthropic system card, Terminus-2 harness — vs Opus 4.5 59.8%, GPT-5.2 64.7%; #1 at launch)
- Tau3-Banking / Tau2-Bench: **91.9% Retail / 99.3% Telecom (τ2-bench)** (system card — vs Sonnet 86.2%/98.0%)
- GDPval-AA: **lead +144 Elo vs GPT-5.2, +190 vs Opus 4.5** (Anthropic announcement; absolute Elo not disclosed, leadership #1)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **59.5% MCP-Atlas** (system card — vs Opus 4.5 62.3%, GPT-5.2 60.6%)
- OSWorld-Verified: **72.7%** (system card — vs Opus 4.5 66.3%)
- BrowseComp: **83.7%** (aireleasetracker; system card: multi-agent harness 86.8%)
- τ2-bench Artificial Analysis independent: **92.1% Telecom** (AI Atlas)

Reasoning / knowledge:

- GPQA Diamond: **91.3%** (system card — vs Opus 4.5 87.0%, Gemini 4.5 Pro 91.9%, GPT-5.2 93.2%)
- HLE (Humanity's Last Exam): **53.0% with tools** (aireleasetracker — updated 2026-02-23 after cheating detection; no-tools not disclosed)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **31.9 (Artificial Analysis, AI Atlas)** (independent adaptive, below Fable 5.1 — vendor leadership claims composite #1 at launch pre-4.7)
- ARC-AGI-2 (Verified): **68.8%** (system card — vs Opus 4.5 37.6%, GPT-5.2 54.2%)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.8% Verified** (aireleasetracker official; system card mini-SWE-agent 75.6% Verified, 72% Multilingual — vs Opus 4.5 80.9%)
- LiveCodeBench: **no verified public score found** (LiveBench Coding 78.2% variant Coding per AI Atlas, but not LCB harness)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **LiveBench Agentic Coding 49.0% (AI Atlas)** ; no DeepSWE 1.1 disclosed
- Next.js Evals: **75%** (aireleasetracker)

Long context:

- MRCR v2 (OpenAI MRCR): **76% at 1M** (AI-TLDR); GraphWalks/ RULER no verified public score found; system card §2.18 covers MRCR v2 + GraphWalks

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.0 #1 65.4% + BrowseComp 83.7% #1 + Tau2 91.9%/99.3% + OSWorld 72.7%; capped by MCP-Atlas 59.5% trailing predecessor and no Claw-Eval.
- **Reasoning: 87/100.** GPQA 91.3% + HLE 53.0% tools #1 + ARC-AGI-2 68.8% + GDPval leadership +144 Elo; capped by MMMLU 91.1% not leading and no HLE no-tools isolation.
- **Context window: 86/100.** 200K standard / 1M beta (76% MRCR at 1M per AI-TLDR); tier 200K=70 but 1M beta qualifies for 85-90, capped below 92 without 1M production GA.
- **Multimodal: 76/100.** Text+image/PDF in → text out (no audio/video in); MMMU-Pro 73.9% no-tools /77.3% with tools moderate, capped below 80 vs omni models.
- **Coding: 85/100.** SWE-Verified 80.8% strong but slightly below Opus 4.5 80.9% + Terminal 65.4% #1 + Next.js 75%; capped by no SWE-Pro disclosure and Trailing Fable lineage.
- **Cost efficiency: 60/100.** $5/$25 paid (1M beta $15/$75); no $0 Free ID, mid-high vs free tiers but cheaper than Opus 5.
- **Overall Score: 84/100.** Mean of five non-cost dims (86+87+86+76+85)/5=84.0 → 84; best-fit for agentic coding and knowledge-work leadership when 1M beta and tool-use breadth matter.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Anthropic Opus 4.6 announcement 2026-02-05, system card, aireleasetracker, AI-TLDR, AI Atlas); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
