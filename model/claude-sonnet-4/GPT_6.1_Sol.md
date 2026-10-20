# Claude Sonnet 4 — findings by GPT 6.1 Sol

- Source: Anthropic / original `claude-sonnet-4-20250514`, historical capability assessment.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Sonnet4, not Sonnet4.5/4.6 or newer. Thinking and non-thinking configurations are explicitly separated.
- **Short description:** Original Claude4 hybrid model, emphasizing coding, agentic tools and image/text understanding. Strong historical issue repair is not current frontier long-horizon performance.[1]
- **Provider / IDs / lifecycle:** Native snapshot **`claude-sonnet-4-20250514`**, Messages API; launch also Bedrock/Vertex. Primary lifecycle table confirms **retired on Anthropic-operated platforms2026-06-15**, deprecated April14. Current exact **`anthropic/claude-sonnet-4`** gateway record has **no endpoints**. Cloud retains a product page with a stale **“not sooner than May14,2026”** floor; that floor neither establishes its actual retirement nor guarantees current access. No authenticated generation or current free Zen ID verified.[2][3][4]
- **Release / knowledge:** Public **2025-05-22**, snapshot datedMay14, cutoff **March2025** in Cloud/AA; snapshot date is not public launch date.[1][4][5]
- **Context window:** Standard **200,000 GA /64,000 output** in both Vals modes and Cloud. Cloud separately documents **1M preview**, AA records1M. Record this extension without treating it as standard GA or current guaranteed serving; normalized capacity below uses standard200K. Native current context guide places other earlier models at200K, distinguishing newer default1M models.[4][5][6][7][8]
- **Modalities / tools:** **Text/image/PDF → text**, no native audio/video/media generation. Functions, parallel calls, computer/web/code tools and prompt caching were available in the product family. Extended thinking is opt-in; interleaved thinking on earlier Claude4 models requires the beta header, not automatic newer adaptive-thinking behavior. App memory through local files is external state, not unlimited model context.[1][4][8]
- **Pricing:** Historical official launch **$3 input/$15 output per1M**, also retained in evaluator profiles. **Not a presently purchasable native quote** after retirement; AA current price fields null and gateway has no tariff-bearing endpoints. Launch free consumer availability does not establish a current exact-model free tariff.[1][2][3][5][6][7]
- **Architecture:** Proprietary, weights unavailable; exact parameter/active counts not verified.[5][7]

### Raw benchmarks found

**Attribution:** Complete primary launch appendix and SWE chart inspected. AA exact **Thinking UUID `a7564055-f8ba-4c4b-9e2d-060f61263645`**, NT **`d034dafe-463d-4c50-956f-84fca657b26f`**, both May22/estimated current indices. Vals exact dated **Thinking/Nonthinking** profiles use Anthropic/temperature1/max64,000; historical notes and current displayed suite differ.[1][5][6][7][9]

Agent / tool use:

- AA Thinking **Tau2 64.62% /Tau3-Banking16.70% /TB2.1 36.33% /GDPval691.27 Elo /IFBench54.69%**. NT **Tau2 52.34% /IFBench45.37%**. TB4 and other absent fields are null, not zero.[5][6]
- Primary TAU-bench method adds policy instructions and increases maximum steps **30→100**, most trajectories below30; older **TAU-bench is not Tau2/Tau3**. Do not copy Opus4's Terminal-bench43.2% into Sonnet4.[1]
- No verified exact Claw-Eval/ClawProBench, Toolathlon/MCP-Atlas/SWE Atlas QnA or modern broad office-automation score found. Tool integration and selected customer testimonials do not supply them.

Reasoning / knowledge:

- AA Thinking **GPQA77.68% /HLE10.70% /AIME2025 74.33% /CritPt0.29%**, NT **68.28%/4.26%/38.0%/1.14%**. More thinking is not uniformly better on every measured task.[5][6]
- Vals Thinking **GPQA75.00% /MMLU-Pro83.86%**, NT **69.44%/79.43%**. Primary launch gives **GPQA70.0% without extended thinking**; top-line launch reasoning tests may use up to64K thinking while coding tests do not.[1][7][9]
- **AA estimated Index18.918 Thinking/16.612 NT**, no complete measured current composite. **Omniscience accuracy22.68%/hallucination29.12%/reliability0.1667 Thinking**, NT **22.67%/40.97%/−9.0167**: better abstention/calibration is not broad factual recall.[5][6]
- Vals historical May27 AIME note **76.3% Thinking/38.5% NT**, with roughly4min mean and some>10min latency. Current displayed aggregates **63.64%/63.73%**, historical ranks/76.9% May25 aggregate are dated suite context, not current universal rankings.[7][9]

Coding / visual / context:

