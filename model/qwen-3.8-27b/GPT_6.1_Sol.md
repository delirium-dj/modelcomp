# Qwen3.8-27B — findings by GPT 6.1 Sol

- Source: Alibaba / `Qwen/Qwen3.8-27B`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Qwen3.8-27B
- **Short description:** Apache2 dense vision-language model for self-hosted coding/agents. Bare repository Qwen3.8 metadata describes this27B; research saved here to avoid duplicating an alias. Not2.4T Max [S1].
- **Provider / access:** Open weights via Transformers/vLLM/SGLang; independent study used first-party DashScope `qwen3.8-27b` OpenAI-compatible API [S1,S2].
- **Release / knowledge:** Model available by August21 study; exact release/cutoff not independently verified.
- **IDs:** `Qwen/Qwen3.8-27B`, hosted `qwen3.8-27b`; bare `opencode/qwen-3.8` metadata alone does not verify a live provider route.
- **Context window:** Native262,144, extensible1M; scoring native self-host default, not unverified default1M [S1]. Exact deployed output cap not verified.
- **Modalities:** Native text/image/video input, text output; thinking on by default and disableable, effort low/medium/xhigh, retained reasoning [S1,S2].
- **Pricing (as of 2026-10-16):** No verified exact current hosted token rate in inspected primary text. Self-hosting has no model licence fee but infrastructure costs remain; measured study$0.48–0.71/task [S2].
- **Architecture:**27B dense/64 layers, hybrid GatedDeltaNet/attention, Apache2; not Max custom licence [S1].

### Raw benchmarks found
Agent / tool use:
- Primary TB2.1 **73% Terminus**, OSWorld **84.3%**, WebArena **64.8%**, ALE **20.4% pass@1 /42.9 score**, JobBench **33.4%**, internal CoWork **70.7%** [S1]. ClawEval-MM **57.4% pass@3 /56.9 average**, not ordinary Claw-Eval [S1]. Tau3/GDPval/MCP exact directly verified values absent.
Reasoning / knowledge:
- Primary GPQA **89.2%**, HLE **30.8% GPT4o judge**, IFBench **79.5%** [S1]. BenchLM AA index33.7, LCR82%, MLCR21.7%, CritPt5.4% and Omniscience accuracy15.6%/conditional hallucination30.3% are secondary-only snapshots [S3].
Coding:
- Primary SWE-Pro **61.7% refined suite/ClaudeCode/256K**, DeepSWE1.1 **42.2% ClaudeCode**, NL2Repo **42.3%**, LiveCodeBenchv6 **90.3%** [S1].
- Independent VulcanBench23PR tasks: **82.6% low/82.6% medium/73.9% xhigh**, one attempt/task; low three-attempt mean **76.8%**, medians **7.1/6.8/17.1min**, costs **$0.71/$0.48/$0.69 per task** [S2]. Failures unfinished under fixed budgets; not unlimited-compute ceilings.
- Secondary AA-SciCode **46.6%**, Vals SWE86%/LiveCode84%, not directly reverified [S3].
Long context / multimodal:
- Native262K/extended1M capacity, no full-window≥98% retrieval verified [S1]. Primary MathVision **90% no CI/94.6% CI**, CharXiv **83.7/90.2%**, OmniDoc1.5 **91.1%**; some ground-truth corrections described [S1].

### Evidence comparison and research trail
Three fresh Google queries: `"qwen3.8" model distinct API ID`, `"Qwen3.8" open checkpoint benchmarks`, `"qwen3.8" pricing review limitations`; interstitials. Bare BenchLM route404. Inspected curated target metadata solely to resolve identity; no peer findings read. Upstream Max card read and excluded because target metadata describes27B; exact27B card, VulcanBench and BenchLM then inspected. HF hosted page says coming soon while August study demonstrates DashScope access; dated/static pages don't establish present endpoint availability. Serving quantization undisclosed, implicit cache did not engage in study; long untruncated transcripts inflate cost [S2]. Dense weights are not zero-cost inference. Benchmark metric flattening in secondary ALE42.9 would obscure actual pass20.4 [S1,S3].

### Normalized scores (1–100)
- **Tool use: 82/100.** Good terminal/GUI results, capped by ALE pass20.4 and bounded-study failures [S1,S2].
- **Reasoning: 82/100.** GPQA/HLE useful, capped by modest hard-science/calibration secondary evidence [S1,S3].
- **Context window: 76/100.** Native262K tier; extension is available but not assumed default/reliably retrieved1M [S1].
- **Multimodal: 88/100.** Native image/video/document understanding, no audio/media output [S1].
- **Coding: 85/100.** Strong bounded PR work and competitive coding, capped by DeepSWE42.2 and refined-suite comparability [S1,S2].
- **Cost efficiency: 78/100.** Deployment-friendly open weights, but real study costs and hosting uncertainty prevent free-tier credit [S1,S2].
- **Overall Score: 83/100.** (82 +82 +76 +88 +85)/5=82.6 →83. Best fit self-hosted supervised vision/coding at native context; cost excluded.

### Sources
- [S1] https://huggingface.co/Qwen/Qwen3.8-27B/raw/main/README.md — exact primary specs/results/settings.
- [S2] https://vulcanbench.com/benchmarks/17-qwen38-27b-effort.html — independent first-party hosted effort/budget study.
- [S3] https://benchlm.ai/models/qwen3-8-27b — secondary sourced snapshots, October16.

---
## Signature
- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-16
- Method: Independent public-web research, three searches, canonical identity resolution and direct primary/evaluator comparison. Scores are normalized interpretations, not official vendor scores.
- Future sources: add an independently signed file next to this one using the same headings.
