# GPT 5.3 Codex Spark — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.3-Codex-Spark (`gpt-5.3-codex-spark`; Cerebras-served research preview)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex Spark (GPT-5.3-Codex-Spark)
- **Short description:** A distilled, Cerebras-accelerated variant of OpenAI's GPT-5.3-Codex, purpose-built for low-latency real-time coding at 1,000+ tokens/second. Available as a ChatGPT Pro research preview and now deprecated — OpenAI recommends GPT-5.3-Codex for all new work. A fast drafter, not a frontier reasoner.
- **Provider / access:** OpenAI research preview via ChatGPT Pro; served on Cerebras Wafer Scale Engine 3 (WSE-3). Not a standard public API model, no OpenCode Zen Free ID. Repo tracks it as `opencode/gpt-5.3-codex-spark`.
- **Release / knowledge:** Released 2026-02-12 (preview); now deprecated. Knowledge cutoff not published.
- **IDs:** `gpt-5.3-codex-spark` (no general public API id; research-preview SKU).
- **Context window:** 128,000 tokens at launch; text-only. Max output not published.
- **Modalities:** text in / text out. Tool calls and structured outputs claimed, but multiple reports flag unreliable tool-call formatting; no image/audio/video.
- **Pricing (as of 2026-10-03):** no tracked per-token pricing — it is a ChatGPT Pro research preview, not a standard billed API model.
- **Architecture:** proprietary distilled decoder-only coding model; throughput-optimized serving on Cerebras WSE-3.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **58.4%** (Benchmark Atlas, `atlas.kevinhu.io/models/gpt-5-3-codex-spark`)
- Voratiq Coding Agent Leaderboard: **1332** (Benchmark Atlas)
- Benchmark Atlas Capability index: **149.3**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Tool-call/structured-output reliability: reported unreliable on X/Turing College — JSON schemas missing fields, phantom parameters (qualitative).

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- Reasoning depth: documented to **drift after 6–8 step plans** (Turing College, 2026-02-14) — qualitative.

Coding:

- SWE-Bench Pro (Public Dataset): **51.5%** (Benchmark Atlas) / **~56%** (Turing College, vs GPT-5.3-Codex ~72%)
- Terminal-Bench 2.0: **58.4%** (Benchmark Atlas)
- SlopCodeBench (Benchmark Atlas): Core Solved **29.1**, Isolated Solved **8.2**, Problems Solved **0.0**, % AST-Grep **34.0**, % Cloned **8.6**, Erosion Mean **58.6**, Verbosity Mean **35.7**
- BuseyBench SVG: **3.0** (Benchmark Atlas)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**

Long context:

- 128K-token window; **no MRCR / RULER / GraphWalks retrieval score found**. Developers report context drift toward the end of the window on large codebases (Turing College).

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.0 58.4 sits mid-band and Voratiq 1332 is mid-field, but reports of broken JSON schemas and phantom parameters cap it below the 70s.
- **Reasoning: 50/100.** No GPQA/HLE; the distilled sibling dropped constraints after 6–8 steps in testing, placing it below the mid band despite Benchmark Atlas Capability 149.3.
- **Context window: 55/100.** 128K lands in the 100K–200K band (50–64), with context drift reported on large inputs.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 70/100.** SWE-Bench Pro 51.5–56% plus TB2.0 58.4 make it a capable rapid-edit coder, but far below the 74%+ frontier coding bar and weak on multi-step/structured work.
- **Cost efficiency: 50/100.** No per-token pricing is published (ChatGPT Pro research preview only), so inverse-pricing cannot be computed; scored neutral.
- **Overall Score: 50/100.** Mean of the five quality dims (58 + 50 + 55 + 15 + 70) / 5 = 49.6 → 50. Best-fit: ultra-fast drafter for small, verifiable edits, paired with a stronger model for architecture, debugging and structured output.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-03
- Method: fresh public internet research (Benchmark Atlas `gpt-5-3-codex-spark` score page; Turing College "Codex 5.3 vs. Codex Spark", 2026-02-14; OpenAI and Cerebras launch posts, 2026-02-12). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
