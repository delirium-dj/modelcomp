# Kimi K2.6 — findings by Mimo v2.6 Flash

- Source: Moonshot AI (`kimi-k2.6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight 1T-parameter MoE agentic flagship released April 2026, built for long-horizon coding and multi-agent ("Agent Swarm", up to 300 sub-agents) workflows. Not a variant of another entry here — K2.5 is its predecessor and Kimi K2.7 Code is a separate coding-tuned sibling.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.6` (Chat Completions API); Moonshot AI / Kimi API (`platform.kimi.ai`, `kimi.com`); third-party hosts DeepInfra, Fireworks, Novita, Together (llm-stats provider table). Open weights downloadable for self-hosting.
- **Release / knowledge:** 2026-04-20 (Kimi tech blog) / 2026-04-21 (AI Release Tracker); knowledge cutoff 2024-10 (models.dev `kimi-k2.6.toml`).
- **IDs:** `opencode/kimi-k2.6` on Zen — **no Free ID exists** (Zen's public `/zen/v1/models` list, checked 2026-09-29, contains `kimi-k2.6` but no `kimi-k2.6-free`); Moonshot API id `kimi-k2.6`.
- **Context window:** 262,144 tokens total, 65,536 max output (models.dev `kimi-k2.6.toml` limits; official blog footnote states all runs used 262,144-token context). AI Release Tracker lists "256k" — treat 262,144 as the verified figure.
- **Modalities:** text, image, video in; text out; reasoning yes (toggleable, `reasoning_content` field); tool calls yes; JSON mode not listed in the models.dev capability flags — no verified public confirmation found.
- **Pricing (as of 2026-09-29):** $0.95 / $4.00 per 1M input / output, $0.16 cached input (models.dev Zen entry; same rates verified against Moonshot's pricing page on 2026-08-18 by AI Release Tracker). Cheapest tracked host DeepInfra $0.75 / $3.50 (llm-stats). Paid only — no free tier, so no free-tier privacy caveat applies.
- **Architecture:** 1T total parameters, MoE, open weights (Modified MIT License per llm-stats; AI Release Tracker labels it open-weight). Training data / code not fully released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (Kimi official blog benchmark table; evals.report marks it Verified, 2026-04-20)
- Terminal-Bench 2.1: no verified public score found
- τ²-bench (Telecom): **95.9% pass^1** (evals.report, Official, 2026-04-20)
- Tau3-Banking / Tau2-Bench: no verified public score found (the τ² Telecom figure above is the only tau-variant number located)
- GDPval: **1481 Elo** (evals.report, Official, 2026-04-20)
- OSWorld-Verified: **73.1% task success** (BenchLM via AI Release Tracker; evals.report lists OSWorld 73.1% as Unverified)
- BrowseComp: **83.2%** (BenchLM via AI Release Tracker) — web-research agent task with search/code-interpreter/browsing tools (Kimi blog footnote 3)
- CursorBench: **47.6%** (evals.report, Official)
- FrontierSWE: **27% dominance score** (evals.report, Official)
- Claw-Eval / ClawProBench: no verified public score found (Kimi ran an internal "Claw Bench v1.1"; no public numbers)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (AI Release Tracker, lab-sourced); evals.report tracks **90.8%** Official, while Kimi's own benchmark table shows **88.4%** — three published variants, harness-dependent
- HLE: **29.9%** full set (evals.report, Official); Kimi blog footnote 2 reports **36.4%** text-only without tools and **55.5%** text-only with tools; BenchLM reports 34.7% with tools (via AI Release Tracker)
- AIME 2026: **95.83%** (evals.report, Official); Kimi's own table shows 93.3%
- AIME (OTIS Mock): **96.1%** (evals.report, Official)
- LiveBench: **72.17** score (evals.report, Official)
- FrontierMath: **38.97%** accuracy; FrontierMath Tier 4: **14.6%** (evals.report, Official)
- IFBench: **76.0%** (evals.report, Official)
- SimpleQA Verified: **38.7%** (evals.report, Official)
- Artificial Analysis Intelligence Index: **53.9** (evals.report, Unverified)
- Epoch Capabilities Index: **151.6** (evals.report, Official)
- AA-Omniscience index: **6** (evals.report, Official)
- Vectara Hallucination Leaderboard: **10.8% hallucination rate** (evals.report, Official)
- BullshitBench v2: **65%** (AI Release Tracker)
- LCR / MLCR, CritPt: no verified public score found

Coding:

- SWE-bench Verified: **80.2%** (AI Release Tracker, lab-sourced); evals.report tracks **76.7%** Official (2026-04-20) — both published, harness differs (Kimi used an in-house SWE-agent adaptation, 10-run average, per blog footnote 4)
- SWE-bench Pro: **58.6%** (Kimi official blog benchmark table; +7.9 over K2.5's 50.7)
- LiveCodeBench: **89.6%** (BenchLM via AI Release Tracker)
- DeepSWE: **23.89% resolved** (evals.report, Official) — far below its SWE-bench numbers, single-harness outlier
- SciCode: **53.5%** (evals.report, Unverified)
- Vibe Code Bench: **37.89% overall accuracy** (evals.report, Verified)
- WebDev Arena: **1518 Elo** (evals.report, Verified); 1513 Elo per AI Release Tracker
- Next.js Evals (Vercel): **52%** (AI Release Tracker)
- WeirdML: **55.9%**, GBA Eval: **0.9%** (evals.report, Official)
- SWE-Multilingual: listed in the Kimi blog table but no number captured — no verified public score found

Long context:

- No long-context retrieval metric (MRCR / RULER / GraphWalks) published for K2.6 — no verified public score found. Window itself is verified at 262,144 tokens; the official blog claims "significant leap in long-context tasks" in enterprise tests without publishing a retrieval number.

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-bench 95.9% and GDPval 1481 are near-frontier, but Terminal-Bench 2.0 at 66.7% sits well below the ~88% frontier reference and no TB 2.1 or Claw-Eval number exists, which caps the score.
- **Reasoning: 88/100.** GPQA 90.5% clears the frontier reference and AIME 2026 95.8% / LiveBench 72 are elite, but HLE full-set 29.9% and AA Intelligence Index 53.9 both fall short of the 40% / 60+ frontier refs.
- **Context window: 75/100.** 262,144 tokens lands in the 200K–500K tier (65–84, 200K = 70); no published retrieval accuracy at that length to justify the top of the tier, and 65,536 max output is healthy.
- **Multimodal: 78/100.** Text + image + video input with text output (models.dev modalities) puts it in the 75–90 "+video/PDF in" band; no audio input and no audio/non-text output keeps it below 90. CharXiv 86.7% (evals.report, Unverified) supports solid vision comprehension.
- **Coding: 90/100.** SWE-bench Verified 80.2%, SWE-bench Pro 58.6%, LiveCodeBench 89.6% and WebDev Arena 1518 are all frontier-class for open weights; DeepSWE 23.89% and Vibe Code Bench 37.89% are the figures that keep it from the mid-90s.
- **Cost efficiency: 89/100.** Paid-only at $0.95/$4.00 (cache $0.16) per 1M on Zen — between the ~$0.60/$2.20 (≈92) and ~$1.25/$4.25 (≈88) methodology anchors; $0.75/$3.50 at DeepInfra is the cheapest tracked route. No Free ID, so it cannot score 100.
- **Overall Score: 83/100.** Mean of the five quality dims (85 + 88 + 75 + 78 + 90) / 5 = 83.2 → 83. Best fit: the strongest paid open-weight pick for long-horizon agentic coding and multi-step tool work, when a free tier isn't required.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-09-29
- Method: public internet research (Kimi official tech blog, evals.report, AI Release Tracker, llm-stats, models.dev/OpenCode Zen registry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
