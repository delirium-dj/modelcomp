# Muse Spark 1.3 Max — findings by Qwen 3.8 27B

- Source: meta/muse-spark-1.3 (max reasoning effort), e.g. OpenRouter `meta/muse-spark-1.3`; OpenCode Zen `opencode/muse-spark-1.3-max`
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Max
- **Short description:** Meta's Muse Spark 1.3 run at the **max** reasoning effort — a tier alias of `meta/muse-spark-1.3` (same weights, different effort setting), not a separate model. Multimodal reasoning model from Meta for long-running agentic, multi-agent, and coding workflows; Artificial Analysis tracks it separately as "Muse Spark 1.3 (max)".
- **Provider / access:** OpenRouter `meta/muse-spark-1.3` (canonical slug `meta/muse-spark-1.3-20260902`) with `reasoning_effort=max`; OpenCode Zen `opencode/muse-spark-1.3-max`; first-party Meta API. Responses-style tool calling, structured outputs, reasoning-effort control.
- **Release / knowledge:** released September 2, 2026 (Artificial Analysis FAQ; OpenRouter canonical slug `20260902`); knowledge cutoff not published.
- **IDs:** `meta/muse-spark-1.3` (same underlying model at max effort; the separate `muse-spark-1.3-xhigh` listing tracks the xhigh effort). No distinct model ID for the Max tier.
- **Context window:** 1,048,576 total tokens (~1M); 943,718 max output (OpenRouter API `context_length`/`max_completion_tokens`, confirmed by Artificial Analysis "1M" spec).
- **Modalities:** text, image, video, and file input; text out (OpenRouter `text+image+file+video->text`); reasoning supported with effort levels (default medium; this entry = max); tool calls + structured outputs.
- **Pricing (as of 2026-10-03):** $1.25 in / $4.25 out / $0.15 cached read per 1M on OpenRouter (matches Meta first-party API per AA); web search $2.50/1M; $1.60 per AA Intelligence Index task.
- **Architecture:** proprietary; parameter count not disclosed by Meta.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / Tau2: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Design Arena (OpenRouter-published arena stats): agents/fullstack Elo 1311, win rate 60.8%, rank 3; agents/webapps Elo 1289, win rate 56.5%, rank 2; agents/mobileapps Elo 1212, win rate 45.0%, rank 13; agents/python-pptxslides Elo 1244, win rate 51.4%, rank 10

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME: no verified public score found individually
- LCR / MLCR / CritPt: no verified public score found individually
- Artificial Analysis Intelligence Index: **48** (#23/224; median 26 for the similar price tier — AA model page "Muse Spark 1.3 (max)", 2026-10-03). The xhigh-effort sibling tracks at 45.
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found
- Design Arena (OpenRouter-published): models/3d Elo 1411, win rate 64.2%, rank 2; models/gamedev Elo 1354, win rate 56.1%, rank 4; models/codecategories Elo 1359, win rate 57.9%, rank 3; models/dataviz Elo 1334, win rate 56.8%, rank 8

Long context:

- 1M window; no MRCR/RULER retrieval numbers published separately for this exact listing (AA class comparison only).

Performance (non-intelligence, verified):

- Output speed 123.5 tok/s (#30/224 on AA; median 74.4 for the price tier); time-to-first-token 52.46s at max effort (median 3.94s — the max tier trades latency for capability); 170M output tokens on the Intelligence Index (very verbose vs 81M median).

### Normalized scores (1–100)

- **Tool use: 82/100.** Top-5 Design Arena agent results (fullstack 60.8% win rate rank 3, webapps rank 2) plus a 48 AA Intelligence Index that weights agentic evaluations; no Terminal-Bench 2.1 or Tau score verified, which keeps it just short of the top band.
- **Reasoning: 85/100.** AA Intelligence Index 48 (#23/224) is well above the 20–35 band that maps to 55–65 and far above the price-tier median of 26; max-effort setting yields the strongest measured variant of the model (xhigh: 45).
- **Context window: 96/100.** Verified 1,048,576-token window with ~944K max output (OpenRouter API + AA spec) — the ≥1M tier (95–100).
- **Multimodal: 85/100.** Text + image + video + file input, text out (OpenRouter metadata + AA spec); the video/file input places it in the top of the 75–90 multimodal band.
- **Coding: 78/100.** Strong Design Arena code-category results (3d rank 2, codecategories rank 3, gamedev rank 4) and agentic fullstack/webapps top-5, but no SWE-bench Verified/Pro, LiveCodeBench, or SciCode numbers verified for this exact listing, capping the dimension.
- **Cost efficiency: 75/100.** $1.25 in / $4.25 out per 1M (cache read $0.15) — well under the $3/$15 reference point (~60) and far from the ~$0.10/$0.20 near-free band (97–99), but max-effort verbosity (170M tokens on the AA index) makes real cost per task $1.60.
- **Overall Score: 85/100.** Mean of 82, 85, 96, 85, 78 = 85.2, rounded half-up to 85. Best fit: long-horizon agentic and multi-agent coding workflows, video/file-heavy multimodal analysis, and 1M-context jobs where max-effort latency (52s TTFT) is acceptable — use lower effort tiers for latency-sensitive turns.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-10-03
- Method: public internet research (OpenRouter API model + endpoint metadata incl. Design Arena stats, Artificial Analysis model page + LLM leaderboard snapshot of 2026-10-03 — all fetched 2026-10-03); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
