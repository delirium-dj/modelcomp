# Fledge Alpha — findings by Qwen 3.8 27B

- Source: OpenCode Zen (`fledge-alpha-free`) — vendor not disclosed
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (served as `fledge-alpha-free`, OpenCode Zen free-tier preview)
- **Short description:** Anonymous/stealth free-tier preview on OpenCode Zen — text + image in, text out, tool calls, 1M context at $0/$0. Vendor and base weights not disclosed; an independent tokenizer test (repeated identical prompts yielding different input-token counts, 7,536 vs 6,499) suggests a routed service backed by fast models, unconfirmed.
- **Provider / access:** OpenCode Zen `opencode/fledge-alpha-free` (Chat Completions-style API via OpenCode). No OpenRouter, Hugging Face, or other public API listing found this pass.
- **Release / knowledge:** First recorded usage 2026-09-30 (OpenCode telemetry); listed on OpenCode Zen 2026-10-01; specifications published on models.dev 2026-10-02. Knowledge cutoff not disclosed.
- **IDs:** `opencode/fledge-alpha-free` (Free ID; $0 input / $0 output).
- **Context window:** 1,048,576 total; max output 131,072 (models.dev `fledge-alpha-free.toml` spec, as cited at stealthmodels.com, verified 2026-10-05).
- **Modalities:** text + image in, text out; reasoning effort low / high / max; tool calls supported.
- **Pricing (as of 2026-10-05):** Free preview — $0 input / $0 output (limited-time free tier; standard free-preview caveats apply).
- **Architecture:** Closed weights (not listed as open); undisclosed. OpenCode telemetry (Oct 2, 2026 snapshot): ~12B tokens, 471 unique users, 12,504 completed sessions, 91% input cache ratio.

### Raw benchmarks found

> Independent measured numbers below: Stealth Models research, https://stealthmodels.com/fledge-alpha/ (checked 2026-10-05). Methodology per that source: 206 answered questions, maximum reasoning effort, no tools, Fledge via OpenCode CLI; scores use answered questions with 95% Wilson confidence intervals. No vendor benchmark table or vendor announcement exists.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Usage (not a capability score): 12,504 completed sessions / ~12B tokens in OpenCode's October 2 snapshot (via stealthmodels.com)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (36/39; 95% CI 79.7–97.3) — Stealth Models independent eval, 2026-10-03
- MMLU-Pro: **92.0%** (92/100; 95% CI 85.0–95.9) — same source
- HLE (text-only): **25.4%** (17/67; 95% CI 16.5–36.9) — same source
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (qualitative: independent SVG generation tests were uneven — "often rushes to a simple answer"; ~61 output tokens/s in six 2,048-token runs)

Long context:

- 1M window documented (models.dev, 2026-10-02); no long-context retrieval value reported.

Multimodal:

- text + image input documented (models.dev); no MMMU/OCR/video benchmark scores published this pass.

### Normalized scores (1–100)

- **Tool use: 55/100.** Tool calls are listed as supported and OpenCode telemetry shows heavy agentic usage (12.5k sessions), but no verified TB2.1/Tau3/GDPval number exists for this ID; unmeasured tool capability caps the score.
- **Reasoning: 78/100.** Independent GPQA Diamond 92.3% and MMLU-Pro 92.0% are strong (Stealth Models, 2026-10-03), but HLE 25.4% is far below frontier and the samples are small (wide CIs); the route also "rushes to a simple answer" per the same research.
- **Context window: 95/100.** 1,048,576 total tokens places it at the top of the ≥1M band; no verified retrieval percentage at 512K+ this pass, so it is not scored 100.
- **Multimodal: 65/100.** Image input is documented (models.dev) with no verified multimodal benchmark scores and text-only output.
- **Coding: 58/100.** No verified SWE-bench/LiveCodeBench/DeepSWE number for this exact ID; the floor reflects unverified coding capability with anecdotally uneven outputs.
- **Cost efficiency: 100/100.** $0 input / $0 output on the OpenCode Zen free tier (models.dev, 2026-10-02); limited-time stealth-preview caveats apply.
- **Overall Score: 70/100.** (55 + 78 + 95 + 65 + 58) / 5 = 70.2 → 70; best-fit as a free 1M-context general/agentic driver when the identity of the underlying weights is not a constraint.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b:free)** — 2026-10-05
- Method: public internet research (Stealth Models independent research at stealthmodels.com/fledge-alpha, models.dev `fledge-alpha-free` spec, OpenCode telemetry snapshot, anyrouter.dev and aipromonow.com launch notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
