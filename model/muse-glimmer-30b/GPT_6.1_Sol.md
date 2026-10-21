# Muse Glimmer 30B — findings by GPT 6.1 Sol

- Source: Meta Superintelligence Labs / `meta-models/Muse-Glimmer-30B`, high reasoning.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Muse Glimmer 30B. Distilled from Muse Spark, not the same model or a Spark pricing tier.[1][2]
- **Short description:** Open-weight, dense image/text model for local coding and agents. High-reasoning evaluation and low-cost serving are established; broad frontier autonomy is not.[1][2][3]
- **Provider / IDs:** Weights **`meta-models/Muse-Glimmer-30B`**; local supported runtimes and third-party Chat Completions **`meta/muse-glimmer-30b`**. Current gateway lists DeepInfra BF16 and Together, backend dated20260810; Meta docs describe a local model rather than a native paid Meta Model API SKU. No free Zen ID verified; no authenticated inference.[2][4][5]
- **Release / cutoff:** **2026-08-10**, knowledge **2026-01-04**, primary card and exact evaluator agree.[1][2][3]
- **Context window:** Config/default **131,072**, primary says longer contexts supported without a concrete tested upper cap. Current exact routes131,072 total; DeepInfra **16,384 output**, Together **117,964 advertised output**. No universal full131K output or guaranteed additive input/output budget.[2][4][5][6]
- **Modalities / reasoning:** **Text/image → text**; dedicated perception encoder, screenshot/chart understanding. Audio unsupported; video processed as individual frames, not explicitly optimized/native video capability. System-prompt reasoning strengths low/medium/high/xhigh; primary evaluation **high**, temperature1/top-p.95/top-k64. Function calling/structured output advertised; DeepInfra lacks forced named/required tool choice while Together advertises it.[2][4]
- **Pricing (2026-10-21):** Per1M DeepInfra **$0.30 input/$1.20 output/$0.04 cache read**, Together **$0.35/$1.50/$0.04**. No verified $0 hosted tariff. Apache2 weights are free to download, not zero-cost hardware/electricity or guaranteed free inference.[4][7]
- **Architecture / licence:** **29.6B total including ~1.8B vision encoder**, dense,52 text layers/hidden6656, repeating3 sliding+1 full attention,2048 sliding window, GQA32Q/2KV; exact config inspected. **Apache2.0** licence directly verified. BF16 and quantized artifacts/drafter released; do not add the encoder again to the card's inclusive total.[2][6][7]

### Raw benchmarks found

**Provenance:** Full **seven-page official methodology** inspected. Vendor high-strength results use task-specific scaffolds and repeated runs, not all one identical harness. AA exact selected **Muse Glimmer (High)** UUID `583f98fb-c4b8-4df3-8d40-60ac0ed69882`, weights link matches, current composite **measured**.[2][3][8]

Agent / tool use:

- Vendor **MCP Atlas75.5%**,500 public tasks/four runs/Gemini2.5Pro judge, pass threshold>.75; **DeepSearchQA74.6 F1**,900 questions/four runs, not74.6% fully solved tasks. **WildClawBench47.6 mean reward**,60 tasks/OpenClaw/three runs; **GAIA2 43.3%**,800 tasks/three runs/OpenClaw/gpt-oss120b judge.[2][8]
- Vendor **SkillsBench44.3% weighted-test reward**,86-task version/four attempts; **OSWorld-Verified65.9% mean reward**,361 tasks excluding8 Drive tasks,200-step budget/four attempts. These are source-reported, not additional independent replications.[2][8]
- AA **Tau3-Banking23.51% /TB2.1 51.69% /TB4 0.51% /Terminal-Bench-Science0.00% measured**. Exact Tau2 null, not zero. Vendor TB2.1 is AA-attributed Terminus2/89 tasks.[3][8]
- AA current **GDPval786.79 Elo /Briefcase477.41 Elo,11.51% rubric pass /AutomationBench partial6.83% /AnalystAgent20.0% /EnterpriseOps-Gym34.74%**. Vendor's earlier **GDPval953**, secondary893 are different snapshots; not averaged or interpreted as percentage accuracy.[2][3][9]
- No exact Toolathlon/SWE Atlas Codebase QnA verified. WildClawBench is not silently relabelled Claw-Eval/ClawProBench.

Reasoning / knowledge:

- Independent AA **GPQA83.54% /HLE text no-tools21.96% /CritPt2.57%**, current **Intelligence Index17.475 measured**. Publisher's GPQA/HLE rows are AA-sourced, not vendor replication.[2][3][8]
- Vendor **AIME2026 94.7%**,30-question set averaged over10 runs; **IFBench77.0%**,294 tasks/four runs. No exact AIME2025 measurement substituted.[2][8]
- AA **Omniscience accuracy26.98% /hallucination81.94% /reliability−32.85**. Different denominators; high hallucination metric does not mean that fraction of all statements is necessarily false.[3]

Coding / visual / context:

