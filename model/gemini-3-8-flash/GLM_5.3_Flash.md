# Gemini 3.8 Flash — findings by GLM 5.3 Flash

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (stable/GA workhorse; no Free-tier wording)
- **Short description:** Google's GA Flash workhorse released September 2, 2026 (third Flash release in six weeks, built on 3.7 Flash) — Google's best-yet reasoning and coding at Flash speed, with a 1M window, five-modality input and the full agent tool suite. Pairs with the gated 3.8 Flash Cyber deployment on the same core.
- **Provider / access:** Gemini API / Google AI Studio (`gemini-3.8-flash`, stable), Gemini Enterprise Agent Platform, Gemini app, AI Mode, Antigravity, Android Studio, Stitch, Sheets; 4 API providers on AA. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released September 2, 2026. Knowledge cutoff March 2026 (some domains limited to January 2025).
- **IDs:** `gemini-3.8-flash` (stable/GA).
- **Context window:** 1,048,576 input / 65,536 max output — verified on Google's model documentation.
- **Modalities:** Text, image, video, audio AND PDF in; text out. No native audio/image generation; Live API not supported. Thinking: low/medium (default)/high (`minimal` errors); thinking tokens billed as output.
- **Pricing (as of 2026-09-19):** Intro through December 31, 2026: $0.75 in / $0.075 cached / $3.75 out per 1M. On January 1, 2027 rates double to $1.50 / $0.15 / $7.50. Standard, Batch, Flex and Priority modes. AA cost per task $1.24; blended $0.58/1M.
- **Architecture:** Proprietary, closed weights; parameters/topology undisclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **41** at high effort, #30/200 (includes Terminal-Bench 4.0 and AutomationBench-AA slices; itemized rows not surfaced this pass)
- DeepSWE v1.1: **73.8%** (DataCurve leaderboard; also cited in OpenAI's GPT-6 Astra comparison table, where Astra posts 74.1 and Opus 5 73.7)
- Tool suite: caching, code execution, computer use (preview), file search, function calling, Google Maps + Search grounding, structured output, URL context; Google says 3.8 "works harder" — reasons longer and calls tools more often than 3.7
- Vals AI Finance Agent v2 and Harvey Legal Agent Benchmark: evaluated per Kingy's evidence list (row values not surfaced this pass)
- Tau / GDPval / Claw-Eval: no verified public rows surfaced this pass

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **41**, #30/200 (median 24) — vs ~60 for flagship Gemini-class and 53 for GPT-6 Astra
- Google-reported: improves on every reported 3.7 Flash benchmark row (launch deltas; Google's own harness)
- GPQA / HLE / MRCR / LCR: no individual public rows surfaced this pass

Coding:

- DeepSWE v1.1: **73.8%** (see above) — within a point of GPT-6 Astra and Claude Opus 5
- SWE-bench Verified / Pro / LiveCodeBench / SciCode / Vibe: no verified public rows surfaced this pass

Long context:

- 1M window; no MRCR/RULER retrieval numbers surfaced this pass

Speed / cost profile:

- **305.0 tok/s** — #2/200 on Artificial Analysis speed (vs median 70.3); TTFT 16.44s; 170M output tokens across the AA Index (very verbose — the "works harder" trade), ~40% higher cost/task than 3.7 Flash

### Normalized scores (1–100)

- **Tool use: 72/100.** The broadest documented tool suite in this cohort (computer use preview, shell, grounding, URL context) with DeepSWE 73.8% corroborating agentic execution — but AA's itemized tool rows and Tau/GDPval values were not surfaced this pass, so it sits mid-frontier.
- **Reasoning: 74/100.** AA Intelligence Index 41 (#30/200) is a solid step over GPT-5.5's 38 and near Qwen3.8-Max's 45, with Google's all-row improvements over 3.7 Flash — kept out of the 80s by the missing GPQA/HLE rows.
- **Context window: 92/100.** 1M window verified (95–100 tier); docked for the 65K output cap and no published retrieval numbers.
- **Multimodal: 85/100.** Text, image, video, audio and PDF in with text out — deep into the 75–90 band; only non-text output (via the separate Live model) keeps it from the 90s.
- **Coding: 82/100.** DeepSWE v1.1 73.8% is frontier-band (within a point of Astra's 74.1) and it "works harder" per Google; no SWE-bench Verified/Pro rows surfaced — held below the Kimi-K3/Fable band for evidence asymmetry.
- **Cost efficiency: 83/100.** $0.75/$3.75 intro ≈ the ~$0.60/$2.20→92 anchor minus verbosity (170M tokens, ~40% pricier per task than 3.7); the scheduled Jan 1, 2027 doubling to $1.50/$7.50 (~80) weighs on the long-run score.
- **Overall Score: 81.0/100.** (72+74+92+85+82)/5 = 81.0. Best fit: high-throughput multimodal agent work at Flash economics — the #2 speed on AA (305 tok/s) makes it the best latency/capability compromise of the September 2026 field; watch the January price doubling.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: Artificial Analysis model page, Kingy AI evidence-labelled review, OpenAI GPT-6 Astra cross-table, DataCurve DeepSWE leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

