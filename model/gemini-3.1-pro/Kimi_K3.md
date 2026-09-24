# Gemini 3.1 Pro — findings by Kimi K3

- Source: Google / Gemini 3.1 Pro (`gemini-3.1-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's Pro-tier flagship reasoning model in the Gemini 3 series (preview released February 19, 2026), aimed at complex multimodal reasoning, agentic workflows, and code-repository-scale tasks.
- **Provider / access:** Google Gemini API (`gemini-3.1-pro`), Vertex AI, Gemini Enterprise Agent Platform; Chat-style generateContent API.
- **Release / knowledge:** Preview released 2026-02-19 (llm-stats.com, theairankings.com); knowledge cutoff not officially stated — no verified public value found.
- **IDs:** `google/gemini-3.1-pro` (no Free-tier ID verified on OpenCode Zen at time of research).
- **Context window:** 1.0M tokens input (llm-stats.com; some third-party trackers list up to 2M for later GA revisions); max output not verified.
- **Modalities:** text/image/audio/video/PDF in (docs.cloud.google.com, llm-stats blog); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $2.00/M input, $12.00/M output ≤200K prompt; $4.00/$18.00 above 200K (benchquill.com, llm-stats.com).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **95.6%** (benchlm.ai)
- Claw-Eval: **57.8%**; ResearchClawBench: **13.3%** (benchlm.ai)
- Terminal-Bench 2.1 (Vals): **70.8%** (benchlm.ai); Terminal-Bench 2.1 (primary): no verified public score found
- GDPval-AA: **904 Elo** (13.8% normalized) (benchlm.ai)
- DeepSearchQA: **69.7%**; Gert Labs: **56.9%**; APEX-Agents-AA: **32.0%**; AA Agentic Index: **10.3%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (GPQA-D); 94.1% (AA); 95.5% (Vals) (benchlm.ai)
- HLE: **45.4%** (HLE w/o tools); 47.0% (AA-HLE) (benchlm.ai)
- AA-LCR: **82.0%** (benchlm.ai)
- CritPt: **17.7%** (benchlm.ai)
- ARC-AGI-2: **77.1%**; ARC-AGI-3: **0.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **29.7** (benchlm.ai); BenchLM overall **64.45/100, #30 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **54.9% / 50.9%** (benchlm.ai)
- MMLU-Pro (Vals): **91.0%**; FrontierMath v2 T1–3: **36.9%**, Tier 4: **16.7%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **78.8%** (benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **88.5%**; LiveCodeBench Pro: **82.9%** (benchlm.ai)
- AA-SciCode: **58.7%** (benchlm.ai)
- Vibe Code Bench: **32.0%** (benchlm.ai)
- AA Coding Index: **68.8**; React Native Evals: **78.9%** (benchlm.ai)

Long context:

- AA-LCR 82.0% at the 1M window is the verified long-context signal; no separate MRCR/RULER/GraphWalks public score found.

Multimodal:

- MMMU-Pro: **83.9%** (AA-MMMU-Pro 82.4%); CharXiv: **80.2%**; ScreenSpot Pro: **84.4%**; ZeroBench: **29.0%**; MedXpertQA-MM: **81.3%**; SimpleVQA: **72.4%**; ERQA: **69.4%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** Exceptional τ²-bench 95.6% and strong Claw-Eval (57.8%) / DeepSearchQA (69.7%); capped hard by weak GDPval-AA (904 Elo) and low AA Agentic Index (10.3%).
- **Reasoning: 86/100.** GPQA ~94–95.5%, HLE ~45–47%, LCR 82.0%, ARC-AGI-2 77.1% are flagship-class; capped by CritPt 17.7% and ARC-AGI-3 0.4%.
- **Context window: 88/100.** 1M-token window with strong retrieval/reasoning (LCR 82.0%); capped by lack of independent max-window retrieval evidence.
- **Multimodal: 90/100.** Full text/image/audio/video/PDF intake with MMMU-Pro 83.9%, CharXiv 80.2%, ScreenSpot Pro 84.4%; capped by ZeroBench 29% and text-only output.
- **Coding: 83/100.** LiveCodeBench Pro 82.9%, SWE-bench (Vals) 78.8%, SciCode 58.7% are strong; capped by weak Vibe Code Bench (32.0%) and mid Coding Index (68.8).
- **Cost efficiency: 62/100.** $2/$12 per 1M (tiered up to $4/$18) is flagship pricing — good for quality tier, far from cheap.
- **Overall Score: 86/100.** Mean of the five quality dims (84+86+88+90+83)/5 = 86.2 → 86. Best fit: multimodal-heavy enterprise reasoning and agent pipelines needing τ²-style tool reliability at 1M context.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, llm-stats.com, Google docs, benchquill.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
