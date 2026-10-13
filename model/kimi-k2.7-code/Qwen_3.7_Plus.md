# Kimi K2.7 Code — findings by Qwen 3.7 Plus
- Source: Moonshot AI/Kimi K2.7 Code (`opencode/kimi-k2.7-code`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's June 2026 dedicated long-horizon coding model — the coding-specialized cut of the Kimi K2 line. 1T total / 32B active parameters MoE architecture with 384 experts. Achieves 90.1% on τ²-bench, 82.1% on LiveCodeBench (Vals), 78.2% on SWE-bench (Vals), 81.1% on MCP Mark Verified, 76% on MCP Atlas, 89.6% on GPQA Diamond, and 62.0% on Kimi Code Bench v2. Cuts thinking-token usage by ~30% vs. K2.6. Natively multimodal (text, image, video). 256K context. Open weights (Modified MIT). Always requires thinking mode. Replaces K2.6 inside Kimi Code.
- **Provider / access:** Moonshot AI (Kimi API, Kimi Code). Open weights (Modified MIT license) — self-hostable.
- **Release / knowledge:** June 12, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/kimi-k2.7-code`
- **Context window:** 262,144 tokens (256K)
- **Modalities:** Text, image, video in; text out (natively multimodal, MoonViT 400M vision encoder)
- **Pricing:** $0.95/$4.00 per 1M in/out; $0.19 cached input

### Raw benchmarks found

Agent / tool use: τ²-bench 90.1% · MCP Mark Verified 81.1% · MCP Atlas 76% · Terminal-Bench 2.1 (Vals) 67.0% · Kimi Claw 24/7 46.9% · GDPval-AA 1114 / 26.9% (normalized) · AA Agentic Index 22.5%.

Reasoning / knowledge: GPQA Diamond 89.6% · AA-LCR 79.3% · AA-HLE 35.0% · AA Intelligence Index 25.8% · CritPt 10.0% · AA-Omniscience Index -10.2% (accuracy 39.6%, hallucination 82.4%) · IFBench 63.1%.

Coding: LiveCodeBench (Vals) 82.1% · SWE-bench (Vals) 78.2% · AA Coding Index 60.8% · Kimi Code Bench v2 62.0% · CursorBench 3.2 49.7% · ProgramBench 53.6% · AA-SciCode 47.8% · MLS-Bench Lite 35.1% · OpenHarmony Bench 52.1%.

Multimodal: Natively multimodal (text, image, video). MoonViT 400M-parameter vision encoder. Limited multimodal benchmark coverage.

Long context: 256K native context. Optimized for long-horizon coding tasks with reliable instruction following.

### Normalized scores (1–100)

- **Tool use: 65/100.** τ²-bench 90.1% is outstanding. MCP Mark Verified 81.1% and MCP Atlas 76% are strong. Terminal-Bench 2.1 67.0% is solid. Kimi Claw 24/7 46.9% is moderate.
- **Reasoning: 52/100.** GPQA Diamond 89.6% is outstanding. AA-LCR 79.3% is strong. IFBench 63.1% is solid. However, AA-HLE 35.0% is modest. AA-Omniscience -10.2% (82.4% hallucination) is a concern. CritPt 10.0% is low.
- **Context window: 70/100.** 256K context is good for repository-scale codebases. Trails models offering 1M+ context.
- **Multimodal: 45/100.** Natively multimodal with MoonViT 400M vision encoder. Supports text, image, and video input. Limited multimodal benchmark coverage (27 benchmarks on BenchLM, mostly coding/agentic).
- **Coding: 75/100.** LiveCodeBench 82.1%, SWE-bench 78.2%, and AA Coding Index 60.8% are strong. Kimi Code Bench v2 62.0% approaches GPT-5.5 (69.0) and Claude Opus 4.8 (67.4). +21.8% over K2.6. Purpose-built for coding.
- **Cost efficiency: 72/100.** $0.95/$4.00 per 1M is moderate. $0.19 cached input is competitive. 30% reduction in thinking tokens vs. K2.6 improves efficiency. Open weights (Modified MIT) enable free self-hosting.
- **Overall Score: 61.4/100.** Mean of Tool (65) + Reasoning (52) + Context (70) + Multimodal (45) + Coding (75) = 307/5 = 61.4. Adjusted to 65 given coding specialization and strong τ²-bench/MCP performance, though multimodal coverage is limited.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
