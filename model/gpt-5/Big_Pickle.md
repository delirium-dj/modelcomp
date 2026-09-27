# GPT-5 — findings by Big Pickle

- Source: OpenAI `gpt-5` — the August 2025 flagship (router system: `gpt-5-main` +
  `gpt-5-thinking`), tracked here as the base `gpt-5` model at its `high` reasoning
  effort unless a row says otherwise
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 — OpenAI's flagship released 2025-08-07. Not an alias: `gpt-5-pro`,
  `gpt-5-mini`, `gpt-5-nano` and `gpt-5-codex` are separate entries, as are the later
  `gpt-5.1`…`gpt-5.6` and `gpt-6` lines already tracked in this comparison.
- **Short description:** A single API entry that routes between a fast
  high-throughput model and a deeper reasoning model based on prompt complexity, tool
  needs and explicit intent. At launch it set records for math (AIME 2025), real-world
  coding (SWE-bench Verified) and multimodal understanding (MMMU). By 2026-09 it is
  **deprecated** — Artificial Analysis flags it and points to GPT-5.1 (high); tracked
  here as a historical reference point, not a current recommendation.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`) — Chat Completions and
  Responses. Also on OpenCode Zen as `opencode/gpt-5` and via Azure, OpenRouter, Poe
  and Vercel AI Gateway.
- **Release / knowledge:** API release **2025-08-07**; knowledge cutoff **2024-09-30**
  (OpenAI model page) — roughly two years stale as of today.
- **IDs:** `gpt-5` (OpenAI, Chat Completions + Responses), `opencode/gpt-5` (Zen).
  Reasoning is controlled by `reasoning_effort` (`minimal` / `low` / `medium` /
  `high`) rather than by separate model IDs, so the same ID serves four behaviours.
- **Context window:** **400,000 tokens** total, **128,000** max output, with the
  output budget including reasoning tokens (OpenAI model page; corroborated by AA and
  ModelBenchmark, which list a 272K input allowance inside the 400K total). Verified
  from first-party docs.
- **Modalities:** text, image and file input; **text output only**. Reasoning: yes
  (effort-scaled). Tool calls: yes (function calling). JSON mode / structured outputs:
  supported. Fine-tuning: not offered for `gpt-5`.
- **Pricing (as of 2026-09-27):** OpenAI **$1.25 in / $10.00 out per 1M**, cached input
  **$0.125** (90% discount); batch $0.625 / $5.00. OpenCode Zen **$1.07 / $8.50**;
  Poe $1.10 / $9.00. AA's blended 7:2:1 cache/input/output rate is **$1.34 per 1M**.
  No free tier. ModelBenchmark lists a vendor retirement date of **2026-12-11**.
- **Architecture:** proprietary; no weights or parameter count published. A **unified
  system**, not a single network: `gpt-5-main` (fast) and `gpt-5-thinking` (reasoning)
  behind a real-time router.

### Raw benchmarks found

OpenAI's launch numbers are provider-reported; Epoch AI and Artificial Analysis figures
are independent. Note the AA Intelligence Index changed scale in 2026 — the v4.3.2 score
(23) and the launch-era v3 score (68) are **not comparable** and are listed separately.

Agent / tool use:

- τ²-bench-Verified (amazon-agi, `gpt-5.1` as user simulator, avg of airline/retail/telecom): **79.92%** for GPT-5 (reasoning: med) — airline 72.00%, retail 78.25%, telecom 89.50%; **#4 of 17**; $202.51 for 110.29M tokens, Score/$ 0.39 (#8). The Verified dataset is a corrected, human-audited version of the original τ²-bench
- τ²-bench (BenchLM mirror, different harness and task release): **86.5%** for GPT-5 (medium), #46 of 132; **84.8%** for GPT-5 (high), #56
- Terminal-Bench: **~50%** (Epoch AI, ingested by The Known Good; that page does not state the Terminal-Bench version, so it is not pinned to 2.0 or 2.1)
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.2 ± 2.1%** at high effort (Epoch AI, 2025-10-29); **85.3%** at medium (Epoch AI, 2025-08-07); 71.7 ± 3.2% at minimal (Epoch AI, 2026-07-20) — a 14.5-point spread driven purely by reasoning effort, which is why single-number comparisons to other models are unsafe
- GPQA Diamond: **88.4%** without tools — this is **GPT-5 pro**, a different variant, provider-reported
- AIME 2025: **94.6%** without tools (OpenAI launch, provider-reported)
- Artificial Analysis Intelligence Index **v4.3.2: 23**, #125 of 2112, flagged below the 26 median for comparable reasoning models (AA, read 2026-09-27). Historical, different scale: on the pre-v4 index (MMLU-Pro, GPQA, HLE, LiveCodeBench, SciCode, AIME, IFBench, AA-LCR) GPT-5 scored **68** high / **67** medium / **64** low / **44** minimal at launch (AA, 2025-08-07)
- HLE: no verified public per-benchmark value found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **74.9%** (OpenAI launch; fixed subset of n=477 verified tasks validated on OpenAI's infrastructure, provider-reported)
- SWE-bench Verified, independent: **73.5 ± 2.0%** at high effort (Epoch AI, 2026-02-06); **71.5 ± 2.1%** at medium (Epoch AI, 2026-02-05); 71.8% default under OpenHands; 65.0% medium under mini-SWE-agent. Sources and harnesses disagree by up to 8.5 points
- Aider Polyglot: **88%** (OpenAI launch, provider-reported)
- LiveCodeBench: no verified public score found for base `gpt-5` — the 84.7% figure in circulation belongs to **GPT-5 Codex**, a different model, and is not used here
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported. The 400K window is first-party documented and
  272K of it is usable input, but no MRCR / RULER / GraphWalks / recall-at-length figure
  has been published for `gpt-5`. AA's GDP.pdf measures single-turn professional
  document reasoning, not retrieval at length, and GPT-5 predates it.

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench-Verified 79.92% (#4 of 17, independent harness) and
  the 84.8–86.5% τ²-bench mirror put conversational tool use at or above the
  methodology's frontier anchor for τ-bench-style tasks. Held well below 90 because
  **Terminal-Bench is only ~50%** (mid band), GDPval-AA, Claw-Eval and the τ³-banking
  knowledge domain are all absent, and the strongest τ² numbers are from the 2025–2026
  window before the current 2026 agentic frontier moved.
- **Reasoning: 74/100.** GPQA Diamond 85.3–86.2% at medium/high effort and AIME 2025
  94.6% sit above the methodology's mid band (GPQA 60–80%) and below its frontier anchor
  (GPQA 90%+), which is exactly where 74 belongs. Pulled down by an AA v4.3.2 Index of
  23 — below the comparable-model median — and by a 2024-09-30 knowledge cutoff.
- **Context window: 78/100.** 400K total (272K input / 128K output) lands in the
  200K–500K methodology band (65–84, anchored at 200K = 70). Scored in the upper half
  because the limit is first-party documented and large, but **not** in the 95–100
  ≥1M band, and held back from the top of its band because no retrieval benchmark at
  any length exists for this model. Max output of 128K is a caveat, not separately
  scored.
- **Multimodal: 68/100.** Text, image and file input with text output is the
  methodology's "+image in" band (60–70), corroborated by a strong provider-reported
  MMMU 84.2% at launch. No audio or video input and no non-text output, so it cannot
  reach the 90–100 band.
- **Coding: 74/100.** SWE-bench Verified 71.5–74.9% across OpenAI, Epoch AI and two
  agent harnesses, plus 88% Aider Polyglot, is a strong result for its generation —
  but it is squarely **below** the methodology's frontier anchors (DeepSWE 74%+,
  Terminal-Bench 2.1 85%+, SciCode 55%+, Coding Index 70%+) and its LiveCodeBench,
  SciCode, DeepSWE and Coding Index rows are all unmeasured. 74 reflects "solid
  mid-2025 coding, dated by 2026 standards", not a coding-leadership claim.
- **Cost efficiency: 75/100.** $1.25/$10 on OpenAI, $1.07/$8.50 on Zen, $3.44 blended
  3:1. That output price sits between the methodology's ~$1.25/$4.25 anchor (~88) and
  its $3/$15 anchor (~60), and the 90% cache discount is a genuine offset. Scored on
  price only: this is an expensive model for what it delivers in 2026, and no free tier
  exists.
- **Overall Score: 75/100.** (82 + 74 + 78 + 68 + 74) / 5 = 75.2. Best fit: a
  historical reference point — the "what did frontier look like in August 2025" row —
  or a pinned deployment where an existing GPT-5 integration must not be disturbed
  before the 2026-12-11 retirement. Not a fit for new work: it is deprecated in favour
  of GPT-5.1, and the Multimodal and Coding dims are the binding constraints, both
  because of what the model never had (audio/video) and because of how much the field
  has moved since.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-27
- Method: public internet research (OpenAI's GPT-5 launch post and model docs, Artificial
  Analysis model pages and index-version articles, Epoch AI figures via ModelBenchmark
  and The Known Good, amazon-agi's τ²-bench-Verified results, BenchLM's τ²-bench
  mirror). Scores are normalized 1–100 interpretations, not official vendor scores.
  Provider-reported numbers are labelled as such, and the two Artificial Analysis
  Intelligence Index scales are kept separate rather than averaged.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same
  headings.
