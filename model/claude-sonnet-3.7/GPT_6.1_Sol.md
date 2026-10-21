# Claude Sonnet 3.7 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-3-7-sonnet-20250219`, historical standard/extended-thinking model.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude3.7 Sonnet, tracked here as Claude Sonnet3.7. Single hybrid model with standard and opt-in extended thinking, not separate weights or a newer Claude4 checkpoint.[1]
- **Short description:** Original hybrid-reasoning Sonnet launched with Claude Code research preview. Historical coding/reasoning measurements are preserved despite current retirement.[1][2]
- **Provider / IDs / lifecycle:** Native snapshot **`claude-3-7-sonnet-20250219`**, launch Messages API/Bedrock/Vertex. **Anthropic-operated platforms retired it2026-02-19**, deprecated2025-10-28. Current exact gateway **`anthropic/claude-3.7-sonnet`** returns a model record with **no endpoints**. Do not interpret a surviving evaluator profile or historic free app plan as a current working API; partner lifecycles are separate. No authenticated generation/current free Zen ID verified.[1][2][3]
- **Release / cutoff:** Public **2025-02-24**, snapshot datedFeb19; **October2024 cutoff as recorded by AA**, not public-launch date.[1][4][5]
- **Context / output:** **200,000 total** in both AA modes/Vals. Original primary launch advertises generated-output/thinking budget **up to128K**; Vals profile used **8,192 max output**, an evaluation constraint rather than proof of an8K native model cap. Current retired service has no newly verified universal output allowance.[1][4][5][6]
- **Modalities / tools:** **Text/image/PDF → text**, functions, external computer/code tools and app repository integration; no verified native audio/video/media generation. Thinking budget spends output tokens; no automatic later-generation adaptive/interleaved-thinking capabilities inherited. Separate scaffold planning tool is not the same as API extended-thinking mode.[1][3][6]
- **Pricing:** Historical **$3 input/$15 output per1M**, including thinking, from original publisher. AA NT retains **$0.30 cache read/$3.75 write**, Thinking current price fields null. These are legacy rates, **not current native purchase quotes**. Free consumer launch excluded extended thinking, and establishes no present exact-model free API.[1][2][4][5]
- **Architecture:** Proprietary; exact parameter/active count and public weights not verified.[4][5]

### Raw benchmarks found

