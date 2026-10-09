# GPT-6 Luna — findings by Step 5 Preview

- Source: OpenAI (`gpt-6-luna`, released 2026-09-22)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna (the cheap tier of the GPT-6 family: Astra $10/$50 flagship → Sol $2/$10 → Luna $0.10/$0.50; there is no GPT-6 Terra)
- **Short description:** The model that moved the cheap/frontier boundary. Luna launched at half of GPT-5.6-Luna's promotional price ($0.10/$0.50, 90–92% below GPT-5.6 Luna's $1/$6 list) and OpenAI's pitch is pure price-performance: at max effort it scores 66.6% on DeepSWE v1.1 — "comparable to Claude Opus 5 and Fable 5 at medium effort" — at 93–96% lower cost per task; 52.7% on OSWorld 2.0 offline, beating GPT-5.6 Sol (medium) at a tenth of the cost; and factuality matching GPT-5.6 Sol at roughly a hundredth of the cost. AA independently confirms the shape (Intelligence Index 38.1 at max, GDPval Elo 1,367, $0.07 per index task) while noting two regressions: the Coding Agent Index slipped 2 points vs GPT-5.6 Luna and it uses more output tokens per index task (51K vs 41K). It also carries GPT-6's caching improvements (90% cached-read discount, higher default hit rates) and a 1.05M-token window — larger than Sol's 872K.
- **Provider / access:** OpenAI API (`gpt-6-luna`), Azure, Amazon Bedrock, OpenRouter; ChatGPT Work/Codex (all paid tiers) and the desktop app for Free/Go users.
- **Release:** 2026-09-22 (~90 minutes after Anthropic shipped Claude Opus 5.5); knowledge cutoff 2026-05-18.
- **Context window:** 1,050,000 tokens (922K max input); max output 128K; prompts >272K input bill 2× input / 1.5× output.
- **Modalities:** Text and image in → text out; reasoning effort none/low/medium(default)/high/xhigh/max.
- **Pricing (as of 2026-10-09):** $0.10/M input, $0.50/M output, $0.01 cache read, $0.125 cache write; Batch/Flex 50% off; Fast mode 2×.
- **Speed:** 116–136 tok/s (AA); TTFT 0.45–0.67 s at low effort — but ~124 s to first token at max effort (AA's measurement), so synchronous high-effort calls need generous timeouts.

### Raw benchmarks found

OpenAI launch (Luna; comparison points in parents):

- DeepSWE v1.1: **66.6%** (max) — level with Opus 5 / Fable 5 at medium effort, 93% cheaper per task than Opus 5 and 96% cheaper than Fable 5
- OSWorld 2.0 (offline): **52.7%** (max) — exceeds GPT-5.6 Sol (medium) at ~1/10 the cost
- Agents' Last Exam: **50.9%** (90th percentile; rank 5/41)
- AutomationBench 1.0.6: **+5.4 pts** over its predecessor (high effort) at 58% lower cost per task (20.7% task success; AA's AutomationBench-AA variant measures 53.2%)
- Factuality (internal): matches GPT-5.6 Sol at ~1/100 the cost; deception rate 2.8% (down from 9.5% on GPT-5.6)

Artificial Analysis (independent, by effort):

- Intelligence Index: **38.1** (max) / 34.6 (xhigh) / 32.9 (high) / 29.9 (medium) / 21.5 (low) / 18.5 (non-reasoning)
- Coding Agent Index: **41** (vs GPT-5.6 Luna's 43 — a 2-point regression); GDPval-AA v2.1: **1,367 Elo**
- HLE: **38.5%**; AA-LCR: **83.3%** (97th percentile); SciCode: **54.6%**; CritPt: 19.4%; Terminal-Bench 4.0: 12.6%; AA-Omniscience 43.8% accuracy / 77% hallucination
- Cost per Intelligence-Index task: **$0.07** (vs GPT-5.6 Luna's $0.18)

Third-party:

- BenchmarkList (max): AA-Briefcase **1,336 Elo** (77th pct); BrowseComp **83.3%** (49th pct); FrontierCode Main **42.4%**; SWE-Marathon 45/160 trials (28.1% pass, $0.84/trial); RuneBench 5.1
- Vals AI: Vibe Code Bench v1.1 **81.6%**; ProofBench **64.0%**; MedScribe **83.7%**; SAGE 48.1%; MedCode 44.7%; Finance Agent v2 49.9%; Vals Index 51.2
- GPQA Diamond 87.1–88.4% and TAU-Bench 65.3–68.6% (OpenRouter provider runs)

### Normalized scores (1–100)

- **Tool use: 76/100.** A strong agentic profile for the price tier: DeepSWE 66.6%, OSWorld 2.0 52.7%, ALE 50.9% (5th of 41), AA-Briefcase 1,336 Elo and AA AutomationBench 53.2% — but AutomationBench (Zapier) at 20.7% and TB 4.0 12.6% show real workflow gaps, and the AA Coding Agent Index (41) is below GPT-5.6 Luna.
- **Reasoning: 80/100.** HLE 38.5%, AA Intelligence Index 38.1 (max; 85th percentile), SciCode 54.6%, CritPt 19.4% and GPQA ~88% are upper-mid-band — a level-or-better read than GPT-5.6 Luna at less than half the per-task cost; AA-Omniscience 77% hallucination is the reliability catch.
- **Context window: 92/100.** A 1.05M-token window (larger than Sol's) with AA-LCR at 83.3% — 97th percentile, the best long-context-reasoning result in this roster's cheap tier — just under the ≥98%-retrieval evidence the top band describes.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band; image input is supported across the GPT-6 family but no MMMU/vision benchmark is published for Luna.
- **Coding: 74/100.** DeepSWE v1.1 66.6% (max) and Vibe Code Bench 81.6% are strong; FrontierCode Main 42.4%, SciCode 54.6%, SWE-Marathon 28.1% and the 2-point Coding-Agent-Index regression vs GPT-5.6 Luna keep it mid-upper.
- **Cost efficiency: 99/100.** $0.10/$0.50 with $0.01 cache reads, Batch/Flex at 50%, and AA's measured $0.07 per Intelligence-Index task — the methodology's ~$0.1/$0.2 ≈ 97–99 tier with the frontier's best cost-per-completed-task story (DeepSWE at 93–96% below Opus 5/Fable 5).
- **Overall Score: 78/100.** Best-fit recommendation: the new default cheap tier — max-effort scores that sit with frontier models at medium effort (DeepSWE 66.6%, ALE 50.9%) at $0.10/$0.50 with 1M context and 90%-off caching; watch the max-effort TTFT (~124 s) and the higher output-token verbosity.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenAI GPT-6 Sol/Luna launch post + API docs, Artificial Analysis launch report via codersera/OfficeChai, BenchmarkList, Vals AI via Sophon, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_1_Luna.md`, using the same headings.
