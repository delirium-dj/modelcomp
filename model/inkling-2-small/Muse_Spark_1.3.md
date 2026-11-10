# Fledge Alpha — findings by Muse Spark 1.3

- Source: OpenCode Zen (`opencode/fledge-alpha-free`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** Anonymous stealth preview model on OpenCode Zen (Free tier, limited time) with rapid early adoption; developer, family, and underlying weights unknown — current evidence suggests a routed service backed by very fast models.
- **Provider / access:** OpenCode Zen `opencode/fledge-alpha-free` (Free preview; US-region access confirmed by independent testers, other regions unconfirmed).
- **Release / knowledge:** First recorded usage 2026-09-30, Zen catalog listing 2026-10-01, specs listed 2026-10-02 (stealthmodels.com timeline from OpenCode telemetry and models.dev PRs); knowledge cutoff unknown.
- **IDs:** `opencode/fledge-alpha-free` (Zen listing; no verified underlying model ID — maker unknown).
- **Context window:** 1,048,576 tokens total with 131,072 max output (models.dev `fledge-alpha-free.toml` via stealthmodels.com, 2026-10-02).
- **Modalities:** Text + image in; text out; reasoning yes with low/high/max effort settings; tool calls supported (models.dev catalog listing). Not listed as open weights.
- **Pricing (as of 2026-10-04):** $0 input and $0 output on the Free preview route (models.dev; aipromonow.com 2026-10-03); limited-time free tier with tight rate limits, no calendar end date published.
- **Architecture:** Unknown — no verified params, license, or weights; same tokenizer prompts returned different input-token counts across runs (7,536 vs 6,499), consistent with a router over changing underlying models (stealthmodels.com).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**; adjacent signal: community Stealth Models mini-bench rates it "as good as the Space Bunny, but more expensive in cost per task" (@fellipesoares, 2026-10-02 — single-tester anecdote, provisional)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (36/39, 95% CI 79.7–97.3%, max reasoning, no tools, via OpenCode CLI — stealthmodels.com StealthMark, 2026-10-03, n=39 shared with Space Bunny at 82.1%)
- HLE: **25.4%** text-only (17/67, 95% CI 16.5–36.9% — stealthmodels.com StealthMark, 2026-10-03; shared-66 subset 25.8% vs Space Bunny 30.3%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (OpenCode Data compare page shows neutral 50/100 placeholders = no data)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: MMLU-Pro **92.0%** (92/100, 95% CI 85.0–95.9% — stealthmodels.com StealthMark, 2026-10-03, vs Space Bunny 77.0%); output speed **~61 tokens/s** across six 2,048-token low-effort runs including reasoning tokens (stealthmodels.com)

Long context:

- No verified MRCR / RULER / GraphWalks retrieval-at-length score found; a 1M-character retrieval anecdote in earlier coverage is not a token-window retrieval verification.

### Normalized scores (1–100)

- **Tool use: 60/100.** Tool calls are catalog-supported and a community mini-bench puts it near Space Bunny, but zero verified harness rows (TB/Tau/GDPval/Claw/MCP) exist — scored at the supported-but-unmeasured level.
- **Reasoning: 82/100.** MMLU-Pro 92.0% (n=100) and GPQA Diamond 92.3% (n=39) are strong but small-sample third-party runs; capped by HLE 25.4% and the router hypothesis making any score a route-average, not a weights property.
- **Context window: 95/100.** Listed 1M total / 131K out sits in the top tier; capped for lack of any verified retrieval-at-length percentage.
- **Multimodal: 65/100.** Text + image in with SVG-generation tests ranging from simple sketches to a strong composed scene (inconsistent, effort-sensitive); capped in the image-in tier with no standardized vision benchmark.
- **Coding: 62/100.** No verified SWE-bench, LiveCodeBench, SciCode or Vibe row for this listing; the Space-Bunny-parity anecdote and fast ~61 tok/s output keep it above failing but no harness backs a higher score.
- **Cost efficiency: 100/100.** $0 in/out on the Free preview route; flagged as limited-time with tight rate limits.
- **Overall Score: 73/100.** Mean of the five quality dims (60 + 82 + 95 + 65 + 62) / 5 = 72.8 → 73; best fit as a free large-window draft/router to try with verification, not a measured primary.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-10-04
- Method: public internet research (stealthmodels.com StealthMark exams/SVG/router tests 2026-10-03, OpenCode telemetry and data compare pages, models.dev catalog, aipromonow.com, community X reports as provisional only); re-research with new verified evidence supersedes the 2026-10-02 self-excluded twin — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
