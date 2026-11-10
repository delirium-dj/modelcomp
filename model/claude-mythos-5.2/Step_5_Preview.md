# Claude Mythos 5.2 — findings by Step 5 Preview

- Source: Anthropic / `claude-mythos-5-2`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's safeguard-reduced deployment of the same underlying model as Claude Fable 5.2, released 2026-11-09 and restricted to organizations verified through the Cyber Verification Program or Life Sciences Verification Program. It is a variant of Claude Fable 5.2 (one set of weights, two safeguard settings), not a separate checkpoint.
- **Provider / access:** Anthropic platforms only — Claude API (`claude-mythos-5-2`), Amazon Bedrock (`anthropic.claude-mythos-5-2`), Claude Models on Google Cloud (Google-managed and Anthropic-managed, both `claude-mythos-5-2`) and Microsoft Foundry (`claude-mythos-5-2`); Messages API. Access requires verification-program membership (Claude Enterprise customers can reach it via Claude Security without a program). No OpenCode Console/Zen route exists — verified absent from the live Console catalog, which lists only `claude-fable-5-2`. Fast mode ($16/$80) is limited to verified organizations and does not combine with the Batch API.
- **Release / knowledge:** released 2026-11-09; knowledge cutoff June 2026 (training data cutoff June 2026); retirement not sooner than 2026-11-09.
- **IDs:** `anthropic/claude-mythos-5-2` (Claude API); `anthropic.claude-mythos-5-2` on Bedrock. No Free ID exists anywhere — verification-gated paid access only.
- **Context window:** 1,000,000 tokens total with 128K max output — from Anthropic's official model page (identical to Fable 5.2).
- **Modalities:** text + image input, text output; reasoning model with adaptive thinking (always on, steered by the effort parameter, API default `high`); tool calls supported. No audio/video input or non-text output documented.
- **Pricing (as of 2026-11-10):** $8 / 1M input, $40 / 1M output, $0.20 / 1M cache read, $10 / 1M 5-minute cache write, $16 / 1M 1-hour cache write, Batch API 50% off, fast mode $16/$80. Same rates as Fable 5.2. Covered Model: 30-day safety-monitoring retention, no zero-data-retention option without Anthropic authorization; not on Priority Tier.
- **Architecture:** proprietary; parameter count not disclosed. Same weights as Claude Fable 5.2 and Claude Mythos 5.1's 5.2 successor generation.

### Raw benchmarks found

