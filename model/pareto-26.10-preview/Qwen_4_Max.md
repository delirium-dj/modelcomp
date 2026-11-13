# Pareto 26.10 Preview — findings by Qwen 4 Max

- Source: Unbiased / pareto-26.10-preview
- Date: 2026-11-13 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) and [../../model-findings.md](../../model-findings.md)

## Model card

- Name: Pareto 26.10 Preview
- Short description: A composite ("blended") AI system from Unbiased AI — the platform of Circuit & Chisel, a remote-first US/Canada team — that runs several models on the same request and returns one answer (not single-model routing); aimed at research, coding, and agentic workflows at low cost per task.
- Provider/access: Unbiased API only (one serving provider; OpenAI- and Anthropic-compatible, chat completions + messages only; `GET /v1/models` not implemented — callers must send `pareto` explicitly). Also resold/listed via AIML API (`unbiased/pareto-26.10-preview`) and free playground via Puter.js. Preview terms: evaluation access only; commercial/production use requires a separate written agreement; new accounts manually reviewed. Personal subscription $10/month (50M tokens/week, 20 RPM).
- Release/knowledge: October 1, 2026 — replaced Pareto 26.9 **in place under the unchanged model string `pareto`**; "may change without notice", vendor points stability-seeking users to the previous release. Knowledge cutoff not disclosed (depends on the undisclosed underlying model mix). A separate non-preview "Pareto 26.10" listing exists on Puter — distinct sibling, not this subject.
- IDs: `pareto` (vendor); `unbiased/pareto-26.10-preview` (resellers). No Hugging Face identifier; weights closed.
- Context window: 1,048,576 tokens (4× the September 26.9 release's 262,144); max output 131,072 (unchanged). No long-context retrieval evals published.
- Modalities: text + image input, text output; tool calling (function calling) supported. No audio/video evidence.
- Pricing (as of 2026-11-13): vendor model card now reads $0.80 input / $0.03 cached input / $3.20 output per 1M (96% cache discount); Puter confirms $0.80/$3.20. **Conflict labelled:** on Oct 1, OrcaRouter observed the vendor's own site still at the September rates $2.50/$0.25/$7.50 while the routed catalogue listed $0.80/$0.03/$3.20 — the card has since moved to the lower figures; no promotional end date published, preview pricing is not a commitment.
- Architecture: composite ensemble — several frontier/open models run per request, best answer returned; no mid-conversation model switching (prompt caching preserved). Underlying mix undisclosed and may change between releases, so scores cannot be attributed to any single model. Operational note: Sept 16 changelog — ~13% of long non-streaming requests hit a 120s timeout; gateway ceiling raised to 300s.

### Raw benchmarks found

**All scores vendor-run, preliminary (October 1, 2026 runs), and independently unreproduced.** Artificial Analysis has no page for Pareto; BenchLM lists 3 source-displayable rows and no overall score (unranked). The vendor publishes a reproducible head-to-head harness, but no third-party rerun exists yet.

- DeepSWE v1.1 (agentic coding): 69.9% at $0.24/task. Vendor chart peers (other labs' harnesses, not directly comparable): GPT-6.1 Sol 75.2% at $0.65, GPT-6 Astra 74.0% at $4.43, GPT-6 Luna 66.6% at $0.22; OrcaRouter notes GLM-5.3 and Kimi K3 listed at 69.0 — a practical tie.
- Terminal-Bench 4.0 (agentic terminal use): 50.8% at $0.48/task. Peers: Claude Sonnet 5.5 70.6% at $12.54 (Anthropic), GPT-6 Astra 59.6% at $5.86, GPT-6.1 Sol 56.1% at $1.82, Fable 5.1 55.1% at $15.78 (AA), DeepSeek V4.1 Flash 26.8% at $1.16, GPT-6 Luna 12.6% at $0.24. (OrcaRouter's Sept 21 transcription lists Astra 58 / Fable 5.1 56 — snapshot difference labelled.)
- HLE text-only, no tools (expert reasoning): 49.9% at $0.008/task. Peers (AA no-tools): Fable 5.1 59.1% at $1.59, Sonnet 5.5 55.0% at $0.54, Astra 54.7% at $0.38, GPT-6.1 Sol 52.9% at $0.078, DS V4.1 Flash 39.2% at $0.042, GPT-6 Luna 38.5% at $0.012.
- GPQA-Diamond (science reasoning): 92.4% at $0.004/task (no peer cost/task published for this eval).
- Vendor claim: "matching or setting the Pareto frontier on all four benchmarks" — its own chart shows higher scorers on TB 4.0 and DeepSWE; the claim holds only on score-per-dollar, not raw score.
- Prior release Pareto 26.9 (September, 262K context — NOT this model): DeepSWE 74, ArXivMath 88, MMMU-Pro 78, TB 4.0 51, HLE no-tools 49 (all vendor-run). No MMMU-Pro or other vision eval published for 26.10 Preview.
- Sibling note: Puter's non-preview "Pareto 26.10" listing carries a Parallel search-leaderboard Search Intelligence Score of 68.6 (34.8 without search) at $116/1K tasks (Oct 1 eval) — attributed to that sibling listing, not verified for this Preview.
- No independent performance metrics (tok/s, TTFT) published anywhere fetched.

### Normalized scores (1–100)

- **Tool use: 78/100.** TB 4.0 50.8% would rank above DeepSeek V4.1 Flash 1017 (42.3 vendor) and near GPT-6.1 Terra-class terminal ability, and DeepSWE 69.9% shows real agentic depth — but every number is vendor-run and unreproduced, with no BrowseComp/MCP/GDPval evidence; discounted accordingly.
- **Reasoning: 81/100.** GPQA-D 92.4% and HLE text-only 49.9% are frontier-adjacent on paper (HLE between GPT-6 Sol 47.9 and GPT-6.1 Sol 52.9), but vendor-only preliminary runs with no CritPt/ARC/AIME corroboration and an undisclosed model mix cap confidence.
- **Context window: 80/100.** 1M tokens with 131K max output is a real 4× upgrade over 26.9, but zero retrieval evals (no LCR/MRCR/MLCR), composite context handling unverified, and preview "may change without notice" terms — the no-retrieval-evidence 1M calibration (DS Vision-Exp 82, Omni-Flash 82) minus preview instability.
- **Multimodal: 72/100.** Text + image input with tool calling but no vision benchmark published for this release (26.9's MMMU-Pro 78 belongs to the prior release) — the standard image-in-no-vision-evals score.
- **Coding: 80/100.** DeepSWE v1.1 69.9% ties the GLM-5.3/Kimi K3 cluster and beats GPT-6 Luna 66.6%, at a remarkable $0.24/task; TB 4.0 50.8% supports it. Single-metric vendor evidence with no SWE-V/SWE-Pro/LCB/FrontierCode rows keeps it below the independently verified 84–86 coding anchors.
- **Cost efficiency: 85/100.** Measured $0.24/task (DeepSWE) and $0.48/task (TB 4.0) at frontier-adjacent scores are genuinely Pareto-frontier cost-performance if reproduced — several times cheaper per task than GPT-6.1 Sol/Astra at similar scores; $0.80/$3.20 with 96% cache discount is moderate per token. Deductions: vendor-measured costs, preview price instability (the $2.50/$7.50 vs $0.80/$3.20 channel gap), evaluation-only access, and ensemble internals that could change the cost profile without notice.
- **Overall Score: 78.2/100.** Mean of the five quality dimensions (78+81+80+72+80)/5 = 78.2; cost excluded per methodology. A promising cost-frontier composite whose entire evidence base is four preliminary vendor numbers — score reflects the claims with an explicit unreproduced-evidence discount, not independently verified capability.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-13
- Method: public internet research (official Unbiased model card + homepage, OrcaRouter independent analysis, Puter developer listing, BenchLM aggregator); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: vendor-card $0.80/$0.03/$3.20 (current) vs OrcaRouter's Oct 1 observation of $2.50/$0.25/$7.50 on the vendor site vs routed-catalogue $0.80/$3.20; TB 4.0 peer transcription Astra 59.6/Fable 5.1 55.1 (Oct 1 card) vs 58/56 (Sept 21 comparison via OrcaRouter); Pareto 26.9 scores (DeepSWE 74, ArXivMath 88, MMMU-Pro 78) kept separate from 26.10 Preview; Puter's non-preview Pareto 26.10 sibling (Parallel Search Intelligence 68.6) not attributed to this Preview. All four benchmark scores are vendor-run preliminary Oct 1 2026 runs with a public but unrerun harness; AA has no page; BenchLM unranked. Composite system: scores describe the ensemble, not any single underlying model.
- Reference URLs:
  - [Pareto 26.10 Model Card — Unbiased](https://unbiased.ai/model-card/)
  - [Unbiased AI homepage (subscription terms)](https://unbiased.ai/)
  - [Pareto 26.10 Preview: 1M Context, Same Model String — OrcaRouter](https://www.orcarouter.ai/blog/unbiased-pareto-26-10-preview)
  - [Pareto 26.10 Preview — Puter Developer](https://developer.puter.com/ai/unbiased/pareto-26.10-preview/)
  - [Pareto 26.10 Preview — BenchLM](https://benchlm.ai/models/pareto-26-10-preview)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.