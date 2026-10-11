# Qwen3.8-27B — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-27B
- **Short description:** Alibaba Qwen's August 2026 open-weights dense 27B vision-language model, built on the Qwen3.5 architecture with substantial gains across coding, professional work, research, and long-horizon agentic tasks; the most capable generation in the Qwen open-model family to date.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.8-27B`), ModelScope, Qwen Cloud (`qwen3.8-27b`); self-hosting via vLLM/SGLang/TokenSpeed. No Zen Free ID.
- **Release / knowledge:** Released August 13, 2026 (model card), model weights available August 14, 2026. Knowledge cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.8-27B` (Hugging Face); `qwen3.8-27b` (Qwen Cloud)
- **Context window:** 262,144 native (extensible to 1,000,000 with YaRN). Verified via Hugging Face model card and Qwen Cloud documentation.
- **Modalities:** Text, image, video in; text out (thinking mode on by default with reasoning_effort control; preserve_thinking supported)
- **Pricing (as of 2026-08-20):** Open weights (Apache-2.0): self-hosting free; Qwen Cloud API pricing not disclosed on HF model card — verify separately. No Zen Free ID.
- **Architecture:** 27B dense parameters, Gated DeltaNet + Gated Attention hybrid, Multi-Token Prediction (MTP) trained with multiple steps; text + vision encoder. Native vision-language model understanding images and videos including hour-scale videos.

### Raw benchmarks found

> Sources: Hugging Face model card (`https://huggingface.co/Qwen/Qwen3.8-27B`); Qwen official GitHub (`https://github.com/QwenLM/Qwen3.8`); Qwen Cloud; BenchLM; Vals AI; Artificial Analysis. Note: this is an open-weights model with community-evaluated benchmarks; some scores use the Claude Code harness.

Agent / tool use:

- OSWorld-Verified: **84.3%** (Qwen official model card / BenchLM — strong, above 70% threshold)
- WebArena-Verified: **64.8%** (Qwen official model card — browser use)
- AndroidWorld: **81.9%** (Qwen official model card / BenchLM — strong mobile use)
- Terminal Bench 2.1 (Terminus): **73.0%** (Qwen official model card — strong agentic terminal coding)
- DeepSWE 1.1: **42.2%** (Qwen official model card / BenchLM — below ≥74% frontier)
- QwenSWEBench: **79.0%** (Qwen official model card — in-house coding benchmark, Claude Code harness)
- CoWorkBench: **70.7%** (Qwen official model card — long-horizon office work)
- Agents' Last Exam: Pass@1 **20.4**, Score **42.9** (Qwen official model card — below 27.3 GPT-6 Astra baseline)
- ApprenticeBench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- GDP.pdf: **no verified public score found**
- AA Agentic Index: **no verified public score found**

Coding:

- Terminal Bench 2.1 (Terminus): **73.0%** (Qwen official model card — agentic terminal coding, strong)
- DeepSWE 1.1: **42.2%** (Qwen official model card — below ≥74% frontier)
- QwenSWEBench: **79.0%** (Qwen official model card — in-house software engineering benchmark)
- SWE-bench Pro: **61.7%** (Qwen official model card — Claude Code harness, at tier)
- NL2Repo-Bench: **42.3%** (Qwen official model card — Claude Code harness)
- LiveCodeBench v6: **90.3%** (Qwen official model card / BenchLM — meets ≥90 frontier!)
- SWE-bench (Vals): **79.0%** (Qwen official model card — matches QwenSWEBench)
- AA-SciCode: **no verified public score found**
- AA Coding Index: **no verified public score found**
- VulcanBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.2%** (Qwen official model card — near ≥95 frontier, below)
- HLE: **30.8%** (Qwen official model card — below 40% frontier)
- AA-GPQA-D: **no verified public score found** (GPQA Diamond 89.2% is the closest verified score)
- AA Intelligence Index: **no verified public score found** (not yet covered)
- AA-LCR: **no verified public score found**
- CritPt: **no verified public score found**
- MLCR-AA: **no verified public score found**
- ARC-AGI-1: **no verified public score found**
- ARC-AGI-2: **no verified public score found**
- MMLU-Pro: **no verified public score found**
- Omniscience Index: **no verified public score found**
- FrontierMath: **no verified public score found**

Multimodal:

- CharXiv: 90.0% (without CI) / **94.6%** (with CI) (Qwen official model card — visual math problem solving)
- BabyVision: 65.7% (without CI) / **85.6%** (with CI) (Qwen official model card — general visual reasoning)
- CharXiv (RQ): 83.7% (without CI) / **90.2%** (with CI) (Qwen official model card — scientific chart analysis)
- OmniDocBench 1.5: **91.4%** (Qwen official model card — document intelligence, tied for best in table)
- RealWorldQA: **86.9%** (Qwen official model card — real-world perception, best in table)
- ERQA: **69.8%** (Qwen official model card — embodied intelligence, best)
- MathVision: 90.0% (without CI) / 94.6% (with CI) — included above
- RecreationBench: **47.1%** (Qwen official model card — application recreation, best)
- Vision2Web: **62.9%** (Qwen official model card — visual web development, best)
- ClawEval-MM: **57.4%** Pass@3 / 57.4% average (Qwen official model card — multimodal tool use, best)
- SWE-MM: **38.6%** (Qwen official model card — multimodal software engineering, best)
- MME: **no verified public score found**
- AA-MMMU-Pro: **no verified public score found**
- Design Arena: **no verified public score found**

