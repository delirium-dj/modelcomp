# Qwen3.8-Max — findings by Muse Spark 1.3 Contributor

- Source: Alibaba/Qwen3.8-Max, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-07 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: card + BenchLM absolutes added, scores recomputed 83 → 88); re-research pass 2026-10-07 adds vendor-blog MRCR/IFBench/PaperBench rows + open-weights status, scores unchanged at 88
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Max (Alibaba Cloud flagship sparse MoE)
- **Short description:** Alibaba Cloud's flagship 2.4T sparse MoE with 1M multimodal context and flat $2/$6 pricing, competing on reasoning and long-context value.
- **Provider / access:** Alibaba Cloud via Model Studio API (`alibaba/qwen3-8-max`); no Zen Free ID (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-08-03 release (3.8 family; CloudPrice records 2026-09-03); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `alibaba/qwen3-8-max` (state explicitly: no Free ID exists on Zen; one-time 1M-token free quota noted)
- **Context window:** 1M / 131K out — verified via curated repo metadata
- **Modalities:** text, image, video, PDF in; text out; reasoning yes (low-reasoning advised — model overthinks); tool calls yes (CloudPrice caps)
- **Pricing (as of 2026-09-18):** Paid $2 in / $6 out per 1M flat (one-time 1M-token free quota, no Zen Free ID)
- **Architecture:** proprietary sparse MoE, 2.4T total (512 experts, 10 routed + 1 shared; MXFP4 native); API multimodal Max (amended 2026-09-27). Open checkpoints released Aug 2026 week: 2.4T text-only (Qwen3.8-Max License, restrictive) + 27B (Apache 2.0) — hosted Max itself stays proprietary multimodal (theairankings, re-checked 2026-10-07).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (BenchLM mirror)
- CoWorkBench: **74.8%** (BenchLM mirror); **JobBench 53.4%** and **skillsBench 70.2%** (BenchLM mirrors)
- Agents' Last Exam: **52.4%** (BenchLM mirror)
- AndroidWorld: **85.3%** (BenchLM mirror); **MobileWorld 77.8%** and **WebArena-Verified 66.8%** (BenchLM mirrors)
- OSWorld 2.0: **19.4%** (BenchLM mirror — weak tail); **86.1% OSWorld-Verified** (vendor blog table, leads Sol 83.2/Fable 5 85.0 — harness differs sharply from the mirror row, both listed, vendor read provisional)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Qwen model card via Featherless; llm-stats 0.926 #13)
- HLE: **43.6% without tools / 56.2% with tools** (Qwen model card)
- AA-LCR: **0.8** (CloudPrice LCR row #47 — weak tail)
- LCR / MLCR: see AA-LCR row above; no verified MLCR score found
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **46.9** (CloudPrice #13); **45 on AA Index v4.3.2** (0902 snapshot, $5.41/task — version differs, both listed; level with GLM-5.3, +1 over Kimi K3)
- Instruction following / research: **82.8% IFBench** (vendor blog; leads Sol 72.7 — new); **93.0% PaperBench** (vendor blog; leads Sol 90.5/Fable 5 88.8 — new); **#2 LMArena multimodal** (Arena.AI blind vote via hokai — new)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **67.7% SWE-bench Pro** (BenchLM public lane #7); no verified SWE-Verified absolute found
- LiveCodeBench: **no verified public score found**
- SciCode: **0.5** (CloudPrice row #30 — weak tail)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **56.6% DeepSWE** (BenchLM mirror); **73.5% FrontierSWE** (BenchLM mirror); **55.9% NL2Repo** and **41.0% MLS-Bench Lite** (BenchLM mirrors); **71.8% Coding Index** (CloudPrice #20)

Long context:

- **1M / 131K out verified; MRCR v2 256K 92.9% (8-needle)** (vendor blog table; vs Sol 93.8 — fills prior gap, 256K only); **66.3% LongBench v2** (vendor blog — new); no 512K+ retention number found

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 86.6% plus CoWork 74.8%, AndroidWorld 85.3% and ALE 52.4% show broad device/web orchestration; capped by the OSWorld 19.4% tail and no Tau/GDPval/Claw numbers.
- **Reasoning: 89/100.** GPQA 92.6% plus HLE 56.2% and AA Index 46.9 show strong reasoning; capped by the AA-LCR 0.8 tail and no CritPt number.
- **Context window: 100/100.** 1M / 131K out verified; top tier.
- **Multimodal: 80/100.** Text/image/video in, text out; capped below audio/PDF omni models.
- **Coding: 86/100.** SWE-Pro 67.7% (#7) plus FrontierSWE 73.5%, Coding Index 71.8 and DeepSWE 56.6 show strong flagship coding; capped by no SWE-Verified/LiveCode/Vibe numbers and the SciCode 0.5 tail.
- **Cost efficiency: 60/100.** Paid $2/$6 flat with one-time free quota; mid paid value, no standing free tier.
- **Overall Score: 88/100.** Mean of the five non-cost dims (87+89+100+80+86)/5 = 88.4; best-fit flagship long-context value MoE at flat pricing — card plus BenchLM absolutes now confirm it.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-07
- Method: public internet research + 2026-10-07 re-research pass (Qwen 3.8 launch blog + full benchmark table, Alibaba Cloud launch post, theairankings/hokai/aifire/unifybench third-party compilations); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
