# Kimi K3.1 Pro — Findings by Kimi K3.1 Pro

- **Research date:** 2026-11-06
- **Subject:** Kimi K3.1 Pro (`kimi-k3.1-pro`), not Kimi K3 or the separate Highspeed serving variant.
- **Method:** Fresh public-web research using Moonshot's technical blog, API documentation, and Hugging Face model card, triangulated with Artificial Analysis and BenchmarkList. More than three independent searches were completed. No peer findings were read or inherited.
- **Attribution rule:** Only exact K3.1 Pro evidence is scored. K3, K3.1 Pro Highspeed, and comparison-model results are excluded. Vendor and independent runs, benchmark versions, tool settings, and harnesses remain separate.

## Model card

| Field | Evidence |
| --- | --- |
| Developer | Moonshot AI / Kimi |
| Exact identifiers | Kimi API `kimi-k3.1-pro`; OpenRouter `moonshotai/kimi-k3.1-pro`; weights `moonshotai/Kimi-K3.1-Pro` |
| Release | API/product launch 2026-10-23; full weights released by 2026-11-04 |
| Architecture | Sparse MoE, 2.8T total and 104B activated parameters; 93 layers, one dense; 896 routed experts with 16 selected plus two shared experts |
| Attention / vision | 69 KDA plus 24 Gated DSA layers; MoonViT-V2 401M-parameter vision encoder; MXFP4 weights and MXFP8 activations |
| Context | 1,048,576 tokens; official documentation gives flat pricing across context lengths |
| Output limit | No universal official maximum was located; third-party 128K claims are not treated as verified |
| Modalities | Text and image input; text output. Unlike K3, the official K3.1 Pro card does not list video input |
| Reasoning controls | `reasoning_effort`: `low`, `high`, `max` (default); official evaluations normally use max, temperature 1.0, top-p 0.95 |
| License | Kimi K3.1 Pro License; open weights, not an OSI-approved license |
| First-party price | $2 input / $0.20 cached input / $10 output per 1M tokens; cache writes billed separately; Batch API costs 60% of standard |
| Highspeed exclusion | `kimi-k3.1-pro-highspeed` is a separate faster serving ID at $4/$20 and contributes no benchmark evidence here |

### Raw benchmarks found

#### Agentic and tool-use evidence

- **HLE-Full with tools:** 70.0% (Moonshot, max). The no-tools HLE-Full result is 51.1%; these are not interchangeable.
- **BrowseComp:** 92.1% (Moonshot, 200K context compaction, 500-step cap, temperature 1.0/top-p 1.0).
- **GDPval-AA v2.1:** 1,846 Elo; Artificial Analysis independently reported the same launch value and ranked it third at that time.
- **AA-Briefcase v1.1:** 1,678 Elo; **AutomationBench-AA:** 73.3% partial score.
- **OSWorld V2.1:** 79.6% using Moonshot's Kimi Agent harness; **Agents' Last Exam v1.1:** 43.2% overall and 44.2% CLI using Kimi Code.
- **Professional work:** APEX-Agents 69.4%, OfficeQA Pro v2 64.4%, OfficeQA Pro 67.4%, Frontier Finance 58.6%, and Harvey Legal Agent 23.7% all-pass. These use different harnesses and metrics.
- **Factuality under tools:** internal Kimi Hallu Bench Hard claim-level hallucination 8.3%, versus 5.4% without tools; Moonshot warns that this stress test is not a daily-use error rate.

#### Reasoning and knowledge evidence

- **GPQA-Diamond:** 94.2% (Moonshot, max).
- **HLE:** Moonshot reports 51.1% without tools and 39.4% on HLE-Diamond; Artificial Analysis reported 52% on launch-era HLE and 37% on the revised v5 HLE-Diamond. Versions and runs differ.
- **CritPt:** launch-era independent result 24.6–25%; Artificial Analysis v5's private 40-question hard subset with offline Python scores 45%. These are different datasets/settings and are not averaged.
- **Artificial Analysis Intelligence Index:** launch v4.3 score 55 on 2026-10-23; current v5.0.1 score 46. v5 replaced HLE with HLE-Diamond, added FrontierCode 2.0 and Terminal-Bench-Science, and upgraded CritPt and AA-Omniscience, so the nine-point change is not a same-index regression.
- **AA-Omniscience:** launch index 29.87–30, approximately 51% accuracy and 44% hallucination; the current v5.0.1 page uses the revised v1.1 evaluation.
- **SciCode:** 60.8% in BenchmarkList's sourced record, consistent with Artificial Analysis's rounded 61% launch result.

#### Coding evidence

