# Qwen3.8-27B — findings by Big Pickle

- Source: Alibaba (`alibaba/qwen3.8-27b`, weights `Qwen/Qwen3.8-27B`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B (open-weight, natively multimodal; "27B" is a parameter count, not a version)
- **Short description:** The compact **dense** member of Alibaba's Qwen3.8 generation, released 2026-08-14 as "the most capable generation in the Qwen open-model family to date". It is a 27B-parameter native vision-language model that Qwen positions as beating the far larger closed Qwen3.7-Plus on coding, agentic and office workflows, while staying small enough to run locally on one 32 GB GPU. It is *not* an alias of the 2.4T MoE flagship Qwen3.8 (2.4T-A95B) — same generation, different size class, different benchmarks.
- **Provider / access:** open weights on Hugging Face / ModelScope under **Apache 2.0**, self-served with vLLM, SGLang, Transformers or llama.cpp; hosted via Alibaba Cloud Model Studio and Qwen Cloud (`https://dashscope-intl.aliyuncs.com/compatible-mode/v1`, OpenAI-compatible Chat Completions, model ID `qwen3.8-27b`); also routed on OpenRouter (`qwen/qwen3.8-27b`, including a `:free` FP8 tier on some aggregators) and AIgateway. Qwen Cloud additionally exposes built-in tools (code_interpreter, web_search, t2i/i2i_search, web_extractor) on the **Responses** API; the base model itself is Chat Completions.
- **Release / knowledge:** 2026-08-14 (HF release; Alibaba Cloud mirror dated 2026-08-17); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-27B` (HF, incl. `-FP8` and official GGUF/quant variants), `qwen3.8-27b` (Qwen Cloud / Model Studio), `qwen/qwen3.8-27b` and `qwen/qwen3.8-27b:free` (OpenRouter), `Qwen3.8-27B-heretic-ara` (community). No Zen Free ID; several third-party aggregators do expose a zero-cost FP8 `:free` route, which is a provider promo rather than a vendor free tier.
- **Context window:** **262,144 native**, extensible to **1,000,000** with static YaRN RoPE scaling (factor 4.0; Qwen suggests factor 2.0 around 524K). Qwen Cloud's hosted tier serves 1M by default with max input 991K / max output 131K / max reasoning 262K. Recommended allocation inside a 1M window: 262,144 reasoning tokens + 131,072 final-response tokens. Third-party routes are more conservative (AIgateway 262,144 in / 32,768 out).
- **Modalities:** text, **image and video** in (hour-scale video via frame-sampling config); text out; thinking mode on by default, disableable per request, with `reasoning_effort` (xhigh default / medium / low) and `preserve_thinking` for cross-turn reasoning continuity; function calling, structured outputs, prefix completion, context caching, web search; batch and fine-tuning available on the hosted tier.
- **Pricing (as of 2026-09-25):** Qwen Cloud hosted **$0.50 in / $3.00 out** per 1M, implicit cache $0.10, explicit cache create $0.625 / read $0.05; AIgateway pass-through $0.45/$3.20; OpenRouter ~$0.24/$0.90. **Self-hosting is free per token** — Apache 2.0 weights fit a single RTX 5090 (NVFP4 ~24.6 GiB, ~6.6M KV tokens at 1M context) or even a 32 GB card in FP8. No vendor free tier, so no training-data caveat; the OpenRouter `:free` route is aggregator-side and privacy terms vary.
- **Architecture:** dense 27B (HF lists 28B params including the vision tower; ~55 GB bf16 checkpoint). 64 layers, hidden 5120, vocab 248,320 padded, hybrid attention in a 3:1 Gated-DeltaNet : gated-attention pattern (48 linear-attention heads for V / 16 for QK, head dim 128; 24 Q and 4 KV attention heads, head dim 256, RoPE dim 64), FFN intermediate 17,408, plus a trained multi-token-prediction draft head (MTP acceptance 0.77–0.90 in vLLM) used for speculative decoding. Architecture class is `Qwen3_5ForConditionalGeneration` with a `vision_config`.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Terminus harness, vendor): **73.0%** (Qwen3.6-27B 63.4, Qwen3.7-Plus 64.0, Opus 4.6 Max 78.2 on the same table)
- AA τ³-Banking: **48.0%**
- GDPval-AA: **1463 Elo**; normalised **45.4%** (BenchLM)
- AA Agentic Index: **46.5%**
- OSWorld-Verified: **84.3%**; WebArena-Verified: **64.8%**; AndroidWorld: **81.9%**
- CoWorkBench (Qwen in-house, long-horizon office work): **70.7%** (vs Qwen3.6-27B 61.0, Qwen3.7-Plus 65.1, Opus 4.6 Max 68.2)
- Agents' Last Exam: **42.9 score / 20.4 Pass@1** (Qwen3.7-Plus 27.3/10.6)
- AA EnterpriseOps-Gym: **44.2%**; JobBench: **33.4%** (Qwen3.6-27B 21.8)
- Claw-Eval (text, non-MM): no verified public score found; ClawEval-MM: **57.4 Pass@3 / 56.9 avg** (Qwen3.7-Plus 57.4/50.4, Opus 4.6 Max 52.5/54.7)
- MCP Atlas / Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** vendor / **90.5%** AA harness / 88.9% Vals
- HLE: **30.8%** vendor (GPT-4o judged) / **33.9%** AA harness
- AA-LCR v1.1: **82.0%**
- CritPt: **5.4%**
- MLCR-AA (medical long context): **21.7%**
- Artificial Analysis Intelligence Index: **33.7** (BenchLM)
- AA-Omniscience Index / Accuracy / Hallucination Rate: **-10.0 / 15.6% / 30.3%** — the weakest knowledge dimension, same negative-index pattern as other Qwen3.8 models
- IFBench: **79.5%**; MMLU-Pro (Vals): 84.3%

Coding:

- SWE-bench Pro: **61.7%** (Claude Code harness, temp 1.0, top_p 0.95, 256K) — best in the vendor's own comparison row, ahead of Qwen3.7-Plus 57.6 and Opus 4.6 Max 53.4
- SWE-bench (Vals harness): **86.0%**
- DeepSWE 1.1: **42.2%** (vs Qwen3.6-27B 13.3, Qwen3.7-Plus 14.2 — a ~3× jump, but far below the 74% frontier reference)
- QwenSWEBench (in-house, avg@3, 8h timeout): **79.0%** (vs Qwen3.6-27B 49.3)
- LiveCodeBench v6: **90.3%** (Vals harness 84.0%)
- NL2Repo-Bench: **42.3%** (Opus 4.6 Max 47.6)
- AA-SciCode: **46.6%**; AA Coding Index: **68.1%**; VulcanBench v3: **82.6%**
- Vibe Code Bench: no verified public score found
- Sweep-style signal: LlamaIndex ExtractBench mean **89.75%** / short 94.68% / medium 87.54% (FP8 checkpoint, HF eval results)

Long context:

- AA-LCR v1.1 **82.0%** is the measured long-context signal; no MRCR / RULER / GraphWalks number published at either 262K or the YaRN-extended 1M.

Multimodal (for the multimodal score):

- MMMU-Pro (AA): **76.3%**; MathVision 90.0% (94.6% with code interpreter); CharXiv-RQ 83.7% (90.2% with CI); OmniDocBench 1.5 **91.1%**; RealWorldQA **85.9%**; ERQA **65.5%**; BabyVision 65.7% (85.6% with CI); Vision2Web **62.9%**; SWE-MM **38.6%**; RecreationBench **47.1%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 at 73.0%, GDPval-AA 1463 Elo, τ³-Banking 48.0%, OSWorld-Verified 84.3%, AndroidWorld 81.9% and CoWorkBench 70.7% (beating both Opus 4.6 Max and the far larger Qwen3.7-Plus) make this a genuinely strong 27B agent — including agentic *multimodal* work, where most 27B models collapse; capped below 90 by a 20.4% Pass@1 on Agents' Last Exam, JobBench 33.4%, and no verified text Claw-Eval or MCP Atlas number to confirm breadth.
- **Reasoning: 75/100.** GPQA Diamond 89.2% (90.5% on AA's harness) and AA-LCR 82.0% are strong, HLE 30.8% is respectable and IFBench 79.5% means it follows instructions; capped by an AA Intelligence Index of 33.7, CritPt 5.4%, and an Omniscience accuracy of 15.6% with a negative index — it reasons well about problems and poorly about facts it does not know.
- **Context window: 78/100.** 262,144 native sits in the 200K–500K tier (200K = 70), lifted by 82.0% AA-LCR, a generous 262K reasoning / 131K answer budget, and a hosted 1M default via YaRN; not scored in the ≥1M tier because the 1M figure is a RoPE-scaled extension, not a native window, and Qwen itself warns that static YaRN degrades performance on shorter inputs.
- **Multimodal: 88/100.** Native image + video in (up to hour-scale video) with text out, and unusually deep *agentic* multimodal results — OSWorld-Verified 84.3%, AndroidWorld 81.9%, ClawEval-MM 57.4 Pass@3, Vision2Web 62.9% — plus document intelligence at OmniDocBench 1.5 91.1% and MathVision 90.0%; held at 88 inside the 75–90 band because output is text-only and SWE-MM (38.6%) and ERQA (65.5%) show the weak spots.
- **Coding: 79/100.** SWE-bench (Vals) 86.0%, SWE-bench Pro 61.7% (best in its vendor's comparison row), QwenSWEBench 79.0%, LiveCodeBench v6 90.3% and VulcanBench v3 82.6% are excellent for a locally-runnable 27B; capped just below the frontier band by DeepSWE 1.1 at only 42.2% against the 74% reference, AA-SciCode 46.6% against 55%, and AA Coding Index 68.1% just short of 70%.
- **Cost efficiency: 90/100.** Hosted at $0.50 in / $3.00 out with $0.05 explicit cache reads, and — decisively for a model this size — Apache 2.0 weights that fit one consumer GPU, making self-hosted per-token cost effectively $0 with no vendor free tier, no data-usage caveat and no lock-in; capped at 90 because the pure-API price is mid-band, not cheap-band.
- **Overall Score: 80/100.** (82 + 75 + 78 + 88 + 79) / 5 = 80.4 → 80. Best fit: local or single-GPU agentic coding with vision — this is the standout "27B that behaves like a frontier coder" pick, and the Apache 2.0 licence makes it the default recommendation for anything that cannot leave your hardware.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-25
- Method: public internet research (official Qwen/Qwen3.8-27B HF model card with its benchmark tables and methodology footnotes, BenchLM model page, Qwen Cloud model/pricing page, vLLM recipes deployment notes, Alibaba Cloud Official GitHub repo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.9_27B.md`, using the same headings.
