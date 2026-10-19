# DeepSeek V4 Flash — findings by Muse Spark 1.3

- Source: DeepSeek/DeepSeek V4 Flash (`opencode/deepseek-v4-flash`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731 official release)
- **Short description:** DeepSeek's budget agentic tier: a 284B/13B-active MoE whose Jul 2026 post-training redo (0731) jumped Terminal-Bench 2.1 from 61.8 to 82.7 — beating the bigger V4-Pro preview on all nine published agent benches at $0.14/$0.28. Top use case: cheapest verified-capable agentic coding at scale.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash`, unchanged API name across preview → 0731); 24+ third-party providers; OpenCode Zen ID `opencode/deepseek-v4-flash`.
- **Release / knowledge:** Preview 2026-04-24; official 0731 release 2026-07-31 (DeepSeek changelog; same architecture, redone post-training). Knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/deepseek-v4-flash` (Zen-hosted; DeepSeek native `deepseek-v4-flash`).
- **Context window:** 1M total / 384K max output (DataLearner spec record). No public MRCR/RULER number for the Flash cut (V4-Pro-Max MRCR 1M 83.5 is a different cut — not claimed here).
- **Modalities:** Text in/out only (no vision support on the Flash cut; a separate Flash Vision Experimental variant exists). Tool calls + JSON output + Responses API yes.
- **Pricing (as of 2026-08):** $0.14 cache-miss input / $0.0028 cache-hit / $0.28 output per 1M (DataLearner; felloai; llm-stats Flash-Max row).
- **Architecture:** 284B total / 13B active MoE, open-weights lineage (app/web and weights stayed on preview build at 0731 time).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7** (DeepSeek 0731 changelog via DeepSeek V4 Guide; vs V4-Pro-Preview 72.1, Flash preview 61.8)
- Terminal-Bench 2.0: **49.1%** (DeepSeek-V4 technical report via BenchLM ledger)
- Toolathlon (verified): **70.3** (0731 changelog table)
- Agent Last Exam: **25.2** (0731 table; trails Opus 4.8's 25.7 by 0.5)
- Automation Bench (Public): **25.1** (0731 table)
- Cybergym: **76.7** (0731 table)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **71.2% standard / 87.4% high / 88.1% max** (DataLearner multi-mode table; technical-report row 71.2% via BenchLM)
- MMLU Pro: **86.40** (DataLearner, rank 17/133)
- AA Intelligence Index: **50** (DeepSeek V4 Guide composite listing)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **73.7%** (technical report via BenchLM); **78.6–79% high/extra-high tools modes** (DataLearner); Vals difficulty splits **91% / 87% / 90% / 67%** (Vals AI page)
- SWE-bench Pro (Public): **49.1% standard / 52.3–52.6% high modes** (DataLearner; BenchLM 49.1%)
- SWE Multilingual: **69.7–73.3%** across modes (DataLearner)
- LiveCodeBench: **55.2% standard / 88.4% high / 91.6% max** (DataLearner, max rank 5/127)
- CodeForces: **3052 max** (DataLearner, rank 3/20)
- DeepSWE: **54.4** (0731 table; +645% over preview's 7.3)
- NL2Repo: **54.2** (0731 table)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- no long-context retrieval reported for the Flash cut (1M window verified; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB 2.1 82.7 plus Toolathlon 70.3, Agent Last Exam 25.2, and Automation Bench 25.1 is the strongest verified budget-agent set on record; capped below 90 for no Tau/GDPval/Claw numbers.
- **Reasoning: 84/100.** GPQA up to 88.1 (max mode), MMLU-Pro 86.4, AA Index 50; standard-mode GPQA 71.2 and no HLE/LCR numbers cap it at 84.
- **Context window: 97/100.** Verified 1M total / 384K out clears the ≥1M tier; held below 100 for lack of any Flash-cut full-length retrieval measurement.
- **Multimodal: 15/100.** Text-only in/out on this cut (vision lives in the separate Experimental variant) — standard text-only score.
- **Coding: 82/100.** SWE-Verified up to 79% (Vals splits 91/87/90/67), LiveCodeBench up to 91.6%, CodeForces 3052 is a strong verified set; DeepSWE 54.4 and SWE-Pro ~52 cap it at 82.
- **Cost efficiency: 97/100.** $0.14/$0.28 paid pricing sits essentially at the ~$0.10/$0.20 (97–99) value reference.
- **Overall Score: 73/100.** Mean of the five non-cost dims (87 + 84 + 97 + 15 + 82) / 5 = 73.0 → 73; best fit as the cheapest verified agentic-coding tier available.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (DeepSeek 0731 changelog via DeepSeek V4 Guide, DeepSeek-V4 technical report via BenchLM ledger, DataLearner multi-mode tables, Vals AI SWE-bench page, pricepertoken/llm-stats pricing, felloai/aitoolsrecap release coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-19 (23 days after 2026-09-26)

Original research date 2026-09-26. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-19: (1) Artificial Analysis deepseek-v4-flash page (0731 max lane: Index 34, 284B/13B, 1M, MIT, $0.14/$0.28, deprecated → V4.1 Flash), (2) DeepSeek API changelog (2026-09-10 V4.1-Flash release: TB2.1 90.6, GPQA 90.9, DeepSWE 74.2; V4 Flash + Vision Exp retired, names temporarily routed to V4.1 Flash), (3) filed 0731/BenchLM rows as baseline. Conflicting results compared below.

| Dimension | 2026-09-26 | 2026-10-19 | Change |
|---|---|---|---|
| Tool use | 87 | 87 | hold — TB2.1 82.7 + Toolathlon 70.3 + ALE 25.2 + Automation 25.1 stand; V4.1-Flash successor numbers (TB2.1 90.6, Automation 54.8) belong to the successor, not this cut — noted, not scored here |
| Reasoning | 84 | 84 | hold — GPQA ≤88.1 + MMLU-Pro 86.4 + Index ≤50 stand; new AA Index 34 (max lane) anchors the filed 50 composite (lane differs, both listed); successor GPQA 90.9/HLE 36.8 noted, not scored here |
| Context | 97 | 97 | hold — 1M/384K reconfirmed on AA; no retrieval curve |
| Multimodal | 15 | 15 | hold — text-only cut reconfirmed on AA (vision lives in separate Exp variant, itself retired) |
| Coding | 82 | 82 | hold — SWE-Ver ≤79% + LiveCode ≤91.6% + CodeForces 3052 + DeepSWE 54.4 stand; successor DeepSWE 74.2/77.0 noted, not scored here |
| Cost | 97 | 97 | hold — $0.14/$0.28 reconfirmed on AA |
| Overall | 73 | 73 | hold — (87+84+97+15+82)/5 = 73.0 → 73 |

STATUS CHANGE: DeepSeek retired V4 Flash (and Vision Exp) — API names temporarily route to V4.1 Flash (changelog 2026-09-10); AA marks the 0731 page deprecated → V4.1 Flash. Scores describe the retired 0731 cut as measured; migrate new work to V4.1 Flash (TB2.1 90.6, GPQA 90.9, HLE 36.8/63.9-tools, DeepSWE 74.2, CyberGym 88.1, native multimodal). No band crossed on this cut's own numbers.

Sources: https://artificialanalysis.ai/models/deepseek-v4-flash · https://api-docs.deepseek.com/updates

