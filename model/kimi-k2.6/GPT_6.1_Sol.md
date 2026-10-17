# Kimi K2.6 — findings by GPT 6.1 Sol

- Source: Moonshot AI / `moonshotai/Kimi-K2.6`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Kimi K2.6
- **Short description:** Open-weight image/video agent model, distinct from K2.5/K2.7/K3 and swarm orchestration product [S1].
- **Provider / access:** Moonshot OpenAI/Anthropic-compatible APIs, Kimi Code and local vLLM/SGLang/KTransformers; video experimental and official API-only per upstream [S1].
- **Release / knowledge:** April20,2026 per Vals; cutoff unverified [S2].
- **IDs:** `kimi-k2.6`, HF `moonshotai/Kimi-K2.6`; no verified Free API ID [S1,S3].
- **Context window:** Primary262,144/256K; Vals256,000 output budget not additional capacity beyond context [S1,S2].
- **Modalities:** Text/image, experimental official-host video input, text output; thinking/instant modes, retained thinking **disabled by default** [S1]. No audio verified.
- **Pricing (2026-10-17):** Gateway$0.95 input/$0.16 cache/$4 output per million; Vals corroborates input/output; native/cache-write rates not directly verified [S2,S3].
- **Architecture:**1T total/32B active MoE,61layers,MLA,400M MoonViT; nativeINT4 and **Modified MIT**, not plainMIT. No unrestricted-licence claim beyond inspected card [S1].

### Raw benchmarks found
Agent / tool use:
- Primary thinking temp1/top_p1/262K: BrowseComp **83.2% single/86.3% swarm**, DeepSearchQA **92.5 F1/83% accuracy**, Toolathlon **50%**, MCPMark **55.9%**, OSWorld **73.1%** [S1]. ClawEvalv1.1 **62.3% pass^3/80.9% pass@3**, different repeatability/at-least-once metrics, not interchangeable. APEX **27.9%** on452/480 public tasks [S1].
- Vals current temp0.6/top_p0.95/256K default: TB2.1 **53.56% ±2.08**, financev2 **44.90% ±0.73**, legal-agent **1.67% ±0.83**, legal research **15.87% ±2.54** [S2]. Effort/mode not displayed; overrides possible. Tau3 **20.6%**, CritPt **8%** from externally sourced comparison in directly read Inkling launch, dated snapshot [S4]. GDPval exact current not verified.
Reasoning / knowledge:
- Primary GPQA **90.5%**, HLE **34.7% full/36.4% text-only**, tools **54% full/55.5% text-only**, AIME2026 **96.4%** [S1]. Vals GPQA **89.14% ±2.00**, MMLU **87.57% ±0.33** [S2]. Current AA/Omniscience/LCR/MLCR exact rows not verified.
Coding:
- Primary TB2.0 **66.7% Terminus**, SWE-Pro **58.6%**, SWE **80.2%**, multilingual **76.7%**, SciCode **52.2%**, LiveCodev6 **89.6%**. Vendor coding scores averaged10runs, internal SWE-agent-derived harness [S1].
- Vals SWE **76.20% ±1.91**, LiveCode **86.77% ±0.97**, Vibe1.1 **37.89% ±4.91**, migration **27.77% ±4.14**, ProgramBench **0%** [S2]. Exact DeepSWE not verified.
Long context / multimodal:
- Native262K, no1M or>=98% retrieval evidence [S1]. Primary MMMU **79.4% no Python/80.1% Python**, CharXiv **80.4/86.7%**, MathVision **87.4/93.2%**, averaged3runs [S1]. Vals MMMU **86.30% ±0.83**, distinct configuration [S2].

### Evidence comparison and research trail
Three fresh DuckDuckGo queries: `"Kimi K2.6" official model card`, `"Kimi K2.6" independent benchmarks`, `"Kimi K2.6" review pricing limitations`; all challenged. Direct upstream card and independent Vals read; gateway current catalog reread this batch [S3]. No search result or unread review treated as evidence. Vals historical thinking temp1/SWE74.5/TB2.0 57.3/Index63.9 differs currenttemp0.6/SWE76.2/TB2.1 53.56; cannot infer identical mode or regression from differing suites. Vendor HLE uses discard-all context management,262K generation and per-step49K; cumulative agent/swarm capabilities are not native window growth. Native video only official API, not automatically local. Independent broader-agent/Vibe results temper vendor24/7-autonomy marketing. Initial own assessment, not a revision.

### Normalized scores (1–100)
- **Tool use: 78/100.** Useful search/Claw/tools and terminal, capped by low professional completion and multi-agent attribution [S1,S2].
- **Reasoning: 85/100.** Strong GPQA/HLE/math, calibration and harder-task evidence incomplete [S1,S2].
- **Context window: 76/100.** Native262K tier, no verified1M extension adopted [S1].
- **Multimodal: 88/100.** Strong image and official experimental video/document work, noaudio/media output [S1,S2].
- **Coding: 80/100.** Useful SWE/LiveCode/SciCode, capped by Vibe/migration/full-program gaps [S1,S2].
- **Cost efficiency: 88/100.** Moderate-low gateway$0.95/$4, retained-thinking/cache behavior can change spend [S1–S3].
- **Overall Score: 81/100.** (78+85+76+88+80)/5=81.4 →81; scoped supervised image/coding/search agents. Cost excluded.

### Sources
- [S1] https://huggingface.co/moonshotai/Kimi-K2.6/raw/main/README.md — primary model/licence metadata/settings/full and subset results.
- [S2] https://www.vals.ai/models/kimi_kimi-k2.6 — independent current and historical thinking configurations.
- [S3] https://opencode.ai/docs/zen — current gateway rates/route, directly inspected this batch.
- [S4] https://thinkingmachines.ai/news/inkling-small/ — dated externally sourced K2.6 comparison, directly read this batch; not current exact native rerun.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent web research, three blocked search attempts, direct primary/evaluator inspection; subsets, repeatability metrics, mode and swarm differences explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
