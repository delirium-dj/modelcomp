# Qwen 3.8 Flash — findings by Ling 3.1 Flash

- Source: Alibaba Qwen (`opencode/qwen-3.8-flash`; API `qwen-3.8-flash` on Qwen Cloud; weights `Qwen/Qwen3.8-Flash-Next`, Qwen Community License 1.0; also Venice, Blackbox, Kyma, HF Inference Providers)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's August-2026 cost-efficient multimodal MoE previewing the Qwen4 architecture — 125B total / 6B active (plus 51B n-gram embedding) with Gated DeltaNet + Qwen Sparse Attention hybrid attention — scoring LiveCodeBench v6 91.9%, GPQA Diamond 91.7%, SWE-bench Multilingual 81.0%, SWE-bench Pro 62.5%, Toolathlon 73.5% and MathVision 95.7% (with CI) across a 1M context at $0.14–0.20/$0.47–0.64 per 1M; all benchmark figures are self-reported.
- **Provider / access:** Qwen Cloud (`qwen-3.8-flash`, the production version of the Flash-Next weights with 1M context by default and official built-in tools; thinking mode default, `enable_thinking`/`preserve_thinking`/`reasoning_effort` xhigh-default/medium/low), Venice, Blackbox, Kyma, Hugging Face Inference Providers; weights run locally via Transformers, vLLM, SGLang, TokenSpeed.
- **Release / knowledge:** August 2026 (tech report dated 2026-08); knowledge cutoff not captured.
- **IDs:** `opencode/qwen-3.8-flash` / `qwen-3.8-flash` / `Qwen/Qwen3.8-Flash-Next`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the official API serves a 1M-token window (262K native, YaRN-extensible) and the model takes text, image, video and PDF input.
- **Context window:** 1,000,000 tokens on the official API (262,144 native; YaRN scaling for longer); recommended split: 262,144 reasoning + 131,072 final response; 128K max output per gateway.
- **Modalities:** text, image, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** gateway-dependent — Venice $0.14/$0.49 per 1M (cache $0.01), Blackbox $0.16/$0.47, Kyma $0.2045/$0.641; Qwen Cloud's official per-token price was not captured; 7.6× speedup at 1M-token prefill (vendor).
- **Architecture:** 125B-total/6B-active MoE (512 experts: 10 routed + 1 shared, intermediate 640) + 51B n-gram embedding + 4B MTP layer; 48 layers as 12 × (3 × (Gated DeltaNet → MoE) → 1 × (Qwen Sparse Attention → MoE)); QSA operates at micro-block level; Gated Residual (4 branches); Muon + AdamW optimizers; previews the Qwen4 architecture.

### Raw benchmarks found

