# Ox Alpha — findings by Muse Spark 1.3

- Source: Stealth/Ox Alpha via OpenRouter (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth reasoning model, OpenRouter `stealth/ox-alpha`)
- **Short description:** A frontier reasoning-first stealth model served via OpenRouter and OpenCode Zen, built for long-horizon coding agents with a million tokens of context, free during preview.
- **Provider / access:** Stealth provider via OpenRouter (`stealth/ox-alpha`) and OpenCode Zen `opencode/ox-alpha` (Chat Completions, tool calling supported; suspected GLM-family descent, unconfirmed).
- **Release / knowledge:** 2026-08 stealth preview; knowledge cutoff undisclosed
- **IDs:** `opencode/ox-alpha` (Free experimental ID exists on Zen; OpenRouter route `stealth/ox-alpha`)
- **Context window:** 1,048,576 in / 131,072 out — verified via current OpenRouter metadata (cited by ox-alpha.net benchmark reference, Aug 2026) and oxalpha.com product page
- **Modalities:** text, image, video, PDF in; text out; reasoning yes (visible thinking stream); tool calls yes
- **Pricing (as of 2026-09-21):** $0 free preview (oxalpha.com product page and vs-GLM-5 comparison: $0 vs $1.50/1M out; stealth pricing can change without notice)
- **Architecture:** proprietary stealth (undisclosed; community speculation of GLM-family descent, unconfirmed)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Stealth-route attribution is noted per number; label-level third-party listings are flagged as such.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Intelligence Index (vendor comparison page): **59** (ox-alpha.org vs-GLM-5 page, Ox Alpha column; GLM-5 57 — vendor-site claim, small-sample provenance)
- Agentic coding (vendor comparison page): **78** (same page, Ox Alpha column; GLM-5 72 — vendor-site claim)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LiveBench Reasoning (label-level only): **76.6** (LiveBench 2026-06-25 snapshot, label `ox-alpha-max`, transcribed by oxalpha.io disclosure page; route attribution to `stealth/ox-alpha` NOT established)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (closest proxy: vendor-page Intelligence Index 59 above)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Community 10-task real-world coding run: **80% (8/10 solved)** (oxalpha.com benchmarks page; references Fable 5 max 65%, GLM-5.3 max 62%, GPT-5.6-sol max 52%, Grok 4.6 xhigh 62% — third-party data, small sample, directional not definitive)
- LiveCodeBench: **no verified public score found** (closest proxy: LiveBench Coding **75.8**, Agentic coding 52.6, Overall 69.2 — same label-level-only listing as above)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M context with 131K max output verified from provider metadata** (no verified MRCR v2 / RULER / GraphWalks percentage found)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 74/100.** Vendor-page agentic coding 78 and Intelligence Index 59 suggest strong agency but lack independent harness provenance; capped by zero TB/Tau/GDPval absolutes.
- **Reasoning: 78/100.** Label-level LiveBench Reasoning 76.6 with frontier-reasoning positioning shows promise; capped by route-attribution limits and no GPQA/HLE absolutes.
- **Context window: 97/100.** Verified 1,048,576 in / 131,072 out maps to the top tier; capped below 100 without retrieval-saturation proof.
- **Multimodal: 85/100.** Text/image/video/PDF input with text output covers the video/PDF band; capped by text-only output with no audio synthesis.
- **Coding: 82/100.** Community 10-task 80% ahead of Fable 5/GLM-5.3/GPT-5.6-sol references with label-level Coding 75.8; capped by the tiny 10-task sample and missing SWE/LiveCodeBench absolutes.
- **Cost efficiency: 100/100.** $0 free preview with nothing to host.
- **Overall Score: 83/100.** Mean of the five non-cost dims (74+78+97+85+82)/5 = 83.2; best-fit free stealth sandbox for long-context agentic coding while preview pricing holds.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: deeper public internet research superseding the 2026-09-18 excluded attempt (oxalpha.com product/benchmarks pages, ox-alpha.org comparison page, oxalpha.io LiveBench disclosure record, ox-alpha.net methodology reference, OpenCode usage data page); label-level numbers flagged where route attribution is unproven; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
