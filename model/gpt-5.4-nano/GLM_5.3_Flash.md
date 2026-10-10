# GPT 5.4 Nano — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4-nano`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Nano
- **Short description:** The nano size of OpenAI's GPT-5.4 generation (Mar 2026) — a very fast, ultra-cheap reasoning model with the family's 400K context; among the leading models in its price class on the AA composite (well above the class median), though far from frontier in absolute terms. Deprecated by GPT-5.6 Luna.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-nano` via `https://opencode.ai/zen/v1/responses` (paid, $0.20/$1.25); OpenAI Responses API ($0.20/$1.25 and a $0.100/$0.625 route visible per BenchLeader; Azure $0.20/$1.25). GPT-5.4/Pro/Mini are the family's larger variants — different models.
- **Release / knowledge:** Released 2026-03-17 (Artificial Analysis; GPT-5.4 family announced Mar 5, 2026); knowledge cutoff Aug 31, 2025 (AA spec sheet).
- **IDs:** `opencode/gpt-5.4-nano` (Zen, paid); `gpt-5.4-nano` (OpenAI API)
- **Context window:** 400K tokens total (AA: 400k combined; ~600 A4 pages; BenchLeader 400k)
- **Modalities:** Text and image in, text out; reasoning supported (`reasoning_effort`, AA evaluates at xhigh); tool calling; structured outputs; prompt caching
- **Pricing (as of 2026-10-09):** Paid — $0.20 / 1M input, $1.25 / 1M output (blended $0.463/M per BenchLeader; $0.100/$0.625 route seen), cache read $0.02. AA blended rate $0.18/1M, $0.183 cost per Intelligence Index run. Output speed 164 tok/s (fastest quarter), first token 0.97s.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed.

### Raw benchmarks found

> BenchLeader full effort-sweep tables (data as of 2026-10-10) citing Epoch/AA/Vals boards; xhigh best config unless noted. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.1: **60.7%** (AA — fills the previously-missing TB row); TB2.1 (Vals): **41.6%**; Terminal-Bench Hard (AA): **42.4%** #46; Terminal-Bench 4.0 (AA): **0.5%** (very weak)
- Tau2-Bench Telecom (AA): **76.0%**; GDPval-AA v2.1: **22.5%** (AA); APEX-Agents (AA): **24.9%** #18; ITBench SRE (AA): 24.4%
- Harvey's Legal Agent (Vals): **0.0%**; Finance Agent v2 (Vals): 38.2%; Legal Research (Vals): 6.3%
- Artificial Analysis Intelligence Index v4.3.2: **20.7** (AA — corroborates the earlier 21; BenchLeader Index **53.5 ±6.7**, #266 of 759, xhigh best — Instruction following 74, Agents & tools 61, Composite 44)

Reasoning / knowledge:

- GPQA Diamond: **78.5%** #130 (Epoch, high — fills the previously-missing GPQA; AA 81.7%, Vals 77.5%)
- HLE: **28.3%** #154 (AA — fills the previously-missing HLE; under the 40% bar)
- ARC-AGI-2 (verified): **5.7%** #153 (ARC Prize — fills; very weak); ARC-AGI-1: 51.5% #156; CritPt: **9.3%** #117
- FrontierMath Tiers 1–3: **44.9%** #52 (Epoch v2 — fills); Tier 4: 12.2%; OTIS Mock AIME: 87.8%; AIME (Vals): **88.8%** #28; LiveBench Math: **91.0%** #32; ProofBench: 5.0%
- AA-LCR: **76.7%** #132 (AA — fills the previously-missing LCR); LMCA: 36.9%; DTBench: 80.3%
- SimpleQA Verified: **11.7%** (Epoch — weak); MMLU-Pro (Vals): **77.2%**; AA-Omniscience: non-hallucination 25.8% at xhigh (poor)
- LiveBench Reasoning: **81.1%** #50; Kagi LLM Benchmark: 39.7%; ForecastBench: 57.3%

Coding:

- SWE-bench (Vals): **69.8%** #61 (fills the previously-missing independent SWE row)
- LiveCodeBench: **84.0%** #40 (Vals — fills the previously-missing LCB)
- SciCode: **46.9%** (Epoch / AA 47.2% — fills; below the 55%+ frontier mark)
- Vibe Code Bench v1.1: **26.1%** (Vals — weak); Code Migration: 14.5%; WeirdML: 49.2%; ALE-Bench: 1004.5
- LiveBench Coding: 70.8% #59; LMArena Coding: 1460
- SWE-bench Verified: no verified public score found for `gpt-5.4-nano`

Long context:

- AA-LCR **76.7%** measured (fills the previously-missing row); 400K window

Multimodal / vision:

- MMMU-Pro (Vals): **73.6%** #57 (fills the previously-missing vision row); AA-MMMU-Pro: **65.4%**; Vals Multimodal Index: **47.6%** #26; SAGE: 38.1%; LMArena Vision: 1196

### Normalized scores (1–100)

- **Tool use: 58/100.** Now measured: TB2.1 60.7% (AA) / 41.6% (Vals), TB Hard 42.4% (#46) and Tau2 76.0% clear the low-mid band; TB4.0 0.5%, GDPval 22.5% and Harvey 0.0% cap it.
- **Reasoning: 64/100.** GPQA 78.5–81.7% (filled — high-mid band, 60–80 → 55–65), AIME (Vals) 88.8% and LiveBench Math 91.0% are strong for the class; HLE 28.3%, ARC-AGI-2 5.7% and the 25.8% non-hallucination rate cap it.
- **Context window: 76/100.** 400K tokens — near the top of the 200K–500K tier (65–84); measured AA-LCR 76.7% is solid for the tier.
- **Multimodal: 72/100.** Text + image input, text output only, with measured MMMU-Pro (Vals) 73.6% and the Vals Multimodal Index 47.6% — above the 60–70 image-in band on measured vision.
- **Coding: 72/100.** Now with filled rows: SWE-bench (Vals) 69.8%, LCB 84.0% (#40); SciCode 46.9% below the 55%+ mark and Vibe 26.1% cap it — strong for the price class, mid-tier in absolute terms.
- **Cost efficiency: 96/100.** $0.20/$1.25 per 1M (a $0.100/$0.625 route seen; blended $0.463/M) with a $0.183/run cost — near the ~$0.10/$0.20 = 97–99 methodology reference; paid, so short of 100.
- **Overall Score: 68/100.** Mean of the five quality dims (58 + 64 + 76 + 72 + 72) / 5 = 68.4 → 68. Best fit: ultra-high-volume, cost-sensitive micro-tasks (classification, extraction, routing) where its price/speed dominate — not for deep coding or frontier reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-10 citing Epoch/AA/Vals boards, OpenCode Zen docs cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing GPQA 78.5–81.7%, HLE 28.3%, SWE-bench (Vals) 69.8%, LCB 84.0%, TB2.1 60.7%/41.6%, SciCode 46.9%, MMMU-Pro 73.6%, AA-LCR 76.7%, FrontierMath 44.9% — Tool 45→58, Reasoning 55→64, Context 75→76, Multimodal 65→72, Coding 50→72, Cost 95→96, Overall 58→68.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Luna.md`, using the same headings.