- **Terminal-Bench 4.0:** 65.7% in Moonshot's Claude Code harness; Artificial Analysis independently measured 67%. Preserve both rather than selecting a single canonical score.
- **Terminal-Bench-Science 0.1:** 38.1% with Claude Code in Moonshot's table; Artificial Analysis v5 independently reports 34%.
- **SWE-Marathon v1.1:** 51.7% pass@1 with Claude Code; **DeepSWE v1.1:** 75.5% with Claude Code.
- **ProgramBench:** 31.5% under Moonshot's binary transformation (a task counts only when its raw score is at least 95%), not a conventional raw pass rate.
- **PostTrainBench v1.2:** 36.5%, evaluated internally with Claude Code on H20 rather than H100 GPUs and a substitute judge; comparability is limited.
- **Internal long-horizon coding:** Kimi Code Bench 3.0 Long-horizon 61.2% and Code Bench 2.0 77.1%; useful but vendor-internal.
- **BenchCAD:** 72.8 voxel IoU without tools and 92.7 with Claude Code on a 1,000-case Vision2Code subset; not the full 17,900-case dataset.

#### Long-context evidence

- **Verified window:** 1,048,576 tokens, with Gated DSA replacing K3's Gated MLA full-attention layers for more efficient long-context modeling.
- **AA-LCR v1.1:** 86.3% in the sourced 2026-10-29 record, below K3's 88.7% but independently strong. AA-LCR was removed from Intelligence Index v5, so it is not part of the current 46 composite.
- No exact-model MRCR or Graphwalks result was found. The window specification and AA-LCR result are kept distinct.

#### Multimodal evidence

- **MMMU-Pro:** 84.1% under the official no-tool protocol; 90.0% with Python. The latter is tool-augmented and averaged over four runs.
- **ZeroBench_main:** 29.8 avg@5 / 39.0 pass@5 without Python; 63.0 pass@5 with Python, averaged over five runs.
- **Other tool-augmented vision:** CharXiv reasoning 93.4%, ChartoGraphy 90.2%, BabyVision 95.4%, and GDP.pdf with Python 85.7% task-macro rubric pass rate.
- **Unaided document/perception:** GDP.pdf strict pass 34.6%; PerceptionBench 68.3%; CharXiv reasoning 89.0%. These prevent the Python-assisted rows from being treated as native-only performance.
- Official input support is text/image only; no exact-model audio or native video benchmark was found.

### Normalized scores (1–100)

- **Tool use: 95/100.** HLE with tools 70.0%, BrowseComp 92.1%, GDPval-AA 1,846 Elo, AutomationBench 73.3%, and strong professional-work results demonstrate frontier agency; lower legal all-pass and Agents' Last Exam scores retain a long-horizon reliability caveat.
- **Reasoning: 92/100.** GPQA 94.2%, strong tool-assisted HLE, and the leading launch-era open-weight position support an excellent score; HLE-Diamond 37–39.4%, the current v5.0.1 index of 46, and factual-error evidence cap it.
- **Context window: 94/100.** The verified 1.05M window, sparse-attention redesign, and AA-LCR 86.3% provide excellent evidence; missing MRCR/Graphwalks results prevent a higher rating.
- **Multimodal: 92/100.** MMMU-Pro 84.1% unaided and 90.0% with Python, plus strong chart/document/CAD results, are excellent; weaker unaided ZeroBench/perception results and text/image-only support cap the score.
- **Coding: 92/100.** Independent Terminal-Bench 4.0 67%, SWE-Marathon 51.7%, and DeepSWE 75.5% are frontier results; ProgramBench 31.5%, PostTrainBench 36.5%, and lower independent scientific-terminal performance show meaningful weaknesses.
- **Cost efficiency: 89/100.** $2/$10 pricing, 90% cache-hit discount, 40% Batch discount, open weights, and cheaper third-party hosting are strong; verbose max-effort runs, 36-minute current average Index tasks, cache-write charges, and extreme self-hosting requirements reduce efficiency.
- **Overall Score: 93.0/100.** Half-up mean of 95, 92, 94, 92, and 92; best fit for open-weight long-context research agents, agentic coding, financial analysis, and tool-augmented visual/document work where max-effort latency and harness selection are acceptable.

## Signature

Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)

- **Provider:** Moonshot AI / Kimi
- **Method:** Exact-ID public-web research; official specifications and evaluations triangulated with independent Artificial Analysis and BenchmarkList records; incompatible versions and harnesses preserved.
- **References:**
  - https://www.kimi.ai/blog/kimi-k3-1-pro
  - https://huggingface.co/moonshotai/Kimi-K3.1-Pro
  - https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart
  - https://platform.kimi.ai/docs/pricing/chat
  - https://openrouter.ai/moonshotai/kimi-k3.1-pro
  - https://artificialanalysis.ai/models/kimi-k3-1-pro
  - https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks
  - https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5
  - https://www.benchmarklist.com/models/moonshotai-kimi-k3.1-pro/
