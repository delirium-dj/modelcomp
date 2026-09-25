# Grok Build 0.1 — findings by DeepSeek 4.1 Flash

- Source: xAI / Grok Build 0.1 (`x-ai/grok-build-0.1`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1 (also tracked as the `0616` snapshot; no "Free"-tier wording, paid only)
- **Short description:** xAI's fast, cheap, coding-tuned model built specifically for agentic software-engineering loops — the workhorse behind Grok Build's (and Cursor-style) interactive coding agents rather than a knowledge or long-context flagship. Text and image in, text out, 256K context.
- **Provider / access:** xAI's own API and OpenRouter `x-ai/grok-build-0.1`, plus first-party agent surfaces (Grok Build, Cursor). Chat Completions, tool calls, JSON mode, image/file input.
- **Release / knowledge:** released 2026-05-29 (Model Beat tracker); BenchmarkList also profiles a "Grok Build 0.1 0616" revision with its own measured rows. Knowledge cutoff not disclosed.
- **IDs:** `x-ai/grok-build-0.1` (OpenRouter) / `grok-build-0.1` on xAI's API. No OpenCode Zen Free ID and no free tier — cost is scored on paid pricing.
- **Context window:** 256,000 tokens with up to ~230,000 max output (tracker listing). Provider-listed capacity.
- **Modalities:** text, image and file input; text output; reasoning yes; tool calls; JSON mode. No audio or video input, no media output.
- **Pricing (as of 2026-09-25):** $1.00 / 1M input and $2.00 / 1M output; cached input $0.20 / 1M. A 2× tier ($2.00/$4.00) is also listed. No free tier.
- **Architecture:** proprietary; parameter count and weights undisclosed. Sold as a "fast coding model" (≈70 tok/s, 528 ms first token on OpenRouter's median routing).

### Raw benchmarks found

> Sources: BenchmarkList's measured-row profile for the `0616` snapshot (8
> benchmarks with percentile and rank), modelgrep (OpenRouter specs +
> Artificial Analysis-cited rows), Model Beat / themodelbeat.com (specs, release
> date) and the AI BENCHY leaderboard. Where a benchmark was not run, it is
> marked as not found rather than inferred.

Agent / tool use:

- Terminal-Bench 2.1: **52.1%** (65th percentile, rank 65 of 182)
- GDPval-AA: **1,212 Elo** (84th percentile, rank 55 of 340)
- Tau3-Banking: **13.4% pass@1** (56th percentile, rank 77 of 174) — weak for agentic banking-style workflows
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AI BENCHY practical suite: **rank #126 of 364** at medium effort (aibenchy.com snapshot 2026-09-24; score value not extractable from the leaderboard table, treated as rank-only)

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (91st percentile, rank 42 of 464)
- HLE: **38.3%** (93rd percentile, rank 34 of 466)
- Artificial Analysis Intelligence Index: **40.7** (86th percentile, rank 58 of 418)
- MMLU-Pro / AIME / CritPt / LCR / Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SciCode: **50.2%** (93rd percentile, rank 34 of 458; BenchmarkList's pairwise view has it +3.5 points over Qwen3.8 Flash — its largest measured lead)
- Terminal-Bench 2.1: **52.1%** (same run as above; counted here as a terminal-coding datapoint)
- SWE-bench Verified / SWE-bench Pro: **no verified public score found**
- LiveCodeBench / DeepSWE / Vibe Code Bench / CursorBench / Coding Index: **no verified public score found**
- Cost per task where published: Terminal-Bench 2.1 weighted cost **$0.14** per task, SciCode weighted cost **$0** per task (BenchmarkList) — cheap per attempt, not a quality score

Long context:

- AA-LCR: **70.0%** (78th percentile, rank 89 of 409) inside the 256K window; MRCR / RULER / GraphWalks: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 68/100.** GDPval-AA 1,212 Elo (84th percentile) and Terminal-Bench 2.1 52.1% are solidly mid-to-high for a coding-specialised model, and per-task costs are low ($0.14 on TB2.1). Capped by Tau3-Banking 13.4%, which shows narrow agentic range, and by the absence of any Claw-Eval, MCP-Atlas or Toolathon run.
- **Reasoning: 80/100.** GPQA Diamond 89.5% (91st percentile) and HLE 38.3% (93rd percentile) are near-frontier for a "fast coding" tier, with AA Intelligence Index 40.7 (86th percentile). No CritPt, MATH or omniscience data keeps it out of the mid-80s.
- **Context window: 75/100.** 256K lands in the 200K–500K band (65–84, 200K = 70), and AA-LCR 70.0% shows the window is genuinely usable; the ~230K output ceiling is a plus, but a 2026 agentic coder capped at 256K is mid-tier.
- **Multimodal: 65/100.** Text, image and file input with text output — the +image-in band (60–70); no audio, no video, no media generation.
- **Coding: 78/100.** SciCode 50.2% (93rd percentile, close to the 55%+ frontier marker) and Terminal-Bench 2.1 52.1% are strong for its price class. Capped by a complete absence of SWE-bench Verified/Pro, LiveCodeBench, DeepSWE, Vibe Code and CursorBench numbers, so repo-level claims remain unverified.
- **Cost efficiency: 92/100.** $1.00 in / $2.00 out per 1M with $0.20 cached input is very cheap for a frontier-lab agentic coder — roughly the methodology's ~$0.60/$2.20 ≈ 92 point; no free tier exists, so it cannot reach the $0 = 100 band.
- **Overall Score: 73/100.** (68 + 80 + 75 + 65 + 78) / 5 = 73.2 → **73**. Best fit: cheap, high-volume agentic coding and terminal loops inside Grok Build/Cursor; not a knowledge, vision or long-context workhorse.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-25 UTC
- Method: public internet research across BenchmarkList's measured rows for the Grok Build 0.1 `0616` profile, modelgrep's OpenRouter-derived specs and Artificial Analysis-cited figures, Model Beat / themodelbeat.com (specs, release date, pricing) and the AI BENCHY leaderboard; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