Long context:

- Context window: 262,144 native, extensible to 1,000,000 with YaRN (verified via Hugging Face model card)
- MRCR / RULER / GraphWalks: **no verified public score found**
- Long-horizon tasks demonstrated via CoWorkBench 70.7% and Agents' Last Exam 42.9 (score)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from Hugging Face model card (`https://huggingface.co/Qwen/Qwen3.8-27B`), Qwen official GitHub (`https://github.com/QwenLM/Qwen3.8`), and Qwen Cloud as of 2026-10-11. Note: this is an open-weights model with community-evaluated benchmarks; some scores use the Claude Code harness.

- **Tool use: 82/100.** OSWorld-Verified 84.3% (exceeds ≥80% threshold), AndroidWorld 81.9%, QwenSWEBench 79.0%, Terminal Bench 2.1 (Terminus) 73.0%, SWE-bench (Vals) 79.0%. Strong agentic cluster with OSWorld 84.3% and AndroidWorld 81.9% meeting ≥80% threshold. Capped by DeepSWE 42.2 (below 74% frontier), Agents' Last Exam score 42.9 (below frontier 27.3→42.9 gap small), no GDPval-AA, no GDP.pdf, no AA Agentic Index, no ApprenticeBench.

- **Reasoning: 82/100.** GPQA Diamond 89.2% (near ≥90 frontier, below 95%), HLE 30.8% (below 40% frontier). Solid knowledge base. Capped by HLE 30.8% (below frontier), no verified Intelligence Index, no ARC-AGI-1/2, no MMLU-Pro, no Omniscience data, no FrontierMath, no CritPt, no LCR. Limited reasoning benchmark coverage beyond GPQA and HLE.

- **Context window: 92/100.** 262,144 native tokens (extensible to 1,000,000 with YaRN via vLLM/SGLang/TokenSpeed); ~393 A4 pages at native, extends to ~1M tokens. Capped by no verified MRCR/RULER/GraphWalks retrieval benchmark ≥98% at 256K+ published (no long-context retrieval curve data in official benchmarks); no explicit ≥98% long-context retrieval result.

- **Multimodal: 89/100.** Verified text, image, video input; text output. Native vision-language model with strong multimodal benchmark performance: CharXiv 94.6% (with CI), BabyVision 85.6% (with CI), OmniDocBench 91.4%, RealWorldQA 86.9%, ERQA 69.8%, RecreationBench 47.1%, Vision2Web 62.9%, ClawEval-MM 57.4%. Capped by text-only output (no video/audio generation), no audio input verification, no MME/MMMU-Pro/Design Arena scores, no AA-Video-MME data.

- **Coding: 84/100.** LiveCodeBench v6 90.3% (meets ≥90 frontier!), Terminal Bench 2.1 (Terminus) 73.0%, QwenSWEBench 79.0%, SWE-bench (Vals) 79.0%, SWE-bench Pro 61.7%, NL2Repo-Bench 42.3%. Multiple strong coding benchmarks with LiveCodeBench meeting ≥90 frontier. Capped by DeepSWE 42.2% (below 74% frontier), no VulcanBench, no CursorBench, no Vibe Code Bench, no AA-SciCode, no AA Coding Index.

- **Cost efficiency: 100/100.** Open weights (Apache-2.0); self-hosting free with standard inference frameworks. No commercial API pricing required.

- **Overall Score: 86/100.** Half-up mean: (82+82+92+89+84)/5 = 429/5 = 85.8 → 86. **Best-fit:** open-weights 27B vision-language model with strong multimodal benchmarks (CharXiv 94.6%, RealWorldQA 86.9%) and elite coding (LiveCodeBench 90.3% ≥90 frontier); cap: limited verified Intelligence Index/Reasoning-specific benchmarks, HLE 30.8% (below 40% frontier), DeepSWE 42.2% (below 74% coding frontier), no long-context retrieval curves published. Free to self-host.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-11
- Method: public-internet research (Hugging Face model card `https://huggingface.co/Qwen/Qwen3.8-27B` for benchmarks, architecture, context window 262K-1M, modalities; Qwen official GitHub `https://github.com/QwenLM/Qwen3.8` for release info, benchmark tables, API usage; Qwen Cloud documentation for pricing notes). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key findings: Qwen3.8-27B released August 13-14, 2026; 27B dense params; 262,144 native context (extensible to 1M); text/image/video input + text output + thinking; GPQA 89.2%, HLE 30.8%, LiveCodeBench 90.3% (≥90 frontier), OSWorld-Verified 84.3%, AndroidWorld 81.9%, CharXiv 94.6% (with CI), RealWorldQA 86.9%, OmniDocBench 91.4%; open weights Apache-2.0, no Zen Free ID.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.

---