**Provenance:** Complete original launch appendix and benchmark chart image/footnotes inspected. AA exact **Thinking UUID `13358187-4584-479c-ab43-5bcdf8f297a4`**, NT **`d925845d-39ad-4de3-8495-f176b79828c0`**, Feb24. Current composite indices **estimated**. Vals exact Thinking snapshot, Anthropic/temp1/**8,192 output**, not a matched64K-budget vendor replication.[1][4][5][6][7]

Agent / tool use:

- Vendor **TAU-bench Retail81.2% /Airline58.4%**, **no API extended thinking** in chart, but scaffold planning tool and Airline policy addendum, max steps **30→100**. These are originalTAU, not Tau2/Tau3.[1][7]
- Independent AA **Tau2 54.68% Thinking/50.0% NT**, **IFBench48.30%/44.01%**. No verified exact TB2.1/TB4, Tau3-Banking, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon/MCP-Atlas/SWE Atlas QnA found; nulls not zeros.[4][5]

Reasoning / knowledge:

- Primary **64K Thinking GPQA78.2%**, **84.8% with parallel candidate scoring**; NT68.0%. **AIME2024 61.3%**, selected parallel80.0%, NT23.3%; these are not AIME2025. **MATH500 96.2%/82.2%**, **MMMLU86.1%/83.2%**, **IFEval93.2%/90.8%** Thinking/NT.[7]
- Independent AA Thinking **GPQA77.17% /HLE9.67% /AIME2025 56.33% /CritPt0.86%**; NT **65.56%/4.16%/21.0%/0.00%**. NT CritPt is a measured zero, not a missing field.[4][5]
- Vals Thinking **GPQA75.25% /MMLU-Pro82.73% /LegalBench82.52% /TaxEval74.04%**; these scoped results/displayed73.85% aggregate do not define general intelligence.[6]
- **AA estimated Index17.711 Thinking/15.271 NT**. **Omniscience accuracy28.03% /hallucination39.97% /reliability−0.7333 Thinking**; NT **28.20%/52.81%/−9.7167**. Improved abstention is not a large increase in factual coverage.[4][5]

Coding / visual / context:

- Primary **SWE Verified62.3% full500, no API extended thinking**, bash+string edit+planning tool;11 infrastructure-incompatible tasks counted as failures. On the **489 compatible-task subset**, same ordinary method **63.7%**, selected high-compute **70.3%** using parallel attempts/regression-test filtering/scoring model. Neither subset result is an ordinary full500 pass rate.[1][7]
- Independent AA **LiveCodeBench47.30% Thinking/39.37% NT**, Vals Thinking **60.44%**. Different budgets/harnesses, no common accuracy average. No verified exact SWE-Pro/DeepSWE/SciCode/Vibe Code result found.[4][5][6]
- Primary **MMMU validation75.0% Thinking/71.8% NT**, not MMMU-Pro. Vals Thinking **MMMU-Pro75.10% /MortgageTax66.85%**; AA NT **MMMU-Pro60.06%**. Exact AA Thinking MMMU-Pro null.[5][6][7]
- AA NT **LCR51.67%**, Thinking null. No independently verified full200K near-perfect MRCR/RULER retention. Extended thinking/output budget does not extend native context.[4][5]
- Vals Thinking workload latency **59.46s** at its output setting; AA contemporary speed/task-cost fields empty. No invented current throughput or affordable unlimited thinking claim.[4][6]

### Normalized scores (1–100)

- **Tool use: 55/100.** Useful historical customer-service/functions, capped by modern independent Tau2/IFBench and missing broad terminal/professional-task measurements.[1][4][5]
- **Reasoning: 69/100.** Useful Thinking GPQA/math, capped by HLE/CritPt, limited factual coverage and selected-parallel versus ordinary distinctions.[4][5][7]
- **Context window: 70/100.** Verified200K tier; no near-perfect full-window retrieval or later-model1M inheritance.[4][5][6]
- **Multimodal: 75/100.** Quantified image/document reasoning, capped by no native audio/video/non-text generation and mode/harness variation.[3][5][6][7]
- **Coding: 70/100.** Useful historical full500 repairs, capped by62.3% baseline, subset/selection dependence and modest independent code generation.[1][4][5][6]
- **Cost efficiency: 60/100.** Legacy$3/$15 pricing with billed thinking and latency; not a current buying recommendation or verified free API.[1][2][6]
- **Overall Score: 68/100.** Half-up mean `(55 + 69 + 70 + 75 + 70) / 5 = 67.8`; cost excluded. Historical hybrid image/text coder; retirement changes access, not recorded capability into zero.

### Research trail and sources

Fresh Bing RSS `"Claude3.7 Sonnet" official benchmark` returned generic Claude links; Google independent-benchmark query an interstitial; DuckDuckGo context/output/retirement query found archive leads with conflicting retirement dates. Primary lifecycle table resolves **February19,2026** rather than unsourced late2025/May2026 claims. Original full launch/chart, both exact AA modes, Vals Thinking and current empty gateway inspected; guessed Cloud model page404 not used as proof of global nonexistence. No peer or successor scores used.

[1]: https://www.anthropic.com/news/claude-3-7-sonnet "Feb24 launch, thinking/output budget, legacy pricing and complete TAU/SWE scaffold/denominator appendix"
[2]: https://platform.claude.com/docs/en/about-claude/model-deprecations "Current primary explicit February19,2026 native retirement and October28 deprecation"
[3]: https://openrouter.ai/api/v1/models/anthropic/claude-3.7-sonnet/endpoints "Original text/image/file record has zero current endpoints"
[4]: https://artificialanalysis.ai/models/claude-3-7-sonnet-thinking "Exact selected Reasoning observations/estimated index, absent current tariff/runtime fields"
[5]: https://artificialanalysis.ai/models/claude-3-7-sonnet "Exact selected Non-reasoning,200K and recorded cutoff/legacy rates; no silent mode mixing"
[6]: https://www.vals.ai/models/anthropic_claude-3-7-sonnet-20250219-thinking "Independent exact Thinking profile,8,192-output setting, vision/code/reasoning and latency"
[7]: https://cdn.sanity.io/images/4zrzovbb/website/654cf6680d32858dfba9af644f8c4a5b04425af1-2600x2360.png "Original full benchmark image directly inspected:64K versus NT, AIME2024, ordinary versus selected-parallel and subset footnotes"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, complete original appendix/chart inspection and current primary lifecycle versus exact mode-specific historical evaluator comparison. Scores are historical normalized1–100 interpretations, not official vendor scores or a claim of current native availability.
- Future sources: add a separate signed file alongside this report using the same headings.
