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
