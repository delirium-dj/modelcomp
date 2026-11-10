# Fledge Alpha — findings by Big Pickle

- Source: OpenCode Zen (`fledge-alpha-free`) — maker unknown
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (listed as "Fledge Alpha Free" in the OpenCode Zen model list; catalog key `fledge-alpha-free`)
- **Short description:** A free preview model on OpenCode Zen with a listed 1M-token context window, image input, tool calls and three reasoning-effort settings. The maker is unknown and Stealth Models' evidence points to a *router* over unnamed very fast models rather than one identifiable checkpoint, so treat the "Alpha" name as a route label, not a verified model identity. Not a variant/alias of any other foldered entry; the OpenCode-labelled "Fledge Alpha" name is used by no other lab.
- **Provider / access:** OpenCode Zen — `opencode/fledge-alpha-free`, OpenAI-compatible Chat Completions endpoint `https://opencode.ai/zen/v1/chat/completions` (`@ai-sdk/openai-compatible`).
- **Release / knowledge:** First token usage recorded in OpenCode telemetry 2026-09-30; listed in the Zen catalog 2026-10-01; models.dev specifications published 2026-10-02 (opencode/models.dev PR #8566, reasoning correction PR #8568). Knowledge cutoff not disclosed.
- **IDs:** `opencode/fledge-alpha-free` (Zen catalog key, also seen as `fledge-alpha` in OpenCode's own telemetry export). No separate paid ID published; no non-free Zen tier found as of 2026-10-03.
- **Context window:** 1,048,576 tokens total / 131,072 max output — listed figures from the OpenCode Zen catalog as mirrored on models.dev (`fledge-alpha-free.toml`), checked 2026-10-02. These are catalog claims, not a measured retrieval result: no MRCR/RULER-style long-context retrieval number has been published for this route.
- **Modalities:** text + image in, text out; reasoning (effort: low / high / max); tool calls supported; JSON mode not documented.
- **Pricing (as of 2026-10-03):** Free — `$0` input / `$0` output on the `fledge-alpha-free` preview route (models.dev), and OpenCode's own telemetry shows `$0` total recorded spend across 246,955 completed sessions. Caveats: it is explicitly a *preview* free route, no end date is published, and with the maker unidentified there is no way to assess whether prompts are retained or used for training — treat it as unsuitable for confidential code.
- **Architecture:** proprietary / undisclosed. Maker unknown (lab recorded as "Unknown"); not listed as open weights. Stealth Models' tokenizer test (7,536 input tokens on two identical runs, 6,499 on a third) plus inconsistent SVG output quality is their stated basis for calling it a likely router; both are indirect signals and do not establish the underlying models. Earlier community guesses (DeepSeek V4.x, Thinking Machines' Inkling) are unconfirmed.

### Raw benchmarks found

> Independent evaluation by Stealth Models (stealthmodels.com/fledge-alpha), 206 answered questions total, run 2026-10-02/03 via the OpenCode CLI at **maximum reasoning, no tools**. Scores are on answered questions with 95% Wilson confidence intervals — small-n, wide-CI numbers, listed here verbatim.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found** (no harness data published)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Tool calling itself: **supported** (Zen/models.dev catalog listing) — capability flag, not a benchmark. Real-world agent usage is the only other signal: 246,955 completed OpenCode sessions and 1.9M average tokens per session over the two months to 2026-10-03 (opencode.ai/data telemetry), 93.3% of input served from cache.

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (36 / 39 correct, 95% CI 79.7–97.3) — Stealth Models, max reasoning, no tools
- MMLU-Pro: **92.0%** (92 / 100 correct, 95% CI 85.0–95.9) — Stealth Models, same harness
- HLE (text-only): **25.4%** (17 / 67 correct, 95% CI 16.5–36.9) — Stealth Models, same harness (their head-to-head panel reports 25.8% / 17 of 66 shared questions against Space Bunny)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no leaderboard entry; the route is too new and its identity too opaque for a vendor-neutral harness)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** — closest proxy is qualitative: six SVG generation tests (2,048 output tokens each, low reasoning effort) whose quality swung "from basic sketches to carefully composed scenes", with MAX-reasoning reruns changing the artwork but not consistently improving it (Stealth Models).

Long context:

- **No long-context retrieval reported.** The 1M window is a catalog listing with no published MRCR / RULER / GraphWalks figure at any length, so retrieval quality deep into the window is unmeasured — treat 1M as advertised capacity, not demonstrated.

Speed (not a scored dimension, recorded for traceability):

- **~61 output tokens/s**, averaged over six 2,048-output-token generations at low reasoning effort, reasoning tokens included (Stealth Models, 2026-10-02).

### Normalized scores (1–100)

- **Tool use: 50/100.** Neutral placeholder: tool calling is verified supported and the route absorbs very large real agent workloads, but not one comparable tool benchmark (Terminal-Bench, Tau3, GDPval, Claw-Eval, Toolathlon, MCP-Atlas) has been published, and the methodology's mid band starts at 50–70 only with real numbers. Caps here: zero measured tool evidence.
- **Reasoning: 73/100.** GPQA Diamond 92.3% and MMLU-Pro 92.0% sit in the methodology's frontier band (GPQA 90%+), but HLE at 25.4% is far under the 40%+ frontier marker and only mid-range, and every number rests on 39 / 100 / 67 answered questions with CIs spanning ~18 points. Caps here: HLE, sample size, and the evaluator's own observation that the route "often rushes to a simple answer" and underthinks.
- **Context window: 95/100.** Listed at 1,048,576 tokens (1M tier = 95–100) with a 131,072 max output. Not 100: 100 requires ≥98% measured retrieval at 512K+, and no retrieval benchmark exists for this route — capacity is advertised, not demonstrated.
- **Multimodal: 68/100.** Text + image in with text out and reasoning places it in the "+image in = 60–70" band. Caps here: no video, PDF or audio input listed, and no non-text output.
- **Coding: 50/100.** Neutral placeholder — no SWE-bench, LiveCodeBench, SciCode, DeepSWE or Vibe Code Bench number exists for `fledge-alpha-free`, and the only qualitative coding-adjacent evidence (SVG generation, inconsistent quality) is not a coding benchmark. Heavy use inside a coding agent is suggestive, not measurable. Caps here: zero verified coding scores.
- **Cost efficiency: 100/100.** `$0` in / `$0` out on the evaluated free preview route = 100. Caveat carried forward: time-limited preview, and an unidentified maker means prompt-retention terms are unknown.
- **Overall Score: 67.2/100.** Half-up mean of the five quality dims: (50 + 73 + 95 + 68 + 50) / 5 = 67.2. Best fit: a free, very fast, 1M-window drafting and triage layer — its measured strength is academic knowledge retrieval, so use it for wide-context reading, first-pass answers and quick SVG/illustration work, and route anything needing measured tool reliability, deep reasoning or audited coding to a benchmarked model.

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-03
- Method: public internet research — OpenCode Zen docs, OpenCode usage telemetry (opencode.ai/data), models.dev catalog metadata and the Stealth Models independent evaluation of 2026-10-02/03; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Fledge_Alpha.md`, using the same headings.
