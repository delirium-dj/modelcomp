# Kimi K3 — findings by Big Pickle

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** The world's largest open-weight model (2.8T total params, 104B active), Moonshot AI's July 2026 flagship due to its own claim. Billed as "the model for agents": long-horizon coding, terminal use, tool use, screenshot/visual understanding, and multi-step knowledge work; trails only Claude Fable 5 and GPT-5.6 Sol overall per Moonshot.
- **Provider / access:** Moonshot API (`kimi-k3`) and Kimi products; OpenRouter (`moonshotai/kimi-k3`); NVIDIA NIM; weights on Hugging Face (released 2026-07-27, `Kimi-K3`).
- **Release / knowledge:** Hosted launch 2026-07-16; weights released 2026-07-27 under the Kimi K3 License (non-commercial per Epoch AI note).
- **IDs:** `kimi-k3` (Moonshot API); model alias `k3` in Kimi Code.
- **Context window:** 1,048,576 total (confirmed by Moonshot/Cloudflare docs); max output 944K (00 models card) — giant output headroom.
- **Modalities:** text + native visual understanding (image, video) input; text output; optional reasoning (effort max/high/low, max default); tools yes.
- **Pricing (as of 2026-09-20):** $3 / $15 per 1M (cache-miss in / out); $0.30 cache-hit input (whatllm.org, OpenRouter). Self-hostable at infra cost.
- **Architecture:** 2.8T sparse MoE, 896 experts, 16 active per token (104B active); Kimi Delta Attention (KDA) linear-attention hybrid + Attention Residuals + Stable LatentMoE; MXFP4 weights / MXFP8 activations.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot launch eval, vendor harness — behind GPT-5.6 Sol 88.8%, ahead of Fable 5 84.6%)
- GDPval-AA v2: **1,668 Elo** (launch eval; Fable 5 1,760, Sol 1,748)
- BrowseComp: **91.2%** (launch eval)
- MCP Atlas: **84.2%** (launch eval)
- Agentic Index (AA, independent): **50.1 (97th pct)** (OpenRouter/AA feed)
- SWE Marathon: **42.0%** (launch eval)
- FrontierSWE: **81.2%** (NVIDIA NIM partner-reported)
- Tau3 / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (launch; independent OpenRouter/AA 93.1% ±1.5 / 93.5%)
- HLE Full: **43.5%** (launch; trails Fable 5's 53.3%)
- AIME: **97.2% ±1.1** (Epoch)
- AA-LCR: **74.7%** (long-context reasoning, NVIDIA/OpenRouter)
- GDPval-AA: 58.4% (k3kimi card)
- SimpleQA: **50.6% ±1.6** (Epoch)
- Omniscience accuracy / non-hallucination: **46.0% / 49.1%** (k3kimi card)
- AI Intelligence Index (AA, independent): **57.1–57** (OpenRouter/AA feed)

Coding:

- Coding Index (AA, independent): **76.2 (95th pct)** (OpenRouter/AA)
- DeepSWE: **67.5%** (launch; Sol 73.0, Fable 5 70.0)
- Program Bench: **77.8%** (launch; top of the set)
- MCP Atlas / Terminal set: strong at 88.3 Terminal-Bench 2.1
- SciCode: **58.7%** (k3kimi card)
- Arena frontend coding: debuted **#1 with 1,679 Elo**, ahead of Fable 5 (Arena.ai; independent)
- SWE-bench Verified: **no clean verified public score found** — Superconductor custom SWE-Bench rates it ~80% (Opus 4.8-class) at ~1/4 the cost per ticket; slowest agent (~44 min/ticket).

Long context:

- AA-LCR: **74.7%**; 1M window with KDA for fast million-token decode (~6.3× faster per Moonshot); MRCR / RULER: **no verified public score found**

Multimodal:

- MMMU-Pro (no/with tools): **81.6 / 83.4**; MathVision (no/with tools): **94.3 / 97.8**; MMVU: **82.1**; BabyVision (Python): **85.7**; OmniDocBench: **91.1** (all partner/launch-reported, NVIDIA NIM)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 88.3%, MCP Atlas 84.2%, and BrowseComp 91.2% are top-tier agentic results; GDPval-AA 1,668 Elo trails Fable 5/Sol, capping it just below the absolute best.
- **Reasoning: 86/100.** GPQA Diamond 93.5% and AIME 97.2% are elite; HLE 43.5% and mid hallucination numbers show it trails the best closed models on hard expert reasoning.
- **Context window: 90/100.** 1M window with 74.7 AA-LCR and huge 944K max output — among the strongest long-context specs; independent MRCR still awaited.
- **Multimodal: 84/100.** Native image/video with strong MMMU-Pro (81.6) and MathVision (97.8 with tools) results; no audio listed.
- **Coding: 85/100.** Coding Index 76.2 (95th pct) and DeepSWE 67.5% plus Arena frontend #1; SWE-bench maintained by ~80% custom-bench quality and slow latency (44 min/ticket), which caps it.
- **Cost efficiency: 78/100.** $3/$15 with $0.30 cache-hit and self-hosting is fair open-class pricing for the capability; the pace-of-work cost (very slow) erodes value.
- **Overall Score: 86/100.** Mean of the five quality dims (86+86+90+84+85)/5 = 86.2 → 86. The strongest open-weight agentic option of July 2026 — superb for heavy multi-step and visual-agent work when latency budget permits.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (Moonshot launch eval, OpenRouter/Artificial Analysis feed, WhatLLM, NVIDIA NIM docs, TNW, Superconductor, k3kimi); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.