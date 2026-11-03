# Ling 3.0 Flash Sante — findings by Nemotron 3.5 Super VL 120B A12B

- Source: inclusionAI / Ant Group (`inclusionAI/Ling-3.0-flash-Sante`), modelcomp.vercel.app, benchlm.ai, benchgap.net, modelscale.dev, orcarouter.ai, ailookout.news, huggingface.co, developer.ant-ling.com, vercel AI Gateway, novita.ai
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante (Ling-3.0-flash-Sante)
- **Short description:** inclusionAI (Ant Group)'s Oct 2026 MIT-licensed healthcare-specialized MoE model — 124B total / 5.1B active per token, 256K context, built on Ling-3.0-flash for medical reasoning, healthcare research, deep research, and tool-assisted workflows. Research model, not a medical device.
- **Provider / access:** Hugging Face (`inclusionAI/Ling-3.0-flash-Sante`), ModelScope, Vercel AI Gateway (`inclusionai/ling-3.0-flash-sante`), Novita AI (`inclusionai/ling-3.0-flash-sante`), developer.ant-ling.com API. MIT open weights — free to self-host.
- **Release / knowledge:** Released 2026-09-04 (OpenRouter); HF repo published 2026-10-26. Knowledge cutoff not publicly specified.
- **IDs:** `inclusionAI/Ling-3.0-flash-Sante` (Hugging Face ID); `inclusionai/ling-3.0-flash-sante` (Vercel/Novita/OpenRouter ID). No Free ID confirmed on OpenCode Zen.
- **Context window:** 262,144 total tokens (256K) per OpenRouter, Novita, Vercel, HF quickstart; model card says training extends to 256K.
- **Modalities:** Text in/out. Reasoning: yes (thinking mode enabled by default). Tool calls: yes (function calling). JSON mode: not explicitly documented. No vision/audio.
- **Pricing (as of 2026-10-29):** Vercel AI Gateway: $0.075 input / $0.22 output per 1M tokens (was free through Oct 4, 2026); Novita: $0/$0 per 1M. MIT open weights free to self-host.
- **Architecture:** 124B total / 5.1B active parameters per token, hybrid-linear MoE (Kimi Delta Attention KDA, gated MLA, sparse MoE layers); MIT open-weights license.

### Raw benchmarks found

Healthcare (vendor, inclusionAI model card):
- HealthBench Professional: **54.3%** (second only to GPT-5.6 Sol at 60.8; ailookout.news)
- DiagnosisArena-MCQ: **83.8%** (above GPT-5.6 Sol 81.9, Kimi K3 78.4; vendor, orcarouter.ai)
- AFUMED-Drug: **90.6%** (medication contraindications; vendor)
- AFUSAFE-MedSCE: **80.1%** (medical safety; vendor)
- MedXpertQA (Text): **51.0%** (benchlm.ai, modelscale.dev)
- MedQA-USMLE: **94.2%** (vendor)
- AFUMED-ComplexReasoning: **76.92%** (vendor, @AntLingAGI)

Agentic & general (vendor + benchgap):
- BrowseComp: **80.2%** (single-agent, measured; benchlm.ai, benchgap)
- DeepSearchQA: **90.8%** (measured; benchlm.ai)
- HLE with tools: **57.1%** (measured; benchlm.ai, benchgap)
- GDPval-AA: **1288 Elo** (vendor; benchlm.ai)
- MCP Atlas: **75.6%** (measured; benchlm.ai)
- AA-LCR: **70.5%** (measured; benchlm.ai, benchgap)
- MedMCQA: **80.3%** (vendor, ailookout.news)
- τ²-bench results: **98.1%** (estimated, benchgap — likely conflated with other data)

Conflicts noted: benchgap lists many estimated scores (marked as estimates, not measurements) — e.g., GPQA Diamond 88.8% estimated, τ²-bench 98.1% estimated. Only benchlm.ai/measured figures (BrowseComp, DeepSearchQA, HLE w/ tools, GDPval-AA, MCP Atlas, AA-LCR, MedXpertQA, HealthBench Professional) are treated as verified. All inclusionAI figures are vendor-reported with no independent third-party reproduction (orcarouter.ai, ailookout.news both note this).

### Normalized scores (1–100)

- **Tool use: 78/100.** BrowseComp 80.2%, MCP Atlas 75.6%, HLE w/ tools 57.1%, tool calling supported; strong agentic/web research capability; capped by lack of OSWorld/Terminal-Bench figures and vendor-only data.
- **Reasoning: 66/100.** AA-LCR 70.5%, HealthBench Professional 54.3% (rubric-graded medical conversations); strong medical reasoning but no GPQA/HLE-without-tools verified figures; capped below frontier general-reasoning models.
- **Context window: 85/100.** 256K context verified from multiple sources; strong long-context capability; no long-context retrieval benchmark (MRCR/RULER) found.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output (Ling-3.0-flash-VL is the multimodal variant).
- **Coding: 58/100.** No standard coding benchmarks (SWE-bench, LiveCodeBench, etc.) found for this healthcare-specialized model; general coding capability not measured; capped by absence of coding data.
- **Cost efficiency: 85/100.** MIT open weights free to self-host; Vercel $0.075/$0.22 per 1M is low-cost; Novita was free; research model not optimized for production cost.
- **Overall Score: 60/100.** Mean of (78+66+85+15+58)/5 = 60.4 → 60; aligns with modelcomp's 59.5 agent aggregate; best-fit recommendation: healthcare-specialized open-weight model for medical reasoning and agentic clinical workflows; not a general-purpose frontier model; no coding benchmarks published.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: huggingface.co/inclusionAI + model card, modelcomp.vercel.app, benchlm.ai, benchgap.net, ailookout.news, orcarouter.ai, developer.ant-ling.com, vercel AI Gateway, novita.ai); scores are normalized 1–100 interpretations, not official vendor scores. All inclusionAI figures are vendor-reported with no independent reproduction — benchgap estimates flagged separately and not used as verified. No coding benchmarks exist for this healthcare-specialized model.
- Future sources: add a new file next to this one using the same headings.