General capability rows (Anthropic's launch table runs on the underlying model; the Fable-branded numbers apply to the same weights — each row below is from the 2026-11-09 announcement):

Agent / tool use:

- OSWorld 2.1 (offline set, partial credit): **89.3%** (Opus 5.5 87.2%, GPT-6 Astra 79.5%)
- WANDR (relaxed score, agentic search): **82.1%** (Opus 5.5 72.3%)
- Remote Labor Index (RLI): **41.3%** at high effort (~2x Opus 5.5 21.3%)
- AutomationBench (business workflows): **51.4%** (Gemini 4 Carbon leads at 53.9%)
- AA-Briefcase v1.1 knowledge work: **66.1% rubric / 1785 Elo** (Opus 5.5 keeps the Elo lead at 1800)
- Terminal-Bench 2.1: no verified public score found (closest proxy: Vals Terminal-Bench 4.0 **65.15%**, 1st of 63, tied with Opus 5.5 — Vals ran the Fable 5.2 deployment)
- Tau3-Banking / Tau2-Bench: no verified public score found (provisional only)
- GDPval-AA: no standalone per-model score published
- Claw-Eval / ClawProBench: no verified public score found — noted N/A, no hallucinated value
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **74.2%** (Opus 5.5 67.7%, GPT-6 Astra 57.2%)
- Artificial Analysis Intelligence Index v5.0.1: **65** at max effort — **#1 of 73 models** (measured on the Fable 5.2 deployment of the same weights, default fallback; 62 at high, 56 medium, 54 low)
- GPQA Diamond: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt v2 (Hard Subset): no standalone score published (component of the AA index)
- Omniscience Accuracy / Hallucination Rate: not yet published (no AA-Omniscience result as of 2026-11-10)

Coding:

- FrontierCode 2.0 (agentic coding, maintainer-merge scored): **49.1%** at xhigh effort — highest of any released model tested (Opus 5.5 45.5%, GPT-6 Astra 42.8%)
- FrontierSWE v2 (agentic coding, long tasks): **69.9%** (Opus 5.5 62.3%, GPT-6 Astra 65.5%)
- Vibe Code Bench v1.1: **93.77%** — #1 of 127 (Vals, Fable 5.2 deployment at high effort)
- ProgramBench: **19.00%** — #1 of 66; Code Migration v1.1: **83.27%** — 2nd of 30 (Vals, Fable deployment)
- SWE-bench Multimodal: **62.29%** — 2nd of 22 (Vals; Opus 5.5 leads at 70.21%)
- Terminal-Bench 4.0: **65.15%** — 1st of 63, tied Opus 5.5 (Vals, Fable deployment)
- Terminal-Bench-Science 0.1: **75.3%** (Mythos 5.2 run; 2nd on Vals' independent harness at 55.71%, behind GPT-6 Astra 62.86%)
- SWE-bench Verified (text): no verified public score found
- LiveCodeBench / SciCode / AA-SciCode / DeepSWE / Coding Index: no verified public score found

Cybersecurity and biology rows (Mythos-only — Fable 5.2's safeguards block most of these tasks):

- CyScenarioBench†: **76.3%** (Mythos 5.1 61.7%, Opus 5.5 67.6% with safeguards off; GPT-6 Cyber 61% on a different task set)
- CVE Rediscovery (1,829 CVEs, Oct 2026): **89.6%** — 10.2% more than Opus 5.5 (81.3% safeguards off) and 14.4% more than Mythos 5.1 (78.3%)
- De novo binder design (24 hr): **85.1** (Opus 5.5 82.6 without safeguards, Mythos 5.1 79.1)
- AAV capsid structure prediction: **28 of 34** capsids accurately modeled
- RoboDojo Sim: **64.9%** at max effort (more than 2x GPT-6 Astra 29.8%)
- Chartography (charts, no tools): **73.4%** (Gemini 4 Carbon 72.5%, GPT-6 Astra 71.0%)

Long context:

- 1M-token window / 128K output (official model page); no MRCR / RULER / GraphWalks retrieval figure published at any length.

† On CyScenarioBench each lab's scores are based on unique task sets; cross-lab comparisons are indicative only.

### Normalized scores (1–100)

- **Tool use: 91/100.** Same weights and same general agentic rows as Fable 5.2 — Vals #1 of 36 (71.31% at high, Fable deployment), AA Intelligence Index #1 of 73, OSWorld 2.1 89.3%, WANDR 82.1%, RLI 41.3% — all frontier-band evidence, and the Mythos-only CVE Rediscovery 89.6% shows the underlying agentic security capability Fable's classifiers block. Capped below the mid-90s: Tau3-Banking, GDPval-AA and Claw-Eval unreported, AutomationBench 51.4% trails Gemini 4 Carbon, no CUA-bench result.
- **Reasoning: 93/100.** HLE with tools 74.2% (frontier reference 40%+) and the AA Intelligence Index 65 — first of 73 models — plus Mythos's 75.3% on Terminal-Bench-Science. Capped because GPQA Diamond, standalone CritPt v2 and Omniscience hallucination numbers are unpublished.
- **Context window: 96/100.** 1,048,576-token total window with 128K max output sits in the ≥1M tier (95–100); the 100 level needs ≥98% retrieval at 512K+ and no MRCR/RULER retrieval figure is published.
- **Multimodal: 68/100.** Text + image input, text output (no audio/video in, no non-text out) puts it in the +image-in band (60–70); Chartography 73.4% without tools justifies the upper part of the band.
- **Coding: 91/100.** FrontierCode 2.0 49.1% at xhigh (best released model), FrontierSWE v2 69.9%, Vibe Code Bench 93.77% #1 of 127, ProgramBench #1 of 66, Code Migration 83.27%. Capped by missing SWE-bench Verified / LiveCodeBench / SciCode numbers and SWE-bench Multimodal trailing Opus 5.5 by eight points.
- **Cost efficiency: 45/100.** $8/$40 per 1M with no free tier — between the $3/$15 (~60) and $10/$50 (~30) reference points; per-task it beats Opus 5.5 at max ($9.08 per AA-index task at high effort vs $10.04), but per token it is twice Opus 5.5, and verification gating removes any free access.
- **Overall Score: 88/100.** Mean of Tool use 91, Reasoning 93, Context window 96, Multimodal 68, Coding 91. Same weights and same quality evidence as Fable 5.2, so the same Overall. Best fit: verified security and life-sciences teams needing the unguarded frontier model for vulnerability discovery and dual-use research; general users belong on Fable 5.2 or Opus 5.5.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-10
- Method: public internet research (Anthropic platform model docs, launch announcement, independent Artificial Analysis and Vals AI figures via a third-party comparison write-up, OpenCode Console catalog check); scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Unreported benchmarks are marked "no verified public score found" rather than estimated.
- Reference URLs:
  - [Anthropic — Claude Mythos 5.2 model page (IDs, specs, pricing, verification requirement)](https://platform.claude.com/docs/en/models/mythos-5-2/overview)
  - [Anthropic — Introducing Claude Fable 5.2 and Claude Mythos 5.2 (launch benchmarks, 2026-11-09)](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Artificial Analysis — Claude Fable 5.2 (same underlying weights; Intelligence Index v5.0.1)](https://artificialanalysis.ai/models/claude-fable-5-2)
  - [Fello AI — Claude Fable 5.2 and Mythos 5.2 benchmarks, pricing, access](https://felloai.com/claude-fable-5-2/)
  - [WidelAI — Fable 5.2 vs Opus 5.5 / GPT-6 Astra / Gemini 4 Argon (Vals AI boards, 2026-11-10)](https://www.widelai.com/blog/claude-fable-5-2-vs-opus-5-5-gpt-6-astra-gemini-4-argon)
  - [OpenCode Console docs — model catalog (no Mythos route)](https://opencode.ai/docs/zen/)
  - [Anthropic — Claude Fable 5.2 and Mythos 5.2 System Card](https://www.anthropic.com/claude-fable-5-2-mythos-5-2-system-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
