# Nemotron 3 Ultra Free — findings by Muse Spark 1.2

- Source: NVIDIA/Nemotron 3 Ultra Free (`nvidia/nemotron-3-ultra-550b-a55b:free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's flagship open-weights hybrid Mamba-MoE (550B total / 55B active) for frontier reasoning and long-running agentic tasks — 1M context, high throughput (5.9× vs GLM-5.1), low hallucination, open-weights Apache.
- **Provider / access:** NVIDIA NIM `nvidia/nemotron-3-ultra-550b-a55b` (BF16 and NVFP4 quantized), HuggingFace `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4`, OpenCode Zen free (`opencode/nemotron-3-ultra-free`), free via NVIDIA trial. Chat/Completions with tool calling.
- **Release / knowledge:** 2026-06-04 (research.nvidia.com), HuggingFace 2026-09-11; knowledge cutoff undisclosed (pre-trained on 20T tokens, NVFP4)
- **IDs:** `nvidia/nemotron-3-ultra-550b-a55b:free`, `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4` (Free tier exists via Zen/NVIDIA)
- **Context window:** 1,000,000 (1M) with RULER 94.7% at 1M — verified via NVIDIA model card and HuggingFace README; default serve 262K for free tier but native 1M extendable
- **Modalities:** text in; text out (image/audio/video not verified for Ultra Free — curated meta lists Text in/out); reasoning yes (reasoning budget control); tool calls yes (TauBench, Terminal, BrowseComp); JSON mode via Nemo
- **Pricing (as of 2026-06-04):** Free via OpenCode Zen and NVIDIA trial (rate-limited); no paid per-token listed — free-tier pricingNote. Open-weights self-host via HF.
- **Architecture:** MoE hybrid Mamba-Attention 550B total / 55B active, LatentMoE, Multi-Token Prediction (MTP), NVFP4 pre-training (20T tokens: 15T diversity + 5T high-quality), Transformer-Mamba MoE (prefill/throughput optimized), BF16/NVFP4 quantized

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** BF16 (53.9% NVFP4) (NVIDIA HuggingFace 2026-09-11; vs GLM-5.1 59.3%, Kimi K2.6 67.2% — competitive)
- GDPval: **46.7** (BF16) / 47.9 (NVFP4) raw scale or **29.5% normalized** on Artificial Analysis sheet (field leader ~54.7)
- TauBench v3: **70.9% average** BF16 (Airline 81.5%, Retail 86.4%, Telecom 92.9%, Banking 22.6%) / 70.3% NVFP4 (NVIDIA card); Banking 22.6% highlights weak financial domain
- TauBench detail: Telecom 92.9% is strong; Banking 22.6% caps finance tasks
- BrowseComp (with search): **44.4%** BF16 (41.4% NVFP4)
- ProfBench (Search): **56.0%** BF16 (56.4% NVFP4)
- PinchBench: **90.0%** BF16 (89.8% NVFP4)
- Toolathon / MCP-Atlas / SWE Atlas: **no verified public score found** beyond these agent proxies
- Vals.ai Financial Agent 1.1: **60.1%** without search, **53.7%** with search (NVIDIA HuggingFace comparison table)

Reasoning / knowledge:

- GPQA (no tools): **87.0%** BF16 / 87.9% NVFP4 (NVIDIA card); Artificial Analysis GPQA Diamond **86.7%** reasoning mode (vs 91.0% Kimi K2.6)
- HLE (no tools): **26.7%** BF16 / 26.1% NVFP4 (NVIDIA card); with tools **37.4%** BF16 (AA HLE 28.4% reasoning mode / 70.3% non-hallucination)
- CritPt (no tools): **3.1%** BF16 / 3.4% NVFP4 (NVIDIA card; AA CritPt 3.1%)
- SciCode (subtask): **44.6%** BF16 / 43.5% NVFP4 (NVIDIA card; AA SciCode 40.3%)
- IOI 2025: **570.0** BF16 / 564.7 NVFP4
- IMOAnswerBench: **88.6%** no-tools, **92.3%** with tools BF16 (NVIDIA comparison)
- Apex-Shortlist: **74.9%** no-tools, **84.8%** with tools BF16
- MMLU-Pro: **86.8%** BF16 (vs GLM-4.5 89.08)
- Artificial Analysis Intelligence Index: **23.4** reasoning mode (vs GLM-5.1 higher)
- Omniscience: **24.1% accuracy, 78.7% non-hallucination** BF16 (strong low-hallucination vs 2.8% for DS-v4-Flash in table) / AA 22.6% acc / 70.3% non-hall  reasoning mode

Coding:

- SWE-bench Verified: **70.7%** BF16 / 69.5% NVFP4? Actually table shows 70.7 BF16; updated table 71.9 /69.7 variant (NVIDIA HuggingFace comparison: 70.7 BF16 vs Kimi 75.7, GLM 76.2)
- SWE-bench Multilingual: **67.7%** BF16 / 65.8% NVFP4 / 69.1% NVFP4 in later table
- LiveCodeBench v6: **89.0%** BF16 (vs DeepSeek 92.5%, Kimi 90.2, GLM 85.7 — top-tier coding)
- IFBench (prompt loose): **81.7%** BF16 / 82.3% NVFP4 (AA IFBench 81.4% reasoning)
- SciCode: **44.6%** as above (code-adjacent science)
- Vibe Code Bench / DeepSWE: **no verified public score found** beyond LiveCodeBench/SWE

Long context:

- AA-LCR: **65.4%** BF16 / 65.5% NVFP4 (NVIDIA card; AA 79.3% reasoning mode on OpenRouter sheet)
- RULER 1M: **94.7%** BF16 / 94.0% NVFP4 (NVIDIA card; top long-context — vs 90.1% Qwen-3.5, 94.2% DS-v4-Pro) — verified via Nemo Evaluator SDK
- LongBench v2 (≤1M): **61.9%** BF16 (vs 68.9% Qwen-3.5)

### Normalized scores (1–100)

- **Tool use: 77/100.** Terminal-Bench 56.4%, TauBench v3 avg 70.9% (Telecom 92.9%), ProfBench 56% and PinchBench 90% show solid agentic tool use with Mamba-throughput advantage; capped below 85 by Banking 22.6% and GDPval ~46.7 lagging frontier ~54.
- **Reasoning: 76/100.** GPQA 87%, HLE 26.7% (37.4% with tools), Apex 74.9–84.8%, IMO 88.6% and AA Index 23.4 map to mid-strong reasoning; CritPt 3.1% and Omniscience 24.1% cap below 85 frontier.
- **Context window: 96/100.** 1M verified with RULER 94.7% at 1M — top measured long-context (better than DS-v4-Flash 87.7%, Qwen 90.1%); AA-LCR 65–79% corroborates; only capped below 100 by not-quite-perfect 94.7 vs 100.
- **Multimodal: 15/100.** Text in/out per curated meta (beyond text unverified) — text-only anchor; no image/audio/video input makes it text-only baseline.
- **Coding: 83/100.** LiveCodeBench 89.0% with SWE-bench Verified 70.7–71.9% and SWE Multilingual 67.7% plus IFBench 81.7% support strong coding; capped below 90 by SciCode 44.6% vs frontier 50+ and sub-75 SWE vs GLM 76.2.
- **Cost efficiency: 98/100.** Free via OpenCode Zen / NVIDIA trial with open-weights MIT self-host — frontier reasoning at $0 cost; capped only by rate limits vs unlimited free.
- **Overall Score: 69/100.** Mean of the five non-cost dims (77+76+96+15+83)/5 = 69.4 → 69; best-fit as free frontier 1M reasoning/coding pick for long-running agents where throughput and low hallucination matter — multimodal tasks need separate vision model.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (NVIDIA build.nvidia.com model card, research.nvidia.com 2026-06-04, HuggingFace nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B, OpenRouter benchmarks, HuggingFace README comparison table, Nemo Evaluator SDK); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
