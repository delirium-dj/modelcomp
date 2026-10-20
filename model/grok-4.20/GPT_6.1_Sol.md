# Grok 4.20 — findings by GPT 6.1 Sol

- Source: xAI / `grok-4.20-0309-reasoning`; original March measurements and AA's later v2 profile labelled separately.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Grok 4.20.
- **Short description:** xAI's image-capable reasoning model with large context and tool support. Native bare `grok-4.20` aliases **`grok-4.20-0309-reasoning`**. The separately named Multi-Agent Beta and non-reasoning deployments are not silently merged into this assessment.[1][5]
- **Provider / IDs:** xAI API; native alias list includes `grok-4.20`, `grok-4.20-0309` and various prior beta/experimental spellings. Exact live gateway **`x-ai/grok-4.20`**, backend **`x-ai/grok-4.20-20260309`**, with xAI endpoints listed. Endpoint listing is verified; no authenticated inference performed. No free Zen ID verified.[1][4]
- **Release / revision:** Vals dates original reasoning snapshot **2026-03-09**; exact AA record is **Grok 4.20 0309 v2 (Reasoning), 2026-04-07**. This report does not treat March/V2 differences as controlled same-checkpoint replication. AA's superseded label is not evidence of native API shutdown: current primary docs/provider listing still identify 0309.[1][2][3][4]
- **Context window:** Current native docs **1,000,000 total**; live gateway **2,000,000 / 1,800,000 advertised completion tokens**, AA/Vals also record 2M. Native versus gateway/evaluator capacity is unresolved, so record both. Max completion is not demonstrated sustained output or additive to full input. Both verified documentation/metadata tiers exceed the million-token capacity threshold.[1][2][3][4]
- **Modalities / tools:** Native text/image → text; gateway/Vals additionally document file handling. Function calling, Structured Outputs, reasoning and Batch supported. No native audio/video/non-text generation credited; Multi-Agent research orchestration is a separately named API model, not an automatic property of every ordinary request.[1][4][5]
- **Pricing (2026-10-20):** Native standard per-million **$1.25 input/$2.50 output/$0.20 cache hit below 200K prompt tokens**; **at or above 200K, $2.50/$5/$0.40 for all request tokens**. Batch discount **20%**, not 50%. Exact gateway standard agrees, with higher-priced routes also listed. Vals' $2/$6 belongs to its older evaluation/pricing snapshot; it does not override current primary rates. Tools add charges.[1][3][4]
- **Architecture / knowledge:** Proprietary; exact parameter count, active count, dense/MoE structure and model-specific knowledge cutoff not verified in inspected sources. “Lowest hallucination rate” is a publisher marketing claim, not a universal accuracy guarantee.[1]

### Raw benchmarks found

**Provenance:** AA selected UUID `c72cb85a-18a4-4235-b455-77dff2f16c50`, slug **`grok-4-20`**, explicitly **0309 v2 Reasoning**, estimated current composite. Vals exact `grok/grok-4.20-0309-reasoning` defaults to temperature .7/top-p .95/2M output and includes dated beta release notes. No Multi-Agent scores adopted.[2][3]

Agent / tool use:

- **Tau2 92.98% / IFBench 81.22% AA v2**. No exact Tau3-Banking/TB4/GDPval/Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon/SWE Atlas QnA verified; selected AA fields are null, not zero.[2]
- **Terminal-Bench 2.1 44.20% ± 0.99 Vals March profile**, versus high customer-service/function competence. **Finance Agent v2 28.49% / EMB 11.74% / Legal Research 13.94% / Tax Agent 6.95% Vals** limit broad professional autonomy.[3]
- BenchLM blends competitor-run and independent rows across revisions; uninspected Meta comparison-chart values and secondary aggregate **57.43/100** are not adopted as a replicated model measurement or this source's Overall.[6]

Reasoning / knowledge:

- **GPQA Diamond 91.11% AA v2 / 88.64% ± 1.59 Vals March**, **HLE 34.52% / CritPt 6.57% AA v2**. Different revisions/settings, not a common averaged accuracy.[2][3]
- Vals **MMLU Pro 86.25% / LegalBench 77.74% / SAGE 38.24%**. Historical beta note **AIME 96.46%** is a dated Vals result; no same-revision current AA AIME field is supplied.[3]
- **AA Intelligence Index 25.655 explicitly estimated**, not fully measured current composite. Vals displayed **47.16% aggregate** differs from dated **57.70% Vals Index/#13 of 33** as suite/snapshot context changes.[2][3]
- **Omniscience v2 accuracy 27.48% / hallucination 17.44% / reliability 14.8333 AA**. Low hallucination coexists with modest factual coverage; abstention/calibration is not broad factual mastery.[2]

