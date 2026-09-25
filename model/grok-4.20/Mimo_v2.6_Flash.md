# Grok 4.20 — findings by Mimo v2.6 Flash

- Source: xAI (SpaceXAI)/Grok 4.20
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (xAI API model; reasoning / non-reasoning / multi-agent variants)
- **Short description:** xAI's general-purpose reasoning flagship shipped between Grok 4 and Grok 4.3, positioned for broad assistant, research and tool-use work rather than a coding-only checkpoint. Headline differentiator at release: the lowest hallucination rate measured by Artificial Analysis at the time, plus a runtime reasoning toggle and very long context.
- **Provider / access:** xAI API (`https://api.x.ai/v1`, Chat Completions; reasoning and multi-agent slugs), Grok consumer web/mobile apps, OpenRouter and other aggregators. **Not on OpenCode Zen** as of 2026-09-25 (open feature request `anomalyco/opencode#18945`).
- **Release / knowledge:** public beta 2026-02-17, GA in March 2026 (docs refresh 2026-03-24); xAI system card dated 2026-04-07. Knowledge cutoff November 2024 (TopReviewed secondary coverage).
- **IDs:** `grok-4.20-0309-reasoning` (alias `grok-4.20`), `grok-4.20-0309-non-reasoning`, `grok-4.20-multi-agent-0309` (docs.x.ai). **No Free ID exists on OpenCode Zen** as of 2026-09-25 — score on paid xAI pricing.
- **Context window:** 1,000,000 tokens on the current xAI docs card for the reasoning/non-reasoning and multi-agent slugs (docs.x.ai, verified 2026-09-25); 2,000,000 tokens at launch and still shown by Artificial Analysis / OpenRouter / multi-agent listings — the 1M-vs-2M discrepancy is unresolved across sources. Max output up to 1M on xAI-hosted routes (modelbenchmark.io host table).
- **Modalities:** text + image in; text out; reasoning toggle exposed as separate slugs plus `reasoning_effort`; function/tool calling; no audio or video input; no non-text output.
- **Pricing (as of 2026-09-25):** $1.25 input / $2.50 output / $0.20 cached input per 1M tokens below 200K prompts (docs.x.ai canonical, repriced down from the $2/$6 launch rates); at ≥200K prompts the whole request bills at $2.50 / $5.00 / $0.40 cached (modelbenchmark.io long-context tier). Free access only via grok.com / X apps with daily caps — no free API tier. Artificial Analysis still displays the older $2/$6 card.
- **Architecture:** proprietary; xAI system card describes single-agent (`Grok 4.2 SA`) and multi-agent (`Grok 4.2 MA`) deployment modes. Parameter count and architecture not disclosed (third-party 1.7–3T MoE estimates are unverified speculation).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Tau2-Bench Telecom: **96.5%** (BenchmarkList, 97th pct, rank 11 of 332, observed 2026-06-10)
- Terminal-Bench 2.1: **44.2%** (BenchmarkList/Artificial Analysis, 59th pct, rank 76 of 182)
- Terminal-Bench 2.0: **40.4%** (rank 34 of 68); Terminal-Bench Hard (AA subset): **40.9%** (91st pct, rank 30 of 326)
- GDPval-AA: **1171 Elo** (81st pct, rank 66 of 340, observed 2026-05-28)
- IFBench: **82.9%** (97th pct, rank 2 of 38, verified 2026-08-28)
- Claw Bench: **92 points** (58th pct); ClawProBench: **43.04** (9th pct, rank 44 of 48)
- Tau3-Banking / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.6%** (BenchmarkList/Vals, 78th pct, rank 26 of 117); vendor/secondary coverage cites 88.9% (HokAI) and 78.5% (launch coverage) — sources disagree, harness versions differ
- Humanity's Last Exam: **34.5%** (90th pct, rank 46 of 466)
- MMLU Pro: **86.3%** (rank 35 of 116); MMMU Pro: **83.5%**
- Artificial Analysis Intelligence Index: **48** (v4.0, 2026-03, the-decoder) / **38** (BenchmarkList current observation) / **26** (AA release page, v4.3.2 reasoning build) — index version-dependent, all three cited
- AA-Omniscience non-hallucination rate: **78%** — record for any model tested at release (Artificial Analysis via the-decoder / winbuzzer, 2026-03)
- ARC-AGI-2: **65.1%** (77th pct, rank 24 of 99); ARC-AGI-1: **89.5%**
- CritPt / AA-LCR / MRCR: **no verified public score found**

