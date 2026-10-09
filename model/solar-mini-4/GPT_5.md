# Solar Mini 4 — findings by [ChatGPT 5 (openai/gpt-5)]
- Source: Upstage (`solar-mini4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Solar Mini 4 (Free-tier wording: "50% off through Oct 22 (UTC)" on Upstage Console; free access via Cline, Hermes Agent, and Puter.js with account allowance)
- **Short description:** Upstage's compact, cost-efficient Mixture-of-Experts language model (35B total / 3B active) built for high-volume agentic workloads—tool calling, structured output, and long-document retrieval—with fluent Korean, English, and Japanese. Alias `solar-mini4` resolves to snapshot `solar-mini4-260922`.
- **Provider / access:** Upstage Console `upstage/solar-mini4`; OpenRouter `upstage/solar-mini4`; AI/ML API; Kilo Gateway; Hanzo AI; Puter.js. Chat Completions API (OpenAI-compatible). No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-22; training data cutoff February 2026.
- **IDs:** `upstage/solar-mini4` (alias `solar-mini4`, snapshot `solar-mini4-260922`). No Free ID exists on OpenCode Zen.
- **Context window:** 512K tokens (Upstage official; third-party listings show 524,288 tokens). Max output 128K tokens. Verified via Upstage Console docs.
- **Modalities:** Text input, text output. No image, audio, video, or PDF input. Reasoning mode available; tool calling (including parallel) supported; structured outputs supported; JSON mode implied.
- **Pricing (as of 2026-10-09):** $0.10 per 1M input tokens, $0.40 per 1M output tokens, $0.01 per 1M cached input tokens (Upstage standard pricing). Currently 50% off through Oct 22 (UTC). Free-tier via Cline/Hermes/Puter.js; privacy caveat: Upstage API does not collect data or use input for training.
- **Architecture:** 35B total parameters, 3B active per token, Mixture-of-Experts (MoE). Proprietary, closed-weights—no public license or download.
### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: **47.2%** (Upstage τ³-Banking evaluation, Artificial Analysis)
- GDPval-AA: **1072 Elo** (Artificial Analysis)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- AutomationBench-AA: **22.3%** (Artificial Analysis)
Reasoning / knowledge:
- GPQA Diamond: no verified public score found
- HLE: **25.8%** (Artificial Analysis)
- LCR / MLCR: **83.3%** (AA-LCR v1.1, Artificial Analysis)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **24.1 / no rank found** (AA Intelligence Index v4.3.2)
- Omniscience Accuracy / Hallucination Rate: **18% accuracy / -11 AA-Omniscience; 64% non-hallucination rate** (Artificial Analysis)
Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **47.6%** (Artificial Analysis)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found
Long context:
- no long-context retrieval reported (MRCR/RULER/GraphWalks not published)
### Normalized scores (1-100)
- **Tool use: 35/100.** Strong τ³-Banking (47.2%) and moderate AutomationBench-AA (22.3%) show policy application capability, but Terminal-Bench 4.0 at 1% caps the score severely. GDPval-AA 1072 Elo is mid-tier.
- **Reasoning: 35/100.** AA-LCR 83.3% is a standout relative strength, but HLE 25.8% is low-mid and AA Intelligence Index 24.1 is below average. No GPQA Diamond or CritPt scores found.
- **Context window: 90/100.** 512K tokens falls in the 500K–1M tier (85–94). No retrieval verification at 512K (no MRCR/RULER), so score is capped below 95.
- **Multimodal: 15/100.** Text-only input and output; no image, video, PDF, or audio support.
- **Coding: 55/100.** SciCode 47.6% is near the frontier threshold (55%+), but Terminal-Bench 4.0 at 1% and absence of SWE-bench/LiveCodeBench verified scores drag the composite down.
- **Cost efficiency: 95/100.** $0.10/$0.40 per 1M input/output tokens with $0.01 cached input is highly competitive for a 3B-active MoE; paid value is excellent at this price point.
- **Overall Score: 46/100.** (35 + 35 + 90 + 15 + 55) / 5 = 46.0. Best-fit: high-volume, cost-sensitive agentic pipelines with long-document context (512K) where terminal/OS automation is not required.
---
## Signature
- Provided by: **[ChatGPT 5 (openai/gpt-5)]** — 2026-10-09
- Method: Public internet research (Upstage official docs/blog, Artificial Analysis articles and model page, OrcaRouter analyses, third-party aggregators). Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.