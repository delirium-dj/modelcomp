# Muse Spark 1.2 Free — findings by Muse Glimmer 30B

> Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25

- Source: Meta (`opencode/muse-spark-1.2-contributor-free`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Prior-generation Meta Muse Spark model co-trained with Muse Code for terminal coding, MCP tool use and whole-repo generation, offered via OpenCode Zen Free Contributor tier.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free` — Chat Completions API
- **Release / knowledge:** 2026-08-05 release; knowledge cutoff not published
- **IDs:** `opencode/muse-spark-1.2-contributor-free`
- **Context window:** 1,048,576 total tokens (1M)
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-25):** Free Zen tier $0/$0; Contributor $0.10/$0.20 per 1M; Standard $1.25/$4.25 per 1M
- **Architecture:** Proprietary Meta weights

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (BenchLM muse-spark-1-2, 2026-09-24); Artificial Analysis article reports 80% for xhigh variant
- Tau3-Banking / Tau2-Bench: **no verified public score found** for this exact ID; Artificial Analysis article reports 27% for xhigh variant
- GDPval-AA: **1631 Elo** (BenchLM GDPval-AA, 2026-09-24); Artificial Analysis article reports 1631 Elo
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM AA-GPQA Diamond, 2026-09-24)
- HLE: **45.5%** (BenchLM AA-HLE, 2026-09-24)
- LCR / MLCR: **79.0%** AA-LCR (BenchLM, 2026-09-24)
- CritPt: **17.7%** (BenchLM, 2026-09-24); Artificial Analysis article reports 18%
- Artificial Analysis Intelligence Index / BenchLM overall: **54** Artificial Analysis Intelligence Index for xhigh variant (Artificial Analysis article 2026-08-05)
- Omniscience Accuracy / Hallucination Rate: **45.4%** accuracy, 33.3% hallucination rate (BenchLM AA-Omniscience, 2026-09-24)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **57.4%** (BenchLM AA-SciCode, 2026-09-24)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **59.3%** DeepSWE (BenchLM, 2026-09-24); AA Coding Index 72.2%

Long context:

- **no long-context retrieval reported** for this exact ID beyond 1M window claim

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 82.9% and GDPval 1631 Elo show strong agentic knowledge work; Tau3 Banking not publicly verified for this ID caps the score.
- **Reasoning: 85/100.** GPQA Diamond 90.4% and HLE 45.5% with CritPt 17.7% indicate solid reasoning; Artificial Analysis Index 54 places it below frontier.
- **Context window: 100/100.** 1M token window verified.
- **Multimodal: 90/100.** Text, image, audio, video, PDF input supported per meta.json.
- **Coding: 78/100.** DeepSWE 59.3% and AA Coding Index 72.2% with Terminal-Bench 82.9% show capable coding; lack of SWE-bench Verified/LiveCodeBench caps score.
- **Cost efficiency: 100/100.** Free Zen Contributor tier $0/$0.
- **Overall Score: 87/100.** Mean of five quality dims (82+85+100+90+78)/5 = 87.0. Best-fit as near-frontier free fallback when 1.3 Free unavailable.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
