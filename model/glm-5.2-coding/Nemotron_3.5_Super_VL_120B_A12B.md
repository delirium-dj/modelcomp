# GLM-5.2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: build.nvidia.com/z-ai/glm-5-2 (NVIDIA NIM page + full benchmark table), huggingface.co/zai-org/GLM-5.2 / RedHatAI/GLM-5.2 (official HF cards + benchmark table), ollama.com/library/glm-5.2 (Ollama card), z.ai/blog/glm-5.2 (referenced), glmmodel.net/en (third-party report), glm5.app/blog/glm-5-2-benchmarks (third-party analysis), inferencex.semianalysis.com/model/glm-5-2 (architecture + vendor evals), myclaw.ai/models/glm-5-2 (official Z.AI charts), benchlm.ai/models/glm-5-2 (aggregator), benchlm.ai comparisons (vs GLM-5, GLM-5.1, GLM-5.3, Claude Opus 4.6, GPT-5.2, GPT-5.2-Codex, Grok 4), llm-stats.com compare (vs GLM-5.3), medium.com analysis, technology.org, mindstudio.ai (GLM-5.3 vs 5.2), clawvard.school, artificialanalysis.ai/models/glm-5-2 (AA model page)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (Z.AI / Zhipu AI)
- **Short description:** Z.AI's flagship long-horizon reasoning and coding model; successor to GLM-5.1 with IndexShare architecture (2.9× fewer per-token FLOPs at 1M context), solid 1M-token context (976K per Ollama), flexible thinking effort levels, improved MTP speculative decoding; 744B total / 40B active MoE (per upstream GLM-5 card, NVIDIA NGC); MIT License; released June 2026 (open weights ~June 16); strongest open-weight coding model of mid-2026 per third-party analysis.
- **Provider / access:** Z.AI API, Hugging Face (zai-org/GLM-5.2, RedHatAI/GLM-5.2), Ollama (glm-5.2:cloud), NVIDIA NIM (build.nvidia.com/z-ai/glm-5-2); MIT open weights, commercial use permitted.
- **Release / knowledge:** Released June 2026 (subscribers June 13, open weights June 16 per tech-insider); knowledge cutoff not stated.
- **IDs:** `zai-org/GLM-5.2` (HF), `glm-5.2` (benchlm/ollama), `glm-5.2:cloud` (Ollama).
- **Context window:** 1,048,576 tokens (1M, benchlm.ai; llm-stats; NVIDIA NGC); Ollama cloud lists 976K. Use 1M as authoritative.
- **Modalities:** Text in, text out (text-only per HF/Ollama/NVIDIA cards); reasoning yes (multiple thinking effort levels: low/medium/high/max); tool calls yes; structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** $1.40/M input, $4.40/M output (benchlm.ai; Ollama cloud $1.40/$4.40 with $0.26 cached); MIT open weights (self-host ~$0); ~1.6× cheaper per token than GLM-5.3 on blended basis (llm-stats).
- **Architecture:** 744B total / 40B active MoE (upstream), IndexShare sparse-attention hybrid, MTP draft layer; uses more output tokens per task (~43K per Intelligence Index task per clawvard).

### Raw benchmarks found

Official Z.AI / NVIDIA NGC benchmark table (GLM-5.2 vs GLM-5.1 and comparators), corroborated by Ollama, HF cards, glmmodel.net, glm5.app, inferencex, myclaw, benchlm.ai, Artificial Analysis, llm-stats.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **81.0%** (official NVIDIA/HF card) / **82.7%** (best reported harness, Claude Code; NVIDIA NGC) / **81.0%** vs GLM-5.1 63.5 (official table)
- Terminal-Bench 3.0: **4.6%** (benchlm.ai; much harder)
- MCP-Atlas Public Set: **76.8%** (official NVIDIA/HF card)
- Toolathlon / Tool-Decathlon: **48.2%** (official)
- FrontierSWE (Dominance): **74.4%** (official NVIDIA NGC) / **67.5%** (inferencex notes card reports 74.4 dominance)
- SWE-Marathon: **13.0%** (official NVIDIA NGC) / **19.4%** (glmmodel.net discrepancy — see conflict)
- PostTrainBench: **34.3%** (official NVIDIA NGC) / **31.7%** (inferencex discrepancy)
- ProgramBench: **63.7%** (official HF card) / **9.5%** (inferencex "Almost Solved" discrepancy — see conflict)
- DeepSWE: **46.2%** (official NVIDIA NGC)
- NL2Repo: **48.9%** (official NVIDIA HF card)
- τ²-bench: **99.1%** (benchlm.ai / Artificial Analysis tau2-bench leaderboard)
- AutomationBench: not isolated for 5.2 (reported for 5.3)

Reasoning / knowledge:

