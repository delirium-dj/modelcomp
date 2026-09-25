# Hy4 — findings by Kimi K3

- Source: Tencent / Hy4 (preview) (`tencent/hy4`; HF `tencent/Hy4-preview`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (preview)
- **Short description:** Tencent's August 2026 open-weights Hy4 flagship — 770B/49B-active MoE, 1M context (960K in / 64K out), Apache 2.0; strong agentic suite (GDPval-AA 1678, TB 2.1 85.4%, WideResearch 83.9%).
- **Provider / access:** Apache 2.0 open weights (Hugging Face `tencent/Hy4-preview`); self-hosted; no Zen Free ID.
- **Release / knowledge:** August 2026 preview (catalog); knowledge cutoff not verified.
- **IDs:** `tencent/hy4` / HF `tencent/Hy4-preview`.
- **Context window:** 1M total (960K in / 64K out) (catalog; benchlm lists 1M).
- **Modalities:** text in/out; reasoning yes; tool calls; JSON mode per serving stack.
- **Pricing (as of 2026-09-24):** open weights (Apache 2.0) → self-host; no hosted rate verified.
- **Architecture:** MoE 770B total / 49B active (catalog), Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Vals 55.1% — wide harness gap) (benchlm.ai)
- GDPval-AA: **1678 Elo** (benchlm.ai)
- MCP Atlas: **83.7%**; Toolathlon-Verified: **74.1%**; WideResearch: **83.9%**; DRACO: **77.2%**; BankerToolBench: **78.6%** (benchlm.ai)
- CyberGym: **78.4%**; JobBench: **61.7%**; skillsBench: **62.9%**; APEX-Agents: **37.1%**; Agents' Last Exam: **22.8%** (benchlm.ai)
- HLE w/ tools: **55.4%** (benchlm.ai)
- Tau3 / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (GPQA-D) (benchlm.ai)
- HLE: **55.4%** (w/ tools); 43.4% (no tools) (benchlm.ai)
- CritPt: **16.9%** (benchlm.ai); Apex (math): **74.2%**
- BenchLM overall: **59.61/100, #44 of 507**
- AA LCR / Omniscience rows: no verified public score found

Coding:

- SWE-bench Pro: **65.7%**; SWE Multilingual: **82.9%** (benchlm.ai)
- DeepSWE: **64.3%**; NL2Repo: **58.9%**; sweMarathon: **31.9%**; ProgramBench: **17.5%**; PostTrain Bench: **35.6%** (benchlm.ai)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window by spec; no MRCR/RULER/LCR retrieval score found.

Multimodal:

- Text-only deployment (catalog); single OfficeQA Pro row: **66.2%** (benchlm.ai).

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval 1678, MCP Atlas 83.7%, WideResearch 83.9%, TB 2.1 85.4% — elite in places; capped by ALE 22.8% and Vals TB divergence.
- **Reasoning: 80/100.** GPQA 92.3%, HLE 55.4% w/ tools, Apex 74.2%; capped by missing AA indices and CritPt 16.9%.
- **Context window: 80/100.** Full 1M spec (960K/64K split); zero retrieval measurements cap it.
- **Multimodal: 15/100.** Text-only per catalog — floor (one OfficeQA doc row noted).
- **Coding: 78/100.** SWE-bench Pro 65.7%, SWE Multilingual 82.9%, DeepSWE 64.3%; capped by ProgramBench 17.5% and sweMarathon 31.9%.
- **Cost efficiency: 88/100.** Apache 2.0 open weights; self-host cost only.
- **Overall Score: 67/100.** Mean of the five quality dims (84+80+80+15+78)/5 = 67.4 → 67. Best fit: self-hosted long-horizon text agents; preview status means expect churn before GA.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, repo catalog, HF model card reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
