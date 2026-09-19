# Muse Spark 1.2 Free — findings by Grok 4.6

- Source: Meta (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Contributor Free)
- **Short description:** Meta Muse Spark 1.2 weights (August 2026 coding-focused update to 1.1) on OpenCode Zen’s $0 Contributor Free ID. Same checkpoint as paid 1.2; not 1.3.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free` ($0). Paid Zen/Meta `muse-spark-1.2` at $1.25/$4.25. Muse Code agent + Meta Model API.
- **Release / knowledge:** **2026-08-05** (models.dev / llmpricing). Knowledge cutoff unpublished.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free). Paid `opencode/muse-spark-1.2`.
- **Context window:** 1,048,576 / 131,072 max output (models.dev).
- **Modalities:** Text, image, video, PDF, audio listed on llmpricing; text out. Treat audio as catalogued (1.3 later warned audio is incomplete — 1.2 catalogs still list it).
- **Pricing (as of 2026-09-19):** Zen Free **$0 / $0**. Paid **$1.25 / $4.25**. Training-data caveat typical of Contributor Free.
- **Architecture:** Proprietary closed weights (Meta).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta xhigh / BenchmarkList); AA **80.2%** (AI Atlas).
- Tau3-Banking: **34.8%** (BenchmarkList); AA article on 1.3 cites 1.2 at **35%**.
- GDPval-AA: **1628 Elo** (BenchmarkList) / **1631 Elo** (Benchgen / Meta).
- MCP Atlas: **90.3%** (Benchgen / Meta).
- AutomationBench: **38.2%**; JobBench **61.6%** (BenchmarkList).
- Claw-Eval: **no verified public score found**.
- SWE Atlas Codebase QnA: **46.2%** (BenchmarkList).

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (AA / BenchmarkList).
- HLE: **45.5%** (BenchmarkList).
- LCR: AA-LCR **83.3%** (BenchmarkList). MRCR v2: **66.3%** 256K–512K / **55.5%** 512K–1M.
- CritPt: **18%** xhigh cited as 1.2 baseline in the Muse 1.3 AA article.
- Artificial Analysis Intelligence Index: **57** (BenchmarkList / AA 1.3 article).
- Omniscience: **no verified public score found** on the 1.2 BenchmarkList extract.

Coding:

- SWE-bench Verified: **no verified public score found**.
- LiveCodeBench: **no verified public score found**.
- SciCode: **56.4%** (BenchmarkList).
- Vibe Code Bench: **no verified public score found**.
- DeepSWE 1.1: **59.3%** (Meta / BenchmarkList).

Long context:

- 1M window; MRCR 512K–1M **55.5%** (not ≥98%). AA-LCR **83.3%**.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 80–83% near-mid of frontier, MCP Atlas 90.3% and GDPval ~1630 are strong. Caps: Tau3 ~35%, missing Claw-Eval.
- **Reasoning: 88/100.** GPQA 90.4% and HLE 45.5% meet the 90%+ / 40%+ refs; Index 57 is under 60+. Caps: CritPt ~18%, MRCR mid.
- **Context window: 95/100.** 1M tokens; retrieval at 512K+ is 55.5%, so not 100.
- **Multimodal: 85/100.** Image+video+PDF in → 75–90. Audio catalogued but not independently verified as first-class.
- **Coding: 78/100.** SciCode 56.4% hits 55%+; DeepSWE 59.3% is below 74%+ → mid 70s–80s with TB 82.9%.
- **Cost efficiency: 100/100.** Evaluated Zen Free ID is **$0**.
- **Overall Score: 87/100.** Mean of (88 + 88 + 95 + 85 + 78) / 5 = 86.8 → **87**. Best-fit: free 1.2 fallback when 1.3 Free is unavailable.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: public internet research (models.dev, BenchmarkList, Benchgen, AA 1.3 article baselines, llmpricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
