# Kimi K3.1 Pro — findings by Glyph Cluster

- Source: Moonshot AI (`moonshotai/kimi-k3.1-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's open-weight, natively multimodal agentic model in the Kimi K3 family, post-trained with large-scale joint reinforcement learning for long-horizon coding, agentic workflows, and multimodal reasoning.
- **Provider / access:** Moonshot AI / Kimi platform (`https://platform.kimi.ai`, model `kimi-k3.1-pro`); also available via OpenRouter (`moonshotai/kimi-k3.1-pro`) and other hosted providers. API access is OpenAI/Anthropic-compatible per vendor docs.
- **Release / knowledge:** Released October 2026 (Artificial Analysis: 2026-10-23). Knowledge cutoff not explicitly stated in verified public sources reviewed.
- **IDs:** `moonshotai/kimi-k3.1-pro`, `kimi-k3.1-pro` (platform). Open-weight checkpoints published on Hugging Face as `moonshotai/Kimi-K3.1-Pro`.
- **Context window:** 1,048,576 tokens (1M) per Moonshot AI model card / Hugging Face.
- **Modalities:** Text and image input; text output. Reasoning supported (`reasoning_effort` low/high/max; preserved thinking history for multi-turn/tool use). Tool/function calling supported.
- **Pricing (as of 2026-11-10):** Paid/open-weight hosted pricing varies by provider. Artificial Analysis lists ~$2.00 / 1M input and ~$10.00 / 1M output tokens (cache discount ~90% noted on AA). OpenRouter provider pricing spans lower to higher tiers depending on host (see OpenRouter model page); self-hosting possible via open weights.
- **Architecture:** Mixture-of-Experts (MoE), 2.8T total / 104B activated parameters; 93 layers (69 KDA + 24 Gated DSA), 896 experts (16 selected/token + 2 shared), MoonViT-V2 vision encoder (401M params), MXFP4 weights / MXFP8 activations (QAT). License: Kimi K3.1 Pro License (commercial use with restrictions per license).

### Raw benchmarks found

> Sources prioritize Moonshot AI's Hugging Face model card and Artificial Analysis. AA Intelligence Index is a verified third-party composite (v5.0.1) but granular sub-benchmark breakdown values were not all directly extractable from fetched pages; where only aggregate/comparative AA data is available it is noted.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **46** (#1/26 in comparable open-weight large-model class; AA, 2026-11-10 snapshot) — aggregate across AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard), Terminal-Bench-Science 0.1.
- APEX-Agents: **69.4** (Moonshot AI model card, max reasoning effort).
- Agents' Last Exam (ALL / CLI): **43.2 / 44.2** (model card).
- Automation Bench-AA: **73.3** (model card).
- GDPval-AA v2.1 (Elo): **1846** (model card).
- AA-Briefcase v1.1 (Elo): **1678** (model card).
- Toolathlon-Verified / MCP-Atlas: no verified public score found on fetched primary pages for this exact model beyond AA aggregate; MCPMark-Verified listed in Kimi K3 base card but not separately reported for K3.1 Pro in fetched card text.
- OfficeQA Pro v2 / Pro: **64.4 / 67.4** (model card).
- OSWorld V2.1: **79.6** (model card).

Reasoning / knowledge:

- GPQA-Diamond: **94.2** (Hugging Face model card / HF eval results discussion).
- HLE-Full (with tools): **70.0**; HLE-Full (no tools): **51.1**; HLE-Diamond: **39.4** (model card).
- BrowseComp: **92.1** (model card).
- AA-Omniscience Accuracy / Hallucination Rate: no standalone verified public score found for exact model (included in AA Intelligence Index aggregate).
- CritPt / LCR / MLCR: no verified public standalone score found for exact model on fetched pages.

Coding:

- Terminal-Bench 4.0: **65.7** (model card / HF eval results).
- Terminal-Bench-Science 0.1: **38.1** (model card / HF eval results).
- SWE Marathon v1.1: **51.7** (model card).
- DeepSWE v1.1: **75.5** (model card).
- Program Bench: **31.5** (model card).
- BenchCAD w/o tools / w/ tools: **72.8 / 92.7** (model card).
- Kimi Code Bench 2.0 / 3.0 Long-horizon (internal): **77.1 / 61.2** (model card; internal benchmark).
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for exact model on fetched pages.

Long context:

- 1M-token context window claimed/specified by vendor (Moonshot AI). No independently verified long-context retrieval benchmark (e.g. MRCR/RULER/GraphWalks) score found for this exact model on fetched public pages.

Multimodal:

- MMMU-Pro (default / with python): **84.1 / 90.0** (model card).
- CharXiv (RQ, no tools / with python): **89.0 / 93.4** (model card).
- ZeroBench_main (avg@5 / pass@5, with python): **29.8 / 63.0** (model card).
- PerceptionBench: **68.3** (model card).
- GDP.pdf (with python): **85.7** (model card).

### Normalized scores (1–100)

> Derived from available verified public evidence (Moonshot AI model card/HF, Artificial Analysis). Scores are normalized interpretations, not official vendor scores. Cost excluded from Overall.

- **Tool use: 95/100.** Strong agentic evidence: AA Intelligence Index 46 (#1 in comparable open-weight class), APEX-Agents 69.4, Automation Bench-AA 73.3, GDPval-AA v2.1 Elo 1846, AA-Briefcase 1678, BrowseComp 92.1, OSWorld 79.6, and broad tool-use support. Capped by limited standalone public scores on some specialized tool benchmarks (e.g. MCP-Atlas/Toolathlon for this exact model).
- **Reasoning: 94/100.** High reasoning/knowledge performance: GPQA-Diamond 94.2, HLE-Full 51.1 (70.0 with tools), strong agentic research/cyber/finance results in model card. Capped by incomplete public coverage on some difficult reasoning suites (e.g. standalone CritPt/LCR for exact model).
- **Context window: 95/100.** Vendor-specified 1M-token context with long-horizon agentic positioning. Capped because no verified public long-context retrieval/stress benchmark scores (MRCR/RULER/GraphWalks at window length) were found.
- **Multimodal: 82/100.** Native text+image input with strong vision-tool benchmarks (MMMU-Pro up to 90.0 with python, CharXiv 93.4 with python, PerceptionBench 68.3, GDP.pdf 85.7 with python). Capped by lack of verified audio/video input and no image/audio/video generation outputs.
- **Coding: 94/100.** Excellent coding/terminal evidence: Terminal-Bench 4.0 65.7, DeepSWE v1.1 75.5, SWE Marathon 51.7, BenchCAD 92.7 with tools, strong internal code benches. Capped by moderate Program Bench (31.5) and missing verified SWE-bench Verified/LiveCodeBench public numbers for this exact model.
- **Cost efficiency: 62/100.** Paid hosted pricing (~$2/$10 per 1M tokens on AA baseline; varies by provider) is high relative to many open-weight peers but reasonable for frontier-class capability and open-weight self-host options.
- **Overall Score: 92/100.** Mean of non-cost dimensions (95 + 94 + 95 + 82 + 94) / 5 = 92.0. Best fit for frontier agentic coding, tool-heavy workflows, and multimodal knowledge work where top open-weight capability and 1M context matter more than lowest serving cost.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (Moonshot AI Hugging Face model card, Artificial Analysis, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI — Kimi K3.1 Pro (Hugging Face model card)](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)
  - [Artificial Analysis — Kimi K3.1 Pro](https://artificialanalysis.ai/models/kimi-k3-1-pro)
  - [OpenRouter — moonshotai/kimi-k3.1-pro](https://openrouter.ai/moonshotai/kimi-k3.1-pro)
  - [Kimi K3.1 Pro License](https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
