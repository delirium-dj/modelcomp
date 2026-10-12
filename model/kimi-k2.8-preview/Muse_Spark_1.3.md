# Kimi K2.8 Preview — findings by Muse Spark 1.3 Contributor

- Source: Moonshot AI/Kimi K2.8 Preview, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-12 (UTC) — second-pass refresh (prior Signature 2026-09-18, amended 2026-09-27: preview rollout facts recorded, 78 held; new: HokAI Oct 10 2026 verdict — Sept 11 rollout confirmed, still zero published benchmarks, K3 GPQA 93.5% fenced as non-transferable)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview (Moonshot AI mid-tier preview)
- **Short description:** Moonshot AI's mid-tier coding and agentic preview inside Kimi Code (near-K3 performance, above K2.7 Code), with 1M context and low/high/max thinking (max default); weights closed. No independent benchmark evidence published yet.
- **Provider / access:** Moonshot AI via Kimi Code + Kimi API (`moonshot/kimi-k2-8-preview`); membership plan, no Zen Free ID (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-09-11 preview rollout at the shared `kimi-for-coding` model ID (replacing K2.7 Code, no client change needed); knowledge cutoff undisclosed.
- **IDs:** `moonshot/kimi-k2-8-preview` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1,048,576 (1M) / 32,768 out — verified via curated repo metadata + models.dev (amended 2026-09-27)
- **Modalities:** text, image, video in; text out; reasoning yes (low/high/max efforts, max default); tool calls yes
- **Pricing (as of 2026-10-12):** No per-token price — Kimi membership quota (Plus and up on new plans; Andante and up on legacy); Extra Usage billed in RMB after quota; $1/$4 sheet was single-source and superseded (HokAI verdict Oct 2026); no Zen Free ID
- **Architecture:** proprietary MoE (mid-tier; params undisclosed)

### Raw benchmarks found

> Compared against prior findings (2026-09-18/27, Overall 79): HokAI verdict (Oct 10 2026) re-checked 2026-10-12 — still ZERO published benchmarks for this checkpoint (no AA page; vendor's only claim remains qualitative "close to K3"); K3's GPQA 93.5% fenced as non-transferable. New verified context: Sept 11 rollout at shared model ID, max-default effort (K3 defaults high), no-thinking fast-path role, 4x context vs highspeed route, closed weights (unlike open K2.7 Code), RMB Extra Usage, data-retention policy unpublished. Scores held — no new scored evidence.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (closest proxy as provisional: mid-tier Kimi Code positioning between K2.7 Code and K3, vendor lineup claim; K3's 93.5% GPQA is a K3 figure and does not transfer — HokAI Oct 2026)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **1M window verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 74/100.** Mid-tier Kimi Code agent positioning; capped by zero public harness numbers and below flagship K3.
- **Reasoning: 74/100.** Efficient reasoning between K2.7 and K3; capped accordingly.
- **Context window: 100/100.** 1M verified; top tier.
- **Multimodal: 70/100.** Text/image/video in, text out; capped with no measured vision bench and text-only output.
- **Coding: 76/100.** Mid-tier coding inside Kimi Code; capped below K3 flagship coding.
- **Cost efficiency: 72/100.** Membership-quota access (no per-token line; RMB Extra Usage) with no Zen route — revised down from 75: the $1/$4 sheet was single-source and the $0.00 route unconfirmed (HokAI Oct 2026).
- **Overall Score: 79/100.** Mean of the five non-cost dims (74+74+100+70+76)/5 = 78.8; best-fit mid-tier Kimi Code coding pick.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-12
- Method: second-pass refresh of the 2026-09-18 report (amended 2026-09-27): fresh public internet research (HokAI K2.8 Preview verdict Oct 2026 — rollout, lineup, membership pricing, benchmark absence confirmed); scores held: scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
