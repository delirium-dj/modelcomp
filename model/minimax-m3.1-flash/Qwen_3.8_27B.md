# MiniMax M3.1 Flash Preview — findings by Qwen 3.8 27B

- Source: MiniMax/MiniMax M3.1 Flash (`MiniMax-M3.1-Flash-Preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash (Preview)
- **Short description:** MiniMax's newest M-series model — per the platform docs, a "frontier multimodal coding model with 1M context window and tunable thinking depth" — shipped as a staged grey-rollout preview inside MiniMax Code and the Token Plan on 2026-09-27, before any announcement, model card, benchmark table, price or open weights. Previously discovered by the community as the free "Space Bunny Alpha" stealth model on OpenRouter days before launch.
- **Provider / access:** MiniMax platform only, via Anthropic-compatible endpoint `https://api.minimax.io/anthropic` (recommended; thinking blocks) and OpenAI-compatible `https://api.minimax.io/v1`; gated to the Token Plan and MiniMax Code (supported clients: Claude Code, Cursor, Codex CLI). No OpenCode Zen Free ID found; not on the pay-as-you-go table.
- **Release / knowledge:** released 2026-09-27 (MiniMax platform docs via eesel.ai review, 2026-09-28); knowledge cutoff not disclosed.
- **IDs:** `MiniMax-M3.1-Flash-Preview` (MiniMax platform model ID). No free/Zen ID found.
- **Context window:** 1,000,000 tokens (MiniMax platform docs; a 5x jump over the 204,800-token M2 family — verified against docs, no input/output split published)
- **Modalities:** Text, image, video in; text out (platform docs). Reasoning: always on, tunable via `effort` = low/medium/high/xhigh/max (default `max`); cannot be disabled — `effort: "none"` / `thinking: disabled` returns HTTP 400 "requires adaptive thinking". Tool calls: yes (docs target agentic reasoning, tool use, structured task execution).
- **Pricing (as of 2026-09-28):** no published per-token price; subscription-only via Token Plan — Plus $20/mo (~1.7B M3-equivalent tokens), Max $50/mo (~5.1B), Ultra $120/mo (~12.5B), plus prepaid credits ($5/5K … $100/100K, valid 1 year); rolling 5-hour + weekly quota windows; no free LLM tier. Reference point: 1M-context sibling M3 pay-as-you-go is $0.30/$1.20 per 1M (≤512K input; $0.60/$2.40 above; cache read $0.06/$0.12).
- **Architecture:** not disclosed for this checkpoint (no parameter count, no model card, no open weights, no Hugging Face card as of 2026-09-28). M3-generation MiniMax Sparse Attention (MSA) design is the likely basis for the practical 1M window — inherited, unverified for M3.1 Flash. Community day-one decode measurement: ~90–110 t/s (faster than MiMo-V2.6-Flash, slower than DeepSeek V4.1-Flash, per X post via eesel.ai).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (BenchLM: "no source-displayable benchmark rows yet")
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- KingBench 3 (community coding benchmark, 8 generation tasks: elevator sim, 3D contact lens case, folding table, panda SVG, archery game, math problem, local Gemma fine-tune, 3D watch): **66.25% (53/80)** — AICodeKing hands-on test via daily.dev, 2026-09-28; same suite: M3 31.25%, Claude Opus 5.5 93.75%, GPT-6 Sol 82.5%
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M window per platform docs; no long-context retrieval (MRCR/RULER) reported

Negative-findings notes:

- Vendor performance claims are qualitative only ("fast, reliable everyday development"; benchmarks promised "numbers dropping soon" per community, not yet published as of 2026-10-01).
- The only quantified public number found is the single community KingBench 3 run above (n=8 tasks; results inconsistent — e.g. elevator sim 3/10 and archery game 4/10 vs folding table 9/10). Treat all scores below as provisional.
- The "Space Bunny Alpha" free stealth model on OpenRouter days before launch was identified by the community as this same checkpoint — that free window is not part of the official offer.

### Normalized scores (1–100)

- **Tool use: 62/100.** No verified public tool-use benchmark found (no TB2.1/Tau3/GDPval/OSWorld numbers); provisional from platform-docs positioning for agentic reasoning/tool use plus the Anthropic-compatible thinking-blocks API — capped by the total absence of measured tool-call evidence.
- **Reasoning: 65/100.** No GPQA/HLE/AA Index number published; always-on reasoning with a 5-level effort dial (default max) and day-one reports of "pretty good" output are provisional evidence only — capped until independent reasoning scores exist.
- **Context window: 95/100.** 1,000,000-token documented window lands in the >=1M tier (95–100); no 512K+ retrieval measurement published, so it does not reach 100.
- **Multimodal: 80/100.** Documented text + image + video input (top of the 75–90 "+video in" band per methodology), text out; held below the band's top because input quality is unverified by any published eval.
- **Coding: 68/100.** KingBench 3 at 66.25% is a large +35-pt jump over M3 but a small, inconsistent community harness (two tasks scored 3–4/10) and not SWE-bench-class evidence; "frontier multimodal coding" docs claim is positioning, not proof — capped by the single weak benchmark.
- **Cost efficiency: 75/100.** No per-token price and no free LLM tier (Token Plan $20–$120/mo, ~1.7B–12.5B M3-equivalent tokens; the transient free "Space Bunny Alpha" window is not an official offer). Subscription economics are attractive at heavy use, but unverified per-token cost keeps it below the paid $0.30/$1.20-tier 90 reference.
- **Overall Score: 74/100.** Mean of (62 + 65 + 95 + 80 + 68)/5 = 74. Best fit: a fast, big-context multimodal everyday coding/agent model for teams already on a MiniMax Token Plan — not a documented choice for high-stakes or benchmark-driven procurement until MiniMax publishes the promised benchmark table and per-token pricing.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (MiniMax platform docs via eesel.ai review 2026-09-28, daily.dev/AICodeKing KingBench 3 test 2026-09-28, BenchLM spec page, SaaSCity/TokenPlan docs, community X reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `M3_1.md`, using the same headings.
