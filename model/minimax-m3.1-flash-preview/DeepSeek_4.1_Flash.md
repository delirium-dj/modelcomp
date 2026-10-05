# MiniMax M3.1 Flash Preview — findings by DeepSeek 4.1 Flash

- Source: MiniMax/MiniMax M3.1 Flash Preview (`MiniMax-M3.1-Flash-Preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** Preview-tier multimodal coding model from MiniMax, released 2026-09-27 as the fast sibling of the MiniMax M3 flagship; positioned for agentic reasoning, tool use and long-context coding, with always-on adaptive thinking.
- **Provider / access:** MiniMax (proprietary, closed weights). API id `MiniMax-M3.1-Flash-Preview`; available only through MiniMax Code (desktop/web) and the Token Plan — no standalone pay-as-you-go API and no third-party routers as of 2026-10-05. No OpenCode Zen ID.
- **Release / knowledge:** Released 2026-09-27. Knowledge cutoff undocumented.
- **IDs:** `MiniMax-M3.1-Flash-Preview`; no Zen Free ID (`noFreeId: true` correct).
- **Context window:** 1,000,000 tokens total with 512,000 max output (models.dev catalogue / MiniMax API docs via ThreatFrontier).
- **Modalities:** Text, image and video in; text out. Reasoning always on — disabling thinking or `effort: "none"` returns HTTP 400; five effort levels `low|medium|high|xhigh|max`, default `max`. Tool use / JSON output.
- **Pricing (as of 2026-10-05):** No public per-token price. Plan-only: MiniMax Code / Token Plan subscription; MINIMAX offered unlimited M3.1 Flash in MiniMax Code from 2026-10-01 to 2026-10-07 to subscribers. Pay-as-you-go price table lists M3/M2.x only.
- **Architecture:** Decoder-only, proprietary; parameter count for M3.1 undisclosed. Do not reuse M3's 428B/23B figures — MiniMax published no M3.1 model card.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (BenchLM has no source-displayable rows)

Coding:

- KingBench 3 (AICodeKing independent, 8 build-from-scratch tasks, scored /10 each, run 2026-09-28): **53/80 = 66.25%** (best in run: Claude Opus 5.5 at 93.75%)
- KingBench 3 task breakdown: 3D folding-table **9/10** (smooth animated geometry); elevator simulation **3/10** (crashed on load — position value called as a function); archery game **4/10** (targets misplaced, timer paused between shots)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found. (A circulating "73.8% SWE-bench Verified", "165 tok/s" and "$0.10/M input" are untraceable to a primary source and explicitly not used.)

Long context:

- No long-context retrieval (RULER/MRCR/LCR) reported for this ID.

### Normalized scores (1–100)

> Low-confidence: only one independent benchmark (KingBench 3) exists for this ID. Non-coding dimensions are scored provisionally from documented specs and the coding signal, not from benchmark tables.

- **Tool use: 60/100.** Positioned and shipped for agentic coding/tool use with native JSON output, but zero verified tool-use benchmarks exist; capped low rather than assumed strong.
- **Reasoning: 62/100.** Always-on adaptive thinking across five effort levels signals a deliberate reasoning model, but GPQA/HLE/Index are all unreported, so it is held in the mid band pending evidence.
- **Context window: 92/100.** 1M-token context with 512K max output is documented by MiniMax's API docs, placing it in the ≥1M band; no retrieval evidence (RULER/MRCR) at depth, so it does not reach the 98%-retrieval 100 score.
- **Multimodal: 78/100.** Documented text + image + video input with text output sits in the +video band; no MMMU/vision benchmarks and no audio/non-text output, so the low end of that band.
- **Coding: 68/100.** KingBench 3 66.25% is the only verified figure — strong 3D geometry (9/10) but weak interactive/stateful builds (3/10, 4/10) and 27 points behind the run's best; consistent with an upper-mid coding score.
- **Cost efficiency: 62/100.** No public per-token rate and no free tier: access is bundled into MiniMax Code / Token Plan, with only a limited-time (Oct 1–7, 2026) unlimited-use promo for subscribers; unquantifiable per-token value keeps it mid-band.
- **Overall Score: 72/100.** Mean of (60 + 62 + 92 + 78 + 68) / 5 = 72.0 → **72**. Best-fit: large-repository and long-agent-session reading with image/video context, in a side-by-side trial rather than production until MiniMax publishes benchmark and price data.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-05
- Method: public internet research (ThreatFrontier analysis of AICodeKing's independent KingBench 3, MiniMax API docs, models.dev, LLM Reference); scores are normalized 1–100 interpretations with one verified benchmark, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
