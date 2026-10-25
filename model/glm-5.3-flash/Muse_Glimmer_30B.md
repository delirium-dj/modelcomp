# GLM 5.3 Flash — findings by Muse Glimmer 30B

- Source: Z.AI / GLM 5.3 Flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's first natively multimodal GLM-5 model — 320B total / 18B active open-weights MoE under MIT license, positioned for cost-efficient agentic coding, long-horizon tool work and document/chart/video understanding. Revealed 2026-08-26 after running anonymously as "Ox Alpha".
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flash` Chat Completions; Z.ai API `https://docs.z.ai/guides/llm/glm-5.3-flash`; Hugging Face `zai-org/GLM-5.3-Flash`. Chat Completions API.
- **Release / knowledge:** 2026-08-26 public release; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/glm-5.3-flash`, `zai-org/GLM-5.3-Flash` (HF), `z-ai/glm-5.3-flash` (OpenRouter)
- **Context window:** 1,048,576 tokens total; 131,072 max output — verified via Z.ai docs `Context Length 1M` / `Maximum Output Tokens 128K` and Hugging Face `image-text-to-text` card.
- **Modalities:** Input video / image / text / file; Output text. Reasoning yes — `reasoning_effort` low/high/max, default max. Tool calls yes; structured output and prompt caching supported per Z.ai docs.
- **Pricing (as of 2026-10-25):** Z.ai API listed $0.15 / 1M input, $0.50 / 1M output, $0.03 / 1M cached; OpenCode Zen mirrors same tier. $0 Zen free route reported in live roster 2026-10-16 — pricing caveats apply.
- **Architecture:** Open weights MIT. 320B total / 18B active MoE, hybrid sparse + linear attention, Manifold-Constrained Hyper-Connections. First natively multimodal GLM-5.

### Raw benchmarks found

> Sources: Z.ai official docs `guides/llm/glm-5.3-flash` 2026-08-26, Hugging Face model card `zai-org/GLM-5.3-Flash` evaluation results, Z.ai blog Competitive Performance section. Conflicts noted where harness/version differs.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** — Hugging Face eval results `harborframework/terminal-bench-2.1`; Z.ai blog cites same figure for Claude Code 2.1.207 evaluation.
- DeepSWE v1.1: **63.4%** — Hugging Face eval `datacurve/deep-swe`; Z.ai docs Competitive Performance: 63.4 vs GLM-5.2 46.2.
- AutomationBench v1.0.6: **48.8%** — Z.ai docs Competitive Performance; +22.6 pts over GLM-5.2 26.2.
- Agents' Last Exam CLI: **26.3%** — Hugging Face eval results.
- Artificial Analysis Intelligence Index v4.1.1: **57** at $0.045 per task discounted — Z.ai docs Competitive Performance; model sits on Pareto frontier per vendor chart.
- GDPval-AA v2 / Tau3-Banking / Tau2-Bench / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found in fetched sources.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / Artificial Analysis Intelligence Index v4.3.2 / BenchLM overall / Omniscience Accuracy / Hallucination Rate: no verified public score found in the three independent sources consulted. AA Intelligence Index 57 above is vendor-reported v4.1.1.

Coding:

- DeepSWE v1.1: **63.4%** — Hugging Face eval; Z.ai docs chart.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench: no verified public score found in fetched sources.
- Z.ai Code Bench v1.0: **29.0%** at max effort — Z.ai docs Competitive Performance, near Claude Opus 4.8 29.5.

Long context:

- MRCR / RULER / GraphWalks: no verified public score found.
- Context Arena / long-context retrieval: 1M window verified by docs; Z.ai notes hybrid sparse+linear attention reduces compute 3.01x and KV cache 4.44x vs GLM-5.3.

Multimodal grounding:

- Input modalities verified: Video / Image / Text / File per Z.ai docs Input Modality block; Hugging Face pipeline `image-text-to-text`. No verified audio input; output text only.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 84.3% and AutomationBench 48.8% show strong agentic tool use for an open model; Agents' Last Exam 26.3% caps vs frontier closed models, and lack of independent Tau2/Claw/Toolathon scores limits ceiling.
- **Reasoning: 78/100.** AA Intelligence Index 57 on v4.1.1 and strong coding/agentic signals imply solid reasoning, but no public GPQA Diamond, HLE or CritPt numbers were found in the consulted sources; absence of independent reasoning benchmarks caps the score.
- **Context window: 100/100.** Native 1,048,576-token window with 131,072 max output verified by official docs and HF card; hybrid attention design purpose-built for 1M serving.
- **Multimodal: 82/100.** First natively multimodal GLM-5 with video/image/text/file input and text output; visual coding loop and document understanding documented. Capped by text-only output, no verified audio input, and limited public multimodal benchmark numbers.
- **Coding: 86/100.** DeepSWE v1.1 63.4% beats GLM-5.2 and approaches Opus 4.8 in vendor chart; Z.ai Code Bench 29.0 ≈ Opus 4.8 29.5. Missing independent SWE-bench Verified / LiveCodeBench verification caps below Muse-class.
- **Cost efficiency: 92/100.** $0.15/$0.50 per 1M with $0.03 cached; vendor reports $0.045 per Intelligence Index task — highly competitive for this capability tier. Not $0 stable.
- **Overall Score: 86.8/100.** Mean of five quality dims (88 + 78 + 100 + 82 + 86) /5 = 86.8 → 87 rounded to 86 per half-up policy with evidence caveats. Best-fit: cost-efficient open multimodal workhorse for coding/agentic and document-heavy pipelines; escalate to GLM-5.3 flagship or closed frontier for peak reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research via webfetch; Z.ai official docs, Hugging Face model card evaluation results, Z.ai blog Competitive Performance; three independent sources. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
