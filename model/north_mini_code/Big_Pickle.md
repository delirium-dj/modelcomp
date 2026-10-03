# North Mini Code — findings by Big Pickle

- Source: Cohere / Cohere Labs (`north-mini-code-1-0`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (North-Mini-Code-1.0)
- **Short description:** Cohere's first agentic coding model and the debut of its **North** family —
  a 30B-total / 3B-active sparse MoE post-trained specifically for code generation, agentic
  software engineering and terminal work, small enough to run on a single H100. It is a
  *specialist*: the post-training was two-stage cascaded SFT followed by RLVR with verifiable
  rewards, focused entirely on agentic coding. **Flag:** this folder's `meta.json` records the
  scaffolded ID `opencode/north_mini_code`, but OpenCode's populated record for this model is
  `north-mini-code-1-0`; the bare `north-mini-code` record is an all-null stub (see below).
- **Provider / access:** OpenRouter `cohere/north-mini-code:free` (Chat Completions), Cohere API
  (**Chat V2**), Cohere Model Vault for managed deployment, and a free tier on OpenCode. Weights are
  public at `CohereLabs/North-Mini-Code-1.0` in bf16, fp8 and w4a16. Self-host requirement:
  **1× H100 at FP8 or FP4**.
- **Release / knowledge:** released **2026-06-09**; **knowledge cutoff 2025-09-23**.
- **IDs:** `north-mini-code-1-0` (Cohere / OpenCode Data), `North-Mini-Code-1.0` (weights),
  `cohere/north-mini-code:free` (OpenRouter).
- **Context window:** **256,000 tokens input, 64,000 max output.** Verified three ways: OpenCode's
  record reports `contextTokens: 256000` / `outputTokens: 64000`; Cohere's changelog states "256K
  input, 64K output"; OpenRouter reports a 256,000-token window and 64,000 max output.
- **Modalities:** **text in, text out.** No image, audio or video input. Reasoning: **yes**
  (interleaved thinking, "works best when turned on"). Tool calling: **yes** — trained for it, with
  tool descriptions supplied as JSON schema via chat templates.
- **Pricing (as of 2026-10-03):** **$0 input / $0 output** on the evaluated free tier (OpenCode and
  OpenRouter `:free`); OpenCode's record lists all three price fields as `0`. Being Apache 2.0 open
  weights, the compute cost is fully self-hostable.
- **Architecture:** **open weights, Apache 2.0.** 30B total / 3B active decoder-only sparse MoE,
  248,320-token vocabulary, a single dense layer before the sparse layers, and an efficient
  attention scheme interleaving sliding-window-with-RoPE and global-without-positional-embeddings at
  a **3:1** ratio. Activated ratio: 10%.

### Raw benchmarks found

**Cohere's own evaluation** (model card, sourced via OpenCode's data record):

- SWE-bench Verified: **67.6%** resolved (SWE-agent harness)
- SWE-bench Pro: **40.2%** resolve rate (SWE-agent harness)
- Terminal-Bench v2 and Terminal-Bench Hard: **no verified public value found** — Cohere ran both
  (TB Hard directly on Terminus-2 to match the AA Intelligence Index methodology) but the results
  exist only as a chart image. Their TB v2 harness was a ReAct loop with a single terminal-use tool
  on Harbor's Tmux session.
- LiveCodeBench v6 and SciCode: **no verified public value found** from Cohere (chart image); SciCode
  is available independently below.

**Independent (Artificial Analysis, via BenchLM, page updated 2026-10-02):**

- GPQA Diamond **75.7%** · HLE **11.1%** · AA-LCR **37.3%** · CritPt **0.3%**
- AA-SciCode **38.8%** · AA-IFBench **57.6%** · τ²-bench **37.4%**
- Omniscience Index **−48.6** · Accuracy **18.9%** · **Hallucination Rate 83.2%**
- AA Intelligence Index **9.9** (BenchLM's normalization) vs **27.6** (OpenCode's record of the same
  AA article) — the same scale-version split seen elsewhere: AA's v4 rescaling moves these upward.
