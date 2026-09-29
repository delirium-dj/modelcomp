# DeepSeek V4 Flash — findings by Kimi K3

- Source: DeepSeek / DeepSeek V4 Flash (0731 reasoning checkpoint; alias `deepseek-v4-flash`, retired; open weights `deepseek-ai/DeepSeek-V4-Flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731)
- **Short description:** DeepSeek's fast V4-line reasoning model (July 31, 2026 checkpoint) — strong competitive programming (Codeforces 3052, LiveCodeBench-CoT 91.6%) and verified 1M-context retrieval (MRCR 1M 78.7%), at Flash cost. Retired 2026-09-10 and superseded by V4.1 Flash.
- **Provider / access:** DeepSeek API alias `deepseek-v4-flash` still resolves but the model is retired — requests are served by DeepSeek-V4.1-Flash and billed at Flash (V4.1) rates (official pricing footnote). MIT open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash`); DSpark variant `DeepSeek-V4-Flash-DSpark`.
- **Release / knowledge:** V4-Flash-Preview 2026-04-24; re-post-trained 0731 checkpoint 2026-07-31 (public beta); cutoff not verified.
- **IDs:** `deepseek/deepseek-v4-flash` (retired alias → V4.1-Flash); HF `deepseek-ai/DeepSeek-V4-Flash`.
- **Context window:** 1M tokens (benchlm.ai, codersera); max output not verified for this checkpoint.
- **Modalities:** text in/out (vision shipped separately as V4-Flash-Vision-Exp, also now retired); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** historical live rates — flat $0.14 input / $0.28 output / ~$0.0028 cache hit per 1M until 2026-08-16 16:00 UTC, then peak/off-peak $0.22/$0.007/$0.66 off-peak and $0.44/$0.014/$1.32 peak (codersera). Since 2026-09-10 the retired alias is billed at current Flash (V4.1-Flash) rates: off-peak $0.15/$0.003/$0.60, peak $0.30/$0.006/$1.20 (api-docs.deepseek.com, verified 2026-09-29).
- **Architecture:** open weights (MIT); 284B total / ~13B active MoE with DeepSeek Sparse Attention (codersera) — the "proprietary" label previously recorded here was wrong.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (Vals 67.0%); TB 2.0: **56.9%** (benchlm.ai). On Terminus 2 reference harness V4-Flash scores **67.04%** — above V4-Pro on the same harness (codersera).
- GDPval-AA: **1189 Elo** (46.3% normalized) (benchlm.ai)
- MCP Atlas: **69.0%**; Toolathlon-Verified: **70.3%**; CyberGym: **76.7%**; BrowseComp: **73.2%** (benchlm.ai)
- AA Agentic Index: **41.7%**; Agents' Last Exam: **25.2%**; AutomationBench: **25.1%**; LiveBench agentic coding: **46.77** (codersera, Aug 2026) (benchlm.ai)
- Tau2/Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (GPQA-D; AA 90.8%; Vals 89.9%) (benchlm.ai)
- HLE: **34.8%**; HLE w/ tools: **45.1%**; AA-HLE 38.6% (benchlm.ai)
- MRCR 1M: **78.7%**; CorpusQA 1M: **60.5%**; AA-LCR: **79.7%**; CritPt: **16.6%** (benchlm.ai)
- ARC-AGI-1: **89.0%**; ARC-AGI-2: **61.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **34.3** (benchlm.ai); codersera's deep dive quotes **47** on the AA Intelligence Index — the two sources disagree; BenchmarkLM overall unranked (partial coverage)
- AA-Omniscience Accuracy / Hallucination Rate: **40.4% / 91.7%** (benchlm.ai)
- HMMT Feb 2026: **94.8%**; IMOAnswerBench: **88.4%**; Apex Shortlist: **85.7%**; MMLU-Pro: **86.2%** (benchlm.ai)

Coding:

- SWE-bench Verified: **79.0%**; SWE-bench (Vals): **88.8%**; SWE-bench Pro: **52.6%**; SWE Multilingual: **73.3%** (benchlm.ai)
- LiveCodeBench Pass@1-CoT: **91.6%**; LiveCodeBench (Vals): **87.3%**; Codeforces: **3052** (launch table quotes 3289 for the 0731 checkpoint — benchlm 3052 retained as the card figure) (benchlm.ai)
- DeepSWE: **54.4%**; NL2Repo: **54.2%**; DSBench-FullStack: **68.7%**; VulcanBench v3: **88.4%** (benchlm.ai)
- AA-SciCode: **50.3%**; AA Coding Index: **69.1** (benchlm.ai)

Long context:

- MRCR 1M: **78.7%**; CorpusQA 1M: **60.5%**; AA-LCR 79.7% (benchlm.ai) — verified retrieval at the full 1M window.

Multimodal:

- Design Arena Website: **1219 Elo** (benchlm.ai); text-only checkpoint (vision shipped in the separate, now also retired, V4-Flash-Vision-Exp).

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.1 82.7%, Toolathlon 70.3%, CyberGym 76.7%, MCP Atlas 69%; capped by GDPval 1189 and AutomationBench 25.1%.
- **Reasoning: 80/100.** GPQA ~89%, HMMT 94.8%, LCR 79.7%, ARC-AGI-2 61.4%; AA Index sources disagree (34.3 vs 47) — midpoint logic holds against the 39–43→78–84 band; capped by hallucination 91.7% and HLE 34.8%.
- **Context window: 96/100.** 1M window (band 95–100) with MRCR-1M 78.7% and CorpusQA-1M 60.5% measured — verified.
- **Multimodal: 15/100.** Text-only checkpoint (vision variant is separate) — at the top of the text-only band (10–15).
- **Coding: 85/100.** Codeforces 3052, LCB-CoT 91.6%, SWE-bench (Vals) 88.8%, Coding Index 69.1; capped by SWE-bench Pro 52.6%.
- **Cost efficiency: 94/100.** Historical live price $0.14/$0.28 (band →96) held until 2026-08-16; now retired and billed at V4.1-Flash rates ($0.30/$1.20 peak →93). MIT open weights keep self-hosting cheap.
- **Overall Score: 71.2/100.** Mean of the five quality dims (80+80+96+15+85)/5 = 71.2. Best fit: legacy anchor for the Flash line — use the V4.1-Flash checkpoint (served at the same alias) for new workloads; multimodal needs point to V4.1 Flash.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (benchlm.ai scorecard, codersera.com V4 guide + Flash deep dive, api-docs.deepseek.com pricing footnote); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: corrected architecture to MIT open weights (284B/13B MoE; was wrongly "proprietary"), added flat $0.14/$0.28 historical pricing and the 2026-08-16 peak/off-peak change, recorded retirement on 2026-09-10 with the alias now served/billed as V4.1-Flash, added Terminus-2 67.04% and LiveBench 46.77 independent rows, flagged AA Index source disagreement (34.3 vs 47); cost 82→94, context 88→96 (1M band rule), overall 70→71.2.
- Future sources: add a new file next to this one using the same headings.
