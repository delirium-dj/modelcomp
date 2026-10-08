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

- **Tool use: 82/100.** Terminal-Bench 2.1 84.7% (Vals 79.0%) and Coding Agent Index 74.6 (above Opus 4.8) confirmed; GDPval-AA **1,582** (48.2%) and CyberGym 77.9%, BrowseComp 83.3% new; weak MRCR and AutomationBench ~42 keep it from the elite 88%+ band.
- **Reasoning: 84/100.** GPQA Diamond 92.3% (official) / 91.1% (AA independent) / 91.7% (Vals) maps to the top band; **AA-HLE 39.5%** (was HLE 37.2%) and CritPt 20.6% are solid for the nano tier; AA-Omniscience −10.3 (hallucination rate 92.6, new) is the ugly corner.
- **Context window: 80/100.** (Raised from 78 on 2026-10-08.) Huge 1.05M window and now **AA-LCR 83.7%** (new, mid-frontier) — but MRCR 41.3% and GraphWalks 1M 51.2% leave deep retrieval as the weak point; window breadth carries it.
- **Multimodal: 76/100.** (Raised from 72 on 2026-10-08.) **MMMU-Pro 78.4% gap filled** (AA 78.6%, 79.5% w/ Python) — a genuinely usable vision path with respectable OCR-level agent performance; text-only output.
- **Coding: 78/100.** SWE-bench Verified confirmed (Vals **93.0%**, the contested high reading), SWE-bench Pro 62.7% and DeepSWE 67.2% confirmed; AA Coding Index 71.5%, CursorBench 3.2 61.1 / 4.0 35.9, FrontierCode Ext 55.1%, VulcanBench v3 85.5% (new).
- **Cost efficiency: 97/100.** $0.20/$1.20 with $0.02 caching reconfirmed (no change since the July 30 cut) — the value king of the GPT-5.6 family; **newer note: GPT-6 Luna (Aug 2026+) now exists at the same tier**.
- **Overall Score: 80/100.** Mean of the five quality dims (82+84+80+76+78)/5 = 80.0 → 80 (raised from 79). A genuinely capable budget/nano workhorse that turns cost-efficiency into usable agentic performance; the best pick for scale, not for peak quality.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 82 | 82 | — |
| Reasoning | 84 | 84 | — |
| Context window | 78 | 80 | +2 |
| Multimodal | 72 | 76 | +4 |
| Coding | 78 | 78 | — |
| Cost efficiency | 97 | 97 | — |
| **Overall** | **79** | **80** | **+1** |

New and corrected data (all found 2026-10-08 via BenchLM, updated 2026-10-07 unless noted):

- **MMMU-Pro gap filled: 78.4%** (OpenAI launch table) — old file had "no verified public score"; AA 78.6%, w/ Python 79.5%. Raises the multimodal dim from 72 → 76.
- **AA-LCR gap filled: 83.7%** (Artificial Analysis) — actually strong for the nano tier; raises Context from 78 → 80.
- Confirmations: Terminal-Bench 2.1 84.7% (Vals 79.0%), GPQA 92.3% (AA 91.1%, Vals 91.7%), FrontierMath v2 78.6%/58.5%, DeepSWE 67.2%, SWE-bench Pro 62.7%, ARC-AGI-2 59.5% (ARC Prize), SWE-bench (Vals) 93.0%, MRCR 41.3%.
- New agentic rows: GDPval-AA 1,582 (48.2% normalized), CyberGym 77.9%, BrowseComp 83.3%, Toolathlon 53.4%, APEX-Agents-AA 35.8%, AA Agentic Index 42.7%, OSWorld 2.0 45.6%, Terminal-Bench 3.0 14.3%, ApprenticeBench 7%.
- New coding rows: AA Coding Index 71.5%, CursorBench 3.2 61.1 / 4.0 35.9, FrontierCode 1.1 Extended 55.1%, VulcanBench v3 85.5%, AA-SciCode 53.6%, HealthBench Professional 55.7% / Hard 32.0%.
- New reasoning rows: AA-HLE 39.5%, CritPt 20.6%, AA-Omniscience −10.3 (accuracy 42.7, hallucination rate 92.6), MMLU-Pro (Vals) 86.0%, ARC-AGI-3 0.2%.
- AA Intelligence Index: BenchLM cites 51.2 (OpenAI); treat as current-scale (v4.3-era) reading of the old "51 (max)" figure.
- **Pricing recheck: unchanged** — $0.20/$1.20, cached $0.02 (the 80% cut of 2026-07-30 predates the original report); >272K at 2x/1.5x still applies.
- Context: **GPT-6 Luna** (a newer nano-tier release) now ranks on BenchLM at 65.6, and GPT-6 Astra (85.01) leads OpenAI — the family line has moved on; BenchLM scores Luna at 65.98, #30/887.

Gaps still open after re-run: GraphWalks 1M 51.2% remains vendor-only, MRCR has not improved, no audio/video input, τ³-Banking, HAL / APEX-adjacent security evals beyond CyberGym.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (openai.com, developers.openai.com, benchr.org, artificialanalysis.ai, waitwhichmodel.fyi, writingmate.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.