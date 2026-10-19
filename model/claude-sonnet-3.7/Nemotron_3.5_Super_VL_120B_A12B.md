# Claude 3.7 Sonnet — findings by Nemotron 3.5 Super VL 120B A12B

- Source: anthropic.com news "Claude 3.7 Sonnet and Claude Code" (official, 2025-02-24), anthropic.com Claude 3.7 Sonnet System Card (official PDF), langbase.com benchmarks table, codesota.com model card (10 benchmarks), benchlm.ai model page, benchmarklist.com model page, llm-stats.com compare (vs Claude 3.5 Sonnet), Princeton HAL model page, bleepingcomputer press
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet (Anthropic)
- **Short description:** Anthropic's first hybrid reasoning model, announced 2025-02-24; ordinary LLM and reasoning model in one (standard mode = upgraded Claude 3.5 Sonnet; extended thinking mode = self-reflect before answering); API users control thinking duration; strongest improvements in coding and front-end web development; 200K context; knowledge cutoff end of October 2024; proprietary.
- **Provider / access:** Anthropic API, Amazon Bedrock, Google Cloud Vertex AI, Claude.ai, Claude Code CLI.
- **Release / knowledge:** Released 2025-02-24; knowledge cutoff end of October 2024; trained on public info through November 2024.
- **IDs:** `claude-3.7-sonnet-20250219` (OpenRouter/Anthropic), `claude-3-7-sonnet` (benchlm).
- **Context window:** 200,000 tokens (OpenRouter; benchlm; Anthropic launch). Verified.
- **Modalities:** Text + image in, text out (multimodal per launch blog: "multimodal capabilities"); reasoning yes (hybrid, standard vs extended thinking); tool calls yes (bash tool, file editing tool, planning tool for SWE-bench); structured output not explicitly advertised.
- **Pricing (as of 2026-10-16):** $3.00/M input, $15.00/M output (HAL; Anthropic launch pricing tier; benchmarklist lists $3.00 in / $15.00 out).
- **Architecture:** Hybrid reasoning (dense Transformer base + extended thinking); parameter count undisclosed.

### Raw benchmarks found

Scores reported for standard mode (no extended thinking) and extended thinking mode (64K thinking, internal scoring) where both exist. Sources: Anthropic launch blog/system card, langbase benchmark table, codesota, benchlm.ai, Princeton HAL, benchmarklist.

Agent / tool use:

- SWE-bench Verified: **62.3%** (no extended thinking, langbase/Anthropic) / **63.7%** (standard, same 489-problem subset, Codesota) / **70.3%** (internal scaffold + scoring model, n=489, Anthropic) / **50.0%** (HAL Generalist Agent, Swebench Verified Mini) / **52.2%** (SWE-bench Verified Bash Only, benchmarklist)
- TAU-bench Retail: **81.2%** (langbase)
- TAU-bench Airline: **58.4%** (langbase) / **56.0%** (HAL Generalist Agent)
- Terminal-Bench: not found as a clean headline for 3.7 Sonnet in fetched sources
- The Agent Company: **52.7%** (benchmarklist, 100th percentile, rank 1 of 8)
- WebArena: **35.1%** (codesota, rank 5/6)
- OSWorld: **28.0%** (codesota, rank 19/28)

Reasoning / knowledge:

- GPQA Diamond: **68.0%** (no extended thinking) / **78.2%** (64K extended thinking) / **84.8%** (internal scoring, Anthropic) / **65.6%** (AA-GPQA Diamond, benchlm) / **67.4%** (GPQA Diamond, benchmarklist)
- HLE: **4%** (Artificial Analysis, no extended thinking) — not found explicitly; AA Intelligence Index component
- MMLU: not found as isolated headline for 3.7 Sonnet
- MMMLU: **83.2%** (langbase)
- MATH 500: **82.2%** (no extended thinking) / **96.2%** (64K extended thinking)
- AIME 2024: **23.3%** (no extended thinking) / **61.3%** (extended thinking) / **80.0%** (internal scoring, Anthropic) / **80.0%** (codesota)
- CritPt: **0.0%** (benchlm)
- AA-LCR: **51.7%** (benchlm)
- BIG-Bench Hard: not found for 3.7 Sonnet
- Artificial Analysis Intelligence Index: **15.3%** (benchlm)

