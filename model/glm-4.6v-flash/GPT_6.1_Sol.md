# GLM-4.6V-Flash — findings by GPT 6.1 Sol

- Source: Z.ai / `zai-org/GLM-4.6V-Flash`,the vision model linked by this folder's curated identity.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)
- Confidence: **Provisional overall**,especially general reasoning/coding beyond visual workflows;verified task numbers are publisher measurements.

## Model card

- **Identity resolution:** Permanent folder `glm-4.6-flash` has curated official URL **`zai-org/GLM-4.6V-Flash`** and matching9B/vision specifications. This report therefore explicitly assesses **GLM-4.6V-Flash**,not an independently verified text-only bare`glm-4.6-flash` SKU. No exact bare OpenCode ID was found in the current catalog;folder metadata's free-Zen claim is not confirmed.[1][4][7]
- **Description / architecture:** **9B** lightweight vision-language model,primary explicitly distinguishes **106B GLM-4.6V** from9B Flash. Actual config **`Glm4vForConditionalGeneration`**,vision encoder and131,072 text positions. Primary metadata declares **MIT**,not the folder's Apache/open-licence wording. Guessed standalone HF LICENSE path returned404;no extra licence restriction or downloadable Apache text invented.[1][5]
- **Access / release:** Official weights **`zai-org/GLM-4.6V-Flash`**,Transformers/vLLM/SGLang;native documented **`glm-4.6v-flash`**,Z.ai Chat Completions. Secondary models.dev release **2025-12-08**;exact primary publication date not independently recovered from JavaScript-only blog. No authenticated inference performed.[1][2][7]
- **Context / output:** Primary trained128K,config **131,072 positions**. Secondary hosted metadata **128,000/32,768 output**,while primary evaluation uses **16K generated tokens**. Neither configured capacity nor output recipe is proof of reliable full-window retention.[1][3][5][7]
- **Modalities / tools:** **Text,image,video/document pages→text**,native visual function calling and tool-output image understanding. “Interleaved image-text generation” refers to retrieving/embedding visual references,not a verified native image-generation decoder;primary API declares output text. No audio or native video generation. Family demonstrations are not automatically9B Flash benchmark results.[1][2]
- **Sampling / limits:** Primary evaluation **temperature0.8/top-p0.6/top-k2/repetition penalty1.1/max16K**,vLLM primarily/SGLang video. Publisher acknowledges weak pure-text QA,overthinking/repetition,answer restatement and counting/identity perception limitations.[1]
- **Pricing (2026-10-21):** Exact Z.ai vision-model table lists **GLM-4.6V-Flash Free input/output/cache/storage**;primary model guide calls it completely free. Quotas/account/service terms still apply;retention/training policy not verified here,no zero-retention promise. OpenCode proposed bare ID absent;native$0 is not proof of a Zen route.[2][4]

### Raw benchmarks found

**Attribution:** Complete original **bench_46v.jpeg** inspected visually,exact **9B Flash column**,not adjacent106B4.6V. Vendor measurements/recommended16K recipe;no exact independent AA/Vals reproduction found. Primary paper link concerns4.1V/4.5V lineage and is not substituted for exact4.6V-Flash results.[1][3]

- **Visual agents:** Vendor **OSWorld21.1% /AndroidWorld42.7% /WebVoyager71.8% /MMBrowseComp7.1% /WebQuest SingleQA75.1%,MultiQA53.4%**. Distinct web/navigation/GUI tasks;no exact Tau2/Tau3,GDPval,AutomationBench,Claw-Eval/ClawProBench,MCP Atlas or Toolathlon measurement found.[3]
- **Visual reasoning:** Vendor **MMMU71.1% /MMMU-Pro60.6% /MathVista82.7% /DynaMath43.7% /WeMath60.0% /ZeroBench-sub22.5%**. Useful multimodal reasoning but no verified exact GPQA,HLE,AIME,CritPt,AA Index or general factual-calibration measurement. General reasoning score is an explicitly limited visual-reasoning proxy.[3]
- **Coding:** Vendor **Design2Code69.8% /Flame-React-Eval78.8%**,image-to-front-end code tasks,not SWE-bench or independent Vibe Code. No exact repository repair,DeepSWE,LCB,SciCode or terminal benchmark verified;broad software autonomy not inferred from frontend replication.[3]
- **Documents / video / context:** Vendor **MMLongBench-Doc53.0% /MMLongBench-128K63.4% /LVBench49.5% /VideoMMMU70.1% /OCRBench84.7 /OCRBench-v2 EN63.5,CN59.5 /ChartQA-Pro62.6% /CharXiv reasoning59.6%**. OCR values retained as reported scores;no native audio or near-perfect128K retrieval claim.[3]
- **Grounding / perception:** Vendor **RefCOCO average85.6% /OmniSpatial50.6% /TreeBench45.7% /MMBench v1.1 86.9%**. Category coverage does not prove counting and fine-grained perception robust in arbitrary scenes.[1][3]
- Exact bare-name and vision-name AA candidates404;public AA selector inspection did not reveal the exact Flash model. Two guessed exact Vals candidates404. These are candidate/source findings,not global proof of no independent evaluation. No runtime/task-cost number invented.[6]

