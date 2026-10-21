# Muse Wonder 1.0 — findings by GLM 5.3

- Source: Meta (`meta/muse-wonder-1.0`, OpenCode Zen `muse-wonder-1.0`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's frontier agentic model released 2026-10-12 (Muse Wonder series), positioned for personal and professional agents with "Active Memory" and "Active Focus". The "Muse Wonder Full" effort tier (max effort, Muse Code subscribers only, not priced per token) is the same model at higher reasoning effort — per the tier-suffix rule it resolves here and never gets a separate folder.
- **Provider / access:** Meta Model API (first-party) and Muse Code; OpenCode Zen `muse-wonder-1.0`; 9 hosted providers on models.dev; Chat Completions/Responses per the Zen endpoint table.
- **Release / knowledge:** released 2026-10-12 (Meta launch blog "Muse Wonder: A Frontier Model For Personal & Professional AI Agents"; AA article same day); knowledge cutoff not stated.
- **IDs:** `meta/muse-wonder-1.0` (models.dev canonical), `muse-wonder-1.0` (OpenCode Zen), `Muse Wonder` (Meta Model API / AA listing).
- **Context window:** 1,048,576 tokens with 131,072 max output — verified on models.dev, the Zen endpoint table, and Artificial Analysis ("Context windows: 1M tokens each, unchanged from Muse Spark 1.3").
- **Modalities:** text, image, video, and audio in; text out (AA modality panel); reasoning yes (effort levels up to max); tool calls yes; structured output yes (models.dev).
- **Pricing (as of 2026-10-21):** $4.00 in / $0.20 cached / $20.00 out per 1M (Zen pricing table, models.dev, and AA concordant — up from Muse Spark 1.3's $1.25/$4.25); ~$4.52 per AA Intelligence Index task at max effort (7.69M input tokens + ~54k output per task).
- **Architecture:** proprietary closed weights; no parameter count disclosed; trained at Meta's gigawatt-scale Prometheus data center (vendor statement).

### Raw benchmarks found

> Independent Artificial Analysis measurements (2026-10-12 article + model page, "max" reasoning effort) plus vendor positioning from the official launch blog. The blog's own results table is image-embedded and did not extract numeric rows this pass. Numbers for the separate "Muse Wonder Full" effort tier are cited only where explicitly labelled. Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 4.0: **52%** (AA, Muse Wonder max; up from Muse Spark 1.3 max's 33%; Muse Wonder Full max reaches 57%)
- AutomationBench-AA: **68%** (AA, Muse Wonder max; up from Spark 1.3's 58%; Full max = 71%, #3)
- GDPval-AA v2.1: no verified public score for the base tier (Muse Wonder Full max = 1857 Elo, #2 — labelled Full-only)
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found
- Harvey's Legal Agent Benchmark: used in Meta's evaluations (vendor blog) — no numeric public score extracted

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3: **52** (max effort; Muse Spark 1.3 max = 48; Muse Wonder Full max = 56)
- AA-Omniscience: **25** (AA, max; knowledge is a relative weakness, below Opus 5.5's 46 and Gemini 4 Argon's 42)
- Hallucination Rate: **27%** (AA, max — third-lowest among models scoring 45+ on the Index; Full max = 23%)
- CritPt / GDP.pdf / SciCode: no verified public score for the base tier (Full max: CritPt 33% #1, GDP.pdf 33% #1, SciCode 63% #3 — labelled Full-only)
- GPQA Diamond / HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- Artificial Analysis Coding Agents Index: **63** (max effort in Muse Code; Muse Spark 1.3 max = 54; Sonnet 5.5 max = 68, Opus 5.5 max = 66, Muse Wonder Full max = 68)
- SWE-Marathon (Meta's long-running software project eval): used in vendor evaluations — no numeric public score extracted
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1,000,000-token window (triple-verified); no MRCR / RULER / GraphWalks retrieval score published. AA token-usage data: 7.69M input tokens per Intelligence Index task implies heavy context reuse rather than window-limited behavior.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 4.0 at 52% (vs 33% for Spark 1.3 max) and AutomationBench-AA 68% are strong agentic gains, with the vendor's Active Memory/Active Focus positioning backed by real benchmark movement; capped by no Tau/GDPval/OSWorld numbers for the base tier.
- **Reasoning: 75/100.** AA Intelligence Index 52 (max) is a material jump over Spark 1.3's 48 with a very low 27% hallucination rate, but AA-Omniscience 25 exposes knowledge as a relative weakness and no GPQA/HLE rows exist for the base tier.
- **Context window: 95/100.** 1M tokens with 131K output, triple-verified (≥1M tier = 95–100); held at 95 because no long-context retrieval score is published.
- **Multimodal: 90/100.** Text, image, video, and audio input with text output (AA modality panel) — the audio-in band floor; capped by text-only output.
- **Coding: 78/100.** AA Coding Agents Index 63 (max) sits just under Sonnet 5.5 (68) and Opus 5.5 (66) — a material gain over Spark 1.3's 54; capped by the absence of SWE-bench Verified/LiveCodeBench rows.
- **Cost efficiency: 55/100.** $4/$20 premium pricing (Opus 5.5 class, below the $3/$15 reference at ~60) with heavy input consumption ($4.52 per II task, 2.8× Spark 1.3's $1.60) — efficient output tokens do not offset the input volume.
- **Overall Score: 82/100.** Half-up mean of the five quality dims (72 + 75 + 95 + 90 + 78 = 410, 410/5 = 82.0 → 82); best fit: Meta's agentic frontier model for memory/focus-driven personal and professional agents — top-tier multimodal input and coding-agent gains, at premium prices with a knowledge ceiling.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (Meta launch blog 2026-10-12, Artificial Analysis article and model-page data 2026-10-12, OpenCode Zen docs + live endpoint, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores. The "Full" effort tier's figures are cited only where labelled and never merged into the base tier's scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
