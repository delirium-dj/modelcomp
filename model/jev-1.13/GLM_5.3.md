# Jev 1.13 — findings by GLM 5.3

- Source: TypeSafe AI (`opencode/jev-1.13`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (current version `jev-1.13.0`)
- **Short description:** TypeSafe AI's flagship and the first "System One" model — not an LLM: it ingests a `state` plus typed questions (Noul yes/no, Choice, Score) and returns structured answers (typed values, probabilities, confidence) that code branches on directly. Category outlier on this otherwise-LLM comparison site; aliases `jev-latest` and `jev-preview` both resolve to `jev-1.13.0`.
- **Provider / access:** TypeSafe AI `https://api.typesafe.ai/v1/systemone` (custom System One endpoint — not Chat Completions, not Responses API); also carried on OpenCode Zen as `opencode/jev-1.13`.
- **Release / knowledge:** current version `jev-1.13.0` (official Models page, verified 2026-10-02); no published release date or knowledge cutoff.
- **IDs:** `opencode/jev-1.13`; direct API model IDs `jev-1.13.0` / `jev-latest` / `jev-preview`.
- **Context window:** 64K tokens per request total; 32K cap for `state` plus the longest question (official Models page). Rate limits 100K tokens/s and 80 requests/s (dynamically adjusting).
- **Modalities:** text in only (string, JSON object, or array of text values — "No image, audio, or video input", official); structured answers out (noul 0–1; choice + per-option probabilities + confidence; score + probabilities + confidence). No free-text generation, no reasoning traces, no tool-call emission.
- **Pricing (as of 2026-10-02):** $0.042/Mtok input ($42/Btok), output tokens free (official). Not trained on customer requests; zero data retention available for enterprise.
- **Architecture:** proprietary; trained with RLCD (reinforcement learning for calibrated decisions); same weights serve every account (no per-customer fine-tuning); English is the primary language, other languages handled but weaker.

### Raw benchmarks found

> Jev is now tracked by BenchLM (`jev-1-13-0`, updated 2026-10-02): 14 source-displayable rows, no composite score (kept unranked; variant "decision-system", Non-Reasoning). Standardized LLM-harness rows remain architecturally inapplicable: Jev does not generate text, so it cannot sit inside an agentic or chat harness.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (architecturally inapplicable)
- Tau3-Banking / Tau2-Bench: no verified public score found (architecturally inapplicable)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- JevBench 1.4: **63.29** (JevBench v1.4.2.2 results JSON, GitHub — fstandhartinger/jevbench, via BenchLM)
- JevBench 1.5: **72.13** (JevBench v1.5.4, benchmarkheaven.com API, via BenchLM)
- Decision Models Perplexity panel (provider-reported sample accuracy, measured September 2026, published 2026-10-01, via BenchLM; "outside general rankings"): WinoGrande **90.70%**, FinancialPhraseBank **76.98%**, RAGTruth **77.27%**, JudgeBench **78.57%**, BBH **94.27%**, JevBench public hard **73.27%**, TabFact **89.80%**, ContractNLI **77.45%**, Circa **84.60%**, Belebele **95.00%**, TruthfulQA binary **92.00%**, Perplexity Decision Panel composite **84.51%** (source: pinned Perplexity model card, huggingface.co/perplexity-ai/pplx-decider-v1-27b)
- GPQA Diamond: no verified public score found; HLE: no verified public score found; LCR / MLCR: no verified public score found; CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no composite assigned (BenchLM keeps Jev unranked)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (model cannot generate code)
- LiveCodeBench: no verified public score found; SciCode / AA-SciCode: no verified public score found; Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval score found; the official jaggedness page documents accuracy falling as the state grows with unrelated detail ("context rot") and recommends filtering state before sending it (docs.typesafe.ai/model-jaggedness/jev-1.13)

### Normalized scores (1–100)

- **Tool use: 10/100.** Zero agentic-harness scores exist and none can exist: Jev emits no text, no tool_use blocks, and no chat turns — it is a decision service consumed BY agents, never the agent itself. Capped by the total absence of tool-execution capability.
- **Reasoning: 50/100.** Real public numbers now exist and they are respectable for decision-style judgment: JevBench 1.5 72.13 (1.4: 63.29) and provider-reported panel accuracies clustering 73–95% (BBH 94.27%, TruthfulQA 92%, Belebele 95%, composite panel 84.51%). Still a System One model by design — BenchLM classes it Non-Reasoning; no math, counting, or System Two depth (vendor-documented); panel rows are provider-reported and kept outside general rankings — so it cannot score near LLM reasoning tiers.
- **Context window: 35/100.** 64K tokens per request (32K for state plus longest question), official — inside the <100K tier (10–49). Vendor-documented "context rot" (accuracy falls as irrelevant state grows) makes the reliable window smaller than the hard cap; no MRCR/RULER retrieval numbers exist.
- **Multimodal: 15/100.** Text-only input, official: "No image, audio, or video input" — strings, JSON, or text arrays in; structured values out (not even free text). Text-only convention (cf. Big Pickle 15).
- **Coding: 10/100.** Officially Jev does not generate text, write code, or hold a conversation; no coding benchmark can be run. Its only coding-adjacent role is picking among enumerated options. Capped by the architectural absence of code generation.
- **Cost efficiency: 100/100.** $0.042/Mtok input with free output tokens (official) — cheaper per Mtok than the ~$0.10/$0.20 reference tier (97–99). Inputs are not used for training; enterprise ZDR available.
- **Overall Score: 24/100.** Half-up mean of the five quality dims: (10 + 50 + 35 + 15 + 10) / 5 = 24. Not usable as an LLM driver model: pair it with a real coding/reasoning model and reach for it where code needs fast, calibrated, structured decisions (routing, scoring, guardrails) at near-zero cost.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-02
- Method: public internet research (TypeSafe official docs — Models page, jaggedness page — plus BenchLM tracker rows with sources); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
