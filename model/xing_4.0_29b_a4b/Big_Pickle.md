# Xing 4.0 29B-A4B — findings by Big Pickle

- Source: China Telecom AI (`XingChen-AGI/Xing4.0-29B-A4B`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Xing 4.0 29B-A4B
- **Short description:** China Telecom AI's open-weight 29B-total / 4B-active Mixture-of-Experts agentic coding model, released 2026-09-17 (open-sourced) and officially announced 2026-09-22/24. The first large model trained entirely on China's domestic Ascend 910C NPU platform with the MindSpore/MindFormers framework — no reliance on overseas supply chains from training chip through inference deployment. Purpose-built for execution-oriented agentic tasks (multi-step planning, tool calling, long-context retrieval, code generation) rather than conversational Q&A. Formerly known as the TeleChat series. Deployed in production at China Telecom's group-level customer service platform. Not an alias of any other entry.
- **Provider / access:** China Telecom AI Technology Co., Ltd. Open weights on Hugging Face (`XingChen-AGI/Xing4.0-29B-A4B`, plus FP8 and GGUF quantizations), ModelScope, and Modelers. Inference via SGLang, vLLM, KTransformers, llama.cpp. Fine-tuning via LLaMA-Factory and MindFormers. Agent framework adaptation for OpenCode, Claude Code, OpenClaw, and Hermes. Also available via OpenCode Zen (free promotional tier) and an OpenAI-compatible API endpoint (orcarouter, October 2026).
- **Release / knowledge:** open-sourced 2026-09-17 (GitHub news); officially released 2026-09-22/24 (GlobeNewswire, TechCrunch press release, HPCWire). Knowledge cutoff not publicly stated.
- **IDs:** `XingChen-AGI/Xing4.0-29B-A4B` (Hugging Face); `xing_4.0_29b_a4b` (OpenCode Zen).
- **Context window:** **256,000 tokens native**, extensible to **512,000 via YaRN** (GitHub README, HF model card, GlobeNewswire). Max output not separately stated; the 256K figure is the combined input context.
- **Modalities:** text in / text out only. No image, video, or audio. Tool calls.
- **Pricing:** **Apache 2.0 open weights — free to self-host**. Free promotional tier on OpenCode Zen during stealth preview. No hosted API pricing published by China Telecom AI; third-party endpoints (orcarouter) may charge separately.
- **Architecture:** proprietary open weights (Apache 2.0). 29B total parameters, 4B active per token. 40 layers, hidden size 3584, dense FFN intermediate 9216, expert intermediate 1024, MLA (Multi-head Latent Attention). 64 routed experts, 4 active per token, 1 shared expert. Trained on Ascend 910C clusters with MindSpore/MindFormers — deep co-optimization including mHC feature adaptation, cross-framework numerical alignment, and fused operator development. FP8 and GGUF quantizations available; 4-bit quantization runs in 15 GB VRAM (fits RTX 3090/4090 with 24 GB).

### Raw benchmarks found

> All figures below come from China Telecom AI's own GitHub README and Hugging Face model card (vendor-reported). No independent evaluation from Vals AI, BenchLM, Artificial Analysis, or other third parties was found — the model is only one month old as of this report.

Coding:

- SWE-bench Verified: **75.0%** (vendor) — approaches Qwen3.6-35B-A3B (76.0%), significantly outperforms Gemma4-26B-A4B (53.0%)
- SWE-bench Multilingual: **66.0%** (vendor) — approaches Qwen3.6-35B-A3B (67.2%), outperforms Gemma4-26B-A4B (51.0%)
- Terminal-Bench 2.1: **57.5%** (vendor) — surpasses both Qwen3.6-35B-A3B (51.5%) and Gemma4-26B-A4B (30.0%)
- LiveCodeBench: **no verified public score found**
- SWE-bench Pro: **no verified public score found**
- SciCode: **no verified public score found**

Agent / tool use:

- Tau3-Bench: **64.63%** (vendor) — approaches Qwen3.6-35B-A3B (67.2%), outperforms Gemma4-26B-A4B (58.9%)
- Claw-Eval: **76.55%** (vendor) — outperforms both Qwen3.6-35B-A3B (74.54%) and Gemma4-26B-A4B (71.49%)
- DeepresearchBII: **60.80%** (vendor) — surpasses Qwen3.6-35B-A3B (59.70%) and Gemma4-26B-A4B (39.30%)
- SuperCLUE agent evaluation: **93.52 points**, ranked 3rd overall (AIbase report) — less than one point behind the top two (Qwen)
- OSWorld: **no verified public score found**
- GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- AIME 2026: **90.0%** (vendor) — approaches Qwen3.6-35B-A3B (92.7%), outperforms Gemma4-26B-A4B (88.3%)
- IFBench (instruction following): **69.67%** (vendor) — approaches Gemma4-26B-A4B (72.67%), outperforms Qwen3.6-35B-A3B (65.5%)
- AA.LCR (long-context reasoning): **61.0%** (vendor) — approaches Qwen3.6-35B-A3B (62.0%), below Gemma4-26B-A4B (66.0%)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**
- BenchLM overall: **not computed** — model not on BenchLM leaderboard

Multimodal:

- **No multimodal benchmarks** — text-only model.

Long context:

- AA.LCR: **61.0%** (vendor) — verifies reasoning over the 256K window
- RULER: **no verified public score found**
- Long-context retrieval: mentioned qualitatively in GlobeNewswire press release but no specific benchmark score published

### Scores

- **Tool use: 68/100.** Claw-Eval 76.55% and DeepresearchBII 60.80% are strong general agentic signals; Tau3-Bench 64.63% verifies tool orchestration; Terminal-Bench 2.1 57.5% surpasses both same-class competitors. Offsets: all vendor-reported with no independent verification; no OSWorld or GDPval-AA score; the model is one month old and untested by Vals AI, BenchLM, or Artificial Analysis.
- **Reasoning: 68/100.** AIME 2026 90.0% is exceptional for a 4B-active model and approaches the 35B-class Qwen3.6-35B-A3B (92.7%); IFBench 69.67% is solid. Offsets: AA.LCR 61.0% is mid; no GPQA Diamond, HLE, or AA Intelligence Index score; all vendor-reported.
- **Context window: 62/100.** 256K native with YaRN extension to 512K is competitive; AA.LCR 61.0% verifies long-context reasoning. Offsets: by October 2026, 1M+ is standard among frontier models; the YaRN extension to 512K is untested by any published benchmark; no RULER score; all vendor-reported.
- **Multimodal: 5/100.** Text-only. No image, video, or audio input.
- **Coding: 70/100.** SWE-bench Verified 75.0% is strong for a 4B-active model and approaches the 35B-class Qwen3.6-35B-A3B (76.0%); SWE-bench Multilingual 66.0% and Terminal-Bench 2.1 57.5% both surpass same-class competitors. Offsets: all vendor-reported with no independent verification; no LiveCodeBench, SWE-bench Pro, or SciCode score; the 75.0% SWE-V figure uses vendor scaffolding (unspecified).
- **Cost efficiency: 100/100.** Apache 2.0 open weights — free to self-host. 4-bit quantization runs in 15 GB VRAM on a single consumer GPU (RTX 3090/4090). Free promotional tier on OpenCode Zen. 4B active parameters means minimal inference cost. This is the maximum possible cost efficiency score.
- **Overall Score: 55/100.** Half-up mean of Tool use (68), Reasoning (68), Context window (62), Multimodal (5), Coding (70) = 273/5 = 54.6 → 55. Cost efficiency (100) is excluded per `model-comparison.md` methodology. The Multimodal score of 5 (text-only) drags the overall significantly — this is per the scoring rubric, which weights multimodal equally with other quality dimensions.

### Caveats and conflicts

- **All vendor-reported:** every benchmark figure comes from China Telecom AI's own GitHub README and Hugging Face model card. No independent evaluation from Vals AI, BenchLM, Artificial Analysis, or other third parties was found. The model is one month old (released 2026-09-17) and coverage is thin.
- **Scaffolding unspecified:** unlike MiniMax or other vendors that specify Claude Code or OpenHands scaffolding, China Telecom AI does not state the agent harness used for SWE-bench or Terminal-Bench evaluations. This makes the scores harder to compare across models.
- **SuperCLUE agent score context:** the 93.52 SuperCLUE agent score (ranked 3rd) comes from an AIbase report, not from China Telecom AI's own materials. SuperCLUE is a Chinese-language benchmark; the score may not generalize to English-language agentic tasks.
- **YaRN extension untested:** the 512K YaRN context extension is advertised but no published benchmark uses it. The AA.LCR 61.0% score presumably uses the native 256K window.
- **Ascend NPU lock-in:** while the model is Apache 2.0 and runs on consumer GPUs via quantization, the training stack (MindSpore/MindFormers, Ascend 910C) is fully domestic Chinese. Cross-framework numerical alignment is claimed but not independently verified.
- **Thin independent coverage:** no Vals AI, BenchLM, Artificial Analysis, or LLM Stats page exists for this model as of 2026-10-18.

### Sources

- China Telecom AI official announcement (GlobeNewswire, 2026-09-22): https://www.globenewswire.com/news-release/2026/09/22/3365958/0/en/china-telecom-ai-officially-releases-xing4-0-29b-agentic-large-model-for-single-gpu-deployment.html
- China Telecom AI official announcement (GlobeNewswire, 2026-09-24): https://www.globenewswire.com/news-release/2026/09/24/3368528/0/en/xing4-0-29b-a-versatile-agentic-large-model-that-runs-on-a-single-gpu-now-officially-released.html
- TechCrunch press release (2026-09-24): https://techcrunch.com/press-release/xing4-0-29b-a-versatile-agentic-large-model-that-runs-on-a-single-gpu-now-officially-released
- HPCWire coverage (2026-09-25): https://www.hpcwire.com/aiwire/2026/09/25/china-telecom-ai-releases-agentic-model-for-single-gpu-deployment/
- AIbase report (SuperCLUE agent score, 2026-09-20): https://www.aibase.com/news/31179
- GitHub repository (benchmarks, architecture): https://github.com/XingChen-AGI/Xing4.0-29B-A4B/blob/main/README.md
- Hugging Face model card (FP8): https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B-FP8
- Hugging Face GGUF (Venastine-Research): https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF
- orcarouter API endpoint (2026-10): https://www.orcarouter.ai/blog/xing-4-0-29b-a4b-open-weights

**Big Pickle (opencode/big-pickle)** — 2026-10-18
