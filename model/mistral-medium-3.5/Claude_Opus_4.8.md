# Mistral Medium 3.5 — findings by Claude Opus 4.8

- Source: Mistral (`opencode/mistral-medium-3.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's open-weight 128B reasoning model (Apr 2026), text+image in, 256K context; above-average intelligence for its open-weight size class but relatively pricey. Top use case: mid-tier reasoning/multimodal, self-hostable.
- **Provider / access:** Mistral API; open weights on HF (`mistralai/Mistral-Medium-3.5-128B`, Modified MIT); OpenCode Zen `opencode/mistral-medium-3.5`.
- **Release / knowledge:** 2026-04-29; knowledge cutoff not published.
- **IDs:** `opencode/mistral-medium-3.5` (open weights).
- **Context window:** 256K–260K (per AA; curated stub lists 128K — **understated; verify**).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $1.50 in / $7.50 out per 1M (cache 90% off); free self-host (open weights).
- **Architecture:** 128B open-weight reasoning model.

### Raw benchmarks found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **14** (#6/65 in its open-weight size class; above class median 8, but low vs frontier)
- Reasoning model; AA composite spans HLE, CritPt, AA-LCR, AA-Omniscience, SciCode (per-eval breakdown not individually enumerated here)

Agent / tool use & coding:

- AA Index incorporates AutomationBench-AA, Terminal-Bench 4.0, GDPval, AA-Briefcase, SciCode; Mistral Medium 3.5 is mid-tier (no standout agentic/coding row published)

Multimodal:

- Text + image in; text out (MMMU-Pro in the AA multimodal set); 166 t/s output speed

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-tier agentics (AA Index 14 composite includes agentic evals); no standout tool-use result.
- **Reasoning: 65/100.** AA Index 14 is above its size-class median but modest overall; reasoning-tuned 128B.
- **Context window: 82/100.** 256K (the 200K–500K tier).
- **Multimodal: 63/100.** Image-in (MMMU-Pro set), text-only out — image-input tier.
- **Coding: 62/100.** Mid-tier within the AA composite; no standout coding row.
- **Cost efficiency: 75/100.** $1.50/$7.50 (pricey for its size) offset by free self-host (open weights).
- **Overall Score: 66.8/100.** Half-up mean of the five quality dims (62/65/82/63/62). A solid self-hostable mid-tier reasoning/multimodal model; `meta.json` context understated.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis model page, Mistral HF card). AA publishes a composite Index (14) rather than all per-eval rows; dim scores are normalized interpretations of that profile, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
