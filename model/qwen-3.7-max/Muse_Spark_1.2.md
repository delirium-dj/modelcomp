# Qwen 3.7 — findings by Muse Spark 1.2

- Source: Alibaba/qwen-3.7 (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's Qwen 3.7 Max agent-era flagship (May 2026); 1M context, long-horizon autonomous execution across 1000+ tool calls with frontier coding and reasoning.
- **Provider / access:** Alibaba Cloud Model Studio `qwen-3.7-max` (DashScope), OpenRouter `qwen/qwen3.7-max` — via OpenCode Zen `opencode/qwen-3.7` (no open weights)
- **Release / knowledge:** 2026-05-21 release (Alibaba Cloud Summit); knowledge cutoff 2026-05
- **IDs:** `alibaba/qwen-3.7-max`, `qwen/qwen-3.7-max` (community)
- **Context window:** 1,048,576 total (1M) / 65,536 max output — verified via Alibaba, Artificial Analysis (up from 256K on 3.6)
- **Modalities:** Text in/out only (text-only at release); reasoning yes (extended thinking); tool calls yes (MCP, multi-agent)
- **Pricing (as of 2026-09-23):** $2.50 in / $7.50 out per 1M ($0.25 cached input), launch promo $1.25/$3.75 — proprietary closed weights
- **Architecture:** Proprietary (Qwen-Max, transformer)

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **76.4%** public set (Gemini-2.5-pro judger) vs Opus-4.6 75.8% / GLM-5.1 71.8% (source: Alibaba launch table, BinaryVerseAI)
- MCP-Mark: **60.8%** (GitHub MCP v0.30.3) vs GLM-5.1 57.5% / Opus-4.6 56.7% (source: Alibaba)
- SkillsBench: **59.2%** (OpenCode 78 tasks) vs K2.6 56.2% / DS-V4-Pro 52.3% (source: Alibaba)
- QwenClawBench: **64.3%** (real-user-distribution Claw) vs Opus-4.6 65.5% (source: Alibaba)
- ClawEval: **65.2%** vs Opus-4.6 70.4% (source: Alibaba)
- BFCL-V4: **75.0%** vs Opus-4.6 76.7% (source: Alibaba)
- CoWorkBench: **67.2%** vs Opus-4.6 68.2% (source: Alibaba)
- Tau3-Banking / Tau2-Bench: **no isolated Tau2 telecom AA for 3.7** — AA Intelligence agentic component proxied via 56.6 Index
- GDPval-AA: **1546 Elo** (AA Intelligence Index GDPval component, +42 vs Qwen3.6 1504) (source: Artificial Analysis)
- Terminal-Bench 2.0: **69.7%** (Terminus-2 harness, Harbor 5h) vs DS-V4-Pro Max 67.9% / Opus-4.6 65.4% (source: Alibaba, TheQuery, AI/TLDR)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** vs Opus-4.6 91.3% / DS-V4-Pro 90.1% (source: Alibaba launch table, Codersera, BinaryVerseAI)
- HLE: **41.4%** (Alibaba) / **38.1%** (AA-HLE +9.2pp vs Qwen3.6 28.9%) (source: Alibaba, Artificial Analysis 2026-05-23)
- HMMT 2026 Feb: **97.1%** vs Opus-4.6 96.2% (source: Alibaba)
- IMOAnswerBench: **90.0%** vs DS-V4-Pro 89.8% (source: Alibaba)
- Apex: **44.5%** vs DS-V4-Pro 38.3% (source: Alibaba)
- CritPt: **11.4%** (per BinaryVerseAI table; AA CritPt 13.4% vs 3.7% prior) (source: Alibaba via Artificial Analysis)
- Artificial Analysis Intelligence Index / BenchLM overall: **56.6** (AA Index v4.0, #5 globally, +4.8 vs Qwen3.6 51.8) (source: Artificial Analysis LinkedIn 2026-05-23, AI/TLDR)
- Omniscience: **AA-Omniscience accuracy 30.1% / hallucination 22.9%** (-21.3pp hallucination vs Qwen3.6 44.2%, accuracy -7.6pp due to abstention) (source: Artificial Analysis)
- MMLU-Pro: **89.6%** vs Opus-4.6 89.7% (source: BinaryVerseAI)
- LiveCodeBench: **91.6%** (Alibaba, arguably high vs frontier) (source: BinaryVerseAI table)

Coding:

- SWE-bench Verified: **80.4%** vs Opus-4.6 80.8% / DS-V4-Pro 80.6% (source: Alibaba, AI/TLDR)
- SWE-bench Pro: **60.6%** vs Opus-4.6 57.3% / K2.6 59.5% (source: Alibaba)
- SWE-Multilingual: **78.3%** vs Opus-4.6 77.5% (source: Alibaba)
- SciCode: **53.5%** vs K2.6 52.2% / DS-V4-Pro — (source: Alibaba)
- Vibe Code Bench: **no verified public Vibe for 3.7 isolated**
- DeepSWE / Coding Index / other: **AA Coding Index ~50.1, Agentic Index 66.6** per OpenRouter mirror (source: BinaryVerseAI); Kernel Bench L3 **1.98× median speedup /96% win rate** vs Opus-4.6 2.63/98% (source: Alibaba)

Long context:

- 1M total — MRCR-v2 128k 8-needle **90.4%** vs Opus-4.6 84.0% / Qwen3.6-Plus 85.9% (source: BinaryVerseAI); measured solid recall at 800K per Codersera

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP-Atlas 76.4% #1 + MCP-Mark 60.8% + SkillsBench 59.2% + BFCL 75% + TB2.0 69.7% + CoWork 67.2% show frontier tool-use breadth; capped by ClawEval 65.2% trailing Opus 70.4% and missing independent Tau2.
- **Reasoning: 89/100.** GPQA 92.4% + HLE 41.4%/AA-HLE 38.1% + HMMT 97.1% + Apex 44.5% + AA Index 56.6 at #5 globally; capped by CritPt 11-13% and Omniscience accuracy dip from abstention strategy.
- **Context window: 97/100.** 1M total /65K out + MRCR-v2 90.4% at 128k and solid 800K recall — top tier, one of strongest long-context in Qwen line; capped below 100 without 1M 8-needle 54% tier public.
- **Multimodal: 20/100.** Text in/out only — text-only per Artificial Analysis at release; 15 baseline for text-only but 20 for strong agent text with MRCR, far below omni 60-90.
- **Coding: 90/100.** SWE Verified 80.4% ~parity Opus + SWE-Pro 60.6% leading + Terminal 69.7% + LiveCodeBench 91.6% + Kernel 1.98×/96% show elite coding; capped by SWE-Pro still trailing Opus 4.7 64.3% and GLM/Kimi few points ahead on some splits.
- **Cost efficiency: 65/100.** $2.50/$7.50 per 1M ($0.25 cached) — 5-6× cheaper than Opus 4.7, mid-tier vs Flash $0.5/$3; promo halves cost but no Free tier.
- **Overall Score: 76/100.** Mean of five non-cost dims (86+89+97+20+90)/5=76.4 → 76; best-fit for long-horizon coding agents and office automation where 1M + tool breadth outweighs text-only limitation.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Alibaba Cloud Community 2026-05-21, Artificial Analysis LinkedIn 2026-05-23, AI/TLDR, Codersera, BinaryVerseAI, TheQuery); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