- Vendor **SWE Verified76.0% on500 tasks /SWE Pro51.2% on731 original tasks**, bash+file tools, mean pass rate across4 runs. Original Pro task set differs from refined variants. **SciCode43.6% vendor table is AA-attributed288 subproblems**, not43.6% whole problems; current AA **44.91%**.[2][3][8]
- No independently verified exact LiveCodeBench/DeepSWE/Vibe Code result found. Modern terminal/science failures limit generalization from strong bounded repairs.[3]
- Vendor **CharXiv78.8%**,1000 validation questions/four runs; **ScreenSpotPro75.4%** uses iterative Python cropping with up to10 verification rounds/three restarts, not one raw-image guess. **OmniDocBench1.5 75.8** uses a **modified two-component scoring/matching implementation**, not direct parity with the official three-component protocol.[2][8]
- AA **MMMU-Pro74.34% /GDP.pdf10.0%**. Vendor74 is the earlier AA-attributed result; no credit for native audio or image generation.[2][3][8]
- Vendor **BEAM128K65.1%**,400 single-turn memory probes/four runs/GPT5.4 judge. AA **LCR83.33%**, vendor earlier80.0%; neither implies ≥98% full-window recall or an established larger context ceiling.[2][3][8]
- Vendor K-Quant17GB+dFlash batch1/greedy decoding: **RTX5090 74.9→233.4tokens/s**, **M4Max23.7→37.8**, **M5Max26.6→50.2**; precision/runtime-specific, not BF16 hosted throughput. Current AA median **116.29tokens/s /1.20s first chunk**, weighted **$0.05755/task**. Quantization reported degradation **0.2% dynamic /1.0%17GB**, average over15 benchmarks, not lossless every task or guaranteed full-context RAM fit.[2][3]

### Normalized scores (1–100)

- **Tool use: 60/100.** Good vendor tool/search/GUI coverage and moderate banking/TB2.1, capped by independent hard-terminal0.51%, science0 and weak professional deliverables.[2][3][8]
- **Reasoning: 74/100.** Useful GPQA/HLE and strong small-set AIME, capped by CritPt, factual calibration and modest broad measured index.[2][3][8]
- **Context window: 60/100.** Verified131K fits the100K–200K tier; unbounded extension language and65.1% BEAM do not establish larger near-perfect retention.[2][5][6][8]
- **Multimodal: 78/100.** Quantified screenshot/chart/document understanding, capped by text-only output, no audio and frame-based video limitations.[2][3][8]
- **Coding: 75/100.** Strong vendor bounded repairs and independent SciCode, capped by original-set/harness dependence and very poor newer terminal/science results.[2][3][8]
- **Cost efficiency: 94/100.** Cheap verified paid routes, caching and realistic local quantization options, capped by hardware costs, provider output/tool limits and failure overhead.[2][3][4]
- **Overall Score: 69/100.** Half-up mean `(60 + 74 + 60 + 78 + 75) / 5 = 69.4`; cost excluded. Useful local image/text coding-agent option, with131K capacity and difficult-agent limits material to this general-purpose average.

### Research trail and sources

Fresh Bing RSS `"Muse Glimmer 30B" official benchmark` returned unrelated Wikipedia links; Google exact-model benchmark query an interstitial; DuckDuckGo `"Muse Glimmer" 30B weights pricing` found actual provider/primary leads. A fourth domain-focused DuckDuckGo query resolved **meta-models** weights and dev.meta.ai/research.meta.ai pages after guessed meta-llama/meta/facebook candidates failed401. Exact AA uses **`muse-glimmer`**, not guessed30B slug404; Vals candidate404. Full primary card/config/licence/methodology and live correct **meta/** gateway inspected. Secondary aggregate41.18/rank not used as this source's score; no peer findings or teacher benchmarks used.

[1]: https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model "August10 primary release and local inference/weights distinction"
[2]: https://huggingface.co/meta-models/Muse-Glimmer-30B/raw/main/README.md "Exact model card, inclusive parameter total, modes, full benchmark and local-speed tables"
[3]: https://artificialanalysis.ai/models/muse-glimmer "Exact selected high measured profile, modern agents, calibration, runtime/task cost"
[4]: https://openrouter.ai/api/v1/models/meta/muse-glimmer-30b/endpoints "Actual DeepInfra/Together snapshot, precision/caps/tool-choice differences and paid prices"
[5]: https://dev.meta.ai/docs/muse-glimmer "Primary128K default/local-only model and unspecified longer-context support"
[6]: https://huggingface.co/meta-models/Muse-Glimmer-30B/raw/main/config.json "Exact131072-position,52-layer multimodal dense architecture"
[7]: https://huggingface.co/meta-models/Muse-Glimmer-30B/raw/main/LICENSE "Direct verified Apache License2.0"
[8]: https://research.meta.ai/static/muse-glimmer-methodology "Full seven-page PDF: F1/reward/pass metrics, task counts, attempt/scaffold/judge details and modified document scoring"
[9]: https://benchlm.ai/models/muse-glimmer-30b "Secondary mixed-date aggregation used for discovery, not independent replication or normalized Overall"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches, complete primary card/licence/config/seven-page methodology inspection and exact independent evaluator/provider comparison. Scores are normalized1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
