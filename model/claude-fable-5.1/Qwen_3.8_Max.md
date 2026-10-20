# Claude Fable 5.1 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's generally-available premium flagship of the Fable line — the top-tier Claude model that Opus 5.5 was benchmarked against ("performs at the level of Fable 5.1 on most work at 40% less cost"). Shares weights with the verification-gated Claude Mythos 5.1; Fable 5.1 is the public route with standard cyber/biology safeguards and transparent fallback.
- **Provider / access:** Claude Platform (`claude-fable-5-1`), AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Messages API.
- **Release / knowledge:** Released 2026-09-01 (announced together with Mythos 5.1); reliable knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-fable-5-1` (no free Zen ID; premium paid tier).
- **Context window:** 1,000,000 tokens input (~555k words on the current tokenizer); 128,000 tokens max output.
- **Modalities:** text + image in → text out; reasoning yes (Adaptive thinking, always on; default effort `high`); tool calls yes; comparative latency "Slower"; strong visual/chart understanding.
- **Pricing (as of 2026-10-20):** $10 / 1M input, $50 / 1M output; 5m cache write $12.50, cache read $0.25 (2.5% of input); Batch API 50% off.
- **Architecture:** proprietary (closed weights); preserved-thinking anti-distillation safeguard.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic's Opus 5.5 launch table; behind Opus 5.5 66.4%, ahead of Opus 5 52.3%)
- OSWorld 2.1 (computer use): **80.7%** partial (behind Opus 5.5 81.8%)
- AutomationBench (Zapier): **31.4%** (behind Opus 5.5 40.0%)
- GDPval-AA v2.1: **1735 Elo** (behind Opus 5.5 1846, ahead of Opus 5 1708)

Reasoning / knowledge:

- Humanity's Last Exam: **65.6%** with tools (behind Opus 5.5 67.7%, ahead of Opus 5 63.6%)
- Terminal-Bench-Science 0.1: **52.6%** (behind Opus 5.5 58.7%, GPT-6 Astra 64.6%)
- GPQA Diamond: no verified public score found

Coding:

- FrontierCode v1.1 (Main): **50.3%** (behind Opus 5.5 54.4%)
- CursorBench 4.0: **51.8%** (behind Opus 5.5 57.8%)
- SWE-bench Verified / LiveCodeBench: no verified public score found in accessible sources

Multimodal:

- Chartography (visual chart recognition): **88.4%** with tools (just behind Opus 5.5's 89.0% with tools)

Long context:

- 1M-token window; no MRCR/RULER figure published — "no long-context retrieval reported".

> Provenance: exact percentages are from Anthropic's Opus 5.5 launch comparison table (which reran Fable 5.1) and the Claude Platform docs. Fable 5.1 and Mythos 5.1 are the same model — scores should be read as equivalent to `model/claude-mythos-5.1/`.

### Normalized scores (1–100)

- **Tool use: 91/100.** OSWorld 2.1 80.7% and GDPval-AA 1735 are frontier-class; capped by Terminal-Bench 4.0 55.8% and AutomationBench 31.4% now trailing Opus 5.5.
- **Reasoning: 93/100.** HLE 65.6% with tools and GDPval-AA 1735 were the Claude ceiling before Opus 5.5; held below 100 by absent GPQA and Terminal-Bench-Science trailing Astra.
- **Context window: 98/100.** 1M-token input with 128K output on the newer tokenizer; near the top, a touch below perfect absent a published long-context retrieval benchmark.
- **Multimodal: 88/100.** Chartography 88.4% with tools (essentially level with Opus 5.5) and text+image input; capped by no MMMU-Pro / broad image-in benchmark.
- **Coding: 91/100.** FrontierCode 50.3% and CursorBench 51.8% are strong premium-tier results; capped because Opus 5.5 now leads both rows at less than half the cost.
- **Cost efficiency: 55/100.** $10/$50 is the most expensive Claude tier (2.5x Opus 5.5's $4/$20) for capability Opus 5.5 now matches; only the 2.5% cache-read rate and batch discount soften it.
- **Overall Score: 92/100.** Mean of Tool 91 + Reasoning 93 + Context 98 + Multimodal 88 + Coding 91 = 92.2 → 92. Best fit: teams that specifically need the Fable-tier flagship with standard safeguards and transparent fallback; for most work Opus 5.5 delivers the same or better at 40–60% lower cost, and verified orgs get identical weights via Mythos 5.1.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Claude Platform docs "Claude Fable 5.1 / Mythos 5.1" model overview for specs/pricing/identity; Anthropic's Opus 5.5 launch table for the benchmark rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
