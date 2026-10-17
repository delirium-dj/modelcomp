# Inkling Small — findings by GPT 6.1 Sol

- Source: Thinking Machines Lab / Inkling-Small
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Inkling Small
- **Short description:** Apache2 native text/image/audio generalist; not the975B Inkling sibling or earlier Small preview [S1,S2].
- **Provider / access:** Tinker API/Playground, open weights, vLLM/SGLang; third-party inference [S1,S2].
- **Release / knowledge:** July30,2026; exact cutoff unverified [S1].
- **IDs:** `thinkingmachines/Inkling-Small`; provider-specific model names must be checked separately; no verified free inference ID.
- **Context window:** Primary **up to1M**, but Vals measured262K context/output. Do not assume every host exposes1M or that262K is model's only limit [S1,S3].
- **Modalities:** Text/image/audio input, text output; audio ideally under2minutes,16KHz WAV. Video in training data does not establish video API input [S2].
- **Pricing (2026-10-17):** Vals hosted$0.30/$1.20 per million; primary confirms$1.20 output and limited-time Tinker discount, exact present input/cache rates not primary-verified [S1,S3].
- **Architecture:**276B total/12B active,42-layer sparse MoE,6/256 routed+2shared experts, BF16/NVFP4, Apache2 [S2].

### Raw benchmarks found
Agent / tool use:
- Primary effort0.99/temp1: TB2.1 **64.7% internal best harness**, MCP Atlas **79.6% public/79.2% all**, Tau3 Banking **15.5%**, GDPval-AA v2 **1269 Elo**, BrowseComp **77.4% context-managed**, ToolathlonVerified **54.4%** [S1].
- Vals effort0.99/temp1/top_p1/262K default: TB4 **0%**, SkillsBench **33.58% ±3.66**, finance **41.26% ±0.83**, legal-agent **1.67% ±0.83** [S3]. Claw exact score not verified.
Reasoning / knowledge:
- Primary GPQA **89.5%**, HLE **31.6% text/no tools/47.8% tools**, CritPt **8.3%**, ARC2 **40.1%**, SimpleQA Verified **20.6%**, Omniscience Index **−9** [S1].
- Vals GPQA **83.59% ±2.04**, MMLU **85.57% ±0.35**, ProofBench **6% ±2.39**, overall Index **25.46% ±1.03 (#48/49)** [S3]. Launch AA v4.1 **40** not current index. Secondary current AA25.7/LCR75.7/accuracy33.2/conditional hallucination63.0 only [S4]. MLCR not verified.
Coding:
- Primary SWE **80.2% bash-only**, SWE-Pro **55.9%**, SciCode **48.7%**, coding trajectory limit256K [S1]. Vals SWE **82.20% ±1.71**, LiveCode **85.93% ±0.99**, Vibe1.1 **19.05% ±3.40**, migration **13.68% ±3.81**, ProgramBench **0.50% ±0.50** [S3]. DeepSWE unverified.
Long context / multimodal:
- Up-to1M capacity, no verified full-window retrieval [S1]. Primary MMMU **74% Standard10**, CharXiv **77.4%/81.3% withPython**, AudioMC **54.9%**, MMAU **77%**, VoiceBench **90.1% format-prompted** [S1].

### Evidence comparison and research trail
Three successful DuckDuckGo searches: `"Inkling Small" official model`, `"Inkling Small" independent benchmark`, `"Inkling Small" review pricing limitations`. Direct launch, upstream README, Vals and BenchLM read. Primary up-to1M/audio overrides narrower Vals host capability; their262K setup still controls that evaluation. Vendor TB2.1 internal harness and modern Vals TB4 are different suites, not same-test collapse. Vendor web-contaminated solutions zeroed; cross-model table uses mixed self-reported/external tests. Primary factuality and Proof6/Vibe19 qualify generalist marketing despite SWE82/LiveCode86. BF16/NVFP4 variants may differ; no blanket numerical equivalence inferred. Vals$0.282/test21m02s is task-suite-specific. This is initial assessment, not a revision to prior own scores.

### Normalized scores (1–100)
- **Tool use: 65/100.** Good older MCP/search but low Tau3/professional completion and TB4zero [S1,S3].
- **Reasoning: 76/100.** GPQA/HLE useful, capped by weak proof/calibration/abstract tasks [S1,S3].
- **Context window: 95/100.** Primary up-to1M, host262K caveat and no perfect-retrieval bonus [S1,S3].
- **Multimodal: 95/100.** Native audio/image with measured coverage, text-only output/audio-length limits [S1,S2].
- **Coding: 75/100.** Good SWE/LiveCode, weak Vibe/migration/full-program performance [S3].
- **Cost efficiency: 93/100.** Low hosted$0.30/$1.20, present discount/cache uncertainty explicit [S1,S3].
- **Overall Score: 81/100.** (65+76+95+95+75)/5=81.2 →81; budget supervised audio/image and scoped coding. Cost excluded.

### Sources
- [S1] https://thinkingmachines.ai/news/inkling-small/ — primary launch, capabilities, table and caveats.
- [S2] https://huggingface.co/thinkingmachines/inkling-small/raw/main/README.md — upstream licence/architecture/audio limits.
- [S3] https://www.vals.ai/models/thinkingmachines_inkling-small — independent host-specific evaluation.
- [S4] https://benchlm.ai/models/inkling-small — secondary linked snapshots, October17.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent web research, three searches, primary/upstream/evaluator inspection; host, snapshot and modality conflicts explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
