# Beam — findings by GPT 6.1 Sol

- Source: Reflection / `reflection/Beam-1.0-501B-A23B`,released1.0 checkpoint.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Identity / dates:** Beam1.0,announced **2026-10-05**,released weights/API **October16**. Final model-card values supersede preliminary October5/8 announcement numbers. Primary release identifies Catjam/MissingNo stealth lineage,but does not establish byte-identical historical preview weights;no older stealth benchmark imported.[1][2][3]
- **Architecture / licence:** **501.3B total/23.4B active**,52layers(3dense/49MoE),256experts,gated GQA/sliding-window attention,modified Harmony format. Actual BF16/FP8/NVFP4 weights and **Apache2.0** licence,not merely a future release promise. Predominantly English;cutoff **2026-06-30** verified in exact primary card.[1][8][9]
- **Access / IDs:** Native **`Beam-1.0-501B-A23B`** at **`https://api.reflection.ai/openai/v1`**;current paid **`reflection/beam-1.0-501b-a23b`**,dated backendOctober16;current OpenCode catalog includes exact **`beam-free`**. No authenticated inference performed;listing is not verified response success.[4][5][6]
- **Context / output:** Primary/config **1,048,576 total/131,072 output**,native example default32,768,organization-specific defaults possible. Current Nebius/Together/BaseTen paid routes1M/131,072;CoreWeave advertises943,718 output,provider-specific rather than native guaranteed generation. OpenCode metadata1M/131,072.[1][4][5][9]
- **Modalities / reasoning / tools:** **Text→text only**,no native media. Always reasons;efforts **low/medium/high/xhigh/max**,example defaultmax may vary by organization;**none/minimal rejected400**. Native requires **nonempty `reasoning_content` on every historical assistant message**,including tool turns;output budget includes reasoning. Tools/JSON supported,with route-dependent differences:BaseTen paid metadata lacks tools despite other providers listing them. OCR/media APIs used through tools do not add native vision.[1][5][7]
- **Pricing (2026-10-21):** Actual **OpenCode `beam-free` $0 input/output/cache**,limited-time,provider **no training/30-day safety retention**,geographic restrictions apply. This is not zero retention. Paid examples **NebiusFP8$0.25 input/$1.00 output/$0.05 cache per1M;CoreWeaveFP4$0.30/$1.00/$0.04;Together/BaseTen$0.40/$1.20/$0.04**. No unlimited-free or cost-free self-hosting guarantee.[5][6][10]

### Raw benchmarks found

**Attribution:** Exact final primary model-card **BF16/FP8/NVFP4 columns** inspected;all publisher evaluation **temperature0.7/top-p0.99**. Detailed harness/resource/attempt budgets not fully disclosed in inspected final card;preliminary announcement results differ and are not mixed into final columns. AA selected exact **UUID `69468cce-7b5c-414a-b498-41df4c34df85`**,**Index30.333 measured**;no exact effort value surfaced in extracted record. Vals exact1.0 default Reflection/temperature0.7/top-p0.99/max131,072,with benchmark-specific overrides possible.[1][2][11][12]

Agent / tool use:

- Vendor final **TB2.1 80.1/78.9/78.4%**,**MCP Atlas80.8/81.5/80.5%**,**Tau3-Banking36.1/36.8/35.4%**,BF16/FP8/NVFP4 respectively. Vendor **AutomationBench public split39.3% BF16** is not a full-suite independent measure.[1]
- Independent AA **AutomationBench partial48.46% /GDPval1177.08 Elo /Briefcase976.20 Elo,31.41% rubric pass /TB4 3.03%**;Vals **TB4 4.04% ±1.34 /Finance Agent v2.1 51.83% /Legal Research28.85% /Tax Agent8.81%**. Stronger bounded automation coexists with weak hard-terminal/specialist reliability. Exact AA Tau2/banking/older-terminal fields null;no Claw-Eval/ClawProBench/Toolathlon found.[11][12]

Reasoning / coding:

- Vendor BF16 **GPQA90.6% /HLE36.0% no-tools,51.1% with tools /AIME2026 97.7% /CritPt16.3%**. Independent AA **HLE34.66% /CritPt13.14%**,GPQA null;no independent GPQA result invented from vendor. AIME2026 differs from2025.[1][11]
- AA **Omniscience accuracy33.07% /hallucination47.16% /reliability1.5**. Vendor public-split Omniscience **10.8 BF16/8.8 FP8/9.8 NVFP4** uses a restricted split;not compared as identical full-suite index or factual accuracy.[1][11]
- Vendor BF16 **SWE Verified81.6% /Multilingual78.3% /SWE-Pro v1 66.1%,v2-Hard76.5% /DeepSWE v1.1 43.3% /SWE Atlas Codebase QnA31.8% /LCB88.3% /SciCode49.2%**. Different SWE/DeepSWE versions are retained;Pro v2-Hard is not v1 or Verified.[1]
- Quantized **SWE Verified80.2% FP8/80.7% NVFP4**,versus81.6BF16;one quantized task can exceed another without proving universal precision equivalence. Independent AA **SciCode48.50%**;Vals **Vibe Code v1.1 66.44% ±4.06 /Code Migration v1.1 22.85% ±3.28**. No independently verified full ProgramBench score found.[1][11][12]

