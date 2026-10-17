# Qwen3.7 Plus — findings by GPT 6.1 Sol

- Source: Alibaba / `qwen3.7-plus`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Qwen3.7 Plus
- **Short description:** Hosted multimodal GUI/CLI agent model, distinct from text-only Max [S1,S4].
- **Provider / access:** Qwen Cloud/Model Studio Chat Completions, Responses and Anthropic-compatible protocols; function calling, search, code interpreter and structured output [S1,S4].
- **Release / knowledge:** Vals June1,2026; search also surfaces dated May26 snapshot. Do not conflate snapshot date with general release; cutoff unverified [S2].
- **IDs:** `qwen3.7-plus`; no verified Free ID.
- **Context window:** Primary1M total, rounded983K thinking input/131K output/262K reasoning; Vals used65,536 output, not a contradictory maximum [S1,S2].
- **Modalities:** Text/image/video input, text output; retained thinking recommended for agent loops. Native audio unverified [S1,S4].
- **Pricing (2026-10-17):** Primary<=256K input promotional$0.32/$1.28 per million in/out versus base$0.40/$1.60; implicit cache$0.064, explicit read$0.032/create$0.40. Above-tier rates not inspected; don't extrapolate discounts [S1].
- **Architecture:** Proprietary hosted; parameter count unverified.

### Raw benchmarks found
Agent / tool use:
- Vals temp0.7/preserved thinking/65K default: TB2.1 **52.81% ±0.65**, SkillsBench **54.30% ±4.33**, financev2 **38.22% ±1.04**, legal-agent **0%**, legal research **16.35% ±2.57** [S2].
- Secondary vendor-attributed TB2.0 **70.3%**, MCP Atlas **73.2%**, Claw-Eval **62.7%**, OSWorld **73.3%**, Tau2 AA **93%**, GDPval-AA **886 Elo**; exact numeric rows not directly reverified [S3]. Primary explains TB2.0 five-run Terminus/5h/256K, and screen/OSWorld thinking disabled [S4].
Reasoning / knowledge:
- Primary comparison previously inspected in Qwen27B card lists Plus GPQA **90.3%**, HLE **34.7%**, LiveCodev6 **89.6%** [S5]. Secondary AA index25.2/LCR73/CritPt9.1/Omniscience accuracy22.5 and conditional hallucination27.7 remain secondary snapshots [S3]. MLCR not verified.
Coding:
- Vals Vibe1.1 **46.39% ±4.61**, migration **12.86% ±2.93** [S2]. Historical SWE Index subset **66.67%**, not full-suite77.7% vendor figure; secondary SWE-Pro57.6/SciCode51.3, AA-SciCode46.1 use different harnesses [S2,S3]. Primary Qwen27B comparison DeepSWE **14.2%** [S5].
Long context / multimodal:
- Verified1M capacity, no>=98% full-window retrieval. Secondary MRCR91.7% lacks inspected window label, so no1M claim [S3]. Primary Qwen27B comparison OmniDoc **91.4%**, MathVision **90.3%**, ERQA **69.8%** [S5].

### Evidence comparison and research trail
Three distinct successful DuckDuckGo searches: `"Qwen3.7-Plus" official model`, `"Qwen3.7-Plus" independent benchmarks`, `"Qwen3.7-Plus" review limitations pricing`; two Google attempts interstitials. Direct product, Alibaba launch mirror, Vals and BenchLM inspected. Review/search snippets are discovery only, not claimed read. Launch tables image-only, numeric claims secondary-labelled. Vals historical Index52.33 and current profile35.11 have different coverage, not a fixed-test regression. Index Vibe subset46.94 differs full46.39; historical finance41.25 differs current38.22 [S2]. Vendor refined SWE tasks, altered judgers, excluded API-dependent SkillsBench tasks and disabled thinking on GUI evals prevent universal apples-to-apples comparison [S4]. No existing own report, so these are initial evidence-derived scores, not revisions to a prior score.

### Normalized scores (1–100)
- **Tool use: 72/100.** Useful terminal/skills, capped by weak finance/legal completion [S2].
- **Reasoning: 80/100.** GPQA/HLE support useful reasoning, capped by limited modern corroboration/calibration [S3,S5].
- **Context window: 95/100.** Hosted1M verified, no perfect-retrieval bonus [S1].
- **Multimodal: 88/100.** Image/video/document and GUI evidence, no audio/media output [S1,S5].
- **Coding: 76/100.** Useful competitive programming and Vibe, capped by migration and DeepSWE14.2 [S2,S5].
- **Cost efficiency: 94/100.** Cheap current<=256K promotion, host/cache/tier limits explicit [S1].
- **Overall Score: 82/100.** (72+80+95+88+76)/5=82.2 →82; supervised budget multimodal agents. Cost excluded.

### Sources
- [S1] https://www.qwencloud.com/models/qwen3.7-plus — primary current specs/rates.
- [S2] https://www.vals.ai/models/alibaba_qwen3.7-plus — independent suite/settings and dated subsets.
- [S3] https://benchlm.ai/models/qwen3-7-plus — secondary linked measurements, October17.
- [S4] https://www.alibabacloud.com/blog/qwen3-7-plus-multimodal-agent-intelligence_603206 — primary launch mirror/methodology.
- [S5] https://huggingface.co/Qwen/Qwen3.8-27B/raw/main/README.md — primary Plus-labelled comparison, directly inspected this session.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-17
- Method: Independent web research, three distinct searches, primary/evaluator comparison; settings, subsets and secondary-only results explicit. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
