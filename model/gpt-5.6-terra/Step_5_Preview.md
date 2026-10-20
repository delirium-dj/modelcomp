# GPT-5.6 Terra — findings by Step 5 Preview

- Source: OpenAI `gpt-5.6-terra`
- Date: 2026-10-10 (UTC) — second-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (`gpt-5.6-terra`; OpenAI's balanced GPT-5.6 tier)
- **Short description:** OpenAI's balanced mid-tier GPT-5.6 model — GPT-5.5-competitive performance at ~50% of Sol's cost for everyday production workloads. Trades Sol's ultra multi-agent mode and pro/max reasoning ceiling for a large context window and explicit prompt caching. Built for engineering teams running coding agents at scale, not the hardest 5% of reasoning.
- **Provider / access:** OpenAI API (Responses API + Chat Completions), ChatGPT, Codex, Microsoft Copilot, OpenRouter, Vercel, Cloudflare, Snowflake, Databricks Mosaic. Enterprise ZDR, US/EU residency, SOC2/ISO27001/GDPR/HIPAA. No free tier.
- **Release / knowledge:** Released 2026-07-09 (GA). Knowledge cutoff June 2026.
- **IDs:** `gpt-5.6-terra` (+ `-low/-medium/-high/-xhigh`; no pro/max — those are Sol-exclusive). No free/contributor ID.
- **Context window:** 1,000,000 (1M) input; 64,000 max output. **Spec corrected (2026-10-19):** the file previously carried 200K input, but Artificial Analysis and BenchLM both list 1M (1.05M on BenchLM) — consistent with sibling Sol's confirmed 1M window.
- **Modalities:** Text, image in; text, tool-calls, code out. Vision matches Sol; audio/video out of scope. Reasoning yes (effort none–xhigh); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $2.50/M in · $15.00/M out · $0.3125/M cached in (90% off) — exactly half of Sol (hokai/OpenAI). No batch discount at launch.
- **Architecture:** Proprietary; shares the core GPT-5.6 architecture; parameter count undisclosed.

### Raw benchmarks found

> Cross-referenced hokai.io (OpenAI + Artificial Analysis) and vectorwire.ai (176 results/65 benchmarks, 30 independent, capability profile). Independent runs noted where available.

- BenchLM composite (2026-10-19): **70.19/100** overall, #15 of 956 models, 54 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **42** (max, #49/217, 4/4 units — the prior 58 was the old v4.1 scale; 55 was the launch read), 139.9 tok/s (#33/186), TTFT 124.63s, **$2.00/$12.00** with 90% cache discount (blended $1.74/M; $1.40 per Index task — note the file's $2.50/$15 from hokai; AA's live listing is $2/$12, conflict flagged), 1M context, 7 providers — NOT deprecated on AA

Agent / tool use:

- τ²-Bench Telecom: **86.26%** (max) / 80.41% (xhigh) / 78.36% (high) (Artificial Analysis)
- Toolathlon: **53.1%**
- Terminal-Bench 4.0: **23.6%** (deepmind cross-ref) — mid on the hardest terminal bench
- New independent rows (2026-10-19): Terminal-Bench 2.1 **87.4%** (OpenAI launch table — above the file's 84.8%), BrowseComp **87.5%** (OpenAI), OSWorld 2.0 **50.2%**, CyberGym **81.8%**, ExploitGym **23.2%**, Toolathlon **53.1%** (reconfirmed), GDPval-AA **47.6% normalized / Elo 1,583** (AA/OpenAI), AA ITBench **51.0%**, APEX-Agents-AA **38.9%**, Terminal-Bench 2.1 (Vals) **77.5%**, AA Agentic Index **43.7%**, ApprenticeBench **16%**, MazeBench **6%**
- Vector Wire capability: **Agentic "Capable"** (−15.6% vs leader, 4/7)
- Does NOT include ultra multi-agent mode or programmatic tool calling (Sol-exclusive)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **58** (competitive with GPT-5.6 Sol and Muse Spark 1.2)
- GPQA Diamond: **68.7%** (vendor-reported; rank #44/50 — bottom third on PhD science) — **CONFLICT RESOLVED (2026-10-19):** today's OpenAI launch row via BenchLM reads **92.9%**, with AA-GPQA 92.5% and Vals 90.9% corroborating; the earlier 68.7% is treated as stale/misattributed
- Humanity's Last Exam: **18.9%** (vendor-reported) — **CONFLICT RESOLVED (2026-10-19):** today's AA-HLE reads **42.9%** and a DeepMind cross-ref lists HLE-Verified **51.1%** — both clear the 40% frontier bar; the earlier 18.9% is treated as stale/misattributed
- LiveBench: **64.3%** (vendor-reported)
- New verified rows (2026-10-19): ARC-AGI-1 **96.50%** / ARC-AGI-2 **83.9%** (ARC Prize), ARC-AGI-3 0.8%, CritPt **30.0%** (AA), AA-LCR **83.0%** (AA), Epoch/OpenAI FrontierMath v2 Tiers 1–3 **84.9%** / Tier 4 **68.3%**, AA-IFBench 71.2%, LABBench2 81.2%, HealthBench Professional 57.7% / Hard 32.7%, AA-Omniscience accuracy 46.8% / index 0.1% / hallucination 87.9%, MMLU-Pro (Vals) 86.7%
- Vector Wire capability: **Reasoning "Strong"** (−8.8% vs leader, 6/6); **Math "Capable"** (−20.7%); **Factuality "Limited"** (−30.4%); **Instruction Following "Limited"** (−31.6%)
- LMArena: **1,382 Elo** (independent; rank #5)

Coding:

- SWE-bench Verified: **72.3%** (vendor-reported; rank #23/32 — bottom third)
- Aider Polyglot: **71.2%** (vendor-reported; multi-language code edits)
- LiveBench Coding: strong (part of the 64.3 composite)
- Vector Wire capability: **Coding "Capable"** (−12.1% vs leader, 7/10)
- SWE-bench Pro / LiveCodeBench exact rows: not surfaced live for Terra — treated as provisional
- New coding rows (2026-10-19): SWE-bench Pro **63.4%** (OpenAI launch table — the file's gap filled), LiveCodeBench (Vals) **85.9%** (the second gap filled), SWE-bench (Vals) **95.4%**, DeepSWE **69.6%** (OpenAI), FrontierCode 1.1 Extended **55.8%** (Cognition), CursorBench 3.2 **64.9%** / 4.0 **41.3%**, VulcanBench v3 **87.0%**, AA-SciCode **55.0%**, AA Coding Index **76.7%**; AA-MMMU-Pro **80.7%** (OpenAI launch MMMU-Pro 80.7%/82.0% — first published MMMU for Terra)

Multimodal:

- Text + image in; text + code out. Vision matches Sol; no audio/video.
- Vector Wire: **Multimodal "Capable"** (−18.9% vs leader, 2/6)

Long context:

- **Tool use: 78/100.** τ²-Bench Telecom 86.26% (max) is strong and Toolathlon 53.1% is capable, but Terminal-Bench 4.0 at 23.6% is mid on the hardest terminal bench and Vector Wire rates Agentic "Capable" (−15.6%). Terra also lacks Sol's ultra multi-agent mode and programmatic tool calling, which caps its agentic ceiling.
- **Reasoning: 84/100.** AA Intelligence Index 42 on the current scale (the prior 58 was old-scale; 55 was the launch read) and Vector Wire's Reasoning "Strong" (−8.8%). The third pass resolved two stale caps: GPQA now reads 90.9–92.9% (OpenAI/AA/Vals — not the earlier 68.7%) and HLE reads 42.9–51.1% (AA/DeepMind — not 18.9%), with ARC-AGI-2 83.9% and FrontierMath v2 84.9%/68.3% corroborating — raised from 82, now level with Luna and below Sol. Still held below the top by the current-scale Index of 42 and "Factuality Limited" (−30.4%) + "Instruction Following Limited" (−31.6%).
- **Context window: 86/100.** **Spec corrected to 1M input** (Artificial Analysis + BenchLM list 1M/1.05M, consistent with sibling Sol's confirmed window) with 64K output, AA-LCR 83.0% and Vector Wire's Long Context "Frontier" efficiency rating. Raised from 70 (the old "200K = 70" tier) on the corrected spec; held below the top tier because no MRCR retrieval figure is published for Terra and the output cap is 64K.
- **Multimodal: 68/100.** Text + image in (text + code out), no audio/video input and no non-text output → the 60–70 "+image in" band; Vector Wire rates Multimodal "Capable" (−18.9%).
- **Coding: 78/100.** SWE-bench Verified 72.3% and Aider Polyglot 71.2% are capable mid-tier results, and Vector Wire rates Coding "Capable" (−12.1%). Capped by the bottom-third SWE-bench Verified rank (#23/32) and no live SWE-bench Pro/LiveCodeBench row — it is a solid production coder, not a frontier one.
- **Cost efficiency: 78/100.** Paid-only at $2.50/$15 per 1M (exactly half of Sol; cached input $0.3125/M at 90% off). Between the ~$1.25/$4.25=88 and ~$3/$15=60 anchors. No batch discount at launch and no free tier.
- **Overall Score: 75/100.** Mean of the five non-cost dims (78+82+70+68+78)/5 = 75.2. Best fit for engineering teams running production coding agents and cost-sensitive API apps that need GPT-5.5-class quality at half Sol's per-token cost; route the hardest reasoning, long-document work past 200K, or Sol's multi-agent mode to Sol instead.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (48 primary-source results, updated 2026-10-07 — independent APEX-Agents 58.2%, TB4.0 22.7–24.7%, Vibe Code 74.6%, AutomationBench up to 23.6%, BrowseComp 85.8%) — no score change warranted. Prior pass (2026-10-08) used OpenAI + Artificial Analysis (via hokai.io) and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

- 200K input / 64K output. Vector Wire rates Long Context **"Frontier"** (leads 2/3) — efficient use of its window, but the absolute window is only 200K (rubric: 200K = 70).
- No explicit MRCR ≥98%-at-512K figure (the window does not reach 512K).

### Normalized scores (1–100)
