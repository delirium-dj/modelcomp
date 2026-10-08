# Kimi K2.5 — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T-parameter MoE flagship (1T total / 32B active) for long-context agents, coding and multimodal work. Deprecated on AA (K2.6 newer) but still served.
- **Provider / access:** Moonshot AI + OpenCode Zen `opencode/kimi-k2.5` (chat-completions endpoint).
- **Release / knowledge:** 2026-01-27 release (Artificial Analysis FAQ); knowledge cutoff not disclosed.
- **IDs:** `opencode/kimi-k2.5` (no Free ID on Zen — paid only).
- **Context window:** 262,144 total (65,536 max output) per repo meta.json; AA lists 256–260K. Verified.
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-08):** $0.60 input / $3.00 output per 1M (Zen; AA median $0.60/$2.75), cached input $0.08. Paid only.
- **Architecture:** MoE 1T total / 32B active, Modified MIT license, weights on HuggingFace `moonshotai/Kimi-K2.5`.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **43.2%** (tbench.ai leaderboard via HF eval-results PR90, rank 18)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval multi-turn: **50% Pass-cubed** (claw-eval.github.io via HF eval-results, rank 9, N=3, 38 tasks)
- APEX-SWE: **30.3%** (mercor leaderboard via HF eval-results PR114, rank 1, claude_code harness thinking)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- YC-Bench medium: **$408,822 avg final funds** (collinear-ai via HF eval-results PR104, rank 6, OpenRouter route)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **23 estimated / #35 of 117** (AA K2.5 reasoning page; above open-weight median 18; deprecated, estimate only)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- VideoMME-v2: **61.1% (512 frames, rank 2) / 54.4% (64 frames)** (leaderboard via HF eval-results PR116)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (nearest coding proxy: APEX-SWE 30.3% rank 1 + Terminal-Bench 2.0 43.2%)

Long context:

- No MRCR / RULER / GraphWalks number published — no long-context retrieval reported; window fact 262,144 total.

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.0 43.2pct rank 18 plus Claw multi-turn 50pct rank 9 plus APEX-SWE rank 1; capped with no Tau/GDPval rows.
- **Reasoning: 68/100.** AA Index 23 est (#35/117, above open median 18) is the only composite; capped hard with no GPQA/HLE/LCR/CritPt rows.
- **Context window: 82/100.** 262K total verified (256K+ tier below 1M); capped under the 1M band with no measured retrieval score.
- **Multimodal: 85/100.** Text+image+video in (VideoMME-v2 61.1pct rank 2); capped at text-out only.
- **Coding: 70/100.** APEX-SWE 30.3pct #1 + TB2.0 43.2pct as proxies; capped with no SWE-Verified/LCB/SciCode/Vibe rows.
- **Cost efficiency: 78/100.** $0.60/$3.00 paid (AA: somewhat expensive vs open median $0.30/$1.15); mid-high value for 1T open weights.
- **Overall Score: 75/100.** Mean of five non-cost dims (72+68+82+85+70)/5 = 75.4 → 75; best for open-weight video-capable agent work where Modified-MIT weights matter more than frontier coding scores.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (AA Kimi K2.5 model page, HF moonshotai/Kimi-K2.5 eval-results, BenchLM model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