- HLE: **40.5%** (official NVIDIA/HF card) / **54.7%** (w/ tools; official)
- CritPt: **20.9%** (official NVIDIA/HF card)
- AIME 2026: **99.2%** (official)
- HMMT Nov. 2025: **94.4%** (official)
- HMMT Feb. 2026: **92.5%** (official)
- IMOAnswerBench: **91.0%** (official)
- GPQA-Diamond: **91.2%** (official) / **91.2%** (GPQA-D)
- MMLU-Pro: not isolated for 5.2 in fetched sources (reported via comparators)
- Artificial Analysis Intelligence Index: **33.7%** (benchlm.ai) / AA score 34 (AA model page)
- AA-GPQA Diamond: **89.5%** (benchlm.ai)
- AA-HLE: **41.1%** (benchlm.ai)
- AA-LCR: **78.3%** (benchlm.ai)
- AA-Omniscience: index 4.4%, accuracy 24.3%, hallucination rate 26.3% (benchlm.ai)

Coding:

- SWE-bench Pro: **62.1%** (official NVIDIA/HF card) / **62.1%** vs GLM-5.1 58.4 (official table) — top open-weight coding model mid-2026
- NL2Repo: **48.9%** — see above
- DeepSWE: **46.2%** — see above
- ProgramBench: **63.7%** — see above (conflict with inferencex)
- Terminal-Bench 2.1: **81.0%** — see above
- Design Arena Website: **1287** (OpenRouter via benchlm)
- Codeforces: not isolated

Multimodal & grounded:

- Text-only (no vision in GLM-5.2); multimodal dimension reflects text-only reality.

Long context:

- 1M context (IndexShare); AA-LCR 78.3% (benchlm); no public needle-recall curve at full 1M; long-context strength is the model's positioning.

Instruction following:

- IFEval: **89.9%** (benchlm.ai public-lane #26/148) — from Claude Opus 4.6 comparison
- MMLU-ProX: not isolated
- Gray Swan IPI: not isolated

### Conflicting results noted

- **Third-party table discrepancies (inferencex/glmmodel.net vs official NVIDIA/HF card):** SWE-Marathon 13.0 (official) vs 19.4 (glmmodel.net); PostTrainBench 34.3 (official) vs 31.7 (inferencex); ProgramBench 63.7 (official HF card) vs 9.5 "Almost Solved" (inferencex). These appear to be different metric slices/subsets — official card figures are used as primary, discrepancies noted.
- **Terminal-Bench 2.1:** 81.0% (official Terminus-2) vs 82.7% (best reported, Claude Code harness, NVIDIA NGC) — both cited.
- **HLE:** 40.5% (text-only, official) vs 54.7% (w/ tools, official) — both cited.
- **GLM-5.2 vs GLM-5.3:** GLM-5.3 leads overall (67.87 vs 60.49 benchlm) and on most shared benchmarks (Terminal-Bench 2.1 88.2 vs 81.0, DeepSWE 66.9 vs 46.2, FrontierSWE 78.1 vs 74.4), but GLM-5.2 wins ProgramBench (63.7 vs 19.0 "Almost Solved" — different metric) and is ~1.6× cheaper per token (llm-stats).

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Terminal-Bench 2.1 81.0/82.7, MCP-Atlas 76.8, Toolathlon 48.2, FrontierSWE 74.4, τ²-bench 99.1 — top-tier open-weight agent; capped by SWE-Marathon 13.0 and ProgramBench subset variance.
- **Reasoning: 78/100.** GPQA-D 91.2, AIME 99.2, HMMT 92.5–94.4, IMOAnswerBench 91.0, HLE 40.5/54.7, CritPt 20.9 — elite math/reasoning; CritPt and omniscience accuracy 24.3 cap it.
- **Context window: 90/100.** Declared 1M with IndexShare efficiency; AA-LCR 78.3 moderate; no public full-1M retrieval curve.
- **Multimodal: 50/100.** Text in / text out only — NOT multimodal.
- **Coding: 82/100.** SWE-bench Pro 62.1 (top open-weight mid-2026), Terminal-Bench 2.1 81.0, Design Arena 1287 (#1 per medium analysis), DeepSWE 46.2, NL2Repo 48.9; coding is the standout, close to Opus 4.8/GPT-5.5 on agentic terminal work.
- **Cost efficiency: 75/100.** MIT open weights, $1.40/$4.40 per M, 1.6× cheaper than GLM-5.3; not counted toward Overall.
- **Overall Score: 75/100.** Half-up mean of (75 + 78 + 90 + 50 + 82) / 5 = 75.0 → 75. Best-fit recommendation: leading open-weight long-horizon coding/agent model; text-only; ProgramBench/SWE-Marathon subsets weak.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Z.AI/HF/NVIDIA cards + Ollama + glmmodel.net + glm5.app + inferencex + myclaw + benchlm.ai + llm-stats + Artificial Analysis + third-party analyses); scores are normalized 1–100 interpretations, not official vendor scores. Table discrepancies with third-party aggregators noted and official card figures preferred.
- Future sources: add a new file next to this one, using the same headings.