Context / modality / efficiency:

- Vendor BF16 **AA-LCR78.2% /LongBench v2 67.5%**,independent AA **LCR78.00%**;no verified98%-plus difficult full1M retention. Search benchmarks explicitly use context management,not direct uninterrupted retention.[1][11]
- Independent AA **MMMU-Pro null/GDP.pdf11.6%**,tool-mediated documents,not native vision. Visual games/map demos and training-time OCR do not alter text-only inputs.[1][2][11]
- AA median **330.84tokens/s/0.796s first chunk**,output79.22M/reasoning67.47M tokens. Paid-reference weighted **$0.5657/task**,TB4 **$3.4145/task** with3.03% success;not current free-route invoice. Vals aggregate latency **7min27s** is a different task/provider mix.[11][12]
- Preliminary publisher **3–4× lower inference-compute** comparisons estimate **2×active parameters×generated tokens**,excluding prompt prefill,context-dependent attention and serving overhead. They are not independently measured dollar cost or current-route throughput multipliers.[2]

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong bounded independent automation and useful vendor MCP/banking,capped by TB4 3–4%,weak specialist completion and incomplete older-harness reproduction.[1][11][12]
- **Reasoning: 83/100.** Strong independent HLE/CritPt and useful vendor math/knowledge,capped by calibration,restricted-split headline differences and missing independent GPQA.[1][11]
- **Context window: 95/100.** Primary/config/native and actual1M routes verified;78% LCR does not earn near-perfect retention bonus.[1][4][5][9][11]
- **Multimodal: 15/100.** Explicitly text-only;tools,training OCR and generated visual artifacts do not add native media.[1][2][5]
- **Coding: 80/100.** Strong vendor repair/versioned coding plus independent SciCode/Vibe,capped by migration22.85%,weak hard terminals and absent full-program validation.[1][11][12]
- **Cost efficiency: 100/100.** Verified current exact$0 OpenCode tariff;limited-time access,30-day retention/geography and large local footprint remain explicit.[6][10]
- **Overall Score: 70/100.** Half-up mean `(75 + 83 + 95 + 15 + 80) / 5 = 69.6`;cost excluded. Best fit:free or low-cost text-only coding/research agents with bounded deliverables and exact reasoning-history handling.

### Research trail and sources

Fresh Bing Reflection/Beam official-benchmark RSS,Google independent query returning an interstitial,and DuckDuckGo exact-provider query resolving actual primary launch/release and evaluator URLs. Guessed `/blog/beam` and AA `beam`404 resolved to actual URLs. Read complete final HF/web card and original/release chronology,actual Apache/config,primary native model/reasoning docs,current OpenCode catalog/policy and paid routes,and exact AA/Vals profiles. No peer/Catjam preview numbers or unrelated Beam-branded products used.

[1]: https://huggingface.co/reflection/Beam-1.0-501B-A23B/raw/main/README.md "Final precision-separated task results,501.3B/23.4B,1M,text-only,cutoff and sampling"
[2]: https://reflection.ai/blog/introducing-beam "October5/8 preliminary numbers,compute-estimate exclusions and text-only tool-mediated demos"
[3]: https://reflection.ai/blog/beam-is-available "October16 actual weights/release,Apache and stealth-preview lineage,not identical historical weights guarantee"
[4]: https://developers.reflection.ai/models.md "Exact native API ID,shared1M/128K,max/default/organization distinctions"
[5]: https://openrouter.ai/api/v1/models/reflection/beam-1.0-501b-a23b/endpoints "ActualOctober16 backend,current paid routes,precision,output and tools"
[6]: https://opencode.ai/inference/v1/models "Current exact beam-free listing,not authenticated successful inference"
[7]: https://developers.reflection.ai/reasoning.md "Always-on reasoning,efforts,none/minimal rejection and required historical reasoning_content"
[8]: https://huggingface.co/reflection/Beam-1.0-501B-A23B/raw/main/LICENSE "Actual Apache2.0 weight licence"
[9]: https://huggingface.co/reflection/Beam-1.0-501B-A23B/raw/main/config.json "Actual causal text architecture,52layers and1,048,576positions"
[10]: https://opencode.ai/docs/zen/ "Exact zero tariff,limited time,no training,30-day safety retention and geographic exclusions"
[11]: https://artificialanalysis.ai/models/reflection-beam "Exact measured independent record,task/calibration/context/runtime and paid-reference cost"
[12]: https://www.vals.ai/models/reflection_Beam-1.0 "Exact current1.0 independent tasks,uncertainties,settings and aggregate latency"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,full final-versus-preliminary primary precision/scope inspection,two exact-model independent evaluators and current native/free/paid-route verification. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
