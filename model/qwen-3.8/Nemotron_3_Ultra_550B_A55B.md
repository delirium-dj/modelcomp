# Qwen3.8 (Base) — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.8`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 (Qwen3.8-2.4T-A95B base)
- **Short description:** Alibaba's open-weight MoE base model with 2.4T total / 95B active params, text-only with forced thinking mode, strong coding (LiveCodeBench 87.9% Vals, SWE-bench 85.6% Vals), 262K native context extensible to 1M, free on Hugging Face / cheap via inference providers.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.8-2.4T-A95B`), vLLM/SGLang self-host, OpenCode Zen (`opencode/qwen-3.8`), Novita, Chutes, others. Chat Completions API compatible.
- **Release / knowledge:** 2026-08-13 release (blog); knowledge cutoff not explicitly stated.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (Hugging Face), `qwen-3.8` (OpenCode Zen). Free tier on HuggingChat.
- **Context window:** 1,010,000 tokens extensible (native 262,144 via YaRN).
- **Modalities:** Text in/out only; reasoning yes (forced, `reasoning_effort`: xhigh/medium/low); tool calls yes; JSON mode yes. No vision input; thinking cannot be disabled.
- **Pricing (as of 2026-10-19):** Free on HuggingChat; inference providers ~$0.30–$0.80/M in, $0.60–$1.20/M out (Novita, Chutes). Blended ≈ $0.50/M (open-weight, self-host near-zero marginal). Cost per Intelligence Index task: negligible.
- **Architecture:** MoE: 2.4T total params, 95B active (10 routed + 1 shared experts per layer), 512 experts, 92 layers, Gated DeltaNet + Gated Attention hybrid, BF16.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen blog) / **67.4%** (Vals AI)
- CoWorkBench: **74.8%** (Qwen blog)
- JobBench: **53.4%** (Qwen blog)
- SkillsBench: **70.2%** (Qwen blog)
- Agents' Last Exam: **52.4%** (Qwen blog)
- AutomationBench: **27.3%** (Qwen blog)
- Toolathlon-Verified: **72.5%** (Qwen blog)
- WideResearch: **81.9%** (Qwen blog)
- HLE w/ tools: **56.2%** (Qwen blog)
- OSWorld-Verified: **86.1%** (Qwen blog)
- OSWorld 2.0: **19.4%** (Qwen blog)
- WebArena-Verified: **66.8%** (Qwen blog)
- AndroidWorld: **85.3%** (Qwen blog)
- MobileWorld: **77.8%** (Qwen blog)
- Hermes Index: **36.2%** (Nous Research)
- Hermes Bench: **70.5%** (Nous Research)
- MazeBench: **0%** (ASCII mode, tools)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Qwen blog) / **93.7%** (Vals AI)
- HLE: **43.6%** (Qwen blog) / **43.6%** w/o tools
- MRCR v2 256K (8-needle): **92.9%** (Qwen blog)
- LongBench v2: **66.3%** (Qwen blog)
- IFBench: **82.8%** (Qwen blog)
- MMLU-Pro (Vals): **88.6%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **74.737%** (Epoch AI)
- FrontierMath v2 Tier 4: **46.341%** (Epoch AI)
- $OneMillion-Bench: **52.5** expert score (Qwen blog)
- HealthBench: **60.2%** (Qwen blog)
- PLawBench: **73.2%** (Qwen blog)
- PRBench-Legal: **57.6%** (Qwen blog)
- PRBench-Finance: **58.3%** (Qwen blog)

Coding:

- Terminal-Bench 2.1: **86.6%** (Qwen blog) / **67.4%** (Vals AI)
- SWE-bench Pro: **67.7%** (Qwen blog)
- DeepSWE: **56.6%** (Qwen blog)
- NL2Repo: **55.9%** (Qwen blog)
- FrontierSWE: **73.5%** (Qwen blog)
- MLS-Bench Lite: **41.0%** (Qwen blog)
- PaperBench: **93.0%** (Qwen blog)
- QwenReactBench: **1724 Elo** (Qwen blog)
- VulcanBench v3: **81.2%** (VulcanBench leaderboard)
- OpenHarmony Bench: **60.8%** (official leaderboard)
- FrontierSWE v2: **15.8%** (Proximal)
- LiveCodeBench (Vals): **87.9%** (Vals AI leaderboard)
- SWE-bench (Vals): **85.6%** (Vals AI leaderboard)
- Bug Hunt Bench: **25.7 fixes** (public data)

Multimodal:

- No native multimodal support (text-only base model). Qwen3.8-Max adds vision/video.
- Benchmarks not applicable to base model.

Long context:

- MRCR v2 256K: **92.9%** (Qwen blog)
- LongBench v2: **66.3%** (Qwen blog)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 80/100.** TB 2.1 86.6% (exceeds 88%+ frontier at Vals 67.4%), OSWorld-Verified 86.1%, AndroidWorld 85.3%, WideResearch 81.9%, Toolathlon 72.5%, CoWorkBench 74.8%. Capped by OSWorld 2.0 19.4%, AutomationBench 27.3%, MazeBench 0%. Slightly below Max due to no built-in tools.
- **Reasoning: 78/100.** GPQA Diamond 92.6% (near 90%+ frontier), HLE 43.6% (exceeds 40%+), MRCR 92.9% at 256K (exceeds 90%+), IFBench 82.8%, FrontierMath Tiers 1-3 74.7%, MMLU-Pro 88.6%. Capped by FrontierMath Tier 4 46.3%, LongBench v2 66.3%, $OneMillion-Bench 52.5.
- **Context window: 95/100.** 1M extensible context; MRCR 92.9% at 256K — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95-100.
- **Multimodal: 30/100.** Text-only base model; no vision, video, PDF, OCR input. Methodology: text-only = 20-30.
- **Coding: 85/100.** LiveCodeBench 87.9% (Vals, exceeds 80%+ frontier), SWE-bench 85.6% (Vals, exceeds 80%+), VulcanBench 81.2%, PaperBench 93.0%, TB 2.1 86.6%, FrontierSWE 73.5%. Capped by SWE-bench Pro 67.7%, DeepSWE 56.6%, MLS-Bench 41.0%, FrontierSWE v2 15.8%.
- **Cost efficiency: 95/100.** Free on HuggingChat; self-host near-zero marginal; inference providers ~$0.50/M blended. Methodology: free/open-weight ≈ 95-100.
- **Overall Score: 73.6/100.** Half-up mean of (80 + 78 + 95 + 30 + 85) / 5 = 73.6 → 74. Using six incl. cost: (80+78+95+30+85+95)/6 = 463/6 = 77.2 → 77. Model-queue says 88.2; discrepancy due to multimodal weight. Best-fit: strongest open-weight for coding + long-context + agentic; lacks multimodal vs Max; free access makes it uniquely cost-efficient.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Qwen blog, Hugging Face model card), independent benchmark aggregators (BenchLM, Vals AI, Epoch AI, Nous Research), and gateway pricing (OpenCode Zen, Novita, Chutes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.md`, using the same headings.