# Z.ai GLM 5.3 FlashX — findings by Big Pickle

- Source: Z.ai (Zhipu AI)/GLM-5.3-FlashX (`z-ai/glm-5.3-flashx`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** High-speed serving variant (up to ~200 tok/s) of Z.ai's GLM-5.3-Flash — identical 320B-A18B weights, native multimodal, aimed at low-latency agentic coding. Same intelligence as GLM-5.3-Flash; only inference throughput differs.
- **Provider / access:** Z.ai API (`glm-5.3-flashx`, Chat Completions), OpenRouter `z-ai/glm-5.3-flashx`, Vercel AI Gateway `zai/glm-5.3-flashx`, OpenCode Zen `opencode/glm-5.3-flashx` (per `meta.json`). Not available on the Z.ai Coding Plan (Flash only).
- **Release / knowledge:** 2026-09-18 (LM Market Cap / CloudPrice version history); base Flash released 2026-08-26 (previously tested anonymously as "ox-alpha" on OpenCode/OpenRouter). Knowledge cutoff not published.
- **IDs:** `z-ai/glm-5.3-flashx` (OpenRouter), `zai/glm-5.3-flashx` (Vercel), `glm-5.3-flashx` (Z.ai); no $0 Free ID found on Zen for the FlashX SKU as of 2026-10-07.
- **Context window:** 1,048,576 (1M) input; 128K (131,072) max output (Z.ai docs `docs.z.ai/guides/vlm/glm-5.3-flash.md`, Blackbox spec sheet).
- **Modalities:** text, image, video in; text out; reasoning supported; tool/function calling; structured outputs / native JSON schema; prompt caching.
- **Pricing (as of 2026-10-07):** $0.37 in / $1.25 out / $0.075 cache read per 1M tokens (OpenRouter, Vercel AI Gateway, Blackbox, CloudPrice — all $0.37/$1.25). Base GLM-5.3-Flash is cheaper at $0.15/$0.50. Paid, no free tier found.
- **Architecture:** 320B total / 18B active MoE, hybrid sparse + linear attention (3.01x less attention compute, 4.44x smaller KV cache vs GLM-5.3), mHC scaling, 30T-token multimodal pretraining corpus; open weights on Hugging Face (`zai-org/GLM-5.3-Flash`, MIT license).

### Raw benchmarks found

> FlashX serves the same weights as GLM-5.3-Flash, so Z.ai's published Flash benchmarks and independent runs on Flash apply to FlashX (serving variant only).

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai launch post, corroborated by Artificial Analysis `terminalbench-v2-1` leaderboard; Vals AI harness: 62.9%)
- AA Tau3-Banking: **47.2%** (Artificial Analysis tau3-banking leaderboard)
- GDPval-AA: **1773** (Z.ai launch post — ahead of Claude Opus 4.8 1582, GPT-5.6 Terra 1571, Gemini 3.7 Flash 1527 on the general dev/programming eval)
- Toolathlon-Verified: **78.4%** (Z.ai launch post)
- AutomationBench: **48.8%** (Z.ai launch post); AA AutomationBench: **60.4%** (Artificial Analysis)
- Agents' Last Exam: **26.3%** (Z.ai launch post)
- AA Briefcase Elo: **1454**; AA ITBench: **51.2%**; AA EnterpriseOps-Gym: **33.2%** (Artificial Analysis)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Artificial Analysis); Vals AI: 86.4%
- HLE: **39.9%** (Artificial Analysis, no tools); **55.3%** with tools (Z.ai launch post / HF eval results)
- MLCR-AA: **51.1%**; AA-LCR (long-context reasoning): **80.0%** (Artificial Analysis)
- CritPt: **15.4%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **41.8** (AA leaderboard); Z.ai claims **57** on v4.1.1 at $0.045/task — harness/version conflict, both recorded
- AA-Omniscience Index: **7.5%**; AA-Omniscience non-hallucination rate: **72.4%** (Artificial Analysis)
- MMLU-Pro: **86.1%** (Vals AI)

Coding:

- SWE-bench (Vals): **92.0%** (Vals AI SWE-bench leaderboard; harness label "Vals", not Verified)
- DeepSWE v1.1: **63.4%** (Z.ai launch post; vs GLM-5.2's 46.2)
- LiveCodeBench: **80.5%** (Vals AI)
- AA-SciCode: **51.6%** (Artificial Analysis)
- NL2Repo: **56.3%**; OpenHarmony Bench: **57.3%**; FrontierSWE v2: **18.1%** (Z.ai / OpenHarmony / Proximal leaderboards)
- Z.ai Code Bench v1.0 (max effort): **29.0** vs Claude Opus 4.8 29.5 (Z.ai launch post, Claude Code 2.1.207)

Long context:

- No MRCR / RULER / GraphWalks retrieval number published for the 1M window; AA-LCR 80.0% at long context is the closest verified long-context signal. Hybrid sparse+linear attention is explicitly designed to preserve long-context quality while cutting KV cache 4.44x.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 84.3%, GDPval-AA 1773 (frontier band is 1750+), Toolathlon 78.4%, Tau3-Banking 47.2% — near-frontier agentic stack; capped below 90 by AutomationBench 48.8% and Agents' Last Exam 26.3%.
- **Reasoning: 85/100.** AA-GPQA 91.2% and HLE 39.9% (55.3% w/ tools) hit the frontier reference band; capped by AA Index 41.8 (Z.ai's claimed 57 not independently confirmed), CritPt 15.4%, and Omniscience 7.5%.
- **Context window: 95/100.** 1M total / 128K output sits in the ≥1M tier (95–100); no public 512K+ retrieval score, so no claim to 100.
- **Multimodal: 85/100.** Text/image/video in, text out (no audio in, no non-text out) — video input lands mid 75–90 band; MMVU 80.5%, CharXiv 89.4%, OfficeQA Pro 62.4%.
- **Coding: 84/100.** TB2.1 84.3%, LiveCodeBench 80.5%, SWE-bench (Vals) 92.0% are near-frontier; capped by DeepSWE 63.4% (frontier ref 74%+), AA-SciCode 51.6%, FrontierSWE v2 18.1%.
- **Cost efficiency: 94/100.** $0.37/$1.25 per 1M with $0.075 cache reads — cheaper than the ~$0.60/$2.20 (=92) reference point, no verified $0 tier (base Flash would score higher at $0.15/$0.50).
- **Overall Score: 87.4/100.** (88+85+95+85+84)/5 = 87.4 — best-fit: fast, cheap frontier-class multimodal coding/agent driver where 200 tok/s latency matters more than absolute top-tier long-horizon depth.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-07
- Method: fresh public web research (Z.ai docs/launch post, BenchLM, Artificial Analysis, Vals AI, OpenRouter, CloudPrice, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
