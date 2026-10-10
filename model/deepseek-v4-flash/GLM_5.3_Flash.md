# DeepSeek V4 Flash — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-v4-flash`, MIT open weights; 0731 production checkpoint)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731 checkpoint)
- **Short description:** DeepSeek's cost- and speed-optimized V4-family variant — a 284B-total / 13B-active MoE with a 1M-token context under a fully permissive MIT license; the cheapest frontier-class API model in its era, inheriting V4-era instruction-following and reasoning from the same training lineage as V4 Pro. Targets high-volume, latency-sensitive and agentic-coding-at-scale workloads.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`, OpenAI-compatible Chat Completions; native Responses API and Codex support per genztech); 15 providers on OpenRouter (`deepseek/deepseek-v4-flash`); MIT weights on Hugging Face for self-hosting (4-bit ~160–175GB VRAM). No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-04-24; 0731 checkpoint (2026-07-31) is the production-stable snapshot; peak/off-peak pricing since 2026-08-16; knowledge cutoff not verified.
- **IDs:** `deepseek-v4-flash` (DeepSeek API); `deepseek/deepseek-v4-flash` (OpenRouter). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens (1,048,576; max output 384,000 per OpenRouter — verified via OpenRouter, zenmux and benchlm).
- **Modalities:** text input; text output; reasoning yes (standard mode plus a dedicated extended-reasoning mode with longer internal deliberation); tool calls (OpenAI-compatible function calling); JSON mode.
- **Pricing (as of 2026-10-09):** $0.14 / $0.28 per 1M in/out official list (zenmux); OpenRouter $0.0886 / $0.1772; subject to DeepSeek's peak/off-peak restructure since 2026-08-16 (off-peak ~half of peak). Open MIT weights; paid API.
- **Architecture:** 284B total / 13B active parameters (Mixture-of-Experts, sparse activation), MIT license.

### Raw benchmarks found

> DeepSeek-V4 technical report (HF) + 0731 update notes + AA and Vals rows via benchlm.ai (updated 2026-10-09). Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (0731 update notes — fills the previously-missing TB row; Vals 67.0%; TB2.0 56.9% per tech report)
- MCP Atlas: **69%** (DeepSeek-V4 technical report — fills the previously-missing MCP row)
- GDPval-AA: **1189 Elo** / 46.9% (tech report + AA — fills the previously-missing GDPval row)
- BrowseComp: **73.2%** (tech report — fills); CyberGym: **76.7%** (0731 update); Toolathlon-Verified: **70.3%** (corroborates); AA Agentic Index: **41.7%**
- Agents' Last Exam: 25.2%; AutomationBench: 25.1% (0731 update — weak)
- Toolathlon (plain): 47.8% (tech report)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (tech report; AA **90.8%**, Vals **89.9%** — three-source agreement near the frontier ref)
- HLE: **34.8%** (tech report; AA 38.6%; **HLE w/ tools 45.1%** — fills the missing tool-augmented row)
- ARC-AGI-2 (verified): **61.4%**; ARC-AGI-1: **89.0%** (ARC Prize official results — fills the previously-missing ARC rows)
- MRCR (1M): **78.7%**; CorpusQA (1M): **60.5%** (tech report — fills the previously-missing long-context retrieval rows)
- AA-LCR: **79.7%** (AA long-context-reasoning board — fills the previously-missing LCR); CritPt: **16.6%** (AA)
- Artificial Analysis Intelligence Index: **34.3** (AA current reading — updates the earlier "50", which predates the index recalibration)
- AA-Omniscience: Index -14.3, accuracy **40.4%**, hallucination rate **91.7%** (benchlm.ai — severe)
- MMLU-Pro: **86.2%** (tech report; Vals 86.2% — agreement); SimpleQA 34.1%; HMMT Feb 2026: **94.8%**; IMOAnswerBench 88.4%; Apex 33.0%

Coding:

- SWE-bench Verified: **79%** (tech report; **SWE-bench (Vals) 88.8%** — the Vals independent harness resolves the earlier 79.0-vs-88.8 conflict in favor of the higher figure on Vals' setup)
- SWE-bench Pro: **52.6%** (tech report — fills; weak); SWE Multilingual: **73.3%**
- LiveCodeBench: **91.6%** (tech report COT; Vals **87.3%** — corroboration)
- VulcanBench v3: **88.4%** (leaderboard — fills); Codeforces: **3052** (tech report — grandmaster); NL2Repo: **54.2%**; DSBench-FullStack 68.7% / Hard 59.6% (0731 update)
- AA-SciCode: **50.3%** (AA — fills; below the 55%+ frontier mark); OpenHarmony Bench: 53.8%; AA Coding Index: **69.1%**
- DeepSWE 1.1: **54.4%** (0731 update — corroborated)

Long context:

- MRCR (1M) **78.7%** and CorpusQA (1M) **60.5%** measured (fills the previously-missing retrieval rows); AA-LCR 79.7%; zenmux's hands-on testing still observed degraded long-document coherence in some cross-referencing cases

Multimodal / vision:

- Design Arena Website: **1214** (OpenRouter); text-only in/out per available evidence — no vision/audio/video input

### Normalized scores (1–100)

- **Tool use: 82/100.** Now measured: TB2.1 82.7% (frontier-tier), MCP Atlas 69%, GDPval-AA 1189, BrowseComp 73.2% and AA Agentic Index 41.7% clear mid-band anchors; AutomationBench 25.1% and Agents' Last Exam 25.2% cap it.
- **Reasoning: 82/100.** GPQA 88.1–90.8% (three-source agreement) sits at the frontier reference, the filled ARC-AGI-2 61.4% and AA-LCR 79.7% are strong; HLE 34.8%/38.6% stays under the 40% bar, AA Index 34.3 (recalibrated) and the severe 91.7% hallucination rate cap it — mixed evidence balances at the old score.
- **Context window: 93/100.** 1M tokens (≥1M tier = 95–100) with now-measured retrieval (MRCR 1M 78.7%, CorpusQA 60.5%); docked slightly for the far-end coherence caveat.
- **Multimodal: 15/100.** Text-only in/out per available evidence — no vision/audio/video input.
- **Coding: 88/100.** SWE-bench Verified 79% / 88.8% (Vals — conflict resolved), LiveCodeBench 91.6%/87.3%, VulcanBench 88.4% and Codeforces 3052 are strong; SWE-Pro 52.6% and AA-SciCode 50.3% (below the 55%+ mark) cap it.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M (OpenRouter $0.089/$0.177) sits in the ~$0.10/$0.20 = 97–99 methodology band; free MIT weights as an extra cost lever.
- **Overall Score: 72/100.** Mean of the five quality dims (82 + 82 + 93 + 15 + 88) / 5 = 72.0. Best-fit: the budget workhorse for high-volume coding pipelines, RAG and batch workloads where cost per token trumps frontier reasoning — not for deep multi-agent orchestration or knowledge-critical paths given the 91.7% hallucination rate.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing the DeepSeek-V4 technical report, 0731 update notes, AA and Vals boards — official plus two independent harnesses, the SWE-V conflict resolved in favor of the Vals reading); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing TB2.1 82.7%, MCP Atlas 69%, GDPval-AA 1189, ARC-AGI-2 61.4% verified, MRCR 1M 78.7%, AA-LCR 79.7%, CritPt 16.6%, HLE w/tools 45.1%, AA Index 50→34.3 — Tool 70→82, Context 92→93, Coding 85→88, Overall 69→72.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4.1.md`, using the same headings.