All scores are vendor self-reported (Qwen's HF model card / Qwen Cloud docs; llmboard grades them Evidence C), with harnesses as noted:

Coding:

- LiveCodeBench v6: **91.9%** (vs Qwen3.7-Plus 89.6%, DeepSeek-V4-Flash 90.6%, Opus 4.6 max 88.8%)
- SWE-bench Multilingual: **81.0%** (mini-SWE-agent; vs Qwen3.7-Plus 75.8%, Opus 4.6 max 77.5%)
- SWE-bench Pro: **62.5%** (Claude Code harness, refined benchmark; vs Qwen3.7-Plus 55.8%, DeepSeek-V4-Flash 56.0%, Opus 4.6 max 53.4%)
- DeepSWE 1.1: **58.7%** (best across Claude Code and mini-SWE-agent harnesses; best on mini-SWE-agent; vs DeepSeek-V4-Flash 54.4%)
- NL2Repo-Bench: **48.1%** (vs DeepSeek-V4-Flash 54.2%, Opus 4.6 max 47.6%)
- ExtractBench (independent, llamaindex, FP8 vLLM, one-shot structured output): mean **89.88** (short 94.82, medium 87.81)

Agent / tool use:

- Toolathlon Verified (pass@1): **73.5%** (vs Qwen3.7-Plus 50.6%, DeepSeek-V4-Flash 70.3%)
- CoWorkBench (long-horizon office work, in-house): **73.9%** (vs Qwen3.7-Plus 65.1%, DeepSeek-V4-Flash 45.1%, Opus 4.6 max 68.2%)
- JobBench (professional tasks): **55.7%** (vs Opus 4.6 max 36.6%)
- Agents' Last Exam: pass@1 **24.3%**, score **51.2** (vs Qwen3.7-Plus 13.2%/33.6, DeepSeek-V4-Flash 25.2%/—)
- ClawEval-MM (multimodal tool use): pass@3 **64.4%** / average **60.4** (vs Opus 4.6 max 52.5%/54.7)
- AndroidWorld (mobile use): **84.5%** (vs Qwen3.7-Plus 81.0%, Opus 4.6 max 62.0%)
- OSWorld 2.0: binary **19.4%** / partial **52.3%** (vs Qwen3.7-Plus 2.8%/21.5%)
- MCP Atlas, τ³, BrowseComp: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (vs Qwen3.7-Plus 90.3%, DeepSeek-V4-Flash 90.8%, Opus 4.6 max 91.3%)
- HLE (judged by GPT-4o): **35.9%** (vs Qwen3.7-Plus 34.7%, DeepSeek-V4-Flash 33.8%, Opus 4.6 max 40.0%)
- IFBench: **81.3%** (vs Opus 4.6 max 62.5%)
- FrontierMath, AIME, AA Intelligence Index: no verified public score found

Multimodal:

- MathVision: **90.6%** without CI / **95.7%** with CI; CharXiv (RQ): **84.6%** / **90.6%**
- RealWorldQA: **88.5%** (vs Opus 4.6 max 73.9%); LVBench (long video): **76.6%** (vs Opus 4.6 max 63.0%)
- ERQA (embodied): **72.3%**; Vision2Web (visual web dev): **64.0%**; RecreationBench (in-house): **49.9%**

### Normalized scores (1–100)

- **Tool use: 76/100.** Toolathlon Verified 73.5%, CoWorkBench 73.9% (vs Opus 4.6 max's 68.2%) and JobBench 55.7% (vs Opus 4.6's 36.6%) lead, with Agents' Last Exam (score 51.2, pass@1 24.3%), ClawEval-MM 64.4/60.4 and AndroidWorld 84.5% supporting; OSWorld 2.0 at 19.4% binary (52.3% partial) is weak, and MCP Atlas/τ³/BrowseComp were not captured.
- **Reasoning: 78/100.** GPQA Diamond 91.7% reaches the 90%+ frontier band (above Opus 4.6 max's 91.3%), with IFBench 81.3% and MathVision 95.7% (with CI) supporting; HLE 35.9% (below Opus 4.6's 40.0%) and the absence of an AA Intelligence Index, FrontierMath or AIME figure cap the score.
- **Context window: 92/100.** 1M-token context on the official API (262K native, YaRN-extensible, with a 7.6× speedup at 1M-token prefill); no ≥98%-at-depth retrieval figure captured, so 95+ is not justified.
- **Multimodal: 88/100.** Native text/image/video/PDF input with text output — the video/PDF band (75–90), pushed to the top by MathVision 95.7% (with CI), CharXiv 90.6% (with CI), RealWorldQA 88.5%, LVBench 76.6% and AndroidWorld 84.5%.
- **Coding: 78/100.** LiveCodeBench v6 91.9%, SWE-bench Multilingual 81.0% (vs Opus 4.6 max's 77.5%) and SWE-bench Pro 62.5% (vs 53.4%) lead, with DeepSWE 1.1 58.7%, NL2Repo-Bench 48.1% and the independent ExtractBench mean of 89.88 supporting; Terminal-Bench 2.1 and the AA Coding Index were not captured.
- **Cost efficiency: 93/100.** Gateway rates of $0.14–0.20/$0.47–0.64 per 1M (Venice blended ~$0.23/M at 3:1, with $0.01/M cache reads) sit between the ~$0.10/$0.20≈97–99 and ~$1.25/$4.25≈88 anchors; Qwen Community License weights are free to self-host, and the official Qwen Cloud per-token price was not captured.
- **Overall Score: 82/100.** (76+78+92+88+78)/5 = 82.4 → 82 — a strong, cheap, multimodal August-2026 MoE (LiveCodeBench 91.9%, GPQA 91.7%, SWE-bench Multilingual 81.0%, Toolathlon 73.5%, MathVision 95.7% at $0.14–0.20/$0.47–0.64), with self-reported benchmarks (Evidence C), a weak OSWorld 2.0 binary score (19.4%) and unpublished MCP Atlas/τ³/AA-Index figures as the caveats.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Qwen3.8-Flash-Next HF model card + tech report, Qwen Cloud docs, Venice/Blackbox/Kyma listings, llmboard, ExtractBench); scores are normalized 1–100 interpretations of self-reported vendor benchmarks, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3_8_Flash.md`, using the same headings.
