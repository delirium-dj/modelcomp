# Claude Sonnet 3.5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-3-5-sonnet-20241022`,October2024 revision.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)
- Status: Historical capability assessment;native model retired.

## Model card

- **Identity:** Latest3.5 Sonnet **October22,2024**,not June20 snapshot,3.7 or a current Sonnet successor. Vendor primary comparison explicitly distinguishes old/new3.5 columns.[1][2]
- **Access / lifecycle:** Native **`claude-3-5-sonnet-20241022`** retired **2025-10-28**,along with June variant;native requests fail. Partner-operated platforms have separate schedules. Current exact OpenRouter **`anthropic/claude-3.5-sonnet`** and dated alias return model metadata with **empty endpoint arrays**,not active serving. No authenticated current inference or free Zen route verified.[3][6]
- **Context / output / knowledge:** **200,000 context/8,192 output**,per exact evaluator;AA cutoff **April2024**. Low output ceiling limits extended patches/answers;no newer-model large output or extended-thinking budget inherited.[4][5]
- **Modalities / tools:** **Text/image→text**,PDF/file workflow support in evaluator/gateway metadata;no native audio/video/media generation. Function calls and experimental screenshot-based computer use;ordinary CoT prompting is not a separately selectable extended-thinking mode.[1][4][5][6]
- **Architecture / licence:** Proprietary closed weights;parameter count not verified. Distilled/community models with its name do not constitute released Anthropic weights.[5]
- **Pricing (2026-10-21 assessment):** Historical **$3 input/$15 output per1M**,recorded cache read$0.30/write$3.75. October launch says price unchanged from June. These are historical/reference rates,not a currently working native quote. Old consumer free access does not establish a current free3.5 tariff.[1][5][8]

### Raw benchmarks found

**Attribution:** Actual full October launch image inspected,exact **new Sonnet** column and zero-shot/CoT labels. AA exact **Oct24 UUID `0a603978-03b9-4f47-a273-2f7fd969be85`**,**Index7.879 estimated**,not a fully measured modern composite. Vals exact October snapshot,Anthropic default/temperature1/max8,192;individual tests may override. Historical benchmark suites are not current-task guarantees.[2][4][5]

- **Agent/tool use:** Vendor **Tau-bench retail69.2%/airline46.0%**,not Tau2/Tau3. **OSWorld screenshot-only14.9%,22.0% with more steps**;step-budget difference retained. No exact AA terminal2.1/4,banking,GDPval,AutomationBench,Claw-Eval,ClawProBench,MCP Atlas or Toolathlon measurement found;null is not zero.[1][5]
- **Coding:** Vendor **SWE Verified49.0% /HumanEval93.7% zero-shot**. Independent **LCB38.10% AA /49.63% ±1.14 Vals**;different evaluation snapshots/harnesses not silently averaged. No exact independent persistent-app/DeepSWE/SciCode found.[2][4][5]
- **Reasoning:** Vendor **GPQA65.0%,MMLU-Pro78.0%,MATH78.3%,AIME2024 16.0%**,all zero-shot CoT except HumanEval. Independent AA **GPQA59.90%/HLE3.69%**;Vals **GPQA59.34% ±2.47/MMLU-Pro78.40% ±0.40**. AIME2024 is not2025,and estimated index is not benchmark accuracy.[2][4][5]
- **Visual/domain work:** Vendor **MMMU70.4% zero-shot CoT**;Vals **MMMU Pro68.80% ±1.11** under its own labelled task,not interchangeable with MMMU. Vals **MortgageTax64.07%/TaxEval v2 70.16%** are specialist evidence,not broad general accuracy.[2][4]
- **Long context:** Capacity200K verified;no exact full-window MRCR/LCR/RULER score found in inspected sources. No near-perfect retrieval claim or later-model context extension inferred.[4][5]
- **Important excluded lead:** METR's October30,2024 report expressly evaluates **June20 model**,despite its publication date and search hit for October API ID. Its autonomy/R&D numbers are not attributed to this October checkpoint.[7]

### Normalized scores (1–100)

- **Tool use: 51/100.** Useful historical tool calls and Tau-bench,capped by low screenshot autonomy and absent exact modern long-horizon measurements.[1][5]
- **Reasoning: 58/100.** Moderate verified GPQA/knowledge and basic mathematics,capped by HLE3.69% and limited difficult competition reasoning.[2][4][5]
- **Context window: 70/100.** Verified200K tier,capped by missing long-window retention evidence and8K output.[4][5]
- **Multimodal: 72/100.** Genuine image/screenshot/document understanding,capped by limited native modalities and imperfect visual action performance.[1][2][4]
- **Coding: 60/100.** Useful historical repair/generation,capped by SWE49%,modest independent LCB and absent persistent-project evidence.[2][4][5]
- **Cost efficiency: 60/100.** Historical$3/$15 reference tier,capped by retirement and current access uncertainty;no free successor substitution.[3][5][6]
- **Overall Score: 62/100.** Half-up mean `(51 + 58 + 70 + 72 + 60) / 5 = 62.2`;cost excluded. Best fit:historical comparison and bounded legacy image/code workflows where exact serving is independently confirmed.

### Research trail and sources

Fresh Bing October-benchmark query returned generic Claude links;Google independent/retirement query an interstitial;DuckDuckGo exact dated-ID query found primary/evaluator leads and the misleadingly dated METR study. AA short-name404 resolved through public selector to exact `claude-35-sonnet`,not June variant. Full primary chart,current native deprecation,exact AA/Vals profiles and empty gateway routes inspected. No peer/June/successor scores used.

[1]: https://www.anthropic.com/news/3-5-models-and-computer-use "October22 revision,tool-domain scores,computer-use step budgets and unchanged historical pricing"
[2]: https://www-cdn.anthropic.com/images/4zrzovbb/website/0eb9a1b7d5db74a6d21500e9f188c83beef3842e-2601x1932.png "Full visually inspected new-versus-old benchmark chart and zero-shot/CoT labels"
[3]: https://platform.claude.com/docs/en/about-claude/model-deprecations "Exact October/June native snapshots retiredOctober28,2025;partner schedules separate"
[4]: https://www.vals.ai/models/anthropic_claude-3-5-sonnet-20241022 "Exact October snapshot,context/output,task values and settings"
[5]: https://artificialanalysis.ai/models/claude-35-sonnet "Exact Oct24 UUID,estimated composite,independent GPQA/HLE/LCB and historical prices/cutoff"
[6]: https://openrouter.ai/api/v1/models/anthropic/claude-3.5-sonnet/endpoints "Exact October catalog metadata but no serving endpoints"
[7]: https://metr.org/evaluations/claude-3-5-sonnet-report/ "Explicit June-checkpoint scope;not October-model capability evidence"
[8]: https://www.anthropic.com/news/claude-3-5-sonnet "Original launch's200K/$3/$15 specification;original benchmark scores not imported"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,exact revision primary-chart inspection,two independent evaluator records and current lifecycle/serving verification. Scores are normalized1–100 historical interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