Coding / context / visual:

- **SWE-bench Verified 72.20% ± 2.01 current Vals**, versus dated March note **74.20%**. Its older malformed subset string is not treated as a valid score. **LiveCodeBench 84.27% ± 1.03**.[3]
- **Vibe Code v1.1 4.06% ± 2.06 / Code Migration 0.31% ± 0.11 Vals** reveal much weaker complete app/migration behavior than bounded issue repair. No exact independently inspected SWE-Pro/DeepSWE/SciCode found; AA SciCode is null.[2][3]
- **LCR 69.0% AA v2**. No independently verified near-perfect full-1M/2M MRCR/RULER found. Native/gateway capacity differences are not evidence of full-window quality.[1][2][4]
- **MMMU-Pro 74.57% AA v2 / 83.47% ± 0.89 Vals March**, **MortgageTax 45.35% Vals**; different setups/revisions, not interchangeable visual accuracy.[2][3]
- AA median **105.35 output tokens/s / 18.32 s first chunk**; Vals workload latency **2 min 20 s**, a different scope. These do not establish instant reasoning or present-mode-independent speed.[2][3]

### Normalized scores (1–100)

- **Tool use: 67/100.** Strong v2 Tau2/IFBench and useful terminal competence, capped by low professional/office agent success and absent harder-banking replication.[2][3]
- **Reasoning: 82/100.** Independent GPQA/HLE support strong reasoning and improved abstention, capped by CritPt 6.57%, limited recall and estimated composite/revision uncertainty.[2][3]
- **Context window: 95/100.** Current native 1M and gateway/evaluator 2M both meet capacity tier; conflicting caps and absent near-perfect maximum-window retrieval prevent 100.[1][2][3][4]
- **Multimodal: 79/100.** Genuine image/document integration and visual benchmark evidence, capped by no audio/video/non-text generation and uneven private-document performance.[1][2][3][4]
- **Coding: 74/100.** Useful independent repairs/contest coding, but Vibe 4.06%, migration 0.31% and moderate terminal reliability cap project-level autonomy.[3]
- **Cost efficiency: 85/100.** Current $1.25/$2.50 plus caching offers good paid value, capped by whole-request long-prompt doubling, tools and workload-dependent failure costs.[1][4]
- **Overall Score: 79/100.** Half-up mean `(67 + 82 + 95 + 79 + 74) / 5 = 79.4`; cost excluded. Best fit: large-context image/text reasoning and bounded repairs, with exact native/gateway revision and caps recorded.

### Research trail and sources

Fresh Bing RSS `"Grok 4.20" official model benchmarks` returned generic Grok links; Google `"Grok 4.20" independent benchmark reasoning` an interstitial; DuckDuckGo `"Grok 4.20" 0309 context pricing` supplied exact primary/provider leads. Guessed AA date-suffixed slug returned 404 before exact `grok-4-20` resolved to v2. Native aliases, separate Multi-Agent reference, current exact gateway, AA v2 and Vals March profile were compared. No peer findings or uninspected competitor-chart scores used.

[1]: https://docs.x.ai/developers/models/grok-4.20-0309-reasoning "Current native bare-ID aliases, 1M context, modalities and exact long-prompt/batch pricing"
[2]: https://artificialanalysis.ai/models/grok-4-20 "Exact selected April 7 v2 Reasoning record, estimated-index flag and metrics/runtime"
[3]: https://www.vals.ai/models/grok_grok-4.20-0309-reasoning "Independent March 0309 profile, current/different dated scores and settings"
[4]: https://openrouter.ai/api/v1/models/x-ai/grok-4.20/endpoints "Current listed xAI backend, 2M/1.8M advertised caps and provider rates"
[5]: https://docs.x.ai/developers/models/grok-4.20-multi-agent-0309 "Separate Multi-Agent deployment; scores not inherited by ordinary reasoning model"
[6]: https://benchlm.ai/models/grok-4-20 "Secondary discovery with mixed competitor/evaluator sources; aggregate not normalized here"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, native alias/pricing/modality checks and directly attributed revision-specific independent evaluator/provider comparison. Scores are editorial normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
