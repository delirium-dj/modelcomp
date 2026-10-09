# GPT 5.1 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.1
- **Short description:** The API reasoning model of the GPT-5.1 generation (Nov 2025) — GPT-5.1 Thinking released as `gpt-5.1`, with adaptive reasoning that spends more time on complex problems and responds faster on simple ones; also a clearer, more conversational tone than GPT-5. Now deprecated by GPT-5.2.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.1` via `https://opencode.ai/zen/v1/responses` (paid, $1.07/$8.50); OpenAI Responses API + Chat Completions (first-party pricing $1.25/$10.00 per Artificial Analysis; a $0.625/$5.00 OpenAI route also visible at 93 tok/s; OpenRouter price history now $1.38 in / $11.00 out). ChatGPT sibling is GPT-5.1 Instant (`gpt-5.1-chat-latest`) — a different model.
- **Release / knowledge:** Released 2025-11-12/13 (OpenAI blog + Artificial Analysis); knowledge cutoff Sep 30, 2024 (Artificial Analysis spec sheet).
- **IDs:** `opencode/gpt-5.1` (Zen, paid); `gpt-5.1` (OpenAI API); system card also names it `gpt-5.1-thinking`
- **Context window:** 400K total (BenchLeader 400k; OpenAI dev post / AA's 272K combined-cap citation conflicts — 400K total / 128K output per the effort-sweep provider table)
- **Modalities:** Text and image in, text out; adaptive reasoning (`reasoning_effort`); tool calling with preamble messages; structured outputs; prompt caching; Batch API
- **Pricing (as of 2026-10-09):** Paid — $1.07 / 1M input, $8.50 / 1M output on Zen (cache read $0.107); OpenAI first-party $1.25 / $10.00 (AA; $0.625/$5.00 route seen); OpenRouter history now $1.38/$11.00. Batch API discount available. Output speed 80 tok/s (AA-measured), first token 1.30s.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. Deprecated — AA confirms only the default 10k-token workload is still benchmarked; superseded by GPT-5.2.

### Raw benchmarks found

> BenchLeader full effort-sweep tables (data as of 2026-10-09) citing Epoch/AA/Vals/Scale boards; high effort best config unless noted. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench: **47.6%** #37 (tbench.ai, medium effort — fills the previously-missing TB row); Terminal-Bench Hard (AA): **45.5%** #34; TB2.1 (AA): **52.4%**; TB2.0 (Vals): 44.9%
- Tau2-Bench Telecom (AA): **81.9%**; GDPval-AA v2.1: **16.5%** (AA — weak); Tau3-Banking (AA): 15.9%
- MCP Atlas (Scale AI SEAL): **50.1%** #31 (fills the previously-missing row)
- Poker Agent (Vals): 1038.6 #8; Vending-Bench 2: 1473.4; DeepResearch Bench: 42.8%
- Artificial Analysis Intelligence Index v4.3.2: **24.7** #161 (AA — updates the earlier 25 estimate; BenchLeader Index **57.9 ±3.5**, #155 of 760, high best — Instruction following 71, Agents & tools 42)

Reasoning / knowledge:

- GPQA Diamond: **87.6%** #65 (Epoch, high — fills the previously-missing GPQA; AA 87.3%, Vals 86.6%)
- HLE: **23.7%** #17 (Scale AI / CAIS, not-stated — fills the previously-missing HLE; AA 28.5% high)
- ARC-AGI-2 (verified): **17.6%** #131 (ARC Prize, high — weak); ARC-AGI-1: 72.8% #122; CritPt: **4.9%** #147
- SimpleBench: **53.2%** #41; LMCA: 43.9% #79; DTBench: 90.1% #67; ForecastBench: 58.1%
- AIME (Vals): **93.3%**; MGSM: **93.0%**; OTIS Mock AIME: 88.6%; MathArena Apex: 1.0%; HELM Omni-MATH: 46.4%
- AA-LCR: **80.0%** #73 (AA — fills the previously-missing LCR)
- MMLU-Pro (Vals): **86.4%**; MedQA (Vals): **96.4%** #2; MedScribe (Vals): **88.1%**; LegalBench (Vals): 85.7%; CaseLaw v2: 73.4% #2
- AA-Omniscience: accuracy 37.7%, non-hallucination **48.1%** #122 at high; FORTRESS 25.7%; MASK 86.3%
- HELM Capabilities mean: **65.6%** #33; IFEval (HELM): **93.5%** #3; WildBench (HELM): **86.3%** #2

Coding:

- SWE-bench Verified: **68.0%** #26 (Epoch, high — fills the previously-missing SWE-V row); swebench.com bash-only: **66.0%** #17 (medium; any scaffold 66.0%)
- LiveCodeBench: **86.5%** #21 (Vals — fills the previously-missing LCB)
- SWE-bench (Vals): 69.8%; Vibe Code Bench v1.1: **24.6%** (weak); WeirdML: **60.8%** #47; ALE-Bench: **1192.2** #35; GSO-Bench: 13.7%
- SciCode: **43.3%** (SciCode via Epoch, not-stated — fills the previously-missing SciCode; below the 55%+ frontier mark)
- LMArena Coding: 1492; LMArena WebDev: 1395
- Terminal-Bench 2.1 (coding harness, AA): 52.4%

Long context:

- AA-LCR **80.0%** #73 (AA — fills the previously-missing long-context measurement); LMArena Document: 1416; 400K window

Multimodal / vision:

- MMMU (validation): **85.4%** #1 (not-stated); MMMU-Pro (official): **79.0%** #4 / 76.0% (not-stated); MMMU-Pro (Vals): **83.2%** #33 (fills the measured vision rows); VISTA: 43.8% #31; VPCT: 58.7% #7; LMArena Vision: 1250

### Normalized scores (1–100)

- **Tool use: 55/100.** Now measured: TB 47.6% (#37), TB Hard 45.5%, TB2.1 52.4%, MCP Atlas 50.1% (#31), Tau2 81.9% and GDPval-AA 16.5% — mid-band at best; BenchLeader's Agents & tools 42 corroborates the below-average agentic placement.
- **Reasoning: 68/100.** GPQA 87.6% (filled — just under the 90% reference), AIME (Vals) 93.3% and AA-LCR 80.0% are respectable; HLE 23.7%/28.5% stays under the 40% bar, ARC-AGI-2 17.6% is weak, and AA Index 24.7 caps it.
- **Context window: 72/100.** 400K total (BenchLeader authority) — 200K–500K tier (65–84) above the 200K=70 anchor; measured AA-LCR 80.0% is strong for the tier.
- **Multimodal: 72/100.** Text + image input, text output only, with measured MMMU-Pro 83.2%/79.0% (#4) and MMMU 85.4% (#1) — above the 60–70 image-in band on measured vision.
- **Coding: 75/100.** Now with filled rows: SWE-V 68.0%/66.0% (#26/#17), LCB 86.5% (#21), SWE-bench (Vals) 69.8%; SciCode 43.3% below the 55%+ mark and Vibe 24.6% weak — mid-frontier.
- **Cost efficiency: 72/100.** $1.07/$8.50 Zen (OpenAI first-party $1.25/$10.00; $0.625/$5.00 route seen) sits between the methodology's ~$1.25/$4.25 = ~88 and $3/$15 = ~60 reference points; the OpenRouter history's $1.38/$11.00 and deprecated status are caveats.
- **Overall Score: 68/100.** Mean of the five quality dims (55 + 68 + 72 + 72 + 75) / 5 = 68.4 → 68. Best fit: a deprecated mid-tier reasoning/chat upgrade — use only for legacy reproducibility; step up to GPT-5.2/5.5-class models for current work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (BenchLeader full effort-sweep tables data as of 2026-10-09 citing Epoch/AA/Vals/Scale/HELM boards, OpenCode Zen docs cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing GPQA 87.6% #65, HLE 23.7%, SWE-V 68.0%/66.0%, LCB 86.5% #21, SciCode 43.3%, TB 47.6%, MCP Atlas 50.1%, MMMU-Pro 83.2%/79.0% #4, AA-LCR 80.0%; updates AA Index 25→24.7, price history — Tool 45→55, Reasoning 58→68, Context 68→72, Multimodal 65→72, Coding 58→75, Cost 73→72, Overall 59→68.
- Future sources: add a new file next to this one, e.g. `GPT_5.2.md`, using the same headings.
