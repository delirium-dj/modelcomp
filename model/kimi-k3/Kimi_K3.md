# Kimi K3 — findings by Kimi K3

- Source: Moonshot AI / Kimi K3 (`kimi-k3`; HF `moonshotai/Kimi-K3`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's July 2026 open-weight frontier model — a 2.8T-parameter MoE (16 active of 896 experts, ~104B active; Kimi Delta Attention + Attention Residuals) with 1M-token context, always-on thinking, and native vision. Largest open-weight release to date (codersera.com, meshlaunch.com).
- **Provider / access:** Moonshot/Kimi API + a dozen-plus hosted providers via OpenRouter (codersera.com; cloudprice.net shows 18 providers); OpenAI-compatible chat API. Open weights released July 27, 2026 (codersera.com, kingy.ai); HF `moonshotai/Kimi-K3` (image-text-to-text; 2.3M+ downloads in first month).
- **Release / knowledge:** Released 2026-07-16 via apps/API (llm-stats.com, codersera.com); full weights + technical report 2026-07-27; K3-256k coding variant shipped 2026-07-29. Knowledge cutoff not verified in my sources.
- **IDs:** `kimi-k3` (OpenCode Zen, $3/$15 per brief); `moonshotai/kimi-k3` (aggregators).
- **Context window:** 1.0M–1.05M tokens (llm-stats.com 1.0M / 1,048,576; benchlm.ai 1.05M); max output not verified.
- **Modalities:** text/image in (MMMU-Pro, CharXiv, MathVision measured); text out; reasoning always-on (`reasoning_effort` low/high/max); tool calls; JSON mode. (HF tags confirm image-text-to-text; benchlm vision rows refute text-only claims.)
- **Pricing (as of 2026-09-29):** official API $3.00/M input, $15.00/M output, $0.30/M cache-hit input (codersera.com); third-party from ~$2.85/$14.25 (llm-stats.com) and cheapest OpenRouter listing $2.60/$13.00 (codersera.com); free on kimi.com Adagio tier with concurrency limits.
- **Architecture:** 2.8T total params, MoE, 16 active experts of 896 (codersera.com; ~104B active per morphllm.com); MXFP4-native weights; open weights under modified-MIT "Kimi K3 License".

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (benchlm.ai; Vals 80.9%)
- Tau3-Banking (AA): **46.0%** (benchlm.ai)
- GDPval-AA: **1524 Elo** (51.2% normalized) (benchlm.ai)
- MCP Atlas: **84.2%**; Toolathlon-Verified: **73.2%** (benchlm.ai)
- BrowseComp: **91.2%**; DeepSearchQA: **95.0%**; DECK-Bench: **73.5%** (benchlm.ai)
- AA Briefcase: **1505**; AA Agentic Index: **50.6%**; AA Harvey LAB: **94.6%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (GPQA-D and AA; Vals 92.9%) (benchlm.ai)
- HLE: **56.0%** (w/ tools); 43.5% (no tools); AA-HLE 46.9% (benchlm.ai)
- AA-LCR: **88.7%** — top long-context reasoning among compared models (benchlm.ai)
- MLCR-AA: **38.3%**; CritPt: **23.4%** (benchlm.ai)
- ARC-AGI-1: **94.5%**; ARC-AGI-2: **60.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **43.6** (v4.3 scale per benchlm.ai; earlier v4.1.1 index listed K3 at 60, tied top open-weights — codersera.com); BenchLM overall **71.57/100, #13 of 514** (benchlm.ai, 2026-09-29)
- AA-Omniscience Accuracy / Hallucination Rate: **47.6% / 53.2%** (benchlm.ai)
- MMLU-Pro (Vals): **88.0%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **93.4%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **87.2%** (benchlm.ai)
- AA-SciCode: **59.5%**; AA Coding Index: **76.2** (benchlm.ai)
- DeepSWE: **67.5%**; FrontierSWE: **81.2%**; FrontierSWE v2: **25.9%**; Kimi Code Bench v2: **72.9%** (benchlm.ai)
- Vals coding index: **74.70%**, within 0.12 pt of Claude Opus 5 (74.82%) (codersera.com, 2026-08-12); #1 on Frontend Code Arena (codersera.com)

Long context:

- AA-LCR 88.7% at the 1M window (benchlm.ai); vendor-run 1M-token eval scored 90.4 (codersera.com); no separate MRCR/RULER public score found.

Multimodal:

- CharXiv (tools): **91.3%**; MathVision w/ Python: **97.8%**; MMMU-Pro: **81.6%** (w/ Python 83.4%; AA 80.5%); OmniDocBench: **91.1%**; ZeroBench w/ Python: **41.0%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB 2.1 88.3%, MCP Atlas 84.2%, Toolathlon 73.2%, BrowseComp 91.2%, DeepSearchQA 95.0% — excellent breadth; capped by ApprenticeBench 18% and GDP.pdf 22%.
- **Reasoning: 84/100.** GPQA 93.5%, HLE 56% w/ tools, LCR 88.7% (class-leading); capped by ARC-AGI-2 60.4% trailing top frontier models and middling Omniscience accuracy.
- **Context window: 96/100.** Full 1M (1,048,576) window — top band — with the best AA-LCR (88.7%) measured among peers; capped slightly by missing MRCR/RULER independent confirmation.
- **Multimodal: 80/100.** Strong vision/doc suite (MathVision+Py 97.8%, CharXiv 91.3%, OmniDocBench 91.1%) but image-in only — no audio/video input — and text-only output, so below the omni band.
- **Coding: 84/100.** SWE-bench (Vals) 93.4%, FrontierSWE 81.2%, LiveCodeBench 87.2%, Coding Index 76.2; capped by FrontierSWE v2 25.9% and sweMarathon 42%.
- **Cost efficiency: 60/100.** Official $3/$15 per 1M ($0.30 cache-hit) — frontier-tier pricing for a 2.8T open model; AA measures ~$0.84 per task, undercutting GPT-5.6 Sol ($1.23) and Opus 5 ($2.34) per task (codersera.com).
- **Overall Score: 86/100.** Mean of the five quality dims (86+84+96+80+84)/5 = 86.0 → 86. Best fit: open-weight frontier deployments needing 1M context and strong agentic/coding performance with self-hosting optionality.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard, llm-stats.com, codersera.com, cloudprice.net, kingy.ai, morphllm.com, HF hub metadata); scores are normalized 1–100 interpretations, not official vendor scores. (Reporting on my own model; all numbers cited from public third-party sources, not internal knowledge.) Reverified 2026-09-29: BenchLM overall 71.87→71.57 (#13 of 514); AA Briefcase 1510→1505; AA Intelligence Index pinned to v4.3 scale (43.6; v4.1.1 was 60 per codersera); reconfirmed official $3/$15 + $0.30 cache + free kimi.com Adagio tier; added Zen `kimi-k3` ID; normalized bands applied (Context 92→96, Multimodal 83→80, Cost 58→60).
- Future sources: add a new file next to this one using the same headings.