Coding:

- HumanEval: not found isolated for 3.7 Sonnet
- SWE-bench Verified: **62.3%** (no extended) / **70.3%** (internal scaffold) — see above
- LiveCodeBench: **56.7%** (benchmarklist, rank 94/123)
- Codeforces: not found

Multimodal & grounded:

- MMMU: **71.8%** (no extended thinking) / **75%** (extended thinking) / **71.5%** (benchmarklist MMMU Pro) / **75.0%** (llm-stats vs 3.5 Sonnet)
- MMMU-Pro: **71.5%** (benchmarklist)
- IFEval: **90.8%** (no extended thinking) / **93.2%** (64K extended thinking) / **90.2%** (Claude 3.5 Sonnet new comparison, langbase)
- DocVQA / ChartQA / AI2D: not found for 3.7 Sonnet

Long context:

- Context 200K; AA-LCR 51.7% (benchlm); no public needle-recall curve beyond 200K found.

### Conflicting results noted

- **Mode conflict:** Standard vs extended thinking produce materially different scores (e.g. MATH 82.2 → 96.2, AIME 23.3 → 61.3/80.0, GPQA 68.0 → 78.2/84.8). Both cited with mode labeled.
- **Scaffold conflict:** SWE-bench Verified 62.3% (vanilla pass@1, 489 solvable) vs 70.3% (internal scaffold + scoring model) vs 63.7% (standard, Codesota 489 subset) vs 50.0% (HAL mini). Anthropic counts 11 unsolvable problems as failures; Codesota reports 63.7% on same subset without scaffold. All cited.
- **GPQA:** 68.0% (no extended, langbase) vs 78.2% (extended, langbase) vs 84.8% (internal scoring) vs 65.6% (AA) vs 67.4% (benchmarklist) — mode and scoring-method differences.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Strong agentic profile — SWE-bench Verified 62.3–70.3%, TAU-bench Retail 81.2/Airline 58.4, The Agent Company 52.7% (rank 1/8); capped by WebArena 35.1, OSWorld 28.0, Terminal-Bench not found.
- **Reasoning: 74/100.** Strong extended-thinking results — GPQA 78.2/84.8, MATH 96.2, AIME 80.0 (internal), MMMLU 83.2; capped by weak no-extended-thinking mode (GPQA 68.0, HLE ~4, CritPt 0.0), Intelligence Index 15.3 modest.
- **Context window: 80/100.** Declared 200K tokens; AA-LCR 51.7% moderate; no public retrieval curve beyond 200K.
- **Multimodal: 75/100.** Multimodal per launch blog; MMMU 71.8–75.0, MMMU-Pro 71.5; few isolated multimodal benchmarks beyond MMMU family → moderate confidence.
- **Coding: 74/100.** SWE-bench Verified 62.3–70.3%, LiveCodeBench 56.7%, TAU-bench tool use strong; capped by no HumanEval/Codeforces isolated and below Opus-class coding.
- **Cost efficiency: 60/100.** $3/$15 per M mid-range; extended thinking increases token cost; not counted toward Overall.
- **Overall Score: 75/100.** Half-up mean of (70 + 74 + 80 + 75 + 74) / 5 = 74.6 → 75. Best-fit recommendation: hybrid reasoning model where extended thinking unlocks strong math/science/coding; standard mode is a solid 3.5-Sonnet successor.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official Anthropic launch blog + system card + langbase + codesota + benchlm.ai + benchmarklist + llm-stats + Princeton HAL + press); scores are normalized 1–100 interpretations, not official vendor scores. Standard vs extended-thinking modes labeled where distinct.
- Future sources: add a new file next to this one, using the same headings.
