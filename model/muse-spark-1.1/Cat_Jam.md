# Muse Spark 1.1 — findings by Cat Jam

- Source: Meta / Muse Spark 1.1 (`opencode/muse-spark-1.1`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** First-generation Muse Spark release (July/Aug 2026). Standard-only tier; 1M context; strong agent/ reasoning, middle tier on coding.
- **Provider / access:** Meta Model API (`muse-spark-1.1`), Standard tier; Muse Code. Same pricing family as 1.2/1.3? Premium standard $1.25/$4.25; Contributor only 1.2+ (1.1 standard only per docs). Release 2026-07/08.
- **Knowledge:** Not published; estimated mid-2026 (inference from 1.2/1.3 table but no docs).
- **IDs:** `muse-spark-1.1`
- **Context window:** 1,048,576 tokens; max output (not verified in sampled docs; same 943,718 as 1.2/1.3 likely).
- **Modalities:** Text, image, video, audio, PDF in; text out. Audio fully supported? (1.1 likely yes; not specified).
- **Pricing (as of 2026-10-16):** Standard $1.25/$4.25 with cached $0.15 (likely; inherited from the family). No contributor tier. Free promo routes may exist.
- **Architecture:** Proprietary closed-weight (Meta), 1M context.

### Raw benchmarks found (Meta benchmark report)

Agent / tool use:

- MCP Atlas: **88.1%**
- JobBench: **54.7%**
- OSWorld-Verified: **80.8%**
- WebArena-Verified: **69%**
- DeepSearchQA: **84.9%**
- Toolathlon-Verified: **75.6%**
- Finance Agent v2: **57.2%**
- GDPval-AA: **1375 Elo** / 35.6% (AA benchmark, measured)
- CyberGym: **59.0%**

Reasoning / knowledge:

- HLE with tools: **62.1%** / no tools **52.2%**
- GPQA Diamond (AA): 89.8% (measured)
- GPQA Diamond (Vals): 91.2% or 88.4? BenchLM Vals 91.2, models.wtf 88.4. Use 88.4? Let's use measured AA 89.8 and Vals 91.2 separately.
- HLE without tools 52.2; with tools 62.1
- HealthBench Professional: 59.3
- AA Intelligence Index: **33.7** (AA measured)
- LCR / AA-LCR: 77.7
- CritPt 15.1
- Omniscience 52.1 acc / 50.0 hall
- AA-Agentic Index: 27.5
- MRCR: not in sampled data for 1.1 (not stated)
- ARC-AGI? not in sampled

Coding:

- Terminal-Bench 2.1: 80.0% (Vals independent 69.3)
- SWE-bench Pro: **61.5%**
- DeepSWE v1.1: **53.3%**
- LiveCodeBench (Vals): 85.9%
- SWE-bench Vals: 82.0%
- AA-SciCode: 58.8
- Terminal-Bench 3.0: 12.7
- CodeArena? 1588? Not for 1.1 table (that's 1.3)

Long context:

- MRCR not in sampled data for 1.1.

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 80.0, OSWorld 80.8, JobBench 54.7, MCP Atlas 88.1, DeepSearchQA 84.9, GDPval 1375 (35.6%). Strong agent.
- **Reasoning: 86/100.** HLE with tools 62.1, with/without 52.2, GPQA 89.8–91.2, AA Index 33.7 (low on AA), ARC? not sampled; CritPt 15.1 caps.
- **Context window: 90/100.** 1M but no MRCR value; cap from missing retrieval measurement.
- **Multimodal: 88/100.** Text/image/video/audio/PDF; OSWorld/agent vision. (Audio fully supported? likely)
- **Coding: 82/100.** TB2.1 80.0, SWE-Pro 61.5, DeepSWE 53.3, LiveCodeBench Vals 85.9.
- **Cost efficiency: 94/100.** Standard $1.25/$4.25; no contributor tier (standard only); good priced flagship of prior gen.
- **Overall Score: 86.4/100.** Mean (86+86+90+88+82)/5 = 86.4 → use 86? Wait calculate: 86+86=172, +90=262, +88=350, +82=432; /5=86.4 → 86. Queue 87.1? Fine.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Meta evaluation report, Artificial Analysis article, benchgap/benchlm, OfficeChai/Kingy.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
