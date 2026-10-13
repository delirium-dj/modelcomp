# Claude Haiku 5.5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest and most cost-efficient Claude 5.5-family model, launched 2026-10-07 for high-volume, cost-sensitive work (extraction, classification, summaries, short agent steps). Massive generational leap over Haiku 4.5 with a 1M context window and adaptive thinking.
- **Provider / access:** Claude API (Messages API, `claude-haiku-5-5`), Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, Claude Platform on AWS. Chat Completions-style Messages API.
- **Release / knowledge:** Released 2026-10-07; earliest retirement commitment 2027-10-07; knowledge/training-data cutoff June 2026.
- **IDs:** `anthropic/claude-haiku-5-5` (Claude API); no OpenCode Zen Free ID verified.
- **Context window:** 1,000,000 tokens; max output 128,000 tokens (batch beta up to 300K with `output-300k-2026-03-24`).
- **Modalities:** text + image in; text out; adaptive thinking (effort levels low/medium/high/xhigh/max, default medium); tool calls; JSON mode.
- **Pricing (as of 2026-10-13):** prompts ≤100K tokens: $0.10 / 1M input, $0.50 / 1M output, $0.01 cache read; prompts >100K: $0.50 / $2.50 / $0.05. 5-min cache write $0.125/$0.625; 1-hr $0.20/$1.00. Batch API 50% off. 90% cheaper than Haiku 4.5 on short prompts.
- **Architecture:** proprietary; parameters/layers not disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1,620 Elo** max effort (Anthropic launch; Haiku 4.5: 735; GPT-6 Luna: 1,437)
- AA-Briefcase v1.1: **1,578 Elo** max effort (Anthropic launch; Haiku 4.5: 614; GPT-6 Luna: 1,336)
- OSWorld 2.1 offline: **72.4% partial / 37.1% strict** (system card Fig 8.9.3.A; GPT-6 Luna 48.9%/17.1%; Sonnet 5.5 83.9%/48.8%)
- CyberBench v1.1: **75.48%** (Vals AI; #5 of 47; ahead of Sonnet 5.5's 59.58%)
- Gray Swan indirect-injection attack success: **7.1%** at 15 attacker attempts (system card; Haiku 4.5 was 83.2%)

Reasoning / knowledge:

- HLE no tools: **45.9%** (Anthropic launch; Haiku 4.5: 10.2%)
- HLE with tools: **57.4%** (Anthropic launch; Sonnet 5.5: 64.5%)
- Artificial Analysis Intelligence Index v4.3.2: **43** (max), **41** (xhigh), **38** (high), **34** (medium), **29** (low) (AA, checked 2026-10-08)
- Vals Index: **54.31%** (#18 of 47; ±1.41)
- ProofBench v1.1: **89.00%** (Vals AI; #10 of 50)
- MedScribe: **89.54%** (Vals AI; #6 of 108)
- BioMysteryBench: **70.37%** (Vals AI; #12 of 27)

Coding:

- Terminal-Bench 4.0: **39.2%** launch max (Anthropic); **35.35%** Vals AI independent (max effort); GPT-6 Luna 16.4%
- FrontierCode 1.1 Main: **46.4%** max (Cognition public data; Sonnet 5.5 max 46.2%, xhigh 52.1%; GPT-6 Luna max 42.4%)
- Vibe Code Bench v1.1: **90.44%** (Vals AI; #3 of 112; behind Sonnet 5.5 92.39%, Gemini 4 Argon 91.91%)
- SWE-bench Multimodal: **43.96%** (Vals AI; #7 of 15)
- Code Migration: **44.57%** (Vals AI; up from Haiku 4.5 Thinking's 7.55%)

Long context:

- AA-LCR not published for Haiku 5.5 in reviewed sources; 1M window is 5× Haiku 4.5's 200K. No MRCR/RULER figure found.

### Normalized scores (1–100)

- **Tool use: 82/100.** GDPval-AA 1,620 and AA-Briefcase 1,578 Elo crush Haiku 4.5 and beat GPT-6 Luna; OSWorld strict 37.1% is a serious computer-use result for the price tier; CyberBench 75.48% #5. Capped by OSWorld still trailing Sonnet/Opus (48.8%/53.2% strict) and SRE Bench weakness (5.72%).
- **Reasoning: 80/100.** HLE 45.9% closed-book (57.4% with tools) is remarkable for a Haiku-class model; AA II 43 at max effort; Vals Index 54.31% #18. Capped by AA II still well below Sonnet 5.5 class (~60+) and medium-effort default dropping AA II to 34.
- **Context window: 95/100.** Full 1M-token window (5× Haiku 4.5), 128K output (2× Haiku 4.5), 300K batch beta. Capped only by no independent long-context retrieval measurements yet and the 100K pricing-band boundary that makes >100K prompts 5× more expensive.
- **Multimodal: 72/100.** Text+image input; Chartography 46.4% (beats Luna 29.1%, below Sonnet 61.6%); SWE-bench Multimodal 43.96% #7/15. Capped by text-only output, no video/audio, and chart-reading errors still substantial.
- **Coding: 78/100.** TB4.0 39.2% crushes Luna (16.4%); FrontierCode 46.4% max ties Sonnet 5.5 at max effort; Vibe Code Bench 90.44% #3/112. Capped by TB4 still far below Sonnet launch 70.6% and ProgramBench 2.50% / Harvey Legal Agent 1.25% showing weak spots on specialized agent coding.
- **Cost efficiency: 95/100.** $0.10/$0.50 for prompts ≤100K matches GPT-6 Luna's base rate — essentially free for a 1M-context frontier-adjacent model; 90% cheaper than Haiku 4.5. Capped slightly by the 100K pricing cliff ($0.50/$2.50 above) and new tokenizer counting ~30% more tokens than Haiku 4.5.
- **Overall Score: 81/100.** Mean of (82 + 80 + 95 + 72 + 78) / 5 = 81.4 → **81**. Best-fit recommendation: the new default for high-volume cheap work (extraction, routing, summaries, short agent loops) — Haiku 4.5's replacement with 1M context and near-Sonnet coding at max effort; for long prompts (>100K) price-check against GPT-6 Luna which stays in its cheaper band longer.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (Anthropic Haiku 5.5 launch 2026-10-07, Haiku 5.5 system card, Anthropic pricing docs, Vals AI full suite, Kingy.ai benchmark compilation, Cognition FrontierCode public data, Artificial Analysis effort-level entries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
