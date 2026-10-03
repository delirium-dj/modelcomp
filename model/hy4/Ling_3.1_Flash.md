# Hy4 (preview) — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Hy4
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (preview)
- **Short description:** Tencent Hy Team's open-source MoE flagship — 770B total / 49B active with Gated DeepSeek Sparse Attention and IndexCache cross-layer index reuse, co-designed with CodeBuddy/WorkBuddy.
- **Provider / access:** Tencent — Hugging Face, ModelScope, GitCode, CNB (BF16 + FP8); Tencent Cloud TokenHub API; OpenRouter.
- **Release / knowledge:** 2026-08-28 preview; open-sourced same day.
- **IDs:** `hy4` (folder); HF `tencent/Hy4-preview` (per Tencent release).
- **Context window:** 1,048,576 tokens (1M); max output 64,000.
- **Modalities:** Text in, text out (no vision documented in captured sources).
- **Pricing (as of 2026-10):** 6 yuan / 18 yuan per 1M input/output (Tencent Cloud TokenHub; ~$0.83/$2.50); HokAI blended 3:1 estimate $1.25/M (#31/75, peer median $1.71/M); OpenRouter pricing not captured.
- **Architecture:** 78 layers (1 dense FFN + 77 MoE with 256 routed + 1 shared expert, top-8 + shared per token); hidden 6144; 64 attention heads; Gated DSA with IndexCache; iHC (identity Hyper-Connections) residual; 1 native MTP layer (10B total / 0.7B activated) for speculative decoding; vocab 120,832; query/KV compression 2048/512; indexer 32 heads/128 dim, top-k 2048; 4 residual streams. Apache 2.0 per AI/TLDR version table (HF card prints a jumbled "2.0. See LICENSE" line).

### Raw benchmarks found

**Vendor-reported (Tencent HF card appendix; every model evaluated at highest reasoning setting, comparators measured by Tencent; a/b values where the appendix prints two):**
- Terminal-Bench 2.1 **85.4%** (Hy3 70.8; DeepSeek-V4-Pro 87.9/80.3; Qwen 3.8 Max 86.6/85.8; GLM-5.3 88.2/88.3; Kimi K3 88.3/85.7; GPT-5.6 Sol 88.8/88.3; Claude Opus 5 86.7/85.4). Tencent's claim "surpasses DeepSeek V4 Pro, ties Claude Opus 5" uses the 80.3 and 85.4 comparator values.
- SWE-bench Pro **65.7%** (Hy3 57.9; DS-V4-Pro 60.3/58.8; Qwen 3.8 Max 67.7/61.6; GLM-5.3 64.6; Kimi K3 63.3; GPT-5.6 Sol 64.6/60.5; Opus 5 79.2/79.9).
- SWE-bench Multilingual **82.9%** (Hy3 75.8; DS-V4-Pro 77.3; Qwen 3.8 Max 82.6; GLM-5.3 81.3; Kimi K3 80.8; GPT-5.6 Sol 74.1; Opus 5 89.5/85.8).
- DeepSWE **64.3%** (Hy3 28; DS-V4-Pro 62.7/58.8; Qwen 3.8 Max 56.6/55.6; GLM-5.3 66.9/68.1; Kimi K3 67.5/74.0; GPT-5.6 Sol 72.7/68.9; Opus 5 68.8/74.7).
- SWE Atlas — Codebase Q&A **64%**, Test Writing **57.8%**, Refactoring **53.3%** (Hy3: 30.8 / 35.9 / 32.9).
- GPQA Diamond **92.3%** (Hy3 90.9; DS-V4-Pro 92.8/91.7; Qwen 3.8 Max 92.6/92.2; GLM-5.3 91.7/91.4; Kimi K3 93.5/92.8; GPT-5.6 Sol 94.1/94.7; Opus 5 93.7/93.3).
- HLE (no tools, text-only) **43.4%** (per AI/TLDR's captured score list).
- MathArena Apex 2025 **74.2%** (Hy3 38.7; DS-V4-Pro 66.3; Qwen 3.8 Max 72.8; Kimi K3 68.4; GPT-5.6 Sol 90; Opus 5 91.4).
- MCP-Atlas (public) **83.7%** (Hy3 75; DS-V4-Pro 82.5; Qwen 3.8 Max 81.9; GLM-5.3 81.9; Kimi K3 84.2/82.8; GPT-5.6 Sol 82.5; Opus 5 85.7).
- Toolathlon-Verified **74.1** (HokAI: "surpasses Qwen 3.8 Max and GPT-5.6 Sol, approaches Kimi K3 and Claude Opus 5"); APEX-Agents (pass@1) **37.1** (Kimi K3 37.2).
- BankerToolBench **78.6%** (Hy3 68.8; GLM-5.3 77.8; GPT-5.6 Sol 79; Opus 5 81.9); WideSearch **83.9%** (Hy3 81.9; GPT-5.6 Sol 86.3); OneMillionBench with tools **65.4%** (Hy3 51.5; Opus 5 68.1).
- ProgramBench **17.5%** (Hy3 3; GLM-5.3 18; Kimi K3 24.5; GPT-5.6 Sol 25; Opus 5 39.5); Harbor-Index **39.6%** (Hy3 15.6; GLM-5.3 42.5; GPT-5.6 Sol 46.3; Opus 5 56.9); BioMysteryBench **71.3%** (Hy3 54.9; GPT-5.6 Sol 73.1); SUPERChem **66.4%** (Hy3 52.6; GPT-5.6 Sol 73.6).
- GDPval-AA V2 (official) **1678 Elo** (Hy3 1213; DS-V4-Pro 1580; Qwen 3.8 Max 1717; GLM-5.3 1763; Kimi K3 1675; GPT-5.6 Sol 1711; Opus 5 1831).
- SWE-bench Verified not captured in the appendix (a/b layout); no MMLU/ARC/MATH captured.

**Independent / other:**
- **Blind engineering eval** (Tencent Hy Team, 2026-08-28; 163 experts x 203 tasks, WorkBuddy): Hy4 preview **2.99/4.00** vs GLM-5.3 2.92 (46.8% wins / 12.8% ties / 40.4% losses) and Kimi K3 2.94 (51.2% / 7.9% / 40.9%); biggest margins in frontend development, data & storage, CI/CD.
- HokAI tracker: Hy4 sits behind Claude Opus 5 and GPT-5.6 on most public evals, trading wins mainly with other Chinese open models; LMArena Code WebDev rank #3 among open models.
- Vendor-disclosed limitations: early version with headroom left in pre/post-training; spends longer than necessary reasoning through complex tasks; tendency to over-verify its own work.
- Autonomous inference optimization: Hy4 analyzed its own inference bottlenecks (operator fusion, communication optimization) for a **31.8% end-to-end throughput increase**; deployment images for vLLM (FLASHMLA_SPARSE backend, hy_v4 parsers, speculative mtp) and SGLang published.

## Scores

- **Tool use: 72/100.** MCP-Atlas 83.7%, Toolathlon-Verified 74.1, BankerToolBench 78.6%, APEX-Agents 37.1 pass@1, WideSearch 83.9%, ALE-CLI 22.8% — a strong, broad agentic profile just behind the frontier leaders (Opus 5 MCP-Atlas 85.7%, Kimi K3 84.2%).
- **Reasoning: 73/100.** GPQA Diamond 92.3% and HLE 43.4% (no tools) are frontier-tier; MathArena Apex 2025 74.2% trails GPT-5.6 Sol (90) and Opus 5 (91.4); SUPERChem 66.4%, BioMysteryBench 71.3%, Harbor-Index 39.6%.
- **Context window: 93/100.** Native 1M with a measured 1M-scale benchmark (OneMillionBench with tools 65.4%); no MRCR captured.
- **Multimodal: 15/100.** Text-only per captured sources.
- **Coding: 75/100.** TB 2.1 85.4%, SWE-bench Pro 65.7%, SWE-bench Multilingual 82.9%, DeepSWE 64.3%, SWE Atlas trio (64 / 57.8 / 53.3); ProgramBench 17.5% is weak; sits between GLM-5.3 and GPT-5.6 Sol on most coding rows.
- **Cost efficiency: 91/100.** 6/18 yuan per 1M (~$0.83/$2.50; blended ~$1.25/M) with Apache 2.0 weights and 31.8% self-optimized throughput.
- **Overall Score: 65.6/100.** Mean of Tool use 72, Reasoning 73, Context window 93, Multimodal 15, Coding 75 = 65.6.

> **Gap vs folder average (68.7): −3.1.** The folder's 68.7 is consistent with the vendor table once the text-only Multimodal penalty (15) and mid-tier ProgramBench/Harbor-Index are weighted; my Reasoning 73 already credits GPQA 92.3% / HLE 43.4%.

## Notes

- Verification trail: Tencent Hy Team HF release (2026-08-28; architecture appendix; benchmark table; blind eval; limitations; throughput optimization), HokAI analysis (tracker placement, pricing/blended-cost estimate, co-design with CodeBuddy/WorkBuddy), AI/TLDR version table (release date, Apache 2.0, HLE 43.4%, 1M context, 770B/49B).
- Known conflicts: HF card prints a jumbled license line ("2.0. See LICENSE") vs AI/TLDR's Apache 2.0; Tencent's "surpasses DeepSeek V4 Pro, ties Claude Opus 5" claims rely on the lower a/b comparator values in its own table.
- Open questions: SWE-bench Verified row (jumbled in appendix); independent (non-Tencent) replications; OpenRouter $/M; whether the final Hy4 release changes scores from the preview.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: independent replications of the TB 2.1 85.4% and SWE-bench Pro 65.7% rows, OpenRouter pricing, final Hy4 release notes.
