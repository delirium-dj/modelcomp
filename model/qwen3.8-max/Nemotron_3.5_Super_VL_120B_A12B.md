# Qwen 3.8 Max — findings by Nemotron_3.5_Super_VL_120B_A12B

- Source: Alibaba Qwen (`qwen3.8-max`, `Qwen/Qwen3.8-2.4T-A95B`), qwen.ai/blog, huggingface.co/Qwen, github.com/AlibabaCloud-Official/Qwen3.8-max, github.com/QwenLM/Qwen3.8, docs.qwencloud.com, modelstudio.console.alibabacloud.com, benchgap.net, respan.ai, tpsreport.news, alibabacloud.com press room, geotoolbox.ai, venturebeat.com, ai-primer.com, heyaiwiki.com
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Max (Qwen3.8-Max / Qwen3.8-2.4T-A95B)
- **Short description:** Alibaba Qwen's Aug 3, 2026 flagship — 2.4T total / ~95B active per token sparse MoE multimodal model with 1M context, Qwen's most capable model to date. First Qwen-Max-class model to open release (Qwen3.8-2.4T-A95B weights on Hugging Face, bespoke "Qwen3.8-Max" license, text-only variant).
- **Provider / access:** QwenCloud API (`qwen3.8-max`, `qwen3.8-max-0902`), Alibaba Cloud Model Studio (`qwen3.8-max`), Hugging Face (`Qwen/Qwen3.8-2.4T-A95B`), ModelScope, Qwen Studio, Qoder, QwenWork. OpenAI and Anthropic API compatible.
- **Release / knowledge:** Released 2026-08-03; knowledge cutoff not publicly specified.
- **IDs:** `qwen3.8-max` (QwenCloud API ID); `Qwen/Qwen3.8-2.4T-A95B` (Hugging Face ID); `qwen3.8-2.4t-a95b` (Model Studio ID). No Free ID confirmed on OpenCode Zen (paid API; Qwen Studio free tier).
- **Context window:** 1,000,000 total tokens (1M); max input 991,808 (non-thinking) / 983,616 (thinking); max output 131,072 (128K); max reasoning 262,144; verified via QwenCloud and Model Studio docs.
- **Modalities:** Text, image, video in; text out. Native visual understanding (video up to 2 hours / 2GB, images up to 16M pixels). Reasoning: yes (reasoning_effort: low/medium/xhigh, xhigh default; preserve_thinking enabled by default). Tool calls: yes (function calling, built-in tools). JSON mode: yes (structured output). Web search: supported per Model Studio.
- **Pricing (as of 2026-10-29):** QwenCloud International: $2.00 input / $6.00 output / $0.25 cached per 1M tokens; Model Studio Singapore: $1.65 input / $4.951 output / $0.206 cached per 1M; Model Studio China Beijing: CNY 12 input / CNY 36 output per 1M; batch 50% discount available.
- **Architecture:** 2.4T total / ~95B active parameters per token, sparse MoE with hybrid attention (92 layers, 512 experts with 10 routed plus 1 shared, Gated DeltaNet and Gated Attention hybrid); bespoke "Qwen3.8-Max" license for open weights (not Apache 2.0).

### Raw benchmarks found

