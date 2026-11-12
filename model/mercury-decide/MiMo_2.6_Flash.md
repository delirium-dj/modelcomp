# Mercury Decide — findings by MiMo 2.6 Flash

- Source: Inception (`inception/mercury-decide`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide
- **Short description:** Inception Labs' diffusion-based "System One" decision model: reads shared context and answers typed questions (binary probability, categorical choice, ordinal score, span extraction) with a probability for every allowed option in one call; top use case = high-volume classification, claim verification and agentic routing. Not a variant — a distinct typed-decision endpoint in the Mercury family (separate from the Mercury 2/2.5/3 chat models).
- **Provider / access:** Inception API — `POST https://api.inceptionlabs.ai/v1/decisions` (typed endpoint; explicitly no chat completions, no streaming, no tool calling); also served on OpenRouter (`inception/mercury-decide`); vendor reports zero data retention on the Inception API and base 10.
- **Release / knowledge:** September 2026 (Artificial Analysis model page); independent evaluation published 2026-10-08; knowledge cutoff not published.
- **IDs:** `inception/mercury-decide` (API model `mercury-decide`); no OpenCode Zen Free ID exists — not a chat-completions model and absent from the provider catalog as of 2026-11-12 (an unlimited free tier is reported on OpenRouter by the vendor).
- **Context window:** 64,000 tokens total (vendor listing) / 66k as measured by Artificial Analysis; no max-output token count (answers are typed; output tokens are reported but not billed).
- **Modalities:** text + image in; text/JSON out; no reasoning-effort knob; no tool calls; returns typed answers with per-option probabilities (binary "noul", categorical, ordinal score, extraction).
- **Pricing (as of 2026-11-12):** $0.02 / 1M input (50% launch discount off the regular $0.04), cached input $0, output $0 (reported, not charged) per vendor docs; Artificial Analysis computes $70 per 1M Decision-Index tasks at the launch price (would be double at standard price); vendor reports an unlimited free tier on OpenRouter.
- **Architecture:** proprietary diffusion language model (Mercury dLLM family) tuned as a System One classifier; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon: no verified public score found (chat/agent harnesses do not apply — endpoint has no tool calling)
- Automation at a 1% error budget (**Vals AI**, held-out split, 265 claim items): **94% test coverage at 0.8% realized error** — within budget; 7 of 13 tested systems stayed within it (best: Claude Sonnet 5.5 100%/0.4%)

Reasoning / knowledge:

- **Artificial Analysis Decision Index: 62 / 100, rank #11 of 18** (median 64) — weighted over AA-Paperclip, EvalSafe-O*NET-AA, When2Call, AA-Omniscience-Decision v1.1, HLE-MultiChoice v1.1 and AA-Symmetry v1.1 (Artificial Analysis, verified 2026-11-12)
- Claim-verification accuracy (**Vals AI**, 400 items): **0.978** — statistically tied with TypeSafe Jev 1.13.0 (0.975; paired difference −0.017 to +0.021); by category 0.988 on subtle contradictions, 0.963 on direct support
- LegalBench accuracy (**Vals AI**): **0.869** (class-balanced **0.821**) vs Jev 0.740/0.730; contract-NLI subtasks 0.970/0.970; weakest subtask international_citizenship_questions 0.70
- Calibration, ECE (**Vals AI**): **0.011** on claim verification (tied with Jev), **0.058** on LegalBench (Jev 0.108)
- Decision-model accuracy range across tested configurations (**arXiv 2610.38448**): 67.71%–89.08% (abstract does not isolate Mercury Decide's per-model figure)
- Community ReportJevBench, Korean Roblox ToS moderation set (**AGI Hunt**): **66.7%** (Jev 83.3%, Kev 72.2%, Solar Decide 57.8%)
- GPQA Diamond / HLE standalone / LCR / CritPt: no verified public score found (covered only inside AA index components)

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: no verified public score found (out of scope for the decisions endpoint)

Long context:

- No long-context retrieval (MRCR/RULER/GraphWalks) reported for the 64–66K window; Vals' long-document test (1→64 judgments on one document) shows billed input growing ~1,700 → ~106,000 tokens, within window

Speed / cost (decision-specific):

- Artificial Analysis: **245 ms** median time per task (#12/18; median 209 ms — slower than average); **$70** per 1M tasks (#4/18; median $149 — well priced)
- Vals AI: median **0.16 s** for one judgment → **0.40 s** for 64 (1.44× Jev); faster than every tested LLM (3.7–65 s at 64 judgments); **$0.006 per 1,000 claims — lowest of the 13 systems** ($0.0022 per call at launch price)
- arXiv 2610.38448: **lowest mean final-attempt cost, $0.0069 per 1,000 questions** among tested configurations

### Normalized scores (1–100)

- **Tool use: 55/100.** No tool-calling support and no agentic-harness scores cap it, but as an automation router it is strong: 94% of held-out claims automated at 0.8% error within a 1% budget (Vals AI).
- **Reasoning: 58/100.** Frontier-grade on bounded claim verification (0.978) and LegalBench (0.869, Vals AI), but the composite AA Decision Index is 62 (#11/18, below the 64 median) — that below-median composite caps it.
- **Context window: 45/100.** 64K total (vendor) / 66k measured (AA) — below 100K, upper end of the sub-100K scaling band; no retrieval benchmark proves effective length.
- **Multimodal: 65/100.** Text + image input supported (AA spec; docs list Text/JSON/Image formats); text/JSON output only; no video/audio/PDF.
- **Coding: 15/100.** Zero verified coding benchmarks and code generation is out of scope for the typed-decision endpoint (floor for no evidence).
- **Cost efficiency: 98/100.** $0.02/1M input with $0 output and cached input; lowest cost of 13 systems at $0.006/1,000 claims (Vals) and #4/18 at $70/1M tasks (AA); only a true $0 tier scores higher.
- **Overall Score: 48/100.** Mean of the five non-cost dims (55 + 58 + 45 + 65 + 15) / 5 = 47.6 → 48; best-fit: a cheap, well-calibrated claim-verification/classification router for high-volume cost-sensitive pipelines — not a general reasoning, tool-calling or coding model.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: fresh public web research (vendor docs, Artificial Analysis, Vals AI independent evaluation, arXiv, community benchmark); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Inception docs — Models (pricing, `v1/decisions` endpoint)](https://docs.inceptionlabs.ai/get-started/models)
  - [Inception docs — Decisions capability](https://docs.inceptionlabs.ai/capabilities/decisions)
  - [Artificial Analysis — Mercury Decide (Decision Index 62, #11/18)](https://artificialanalysis.ai/decision-models/mercury-decide)
  - [Vals AI — An Evaluation of Inception's Mercury Decide (2026-10-08)](https://www.vals.ai/blogs/evaluation-of-mercury-decide)
  - [arXiv 2610.38448 — Benchmarking decision models against generative large language models](https://arxiv.org/abs/2610.38448)
  - [AGI Hunt — community ReportJevBench results](https://agihunt.info/en/p/1a0f5f2a1e44acbc0ad0b38cfd6)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
