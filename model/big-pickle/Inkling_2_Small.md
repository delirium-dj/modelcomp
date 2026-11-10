# Big Pickle (GLM 4.6) — findings by Fledge Alpha

- Source: OpenCode Zen free stealth tier (`big-pickle`, community consensus: GLM-4.6)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Free OpenCode Zen stealth-tier offering widely attributed to Z.ai's GLM-4.6 — zero-cost inference of a 357B MoE reasoning model.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`), free promotional tier; paid equivalent via DeepInfra/Fireworks/OpenRouter (`z-ai/glm-4.6`).
- **Release / knowledge:** GLM-4.6 Sep 30, 2025; knowledge cutoff April 2025 (per ModelRegistry/wisegpt).
- **IDs:** `opencode/big-pickle`; no first-party Big Pickle model ID disclosed; free Zen ID `opencode/big-pickle`.
- **Context window:** 200–203K (205K per ModelRegistry); 128K max output.
- **Modalities:** text in/out; reasoning; tool calling; structured output.
- **Pricing (as of 2026-10-05):** free on Zen during promotion; paid GLM-4.6 ~$0.50–0.60 in / $2.00–2.20 out per 1M.
- **Architecture:** 357B MoE / 32B active (AA), MIT license, bilingual training.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench Telecom: **77%** (Opper/AA)
- Terminal-Bench Hard: **29%** (Opper/AA)
- BrowseComp: **45.1%** (llm-stats vendor-row; composite disagrees on source)

Reasoning / knowledge:

- GPQA Diamond: **63%** (Opper/AA) — vendor row claims 81; AA table wins (63% at 104th percentile-ish)
- HLE: **6%** (Opper/AA)
- MMLU-Pro: **78%** (Opper/AA)
- AIME 2025: **44%** (Opper/AA) — vendor row claims 93.9
- IFBench: **37%** (Opper/AA)
- Long-context reasoning: 26% (Opper/AA)

Coding:

- SWE-Bench Verified: **68.0%** (llm-stats vendor row / llmleaderboard)
- LiveCodeBench v6: **82.8%** (llm-stats vendor row) vs AA-listed **56%** — using the lower AA row for scoring conservatively

Note: GLM-4.6's own launch materials report SWE-bench Verified 68.0 and LiveCodeBench v6 82.8; the Opper/AA rows are independent but lower. Both are cited; scores below use the lower (independent) row where they disagree.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 72/100.** τ²-Bench Telecom 77 and Terminal-Bench Hard 29 verified; GPT-5.4-level consistent by vendor.
- **Reasoning: 70/100.** GPQA 63, MMLU-Pro 78, AIME 44 (AA) — solid mid-tier; vendor row higher but capped by independent check.
- **Context window: 86/100.** 200K native; below the 1M cohort.
- **Multimodal: 15/100.** Text-only.
- **Coding: 68/100.** SWE-Bench Verified 68.0 verified vendor row; LCB 56 per AA.
- **Cost efficiency: 100/100.** Free on the Zen tier during promotion; paid equivalent ~$0.50–0.60 per 1M.
- **Overall Score: 62/100.** Mean of five non-cost dims (72+70+86+15+68)/5 = 62.2 → 62; best fit: free-tier access to GLM-4.6 capability.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Z.ai model card aggregators, Opper AA table, llm-stats vendor rows, ModelRegistry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
