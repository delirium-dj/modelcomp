# Fledge Alpha — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / Fledge Alpha (`opencode/fledge-alpha-free`; anonymous stealth preview)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (listed on Zen as Fledge Alpha Free)
- **Short description:** Anonymous stealth preview model that appeared on OpenCode Zen on 2026-10-01, free at $0 with a 1M-token window, image input and three reasoning settings. Evidence from repeated tokenizer tests and uneven outputs points to a router backed by fast, undisclosed models rather than a single named lab model.
- **Provider / access:** OpenCode Zen, selector `opencode/fledge-alpha-free` (free models usable without a personal Zen key). Chat Completions-style Zen gateway; not tied to a public vendor model card. US regions confirmed; several non-US regions blocked in early reports.
- **Release / knowledge:** First recorded usage 2026-09-30; listed on Zen 2026-10-01; models.dev specs published 2026-10-02. Developer and knowledge cutoff unknown.
- **IDs:** `opencode/fledge-alpha-free` (models.dev / Zen). Repo folder id: `fledge-alpha`.
- **Context window:** 1,048,576 total / 131,072 max output (models.dev / OpenCode, verified 2026-10-02 via `fledge-alpha-free.toml` and the Zen catalog).
- **Modalities:** text + images in, text out; reasoning (low · high · max); tool calls supported; open weights not listed.
- **Pricing (as of 2026-10-03):** $0.00 in / $0.00 out on the OpenCode Zen preview (free, time-limited). No paid rate published; anonymous stealth listing, so benchmark identity may change without notice.
- **Architecture:** not disclosed. Current evidence (same prompt counted 7,536 then 6,499 input tokens; inconsistent SVG quality) suggests a routed service over fast models. Vendor/underlying models unconfirmed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** — tool calls are listed as supported, but no agentic harness score exists.

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (36/39 answered, 95% CI 79.7–97.3%) — Stealth Models research, 3 October 2026, max reasoning, no tools.
- HLE (text-only): **25.4%** (17/67 answered, 95% CI 16.5–36.9%) — same Stealth Models run (comparison table shows 25.8% / 66 shared questions).
- MMLU-Pro: **92.0%** (92/100, 95% CI 85.0–95.9%) — same Stealth Models run.
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**.

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- SVG generation: Stealth Models' six-scene test (2,048 output tokens/run, low reasoning) ranged from simple sketches to well-composed scenes — **qualitative only, not a scored coding benchmark**; ~61 output tokens/s.

Long context:

- 1,048,576-token context is catalog-listed, but **no MRCR / RULER / GraphWalks retrieval score at any window length was found** → no verified long-context retrieval number.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calls and reasoning settings are listed, but there is no Terminal-Bench / Tau3 / GDPval / Claw-Eval number; scored mid-band on the capability listing plus strong reasoning, capped by the total absence of any agentic measurement.
- **Reasoning: 88/100.** GPQA Diamond 92.3% is frontier-tier (90%+ band) and MMLU-Pro 92.0% is strong; HLE 25.4% sits well below the 40% frontier reference and no Intelligence Index exists, which caps it just under 90.
- **Context window: 97/100.** 1,048,576 tokens lands in the ≥1M band (95–100); not 100 because no ≥98% retrieval evidence at 512K+ was found.
- **Multimodal: 65/100.** Text + image input, text output only (no video/PDF/audio in, no non-text out) → the +image-in band 60–70.
- **Coding: 60/100.** No SWE-bench / DeepSWE / LiveCodeBench / SciCode result exists, and the SVG tests were uneven and qualitative; scored conservatively on reasoning strength without a measured coding result.
- **Cost efficiency: 100/100.** $0.00 input/output on the OpenCode Zen preview (`fledge-alpha-free`); time-limited free tier with anonymous-stealth identity caveats.
- **Overall Score: 73/100.** Mean of the five quality dims (55 + 88 + 97 + 65 + 60) / 5 = 73.0. Best-fit: a free, 1M-context, image-capable reasoner for broad-knowledge and exploratory work; treat agentic/coding reliability as unproven until a same-harness score appears.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-03
- Method: fresh public internet research (Stealth Models Fledge Alpha benchmark page, 2026-10-03; OpenCode Zen catalog and models.dev `fledge-alpha-free` metadata; OpenCode usage telemetry, 2026-10-02). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
