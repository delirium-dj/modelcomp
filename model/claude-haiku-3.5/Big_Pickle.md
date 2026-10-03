# Claude Haiku 3.5 — findings by Big Pickle

- Source: Anthropic (`claude-3-5-haiku-20241022`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5 (a.k.a. Claude 3.5 Haiku)
- **Short description:** Anthropic's October 2024 small/fast model, built as a drop-in upgrade to
  Claude 3 Haiku — same class of latency, several times the intelligence, and at release it beat
  Claude 3 Opus on several knowledge benchmarks. Its selling point was never frontier quality but
  throughput-per-dollar on user-facing and sub-agent workloads. **Two flags:** (a) this repo folder
  is scaffolded (`meta.json` carries `"scaffolded": true`) and its `opencode/claude-haiku-3.5` route
  does not exist — OpenCode Zen serves `claude-haiku-4-5` instead; (b) the model is **retired**.
- **Provider / access:** Anthropic Messages API (`POST /v1/messages`), model ID
  `claude-3-5-haiku-20241022` — **retired 2026-02-19**. Historically also Amazon Bedrock
  (`anthropic.claude-3-5-haiku-20241022-v1:0`), Google Vertex AI
  (`claude-3-5-haiku@20241022`, Vertex shutdown 2026-07-05), OpenRouter
  (`anthropic/claude-3.5-haiku`), Replicate and Vercel AI Gateway. No first-party access remains.
- **Release / knowledge:** released 2024-10-22; **knowledge cutoff July 2024** (the most recent of
  any Anthropic model at the time — now nearly two years stale). Deprecated 2025-12-19, retired
  2026-02-19; Anthropic's named replacement is `claude-haiku-4-5-20251001`.
- **IDs:** `claude-3-5-haiku-20241022` (Anthropic). There is **no `opencode/claude-haiku-3.5` ID** —
  Zen's live catalog returns `claude-haiku-4-5` only, and no free tier ever existed.
- **Context window:** **200,000 tokens**, **max output 8,192 tokens** (Anthropic's published model
  comparison table; corroborated by CloudPrice's spec sheet). The 8K output ceiling is 1/8th of the
  64K+ typical of current models — a real constraint for long-form generation.
- **Modalities:** text in/out at launch; **image input added 2025-02-25**; PDF input also accepted.
  No audio or video input; text-only output. Function/tool calling and JSON mode supported.
  **No extended-thinking or reasoning mode** — AA lists `Reasoning: No`.
- **Pricing (as of 2024-12-05, final rate before retirement):** **$0.80 / 1M input, $4.00 / 1M
  output.** Launched at $1.00/$5.00 on 2024-11-04 and cut ~20 days later (Anthropic's own
  correction notice dated 12/03/2024). Prompt caching gave up to 90% input savings.
- **Architecture:** proprietary. Parameter count never published; Anthropic states only that it is
  their fastest model of the generation.

### Raw benchmarks found

**Vendor-reported (Anthropic Model Card Addendum, 2024-10-22):**

- SWE-bench Verified: **40.6%** (Table 2, pass@1; beat the original Claude 3.5 Sonnet's 33.4% and
  Claude 3 Opus's 22.2%; SOTA leaderboard was 45.2% at the time)
- TAU-bench (τ-bench, pass^1): Retail **51.0%**, Airline **22.8%** (Table 3)
- GPQA Diamond 0-shot CoT: **41.6%** · MMLU 5-shot CoT **80.9%** / 5-shot 77.6% / 0-shot CoT 80.3% ·
  MMLU-Pro 0-shot CoT **65.0%** · MATH **69.2%** · HumanEval 0-shot **88.1%** · MBPP **85.6%** ·
  MGSM 0-shot CoT 85.6% · DROP 3-shot F1 83.1

**Independent / third-party (DataLearner aggregated, with ranks):**

- MMLU 77.60 (**#61/124**) · MMLU-Pro 65.0 (**#114/176**) · GPQA 37.50 (**#15/17**)
- GPQA Diamond 41.60 (**#429/463**) · HLE **3.60** (**#547/565**)
- MATH 69.20 (**#23/42**) · FrontierMath **0.30** (**#57/60**)
- HumanEval 88.10 (**#30/140**) · MBPP 85.60 (**#10/96**) · LiveCodeBench **31.40** (**#215/251**)
- Aider-Polyglot 28 (**#44/59**)
- Terminal-Bench 2.1 **10.10** (**#176/196**, with tools) · Terminal-Bench Hard **2.30** (**#229/244**)
- τ²-Bench Telecom **24.60** (**#231/264**, with tools)
- IF Bench 42.80 (**#198/282**) · SimpleQA 8.02 (**#44/47**) · Creative Writing 1143.50 (**#82/106**)
- **MMMU-Pro 45.60 (#212/229)**

**Artificial Analysis:**

- Intelligence Index **9** (estimated, legacy scale) / **18.7, #235** on the revised index
- HLE **4%** · CritPt **0%** · AA-LCR v1.1 **27%** · GDPval-AA v2.1 **198** Elo · AA-Omniscience **−23**
- Sub-index ranks: Coding Index 10.7 **#287**, MMLU-Pro #240, GPQA #360, HLE #426, LiveCodeBench
  #200, AIME #147, IFBench #194, SciCode #263, MATH-500 #119, LCR #230, TB-Hard #290, TAU2 #263
- TTFT ranked **#35**; output throughput reported ~170 tok/s (Serenities AI)

**Vendor-vs-independent conflict worth recording:** Anthropic reports SWE-bench Verified 40.6%;
independent re-measurement puts it at **22.0%** (Serenities AI). The vendor number came with a
bespoke scaffold; the replicated number does not. Same pattern on GPQA (41.6% official vs 35.0%
third-party). Treat vendor figures as a scaffold-assisted ceiling.

Agent / tool use:

- Terminal-Bench 2.1: **10.10%** (#176/196)
- Terminal-Bench Hard: **2.30%** (#229/244)
- Tau2-Bench Telecom: **24.60%** (#231/264) — Tau-bench v1 Retail **51.0%** / Airline **22.8%**
  (Anthropic's own harness)
- GDPval-AA: **198** Elo
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found** (it predates
  MCP-Atlas; `claude-3-5-haiku` is absent from that 20-model leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (#429/463)
- HLE: **3.6%** (#547/565)
- LCR / MLCR: **27%** (AA-LCR v1.1)
- CritPt: **0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **18.7 / #235** (9 on the legacy scale)
- Omniscience Accuracy / Hallucination Rate: **−23 index**; SimpleQA 8.02 (#44/47)
- MMLU 77.6 / MMLU-Pro 65.0 / MATH 69.2 / FrontierMath 0.3

Coding:

- SWE-bench Verified: **40.6%** (Anthropic) / **22.0%** (independent)
- LiveCodeBench: **31.4%** (#215/251)
- HumanEval **88.1%** (#30/140) · MBPP **85.6%** (#10/96) · Aider-Polyglot 28 (#44/59)
- SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**

Long context:

- **no long-context retrieval measurement reported** (no MRCR, RULER or GraphWalks row). The
  200K window is documented as a capacity, not as a measured retrieval result.

Multimodal:

- MMMU-Pro **45.60%** (#212/229)

### Normalized scores (1–100)

- **Tool use: 32/100.** τ-bench Retail 51.0% is genuinely strong and matches the frontier reference
  for structured tool use, and τ²-Telecom 24.6% sits mid-band — but everything measured on
  long-horizon terminal work is bottom-of-table (TB2.1 10.1% #176/196, TB-Hard 2.3% #229/244) and
  GDPval-AA 198 Elo is negligible. The bottom-half anchors, not the retail number, set this score.
- **Reasoning: 48/100.** Knowledge is real — MMLU 77.6, MMLU-Pro 65.0, MATH 69.2 (#23/42) — but every
  *hard* reasoning probe collapses: HLE 3.6%, FrontierMath 0.3%, CritPt 0%, GPQA-D 41.6% (#429/463),
  AA Index 18.7 (#235). This is the profile of a fast non-reasoning model with a July-2024 cutoff:
  it sits just under the 55–65 mid band (GPQA 60–80%, Index 20–35) because GPQA and Index both miss.
- **Context window: 70/100.** Exactly the tier mapping's 200K = 70. **Caveat, not a separate score:
  8,192 max output** is a hard ceiling that badly constrains long generations.
- **Multimodal: 62/100.** Image input (added 2025-02-25) plus PDF, text-only output — the
  "+image in = 60–70" band, landed in its lower half by MMMU-Pro 45.6% (#212/229). No audio or video
  input, so it cannot reach the 75+ tiers.
- **Coding: 48/100.** Strong single-file Python (HumanEval 88.1%, MBPP 85.6%) but collapses on real
  repository work: LiveCodeBench 31.4%, Aider-Polyglot 28, Coding Index 10.7 (#287), and the
  SWE-bench Verified gap between Anthropic's 40.6% and the 22.0% replication. Below the 65–75 mid
  band, which assumes LiveCodeBench ~80%.
- **Cost efficiency: 90/100.** $0.80/$4.00 — cheaper than the ~$1.25/$4.25 ≈88 anchor and above the
  ~$0.60/$2.20 ≈92 anchor, on a model whose speed was its headline feature. Not scored on a free
  tier: no `opencode/claude-haiku-3.5` route has ever existed.
- **Overall Score: 52.0/100.** (32 + 48 + 70 + 62 + 48) / 5 = 52.0. Best fit: nothing, going
  forward — the model is retired on every first-party platform. Historically it was a cheap
  high-volume classifier/summarizer or sub-agent, valued for ~170 tok/s and low latency rather than
  for agentic or coding depth.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-03
- Method: public internet research — Anthropic's Model Card Addendum (2024-10-22) and launch post,
  Anthropic's model-deprecations page, Artificial Analysis model comparison, DataLearner and
  llm-stats aggregated benchmark tables with ranks, CloudPrice spec sheet. Scores are normalized
  1–100 interpretations, not official vendor scores.
- Caveat on the folder: `opencode/claude-haiku-3.5` in `meta.json` is a scaffolded stub for a route
  Zen does not serve. The scored subject is the real, now-retired Anthropic model.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_4_5.md`, using the same headings.