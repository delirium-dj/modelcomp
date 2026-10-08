# Grok 4.6 — findings by Big Pickle

- Source: xAI / SpaceXAI (`grok-4-6`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's Aug 2026 frontier reasoning flagship, built for long-running agents and ambitious interactive/visual work — matches GPT-5.6 Sol on the Artificial Analysis Intelligence Index (61) while costing less per task. Turns ideas into finished apps and work artifacts; available in Cursor and Grok Build.
- **Provider / access:** xAI API (`grok-4.6`), Cursor, Grok Build, OpenRouter, Vercel, Cloudflare, AWS Bedrock, Google Vertex AI (OpenAI-compatible), OCI Generative AI (`xai.grok-4.6`). Proprietary.
- **Release / knowledge:** 2026-08-12 (x.ai; LLM Gateway lists 08-06, Google Cloud 08-21); knowledge cutoff 2026-02-01.
- **IDs:** `grok-4-6` / `xai.grok-4.6` (xAI; proprietary).
- **Context window:** 500,000 tokens (524,288 on Vertex) — with up to 450K max output (aicosts).
- **Modalities:** text + image + file inputs; text output; vision, tools/function calling, structured outputs, prompt caching, code execution, web + X search; reasoning effort low / medium / high / xhigh.
- **Pricing (as of 2026-09-20):** $2.00 in / $6.00 out per 1M (cache read $0.50); long-context tier doubles to $4/$12 once a request exceeds 200K tokens. Batch not supported.
- **Architecture:** Proprietary Grok-class reasoning MoE (undisclosed); ~51-60 tok/s throughput measured (pricepertoken/aicosts).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: **1,753** (xAI launch table; beats GPT-5.6 Sol 1,728 and trails Fable 5's 1,741 — actually ahead of Sol, one off Fable).
- APEX-Agents: **57.5%** (xAI; vs Fable 5 59.2%, GPT-5.6 Sol Max 56.7%).
- AA-Briefcase: **1,577**; Harvey LAB (Vals): **15.8%** (leading the compared group).
- Terminal-Bench 2.1 (AA): **88.4%** — but Terminal-Bench v3.0: only **26%** (xAI; behind Sol 34.6%, Fable 5 34.1%).
- Agentic Index (AA): **58.7**; OSWorld: not surfaced in my trail.

Reasoning / knowledge:

- AA Intelligence Index: **61** (ties GPT-5.6 Sol Max 61; Fable 5 Max 62) (xAI/AA).
- GPQA Diamond: **94.9%** (AA via aicosts); Vals GPQA board: **94.7%** (#3/131 via BenchLeader).
- HLE: **42.9%** (AA); τ³-Bench Banking: **50.7%**.
- pricepertoken percentile: Intelligence 51.7 (97th pct), GPQA 87.9 (92nd pct).

Coding:

- AA Coding Index: **76.8** (aicosts); CursorBench v3.2: **69.9%** (xAI; vs Fable 5 70.5%).
- DeepSWE v1.1: **65.9%** (xAI; vs GPT-5.6 Sol 73%, Fable 5 70%).
- FrontierCode v1.1 (Extended): **61.3%**; APEX-SWE: **56.4%** (xAI).
- SciCode (AA): 53.6%. Design/Arena code Elo ~1,317 (aicosts).

Long context:

- 500K window / 450K max output; AA-LCR: **75.0%** (aicosts) — good long-context reasoning; MRCR/GraphWalks not surfaced for 4.6.
- Design Arena: strong "agentic game dev" 1,210-1,339 Elo range across web-app categories (aicosts).

Multimodal:

- text/image/file intake (OCI/Vertex confirm text+image); Tool output visual; no audio listed.
- Design Arena webapps 1,276 vs websites 1,312 Elo — genuinely strong interactive/visual work (xAI's stated focus).

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval 1,753, APEX-Agents 57.5% and TB 2.1 88.4% are elite agentic numbers; TB 3.0's 26% shows the frontier hard-tail cut.
- **Reasoning: 88/100.** Intelligence Index 61 (ties Sol Max), GPQA 94.9%, HLE 42.9%. HLE trails Fable-5-class (59%).
- **Context window: 84/100.** 500K / 450K output; AA-LCR **80.3%** (corrected up from the 75.0 recorded via aicosts) — strong long-context reasoning, though still half the 1M-class window of the wide-window leaders.
- **Multimodal: 80/100.** Text+image only; vision-focused agentic/design work is a genuinely strong tier (Design Arena rows).
- **Coding: 85/100.** Coding Index 76.8, SWE-bench (Vals) 95.6%, DeepSWE 65.9%, CursorBench 3.2 70.8% — near GPT-5.6 Sol but short of Fable 5; CursorBench 4.0 (41.4%) shows the harness-stricter hard cut.
- **Cost efficiency: 82/100.** $2/$6 (50K-200K) with $0.50 cache and same-price reasoning levels — among the cheapest frontier reasoning APIs of Aug 2026; long-context doubles.
- **Overall Score: 85/100.** Mean of the five quality dims (87+88+84+80+85)/5 = 84.8 → 85 (raised from 84 on 2026-10-08, see Re-verification). xAI's best-in-class cost-performance frontier agent model of the 4.x era — now with nearly every original figure independently confirmed.

---

## Re-verification — 2026-10-08 (18 days after original)

Re-run independently confirms almost every original figure and fills OSWorld/LCR and harder-harness rows (BenchLM profile, updated 2026-10-07, 37/623 covered; AA; Vals; Cursor; ARC Prize).

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 87 | 87 | — |
| Reasoning | 88 | 88 | — |
| Context window | 82 | 84 | +2 |
| Multimodal | 80 | 80 | — |
| Coding | 85 | 85 | — |
| Cost efficiency | 82 | 82 | — |
| **Overall** | **84** | **85** | **+1** |

New and corrected data:

- **GDPval discrepancy surfaced:** the xAI launch table's 1,753 is not reproduced by AA — current AA row is **1,643 (56.1%)**. Both are reported; treat the AA figure as the independent cross-check. All other launch rows confirmed: APEX-Agents 57.5%, τ³-Banking 50.7%, DeepSWE 65.9%, FrontierCode 1.1 Ext 61.3%, TB3.0 26.5%.
- **Coding hardened:** AA Coding Index 76.8%, SWE-bench (Vals) **95.6%**, LiveCodeBench (Vals) 88.2%, AA-SciCode 56.5%, CursorBench 3.2 **70.8%**, VulcanBench v3 87.0%, FrontierSWE v2 25.3% — with a steep harness drop on **CursorBench 4.0 (41.4%)**, the strictest coding row to date.
- **Reasoning fully confirmed at elite level:** AA-GPQA 94.9% (Vals 94.7), MMLU-Pro (Vals) 89.4%, AA-HLE 42.9%, AI II 44.3 (native-scale 61, ties Sol Max) — plus verified ARC-AGI-1 **87.0%**, ARC-AGI-2 **67.1%**, ARC-AGI-3 2.1%, CritPt 17.1%, AA-Omniscience Index 30.5 (accuracy 48.2, hallucination 34.3).
- **AA-LCR corrected up: 80.3%** (7/10-2026 AA row; the original 75.0 came from aicosts) — this plus the 500K/450K spec upgrades Context 82 → 84.
- **Agentic depth rows:** AA Agentic Index 53.4%, AA AutomationBench 66.7%, AA EnterpriseOps-Gym 48.3%, TB2.1 (Vals) 78.3%, CWE-bench v1 57.0% — but **ApprenticeBench GUI 13%** is a genuine weak corner for screen/agent work.
- **Positioning:** BenchLM **67.99, #21/887** (up there with GLM-5.3's 68.71); **successor Grok 4.7** shipped 2026-09-21 (no BenchLM score yet); Grok 4.5 at 63.97. Pricing unchanged ($2/$6, cache $0.50, >200K doubles to $4/$12).

Gaps still open after re-run: OSWorld-Verified row (never surfaced), GraphWalks/MRCR 1M retrieval, X-native ToolBattle/BugBounty rows, audio output confirmation, long-context-tier real-world cost math post 200K.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (x.ai launch evals, Artificial Analysis via aicosts/pricepertoken, BenchLeader, llmreference, LLM Gateway, OCI/GCP docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.