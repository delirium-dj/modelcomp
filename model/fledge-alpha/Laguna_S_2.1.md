# Fledge Alpha — findings by Laguna S 2.1

- Source: OpenCode Zen (`fledge-alpha-free` free preview), Stealth Models independent testing
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (Free)
- **Short description:** Anonymous stealth preview model on OpenCode Zen, likely a router backed by fast models; strong reasoning scores on GPQA and MMLU-Pro despite low context usage transparency.
- **Provider / access:** OpenCode Zen (`fledge-alpha-free`, `https://opencode.ai/zen/v1/chat/completions`, OpenAI-compatible). Free tier ($0 in/out). No Free ID on Zen (`noFreeId: false` — it is the free tier itself).
- **Release / knowledge:** Listed Oct 1, 2026 on models.dev; earliest usage Sep 30, 2026. Knowledge cutoff not published.
- **IDs:** `opencode/fledge-alpha` (per `meta.json`); `fledge-alpha-free` (OpenCode Zen API, models.dev)
- **Context window:** 1,048,576 tokens total / 131,072 max output (verified via OpenCode Zen API and models.dev metadata)
- **Modalities:** text, image in; text out (verified via models.dev). Reasoning effort: low, high, max. Tool calls: supported.
- **Pricing (as of 2026-10-03):** $0 / $0 per 1M tokens (Free, OpenCode Zen limited-time preview)
- **Architecture:** Unknown — Stealth Models hypothesizes a router based on varying token counts; developer and underlying models unidentified.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Benchmarks from Stealth Models independent testing, October 3, 2026 (via OpenCode CLI, max reasoning, no tools).

Agent / tool use:

- Terminal-Bench 2.0: **no verified public score found**
- τ²-Bench: **no verified public score found**
- GDPval-AA / Arena Elo: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- BrowseComp: 77.3% (Stealth Models) — noted but not standard tool-use benchmark
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (36/39 correct, 95% CI: 79.7–97.3%) (Stealth Models)
- MMLU-Pro: **92.0%** (92/100 correct, 95% CI: 85.0–95.9%) (Stealth Models)
- Humanity's Last Exam (HLE): **25.4%** (17/67 correct, 95% CI: 16.5–36.9%) (Stealth Models)
- AIME 2025: **98.3** (Digital Applied, vendor-reported)
- HMMT Feb: **97.3** (Digital Applied, vendor-reported)
- AA Intelligence Index: **no verified public score found**
- no verified public score found for LCR/MRCR, CritPt, Omniscience

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- DeepSWE: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- no verified public score found for MRCR / RULER / GraphWalks

### Normalized scores (1–100)

- **Tool use: 35/100.** Tool call support is verified via OpenCode Zen API, but no Terminal-Bench, τ²-Bench, GDPval-AA, or Claw-Eval benchmark scores are available. No data caps the score despite the model's agentic positioning.
- **Reasoning: 89/100.** GPQA Diamond 92.3% (36/39, 95% CI: 79.7–97.3%) and MMLU-Pro 92.0% (92/100) are near-frontier (≥90% threshold). HLE 25.4% (17/67) is moderate. AIME 2025 98.3 and HMMT 97.3 corroborate strong mathematical reasoning. No MRCR/LCR/CritPt data recorded. Note: benchmarks tested via OpenCode CLI with max reasoning, no tools (Stealth Models methodology).
- **Context window: 97/100.** Verified 1,048,576 tokens (1M) total, 131,072 max output (OpenCode Zen API, models.dev). At ≥1M context — 97 (not 100, as no 98% retrieval-at-512K+ verification found).
- **Multimodal: 70/100.** Text + image input, text output (verified via models.dev). Image input is supported, placing the model above text-only. No vision benchmark scores (MMMU-Pro, MathVision) available; no video input.
- **Coding: 35/100.** No verified SWE-bench, LiveCodeBench, DeepSWE, or SciCode benchmark scores found. Available on OpenCode coding agent and tool calls are supported, but no benchmark data caps the score.
- **Cost efficiency: 100/100.** $0 / $0 per 1M tokens on OpenCode Zen (`fledge-alpha-free` lists free rates).
- **Overall Score: 65/100.** Half-up mean of five quality dims: (35+89+97+70+35)/5 = 65.2 → 65. Strong verified reasoning and free $0 cost, but tool-use and coding benchmarks are entirely missing — the gap to the model's average.md Overall (81) reflects peer-model estimates rather than verified public numbers for these dimensions.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-03
- Method: public internet research via Stealth Models, OpenCode Zen API docs, models.dev, and Digital Applied; scores are normalized 1–100 interpretations, not official vendor scores.
- Caveat: Stealth Models hypothesizes Fledge Alpha may be a router (varying token counts across identical prompts). Developer and underlying architecture are unidentified. Benchmark scores from Stealth Models use max reasoning via OpenCode CLI.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---