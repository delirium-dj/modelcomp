# GLM-5 — findings by GLM 5.3

- Source: Z.AI (`glm-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Z.AI's February 2026 new-generation open-weights foundation model for "Agentic Engineering" — complex systems design and long-horizon agent tasks; coding usability approaching Claude Opus 4.5. Superseded by GLM-5.1 (AA marks it deprecated).
- **Provider / access:** Z.AI API `https://api.z.ai/api/paas/v4` (`glm-5`, OpenAI-compatible Chat Completions), Hugging Face `zai-org/GLM-5` (MIT weights); 6 API providers per Artificial Analysis; OpenRouter `z-ai/glm-5`.
- **Release / knowledge:** Released 2026-02-11/12; knowledge cutoff not published.
- **IDs:** `glm-5` (Z.AI), `zai-org/GLM-5` (HF), `z-ai/glm-5` (OpenRouter). No Free ID.
- **Context window:** 200K total, 128K max output (docs.z.ai; AA concurs at 200K).
- **Modalities:** text in → text out; thinking mode (enabled/disabled); function calling; streaming; context caching; structured JSON output.
- **Pricing (as of 2026-10-16):** $1.00 / MTok in, $3.20 / MTok out, 80% cache discount (Artificial Analysis, median across providers; AA calls it somewhat expensive vs open-weights medians $0.43/$1.68).
- **Architecture:** 744B total / 40B active MoE (up from 355B/32B GLM-4.7), 28.5T pre-training tokens; DeepSeek Sparse Attention integrated; asynchronous "Slime" RL framework; MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.2%** (Z.AI official)
- τ²-Bench: **98.2%** (Artificial Analysis harness via BenchLM)
- τ³-Bench: **65.6%** (Qwen3.6-Plus comparison table via BenchLM)
- BrowseComp: **62%** (GLM-5 model card, HF)
- WideResearch: **69.8%**, MCP-Tasks **60.8%**, Toolathlon **38%**, MCP-Atlas **31.1%**, DeepPlanning **14.6%** (all Qwen3.6-Plus comparison table — vendor-table harness conflicts with Z.AI's "SOTA open agentic" claim, noted)
- Claw-Eval: **57.7%**, QwenClawBench **54.1%** (Qwen3.6-Plus table)
- CyberGym: **43.2%** (CyberGym leaderboard)
- APEX-Agents-AA: **14.5%** (Artificial Analysis)
- GDPval-AA: SOTA-among-open claimed by Z.AI/AA article, exact value not in fetched rows

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (model card); **82.0%** (AA harness) — harness spread noted
- HLE: **30.5%** (model card); **29.3%** (AA); HLE w/ tools: **50.4%** (model card)
- LCR: **75.7%**, CritPt **2.0%** (AA)
- MMLU-Pro: **85.7%** (Qwen table) / **85.8%** (Arcee); SuperGPQA 66.8%; NOVA-63 55.1%
- AA Intelligence Index: **28** (estimated; #23/119 at release, above open median 19)
- Omniscience Accuracy / Hallucination Rate: **26.3% / 35.3%** (AA)
- AIME26: **95.8%**; HMMT Feb-2025 97.5%, Nov-2025 96.9%, Feb-2026 86.4% (Qwen table)

Coding:

- SWE-bench Verified: **77.8%** (Z.AI official); **72.8%** (Arcee comparison table) — harness spread noted
- SWE-bench Pro: **55.1%**, SWE Multilingual **73.3%** (Qwen table)
- SWE-Rebench: **62.8%** (SWE-Rebench leaderboard); NL2Repo **35.9%** (GLM-5.1 card)
- React Native Evals: **74.8%** (rn-evals leaderboard)
- Design Arena Website: **1249 Elo** (OpenRouter benchmarks)

Long context:

- LongBench v2: **60.8%**, AI-Needle **63.3%** (Qwen table) — moderate long-context retrieval; 200K window.

### Normalized scores (1–100)

- **Tool use: 78/100.** Official τ² 98.2%/TB 56.2%/BrowseComp 62% are strong, but independent vendor tables show soft spots (MCP-Atlas 31.1%, Toolathlon 38%, DeepPlanning 14.6%, APEX-Agents 14.5%) — capped by those conflicting agentic results.
- **Reasoning: 82/100.** GPQA-D 86%, AIME26 95.8%, LCR 75.7% and HLE ~30% (50% w/tools) place it near the open frontier of its generation; capped by low AA Index (28), CritPt 2.0%, and weak Omniscience accuracy.
- **Context window: 70/100.** 200K verified (docs + AA) — the 200K tier; 128K output noted as a plus.
- **Multimodal: 15/100.** Text-only in/out (AA: no image input).
- **Coding: 82/100.** SWE-V 77.8% official (72.8% Arcee), SWE-Pro 55.1%, Multilingual 73.3%, TB2.0 56.2% — top open-model scores of its release window, approaching Opus 4.5 usability per Z.AI; capped by NL2Repo 35.9% and newer open models surpassing it.
- **Cost efficiency: 85/100.** $1.00/$3.20 with 80% cache discount is decent for a 744B-class open model (near the $1.25/$4.25 tier ≈ 88), slightly expensive vs open-weights medians.
- **Overall Score: 65/100.** (78+82+70+15+82)/5 = 65.4 → 65. The open-weights agentic-engineering baseline of early 2026 — strong coding/agent core, held back by text-only I/O and a 200K window; successors (GLM-5.1/5.2/5.3) supersede it on every axis.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16
- Method: public internet research (docs.z.ai official page, BenchLM aggregator, Artificial Analysis model page, DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
