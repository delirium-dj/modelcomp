# Nemotron 3 Ultra Free — findings by DeepSeek 4.1 Flash

- Source: OpenCode Zen / Nemotron 3 Ultra Free (`opencode/nemotron-3-ultra-free`, NVIDIA)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free (Zen free tier of NVIDIA Nemotron 3 Ultra)
- **Short description:** NVIDIA's 550B-parameter Mixture-of-Experts orchestrator model (55B active) for frontier reasoning and orchestration inside long-running agentic systems. It is designed as the "system of models" component for planning and hard calls, paired with a smaller execution model, and it claims 5× higher throughput than comparable open models while cutting cost-to-task by up to 30% via fewer tokens per turn.
- **Provider / access:** OpenCode Zen free ID (OpenAI-compatible) and NVIDIA's hosted endpoints on build.nvidia.com. **Zen's privacy page marks the NVIDIA free endpoints as trial use only** — do not submit personal or confidential data; sessions are logged for security and product improvement, though not linked to your identity. A third-party tracker flags the Zen record as a derivative/community packaging rather than an official vendor release.
- **Release / knowledge:** Released 2026-06-04; training material refreshed through 2025-09-30 (GitHub tokens) plus later synthesized data.
- **IDs:** `opencode/nemotron-3-ultra-free` (Zen free); NVIDIA model id `nvidia/nemotron-3-ultra-550b-a55b` (weights on Hugging Face, also on OpenRouter).
- **Context window:** 1,000,000 tokens with a 128,000-token max output on the Zen free tier (tracker-verified). NVIDIA advertises Ruler results at 1M context length without publishing the numeric value.
- **Modalities:** text in / text out only. Tool calling ✓, reasoning ✓, open weights ✓, temperature control ✓; structured-output/JSON mode is **not reported** for the free ID. No image, audio or video input.
- **Pricing (as of 2026-09-18):** **Free** through Zen and free/trial on NVIDIA's endpoints; no per-token price is published for the Zen ID. Paid routes exist via OpenRouter and third-party hosts; weights are open for self-hosting.
- **Architecture:** 550B-parameter MoE with 55B active; hybrid Mamba-Transformer design, NVFP4 precision running on Hopper, Blackwell and Ampere GPUs, LatentMoE expert routing, multi-token prediction to cut generation time, and Multi-Teacher On-Policy Distillation across 10+ specialized teachers.

### Raw benchmarks found

> NVIDIA's launch blog reports these head-to-head values against GLM-5.1 (744B),
> Kimi K2.6 (1T) and Qwen3.5 (397B); tracker figures come from Epoch AI.

Agent / tool use:

- PinchBench (agent productivity / long-running tasks): **91%** (NVIDIA; GLM-5.1 84%, Kimi K2.6 91%, Qwen3.5 89%)
- Terminal-Bench 2.0: **54%** (NVIDIA; GLM-5.1 64%, Kimi K2.6 67%, Qwen3.5 53%)
- EnterpriseOps-Gym (long-horizon planning): **33%** (NVIDIA; GLM-5.1 40%, Kimi K2.6 29%, Qwen3.5 30%)
- GDPval-AA: **1,448** (NVIDIA; GLM-5.1 1,594, Kimi K2.6 1,508, Qwen3.5 1,192)
- ProfBench (Search): **56%** (NVIDIA; GLM-5.1 46%, Kimi K2.6 56%)
- IFBench (instruction following): **82%** (NVIDIA; GLM-5.1 77%, Kimi K2.6 74%, Qwen3.5 78%)
- APEX multi-step agentic: **11.5%** (Epoch AI via Model Beat) — the weakest agentic signal found
- Tau3-Banking / Tau2-Bench, Claw-Eval / ClawProBench, Toolathon / MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **85.4%** (Epoch AI via Model Beat)
- AIME 2024/2025: **86.7%**; WeirdML: **43.5%** (Epoch AI via Model Beat)
- Ruler at 1M context: claimed as leading by NVIDIA, **no numeric value published**
- HLE / CritPt / LCR / MLCR: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: tracker places it at the **28th percentile** overall and **16th percentile** on agentic
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Terminal-Bench 2.0 (closest published coding-agent proxy): **54%** (NVIDIA)
- SWE-bench: NVIDIA claims up to 30% lower cost-to-task from fewer tokens on SWE-bench, but **no SWE-bench score is published for Ultra**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found**
- Throughput claim: **5× higher than comparable open models** (NVIDIA)

Long context:

- NVIDIA claims leading Ruler accuracy **at 1M context length** but publishes no value; no third-party MRCR/RULER number found, so the 1M window is vendor-claimed.

### Normalized scores (1–100)

- **Tool use: 78/100.** PinchBench 91% (matching Kimi K2.6) and GDPval-AA 1448 with 5× throughput back a serious orchestrator claim, but Terminal-Bench 2.0 at 54% trails GLM-5.1/Kimi, EnterpriseOps-Gym is 33% and APEX 11.5% is weak.
- **Reasoning: 80/100.** GPQA Diamond 85.4%, AIME 86.7% and IFBench 82% are strong; HLE and CritPt are unpublished and the tracker's 28th-percentile composite is modest.
- **Context window: 90/100.** 1M tokens with a 128K output ceiling and a claimed-but-unpublished Ruler result at full depth; no third-party recall measurement keeps it below the top tier.
- **Multimodal: 15/100.** Text-in/text-out only — no image, audio, video or PDF input.
- **Coding: 70/100.** Terminal-Bench 2.0 at 54% is mid-pack and the token-efficiency story on SWE-bench is compelling, but no SWE-bench score exists for this model.
- **Cost efficiency: 100/100.** Free through Zen and NVIDIA trial endpoints with open weights for self-hosting; the price is logged trial usage and a no-confidential-data restriction.
- **Overall Score: 67/100.** (78 + 80 + 90 + 15 + 70 + 100) / 6 = 72.2 → **72**. Best fit: free orchestration/planning calls inside a routed agent system, with a smaller execution model handling high-volume steps.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-18
- Method: public internet research (NVIDIA Nemotron 3 Ultra launch blog, Epoch AI figures via Model Beat, modelcompare.dev Zen record, OpenCode Zen privacy page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.