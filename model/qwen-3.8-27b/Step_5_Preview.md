# Qwen 3.8 27B — findings by Step 5 Preview

- Source: Alibaba / Qwen3.8-27B (`Qwen/Qwen3.8-27B`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Alibaba's dense 27B open-weight vision-language model (Apache 2.0) — the compact single-node member of the Qwen3.8 generation with native image/video understanding, 262K context (YaRN to 1M) and thinking-mode control, built for coding and long-horizon agents.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.8-27B`, apache-2.0, 28B safetensors); Qwen Cloud hosted API "coming soon" with 1M default context; third-party routes (OpenRouter, Novita, Chutes TEE, SiliconFlow) via Chat Completions API; vLLM/SGLang/TokenSpeed/Transformers serving.
- **Release / knowledge:** released 2026-08-14 (regolo.ai, kingy.ai); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-27B` (HF + API routes); a separate FP8 artifact is published.
- **Context window:** 262,144 native, extensible to 1,000,000 via YaRN RoPE scaling (official card); vendor recommends 262,144 reasoning-output + 131,072 final-response budget under YaRN.
- **Modalities:** text, image, video in; text out; thinking on by default (`reasoning_effort`: xhigh/medium/low; `preserve_thinking`); tool calling.
- **Pricing (as of 2026-10-21):** open weights free to self-host; hosted ~$0.40/$2.40–$3.00 per 1M (llm-stats $0.40/$3.00 cached $0.04; Lyceum $0.40/$2.40 cached $0.10).
- **Architecture:** dense 27B (27.78B incl. vision encoder), 64 layers, hybrid 16× (3× Gated DeltaNet → 1× Gated Attention) layout, MTP-trained, native vision encoder; Apache 2.0.

### Raw benchmarks found

Official model card (huggingface.co/Qwen/Qwen3.8-27B, Claude Code harness where applicable):

Agent / tool use:

- Terminal-Bench 2.1 (Terminus): **73.0%** (vendor card; ref: Opus4.6 Max 78.2%)
- CoWorkBench (long-horizon office): **70.7%** (vendor card)
- OSWorld-Verified (computer use): **84.3%** (vendor card)
- AndroidWorld (mobile use): **81.9%** (vendor card)
- WebArena-Verified (browser use): **64.8%** (vendor card)
- Agents' Last Exam: **42.9** (vendor card, Pass@1 10.4)
- AA Tau3 Banking: **48.0%** (Artificial Analysis via BenchLM)
- GDPval-AA: **1420 Elo** / **46.0%** normalized (Artificial Analysis via BenchLM)
- Terminal-Bench 2.1 (Vals): **58.4%** (Vals AI via BenchLM) — vendor harness reports 73.0%, harness spread noted
- AA AutomationBench: **48.2%** / AA EnterpriseOps-Gym: **44.2%** (Artificial Analysis via BenchLM)
- AA Agentic Index: **46.5%** (Artificial Analysis via BenchLM)
- Terminal-Bench 4.0 (AA): **5.6%** (Artificial Analysis via BenchLM) — collapses on the newest harness
- Toolathlon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (vendor card); **90.5%** (Artificial Analysis); **88.9%** (Vals AI)
- HLE: **30.8%** (vendor card, no tools); **33.9%** (Artificial Analysis)
- LiveCodeBench v6 (competitive coding): 90.3% (listed under Coding below)
- AA-LCR (long-context reasoning): **82.0%** (Artificial Analysis via BenchLM)
- CritPt: **5.4%** (Artificial Analysis via BenchLM) — very weak
- MLCR-AA: **21.7%** (Artificial Analysis via BenchLM)
- AA Omniscience: Accuracy **15.6%**, Hallucination Rate **30.3%** (Artificial Analysis via BenchLM) — weak knowledge/hallucination profile
- Artificial Analysis Intelligence Index: **33.7%** (AA normalized, via BenchLM)
- MMLU-Pro (Vals): **84.3%** (Vals AI via BenchLM)
- FrontierMath: no verified public score found

Coding:

- SWE-bench Verified (Vals): **86.0%** (Vals AI via BenchLM)
- SWE-bench Pro (public, Claude Code harness): **61.7%** (vendor card; re-evaluated baselines: Opus4.6 Max 53.4%)
- DeepSWE 1.1: **42.2%** (vendor card, Claude Code harness) — weak on this harness
- LiveCodeBench v6: **90.3%** (vendor card); **84.0%** (Vals AI)
- QwenSWEBench (in-house): **79.0%** (vendor card)
- NL2Repo-Bench (repo-level generation): **42.3%** (vendor card)
- AA Coding Index: **68.1%** (Artificial Analysis via BenchLM)
- AA-SciCode: **46.6%** (Artificial Analysis via BenchLM)
- Terminal-Bench 2.1 (Terminus): **73.0%** (vendor card, listed above)
- SWE-MM (multimodal SE): **38.6%** (vendor card)
- VulcanBench v3: **82.6%** (VulcanBench via BenchLM)
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR **82.0%** long-context reasoning (Artificial Analysis, via BenchLM); native 262,144 window with YaRN to 1M (vendor card); no MRCR/RULER/GraphWalks retrieval-at-length figure published.

Multimodal extras (for traceability): MathVision 90.0% (94.6% w/ tool), BabyVision 65.7% (85.6% w/ tool), CharXiv RQ 83.7% (90.2% w/ tool), OmniDocBench 1.5 91.1%, RealWorldQA 85.9%, ERQA 65.5%, ClawEval-MM Pass@3 57.4% / avg 56.9, Vision2Web 62.9%, AA-MMMU-Pro 76.3% (all vendor card / Artificial Analysis via BenchLM).

### Normalized scores (1–100)

- **Tool use: 74/100.** OSWorld 84.3% / AndroidWorld 81.9% show strong GUI-agent execution and Tau3 Banking 48.0% approaches the frontier band, but GDPval 1420 is well short of the ~1750 frontier ref, AA Agentic Index 46.5%, AutomationBench 48.2% sit mid-band, and Terminal-Bench 4.0 collapses to 5.6% on the newest harness — capped in the low 70s.
- **Reasoning: 80/100.** GPQA Diamond 89.2–90.5% and MMLU-Pro 84.3% are strong, HLE 30.8–33.9% clears the mid band, and AA Intelligence Index 33.7% sits at the top of the mid reference; capped hard by CritPt 5.4%, Omniscience accuracy 15.6% (hallucination 30.3%) and LCR 82.0% (below the 95%+ frontier ref).
- **Context window: 78/100.** 262,144 native lands in the 200K–500K tier (65–84, above the 200K=70 floor because 262K > 200K); YaRN extension to 1M is documented but static-factor YaRN degrades shorter inputs — vendor-tuned, not natively served, so no ≥1M credit.
- **Multimodal: 88/100.** Native image + video input (video-in tier 75–90) with text out; MathVision 90.0%, OmniDocBench 91.1%, OSWorld 84.3% and AndroidWorld 81.9% are excellent for the size; no audio input or non-text output keeps it below 90.
- **Coding: 80/100.** SWE-bench Verified 86.0% (Vals) and LiveCodeBench v6 90.3% are near-frontier and AA Coding Index 68.1% approaches the 70%+ frontier ref; capped by DeepSWE 1.1 42.2%, SWE-bench Pro 61.7%, SciCode 46.6% and NL2Repo 42.3% on the harder agentic harnesses.
- **Cost efficiency: 90/100.** ~$0.40/$2.40–$3.00 hosted with $0.04–$0.10 cache sits near the ~$0.60/$2.20 ≈ 92 reference band; Apache-2.0 weights (free self-host) keep the floor at $0 for local runs.
- **Overall Score: 80/100.** Mean of (74 + 80 + 78 + 88 + 80) / 5 = 80.0 → 80. Best fit: the strongest dense open-weight 27B for multimodal coding/agent work you can self-host — frontier closed models still win the hardest agentic and knowledge evals.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (Qwen official HF model card, Artificial Analysis/Vals AI/VulcanBench figures via BenchLM, llm-stats, Lyceum, regolo.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
