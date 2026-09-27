# Muse Spark 1.2 Free — findings by LongCat 2.5 Preview

- Source: Meta (`muse-spark-1.2-contributor-free` / `muse-spark-1.2-free` on Zen)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free (Contributor)
- **Short description:** Meta's coding-focused Muse Spark update with a 1M-token context — higher first-attempt accuracy and more reliable tool calling than 1.1, offered in a $0 Contributor tier (training-data consent required) alongside the standard paid tier.
- **Provider / access:** Meta Model API — `meta/muse-spark-1.2-contributor` (OpenAI-compatible); OpenCode Zen Free ID `muse-spark-1.2-free` (limited-time $0 promotion); Vercel AI Gateway; OpenRouter. Standard tier `meta/muse-spark-1.2` at $1.25/$4.25.
- **Release / knowledge:** Muse Spark 1.2 released 2026-08-05; Contributor Free tier from 2026-08-21. Knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Zen Free), `meta/muse-spark-1.2-contributor` (standard Contributor), `meta/muse-spark-1.2` (paid).
- **Context window:** 1,048,576 tokens (verified via Meta + Vals); max output 131K (Vals) / 944K (provider listings).
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (default/minimal/xhigh efforts); function calling, parallel tool calls, structured outputs, web search, caching.
- **Pricing (as of 2026-09-27):** $0.10/M in, $0.20/M out (Contributor — usage improves Meta models; training-data caveat); standard $1.25/$4.25; Zen Free tier $0 (limited time). Cache read $0.002/M (Contributor).
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80%** (Artificial Analysis)
- GDPval-AA v2: **1631 Elo** (AA; behind Opus 5 1852, Fable 5 1743, GPT-5.6 Sol 1730, Kimi K3 1685)
- Tau3-Banking: **27%** (AA)
- MCP Atlas: **90.3%** (BenchGen, per BenchLM ledger)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (BenchLM)
- HLE: **45.5%** (BenchLM)
- Artificial Analysis Intelligence Index: **57** (xhigh; 54 in AA's later v4.2 table)
- AA-Omniscience: accuracy 38% / hallucination rate 28% (AA)

Coding:

- DeepSWE: **59.3%** (BenchLM)
- SWE-Atlas: **59.4%** (BenchLM)
- SWE-bench Verified: no verified public score found

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Vals Index highlights (Vals AI):

- Vals Index **71.88%** (#11/55); TaxEval v2 #1/145; Harvey's Legal Agent #1/59; MedScribe #3/92; BioMysteryBench #6/10; Vibe Code Bench #12/93

### Normalized scores (1–100)

- **Tool use: 85/100.** MCP Atlas 90.3% and GDPval 1631 Elo are strong; TB2.1 80% is a notch under the 88%+ frontier mark and Tau3-Banking 27% sits mid-band.
- **Reasoning: 88/100.** AA Intelligence Index 57, GPQA 90.4% and HLE 45.5% are all frontier-tier; hallucination rate 28% is notable but the accuracy/hallucination profile caps the dimension under 90.
- **Context window: 95/100.** 1M tokens earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 92/100.** Text/image/audio/video/PDF input — full non-text input coverage; text-only output keeps it under the top band.
- **Coding: 80/100.** DeepSWE 59.3% and SWE-Atlas 59.4% are solid mid-upper band; no SWE-bench Verified number to confirm more.
- **Cost efficiency: 100/100.** $0 Contributor tier on Zen (limited-time free period) = $0 input/output; flagged as time-limited + training-data caveat per methodology.
- **Overall Score: 88/100.** Mean of the five quality dims (85+88+95+92+80)/5 = 88. Best-fit: default free-tier pick for coding-agent and multimodal workloads when the Contributor data-terms are acceptable.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Meta model page + AI research blog, Artificial Analysis, BenchLM, BenchGen, Vals.ai, CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
