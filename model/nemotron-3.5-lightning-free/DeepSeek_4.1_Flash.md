# Nemotron 3.5 Lightning Free — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / Nemotron 3.5 Lightning Free (`opencode/nemotron-3.5-lightning-free`, NVIDIA)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free (Zen free tier of NVIDIA Nemotron 3.5 Lightning)
- **Short description:** NVIDIA's deliberately small "execution layer" model: an open 30B Mixture-of-Experts with only 3B active parameters, built for the high-volume, low-latency half of long-running agent work — tool calls, result validation and subagent delegation — rather than frontier reasoning. It pairs with a larger orchestrator model (Nemotron 3 Ultra) via NVIDIA's NeMo Switchyard routing.
- **Provider / access:** OpenCode Zen free ID (OpenAI-compatible) and NVIDIA hosted endpoints on build.nvidia.com. **Zen's privacy page marks NVIDIA free endpoints as trial use only** — no personal or confidential data, sessions logged for security and product improvement. Also available on OpenRouter and via Baseten, CoreWeave, DeepInfra, Fireworks, Nebius, Together and others.
- **Release / knowledge:** Released 2026-08-11.
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Zen free); `nvidia/nemotron-3.5-lightning-30b-a3b` (NVIDIA / OpenRouter). Weights on Hugging Face and ModelScope, including an NVFP4 checkpoint alongside BF16.
- **Context window:** 262,144 tokens (tracker history shows the vendor page oscillating between 262K and 1M before settling at 262K on 2026-08-20). Max output not published for the free ID.
- **Modalities:** text in / text out only. Tool calling ✓, reasoning ✓, open weights ✓. No image, audio or video input; structured-output mode not reported for the free ID.
- **Pricing (as of 2026-09-18):** **Free** through Zen and NVIDIA's trial endpoints; paid routes from $0.07 / 1M in and $0.20 / 1M out (cheapest credible provider, CoreWeave), from a $0.10/$0.25 list.
- **Architecture:** 30B-parameter MoE with 3B active parameters; speculative decoding with multi-token prediction baked in during pretraining, plus DSpark and DFlash draft models; NVFP4 quantized checkpoint using specialized kernels across Blackwell, Hopper and Ampere (data centre down to DGX Spark); customizable with LoRA, full SFT (NeMo Automodel / Megatron Bridge) and RL (NeMo RL / NeMo Gym). Fully open weights, data and recipes.

### Raw benchmarks found

> BenchLM re-published the Hugging Face card rows for the NVFP4 checkpoint (30B-A3B) and Artificial Analysis rows on 2026-10-06; the vendor card and independent runs agree closely.

Agent / tool use:

- PinchBench: **83.4%** (Hugging Face card via BenchLM) — NVIDIA also reports it **completes 10,000 tasks 30% faster than Qwen3.6 35B at comparable accuracy**, a speed/accuracy Pareto claim rather than a point score
- Terminal-Bench 2.1: **23.5%** (HF card via BenchLM)
- τ³-bench: **9.5%** (HF card via BenchLM)
- GDPval-AA: **865** (HF card) / **7.0%** normalized (Artificial Analysis) — both weak
- BrowseComp: **36.8%** (HF card via BenchLM)
- AA Agentic Index: **6.1%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: described by NVIDIA as defining the **accuracy-speed Pareto frontier for small open models**; the Model Beat tracker's Epoch-derived placement is the **11th percentile overall and 8th percentile on coding**
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **75.6%** (HF card via BenchLM) / **74.3%** (Artificial Analysis)
- MMLU-Pro: **81.6%** (HF card via BenchLM)
- HLE without tools: **10.5%** (HF card) / **10.6%** (Artificial Analysis) — very low, consistent with a small execution-tier model
- SciCode: **31.4%** (HF card) / **32.1%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis); MLCR: **no verified public score found**
- AA-LCR: **49.2%** (HF card via BenchLM)
- AA Intelligence Index: **12.9%**; BenchLM overall **21.9/100, rank #203 of 887**
- Omniscience Accuracy **14.4%**, Index **-17.7%**, Hallucination Rate **37.6%** (via BenchLM)
- IFBench: **72.9%** (HF card via BenchLM)

Coding:

- SWE-bench Verified: **52.8%** (HF card via BenchLM) — the first repository-level coding score found for Lightning
- SWE Multilingual: **36.5%** (HF card via BenchLM)
- SciCode: **31.4%** (HF card) / **32.1%** (AA); coding index at the 8th percentile of tracked models (Epoch AI via Model Beat); AA Coding Index **26.8%**
- SWE-bench Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: **no verified public score found**
- Efficiency claim: designed for high-volume execution with speculative decoding, so latency and cost per tool call are the actual selling points rather than raw scores

Long context:

- no MRCR/RULER/GraphWalks recall value published; AA-LCR **49.2%** is the only long-context signal. The vendor's window history moved between 262K and 1M, and BenchLM's NVFP4 card now lists **1M**, while the tracked Zen/NIM figure remains **262,144**, so recall at depth is unmeasured.

### Normalized scores (1–100)

- **Tool use: 45/100.** It exists precisely to run tool calls and validation steps fast, and NVIDIA's routing architecture treats it as such, but the newly published Terminal-Bench 2.1 23.5%, τ³ 9.5%, GDPval-AA 865 and 6.1% AA agentic index confirm capability below midpoint.
- **Reasoning: 55/100.** GPQA Diamond 74.3–75.6% and MMLU-Pro 81.6% are respectable for a 3B-active model, but HLE 10.6%, CritPt 0.0% and SciCode ~32% show how narrow the model is.
- **Context window: 72/100.** 262,144 tokens is mid-tier; the vendor's spec history oscillated between 262K and 1M and BenchLM's NVFP4 card now lists 1M, but the tracked Zen/NIM figure stays 262K and AA-LCR 49.2% is the only recall measurement.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 55/100.** SWE-bench Verified 52.8% is a genuine repository-level result for a 3B-active model, but SWE Multilingual 36.5%, SciCode ~32% and an 8th-percentile coding index still trail coding-capable peers.
- **Cost efficiency: 100/100.** Free through Zen and NVIDIA trial endpoints, with a $0.07/$0.20 paid floor and open weights for self-hosting; the free-tier trade-off is trial-only, logged usage.
- **Overall Score: 48/100.** (45 + 55 + 72 + 15 + 55) / 5 = 48.4 → **48**. Best fit: high-volume execution/validation subagents inside a routed multi-model agent system, not standalone reasoning or coding.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: public internet research (NVIDIA Nemotron 3.5 Lightning launch blog, Hugging Face NVFP4 model card and Artificial Analysis rows via BenchLM re-verified 2026-10-06, Epoch AI/Artificial Analysis figures via Model Beat, OpenCode Zen privacy page, OpenRouter/ModelScope hosting listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.