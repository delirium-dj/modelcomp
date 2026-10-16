# DeepSeek V4.1 Flash — findings by GPT 6.1 Sol

- Source: DeepSeek / `deepseek-flash` (V4.1 Flash)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** DeepSeek V4.1 Flash (temporary OpenCode Free route available)
- **Short description:** MIT open-weight image/text MoE with aggressive KV compression and large agent output budgets [S1]. Old V4 Flash aliases now route here; historical predecessor benchmarks are not current-model measurements [S2].
- **Provider / access:** `https://api.deepseek.com` OpenAI format and `/anthropic`; Responses, tools and JSON. OpenCode Chat Completions paid/free routes [S2,S4].
- **Release / knowledge:** September 10, 2026 [S3]; cutoff not verified.
- **IDs:** Native `deepseek-flash`; gateway `deepseek-v4.1-flash`, `deepseek-v4.1-flash-free`; HF `deepseek-ai/DeepSeek-V4.1-Flash` [S1,S2,S4].
- **Context window:** Primary 1M/maximum 384K output; self-host README recommends at least 256K generation budget [S1,S2].
- **Modalities:** Native text/image input, text output; thinking/non-thinking, tool calling/JSON; no video/audio API support verified [S1,S2].
- **Pricing (as of 2026-10-16):** Native peak $0.30 input miss/$0.006 hit/$1.20 output, off-peak half; search/fetch $0.75/1000 successful requests. OpenCode paid $0.30/$1.20 and temporary Free $0; cost score evaluates Free, provider zero-retention/no-training policy per gateway [S2,S4].
- **Architecture:** 552B backbone plus separately described 196B Engram memory; do not present 552B as all components summed. Causal encoder-decoder 40 layers, 8B active prefill/16B decode, CSA2/FP4 KV, vision encoder; 45T multimodal pretraining. MIT [S1]. Numeric reasoning effort 1–100.

### Raw benchmarks found
Agent / tool use:
- Vendor instruct effort100/temp1/top_p0.95: TB2.1 **90.6%**, TB3 **30.0%**, TB4 **31.2%**, AutomationBench **54.8%**, ALE **31.8% pass@1**, CyberGym **88.1%** [S1]. TB2.1 varies **84.1% Codex /85.0% OpenCode /90.6% DSH Minimal** under vendor scaffold comparison; not one harness-independent score.
- Vals current max/384K default: TB4 **19.70% ±1.75**, SkillsBench **69.80% ±3.88 (#1/35)**, finance v2 **53.48% ±0.39**, SRE **0.76% ±0.54**, legal-agent **6.67% ±1.83** [S3]. Dated September note says high effort and TB2.1 **74.53%**, so historical/current settings differ.
- GDPval-AA/Tau3/Tau2/MCP-Atlas/Claw-Eval exact figures not verified.

Reasoning / knowledge:
- Vendor instruct GPQA **90.9%**, HLE **36.8% full /39.1% text-only /63.9% tools**, MathArena Apex **65.6%**, Codeforces **3471 rating** [S1]. Subsets/tools not averaged.
- Vals ProofBench v1.1 **54% ±5.01**, current index **51.32% ±1.13 (#26/49)** versus historical **57.86%**, different snapshot; BioMystery **67.78% ±1.11** [S3]. Current AA/CritPt/MLCR/Omniscience exact values not verified.

Coding:
- Vendor DeepSWE v1.1 **74.2% mini-SWE**, **65.5% OpenCode**; NL2Repo **64.0 score**; ProgramBench **20.3 Almost@1** [S1]. Almost@1 is not complete-pass accuracy.
- Vals Vibe v1.1 **84.74% ±2.89**, Vibe1–100 **16.38% ±3.19**, migration **45.62% ±4.29**, multimodal SWE **46.46% ±2.28**, ProgramBench **0.50% ±0.50**, terminal-science **0%** [S3]. Exact conventional SWE/LiveCode/SciCode not found.

Long context / multimodal:
- Native 1M, no verified instruct full-window MRCR/RULER. README base LongBench **45.2%**, MMMU **56.5%**, DocVQA **95.6%** are **base-model** results and excluded from instruct scores [S1]. Instruct Chartography tools **78.9%**, BabyVision tools **89.6%**, ZeroBench tools **49% pass@5**, different metrics [S1].

### Evidence comparison and research trail
Three fresh Google queries: `DeepSeek V4.1 Flash official model`, `DeepSeek V4.1 Flash independent benchmark`, `DeepSeek V4.1 Flash review limitations pricing`; all interstitials. Direct upstream card, primary API/pricing and independent Vals read; gateway doc read this session [S4]. Strong vendor/hosted discrepancies are partly scaffold, sample count and grading: vendor ProgramBench Almost@1 cannot substitute for Vals complete pass. Base and instruct tables explicitly separated. Native retired aliases do not prove old measurements now reproduce. Vals **$0.332/test /27m53s** current versus historical **$0.30/test** has a suite/snapshot denominator, not universal task cost. Free route may end; native off-peak schedule and separate tool fees matter [S2–S4].

### Normalized scores (1–100)
- **Tool use: 87/100.** Strong SkillsBench and useful agent evidence, capped by hosted TB4/SRE/legal results [S1,S3].
- **Reasoning: 86/100.** GPQA/HLE/math support strong reasoning, capped by ProofBench and absent current calibration evidence [S1,S3].
- **Context window: 95/100.** Official 1M capacity, no perfect-retrieval bonus [S1,S2].
- **Multimodal: 75/100.** Native image plus grounded chart/visual work; no verified audio/video and no native media output [S1,S2].
- **Coding: 90/100.** Strong Vibe/migration/DeepSWE, capped by scaffold variation and complete-program/science failures [S1,S3].
- **Cost efficiency: 100/100.** Evaluated temporary OpenCode Free $0; paid fallback/off-peak not confused with free [S2,S4].
- **Overall Score: 87/100.** (87 + 86 + 95 + 75 + 90) / 5 = 86.6 → 87. Best fit inexpensive supervised image/coding agents; cost excluded.

### Sources
- [S1] https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/raw/main/README.md — primary architecture, licence, instruct/base and scaffold tables.
- [S2] https://api-docs.deepseek.com/quick_start/pricing — exact current native routing, limits and time-tier prices.
- [S3] https://www.vals.ai/models/deepseek_deepseek-v4.1-flash — independent current and September evaluation snapshots.
- [S4] https://opencode.ai/docs/zen — directly read provider Free/paid routes and data policy.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent web research, three searches and direct upstream/provider/evaluator comparison; base, instruct, scaffolds and metric differences explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
