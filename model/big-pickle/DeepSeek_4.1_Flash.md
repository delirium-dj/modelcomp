# Big Pickle — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / Big Pickle (`opencode/big-pickle`, free stealth alias)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (free stealth alias on OpenCode Zen; label "Big Pickle")
- **Short description:** A free, maker-anonymous "stealth" coding model served through OpenCode Zen. Its publisher has never been confirmed; leaked provider errors and API response signatures point toward DeepSeek infrastructure, treated here as a signal, not a fact. The alias can be re-pointed at different weights at any time, so any score is a snapshot of whatever answered on the test date rather than a durable model rating.
- **Provider / access:** OpenCode Zen — model id `big-pickle`, called through Zen's OpenAI-compatible endpoint (the SWE Atlas write-up ran it via Zen's OpenAI-compatible endpoint with `mini-swe-agent` 2.4.6). No first-party model page exists.
- **Release / knowledge:** No release date or knowledge cutoff published. Free stealth period active through August 2026; no end date or post-stealth price announced as of 2026-09-18.
- **IDs:** `opencode/big-pickle` (Zen). No other provider ID published; not listed on Artificial Analysis or Zen's public model table at check time.
- **Context window:** 200,000 tokens per a third-party free-model directory (last verified June 2026). Zen does not document a context window for the alias, so 200K is directory-reported, not vendor-verified.
- **Modalities:** text in / text out (code-focused); tool calling demonstrated by agent use (bash-only `mini-swe-agent` scaffold). No image, audio, video or PDF input reported; no reasoning-mode toggle documented.
- **Pricing (as of 2026-09-18):** **Free** during the stealth period. Zen's terms state prompts sent to `big-pickle` during the free period may be used to improve the model. Benchmark infrastructure was not free: ~$70 of Modal compute plus ~$25 of judge-model API spend for the SWE Atlas run.
- **Architecture:** Undisclosed. Maker officially unconfirmed; DeepSeek infrastructure is suspected from leaked provider errors and API signatures, not confirmed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE Atlas Codebase QnA (Scale AI, **mini-SWE-Agent 2.4.6, 250-step cap, judged by `claude-opus-4-5`**): **50.8%** (63/124 tasks, single trial, self-reported 2026-08-11; a stricter lower bound of 49.2% applies if two tasks whose rubrics the judge could not parse are counted as failures rather than excluded). Beats every other entry in the Mini-SWE-Agent scaffold class and the GPT entries run on the Codex scaffold; only two Claude models on the native Claude Code scaffold score higher.
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.8%** (SWE Atlas Codebase QnA, above)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (alias untracked on both aggregators as of 2026-09-18)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **~72%** — provisional: a third-party free-model directory lists "SWE-bench ~72%" and a "tier S+" rating with no harness, date or leaderboard link. Not independently verifiable.
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (no MRCR/RULER/GraphWalks result at any window depth; the 200K window has no long-context eval behind it).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the six.

- **Tool use: 60/100.** 50.8% on SWE Atlas Codebase QnA with the standard minimal scaffold beats every non-Claude entry in its class across 124 audited trajectories — genuine agentic robustness. Capped by a single trial (±4.5 points), a self-reported (not Scale-verified) run, and missing TB2/Tau3/GDPval/Claw data.
- **Reasoning: 55/100.** No GPQA Diamond, HLE, LCR or CritPt number exists for the alias; the only reasoning-adjacent evidence is multi-step task completion on SWE Atlas, so the score sits mid-range — competent at long-horizon work, completely unmeasured on knowledge exams.
- **Context window: 70/100.** 200K tokens, directory-reported only, with no recall measured at depth and nothing documented by Zen; values the 200K tier mid-pack (well below the 262K–1M cohort, above 128K) with a discount for absent retrieval evidence.
- **Multimodal: 15/100.** Text-in/text-out only; no vision, audio, video or PDF input reported by any source.
- **Coding: 72/100.** Strongest real signal is SWE Atlas Codebase QnA 50.8% under a thin scaffold, plus a provisional SWE-bench ~72% directory figure. Capped by the unverifiable SWE-bench number and the alias's identity instability (a different model may answer tomorrow).
- **Cost efficiency: 100/100.** $0 during the free stealth period with no rate card; the counterweight is data usage (Zen may use free-period prompts to improve the model) and an unannounced post-stealth price.
- **Overall Score: 62/100.** (60 + 55 + 70 + 15 + 72 + 100) / 6 = 62.0 → **62**. Best fit: budget-constrained coding/terminal agents where an unverified identity, zero published reasoning scores and free-period data collection are acceptable risks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (OpenCode Zen docs, third-party free-model directory, independent SWE Atlas write-up coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.