# Qwen3.5-27B — findings by GLM 5.3

- Source: Alibaba Qwen (`alibaba/qwen3.5-27b`, weights `Qwen/Qwen3.5-27B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B
- **Short description:** Alibaba Qwen's open-weights 27B member of the Qwen3.5 generation (February 2026): a unified vision-language foundation model with image + video input, thinking mode, and strong tool-calling behavior. Top use case: a self-hostable single-node multimodal coding/agent workhorse.
- **Provider / access:** OpenRouter `qwen/qwen3.5-27b` (Chat Completions API; tools, reasoning, response_format accepted); 22 hosted providers under the models.dev canonical `alibaba/qwen3.5-27b`; Alibaba Cloud Model Studio serves it as `Qwen3.5-27B` (Qwen-Agent/DashScope OpenAI-compatible endpoint); open weights self-hostable via vLLM, SGLang, KTransformers, Transformers.
- **Release / knowledge:** released 2026-02-23 (models.dev release date; HF card cites the February 2026 Qwen3.5 blog, `https://qwen.ai/blog?id=qwen3.5`); knowledge cutoff not stated.
- **IDs:** `alibaba/qwen3.5-27b` (models.dev canonical), `qwen/qwen3.5-27b` (OpenRouter), `Qwen/Qwen3.5-27B` (Hugging Face weights), `Qwen3.5-27B` (DashScope).
- **Context window:** 262,144 tokens native — verified on the official HF model card ("Context Length: 262,144 natively and extensible up to 1,010,000 tokens" via YaRN); max output 65,536 (models.dev provider rows; the card recommends 32,768 output generally, 81,920 for competition-level problems).
- **Modalities:** text, image, and video in; text out; reasoning yes (thinking mode default, disabled via `enable_thinking: false`); tool calls yes; JSON/structured output yes (OpenRouter `response_format`; models.dev structured = yes).
- **Pricing (as of 2026-10-21):** cheapest hosted route $0.0846 in / $0.6768 out per 1M tokens (models.dev `alibaba/qwen3.5-27b`, 22 providers); Apache-2.0 weights free to self-host; no OpenCode Zen Free ID verified this pass.
- **Architecture:** 27B parameters, dense hybrid-attention transformer with integrated vision encoder: 64 layers in a 16×(Gated DeltaNet→FFN) + 1×(Gated Attention→FFN) hidden layout, 48 linear V / 16 QK heads (head dim 128), gated attention 24 Q / 4 KV heads (head dim 256), FFN intermediate 17,408, padded vocab 248,320, multi-token prediction (MTP) trained; early-fusion multimodal training; Apache-2.0 open weights.

### Raw benchmarks found

> Vendor-reported numbers from the official Qwen3.5-27B Hugging Face model card (February 2026 release tables, 27B column), cross-checked against OpenRouter/models.dev specs. Independent aggregators do not cover this smaller sibling (Artificial Analysis and BenchLM both 404 for the 27B on 2026-10-21), so most rows are vendor-harness figures and are marked as such. Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2 (vendor table): **41.6%** (same table: GPT-5-mini 31.9%, GPT-OSS-120B 18.7%) — Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found. **TAU2-Bench: 79.0%** (vendor table; official setup except airline domain, evaluated with the fixes proposed in the Claude Opus 4.5 system card)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- BFCL-V4 (function calling, vendor table): **68.5%**
- Search-agent suite (vendor table): HLE with tools **48.5%**, Browsecomp **61.0%**, Browsecomp-zh **62.1%**, WideSearch **61.1%**, Seal-0 **47.2%**
- Visual agent (vendor table): ScreenSpot Pro **70.3%**, OSWorld-Verified **56.2%**, AndroidWorld **64.2%**, V* **93.7% / 89.0% (with/without CI)**, TIR-Bench **59.8% / 42.3% (with/without CI)**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.5%** (vendor table; the HF evaluation-results block lists 81.82 on Idavidrein/gpqa Diamond — harness/version difference noted)
- HLE w/ CoT: **24.3%** (vendor table)
- HMMT Feb 25: **92.0%** (vendor table; HF eval-results lists 81.06 on MathArena HMMT Feb 2026 — harness/prompt difference noted); HMMT Nov 25: **89.8%**
- LCR / MLCR: AA-LCR **66.1%** (vendor-run AA long-context reasoning); LongBench v2 **60.6%**
- CritPt: no verified public score found
- MMLU-Pro **86.1%**, MMLU-Redux **93.2%**, C-Eval **90.5%**, SuperGPQA **65.6%** (vendor table)
- Artificial Analysis Intelligence Index / BenchLM overall: no page for the 27B (both 404 on 2026-10-21)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **72.4%** (vendor table; HF eval-results block also lists 72.4)
- LiveCodeBench v6: **80.7%** (vendor table)
- SciCode / AA-SciCode: no verified public score found
- CodeForces (vendor's own query set): **1899**; OJBench **40.1%**; FullStackBench en **60.1%** / zh **57.4%**
- Terminal-Bench 2: **41.6%** (vendor table, listed under Tool use)
- DeepSWE / Vibe Code Bench / Coding Index: no verified public score found

Long context:

- 262,144 tokens native, YaRN-extensible to 1,010,000 (official model card config); AA-LCR 66.1% and LongBench v2 60.6% at the native window; no MRCR / RULER / GraphWalks retrieval score reported.

Multimodal (vendor vision-language table, 27B column):

- MMMU **82.3%**, MMMU-Pro **75.0%**, MathVision **86.0%**, Mathvista(mini) **87.8%**, VlmsAreBlind **96.9%**, RealWorldQA **83.7%**, MMStar **81.0%**, OCRBench **89.4%**, OmniDocBench1.5 **88.9%**, HallusionBench **70.0%**, VideoMME(w sub) **87.0%**, MLVU **85.9%**, VideoMMMU **82.3%**, MMVU **73.3%**

### Normalized scores (1–100)

- **Tool use: 63/100.** TAU2-Bench 79.0% and BFCL-V4 68.5% are strong agentic results, backed by solid computer-use scores (OSWorld-Verified 56.2%, AndroidWorld 64.2%, ScreenSpot Pro 70.3%); capped by a soft Terminal-Bench 2 at 41.6% and no verified GDPval/Claw-Eval/Toolathon numbers.
- **Reasoning: 80/100.** GPQA Diamond 85.5% (81.8 on the HF leaderboard run) and HMMT Feb 92.0% sit near frontier for this class, with broad knowledge coverage (MMLU-Pro 86.1, C-Eval 90.5); capped by HLE-with-CoT at only 24.3%, mid long-context reasoning (AA-LCR 66.1), and no independent AA Intelligence Index.
- **Context window: 72/100.** 262,144 native tokens lands in the 200K–500K tier (200K = 70 in the tier mapping, 262K slightly above); the 1,010,000 figure is a vendor YaRN extension, not a native window, and no 1M-window retrieval score is published.
- **Multimodal: 85/100.** Image and video input with near-top vision results (MathVision 86.0, VlmsAreBlind 96.9, OCRBench 89.4, VideoMME 87.0 w/ sub, OmniDocBench 88.9); capped at the video-in band by text-only output and no audio input.
- **Coding: 74/100.** SWE-bench Verified 72.4% and LiveCodeBench v6 80.7% are strong for a 27B; capped by weak Terminal-Bench 2 (41.6%), a low CodeForces Elo (1899 on the vendor query set), OJBench 40.1%, and no SciCode/Vibe/DeepSWE coverage.
- **Cost efficiency: 96/100.** Cheapest hosted route at $0.0846/$0.6768 per 1M across 22 competing providers plus Apache-2.0 weights free to self-host — near the ~$0.10/$0.20 value band.
- **Overall Score: 75/100.** Half-up mean of the five quality dims (63 + 80 + 72 + 85 + 74 = 374, 374/5 = 74.8 → 75); best fit: a self-hostable mid-size multimodal coding/agent workhorse with frontier-adjacent vision, weaker on terminal-hard agentic tasks.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-21
- Method: public internet research (official Qwen/Qwen3.5-27B Hugging Face model card benchmark tables, OpenRouter model page, models.dev catalog, Artificial Analysis/BenchLM absence checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
