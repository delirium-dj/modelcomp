# Claude Mythos 5.1 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's verification-gated top tier — per Claude Platform docs it is **the same model as Claude Fable 5.1**, available only to organizations verified through Anthropic's programs (e.g. the Cyber Verification Program), shipping with more permissive cybersecurity/biology safeguards. Distinct tracked entry from `claude-fable-5.1` (access + safeguard posture differ, weights do not).
- **Provider / access:** Claude API (`claude-mythos-5-1`), Amazon Bedrock (`anthropic.claude-mythos-5-1`), Google Cloud Vertex AI, Microsoft Foundry. Verification required (application via the relevant program).
- **Release / knowledge:** Released 2026-09-01; reliable knowledge cutoff Jun 2026 (training cutoff Jun 2026). Retirement not sooner than 2027-09-01.
- **IDs:** `anthropic/claude-mythos-5-1` (no free Zen ID; premium verified-access tier).
- **Context window:** 1,000,000 tokens input (~555k words on the current tokenizer); 128,000 tokens max output (synchronous Messages API; up to 300k on Batches with the output-300k beta header for other Claude models).
- **Modalities:** text + image in → text out; reasoning yes (Adaptive thinking, always on; default effort `high`); tool calls yes; comparative latency "Slower".
- **Pricing (as of 2026-10-20):** $10 / 1M input, $50 / 1M output; 5m cache write $12.50, 1h cache write $20, cache read $0.25; Batch API 50% off. Same as Fable 5.1.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

> Mythos 5.1 shares weights with Fable 5.1, so the Fable 5.1 rows from Anthropic's Opus 5.5 launch table are the applicable measurements (labelled as Fable 5.1). No Mythos-5.1-specific benchmark table was published separately.

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (as Fable 5.1; behind Opus 5.5 66.4%, ahead of Opus 5 52.3%)
- OSWorld 2.1 (computer use): **80.7%** partial (as Fable 5.1; behind Opus 5.5 81.8%)
- AutomationBench (Zapier): **31.4%** (as Fable 5.1; behind Opus 5.5 40.0%)
- GDPval-AA v2.1: **1735 Elo** (as Fable 5.1; behind Opus 5.5 1846, ahead of Opus 5 1708)

Reasoning / knowledge:

- Humanity's Last Exam: **65.6%** with tools (as Fable 5.1; between Opus 5.5 67.7% and Opus 5 63.6%)
- Terminal-Bench-Science 0.1: **52.6%** (as Fable 5.1; behind Opus 5.5 58.7%, GPT-6 Astra 64.6%)
- GPQA Diamond: no verified public score found

Coding:

- FrontierCode v1.1 (Main): **50.3%** (as Fable 5.1; behind Opus 5.5 54.4%)
- CursorBench 4.0: **51.8%** (as Fable 5.1; behind Opus 5.5 57.8%)
- SWE-bench Verified: no verified public score found for the 5.1 tier (the earlier Claude Mythos line was reported at 93.9% SWE-bench Verified vs Opus 4.6's 80% — lineage, not a 5.1 measurement)

Multimodal:

- Chartography (visual chart recognition): **88.4%** with tools (as Fable 5.1)

Long context:

- 1M-token window; no MRCR/RULER figure published — "no long-context retrieval reported".

### Normalized scores (1–100)

- **Tool use: 91/100.** OSWorld 2.1 80.7% and GDPval-AA 1735 are frontier-class; capped by Terminal-Bench 4.0 55.8% and AutomationBench 31.4% trailing Opus 5.5.
- **Reasoning: 94/100.** HLE 65.6% with tools sits at the top of the Claude line (just under Opus 5.5's 67.7%) with strong GDPval; held below 100 by absent GPQA and Terminal-Bench-Science trailing Astra.
- **Context window: 98/100.** 1M-token input with 128K output on the newer tokenizer; near the top, a touch below perfect absent a published long-context retrieval benchmark.
- **Multimodal: 87/100.** Chartography 88.4% with tools and text+image input; capped by no MMMU-Pro / broad image-in benchmark.
- **Coding: 92/100.** FrontierCode 50.3% and CursorBench 51.8% are strong (within a few points of Opus 5.5) and the Mythos line has a 93.9% SWE-bench Verified heritage; capped by the 5.1-tier rows trailing Opus 5.5.
- **Cost efficiency: 55/100.** $10/$50 is the most expensive Claude tier (2.5x Opus 5.5's $4/$20) and access is verification-gated; only the 2.5% cache-read rate and batch discount soften it.
- **Overall Score: 92/100.** Mean of Tool 91 + Reasoning 94 + Context 98 + Multimodal 87 + Coding 92 = 92.4 → 92. Best fit: verified organizations needing the top Claude tier for cybersecurity/biology research under permissive safeguards; everyone else gets identical weights via Fable 5.1, and Opus 5.5 now leads most rows at less than half the cost.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (Claude Platform docs "Claude Mythos 5.1" model overview for specs/pricing/identity; Anthropic's Opus 5.5 launch table for the shared Fable 5.1 benchmark rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
