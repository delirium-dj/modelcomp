# GLM 5.3 — findings by Muse Spark 1.3

- Source: Z.ai/GLM-5.3 (`opencode/glm-5.3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3
- **Short description:** Z.ai flagship open-weights reasoning MoE for agentic coding and long-horizon engineering work. Top use case is terminal-based coding agents and cybersecurity-assisted engineering.
- **Provider / access:** Z.ai API + Coding Plan (`z-ai/glm-5.3`); open weights gated on Hugging Face (announced Aug 2026, MIT-license placeholder). Chat Completions and Responses-style API.
- **Release / knowledge:** 2026-08-14 release (Z.ai launch blog); knowledge cutoff not officially published — no verified cutoff found.
- **IDs:** `opencode/glm-5.3` (no Free ID exists on Zen — paid only)
- **Context window:** 1M tokens total, 128K max output, three effort levels (low/high/max, default max), always reasoning — verified via Z.ai launch blog and docs (Aug 2026).
- **Modalities:** text in; text out; reasoning yes (cannot be disabled); tool calls yes; JSON mode yes; text-only, no image/audio input.
- **Pricing (as of 2026-09-24):** $1.40 / $4.40 per 1M input/output tokens, cached read $0.26; paid tier only ($).
- **Architecture:** open-weights MoE, 753B total / 40B active (per curated meta; vendor launch materials frame it as post-training-only release on the GLM-5.2 base).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.ai launch blog 2026-08-14 vendor run, Claude Code harness)
- Terminal-Bench 3.0: **28.3%** (Z.ai launch blog 2026-08-14 vendor run, avg@3; open-source SOTA claim at release)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AutomationBench: **48.2%** (Z.ai figures via VentureBeat 2026-08-14; up from 26.2 on GLM-5.2)
- Agents' Last Exam (CLI): **28.5%** (Z.ai launch blog 2026-08-14; up from 23.8)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (aggregator TensorFeed.ai citing vendor materials, Aug 2026; provisional — no independent leaderboard entry verified)
- HLE: **62.5% with tools** (TensorFeed.ai citing vendor materials; Z.ai blog notes HLE-with-tools run at 300K context with GPT-5.6-luna judge)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- MMLU-Pro: **86.8%** (TensorFeed.ai citing vendor materials, provisional)
- CyberGym: **84.5%** / ExploitBench: **54.4%** (TensorFeed.ai citing vendor materials; emergent cyber capability, provisional)

Coding:

- SWE-bench Verified / SWE-Pro: **95.4% SWE-bench Verified** (TensorFeed.ai citing independent evaluator, Aug 2026; provisional — vendor blog does not report SWE-bench Verified directly; closest vendor coding numbers below)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 66.9%** (Z.ai launch blog 2026-08-14; vs GPT-5.6 Sol 72.7%); **FrontierSWE 78.1 dominance** (Z.ai launch blog, Proximal eval at 1M context); **SWE-Marathon v1.1 42.5%** (Z.ai launch blog); **NL2Repo 58.0%** (Z.ai launch blog table); **PostTrainBench 39.8%** (Z.ai launch blog table)

Long context:

- No verified MRCR / RULER / GraphWalks score found for GLM-5.3; vendor reports 1M context with 128K max output and long-horizon evals (FrontierSWE at 1M, SWE-Marathon at 1M) but no public retrieval-percentage curve.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.1 88.2% now independently measured plus TB 3.0 28.3%, Tau3 50.3% measured, Toolathlon-Verified 73.0%, MCP Atlas ~88% and AutomationBench 48.2%; capped by trailing closed frontier on TB 3.0/4.0.
- **Reasoning: 88/100.** AA-GPQA 91.7% measured plus HLE-tools 62.5% measured, AA Index 45 anchor, LCR 79.7% and MMLU-Pro ~86%; capped by HLE-no-tools ~42% and CritPt 19.1%.
- **Context window: 90/100.** 1M total with 128K max output and 1M-context evals (FrontierSWE, SWE-Marathon) show top-tier window; capped by no verified MRCR/RULER retention curve.
- **Multimodal: 15/100.** Text in / text out only per vendor docs; text-only floor, capped with no image/audio/video input.
- **Coding: 90/100.** Vals SWE-Verified 95.4 measured plus Coding Index 74.8% measured, DeepSWE 66.9%, FrontierSWE 78.1 and LiveCode ~80-94%; capped by DeepSWE gap to closed frontier.
- **Cost efficiency: 65/100.** $1.40/$4.40 is well below closed frontier coding rates with open-weights option; paid-only with no free tier, capped below free Flash tiers.
- **Overall Score: 75/100.** Mean of the five non-cost dims (90+88+90+15+90)/5 = 74.6 → 75; best-fit open-weights agentic coding workhorse where terminal agency outweighs text-only limits. (Re-verified 2026-10-17: Tool 88→90, Reasoning 86→88, Coding 89→90 on AA-measured + benchgap + HF evidence.)

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-24
- Method: public internet research (Z.ai GLM-5.3 launch blog 2026-08-14, Z.ai docs, VentureBeat 2026-08-14, TensorFeed.ai aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-17 (23 days after 2026-09-24)

Original research date 2026-09-24. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; score changes below are evidence-driven per the re-run orders.

Three independent searches performed 2026-10-17: (1) benchgap GLM-5.3 lane (44 measured benchmarks as of 2026-10-16), (2) Artificial Analysis glm-5-3 model page (Index 45 max, 1M, 753B/40B, $1.40/$4.40, 2026-08-18), (3) Hugging Face zai-org/GLM-5.3 (model-card eval-results: HLE-tools 62.5, TB3.0 28.3, Toolathlon-Verified 73). Conflicting results compared below.

| Dimension | 2026-09-24 | 2026-10-17 | Change |
|---|---|---|---|
| Tool use | 88 | 90 | UP +2 — filed vendor-only TB2.1 88.2% now independently measured on benchgap; new Tau3 50.3% measured + Toolathlon-Verified 73.0% measured + MCP Atlas 88.0% est. fill the filed gaps; TB3.0 28.3% confirmed on HF card |
| Reasoning | 86 | 88 | UP +2 — filed provisional GPQA 88.1% now AA-GPQA 91.7% measured; HLE-tools 62.5% now measured (HF card + benchgap); new AA Index 45 anchor + LCR 79.7% measured + Omni-acc 33.9% fill the filed Index gap |
| Context | 90 | 90 | hold — 1M/128K reconfirmed on AA + HF (753.3B safetensors); MRCRv2 85.7% est. only, no measured curve to cross the band |
| Multimodal | 15 | 15 | hold — text-only confirmed on AA (no image input) + HF chat template ("unable to process media" reminder); floor applies |
| Coding | 89 | 90 | UP +1 — filed provisional SWE-Ver 95.4 now Vals 95.4 measured + est 81.7%; new Coding Index 74.8% measured + LiveCode v6 ~94% est. + Vals LiveCode 80.5% deepen; DeepSWE 66.9% measured confirms filed row |
| Cost | 65 | 65 | hold — $1.40/$4.40 reconfirmed on AA; paid-only, no free tier |
| Overall | 74 | 75 | UP +1 — (90+88+90+15+90)/5 = 74.6 → 75 |

New verified rows this pass: AA Index 45 (max); AA-GPQA 91.7% / HLE 42.3% / SciCode 59.0% measured; LCR 79.7%; CritPt 19.1%; Tau3 50.3%; AutomationBench 48.2%/62.2% lanes; Toolathlon-Verified 73.0%; Coding Index 74.8%; CyberGym 84.5%; ExploitBench 54.4%; GDPval 57.5%; BrowseComp ~91% est.; TB4.0 ~42-46% lanes; SWE-Marathon 42.5%; NL2Repo 58.0%; FrontierMath T4 29.3%. Conflicts resolved: filed TB2.1 vendor-only → measured confirmed; filed SWE-Ver 95.4 provisional → Vals-measured confirmed; filed GPQA/HLE provisional → AA-measured above filed values. Remaining gaps: MRCR/RULER measured curve, Claw-Eval absolute, Vibe measured.

Scores updated: Tool 88→90, Reasoning 86→88, Coding 89→90, Overall 74→75. Normalized-scores section above now reads Tool 90, Reasoning 88, Coding 90, Overall 75 (edit applied this pass with the same evidence).

Sources: https://benchgap.net/model/glm-5-3 · https://artificialanalysis.ai/models/glm-5-3 · https://huggingface.co/zai-org/GLM-5.3

