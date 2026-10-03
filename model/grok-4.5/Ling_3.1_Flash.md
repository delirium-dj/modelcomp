# Grok 4.5 — findings by Ling 3.1 Flash

- Source: SpaceXAI (`opencode/grok-4.5`; API `grok-4.5` / `grok-4.5-latest` / `grok-build-latest`; Grok API, Cursor, Grok Build)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** SpaceXAI's July-2026 coding/agentic flagship (built alongside Cursor) — Terminal-Bench 2.1 83.3% (near the frontier bar), SWE Marathon 29.0% (best in its table), SWE-bench Pro 64.7%, DeepSWE 1.0 62.0%, with ~4.2× token efficiency over Opus 4.8 (max) on SWE-bench Pro; 500K context at $2/$6 per 1M. Superseded by Grok 4.6 (2026-08-12) at the same base price.
- **Provider / access:** SpaceXAI (xAI) — Grok API, Cursor, Grok Build (default at launch); reasoning effort low/medium/high (default high); function calling and structured outputs; ~80 tok/s vendor-stated (92.9 tok/s independent).
- **Release / knowledge:** 2026-07-16; knowledge cutoff not published.
- **IDs:** `opencode/grok-4.5` / `grok-4.5`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 500K-token window (xAI's official card — not the 1M some third parties claim, which is Grok 4.3's spec) and takes text and image input.
- **Context window:** 500,000 tokens.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $2.00/$6.00 per 1M input/output below 200K prompt tokens; $4.00/$12.00 at 200K+ (higher rate applied to the whole request); cached input $0.30/M ($0.60 ≥200K); no Batch API discount.
- **Architecture:** proprietary reasoning model; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (xAI launch table, 2026-07-16; competitor figures from their developers' system cards/leaderboards):

- Terminal-Bench 2.1: **83.3%** (vs Fable 5 max 84.3%, GPT-5.5 xhigh 83.4%, Opus 4.8 max 78.9%) — near the frontier bar
- SWE Marathon resolution rate (pass@1): **29.0%** (vs Opus 4.8 max 26.0%, Fable 5 max 24.0%, Opus 4.7 max 16.0%) — best in table
- SWE-bench Pro resolve rate: **64.7%** (vs Fable 5 max 80.4%, Opus 4.8 max 69.2%, Opus 4.7 max 64.3%, GLM-5.2 62.1%, GPT-5.5 xhigh 58.6%)
- DeepSWE 1.0: **62.0%** (vs Fable 5 max 66.1%, GPT-5.5 xhigh 64.31%, Opus 4.8 max 55.75%, Opus 4.7 max 40.12%)
- DeepSWE 1.1 (mini-swe-agent harness, Datacurve): **53%** (vs Fable 5 max 70%, GPT-5.5 xhigh 67%, Opus 4.8 max 59%, GLM-5.2 44%)
- Token efficiency: **15,954** average output tokens per SWE-bench Pro task — ~4.2× fewer than Opus 4.8 max (67,020); vendor claims ~2× token efficiency vs comparable leading models
- DataLLM Lab executed 9-task Python benchmark (independent, 2026-07-29): **9/9** at $2.93/1K tasks, 6.6s avg, 289 reasoning tokens (Grok 4.3: 8/9, $1.75)
- AA Intelligence Index: **54** (independent; Grok 4.3: 53)

Reasoning / knowledge:

- GPQA Diamond, HLE, FrontierMath, AIME: no verified public score found (xAI published no official benchmark suite for this release; the launch page carried the agentic bar charts above)

Coding (beyond the above):

- SWE-bench Verified, LiveCodeBench, AA Coding Index: no verified public score found

Long context / multimodal:

- 500K window; no MRCR/RULER/AA-LCR score published; no MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 83.3% nearly reaches the 85% frontier bar and SWE Marathon 29.0% (pass@1) led its table, with SWE-bench Pro 64.7% and DeepSWE 1.0 62.0%/1.1 53% mid-tier; the AA Intelligence Index of 54 and the absence of MCP Atlas/Toolathlon figures cap the score.
- **Reasoning: 68/100.** Only the AA Intelligence Index of 54 (independent) was captured as a cross-domain reasoning composite — no GPQA Diamond, HLE or FrontierMath figure was published in the materials reviewed, so the "smartest model" launch positioning is unquantified here.
- **Context window: 80/100.** 500K-token window (xAI's official card — not the 1M some third parties claim, which is Grok 4.3's spec); no ≥98%-at-depth retrieval figure.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU figure captured.
- **Coding: 74/100.** Terminal-Bench 2.1 83.3% nearly reaches the 85% frontier bar, with SWE-bench Pro 64.7% and SWE Marathon 29.0% (best in its table) supporting; DeepSWE 1.1 53% is mid-tier, SWE-bench Verified was not captured, and ~4.2× token efficiency over Opus 4.8 (max) is a documented cost-per-task advantage.
- **Cost efficiency: 84/100.** $2/$6 per 1M below 200K (blended ~$3.00/M at 3:1) sits just under the ~$1.25/$4.25≈88 anchor; ≥200K prompts double the entire request ($4/$12), cache reads are 15% of input, there is no Batch API discount, and the 4.2× token efficiency over Opus 4.8 (max) cuts cost-per-task.
- **Overall Score: 73/100.** (76+68+80+65+74)/5 = 72.6 → 73 — a strong July-2026 coding agent (TB2.1 83.3%, SWE Marathon 29.0%, 4.2× token efficiency at $2/$6) whose unpublished reasoning evals, 500K window and mid-tier DeepSWE/SWE-bench Pro keep it below the October-2026 frontier.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (SpaceXAI Grok 4.5 launch + docs, benchr review, DataLLM Lab executed benchmark, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_5.md`, using the same headings.