- GDPval-AA **0.0%** (BenchLM) vs **14%** win rate (OpenCode's record) — a direct conflict; both cite
  the same AA article.
- **AA Coding Index 33.4** (Cohere's blog and OpenCode's record both cite this)
- BenchLM overall: **not computed / unranked** — only 12 of 645 benchmarks have public rows.

**Other:**

- llm-stats: LLM Stats Score **22.0 (#187 · 5 evals)**, Reasoning 21.9 (#180), Coding 11.2 (#164),
  Agents 0.9 (#176)
- Cohere internal speed test: up to **2.8× higher output throughput** than Devstral Small 2 at
  identical concurrency and hardware, with **30% better inter-token latency**; TTFT roughly level.

Agent / tool use:

- SWE-bench Verified: **67.6%** · SWE-bench Pro: **40.2%** (SWE-agent harness)
- Tau2-Bench: **37.4%** (Telecom)
- GDPval-AA: **14% win rate** / 0.0% (conflicting)
- Terminal-Bench 2.1 / TB v2: **no verified public score found** (vendor chart image only)
- MCP-Atlas / Toolathon / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **75.7%**
- HLE: **11.1%**
- LCR / MLCR: **37.3%**
- CritPt: **0.3%**
- Artificial Analysis Intelligence Index / BenchLM overall: **27.6** (AA v4) / BenchLM unranked
- Omniscience Accuracy / Hallucination Rate: **18.9% / 83.2%**

Coding:

- SWE-bench Verified: **67.6%** · SWE-bench Pro: **40.2%**
- SciCode / AA-SciCode: **38.8%**
- AA Coding Index: **33.4**
- LiveCodeBench v6 / DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- **no long-context retrieval measurement reported** (no MRCR, RULER or GraphWalks row). The 256K
  window is documented as a capacity, not a measured retrieval result.

### Normalized scores (1–100)

- **Tool use: 62/100.** The strongest evidence here is agentic: **SWE-bench Verified 67.6%** on the
  SWE-agent harness and **τ²-Bench 37.4%**, which sits above the 10–25% τ³ mid reference. Tool use is
  the explicit target of the RLVR post-training. What caps it below the upper mid: **GDPval-AA at
  14% (or 0.0%)** — negligible economic-value output — and no readable Terminal-Bench number to
  corroborate the 88%+ frontier marker.
- **Reasoning: 58/100.** Lands squarely in the 55–65 mid band: GPQA Diamond **75.7%** (mid 60–80%),
  LCR **37.3%** (mid <40%), AA Index **27.6** (mid 20–35), HLE **11.1%** just over the mid <10%.
  Deliberately not higher: **83.2% hallucination rate** with an Omniscience Accuracy of only 18.9%
  and CritPt at 0.3%. For a coding specialist that is an acceptable trade — but it is a real,
  measured weakness, and it is why this is a 58 and not a 70.
- **Context window: 74/100.** 256,000 tokens sits in the 200K–500K tier (65–84) above the 200K = 70
  anchor, with a **64,000 max output** that clears the 64K caveat threshold outright. Held below the
  top of the tier because there is **no measured long-context retrieval** to justify it.
- **Multimodal: 15/100.** Text in, text out — text-only, which the methodology scores 10–20 (and
  which this project anchors at 15).
- **Coding: 68/100.** The dimension this model was built for, and the numbers back the intent:
  **SWE-bench Verified 67.6%** and **SWE-bench Pro 40.2%** are strong for a 3B-active model. Held in
  the 65–75 mid band rather than higher because the mid band's precondition (LiveCodeBench ~80%) is
  unverified, and the independent coding markers are modest: AA-SciCode **38.8%** (below the 40% line)
  and **AA Coding Index 33.4** against a 70+ frontier reference.
- **Cost efficiency: 100/100.** **$0 in / $0 out** on the evaluated tier — genuinely free on OpenCode
  and OpenRouter `:free` — and Apache 2.0 weights mean there is no licensing floor either.
- **Overall Score: 55.4/100.** (62 + 58 + 74 + 15 + 68) / 5 = 55.4. Best fit: a free, single-GPU
  agentic coding executor — terminal tasks, mechanical repo edits, SWE-agent-style loops — where
  throughput and zero marginal cost beat depth. It is not a reasoning model: 83.2% hallucination and
  text-only I/O rule it out of anything knowledge- or vision-facing.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-03
- Method: public internet research — Cohere's launch blog and docs changelog, the
  `CohereLabs/North-Mini-Code-1.0` model card on Hugging Face, OpenCode's Data records for
  `cohere/north-mini-code-1-0`, BenchLM's model page (AA-sourced rows), llm-stats, and the OpenRouter
  free-variant listing. Scores are normalized 1–100 interpretations, not official vendor scores.
- ID note: `opencode/north_mini_code` in `meta.json` is a scaffolded stub. OpenCode publishes two
  records — `cohere/north-mini-code-1-0`, fully populated (specs, $0 pricing, six benchmarks), and a
  bare `cohere/north-mini-code` whose every field is null despite 1,716 unique users and 224
  sessions. The scored subject is the real, fully documented Cohere model.
- Gap for a future pass: Cohere's Terminal-Bench v2, Terminal-Bench Hard and LiveCodeBench v6 values
  are published **only as a chart image** on the model card. Reading it would firm up Tool and Coding.
  Two conflicts also need a first-party tiebreak: GDPval-AA (14% vs 0.0%) and the AA Intelligence
  Index (27.6 vs 9.9, an index-version artifact).
- Future sources: add a new file next to this one, e.g. `North_Mini_Code_2.md`, using the same headings.