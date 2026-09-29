# GPT-5.4 — findings by Kimi K3

- Source: OpenAI / GPT-5.4 (`gpt-5.4`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's GPT-5.4-generation reasoning flagship (siblings Pro/mini/nano), billed as the more affordable model for coding and professional work — standout τ²-bench 98.9% tool use and LiveCodeBench Pro 87.5%; released ahead of GPT-5.5/5.6.
- **Provider / access:** OpenAI API (`gpt-5.4`; Chat Completions, Responses and Batch APIs; no Realtime/Assistants/fine-tuning). Also listed on OpenCode Zen at $2.50/$15.
- **Release / knowledge:** released 2026-03-05 (default snapshot `gpt-5.4-2026-03-05`); knowledge cutoff 2025-08-31 (OpenAI platform docs).
- **IDs:** `gpt-5.4`; default snapshot `gpt-5.4-2026-03-05`; `openai/gpt-5.4` on OpenCode Zen.
- **Context window:** 1,050,000 tokens; 128,000 max output tokens (OpenAI platform docs).
- **Modalities:** text/image in (MMMU-Pro, CharXiv, ScreenSpot Pro measured); text out only; reasoning yes (effort none/low/medium/high/xhigh, default none); function calling, web/file/tool search, code interpreter, hosted shell, apply_patch, computer use, MCP.
- **Pricing (as of 2026-09-29):** $2.50 / 1M input, $0.25 cached input, $15.00 / 1M output (OpenAI platform docs; matches Zen). Prompts >272K input tokens billed at 2x input and 1.5x output for the full session; 10% uplift on data-residency endpoints.
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **98.9%** — highest measured in the cohort surveyed (benchlm.ai)
- Claw-Eval: **60.3%**; ResearchClawBench: **15.3%** (benchlm.ai)
- Terminal-Bench 2.0: **75.1%** (benchlm.ai); TB 2.1: no verified public score found
- GDPval-AA: **1307 Elo** (36.6% normalized) (benchlm.ai)
- OSWorld-Verified: **75.0%**; CyberGym: **79.0%**; BrowseComp: **82.7%**; MCP Atlas: **70.6%**; Toolathlon: **54.6%**; DeepSearchQA: **73.6%** (benchlm.ai)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (GPQA-D; AA 92.0%) (benchlm.ai)
- HLE: **52.1%** (w/ tools); 39.8% (no tools); AA-HLE 43.7% (benchlm.ai)
- AA-LCR: **82.0%**; CritPt: **23.4%** (benchlm.ai)
- ARC-AGI-2: **74.0%**; ARC-AGI-3: **0.2%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **39.0**; BenchLM overall **68.42/100, #21 of 512** (2026-09-28)
- AA-Omniscience Accuracy / Hallucination Rate: **50.8% / 91.7%** (benchlm.ai)
- HealthBench Hard: **40.1%**; FrontierMath v2: **47.6%** T1–3 / **27.1%** T4; AA-IFBench: **73.9%** (benchlm.ai)

Coding:

- LiveCodeBench Pro: **87.5%** (benchlm.ai); LiveCodeBench (Vals): no verified public score found
- SWE-bench Pro: **57.7%**; SWE-bench Verified: no verified public score found
- Vibe Code Bench: **67.4%**; React Native Evals: **85.3%**; AA Coding Index: **71.0** (benchlm.ai)

Long context:

- AA-LCR 82.0% at the 1.05M window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- CharXiv: **82.8%**; MMMU-Pro: **81.2%** (w/ Python 82.1%; AA 78.4%); ScreenSpot Pro: **85.4%**; ZeroBench: **41.0%**; MedXpertQA-MM: **77.1%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** τ²-bench 98.9% elite plus Claw-Eval 60.3%, CyberGym 79.0%, BrowseComp 82.7%; capped by GDPval-AA 1307 (36.6%) and ExploitGym 6%.
- **Reasoning: 81/100.** GPQA ~92.8%, HLE 52.1%, LCR 82.0%, ARC-AGI-2 74%; capped by hallucination 91.7% and ARC-AGI-3 0.2%.
- **Context window: 86/100.** 1.05M window with LCR 82.0%; capped by missing max-window retrieval probes and the 2x/1.5x surcharge above 272K input.
- **Multimodal: 75/100.** Strong for the image-in/text-out band (ScreenSpot Pro 85.4%, CharXiv 82.8%, MMMU-Pro ~81%); no audio/video, text-only output caps it.
- **Coding: 82/100.** LiveCodeBench Pro 87.5%, React Native Evals 85.3%, Vibe Code 67.4%; capped by SWE-bench Pro 57.7% and Coding Index 71.
- **Cost efficiency: 65/100.** Verified $2.50/$15 per Mtok ($0.25 cached) — half of GPT-5.5's list price with broadly similar capability; long-context surcharge above 272K.
- **Overall Score: 81.6/100.** Mean of the five quality dims (84+81+86+75+82)/5 = 81.6. Best fit: mature-agentic OpenAI deployments (τ²-class tool use + 1.05M context) at half of GPT-5.5 pricing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (OpenAI platform docs, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: confirmed $2.50/$15 pricing (cached $0.25), 2026-03-05 release snapshot, 2025-08-31 cutoff, 1.05M context / 128K max output, long-context surcharge; refreshed BenchLM rank (68.42/100, #21 of 512); recalibrated Multimodal into the image-in/text-out band (82→75), Context 88→86, Cost efficiency to verified pricing (62→65); Overall 83→81.6.
- Future sources: add a new file next to this one using the same headings.