### Normalized scores (1–100)

- **Tool use: 47/100.** Real visual tools and vendor navigation competence,capped by OSWorld21.1%,multimodal browsing7.1% and missing independent broad tool validation.[1][3]
- **Reasoning: 61/100.** **Limited visual-reasoning proxy** from MathVista/MMMU/DynaMath,capped by mixed hard perception and acknowledged weak pure-text QA;no general benchmark fabricated.[1][3]
- **Context window: 60/100.** Verified128K-class model,capped by128K benchmark63.4% and no near-perfect-retention evidence.[1][3][5]
- **Multimodal: 82/100.** Genuine image/video/document understanding and visual tool loop,capped by modest harder reasoning/long-video scores,no audio and text output.[1][2][3]
- **Coding: 64/100.** Useful measured screenshot/frontend reconstruction,capped by missing exact general repair,contest/scientific coding and persistent-project evidence.[3]
- **Cost efficiency: 100/100.** Primary exact native$0 tariff;quotas/terms and unverified Zen route explicit,local hardware not free.[2][4]
- **Overall Score: 63/100.** **Provisional** half-up mean `(47 + 61 + 60 + 82 + 64) / 5 = 62.8`;cost excluded. Best fit:free/local bounded visual extraction and frontend tasks,not validated general coding/reasoning parity.

### Research trail and sources

Fresh Bing exact bare-name query returned unrelated links;Google model query an interstitial;DuckDuckGo provider/benchmark query a202 challenge. Identity-only curated metadata led to actual V-Flash primary weights/native family guide. Inspected full original benchmark image,exact Flash column,config and recommended recipe,primary native free tariff and current OpenCode/models.dev records. Guessed bare/native dedicated pages404;native shared vision guide and correct weights succeeded. No peer,106B,4.5V or FlashX scores substituted.

[1]: https://huggingface.co/zai-org/GLM-4.6V-Flash/raw/main/README.md "Exact9B repository,MIT metadata,visual tools,16K recipe and acknowledged limitations"
[2]: https://docs.z.ai/guides/vlm/glm-4.6v "Explicit separate completely-free Flash,128K,modalities and text output;family demos not9B benchmark data"
[3]: https://raw.githubusercontent.com/zai-org/GLM-V/refs/heads/main/resources/bench_46v.jpeg "Complete primary106B versus9B table,exact Flash scores visually inspected"
[4]: https://docs.z.ai/guides/overview/pricing "Exact native GLM-4.6V-Flash free input/output/cache/storage tariff"
[5]: https://huggingface.co/zai-org/GLM-4.6V-Flash/raw/main/config.json "Actual vision architecture and131,072 text positions"
[6]: https://artificialanalysis.ai/models/glm-4-6v-flash "Exact evaluator candidate404,not global absence claim"
[7]: https://models.dev/api.json "Exact native vision ID/date/128K32K metadata,not bare Zen identity"
[8]: https://opencode.ai/inference/v1/models "Current catalog lacks proposed bare glm-4.6-flash ID"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,explicit curated-to-primary identity mapping,full exact-column visual benchmark/config inspection and native tariff verification. Scores are provisional normalized1–100 interpretations;reasoning/coding scope limitations explicit.
- Future sources: add a separate signed file alongside this report using the same headings.
