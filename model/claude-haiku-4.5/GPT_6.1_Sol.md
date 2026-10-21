# Claude Haiku 4.5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-haiku-4-5-20251001`, extended-thinking evaluation.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Haiku4.5, original October2025 model, not Haiku5.5 or3.5.
- **Short description:** Small proprietary image/text model for responsive coding and bounded tool work. Similarity to historical Sonnet4 is a publisher comparison, not equivalence on all modern tasks.[1]
- **Provider / IDs / lifecycle:** Native Messages **`claude-haiku-4-5-20251001`**, alias **`claude-haiku-4-5`**; currently listed native/Bedrock/Vertex/Azure gateway **`anthropic/claude-haiku-4.5`**. Primary status **active legacy/still available**. **“Not sooner than2026-10-15” is a minimum commitment, not actual retirement**, despite that date passing. No authenticated inference or free Zen ID verified.[2][3][4]
- **Release / knowledge:** Public **2025-10-15**, snapshot datedOctober1. Reliable knowledge **February2025**, broader training cutoff **July2025**; AA's July field does not supersede primary reliable-cutoff distinction.[2][5]
- **Context / output:** Primary **200,000 total/64K synchronous output**, gateway200K/64,000. Vendor launch evaluates many tasks with **128K thinking budgets**, a separate evaluation setting, not the documented ordinary64K API allowance. No1M successor window inherited.[1][2][4]
- **Modalities / thinking / tools:** **Text/image/PDF understanding → text**, native functions/structured output and external computer/code/search tools. **Manual extended thinking with budget_tokens**, not adaptive thinking or an effort parameter; **no interleaved thinking** per current context guide. No native audio/video/non-text generation credited.[2][4][8]
- **Pricing (2026-10-21):** Per1M **$1 input/$5 output/$0.10 cache read**, cache writes **$1.25 five-minute/$2 one-hour**; Batch50% input/output discount. Live standard routes agree; some regional routes **$1.10/$5.50**. No verified$0 inference tariff; tools add fees.[2][4]
- **Architecture:** Proprietary, undisclosed parameter/active count and no verified released weights.[2][5]

### Raw benchmarks found

