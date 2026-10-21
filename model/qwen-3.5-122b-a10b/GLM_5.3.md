# Qwen3.5-122B-A10B — findings by GLM 5.3

- Source: Alibaba Qwen (`alibaba/qwen3.5-122b-a10b`, weights `Qwen/Qwen3.5-122B-A10B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B
- **Short description:** Alibaba Qwen's open-weights MoE member of the Qwen3.5 generation (February 2026): 122B total / 10B active parameters with a unified vision-language foundation (image + video input), thinking mode, and strong tool-calling. Top use case: a high-throughput, cheap-to-serve multimodal coding/agent model for self-hosting or budget APIs.
- **Provider / access:** 26 hosted providers under the models.dev canonical `alibaba/qwen3.5-122b-a10b` (a $0.00/$0.00 free route exists); Alibaba Cloud Model Studio as `Qwen3.5-122B-A10B` (DashScope OpenAI-compatible endpoint); open weights self-hostable via vLLM, SGLang, KTransformers, Transformers.
- **Release / knowledge:** released 2026-02-23 (models.dev; HF card cites the February 2026 Qwen3.5 blog, `https://qwen.ai/blog?id=qwen3.5`); knowledge cutoff not stated.
- **IDs:** `alibaba/qwen3.5-122b-a10b` (models.dev canonical), `Qwen/Qwen3.5-122B-A10B` (Hugging Face weights), `Qwen3.5-122B-A10B` (DashScope).
- **Context window:** 262,144 tokens native — verified on the official HF model card ("Context Length: 262,144 natively and extensible up to 1,010,000 tokens" via YaRN); max output 65,536 (models.dev provider rows; card recommends 32,768, up to 81,920 for competition problems).
- **Modalities:** text, image, and video in; text out; reasoning yes (thinking mode default, disabled via `enable_thinking: false`); tool calls yes; JSON/structured output yes (models.dev structured = yes; DashScope OpenAI-compatible).
- **Pricing (as of 2026-10-21):** cheapest hosted route $0.00 in / $0.00 out per 1M tokens (models.dev, 26 providers listed — free lane); Apache-2.0 weights free to self-host; no OpenCode Zen Free ID verified this pass.
- **Architecture:** 122B total / 10B activated sparse MoE with integrated vision encoder: 48 layers in a 12×(3×(Gated DeltaNet→MoE) → 1×(Gated Attention→MoE)) layout, 256 experts (8 routed + 1 shared, expert intermediate 1024), 64 linear V / 16 QK heads, gated attention 32 Q / 2 KV heads (head dim 256), padded vocab 248,320, multi-token prediction (MTP) trained; early-fusion multimodal training; Apache-2.0 open weights (125B BF16 checkpoint size).

### Raw benchmarks found

> Vendor-reported numbers from the official Qwen3.5-122B-A10B Hugging Face model card (February 2026 release tables, 122B-A10B column), cross-checked against models.dev specs. Independent aggregators do not cover this member (Artificial Analysis and BenchLM both 404 on 2026-10-21), so most rows are vendor-harness figures and are marked as such. Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2 (vendor table): **49.4%** (same table: GPT-5-mini 31.9%, GPT-OSS-120B 18.7%) — Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found. **TAU2-Bench: 79.5%** (vendor table; official setup except airline domain, evaluated with the fixes proposed in the Claude Opus 4.5 system card)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- BFCL-V4 (function calling, vendor table): **72.2%**
- Search-agent suite (vendor table): HLE with tools **47.5%**, Browsecomp **63.8%**, Browsecomp-zh **69.9%**, WideSearch **60.5%**, Seal-0 **44.1%**
- Visual agent (vendor table): ScreenSpot Pro **70.4%**, OSWorld-Verified **58.0%**, AndroidWorld **66.4%**, V* **93.2% / 90.1% (with/without CI)**, TIR-Bench **53.2% / 42.5% (with/without CI)**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (vendor table; HF evaluation-results block lists 84.85 on Idavidrein/gpqa Diamond — harness/version difference noted)
- HLE w/ CoT: **25.3%** (vendor table)
- HMMT Feb 25: **91.4%**; HMMT Nov 25: **90.3%** (vendor table)
- LCR / MLCR: AA-LCR **66.9%** (vendor-run AA long-context reasoning); LongBench v2 **60.2%**
- CritPt: no verified public score found
- MMLU-Pro **86.7%**, MMLU-Redux **94.0%**, C-Eval **91.9%**, SuperGPQA **67.1%** (vendor table)
- Artificial Analysis Intelligence Index / BenchLM overall: no page for the 122B-A10B (both 404 on 2026-10-21)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **72.0%** (vendor table; HF eval-results block also lists 72.0)
- LiveCodeBench v6: **78.9%** (vendor table)
- SciCode / AA-SciCode: no verified public score found
- CodeForces (vendor's own query set): **2100**; OJBench **39.5%**; FullStackBench en **62.6%** / zh **58.7%**
- Terminal-Bench 2: **49.4%** (vendor table, listed under Tool use)
- DeepSWE / Vibe Code Bench / Coding Index: no verified public score found

Long context:

- 262,144 tokens native, YaRN-extensible to 1,010,000 (official model card config); AA-LCR 66.9% and LongBench v2 60.2% at the native window; no MRCR / RULER / GraphWalks retrieval score reported.

Multimodal (vendor vision-language table, 122B-A10B column):

- MMMU **83.9%**, MMMU-Pro **76.9%**, MathVision **86.2%**, Mathvista(mini) **87.4%**, ZEROBench **9** / ZEROBench_sub **36.2%**, VlmsAreBlind **96.7%**, RealWorldQA **85.1%**, MMStar **82.9%**, OCRBench **92.1%**, OmniDocBench1.5 **89.8%**, VideoMME(w sub) **87.3%**, MLVU **87.3%**, LVBench **74.4%**, MMVU **74.7%**

### Normalized scores (1–100)

- **Tool use: 66/100.** TAU2-Bench 79.5% and BFCL-V4 72.2% are strong agentic results, Terminal-Bench 2 at 49.4% just enters the mid band, with solid computer-use scores (OSWorld-Verified 58.0%, AndroidWorld 66.4%, ScreenSpot Pro 70.4%); capped by no verified GDPval/Claw-Eval/Toolathon numbers.
- **Reasoning: 81/100.** GPQA Diamond 86.6% (84.85 on the HF leaderboard run), HMMT Feb 91.4%, and broad knowledge (MMLU-Pro 86.7, SuperGPQA 67.1) sit near frontier for the class; capped by HLE-with-CoT at only 25.3%, mid long-context reasoning (AA-LCR 66.9), and no independent AA Intelligence Index.
- **Context window: 72/100.** 262,144 native tokens lands in the 200K–500K tier (200K = 70 in the tier mapping); the 1,010,000 figure is a vendor YaRN extension, not a native window, and no 1M-window retrieval score is published.
- **Multimodal: 86/100.** Image and video input with top-tier results (OCRBench 92.1, MathVision 86.2, VlmsAreBlind 96.7, VideoMME 87.3 w/ sub, OmniDocBench 89.8); capped at the video-in band by text-only output and no audio input.
- **Coding: 75/100.** SWE-bench Verified 72.0% and LiveCodeBench v6 78.9% are strong, Terminal-Bench 2 49.4% and CodeForces 2100 respectable for a 10B-active MoE; capped by OJBench 39.5% and no SciCode/Vibe/DeepSWE coverage.
- **Cost efficiency: 100/100.** A $0.00/$0.00 hosted free route exists on models.dev, and Apache-2.0 weights with only 10B active experts make self-hosted inference very cheap — $0 = 100.
- **Overall Score: 76/100.** Half-up mean of the five quality dims (66 + 81 + 72 + 86 + 75 = 380, 380/5 = 76.0 → 76); best fit: the value flagship of the Qwen3.5 family — near-27B quality with free hosted lanes and cheap MoE serving, weaker on terminal-hard agentic tasks.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (official Qwen/Qwen3.5-122B-A10B Hugging Face model card benchmark tables, models.dev catalog, Artificial Analysis/BenchLM absence checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
