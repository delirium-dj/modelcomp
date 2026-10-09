# GPT 5.4 Mini — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Mini
- **Short description:** The mini size of OpenAI's GPT-5.4 generation (Mar 2026) — a fast, cheap reasoning model with the GPT-5.4 family's 400K context but below-average intelligence on the AA composite; very verbose at xhigh effort. Deprecated by GPT-5.6 Terra.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-mini` via `https://opencode.ai/zen/v1/responses` (paid, $0.75/$4.50); OpenAI Responses API (2 providers tracked by AA; a $0.375/$2.25 OpenAI route also visible per BenchLeader). GPT-5.4 and GPT-5.4 Pro are the family's full/maximum variants — different models.
- **Release / knowledge:** Released 2026-03-17 (Artificial Analysis; GPT-5.4 family announced Mar 5, 2026); knowledge cutoff Aug 31, 2025 (AA spec sheet).
- **IDs:** `opencode/gpt-5.4-mini` (Zen, paid); `gpt-5.4-mini` (OpenAI API)
- **Context window:** 400K tokens total (AA: 400k combined; ~600 A4 pages; BenchLeader 400k)
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`, AA evaluates at xhigh); tool calling; structured outputs; prompt caching
- **Pricing (as of 2026-10-09):** Paid — $0.75 / 1M input, $4.50 / 1M output (blended $1.69/M per BenchLeader; $0.375/$2.25 route seen), cache read $0.075. AA blended rate $0.65/1M, $0.447 cost per Intelligence Index run. Output speed 271 tok/s (fastest quarter), first token 1.01s.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> BenchLeader full effort-sweep tables (data as of 2026-10-09) citing Epoch/AA/Vals boards; xhigh best config unless noted. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1: **54.7%** (Vals — fills the previously-missing TB row; AA 59.2%); TB Hard (AA): **52.3%** #19; TB4.0 (AA): **2.0%** / Vals 2.5% (very weak)
- Tau2-Bench Telecom (AA): **83.3%**; MCP Atlas (Scale AI SEAL): **56.7%** #30 (fills)
- GDPval-AA v2.1: **25.8%** (AA); APEX-Agents (AA): **28.2%** #14; ITBench SRE (AA): 35.2%; Harvey (Vals): **0.0%**; Finance Agent v2 (Vals): 45.4%
- Artificial Analysis Intelligence Index v4.3.2: **24.1** (AA — corroborates the earlier 24; BenchLeader Index **54.9 ±5.0**, #223 of 760, xhigh best — Instruction following 72, Composite 41)

Reasoning / knowledge:

- GPQA Diamond: **86.9%** #71 (Epoch, xhigh — fills the previously-missing GPQA; AA 87.5%, Vals 83.1%)
- HLE: **28.1%** #156 (AA — fills; under the 40% bar)
- ARC-AGI-2 (verified): **18.9%** #127 (ARC Prize — fills; weak); ARC-AGI-1: 63.7% #136; CritPt: **10.0%** #111
- FrontierMath Tiers 1–3: **51.2%** #46 (Epoch v2 — fills); Tier 4: 9.8%; OTIS Mock AIME: 88.9%; AIME (Vals): **95.6%** #8; ProofBench: 21.0%
- AA-LCR: **77.0%** #130 (AA — fills the previously-missing LCR); LMCA: 40.8%; DTBench: 80.0%
- SimpleQA Verified: **29.4%**; MMLU-Pro (Vals): **84.5%**; AA-Omniscience: non-hallucination **9.8%** (severe hallucination); LiveBench Math: 78.5%
- Kagi LLM Benchmark: 37.9%; ForecastBench: 57.0%

Coding:

- SWE-bench (Vals): **73.0%** #51 (fills the previously-missing independent SWE row)
- LiveCodeBench: **81.5%** #59 (Vals — fills the previously-missing LCB)
- SciCode: **49.9%** (Epoch / AA 52.1% — fills; below the 55%+ frontier mark)
- Vibe Code Bench v1.1: **48.0%**; Code Migration: 12.9%; ProgramBench: 0.0% (Vals — weak)
- FrontierCode: **27.0%** #30 (Cognition, not-stated); WeirdML: 60.3%; ALE-Bench: 1188.6; LiveBench Coding: 71.6%
- SWE-bench Verified: no verified public score found for `gpt-5.4-mini`

Long context:

- AA-LCR **77.0%** measured (fills the previously-missing row); 400K window

Multimodal / vision:

- MMMU-Pro (Vals): **79.3%** #48 (fills the previously-missing vision row); AA-MMMU-Pro: **73.3%**; SAGE (Vals): **50.8%** #15; Vals Multimodal Index: **54.2%** #21; LMArena Vision: 1245

### Normalized scores (1–100)

- **Tool use: 58/100.** Now measured: TB2.1 54.7% (Vals), TB Hard 52.3% (#19), Tau2 83.3%, MCP Atlas 56.7% (#30) clear the low-mid band; TB4.0 2.0%, Harvey 0.0% and GDPval-AA 25.8% cap it.
- **Reasoning: 62/100.** GPQA 86.9% (filled — under the 90% reference), AIME (Vals) 95.6% and FrontierMath 51.2% are respectable; HLE 28.1%, ARC-AGI-2 18.9%, AA Index 24.1 and the severe 9.8% non-hallucination rate cap it.
- **Context window: 76/100.** 400K tokens — near the top of the 200K–500K tier (65–84); measured AA-LCR 77.0% is solid for the tier.
- **Multimodal: 72/100.** Text + image input, text output only, with measured MMMU-Pro (Vals) 79.3% and SAGE 50.8% — above the 60–70 image-in band on measured vision.
- **Coding: 72/100.** Now with filled rows: SWE-bench (Vals) 73.0%, LCB 81.5%, SciCode 49.9% (below the 55%+ mark); Vibe 48.0%, ProgramBench 0.0% and missing SWE-V cap it.
- **Cost efficiency: 90/100.** $0.75/$4.50 per 1M tokens (a $0.375/$2.25 route also seen) — cheaper input than the ~$1.25/$4.25 = ~88 reference, plus a $0.447/task AA cost that Pareto-leads the price band.
- **Overall Score: 68/100.** Mean of the five quality dims (58 + 62 + 76 + 72 + 72) / 5 = 68.0. Best fit: high-volume, latency-sensitive workloads at a very low price — not for deep coding or agentic quality; step up to GPT-5.4/5.6-class.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-09 citing Epoch/AA/Vals boards, OpenCode Zen docs cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing GPQA 86.9% #71, HLE 28.1%, ARC-AGI-2 18.9%, SWE-bench (Vals) 73.0%, LCB 81.5%, SciCode 49.9%, TB2.1 54.7%, MCP Atlas 56.7%, MMMU-Pro 79.3%, AA-LCR 77.0%, FrontierMath 51.2% — Tool 46→58, Reasoning 55→62, Context 75→76, Multimodal 65→72, Coding 52→72, Overall 59→68.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
