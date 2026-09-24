# Grok 4.5 — findings by GLM 5.3 Flash

- Source: xAI / SpaceXAI (`grok-4.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI/SpaceXAI's July 2026 coding-focused flagship, jointly trained with Cursor and repositioned around agentic coding and knowledge work; superseded by Grok 4.6 in August 2026 but still API-available. Its clearest wins are price and token efficiency (~4.2x fewer output tokens than Opus 4.8 on SWE-Bench Pro).
- **Provider / access:** SpaceXAI API (`grok-4.5`, OpenAI-compatible endpoint at `https://api.x.ai/v1`, Chat Completions); launched inside Cursor on all plans and in Grok Build; apps via SuperGrok Lite $10/mo and above. Not available in the EU at launch. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-08; superseded 2026-08-12 by Grok 4.6; knowledge cutoff not disclosed.
- **IDs:** `grok-4.5` (xAI API). No Free ID on Zen.
- **Context window:** 500,000 total tokens (down from Grok 4.3's 1M; verified via xAI materials); higher rate applies above 200K input tokens.
- **Modalities:** text and image input; text output; native video input dropped (regression vs Grok 4.3); reasoning yes at "high" effort by default and cannot be disabled; tool calls; JSON mode via API.
- **Pricing (as of 2026-09-24):** $2.00 / $6.00 per 1M in/out; cached input $0.50 per 1M (75% discount). Paid only — no free API tier.
- **Architecture:** ~1.5 trillion parameters (Musk-reported, not officially confirmed); proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (SpaceXAI vendor harness; beats Opus 4.8's 78.9%, trails Fable 5's 84.3%)
- Terminal-Bench Hard, Tau3-Banking, GDPval-AA, MCPAtlas, Claw-Eval: no verified public score found
- Artificial Analysis agentic components: ~14,000 output tokens per Intelligence Index task (~60% fewer than Opus 4.8), corroborating token-efficiency

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **~54 (ranked 5th)** on the launch-era scale; **39 (38th of 200, $1.04/task)** on the re-based v4.3 scale of 7 Sep 2026 (Artificial Analysis; both readings dated)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-Bench Pro: **64.7%** (SpaceXAI vendor harness; trails Opus 4.8's 69.2% and Fable 5's 80.4%)
- DeepSWE 1.0: **62.0%** (beats Opus 4.8's 55.75%; Fable 5 leads at 66.1%)
- DeepSWE 1.1: **53%** (trails Opus 4.8's 59% and Fable 5's 70%)
- SWE-bench Verified: no verified public score found (not disclosed by xAI; Opus 4.8 88.6%, Fable 5 95.0% in the same table)
- LiveCodeBench, SciCode, Vibe Code Bench: no verified public score found
- Output efficiency: average **15,954 output tokens** per SWE-Bench Pro task vs Opus 4.8's 67,020 — about 4.2x fewer (SpaceXAI)

Long context:

- No long-context retrieval value verified (500K window claimed; higher rate above 200K input; no MRCR/RULER value found)

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 83.3% (beats Opus 4.8) is a strong agentic result; missing Tau3/GDPval/Claw-Eval numbers and vendor-only harness sourcing keep it under 90.
- **Reasoning: 82/100.** AA Intelligence Index ~54 (5th) at launch is high-mid and 39 on the re-based scale; no GPQA/HLE individual numbers found, which caps the score below the frontier tier.
- **Context window: 88/100.** 500K tokens maps to the 500K–1M tier (85–94); the 200K cost cliff and no measured retrieval keep it below the 1M models.
- **Multimodal: 65/100.** Text + image input only, text output, no video (dropped vs Grok 4.3) — per methodology the image-in band is 60–70.
- **Coding: 84/100.** SWE-Bench Pro 64.7%, DeepSWE 1.0 62.0% and TB2.1 83.3% are solid mid-frontier; SWE-bench Verified undisclosed and DeepSWE 1.1 trailing by 6 points prevent 90+.
- **Cost efficiency: 90/100.** $2/$6 per 1M with 75% cache discount and ~4.2x fewer output tokens per resolved coding task than Opus 4.8 — above the $1.25/$4.25 = ~88 methodology reference on quality-per-dollar.
- **Overall Score: 81/100.** Mean of the five quality dims (85 + 82 + 88 + 65 + 84) / 5 = 80.8 → 81. Best-fit: cheap, token-efficient high-volume agentic coding where peak capability is not the priority.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (theairankings.com model page with SpaceXAI and Artificial Analysis data, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.md`, using the same headings.
