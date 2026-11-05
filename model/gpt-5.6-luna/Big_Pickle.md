# GPT-5.6 Luna — findings by Big Pickle

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** The fast, budget tier of OpenAI's GPT-5.6 family (Sol / Terra / Luna), engineered for cost-sensitive, high-volume and emergent agentic workloads; it handles 2.2× more context with 8.5× fewer output tokens at 87% lower cost than GPT-5.4 mini in Ramp production (OpenAI), while matching frontier-class agents of a year ago at ~6 cents on the dollar.
- **Provider / access:** OpenAI API, ChatGPT Work, Codex; `gpt-5.6-luna` (snapshot alias `5.6-luna`).
- **Release / knowledge:** preview June 26, 2026 (partner-gated); GA July 9, 2026; knowledge cutoff 2026-02-16.
- **IDs:** `gpt-5.6-luna` (OpenAI; proprietary, no open weights)
- **Context window:** 1,050,000 input / 128,000 max output tokens.
- **Modalities:** text (+ image via vision path) input; text output; `reasoning.effort` none/low/medium (default)/high/xhigh/max; multi-step tool-calling agent workflows.
- **Pricing (as of 2026-09-20):** $0.20 in / $1.20 out per 1M (cut 80% on July 30, 2026, from $1/$6); cached $0.02; prompts >272K input bill at 2× in / 1.5× out. Cost per AA Intelligence task ~$0.21 (max), $0.011 (medium).
- **Architecture:** Proprietary, undisclosed; roughly corresponds to the nano tier of earlier GPT-5 families.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI launch table; Codex harness; Terminal-Bench owner's independent run 75.7%±1.3)
- Artificial Analysis Coding Agent Index v1.1: **74.6** index (OpenAI; outperforms Claude Opus 4.8's 72.5)
- AutomationBench-AA (max): **42.2%** (Artificial Analysis independent)
- Agents' Last Exam: **50.3%** (OpenAI launch table; "outperforms Fable 5 at ~99% lower cost per task" per OpenAI)
- MRCR v2 8-needle: **41.3%** at both 256K-512K and 512K-1M (OpenAI)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI launch table); **91.1%** (Artificial Analysis independent max)
- Humanity's Last Exam: **37.2%** (Artificial Analysis)
- FrontierMath Tier 1-3 (v2): **78.6%**; Tier 4 (v2): **58.5%** (OpenAI)
- ARC-AGI-2: **59.5%** (ARC Prize, max effort)
- AA Intelligence Index: **51** (max), **38** (medium effort)

Coding:

- SWE-bench Verified: **79.8%** (OpenAI 5.6 system card via benchr); third-party Vals AI reading differs (93.0%) — treat as contested/harness-dependent
- SWE-Bench Pro: **62.7%** (OpenAI; vs Sol 64.6, Terra 63.4)
- DeepSWE v1.1: **67.2%** (OpenAI; vs Sol 72.7)
- LiveBench 2026-06-25: listed on leaderboard (writingmate.ai); exact figure not confirmed here

Long context:

- 1,050,000 window (OpenAI live docs); MRCR v2 8-needle **41.3%** across 256K–1M — wide window, unremarkable retrieval (OpenAI)
- GraphWalks BFS 256k f1: **81.3%**; 1M f1: **51.2%** (OpenAI)

Multimodal:

- Vision input supported via GPT-5.6 API surface; dedicated multimodal leaderboard scores: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 84.7% and Coding Agent Index 74.6 (above Opus 4.8) are genuinely strong for the cheapest tier; weak MRCR and AutomationBench ~42 keep it from the elite 88%+ band.
- **Reasoning: 84/100.** GPQA Diamond 92.3% (official) / 91.1% (AA independent) maps to the top band; HLE 37.2 and a max-effort AA Index of 51 temper it to just below flagship reasoning.
- **Context window: 78/100.** Huge 1.05M window but retrieval is the weak point (MRCR 41.3%, GraphWalks 1M 51.2); window breadth alone carries it.
- **Multimodal: 72/100.** Text plus vision input with no published multimodal benchmarks; text-only output.
- **Coding: 78/100.** SWE-bench Verified ~80% and DeepSWE 67.2% are strong second-tier results; SWE-bench Pro 62.7% trails the Sol flagship step.
- **Cost efficiency: 97/100.** $0.20/$1.20 with $0.02 caching makes it the value king of the GPT-5.6 family — frontier-adjacent behavior at ~6 cents on the dollar presides.
- **Overall Score: 79/100.** Mean of the five quality dims (82+84+78+72+78)/5 = 78.8 → 79. A genuinely capable budget/nano workhorse that turns cost-efficiency into usable agentic performance; the best pick for scale, not for peak quality.