**Attribution:** Full original launch chart and appendix inspected. AA exact **Reasoning UUID `a6340098-d7ae-462d-b372-0a0a67fc44b4`**, October15, current composite **measured**. Vals exact Thinking snapshot/native Anthropic/temp1/**64,000 output**; not a vendor128K-budget replication.[1][5][6][7]

Agent / tool use:

- Vendor **Terminal-Bench41.0%**, average11 single-attempt runs mixing **six NT40.21% and five32K-thinking41.75%**; not an explicitly same-versionTB2.1 score. **Tau2 Retail83.2%/Airline63.6%/Telecom83.0%**, policy/user-prompt addenda and10-run averages at128K thinking.[1][7]
- Vendor **OSWorld50.7%**, official Verified framework/100 steps/four runs,128K total thinking/2K per step. This is scaffolded computer-use performance, not all automation.[1][7]
- Independent AA **TB2.1 44.19% /TB4 0.00% measured /Tau2 54.68% /Tau3-Banking9.28% /IFBench54.29%**. Vals **TB2.1 43.82% /Finance Agent31.01% /EMB22.66% /Legal Research10.58% /Tax Agent5.86%**.[5][6]
- AA **GDPval732.34 Elo /Briefcase616.35 Elo,10.81% rubric pass /AutomationBench partial3.25% /AnalystAgent15.0% /EnterpriseOps-Gym29.39%**. No verified exact Claw-Eval/ClawProBench/Toolathlon/MCP-Atlas/SWE Atlas QnA found.[5]

Reasoning / knowledge:

- Vendor **GPQA73.0% /AIME2025 no-tools80.7%, with Python96.3% /MMMLU83.0%**. AIME averages10 runs of16 pass@1 trials with128K thinking, not ordinary default-budget accuracy or best-of160 selection.[1][7]
- Independent AA **GPQA67.17% /HLE10.38% /AIME2025 83.67% /CritPt0.00%**, **Index16.882 measured**. Vals **GPQA72.22% /MMLU-Pro78.72%**; differing conditions retained.[5][6]
- AA **Omniscience accuracy18.02% /hallucination27.30% /reliability−4.3667**: restraint/abstention does not establish broad knowledge. Metrics have different denominators.[5]

Coding / vision / context:

- Vendor **SWE Verified73.3%, full500**, bash+string editor, no parallel selection, average50 trials with128K thinking and an added prompt encouraging>100 tool calls/own tests. Independent Vals **66.60% ±2.11**.[1][6][7]
- AA **SciCode42.25% /LiveCodeBench61.48%**, Vals **LCB41.17% /Vibe Code11.39% /Migration7.55% /ProgramBench0.00% measured**. No exact SWE-Pro/DeepSWE found; modern task/full-app gaps cap general coding claims.[5][6]
- Vendor **MMMU validation73.2%**, not MMMU-Pro; independent **MMMU-Pro58.55% AA/46.07% Vals**, AA **GDP.pdf3.8%**. Vals MortgageTax62.16% is a different document task.[5][6][7]
- AA **LCR74.33% /MLCR5.0%**; no verified ≥98% full200K MRCR/RULER. Context awareness is a product feature, not perfect retention.[5]
- AA median **97.29tokens/s /24.41s first chunk**, weighted **$0.2768/task**, **77.63M output/63.53M reasoning tokens**. Vals workload4min18s differs in scope; “twice as fast” launch positioning does not guarantee instant extended thinking.[1][5][6]

### Normalized scores (1–100)

- **Tool use: 54/100.** Useful bounded terminal/customer-service/GUI behavior, capped by hard-terminal0, weak banking/automation and large scaffold/budget differences.[1][5][6]
- **Reasoning: 65/100.** Useful math/science with thinking, capped by HLE/CritPt, low factual coverage and no default-budget equivalence.[5][6][7]
- **Context window: 70/100.** Verified200K tier, capped by ordinary retrieval and missing near-perfect full-window evidence; no successor1M inheritance.[2][5]
- **Multimodal: 70/100.** Genuine image/document input and visual metrics, capped by hard-vision/PDF weakness and no audio/video/non-text output.[2][5][6]
- **Coding: 70/100.** Useful independently measured bounded repairs/SciCode, capped by modest full-app/migration results and measured program/hard-terminal zeros.[1][5][6]
- **Cost efficiency: 86/100.** Reasonable$1/$5/caching/Batch value, capped by thinking startup, task/failure costs and cheaper modern options; no free tariff assumed.[2][4][5]
- **Overall Score: 66/100.** Half-up mean `(54 + 65 + 70 + 70 + 70) / 5 = 65.8`; cost excluded. Available legacy model for bounded image/text coding and tool subtasks, with modest modern autonomy.

### Research trail and sources

Fresh Bing RSS exact-model official benchmarks returned generic Claude links; Google independent query an interstitial; DuckDuckGo context/pricing/lifecycle supplied actual primary leads and inconsistent secondary rates. Primary current exact model page/lifecycle/context guide, complete original chart/appendix, selected AA Reasoning, exact Vals Thinking and current gateway inspected. Minimum availability date distinguished from retirement;128K publisher evaluation budgets distinguished from public64K output. No peer/Haiku5.5/Sonnet scores used to fill gaps.

[1]: https://www.anthropic.com/news/claude-haiku-4-5 "Original launch and complete scaffold/attempt/thinking-budget appendix"
[2]: https://platform.claude.com/docs/en/models/haiku-4-5/overview "Current active legacy IDs,200K/64K,manual thinking,knowledge/training cutoffs,cache and Batch pricing"
[3]: https://platform.claude.com/docs/en/about-claude/model-deprecations "Active status;October15 minimum commitment is not actual retirement"
[4]: https://openrouter.ai/api/v1/models/anthropic/claude-haiku-4.5/endpoints "Actual native/partner routes,limits and standard versus regional tariffs"
[5]: https://artificialanalysis.ai/models/claude-4-5-haiku-reasoning "Exact selected Thinking measured profile,modern task zeros,calibration/context/runtime/cost"
[6]: https://www.vals.ai/models/anthropic_claude-haiku-4-5-20251001-thinking "Exact native Thinking64K,independent repair/app/vision/agent measurements and latency"
[7]: https://cdn.sanity.io/images/4zrzovbb/website/029af67124b67bdf0b50691a8921b46252c023d2-1920x1625.png "Full primary launch table directly inspected: exact Haiku column and aided-versus-unassisted conditions"
[8]: https://platform.claude.com/docs/en/build-with-claude/context-windows "Explicit lack of Haiku4.5 interleaved thinking;capacity and thinking-token accounting"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, complete primary chart/appendix and current model/lifecycle inspection, exact-mode independent evaluator/provider comparison. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
