# GPT-6 Luna — findings by Kimi K3

- Source: OpenAI / GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's lightest GPT-6 variant (siblings Astra/Sol) — cheap, fast reasoning with 1.05M context; the entry point to GPT-6. Docs: developers.openai.com/api/docs/models/gpt-6-luna.
- **Provider / access:** OpenAI API (`gpt-6-luna`, OpenAI-compatible).
- **Release / knowledge:** September 2026 with the GPT-6 rollout (exact date not verified); cutoff not verified.
- **IDs:** `openai/gpt-6-luna` (no Zen Free ID verified).
- **Context window:** 1.05M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (AA-MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified per-token price found; Luna = budget GPT-6 (provisional).
- **Architecture:** proprietary (OpenAI).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **43.4%** normalized (benchlm.ai)
- GDP.pdf (all-pass): **20.4%**; ExploitGym: **11.6%** (benchlm.ai)
- Terminal-Bench / Tau2/Tau3 / Claw-Eval / OSWorld: no verified public score found

Reasoning / knowledge:

- AA-LCR: **83.3%**; CritPt: **19.4%** (benchlm.ai)
- ARC-AGI-1: **86.7%**; ARC-AGI-2: **59.3%**; ARC-AGI-3: **0.1%** (benchlm.ai)
- AA-HLE: **38.5%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **37.3**; BenchLM overall **66.59/100, #22 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **43.8% / 76.7%** (benchlm.ai)
- HealthBench: **50.0%** raw / 54.5% length-adj; HealthBench Hard: **31.4%** (benchlm.ai)
- GPQA: no verified public score found

Coding:

- DeepSWE: **66.6%**; AA-SciCode: **54.6%** (benchlm.ai)
- SWE-bench / LiveCodeBench / Coding Index: no verified public score found

Long context:

- AA-LCR 83.3% at the 1.05M window (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- AA-MMMU-Pro: **75.5%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 60/100.** GDPval 43.4% only signal; capped by missing TB/Tau/OSWorld coverage.
- **Reasoning: 78/100.** LCR 83.3%, ARC-AGI-2 59.3%, AA Index 37.3; capped by CritPt 19.4% and ARC-AGI-3 0.1%.
- **Context window: 86/100.** 1.05M window with LCR 83.3%; capped by missing max-window probes.
- **Multimodal: 72/100.** MMMU-Pro 75.5% image input; no audio/video; text-only output.
- **Coding: 70/100.** DeepSWE 66.6%, SciCode 54.6%; capped by absence of SWE-bench/LiveCodeBench rows.
- **Cost efficiency: 80/100.** Budget GPT-6 tier (provisional).
- **Overall Score: 73/100.** Mean of the five quality dims (60+78+86+72+70)/5 = 73.2 → 73. Best fit: entry GPT-6 access for long-context chat and moderate coding; agentic depth should use Sol/Astra.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, developers.openai.com docs reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
