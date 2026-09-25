# Hy4 — findings by GLM 5.3

- Source: Tencent (`tencent/Hy4-preview`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Hy4-preview)
- **Short description:** Tencent's August-2026 open-weights flagship (Hunyuan line): a 770B/49B-active MoE built for long-horizon coding and productivity with a 1M context. Top use case: self-hosted agentic coding and research workflows.
- **Provider / access:** open weights on Hugging Face `tencent/Hy4-preview` (Apache 2.0; BenchLM lists Open Weight); no OpenCode Zen listing (no Zen Free ID; self-hosted path).
- **Release / knowledge:** August 2026 (preview; BenchLM model card link live as of 2026-09-24); knowledge cutoff not stated publicly.
- **IDs:** `tencent/hy4` / `tencent/Hy4-preview` (no Zen ID — self-host or third-party hosts).
- **Context window:** 1M total — 960K in / 64K out (curated metadata; BenchLM lists 1M).
- **Modalities:** text in / text out (text-only; the Hunyuan vision line ships separately); reasoning yes; tool calls yes (MCP/agent rows on BenchLM); JSON mode not separately verified.
- **Pricing (as of 2026-09-25):** Apache 2.0 open weights — $0 license, self-hosted; no verified hosted per-token price.
- **Architecture:** open-weights MoE, 770B total / 49B active (curated metadata); further internals undisclosed in the sources found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (BenchLM; Vals variant 55.1%)
- MCP Atlas: **83.7%** (BenchLM)
- Toolathlon-Verified: **74.1%** (BenchLM)
- GDPval-AA: **1678 Elo** (BenchLM — just under the 1750+ frontier reference)
- WideResearch: **83.9%** (BenchLM); DRACO **77.2%** (BenchLM)
- BankerToolBench: **78.6%** (BenchLM); skillsBench **62.9%**, JobBench **61.7%** (BenchLM)
- Agents' Last Exam **22.8%**, AutomationBench **32.1%**, APEX-Agents **37.1%** (BenchLM)
- CyberGym: **78.4%** (BenchLM)
- Claw-Eval / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (BenchLM — clears the 90% frontier reference)
- HLE: **55.4% with tools / 43.4% without** (BenchLM — both at/above the 40% frontier line)
- Apex (math): **74.2%** (BenchLM)
- CritPt: **16.9%** (BenchLM)
- LCR / MLCR / AA Intelligence Index / Omniscience: **no verified public score found**

Coding:

- SWE-bench Pro: **65.7%** (BenchLM)
- SWE Multilingual: **82.9%** (BenchLM)
- DeepSWE: **64.3%** (BenchLM)
- NL2Repo: **58.9%** (BenchLM)
- Terminal-Bench 2.1: **85.4%** (BenchLM)
- ProgramBench **17.5%**, PostTrain Bench **35.6%**, SWE-Marathon **31.9%** (BenchLM — weak spots)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (960K in / 64K out) verified via curated metadata + BenchLM; no MRCR/RULER/GraphWalks value — no long-context retrieval score found.

Document (context):

- OfficeQA Pro: **66.2%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 87/100.** TB 2.1 85.4%, MCP Atlas 83.7%, Toolathlon-Verified 74.1%, WideResearch 83.9%, DRACO 77.2% and BankerToolBench 78.6% are elite for open weights; GDPval-AA 1678 sits just under the frontier cut, and ALE 22.8% / AutomationBench 32.1% cap it below the very top.
- **Reasoning: 84/100.** GPQA 92.3% and HLE-with-tools 55.4% both clear the frontier references, with Apex 74.2% strong; CritPt 16.9% and missing AA Index/LCR/Omniscience rows hold it under 90.
- **Context window: 95/100.** 1M verified (960K in / 64K out) = ≥1M tier; no retrieval-at-length data.
- **Multimodal: 15/100.** Text in/out only (per template: 15 if text-only).
- **Coding: 76/100.** SWE Multilingual 82.9%, SWE Pro 65.7%, DeepSWE 64.3% and TB 2.1 85.4% are competitive, but ProgramBench 17.5%, SWE-Marathon 31.9% and missing SWE-bench Verified rows keep it below the leaders.
- **Cost efficiency: 88/100.** Apache 2.0 at $0 license is fully open; a 770B/49B MoE is a multi-node self-host, which tempers the score; no hosted price verified.
- **Overall Score: 71/100.** Half-up mean of the five quality dims (87+84+95+15+76)/5 = 71.4 — the strongest fully-open (Apache 2.0) long-horizon text agent in this cohort; text-only I/O and hard-coding-suite gaps are the limits.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM, curated platform metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