Coding:

- SWE-bench Verified: **72.2%** (BenchmarkList/Vals, 42nd pct, rank 42 of 72); BenchLM lists **76.7%** — both cited, disagreement noted
- SWE-bench Pro: **51.8%** (BenchLM)
- LiveCodeBench: **84.3%** (75th pct, rank 32 of 123); LiveCodeBench Pro: **74.2%** (LMSpeed/BenchLM, rank 3 of 4 on that harness)
- SciCode: **45.6%** (88th pct, rank 57 of 458)
- Vibe Code Bench v1.1: **4.1%** (13th pct, rank 62 of 71)
- ALE-Bench: **1150.28** (82nd pct); IOI: **30.2%**; Arena AI WebDev Arena: **1373.64 Elo**

Long context:

- Window documented at 1M (docs.x.ai) / 2M (launch, AA, OpenRouter); MRCR / RULER / GraphWalks retrieval quality: **no verified public score found** — only unverified community claims of strong recall past 500K (HokAI)

### Normalized scores (1–100)

- **Tool use: 72/100.** Tau2-Bench Telecom 96.5% (97th pct), IFBench 82.9% (#2/38) and GDPval-AA 1171 Elo (81st pct) are solidly upper-mid; Terminal-Bench 2.1 at 44.2% and TB-Hard at 40.9% sit just under the mid-band's upper half and are what cap it — no Tau3/GDPval-frontier numbers to push higher.
- **Reasoning: 84/100.** GPQA Diamond 88.6%, HLE 34.5% (90th pct), MMLU-Pro 86.3% plus the record 78% AA-Omniscience non-hallucination rate; capped below frontier because HLE stays under 40% and the AA Intelligence Index (38–48 depending on version) trails leaders at ~57.
- **Context window: 96/100.** ≥1M tier maps to 95–100 and current xAI docs confirm 1,000,000 tokens (2M on launch/AA/OpenRouter listings); held off 100 because no measured retrieval curve (MRCR/RULER) is published and the 1M-vs-2M discrepancy is unresolved.
- **Multimodal: 68/100.** Image input with MMMU Pro 83.5% lands in the upper half of the +image band (60–70); no video/audio input and text-only output keep it out of the 75+ tiers.
- **Coding: 75/100.** LiveCodeBench 84.3%, SWE-bench Verified 72.2–76.7%, SciCode 45.6% and LiveCodeBench Pro 74.2% are comfortably mid-band and above the "LiveCode 80 but SciCode <40" reference; Vibe Code Bench 4.1% and Terminal-Bench 2.1 44.2% are the caps.
- **Cost efficiency: 90/100.** $1.25/$2.50 with $0.20 cached is far below the $3/$15 reference and cheaper on output than the $1.25/$4.25 ≈ 88 anchor; the ≥200K tier ($2.50/$5.00, whole-request repricing) is the only drag.
- **Overall Score: 79/100.** (72 + 84 + 96 + 68 + 75) / 5 = 79.0 → **79** — best fit: a cheap, record-low-hallucination long-context generalist with strong science reasoning; skip it when you need top-tier multi-hour terminal agentic performance.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: public internet research (docs.x.ai model cards and system card, Artificial Analysis / BenchmarkList / Vals / BenchLM aggregations, launch and pricing coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
