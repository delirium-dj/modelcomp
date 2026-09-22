# Qwen3.8 Max — findings by Big Pickle

- Source: Alibaba Qwen Team (`qwen3-8-max`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max
- **Short description:** Alibaba's largest and most capable flagship — a 2.4T total / 95B active open-weight MoE (first Max-tier Qwen to open weights) with hybrid attention, a 1M token window, and standout agentic-coding and multimodal gains. Ranks 5th in Text Arena, 2nd in Vision Arena.
- **Provider / access:** QwenCloud Model Studio / DashScope (`qwen3.8-max`, OpenAI- and Anthropic-compatible APIs), QwenWork agent platform; open weights `Qwen3.8-2.4T-A95B` on Hugging Face / ModelScope (Apache 2.0, 2026-08-12/13). Self-hostable.
- **Release / knowledge:** Announced 2026-08-03; GA API ~Aug 2026; weights 2026-08-12/13.
- **IDs:** `qwen3.8-max` (QwenCloud, llm-stats, anotherwrapper); OSS checkpoint `Qwen3.8-2.4T-A95B`.
- **Context window:** 1,000,000 tokens (Alibaba announcement, benchgen); llm-stats lists 256K input / 131,072 output — specs vary by channel.
- **Modalities:** Multimodal — text, image, video/document/livestream understanding (100-hour livestreams, kid documents); text output; tool use with system-level autonomous planning; reasoning variants.
- **Pricing:** ~$1.65–$2.00 in / $4.95–$6.00 out per 1M API (llm-stats/anotherwrapper); open weights for near-cost self-hosting.
- **Architecture:** Sparse MoE (2.4T total, 95B active) on the Qwen 3.5 foundation with hybrid attention (Sparse MoE + linear/hybrid interplay) for scale-vs-efficiency balance.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (launch) — best-in-class among launch-set long-horizon terminal agents.
- OSWorld-Verified: 86.1; PaperBench: 93.0; parametric CAD reasoning: 91.5 (launch material, via tech-insider).
- IFBench: **82.8%** (launch — strongest instruction-following among compared set).
- Qwen Swe Bench: **80.7% (#1 Qwen-family)** (anotherwrapper, 2026-08-26).
- LLM Stats Agents index 37.3 (#11/19 evals); beats Flash-Next on AndroidWorld, CoWorkBench, Agents' Last Exam, NL2Repo, Vision2Web (llm-stats, Sep 2026).
- GDPval-AA / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (launch) — frontier-tier.
- HLE: **43.6%** (launch; behind Claude Opus 4.8 53.3%).
- MMLU Pro: #60/138 (Vals, on the older Qwen3 Max Thinking model — not this release).
- LLM Stats Reasoning index 50.8 (#10/19 evals).

Coding:

- SWE-bench Pro: **67.7%** (launch) — beats GPT-5.6 Sol's 64.6 but trails Claude frontier 80.0-80.3 (qcode.cc board).
- DeepSWE 1.1: **56.6%** (launch).
- LLM Stats Coding index 39.7 (#13/9 evals); LiveCodeBench v6 and GPQA won vs Qwen3.8-Flash-Next (llm-stats).
- Arena frontend coding: ranks #5 Text / #2 Vision (Alibaba announcement) — implied strong coding arena signal.

Long context:

- Advertised 1M window (Alibaba) for hundred-page documents / full TV series; LLM Stats Long context index 29.5 (#4/4 evals); MRCR v2 (8-needle) lost to Muse Spark 1.3 (llm-stats head-to-head).

Multimodal:

- Vision Arena **#2** (Alibaba; second only to Spark-family per their charting); WWW2025 Multimodal Dialogue Intent Recognition winner (ahead of 458 human teams); image/video input acceptance verified.

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 86.6% and OSWorld 86.1 are elite agentic results; DeepSWE 56.6% and missing GDPval evidence cap it just below the very top.
- **Reasoning: 88/100.** GPQA 92.6% is frontier; HLE 43.6% trails Opus 4.8-class by ~10 pts.
- **Context window: 86/100.** 1M advertised window and strong long-doc/video ingest; long-context retrieval evals (MRCR v2) still show gaps vs R1-class peers.
- **Multimodal: 87/100.** Vision Arena #2 plus top-two multimodal arena standing make it one of the strongest vision-capable open models; no audio verified.
- **Coding: 84/100.** SWE-bench Pro 67.7% beats GPT-5.6 Sol and every prior open-weight model; still below Claude frontier tier on SWE-bench Pro.
- **Cost efficiency: 86/100.** Sub-$2/$5 API plus Apache-2.0 weights — first Max-tier model you can fully self-host; excellent value at this capability level.
- **Overall Score: 86/100.** Mean of the five quality dims (86+88+86+87+84)/5 = 86.2 → 86. The best open-weight frontier-value pick of Aug 2026 — near-closed-model agentic ability at open-source cost, with the first-ever Max-scale open weights.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (Alibaba press release, benchgen, llm-stats head-to-heads, anotherwrapper Qwen Swe Bench, tech-insider cross-eval); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.