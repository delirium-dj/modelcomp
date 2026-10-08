# GLM 5.3 FlashX — findings by GLM 5.3

- Source: Z.ai (`glm-5.3-flashx`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's high-speed serving variant of GLM-5.3-Flash — identical weights served at ~200 tokens/s with hybrid sparse + linear attention, aimed at low-latency multimodal agentic coding (ApX). Flagged as a serving variant of GLM-5.3-Flash, not a new training run.
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-flashx` (Chat Completions, `https://opencode.ai/zen/v1/chat/completions`) per project meta; note the ID was absent from the live Zen models/docs lists when re-checked 2026-10-08 — treat as a rotated/limited catalog entry. ApX lists independent API access at $0.37/$1.25 per 1M.
- **Release / knowledge:** 2026-09-18 (ApX); knowledge cutoff not disclosed.
- **IDs:** `opencode/glm-5.3-flashx`; no Free ID exists on Zen for this variant.
- **Context window:** 1,048,576 (1M) total, 128K max output (project meta + ApX 1.05M; same-weights GLM-5.3-Flash verified at 1M on Artificial Analysis).
- **Modalities:** Text and image in (verified for the shared weights on Artificial Analysis); video in claimed by folder meta/ApX "native multimodal"; text out only; reasoning yes; tool calls yes; JSON mode not verified.
- **Pricing (as of 2026-10-08):** $0.37 in / $1.25 out per 1M (ApX, matches project meta). Base GLM-5.3-Flash on Z.ai's own API: $0.15 in / $0.50 out, cached read $0.03 (Zen pricing table) — FlashX is the premium-speed tier.
- **Architecture:** Identical weights to GLM-5.3-Flash: 320B total / 18B active MoE, MIT-licensed open weights (Artificial Analysis); the FlashX serving configuration (speed kernel, hybrid sparse + linear attention) is proprietary/undisclosed (ApX).

### Raw benchmarks found

> No FlashX-specific public benchmark numbers exist yet — ApX explicitly lists "no evaluation benchmarks for GLM-5.3 FlashX available", and Artificial Analysis / BenchLM have no FlashX page. Because FlashX ships the identical GLM-5.3-Flash weights (verified: same 320B/18B model, same 1M window), the Flash numbers below are same-weights proxies, marked provisional. Never treat them as FlashX-harness scores.

Agent / tool use (same-weights GLM-5.3-Flash proxy):

- Terminal-Bench 2.1: **84.3%** (Z.ai GLM-5.3-Flash launch post via BenchLM; AA terminalbench-v2-1 agrees 84.3%)
- Toolathlon-Verified: **78.4%** (Z.ai launch post via BenchLM)
- GDPval-AA: **1773** (Z.ai launch post via BenchLM — above the 1750 frontier reference)
- AA Tau3-Banking: **47.2%** (Artificial Analysis tau3-banking leaderboard)
- AutomationBench: **48.8%** vendor / **60.4%** AA harness (BenchLM)
- Agents' Last Exam: **26.3%** (Z.ai launch post via BenchLM)
- AA Terminal-Bench 4.0: **32.8%** (Artificial Analysis leaderboard)
- AA-Briefcase Elo: **1454** (Artificial Analysis leaderboard)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge (same-weights proxy):

- GPQA Diamond: **86.4%** (Vals) / **91.2%** (AA harness) (BenchLM)
- HLE: **39.9%** AA / **55.3%** with tools (BenchLM)
- AA-LCR: **80.0%** (Artificial Analysis leaderboard)
- MLCR-AA: **51.1%** (Artificial Analysis leaderboard)
- CritPt: **15.4%** (Artificial Analysis leaderboard)
- Artificial Analysis Intelligence Index: **42** (AA model page; BenchLM lists 41.8%)
- AA-Omniscience Index: **7.5** (Artificial Analysis leaderboard)

Coding (same-weights proxy):

- SWE-bench: **92.0%** (Vals SWE-bench leaderboard via BenchLM)
- LiveCodeBench: **80.5%** (Vals via BenchLM)
- DeepSWE: **63.4%** (Z.ai launch post via BenchLM)
- SciCode: **51.6%** (AA-SciCode leaderboard)
- NL2Repo: **56.3%** (Z.ai launch post via BenchLM)
- FrontierSWE v2: **18.1%** (Proximal leaderboard via BenchLM)
- Terminal-Bench 2.1 (coding-side view): **84.3%**

Long context:

- 1M window verified (Artificial Analysis, ApX); no MRCR/RULER retrieval percentage published — no long-context retrieval score found; AA-LCR 80.0% is the closest long-context reasoning proxy.

FlashX-specific verified serving facts (not capability benchmarks):

- Output speed up to **~200 tokens/s** vs 51.4 t/s for stock Flash on Z.ai's API (ApX; AA Flash page) — the core FlashX claim.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 at 84.3% sits just under the 88%+ frontier band and GDPval-AA 1773 clears the 1750 frontier reference, with Toolathlon 78.4% strong; capped by Tau3-Banking 47.2%, Agents' Last Exam 26.3% and AA Terminal-Bench 4.0 32.8%, and by the proxy nature of the numbers.
- **Reasoning: 85/100.** GPQA Diamond 86.4–91.2% and HLE 39.9% (tools 55.3%) sit at the frontier's edge, Intelligence Index 42 is well above the 20–35 mid band; capped by CritPt 15.4%, MLCR-AA 51.1% and the absence of verified ≥95% 1M retrieval.
- **Context window: 95/100.** 1M (1,048,576) window verified on the shared weights (Artificial Analysis, ApX) — top tier; not 100 because no ≥98% retrieval-at-512K measurement was published.
- **Multimodal: 78/100.** Image input verified with strong document/chart scores (CharXiv 89.4%, OfficeQA Pro 62.4%) and MMVU 80.5% suggests video understanding; capped at text-only output, no audio, and video-in not independently harness-verified.
- **Coding: 83/100.** SWE-bench 92.0% (Vals) and LiveCodeBench 80.5% with Terminal-Bench 2.1 84.3% are near-frontier; capped by DeepSWE 63.4% (below the 74% frontier ref), SciCode 51.6% (below the 55% ref) and FrontierSWE v2 18.1%.
- **Cost efficiency: 93/100.** $0.37/$1.25 per 1M is materially cheaper than the ~$1.25/$4.25 class (~88) but pricier than stock Flash at $0.15/$0.50 (~97); the speed premium buys ~4x throughput.
- **Overall Score: 86/100.** (88 + 85 + 95 + 78 + 83) / 5 = 85.8 → 86. Best-fit recommendation: high-speed multimodal agentic coding and long-context agent loops where Flash-class quality is enough and token velocity matters.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Artificial Analysis, BenchLM, ApX, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores. Capability numbers are same-weights GLM-5.3-Flash proxies — FlashX ships identical weights at higher serving speed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
