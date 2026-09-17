# Muse Spark 1.3 Free — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 Free (Contributor tier)
- **Short description:** Meta's flagship multimodal reasoning model for long-horizon agentic, multi-agent, and coding workflows; ~1M-token context; image/video understanding. The free Contributor tier swaps prompts/completions for training use in exchange for low price.
- **Provider / access:** Meta Model API (`api.meta.ai`), Muse Code, OpenRouter, Vercel AI Gateway; OpenCode Zen free tier at `https://opencode.ai/zen/v1/responses` (Responses API)
- **Release / knowledge:** 2026-09-02 (Meta blog; rolling out same day)
- **IDs:** `meta/muse-spark-1.3` (standard); Meta-native `muse-spark-1.3` / `muse-spark-1.3-contributor`; Zen free `opencode/muse-spark-1.3-contributor-free`
- **Context window:** 1,048,576 total / 1M input; max output 1,048,576 (Vercel) but **131,072 documented on the Zen free tier** (pi.dev, Vals)
- **Modalities:** text + image + video in (Meta docs: + audio, PDF); text out. Reasoning variants: `xhigh` (public), `max` (limited preview, not exposed on Zen free).
- **Pricing (as of 2026-09-17):** Zen Free tier $0/$0/$0 (limited-time; prompts may train future Meta models). Contributor paid $0.10 / $0.002 cached / $0.20 out. Standard $1.25 / $0.15 cached / $4.25 out.
- **Architecture:** Proprietary, closed weights; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (max, Meta self-reported; ties GPT-5.6 Sol) / **85% xhigh / 86% max** (Artificial Analysis runs)
- Tau3-Banking: **47% xhigh / 52% max** (AA; xhigh +12 vs 1.2)
- GDPval-AA v2 Elo: **1709 xhigh / 1754 max** (AA; rank 7/340)
- DeepSearchQA **89.4%**; OSWorld 2.0 **66.9%**; AutomationBench **49.4%**; JobBench **64.9%**; Agentic IF Index **57.8** (all max, Meta self-reported)
- Claw-Eval, Toolathon, MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- GPQA: **94% xhigh** (AA; +4 vs 1.2)
- HLE: **47% xhigh / 49% max** (AA)
- AA-LCR: **79%** (−4 regression vs 1.2's 83%)
- CritPt: **26% xhigh** (AA; +8 vs 1.2's 18%)
- AA Intelligence Index: **61 xhigh / 62 max** at launch article; current AA pages show **45 / 53** after v4.3 renormalization (flag both)
- AA-Omniscience Accuracy **42% xhigh; 44% max**; Hallucination ~33.6% (BenchLM mirror)
- BenchLM overall: "Coming soon / unranked".

Coding:

- DeepSWE 1.1: **75.4%** (max, Meta self-reported; #1/33 at launch)
- SciCode: **59% xhigh** (AA)
- AA Coding Index: **76.3%** (BenchLM mirror)
- SWEAtlas Codebase QnA: **59.4%** (max, Meta self-reported)
- SWE-bench Verified/Pro: **no verified public score found**.

Long context:

- MRCR v2 8-needle 256K–512K: **98.5%**; 512K–1M: **98.1%** (max, Meta self-reported; vs GPT-5.6 Sol 91.5 / 73.8)

### Normalized scores (1–100)

- **Tool use: 95/100.** TB 88.8%, Tau3 #1 (52% max), GDPval 1754, MRCR to 1M — top-tier agentic. Deduct for Meta self-reporting of several headline numbers and 1M max output not on free tier.
- **Reasoning: 92/100.** GPQA 94%, HLE 47%, CritPt 26% — frontier. Deduct for LCR regression and index renormalization noise.
- **Context window: 100/100.** Full 1M tier with ~98% retrieval at 512K–1M.
- **Multimodal: 85/100.** Strong input (text/image/video/PDF/audio per Meta), text-only output.
- **Coding: 95/100.** DeepSWE 75.4 SOTA + SciCode 59 + Coding Index 76.3.
- **Cost efficiency: 100/100.** $0 free-impact tier; Contributor paid is $0.10/$0.20 — very cheap vs frontier.
- **Overall Score: 95/100.** Default for long-horizon agentic/coding when the free tier is up.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-17
- Method: public web research (Meta blog, Artificial Analysis, Vercel gateway, pi.dev, OpenCode docs, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.