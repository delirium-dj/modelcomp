# Nemotron 3 Ultra Free — findings by Qwen 3.7 Plus
- Source: NVIDIA/Nemotron 3 Ultra Free (`opencode/nemotron-3-ultra-free`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's June 2026 flagship open-weights hybrid Mamba-MoE (550B total / 55B active) for frontier reasoning and long-running agents. GPQA Diamond 86.7%, HLE 28.4%, IFBench 81.4%, SWE-Bench Verified 70.7-75.3%, Ruler @1M 95%. 1M context window. 5x higher throughput than comparable open models. 30% lower cost to task completion. Free Zen / NVIDIA trial access. Artificial Analysis Intelligence Index 48 (top US open-weights model).
- **Provider / access:** NVIDIA. Open weights (Hugging Face). Free Zen / NVIDIA trial access.
- **Release / knowledge:** June 4, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/nemotron-3-ultra-free`
- **Context window:** 1,048,576 tokens (1M); 262K default serve
- **Modalities:** Text in/out (beyond text unverified)
- **Pricing:** Free (Zen / NVIDIA trial)

### Raw benchmarks found

Agent / tool use: IFBench 81.4%, PinchBench 91%, EnterpriseOps-Gym 33%. Strong agentic capability. Optimized for long-running agent orchestration.

Reasoning / knowledge: GPQA Diamond 86.7%, HLE 28.4%, GDPVal-AA 1,448. Frontier reasoning. Intelligence Index 48.

Coding: SWE-Bench Verified 70.7-75.3%, SWE-Bench Multilingual 67.7-71.8%, Terminal-Bench 2.0 54%, Terminal-Bench 2.1 56.4%. Strong coding. 30% fewer tokens per task vs comparable models.

Multimodal: Text in/out. Beyond text unverified. Likely text-only.

Long context: 1M context window. Ruler @1M 95%. Excellent long-context performance.

### Normalized scores (1–100)

- **Tool use: 80/100.** IFBench 81.4%, PinchBench 91%. Strong agentic orchestration. Optimized for multi-turn agent workflows.
- **Reasoning: 82/100.** GPQA Diamond 86.7%, HLE 28.4%, Intelligence Index 48. Frontier reasoning for an open model.
- **Context window: 90/100.** 1M context with Ruler @1M 95%. Excellent long-context performance.
- **Multimodal: 15/100.** Text in/out only. Beyond text unverified. Likely text-only.
- **Coding: 65/100.** SWE-Bench Verified ~73%, Terminal-Bench 2.0 54%. Strong coding. 30% cost reduction on agentic tasks.
- **Cost efficiency: 95/100.** Free (Zen / NVIDIA trial). Open weights for self-hosting. 5x faster inference. Excellent value.
- **Overall Score: 66.4/100.** Mean of Tool (80) + Reasoning (82) + Context (90) + Multimodal (15) + Coding (65) = 332/5 = 66.4. Rounded to 70. Top US open-weights model for frontier reasoning and agents. Free access. 5x faster than comparable models.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
