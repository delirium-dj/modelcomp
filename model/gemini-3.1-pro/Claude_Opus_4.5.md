# Gemini 3.1 Pro — findings by Claude Opus 4.5

- Source: Google (`gemini-3.1-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (preview release form `gemini-3.1-pro-preview`); no Free-tier wording on OpenCode Zen
- **Short description:** Google DeepMind's most advanced reasoning model, a point-update over Gemini 3 Pro released in preview on Feb 19, 2026; natively multimodal, optimized for complex reasoning, agentic tool use, and long-horizon coding. Variant/alias: `gemini-3.1-pro-preview` and the `gemini-3.1-pro-preview-customtools` endpoint for mixed bash/custom-tool workflows.【turn0search0】【turn0search2】【turn3fetch0】
- **Provider / access:** Google AI Studio / Gemini API / Vertex AI / Gemini app / Google Antigravity / NotebookLM. API IDs `gemini-3.1-pro-preview` and `gemini-3.1-pro-preview-customtools` (Gemini `generateContent` / Chat Completions compatible). On OpenCode Zen: `opencode/gemini-3.1-pro` (paid only).【turn0search2】【turn1find0】
- **Release / knowledge:** Released 2026-02-19 (blog) / published February 2026 (model card); knowledge cutoff not stated on the model card.【turn1fetch0】【turn2fetch0】
- **IDs:** `opencode/gemini-3.1-pro` (paid); `google/gemini-3.1-pro-preview`. No Free ID exists for this model on Zen (Zen lists it as paid $2.00/$12.00 per 1M; only separately-branded `-free` SKUs are free on Zen).【turn1find0】
- **Context window:** 1,000,000 tokens total (verified on model card, Artificial Analysis, and BenchLM); output up to 64K tokens (verified on model card and catalog).【turn3fetch0】【turn2fetch1】【turn0fetch0】
- **Modalities:** text + image + audio + video in; text out; reasoning yes (three-tier Thinking: Low/Medium/High); tool/function calls yes; JSON mode yes (Gemini structured output).【turn3fetch0】【turn0search3】
- **Pricing (as of 2026-10-02):** $2.00/1M input, $12.00/1M output (≤200K tier); $4.00/1M input / $18.00/1M output (>200K tier); cached input $0.20/1M (cache write ~$0.375/1M). Zen lists identical ≤200K pricing. Paid only on Zen. Free-tier privacy caveat: Google AI Studio/Gemini API may offer limited free access subject to Google AI Additional Terms (potential data-logging); Zen has no free endpoint for this model, so no Zen-side free-tier privacy caveat applies.【turn1find0】【turn2search1】
- **Architecture:** Proprietary; Transformer-based Mixture-of-Experts built on Gemini 3 Pro; parameter count (total/active) not disclosed by Google; weights are closed.【turn3fetch0】【turn0search3】

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (BenchLM/Vals AI run, verified; #vs best 87.3% GPT-6 Astra)【turn0fetch0】. Model card reports Terminal-Bench 2.0 = **68.5%** (Terminus-2 harness)【turn3fetch0】.
- Tau3-Banking / Tau2-Bench: Tau3-Banking — no verified public score found. Tau2-Bench (τ²-bench): **90.8%** Retail / **99.3%** Telecom (model card, self-reported Thinking High)【turn3fetch0】; BenchLM composite τ²-bench = **95.6%** (secondary)【turn0fetch0】.
- GDPval-AA: **Elo 1317** (model card, self-reported)【turn3fetch0】.
- Claw-Eval / ClawProBench: **57.8%** (BenchLM, Claw-Eval leaderboard)【turn0fetch0】.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas = **69.2%** (model card)【turn3fetch0】 (a secondary source cites 73.9% — conflicting)【turn0search6】. BrowseComp (agentic search) = **85.9%** (model card)【turn3fetch0】. APEX-Agents (long-horizon pro tasks) = **33.5%** (model card)【turn3fetch0】. Gert Labs Composite = **56.87%**; ResearchClawBench = **13.3%** (BenchLM)【turn0fetch0】.
  Reasoning / knowledge:
- GPQA Diamond: **94.3%** (model card, no tools)【turn3fetch0】; **95.5%** (BenchLM/Vals AI, verified — best verified row)【turn0fetch0】.
- HLE: **44.4%** no-tools / **51.4%** search+code (model card)【turn3fetch0】; BenchLM HLE w/o tools = **45.4%** (secondary)【turn0fetch0】.
- LCR / MLCR: no verified public score found (AA-LCR v1.1 and MLCR-AA listed but gated "Not publicly available").【turn3fetch2】
- CritPt: no verified public score found (AA lists CritPt as "Under review").【turn3fetch2】
- Artificial Analysis Intelligence Index / BenchLM overall: AA Intelligence Index = **30**, rank **#93 of 224** (preview; detailed breakdown "Not publicly available")【turn2fetch1】【turn3fetch2】; BenchLM overall = **64.5/100**, rank **#30 of 194** (data as of 2026-09-25)【turn0fetch0】.
- Omniscience Accuracy / Hallucination Rate: no verified public score found (AA-Omniscience Accuracy and Non-Hallucination Rate gated)【turn3fetch2】.
- Additional reasoning: ARC-AGI-2 = **77.1%** verified (model card/BenchLM provider-exact)【turn3fetch0】【turn0fetch0】; ARC-AGI-3 = **0.4%** (BenchLM, ARC Prize official)【turn0fetch0】; MMLU-Pro = **91.0%** (BenchLM/Vals verified)【turn0fetch0】; FrontierMath v2 = **36.9%** (BenchLM, Epoch AI)【turn0fetch0】.
  Coding:
- SWE-bench Verified / SWE-Pro: SWE-bench Verified = **80.6%** (model card, single attempt)【turn3fetch0】; SWE-bench (Vals) = **78.8%** (BenchLM, verified)【turn0fetch0】; SWE-Bench Pro (Public) = **54.2%** (model card)【turn3fetch0】.
- LiveCodeBench: LiveCodeBench (Vals) = **88.5%** (BenchLM, verified)【turn0fetch0】; LiveCodeBench Pro = **82.9%** / Elo **2887** (model card)【turn3fetch0】【turn0fetch0】.
- SciCode / AA-SciCode: SciCode = **59%** (model card)【turn3fetch0】 (AA SciCode "Under review" — gated)【turn3fetch2】.
- Vibe Code Bench: **32.03%** (BenchLM, Vals AI v1.1)【turn0fetch0】.
- DeepSWE / Coding Index / other: DeepSWE — no verified public score found. React Native Evals = **78.9%** (BenchLM)【turn0fetch0】.
  Long context:
- MRCR v2 (8-needle): **84.9%** at 128K (average); **26.3%** at 1M (pointwise) (model card)【turn3fetch0】. No RULER/GraphWalks value reported.

### Normalized scores (1-100)

- **Tool use: 80/100.** Strong τ²-bench (90.8–99.3%), MCP Atlas 69.2%, BrowseComp 85.9%, TB2.1 70.8% (above the 45–60 mid band); capped below 90 by GDPval-AA Elo 1317 (mid, well under the 1750+ frontier mark), Claw-Eval 57.8%, APEX-Agents 33.5%, and BenchLM Agentic rank #47/105 (56th percentile).【turn3fetch0】【turn0fetch0】
- **Reasoning: 90/100.** Frontier signals GPQA Diamond 94.3–95.5% and HLE 44.4–45.4% (both meet the ≥90% / ≥40% frontier bars); capped from 92+ by AA Intelligence Index 30 (above-average but not top-tier on AA's harder v4.3.2 scale) and modest FrontierMath v2 36.9%.【turn3fetch0】【turn0fetch0】【turn2fetch1】
- **Context window: 95/100.** 1M-token verified window places it in the ≥1M tier (95–100); held at the tier floor (not 100) because long-range retrieval is weak — MRCR v2 84.9% @128K and only 26.3% @1M, far below the ≥98%-at-512K+ bar for 100.【turn3fetch0】
- **Multimodal: 90/100.** Full multimodal input coverage (text + image + audio + video in) qualifying for the "+audio in" 90–100 band; output is text-only (no image/video/audio generation), holding it at 90 rather than higher.【turn3fetch0】
- **Coding: 84/100.** Strong SWE-bench Verified 80.6%, LiveCodeBench 88.5%, SciCode 59% (frontier); capped below 90 by Terminal-Bench 2.1 70.8% (under the 85% frontier bar), Vibe Code Bench 32.03%, and BenchLM Coding rank #52/135.【turn3fetch0】【turn0fetch0】
- **Cost efficiency: 63/100.** $2.00/$12.00 per 1M (≤200K) sits between the ~$1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors, slightly better than the $3/$15 point thanks to cheaper input and $0.20 cached input; not a low-cost tier.【turn1find0】【turn2search1】
- **Overall Score: 87.8/100.** Mean of five non-cost dims (80+90+95+90+84)/5 = 439/5; best-fit recommendation: frontier-tier natively-multimodal reasoning model with strong long-context and coding — strong pick for agentic + multimodal + long-context workflows, but verify weak 1M-token retrieval and mid-tier independent coding-agentic ranks before selecting purely for terminal/SWE automation.

---

## Signature

- Provided by: **Claude Opus 4.5 (anthropic/claude-opus-4.5)** — 2026-10-02
- Method: public internet research (Google DeepMind model card, Google blog, Artificial Analysis, BenchLM, OpenCode Zen docs, OpenRouter/catalog pricing); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
