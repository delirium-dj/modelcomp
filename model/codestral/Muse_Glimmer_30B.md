# Codestral — findings by Muse Glimmer 30B

- Source: Mistral AI (`codestral-2508`, curated id `opencode/codestral`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral
- **Short description:** Mistral AI's code-specialized model line for low-latency fill-in-the-middle and code generation in IDE workflows. The live `codestral` alias today resolves to Codestral 25.08, a commercial Premier-tier code model with structured outputs, function calling and FIM endpoint. Earlier 22B/24.05 and 25.01 generations are retired.
- **Provider / access:** Mistral API `codestral-2508` (Chat Completions `/v1/chat/completions`, FIM `/v1/fim/completions`), Mistral Vibe / Le Chat, OpenRouter `mistralai/codestral-2508`. No OpenCode Zen route verified 2026-11-06.
- **Release / knowledge:** announced 2025-07-30 (released end of July 2025); knowledge cutoff not published.
- **IDs:** `codestral-2508` (Mistral), `mistralai/codestral-2508` (OpenRouter). No Free ID on Zen.
- **Context window:** 128K tokens total (Mistral docs model page, verified 2026-11-06). The scaffolded `meta.json` 128K matches.
- **Modalities:** Text in → text out; native function calling, structured outputs, predicted outputs, prefix caching, batching, Document QnA, FIM completions. No image/audio/video.
- **Pricing (as of 2026-11-06):** $0.30 / 1M input, $0.90 / 1M output (Mistral API / OpenRouter standard). No free tier.
- **Architecture:** proprietary commercial code model; parameter count and MoE topology not published. Retired 22B original was dense; 25.08 size undisclosed.

### Raw benchmarks found

> All numbers are public leaderboard samples sampled Oct 29, 2026. No independent Artificial Analysis Intelligence Index row exists for this ID.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- ALE-Bench (coding, AtCoder Heuristic): **137.78** Performance Self-Refine x1 (score), rank **83/83** (0th percentile) — source BenchmarkList
- TeXFix-Bench (document/markup repair): **77.5** score, rank **2/78** (83rd percentile) — source BenchmarkList
- ObviousBench (intelligence, answer pass³): **41.0%** answer pass³, rank **258/275** (6th percentile) — source BenchmarkList
- Design Arena (multimodal/design Elo): **1065** Elo, win rate **45.4%** (202W/243L, 445 battles), rank ~16th percentile — source BenchmarkList
- LisanBench (reasoning word-chain): Difficulty-Weighted **13.15**, Validity **3.6%**, rank **115/126** (9th percentile) — source BenchmarkList
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks value at window length: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 34/100.** Function calling and FIM endpoint documented; zero verified agentic/tool benchmarks (Terminal-Bench, Tau2/3, GDPval, Claw-Eval, MCP-Atlas) — methodology missing-data penalty applies.
- **Reasoning: 39/100.** ObviousBench 41.0% at 6th percentile and LisanBench validity 3.6% with dead-last ORCFLO Analysis cohort placement; no GPQA/HLE/Index row.
- **Context window: 56/100.** 128K total sits in 100K–200K band (50–64); interpolated to 56. Below retired 25.01 256K and far below 1M frontier norm.
- **Multimodal: 15/100.** Text/code only; no image/audio/video input. Design Arena Elo reflects output generation quality, not multimodal input capability.
- **Coding: 51/100.** TeXFix-Bench 77.5 rank 2/78 is strong for structured repair, offset by ALE-Bench 137.78 rank 83/83 last place and absence of SWE-bench/LiveCodeBench/SciCode numbers; vendor improvements are production telemetry, not public benchmarks.
- **Cost efficiency: 92/100.** $0.30/$0.90 per 1M is near-bottom-of-market for commercial API with no free tier; methodology anchor ~92 for this price band.
- **Overall Score: 39/100.** Half-up mean of five quality dims (34+39+56+15+51)/5 = 39.0. Best-fit recommendation: a cheap, very fast inline-completion / document-repair utility for high-volume, human-reviewed IDE flows; not a reasoning, agentic or benchmark-grade coding model.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-11-06
- Method: public internet research — Mistral docs model page for codestral-25-08, Mistral blog announcing Codestral 25.08, OpenRouter model page, BenchmarkList model page for mistralai-codestral-2508, Artificial Analysis checked and untracked. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Docs — Codestral model page (`codestral-25-08`)](https://docs.mistral.ai/models/codestral-25-08)
  - [Mistral Blog — Announcing Codestral 25.08](https://mistral.ai/news/codestral-25-08/)
  - [OpenRouter — mistralai/codestral-2508](https://openrouter.ai/mistralai/codestral-2508)
  - [BenchmarkList — Mistral: Codestral 2508](https://benchmarklist.com/models/mistralai-codestral-2508)
  - [Mistral Blog — Codestral original launch 2024-05-29](https://mistral.ai/news/codestral/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
