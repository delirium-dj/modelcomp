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
- **Context window: 82/100.** 500K / 450K output with LCR 75%; half the 1M-class wide-window leaders.
- **Multimodal: 80/100.** Text+image only; vision-focused agentic/design work is a genuinely strong tier (Design Arena rows).
- **Coding: 85/100.** Coding Index 76.8, DeepSWE 65.9%, CursorBench 69.9% — near GPT-5.6 Sol but short of Fable 5.
- **Cost efficiency: 82/100.** $2/$6 (50K-200K) with $0.50 cache and same-price reasoning levels — among the cheapest frontier reasoning APIs of Aug 2026; long-context doubles.
- **Overall Score: 84/100.** Mean of the five quality dims (87+88+82+80+85)/5 = 84.4 → 84. xAI's best-in-class cost-performance frontier agent model of the 4.x era.

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved; corrections are noted below.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 87 | 89 | **+2** |
| Reasoning | 88 | 89 | **+1** |
| Context window | 82 | 82 | — |
| Multimodal | 80 | 80 | — |
| Coding | 85 | 87 | **+2** |
| Cost efficiency | 82 | 82 | — |
| **Overall** | **84** | **85** | **+1** |

**BenchLM composite: 66.69/100, #23 of 1014**, from 41 of 739 rows (partial coverage — conservative, not comparable to this project's normalized scale).

**Almost every original number is corroborated exactly:** GPQA **94.9%** (Vals 94.7%), HLE **42.9%**, APEX-Agents **57.5%**, Terminal-Bench 2.1 **88.4%** (aaTerminalBench21), FrontierCode **61.3%**, CursorBench 3.2 **69.9–70.8%**, DeepSWE **65.9%**, SciCode **53.6–56.5%**, AA Coding Index **76.8%**. The original report was well sourced.

**One number needs a caveat: GDPval-AA.** The vendor table says **1753 Elo**; Artificial Analysis measures **1643 Elo / 55.9%**. Both are now recorded. The vendor figure clears the 1750 frontier anchor; the AA figure does not, which is why Tool use moves to 89 rather than into the 90s.

**Newly measured, and it is the best agentic row in the cohort:** **AA Agentic Index 53.4%** — higher than GPT-5.6 Terra (43.7%) and Claude Sonnet 5 (44.3%). Joined by **Tau3 Banking 50.7%**, **EnterpriseOps-Gym 48.3%**, **AA ITBench**-class work, **AnalystAgent 41.3%**, **ApprenticeBench 13%**, **CWE-Bench 57.0%**.

**Reasoning:** **AA Intelligence Index 44.3**, **AA-LCR 80.3%** (the original carried 75.0%), **CritPt 17.1%**, **ARC-AGI-2 67.1%**, **ARC-AGI-1 87%**, **ARC-AGI-3 2.1%** (the highest ARC-AGI-3 reading in this cohort), **FrontierMath v2 65.965%** (T1–3) / **31.707%** (T4).

**Coding:** **SWE-bench (Vals) 95.6%**, **AA Coding Index 76.8%**, **CursorBench 3.2 70.8%**, **VulcanBench v3 87.0%**, **LiveCodeBench 88.2%**; the weak rows are **FrontierSWE v2 25.3%** and **Bug Hunt Bench 27.0**.

**The standout finding is honesty.** AA-Omniscience: **30.5% index / 48.2% accuracy / 34.3% hallucination rate** — by a wide margin the best calibration in this cohort (next best is Gemini 3.5 Flash-Lite at 26.7%). For agent work that must not invent facts, that is a genuine differentiator the original could not see.

**Pricing and lifecycle.** **$2.00 in / $6.00 out, $0.50 cached, 500K context / 500K output** (models.dev) — unchanged. Context stays 82 on the 500K tier. Superseded by **Grok 4.5** (BenchLM 63.03 — lower) and **Grok 4.7** (listed, composite not yet computed), so 4.6 remains the strongest scored Grok on that board.

**Net assessment.** A frontier-adjacent agent with the cohort's best calibration, slightly under-scored on tool use and coding. Overall 84 → 85.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (x.ai launch evals, Artificial Analysis via aicosts/pricepertoken, BenchLeader, llmreference, LLM Gateway, OCI/GCP docs; BenchLM, Vals AI and models.dev on re-run); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [xAI — Grok 4.6 launch post](https://x.ai/news/grok-4-6)
  - [xAI — Grok 4.6 developer docs](https://docs.x.ai/developers/grok-4-6)
  - [BenchLM — Grok 4.6](https://benchlm.ai/models/grok-4-6)
  - [models.dev — provider catalogue (opencode pricing/limits)](https://models.dev/api.json)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Grok_4.6_2.md`, using the same headings.