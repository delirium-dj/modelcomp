# GPT-5.6 Terra — findings by Big Pickle

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** The "balanced" mid tier of OpenAI's July 2026 GPT-5.6 family — everyday coding, reasoning, and agentic tasks at roughly half the price of the Sol flagship. OpenAI positions Terra as GPT-5.5-class quality at lower cost.
- **Provider / access:** OpenAI API, Codex, ChatGPT, and Azure AI (`gpt-5.6-terra`); Responses API preferred, Chat Completions compatible.
- **Release / knowledge:** 2026-07-09 (GA after 06-26 preview); knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5.6-terra` (OpenAI; also `gpt-5.6-terra.pro` variant in API).
- **Context window:** 1,050,000 – 1,100,000 total / 128,000 max output (lmmarketcap, requesty.ai); pricing bands switch at >272K input.
- **Modalities:** text + image input; text output; explicit reasoning mode; tool calling, web search, code execution, JSON schema; Vision+Reasoning+Tool calling (requesty.ai capability set).
- **Pricing (as of 2026-09-20):** $2.00 / $12.00 per 1M standard; $0.20 cached read; long-context band (>272K) $4.00 / $18.00, cache $0.40 (commandcode.ai). OpenRouter/Azure rate cards match.
- **Architecture:** Proprietary, undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (lmmarketcap GPT-5.6 family report; anotherwrapper lists 84.7%; commandcode Terminal-Bench index **88, #4/46**)
- DeepSWE 1.1: **69.6%** (byteiota.com; anotherwrapper)
- FrontierCode 1.1 Main: **41.3%** (byteiota.com)
- AutomationBench: **23.6%** (byteiota.com)
- OSWorld 2.0: **50.2%** (anotherwrapper)
- BrowseComp: **87.5%** (anotherwrapper)
- ToolAthlon: **53.1%**; OpenAI Search function calling: **94.6%** (anotherwrapper)
- Agents' Last Exam: Terra edges Claude Fable 5 at a fraction of cost (lmmarketcap report; exact % not published)
- Tau3 / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.5%** (commandcode.ai); anotherwrapper comparison lists 77.3% on a different harness — use commandcode's as primary, treat as ~90+ range
- ARC-AGI-2: **83.9%**; ARC-AGI-1 Verified: **60.2%** (anotherwrapper)
- FrontierMath (provisional): **84.9%** (anotherwrapper)
- SimpleQA: **43.1%**; HLE: **no verified public score found** on the compared sources
- Intelligence Index: **56.6 (#12/52 scored)** (commandcode.ai)

Coding:

- Coding Index: **76.7 (#4 of 46 scored)** (commandcode.ai)
- LiveCodeBench: **85.9%** (anotherwrapper)
- SWE-bench Verified: **~75%** (anotherwrapper comparison row; treat as provisional)
- SWE-bench Pro: **63.4%** (#9 of 55, llm-stats.com SWE-Bench Pro leaderboard)
- SciCode: **53.9%** (commandcode.ai)
- Vibe Code Bench: **67.8%**; Arena Code Elo: **1521.61** (anotherwrapper)

Long context:

- Long-context reasoning: **79.7** (commandcode.ai); MRCR / RULER: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 84/100.** (Raised from 82 on 2026-10-08.) Terminal-Bench 2.1 87.4%, τ²-bench 86.3%, BrowseComp 87.5%, and Agents' Last Exam 50.4% are strong agentic numbers; Terminal-Bench 3.0 20.8%, OSWorld 2.0 50.2%, and Toolathlon 53.1% hold it back from the top tier.
- **Reasoning: 89/100.** (Raised from 88 on 2026-10-08.) GPQA Diamond 92.9% (conflict resolved, see re-verification) and ARC-AGI-2 83.9% show deep reasoning; HLE 42.9% (AA) / 51.1% (HLE-Verified) removes the old missing-data uncertainty, partly offset by FrontierMath v2 Tier 4 68.3–70.7% coming in below the old provisional 84.9%.
- **Context window: 88/100.** (Raised from 87 on 2026-10-08.) 1.05M context with MRCR v2 8-needle 89.6% and AA-LCR 83%; Graphwalks BFS 1M 71.2% shows degradation only at the far edge.
- **Multimodal: 78/100.** Text+image with MMMU-Pro 80.7% (82.0% with Python) now verified; no audio/video, so mid-pack.
- **Coding: 86/100.** (Raised from 83 on 2026-10-08.) SWE-bench Verified 95.4% (was provisional ~75%), Coding Index 76.7 (#4), LiveCodeBench 85.9%, SWE-bench Pro 63.4%, and VulcanBench v3 87.0% are strong; CursorBench 4.0 41.3% is the drag.
- **Cost efficiency: 72/100.** $2/$12 with $0.20 cache reads (post 2026-07-30 20% price cut) is a fair mid-tier price; long-context band doubles input, and it is still 10× the Luna tier's price.
- **Overall Score: 85/100.** (Raised from 84 on 2026-10-08.) Mean of the five quality dims (84+89+88+78+86)/5 = 85.0 → 85. Best-value balanced agentic coder in the GPT-5.6 family for everyday workloads.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 82 | 84 | +2 |
| Reasoning | 88 | 89 | +1 |
| Context window | 87 | 88 | +1 |
| Multimodal | 78 | 78 | — |
| Coding | 83 | 86 | +3 |
| Cost efficiency | 72 | 72 | — |
| **Overall** | **84** | **85** | **+1** |

New and corrected data (all found 2026-10-08):

- **GPQA Diamond conflict resolved: 92.9%** (llm-stats.com; benchmarks.company dev row 92.9; opper.ai 93%) — the old 77.3% alternative-harness figure loses; ~93% stands.
- **SWE-bench Verified confirmed: 95.4%** (ixio.com; BenchLM "SWE-bench (Vals)" 95.4) — replaces the provisional ~75%. Note OpenAI's own post-2026-07 article deprecating SWE-V as saturated/flawed; treat as harness-dependent.
- **HLE: 42.9%** (AA-HLE via BenchLM) and **51.1%** (HLE-Verified) — was "no verified public score".
- **MMMU-Pro: 80.7%** (82.0% with Python tool) — old file claimed the class but no number.
- **MRCR v2 (8-needle): 89.6%** aggregate, **72.5%** at 512K–1M (llm-stats); Graphwalks BFS >128k 76.9%, BFS 1M 71.2% — was "no verified public score".
- **τ²-bench: 86.3%**; **GDPval-AA v2.1: 1432** (AA, max effort) / 1583 (BenchLM); **Agents' Last Exam: 50.4%** (exact number now published).
- Terminal-Bench 2.1 **87.4%** (was 84.3); TB 3.0 20.8%; TB 4.0 35% (max effort); CyberGym 81.8%; SEC-bench Pro 57.7%; CursorBench 3.2 64.9% / 4.0 41.3%; FrontierCode 1.1 Extended 55.8% (vs old Main 41.3); ExploitGym 23.2%; APEX-Agents-AA 38.9%; ITBench-AA 51.0%.
- **FrontierMath corrected:** v2 Tiers 1–3 84.9%, **Tier 4 68.3%** (BenchLM) / 70.7% (ixio) — the old single "provisional 84.9%" was the easy-tier number.
- **AA Intelligence Index is version-confounded:** current v4.3-era snapshots read ~42 (ixio 42.3, opper.ai 42.1, AA comparison pages 42 for max effort) while the old commandcode 56.6 / BenchLM 55.0 were on the v4.1 scale — methodology re-base, not a capability drop.
- Pricing re-confirmed unchanged: **$2.00 in / $12.00 out / $0.20 cache read / $2.50 cache write** per 1M; OpenAI's 20% Terra price cut landed 2026-07-30, before the original report. Context 1.05–1.1M / 128K output confirmed.
- Third-party composites: BenchLM 73.18 (#14/637, updated 2026-09-30); ixio 73.9 (#29); Epoch ECI 159 (#7 of 249).
- Multimodal additions: HealthBench Professional 57.7, HealthBench Consensus 95.1, SimpleQA Verified 76% (Epoch), ARC-AGI-3 0.8%.

Gaps still open after re-run: Claw-Eval (no public score), τ³-Banking individual score (only folded into the AA index), audio/video input.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (commandcode.ai, lmmarketcap, llm-stats.com, anotherwrapper.com, byteiota.com, requesty.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.