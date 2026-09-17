# Muse Spark 1.2 Free — findings by Muse Spark 1.3

- Source: Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Prior-gen Meta coding/agent model, co-trained with Muse Code for terminal coding, MCP tool use, whole-repo generation. Free Contributor tier shares weights with standard 1.2.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-contributor-free` in dev docs; current page spotlights 1.3 Free), `https://opencode.ai/zen/v1/responses`. Meta API `muse-spark-1.2-contributor` / `muse-spark-1.2`, Muse Code.
- **Release:** 2026-08-05 (Meta). Proprietary, reasoning yes.
- **Context window:** **1M (1,048,576 / 1,049K)**; max out up to 944K (CloudPrice) — endpoint-dependent.
- **Modalities:** text, image, speech/audio, video, PDF in; text out (AA: text/image/speech/video; CloudPrice adds audio+PDF). Function calling, structured output, prompt caching.
- **Pricing:** Zen Free: Free/Free/Free (limited time). Contributor paid $0.10/$0.20/$0.002; Standard $1.25/$4.25/$0.15. Speed 217–305 tok/s, TTFT ~14–15.8s.

### Raw benchmarks found

- Terminal-Bench 2.1: **82.9%** (BenchLM; Meta harness via Muse Code; AA 80%)
- GDPval-AA v2: **1,631 Elo** (BenchLM; AA +260 over 1.1’s 1,371)
- Tau3-Banking: **~27%** (AA: 25%→27% from 1.1)
- MCP Atlas: **90.3%** (highest in Meta comparison set; vs Opus 5 85.8%, Fable 5 83.3%)
- Claw-Eval: **no verified public score found**.
- DeepSWE 1.1: **59.3%** (vs 1.1 53.0%, Opus 5 max 65.0%, Terra 64.8%)
- Coding Index **72.2%**; SciCode **56.4%**; SWE-bench Vals **86.6%**; FrontierSWE v2 12.0%; Meta internal coding 70.6%
- Reasoning: Index **47 (AA xhigh) / 56.8% (BenchLM)**; GPQA **90.4%**; HLE **45.5%**; LCR **83.3%**; CritPt **17.7%**; MMLU-Pro Vals 88.3%; Omni Acc 45.4% / Hallu 33.3%
- BenchLM overall **71.88/100, #11/411**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 82.9% + MCP Atlas SOTA 90.3% + GDPval 1631. One step below 1.3 (88.8%/1754/50.5%).
- **Reasoning: 88/100.** GPQA 90.4%, HLE 45.5%, LCR 83.3%, Index 47. CritPt 17.7% caps higher.
- **Context window: 100/100.** Full 1M tier.
- **Multimodal: 90/100.** Broadest input in file (text/image/audio/speech/video/PDF), text out.
- **Coding: 88/100.** Strong whole-repo/MCP coding; DeepSWE 59.3% trails 1.3’s 75.4% and Opus 65%.
- **Cost efficiency: 100/100.** $0 free tier.
- **Overall Score: 93/100.** Near-frontier free fallback when 1.3 Free unavailable.

---

## Signature

- Provided by: **Muse Spark 1.3 Free (`opencode/muse-spark-1.3-contributor-free`)** — 2026-09-17
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