- Primary **SWE-bench Verified72.7%, full500 problems, NO extended thinking**, bash+string-edit scaffold. **80.2%** is **parallel attempts + regression-test filtering + internal scoring-model selection**, not ordinary single-attempt accuracy. Chart includes other vendors' subset numbers; not a controlled same-denominator head-to-head.[1][10]
- Independent AA **LiveCodeBench65.50% Thinking/44.87% NT**; Vals **62.39%/59.67%**. No verified exact SWE-Pro, SciCode, Vibe Code or DeepSWE result found; missing complete-app evidence caps general engineering claims.[5][6][7][9]
- AA **MMMU-Pro61.79% Thinking/62.37% NT**, Vals **74.93%/72.39%**. Vals Thinking **MortgageTax49.88% /SAGE32.01%**, NT **62.47%/35.00%**, showing that thinking does not improve every image/document workflow.[5][6][7][9]
- AA **LCR70.33% Thinking/44.0% NT**. No verified near-perfect MRCR/RULER or complete1M-preview retrieval found. Standard capacity, optional preview extension and app/file memory are distinct.[4][5][6]
- Vals workload latency **53.05s Thinking/12.27s NT**; AA current runtime/price fields empty. No invented contemporary throughput or API task-cost estimate.[5][6][7][9]

### Normalized scores (1–100)

- **Tool use: 62/100.** Historically useful tool/terminal/customer-service behavior, capped by low hard banking/GDPval and missing broader current agent verification.[1][5][6]
- **Reasoning: 72/100.** Useful Thinking GPQA/AIME with improved abstention, capped by expert-HLE/CritPt, modest factual recall and estimated index.[5][6][9]
- **Context window: 70/100.** Standard verified200K GA tier; optional1M preview recorded separately and not assumed guaranteed current access or reliable full-window retrieval.[4][7][8][9]
- **Multimodal: 76/100.** Genuine image/document understanding with direct tests, capped by mixed visual results and absent native audio/video/non-text output.[3][4][7][9]
- **Coding: 75/100.** Strong historical full500 repair result and independent code-generation evidence, capped by high-compute selection, moderate terminal capability and missing modern persistent-app results.[1][5][9][10]
- **Cost efficiency: 64/100.** Historical $3/$15 value with substantial thinking latency; rated as legacy economics, not a current native buying recommendation or free tier.[1][2][7][9]
- **Overall Score: 71/100.** Half-up mean `(62 + 72 + 70 + 76 + 75) / 5 = 71.0`; cost excluded. Historical image/text repair/tool model; native retirement is an access fact, not a fabricated zero-quality score.

### Research trail and sources

Fresh Bing RSS `"Claude Sonnet 4" official benchmark` returned generic Claude links; Google `"Claude Sonnet 4" independent benchmark` an interstitial; DuckDuckGo `"Claude Sonnet 4" context pricing retirement` a bot challenge. Primary original launch/complete appendix and exact chart inspected; current retirement table, native context rules, Cloud standard/preview limits, empty exact gateway, both selected AA modes and both dated Vals modes compared. Guessed native retired-model page/underscore Thinking Vals URL404; correct hyphenated Thinking URL resolved. No peer findings or successor/Opus scores substituted.

[1]: https://www.anthropic.com/news/claude-4 "Original May22 launch, historical pricing, full500/no-thinking versus selected parallel attempts and TAU-method appendix"
[2]: https://platform.claude.com/docs/en/about-claude/model-deprecations "Explicit native Sonnet4 June15 retirement; partner schedules separate"
[3]: https://openrouter.ai/api/v1/models/anthropic/claude-sonnet-4/endpoints "Original text/image/file record with zero current serving endpoints"
[4]: https://docs.cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude/sonnet-4?hl=en "Primary200K GA/1M preview/64K output, March cutoff; availability floor is not actual retirement date"
[5]: https://artificialanalysis.ai/models/claude-4-sonnet-thinking "Exact selected original Reasoning, independent historical metrics and estimated current index"
[6]: https://artificialanalysis.ai/models/claude-4-sonnet "Exact selected original Non-reasoning; null current tariff/runtime preserved"
[7]: https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514 "Original NT200K/64K profile and dated versus current suite observations"
[8]: https://platform.claude.com/docs/en/build-with-claude/context-windows "Earlier standard200K versus newer1M models and beta interleaved-thinking behavior"
[9]: https://www.vals.ai/models/anthropic_claude-sonnet-4-20250514-thinking "Exact Thinking64K settings, independent reasoning/vision/code and latency"
[10]: https://cdn.sanity.io/images/4zrzovbb/website/09a6d5aa47c25cb2037efff9f486da4918f77708-3840x2304.png "Original primary SWE chart directly inspected: Sonnet72.7 versus selected parallel80.2"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, primary chart/methodology and current lifecycle inspection, mode-specific independent evaluator comparison. Scores are historical normalized1–100 interpretations, not official vendor scores or a claim of current native availability.
- Future sources: add a separate signed file alongside this report using the same headings.
