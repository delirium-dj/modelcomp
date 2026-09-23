# Claude Fable 5.1 — findings by Laguna S 2.1

> Source: anthropic/claude-fable-5-1 (Anthropic), e.g. Anthropic
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Anthropic; Mythos-class flagship, above the Opus class)
- **Short description:** Anthropic's top-tier model for demanding reasoning and long-horizon agentic work; gains on agentic terminal/scientific coding over Fable 5 and Opus 5, with cheaper cache reads. Paid API/Claude plans only (no free tier).
- **Provider / access:** Anthropic. API model ID `claude-fable-5-1`; also Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Function-calling + JSON/structured outputs; extended thinking (Adaptive, always on), per-message effort (high).
- **Release / knowledge:** Released 1 September 2026. Knowledge/training cutoff: June 2026 (Anthropic Platform docs, verified 2026-09-11).
- **IDs:** `anthropic/claude-fable-5-1` (Anthropic). noFreeId — no Zen Free ID; paid Claude/API accounts only.
- **Context window:** 1,000,000 input tokens / 128,000 output tokens (Anthropic docs; ≥1M tier; 128K output exceeds the 64K caveat).
- **Modalities:** Text and image input; PDF input via files API (per meta.json); text output (no audio/video).
- **Pricing (as of 2026-09-23):** $10.00 / $50.00 per 1M in/out (paid API); cache reads $0.25/MTok (75% cheaper than Fable 5); 5-min cache write $12.50, 1-hour $20; Batch API 50% off. No free tier on Anthropic's own API (noFreeId; some aggregators list $0 via third parties).
- **Architecture:** Proprietary (closed weights); param count undisclosed. Same weights as Claude Mythos 5.1 (relaxed safeguards, vetted US orgs only).

### Raw benchmarks found

> Verified public numbers, sourced per metric. Benchmarks not located are NOT invented.

Agent / tool use:

- AA Intelligence Index v4.3: **53** — tied 1st with GPT-6 Astra (66 on launch-week v4.1); above Opus 5 (51) and Fable 5 (50) (Artificial Analysis/The AI Rankings, 2026-09-11)
- Terminal-Bench 4.0: **55.8%** — ahead of Opus 5.5 (52.3%) (Anthropic launch, 1 Sep 2026)
- Terminal-Bench-Science 0.1: **52.6%** — ~2.2x Fable 5 (24.7%); ahead of Opus 5 (29.0%) and GPT-5.6 Sol (22.4%) (Anthropic launch)
- Mythos 5.1: Terminal-Bench 4.0 **60.9%** (Anthropic)
- GDPval-AA Elo / Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas: no verified public score found
- SWE-bench Verified / Pro: not published by Anthropic (Fable 5's 80.3% remains the high-water mark) (The AI Rankings, 2026-09-11)

Reasoning / knowledge:

- AA Intelligence Index v4.3: 53 (tied 1st with GPT-6 Astra)
- Knowledge/training cutoff: June 2026
- GPQA Diamond / HLE / MRCR / LCR / AA-LCR / CritPt: no verified public score found

Coding:

- Terminal-Bench 4.0: 55.8% (leads vs Opus 5 52.3%)
- Terminal-Bench-Science 0.1: 52.6% (leads)
- SWE-bench: not published (no figure)
- DeepSWE / LiveCodeBench / SciCode / SWE-Atlas: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found (context verified at 1M via Anthropic docs)

### Normalized scores (1–100)

> Methodology: `model-comparison.md` (v4). Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost is scored independently and excluded from Overall.

- **Tool use: 85/100.** Intelligence Index 53 (tied 1st with GPT-6 Astra) + Terminal-Bench 4.0 55.8% (leads Opus 5) + Terminal-Bench-Science 52.6% (leads, ~2.2x Fable 5). Capped by no GDPval-AA / Tau3 / SWE-bench figure.
- **Reasoning: 87/100.** Intelligence Index 53 tied-1st + KB-Science 52.6% leading; June 2026 knowledge. Capped by no GPQA / HLE / MRCR / CritPt.
- **Context window: 95/100.** 1M-token input window (≥1M tier); 128K max output avoids the <64K caveat. No public MRCR/RULER ≥98%-at-512K retrieval figure.
- **Multimodal: 80/100.** Text, image and PDF input with text output (no audio/video); +image/+PDF-in band per methodology.
- **Coding: 86/100.** Terminal-Bench 4.0 55.8% and Terminal-Bench-Science 52.6% both lead (vs Opus 5 52.3%, Fable 5 24.7%); Mythos 5.1 reaches 60.9%. Capped by no SWE-bench/DeepSWE/LiveCodeBench/SciCode figures.
- **Cost efficiency: 30/100.** $10/$50 per 1M in/out (paid API, no free tier) → ~$30 on the methodology's inverse-pricing scale; 75% cheaper cache reads help agentic loops but not the per-token band.
- **Overall Score: 87/100.** (85 + 87 + 95 + 80 + 86) / 5 = 86.6 → 87. Mythos-class frontier model; best-fit for demanding long-horizon agentic/reasoning where $10/$50 is justified — prefer Claude Opus 5.5 ($4/$20) or a free tier (Muse Spark 1.3) on budget/speed.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (Anthropic Platform docs, The AI Rankings, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores. No peer findings files in `model/` were read (zero-influence).
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.