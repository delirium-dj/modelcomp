# GPT-5.6 Sol — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Discovered during GPT-6 Astra research (Step 2, dynamic discovery): OpenAI's on-sale flagship and the comparison column in nearly every September 2026 launch table had no folder. Appended at queue end.

## Model card

- **Name:** GPT-5.6 Sol (flagship of the GPT-5.6 family; no Free-tier wording)
- **Short description:** OpenAI's mid-2026 flagship and direct predecessor to GPT-6 Astra — the model every September 2026 launch table benchmarks against. Still on sale at $4/$20; Astra's launch repriced the family 2.5x upward. Leads AA-Briefcase Presentation Quality Elo; superseded for new work by GPT-6 Astra.
- **Provider / access:** OpenAI API (`gpt-5.6-sol`, max reasoning tier tracked by AA); 7 API providers on AA. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Released July 9, 2026 (AA release record; same day as sibling GPT-5.6 Luna GA). Knowledge cutoff not verified in reviewed sources (sibling Luna: Feb 16, 2026).
- **IDs:** `gpt-5.6-sol` (siblings: `gpt-5.6-luna`, `gpt-5.6-terra`, successor `gpt-6-astra`).
- **Context window:** 1M tokens (Artificial Analysis model page); max output not surfaced this pass. OpenAI's GPT-5.6 family bills >272K inputs at a surcharge (Astra docs pattern; Sol-specific terms not re-verified).
- **Modalities:** Text + image in; text out. Reasoning: yes (max effort tracked). Audio/video not supported per the family pattern (AA lists text/image only).
- **Pricing (as of 2026-09-19):** $4.00 in / $20.00 out per 1M; 90% cache discount (AA). AA cost per task $1.99; blended $3.08/1M. No free tier.
- **Architecture:** Proprietary, closed weights; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- AutomationBench-AA: **60%** (Artificial Analysis; Astra 69%, Grok 4.6 67%)
- GDPval-AA v2: **Elo 1728** (xAI launch table, Sol Max column; Fable 5 1741, Grok 4.6 1753)
- Terminal-Bench v4.0: **40%** (AA) / **37%** (AA Coding Agent Index harness; Astra 56-59%)
- Terminal-Bench v3.0: **34.6%** (xAI table)
- SWE-Atlas-QnA: **54%** (AA; Astra 62%)
- OSWorld 2.0: **65.7%**; ScreenSpot-Pro: **76.9%**; Agents' Last Exam: **53.6%**; BrowseComp: **90.4%**; AutomationBench (OpenAI harness): **18.1%**; BenchCAD: **83.3%**; ExploitBench: **78.5%** (OpenAI's GPT-6 Astra comparison table)
- APEX-Agents: **56.7%** (xAI table)
- Claw-Eval / Tau / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **47** at max, #14/200 (AA v4.3.2; median 24). Note: xAI's launch table cites **61** for Sol Max on an earlier Index version — version discrepancy flagged
- MRCR v2 8-needle: **91.5%** @256K–512K and **73.8%** @512K–1M (OpenAI table)
- AA-Omniscience: hallucination rate **92%** at max effort (AA; halved to 51% by Astra)
- HealthBench Professional (length-adjusted): **60.5%** (OpenAI table)
- GPQA / HLE / LCR: no individual public rows surfaced this pass
- AA-Briefcase: **1502** Elo (xAI table) — and still the AA-measured leader in Presentation Quality Elo

Coding:

- DeepSWE v1.1: **72%** (AA harness; 73% per xAI's table; Astra 68%/74.1%)
- FrontierCode 1.1 (Extended): **60.6%** (xAI table)
- CursorBench 3.2: **67.2%** (xAI table)
- SWE-bench Verified / Pro / LiveCodeBench / SciCode: no verified public score found for Sol specifically

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval-AA 1728 and Briefcase 1502 are near-frontier and AutomationBench-AA 60% is solid, but TB4.0 37–40% and the 18% OpenAI-harness AutomationBench row show clear gaps vs Astra.
- **Reasoning: 78/100.** AA Index 47 (#14/200) edges Qwen3.8-Max and Grok 4.6, but the 73.8% deep MRCR and 92% hallucination rate are the weakest frontier-class numbers reviewed this pass.
- **Context window: 89/100.** 1M window (95–100 tier) docked for the verified 73.8% retrieval in the 512K–1M band — the poorest deep-retrieval evidence among September 2026 flagships.
- **Multimodal: 65/100.** Text+image in / text out — middle of the 60–70 image-in band.
- **Coding: 84/100.** DeepSWE 72–73% is frontier-adjacent and FrontierCode/CursorBench rows are strong, but TB4.0 37–40% and SWE-Atlas-QnA 54% trail the Astra/K3/Fable band.
- **Cost efficiency: 52/100.** $4/$20 interpolates between the $3/$15→60 and $10/$50→30 anchors; $1.99/task is mid-pack. No free tier.
- **Overall Score: 79.2/100.** (80+78+89+65+84)/5 = 79.2. Best fit: still a capable on-sale flagship for agentic work at $4/$20 — but GPT-6 Astra supersedes it on every dimension reviewed; new work should default to Astra.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-09-19
- Method: public internet research (fresh web search: Artificial Analysis model page, OpenAI GPT-6 Astra cross-table, xAI launch evals table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
