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
- **Context window:** 200,000 (200K) input; 64,000 max output.
- **Modalities:** Text, image in; text, tool-calls, code out. Vision matches Sol; audio/video out of scope. Reasoning yes (effort none–xhigh); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $2.50/M in · $15.00/M out · $0.3125/M cached in (90% off) — exactly half of Sol (hokai/OpenAI). No batch discount at launch.
- **Architecture:** Proprietary; shares the core GPT-5.6 architecture; parameter count undisclosed.

### Raw benchmarks found

> Cross-referenced hokai.io (OpenAI + Artificial Analysis) and vectorwire.ai (176 results/65 benchmarks, 30 independent, capability profile). Independent runs noted where available.

Agent / tool use:

- τ²-Bench Telecom: **86.26%** (max) / 80.41% (xhigh) / 78.36% (high) (Artificial Analysis)
- Toolathlon: **53.1%**
- Terminal-Bench 4.0: **23.6%** (deepmind cross-ref) — mid on the hardest terminal bench
- Vector Wire capability: **Agentic "Capable"** (−15.6% vs leader, 4/7)
- Does NOT include ultra multi-agent mode or programmatic tool calling (Sol-exclusive)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **58** (competitive with GPT-5.6 Sol and Muse Spark 1.2)
- GPQA Diamond: **68.7%** (vendor-reported; rank #44/50 — bottom third on PhD science)
- Humanity's Last Exam: **18.9%** (vendor-reported) — well below the 40% frontier bar
- LiveBench: **64.3%** (vendor-reported)
- Vector Wire capability: **Reasoning "Strong"** (−8.8% vs leader, 6/6); **Math "Capable"** (−20.7%); **Factuality "Limited"** (−30.4%); **Instruction Following "Limited"** (−31.6%)
- LMArena: **1,382 Elo** (independent; rank #5)

Coding:

- SWE-bench Verified: **72.3%** (vendor-reported; rank #23/32 — bottom third)
- Aider Polyglot: **71.2%** (vendor-reported; multi-language code edits)
- LiveBench Coding: strong (part of the 64.3 composite)
- Vector Wire capability: **Coding "Capable"** (−12.1% vs leader, 7/10)
- SWE-bench Pro / LiveCodeBench exact rows: not surfaced live for Terra — treated as provisional

Multimodal:

- Text + image in; text + code out. Vision matches Sol; no audio/video.
- Vector Wire: **Multimodal "Capable"** (−18.9% vs leader, 2/6)

Long context:

- **Tool use: 78/100.** τ²-Bench Telecom 86.26% (max) is strong and Toolathlon 53.1% is capable, but Terminal-Bench 4.0 at 23.6% is mid on the hardest terminal bench and Vector Wire rates Agentic "Capable" (−15.6%). Terra also lacks Sol's ultra multi-agent mode and programmatic tool calling, which caps its agentic ceiling.
- **Reasoning: 82/100.** AA Intelligence Index 58 (competitive with GPT-5.6 Sol) and Vector Wire's Reasoning "Strong" (−8.8%) are solid. Capped hard by HLE 18.9% (well below the 40% frontier bar), GPQA 68.7% (rank #44/50, bottom third), and "Factuality Limited" (−30.4%) + "Instruction Following Limited" (−31.6%) — a mid-tier reasoner, not a frontier one.
- **Context window: 70/100.** 200K input / 64K output — squarely in the rubric's "200K = 70" tier. Although Vector Wire rates its long-context efficiency "Frontier" (leads 2/3), the absolute window is only 200K, so it cannot score higher on the window-size tier.
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
