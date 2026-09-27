# GPT-5 — findings by Mimo 2.6 Flash

- Source: OpenAI/GPT-5 (`gpt-5-2025-08-07`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 (OpenAI, previous flagship — no "Free"-tier wording applies; paid API only)
- **Short description:** OpenAI's August 2025 unified flagship that merges a fast model, a deeper reasoning model and a real-time router into one endpoint. Launch leader in math and real-world coding; superseded by GPT-5.1 → GPT-5.6 and GPT-6 within the same line, so it now sits in the value tier.
- **Provider / access:** OpenAI API — model id `gpt-5`, snapshot `gpt-5-2025-08-07`; both **Chat Completions** (`/v1/chat/completions`) and **Responses API** (`/v1/responses`) are offered, plus a Realtime endpoint. Also routed through OpenCode Zen as `opencode/gpt-5`.
- **Release / knowledge:** released 2025-08-07; knowledge cutoff **2024-09-30** (OpenAI model page). Snapshot deprecated 2026-06-11, API removal scheduled 2026-12-11 (OpenAI model page / hokai.io).
- **IDs:** `openai/gpt-5` (API alias `gpt-5`); OpenCode Zen `opencode/gpt-5`. **No Free ID exists on OpenCode Zen** as of 2026-09-27 (`noFreeId`).
- **Context window:** **400,000 input tokens / 128,000 max output tokens** (verified on OpenAI's model page `developers.openai.com/api/docs/models/gpt-5`).
- **Modalities:** text + image + file (PDF) in; **text out**; reasoning yes (`minimal` / `low` / `medium` / `high` effort); tool calls yes; JSON mode yes; prompt caching yes. Audio and video are **not supported** on the API (OpenAI model page).
- **Pricing (as of 2026-09-27):** OpenAI list **$1.25 in / $0.125 cached / $10.00 out per 1M tokens**; OpenCode Zen **$1.07 in / $8.50 out per 1M**. Paid only — no $0 free tier verified; reasoning tokens bill as output.
- **Architecture:** proprietary, undisclosed parameter count; sparse **Mixture-of-Experts** (hokai.io describes it as OpenAI's first MoE flagship), closed weights.

### Raw benchmarks found

> Every number carries its source. Rows with no public measurement say
> "no verified public score found" — nothing below is estimated.

Agent / tool use:

- Tau2-bench Retail: **81.1%** <(OpenAI launch chart, via llm-stats `gpt-5-2025-08-07`)>
- Tau2-bench Telecom: **96.7%** <(same source)>
- Tau2-bench Airline: **62.6%** <(same source)>
- Terminal-Bench 2.1: **no verified public score found** (base `gpt-5` absent from the TB2.1 leaderboard; only later GPT-5.x entries exist)
- GDPval-AA: **no verified public score found** (GDPval postdates this model's eval window)
- OSWorld / AutomationBench: **no verified public score found** (first published for GPT-5.4 and later)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **85.7%** <(OpenAI launch table via codeswap.net; GPT-5 *high* effort 87.3% and GPT-5 Pro 88.4% are separate rows — llm-stats)>
- Humanity's Last Exam: **24.8%** <(llm-stats `gpt-5-2025-08-07`; Artificial Analysis harness reports 28% at high effort)>
- MMLU-Pro: **88.4** <(OpenAI launch, codeswap.net; Artificial Analysis harness 87% via api.airforce)>
- MMLU: **92.5%** <(llm-stats)>
- AIME 2025: **94.6%** <(OpenAI launch, no tools — VentureBeat/Techmeme, wandb.ai summary)>
- Artificial Analysis Intelligence Index: **35.3** at `high` effort on the current v4.x index <(Artificial Analysis via api.airforce)>. At launch (2025-08-07) Artificial Analysis reported **68** on its then-current index — same model, rescaled metric, do not mix the two.
- AA-LCR: Artificial Analysis stated GPT-5 (high and medium) **topped** AA-LCR at launch; **no numeric value published** in that article.
- CritPt / AA-Omniscience / LCR numeric: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**; related honesty numbers: LongFact-Concepts **0.7%**, LongFact-Objects **0.8%**, FActScore **1.0%**, HealthBench (thinking) **1.6%** hallucination <(OpenAI system-card numbers via wandb.ai report)>

Coding:

- SWE-bench Verified: **74.9%** <(OpenAI launch, with thinking — wandb.ai / ODSC / VentureBeat; +22.1 pts over the no-reasoning setting)>
- Aider Polyglot: **88.0%** <(OpenAI launch)>
- LiveCodeBench: **84.6%** <(pricepertoken.com, data from Artificial Analysis; AA harness 85% via api.airforce)>
- HumanEval: **93.4%** <(llm-stats); a 97.4 figure circulates via hokai.io — unverified harness, not used>
- SWE-Lancer (IC-Diamond subset): **100.0%** <(llm-stats, OpenAI launch chart)>
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / SWE-bench Pro / AA Coding Index: **no verified public score found** (first GPT-5.x entries are GPT-5.1-Codex and later)

Long context:

- OpenAI-MRCR (2 needle) 128K: **95.2%**; 256K: **86.8%** <(llm-stats, OpenAI launch chart)>
- GraphWalks BFS <128K: **78.3%**; GraphWalks parents <128K: **73.3%** <(same source)>
- COLLIE: **99.0%** <(same source)>
- BrowseComp long-context 128K: **90.0%**; 256K: **88.8%** <(same source)>
- MRCR / RULER measured at the full 400K window: **no verified public score found** (retrieval degrades past 256K: 86.8% at 256K vs 95.2% at 128K)

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong policy/tool following — Tau2 Telecom 96.7%, Retail 81.1%, Airline 62.6% sit well above the methodology's mid band (Tau 10–25%); capped below 90 because Terminal-Bench 2.1, GDPval-AA and Claw-Eval all report **no verified public score found**, so the three frontier anchors are missing rather than low.
- **Reasoning: 72/100.** GPQA Diamond 85.7%, MMLU-Pro 88.4 and AIME 94.6% are near the frontier band (GPQA 90%+), but HLE 24.8% is far below the 40%+ frontier reference and the current AA Intelligence Index of 35.3 lands in the methodology's 20–35 mid band — those two caps hold it at 72.
- **Context window: 78/100.** 400K total sits in the 200K–500K tier (65–84 → ~79 by interpolation); verified retrieval is good but not stellar at depth (MRCR 95.2% at 128K, 86.8% at 256K, none at 400K), so no bump toward the 500K–1M band.
- **Multimodal: 68/100.** Image + file input with text output only (no audio/video in, no non-text out) maps to the "+image in = 60–70" band; MMMU 84.2% is strong within that band, but the missing output modalities cap it.
- **Coding: 81/100.** SWE-bench Verified 74.9% (launch SOTA) plus Aider Polyglot 88.0% and LiveCodeBench 84.6% are close to the frontier references; capped below 90 by **no verified public score found** for SciCode, DeepSWE/SWE-bench Pro and Terminal-Bench — three of the four frontier coding anchors.
- **Cost efficiency: 80/100.** No free tier; paid at OpenAI $1.25/$10 (Zen $1.07/$8.50). Input matches the ~$1.25 anchor (≈88) but the $8.50–$10 output rate sits between the ~$4.25 (≈88) and $15 (≈60) anchors, pulling the score down to ~80; cached input at $0.125 helps agentic re-runs.
- **Overall Score: 75/100.** (78 + 72 + 78 + 68 + 81) / 5 = 75.4 → 75 (half-up, Cost excluded). Best fit: a dependable **paid** generalist for reasoning, coding and tool-use work when budget matters — but a year past its launch and already replaced twice inside the GPT-5.x line, so it is a value pick, not a frontier pick.

---

## Signature

- Provided by: **Mimo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-09-27
- Method: public internet research (OpenAI model page and launch post, Artificial Analysis, llm-stats, codeswap, pricepertoken, wandb.ai/ODSC/Techmeme summaries); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