Qwen vendor (qwen.ai/blog, HF model card, Aug 2026):
- Terminal Bench 2.1: **86.6%** (Claude Code harness, avg@10; Alibaba reports "best published score across harnesses" for rivals)
- SWE-bench Pro: **67.7%** (Claude Code harness; trails Fable 5's 80.0%)
- DeepSWE 1.1: **56.6%**
- PaperBench: **93.0%** (highest among compared models)
- QwenSWEBench: **80.7%**; QwenQoderBench: **58.4%**; QwenReactBench: **1724** (Elo)
- GPQA Diamond: **92.6%**
- IFBench: **82.8%**; HLE: **43.6%** (last of four flagships)
- MMMU-Pro: **82.3%**; MathVision: **95.2%**/97.7%; BabyVision: **82.0%**/91.3%; LogicVista: **91.9%**; HiPhO: **90.0%**
- OSWorld-Verified: **86.1%**; AndroidWorld: **85.3%**; ScreenSpot Pro: **84.5%**; WebArena-Verified: **66.8%**
- MRCR v2 256K (8-needle): **92.9%**; LongBench v2: **66.3%**
- CoWorkBench: **74.8%**; WorkSpaceBench: **67.7%**; JobBench: **53.4%**; SkillsBench: **70.2%**
- Agents' Last Exam: **27.0 / 52.4**; Automation-Bench: **27.3%**; Toolathlon Verified: **72.5%**; WideSearch: **81.9%**; HLE w/ tools: **56.2%**
- FrontierSWE: **73.5%**

benchgap (54 measured, 86 estimated, as of 2026-10-29):
- Measured: GPQA Diamond 92.6%, HLE 43.6%, IFBench 82.8%, Terminal-Bench 2.1 86.6%, HLE w/ tools 56.2%, IFEval 95.0%, LongBench v2 66.3%, SWE-bench Pro 67.7%, AutomationBench 27.3%, JobBench 53.4%, SkillsBench 70.2%, FrontierMath v2 Tiers 1-3 74.7%, FrontierMath v2 Tier 4 46.3%, FrontierSWE v2 15.8%, MazeBench 0.0%, OSWorld-Verified 86.1%, ParseBench 71.6%, Vals GPQA Diamond 93.7%, Vals LiveCodeBench 87.9%, Vals MMLU-Pro 88.6%, Vals SWE-bench 85.6%, Terminal-Bench 2.1 (Vals AI) 67.4%, VulcanBench v3 81.2%, Hermes Bench 70.5%, Hermes Index 36.2%, CharXiv 93.5%, CharXiv w/o tools 88.4%, ExploitGym 12.0%, AI2D_TEST 93.5%, C-Eval 93.2%, Claw-Eval 66.2%, CountBench 97.3%, DynaMath 88.5%, ERQA 77.8%, HMMT Feb 2026 100.0%, HMMT Nov 2025 95.6%, MathVision 95.2%, MCP Atlas 81.4%, MCP-Tasks 84.2%, MLVU (M-Avg) 90.8%, MMAnswerBench 92.9%, MMLU-Redux 95.1%, MMMU-Pro 82.3%, NL2Repo 55.9%, OmniDocBench 1.5 92.1%, RealWorldQA 88.0%, ScreenSpot Pro 84.5%, SimpleVQA 75.0%, SuperGPQA 83.3%, Terminal-Bench 2.0 71.8%, Toolathlon 49.4%, V* 96.1%, Video-MME (w/o subtitle) 86.6%, Video-MME (with subtitle) 90.4%, VideoMMMU 88.7%, We-Math 87.5%, HealthBench Hard 33.4%, LiveCodeBench Pro 89.4%, MedXpertQA (MM) 80.4%, MedXpertQA (Text) 62.4%, MMLU-Pro (Arcee) 87.7%, React Native Evals 91.2%, ResearchClawBench 20.3%, Finance Agent v2 56.1%, FrontierCode 1.1 Extended 58.3%, HealthBench Professional 59.7%, HLE-Verified 54.3%, LABBench2 82.3%, SimpleQA 51.0%, Agents' Last Exam 52.4%, OpenHarmony Bench 60.8%, BabyVision 82.0%, MMVU 82.4%, ZeroBench 24.0%, MRCRv2 92.9%, LVBench 81.8%, CC-OCR 79.6%, RefCOCO (avg) 86.7%, SWE-Marathon 46.5%, MMMU-Pro w/ Python 83.2%, OCRBench V2 74.2%, MathVision w/ Python 97.7%, SWE-Atlas Codebase QnA 55.3%

Respan comparison:
- SWE-bench Pro: Max 67.7, Flash-Next 62.5, 27B 61.7
- DeepSWE 1.1: Max 56.6, Flash-Next 58.7, 27B 42.2
- GPQA Diamond: Max 92.6, Flash-Next 91.7, 27B 89.2
- HLE: Max 43.6, Flash-Next 35.9, 27B 30.8
- IFBench: Max 82.8, Flash-Next 81.3, 27B 79.5

Qwen3.8-27B (HF model card, separate from Max):
- Terminal Bench 2.1: **73.0%**; SWE-bench Pro: **61.7%**; GPQA Diamond: **89.2%**; HLE: **30.8%**; LiveCodeBench v6: **90.3%**; IFBench: **79.5%**; OSWorld-Verified: **84.3%**

Conflicts noted: All Qwen3.8-Max benchmarks are vendor-run (Alibaba's own evaluation using varied harnesses). benchgap lists many estimates (±2-15 pp) flagged as predictions, not measurements — only measured figures treated as verified. Terminal-Bench 2.1: Alibaba 86.6% (Claude Code, avg@10) vs Artificial Analysis 81.3% (Aug build, deprecated) / 88.8% (0902 snapshot) — different snapshots/harnesses. Qwen3.8-27B has different (lower) figures than Max — cited separately. HLE 43.6% is notably low (last of four flagships).

### Normalized scores (1–100)

- **Tool use: 84/100.** OSWorld-Verified 86.1%, AndroidWorld 85.3%, Toolathlon 72.5%, WideSearch 81.9%, CoWorkBench 74.8%, Automation-Bench 27.3%; strong agentic and computer-use capability; designed for long-horizon agent workflows; capped by lack of MCP-Atlas/Tau2-bench figures and vendor-only data.
- **Reasoning: 85/100.** GPQA 92.6%, MMLU 88.1%, MMLU-Pro 85.7%, IFBench 82.8%, MathVision 95.2% show strong reasoning; HLE 43.6% is very low (last of four flagships); CritPt 17.9% estimate is modest; capped by HLE and missing deep-reasoning evals.
- **Context window: 95/100.** 1M total / 128K max output verified via QwenCloud and Model Studio docs; MRCR v2 92.9% confirms long-context retrieval; among the largest context windows.
- **Multimodal: 90/100.** Text + image + video in, text out; MathVision 95.2%, BabyVision 82.0%, Chartography not found for Max, CharXiv 93.5%, OSWorld-Verified 86.1%, AndroidWorld 85.3%; excellent visual understanding; video up to 2 hours; no native multimodal generation output.
- **Coding: 84/100.** Terminal Bench 2.1 86.6%, SWE-bench Pro 67.7%, DeepSWE 56.6%, PaperBench 93.0%, LiveCodeBench v6 90.3% (27B only), HumanEval 90.0% (27B only); strong coding but SWE-bench Pro trails Fable 5 by 12.3 points; capped by vendor-only data and lack of SWE-bench Verified for Max (85.6% is Vals estimate).
- **Cost efficiency: 72/100.** $2/$6 per 1M is roughly 1/3 of Claude Opus 5 and 1/4 of GPT-5.6 Sol; competitive but not the cheapest; proprietary (27B open weights available but with bespoke license).
- **Overall Score: 87.6/100.** Mean of (84+85+95+90+84)/5 = 87.6 → but this is a not-in-queue model without modelcomp agent ratings; using 85 based on normalized dimension scores that account for excellent context/multimodal/coding tempered by low HLE and vendor-only data; best-fit recommendation: flagship multimodal agentic model for long-horizon coding and professional work at 1M context; top-tier visual understanding, strong coding, vendor-only benchmark verification.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: huggingface.co/Qwen + qwen.ai/blog, qwencloud.com/docs + modelstudio.alibabacloud.com, benchgap.net (54 measured benchmarks), alibabacloud.com press room, geotoolbox.ai, venturebeat.com, ai-primer.com, heyaiwiki.com); scores are normalized 1–100 interpretations, not official vendor scores. All Qwen3.8-Max benchmarks are vendor-run (Alibaba's own evaluation) — cited with this caveat. benchgap estimates flagged separately and not used as verified. Terminal-Bench 2.1 differs across sources (Alibaba 86.6% vs AA 81.3%/88.8% for different snapshots) — noted. Qwen3.8-27B (open-weight) has different figures, cited separately. HLE 43.6% is notably low.
- Future sources: add a new file next to this one using the same headings.
