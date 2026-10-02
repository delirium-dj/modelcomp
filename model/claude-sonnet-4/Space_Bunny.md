# Claude Sonnet 4 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-sonnet-4-20250514`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4 (May 2025 generation, mid-tier)
- **Short description:** Anthropic's May 2025 Sonnet, a strong coding/agent model in its
  own launch window and the direct predecessor of the 4.5/4.6 Sonnet line. **It is
  retired**: Anthropic shut `claude-sonnet-4-20250514` down on 2026-06-15 with
  `claude-sonnet-4-6` named as the replacement, and Artificial Analysis flags it
  "deprecated". It is kept here as a historical reference point, not a current
  recommendation. Distinct from `claude-sonnet-4.5` / `claude-sonnet-4.6` / `claude-sonnet-5`.
- **Provider / access:** Anthropic Messages API, model ID `claude-sonnet-4-20250514`;
  also AWS Bedrock and Google Vertex AI. Anthropic's own schema, not OpenAI-compatible.
  **Retired from all three as of 2026-06-15** — no live endpoint to score against.
- **Release / knowledge:** released 2025-05-22; knowledge cutoff **2025-03-01**
  (Artificial Analysis technical specifications; aiflashreport lists "2025-03").
- **IDs:** `claude-sonnet-4-20250514` (Anthropic/Bedrock/Vertex). No Free-tier Zen ID
  exists; Artificial Analysis now shows $0.00/$0.00 only because the model is withdrawn
  from the API, **not** because it is free.
- **Context window:** **200,000 tokens** default, 64K max output (Anthropic pricing/docs;
  BenchLM and aiflashreport both list 200K). A **1M-token context beta** was offered for
  the Claude 4 generation and Artificial Analysis lists the context window as 1.0M, so
  1M is reachable but was never the default served limit — the 200K figure is what the
  public evals below were run at.
- **Modalities:** text + image in (PDF via document blocks), text out; non-reasoning
  (no extended thinking); tool calls; no audio/video input; no non-text output.
- **Pricing (as of 2026-09-27):** list price at retirement was **$3.00 / 1M input,
  $15.00 / 1M output** (Anthropic pricing page, confirmed by two
  independent aggregators quoting `platform.claude.com/docs/en/about-claude/pricing`;
  $18.00 blended per 1M+1M). Model no longer purchasable.
- **Architecture:** proprietary. Anthropic has **not** disclosed a parameter count — a
  third-party tracker lists "~500B dense", which is unverified and is not repeated as
  fact here.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (absent from the 61-model
  Terminal-Bench 2.1 leaderboard).
- Terminal-Bench 2.0: **35.5%** (LLM Stats Terminal-Bench leaderboard, 0.355, rank 13/25,
  all rows self-reported; anotherwrapper reports the same 35.5%).
- Tau3-Banking / Tau2-Bench: τ²-bench results **52.3%** (BenchLM); τ-bench Retail
  **80.5%** and Airline **60.0%** (anotherwrapper aggregator, single source).
- GDPval-AA: **no verified public score found** (absent from the 105-model leaderboard).
- Claw-Eval / ClawProBench: **no verified public score found**.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**.
- Other agentic: OSWorld **38.6%** / OSWorld-Verified **35.8%**, APEX-Agents **9.3%**,
  The Agent Company **43.2%**, Gert Labs **39.66%**, JobBench **18.4%**, DeepResearch
  Bench **47.8%** (BenchLM + anotherwrapper).

Reasoning / knowledge:

- GPQA Diamond: **77.8%** (vendor/aggregator figure; BenchLM AA-GPQA Diamond **68.3%**;
  aiflashreport lists **74.0%**). Spread of ~10 points across sources — harness variance,
  all three listed.
- HLE: **7.8%** (anotherwrapper); AA-HLE **4.3%** (BenchLM).
- LCR / MLCR: AA-LCR **44.0%** (BenchLM).
- CritPt: **1.1%** (BenchLM) / **0.3%** (anotherwrapper) — a near-zero physics-reasoning
  reading on both, consistent rather than a one-off harness glitch.
- Artificial Analysis Intelligence Index / BenchLM overall: AA Intelligence Index
  **17** (#41/299 among non-reasoning models; "well above average" vs. a class median of
  7, but far below the 60+ frontier band). BenchLM overall **36.08/100, #129 of 508**
  (15/486 benchmarks covered — partial, conservative).
- Omniscience Accuracy / Hallucination Rate: **22.7% / 41.0%**; AA-Omniscience Index
  **−9.0%** (BenchLM) — a genuinely *negative* knowledge-reliability index, i.e. it
  produced more wrong answers than right on the probed set.
