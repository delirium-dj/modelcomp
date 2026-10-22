# GPT 5.3 Codex Spark — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.3-Codex-Spark (`gpt-5.3-codex-spark`; Cerebras-served research preview)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-03); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`gpt-5-3-codex-spark`) carries only **1 row** (MazeBench 0%) and assigns **no overall score**; no new independent benchmark surfaced and the 2026-10-11 deep-pass rows stand. **No score change.**

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources). Re-checked against the OpenAI launch post (2026-02-12), the Cerebras launch note (2026-02-12), Turing College's speed-vs-intelligence teardown (2026-02-14), CometAPI's Spark-vs-Codex analysis (updated 2026-09-03), OrcaRouter's retirement write-up (2026-08-18), Benchmark Atlas, Pi's model card, and BenchLM (updated 2026-10-12). No dimension moved: the launch facts (128K, text-only, 1,000+ tok/s, distilled sibling of GPT-5.3-Codex) and the weak spots (unreliable tool-call formatting, drift after 6–8 steps, ~56% SWE-Bench Pro vs the sibling's ~72%) all held. Two conflicts surfaced: (a) BenchLM lists a **256K** window against the official/Pi **128K**; (b) third-party trackers (Pi, OrcaRouter) print **$1.75/$14**, but OpenAI never published a public API price and OrcaRouter calls that tracker figure fiction. Official 128K and "no public price" win; scores unchanged. The model is now retired per an OpenAI executive statement (2026-09-11).

## Model card

- **Name:** GPT-5.3-Codex-Spark (GPT-5.3-Codex-Spark)
- **Short description:** A distilled, Cerebras-accelerated variant of OpenAI's GPT-5.3-Codex, purpose-built for low-latency real-time coding at 1,000+ tokens/second. Shipped as a ChatGPT Pro research preview and now retired (exec statement 2026-09-11, pulled the week of 2026-09-14) — OpenAI pointed users to GPT-5.3-Codex / GPT-5.6 Sol for new work. A fast drafter, not a frontier reasoner.
- **Provider / access:** OpenAI research preview via ChatGPT Pro (Codex app, CLI, VS Code extension); API access only to select design partners, never a general public endpoint. Served on Cerebras Wafer Scale Engine 3 (WSE-3). Repo tracks it as `opencode/gpt-5.3-codex-spark`; no OpenCode Zen Free ID.
- **Release / knowledge:** Released 2026-02-12 (research preview); retired week of 2026-09-14. Parent GPT-5.3-Codex released 2026-02-05. Knowledge cutoff not published.
- **IDs:** `gpt-5.3-codex-spark` (no general public API id; research-preview SKU).
- **Context window:** 128,000 tokens at launch; text-only. Max output not separately published (Pi lists 128K in / 128K out). BenchLM lists 256K — unresolved conflict, official 128K wins.
- **Modalities:** text in / text out. Tool calls and structured outputs claimed, but multiple reports flag unreliable tool-call formatting; no image/audio/video. OpenAI says multimodal input is a future direction, not present here.
- **Pricing (as of 2026-10-11):** **no verified public API price** — ChatGPT Pro research preview / design-partner API only. Third-party trackers (Pi, OrcaRouter) list $1.75/$14 (identical to GPT-5.3-Codex); OrcaRouter states this figure is fiction for a model with no public endpoint, and it is now moot after retirement.
- **Architecture:** proprietary distilled/pruned decoder-only coding model; throughput-optimized serving on Cerebras WSE-3. Same safety training as mainline models.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **58.4%** (Benchmark Atlas, `atlas.kevinhu.io/models/gpt-5-3-codex-spark`; independently echoed by CometAPI 2026-09-03 and OrcaRouter 2026-08-18 as the vendor-reported Spark figure, vs 77.3% for GPT-5.3-Codex)
- Voratiq Coding Agent Leaderboard: **1332** (Benchmark Atlas)
- Benchmark Atlas Capability index: **149.4** (Benchmark Atlas; previously logged 149.3)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Tool-call/structured-output reliability: reported unreliable on X / Turing College — JSON schemas missing fields, phantom parameters (qualitative).
- Working style: makes minimal, targeted edits and does **not** run tests unless explicitly asked (OpenAI launch post, 2026-02-12).

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- MRCR / RULER / GraphWalks: **no verified public score found**
- Reasoning depth: documented to **drift after 6–8 step plans** (Turing College, 2026-02-14), vs 12+ steps for GPT-5.3-Codex — qualitative.

Coding:

- SWE-Bench Pro (Public Dataset): **51.5%** (Benchmark Atlas) / **~56%** (Turing College, vs GPT-5.3-Codex ~72%; OpenAI's own parent-model figure is 56.8%)
- Terminal-Bench 2.0: **58.4%** (Benchmark Atlas; see Agent / tool use above)
- SlopCodeBench (Benchmark Atlas): Core Solved **29.1**, Isolated Solved **8.2**, CKPT Solved **3.1**, Problems Solved **0.0**, % AST-Grep **34.0**, % Cloned **8.6**, Erosion Mean **58.6**, Verbosity Mean **35.7**
- BuseyBench SVG: **3.0** (Benchmark Atlas)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Comparative: Cerebras (2026-02-12) says Spark beats GPT-5.1-Codex-mini on SWE-Bench Pro and Terminal-Bench 2.0 "in a fraction of the time"; Turing College's snake-game test (2026-02-14) produced a collision bug + memory leak where GPT-5.3-Codex was correct first pass.

Long context:

- 128K-token window (OpenAI, Pi, Turing College, CometAPI); BenchLM claims 256K (conflict). **No MRCR / RULER / GraphWalks retrieval score found**. Developers report context drift toward the end of the window on large codebases (Turing College).

Multimodal:

- Text-only in and out; no image/audio/video input or output (OpenAI, 2026-02-12 — multimodal input listed as future work).

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.0 58.4 sits mid-band (confirmed across Benchmark Atlas, CometAPI, OrcaRouter), but reports of broken JSON schemas, phantom parameters, and a default that skips test runs cap it below the 70s. No Tau3/GDPval-Claw-Eval data.
- **Reasoning: 50/100.** No GPQA/HLE; the distilled sibling dropped constraints after 6–8 steps in Turing College's testing, placing it below the mid band despite Benchmark Atlas Capability 149.4 (vs the frontier's 1750+ GDPval-style territory).
- **Context window: 55/100.** 128K (OpenAI/Pi/Turing/CometAPI) lands in the 100K–200K band (50–64), with context drift reported on large inputs. BenchLM's contradictory 256K would imply 65–84 but is outvoted by the primary sources.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 70/100.** SWE-Bench Pro 51.5–56% plus TB2.0 58.4 make it a capable rapid-edit coder far below GPT-5.3-Codex's 72%/77.3% and the 74%+ frontier coding bar; weak on multi-step/structured work.
- **Cost efficiency: 50/100.** No public per-token price was ever published (ChatGPT Pro research preview / design-partner API only); the $1.75/$14 seen on trackers is unverifiable and called fiction by OrcaRouter, so inverse-pricing cannot be computed — scored neutral.
- **Overall Score: 50/100.** Mean of the five quality dims (58 + 50 + 55 + 15 + 70) / 5 = 49.6 → 50. Best-fit: an ultra-fast drafter for small, verifiable edits, paired with a stronger model for architecture, debugging, and structured output — a role now served by Cerebras-served flagships after its retirement.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (≥3 independent sources: OpenAI launch post `openai.com/index/introducing-gpt-5-3-codex-spark/` 2026-02-12; Cerebras `cerebras.ai/blog/openai-codexspark` 2026-02-12; Turing College "Codex 5.3 vs. Codex Spark" 2026-02-14; CometAPI Spark-vs-Codex 2026-09-03; OrcaRouter retirement analysis 2026-08-18; Benchmark Atlas `atlas.kevinhu.io/models/gpt-5-3-codex-spark`; Pi model card `pi.dev/models/openai-codex/gpt-5-3-codex-spark`; BenchLM `benchlm.ai/models/gpt-5-3-codex-spark` 2026-10-12; OpenAI GPT-5.3-Codex appendix for the sibling baseline). Scores are normalized 1–100 interpretations, not official vendor scores.
- Conflicts on record: context window 128K (primary) vs 256K (BenchLM); pricing $1.75/$14 (Pi/OrcaRouter trackers) vs no public API price (OpenAI, and OrcaRouter's own "fiction" note); SWE-Bench Pro 51.5 (Benchmark Atlas) vs ~56 (Turing College).
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
