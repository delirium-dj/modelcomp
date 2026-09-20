# Hy4 preview — findings by Big Pickle

- Source: Tencent Hunyuan (`hy4-preview`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 preview
- **Short description:** Tencent Hunyuan's next-generation open-weight MoE flagship — roughly 2.6x Hy3's total size and 2.3x its active params, with a 1M-token context built for long-horizon agents, repository-scale code analysis, and enterprise productivity; released under Apache 2.0 just seven weeks after Hy3's full launch.
- **Provider / access:** Open weights on Hugging Face, ModelScope, GitCode, CNB (`Tencent-Hunyuan/Hy4-preview`, plus FP8 variant) under **Apache 2.0**; also routed via OpenRouter; deployable with vLLM/SGLang (OpenAI-compatible). Preview status; no hosted API price published.
- **Release / knowledge:** Released and open-sourced 2026-08-28.
- **IDs:** `hy4-preview` / `tencent/Hy4-preview` (770B total / ~49B active; open weights)
- **Context window:** 1,000,000+ tokens (~1M; ~700-800K English words).
- **Modalities:** text input; text output (text-only).
- **Pricing (as of 2026-09-20):** Open weights under Apache 2.0 (self-host free); no official hosted token price published yet.
- **Architecture:** MoE, 770B total / 49B active; 78 layers (first is dense FFN, remaining 77 are MoE with 256 routed experts + 1 shared, top-8 routed per token); Gated DeepSeek Sparse Attention (DSA) with IndexCache (indexer 32 heads/dim 128, top-k 2048); GQA 64 heads; hidden 6144; 4 residual streams (iHC identity Hyper-Connections); native MTP layer for speculative decoding (10B total / 0.7B active); vocab 120,832; FP8 variant. Tencent reports the model autonomously boosted end-to-end inference throughput by 31.8% (operator fusion, communication optimization).

### Raw benchmarks found

Reasoning / knowledge (all vendor-run, HF evaluation appendix):

- GPQA Diamond: **92.3**; no HLE/MMLU-Pro figure surfaced.
- Blind side-by-side (163 internal experts, 203 engineering tasks): **2.99/4.00** vs GLM-5.3 2.92 (46.8% wins / 12.8% ties / 40.4% losses) and vs Kimi K3 2.94 (51.2% / 7.9% / 40.9%) — differences within likely margin of error, Tencent-run.

Agent / tool use:

- SkillsBench V1.1: **62.9** (vendor); positioned for long-horizon agents, multi-turn tool orchestration, state retention and self-correction; no independent agentic leaderboard result yet.

Coding (vendor-run, HF evaluation appendix):

- DeepSWE: **64.3**; SWE-Bench Pro: **65.7**; SWE-Bench Multilingual: **82.9**; known issues disclosed: over-verification and unnecessarily long reasoning chains.

Long context:

- 1M window via Gated DSA + IndexCache for repository-scale reasoning; no MRCR-style retrieval score published.

### Normalized scores (1–100)

- **Tool use: 36/100.** Long-horizon tool orchestration and repository-scale agent work are the flagship claims, but SkillsBench V1.1 62.9% is the only score and all of it is Tencent-run; no independent agentic results exist yet for a preview release with disclosed reliability caveats.
- **Reasoning: 36/100.** GPQA Diamond 92.3% looks elite, yet the headline blind-eval edge over GLM-5.3/Kimi K3 (2.99 vs 2.92/2.94) is within margin of error, Tencent-run, and the model openly over-verifies and emits overly long reasoning chains.
- **Context window: 39/100.** A real 1M native window backed by Gated DSA/IndexCache is strong on paper, but retrieval quality is unverified and the preview cap keeps confidence modest.
- **Multimodal: 23/100.** Text-in / text-out only — no vision, audio, video, or generation.
- **Coding: 36/100.** DeepSWE 64.3%, SWE-Bench Pro 65.7%, and SWE Multilingual 82.9% are genuinely competitive open-source numbers, but they are all vendor-reported, unconfirmed independently, and paired with release-day reliability issues.
- **Cost efficiency: 40/100.** Apache-2.0 weights and an FP8 variant make self-hosting viable, but a 770B-resident / 49B-active footprint needs serious hardware, no hosted price is published, and the +31.8% throughput claim is unverified.
- **Overall Score: 34/100.** Mean of the five quality dims (36+36+39+23+36)/5 = 34.0. A very promising open flagship whose preview status, self-run evals with near-parity margins, text-only scope, and disclosed over-verification issues keep its realized profile modest so far.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (tencent.com release note, Tencent-Hunyuan GitHub and Hugging Face model cards, mindstudio.ai, shattered.io, rcnguide.com, adp.tencentcloud.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.