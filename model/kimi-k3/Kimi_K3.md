# Kimi K3 — findings by Kimi K3

- Source: Moonshot AI / Kimi K3 (`kimi-k3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's July 2026 open-weight frontier model — a 2.8T-parameter MoE (16 active of 896 experts, KDA/AttnRes attention) with 1M-token context, positioned against Claude Fable 5 and GPT-5.6 Sol. Largest open weights released to date (theairankings.com, st-hakky.com).
- **Provider / access:** Moonshot/Kimi API + 17 hosted providers (cloudprice.net); OpenAI-compatible chat API. Open weights released July 27, 2026 (st-hakky.com, kingy.ai).
- **Release / knowledge:** Released 2026-07-16 (llm-stats.com; weights June→July 27 update per kingy.ai); knowledge cutoff not verified in my sources.
- **IDs:** `moonshotai/kimi-k3` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.0M–1.05M tokens (llm-stats.com 1.0M; benchlm.ai 1.05M); max output not verified.
- **Modalities:** text/image in (MMMU-Pro, CharXiv, MathVision measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** ~$2.85–$3.00/M input ($0.285–$0.30/M cached), $14.25–$15.00/M output (llm-stats.com, ai-tldr.dev, cloudprice.net from $2.83).
- **Architecture:** 2.8T total params, MoE, 16 active experts of 896 (st-hakky.com); open weights (license variant TBD in sources; described as "open-weight").

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (benchlm.ai; Vals 80.9%)
- Tau3-Banking (AA): **46.0%** (benchlm.ai)
- GDPval-AA: **1524 Elo** (51.2% normalized) (benchlm.ai)
- MCP Atlas: **84.2%**; Toolathlon-Verified: **73.2%** (benchlm.ai)
- BrowseComp: **91.2%**; DeepSearchQA: **95.0%**; DECK-Bench: **73.5%** (benchlm.ai)
- AA Briefcase: **1510**; AA Agentic Index: **50.6%**; AA Harvey LAB: **94.6%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (GPQA-D and AA; Vals 92.9%) (benchlm.ai)
- HLE: **56.0%** (w/ tools); 43.5% (no tools); AA-HLE 46.9% (benchlm.ai)
- AA-LCR: **88.7%** — top long-context reasoning among compared models (benchlm.ai)
- MLCR-AA: **38.3%**; CritPt: **23.4%** (benchlm.ai)
- ARC-AGI-1: **94.5%**; ARC-AGI-2: **60.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **43.6**; BenchLM overall **71.87/100, #11 of 507** (72.3/100, #12 of 196 on the refreshed list)
- AA-Omniscience Accuracy / Hallucination Rate: **47.6% / 53.2%** (benchlm.ai)
- MMLU-Pro (Vals): **88.0%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **93.4%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **87.2%** (benchlm.ai)
- AA-SciCode: **59.5%**; AA Coding Index: **76.2** (benchlm.ai)
- DeepSWE: **67.5%** (st-hakky.com concurs); FrontierSWE: **81.2%**; FrontierSWE v2: **25.9%**; Kimi Code Bench v2: **72.9%** (benchlm.ai)

Long context:

- AA-LCR 88.7% at the 1M window (benchlm.ai); no separate MRCR/RULER/GraphWalks public score found.

Multimodal:

- CharXiv (tools): **91.3%**; MathVision w/ Python: **97.8%**; MMMU-Pro: **81.6%** (w/ Python 83.4%; AA 80.5%); OmniDocBench: **91.1%**; ZeroBench w/ Python: **41.0%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 88.3%, MCP Atlas 84.2%, Toolathlon 73.2%, BrowseComp 91.2%, DeepSearchQA 95.0% — excellent breadth; capped by ApprenticeBench 18% and GDP.pdf 22%.
- **Reasoning: 84/100.** GPQA 93.5%, HLE 56% w/ tools, LCR 88.7% (class-leading); capped by ARC-AGI-2 60.4% trailing GPT-6 Astra (95%) and middling Omniscience accuracy.
- **Context window: 92/100.** 1M window with the best LCR (88.7%) measured among peers here; capped only by missing MRCR/RULER confirmation.
- **Multimodal: 83/100.** Strong vision/doc suite (MathVision+Py 97.8%, CharXiv 91.3%, OmniDocBench 91.1%); capped by no audio input rows and text-only output.
- **Coding: 84/100.** SWE-bench (Vals) 93.4%, FrontierSWE 81.2%, LiveCodeBench 87.2%, Coding Index 76.2; capped by FrontierSWE v2 25.9% and sweMarathon 42%.
- **Cost efficiency: 58/100.** ~$2.85/$14.25 per 1M hosted — strong value for a 2.8T open model with 90% cache discount; not free-tier.
- **Overall Score: 86/100.** Mean of the five quality dims (86+84+92+83+84)/5 = 85.8 → 86. Best fit: open-weight frontier deployments needing 1M context and strong agentic/coding performance with self-hosting optionality.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, llm-stats.com, theairankings.com, st-hakky.com, ai-tldr.dev, kingy.ai); scores are normalized 1–100 interpretations, not official vendor scores. (Reporting on my own model; all numbers cited from public third-party sources, not internal knowledge.)
- Future sources: add a new file next to this one using the same headings.
