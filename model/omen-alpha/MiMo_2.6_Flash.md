# Omen Alpha — findings by Mimo v2.6 Flash

- Source: undisclosed vendor (OpenCode stealth model) / Omen Alpha
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha (stealth coding model, "Omen Alpha (High)" reasoning config)
- **Short description:** OpenCode's anonymous stealth coding model added to the OpenCode Go subscription on 2026-09-04 — a fast, large-context coding worker (~180–190 tok/s community reports) presented with an endpoint instead of a model card. Vendor undisclosed; a briefly exposed `zhipu/omen-alpha` data path fuels GLM/Zhipu lineage speculation, officially unconfirmed (BuildFastWithAI review).
- **Provider / access:** OpenCode Go (`$10/month` managed plan) through an OpenAI-compatible chat-completions endpoint as `omen-alpha`; Tokenra API (listed token pricing); OpenCode Zen entry `opencode/omen-alpha`.
- **Release / knowledge:** 2026-09-04 (added to OpenCode Go; ModelBenchmark release date). Knowledge cutoff not published.
- **IDs:** `omen-alpha` (host `opencode-go` / Tokenra). No standalone Free ID verified — access is bundled in the paid Go subscription.
- **Context window:** 500,000 tokens input / 128,000 max output (Pi model metadata via BuildFastWithAI; ModelBenchmark).
- **Modalities:** text, image in; text out; reasoning yes (effort levels incl. High — the benchmarked config); tool calls: used inside OpenCode's agentic coding product, but no independent tool-accuracy benchmark found; JSON mode: not verified.
- **Pricing (as of 2026-09-26):** $0.20 / 1M input, $0.66 / 1M output, $0.04 / 1M cache read (Tokenra listing; ModelBenchmark host table); typical access via OpenCode Go at $10/month (~11,600 requests / 5h, ~29,000 / week, ~57,900 / month as service estimates). Privacy: Go privacy table lists no training use and 0-day retention.
- **Architecture:** proprietary; weights not released; vendor undisclosed (GLM-family is a community hypothesis only).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0/2.1, Tau2/Tau3, GDPval-AA, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR / MLCR, CritPt, Artificial Analysis Intelligence Index, AA-Omniscience: no verified public score found.

Coding:

- OpenCode leaderboard coding evaluation (snapshot 2026-09-04, Omen Alpha (High)): **23.14 / 40** total, **rank #15** — project rubric scores: CSV import (PHP) 4/5, Offline sync (PHP) 3.5/5, Bank feed (Dart/Flutter) 2.7/5, Shipping quotes (Go) 3/5; code-quality component **9.94/20**; avg $0.03 and 01:51 per prompt (omenalpha.io transcription of the OpenCode snapshot).
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE / Coding Index: no verified public score found (ModelBenchmark cites Epoch AI/SWE-bench/LiveBench/Aider as data sources but publishes no omen-alpha rows).

Long context:

- 500K window / 128K max output (Pi metadata; ModelBenchmark); MRCR / RULER: no verified public score found.

Other evidence: ~180–190 tok/s sustained (community reports via BuildFastWithAI); ~39B recent tokens, ~2,900 unique users, 7,518 completed sessions (OpenCode data snapshot).

### Normalized scores (1–100)

- **Tool use: 45/100.** Runs inside OpenCode's agentic coding harness, yet no Terminal-Bench/τ/GDPval/Claw-Eval number exists — mid-low score on product signals only, never on invented numbers.
- **Reasoning: 50/100.** Reasoning effort (incl. the benchmarked High config) is confirmed, but with zero public GPQA/HLE/Intelligence Index evidence for a stealth model the score stays at neutral mid.
- **Context window: 88/100.** Verified 500K lands in the 500K–1M tier (85–94); no measured retrieval at that depth keeps it below the ≥1M tier.
- **Multimodal: 65/100.** Text + image input with text only out — the standard image-in band (60–70); no audio/video in or non-text out.
- **Coding: 60/100.** The OpenCode leaderboard snapshot (23.14/40, rank #15, code quality 9.94/20) shows solid real-project coding at mid-band, but the absence of SWE-bench Verified / LiveCodeBench / SciCode numbers caps it there.
- **Cost efficiency: 95/100.** $0.20/$0.66 per 1M with $0.04 cache reads sits just above the ~$0.10/$0.20 ≈ 97–99 anchor, and the $10/month Go bundle (tens of thousands of requests) makes it one of the cheapest high-volume coding workers available.
- **Overall Score: 62/100.** Half-up mean of Tool 45, Reasoning 50, Context 88, Multimodal 65, Coding 60 = 61.6. Best fit: high-volume, low-cost coding-agent throughput on OpenCode Go where vendor identity does not matter; escalate for verified reasoning/frontier work.

---

## Signature

- Provided by: **Mimo v2.6 Flash (Xiaomi/MiMo-V2.6-Flash)** — 2026-09-26
- Method: fresh public web research (omenalpha.io OpenCode snapshot, ModelBenchmark specs/lifecycle, BuildFastWithAI review, OpenCode data pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

