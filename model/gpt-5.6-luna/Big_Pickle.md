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

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-20
- Method: public web research (openai.com, developers.openai.com, benchr.org, artificialanalysis.ai, waitwhichmodel.fyi, writingmate.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.