- Other knowledge: MMLU **88.7%**, MMLU-Pro **79.4%**, MMMLU **86.5%**, MATH **84.4%**,
  AIME 2025 **70.5%**, AIME 2024 not reported, ARC-AGI-2 **5.9%**,
  ARC-AGI-1 Verified **23.8%** (anotherwrapper / aiflashreport).

Coding:

- SWE-bench Verified / SWE-Pro: Verified **72.7%** (BenchLM; aiflashreport says 72.3% —
  the same launch-era run, minor harness difference). SWE-bench Pro **74.8%** (another
  wrapper only, single source, and unusually high for this generation — **treat as
  provisional**; it is not corroborated by any harness I could cross-check).
- LiveCodeBench: **59.7%** (anotherwrapper).
- SciCode / AA-SciCode: **40.0%** (anotherwrapper; not listed on the 27-model BenchLM
  SciCode leaderboard).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE / Coding Index / other: Aider Polyglot **56.4%** (anotherwrapper). No DeepSWE
  v1.1 row and no Artificial Analysis Coding Agent Index score — the model was retired
  before the current coding-agent index existed.
- Multimodal: MMMU **74.4%**, AA-MMMU-Pro **62.4%** (BenchLM), Design Arena Website
  **1157**.

Long context:

- **No long-context retrieval reported at window length.** No MRCR, RULER, or GraphWalks
  figure exists for this model. The only long-horizon signal is AA-LCR **44.0%** and
  LongBench-style rows are absent, so the context tier is scored on the documented limit.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 35.5% and OSWorld 38.6% put it in the
  methodology's mid band, and τ²-bench 52.3% / τ-bench Retail 80.5% keep it out of the
  bottom; it is capped there by APEX-Agents 9.3%, JobBench 18.4% and Gert Labs 39.66%,
  and by having no row at all on Terminal-Bench 2.1, GDPval-AA or Claw-Eval — the
  lanes that now define this axis.
- **Reasoning: 58/100.** GPQA Diamond 77.8% / 68.3% independent, MMLU 88.7% and AIME
  2025 70.5% are respectable; the cap is HLE at 7.8% (4.3% on AA-HLE), a negative
  Omniscience Index of −9.0%, ARC-AGI-2 at 5.9% and an AA Intelligence Index of only 17 —
  squarely the methodology's "GPQA 60–80%, HLE <10%, LCR <40%, Index 20–35 → 55–65"
  band, nudged to the low end because the index is below even that band.
- **Context window: 78/100.** The default served limit is 200K, which the methodology
  maps to 70, and a documented 1M context beta (which Artificial Analysis lists as the
  model's context window) justifies the uplift toward the 500K–1M tier; it is held below
  85 because no MRCR/RULER/GraphWalks retrieval was ever measured for this model and
  AA-LCR is a mid-band 44.0%, plus max output is only 64K.
- **Multimodal: 68/100.** Text and image in with document/PDF blocks, text out — the
  methodology's "+image in = 60–70" band, supported by MMMU 74.4% and AA-MMMU-Pro
  62.4%. Capped because nothing leaves the text channel and there is no audio or video
  input.
- **Coding: 72/100.** SWE-bench Verified 72.7% was a strong launch number and SciCode
  40.0% / Aider Polyglot 56.4% are respectable; it sits in the 65–75 mid band rather than
  the 90+ frontier band because LiveCodeBench is only 59.7%, Terminal-Bench 2.0 is
  35.5%, and the one high SWE-bench Pro reading (74.8%) is single-source and uncorroborated.
- **Cost efficiency: 60/100.** $3.00 in / $15.00 out is the methodology's explicit
  ~$3/$15 ≈ 60 anchor. Noted: the model is now withdrawn, so this is a historical price,
  and Artificial Analysis's current $0.00/$0.00 display reflects unavailability, not value.
- **Overall Score: 66.2/100.** (55 + 58 + 78 + 68 + 72) / 5 = 66.2 — best read as a
  historical baseline: a capable 2025-vintage coder whose tool-use and knowledge-hygiene
  numbers have been overtaken by every current-generation alternative, and which is no
  longer purchasable. For any live workload, `claude-sonnet-4-6` or later supersedes it.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-27
- Method: public internet research (Artificial Analysis model page and Intelligence Index
  methodology, BenchLM model and benchmark leaderboards, LLM Stats Terminal-Bench
  leaderboard, Anthropic pricing documentation, aiflashreport and anotherwrapper
  aggregators for cross-checks). Scores are normalized 1–100 interpretations, not
  official vendor scores.
- Future sources: add a new file next to this one, e.g. `Sonnet_4_Recheck.md`, using the
  same headings.
