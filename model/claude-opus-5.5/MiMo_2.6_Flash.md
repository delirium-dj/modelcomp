# Claude Opus 5.5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5-family model — a hybrid-reasoning flagship for long-running agentic coding, computer use, and knowledge work, positioned at Claude Fable 5.1 capability for ~40% lower run cost than Opus 5. Not a variant/alias of another entry.
- **Provider / access:** Claude API (`claude-opus-5-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Chat Completions-style Messages API (Anthropic format).
- **Release / knowledge:** released 2026-09-22; reliable knowledge cutoff June 2026 (training-data cutoff also Jun 2026).
- **IDs:** `anthropic/claude-opus-5-5` (gateway routes) / `claude-opus-5-5` (native).
- **Context window:** 1,000,000 tokens; max output 128K (Messages API), 300K on Batch API beta (`output-300k-2026-03-24`). Same tokenizer as Opus 5 → 1M ≈ 555k English words.
- **Modalities:** text + images (+ PDF via Files API) in; text out; reasoning yes (adaptive thinking always on, cannot be disabled; effort low→max, default `medium`); tool calls yes; no audio/video input (Anthropic: "text and images → text").
- **Pricing (as of 2026-10-07):** $4 in / $20 out per 1M; cache read $0.20 (0.05× input), 5m cache write $5, 1h $8; Batch API 50% off ($2/$10); Fast mode research preview $8/$40 at 2.5× speed. Paid — no free tier; US-only inference route adds 1.1×.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic system card, xhigh effort, ±2.6 pts — self-run) / **59.6%** (Artificial Analysis independent run, tied with GPT-6 Astra). Terminal-Bench 2.1: no verified public score found.
- GDPval-AA v2.1: **1846** Elo (Anthropic, AA-run; vs Fable 5.1 1735, Opus 5 1708). AA-Briefcase v1.1: **1822** Elo.
- AutomationBench (business workflows): **40.0%** (Zapier early-access run; GPT-6 Astra 41.4%).
- OSWorld 2.0 computer use: **81.8% partial / 48.7% strict** (Anthropic system card).
- Toolathlon Verified: **77.8%** pass@1 (system card §8).
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / Tau3-Tau2: no verified public score found.

Reasoning / knowledge:

- HLE: **64.4%** no tools, **67.7%** with tools (Anthropic) — AA independent no-tools run: **61.4%**.
- GPQA Diamond: no verified public score found (Anthropic did not publish GPQA for this release).
- AA Intelligence Index: **58** (Artificial Analysis, 2026-09-23).
- ArXivMath (Aug 2026): 91.2% no tools / 96.9% with tools. GMMLU 42-language: 94.3%. HealthBench Professional: 65.6%. LiveBench / LCR / CritPt / Omniscience: no verified public score found.

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card; vs Opus 5 79.2%). SWE-bench Multilingual **93.9%**, SWE-bench Multimodal **61.4%**. SWE-bench Verified: **not published** by Anthropic — treat any third-party Verified number as unverified.
- DeepSWE v1.1: **74.2%** (system card §8).
- FrontierCode v1.1 (Main): **54.4%**. CursorBench 4.0: **57.8%** (52.5% at default medium effort). Terminal-Bench-Science 0.1: **58.7%**.
- LiveCodeBench / SciCode: no verified public score found.

Long context:

- ProgramBench (long-context, run across the full 1M window): **91.2%** (Anthropic; Fable 5.1 87.6%, Opus 5 85.4%). MRCR / RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1846 and AA-Briefcase 1822 sit well above the 1750+ frontier ref, TB4.0 59.6–66.4 leads its board, OSWorld 2.0 81.8% and Toolathlon 77.8% round out a top agentic profile; capped below 95 by no public Tau3/Claw-Eval number and TB4.0 (not TB2.1) being the only terminal harness reported.
- **Reasoning: 93/100.** HLE 61.4–64.4 no-tools is far above the 40% frontier ref and AA Index 58 nearly reaches the 60+ ref; capped by GPQA Diamond being unpublished for this release (no cross-checkable science-QA number).
- **Context window: 97/100.** 1M window (95–100 tier) with ProgramBench evaluated across the full 1M at 91.2%; not 100 because no ≥98%-style needle retrieval score (MRCR/RULER) is published for 512K+.
- **Multimodal: 78/100.** Images + PDF in, text out (PDF/video band = 75–90); no audio or video input and no non-text output, which caps it below 90 despite strong visual reasoning (Chartography 89.0% with tools).
- **Coding: 94/100.** SWE-bench Pro 89.9%, DeepSWE 74.2% (74%+ frontier ref), SWE-bench Multilingual 93.9%, FrontierCode 54.4% and CursorBench 57.8% all at/above field-leading levels; capped at 94 by the absence of SWE-bench Verified/LiveCodeBench/SciCode rows and DeepSWE being vendor-run.
- **Cost efficiency: 57/100.** $4/$20 sits just above the $3/$15 ≈ 60 anchor (i.e., worse than 60), but the $0.20 cache reads (5% of input, 60% below Opus 5) and 50% batch discount pull real agentic cost down — hence 57 rather than 50.
- **Overall Score: 91/100.** (92+93+97+78+94)/5 = 90.8 → 91 — best-fit paid flagship for long-running agentic coding and computer use where 1M context, PDF input, and cache-heavy cost structure matter more than headline per-token price.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic announcement + platform docs, system-card tables via MetricNexus/codersera/TechGeum, Artificial Analysis, Tech Bytes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