## Re-verification — 2026-11-05 (46 days after original)

Re-run requested by the user to compare the original findings against current data. Original findings above are preserved; corrections are noted below.

| Dimension | 2026-09-20 | 2026-11-05 | Change |
| --- | --- | --- | --- |
| Tool use | 82 | 84 | **+2** |
| Reasoning | 84 | 86 | **+2** |
| Context window | 78 | 80 | **+2** |
| Multimodal | 72 | 78 | **+6** |
| Coding | 78 | 82 | **+4** |
| Cost efficiency | 97 | 97 | — |
| **Overall** | **79** | **82** | **+3** |

**BenchLM composite: 63.94/100, #37 of 1014**, from 53 of 739 rows (partial coverage — conservative, not comparable to this project's normalized scale).

**The contested SWE-bench row is not a mistake — it is a harness split.** The original flagged 79.8% (OpenAI card) vs 93.0% (Vals) as contested. Both stand: **SWE-bench (Vals) 93.0%** is reproduced on Vals' harness, while OpenAI's card number comes from its own scaffold. On a mixed-evidence basis the model is stronger than the 78 originally assigned, so Coding moves to 82 on the back of **SWE-bench Pro 62.7%**, **DeepSWE 67.2%**, **AA Coding Index 71.5%**, **SciCode 53.6%**, **CursorBench 3.2 61.1%**, **FrontierCode 1.1 Extended 55.1%** — with **CursorBench 4.0 35.9%** as the counterweight.

**Reasoning 84 → 86.** **AA Intelligence Index 51.2** is the second-highest in this cohort, alongside **AA-HLE 39.5%**, **GPQA 92.3%** (AA-GPQA 91.1%, Vals 91.7%), **ARC-AGI-2 59.5%**, **CritPt 20.6%**, **FrontierMath v2 78.600%** (T1–3) / **58.500%** (T4). ARC-AGI-2 at 59.5% is the number that keeps it below Terra (83.9%).

**Tool use 82 → 84.** **Terminal-Bench 2.1 84.7%** (Vals 79.0%), **BrowseComp 83.3%**, **GDPval-AA 48.0% / 1582 Elo**, **AA Agentic Index 42.7%**, **Toolathlon 53.4%**, **OSWorld 2.0 45.6%**, **ITBench 40.3%**, **EnterpriseOps-Gym 40.8%**. The cheap-tier agent story holds up under independent measurement.

**Context 78 → 80.** The split is now explicit: **AA-LCR 83.7%** is strong long-context reasoning, while **MRCR v2 41.3%** and **GraphWalks 1M 51.2%** remain weak retrieval. Huge window, mediocre needle-finding — the original's framing was right and slightly harsh.

**Multimodal 72 → 78.** The original said "no verified public score found"; there are now three: **MMMU-Pro 78.4%** (79.5% with Python), **AA-MMMU-Pro 78.6%**, **ExtractBench 91.16%**, plus **ParseBench 66.86%**.

**Pricing and lifecycle.** **$0.20 in / $1.20 out, $0.02 cached, 1.05M / 128K output** — unchanged on models.dev and Zen; still the cheapest credible 1M-context agent in the cohort. Live.

**Honesty caveat.** AA-Omniscience **42.7% accuracy / 92.6% hallucination / index −10.3** — the worst hallucination rate in this cohort. Cheap and capable, but not a factual oracle.

**Net assessment.** A budget tier that measures like a mid-frontier model. Every dimension moves up modestly, Overall 79 → 82, and Cost stays at 97 — the value case is stronger than the original, not weaker.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** - 2026-09-20
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (openai.com, developers.openai.com, benchr.org, artificialanalysis.ai, waitwhichmodel.fyi, writingmate.ai; BenchLM, Vals AI and models.dev on re-run); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-5.6](https://openai.com/index/gpt-5-6/)
  - [BenchLM — GPT-5.6 Luna](https://benchlm.ai/models/gpt-5-6-luna)
  - [models.dev — provider catalogue (opencode pricing/limits)](https://models.dev/api.json)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Luna_2.md`, using the same headings.